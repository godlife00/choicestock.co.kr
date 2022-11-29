<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/kw_base_mobile.php';
class Kw_stock extends Kw_BaseMobile_Controller {

    function __construct() {
        parent::__construct();
        //$this->paramCheck();
    }

    public function index() {
        //$this->common->locationhref('/kw_stock/choice_api');
        $this->common->locationhref('/'.KW.'_stock/recommend');
    }

    public function choice_api($type='') {

        $api_key = $this->input->get('api_key');

        if($type=='' || $api_key == '') {
            $result = array();
            $result['retmsg'] = 'argument error[type or key is null]';
            echo json_encode($result);
            //    $strJsonStr = json_encode($stockbot_array);
            exit;
        }

        if($api_key != API_KEY_X1) {
            $result = array();
            $result['retmsg'] = 'key match error';
            echo json_encode($result);
            exit;
        }

        //종목
        if($type=='A') {
            //echo '<pre>'; print_r($this->search_ticker_list);
            //exit;
            echo json_encode($this->search_ticker_list);
            exit;
            /*
            $result = array();
            $ticker_list = $this->ticker_info_map;
            $cnt=0;
            foreach($ticker_list as $key=>$val) {
                $result[$cnt]['ticker'] = $val['tkr_ticker'];
                $result[$cnt]['ticker_en'] = $val['tkr_name_en'];
                $result[$cnt]['ticker_kor'] = $val['tkr_name'];
                $cnt++;
            }
            //echo '<pre>'; print_r($result);
            echo serialize($result);
            exit;
            */
        }
        else if($type=='B') {
            $this->load->model(DBNAME.'/recommend_tb_model');
            $this->load->model(DBNAME.'/mri_tb_model');

            $result = array();
            $cnt=0;
            //최근 추천 종목

            // 종목추천(최신작성 1건)
            $params = array();
            $params['=']['rc_is_active'] = 'YES';
            $params['=']['rc_endtype'] = 'ING';
            $params['!=']['rc_view_srv'] = 'W';
            $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
            $extra = array(
                'order_by' => 'rc_display_date DESC',
                'limit' => '1',
                'slavedb' => true,
            );

            $recommend = $this->recommend_tb_model->getList($params, $extra)->getData();

            $result[0]['ticker'] = $recommend[0]['rc_ticker'];    //티커
            //$result[0]['ticker_kor'] = $this->ticker_info_map[$recommend[0]['rc_ticker']]['tkr_name']; //티커한글명

            if($recommend[0]['rc_subtitle'] =='') {
                $result[0]['ticker_title'] = $recommend[0]['rc_title'];    //서브제목
            }
            else {
                $result[0]['ticker_title'] = $recommend[0]['rc_subtitle'];    //서브제목
            }

            if(in_array($recommend[0]['rc_adjust'], array('U', 'D')) && $recommend[0]['rc_adjust_price'] > 0) :
                $recommend[0]['rc_goal_price'] = $recommend[0]['rc_adjust_price'];
            endif;

            $result[0]['ticker_revenue'] = round((($recommend[0]['rc_goal_price']/$recommend[0]['rc_recom_price'])-1)*100,2);    //예상수익률
            $result[0]['link'] = '/'.KW.'_stock/recommend';

            //최근 목표가 달성 종목
            $params = array();
            $params['=']['rc_is_active'] = 'YES';
            $params['=']['rc_endtype'] = 'SUCCESS';
            $params['!=']['rc_view_srv'] = 'W';
            $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
            $extra = array(
                'order_by' => 'rc_enddate DESC',
                'limit' => '1',
                'cache_sec' => 3600,
                'slavedb' => true,
            );
            $recommend = $this->recommend_tb_model->getList($params, $extra)->getData();

            $result[1]['ticker'] = $recommend[0]['rc_ticker'];    //티커
            $result[1]['ticker_kor'] = $this->ticker_info_map[$recommend[0]['rc_ticker']]['tkr_name']; //티커한글명
            $result[1]['ticker_title'] = '적중! 수익 실현 종목';    //서브제목

            if(in_array($recommend[0]['rc_adjust'], array('U', 'D')) && $recommend[0]['rc_adjust_price'] > 0) :
                $recommend[0]['rc_goal_price'] = $recommend[0]['rc_adjust_price'];
            endif;

            $result[1]['ticker_revenue'] = round((($recommend[0]['rc_goal_price']/$recommend[0]['rc_recom_price'])-1)*100,2);    //달성수익률
            $result[1]['link'] = '/'.KW.'_stock/recommend_view/'.$recommend[0]['rc_id'];

            //투자매력도 상위 급등주 노출
            $params = array();
            $params['join']['ticker_tb'] = 'tkr_ticker = m_ticker and tkr_is_active = "YES"';
            $params['join']['daily_tb'] = 'dly_ticker = m_ticker';
            $params['>=']['dly_marketcap'] = '10000';
            $params['>=']['m_biz_total_score'] = '80';
            $params['not in']['m_ticker'] = array($result[0]['ticker'], $result[1]['ticker']);

            $extra = array(
                'fields' =>  array('m_ticker', 'm_biz_total_score', 'tkr_close', 'tkr_rate'),
                'order_by' => 'tkr_rate DESC',
                'limit' => '1',
                'cache_sec' => 3600,
                'slavedb' => true,
            );
            $recommend = $this->mri_tb_model->getList($params, $extra)->getData();

            $result[2]['ticker'] = $recommend[0]['m_ticker'];    //티커
            $result[2]['ticker_kor'] = $this->ticker_info_map[$recommend[0]['m_ticker']]['tkr_name']; //티커한글명
            $result[2]['ticker_title'] = '투자매력 급등주';    //서브제목
            $result[2]['ticker_close'] = number_format($recommend[0]['tkr_close']);    //종가
            $result[2]['ticker_fluct'] = $recommend[0]['tkr_rate'];    //등락률
            $result[2]['ticker_score'] = $recommend[0]['m_biz_total_score'];    //종목진단점수
            $result[2]['link'] = '/'.KW.'_attractiveness/attractive?sort=total&netincome=all&marketcap=over100billion';

            //echo '<pre>'; print_r($result);
            echo json_encode($result);
            exit;
        }
        else if($type=='C') {
            $result = array();
            $ticker_list = $this->ticker_info_map;
            $cnt=0;
            foreach($ticker_list as $key=>$val) {
                $result[$cnt]['ticker'] = $val['tkr_ticker'];
                $result[$cnt]['ticker_en'] = $val['tkr_name_en'];
                $result[$cnt]['ticker_kor'] = $val['tkr_name'];
                $cnt++;
            }
            //echo '<pre>'; print_r($result);
            echo json_encode($result);
            exit;
        }
        else if($type=='D') {
            //1. 급등주/인기주 구분
            //2. 티커
            //3. 티커한글명
            //4. 티커 영문
            //5. 현재가
            //6. 등락률

            //급등주, 인기종목
            $popular_stock_data = array();

            //인기검색
			$popular_file = 'popular_ticker.json';
			$file_path = WEBDATA.'/json/'.$popular_file;

			if( is_file($file_path) ) {
				$popular_search_ticker = json_decode(file_get_contents($file_path), true);
				shuffle($popular_search_ticker);
				$popular_ticker = array_slice($popular_search_ticker, 0, 10);
			}

            if(is_array($popular_ticker) && sizeof($popular_ticker) > 0) {
                
                $params = array();
                $params['in']['m_ticker'] = $popular_ticker;
                $extra = array(
                    'fields' => array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3'),
                    'order_by' => ''
                );
                $extra['cache_sec'] = 3600;
                $extra['slavedb'] = true;
                $popular_stock_data = $this->mri_tb_model->getList($params, $extra)->getData();
                
                foreach($popular_stock_data as $key => $val) {
                    $popular_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                    //$popular_stock_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
                    //$popular_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $popular_stock_data[$key]['ticker']['tkr_close']);
                }
                $popular_stock_data = $this->common->indexSort($popular_ticker, $popular_stock_data, 'm_ticker');
            }

            if(is_array($popular_stock_data) && sizeof($popular_stock_data) > 0) {
                $cnt=0;
                foreach($popular_stock_data as $key => $val) {
                    $result[$cnt]['type'] = 'popular';
                    $result[$cnt]['ticker'] = $val['ticker']['tkr_ticker'];
                    $result[$cnt]['ticker_kor'] = $val['ticker']['tkr_name'];
                    $result[$cnt]['ticker_en'] = $val['ticker']['tkr_name_en'];
                    $result[$cnt]['ticker_close'] = $val['ticker']['tkr_close'];
                    $result[$cnt]['ticker_rate'] = $val['ticker']['tkr_rate_str'];
                    $cnt++;
                }
            }

            // 급등주 가져오기
			$soaring_file = 'soaring_one.json';
			$file_path = WEBDATA.'/json/'.$soaring_file;
			
			if( is_file($file_path) ) {
				$soaring_stock_data = json_decode(file_get_contents($file_path), true);
				$soaring_stock_data = array_slice($soaring_stock_data, 0, 10);
			}

            if(is_array($soaring_stock_data) && sizeof($soaring_stock_data) > 0) {
                foreach($soaring_stock_data as $key => $val) {
                    $result[$cnt]['type'] = 'soaring';
                    $result[$cnt]['ticker'] = $val['ticker']['tkr_ticker'];
                    $result[$cnt]['ticker_kor'] = $val['ticker']['tkr_name'];
                    $result[$cnt]['ticker_en'] = $val['ticker']['tkr_name_en'];
                    $result[$cnt]['ticker_close'] = $val['ticker']['tkr_close'];
                    $result[$cnt]['ticker_rate'] = $val['ticker']['tkr_rate_str'];
                    $cnt++;
                }
            }
            //echo '<pre>'; print_r($result); exit;
            echo json_encode($result);
            exit;
        }
    }

    // 종목추천 메인
    public function recommend($tab='1') {
        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/recommend_tb_model',
        ));

        //$tab = $this->input->get('pg');

        $data = array();
/*
        // 목표가 달성한 최신 추천 종목 3건
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['!=']['rc_view_srv'] = 'W';
        $params['=']['rc_endtype'] = 'SUCCESS';
        $params['=']['sf1_dimension'] = 'MRT';
        $params['join']['daily_tb'] = 'rc_ticker = dly_ticker';
        $params['join']['sf1_tb'] = 'rc_ticker = sf1_ticker';
        $extra = array(
            'fields' => array('recommend_tb.*', 'dly_pe', 'dly_pb', 'sf1_roe'),
            'order_by' => 'rc_enddate DESC',
            'slavedb' => true,
            'limit' => '6',
        );
        $top_recom_list = $this->recommend_tb_model->getList($params, $extra)->getData();
        $cnt=0;
        $top_recom = array();
        $ticker_list = array();
        foreach($top_recom_list as $val) {
            if($cnt>2) break;
            if(!in_array($val['rc_ticker'], $ticker_list)) {
                $ticker_list[] = $val['rc_ticker'];
                $top_recom[] = $val;
                $cnt++;
            }
        }
        foreach($top_recom as $idx => $val) {
            $chart_value = array();
            $chart = $this->itoozaapi->getSEPListForChart(array($val['rc_ticker']));

            if(isset($chart[$val['rc_ticker']]) && is_array($chart[$val['rc_ticker']])) {
                $chart_value = array_slice($chart[$val['rc_ticker']], -20, 20);
            }
            $top_recom[$idx]['chart_value'] = implode(',', array_values($chart_value));
            $top_recom[$idx]['chart_key'] = array_keys($chart_value);
            $top_recom[$idx]['ticker'] = $this->ticker_info_map[$val['rc_ticker']];
        }
        $data['top_recom'] = $top_recom;
*/
        $data['ticker_submenu'] = ($tab =='1') ? 'recomm':'portfolio';

        // 종목추천 리스트
        $rc_list = $this->_get_recommend_data($page=1);

        $data['tab'] = $tab;

        if($tab == '1') {
            $data['content_html'] = $this->load->view('/'.KW.'/stock/recommend_list.php', array('rc_list' => $rc_list, 'tab' => '1', 'is_event' => $this->is_event), true);
            //$data['content_pp_html'] = $this->load->view('/mobile/stock/recommend_list.php', array('rc_list' => $rc_portlist, 'tab' => '2', 'is_event' => $this->is_event), true);
        }
        else {

            $pf_profit_file = 'pf_profit.json';
            
            $file_path = WEBDATA.'/'.$pf_profit_file;
            //$file_path = str_replace('hoon','datahero',WEBDATA).'/'.$pf_profit_file;

            if( is_file($file_path) ) {
                $file_data = unserialize(file_get_contents($file_path));
                $data['pf_profit'] = $file_data['pf_profit'];
            }
            else {
                $data['pf_profit'] = '0.00';
            }

			$portfoli_file = 'portfolio.json';
			$file_path = WEBDATA.'/json/'.$portfoli_file;

			if( is_file($file_path) ) {
				 //$portfolio_list = json_decode(file_get_contents($file_path), true);
				 $portfolio = json_decode(file_get_contents($file_path), true);
				 $portfolio_inc = $portfolio['portfolio'];
				 $exclude_list = $portfolio['exclude'];

			}

			//포트폴리오 중복처리
			$portfolio_list = array();
			$dup_check = array();
			foreach($portfolio_inc as $dup) {
				if(!in_array($dup['rc_ticker'], $dup_check) && $dup['rc_display_date'] <= date('Y-m-d H:i:s')) {
					$portfolio_list[] = $dup;
				}
				
				if($dup['rc_display_date'] <= date('Y-m-d H:i:s')) {
					$dup_check[] = $dup['rc_ticker'];
				}
			}

            $pf_count=0;
            $pf_ticker_list = array();
            foreach($portfolio_list as $idx => $val) {
                
                if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;

                $portfolio_list[$idx]['rc_close'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_close'];
                $portfolio_list[$idx]['rc_rate'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate'];
                $portfolio_list[$idx]['rc_rate_str'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate_str'];
                
                if($val['rc_endtype'] == 'SELL') {
                    $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_mid_price']/$val['rc_recom_price'])-1)*100, 2);
                }
                else if($val['rc_endtype'] == 'FAIL') {
                    $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_giveup_price']/$val['rc_recom_price'])-1)*100, 2);
                }
                else if($val['rc_endtype'] == 'SUCCESS') {
                    if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                        $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_adjust_price']/$val['rc_recom_price'])-1)*100, 2);
                    else :
                        $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2);
                    endif;
                }
                else {
                    $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_close']/$val['rc_recom_price'])-1)*100, 2);
                }

                $pf_ticker_list[] = $val['rc_ticker'];
                $pf_count++;
            }

            $data['pf_count'] = $pf_count;

            $data['portfolio_recent'] = $portfolio_list;

            $rc_profit_total = 0;
            foreach ($portfolio_list as $key => $val) {
                $sort[$key] = $val['rc_profit_rate'];
                $rc_profit_total += $val['rc_profit_rate'];
            }
            array_multisort($sort, SORT_DESC, $portfolio_list);
			//무료회원오픈처리(21.11.04)
			set_cookie('free_ticker', $portfolio_list[0]['rc_id'].'|'.$portfolio_list[1]['rc_id'], time()+86400);

            $data['portfolio_list'] = $portfolio_list;
            $data['pf_ticker_list'] = $pf_ticker_list;

            foreach($exclude_list as $idx => $val) {
                
                if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;

                $exclude_list[$idx]['rc_close'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_close'];
                $exclude_list[$idx]['rc_rate'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate'];
                $exclude_list[$idx]['rc_rate_str'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate_str'];
                
                if($val['rc_endtype'] == 'SELL') {
                    $exclude_list[$idx]['rc_profit_rate'] = number_format((($exclude_list[$idx]['rc_mid_price']/$val['rc_recom_price'])-1)*100, 2);
                }
                else if($val['rc_endtype'] == 'FAIL') {
                    $exclude_list[$idx]['rc_profit_rate'] = number_format((($exclude_list[$idx]['rc_giveup_price']/$val['rc_recom_price'])-1)*100, 2);
                }
                else if($val['rc_endtype'] == 'SUCCESS') {
                    if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                        $exclude_list[$idx]['rc_profit_rate'] = number_format((($exclude_list[$idx]['rc_adjust_price']/$val['rc_recom_price'])-1)*100, 2);
                    else :
                        $exclude_list[$idx]['rc_profit_rate'] = number_format((($exclude_list[$idx]['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2);
                    endif;
                }
                else {
                    $exclude_list[$idx]['rc_profit_rate'] = number_format((($exclude_list[$idx]['rc_close']/$val['rc_recom_price'])-1)*100, 2);
                }
            }

			//$rc_profit_total = 0;
			$sort = array();
			foreach ($exclude_list as $key => $val) {
				$sort[$key] = $val['rc_profit_rate'];
				//$rc_profit_total += $val['rc_profit_rate'];
			}
            array_multisort($sort, SORT_DESC, $exclude_list);

            $data['exclude_list'] = $exclude_list;
        }

        $this->header_data['header_template'] = '2';
        $this->header_data['head_title'] = '미주미초이스';
        $this->header_data['head_url'] = '/';

        $data['meta_title'] = ($tab=='1') ? '종목추천 - 미주미초이스' : '포트폴리오 - 미주미초이스';
        //15min
        $data['is_open'] = $this->is_open;
        $data['is_event'] = $this->is_event;
        $data['is_soft'] = $this->is_soft;

        $this->_view('/stock/recommend', $data);
    }

    // 종목추천 리스트 [더보기]
    public function ajax_get_recommend_list() {
        if( ! $this->input->is_ajax_request()) {
            return;
        }

        $request = $this->input->post();
        if( ! ( isset($request['page']) && is_numeric($request['page']) && strlen($request['page']) > 0)) {
            return;
        }

        $rc_list = $this->_get_recommend_data($request['page']);
        $content_html = $this->load->view('/'.KW.'/stock/recommend_list.php', array('rc_list' => $rc_list, 'tab' => '1'), true);
        echo $content_html;
        return;
    }


    // (공통) 종목추천 리스트 가져오기.
    private function _get_recommend_data($page=1, $limit=30) {
        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/recommend_tb_model',
        ));

        // 최근 5년간 등록된 종목추천 중 최신순으로 15건씩 리스팅. (손절가도달은 리스팅 제외)
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['!=']['rc_view_srv'] = 'W';
        //$params['in']['rc_endtype'] = array('ING', 'SUCCESS', 'SELL');
        $params['>=']['rc_created_at'] = date('Y-m-d H:i:s', time()-(86400*365*5)); // 5년 전
        $extra = array(
            'order_by' => 'rc_display_date DESC',
            'limit' => $limit,
            'slavedb' => true,
            'offset' => $limit * ($page-1),
        );

        $rc_list = $this->recommend_tb_model->getList($params, $extra)->getData();

        foreach($rc_list as $idx => $val) {
            $chart_value = array();
            //$chart = $this->itoozaapi->getSEPListForChart(array($val['rc_ticker']));
            if(isset($chart[$val['rc_ticker']]) && is_array($chart[$val['rc_ticker']])) {
                $chart_value = array_slice($chart[$val['rc_ticker']], -20, 20);
            }
            $rc_list[$idx]['chart_value'] = implode(',', array_values($chart_value));
            $rc_list[$idx]['chart_key'] = array_keys($chart_value);
            $rc_list[$idx]['ticker'] = $this->ticker_info_map[$val['rc_ticker']];

            if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                $val['rc_goal_price'] = $val['rc_adjust_price'];
            endif;

            if($val['rc_endtype'] == 'SUCCESS') {
                $rc_list[$idx]['rc_profit_rate'] = number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2);
            }
            else if($val['rc_endtype'] == 'FAIL') {
                $rc_list[$idx]['rc_profit_rate'] = number_format((($val['rc_giveup_price']/$val['rc_recom_price'])-1)*100, 2);
            }
            else if($val['rc_endtype'] == 'SELL') {
                $rc_list[$idx]['rc_profit_rate'] = number_format((($val['rc_mid_price']/$val['rc_recom_price'])-1)*100, 2);
            }
            else {
                $rc_list[$idx]['rc_profit_rate'] = number_format((($rc_list[$idx]['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100, 2);
            }
        }
        return $rc_list;
    }

    // 종목추천 상세
    public function recommend_view() {

        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/recommend_tb_model',
            DBNAME.'/sf1_tb_model',
            DBNAME.'/daily_tb_model',
        ));

        $data = array();

        $rc_id = $this->uri->segment(3, FALSE);
        if( ! (is_numeric($rc_id) && $rc_id > 0)) {
            $this->common->historyback();
            return;
        }

        $params = array();
        $params['=']['rc_id'] = $rc_id;
        $params['=']['rc_is_active'] = 'YES';
        $params['!=']['rc_view_srv'] = 'W';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['join']['mri_tb'] = 'rc_ticker = m_ticker';
        $extra = array(
            'fields' => array('recommend_tb.*', 'm_biz_total_score', 'm_future_score', 'm_biz_growth_score', 'm_biz_moat_score', 'm_biz_safety_score', 'm_biz_cashflow_score', 'm_future_stars', 'm_biz_moat_stars', 'm_biz_growth_stars', 'm_biz_safety_stars', 'm_biz_cashflow_stars'),
            'slavedb' => true,
        );
        $rc_data = $this->recommend_tb_model->getList($params, $extra)->getData();

        if(sizeof($rc_data) != 1) {
            $this->common->historyback();
            return;
        }

        $rc_data = array_pop($rc_data);
        $rc_data['m_future_stars'] = @sprintf('%0.1f', $rc_data['m_future_stars']);            

        if($rc_data['rc_endtype'] !='SUCCESS' && $rc_data['rc_endtype'] !='SELL') {
			$free_ticker = get_cookie('free_ticker');
			$free_ticker = explode('|', $free_ticker);
			if($rc_data['rc_id'] == $free_ticker[0] || $rc_data['rc_id'] == $free_ticker[1]) {
				//로그인체크 생략
			}
			else {
				$this->payCheck();
			}
        }

        //$rc_data['rc_ticker'] = 'GOGL';
        $rc_data['ticker'] = $this->ticker_info_map[$rc_data['rc_ticker']];

        if($this->is_soft === true){
            $host = 'kiwoom2';
        }
        else {
            $host = 'kiwoom';
        }

        $rc_data['rc_invest_point'] = str_replace('https://www.choicestock.co.kr/','https://'.$host.'.choicestock.co.kr/'.KW.'_',$rc_data['rc_invest_point']);

        $data['rc_data'] = $rc_data;
        //echo '<pre>'; print_r($rc_data);
        $chart_value = array();
        $chart = $this->itoozaapi->getSEPListForChart(array($rc_data['rc_ticker']));
        if(isset($chart[$rc_data['rc_ticker']]) && is_array($chart[$rc_data['rc_ticker']])) {
            $chart_value = array_slice($chart[$rc_data['rc_ticker']], (-20*6), (20*6)); // 6개월 
        }
        //$chart_value = implode(',', $chart_value);
        //$data['chart_value'] = $chart_value;
        $data['chart_value'] = implode(',', array_values($chart_value));
        $data['chart_key'] = array_keys($chart_value);


        // 투자지표
        $basedata = $this->itoozaapi->getBaseData($rc_data['rc_ticker'], 'MRY', 'data');
        //echo '<pre>';
        //print_r($basedata);
        //echo '</pre>';exit;

        $data['mrt_data'] = $basedata['last_mrt'];
        $data['mrq_data'] = $basedata['last_mrq'];
        $data['mry_data'] = $basedata['last_mry'];
        $data['sep_data'] = @array_shift($basedata['sepdata']);
        $data['mrt_list'] = $basedata['last_mrt_list'];
        $data['mry_list'] = $basedata['last_mry_list'];

        $params = array();
        $params['=']['dly_ticker'] = $rc_data['rc_ticker'];
        $extra = array();
        $extra['limit'] = 1;
		$extra['slavedb'] = true;
        $daily_data = $this->daily_tb_model->getList($params, $extra)->getData();
        $data['daily_data'] = array_pop($daily_data);

        /*
        $params = array();
        $params['=']['sf1_ticker'] = $rc_data['rc_ticker'];
        $params['=']['sf1_dimension'] = 'MRT';
        $mrt_data = $this->sf1_tb_model->getList($params)->getData();
        $data['mrt_data'] = array_pop($mrt_data);

        $params = array();
        $params['=']['sf1_ticker'] = $rc_data['rc_ticker'];
        $params['=']['sf1_dimension'] = 'MRQ';
        $mrq_data = $this->sf1_tb_model->getList($params)->getData();
        $data['mrq_data'] = array_pop($mrq_data);
        */

        // 조회수 증가
        $update_params = array(
            'rc_view_count' => 'rc_view_count+1'
        );
        $this->recommend_tb_model->doUpdate($rc_id, $update_params, array('rc_view_count'));
//echo '<pre>';
//print_r($data['mrt_list']);
        //$data['footer_type'] = '3';
        //$data['footer_notice'] = true;

        $this->header_data['header_template'] = '2';
        //$this->header_data['header_type'] = 'sch_heaher'; // 흰색 배경색에 종목명 노출, 검색영역 없는 타입 헤더
        $this->header_data['head_title'] = '종목추천';
        $this->header_data['back_url'] = '/'.KW.'_stock/recommend';
        //$this->header_data['back_url'] = '/';

          
        $data['meta_title'] = (($rc_data['rc_title'] != '') ? $rc_data['rc_title'].' | ':'').'종목추천 - 미주미초이스';
        //15min
        $data['is_open'] = $this->is_open;
        //if($this->is_open === true) {
        //    $data['ticker'] = $this->ticker_tb_model->convertSyncInfo($rc_data['ticker']);
        //}
        $this->_view('/stock/recommend_view', $data);
    }

    // 투자 레시피 Intro
    public function recipe_intro() {

		$this->payCheck();

        $data = array();
        $this->header_data['header_template'] = '6';
        $this->header_data['head_title'] = '투자 레시피';
        $data['meta_title'] = '투자레시피 - 미주미초이스';
        $data['is_soft'] = $this->is_soft;
        $this->_view('/stock/recipe_intro', $data);
    }

    // 투자 레시피
    public function recipe($type='dividend') {

		$this->payCheck();

        $this->load->model(DBNAME.'/mri_tb_model');

        $data = array();

		switch($type) {
            case 'dividend':
				$data['title'] = '배당매력주';
				$data['content'] = '초보도 벌 수 있는 투자의 정석<br>‘고배당주에 투자하라’';
				$data['subtitle'] = '배당수익률 % / ★ 배당매력';
				$data['bmimg'] = 'bgimg03';
                break;
            case 'growth': 
				$data['title'] = '이익성장주';
				$data['content'] = '위대한 기업을 찾는 공식<br>‘내일의 넷플릭스를 찾아라’';
				$data['subtitle'] = '영업이익성장률 % / ★ 미래성장성';
				$data['bmimg'] = 'bgimg04';
                break;
            case 'moat':
				$data['title'] = '소비자독점';
				$data['content'] = '워런 버핏 투자 전략의 핵심<br>‘소비자 독점 기업을 찾아라’';
				$data['subtitle'] = '영업이익률 % / ★ 사업독점력';
				$data['bmimg'] = 'bgimg05';
                break;
            case 'total_score': 
				$data['title'] = '슈퍼스톡';
				$data['content'] = '뛰는 주 위에 나는 주<br>‘슈퍼 종목을 찾아라’';
				$data['subtitle'] = '5년ROE % / ★ 투자매력';
				$data['bmimg'] = 'bgimg01';
                break;
            case 'earnings': 
				$data['title'] = '실적발표';
				$data['content'] = '이번 분기 어닝 서프라이즈 기업은?<br>‘기업은 실적으로 말한다’';
				$data['subtitle'] = '발표순이익, 전년대비 %';
				$data['bmimg'] = 'bgimg02';
                break;
            case 'soaring': 
				$data['title'] = '급등주';
				$data['content'] = '상승주는 떡잎부터 알아본다?<br>꾸준히 상승하는 종목을 발굴해보세요.';
				$data['bmimg'] = 'recipejump';
                break;
            case 'interest': 
				$data['title'] = '관심TOP50';
				$data['content'] = '초이스스탁US에서 가장<br>인기있는 종목들을 살펴보세요.';
				$data['subtitle'] = '<span class="atten">*<i class="attention on"></i>명 관심 &#47; 종목진단점수</span>';
				$data['bmimg'] = 'recipetop';
                break;
            case 'sale': 
				$data['title'] = '지금 세일중!';
				$data['content'] = '저평가 우량종목이 세일 중?<br>알고리즘으로 찾아낸 매수타이밍 종목!';
				$data['subtitle'] = '매매신호 / 종목진단점수';
				$data['bmimg'] = 'recipesale';
                break;
        }

        $list = $this->_get_recipe_data($type);

		if($type=='soaring') {
			$list['win_trend'] = $this->win_trend;
			$list['subtitle'] = '<span class="atten">* 상승률 % &#47; <i class="trans"></i> 주가추세</span>';

			foreach($list['one'] as $val) {
				if($val['ticker']['tkr_lastpricedate'] != '') {
					$list['update'] = date('y.m/d', strtotime($val['ticker']['tkr_lastpricedate']));
					break;
				}			
			}
		}
		else if($type=='interest') {
			foreach($list as $val) {
				if($val['ticker']['tkr_lastpricedate'] != '') {
					$data['up_date'] = $val['ticker']['tkr_lastpricedate'];
					break;
				}			
			}
		}
		else if($type=='earnings') {
			$data['up_date'] = $list['recent_report_day'];
		}
		else if($type=='sale') {
			$data['up_date'] = $list[0]['tkr_lastpricedate'];
		}
		else {
			$data['up_date'] = $list[0]['m_sep_date'];
		}

        $data['score_content_html'] = $this->load->view('/'.KW.'/stock/recipe_list.php', array('type' => $type, 'list' => $list, 'is_open' => $this->is_open), true);
        $data['type'] = $type;

        $this->header_data['header_template'] = '6';
        $this->header_data['head_title'] = '투자 레시피';
        $this->header_data['back_url'] = '/'.KW.'_stock/recipe_intro';

        $data['meta_title'] = $data['title'].' | 투자레시피 - 미주미초이스';

		if($this->session->userdata('is_paid') === false && ($type == 'sale' || $type == 'dividend')) {
			$data['title'] = '<i class=\'sale_icon\'></i>'.$data['title'];
		}

		$this->_view('/stock/recipe', $data);
    }

    public function ajax_get_recipe_list() {
        if( ! $this->input->is_ajax_request()) {
            return;
        }

        $type = $this->input->get('type');

		$list = $this->_get_recipe_data($type);

        $content_html = $this->load->view('/'.KW.'/stock/recipe_list.php', array('type' => $type, 'list' => $list, 'is_open' => $this->is_open), true);
        echo $content_html;
        return;
    }

    private function _get_recipe_data($type) {
        $this->load->model(DBNAME.'/mri_tb_model');

        $request = $this->input->get();

        $limit = 30; 
        $page = (isset($request['page']) && strlen($request['page']) > 0) ? $request['page'] : '1';

        if($type == 'earnings') {

            $recent_file = 'recent_report.inc';
            $file_path = QUANDL_WEBDATA.'/'.$recent_file;
            if( is_file($file_path) ) {
                $recent_report_file = unserialize(file_get_contents($file_path));
            }                
            if($page == 1 && sizeof($recent_report_file)>0) {
                $list = $recent_report_file;
            }
            else {
                $this->load->model(array(
                    'business/itoozaapi',
                    DBNAME.'/sf1_tb_model',
                ));

                // 최근 실적발표
                $params = array();
                $params['join']['ticker_tb'] = 'tkr_ticker = sf1_ticker';
                $params['join']['daily_tb'] = 'tkr_ticker = dly_ticker';
				$params['join']['mri_tb'] = 'tkr_ticker = m_ticker';
                $params['=']['sf1_dimension'] = 'MRQ'; 
                $params['=']['tkr_is_active'] = 'YES'; 
                $params['<=']['DATEDIFF(sf1_lastupdated, sf1_reportperiod)'] = '60'; 

                $extra = array(
		            'fields' => array('tkr_ticker', 'tkr_name', 'tkr_currency', 'tkr_sf1_currency', 'tkr_rate', 'tkr_rate_str', 'tkr_close', 'tkr_exchange', 'sf1_netinc', 'sf1_netinccmnusd', 'dly_marketcap', 'sf1_lastupdated', 'm_biz_dividend_score', 'm_biz_growth_score', 'm_biz_moat_score'),
                    'order_by' => 'sf1_lastupdated desc, sf1_netinc desc, sf1_netinccmnusd desc',
                    'offset' => $limit * ($page-1),
                    'limit' => $limit,
                    'cache_sec' => 3600*2,
                    'slavedb' => true,
                );

                $recent_report = $this->sf1_tb_model->getList($params, $extra)->getData();
                $list['recent_report'] = $recent_report;

                // 최근 실적발표 전년동기 대비 실적
                $recent_report_tickers = array_keys($this->common->getDataByPK($recent_report, 'tkr_ticker'));
                $recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($recent_report_tickers);

                $list['recent_report_rates'] = $recent_report_rates['rate'];
                $list['recent_report_rates_pm'] = $recent_report_rates['rate_pm'];
                $list['recent_report_day'] = array_shift(array_values($recent_report_rates['lastupdated']));
            }
        }
		else if($type == 'interest') {
			$interest_file = 'interest.json';
			$file_path = WEBDATA.'/json/'.$interest_file;
			
			if( is_file($file_path) ) {
				$list = json_decode(file_get_contents($file_path), true);
			}
		}
		else if($type == 'soaring') {
			$soaring_file = 'soaring_all.json';
			$file_path = WEBDATA.'/json/'.$soaring_file;
			
			if( is_file($file_path) ) {
				$list = json_decode(file_get_contents($file_path), true);
			}
		}
		else if($type == 'sale') {
			$sale_file = 'sale_ticker.json';
			$file_path = str_replace('hoon','datahero',WEBDATA).'/json/'.$sale_file;
			if( is_file($file_path) ) {
				$list = json_decode(file_get_contents($file_path), true);
			}
		}
        else {
            $add_params = array();
            $add_params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
            if($type=='growth'||$type=='moat') {
                $add_params['>=']['dly_marketcap'] = '10000';
            }
            $add_extra = array(
                'offset' => $limit * ($page-1),
            );
            $add_extra['slavedb'] = true;
            $add_extra['cache_sec'] = 3600*2;

            $list = $this->mri_tb_model->getRecomStockList($type, $limit, $add_params, $add_extra);
		}

        return $list;
    }

    public function vod() {
        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();

        // 6개월간 조회수 높은 콘텐츠 TOP 5중 3건 랜덤노출
        $params = array();
        //$params['=']['e_is_active'] = 'YES';
        //$params['!=']['e_view_srv'] = 'W';
        $params['=']['e_view_st'] = 'Y';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 month'));
        $extra = array(
            'order_by' => 'e_view_count DESC',
            'limit' => '5',
            'slavedb' => true,
        );
        $top_research = $this->explore_tb_model->getList($params, $extra)->getData();
        shuffle($top_research);
        $top_research = array_slice($top_research, 0, 3);
        $data['top_research'] = $top_research;

        $vod_mjm_file = 'vod_mjm_list.json';
        //$file_path = WEBDATA.'/json/'.$vod_mjm_file;
        $file_path = str_replace('hoon','datahero',WEBDATA).'/json/'.$vod_mjm_file;

        if( is_file($file_path) ) {
             $data['vod_mjm_list'] = json_decode(file_get_contents($file_path), true);
        }

        $this->header_data['header_template'] = '8';
        $this->header_data['head_title'] = '동영상';

        $data['meta_title'] = '동영상 - 미주미초이스';
        $this->_view('/stock/vod_mjm', $data);
    }

    // 동영상 리스트 [더보기]
    public function ajax_get_vod_list() {
        if( ! $this->input->is_ajax_request()) {
            return;
        }
        $this->load->model(DBNAME.'/vod_mjm_tb_model');

        $request = $this->input->post();
        if( ! ( isset($request['page']) && is_numeric($request['page']) && strlen($request['page']) > 0)) {
            return;
        }

        $page = $request['page'];

        $params = array();
		$params['=']['vm_view_kw'] = 'Y';
        //$params['=']['vm_is_active'] = 'YES';
        //$params['!=']['vm_view_srv'] = 'C';
        $params['<=']['vm_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
            'order_by' => 'vm_display_date DESC',
            'offset' => ($page-1) * 15,
            'limit' => 15,
            'slavedb' => true,
        );
        $vod_mjm = $this->vod_mjm_tb_model->getList($params, $extra)->getData();
        $list_data = array();
        $list_data['vod_mjm_list'] = $vod_mjm;
        echo $this->load->view('/'.KW.'/stock/vod_mjm_list', $list_data, true);
    }

    public function vod_view($no=0) {
        $this->load->model(DBNAME.'/vod_mjm_tb_model');

        $data = array();

        if( ! $this->vod_mjm_tb_model->get($no)->isSuccess()) {
            $this->common->historyback();
            return;
        }

        $row = $this->vod_mjm_tb_model->getData();

        if($row['vm_view_kw'] != 'Y' || $row['vm_display_date'] > date('Y-m-d H:i:s')) {
            $this->common->historyback();
            return;
        }
/*
        $link_type = $this->input->get('type');

        if( $row['e_pay'] == 'Y') {
            if($link_type=='at'){
                $this->loginCheck();
                $this->payCheck();
            }
            else {
                $this->payCheck();
                $this->loginCheck();
            }
        }
*/
        $this->payCheck();

        $data['row'] = $row;

        // 인기동영상 
        $params = array();
        //$params['=']['vm_is_active'] = 'YES';
        //$params['!=']['vm_view_srv'] = 'C';
		$params['=']['vm_view_kw'] = 'Y';
        $params['<=']['vm_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['vm_display_date'] = date('Y-m-d H:i:s', strtotime('-1 month'));
        $params['!=']['vm_id'] = $no;

        $extra = array(
            'order_by' => 'vm_view_count DESC',
            'limit' => 3,
            'slavedb' => true,
        );

        $vod_mjm = $this->vod_mjm_tb_model->getList($params, $extra)->getData();

        $data['vod_mjm'] = $vod_mjm;

        // 조회수 증가
        $update_params = array(
            'vm_view_count' => 'vm_view_count+1'
        );
        $this->vod_mjm_tb_model->doUpdate($no, $update_params, array('vm_view_count'));

        $this->header_data['header_template'] = '9';
        $this->header_data['head_title'] = '동영상';
        $this->header_data['back_url'] = '/'.KW.'_stock/vod';

        $data['meta_title'] = $row['vm_title'].' | 동영상 - 미주미초이스';

        $this->_view('/stock/vod_mjm_view', $data);
    }

    public function note($order_by='display_date') {
        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();

        // 6개월간 조회수 높은 콘텐츠 TOP 5중 3건 랜덤노출
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        //$params['!=']['e_view_srv'] = 'W';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 month'));
        $extra = array(
            'order_by' => 'e_view_count DESC',
            'limit' => '5',
            'slavedb' => true,
        );
        $top_research = $this->explore_tb_model->getList($params, $extra)->getData();
        shuffle($top_research);
        $top_research = array_slice($top_research, 0, 3);
        $data['top_research'] = $top_research;


        if( ! in_array($order_by, array('display_date', 'view_count'))) {
            $order_by = 'display_date';
        }
        $data['order_by'] = $order_by;
 
        // 리스팅
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        $params['in']['e_class'] = array('2','3');
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        //$params['!=']['e_view_srv'] = 'W';
        $extra = array(
            'order_by' => 'e_'.$order_by.' DESC',
            'limit' => '15',
            'slavedb' => true,
        );
        $explore = $this->explore_tb_model->getList($params, $extra)->getData();
        $data['explore'] = $explore;

        $this->header_data['header_template'] = '8';
        $this->header_data['head_title'] = '미국주식 종목노트';

		$data['meta_title'] = '종목노트 - 미주미초이스';
		$data['is_event'] = $this->is_event;
		$data['this_page'] = 'note';
        $this->_view('/stock/research', $data);
    }

    public function research($order_by='display_date') {
        $this->payCheck();
        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();

        // 6개월간 조회수 높은 콘텐츠 TOP 5중 3건 랜덤노출
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        //$params['!=']['e_view_srv'] = 'W';
        //$params['!=']['e_is_inside'] = 'Y';
        //$params['!=']['e_kiwoom_off'] = 'Y';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 month'));
        $extra = array(
            'order_by' => 'e_view_count DESC',
            'limit' => '5',
            'slavedb' => true,
        );
        $top_research = $this->explore_tb_model->getList($params, $extra)->getData();
        shuffle($top_research);
        $top_research = array_slice($top_research, 0, 3);
        $data['top_research'] = $top_research;

        if( ! in_array($order_by, array('display_date', 'view_count'))) {
            $order_by = 'display_date';
        }
        $data['order_by'] = $order_by;
 
        // 리스팅
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        $params['=']['e_class'] = '1';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        //$params['!=']['e_view_srv'] = 'W';
        //$params['!=']['e_is_inside'] = 'Y';
        $extra = array(
            'order_by' => 'e_'.$order_by.' DESC',
            'limit' => '15',
            'slavedb' => true,
        );
        $explore = $this->explore_tb_model->getList($params, $extra)->getData();
        $data['explore'] = $explore;

        $this->header_data['header_template'] = '8';
        $this->header_data['head_title'] = '미국주식 탐구생활';

        $data['meta_title'] = '탐구생활 - 미주미초이스';
        $data['is_event'] = $this->is_event;
        $data['is_soft'] = $this->is_soft;
		$data['this_page'] = 'research';
        $this->_view('/stock/research', $data);
    }

    // 종목분석 리스트 [더보기]
    public function ajax_get_research_list($more) {
        $this->load->model(DBNAME.'/explore_tb_model');
        if( ! $this->input->is_ajax_request()) {
            return;
        }

        $request = $this->input->post();
        if( ! ( isset($request['page']) && is_numeric($request['page']) && strlen($request['page']) > 0)) {
            return;
        }

        $order_by = $request['order_by'];
        if( ! in_array($order_by, array('display_date', 'view_count'))) {
            $order_by = 'display_date';
        }

        $page = $request['page'];

        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
		if($more == 'note') {
	        $params['in']['e_class'] = array('2', '3');
		}
		else {
	        $params['=']['e_class'] = '1';
		}
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        //$params['!=']['e_view_srv'] = 'W';
        //$params['!=']['e_is_inside'] = 'Y';
        $extra = array(
            'order_by' => 'e_'.$order_by.' DESC',
            'offset' => ($page-1) * 15,
            'limit' => 15,
            'slavedb' => true,
        );
        $explore = $this->explore_tb_model->getList($params, $extra)->getData();
        $list_data = array();
        $list_data['explore'] = $explore;
        $list_data['is_event'] = $this->is_event;
        echo $this->load->view('/'.KW.'/stock/research_list', $list_data, true);
    }

    public function research_view($no=0) {
        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();

        if( ! $this->explore_tb_model->get($no)->isSuccess()) {
            $this->common->historyback();
            return;
        }

        $row = $this->explore_tb_model->getData();

        if($row['e_view_st'] != 'Y' || $row['e_display_date'] > date('Y-m-d H:i:s')) {
            $this->common->historyback();
            return;
        }

        $link_type = $this->input->get('type');

        if( $row['e_pay'] == 'Y') {
			/*
            if($link_type=='at'){
                $this->loginCheck();
                $this->payCheck();
            }
            else {
                $this->payCheck();
                $this->loginCheck();
            }
			*/
            $this->payCheck();
        }

        if($this->is_soft === true){
            $host = 'kiwoom2';
        }
        else {
            $host = 'kiwoom';
        }

        $row['e_content'] = str_replace('https://www.choicestock.co.kr/','https://'.$host.'.choicestock.co.kr/'.KW.'_',$row['e_content']);

		if($row['e_class']=='3') {
			$row['e_content'] =  $this->stripUrl($row['e_content']);
		}
        $data['row'] = $row;

        // 탐구생활 
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 month'));
        //$params['!=']['e_view_srv'] = 'W';
        //$params['!=']['e_is_inside'] = 'Y';
        $params['!=']['e_id'] = $no;

        $extra = array(
            'order_by' => 'e_view_count DESC',
            'limit' => 3,
            'slavedb' => true,
        );

        $explore = $this->explore_tb_model->getList($params, $extra)->getData();

        $data['explore'] = $explore;

        // 조회수 증가
        $update_params = array(
            'e_view_count' => 'e_view_count+1'
        );
        $this->explore_tb_model->doUpdate($no, $update_params, array('e_view_count'));

        $this->header_data['header_template'] = '9';

		if($row['e_class']=='1') {
			$this->header_data['head_title'] = '미국주식 탐구생활';
			$this->header_data['back_url'] = '/'.KW.'_stock/research';
			$data['meta_title'] = $row['e_title'].' | 탐구생활 - 미주미초이스';
			$data['back_url'] = '/'.KW.'_stock/research';
		}
		else {
			$this->header_data['head_title'] = '미국주식 종목노트';
			$this->header_data['back_url'] = '/'.KW.'_stock/note';
			$data['meta_title'] = $row['e_title'].' | 종목노트 - 미주미초이스';
			$data['back_url'] = '/'.KW.'_stock/note';
		}

        $this->_view('/stock/research_view', $data);
    }

    public function morning() {
        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();
        // 리스팅
        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        $params['=']['e_class'] = '3';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
            'order_by' => 'e_display_date DESC',
            'limit' => '15',
            'slavedb' => true,
        );
        $morning = $this->explore_tb_model->getList($params, $extra)->getData();
        $data['morning'] = $morning;

        $this->header_data['header_template'] = '2';
        $this->header_data['head_title'] = '모닝브리핑';

        $data['meta_title'] = '모닝브리핑 - 미주미초이스';
        $data['is_event'] = $this->is_event;
        $this->header_data['back_url'] = '/';

        $this->_view('/stock/morning', $data);
    }

    // 종목분석 리스트 [더보기]
    public function ajax_get_morning_list() {
        $this->load->model(DBNAME.'/explore_tb_model');
        if( ! $this->input->is_ajax_request()) {
            return;
        }

        $request = $this->input->post();
        if( ! ( isset($request['page']) && is_numeric($request['page']) && strlen($request['page']) > 0)) {
            return;
        }

        $page = $request['page'];

        $params = array();
        $params['=']['e_view_st'] = 'Y';
        //$params['=']['e_is_active'] = 'YES';
        $params['=']['e_class'] = '3';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
            'order_by' => 'e_display_date DESC',
            'offset' => ($page-1) * 15,
            'limit' => 15,
            'slavedb' => true,
        );
        $morning = $this->explore_tb_model->getList($params, $extra)->getData();
        $list_data = array();
        $list_data['morning'] = $morning;
        $list_data['is_event'] = $this->is_event;
        echo $this->load->view('/'.KW.'/stock/morning_list', $list_data, true);
    }

    public function morning_view($no=0) {
		/*
        $link_type = $this->input->get('type');

        if($link_type=='at'){
            $this->loginCheck();
            $this->payCheck();
        }
        else {
            $this->payCheck();
            $this->loginCheck();
        }
		*/
        $this->payCheck();

        $this->load->model(DBNAME.'/explore_tb_model');

        $data = array();

        if( ! $this->explore_tb_model->get($no)->isSuccess()) {
            $this->common->historyback();
            return;
        }

        $row = $this->explore_tb_model->getData();

        if($row['e_display_date'] > date('Y-m-d H:i:s') || $row['e_view_st'] != 'Y' || $row['e_class'] != '3') {
            $this->common->historyback();
            return;
        }

		$row['e_content'] =  $this->stripUrl($row['e_content']);
        $data['row'] = $row;

        // 조회수 증가
        $update_params = array(
            'e_view_count' => 'e_view_count+1'
        );
        $this->explore_tb_model->doUpdate($no, $update_params, array('e_view_count'));

        //$this->header_data['header_template'] = '4';
        $this->header_data['head_title'] = '모닝브리핑';
        $this->header_data['back_url'] = '/'.KW.'_stock/morning';
        //$this->header_data['back_url'] = '/';
        $data['meta_title'] = $row['mo_title'].' | 모닝브리핑 - 미주미초이스';

        $this->_view('/stock/morning_view', $data);
    }

    // 알림 리스트
    public function alarm() {
        $this->load->model(DBNAME.'/notify_tb_model');

        // 알림
        $params = array();
        //$params['=']['nt_is_active'] = 'YES';
        $params['=']['nt_view_kw'] = 'Y';
        $params['not in']['nt_table'] = array('master_tb', 'analysis_tb');
        //$params['!=']['nt_view_srv'] = 'W';
        $params['<=']['nt_display_date'] = date('Y-m-d H:i:s');

        $extra = array();
        $extra['limit'] = 20;
        $extra['order_by'] = 'nt_display_date DESC';
        $extra['slavedb'] = true;
        $list = $this->notify_tb_model->getList($params, $extra)->getData();

        //echo '<pre>'; print_r($list);
        $data = array();
        //$data['noti_list'] = $list;
        $this->header_data['noti_list'] = $list;
        $this->header_data['noti_table_map'] = $this->notify_tb_model->getTableNewMap();
        /*
        echo '<pre>'; print_r($list);
        $this->load->model(DBNAME.'/master_tb_model');

        $data = array();

        $params = array();
        $extra = array(
            'order_by' => 'ms_updated_at DESC'
        );
        $master = $this->master_tb_model->getList($params, $extra)->getData();
        foreach($master as $key => $val) {
            $rp_ticker = array();
            if(strlen($val['ms_representative_ticker']) > 0) {
                foreach(explode(',', $val['ms_representative_ticker']) as $rt) {
                    $rp_ticker[$rt] = array('ticker' => $rt, 'name' => $this->ticker_info_map[$rt]['tkr_name']);
                }
            }
            $master[$key]['rp_ticker'] = $rp_ticker;
        }
        $data['master'] = $master;
        */
        $this->header_data['header_template'] = '10';
        $this->header_data['back_url'] = '/';
        $this->header_data['head_title'] = '알림';
        $this->_view('/stock/alarm', $data);
    }

	public function add_catch2() {

        $this->payCheck();
        //$this->loginCheck();

		$pg = $this->input->get('page');
		$idx = $this->input->get('idx');
		$mode = $this->input->get('mode');

		if($pg < 1 || $mode != 'auto' || $idx < 1) {
			exit;
		}

		$user_id = $this->session->userdata('user_id');
		$is_next = true;
		
		$catch_file = $user_id.'.json';

		$file_path = WEBDATA.'/catch/'.$catch_file;

		if( is_file($file_path) ) {
			$ticker_info = json_decode(file_get_contents($file_path), true);


			$total_count = sizeof($ticker_info);
			$cnt = $pg*30;

			$ticker_list = array_slice($ticker_info, $cnt, 30);
			if(($total_count-$cnt)<=30) $is_next = false;

			$ticker_rep = array();

			if(is_array($sector_list) && sizeof($sector_list) > 0) {
				foreach($sector_list as $key=>$val) {
					if($val=='1') {
						$ticker_rep[] = $this->ticker_rep[$key];
					}
				}
				shuffle($ticker_rep);
			}

			$catch_all = '';
			foreach($ticker_list as $ticker) {

				$is_wowinfo = false;
				$wval = $this->common->get_wowtv_info($ticker['tkr_ticker']);
				if(is_array($wval) && sizeof($wval)) {
					$is_wowinfo = true;
				}
				
				if($is_wowinfo === true) {
					$tkr_close = $this->common->set_pricepoint(number_format($wval['last_price'], 2), '1');

					$updown = 'decrease';
					$sign = '';
					if($wval['diff_rate'] > 0) {
						$updown = 'increase';
						$sign = '+';
					}

					$ticker_info[$ticker['tkr_ticker']]['tkr_diff_str'] = $sign.$wval['diff_price'];
					$tkr_rate_str = $sign.$this->common->set_pricepoint($wval['diff_rate'], '2').'<b>%</b>';
				
					$lastpricedate = '';
					if($wval['status'] == '0') {
						$lastpricedate = date('y.m/d H:i', strtotime($wval['updated_at'])).', ';
					}
					else {
						$lastpricedate = date('y.m/d', strtotime($wval['updated_at'])).', ';
					}
				}
				else {
					$tkr_close = $this->common->set_pricepoint(number_format($ticker_info[$ticker['tkr_ticker']]['tkr_close'], 2), '1');

					$updown = 'decrease';
					if($ticker_info[$ticker['tkr_ticker']]['tkr_rate'] > 0) $updown = 'increase';

					$tkr_rate_str = $this->common->set_pricepoint($ticker_info[$ticker['tkr_ticker']]['tkr_rate_str'], '2');
					
					$lastpricedate = '';
					if(isset($ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate'])&&$ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate']) $lastpricedate = date('y.m/d', strtotime($ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate'])).', ';
				}

				$recom = '';
				if($ticker_info[$ticker['tkr_ticker']]['is_recom_ticker']) {
					$ticker_info[$ticker['tkr_ticker']]['recom_link'] = str_replace('/stock/recommend_view', '/'.KW.'_stock/recommend_view', $ticker_info[$ticker['tkr_ticker']]['recom_link']);
					$recom  = '<div class="go_page">'."\n";
					$recom .= '    <a href="'.$ticker_info[$ticker['tkr_ticker']]['recom_link'].'"><span class="quarter recom">추천</span></a>'."\n";
					$recom .= '    <a href="'.$ticker_info[$ticker['tkr_ticker']]['recom_link'].'" class="more"><img src="/img/more_white.png" alt="더보기"></a>'."\n";
					$recom .= '</div>'."\n";
				}

				$fairvalue  = '<span class="i_graph no_value">'."\n";
				$fairvalue .= '<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>'."\n";
				$fairvalue .= '</span>'."\n";
				if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] >= -5) {
					$fairvalue  = '<span class="i_graph">'."\n";
					$fairvalue .= '<span class="g_bar"><span class="g_action" style="left: '.$ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'].'%;"></span></span>'."\n";
					$fairvalue .= '</span>'."\n";
				}
				$recipe = '';

				if($ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_dividend_score'] >= 16) {
					$recipe = '<li><a href="/'.KW.'_stock/recipe/dividend">배당주</a></li>'."\n";
				}
				if($ticker_info[$ticker['tkr_ticker']]['mri']['m_future_score'] >= 16) {
					$recipe .= '<li><a href="/'.KW.'_stock/recipe/growth">성장주</a></li>'."\n";
				}
				if($ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_moat_score'] >= 16) {
					$recipe .= '<li><a href="/'.KW.'_stock/recipe/moat">가치주</a></li>'."\n";
				}

				$marketcap = '소';
				if(in_array($ticker_info[$ticker['tkr_ticker']]['mri']['m_scalemarketcap'], array('5 - Large','6 - Mega'))) {
					$marketcap = '대';
				}
				else if(in_array($ticker_info[$ticker['tkr_ticker']]['mri']['m_scalemarketcap'], array('4 - Mid'))) {
					$marketcap = '중';
				}

				$attention = '';
				if($ticker_info[$ticker['tkr_ticker']]['like']['mi_like']=='Y') {
					$attention = ' on';
				}
                $ru = urlencode(KW.'_stock/catch_info');
				$tkr_like = number_format($ticker_info[$ticker['tkr_ticker']]['like']['total_count']);

				$tkr_industry = '';
				$choice_ticker = '';
				$choice_name = '';
				$industry_commnet = '';

				$tkr_industry = $ticker_info[$ticker['tkr_ticker']]['tkr_industry'];

				foreach($ticker_rep as $ind_val) {
					if($tkr_industry==$ind_val['industry'] && $ticker_info[$ticker['tkr_ticker']]['tkr_name'] != $ind_val['name'] ) {
						$choice_ticker = $ind_val['ticker'];
						$choice_name = $ind_val['name'];
						break;
					}
				}

				if($choice_ticker != '' && $choice_name != '') {
					$industry_commnet = '<span class="same_selt"><a href="/'.KW.'_search/summary/'.$choice_ticker.'">'.$choice_name.'</a>와(과) 같은 업종입니다</span>';
				}
$pre = KW;
$catch_list = <<<PHPSKIN
<div class="chart_catch">
	<div class="data_area">
		<h2 class="title"><a href="/{$pre}_search/summary/{$ticker['tkr_ticker']}#">{$ticker_info[$ticker['tkr_ticker']]['tkr_name']}</a></h2>
		<ul class="info">
			<li class="sum"><span class="eng">{$ticker['tkr_ticker']}</span> </li>
		</ul>
		<ul class="detail">
			<li class="num">
				<span>{$tkr_close}</span>
			</li>
			<li class="per">
				<span class="{$updown}">{$ticker_info[$ticker['tkr_ticker']]['tkr_diff_str']}
				<span>({$tkr_rate_str})</span></span>
			</li>
			<li class="day">{$lastpricedate}USD</li>
		</ul>
		{$recom}
		<div class="area">
			<div id="top_analy_{$ticker['tkr_ticker']}" class="containerS1"></div>
				<script>SubAnalyTopChart('top_analy_{$ticker['tkr_ticker']}', [{$ticker_info[$ticker['tkr_ticker']]['chart_value']}]);</script>
				<div class="analysis_score">
					<span class="score"><strong>{$ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_total_score']}</strong> 점</span>
					<div class="chart_analysis">
						<div class="line">
							{$fairvalue}
							<ul class="evaluation">
								<li>저</li>
								<li>적정가</li>
								<li>고</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		<ul class="info_icon">
			<li>{$ticker_info[$ticker['tkr_ticker']]['tkr_exchange']}</li>
			{$recipe}
			<li>{$marketcap}형주</li>
		</ul>
	</div>
	<p class="attention{$attention}" id="catch_icon_{$idx}" onClick="javascript:fnMyitem('{$ticker['tkr_ticker']}', '{$ru}', 'Y', '{$idx}');"><i></i>관심 <span id='catch_count_{$idx}'>({$tkr_like})</span></p>
	{$industry_commnet}
</div>
PHPSKIN;
				$catch_all .= $catch_list."\n";
				$idx++;
			
			}

			if($catch_all!='') {
				$nextPage = $pg + 1;
				//echo '<br>nextPage==>'.$nextPage;
				echo $catch_all;
				if($is_next === true) {
					echo '<div class="next"><a href="/'.KW.'_stock/add_catch2?mode=auto&idx='.$idx.'&page='.$nextPage.'" class="nextPage">다음 페이지</a></div>';
				}
			}
		}
	}

    public function add_catch() {

        $this->payCheck();
        //$this->loginCheck();

        $pg = $this->input->get('page');
        $idx = $this->input->get('idx');
        $mode = $this->input->get('mode');

        if($pg < 1 || $mode != 'auto' || $idx < 1) {
            exit;
        }

        $user_id = $this->session->userdata('user_id');
        $is_next = true;
        //캐치 확인
        $this->load->model(DBNAME.'/catch_tb_model');

        $params = array();
        $params['=']['c_user_id'] = $user_id;

        $extra = array(
            'fields' => 'c_tickerlist, c_type, c_size, c_sector',
            'slavedb' => true
        );

        $catch_list = array_shift($this->catch_tb_model->getList($params, $extra)->getData());
        
        if(is_array($catch_list) && sizeof($catch_list)>0 && $catch_list['c_tickerlist'] != '') {

            $ticker_list = explode('|',$catch_list['c_tickerlist']);
            $sector_list = explode('|',$catch_list['c_sector']);

            $total_count = count($ticker_list)-1;
            $cnt = $pg*30;

            $ticker_list = array_slice($ticker_list, $cnt, 30);
            
            if(($total_count-$cnt)<=30) $is_next = false;

            $this->load->model(array(
                'business/itoozaapi',
                DBNAME.'/recommend_tb_model',
                DBNAME.'/ticker_tb_model',
				DBNAME.'/sep_tb_model',
                DBNAME.'/mri_tb_model',
            ));

            $params = array();
            $params['in']['tkr_ticker'] = array_filter($ticker_list);
            //$params['=']['tkr_is_active'] = 'YES';
            $extra = array(
                'fields' => array('tkr_ticker'),
                //'cache_sec' => 3600*6,
                'slavedb' => true,
                'order_by' => 'tkr_rate desc'
            );

            $ticker_list = $this->ticker_tb_model->getList($params, $extra)->getData();

            if(is_array($ticker_list) && sizeof($ticker_list)>0) {

                $ticker_rep = array();

                if(is_array($sector_list) && sizeof($sector_list) > 0) {
                    foreach($sector_list as $key=>$val) {
                        if($val=='1') {
                            $ticker_rep[] = $this->ticker_rep[$key];
                        }
                    }
                    shuffle($ticker_rep);
                }

                $catch_all = '';
                foreach($ticker_list as $key => $ticker) {

                    if($ticker['tkr_ticker']!='') {

                        $ticker_info[$ticker['tkr_ticker']] = $this->ticker_info_map[$ticker['tkr_ticker']];

                        // 종목추천에 등록된 ticker 인지 확인
                        $ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = FALSE;

                        $params = array();
                        $params['=']['rc_ticker'] = $ticker['tkr_ticker'];
                        $params['=']['rc_is_active'] = 'YES';
                        $params['!=']['rc_view_srv'] = 'W';
                        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
                        $params['in']['rc_endtype'] = array('ING','SUCCESS','SELL');
                        $extra = array(
                            'order_by' => 'rc_id DESC',
                            'slavedb' => TRUE
                        );

                        $recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
                        if(sizeof($recom_data) > 0) {
                            $recom = array_shift($recom_data);
                            $ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = TRUE;
                            $ticker_info[$ticker['tkr_ticker']]['recom_link'] = '/'.KW.'_stock/recommend_view/'.$recom['rc_id'];
                        }


                        $ticker_info[$ticker['tkr_ticker']]['like'] = $this->like($ticker['tkr_ticker'], 'Y');

                        //스파이더 데이터 가져오기
                        $params = array();
                        $params['=']['m_ticker'] = $ticker['tkr_ticker'];
                        $extra = array(
                            'fields' => array('m_biz_dividend_score', 'm_future_score', 'm_biz_moat_score', 'm_biz_total_score', 'm_v_fairvalue1', 'm_v_fairvalue2', 'm_v_fairvalue3', 'm_v_fairvalue4', 'm_v_fairvalue5', 'm_close', 'm_scalemarketcap'),
                            'slavedb' => true,
                        );

                        $mri_info = array_shift($this->mri_tb_model->getList($params, $extra)->getData());

                        $ticker_info[$ticker['tkr_ticker']]['mri'] = $mri_info;
                        $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] =  $this->get_fairrate($ticker_info[$ticker['tkr_ticker']]['tkr_close'], $mri_info);
                        if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate']== -5) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 0;
                        else if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] == 106) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 100;
                        
						/*
						$chart_value = array();
						$chart = $this->itoozaapi->getSEPListForChart(array($ticker['tkr_ticker']));

						if(isset($chart[$ticker['tkr_ticker']]) && is_array($chart[$ticker['tkr_ticker']])) {
							$chart_value = array_slice($chart[$ticker['tkr_ticker']], -20, 20);
						}
						*/
							
						$chart_value = array();

						$sep_extra = array();
						$sep_extra['order_by'] = 'sep_date asc'; 
						$sep_extra['cache_sec'] = 3600;
						$sep_extra['quandldb'] = true;
						$sep_extra['fields'] = array('sep_date', 'sep_dividends');

						$sep_params = array();
						$sep_params['=']['sep_ticker'] = $ticker['tkr_ticker'];
						$before_day = 40;
						$sep_params['>']['sep_date'] = date('Y-m-d', time()-86400*$before_day);
						
						$chart_list = array();
						$chart_list = $this->sep_tb_model->getList($sep_params, $sep_extra)->getData();

						foreach($chart_list as $val) {
							$chart[$val['sep_date']] = $val['sep_dividends'];
						}
						if(is_array($chart) && sizeof($chart) > 0) {
							$chart_value = array_slice($chart, -20, 20);

							$ticker_info[$ticker['tkr_ticker']]['chart_value'] = implode(',', array_values($chart_value));
							$ticker_info[$ticker['tkr_ticker']]['chart_key'] = array_keys($chart_value);
						}

                        $tkr_close = $this->common->set_pricepoint($ticker_info[$ticker['tkr_ticker']]['tkr_close'], '1');

                        $updown = 'decrease';
                        if($ticker_info[$ticker['tkr_ticker']]['tkr_rate'] > 0) $updown = 'increase';

                        $tkr_rate_str = $this->common->set_pricepoint($ticker_info[$ticker['tkr_ticker']]['tkr_rate_str'], '2');
                        
                        $lastpricedate = '';
                        if(isset($ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate'])&&$ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate']) $lastpricedate = date('y.m/d', strtotime($ticker_info[$ticker['tkr_ticker']]['tkr_lastpricedate'])).', ';
                        
                        
                        $recom = '';
                        if($ticker_info[$ticker['tkr_ticker']]['is_recom_ticker']) {
                            $recom  = '<div class="go_page">'."\n";
                            $recom .= '    <a href="'.$ticker_info[$ticker['tkr_ticker']]['recom_link'].'"><span class="quarter recom">추천</span></a>'."\n";
                            $recom .= '    <a href="'.$ticker_info[$ticker['tkr_ticker']]['recom_link'].'" class="more"><img src="/img/more_white.png" alt="더보기"></a>'."\n";
                            $recom .= '</div>'."\n";
                        }

                        $fairvalue  = '<span class="i_graph no_value">'."\n";
                        $fairvalue .= '<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>'."\n";
                        $fairvalue .= '</span>'."\n";
                        if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] >= -5) {
                            $fairvalue  = '<span class="i_graph">'."\n";
                            $fairvalue .= '<span class="g_bar"><span class="g_action" style="left: '.$ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'].'%;"></span></span>'."\n";
                            $fairvalue .= '</span>'."\n";
                        }
                        $recipe = '';

                        if($ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_dividend_score'] >= 16) {
                            $recipe = '<li><a href="/'.KW.'_stock/recipe/dividend">배당주</a></li>'."\n";
                        }
                        if($ticker_info[$ticker['tkr_ticker']]['mri']['m_future_score'] >= 16) {
                            $recipe .= '<li><a href="/'.KW.'_stock/recipe/growth">성장주</a></li>'."\n";
                        }
                        if($ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_moat_score'] >= 16) {
                            $recipe .= '<li><a href="/'.KW.'_stock/recipe/moat">가치주</a></li>'."\n";
                        }

                        $marketcap = '소';
                        if(in_array($ticker_info[$ticker['tkr_ticker']]['mri']['m_scalemarketcap'], array('5 - Large','6 - Mega'))) {
                            $marketcap = '대';
                        }
                        else if(in_array($ticker_info[$ticker['tkr_ticker']]['mri']['m_scalemarketcap'], array('4 - Mid'))) {
                            $marketcap = '중';
                        }

                        $attention = '';
                        if($ticker_info[$ticker['tkr_ticker']]['like']['mi_like']=='Y') {
                            $attention = ' on';
                        }
                        $ru = urlencode(KW.'_stock/catch_info');
                        $tkr_like = number_format($ticker_info[$ticker['tkr_ticker']]['like']['total_count']);

                        $tkr_industry = '';
                        $choice_ticker = '';
                        $choice_name = '';
                        $industry_commnet = '';

                        $tkr_industry = $ticker_info[$ticker['tkr_ticker']]['tkr_industry'];

                        foreach($ticker_rep as $ind_val) {
                            if($tkr_industry==$ind_val['industry'] && $ticker_info[$ticker['tkr_ticker']]['tkr_name'] != $ind_val['name'] ) {
                                $choice_ticker = $ind_val['ticker'];
                                $choice_name = $ind_val['name'];
                                break;
                            }
                        }

                        if($choice_ticker != '' && $choice_name != '') {
                            $industry_commnet = '<span class="same_selt"><a href="/'.KW.'_search/summary/'.$choice_ticker.'">'.$choice_name.'</a>와(과) 같은 업종입니다</span>';
                        }
$pre = KW;
$catch_list = <<<PHPSKIN
<div class="chart_catch">
    <div class="data_area">
        <h2 class="title"><a href="/{$pre}_search/summary/{$ticker['tkr_ticker']}#">{$ticker_info[$ticker['tkr_ticker']]['tkr_name']}</a></h2>
        <ul class="info">
            <li class="sum"><span class="eng">{$ticker['tkr_ticker']}</span> </li>
        </ul>
        <ul class="detail">
            <li class="num">
                <span>{$tkr_close}</span>
            </li>
            <li class="per">
                <span class="{$updown}">{$ticker_info[$ticker['tkr_ticker']]['tkr_diff_str']}
                <span>({$tkr_rate_str})</span></span>
            </li>
            <li class="day">{$lastpricedate}USD</li>
        </ul>
        {$recom}
        <div class="area">
            <div id="top_analy_{$ticker['tkr_ticker']}" class="containerS1"></div>
                <script>SubAnalyTopChart('top_analy_{$ticker['tkr_ticker']}', [{$ticker_info[$ticker['tkr_ticker']]['chart_value']}]);</script>
                <div class="analysis_score">
                    <span class="score"><strong>{$ticker_info[$ticker['tkr_ticker']]['mri']['m_biz_total_score']}</strong> 점</span>
                    <div class="chart_analysis">
                        <div class="line">
                            {$fairvalue}
                            <ul class="evaluation">
                                <li>저</li>
                                <li>적정가</li>
                                <li>고</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        <ul class="info_icon">
            <li>{$ticker_info[$ticker['tkr_ticker']]['tkr_exchange']}</li>
            {$recipe}
            <li>{$marketcap}형주</li>
        </ul>
    </div>
    <p class="attention{$attention}" id="catch_icon_{$idx}" onClick="javascript:fnMyitem('{$ticker['tkr_ticker']}', '{$ru}', 'Y', '{$idx}');"><i></i>관심 <span id='catch_count_{$idx}'>({$tkr_like})</span></p>
    {$industry_commnet}
</div>
PHPSKIN;
                        $catch_all .= $catch_list."\n";
                        $idx++;
                    }
                }

                if($catch_all!='') {
                    $nextPage = $pg + 1;
                    //echo '<br>nextPage==>'.$nextPage;
                    echo $catch_all;
                    if($is_next === true) {
                        echo '<div class="next"><a href="/'.KW.'_stock/add_catch?mode=auto&idx='.$idx.'&page='.$nextPage.'" class="nextPage">다음 페이지</a></div>';
                    }
                }
            }
        }
    }

    public function catch_info() {

        $this->payCheck();

		$catch_list = array();
		$ticker_info = array();
		$is_next = false;
		$is_file = false;

		if($this->session->userdata('is_paid') === TRUE) {
			$user_id = $this->session->userdata('user_id');

			//캐치 확인
			$this->load->model(DBNAME.'/catch_tb_model');

			$params = array();
			$params['=']['c_user_id'] = $user_id;

			$extra = array(
				'fields' => 'c_tickerlist, c_type, c_size, c_sector',
				'slavedb' => true
			);

			$catch_list = array_pop($this->catch_tb_model->getList($params, $extra)->getData());

			$catch_file = $user_id.'.json';
			$file_path = WEBDATA.'/catch/'.$catch_file;

			if( is_file($file_path) ) {
				$ticker_info = json_decode(file_get_contents($file_path), true);
				$total_count = sizeof($ticker_info);

				if($total_count>30) $is_next = true;
				$ticker_info= array_slice($ticker_info, 0, 30);  
				$is_file = true;
			}
			else {
			
				if(is_array($catch_list) && sizeof($catch_list)>0 && $catch_list['c_tickerlist'] != '') {
					$ticker_list = explode('|',$catch_list['c_tickerlist']);
					$total_count = count($ticker_list)-1;

					if($total_count>30) $is_next = true;

					$ticker_list = array_slice($ticker_list, 0, 30);

					$this->load->model(array(
						'business/itoozaapi',
						DBNAME.'/recommend_tb_model',
						DBNAME.'/ticker_tb_model',
						DBNAME.'/sep_tb_model',
						DBNAME.'/mri_tb_model',
					));

					$params = array();
					$params['in']['tkr_ticker'] = array_filter($ticker_list);
					$params['=']['tkr_is_active'] = 'YES';
					$extra = array(
						'fields' => array('tkr_ticker'),
						//'cache_sec' => 3600*6,
						'slavedb' => true,
						'order_by' => 'tkr_rate desc'
					);

					$ticker_list = $this->ticker_tb_model->getList($params, $extra)->getData();

					foreach($ticker_list as $key => $ticker) {

						if($ticker['tkr_ticker']!='') {

							$ticker_info[$ticker['tkr_ticker']] = $this->ticker_info_map[$ticker['tkr_ticker']];

							// 종목추천에 등록된 ticker 인지 확인
							$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = FALSE;

							$params = array();
							$params['=']['rc_ticker'] = $ticker['tkr_ticker'];
							$params['=']['rc_is_active'] = 'YES';
							$params['!=']['rc_view_srv'] = 'W';
							$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
							$params['in']['rc_endtype'] = array('ING','SUCCESS','SELL');
							$extra = array(
								'order_by' => 'rc_id DESC',
								'slavedb' => TRUE
							);

							$recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
							if(sizeof($recom_data) > 0) {
								$recom = array_shift($recom_data);
								$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = TRUE;
								$ticker_info[$ticker['tkr_ticker']]['recom_link'] = '/'.KW.'_stock/recommend_view/'.$recom['rc_id'];
							}

							$ticker_info[$ticker['tkr_ticker']]['like'] = $this->like($ticker['tkr_ticker'], 'Y');

							//스파이더 데이터 가져오기
							$params = array();
							$params['=']['m_ticker'] = $ticker['tkr_ticker'];
							$extra = array(
								'fields' => array('m_biz_dividend_score', 'm_future_score', 'm_biz_moat_score', 'm_biz_total_score', 'm_v_fairvalue1', 'm_v_fairvalue2', 'm_v_fairvalue3', 'm_v_fairvalue4', 'm_v_fairvalue5', 'm_close', 'm_scalemarketcap'),
								'slavedb' => true,
							);

							$mri_info = array_shift($this->mri_tb_model->getList($params, $extra)->getData());

							$ticker_info[$ticker['tkr_ticker']]['mri'] = $mri_info;
							$ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] =  $this->get_fairrate($ticker_info[$ticker['tkr_ticker']]['tkr_close'], $mri_info);
							if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate']== -5) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 0;
							else if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] == 106) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 100;
							
							/*
							$chart_value = array();
							$chart = $this->itoozaapi->getSEPListForChart(array($ticker['tkr_ticker']));

							if(isset($chart[$ticker['tkr_ticker']]) && is_array($chart[$ticker['tkr_ticker']])) {
								$chart_value = array_slice($chart[$ticker['tkr_ticker']], -20, 20);
							}
							*/

							$chart_value = array();

							$sep_extra = array();
							$sep_extra['order_by'] = 'sep_date asc'; 
							$sep_extra['cache_sec'] = 3600;
							$sep_extra['quandldb'] = true;
							$sep_extra['fields'] = array('sep_date', 'sep_dividends');

							$sep_params = array();
							$sep_params['=']['sep_ticker'] = $ticker['tkr_ticker'];
							$before_day = 40;
							$sep_params['>']['sep_date'] = date('Y-m-d', time()-86400*$before_day);
							
							$chart_list = array();
							$chart_list = $this->sep_tb_model->getList($sep_params, $sep_extra)->getData();

							foreach($chart_list as $val) {
								$chart[$val['sep_date']] = $val['sep_dividends'];
							}
							if(is_array($chart) && sizeof($chart) > 0) {
								$chart_value = array_slice($chart, -20, 20);

								$ticker_info[$ticker['tkr_ticker']]['chart_value'] = implode(',', array_values($chart_value));
								$ticker_info[$ticker['tkr_ticker']]['chart_key'] = array_keys($chart_value);
							}
						}
					}
				}			
			}
		}
		else {

			//최근 본 종목(임시)
			//$search_ticker = array_filter(array_unique(array_map('trim', explode(',', $_COOKIE['search_history']))));
			//$search_ticker_codes = array_slice($search_ticker, 0, 5);
			$catch_list = $this->input->get('catch_list');
			$sector_list_free = explode('|',$this->input->get('sector_list'));

			if(isset($catch_list) && $catch_list != '') {
				$catch_list = explode('|',$catch_list);
			}

			if(is_array($catch_list) && sizeof($catch_list)>0) {

				$this->load->model(array(
					'business/itoozaapi',
					DBNAME.'/recommend_tb_model',
					DBNAME.'/ticker_tb_model',
					DBNAME.'/sep_tb_model',
					DBNAME.'/mri_tb_model',
				));

				$params = array();
				$params['in']['tkr_ticker'] = array_filter($catch_list);
				$params['=']['tkr_is_active'] = 'YES';
		        //$params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
				$extra = array(
					'fields' => array('tkr_ticker'),
					'cache_sec' => 3600*6,
					'slavedb' => true,
					'order_by' => 'tkr_rate desc'
				);

				$ticker_list = $this->ticker_tb_model->getList($params, $extra)->getData();
				$cnt=0;
				foreach($ticker_list as $key => $ticker) {

					if($ticker['tkr_ticker']!='') {
						if($cnt>7) break;
						$ticker_info[$ticker['tkr_ticker']] = $this->ticker_info_map[$ticker['tkr_ticker']];

						// 종목추천에 등록된 ticker 인지 확인
						$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = FALSE;

						$params = array();
						$params['=']['rc_ticker'] = $ticker['tkr_ticker'];
				        $params['!=']['rc_view_srv'] = 'W';
						$params['=']['rc_is_active'] = 'YES';
						$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
						$params['in']['rc_endtype'] = array('ING','SUCCESS','SELL');
						$extra = array(
							'order_by' => 'rc_id DESC',
							'slavedb' => TRUE
						);

						$recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
						if(sizeof($recom_data) > 0) {
							$recom = array_shift($recom_data);
							$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = TRUE;
							$ticker_info[$ticker['tkr_ticker']]['recom_link'] = '/'.KW.'_stock/recommend_view/'.$recom['rc_id'];
						}

						$ticker_info[$ticker['tkr_ticker']]['like'] = $this->like($ticker['tkr_ticker'], 'Y');

						//스파이더 데이터 가져오기
						$params = array();
						$params['=']['m_ticker'] = $ticker['tkr_ticker'];
						$extra = array(
							'fields' => array('m_biz_dividend_score', 'm_future_score', 'm_biz_moat_score', 'm_biz_total_score', 'm_v_fairvalue1', 'm_v_fairvalue2', 'm_v_fairvalue3', 'm_v_fairvalue4', 'm_v_fairvalue5', 'm_close', 'm_scalemarketcap'),
							'slavedb' => true,
						);

						$mri_info = array_shift($this->mri_tb_model->getList($params, $extra)->getData());

						$ticker_info[$ticker['tkr_ticker']]['mri'] = $mri_info;
						$ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] =  $this->get_fairrate($ticker_info[$ticker['tkr_ticker']]['tkr_close'], $mri_info);
						if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate']== -5) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 0;
						else if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] == 106) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 100;
						
						/*
						$chart_value = array();
						$chart = $this->itoozaapi->getSEPListForChart(array($ticker['tkr_ticker']));

						if(isset($chart[$ticker['tkr_ticker']]) && is_array($chart[$ticker['tkr_ticker']])) {
							$chart_value = array_slice($chart[$ticker['tkr_ticker']], -20, 20);
						}
						*/

						$chart_value = array();

						$sep_extra = array();
						$sep_extra['order_by'] = 'sep_date asc'; 
						$sep_extra['cache_sec'] = 3600;
						$sep_extra['quandldb'] = true;
						$sep_extra['fields'] = array('sep_date', 'sep_dividends');

						$sep_params = array();
						$sep_params['=']['sep_ticker'] = $ticker['tkr_ticker'];
						$before_day = 40;
						$sep_params['>']['sep_date'] = date('Y-m-d', time()-86400*$before_day);
						
						$chart_list = array();
						$chart_list = $this->sep_tb_model->getList($sep_params, $sep_extra)->getData();

						foreach($chart_list as $val) {
							$chart[$val['sep_date']] = $val['sep_dividends'];
						}
						if(is_array($chart) && sizeof($chart) > 0) {
							$chart_value = array_slice($chart, -20, 20);

							$ticker_info[$ticker['tkr_ticker']]['chart_value'] = implode(',', array_values($chart_value));
							$ticker_info[$ticker['tkr_ticker']]['chart_key'] = array_keys($chart_value);
						}

						$cnt++;
					}
				}
			}
		}

        $this->header_data['header_template'] = '12';
        $this->header_data['show_alarm'] = FALSE;

        $this->header_data['head_title'] = '초이스스탁US';
        $this->header_data['head_url'] = '/';

		$data = array();
		$data['meta_title'] = '종목캐치 - 초이스스탁US';
        $data['ticker_submenu'] = 'catch_info';


//echo '<pre>'; print_r($ticker_info);
		$data['catch_list'] = $ticker_info;

		$type_list = array();
		$type_list = explode('|',$catch_list['c_type']);
		$size_list = array();
		$size_list = explode('|',$catch_list['c_size']);
		$sector_list = array();
		$sector_list = explode('|',$catch_list['c_sector']);

		//$industry_list = array();
		$ticker_rep = array();

		if($this->session->userdata('is_paid') === FALSE) {
			$sector_list = $sector_list_free;
		}

		if(is_array($sector_list) && sizeof($sector_list) > 0) {
			foreach($sector_list as $key=>$val) {
				if($val=='1') {
					$ticker_rep[] = $this->ticker_rep[$key];
				}
			}
			shuffle($ticker_rep);
		}
		//echo '<pre>'; print_r($ticker_rep);

        $data['c_type'] = $type_list;
        $data['c_type_list'] = $catch_list['c_type'];
       
		$data['c_size'] = $size_list;
        $data['c_size_list'] = $catch_list['c_size'];
        
		$data['c_sector'] = $sector_list;
        $data['c_sector_list'] = $catch_list['c_sector'];
		$data['ticker_rep'] = $ticker_rep;
		$data['is_event'] = $this->is_event;
		$data['is_next'] = $is_next;

		//$data['is_open'] = $this->is_open;
		$data['is_file'] = $is_file;
//echo '<pre>'; print_r($data); exit;
		$this->_view('/stock/catch', $data);
    }

	public function catch_process() {

		$user_id = $this->session->userdata('user_id');

		//if($user_id == '') {
		//	$this->common->locationhref('/stock/catch_info');
		//	exit;
		//}

		$c_type = $this->input->get('catchType');
		$c_size = $this->input->get('catchSize');
		$c_sector = $this->input->get('catchSector');

		$arr_type = explode('|', $c_type);
		$arr_size = explode('|', $c_size);
		$arr_sector = explode('|', $c_sector);

		$sector_list = array();

		foreach($arr_sector as $key=>$val) {
			if($val == '1') {
				if(!in_array($this->ticker_sector[$key], $sector_list)) {
					$sector_list[] = $this->ticker_sector[$key];
				}
			}
		}

		if( is_array($arr_type) && sizeof($arr_type) > 0 && is_array($arr_size) && sizeof($arr_size) > 0 && is_array($arr_sector) && sizeof($arr_sector) > 0 ) {

			$this->load->model(DBNAME.'/mri_tb_model');
			$params = array();
			$params['join']['ticker_tb'] = 'tkr_ticker = m_ticker';
			$params['=']['tkr_is_active'] = 'YES';

			if(isset($arr_type[0]) && $arr_type[0] == '1') {
				$params['>=']['m_biz_dividend_stars'] = 3.5;
			}

			if(isset($arr_type[1]) && $arr_type[1] == '1') {
				$params['>=']['m_future_stars'] = 3.5;
			}
			
			if(isset($arr_type[2]) && $arr_type[2] == '1') {
				$params['>=']['m_biz_moat_stars'] = 3.5;
			}

			$scalemarketcap = array();
			if(isset($arr_size[0]) && $arr_size[0] == '1') {
				$scalemarketcap[] = '5 - Large';
				$scalemarketcap[] = '6 - Mega';
			}

			if(isset($arr_size[1]) && $arr_size[1] == '1') {
				$scalemarketcap[] = '4 - Mid';
			}

			if(isset($arr_size[2]) && $arr_size[2] == '1') {
				$scalemarketcap[] = '1 - Nano';
				$scalemarketcap[] = '2 - Micro';
				$scalemarketcap[] = '3 - Small';
			}

			if(sizeof($scalemarketcap)>0) {
				$params['in']['m_scalemarketcap'] = $scalemarketcap;
			}

			$params['in']['m_sector'] = $sector_list;

			$extra = array(
				'fields' => array('m_ticker'),
				'slavedb' => true,
			);

			$mri_ticker = $this->mri_tb_model->getList($params, $extra)->getData();

			$c_tickerlist = '';
			foreach($mri_ticker as $val) {
				$c_tickerlist .= $val['m_ticker'].'|';
			}

			if(isset($user_id) && $user_id != '' && $this->session->userdata('is_paid') === TRUE) {
				$this->load->model(DBNAME.'/catch_tb_model');

				if($this->catch_tb_model->get(array('c_user_id' => $user_id))->isSuccess()) {
					
					$update_params = array(
						'c_tickerlist' => $c_tickerlist,
						'c_type' => $c_type,
						'c_size' => $c_size,
						'c_sector' => $c_sector,
						'c_industry' => $c_industry,
						'c_mod_date' => date('Y-m-d H:i:s')
					);

					$this->catch_tb_model->doUpdate($user_id, $update_params);
				}
				else {

					$params = array(
						'c_user_id' => $user_id,
						'c_tickerlist' => $c_tickerlist,
						'c_type' => $c_type,
						'c_size' => $c_size,
						'c_sector' => $c_sector,
						'c_sector' => $c_industry,
						'c_reg_date' => date('Y-m-d H:i:s'),
						'c_mod_date' => date('Y-m-d H:i:s')
					);

					$this->catch_tb_model->doInsert($params);
				}

				$this->_makeCatchFile($user_id);
			}
		}
		else {
            $this->common->alert('캐치 정보가 없습니다.');
			$this->common->locationhref('/'.KW.'_stock/catch_info');
			exit;

		}

		$this->common->locationhref('/'.KW.'_stock/catch_info?catch_list='.$c_tickerlist.'&sector_list='.$c_sector);
		exit;
	}

    public function set_catch() {
        //$this->loginCheck();

        $user_id = $this->session->userdata('user_id');

        $c_type = $this->input->post('catchType');
        $c_size = $this->input->post('catchSize');
        $c_sector = $this->input->post('catchSector');

        $arr_type = explode('|', $c_type);
        $arr_size = explode('|', $c_size);
        $arr_sector = explode('|', $c_sector);

        $sector_list = array();
        //$industry_list = array();
        foreach($arr_sector as $key=>$val) {
            if($val == '1') {
                if(!in_array($this->ticker_sector[$key], $sector_list)) {
                    $sector_list[] = $this->ticker_sector[$key];
                }
            }
        }

        if( is_array($arr_type) && sizeof($arr_type) > 0 && is_array($arr_size) && sizeof($arr_size) > 0 && is_array($arr_sector) && sizeof($arr_sector) > 0 ) {

            $this->load->model(DBNAME.'/mri_tb_model');
            $params = array();
            $params['join']['daily_tb'] = 'dly_ticker = m_ticker';

            if(isset($arr_type[0]) && $arr_type[0] == '1') {
                $params['>=']['m_biz_dividend_stars'] = 3.5;
            }

            if(isset($arr_type[1]) && $arr_type[1] == '1') {
                $params['>=']['m_future_stars'] = 3.5;
            }
            
            if(isset($arr_type[2]) && $arr_type[2] == '1') {
                $params['>=']['m_biz_moat_stars'] = 3.5;
            }

            $scalemarketcap = array();
            if(isset($arr_size[0]) && $arr_size[0] == '1') {
                $scalemarketcap[] = '5 - Large';
                $scalemarketcap[] = '6 - Mega';
            }

            if(isset($arr_size[1]) && $arr_size[1] == '1') {
                $scalemarketcap[] = '4 - Mid';
            }

            if(isset($arr_size[2]) && $arr_size[2] == '1') {
                $scalemarketcap[] = '1 - Nano';
                $scalemarketcap[] = '2 - Micro';
                $scalemarketcap[] = '3 - Small';
            }

            if(sizeof($scalemarketcap)>0) {
                $params['in']['m_scalemarketcap'] = $scalemarketcap;
            }

            $params['in']['m_sector'] = $sector_list;

            $extra = array(
                'fields' => array('m_ticker'),
                //'order_by' => 'an_created_at DESC',
                //'limit' => '3',
                'slavedb' => true,
            );

            $mri_ticker = $this->mri_tb_model->getList($params, $extra)->getData();

            $c_tickerlist = '';
            foreach($mri_ticker as $val) {
                $c_tickerlist .= $val['m_ticker'].'|';
            }

            if(isset($user_id) && $user_id != '' && $this->session->userdata('is_paid') === TRUE) {
                $this->load->model(DBNAME.'/catch_tb_model');

                if($this->catch_tb_model->get(array('c_user_id' => $user_id))->isSuccess()) {
                    
                    $update_params = array(
                        'c_tickerlist' => $c_tickerlist,
                        'c_type' => $c_type,
                        'c_size' => $c_size,
                        'c_sector' => $c_sector,
                        'c_industry' => $c_industry,
                        'c_mod_date' => date('Y-m-d H:i:s')
                    );

                    $this->catch_tb_model->doUpdate($user_id, $update_params);
                }
                else {

                    $params = array(
                        'c_user_id' => $user_id,
                        'c_tickerlist' => $c_tickerlist,
                        'c_type' => $c_type,
                        'c_size' => $c_size,
                        'c_sector' => $c_sector,
                        'c_sector' => $c_industry,
                        'c_reg_date' => date('Y-m-d H:i:s'),
                        'c_mod_date' => date('Y-m-d H:i:s')
                    );

                    $this->catch_tb_model->doInsert($params);
                }
            }
        }
        else {
            $success = FALSE;
            $result = array('success' => $success, 'msg' => '캐치 정보가 없습니다.');
            exit(json_encode($result));
            //$this->common->alert('캐치 정보가 없습니다.');
        }

        $success = TRUE;
        $result = array('success' => $success, 'catch_list' => $c_tickerlist, 'sector_list' => $c_sector);
        exit(json_encode($result));

        //$this->common->locationhref('/'.KW.'_stock/catch_info?catch_list='.$c_tickerlist.'&sector_list='.$c_sector);
        //exit;
    }

	private function _makeCatchFile($user_id, $is_slave=false) {
	//public function makeCatchFile() {
		set_time_limit(0);
		//$user_id = $this->session->userdata('user_id');
//echo $user_id; exit;
		if($user_id == '') return;

		//캐치 확인
		$this->load->model(DBNAME.'/catch_tb_model');

		$params = array();
		$params['=']['c_user_id'] = $user_id;

		$extra = array(
			'fields' => 'c_tickerlist, c_type, c_size, c_sector',
			//'slavedb' => true
		);
		if($is_slave == true) {
			$extra['slavedb'] = true;
		}
		$catch_list = array_shift($this->catch_tb_model->getList($params, $extra)->getData());
		//echo '<pre>'; print_r($catch_list); exit;
		if(is_array($catch_list) && sizeof($catch_list)>0 && $catch_list['c_tickerlist'] != '') {
			$ticker_list = explode('|',$catch_list['c_tickerlist']);
			//$total_count = count($ticker_list)-1;
			//if($total_count>30) $is_next = true;
			//$ticker_list = array_slice($ticker_list, 0, 30);

			$this->load->model(array(
				'business/itoozaapi',
				DBNAME.'/recommend_tb_model',
				DBNAME.'/ticker_tb_model',
				DBNAME.'/sep_tb_model',
				DBNAME.'/mri_tb_model',
			));

			$params = array();
			$params['in']['tkr_ticker'] = array_filter($ticker_list);
			$params['=']['tkr_is_active'] = 'YES';
			$extra = array(
				'fields' => array('tkr_ticker'),
				//'cache_sec' => 3600*6,
				'slavedb' => true,
				'order_by' => 'tkr_rate desc'
			);

			$ticker_list = $this->ticker_tb_model->getList($params, $extra)->getData();

			foreach($ticker_list as $key => $ticker) {

				if($ticker['tkr_ticker']!='') {

					$ticker_info[$ticker['tkr_ticker']] = $this->ticker_info_map[$ticker['tkr_ticker']];

					// 종목추천에 등록된 ticker 인지 확인
					$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = FALSE;

					$params = array();
					$params['=']['rc_ticker'] = $ticker['tkr_ticker'];
					$params['=']['rc_is_active'] = 'YES';
					$params['!=']['rc_view_srv'] = 'W';
					$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
					$params['in']['rc_endtype'] = array('ING','SUCCESS','SELL');
					$extra = array(
						'order_by' => 'rc_id DESC',
						'slavedb' => TRUE
					);

					$recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
					if(sizeof($recom_data) > 0) {
						$recom = array_shift($recom_data);
						$ticker_info[$ticker['tkr_ticker']]['is_recom_ticker'] = TRUE;
						$ticker_info[$ticker['tkr_ticker']]['recom_link'] = '/stock/recommend_view/'.$recom['rc_id'];
					}


					$ticker_info[$ticker['tkr_ticker']]['like'] = $this->like($ticker['tkr_ticker'], 'Y');

					//스파이더 데이터 가져오기
					$params = array();
					$params['=']['m_ticker'] = $ticker['tkr_ticker'];
					$extra = array(
						'fields' => array('m_biz_dividend_score', 'm_future_score', 'm_biz_moat_score', 'm_biz_total_score', 'm_v_fairvalue1', 'm_v_fairvalue2', 'm_v_fairvalue3', 'm_v_fairvalue4', 'm_v_fairvalue5', 'm_close', 'm_scalemarketcap'),
						'slavedb' => true,
					);

					$mri_info = array_shift($this->mri_tb_model->getList($params, $extra)->getData());

					$ticker_info[$ticker['tkr_ticker']]['mri'] = $mri_info;
					$ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] =  $this->get_fairrate($ticker_info[$ticker['tkr_ticker']]['tkr_close'], $mri_info);
					if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate']== -5) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 0;
					else if($ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] == 106) $ticker_info[$ticker['tkr_ticker']]['fairvalue_rate'] = 100;
										
					/*
					$chart_value = array();
					$chart = $this->itoozaapi->getSEPListForChart(array($ticker['tkr_ticker']));

					if(isset($chart[$ticker['tkr_ticker']]) && is_array($chart[$ticker['tkr_ticker']])) {
						$chart_value = array_slice($chart[$ticker['tkr_ticker']], -20, 20);
					}
					*/

					$chart_value = array();

					$sep_extra = array();
					$sep_extra['order_by'] = 'sep_date asc'; 
					$sep_extra['cache_sec'] = 3600;
					$sep_extra['quandldb'] = true;
					$sep_extra['fields'] = array('sep_date', 'sep_dividends');

					$sep_params = array();
					$sep_params['=']['sep_ticker'] = $ticker['tkr_ticker'];
					$before_day = 40;
					$sep_params['>']['sep_date'] = date('Y-m-d', time()-86400*$before_day);
					
					$chart_list = array();
					$chart_list = $this->sep_tb_model->getList($sep_params, $sep_extra)->getData();

					foreach($chart_list as $val) {
						$chart[$val['sep_date']] = $val['sep_dividends'];
					}
					if(is_array($chart) && sizeof($chart) > 0) {
						$chart_value = array_slice($chart, -20, 20);

						$ticker_info[$ticker['tkr_ticker']]['chart_value'] = implode(',', array_values($chart_value));
						$ticker_info[$ticker['tkr_ticker']]['chart_key'] = array_keys($chart_value);
					}
				}
			}

			if(is_array($ticker_info)) {
				$ticker_info = json_encode($ticker_info);
				$catch_file = $user_id.'.json';
				$file_path = WEBDATA.'/catch/'.$catch_file;
				$file_backpath = $file_path . '.bak';

				touch($file_backpath);
				file_put_contents($file_backpath, $ticker_info);
				rename($file_backpath, $file_path);
			}
		}
	}

    public function makeDailyCatch() {
        echo "\n".'['.date("Y-m-d H:i:s")."] setCatchInfo start!!\n";

		$this->load->model(DBNAME.'/catch_tb_model');
        $params = array();
        $params['!=']['c_tickerlist'] = '';
        $params['=']['c_user_id'] = 'kakao_1342320378';
        $extra = array();
        $extra['order_by'] = 'c_user_id desc';
        $extra['fields'] = array('c_user_id');
		$extra['limit'] = 10;
		$extra['slavedb'] = true;

        $catch_userlist = $this->catch_tb_model->getList($params, $extra)->getData();

		//echo '<pre>'; print_r($catch_userlist); exit;
		foreach($catch_userlist as $catch) {
			$this->_makeCatchFile($catch['c_user_id']);
		}
        echo "\n".'['.date("Y-m-d H:i:s")."] setCatchInfo success!!\n";
	}

	public function mjm_iframe() {
		$url = 'http://usstock-old.beebeetree.com/kiwoom/listStock/';
		$str = file_get_contents($url);
		$str = str_replace('http://usstock-old.beebeetree.com/~static/home/plugins/bootstrap/css/bootstrap.min.css','/css/bootstrap.min.css',$str);
		$str = str_replace('http://usstock-old.beebeetree.com/~static/home/css/style.css','/css/style.css',$str);
		$str = str_replace('<a href','<!a href',$str);
		echo $str;
	}

    public function winner() {
        $this->header_data['header_template'] = '2';
        $this->header_data['head_title'] = '미주미초이스';
        $this->header_data['head_url'] = '/';
        $data= array();
        $data['meta_title'] = '종목추천 - 미주미초이스';

        $winner_file = 'winner.json';
        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$winner_file;

        if( is_file($file_path) ) {
             $winner_list = json_decode(file_get_contents($file_path), true);
        }

        $data['yoil'] = $this->yoil;
        $data['win_trend'] = $this->win_trend;
        $data['winner_list'] = $winner_list;
        $data['ticker_submenu'] = 'winner';        
        $data['is_event'] = $this->is_event;

        $this->_view('/stock/winner', $data);
    }

    protected $ticker_sector = array (
        '0'=>'Technology',                //아마존
        '1'=>'Industrials',                //보잉
        '2'=>'Consumer Cyclical',        //넷플릭스
        '3'=>'Consumer Defensive',        //월마트
        '4'=>'Consumer Defensive',        //코카콜라
        '5'=>'Healthcare',                //존슨앤존슨
        '6'=>'Energy',                    //엑슨모빌
        '7'=>'Real Estate',                //아메리카타워
        '8'=>'Utilities',                //넥스트에라
        '9'=>'Consumer Cyclical',        //테슬라
        '10'=>'Technology',                //마이크로소프트
        '11'=>'Consumer Defensive',        //펩시코
        '12'=>'Consumer Cyclical',        //스타벅스
        '13'=>'Communication Services',    //AT&T
        '14'=>'Financial Services',        //버크셔헤서웨이
        '15'=>'Basic Materials',        //뉴몬트
        '16'=>'Financial Services',        //비자
        '17'=>'Industrials',            //쓰리엠
        '18'=>'Financial Services',        //뱅크오브아메리카
        '19'=>'Energy',                    //쉐브론
        '20'=>'Technology',                //애플
        '21'=>'Communication Services',    //버라이즌
        '22'=>'Healthcare',                //유나이티드헬스그룹
        '23'=>'Basic Materials',        //포스코
        '24'=>'Energy',                    //쉘
        '25'=>'Real Estate',            //리얼티인컴
        '26'=>'Healthcare',                //휴매나
        '27'=>'Utilities',                //듀크
        '28'=>'Real Estate',            //코스타
        '29'=>'Industrials'                //부킹홀딩스
    );

    protected $ticker_rep = array (
        '0'=>array('ticker' => 'AMZN', 'name' => '아마존', 'industry'=>'Internet Retail'),                    //아마존
        '1'=>array('ticker' => 'BA',   'name' => '보잉', 'industry'=>'Aerospace & Defense'),            //보잉
        '2'=>array('ticker' => 'NFLX', 'name' => '넷플릭스', 'industry'=>'Entertainment'),                //넷플릭스
        '3'=>array('ticker' => 'WMT',  'name' => '월마트', 'industry'=>'Discount Stores'),                    //월마트
        '4'=>array('ticker' => 'KO',   'name' => '코카콜라', 'industry'=>'Beverages - Non-Alcoholic1'),    //코카콜라
        '5'=>array('ticker' => 'JNJ',  'name' => '존슨앤존슨', 'industry'=>'Drug Manufacturers - General'),    //존슨앤존슨
        '6'=>array('ticker' => 'XOM',  'name' => '엑슨모빌', 'industry'=>'Oil & Gas Integrated'),            //엑슨모빌
        '7'=>array('ticker' => 'AMT',  'name' => '아메리카타워', 'industry'=>'REIT - Specialty'),            //아메리카타워
        '8'=>array('ticker' => 'NEE',  'name' => '넥스트에라', 'industry'=>'Utilities - Regulated Electric'),    //넥스트에라
        '9'=>array('ticker' => 'TSLA', 'name' => '테슬라', 'industry9'=>'Auto Manufacturers'),                    //테슬라
        '10'=>array('ticker' => 'MSFT','name' => '마이크로소프트', 'industry'=>'Software - Infrastructure'),    //마이크로소프트
        '11'=>array('ticker' => 'PEP', 'name' => '펩시코', 'industry'=>'Beverages - Non-Alcoholic'),            //펩시코
        '12'=>array('ticker' => 'SBUX','name' => '스타벅스', 'industry'=>'Restaurants'),                        //스타벅스
        '13'=>array('ticker' => 'T',   'name' => 'AT&T', 'industry'=>'Telecom Services'),                //AT&T
        '14'=>array('ticker' => 'BRK.B','name' => '버크셔헤서웨이', 'industry'=>'Insurance - Diversified'),        //버크셔헤서웨이
        '15'=>array('ticker' => 'NEM',  'name' => '뉴몬트', 'industry'=>'Gold'),                                //뉴몬트
        '16'=>array('ticker' => 'V',    'name' => '비자', 'industry'=>'Credit Services'),                    //비자
        '17'=>array('ticker' => 'MMM',  'name' => '쓰리엠', 'industry'=>'Specialty Industrial Machinery'),        //쓰리엠
        '18'=>array('ticker' => 'BAC',  'name' => '뱅크오브아메리카', 'industry'=>'Banks - Global'),            //뱅크오브아메리카
        '19'=>array('ticker' => 'CVX',  'name' => '쉐브론', 'industry'=>'Oil & Gas Integrated'),            //쉐브론
        '20'=>array('ticker' => 'AAPL', 'name' => '애플', 'industry'=>'Consumer Electronics'),            //애플
        '21'=>array('ticker' => 'VZ',   'name' => '버라이즌', 'industry'=>'Telecom Services'),        //버라이즌
        '22'=>array('ticker' => 'UNH',  'name' => '유나이티드헬스 그룹', 'industry'=>'Healthcare Plans'),    //유나이티드헬스그룹
        '23'=>array('ticker' => 'PKX',  'name' => '포스코', 'industry'=>'Steel'),                            //포스코
        '24'=>array('ticker' => 'RDS.A','name' => '쉘', 'industry'=>'Oil & Gas Integrated'),        //쉘
        '25'=>array('ticker' => 'O',    'name' => '리얼티인컴', 'industry'=>'REIT - Retail'),            //리얼티인컴
        '26'=>array('ticker' => 'HUM',  'name' => '휴매나', 'industry'=>'Healthcare Plans'),                //휴매나
        '27'=>array('ticker' => 'DUK',  'name' => '듀크', 'industry'=>'Utilities - Regulated Electric'),    //듀크
        '28'=>array('ticker' => 'CSGP', 'name' => '코스타', 'industry'=>'Real Estate Services'),            //코스타
        '29'=>array('ticker' => 'BKNG', 'name' => '부킹홀딩스', 'industry'=>'Travel Services')            //부킹홀딩스
    );
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */