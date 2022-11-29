<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once $_SERVER['DOCUMENT_ROOT'].'/_application/controllers/adminpanel/base_admin.php';

class Main extends BaseAdmin_Controller{

    public function index() {
        $this->recommend();
        return;
    }

    /**
     * 종목추천 리스트
    */
    public function recommend() {
        $this->load->model(DBNAME.'/recommend_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->get();

        $data = array();
        $active_map = $this->recommend_tb_model->getActiveMap();
        $data['active_map_sel'] = $this->common->genJqgridOption($active_map);
        $data['active_map'] = $this->common->genJqgridOption($active_map, true);

        $use_chart_map = $this->recommend_tb_model->getUseChartMap();
        $data['use_chart_map_sel'] = $this->common->genJqgridOption($use_chart_map);
        $data['use_chart_map'] = $this->common->genJqgridOption($use_chart_map, true);

        $endtype_map = $this->recommend_tb_model->getEndTypeMap();
        $data['endtype_map_sel'] = $this->common->genJqgridOption($endtype_map);

        if(isset($request['mode']) && $request['mode'] == 'list') {
            // ajax reqeust. ==> grid list data 

            $page = $this->input->get('page');
            $limit = $this->input->get('rows');
            $_search = $this->input->get('_search');

            $params = array();
            $extra = array();

            if(isset($_GET['filters'])){
                $filters = $_GET['filters'];
                $params = $this->common->filter_to_params($filters, $_search, array('rc_id','tkr_close','rc_recom_price','rc_giveup_price','rc_goal_price','rc_display_date','rc_enddate','rc_view_count','rc_created_at','rc_updated_at'));
            }

            if(isset($params['=']['rc_ticker']) && strlen($params['=']['rc_ticker']) > 0) {
                $params['=']['rc_ticker'] = strtoupper($params['=']['rc_ticker']);
            }

            $params['join']['admin_tb'] = 'a_id = rc_admin_id';
            $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
            
            $extra['fields'] = array('rc_id','rc_ticker','rc_recom_price','rc_giveup_price','rc_goal_price','rc_use_chart','rc_display_date','rc_view_count','rc_is_active','rc_endtype','rc_enddate','rc_created_at','rc_updated_at','a_loginid','tkr_name','tkr_close','tkr_rate_str');
            if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
                $order_by = $request['sidx']." ".$request['sord'];
                $extra['order_by'] = array($order_by);
            }

            $extra['offset'] = ($page-1)*$limit;
            $extra['limit'] = $limit;

            $list = $this->recommend_tb_model->getList($params, $extra)->getData();

            $totalCount = $this->recommend_tb_model->getCount($params)->getData();

            $json_data = new stdClass;
            $json_data->rows = array();
            foreach($list as $k=>$r){
                $r['rc_ticker'] = $r['rc_ticker'].'('.$r['tkr_name'].')';
                $r['tkr_close'] = $r['tkr_close'].' '.$r['tkr_rate_str'];
                $r['rc_is_active'] = $active_map[$r['rc_is_active']];
                $r['rc_use_chart'] = $use_chart_map[$r['rc_use_chart']];
                $r['rc_endtype'] = $endtype_map[$r['rc_endtype']];

                $json_data->rows[$k]['id'] = $r['rc_id'];
                $json_data->rows[$k]['cell'] = $r;
            }

            $json_data->total = ceil($totalCount / $limit);
            $json_data->page = $page;
            $json_data->records = $totalCount;

            echo json_encode($json_data);
            return;
        }
        if(isset($request['mode']) && $request['mode'] == 'edit') {
            $request = $this->input->post();

            if(isset($request['oper']) && $request['oper'] == 'add') {
                $data = $request;
                unset($data['oper']);
                unset($data['id']);

                $data['rc_created_at'] = date('Y-m-d H:i:s');
                $data['rc_updated_at'] = date('Y-m-d H:i:s');

                // todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

                if($this->recommend_tb_model->doInsert($data)->isSuccess() == false) {
                    print_r($this->recommend_tb_model->getErrorMsg());
                    return;
                }

                $act_key = $this->recommend_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'recommend_tb');
                return;
            }

            if(isset($request['id']) && isset($request['ids']) == false) {
                // 1 row 수정
                if(isset($request['edit_action_is']) && $request['edit_action_is'] == 'DEL') {
                    // 삭제 상태로 셋팅. 삭제.
                    if($this->recommend_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->recommend_tb_model->getData();
                        $this->recommend_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'recommend_tb');
                    }
                    return;
                }
                
                // row 수정
                $request['rc_updated_at'] = date('Y-m-d H:i:s');
                //todo. Update시 추가 셋팅값 여기서 채우기. 함승목

                $this->recommend_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'recommend_tb');
                return;
            }

            // 일괄 상태변경

            $ids = explode(',',$request['ids']);

            if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
                $data = $request['multi_update_field_data_map'];
                foreach($ids as $id) {
                    if($request['edit_action_is'] == 'DEL') {
                        if($this->recommend_tb_model->get($id)->isSuccess()){
                            $del_data = $this->recommend_tb_model->getData();
                            $this->recommend_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'recommend_tb');
                        }
                    } else {
                        $this->recommend_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'recommend_tb');
                    }
                }
                echo 'success';
            } else {
                echo 'fail';
            }
            return;

        }

        $this->_view('main/recommend', $data);
    }

    /**
     * 종목추천 등록/수정 폼
    */
    public function recommend_detail($id=0) {
        $this->load->model(array(
            DBNAME.'/recommend_tb_model',
            DBNAME.'/admin_tb_model'
        ));
        $this->load->helper('form');

        if( ! is_numeric($id)) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/recommend?keep=yes');
            return;
        }

        $id = intval($id);

        $assign = array();
        $assign['mode'] = 'insert';
        $assign['mode_kor'] = '등록';
        $assign['pk'] = 'rc_id';

        if($id > 0) {
            $this->recommend_tb_model->get($id);
            if($this->recommend_tb_model->isSuccess() == FALSE) {
                $this->common->alert('pk '.$id.' is empty.');
                $this->common->locationhref('/adminpanel/main/recommend?keep=yes');
                return;
            }
            $assign['mode'] = 'update';
            $assign['mode_kor'] = '수정';
            $values = $this->recommend_tb_model->getData();
            foreach($values as $field => &$value) {
                switch($field) {
                    // todo. 디폴트값 설정은 여기서
                    /*
                       case 'g_status' : 
                       $value = form_dropdown('dr_groups[]', $user_group_sel, $selected_groups, "multiple style='height:200px;width:215px;' required");
                       break;
                     */
                    default : 
                        $value = htmlspecialchars($value);
                }
            }

            $assign['display_date'] = date('Y-m-d', strtotime($values['rc_display_date']));
            $assign['display_time'] = date('H:i', strtotime($values['rc_display_date']));
            $assign['values'] = $values;

            $assign['admin_data'] = $this->admin_tb_model->get($values['rc_admin_id'])->getData();

        } else {
            // insert
            $fields = $this->recommend_tb_model->getFields();
            $values = array();
            foreach($fields as $field) {
                switch($field) {
                    case 'rc_use_chart' : 
                       $values[$field] = 'YES';
                       break;
                    case 'rc_is_active' : 
                       $values[$field] = 'YES';
                       break;
                    case 'rc_endtype' : 
                       $values[$field] = 'ING';
                       break;
                    default : 
                        $values[$field] = '';
                }
            }
            $assign['display_date'] = '';
            $assign['display_time'] = '';
            $assign['values'] = $values;
        }

        $assign['select_rc_endtype'] = form_dropdown('rc_endtype', $this->recommend_tb_model->getEndTypeMap(), $values['rc_endtype'], 'id="rc_endtype"');

        $active_map = $this->recommend_tb_model->getActiveMap();
        $assign['active_map'] = $active_map;

        $use_chart_map = $this->recommend_tb_model->getUseChartMap();
        $assign['use_chart_map'] = $use_chart_map;
        $this->_view('main/recommend_detail', $assign);
    }

    /**
     * 종목추천 등록/수정 처리 
    */
    public function recommend_process() {
        $this->load->model(array(
            DBNAME.'/recommend_tb_model',
            DBNAME.'/mri_tb_model'
        ));
        $request = $this->input->post();
        $request = array_map('trim', $request);

        $sess = $this->session->userdata('admin');

        if( ! (is_array($request) && in_array($request['mode'], array('insert', 'update', 'delete')))) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/recommend?keep=yes');
            return;
        }

        if( ! (isset($request['rc_ticker']) && strlen($request['rc_ticker']) > 0)) {
            $this->common->alert('종목명을 입력하세요.');
            $this->common->historyback();
            return;
        }

        if( ! (
                is_numeric($request['rc_recom_price'])
                && is_numeric($request['rc_giveup_price'])
                && is_numeric($request['rc_goal_price'])
        )) {
            $this->common->alert('추천가/손절가/목표가 는 숫자만 입력하세요.');
            $this->common->historyback();
            return;
        }

        $rc_ticker = strtoupper($request['rc_ticker']);
        if( ! $this->mri_tb_model->get($rc_ticker)->isSuccess()) {
            $this->common->alert('종목명이 유효하지 않습니다.');
            $this->common->historyback();
            return;
        }

        $mri_data = $this->mri_tb_model->getData();

        if($mri_data['m_close'] <= $request['rc_giveup_price']) {
            $this->common->alert('손절가는 현재가보다 작아야 합니다.');
            $this->common->historyback();
            return;
        }

        if($mri_data['m_close'] >= $request['rc_goal_price']) {
            $this->common->alert('목표가는 현재가보다 커야 합니다.');
            $this->common->historyback();
            return;
        }

        if(strtotime($request['rc_enddate']) > time()) {
            $this->common->alert('도달일은 미래일 수 없습니다.');
            $this->common->historyback();
            return;
        }
        if($request['rc_endtype'] == 'ING') {
            $request['rc_enddate'] = '0000-00-00';
        }

        $rc_id = $request['rc_id'];
        $display_date = $request['display_date'].' '.$request['display_time'].':00';

        $params = array(
            'rc_ticker' => $rc_ticker,
            'rc_invest_point' => $request['rc_invest_point'],
            'rc_event' => $request['rc_event'],
            'rc_recom_price' => $request['rc_recom_price'],
            'rc_giveup_price' => $request['rc_giveup_price'],
            'rc_goal_price' => $request['rc_goal_price'],
            'rc_endtype' => $request['rc_endtype'],
            'rc_enddate' => $request['rc_enddate'],
            'rc_use_chart' => $request['rc_use_chart'],
            'rc_display_date' => $display_date,
            'rc_is_active' => $request['rc_is_active'],
        );

        if($request['mode'] == 'insert') { 
            $params['rc_admin_id'] = $sess['id'];
            if( ! $this->recommend_tb_model->doInsert($params)->isSuccess()) {
                $this->common->alert('등록 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $rc_id = $this->recommend_tb_model->getData();
            $redirect_url = '/adminpanel/main/recommend_detail/'.$rc_id;

        } else if($request['mode'] == 'update') {
            $params['rc_updated_at'] = date('Y-m-d H:i:s');
            if( ! $this->recommend_tb_model->doUpdate($rc_id, $params)->isSuccess()) {
                $this->common->alert('수정 실패하였습니다.');
                $this->common->historyback();
                return;
            }

            unset($params['rc_invest_point']);
            unset($params['rc_event']);
            $log_array = array();
            $log_array['params'] = $params;
            $this->common->write_history_log($sess, 'UPDATE', $rc_id, $log_array, 'recommend_tb');
            $redirect_url = '/adminpanel/main/recommend_detail/'.$rc_id;

        } else {
            if( ! $this->recommend_tb_model->doDelete($rc_id)->isSuccess()) {
                $this->common->alert('삭제 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $redirect_url = '/adminpanel/main/recommend?keep=yes';
        }


        $this->common->alert('처리되었습니다.');
        $this->common->locationhref($redirect_url);
        return;
    }


    /**
     * 종목분석 리스트
    */
    public function analyze() {
        $this->load->model(DBNAME.'/analysis_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->get();

        $data = array();
        $active_map = $this->analysis_tb_model->getActiveMap();
        $data['active_map_sel'] = $this->common->genJqgridOption($active_map);
        $data['active_map'] = $this->common->genJqgridOption($active_map, true);

        if(isset($request['mode']) && $request['mode'] == 'list') {
            // ajax reqeust. ==> grid list data 

            $page = $this->input->get('page');
            $limit = $this->input->get('rows');
            $_search = $this->input->get('_search');

            $params = array();
            $extra = array();

            if(isset($_GET['filters'])){
                $filters = $_GET['filters'];
                $params = $this->common->filter_to_params($filters, $_search, array('an_id','an_view_count','an_display_date','an_created_at','an_updated_at'));
            }

            if(isset($params['=']['an_ticker']) && strlen($params['=']['an_ticker']) > 0) {
                $params['=']['an_ticker'] = strtoupper($params['=']['an_ticker']);
            }

            $params['join']['admin_tb'] = 'a_id = an_admin_id';
            
            $extra['fields'] = array('analysis_tb.*','a_loginid');

            if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
                $order_by = $request['sidx']." ".$request['sord'];
                $extra['order_by'] = array($order_by);
            }

            $extra['offset'] = ($page-1)*$limit;
            $extra['limit'] = $limit;

            $list = $this->analysis_tb_model->getList($params, $extra)->getData();

            $totalCount = $this->analysis_tb_model->getCount($params)->getData();

            $json_data = new stdClass;
            $json_data->rows = array();
            foreach($list as $k=>$r){
                $r['an_is_active'] = $active_map[$r['an_is_active']];
                $json_data->rows[$k]['id'] = $r['an_id'];
                $json_data->rows[$k]['cell'] = $r;
            }

            $json_data->total = ceil($totalCount / $limit);
            $json_data->page = $page;
            $json_data->records = $totalCount;

            echo json_encode($json_data);
            return;
        }
        if(isset($request['mode']) && $request['mode'] == 'edit') {
            $request = $this->input->post();

            if(isset($request['oper']) && $request['oper'] == 'add') {
                $data = $request;
                unset($data['oper']);
                unset($data['id']);

                $data['an_created_at'] = date('Y-m-d H:i:s');
                $data['an_updated_at'] = date('Y-m-d H:i:s');

                // todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

                if($this->analysis_tb_model->doInsert($data)->isSuccess() == false) {
                    print_r($this->analysis_tb_model->getErrorMsg());
                    return;
                }

                $act_key = $this->analysis_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'analysis_tb');
                return;
            }

            if(isset($request['id']) && isset($request['ids']) == false) {
                // 1 row 수정
                if(isset($request['edit_action_is']) && $request['edit_action_is'] == 'DEL') {
                    // 삭제 상태로 셋팅. 삭제.
                    if($this->analysis_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->analysis_tb_model->getData();
                        $this->analysis_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'analysis_tb');
                    }
                    return;
                }
                
                // row 수정
                $request['an_updated_at'] = date('Y-m-d H:i:s');
                //todo. Update시 추가 셋팅값 여기서 채우기. 함승목

                $this->analysis_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'analysis_tb');
                return;
            }

            // 일괄 상태변경

            $ids = explode(',',$request['ids']);

            if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
                $data = $request['multi_update_field_data_map'];
                foreach($ids as $id) {
                    if($request['edit_action_is'] == 'DEL') {
                        if($this->analysis_tb_model->get($id)->isSuccess()){
                            $del_data = $this->analysis_tb_model->getData();
                            $this->analysis_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'analysis_tb');
                        }
                    } else {
                        $this->analysis_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'analysis_tb');
                    }
                }
                echo 'success';
            } else {
                echo 'fail';
            }
            return;

        }

        $this->_view('main/analyze', $data);
    }

    /**
     * 종목분석 등록/수정 폼
    */
    public function analyze_detail($id=0) {
        $this->load->model(array(
            DBNAME.'/analysis_tb_model',
            DBNAME.'/admin_tb_model'
        ));

        if( ! is_numeric($id)) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/analyze?keep=yes');
            return;
        }

        $id = intval($id);

        $assign = array();
        $assign['mode'] = 'insert';
        $assign['mode_kor'] = '등록';
        $assign['pk'] = 'an_id';

        if($id > 0) {
            $this->analysis_tb_model->get($id);
            if($this->analysis_tb_model->isSuccess() == FALSE) {
                $this->common->alert('pk '.$id.' is empty.');
                $this->common->locationhref('/adminpanel/main/analyze?keep=yes');
                return;
            }
            $assign['mode'] = 'update';
            $assign['mode_kor'] = '수정';
            $values = $this->analysis_tb_model->getData();
            foreach($values as $field => &$value) {
                switch($field) {
                    // todo. 디폴트값 설정은 여기서
                    /*
                       case 'g_status' : 
                       $value = form_dropdown('dr_groups[]', $user_group_sel, $selected_groups, "multiple style='height:200px;width:215px;' required");
                       break;
                     */
                    default : 
                        $value = htmlspecialchars($value);
                }
            }

            $assign['display_date'] = date('Y-m-d', strtotime($values['an_display_date']));
            $assign['display_time'] = date('H:i', strtotime($values['an_display_date']));
            $assign['values'] = $values;

            $assign['admin_data'] = $this->admin_tb_model->get($values['an_admin_id'])->getData();

        } else {
            // insert
            $fields = $this->analysis_tb_model->getFields();
            $values = array();
            foreach($fields as $field) {
                switch($field) {
                    case 'an_is_active' : 
                       $values[$field] = 'YES';
                       break;
                    default : 
                        $values[$field] = '';
                }
            }
            $assign['display_date'] = '';
            $assign['display_time'] = '';
            $assign['values'] = $values;
        }

        $active_map = $this->analysis_tb_model->getActiveMap();
        $assign['active_map'] = $active_map;

        $this->_view('main/analyze_detail', $assign);
    }

    /**
     * 종목분석 등록/수정 처리
    */
    public function analyze_process() {
        $this->load->model(array(
            DBNAME.'/analysis_tb_model',
            DBNAME.'/mri_tb_model'
        ));
        $request = $this->input->post();
        $request = array_map('trim', $request);

        $sess = $this->session->userdata('admin');

        if( ! (is_array($request) && in_array($request['mode'], array('insert', 'update', 'delete')))) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/analyze?keep=yes');
            return;
        }

        if( ! (isset($request['an_ticker']) && strlen($request['an_ticker']) > 0)) {
            $this->common->alert('종목명을 입력하세요.');
            $this->common->historyback();
            return;
        }

        $an_ticker = strtoupper($request['an_ticker']);
        if( ! $this->mri_tb_model->get($an_ticker)->isSuccess()) {
            $this->common->alert('종목명이 유효하지 않습니다.');
            $this->common->historyback();
            return;
        }

        $an_id = $request['an_id'];
        $display_date = $request['display_date'].' '.$request['display_time'].':00';

        $params = array(
            'an_ticker' => $an_ticker,
            'an_content' => $request['an_content'],
            'an_is_active' => $request['an_is_active'],
            'an_display_date' => $display_date,
        );

        if($request['mode'] == 'insert') { 
            $params['an_admin_id'] = $sess['id'];
            if( ! $this->analysis_tb_model->doInsert($params)->isSuccess()) {
                $this->common->alert('등록 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $an_id = $this->analysis_tb_model->getData();
            $redirect_url = '/adminpanel/main/analyze_detail/'.$an_id;

        } else if($request['mode'] == 'update') {
            $params['an_updated_at'] = date('Y-m-d H:i:s');
            if( ! $this->analysis_tb_model->doUpdate($an_id, $params)->isSuccess()) {
                $this->common->alert('수정 실패하였습니다.');
                $this->common->historyback();
                return;
            }

            unset($params['an_content']);
            $log_array = array();
            $log_array['params'] = $params;
            $this->common->write_history_log($sess, 'UPDATE', $an_id, $log_array, 'analysis_tb');
            $redirect_url = '/adminpanel/main/analyze_detail/'.$an_id;

        } else {
            if( ! $this->analysis_tb_model->doDelete($an_id)->isSuccess()) {
                $this->common->alert('삭제 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $redirect_url = '/adminpanel/main/analyze?keep=yes';
        }


        $this->common->alert('처리되었습니다.');
        $this->common->locationhref($redirect_url);
        return;
    }


    /**
     * 탐구생활 리스트
    */
    public function explore() {
        $this->load->model(DBNAME.'/explore_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->get();

        $data = array();
        $active_map = $this->explore_tb_model->getActiveMap();
        $data['active_map_sel'] = $this->common->genJqgridOption($active_map);
        $data['active_map'] = $this->common->genJqgridOption($active_map, true);

        if(isset($request['mode']) && $request['mode'] == 'list') {
            // ajax reqeust. ==> grid list data 

            $page = $this->input->get('page');
            $limit = $this->input->get('rows');
            $_search = $this->input->get('_search');

            $params = array();
            $extra = array();

            if(isset($_GET['filters'])){
                $filters = $_GET['filters'];
                $params = $this->common->filter_to_params($filters, $_search, array('e_id','e_display_date','e_view_count','e_created_at','e_updated_at'));
            }
            $params['join']['admin_tb'] = 'a_id = e_admin_id';
            

            if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
                $order_by = $request['sidx']." ".$request['sord'];
                $extra['order_by'] = array($order_by);
            }

            $extra['fields'] = 'explore_tb.*, a_loginid';
            $extra['offset'] = ($page-1)*$limit;
            $extra['limit'] = $limit;

            $list = $this->explore_tb_model->getList($params, $extra)->getData();

            $totalCount = $this->explore_tb_model->getCount($params)->getData();

            $json_data = new stdClass;
            $json_data->rows = array();
            foreach($list as $k=>$r){
                $r['e_title'] = htmlspecialchars($r['e_title']);
                $r['e_view_count'] = number_format($r['e_view_count']);
                $r['e_is_active'] = $active_map[$r['e_is_active']];

                $thumbnail = '';
                if(strlen($r['e_thumbnail']) > 0) {
                    $thumbnail = '<img src="'.$r['e_thumbnail'].'" style="width:80px;height:80px;" />';
                }
                $r['thumbnail'] = $thumbnail;
                $json_data->rows[$k]['id'] = $r['e_id'];
                $json_data->rows[$k]['cell'] = $r;
            }

            $json_data->total = ceil($totalCount / $limit);
            $json_data->page = $page;
            $json_data->records = $totalCount;

            echo json_encode($json_data);
            return;
        }
        if(isset($request['mode']) && $request['mode'] == 'edit') {
            $request = $this->input->post();

            if(isset($request['oper']) && $request['oper'] == 'add') {
                $data = $request;
                unset($data['oper']);
                unset($data['id']);

                $data['e_created_at'] = date('Y-m-d H:i:s');
                $data['e_updated_at'] = date('Y-m-d H:i:s');

                // todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

                if($this->explore_tb_model->doInsert($data)->isSuccess() == false) {
                    print_r($this->explore_tb_model->getErrorMsg());
                    return;
                }

                $act_key = $this->explore_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'explore_tb');
                return;
            }

            if(isset($request['id']) && isset($request['ids']) == false) {
                // 1 row 수정
                if(isset($request['edit_action_is']) && $request['edit_action_is'] == 'DEL') {
                    // 삭제 상태로 셋팅. 삭제.
                    if($this->explore_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->explore_tb_model->getData();
                        $this->explore_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'explore_tb');
                    }
                    return;
                }
                
                // row 수정
                $request['e_updated_at'] = date('Y-m-d H:i:s');
                //todo. Update시 추가 셋팅값 여기서 채우기. 함승목

                $this->explore_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'explore_tb');
                return;
            }

            // 일괄 상태변경

            $ids = explode(',',$request['ids']);

            if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
                $data = $request['multi_update_field_data_map'];
                foreach($ids as $id) {
                    if($request['edit_action_is'] == 'DEL') {
                        if($this->explore_tb_model->get($id)->isSuccess()){
                            $del_data = $this->explore_tb_model->getData();
                            $this->explore_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'explore_tb');
                        }
                    } else {
                        $this->explore_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'explore_tb');
                    }
                }
                echo 'success';
            } else {
                echo 'fail';
            }
            return;

        }

        $this->_view('main/explore', $data);
    }

    /**
     * 탐구생활 등록/수정 폼
    */
    public function explore_detail($id=0) {
        $this->load->model(array(
            DBNAME.'/explore_tb_model',
            DBNAME.'/admin_tb_model'
        ));

        if( ! is_numeric($id)) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/explore?keep=yes');
            return;
        }

        $id = intval($id);

        $assign = array();
        $assign['mode'] = 'insert';
        $assign['mode_kor'] = '등록';
        $assign['pk'] = 'e_id';

        if($id > 0) {
            $this->explore_tb_model->get($id);
            if($this->explore_tb_model->isSuccess() == FALSE) {
                $this->common->alert('pk '.$id.' is empty.');
                $this->common->locationhref('/adminpanel/main/explore?keep=yes');
                return;
            }
            $assign['mode'] = 'update';
            $assign['mode_kor'] = '수정';
            $values = $this->explore_tb_model->getData();
            foreach($values as $field => &$value) {
                switch($field) {
                    // todo. 디폴트값 설정은 여기서
                    /*
                       case 'g_status' : 
                       $value = form_dropdown('dr_groups[]', $user_group_sel, $selected_groups, "multiple style='height:200px;width:215px;' required");
                       break;
                     */
                    default : 
                        $value = htmlspecialchars($value);
                }
            }

            $assign['display_date'] = date('Y-m-d', strtotime($values['e_display_date']));
            $assign['display_time'] = date('H:i', strtotime($values['e_display_date']));
            $assign['values'] = $values;

            $assign['admin_data'] = $this->admin_tb_model->get($values['e_admin_id'])->getData();

        } else {
            // insert
            $fields = $this->explore_tb_model->getFields();
            $values = array();
            foreach($fields as $field) {
                switch($field) {
                    case 'e_is_active' : 
                       $values[$field] = 'YES';
                       break;
                    default : 
                        $values[$field] = '';
                }
            }
            $assign['display_date'] = '';
            $assign['display_time'] = '';
            $assign['values'] = $values;
        }

        $active_map = $this->explore_tb_model->getActiveMap();
        $assign['active_map'] = $active_map;
        $this->_view('main/explore_detail', $assign);
    }

    /**
     * 탐구생활 등록/수정 처리
    */
    public function explore_process() {
        $this->load->model(DBNAME.'/explore_tb_model');
        $request = $this->input->post();
        $sess = $this->session->userdata('admin');

        if( ! (is_array($request) && in_array($request['mode'], array('insert', 'update', 'delete')))) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/explore?keep=yes');
            return;
        }

        $e_id = $request['e_id'];
        $display_date = $request['display_date'].' '.$request['display_time'].':00';
        $params = array(
            'e_display_date' => $display_date,
            'e_title' => $request['e_title'],
            'e_content' => $request['e_content'],
            'e_is_active' => $request['e_is_active'],
            'e_thumbnail' => '',
        );

        // content 중에 이미지가 존재하면 첫번재 이미지를 썸네일로 등록한다.
        $pattern = "/<img[^>]*src=[\"']?([^>\"']+)[\"']?[^>]*>/i";
        preg_match_all($pattern, $request['e_content'], $matches);

        if(isset($matches[1][0]) && strlen($matches[1][0]) > 0) {
            $params['e_thumbnail'] = $matches[1][0];
        }

        if($request['mode'] == 'insert') { 
            $params['e_admin_id'] = $sess['id'];
            if( ! $this->explore_tb_model->doInsert($params)->isSuccess()) {
                $this->common->alert('등록 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $e_id = $this->explore_tb_model->getData();
            $redirect_url = '/adminpanel/main/explore_detail/'.$e_id;

        } else if($request['mode'] == 'update') {
            $params['e_updated_at'] = date('Y-m-d H:i:s');
            if( ! $this->explore_tb_model->doUpdate($e_id, $params)->isSuccess()) {
                $this->common->alert('수정 실패하였습니다.');
                $this->common->historyback();
                return;
            }

            unset($params['e_content']);
            $log_array = array();
            $log_array['params'] = $params;
            $this->common->write_history_log($sess, 'UPDATE', $e_id, $log_array, 'explore_tb');
            $redirect_url = '/adminpanel/main/explore_detail/'.$e_id;

        } else {
            if( ! $this->explore_tb_model->doDelete($e_id)->isSuccess()) {
                $this->common->alert('삭제 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $redirect_url = '/adminpanel/main/explore?keep=yes';
        }

        $this->common->alert('처리되었습니다.');
        $this->common->locationhref($redirect_url);
        return;
    }
    

    /**
     * 알림관리 리스트
    */
    public function notify() {
        $this->load->model(DBNAME.'/notify_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->get();

        $data = array();
        $active_map = $this->notify_tb_model->getActiveMap();
        $data['active_map_sel'] = $this->common->genJqgridOption($active_map);

        $table_map = $this->notify_tb_model->getTableMap();
        $data['table_map_sel'] = $this->common->genJqgridOption($table_map);

        if(isset($request['mode']) && $request['mode'] == 'list') {
            // ajax reqeust. ==> grid list data

            $page = $this->input->get('page');
            $limit = $this->input->get('rows');
            $_search = $this->input->get('_search');

            $params = array();
            $extra = array();

            if(isset($_GET['filters'])){
                $filters = $_GET['filters'];
                $params = $this->common->filter_to_params($filters, $_search, array('nt_id','nt_display_date','nt_created_at','nt_updated_at'));
            }

            if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
                $order_by = $request['sidx']." ".$request['sord'];
                $extra['order_by'] = array($order_by);
            }

            $extra['offset'] = ($page-1)*$limit;
            $extra['limit'] = $limit;

            $list = $this->notify_tb_model->getList($params, $extra)->getData();

            $totalCount = $this->notify_tb_model->getCount($params)->getData();

            $json_data = new stdClass;
            $json_data->rows = array();
            foreach($list as $k=>$r){
                $r['nt_table'] = $table_map[$r['nt_table']];
                $json_data->rows[$k]['id'] = $r['nt_id'];
                $json_data->rows[$k]['cell'] = $r;
            }

            $json_data->total = ceil($totalCount / $limit);
            $json_data->page = $page;
            $json_data->records = $totalCount;

            echo json_encode($json_data);
            return;
        }
        if(isset($request['mode']) && $request['mode'] == 'edit') {
            $request = $this->input->post();

            if(isset($request['oper']) && $request['oper'] == 'add') {
                $data = $request;
                unset($data['oper']);
                unset($data['id']);

                $data['nt_created_at'] = date('Y-m-d H:i:s');
                $data['nt_updated_at'] = date('Y-m-d H:i:s');

                // todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

                if($this->notify_tb_model->doInsert($data)->isSuccess() == false) {
                    print_r($this->notify_tb_model->getErrorMsg());
                    return;
                }

                $act_key = $this->notify_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'notify_tb');
                return;
            }

            if(isset($request['id']) && isset($request['ids']) == false) {
                // 1 row 수정
                if($request['edit_action_is'] == 'DEL') {
                    // 삭제 상태로 셋팅. 삭제.
                    if($this->notify_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->notify_tb_model->getData();
                        $this->notify_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'notify_tb');
                    }
                    return;
                }

                // row 수정
                $request['nt_updated_at'] = date('Y-m-d H:i:s');
                //todo. Update시 추가 셋팅값 여기서 채우기. 함승목

                $this->notify_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'notify_tb');
                return;
            }

            // 일괄 상태변경

            $ids = explode(',',$request['ids']);

            if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
                $data = $request['multi_update_field_data_map'];
                foreach($ids as $id) {
                    if($request['edit_action_is'] == 'DEL') {
                        if($this->notify_tb_model->get($id)->isSuccess()){
                            $del_data = $this->notify_tb_model->getData();
                            $this->notify_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'notify_tb');
                        }
                    } else {
                        $this->notify_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'notify_tb');
                    }
                }
                echo 'success';
            } else {
                echo 'fail';
            }
            return;

        }

        $this->_view('main/notify', $data);
    }

    /**
     * 알림관리 등록/수정 폼
    */
    public function notify_detail($id=0) {
        $this->load->model(array(
            DBNAME.'/notify_tb_model',
        ));

        if( ! is_numeric($id)) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/notify?keep=yes');
            return;
        }

        $id = intval($id);

        $assign = array();
        $assign['mode'] = 'insert';
        $assign['mode_kor'] = '등록';
        $assign['pk'] = 'nt_id';

        if($id > 0) {
            $this->notify_tb_model->get($id);
            if($this->notify_tb_model->isSuccess() == FALSE) {
                $this->common->alert('pk '.$id.' is empty.');
                $this->common->locationhref('/adminpanel/main/notify?keep=yes');
                return;
            }
            $assign['mode'] = 'update';
            $assign['mode_kor'] = '수정';
            $values = $this->notify_tb_model->getData();
            foreach($values as $field => &$value) {
                switch($field) {
                    // todo. 디폴트값 설정은 여기서
                    /*
                       case 'g_status' : 
                       $value = form_dropdown('dr_groups[]', $user_group_sel, $selected_groups, "multiple style='height:200px;width:215px;' required");
                       break;
                     */
                    default : 
                        $value = htmlspecialchars($value);
                }
            }
            
            $assign['display_date'] = date('Y-m-d', strtotime($values['nt_display_date']));
            $assign['display_time'] = date('H:i', strtotime($values['nt_display_date']));
            $assign['values'] = $values;

        } else {
            // insert
            $fields = $this->notify_tb_model->getFields();
            $values = array();
            foreach($fields as $field) {
                switch($field) {
                    case 'nt_table' : 
                       $values[$field] = 'custom';
                       break;
                    case 'nt_is_active' : 
                       $values[$field] = 'YES';
                       break;
                    default : 
                        $values[$field] = '';
                }
            }

            $assign['display_date'] = '';
            $assign['display_time'] = '';
            $assign['values'] = $values;
        }

        $assign['active_map'] = $this->notify_tb_model->getActiveMap();
        $assign['table_map'] = $this->notify_tb_model->getTableMap();
        $this->_view('main/notify_detail', $assign);
    }

    /**
     * 알림관리 등록/수정 처리
    */
    public function notify_process() {
        $this->load->model(DBNAME.'/notify_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->post();

        if( ! (is_array($request) && in_array($request['mode'], array('insert', 'update')))) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/notify?keep=yes');
            return;
        }

        $nt_id = $request['nt_id'];
        $display_date = $request['display_date'].' '.$request['display_time'].':00';
        $params = array(
            'nt_display_date' => $display_date,
            'nt_title' => $request['nt_title'],
            'nt_is_active' => $request['nt_is_active'],
        );

        if($request['mode'] == 'insert') { 
            $params['nt_table'] = $request['nt_table']; // custom
            $params['nt_url'] = $request['nt_url'];

            if( ! $this->notify_tb_model->doInsert($params)->isSuccess()) {
                $this->common->alert('등록 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $nt_id = $this->notify_tb_model->getData();

        } else if($request['mode'] == 'update') {
            $params['nt_updated_at'] = date('Y-m-d H:i:s');
            if( ! $this->notify_tb_model->doUpdate($nt_id, $params)->isSuccess()) {
                $this->common->alert('수정 실패하였습니다.');
                $this->common->historyback();
                return;
            }

            $log_array = array();
            $log_array['params'] = $params;
            $this->common->write_history_log($sess, 'UPDATE', $nt_id, $log_array, 'notify_tb');

        }

        $this->common->alert('처리되었습니다.');
        $this->common->locationhref('/adminpanel/main/notify_detail/'.$nt_id);
        return;
    }
    
    
    /**
     * CK Editor 이미지 업로드처리 (종목추천, 종목분석, 탐구생활)
    */
    public function upload_image() {
        $target = $this->uri->segment(4, FALSE);
        
        $allow_target = array('recommend', 'analyze', 'explore');
        if( ! in_array($target, $allow_target)) {
            $response = array(
                'uploaded' => FALSE,
                'error' => array(
                    'message' => '올바르지 않은 접근입니다'
                )
            );
            echo json_encode($response);
            return;
        }

        $path = ATTACH_DATA.'/'.$target;
        if( ! is_dir($path)) {
            @mkdir($path, 0777);
            @chmod($path, 0777);
        }

        $path .= '/'.date('Ym');
        if( ! is_dir($path)) {
            @mkdir($path, 0777);
            @chmod($path, 0777);
        }

        $this->load->library('upload');
        $config = array();
        $config['upload_path'] = $path;
        $config['allowed_types'] = 'gif|jpg|jpeg|png';
        $config['encrypt_name'] = TRUE;

        $this->upload->initialize($config);
        if($this->upload->do_upload('upload')) {
            $result = $this->upload->data();

            $url = str_replace(WEBDATA, '', $result['full_path']);
            $url = '/webdata'.$url;
            $response = array(
                'uploaded' => TRUE,
                'fileName' => $result['file_name'],
                'url' => $url
            );
            echo json_encode($response);
            return;

        } else {
            $response = array(
                'uploaded' => FALSE,
                'error' => array(
                    'message' => strip_tags($this->upload->display_errors())
                )
            );
            echo json_encode($response);
            return;
        }
    }
    

    /**
     * ticker 정보 리턴
    */
    public function ajax_get_ticker_info() {
        if( ! $this->input->is_ajax_request()) {
            return;
        }

        $this->load->model(array(
            DBNAME.'/mri_tb_model',
            DBNAME.'/ticker_tb_model',
        ));

        $response = array(
            'is_success' => FALSE
        );

        $request = $this->input->post();

        if( ! (
                is_array($request)
                && array_key_exists('ticker', $request)
                && strlen($request['ticker']) > 0
        )) {
            $response['msg'] = '종목을 확인할 수 없습니다.';
            echo json_encode($response);
            return;
        }

        if( ! $this->mri_tb_model->get(strtoupper($request['ticker']))->isSuccess()) {
            $response['msg'] = '종목을 확인할 수 없습니다.';
            echo json_encode($response);
            return;
        }

		$params = array();
		$params['=']['tkr_ticker'] = strtoupper($request['ticker']);
		$extra = array(
			'order_by' => 'tkr_lastpricedate desc',
			'fields' => '*',
			'slavedb' => true,
			'limit' => '1'
		);

		$tkr_data = array_shift($this->ticker_tb_model->getList($params, $extra)->getData());

		$response['is_success'] = TRUE;
        $response['data'] = $tkr_data;
        echo json_encode($response);
        return;
    }


    /**
     * 대가종합 리스트
    */
    public function master() {
        $this->load->model(DBNAME.'/master_tb_model');
        $sess = $this->session->userdata('admin');
        $request = $this->input->get();

        $data = array();

        if(isset($request['mode']) && $request['mode'] == 'list') {
            // ajax reqeust. ==> grid list data 

            $page = $this->input->get('page');
            $limit = $this->input->get('rows');
            $_search = $this->input->get('_search');

            $params = array();
            $extra = array();

            if(isset($_GET['filters'])){
                $filters = $_GET['filters'];
                $params = $this->common->filter_to_params($filters, $_search, array('ms_id','ms_stocks','ms_newstocks','ms_10yavgreturn','ms_portfoliodate','ms_created_at','ms_updated_at'));
            }
            

            if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
                $order_by = $request['sidx']." ".$request['sord'];
                $extra['order_by'] = array($order_by);
            }

            $extra['offset'] = ($page-1)*$limit;
            $extra['limit'] = $limit;

            $list = $this->master_tb_model->getList($params, $extra)->getData();

            $totalCount = $this->master_tb_model->getCount($params)->getData();

            $json_data = new stdClass;
            $json_data->rows = array();
            foreach($list as $k=>$r){
                $json_data->rows[$k]['id'] = $r['ms_id'];
                $json_data->rows[$k]['cell'] = $r;
            }

            $json_data->total = ceil($totalCount / $limit);
            $json_data->page = $page;
            $json_data->records = $totalCount;

            echo json_encode($json_data);
            return;
        }
        if(isset($request['mode']) && $request['mode'] == 'edit') {
            $request = $this->input->post();

            if(isset($request['oper']) && $request['oper'] == 'add') {
                $data = $request;
                unset($data['oper']);
                unset($data['id']);

                $data['ms_created_at'] = date('Y-m-d H:i:s');
                $data['ms_updated_at'] = date('Y-m-d H:i:s');

                // todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

                if($this->master_tb_model->doInsert($data)->isSuccess() == false) {
                    print_r($this->master_tb_model->getErrorMsg());
                    return;
                }

                $act_key = $this->master_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'master_tb');
                return;
            }

            if(isset($request['id']) && isset($request['ids']) == false) {
                // 1 row 수정
                if(isset($request['edit_action_is']) && $request['edit_action_is'] == 'DEL') {
                    // 삭제 상태로 셋팅. 삭제.
                    if($this->master_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->master_tb_model->getData();
                        $this->master_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'master_tb');
                    }
                    return;
                }
                
                // row 수정
                $request['ms_updated_at'] = date('Y-m-d H:i:s');
                //todo. Update시 추가 셋팅값 여기서 채우기. 함승목

                $this->master_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'master_tb');
                return;
            }

            // 일괄 상태변경

            $ids = explode(',',$request['ids']);

            if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
                $data = $request['multi_update_field_data_map'];
                foreach($ids as $id) {
                    if($request['edit_action_is'] == 'DEL') {
                        if($this->master_tb_model->get($id)->isSuccess()){
                            $del_data = $this->master_tb_model->getData();
                            $this->master_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'master_tb');
                        }
                    } else {
                        $this->master_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'master_tb');
                    }
                }
                echo 'success';
            } else {
                echo 'fail';
            }
            return;

        }

        $this->_view('main/master', $data);
    }

    /**
     * 대가종합 상세
    */
    public function master_detail($id=0) {
        $this->load->model(array(
            DBNAME.'/master_tb_model',
        ));

        if( ! is_numeric($id)) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/master?keep=yes');
            return;
        }

        $id = intval($id);

        $assign = array();
        $assign['mode'] = 'insert';
        $assign['mode_kor'] = '등록';
        $assign['pk'] = 'ms_id';

        if($id > 0) {
            $this->master_tb_model->get($id);
            if($this->master_tb_model->isSuccess() == FALSE) {
                $this->common->alert('pk '.$id.' is empty.');
                $this->common->locationhref('/adminpanel/main/master?keep=yes');
                return;
            }
            $assign['mode'] = 'update';
            $assign['mode_kor'] = '수정';
            $values = $this->master_tb_model->getData();
            $rp_ticker = array();

            foreach($values as $field => &$value) {
                switch($field) {
                   case 'ms_representative_ticker' : 
                       if(strlen($values['ms_representative_ticker']) > 0) {
                           $rp_ticker = explode(',', $values['ms_representative_ticker']);
                       }
                       break;
                    default : 
                        $value = htmlspecialchars($value);
                }
            }

            $assign['rp_ticker'] = $rp_ticker;
            $assign['values'] = $values;

        } else {
            // insert
            $fields = $this->master_tb_model->getFields();
            $values = array();
            foreach($fields as $field) {
                switch($field) {
                    default : 
                        $values[$field] = '';
                }
            }
            $assign['rp_ticker'] = array();
            $assign['values'] = $values;
        }
        $this->_view('main/master_detail', $assign);
    }

    /**
     * 대가종합 처리
    */
    public function master_process() {
        $this->load->model(array(
            DBNAME.'/master_tb_model',
        ));
        $request = $this->input->post();

        $sess = $this->session->userdata('admin');

        if( ! (is_array($request) && in_array($request['mode'], array('insert', 'update', 'delete')))) {
            $this->common->alert('올바르지 않은 접근입니다.');
            $this->common->locationhref('/adminpanel/main/master?keep=yes');
            return;
        }

        $ms_id = $request['ms_id'];

        $rp_ticker = implode(',', array_unique(array_filter(array_map('strtoupper', $request['ms_representative_ticker']))));

        $params = array(
            'ms_guru' => $request['ms_guru'],
            'ms_korguru' => $request['ms_korguru'],
            'ms_stocks' => $request['ms_stocks'],
            'ms_newstocks' => $request['ms_newstocks'],
            'ms_10yavgreturn' => $request['ms_10yavgreturn'],
            'ms_portfolioname' => $request['ms_portfolioname'],
            'ms_portfoliodate' => $request['ms_portfoliodate'],
            'ms_introduce' => $request['ms_introduce'],
            'ms_representative_ticker' => $rp_ticker
        );

        if(isset($_FILES['ms_image']) && strlen($_FILES['ms_image']['tmp_name']) > 0) {
            $this->load->library('upload');
            $config = array();
            $config['upload_path'] = ATTACH_DATA.'/master';
            $config['allowed_types'] = 'gif|jpg|jpeg|png';
            $config['encrypt_name'] = TRUE;

            $this->upload->initialize($config);
            if($this->upload->do_upload('ms_image')) {
                $result = $this->upload->data();
                $params['ms_image'] = $result['file_name'];
            }
        }

        if($request['mode'] == 'insert') { 
            if( ! $this->master_tb_model->doInsert($params)->isSuccess()) {
                $this->common->alert('등록 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $ms_id = $this->master_tb_model->getData();
            $redirect_url = '/adminpanel/main/master_detail/'.$ms_id;

        } else if($request['mode'] == 'update') {
            $params['ms_updated_at'] = date('Y-m-d H:i:s');
            if( ! $this->master_tb_model->doUpdate($ms_id, $params)->isSuccess()) {
                $this->common->alert('수정 실패하였습니다.');
                $this->common->historyback();
                return;
            }

            $log_array = array();
            $log_array['params'] = $params;
            $this->common->write_history_log($sess, 'UPDATE', $ms_id, $log_array, 'master_tb');
            $redirect_url = '/adminpanel/main/master_detail/'.$ms_id;

        }  else {
            if( ! $this->master_tb_model->doDelete($ms_id)->isSuccess()) {
                $this->common->alert('삭제 실패하였습니다.');
                $this->common->historyback();
                return;
            }
            $redirect_url = '/adminpanel/main/master?keep=yes';
        }

        $this->common->alert('처리되었습니다.');
        $this->common->locationhref($redirect_url);
        return;
    }

    /**
     * 대가종목편집
    */
    public function set_master_items() {
        $this->load->model(DBNAME.'/master_tb_model');

        $extra = array(
            'fields' => array('ms_id', 'ms_guru'),
            'order_by' => 'ms_id ASC',
        );
        $master = $this->master_tb_model->getList(array(), $extra)->getData();
        $data = array();
        $data['master'] = $master;
        $this->_view('main/set_master_items', $data);
    }

    /**
     * 대가종목편집 처리
    */
    public function set_master_items_process() {
        $this->load->model(array(
            DBNAME.'/notify_tb_model',
            DBNAME.'/master_tb_model'
        ));
        $request = $this->input->post();

        $change_files = array();

        foreach($request as $k => $content) {
            $filepath = MASTER_DATA.'/'.$k.'.info';
            if(is_file($filepath)) {
                $old_content = file_get_contents($filepath);
                if($old_content == $content) {
                    continue;
                }

                $this->common->logWrite('set_master_items', print_r(array(
                    'file' => $filepath,
                    'before' => $old_content,
                    'after' => $content
                ), true), $k);
            } else {
                $this->common->logWrite('set_master_items', print_r(array(
                    'file' => $filepath,
                    'new' => $content
                ), true), $k);
            }
            file_put_contents($filepath, $content);
            $change_files[] = $k;

            // 알림 동기화
            $pk = str_replace('master_', '', $k);
            $options = array(
                'nt_pk' => $pk,
                'nt_table' => 'master_tb'
            );
            $this->notify_tb_model->doSyncNotify('INSERT', $options);
        }

        if(sizeof($change_files) > 0) {
            $this->common->alert(implode('\n', $change_files).'\n\n수정 완료');
        }
        $this->common->locationhref('/adminpanel/main/set_master_items');
    }

}
?>
