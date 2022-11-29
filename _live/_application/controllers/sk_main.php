<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/sk_base_mobile.php';
class Sk_main extends Sk_BaseMobile_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *         http://example.com/index.php/welcome
     *    - or -  
     *         http://example.com/index.php/welcome/index
     *    - or -
     * Since this controller is set as the default controller in 
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */
    public function index()
    {
        $data = array();

        $pf_profit_file = 'pf_profit.json';
        
        $file_path = WEBDATA.'/'.$pf_profit_file;

        if( is_file($file_path) ) {
            $file_data = unserialize(file_get_contents($file_path));
            $data['pf_profit'] = $file_data['pf_profit'];
        }
        else {
            $data['pf_profit'] = '0.00';
        }

		//급등주
		$soaring_file = 'soaring_main.json';
		$file_path = WEBDATA.'/json/'.$soaring_file;
		
		if( is_file($file_path) ) {
			$data['soaring'] = json_decode(file_get_contents($file_path), true);

			//echo '<pre>'; print_r($data['soaring']); exit;
		}

		//관심TOP50
		$interest_file = 'interest.json';
		$file_path = WEBDATA.'/json/'.$interest_file;
		
		if( is_file($file_path) ) {
			$interest = json_decode(file_get_contents($file_path), true);
			$data['interest'] = array_slice($interest, 0, 4);
		}

		//배당주
		$dividend_file = 'dividend.json';
		$file_path = WEBDATA.'/json/'.$dividend_file;
		
		if( is_file($file_path) ) {
			$data['dividend'] = json_decode(file_get_contents($file_path), true);
		}

        $this->header_data['header_template'] = '1';
        $this->header_data['head_url'] = '/';
        $this->header_data['show_alarm'] = TRUE;

        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';

		//모닝브리핑 배너(2021.9.10 수정)
		$cont_banner = array();
		$cont=0;
		$morning_file = 'main_morning.json';
		$file_path = WEBDATA.'/json/'.$morning_file;
		if( is_file($file_path) ) {
            $morning_list = json_decode(file_get_contents($file_path), true);

			foreach($morning_list as $morning) {
				if($morning['e_display_date'] <= date('Y-m-d H:i:s')) {
					$cont_banner[$cont]['title'] = $morning['e_title'];
					$cont_banner[$cont]['url'] = '/'.SK.'_stock/research_view/'.$morning['e_id'];
					$cont_banner[$cont]['date'] = $morning['e_display_date'];
					$cont_banner[$cont]['type'] = '1';
					$cont++;
					break;
				}
			}
		}

		//추천알림 3건(2021.8.9추가)
		$noti_file = 'main_noti.json';
		$file_path = WEBDATA.'/json/'.$noti_file;
		if( is_file($file_path) ) {
            $noti_list = json_decode(file_get_contents($file_path), true);
			
			foreach($noti_list as $noti) {
				if($cont>3) break;
				if($noti['nt_view_cs'] == 'Y') {
					if($this->session->userdata('is_paid')===TRUE) {
						$cont_banner[$cont]['title'] = ($noti['nt_ticker_name'] !='' && $noti['nt_ticker'] !='') ? $noti['nt_title'].' - '.$noti['nt_ticker_name'].'('.$noti['nt_ticker'].')':$noti['nt_title'];
					}
					else {
						$cont_banner[$cont]['title'] = ($noti['nt_ticker_name'] !='' && $noti['nt_ticker'] !='') ? $noti['nt_title'].' '.iconv_substr($noti['nt_ticker_name'], 0, 1, 'utf-8').'<span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span>':$noti['nt_title'];
					}
					$cont_banner[$cont]['url'] = $noti['nt_url'];
					$cont_banner[$cont]['date'] = $noti['nt_display_date'];
					$cont_banner[$cont]['type'] = '2';
					$cont++;
				}
			}
		}

		$sort = array();
		foreach ($cont_banner as $key => $val) {
			$sort[$key] = $val['date'];
		}
		array_multisort($sort, SORT_DESC, $cont_banner);

		$data['cont_banner'] = $cont_banner;

		//종목추천3건(2021.8.9추가)
		$rc_file = 'main_recommend.json';
		
		$recommend = array();

		$file_path = WEBDATA.'/json/'.$rc_file;
		if( is_file($file_path) ) {
            $recommend = json_decode(file_get_contents($file_path), true);
			foreach($recommend as $key => $val) {
				$recommend[$key]['ticker'] = $this->ticker_info_map[$val['rc_ticker']];
			}
		}

		$data['recommend'] = $recommend;

		//승부주
		$winner_file = 'winner.json';
		$file_path = str_replace('hoon','datahero',WEBDATA).'/'.$winner_file;

		if( is_file($file_path) ) {
             $winner_list = json_decode(file_get_contents($file_path), true);
		}
		$data['winner_list'] = array_slice(array_shift($winner_list), 0, 5);
		$data['win_trend'] = $this->win_trend;

        //15min
        $data['is_open'] = $this->is_open;
        $data['is_event'] = $this->is_event;

        //최근 실적 발표
        $recent_file = 'recent_report.inc';
        $file_path = QUANDL_WEBDATA.'/'.$recent_file;
        
        if( is_file($file_path) ) {
        
            $recent_report = unserialize(file_get_contents($file_path));
            $data['recent_report'] = $recent_report['recent_report'];
            $data['recent_report_rates'] = $recent_report['recent_report_rates'];
            $data['recent_report_rates_pm'] = $recent_report['recent_report_rates_pm'];
        }

		//포트폴리오
		$portfoli_file = 'portfolio.json';
		$file_path = WEBDATA.'/json/'.$portfoli_file;

		if( is_file($file_path) ) {
             $portfolio = json_decode(file_get_contents($file_path), true);
			 $portfolio = $portfolio['portfolio'];
		}

		//포트폴리오 중복처리
		$portfolio_list = array();
		$dup_check = array();
		foreach($portfolio as $dup) {
			if(!in_array($dup['rc_ticker'], $dup_check) && $dup['rc_display_date'] <= date('Y-m-d H:i:s')) {
				$portfolio_list[] = $dup;
			}

			if($dup['rc_display_date'] <= date('Y-m-d H:i:s')) {
				$dup_check[] = $dup['rc_ticker'];
			}
		}

        $pf_count=0;

        foreach($portfolio_list as $idx => $val) {
            
            if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;

            $portfolio_list[$idx]['rc_close'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_close'];
            $portfolio_list[$idx]['rc_rate'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate'];
            $portfolio_list[$idx]['rc_rate_str'] = $this->ticker_info_map[$val['rc_ticker']]['tkr_rate_str'];
            $portfolio_list[$idx]['rc_profit_rate'] = number_format((($portfolio_list[$idx]['rc_close']/$val['rc_recom_price'])-1)*100, 2);

            $pf_count++;
        }

        $rc_profit_total = 0;
        $sort = array();
        foreach ($portfolio_list as $key => $val) {
            $sort[$key] = $val['rc_profit_rate'];
            $rc_profit_total += $val['rc_profit_rate'];
        }
        array_multisort($sort, SORT_DESC, $portfolio_list);

		//무료회원오픈처리(21.11.04)
		set_cookie('free_ticker', $portfolio_list[0]['rc_id'].'|'.$portfolio_list[1]['rc_id'], time()+86400);
        $data['portfolio_list'] = array_slice($portfolio_list, 0, 2);
        $data['pf_count'] = $pf_count;

		//종목노트
		$note_file = 'note_list_new.json';
		$file_path = WEBDATA.'/json/'.$note_file;
		
		if( is_file($file_path) ) {
             $data['note_list'] = json_decode(file_get_contents($file_path), true);
		}

        $this->_view('/main/index', $data);
    }

    public function ajax_save_search_history($srv='K') {
        $this->load->model(DBNAME.'/search_log_tb_model');
        $ticker = $this->input->get('ticker');
        if(isset($this->ticker_info_map[$ticker])) {
            $params = array(
                'sl_ticker' => $ticker,
                'sl_srv' => $srv,
            );
            $this->search_log_tb_model->doInsert($params);
        }

        if(isset($_COOKIE['search_history']) && strlen($_COOKIE['search_history']) > 0) {
            $search_history = explode(',', $_COOKIE['search_history']);
            array_unshift($search_history, $ticker);
            $search_history = array_slice($search_history, 0, 10);
            setcookie('search_history', implode(',', $search_history), time()+(86400*365), '/', $this->config->item('cookie_domain'));
        } else {
            setcookie('search_history', $ticker, time()+(86400*365), '/', $this->config->item('cookie_domain'));
        }
    }

    public function search() {
        $data = array();

        // 관심종목 미 지정 시 : 최신 검색 종목 20종목 표시

        // - 인기종목 10선 : 서비스 전체 사용자 데이터(48시간 이내)
        // + 인기주 리스트 중 1) 관심종목 지정 2)투자의견투표 3)검색
        // S&P500 종목 중 (24시간 이내) 급등주 10종목 노출
        
        $tab_stock_data = array();
        $search_ticker = array();
        $popular_stock_data = array();

        $data['myticker'] = FALSE;

        //관심종목 가져오기
        //if( $this->session->userdata('is_login') === TRUE ) {
        if( $this->session->userdata('user_id') != '' ) {

            $this->load->model(DBNAME.'/myitem_tb_model');

            $params = array();
            $params['=']['mi_user_id'] = $this->session->userdata('user_id');
            $params['=']['mi_like'] = 'Y';

            $extra = array(
                'fields' => 'mi_ticker',
                'order_by' => 'mi_order DESC',
                //'slavedb' => true
            );

            $ticker_list = array();
            $ticker_list = $this->myitem_tb_model->getList($params, $extra)->getData();

            foreach($ticker_list as $val) {
                $search_ticker[] = $val['mi_ticker'];
            }

            $data['myticker'] = TRUE;
        }

        //echo '<pre>'; print_r($search_ticker);

/*
        if(sizeof($search_ticker) == 0) {
            if(isset($_COOKIE['search_history']) && strlen($_COOKIE['search_history']) > 0) {
                $search_ticker = array_filter(array_unique(array_map('trim', explode(',', $_COOKIE['search_history']))));
                $search_ticker = array_slice($search_ticker, 0, 20);
            }
        }
*/
        //인기검색
		$popular_file = 'popular_ticker.json';
		$file_path = WEBDATA.'/json/'.$popular_file;

		if( is_file($file_path) ) {
			$popular_search_ticker = json_decode(file_get_contents($file_path), true);
			shuffle($popular_search_ticker);
			$popular_ticker = array_slice($popular_search_ticker, 0, 10);
		}

        // 최신검색
        if(is_array($search_ticker) && sizeof($search_ticker) > 0) {
            $params = array();
            $params['in']['m_ticker'] = $search_ticker;
            $extra = array(
                'fields' => array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3'),
                'order_by' => ''
            );
            $extra['cache_sec'] = 3600;
            $extra['slavedb'] = true;
            $tab_stock_data = $this->mri_tb_model->getList($params, $extra)->getData();

            foreach($tab_stock_data as $key => $val) {
                $tab_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                //$tab_stock_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
                $tab_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $tab_stock_data[$key]['ticker']['tkr_close']);
            }
            $tab_stock_data = $this->common->indexSort($search_ticker, $tab_stock_data, 'm_ticker');
        }

        $data['tab_stock_data'] = $tab_stock_data;

        // 인기검색
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
                $popular_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $popular_stock_data[$key]['ticker']['tkr_close']);
            }
            $popular_stock_data = $this->common->indexSort($popular_ticker, $popular_stock_data, 'm_ticker');
        }

        // 급등주 가져오기
		$soaring_file = 'soaring_one.json';
		$file_path = WEBDATA.'/json/'.$soaring_file;
		
		if( is_file($file_path) ) {
			$soaring_stock_data = json_decode(file_get_contents($file_path), true);
		}

        $data['popular_stock_data'] = $popular_stock_data;
        $data['soaring_stock_data'] = array_slice($soaring_stock_data, 0, 10);
        $data['ticker_submenu'] = 'analysis';
        $this->header_data['header_template'] = '5';
		$data['is_open'] = $this->is_open;
        $this->_view('/main/search', $data);
    }

    public function onestop() {
        $data = array();
        // 관심종목 미 지정 시 : 최신 검색 종목 20종목 표시

        // - 인기종목 10선 : 서비스 전체 사용자 데이터(48시간 이내)
        // + 인기주 리스트 중 1) 관심종목 지정 2)투자의견투표 3)검색
        // S&P500 종목 중 (24시간 이내) 급등주 10종목 노출
        
        $tab_stock_data = array();
        $search_ticker = array();
        $popular_stock_data = array();

        //관심종목 가져오기
        //if( $this->session->userdata('is_login') === TRUE ) {
        if( $this->session->userdata('user_id') != '' ) {

            $this->load->model(DBNAME.'/myitem_tb_model');

            $params = array();
            $params['=']['mi_user_id'] = $this->session->userdata('user_id');
            $params['=']['mi_like'] = 'Y';

            $extra = array(
                'fields' => 'mi_ticker',
                'order_by' => 'mi_order DESC',
                //'slavedb' => true
            );

            $ticker_list = array();
            $ticker_list = $this->myitem_tb_model->getList($params, $extra)->getData();

            foreach($ticker_list as $val) {
                $search_ticker[] = $val['mi_ticker'];
            }
        }

        //echo '<pre>'; print_r($search_ticker);

/*
        투자 유망 종목 : 투자매력 점수 65점 이상 and 현재가(last price) < 고평가(fairvalue2)
        투자 유의 종목 : 투자매력 점수 40점 미만 or 재무안전성 2점 미만 or 현금창출력 2점 미만
        if(sizeof($search_ticker) == 0) {
            if(isset($_COOKIE['search_history']) && strlen($_COOKIE['search_history']) > 0) {
                $search_ticker = array_filter(array_unique(array_map('trim', explode(',', $_COOKIE['search_history']))));
                $search_ticker = array_slice($search_ticker, 0, 20);
            }
        }
*/
        //인기검색
		$popular_file = 'popular_ticker.json';
		$file_path = WEBDATA.'/json/'.$popular_file;

		if( is_file($file_path) ) {
			$popular_search_ticker = json_decode(file_get_contents($file_path), true);
			shuffle($popular_search_ticker);
			$popular_ticker = array_slice($popular_search_ticker, 0, 10);
		}

        // 관심종목
        if(is_array($search_ticker) && sizeof($search_ticker) > 0) {
            $params = array();
            $params['in']['m_ticker'] = $search_ticker;
            $extra = array(
                'fields' => '*',
                'order_by' => ''
            );
            $extra['cache_sec'] = 3600;
            $extra['slavedb'] = true;
            $tab_stock_data = $this->mri_tb_model->getList($params, $extra)->getData();

            foreach($tab_stock_data as $key => $val) {
                $tab_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                //$tab_stock_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
                $tab_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $tab_stock_data[$key]['ticker']['tkr_close']);
                
                $tab_stock_data[$key]['fairvalue_rate'] =  $this->get_fairrate($tab_stock_data[$key]['ticker']['tkr_close'], $val);
                if($tab_stock_data[$key]['fairvalue_rate']>=100) $tab_stock_data[$key]['fairvalue_rate'] = 100;
                else if($tab_stock_data[$key]['fairvalue_rate']<=0 && $tab_stock_data[$key]['fairvalue_rate']>=-5) $tab_stock_data[$key]['fairvalue_rate'] = 0;
                //else if($tab_stock_data[$key]['fairvalue_rate'] < -5) $tab_stock_data[$key]['fairvalue_rate'] = 0;
            }
            $tab_stock_data = $this->common->indexSort($search_ticker, $tab_stock_data, 'm_ticker');
        }
//echo '<pre>'; print_r($tab_stock_data);
        $data['tab_stock_data'] = $tab_stock_data;

        // 인기검색
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
                $popular_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $popular_stock_data[$key]['ticker']['tkr_close']);
            }
            $popular_stock_data = $this->common->indexSort($popular_ticker, $popular_stock_data, 'm_ticker');
        }

        // 급등주 가져오기
		$soaring_file = 'soaring_one.json';
		$file_path = WEBDATA.'/json/'.$soaring_file;
		
		if( is_file($file_path) ) {
			$soaring_stock_data = json_decode(file_get_contents($file_path), true);
		}

        $data['popular_stock_data'] = $popular_stock_data;
        $data['soaring_stock_data'] = array_slice($soaring_stock_data, 0, 10);
        $data['ticker_submenu'] = 'analysis';
        $this->header_data['header_template'] = '5';
        $this->_view('/main/onestop', $data);
    }

    public function menu() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['head_title'] = '메뉴';
        $this->header_data['back_url'] = '/';
        $this->_view('/main/menu');
    }

    public function service() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['head_title'] = '서비스소개';
        $this->header_data['back_url'] = '/';
        $this->_view('/main/service');
    }

    public function service_guide() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['head_title'] = '서비스소개';
        $this->header_data['back_url'] = '/';
        $this->_view('/main/service_guide');
    }

    public function service_prm() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['head_title'] = '서비스소개';
        $this->header_data['back_url'] = '/';
        $this->_view('/main/service_prm');
    }

    public function service_free() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['head_title'] = '무료이용신청';
        $this->header_data['back_url'] = '/';
        $data = array();
        $data['pay'] = '1';
        $data['pay_info'] = $this->pay_info;
        $this->_view('/main/service_free', $data);
    }

    public function open_event() {
        return; //remove
        $this->load->view('/mobile/main/open_event');
    }

    public function myticker() {

        $this->payCheck();

        $this->load->model(DBNAME.'/myitem_tb_model');

        $params = array();
        $params['=']['mi_user_id'] = $this->session->userdata('user_id');
        $params['=']['mi_like'] = 'Y';
        $params['join']['ticker_tb'] = 'mi_ticker = tkr_ticker';

        $extra = array(
            'fields' => 'mi_ticker, tkr_name',
            'order_by' => 'mi_order DESC',
            //'limit' => '1',
            'slavedb' => true
        );

        $myticker_list = array();
        $myticker_list = $this->myitem_tb_model->getList($params, $extra)->getData();

        $data = array();
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = FALSE;
        $this->header_data['back_url'] = '/';
        $this->header_data['head_title'] = '관심종목';
        
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $data['myticker_list'] = $myticker_list;

        //$this->load->library('user_agent');

        //if($this->agent->is_mobile()) {
            //echo $this->agent->mobile();
        //    $data['is_mobile'] = TRUE;
        //}
        //else {
        $data['is_mobile'] = $this->is_mobile;
        //}

        $this->_view('/main/myticker', $data);
    }

    public function saveTicker() {

        $this->payCheck();

        $user_id = $this->session->userdata('user_id');

        $this->load->model(DBNAME.'/myitem_tb_model');
        
        $ticker = $this->input->get('ticker');

        if($ticker == '') {
            $update_params = array(
                'mi_mod_date' => date('Y-m-d H:i:s'),
                'mi_like' => 'N'
            );

            $this->db->where('mi_user_id', $user_id);
            $this->db->update('myitem_tb', $update_params);
        }
        else {
            $ticker_list = explode('|', urldecode($ticker));

            if(is_array($ticker_list) && sizeof($ticker_list)>0) {

                $update_params = array(
                    'mi_mod_date' => date('Y-m-d H:i:s'),
                    'mi_like' => 'N'
                );

                $this->db->where('mi_user_id', $user_id);
                $this->db->update('myitem_tb', $update_params);

                $order=1;
                foreach(array_reverse($ticker_list) as $val) {
                    if( $val != '' ) {
                        if($this->myitem_tb_model->get(array('mi_user_id' => $user_id, 'mi_ticker' => $val))->isSuccess()) {
                            $update_params = array(
                                'mi_order' => $order,
                                'mi_like' => 'Y'
                            );

                            $this->db->where('mi_user_id', $user_id);
                            $this->db->where('mi_ticker', $val);
                            
                            $this->db->update('myitem_tb', $update_params);
                        }
                        else {

                            $params = array(
                                'mi_user_id' => $user_id,
                                'mi_ticker' => $val,
                                'mi_reg_date' => date('Y-m-d H:i:s'),
                                'mi_mod_date' => date('Y-m-d H:i:s'),
                                'mi_order' => $mi_order,
                                'mi_like' => 'Y'
                            );

                            $this->myitem_tb_model->doInsert($params);
                        }

                        $order++;
                    }
                }
            }
        }

        $this->common->locationhref('/'.SK.'_main/search');
        exit;
    }

	public function service_info() {
        $this->load->view('/'.SK.'/main/service_info');
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
