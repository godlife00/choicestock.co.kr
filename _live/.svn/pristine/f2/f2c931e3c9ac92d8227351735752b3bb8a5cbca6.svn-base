<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
require_once $_SERVER['DOCUMENT_ROOT'].'/_application/controllers/adminpanel/base_admin.php';

class Data extends BaseAdmin_Controller {

    public function index() {
        $this->recommend();
        return;
    }

    public function ticker() {
		$this->load->model(DBNAME.'/ticker_tb_model');
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
				$params = $this->common->filter_to_params($filters, $_search, array('tkr_id','tkr_lastpricedate','tkr_close','tkr_diff','tkr_rate','tkr_created_at','tkr_updated_at'));
			}
			

			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->ticker_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->ticker_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
					$json_data->rows[$k]['id'] = $r['tkr_id'];
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

				$data['tkr_created_at'] = date('Y-m-d H:i:s');
				$data['tkr_updated_at'] = date('Y-m-d H:i:s');

				// todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

				if($this->ticker_tb_model->doInsert($data)->isSuccess() == false) {
					print_r($this->ticker_tb_model->getErrorMsg());
					return;
				}

                $act_key = $this->ticker_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'ticker_tb');
				return;
			}

			if(isset($request['id']) && isset($request['ids']) == false) {
				// 1 row 수정
				if($request['edit_action_is'] == 'DEL') {
					// 삭제 상태로 셋팅. 삭제.
                    if($this->ticker_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->ticker_tb_model->getData();
                        $this->ticker_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'ticker_tb');
                    }
					return;
				}
				
				// row 수정
				$request['tkr_updated_at'] = date('Y-m-d H:i:s');
				//todo. Update시 추가 셋팅값 여기서 채우기. 함승목

				$this->ticker_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'ticker_tb');
				return;
			}

			// 일괄 상태변경

			$ids = explode(',',$request['ids']);

			if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
				$data = $request['multi_update_field_data_map'];
				foreach($ids as $id) {
					if($request['edit_action_is'] == 'DEL') {
                        if($this->ticker_tb_model->get($id)->isSuccess()){
                            $del_data = $this->ticker_tb_model->getData();
                            $this->ticker_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'ticker_tb');
                        }
					} else {
						$this->ticker_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'ticker_tb');
					}
				}
				echo 'success';
			} else {
				echo 'fail';
			}
			return;

		}

		$this->_view('data/ticker', $data);
	}


	public function mri() {
		$this->load->model(DBNAME.'/mri_tb_model');
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
				$params = $this->common->filter_to_params($filters, $_search, array('m_growth_score','m_growth_stars','m_safety_score','m_safety_stars','m_cashflow_score','m_cashflow_stars','m_moat_score','m_moat_stars','m_valuation_score','m_valuation_stars','m_total_score','m_biz_growth_score','m_biz_growth_stars','m_biz_safety_score','m_biz_safety_stars','m_biz_cashflow_score','m_biz_cashflow_stars','m_biz_moat_score','m_biz_moat_stars','m_biz_dividend_score','m_biz_dividend_stars','m_biz_total_score','m_sep_date','m_close','m_marketcap','m_netmargin','m_pbr','m_per','m_psr','m_roe','m_divyield','m_eps1','m_eps2','m_eps3','m_eps4','m_eps1_date','m_eps2_date','m_eps3_date','m_eps4_date','m_date'));
			}
			

			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->mri_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->mri_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
					$json_data->rows[$k]['id'] = $r['m_ticker'];
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

				$data[''] = date('Y-m-d H:i:s');
				$data[''] = date('Y-m-d H:i:s');

				// todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

				if($this->mri_tb_model->doInsert($data)->isSuccess() == false) {
					print_r($this->mri_tb_model->getErrorMsg());
					return;
				}

                $act_key = $this->mri_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'mri_tb');
				return;
			}

			if(isset($request['id']) && isset($request['ids']) == false) {
				// 1 row 수정
				if($request['edit_action_is'] == 'DEL') {
					// 삭제 상태로 셋팅. 삭제.
                    if($this->mri_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->mri_tb_model->getData();
                        $this->mri_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'mri_tb');
                    }
					return;
				}
				
				// row 수정
				$request[''] = date('Y-m-d H:i:s');
				//todo. Update시 추가 셋팅값 여기서 채우기. 함승목

				$this->mri_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'mri_tb');
				return;
			}

			// 일괄 상태변경

			$ids = explode(',',$request['ids']);

			if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
				$data = $request['multi_update_field_data_map'];
				foreach($ids as $id) {
					if($request['edit_action_is'] == 'DEL') {
                        if($this->mri_tb_model->get($id)->isSuccess()){
                            $del_data = $this->mri_tb_model->getData();
                            $this->mri_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'mri_tb');
                        }
					} else {
						$this->mri_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'mri_tb');
					}
				}
				echo 'success';
			} else {
				echo 'fail';
			}
			return;

		}

		$this->_view('data/spider', $data);
	}

	public function spider() {
		$this->load->model(DBNAME.'/mri_tb_model');
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
				$params = $this->common->filter_to_params($filters, $_search, array('m_growth_score','m_growth_stars','m_safety_score','m_safety_stars','m_cashflow_score','m_cashflow_stars','m_moat_score','m_moat_stars','m_valuation_score','m_valuation_stars','m_total_score','m_biz_growth_score','m_biz_growth_stars','m_biz_safety_score','m_biz_safety_stars','m_biz_cashflow_score','m_biz_cashflow_stars','m_biz_moat_score','m_biz_moat_stars','m_biz_dividend_score','m_biz_dividend_stars','m_biz_total_score','m_sep_date','m_close','m_marketcap','m_netmargin','m_pbr','m_per','m_psr','m_roe','m_divyield','m_eps1','m_eps2','m_eps3','m_eps4','m_eps1_date','m_eps2_date','m_eps3_date','m_eps4_date','m_date','m_v_fairvalue5','m_v_fairvalue4','m_v_fairvalue3','m_v_fairvalue2','m_v_fairvalue1'));
			}
			

			if(isset($request['sidx']) && strlen($request['sidx']) > 0) {
				$order_by = $request['sidx']." ".$request['sord'];
				$extra['order_by'] = array($order_by);
			}

			$extra['offset'] = ($page-1)*$limit;
			$extra['limit'] = $limit;

			$list = $this->mri_tb_model->getList($params, $extra)->getData();

			$totalCount = $this->mri_tb_model->getCount($params)->getData();

			$json_data = new stdClass;
			$json_data->rows = array();
			foreach($list as $k=>$r){
					$json_data->rows[$k]['id'] = $r['m_ticker'];
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

				$data[''] = date('Y-m-d H:i:s');
				$data[''] = date('Y-m-d H:i:s');

				// todo. $request 데이터 이외 셋팅할 부분 이 아래에서 채우기. 함승목.

				if($this->mri_tb_model->doInsert($data)->isSuccess() == false) {
					print_r($this->mri_tb_model->getErrorMsg());
					return;
				}

                $act_key = $this->mri_tb_model->getData();
                $log_array = array();
                $log_array['params'] = $data;
                $this->common->write_history_log($sess, 'INSERT', $act_key, $log_array, 'mri_tb');
				return;
			}

			if(isset($request['id']) && isset($request['ids']) == false) {
				// 1 row 수정
				if($request['edit_action_is'] == 'DEL') {
					// 삭제 상태로 셋팅. 삭제.
                    if($this->mri_tb_model->get($request['id'])->isSuccess()){
                        $del_data = $this->mri_tb_model->getData();
                        $this->mri_tb_model->doDelete($request['id']);
                        $act_key = $request['id'];
                        $log_array = array();
                        $log_array['params'] = $del_data;
                        $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'mri_tb');
                    }
					return;
				}
				
				// row 수정
				$request[''] = date('Y-m-d H:i:s');
				//todo. Update시 추가 셋팅값 여기서 채우기. 함승목

				$this->mri_tb_model->doUpdate($request['id'], $request);
                $act_key = $request['id'];
                $log_array = array();
                $log_array['params'] = $request;
                $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'mri_tb');
				return;
			}

			// 일괄 상태변경

			$ids = explode(',',$request['ids']);

			if(sizeof($ids) > 0 && sizeof($request['multi_update_field_data_map']) > 0) {
				$data = $request['multi_update_field_data_map'];
				foreach($ids as $id) {
					if($request['edit_action_is'] == 'DEL') {
                        if($this->mri_tb_model->get($id)->isSuccess()){
                            $del_data = $this->mri_tb_model->getData();
                            $this->mri_tb_model->doDelete($id);
                            $act_key = $id;
                            $log_array = array();
                            $log_array['params'] = $del_data;
                            $this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'mri_tb');
                        }
					} else {
						$this->mri_tb_model->doUpdate($id, $data);
                        $act_key = $id;
                        $log_array = array();
                        $log_array['params'] = $data;
                        $this->common->write_history_log($sess, 'UPDATE', $act_key, $log_array, 'mri_tb');
					}
				}
				echo 'success';
			} else {
				echo 'fail';
			}
			return;

		}

		$this->_view('data/spider', $data);
	}
}
