<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

//require_once dirname(__FILE__).'/base_mobile.php';
require_once $_SERVER['DOCUMENT_ROOT'].'/_application/controllers/base_mobile.php';
class Main extends BaseMobile_Controller {

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
    function __construct() {
        parent::__construct();

        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/daily_tb_model',
            DBNAME.'/sf1_tb_model',
            DBNAME.'/recommend_tb_model',
            DBNAME.'/analysis_tb_model',
            DBNAME.'/search_log_tb_model',
        ));
    }


    private function _general_data($ticker, $dimension='MRY', $option=array()) {

        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        $default_option = array(
            'with_history' => true,
            'with_finance' => true,
            'with_korname' => true,
        );

        $option = array_merge($default_option, $option);

        //////// header_type == sch_heaher 일때 필수 /////////////////
        //$this->header_data['header_template'] = '4';
        //$this->header_data['head_title'] = '종목검색';
        //$this->header_data['header_type'] = 'sch_heaher'; // 흰색 배경색에 종목명 노출, 검색영역 없는 타입 헤더
        $this->header_data['current_ticker'] = $this->ticker_info_map[$ticker]; // 현재 보는 종복 정보
        //////// END OF - header_type == sch_heaher 일때 필수 ////////

        // last_mry, last_mrq, last_mrt, sep, ticker 정보 꺼내 쓰기

        //if( isset($option['make_data']) && $option['make_data']) {
        //    $data = $this->itoozaapi->makeBaseData($ticker, 'MRY', $cell_type='data');
        //}
        //else {
            $data = $this->itoozaapi->getBaseData($ticker, 'MRY', $cell_type='data');
        //}

        if( ! $option['with_finance']) {
            unset($data['findata']);
        }
        if( ! $option['with_history']) {
            unset($data['last_mry_list']);
            unset($data['last_mrt_list']);
            unset($data['last_mrq_list']);
        }

        //echo '<pre>';
        //print_r($data);
        //echo '</pre>';exit;

        $data['mry_data'] = &$data['last_mry'];
        $data['mrt_data'] = &$data['last_mrt'];
        $data['mrq_data'] = &$data['last_mrq'];
        if(isset($data['sepdata']) && is_array($data['sepdata'])){
            $data['sepdata'] = &array_shift($data['sepdata']);
        }

        $data['api_ticker'] = $data['ticker'];
        $data['ticker'] = $this->ticker_info_map[$ticker];
        $data['ticker_code'] = $ticker;

        //echo '<pre>';
        //print_r($data['mry_data']);
        //echo '</pre>';exit;

        // daily 채우기
        $params = array();
        $params['=']['dly_ticker'] = $ticker;
        $extra = array();
        $extra['limit'] = 1;
        $extra['slavedb'] = true;
        $daily_data = $this->daily_tb_model->getList($params, $extra)->getData();
        $data['daily_data'] = array_pop($daily_data);

        // mri 채우기
        $data['mri_data'] = $this->mri_tb_model->get(array('m_ticker' => $ticker))->getData();

        // ticker_info_map 복사
        //$data['ticker_info_map'] = $this->ticker_info_map;
        if( isset($option['with_korname']) && $option['with_korname']) {
            $data['ticker_info_map'] = $this->itoozaapi->getTickerKoreanMap();
        }

        // 종목추천에 등록된 ticker 인지 확인
        $data['is_recom_ticker'] = FALSE;
        $params = array();
        $params['=']['rc_ticker'] = $ticker;
        $params['=']['rc_is_active'] = 'YES';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['in']['rc_endtype'] = array('ING','SUCCESS');
        $extra = array(
            'order_by' => 'rc_id DESC'
        );
        $extra['slavedb'] = true;
        $recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
        if(sizeof($recom_data) > 0) {
            $recom = array_shift($recom_data);
            $data['is_recom_ticker'] = TRUE;
            $data['recom_link'] = '/stock/recommend_view/'.$recom['rc_id'];
        }

        // 종목추천에 등록된 ticker 인지 확인
        $data['is_analysis_ticker'] = FALSE;
        $params = array();
        $params['=']['an_ticker'] = $ticker;
        $params['=']['an_is_active'] = 'YES';
        $params['<=']['an_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
            'order_by' => 'an_id DESC'
        );
        $extra['slavedb'] = true;
        $analysis_data = $this->analysis_tb_model->getList($params, $extra)->getData();
        if(sizeof($analysis_data) > 0) {
            $analy = array_shift($analysis_data);
            $data['is_analysis_ticker'] = TRUE;
            $data['analysis_link'] = '/stock/analysis_view/'.$analy['an_id'];
        }

        return $data;
    }

    public function index($ticker='MSFT')
    {
        $ticker = strtoupper($ticker);

        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        $option = array(
            'with_history' => true,
        );

        $data = array();
        $data_mrt = array();
        $data_mrq = array();

        $data_mrt = $this->_general_data($ticker, 'MRT', $option);
        $data_mrq = $this->_general_data($ticker, 'MRQ', $option);
        $data = $this->_general_data($ticker, 'MRT', $option);
        $data['history_mry'] = $data['last_mry_list'];
        $data['history_mrt'] = $data_mrt['last_mrt_list'];
        $data['history_mrq'] = $data_mrq['last_mrq_list'];
        unset($data_mrt);
        unset($data_mrq);
		//echo '<pre>'; print_r($data); exit;

        $data['table_title_map'] = array(
            'income' => '손익계산서',
            'finstate' => '재무상태표',
            'cashflow' => '현금흐름표',
        );

        $data['financial_income'] = $this->financial_income;
        $data['financial_status'] = $this->financial_status;
        $data['financial_cash'] = $this->financial_cash;
        $data['financial_status_adr'] = $this->financial_status_adr;

		//echo '<pre>'; print_r($data['financial_income'] ); exit;

		if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
			$sf1_opinc = 'sf1_opinc_ori';
			$sf1_ebitda = 'sf1_ebitda_ori';
			$sf1_netinc = 'sf1_netinc_ori';
		}
		else {
			$sf1_opinc = 'sf1_opinc';
			$sf1_ebitda = 'sf1_ebitda';
			$sf1_netinc = 'sf1_netinc';
		}

        // 손익계산서
        $field_title_map['income']['sf1_revenue'] = '매출액';
        $field_title_map['income'][$sf1_opinc] = '영업이익';
        $field_title_map['income'][$sf1_ebitda] = 'EBITDA';
        $field_title_map['income'][$sf1_netinc] = '순이익';

        // 재무상태표
        $field_title_map['finstate']['sf1_assets'] = '자산총계';
        $field_title_map['finstate']['sf1_liabilities'] = '부채총계';
        $field_title_map['finstate']['sf1_equity'] = '자본총계';

        // 현금흐름표
        $field_title_map['cashflow']['sf1_ncfo'] = '영업활동';
        $field_title_map['cashflow']['sf1_ncfi'] = '투자활동';
        $field_title_map['cashflow']['sf1_ncff'] = '재무활동';

        $data['is_adr'] = false;

        if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
	        $data['is_adr'] = true;
            $sf1_opinc = 'sf1_opinc_ori';
            $sf1_ebitda = 'sf1_ebitda_ori';
            $sf1_netinc = 'sf1_netinc_ori';
        }
        else {
            $sf1_opinc = 'sf1_opinc';
            $sf1_ebitda = 'sf1_ebitda';
            $sf1_netinc = 'sf1_netinc';
        }

        // 손익계산서
        $field_title_map['income']['sf1_revenue'] = '매출액';
        $field_title_map['income'][$sf1_opinc] = '영업이익';
        $field_title_map['income'][$sf1_ebitda] = 'EBITDA';
        $field_title_map['income'][$sf1_netinc] = '순이익';

        // 재무상태표
        $field_title_map['finstate']['sf1_assets'] = '자산총계';
        $field_title_map['finstate']['sf1_liabilities'] = '부채총계';
        $field_title_map['finstate']['sf1_equity'] = '자본총계';

        // 현금흐름표
        $field_title_map['cashflow']['sf1_ncfo'] = '영업활동';
        $field_title_map['cashflow']['sf1_ncfi'] = '투자활동';
        $field_title_map['cashflow']['sf1_ncff'] = '재무활동';

        $data['table_field_title_map'] = $field_title_map;

        $data['ticker_currency'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][0];
        $data['ticker_unit'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][1];

        $data['orig_mrq_data'] = array_shift($this->sf1_tb_model->getList(array('sf1_ticker' => $ticker, 'sf1_dimension' => 'MRQ'), array('limit' => 1))->getData());
        $data['mrt_list'] = $data['last_mrt_list'];
        $data['mry_list'] = $data['last_mry_list'];

        //$data['mrt_list'] = $basedata['last_mrt_list'];
        //$data['mry_list'] = $basedata['last_mry_list'];
        //echo '<pre>'; print_r($field_title_map); exit;
        // 경쟁사 채우기
        $data['competitor'] = $this->itoozaapi->getCompetitor($ticker)?:array();

        //애널리스트 의견
        $path = MASTER_DATA.'/an_opinion.inc';
        if(file_exists($path)) {
            $an_items = array();

            $contents = explode("\n", file_get_contents($path));
            $title = array();
            foreach($contents as $idx => $row) {
                $row = explode("\t", $row);
                if($idx>0){
                    $an_items[$row[0]] = $row[1];
                }
            }
        }

        //최신검색 Start
        $params = array();
        $extra = array();
        $extra = array(
            'order_by' => 'sl_id desc',
            'fields' => 'sl_ticker',
            'limit' => 10,
            //'cache_sec' => 3600,
            'slavedb' => true
        );

        $search_recent = array_keys($this->common->getDataByPK($this->search_log_tb_model->getList($params, $extra)->getData(), 'sl_ticker'));

        $params = array();
        $params['in']['m_ticker'] = $search_recent;
        $extra = array(
            'fields' => array('m_ticker', 'm_biz_total_score'),
            'order_by' => '',
            'cache_sec' => 3600,
            'slavedb' => true
        );
        $search_recent_data = $this->mri_tb_model->getList($params, $extra)->getData();

        foreach($search_recent_data as $key => $val) {
            $search_recent_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
            $search_recent_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
        }
        $search_recent_data = $this->common->indexSort($search_recent, $search_recent_data, 'm_ticker');

        //echo '<pre>'; print_r($search_recent_data); exit;
        $data['search_recent_data'] = $search_recent_data;
        //최신검색 End

        //인기검색 Start
        shuffle($this->popular_search_ticker);
        $search_popular = array_slice($this->popular_search_ticker, 0 ,5);

        $params = array();
        $params['in']['m_ticker'] = $search_popular;
        $extra = array(
            'fields' => array('m_ticker', 'm_biz_total_score'),
            'order_by' => '',
            'cache_sec' => 3600,
            'slavedb' => true
        );

        $search_popular_data = $this->mri_tb_model->getList($params, $extra)->getData();

        foreach($search_popular_data as $key => $val) {
            $search_popular_data[$key]['ticker'] = $this->ticker_info_map[$val['m_ticker']];
            $search_popular_data[$key]['an_opinion'] = $an_items[$val['m_ticker']];
        }
        $search_popular_data = $this->common->indexSort($search_popular, $search_popular_data, 'm_ticker');

        //echo '<pre>'; print_r($search_popular_data); exit;
        $data['search_popular_data'] = $search_popular_data;
        //인기검색 End

        //D04. 투자지표 Start
        $invest_mrt = $this->itoozaapi->getInvestTkr($ticker, 'MRT');
        $invest_mrt['data'] = array_slice($invest_mrt['data'], 0, 6);
        $data['invest_mrt'] = $invest_mrt;

        $invest_mry = $this->itoozaapi->getInvestTkr($ticker, 'MRY');
        $invest_mry['data'] = array_slice($invest_mry['data'], 0, 6);
        $data['invest_mry'] = $invest_mry;

        $invest_mrq = $this->itoozaapi->getInvestTkr($ticker, 'MRQ');
        $invest_mrq['data'] = array_slice($invest_mrq['data'], 0, 6);
        $data['invest_mrq'] = $invest_mrq;

        $data['invest_subtitle'] = array('주당지표', '가치평가', '수익성', '안전성', '효율성');
        //D04. 투자지표 End

        //echo '<pre>'; print_r($invest_mrq); exit;
        // 최근 실적발표 Start
        $params = array();
        $params['join']['ticker_tb'] = 'tkr_ticker = sf1_ticker';
        $params['=']['sf1_dimension'] = 'MRQ';
        $params['=']['tkr_is_active'] = 'YES';
        $extra = array(
            'fields' => array('tkr_ticker', 'tkr_name', 'tkr_rate', 'tkr_rate_str', 'tkr_close', 'sf1_netinccmnusd'),
            'order_by' => 'sf1_lastupdated desc, sf1_netinccmnusd desc',
            'limit' => 5,
            'cache_sec' => 3600,
            'slavedb' => true
        );
        //sf1_lastupdated
        $recent_report = $this->sf1_tb_model->getList($params, $extra)->getData();
        $data['recent_report'] = $recent_report;

        // 최근 실적발표 전년동기 대비 실적
        $recent_report_tickers = array_keys($this->common->getDataByPK($recent_report, 'tkr_ticker'));
        $recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($recent_report_tickers);
        //echo '<pre>'; print_r($recent_report_rates);
        //$recent_report_rates = $recent_report_rates['rate'];
        //$recent_report_rates = $recent_report_rates['rate_pm'];
        $data['recent_report_rates'] = $recent_report_rates['rate'];
        $data['recent_report_rates_pm'] = $recent_report_rates['rate_pm'];
        // 최근 실적발표 End


        //전종목 투자 매력도 Start
        $params = array();
        $params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
        $params['>=']['dly_marketcap'] = '10000';

        $extra = array(
            'order_by' => 'm_biz_total_score desc, m_g_roe desc',
            'limit' => 5,
            'cache_sec' => 3600,
            'slavedb' => true
        );

        $attractive_data = $this->mri_tb_model->getRecomStockList('total_score', $limit, $params, $extra);
        //echo '<pre>'; print_r($attractive_data); exit;
        $data['attractive_data'] = $attractive_data;
        //전종목 투자 매력도 End

        //투자레시피 Start
        //$data = array();
        //$list = $this->_get_recipe_data('dividend');


        //배당매력주
        $type = 'dividend'; //배당매력주
        //$type = 'growth'; //이익성장주
        //$type = 'moat'; //소비자독점
        //$type = 'total_score'; //슈퍼스톡

        $limit = 5;

        $params = array();
        $params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';

        $extra = array(
            'cache_sec' => 3600,
            'slavedb' => true
        );

        $dividend_list = $this->mri_tb_model->getRecomStockList('dividend', $limit, $params, $extra); //배당매력주
        $data['dividend_list'] = $dividend_list;
        $recipe_list = $this->mri_tb_model->getRecomStockList('total_score', $limit, $params, $extra); //슈퍼스톡
        $data['recipe_list'] = $recipe_list;

        $params['>=']['dly_marketcap'] = '10000';

        $growth_list = $this->mri_tb_model->getRecomStockList('growth', $limit, $params, $extra); //이익성장주
        $data['growth_list'] = $growth_list;
        $moat_list = $this->mri_tb_model->getRecomStockList('moat', $limit, $params, $extra); //소비자독점
        $data['moat_list'] = $moat_list;

        //echo '<pre>'; print_r($list); exit;

        /*
        $data['dividend_content_html'] = $this->load->view('/mobile/stock/recipe_list.php', array('type' => 'dividend', 'list' => $list), true);

        $list = $this->_get_recipe_data('growth');
        $data['growth_content_html'] = $this->load->view('/mobile/stock/recipe_list.php', array('type' => 'growth', 'list' => $list), true);

        $list = $this->_get_recipe_data('moat');
        $data['moat_content_html'] = $this->load->view('/mobile/stock/recipe_list.php', array('type' => 'moat', 'list' => $list), true);

        $list = $this->_get_recipe_data('total_score');
        $data['total_score_content_html'] = $this->load->view('/mobile/stock/recipe_list.php', array('type' => 'total_score', 'list' => $list), true);

        $this->header_data['header_template'] = '2';
        $this->header_data['head_title'] = '투자 레시피';
        $this->_view('/stock/recipe', $data);
        */
        //투자레시피 End
         $this->cms_view('main', $data);
    }

    private function _get_recipe_data($type) {
        $limit = 30;
        $page = (isset($request['page']) && strlen($request['page']) > 0) ? $request['page'] : '1';

        $add_params = array();
        $add_params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
        if($type=='growth'||$type=='moat') {
            $add_params['>=']['dly_marketcap'] = '10000';
        }
        $add_extra = array(
            'offset' => $limit * ($page-1),
        );
        $list = $this->mri_tb_model->getRecomStockList($type, $limit, $add_params, $add_extra);
        return $list;
    }

    public function chart($ticker='MSFT') {

        $ticker = strtoupper($ticker);

        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }


        $dimension='MRY';

        $option = array(
            'with_history' => true,
            //'with_korname' => true,
        );
        $data = array();

        $data = $this->_general_data($ticker, $dimension, $option);

        //$data['history'] = $data['last_'.strtolower($dimension).'_list'];


        //주가-선차트(1개월)
        $chart = array();
        $chart = $this->itoozaapi->getSEPListForChart(array($ticker));

        $chart_one = array_slice($chart[$ticker], -20, 20);
        $chart_one =  implode(',', array_values($chart_one));
        $data['chart_one'] = $chart_one;

        //주가-선차트(6개월)/툴팁
        $chart_six = array_slice($chart[$ticker], (-20*6), (20*6)); // 6개월
        $data['chart_six'] = implode(',', array_values($chart_six));
        $data['chart_six_key'] = array_keys($chart_six);

        //재무제표-막대/툴팁 Start
        $data['is_adr'] = false;
        if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
            $data['is_adr'] = true;
            $sf1_opinc = 'sf1_opinc_ori';
            $sf1_netinc = 'sf1_netinc_ori';
        }
        else {
            $sf1_opinc = 'sf1_opinc';
            $sf1_netinc = 'sf1_netinc';
        }

		$data['is_financial'] = false;
		if( $data['ticker']['tkr_sector'] == 'Financial Services' && $data['ticker']['tkr_industry'] != 'Financial Data & Stock Exchanges' ) {
			$data['is_financial'] = true;

		}

        // 재무제표 차트 채우기
        $history_struct = array(
            'sf1_revenue' => array(),
            $sf1_opinc => array(),
            $sf1_netinc => array(),
            'sf1_assets' => array(),
            'sf1_liabilities' => array(),
            'sf1_equity' => array(),
            'sf1_ncfo' => array(),
            'sf1_ncfi' => array(),
            'sf1_ncff' => array(),
        );

        // 재무재표 연간 차트용 데이터
        $chart_mry = $history_struct;

        $idx = 0;
        if(isset($data['last_mry_list'])) {
            foreach($data['last_mry_list'] as $date => $row) {
                if($idx >= 3) break;
                foreach(array_keys($history_struct) as $k) {
                    if($k=='sf1_opinc_ori'||$k=='sf1_netinc_ori') $row[$k] = $row[$k]/1000000;
                    if($data['ticker_unit']>0) {
                        $row[$k] = str_replace(',','',$row[$k])/$data['ticker_unit'];
                    }
                    $chart_mry[$k][$date] = str_replace(array(',','%'),'',$row[$k]);
                }
                $idx++;
            }
        }

        $mry_chart_value = array();
        $mry_chart_key = array();
        foreach($chart_mry as $key => $val) {
            $chartval = array_reverse($val);
            $chartkey = array_reverse(array_keys($val));
            $mry_chart_value[$key] = implode(',', $chartval);
            $mry_chart_key[$key] = implode(',', $chartkey);
        }
        unset($data['last_mry_list']);
        $data['mry_chart_value_03'] = $mry_chart_value;
        $data['mry_chart_key_03'] = $mry_chart_key;

        // 재무재표 분기 차트용 데이터
        $chart_mrq = $history_struct;

        $idx = 0;
        if(isset($data['last_mrq_list'])) {
            foreach($data['last_mrq_list'] as $date => $row) {
                if($idx >= 3) break;
                foreach(array_keys($history_struct) as $k) {
                    if($k=='sf1_opinc_ori'||$k=='sf1_netinc_ori') $row[$k] = $row[$k]/1000000;
                    if($data['ticker_unit']>0) {
                        $row[$k] = str_replace(',','',$row[$k])/$data['ticker_unit'];
                    }
                    $chart_mrq[str_replace('.','-',$k)][$date] = str_replace(array(',','%'),'',$row[$k]);
                }
                $idx++;
            }
        }

        $mrq_chart_value = array();
        $mrq_chart_key = array();
        foreach($chart_mrq as $key => $val) {
            $chartval = array_reverse($val);
            $chartkey = array_reverse(array_keys($val));
            $mrq_chart_value[$key] = implode(',', $chartval);
            $mrq_chart_key[$key] = implode(',', $chartkey);
        }
        unset($data['last_mrq_list']);
        $data['mrq_chart_value_03'] = $mrq_chart_value;
        $data['mrq_chart_key_03'] = $mrq_chart_key;
        //재무제표-막대/툴팁 End

        //투자매력 > 배당매력-막대/툴팁 Start

        // 전체 종목 수
        $params = array();
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_count = $this->mri_tb_model->getCount($params)->getData();
        $data['sp_totalcount'] = $mri_count;

        // 항목별 전종목 평균점수
        $params = array();
        $extra = array();
        $extra['cache_sec'] = 3600*24;
        $extra['order_by'] = '';
        $extra['fields'] = array(
            'avg(m_biz_dividend_stars) as m_biz_dividend_stars',
            'avg(m_biz_moat_stars) as m_biz_moat_stars',
            'avg(m_biz_safety_stars) as m_biz_safety_stars',
            'avg(m_biz_growth_stars) as m_biz_growth_stars',
            'avg(m_biz_cashflow_stars) as m_biz_cashflow_stars',

            'avg(m_d_divyield) as m_d_divyield',
            'avg(m_d_poratio) as m_d_poratio',
            'avg(m_d_epsgr2) as m_d_epsgr2',
            'avg(m_d_fcfgr) as m_d_fcfgr',

            'avg(m_m_roe) as m_m_roe',
            'avg(m_m_opmargin) as m_m_opmargin',
            'avg(m_m_revenuegr) as m_m_revenuegr',

            'avg(m_s_debtratio) as m_s_debtratio',
            'avg(m_s_crratio) as m_s_crratio',
            'avg(m_s_intcoverage) as m_s_intcoverage',
            'avg(m_s_boingratio) as m_s_boingratio',
            'avg(m_s_fincost) as m_s_fincost',

            'avg(m_g_roe) as m_g_roe',
            'avg(m_g_epsgr) as m_g_epsgr',
            'avg(m_s_bis) as m_s_bis',

            'avg(m_c_ffrevenue) as m_c_ffrevenue',
            'avg(m_m_assetsgr) as m_m_assetsgr',
            'avg(m_c_pcr) as m_c_pcr',
            'avg(m_c_cashflow) as m_c_cashflow',

        );
        $extra['slavedb'] = true;
        $data['avg_scores'] = array_shift($this->mri_tb_model->getList($params, $extra)->getData());
        $data['avg_scores'] = array_map('floatval', $data['avg_scores']);


        // 항목별 전종목 평균점수(주가흐름배수는 pcr>0 이상인 데이터만 적용)
        $params = array();
        $params['>']['m_c_pcr'] = 0;
        $extra = array();
        $extra['order_by'] = '';
        $extra['fields'] = array(
            'avg(m_c_pcr) as m_c_pcr'
        );
        $extra['cache_sec'] = 3600*24;
        $extra['slavedb'] = true;
        $data['avg_scores_p'] = array_shift($this->mri_tb_model->getList($params, $extra)->getData());
        $data['avg_scores_p'] = array_map('floatval', $data['avg_scores_p']);

        // 항목별 업종 평균점수(주가흐름배수는 pcr>0 이상인 데이터만 적용)
        $params = array();
        if($data['mri_data']['m_industry']) {
            $params['=']['m_industry'] = $data['mri_data']['m_industry'];
        } else if($data['mri_data']['m_sector']) {
            $params['=']['m_sector'] = $data['mri_data']['m_sector'];
        }
        $params['>']['m_c_pcr'] = 0;

        $extra = array();
        $extra['order_by'] = '';
        $extra['fields'] = array(
            'avg(m_c_pcr) as m_c_pcr'
        );
        $extra['cache_sec'] = 3600*24;
        $extra['slavedb'] = true;
        $data['indavg_scores_p'] = array_shift($this->mri_tb_model->getList($params, $extra)->getData());
        $data['indavg_scores_p'] = array_map('floatval', $data['indavg_scores_p']);

        // 항목별 업종 평균점수
        $params = array();
        if($data['mri_data']['m_industry']) {
            $params['=']['m_industry'] = $data['mri_data']['m_industry'];
        } else if($data['mri_data']['m_sector']) {
            $params['=']['m_sector'] = $data['mri_data']['m_sector'];
        }

        $extra = array();
        $extra['cache_sec'] = 3600*24;
        $extra['order_by'] = '';
        $extra['fields'] = array(
            'avg(m_biz_dividend_stars) as m_biz_dividend_stars',
            'avg(m_biz_moat_stars) as m_biz_moat_stars',
            'avg(m_biz_safety_stars) as m_biz_safety_stars',
            'avg(m_biz_growth_stars) as m_biz_growth_stars',
            'avg(m_biz_cashflow_stars) as m_biz_cashflow_stars',

            'avg(m_d_divyield) as m_d_divyield',
            'avg(m_d_poratio) as m_d_poratio',
            'avg(m_d_epsgr2) as m_d_epsgr2',
            'avg(m_d_fcfgr) as m_d_fcfgr',

            'avg(m_m_roe) as m_m_roe',
            'avg(m_m_opmargin) as m_m_opmargin',
            'avg(m_m_revenuegr) as m_m_revenuegr',

            'avg(m_s_debtratio) as m_s_debtratio',
            'avg(m_s_crratio) as m_s_crratio',
            'avg(m_s_intcoverage) as m_s_intcoverage',
            'avg(m_s_boingratio) as m_s_boingratio',
            'avg(m_s_fincost) as m_s_fincost',

            'avg(m_g_roe) as m_g_roe',
            'avg(m_g_epsgr) as m_g_epsgr',
            'avg(m_s_bis) as m_s_bis',

            'avg(m_c_ffrevenue) as m_c_ffrevenue',
            'avg(m_m_assetsgr) as m_m_assetsgr',
            'avg(m_c_pcr) as m_c_pcr',
            'avg(m_c_cashflow) as m_c_cashflow',
        );
        $extra['slavedb'] = true;
        $data['indavg_scores'] = array_shift($this->mri_tb_model->getList($params, $extra)->getData());
        $data['indavg_scores'] = array_map('floatval', $data['indavg_scores']);

        //$data['mri_detail'] = $this->itoozaapi->getBizMRIDetail($ticker);

        // 배당매력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_dividend_score'] = $data['mri_data']['m_biz_dividend_score'];
        $params['=']['m_biz_dividend_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['dividend_high_count'] = $mri_high_count;
        $data['dividend_high_rank_rate'] = @number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        /*
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['dividend_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_dividend_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['dividend'] = $this->get_spcomment('dividend_'.$sp, $params);
        */

        $params = array();
        $params['>']['m_biz_dividend_score'] = ($data['mri_data']['m_biz_dividend_score']=='') ? '0' : $data['mri_data']['m_biz_dividend_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_dividend_count = $this->mri_tb_model->getCount($params)->getData();
        $data['dividend_rank_rate'] = @number_format( ($mri_dividend_count+1) / $mri_count * 100, 2);

        // 사업독점력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_moat_score'] = $data['mri_data']['m_biz_moat_score'];
        $params['=']['m_biz_moat_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['moat_high_count'] = $mri_high_count;
        $data['moat_high_rank_rate'] = @number_format($mri_high_count / $mri_count * 100, 2);

        /*
        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['moat_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_moat_stars']);
        if($sp<1) $sp = 1;
        */

        $data['mri_data']['moat'] = $this->get_spcomment('moat_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_moat_score'] = ($data['mri_data']['m_biz_moat_score']=='') ? '0' : $data['mri_data']['m_biz_moat_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_moat_count = $this->mri_tb_model->getCount($params)->getData();
        $data['moat_rank_rate'] = @number_format(($mri_moat_count+1) / $mri_count * 100, 2);

        // 재무안정성 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_safety_score'] = $data['mri_data']['m_biz_safety_score'];
        $params['=']['m_biz_safety_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['safety_high_count'] = $mri_high_count;
        $data['safety_high_rank_rate'] = @number_format($mri_high_count / $mri_count * 100, 2);

        /*
        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['safety_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_safety_stars']);
        if($sp<1) $sp = 1;
        */

        $data['mri_data']['safety'] = $this->get_spcomment('safety_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_safety_score'] = ($data['mri_data']['m_biz_safety_score']=='') ? '0' : $data['mri_data']['m_biz_safety_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_safety_count = $this->mri_tb_model->getCount($params)->getData();
        $data['safety_rank_rate'] = @number_format(($mri_safety_count+1) / $mri_count * 100, 2);

        // 수익성장성 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_growth_score'] = $data['mri_data']['m_biz_growth_score'];
        $params['=']['m_biz_growth_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['growth_high_count'] = $mri_high_count;
        $data['growth_high_rank_rate'] = @number_format($mri_high_count / $mri_count * 100, 2);

        /*
        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['growth_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_growth_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['growth'] = $this->get_spcomment('growth_'.$sp, $params);
        */

        $params = array();
        $params['>']['m_biz_growth_score'] = ($data['mri_data']['m_biz_growth_score']=='') ? '0' : $data['mri_data']['m_biz_growth_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_growth_count = $this->mri_tb_model->getCount($params)->getData();
        $data['growth_rank_rate'] = @number_format(($mri_growth_count+1) / $mri_count * 100, 2);

        // 현금창출력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_cashflow_score'] = $data['mri_data']['m_biz_cashflow_score'];
        $params['=']['m_biz_cashflow_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['cashflow_high_count'] = $mri_high_count;
        $data['cashflow_high_rank_rate'] = @number_format($mri_high_count / $mri_count * 100, 2);

        /*
        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['cashflow_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_cashflow_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['cashflow'] = $this->get_spcomment('cashflow_'.$sp, $params);
        */

        $params = array();
        $params['>']['m_biz_cashflow_score'] = ($data['mri_data']['m_biz_cashflow_score']=='') ? '0' : $data['mri_data']['m_biz_cashflow_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_cashflow_count = $this->mri_tb_model->getCount($params)->getData();
        $data['cashflow_rank_rate'] = @number_format(($mri_cashflow_count+1) / $mri_count * 100, 2);

        // 재무제표 차트 채우기
        $history_struct = array(
            'sf1_revenue' => array(),
            'sf1_opinc' => array(),
            'sf1_netinc' => array(),
            'sf1_assets' => array(),
            'sf1_liabilities' => array(),
            'sf1_equity' => array(),
            'sf1_ncfo' => array(),
            'sf1_ncfi' => array(),
            'sf1_ncff' => array(),
        );

        // 재무재표 연간 차트용 데이터
        $chart_mry = $history_struct;

        $idx = 0;
        if(isset($data['last_mry_list'])) {
            foreach($data['last_mry_list'] as $date => $row) {
                if($idx >= 3) break;
                foreach(array_keys($history_struct) as $k) {
                    $chart_mry[$k][$date] = str_replace(array(',','%'),'',$row[$k]);
                }
                $idx++;
            }
        }

        $mry_chart_value = array();
        foreach($chart_mry as $key => $val) {
            $chartval = array_reverse($val);
            $mry_chart_value[$key] = implode(',', $chartval);
        }
        unset($data['last_mry_list']);
        $data['mry_chart_value'] = $mry_chart_value;


        // 재무재표 분기 차트용 데이터
        $chart_mrq = $history_struct;

        $idx = 0;
        if(isset($data['last_mrq_list'])) {
            foreach($data['last_mrq_list'] as $date => $row) {
                if($idx >= 3) break;
                foreach(array_keys($history_struct) as $k) {
                    $chart_mrq[str_replace('.','-',$k)][$date] = str_replace(array(',','%'),'',$row[$k]);
                }
                $idx++;
            }
        }

        $mrq_chart_value = array();
        foreach($chart_mrq as $key => $val) {
            $chartval = array_reverse($val);
            $mrq_chart_value[$key] = implode(',', $chartval);
        }
        unset($data['last_mrq_list']);
        $data['mrq_chart_value'] = $mrq_chart_value;
        //투자매력 > 배당매력-막대/툴팁 End

        // 밸류에이션 스피드차트 Start
        $expected_star = $this->cal_valuation($data['mri_data']['m_v_fairvalue3'], $data['sepdata']['sep_close']);
        $data['expected_star']  = $expected_star;
        //$an_data['fairvalue'] = $data['mri_data']['m_v_fairvalue3'];
        // 밸류에이션 스피드차트 End
//echo '<pre>'; print_r($data); exit;

        //BIC차트 Start
        $data['vchart_data'] = $this->itoozaapi->getCharmFinanceVChartFile($ticker, $dimension);
        $data['ticker_currency'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][0];
        $data['ticker_unit'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][1];

		/*
		//수익성
        $map['profit']['salesincome']       = array('title' => '매출액 & 이익');
        $map['profit']['margin']            = array('title' => '이익률');
        $map['profit']['cor']               = array('title' => '원가율');
        $map['profit']['rnd']               = array('title' => '연구개발비');

		//안전성
        $map['safety']['debtcr']            = array('title' => '부채비율 & 유동비율');
        $map['safety']['borrow']            = array('title' => '차입금 & 차입금비율');
        $map['safety']['opintexp']          = array('title' => '영업이익 & 이자비용');
        $map['safety']['intexpcoverage']    = array('title' => '이자보상배수');
        $map['safety']['debtcost']          = array('title' => '차입금 & 금융비용');

		//자산구조
        $map['structure']['assetstructure'] = array('title' => '자산 구조');
        $map['structure']['profitaccum']    = array('title' => '이익 축적');
        $map['structure']['dividend']       = array('title' => '주당배당금 & 배당률');
        $map['structure']['payout']         = array('title' => '배당성향');

		//효율성
        $map['efficiency']['roepbr']        = array('title' => 'ROE & PBR');
        $map['efficiency']['dupont']        = array('title' => 'ROE 듀퐁분석');
        $map['efficiency']['roaroeroic']    = array('title' => 'ROA & ROE & ROIC');
        $map['efficiency']['turnoverdays']  = array('title' => '운전자본 회전일수');
        $map['efficiency']['ccc']           = array('title' => '현금 회전일수');

		//현금흐름
        $map['cashflow']['cashflow']        = array('title' => '현금흐름표');
        $map['cashflow']['freecashflow']    = array('title' => '잉여현금흐름');
        $map['cashflow']['fcfonrevenue']    = array('title' => '잉여현금흐름 비율');

		//밸류에이션
        $map['valuation']['per']            = array('title' => '주가수익배수(PER)');
        $map['valuation']['priceeps']       = array('title' => '주가 & 주당순이익');
        $map['valuation']['pbr']            = array('title' => '주가순자산배수(PBR)');
        $map['valuation']['pricebps']       = array('title' => '주가 & 주당순자산');
        $map['valuation']['pcr']            = array('title' => '주가현금흐름배수(PCR)');
        $map['valuation']['pricecps']       = array('title' => '주가 & 주당현금흐름');
        $map['valuation']['psr']            = array('title' => '주가매출액배수(PSR)');
        $map['valuation']['pricesps']       = array('title' => '주가 & 주당매출액');
        $map['valuation']['evebitda']       = array('title' => 'EV/EBITDA');
		
        if($vchart_type == 'profit') {
            if($chart_indicator == 'salesincome') {
                $result['data']['L1_column_revenue'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_revenue');
                $result['data']['R1_line_opinc'] = $this->common->array2Map($data, 'sf1_datekey', $sf1_opinc);
                $result['data']['R2_line_netinc'] = $this->common->array2Map($data, 'sf1_datekey', $sf1_netinc);
            }
            else if($chart_indicator == 'margin') {
                $result['data']['L1_line_opmargin'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_opmargin');
                $result['data']['L2_line_netmargin'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_netmargin');
            }
            else if($chart_indicator == 'cor') {
                $result['data']['L1_line_costrevenueratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_costrevenueratio');
                $result['data']['L2_line_opexratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_opexratio');
            }
            else if($chart_indicator == 'rnd') {
                $result['data']['L1_column_rnd'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_rnd');
                $result['data']['R1_line_rndratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_rndratio');
            }
        }
        else if($vchart_type == 'safety') {
            if($chart_indicator == 'debtcr') {
                $result['data']['L1_line_de'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_de');
                $result['data']['R1_line_currentratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_currentratio');
            }
            else if($chart_indicator == 'borrow') {
                $result['data']['L1_column_debt'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_debt');
                $result['data']['R1_line_debtassets'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_debtassets');
            }
            else if($chart_indicator == 'opintexp') {
                $result['data']['L1_line_opinc'] = $this->common->array2Map($data, 'sf1_datekey',  $sf1_opinc);
                $result['data']['R1_line_intexp'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_intexp');
            }
            else if($chart_indicator == 'intexpcoverage') {
                $result['data']['L1_line_intexpcoverage'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_intexpcoverage');
            }
            else if($chart_indicator == 'debtcost') {
                $result['data']['L1_column_debt'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_debt');
                $result['data']['R1_line_intexpratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_intexpratio');
            }
        }
        else if($vchart_type == 'structure') {
            if($chart_indicator == 'assetstructure') {
                $result['data']['L1_line_liabilitiesnc_equity'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_liabilitiesnc_equity');
                $result['data']['L2_line_equity'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_equity');
                $result['data']['L3_line_assetsnc'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_assetsnc');
            }
            else if($chart_indicator == 'profitaccum') {
                $result['data']['L1_line_retearn'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_retearn');
                $result['data']['L2_line_assetsq'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_assetsq');
                $result['data']['L3_line_investmentsnc'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_investmentsnc');
                $result['data']['L4_line_ppnenet'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ppnenet');
            }
            else if($chart_indicator == 'dividend') {
                $result['data']['L1_column_dps'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_dps');
                $result['data']['R1_line_divyield'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_divyield');
            }
            else if($chart_indicator == 'payout') {
                $result['data']['L1_line_payoutratio'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_payoutratio');
                $result['data']['R1_line_divyield'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_divyield');
            }
        }
        else if($vchart_type == 'efficiency') {
            if($chart_indicator == 'roepbr') {
                $result['data']['L1_line_roe'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_roe');
                $result['data']['R1_line_pb'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_pb');
            }
            else if($chart_indicator == 'dupont') {
                $result['data']['L1_line_ros'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ros');
                $result['data']['R1_line_assetturnover'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_assetturnover');
                $result['data']['R2_line_assets_equity'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_assets_equity');
            }
            else if($chart_indicator == 'roaroeroic') {
                $result['data']['L1_line_roa'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_roa');
                $result['data']['L2_line_roe'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_roe');
                $result['data']['L3_line_roic'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_roic');
            }
            else if($chart_indicator == 'turnoverdays') {
                $result['data']['L1_line_receiveturnoverdays'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_receiveturnoverdays');
                $result['data']['L2_line_inventoryturnoverdays'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_inventoryturnoverdays');
                $result['data']['L3_line_payableturnoverdays'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_payableturnoverdays');
            }
            else if($chart_indicator == 'ccc') {
                $result['data']['L1_line_cashconversioncycle'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_cashconversioncycle');
            }
        }
        else if($vchart_type == 'cashflow') {
            if($chart_indicator == 'cashflow') {
                $result['data']['L1_line_ncfo'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ncfo');
                $result['data']['L2_line_ncfi'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ncfi');
                $result['data']['L3_line_ncff'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ncff');
            }
            else if($chart_indicator == 'freecashflow') {
                $result['data']['L1_line_fcf'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_fcf');
                $result['data']['L2_line_netinc'] = $this->common->array2Map($data, 'sf1_datekey', $sf1_netinc);
            }
            else if($chart_indicator == 'fcfonrevenue') {
                $result['data']['L1_line_fcfonrevenue'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_fcfonrevenue');
            }
        }
        else if($vchart_type == 'valuation') {
            if($chart_indicator == 'per') {
                $result['data']['L1_line_pe'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_pe');
            }
            else if($chart_indicator == 'priceeps') {
                $result['data']['L1_line_epsdil'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_epsdil');
                $result['data']['R1_line_close'] = $this->_getSepClose($ticker, $result['data']['L1_line_epsdil']);
            }
            else if($chart_indicator == 'pbr') {
                $result['data']['L1_line_pb'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_pb');
            }
            else if($chart_indicator == 'pricebps') {
                $result['data']['L1_line_bvps'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_bvps');
                $result['data']['L2_line_close'] = $this->_getSepClose($ticker, $result['data']['L1_line_bvps']);
            }
            else if($chart_indicator == 'pcr') {
                $result['data']['L1_line_pc'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_pc');
            }
            else if($chart_indicator == 'pricecps') {
                $result['data']['L1_line_cps'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_cps');
                $result['data']['R1_line_close'] = $this->_getSepClose($ticker, $result['data']['L1_line_cps']);
            }
            else if($chart_indicator == 'psr') {
                $result['data']['L1_line_ps'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_ps');
            }
            else if($chart_indicator == 'pricesps') {
                $result['data']['L1_line_sps'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_sps');
                $result['data']['L2_line_close'] =  $this->_getSepClose($ticker, $result['data']['L1_line_sps']);
            }
            else if($chart_indicator == 'evebitda') {
                $result['data']['L1_line_evebitda'] = $this->common->array2Map($data, 'sf1_datekey', 'sf1_evebitda');
            }
        }
		*/
		
		//빅차트 End

        $this->cms_view('chart', $data);
    }

    public function common() {

        $data = array();
         $this->cms_view('common', $data);
    }

    //재무제표 손익계산서
    protected $financial_income = array(
        'sf1_revenue' => '매출액',
        'sf1_cor' => '매출원가',
        'sf1_gp' => '매출총이익',
        'sf1_opex' => '영업비용',
        'sf1_sgna' => '판매비와관리비',
        'sf1_rnd' => '연구개발비',
        'sf1_opexetc' => '기타',
        'sf1_opinc' => '영업이익',
        'sf1_ebitda' => 'EBITDA',
        'sf1_intexp' => '이자비용',
        'sf1_nonopinc' => '기타영업외이익',
        'sf1_taxexp' => '법인세비용',
        'sf1_netincdis' => '중단사업이익',
        'sf1_consolinc' => '연결 당기순이익',
        'sf1_netinc' => '지배지분 순이익',
        'sf1_netincnci' => '비지배지분 순이익',
    );

    //재무제표 재무상태표
    protected $financial_status = array(
        'sf1_null0' => '자산',
        'sf1_assetsq' => '당좌자산',
        'sf1_cashneq' => '현금및현금성자산',
        'sf1_investmentsc' => '단기투자자산',
        'sf1_receivables' => '매출채권및기타채권',
        'sf1_inventory' => '재고자산',
        'sf1_investmentsnc' => '장기투자자산',
        'sf1_ppnenet' => '유형자산',
        'sf1_intangibles' => '무형자산',
        'sf1_taxassets' => '이연법인세자산',
        'sf1_assetetc' => '기타',
        'sf1_assets' => '자산총계',
        'sf1_assetsc' => '유동자산',
        'sf1_assetsnc' => '비유동자산',
        'sf1_null14' => '부채',
        'sf1_payables' => '매입채무및기타채무',
        'sf1_debtc' => '단기차입금및유동성부채',
        'sf1_debtnc' => '사채 및 장기차입금',
        'sf1_deferredrev' => '이연수익',
        'sf1_taxliabilities' => '이연법인세부채',
        'sf1_liabilitiecetc' => '기타',
        'sf1_liabilities' => '부채총계',
        'sf1_liabilitiesc' => '유동부채',
        'sf1_liabilitiesnc' => '비유동부채',
        'sf1_null24' => '자본',
        'sf1_equity' => '자본총계',
    );

    //재무제표 현금흐름표
    protected $financial_cash = array(
        'sf1_ncfo' => '영업활동 현금흐름',
        'sf1_ncfi' => '투자활동 현금흐름',
        'sf1_ncff' => '재무활동 현금흐름',
        'sf1_ncfx' => '환율변동 효과',
        'sf1_ncf' => '현금의 증감',
        'sf1_capex' => '자본적지출(CAPEX)',
        'sf1_fcf' => '잉여현금흐름(FCF)',
    );

    //재무제표 재무상태표2 (assetsc, assetsnc, liabilitiesc, liabilitiesnc가 모두 빈값( 0 )일 때 사용)
    protected $financial_status_adr = array(
        'sf1_null0' => '자산',
        'sf1_cashneq' => '현금및현금성자산',
        'sf1_investments' => '투자자산',
        'sf1_receivables' => '매출채권및기타채권',
        'sf1_inventory' => '재고자산',
        'sf1_ppnenet' => '유형자산',
        'sf1_intangibles' => '무형자산',
        'sf1_taxassets' => '이연법인세자산',
        'sf1_assetsetc' => '기타',
        'sf1_assets' => '자산총계',
        'sf1_null10' => '부채',
        'sf1_payables' => '매입채무및기타채무',
        'sf1_debt' => '차입금',
        'sf1_deferredrev' => '이연수익',
        'sf1_taxliabilities' => '이연법인세부채',
        'sf1_deposits' => '예수부채',
        'sf1_liabilitiesetc' => '기타',
        'sf1_liabilities' => '부채총계',
        'sf1_equity' => '자본총계',
    );
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */
