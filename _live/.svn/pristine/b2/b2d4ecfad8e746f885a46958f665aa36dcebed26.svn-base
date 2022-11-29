<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/hn_base_mobile.php';
class Hn_main extends Hn_BaseMobile_Controller {

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
        $this->soft_check();

        $data = array();
        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/recommend_tb_model',
            DBNAME.'/analysis_tb_model',
            DBNAME.'/catch_tb_model',
            DBNAME.'/mri_tb_model',
        ));

        // 종목추천(수익률 높은 순 2건)
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['=']['rc_endtype'] = 'ING';
        $params['!=']['rc_view_srv'] = 'W';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
            'order_by' => 'rc_display_date DESC',
            'cache_sec' => 3600,
            'slavedb' => true
        );

        if($this->session->userdata('is_paid')===TRUE) {
            $extra['limit'] = '2';
        }

        $recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();

        $dup_check = array();
        $recommend = array();

        foreach($recommend_list as $dup) {
            if(!in_array($dup['rc_ticker'], $dup_check)) {
                $recommend[] = $dup;
            }
            $dup_check[] = $dup['rc_ticker'];
        }

        foreach($recommend as $key => $val) {
            $recommend[$key]['ticker'] = $this->ticker_info_map[$val['rc_ticker']];
            if($val['rc_endtype'] == 'SUCCESS') {
                if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) {
                    $recommend[$key]['rc_suik'] = round((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100,2);
                }
                else {
                    $recommend[$key]['rc_suik'] = round((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100,2);
                }
            }
            else {
                $recommend[$key]['rc_suik'] = round((($this->ticker_info_map[$val['rc_ticker']]['tkr_close']/$val['rc_recom_price'])-1)*100,2);
            }
        }

        if($this->session->userdata('is_paid')===FALSE) {
            $sort = array();
            foreach ($recommend as $key => $val) {
                $sort[$key] = $val['rc_suik'];
            }
            array_multisort($sort, SORT_DESC, $recommend);

            if($recommend[0]['rc_ticker'] == $recommend[1]['rc_ticker']) {
                unset($recommend[1]);
            }
            $recommend = array_slice($recommend, 0, 2);

            set_cookie('free_ticker', $recommend[0]['rc_ticker'], time()+86400);
        }

        $check_time = date("YmdHis",time()-60*60*48);
        $rc_time = date('YmdHis', strtotime($recommend[0]['rc_display_date']));

        $data['is_recommend'] = false;
        if($check_time <= $rc_time) {
            $data['is_recommend'] = true;
        }

        $data['recommend'] = $recommend;

        $pf_profit_file = 'pf_profit.json';
        
        $file_path = WEBDATA.'/'.$pf_profit_file;

        if( is_file($file_path) ) {
            $file_data = unserialize(file_get_contents($file_path));
            $data['pf_profit'] = $file_data['pf_profit'];
        }
        else {
            $data['pf_profit'] = '0.00';
        }
/*
        //관심종목 있을 경우 15건, 없을 땐 s&p500 5건
        $tab_stock_data = array();

        if( $this->session->userdata('is_login') === TRUE ) {

            $this->load->model(DBNAME.'/myitem_tb_model');

            $params = array();
            $params['=']['mi_user_id'] = $this->session->userdata('user_id');
            $params['=']['mi_like'] = 'Y';
            $params['join']['mri_tb'] = 'mi_ticker = m_ticker';

            $extra = array(
                'fields' =>  array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3', 'm_close'),
                'slavedb' => true, 
                'order_by' => 'mi_order DESC',
                //'cache_sec' => 3600*1,
                'limit' => '15',
            );

            $tab_stock_data = $this->myitem_tb_model->getList($params, $extra)->getData();

            foreach($tab_stock_data as $key => $val) {
                $tab_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                $tab_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $val['m_close']);
            }
        }

        if(sizeof($tab_stock_data)==0) {

            $main_ticker_list = array('HAS','MSFT','DAL','TESLA','GOOGL','DIS','BA','CCL','XOM','KO','T','SBUX','AAL','AMZN','AAPL','INTC','QCOM','FB','NVDA','NFLX');

            $main_params = array();
            $main_params['in']['tkr_ticker'] = $main_ticker_list;
            $main_params['=']['tkr_is_active'] = 'YES';
            $main_params['join']['mri_tb'] = 'tkr_ticker = m_ticker';

            $main_extra = array(
                'fields' => array('tkr_ticker', 'm_biz_total_score', 'm_v_fairvalue3', 'tkr_close'),
                'cache_sec' => 3600,
                'slavedb' => true,
                'order_by' => 'tkr_rate desc',
                'limit' => '3',
            );

            $tab_stock_data = $this->ticker_tb_model->getList($main_params, $main_extra)->getData();

            foreach($tab_stock_data as $key => $val) {
                $tab_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['tkr_ticker']];
                $tab_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $val['tkr_close']);
            }
        }

        $snp500_ticker = array();
        $snp500_ticker = $this->get_snp500();

        $data['tab_stock_data'] = $tab_stock_data;

        //종목캐치

        $catch_ticker_codes = array();
        if( $this->session->userdata('is_login') === TRUE ) {
            $params = array();
            $params['=']['c_user_id'] = $this->session->userdata('user_id');

            $extra = array(
                'fields' => 'c_tickerlist',
                //'cache_sec' => 3600*6,
                'slavedb' => true
            );
            $catch_ticker_codes = array_pop($this->catch_tb_model->getList($params, $extra)->getData());
            $catch_ticker_codes = explode('|',$catch_ticker_codes['c_tickerlist']);
            $catch_ticker_codes = array_filter($catch_ticker_codes);
        }

        if(sizeof($catch_ticker_codes)==0) {
            shuffle($snp500_ticker);
            $catch_ticker_codes = array_slice($snp500_ticker, 0, 10);
        }

        $params = array();
        $params['in']['m_ticker'] = $catch_ticker_codes;
        $extra = array(
            'fields' => array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3', 'm_close'),
            'order_by' => 'm_biz_total_score desc',
            'cache_sec' => 3600*6,
            'slavedb' => true
        );

        $catch_ticker_data = $this->mri_tb_model->getList($params, $extra)->getData();

        foreach($catch_ticker_data as $key => $val) {
            $catch_ticker_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
        }

        $data['catch_ticker_data'] = $catch_ticker_data;
*/
        //20.06/29 추가(투자매력, 배당매력주, 이익성장주, 슈퍼스톡, 소비자독점주
        // 전종목 투자매력도
        $add_params = array();
        $add_extra = array();
        $add_params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
        $add_params['>=']['dly_marketcap'] = '10000';
        $add_extra['cache_sec'] = 3600;
        $add_extra['slavedb'] = true;
        $data['all_total_score'] = $this->mri_tb_model->getRecomStockList('total_score', 5, $add_params, $add_extra);

        $data['growth'] = $this->mri_tb_model->getRecomStockList('growth', 5, $add_params, $add_extra);
        $data['moat'] = $this->mri_tb_model->getRecomStockList('moat', 5, $add_params, $add_extra);
        
        $add_params = array();
        $add_extra = array();
        $add_params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
        $add_extra['cache_sec'] = 3600;
        $add_extra['slavedb'] = true;
    
        $data['dividend'] = $this->mri_tb_model->getRecomStockList('dividend', 5, $add_params, $add_extra);
        $data['total_score'] = $this->mri_tb_model->getRecomStockList('total_score', 5, $add_params, $add_extra);

        $this->header_data['header_template'] = '1';
        $this->header_data['head_url'] = '/';
        $this->header_data['show_alarm'] = TRUE;

        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';

        //탐구생활 배너
        $ex_banner_file = 'ex_banner.json';
        
        $file_path = WEBDATA.'/'.$ex_banner_file;
        //$file_path = str_replace('hoon','datahero',WEBDATA).'/'.$ex_banner_file;

        if( is_file($file_path) ) {
            $file_data = unserialize(file_get_contents($file_path));
            $data['bn1_txt'] = $file_data['bn1_txt'];
            $data['bn1_id'] = $file_data['bn1_id'];
            $data['bn2_txt'] = $file_data['bn2_txt'];
            $data['bn2_id'] = $file_data['bn2_id'];
        }
        else {
            $data['bn1_txt'] = '';
            $data['bn1_id'] = '';
            $data['bn2_txt'] = '';
            $data['bn2_id'] = '';
        }
        
        //승부주
		/*
        $winner_file = 'winner.json';
        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$winner_file;

        if( is_file($file_path) ) {
             $winner_list = json_decode(file_get_contents($file_path), true);
        }
        $data['winner_list'] = array_slice(array_shift($winner_list), 0, 3);
		*/

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
             $portfolio_list = $portfolio['portfolio'];
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

        $data['portfolio_list'] = array_slice($portfolio_list, 0, 3);
        $data['pf_count'] = $pf_count;

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
        shuffle($this->popular_search_ticker);
        $popular_ticker = array_slice($this->popular_search_ticker, 0, 10);

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
        $params = array();
        $params['raw'] = array('tkr_lastpricedate = (select max(tkr_lastpricedate) from ticker_tb)');

        $extra = array(
            'fields' => array('tkr_ticker'),
            'order_by' => 'tkr_rate desc',
            'limit' => 2000
        );

        $hour = date("Hi");

        if($hour > 910 && $hour < 925) {
            $extra['cache_sec'] = 180;
        }
        else {
            $extra['cache_sec'] = 3600*12;
        }
        $extra['slavedb'] = true;
        $ticker_tb_data = array_keys($this->common->getDataByPK($this->ticker_tb_model->getList($params, $extra)->getData(), 'tkr_ticker'));

          $snp500_ticker = array();
        $snp500_ticker = $this->get_snp500();

        $cnt=0;
          $soaring_ticker = array();
        foreach($ticker_tb_data as $ticker) {
            if($cnt>9) break;
            if(in_array($ticker, $snp500_ticker)) {
                $soaring_ticker[] = $ticker;
                $cnt++;
            }
        }
        
        //급등주
        if(is_array($soaring_ticker) && sizeof($soaring_ticker) > 0) {
            $params = array();
            $params['in']['m_ticker'] = $soaring_ticker;
            $extra = array(
                'fields' => array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3'),
                'order_by' => ''
            );
            $extra['cache_sec'] = 3600;
            $extra['slavedb'] = true;
            $soaring_stock_data = $this->mri_tb_model->getList($params, $extra)->getData();

            foreach($soaring_stock_data as $key => $val) {
                $soaring_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                //$soaring_stock_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
                $soaring_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $soaring_stock_data[$key]['ticker']['tkr_close']);
            }
            $soaring_stock_data = $this->common->indexSort($soaring_ticker, $soaring_stock_data, 'm_ticker');
        }
        
        //echo '<pre>'; print_r($soaring_stock_data);
        //$data['tab_text'] = $tab_text;
        $data['popular_stock_data'] = $popular_stock_data;
        $data['soaring_stock_data'] = $soaring_stock_data;
        $data['ticker_submenu'] = 'analysis';
        $this->header_data['header_template'] = '5';
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
        shuffle($this->popular_search_ticker);
        $popular_ticker = array_slice($this->popular_search_ticker, 0, 10);

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
        $params = array();
        $params['raw'] = array('tkr_lastpricedate = (select max(tkr_lastpricedate) from ticker_tb)');

        $extra = array(
            'fields' => array('tkr_ticker'),
            'order_by' => 'tkr_rate desc',
            'limit' => 2000
        );

        $hour = date("Hi");

        if($hour > 910 && $hour < 925) {
            $extra['cache_sec'] = 180;
        }
        else {
            $extra['cache_sec'] = 3600*12;
        }
        $extra['slavedb'] = true;
        $ticker_tb_data = array_keys($this->common->getDataByPK($this->ticker_tb_model->getList($params, $extra)->getData(), 'tkr_ticker'));

          $snp500_ticker = array();
        $snp500_ticker = $this->get_snp500();

        $cnt=0;
          $soaring_ticker = array();
        foreach($ticker_tb_data as $ticker) {
            if($cnt>9) break;
            if(in_array($ticker, $snp500_ticker)) {
                $soaring_ticker[] = $ticker;
                $cnt++;
            }
        }
        
        //급등주
        if(is_array($soaring_ticker) && sizeof($soaring_ticker) > 0) {
            $params = array();
            $params['in']['m_ticker'] = $soaring_ticker;
            $extra = array(
                'fields' => array('m_ticker', 'm_biz_total_score', 'm_v_fairvalue3'),
                'order_by' => ''
            );
            $extra['cache_sec'] = 3600;
            $extra['slavedb'] = true;
            $soaring_stock_data = $this->mri_tb_model->getList($params, $extra)->getData();

            foreach($soaring_stock_data as $key => $val) {
                $soaring_stock_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
                //$soaring_stock_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
                $soaring_stock_data[$key]['expected_star'] = $this->cal_valuation($val['m_v_fairvalue3'], $soaring_stock_data[$key]['ticker']['tkr_close']);
            }
            $soaring_stock_data = $this->common->indexSort($soaring_ticker, $soaring_stock_data, 'm_ticker');
        }
        
        //echo '<pre>'; print_r($soaring_stock_data);
        //$data['tab_text'] = $tab_text;
        $data['popular_stock_data'] = $popular_stock_data;
        $data['soaring_stock_data'] = $soaring_stock_data;
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

        $this->common->locationhref('/'.HN.'_main/search');
        exit;
    }

	public function service_info() {
        $this->load->view('/'.HN.'/main/service_info');
    }
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
