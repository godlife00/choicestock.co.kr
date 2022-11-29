<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/eg_base_mobile.php';
class Eg_search extends Eg_BaseMobile_Controller {
    function __construct() {
        parent::__construct();

        //if($this->partner_info['part_name'] != 'eugene') {
        //$this->paramCheck();
        //}

        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/ticker_tb_model',
            DBNAME.'/daily_tb_model',
            DBNAME.'/mri_tb_model',
            DBNAME.'/sf1_tb_model',
            DBNAME.'/recommend_tb_model',
            DBNAME.'/analysis_tb_model',
        ));
    }

    public function index() {
        $this->common->locationhref('/'.EG.'_main');
    }

    private function _general_data($ticker, $dimension='MRY', $option=array()) {
        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        $default_option = array(
            'with_history' => false,
            'with_finance' => false,
        );

        $option = array_merge($default_option, $option);

        //////// header_type == sch_heaher 일때 필수 /////////////////
        $this->header_data['header_template'] = '4';
        $this->header_data['head_title'] = '종목검색';
        $this->header_data['header_type'] = 'sch_heaher'; // 흰색 배경색에 종목명 노출, 검색영역 없는 타입 헤더
        //$this->header_data['back_url'] = $_SERVER["HTTP_REFERER"];
        $this->header_data['back_url'] = '/';
        $this->header_data['current_ticker'] = $this->ticker_info_map[$ticker]; // 현재 보는 종복 정보
        //////// END OF - header_type == sch_heaher 일때 필수 ////////
        
        // last_mry, last_mrq, last_mrt, sep, ticker 정보 꺼내 쓰기

        if( isset($option['make_data']) && $option['make_data']) {
            $data = $this->itoozaapi->makeBaseData($ticker, 'MRY', $cell_type='data');
        }
        else {
			if($option['with_finance'] === true) {
		        $data = $this->itoozaapi->getBaseData($ticker, $dimension, $cell_type='data');
			}
			else {
		        $data = $this->itoozaapi->getBaseData($ticker, 'MRY', $cell_type='data');
			}
        }

        if( ! $option['with_finance']) {
            unset($data['findata']);
        }
		else {
			$data['history'] = $this->common->getDataByPK($data['findata'], 'sf1_datekey');
			$data['history'] = array_slice($data['history'], 0, 41);
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
        //print_r($data['ticker'] );
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
        $params['!=']['rc_view_srv'] = 'W';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['in']['rc_endtype'] = array('ING','SUCCESS','SELL');
        $extra = array(
            'order_by' => 'rc_id DESC'
        );
        $extra['slavedb'] = true;
        $recom_data = $this->recommend_tb_model->getList($params, $extra)->getData();
        if(sizeof($recom_data) > 0) {
            $recom = array_shift($recom_data);
            $data['is_recom_ticker'] = TRUE;
            $data['recom_link'] = '/'.EG.'_stock/recommend_view/'.$recom['rc_id'];
        }
/*
        // 종목추천에 등록된 ticker 인지 확인
        $data['is_analysis_ticker'] = FALSE;
        $params = array();
        $params['=']['an_ticker'] = $ticker; 
        $params['=']['an_is_active'] = 'YES';
        $params['!=']['an_view_srv'] = 'W';
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
*/
        //$data['meta_title'] = $data['ticker']['tkr_name'].'/'.$ticker.' | 초이스스탁';
        
        // 실시간 최근수집 주가로 덮어쓰기
        if($this->is_open === true) {
            $data['ticker'] = $this->ticker_tb_model->convertSyncInfo($data['ticker']);
        }

        //echo '<pre>';
        //print_r($data['ticker']); exit;

        //관심종목 체크
        $data['myitem'] = $this->like($ticker, 'Y');    //is_soft
        $data['is_soft'] = $this->is_soft;

        return $data;
    }

    /*
    public function primary_ticker($pri_ticker, $sec_ticker) {
        $data = array();
        $data['pri_ticker'] = $pri_ticker;
        $data['sec_ticker'] = $sec_ticker;

        $this->header_data['header_template'] = '4';
        $this->header_data['head_title'] = '종목진단';
        $this->_view('/search/primary_ticker', $data);
    }
    */

    
    // 종목진단 - 투자매력
    public function invest_charm2($ticker, $dimension='MRY') {
        return; //remove
        $ticker = strtoupper($ticker);

        $dimension='MRY';
        $option = array(
            'with_history' => true,
            'make_data' => true,
        );
        $this->_general_data($ticker, $dimension, $option);

        $this->itoozaapi->makeCompetitor($ticker)?:array();
    }

    private function _get_winner($ticker) {

        $result = array();

        $winner_all_file = 'winner_all.json';
        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$winner_all_file;

        if( is_file($file_path) ) {
            $winner_all = json_decode(file_get_contents($file_path), true);
        }

        if(is_array($winner_all[$ticker])) {
            $result['winner'] = $winner_all[$ticker];
            $result['win_trend'] = $this->win_trend;
        }

        return $result; 
    }
    // 종목진단 - 투자매력
    public function invest_charm($ticker, $dimension='MRY') {

        $ticker = strtoupper($ticker);

        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        $dimension='MRY';
        $option = array(
            'with_history' => true,
        );

        $data = $this->_general_data($ticker, $dimension, $option);

        //Primary Domestic 처리
        if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
            // 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
            //if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
            if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
                $pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

                if(isset($pri_ticker) && is_array($pri_ticker)) {
                    $data['sec_ticker'] = $ticker;
                    $data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
                    $data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
                }
            }
        }
        //echo '<pre>'; print_r($data); 
        /////////////////////////////// 종목진단 공통
        // 전체 종목 수
        $params = array();
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_count = $this->mri_tb_model->getCount($params)->getData();
        $data['sp_totalcount'] = $mri_count;

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
        $data['mri_data']['an_opinion'] = $an_items[$ticker];

        // 종합점수 순위($data['high_count'])
        $params = array();

        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score'] =='') ? '0' : $data['mri_data']['m_biz_total_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $data['high_count'] = $this->mri_tb_model->getCount($params)->getData();
        
        // 종합점수 상위 퍼센트($data['total_rank_rate'])
        //$params = array();
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$mri_high_count = $this->mri_tb_model->getCount($params)->getData();

        $top_rate = 0;
        $top_rate = round(($data['high_count']+1) / $mri_count * 100, 2);
        if($top_rate>=1) $top_rate = floor($top_rate);
        $data['total_rank_rate'] = $top_rate; 

        // 동종업계 총 수($data['industry_count'])
        $params = array();
        $params['=']['m_industry'] = ($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $data['industry_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 동종업계 순위($data['industry_high_count'])
        $params = array();
        $params['=']['m_industry'] = ($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score'] =='') ? '0' : $data['mri_data']['m_biz_total_score'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['industry_high_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 동종업계 상위%($data['industry_rank_rate'])
        //$params = array();
        //$params['=']['m_industry'] = $data['mri_data']['m_industry'];
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$industry_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['industry_rank_rate'] = 0;
        //if($data['industry_high_count']) {
        $indus_rate = 0;
        $indus_rate = @round(($data['industry_high_count']+1) / $data['industry_count'] * 100, 2);
        if($indus_rate>=1) $indus_rate = floor($indus_rate);
        $data['industry_rank_rate'] = $indus_rate; 
        //}
/*
    [is_recom_ticker] => 
    [is_analysis_ticker] => 
    [sp_totalcount] => 4989
    [high_count] => 492
    [total_rank_rate] => 11
    [industry_count] => 9
    [industry_high_count] => 4
    [industry_rank_rate] => 55
*/

        /////////////////////////////////////////////
        $data['current_tab'] = 'summary';
        $data['current_subtab'] = 'invest_charm'; // invest_charm | summary | finance_chart

        //심사용
        //$data['part_all'] = get_cookie('part_all');

        $data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
            $data['open_ticker'] = TRUE;
        }

        //주가추세
        $data['winner'] = $this->_get_winner($ticker);
        //15min
        $data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);

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
        $data['dividend_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['dividend_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_dividend_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['dividend'] = $this->get_spcomment('dividend_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_dividend_score'] = ($data['mri_data']['m_biz_dividend_score']=='') ? '0' : $data['mri_data']['m_biz_dividend_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_dividend_count = $this->mri_tb_model->getCount($params)->getData();
        $data['dividend_rank_rate'] = number_format( ($mri_dividend_count+1) / $mri_count * 100, 2);

        // 사업독점력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_moat_score'] = $data['mri_data']['m_biz_moat_score'];
        $params['=']['m_biz_moat_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['moat_high_count'] = $mri_high_count;
        $data['moat_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['moat_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_moat_stars']);
        if($sp<1) $sp = 1;

        $data['mri_data']['moat'] = $this->get_spcomment('moat_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_moat_score'] = ($data['mri_data']['m_biz_moat_score']=='') ? '0' : $data['mri_data']['m_biz_moat_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_moat_count = $this->mri_tb_model->getCount($params)->getData();
        $data['moat_rank_rate'] = number_format(($mri_moat_count+1) / $mri_count * 100, 2);

        // 재무안정성 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_safety_score'] = $data['mri_data']['m_biz_safety_score'];
        $params['=']['m_biz_safety_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['safety_high_count'] = $mri_high_count;
        $data['safety_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['safety_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_safety_stars']);
        if($sp<1) $sp = 1;

        $data['mri_data']['safety'] = $this->get_spcomment('safety_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_safety_score'] = ($data['mri_data']['m_biz_safety_score']=='') ? '0' : $data['mri_data']['m_biz_safety_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_safety_count = $this->mri_tb_model->getCount($params)->getData();
        $data['safety_rank_rate'] = number_format(($mri_safety_count+1) / $mri_count * 100, 2);

        // 수익성장성 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_growth_score'] = $data['mri_data']['m_biz_growth_score'];
        $params['=']['m_biz_growth_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['growth_high_count'] = $mri_high_count;
        $data['growth_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['growth_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_growth_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['growth'] = $this->get_spcomment('growth_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_growth_score'] = ($data['mri_data']['m_biz_growth_score']=='') ? '0' : $data['mri_data']['m_biz_growth_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_growth_count = $this->mri_tb_model->getCount($params)->getData();
        $data['growth_rank_rate'] = number_format(($mri_growth_count+1) / $mri_count * 100, 2);

        // 현금창출력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_cashflow_score'] = $data['mri_data']['m_biz_cashflow_score'];
        $params['=']['m_biz_cashflow_stars'] = 5;
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['cashflow_high_count'] = $mri_high_count;
        $data['cashflow_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['cashflow_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_cashflow_stars']);
        if($sp<1) $sp = 1;
        $data['mri_data']['cashflow'] = $this->get_spcomment('cashflow_'.$sp, $params);

        $params = array();
        $params['>']['m_biz_cashflow_score'] = ($data['mri_data']['m_biz_cashflow_score']=='') ? '0' : $data['mri_data']['m_biz_cashflow_score'];
        $params['slavedb'] = true;
        $params['cache_sec'] = 3600*24;
        $mri_cashflow_count = $this->mri_tb_model->getCount($params)->getData();
        $data['cashflow_rank_rate'] = number_format(($mri_cashflow_count+1) / $mri_count * 100, 2);

        //한달 전 투자매력 점수 가져오기
        $pre_bizscore = $this->_get_pre_mriscore($ticker);
        $data['pre_mriscore'] = $pre_bizscore[0]['m_biz_total_score'];

        //적정가 차트 생성용
        $data['fairvalue_rate'] = $this->get_fairrate($data['ticker']['tkr_close'], $data['mri_data']);

/*차트*/
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

        // 경쟁사 채우기
        $competitor_data = array();
        $competitor_tickers = array_keys($this->itoozaapi->getCompetitor($ticker)?:array());
        if(sizeof($competitor_tickers) > 0) {
            $params = array();
            $params['in']['m_ticker'] = $competitor_tickers;
            $extra = array(
                'fields' => 'm_ticker, m_korname, m_usname, m_biz_total_score, m_biz_dividend_score, m_biz_moat_score, m_biz_growth_score, m_biz_safety_score, m_biz_cashflow_score, m_biz_dividend_stars, m_biz_moat_stars, m_biz_growth_stars, m_biz_safety_stars, m_biz_cashflow_stars',
                'order_by' => ''
            );
            $extra['slavedb'] = true;
            $extra['cache_sec'] = 3600*24;
            $competitor_data = $this->mri_tb_model->getList($params, $extra)->getData();
        }
        $data['competitor_data'] = $competitor_data;
        //echo '<pre>'; print_r($competitor_data); exit;

        $data['is_financial'] = false;
        if( $data['ticker']['tkr_sector'] == 'Financial Services' && $data['ticker']['tkr_industry'] != 'Financial Data & Stock Exchanges' ) {
            $data['is_financial'] = true;

        }
        //echo '<pre>'; print_r($data['mri_data']); exit;

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.' | 투자매력 - 초이스스탁US';

        $this->header_data['back_url'] = '-1';
        $this->_view('/search/invest_charm', $data);
    }
    

    private function _get_pre_mriscore($ticker) {
        $this->load->model(DBNAME.'/mriall_tb_model');

        $pre_date = date('Ymd', time()-86400*30);
        $params = array();
        $params['=']['m_ticker'] = $ticker;
        $params['<']['m_sep_date'] = $pre_date;

        $extra = array(
            'order_by' => 'm_sep_date desc',
            'limit' => 1,
            'quandldb' => true,
            'cache_sec' => 3600
            //'cache_sec' => 3600*12
        );

        $result = $this->mriall_tb_model->getList($params, $extra)->getData();

        return $result;
    }

    // 종목진단 - 경쟁사
    public function competitor($ticker) {

        $ticker = strtoupper($ticker);

        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
        }

        $data = array();

        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) {
            $dimension = 'MRT';
        }

        $option = array(
            'with_history' => true,
            'with_korname' => true,
        );

        $data = $this->_general_data($ticker, $dimension, $option);

        //Primary Domestic 처리
        if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
            // 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
            //if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
            if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
                $pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

                if(isset($pri_ticker) && is_array($pri_ticker)) {
                    $data['sec_ticker'] = $ticker;
                    $data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
                    $data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
                }
            }
        }

        /*
        $data['is_adr'] = false;
        if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
            $data['is_adr'] = true;
        }
        */

        // 경쟁사 채우기
        $data['competitor'] = $this->itoozaapi->getCompetitor($ticker)?:array();

        //echo '<pre>'; print_r($data['competitor']);
        $data['current_tab'] = 'competitor';

        //심사용
        //$data['part_all'] = get_cookie('part_all');
        
        $data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
            $data['open_ticker'] = TRUE;
        }

        //주가추세
        $data['winner'] = $this->_get_winner($ticker);
        //15min
        $data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.' | 경쟁사 - 초이스스탁US';

        $this->_view('/search/competitor', $data);
    }
    // 종목진단 - 요약
    public function summary($ticker) {
        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $ticker = urldecode($ticker);
            if(array_key_exists('search_history', $_COOKIE)) {
                $search_history = array_flip(explode(',', $_COOKIE['search_history']));
                if(isset($search_history[$ticker])) {
                    unset($search_history[$ticker]);
                    setcookie('search_history', implode(',', array_flip($search_history)), time()+(86400*365), '/', $this->config->item('cookie_domain'));
                }
            }
 
            $this->common->locationhref('/');
            return;
        }

        $dimension='MRY';
        $option = array(
            'with_history' => true,
            'with_korname' => true,
        );
        $data = $this->_general_data($ticker, $dimension, $option);
        unset($data['last_mrt_list']);
//echo '<pre>';
//print_r($data);

        //Primary Domestic 처리
        if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
            // 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
            //if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
            if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
                $pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

                if(isset($pri_ticker) && is_array($pri_ticker)) {
                    $data['sec_ticker'] = $ticker;
                    $data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
                    $data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
                }
            }
        }

        //종목진단(상단메뉴제거)
        $data['part_name'] = '';
        $data['part_page'] = '';
        if(isset($this->partner_info['part_page']) && $this->partner_info['part_page'] == 'et') {
            $data['part_name'] = $this->partner_info['part_name'];
            $data['part_page'] = $this->partner_info['part_page'];
        }
        $data['part_move'] = $this->partner_info['part_move'];

        /////////////////////////////// 종목진단 공통
        // 전체 종목 수
        $params = array();
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $mri_count = $this->mri_tb_model->getCount($params)->getData();
        $data['sp_totalcount'] = $mri_count;

        //$data['mri_data'] = $this->mri_tb_model->get(array('m_ticker' => $ticker))->getData();

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

        $data['mri_data']['an_opinion'] = $an_items[$ticker];

        //$expected_value = $this->cal_valuation($data['mri_data']['m_v_fairvalue3'], $data['ticker']['tkr_close']);
        //$data['expected_score']  = $expected_value['score'];
        //$data['expected_star'] = $expected_value['star'];

        // 종합점수 순위
        $params = array();
        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score']=='') ? '0' : $data['mri_data']['m_biz_total_score'];
         $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['high_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 종합점수 상위 퍼센트
        //$params = array();
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        
        $top_rate = 0;
        $top_rate = round(($data['high_count']+1) / $mri_count * 100, 2);
        if($top_rate>=1) $top_rate = floor($top_rate);
        $data['total_rank_rate'] = $top_rate; 
        // 동종업계 총 수
        $params = array();
        $params['=']['m_industry'] =($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['industry_count'] = $this->mri_tb_model->getCount($params)->getData();
        //$industry_count = $this->mri_tb_model->getCount($params)->getData();

        // 동종업계 순위
        $params = array();
        $params['=']['m_industry'] = ($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score']=='') ? '0' : $data['mri_data']['m_biz_total_score'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['industry_high_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 동종업게 상위%
        //$params = array();
        //$params['=']['m_industry'] = $data['mri_data']['m_industry'];
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$industry_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['industry_rank_rate'] = 0;
        //if($industry_high_count) {
        $indus_rate = 0;
        $indus_rate = round(($data['industry_high_count']+1) / $data['industry_count'] * 100, 2);
        if($indus_rate>=1) $indus_rate = floor($indus_rate);
        $data['industry_rank_rate'] = $indus_rate; 
        //}
        /////////////////////////////////////////////


        $data['current_tab'] = 'summary';
        $data['current_subtab'] = 'summary'; // invest_charm | summary | finance_chart
        
        //심사용
        //$data['part_all'] = get_cookie('part_all');

        $data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
            $data['open_ticker'] = TRUE;
        }

        //주가추세
        $data['winner'] = $this->_get_winner($ticker);
        //15min
        $data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);
        

        $chart = array();
        $chart_value = array();
        $chart = $this->itoozaapi->getSEPListForChart(array($ticker));
        if(isset($chart[$ticker]) && is_array($chart[$ticker])) {
            $chart_value = array_slice($chart[$ticker], (-20*6), (20*6)); // 6개월 
        }
        //krsort($chart_value);

        $data['close_chart_value'] = implode(',', array_values($chart_value));
        $data['close_chart_key'] = array_keys($chart_value);

        $data['ticker_currency'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][0];
        $data['ticker_unit'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][1];

//echo '<pre>';
//print_r($data['chart_value']);
//print_r($data['chart_key']);
//exit;
        // 종가데이터 6개월 차트용 데이터
/*
        $close_chart_value = array();
        if(isset($data['sepdata'])) {
            foreach($data['sepdata'] as $key => $val) {
                if($key >= (20*6)) break;
    
                //if(isset($val['sep_close']))
                $close_chart_value[] = $val['sep_close'];
            }
        }
        krsort($close_chart_value);
        $data['close_chart_value'] = implode(',', $close_chart_value);
*/
        $data['is_adr'] = false;
        //2020.08.26 수정 if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
        if( strstr(strtoupper($data['ticker']['tkr_category']), 'ADR') || strstr(strtoupper($data['ticker']['tkr_category']), 'CANADIAN') ) {
            $data['is_adr'] = true;
            $sf1_opinc = 'sf1_opinc_ori';
            $sf1_netinc = 'sf1_netinc_ori';
        }
        else {
            $sf1_opinc = 'sf1_opinc';
            $sf1_netinc = 'sf1_netinc';
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
//echo '<pre>';
//print_r($data['last_mry_list']);

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
        $data['mry_chart_value'] = $mry_chart_value;
        $data['mry_chart_key'] = $mry_chart_key;

//echo 'unit-->'.$data['ticker_unit'];
        // 재무재표 분기 차트용 데이터
        $chart_mrq = $history_struct;
//$data['ticker_unit'] = 0;
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
        $data['mrq_chart_value'] = $mrq_chart_value;
        $data['mrq_chart_key'] = $mrq_chart_key;
        
        // 경쟁사 채우기
        $data['competitor'] = $this->itoozaapi->getCompetitor($ticker)?:array();

        //echo '<pre>';
        //print_r($data['api_ticker']);
        //echo '</pre>';exit;

        //echo 'currency==>'.$data['ticker']['tkr_currency'];
        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.' | 기업개요 - 초이스스탁US';

        $this->_view('/search/summary', $data);
    }

    public function finance_chart($ticker, $dimension='MRY') {
        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) {
            $dimension = 'MRT';
        }

        $data = $this->_general_data($ticker, $dimension);

        //Primary Domestic 처리
        if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
            // 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
            //if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
            if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
                $pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

                if(isset($pri_ticker) && is_array($pri_ticker)) {
                    $data['sec_ticker'] = $ticker;
                    $data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
                    $data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
                }
            }
        }

        //종목진단(상단메뉴제거)
        $data['part_name'] = '';
        $data['part_page'] = '';
        if(isset($this->partner_info['part_page']) && $this->partner_info['part_page'] == 'et') {
            $data['part_name'] = $this->partner_info['part_name'];
            $data['part_page'] = $this->partner_info['part_page'];
        }
        $data['part_move'] = $this->partner_info['part_move'];

        /////////////////////////////// 종목진단 공통
        // 전체 종목 수
        $params = array();
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $mri_count = $this->mri_tb_model->getCount($params)->getData();
        $data['sp_totalcount'] = $mri_count;

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

        $data['mri_data']['an_opinion'] = $an_items[$ticker];

        // 종합점수 순위
        $params = array();
        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score']=='') ? '0' : $data['mri_data']['m_biz_total_score'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['high_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 종합점수 상위 퍼센트
        //$params = array();
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$mri_high_count = $this->mri_tb_model->getCount($params)->getData();

        $top_rate = 0;
        $top_rate = round(($data['high_count']+1) / $mri_count * 100, 2);
        if($top_rate>=1) $top_rate = floor($top_rate);
        $data['total_rank_rate'] = $top_rate; 

        // 동종업계 총 수
        $params = array();
        $params['=']['m_industry'] = ($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['industry_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 동종업계 순위
        $params = array();
        $params['=']['m_industry'] = ($data['mri_data']['m_industry']=='') ? 'null' : $data['mri_data']['m_industry'];
        $params['>']['m_biz_total_score'] = ($data['mri_data']['m_biz_total_score']=='') ? '0' : $data['mri_data']['m_biz_total_score'];
        $params['cache_sec'] = 3600*24;
        $params['slavedb'] = true;
        $data['industry_high_count'] = $this->mri_tb_model->getCount($params)->getData();

        // 동종업게 상위%
        //$params = array();
        //$params['=']['m_industry'] = $data['mri_data']['m_industry'];
        //$params['>=']['m_biz_total_score'] = $data['mri_data']['m_biz_total_score'];
        //$industry_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['industry_rank_rate'] = 0;
        //if($industry_high_count) {
        $indus_rate = 0;
        $indus_rate = round(($data['industry_high_count']+1) / $data['industry_count'] * 100, 1);
        if($indus_rate>=1) $indus_rate = floor($indus_rate);
        $data['industry_rank_rate'] = $indus_rate; 
        //}
        /////////////////////////////////////////////

        $data['current_tab'] = 'summary';
        $data['current_subtab'] = 'finance_chart';
        //심사용
        //$data['part_all'] = get_cookie('part_all');

        $data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
            $data['open_ticker'] = TRUE;
        }

        //주가추세
        $data['winner'] = $this->_get_winner($ticker);
        //15min
        $data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);
        $data['dimension'] = $dimension;

        $data['vchart_data'] = $this->itoozaapi->getCharmFinanceVChartFile($ticker, $dimension);

        $data['is_adr'] = false;
        //2020.08.26 수정 if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
        if( strstr(strtoupper($data['ticker']['tkr_category']), 'ADR') || strstr(strtoupper($data['ticker']['tkr_category']), 'CANADIAN') ) {
            if($dimension == 'MRT') {
                $data['is_adr'] = true;
                $data['vchart_data_mry'] = $this->itoozaapi->getCharmFinanceVChartFile($ticker, 'MRY');
            }
        }
        
        $data['ticker_currency'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][0];
        $data['ticker_unit'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][1];
        /*
        $data = $data['vchart_data'];
        echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
        echo '<pre>';
        print_r($data);
        echo '</pre>';exit;
        */

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.' | 재무차트 - 초이스스탁US';

        $this->_view('/search/finance_chart', $data);
    }

    public function finance_chart2($ticker, $dimension='MRY') {
        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) {
            $dimension = 'MRT';
        }

        //$data = $this->_general_data($ticker, $dimension);
        $data['ticker'] = $this->ticker_info_map[$ticker];

        $data['vchart_data'] = $this->itoozaapi->getCharmFinanceVChart($ticker, $dimension, '1');

        //2020.08.26 수정 if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
        if( strstr(strtoupper($data['ticker']['tkr_category']), 'ADR') || strstr(strtoupper($data['ticker']['tkr_category']), 'CANADIAN') ) {
            if($dimension == 'MRT') {
                $data['vchart_data_mry'] = $this->itoozaapi->getCharmFinanceVChart($ticker, 'MRY', '1');
            }
        }
    }

    // 재무제표
    public function financials($ticker, $dimension='MRT') {
        $ticker = strtoupper($ticker);
        $dimension = strtoupper($dimension);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) {
            $dimension = 'MRT';
        }

        $option = array(
            'with_history' => true,
            'with_finance' => true,
        );
        $data = $this->_general_data($ticker, $dimension, $option);

		//Primary Domestic 처리
		if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
			// 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
			//if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
			if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
				$pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

				if(isset($pri_ticker) && is_array($pri_ticker)) {
					$data['sec_ticker'] = $ticker;
					$data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
					$data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
				}
			}
		}

        $data['current_tab'] = 'financials';
        $data['dimension'] = $dimension;
		//echo '<pre>'; print_r($data['last_'.strtolower($dimension).'_list']);
        //$data['history'] = $data['last_'.strtolower($dimension).'_list'];
        unset($data['last_mry_list']);
        unset($data['last_mrt_list']);
        unset($data['last_mrq_list']);

		//심사용
		//$data['part_all'] = get_cookie('part_all');
		$data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
			$data['open_ticker'] = TRUE;
		}
		//주가추세
		$data['winner'] = $this->_get_winner($ticker);
		//15min
		$data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);

        $data['table_title_map'] = array(
            'income' => '손익계산서',
            'finstate' => '재무상태표',
            'cashflow' => '현금흐름표',
        );
		//$is_adr = false;
		$is_second = false;
		//2020.08.26 수정 if(strtoupper($data['ticker']['tkr_category'])=='ADR' || strtoupper($data['ticker']['tkr_category']) =='ADR PRIMARY' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN' || strtoupper($data['ticker']['tkr_category'])=='CANADIAN PRIMARY') {
		/*
		(12/21 추가)
		* 재무상태표 2 적용 대상 (category = adr or canadian을 포함하는 것보다 상위 조건입니다.)
		: sector가 [ Financial Services ] or [ Real Estate ] or industry가 [Rental & Leasing Services] ([industrials]섹터의 하위 인더스트리임) or [Residential Construction] ([Consumer Cyclical]섹터의 하위 인더스트리) 일때 재무상태표2 사용
		단, 해당 섹터 내에 속한 종목이라도 [ assetsc ], [ assetsnc ], [ liabilitiesc ], [ liabilitiesnc ]가 모두 빈값( 또는 0 )이 아니면 [재무상태표1] 사용
		tkr_sector : Financial Services or Real Estate
		tkr_industry : Rental & Leasing Services or Residential Construction
		*/
		if(strstr(strtoupper($data['ticker']['tkr_sector']), 'FINANCIAL SERVICES') || strstr(strtoupper($data['ticker']['tkr_sector']), 'REAL ESTATE') || strstr(strtoupper($data['ticker']['tkr_industry']), 'RENTAL & LEASING SERVICES') || strstr(strtoupper($data['ticker']['tkr_industry']), 'RESIDENTIAL CONSTRUCTION')) {
			if($data['last_mrt']['sf1_assetsc'] > 0 &&  $data['last_mrt']['sf1_assetsnc'] > 0 && $data['last_mrt']['sf1_liabilitiesc'] > 0 && $data['last_mrt']['sf1_liabilitiesnc'] > 0) {
				//echo 'FIRST<br>'; 
			}
			else {
				//echo 'SECOND<br>'; 
				$is_second = true;
			}
		}

		if( strstr(strtoupper($data['ticker']['tkr_category']), 'ADR') || strstr(strtoupper($data['ticker']['tkr_category']), 'CANADIAN') ) {
			$sf1_opinc = 'sf1_opinc_ori';
			$sf1_ebitda = 'sf1_ebitda_ori';
			$sf1_netinc = 'sf1_netinc_ori';
				//echo 'ADR<br>'; 
		}
		else {
			$sf1_opinc = 'sf1_opinc';
			$sf1_ebitda = 'sf1_ebitda';
			$sf1_netinc = 'sf1_netinc';
		}

        // 손익계산서
        $field_title_map['income']['sf1_revenue'] = '매출액';
        $field_title_map['income']['sf1_cor'] = '매출원가';
        $field_title_map['income']['sf1_gp'] = '매출총이익';
        $field_title_map['income']['sf1_sgna'] = '판매관리비';
        $field_title_map['income']['sf1_rnd'] = '연구개발비';
        $field_title_map['income'][$sf1_opinc] = '영업이익';
        $field_title_map['income'][$sf1_ebitda] = 'EBITDA';
        $field_title_map['income']['sf1_taxexp'] = '법인세';
        $field_title_map['income']['sf1_netincdis'] = '중단손익';
        $field_title_map['income'][$sf1_netinc] = '순이익';

        // 재무상태표
        $field_title_map['finstate']['sf1_cashneq'] = '현금성자산';
		if($is_second === true) {
	        $field_title_map['finstate']['sf1_investments'] = '투자자산';
		}
		else {
	        $field_title_map['finstate']['sf1_investmentsc'] = '단기투자';
		}
        $field_title_map['finstate']['sf1_receivables'] = '매출채권등';
        $field_title_map['finstate']['sf1_inventory'] = '재고자산';

		if($is_second === false) {
	        $field_title_map['finstate']['sf1_investmentsnc'] = '장기투자';
		}
        $field_title_map['finstate']['sf1_ppnenet'] = '유형자산';
        $field_title_map['finstate']['sf1_intangibles'] = '무형자산';
        $field_title_map['finstate']['sf1_taxassets'] = '이연법인세';
        $field_title_map['finstate']['sf1_assetsetc'] = '기타';
        $field_title_map['finstate']['sf1_assets'] = '자산총계';
        $field_title_map['finstate']['sf1_payables'] = '매입채무등';
		if($is_second === true) {
			$field_title_map['finstate']['sf1_debt'] = '차입금';
		}
		else {
			$field_title_map['finstate']['sf1_debtc'] = '단기차입금';
			$field_title_map['finstate']['sf1_debtnc'] = '장기차입금';
		}
        $field_title_map['finstate']['sf1_deferredrev'] = '이연수익';
        $field_title_map['finstate']['sf1_taxliabilities'] = '이연법인세';

		if($is_second === true) {
			$field_title_map['finstate']['sf1_deposits'] = '예수부채';
		}

        $field_title_map['finstate']['sf1_liabilitiesetc'] = '기타';
		$field_title_map['finstate']['sf1_liabilities'] = '부채총계';
        $field_title_map['finstate']['sf1_retearn'] = '이익잉여금';
        $field_title_map['finstate']['sf1_accoci'] = '기타포괄익';
		$field_title_map['finstate']['sf1_equity'] = '자본총계';

        // 현금흐름표
        $field_title_map['cashflow']['sf1_ncfo'] = '영업활동';
        $field_title_map['cashflow']['sf1_ncfi'] = '투자활동';
        $field_title_map['cashflow']['sf1_ncff'] = '재무활동';
        $field_title_map['cashflow']['sf1_ncfx'] = '환율변동';
        $field_title_map['cashflow']['sf1_ncf'] = '현금의증감';
        $field_title_map['cashflow']['sf1_capex'] = '자본적지출';
        $field_title_map['cashflow']['sf1_fcf'] = '잉여현금';

        $data['table_field_title_map'] = $field_title_map;
 
       /*
        echo '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />';
        echo '<pre>';
        print_r($data);
        echo '</pre>';exit;
        */

		$data['ticker_currency'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][0];
		$data['ticker_unit'] = $this->ticker_currency[$data['api_ticker']['tkr_currency']][1];

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.'('.$data['ticker']['tkr_name_en'].') | 재무제표 - 초이스스탁US';
		
		$this->_view('/search/financials', $data);
    }

    // 투자지표
    public function invest($ticker, $dimension='MRT') {
        $ticker = strtoupper($ticker);
        $dimension = strtoupper($dimension);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }
        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) {
            $dimension = 'MRT';
        }

        $option = array(
            'with_history' => true,
            'with_finance' => true,
        );
        $data = $this->_general_data($ticker, $dimension, $option);

		//Primary Domestic 처리
		if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
			// 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
			//if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
			if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
				$pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

				if(isset($pri_ticker) && is_array($pri_ticker)) {
					$data['sec_ticker'] = $ticker;
					$data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
					$data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
				}
			}
		}

        $data['current_tab'] = 'invest';
        $data['dimension'] = $dimension;

        //$data['history'] = $data['last_'.strtolower($dimension).'_list'];
        unset($data['last_mry_list']);
        unset($data['last_mrt_list']);
        unset($data['last_mrq_list']);

		//심사용
		//$data['part_all'] = get_cookie('part_all');
		$data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
			$data['open_ticker'] = TRUE;
		}
		//주가추세
		$data['winner'] = $this->_get_winner($ticker);
		//15min
		$data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);

        $data['table_title_map'] = array(
            'invest' => '투자지표',
        );

        // 투자지표
        $field_title_map['invest']['sf1_epsdil'] = array('주당순이익<br>EPS(달러)','주당순이익(달러)');
        $field_title_map['invest']['sf1_bvps'] = array('주당순자산<br>BPS(달러)','주당순자산(달러)');
        $field_title_map['invest']['sf1_dps'] = array('주당배당금<br>DPS(달러)','주당배당금(달러)');
        $field_title_map['invest']['sf1_pe'] = array('주가수익배수<br>PER(배)','주가수익배수(배)');
        $field_title_map['invest']['sf1_pb'] = array('주가순자산배수<br>PBR(배)','주가순자산비율(배)');
        $field_title_map['invest']['sf1_ps'] = array('주가매출액배수<br>PSR(배)','주가매출액배수(배)');
        $field_title_map['invest']['sf1_roe'] = array('자기자본이익률<br>ROE(%)','자기자본이익률');
        $field_title_map['invest']['sf1_roa'] = array('총자산이익률<br>ROA(%)','총자산이익률');
        $field_title_map['invest']['sf1_roic'] = array('투하자본이익률<br>ROIC(%)','투하자본이익률');
        $field_title_map['invest']['sf1_de'] = array('부채비율(%)','');
        $field_title_map['invest']['sf1_currentratio'] = array('유동비율(%)','');
        $field_title_map['invest']['sf1_intexpcoverage'] = array('이자보상<br>배수(배)','');

        $data['table_field_title_map'] = $field_title_map;

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.'('.$data['ticker']['tkr_name_en'].') | 투자지표 - 초이스스탁US';
		
        $this->_view('/search/invest', $data);
    }

    // 배당 5*
    public function alloca($ticker) {
        $ticker = strtoupper($ticker);
        if( ! isset($this->ticker_info_map[$ticker])) {
            $this->common->locationhref('/');
            return;
        }

        $dimension='MRY';
        $option = array(
            'with_history' => true,
        );
        $data = $this->_general_data($ticker, $dimension, $option);

        //Primary Domestic 처리
        if( strtoupper($data['ticker']['tkr_exchange']) == 'NASDAQ' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSE' || strtoupper($data['ticker']['tkr_exchange']) == 'NYSEMKT' ) {
            // 2020.08.26 변경 if( strtoupper($data['ticker']['tkr_category']) == 'ADR PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'ADR SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'CANADIAN SECONDARY' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC PREFERRED' || strtoupper($data['ticker']['tkr_category']) == 'DOMESTIC SECONDARY' ) {
            //if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDARY') ) {
            if( strstr(strtoupper($data['ticker']['tkr_category']), 'PREFERRED') || strstr(strtoupper($data['ticker']['tkr_category']), 'SECONDAR') ) {
                $pri_ticker = $this->itoozaapi->getPrimaryTkr($ticker);

                if(isset($pri_ticker) && is_array($pri_ticker)) {
                    $data['sec_ticker'] = $ticker;
                    $data['pri_ticker'] = $pri_ticker[0]['tkr_ticker'];
                    $data['pri_ticker_name'] = $this->ticker_info_map[$pri_ticker[0]['tkr_ticker']]['tkr_name'];
                }
            }
        }

        $data['current_tab'] = 'alloca';

        //심사용
        //$data['part_all'] = get_cookie('part_all');

        $data['open_ticker'] = FALSE;
        if( in_array($ticker, $this->open_ticker)) {
            $data['open_ticker'] = TRUE;
        }
        //주가추세
        $data['winner'] = $this->_get_winner($ticker);
        //15min
        $data['is_open'] = $this->is_open;
        $data['ticker_header'] = $this->load->view('/'.EG.'/search/ticker_header', $data, true);

        // 배당 정보 구하기
        $mri_detail = $this->itoozaapi->getBizMRIDetail($ticker);
        $data['epsgr2'] = $mri_detail['dividend']['epsgr2']; // 순이익성장률
        $data['fcfgr'] = $mri_detail['dividend']['fcfgr']; // 잉여현금성장률
        // rank
        $mri_count = $this->mri_tb_model->getCount()->getData();
        $data['rank_all_count'] = $mri_count;

        $params = array();
        $params['>']['m_biz_dividend_score'] = ($data['mri_data']['m_biz_dividend_score'] == '') ? '0' : $data['mri_data']['m_biz_dividend_score'];
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['rank_high_count'] = $mri_high_count;
        $data['dividend_rank_rate'] = round(($mri_high_count+1) / $mri_count * 100, 2);

        // 배당매력 상위 퍼센트
        $params = array();
        //$params['>=']['m_biz_dividend_score'] = $data['mri_data']['m_biz_dividend_score'];
        $params['=']['m_biz_dividend_stars'] = 5;
        $mri_high_count = $this->mri_tb_model->getCount($params)->getData();
        $data['dividend_high_count'] = $mri_high_count;
        $data['dividend_high_rank_rate'] = number_format($mri_high_count / $mri_count * 100, 2);

        //문구 가져오기
        $params = array();
        $params['total'] = $mri_count;
        $params['high_rate'] = $data['dividend_high_rank_rate'];
        $params['high'] = $mri_high_count;
        $sp=0;
        $sp=floor($data['mri_data']['m_biz_dividend_stars']);
        if($sp<1) $sp = 1;

        $data['dividend'] = $this->get_spcomment('dividend_'.$sp, $params);

        // chart
        $data['chart_divyield'] = array();
        $data['chart_dps'] = array();
        $data['chart_payoutratio'] = array();
        if(isset($data['last_mry_list'])) {
            foreach($data['last_mry_list'] as $dtkey => $sf1_row) {
                $data['chart_divyield'][$dtkey] = str_replace(array(',','%'), '', $sf1_row['sf1_divyield']);
                $data['chart_dps'][$dtkey] = str_replace(array(',','%'), '', $sf1_row['sf1_dps']);
                $data['chart_payoutratio'][$dtkey] = str_replace(array(',','%'), '', $sf1_row['sf1_payoutratio']);
            }
            ksort($data['chart_divyield']);
            ksort($data['chart_dps']);
            ksort($data['chart_payoutratio']);
        
            $data['chart_divyield_key'] = array_keys($data['chart_divyield']);
            $data['chart_dps_key'] = array_keys($data['chart_dps']);
            $data['chart_payoutratio_key'] = array_keys($data['chart_payoutratio']);
        }

        //배당연수 구하기
        $tkr_dps = $this->itoozaapi->getDpsTkr($ticker);

        $d_year = array();
        $max = 0;
        $cnt=0;
        if(isset($tkr_dps)) {
            foreach(array_values($tkr_dps) as $k => $l) {
                $dps = $l['sf1_dps'];

                if($dps == 0) {
                    break;
                }

                if($k == 0) { 
                    $max = $dps;
                    continue;
                }
                else {
                    if($max <= $dps ) {
                        break;
                    }
                    else {
                        $max = $dps;
                        $cnt++;
                    }
                }
            }
        }
        $data['dy_count'] = $cnt;

        $data['meta_title'] = $data['ticker']['tkr_name'].' '.$ticker.' | 배당 - 초이스스탁US';
        $this->_view('/search/alloca', $data);
    }

    public function setTicker($ticker='', $count='') {
        
        //if($this->input->is_ajax_request() === FALSE || $ticker == '') {
            //$this->common->alert('잘못된 접근입니다.');
            //$this->common->locationhref('/');
            //exit;
        //}
        
        $result = array();
        $this->output->set_content_type('application/json');

        $ticker = urldecode($ticker);
        //if( $this->session->userdata('is_login') === true ) {
        if($this->session->userdata('is_paid') === true && $this->session->userdata('user_id') != '') {
            $user_id = $this->session->userdata('user_id');
            
			$this->member_check($user_id);

            $this->load->model(DBNAME.'/myitem_tb_model');

            if($this->myitem_tb_model->get(array('mi_user_id' => $user_id, 'mi_ticker' => $ticker))->isSuccess()) {
                $myitem_info = $this->myitem_tb_model->getData();

                if($myitem_info['mi_like'] == 'Y') {
                    $like = 'N';
                }
                else {
                    $like = 'Y';
                }

                $update_params = array(
                    'mi_mod_date' => date('Y-m-d H:i:s'),
                    'mi_like' => $like
                );
                
                $this->db->where('mi_user_id', $user_id);
                $this->db->where('mi_ticker', $ticker);
                
                if( $this->db->update('myitem_tb', $update_params) ) {

                    if($count == 'Y') {
                        $params = array();
                        //$params['slavedb'] = TRUE;
                        $params['=']['mi_ticker'] = $ticker;
                        $params['=']['mi_like'] = 'Y';
                        $total_count = $this->myitem_tb_model->getCount($params)->getData();
                        $result = array('success' => TRUE, 'res' => $like, 'count' => number_format($total_count));
                    }
                    else {
                        $result = array('success' => TRUE, 'res' => $like, 'count' => '');
                    }
                    exit(json_encode($result));
                }
                else {
                    $result = array('error' => '관심종목 설정에 실패했습니다.[1]', 'res' => '2');
                    exit(json_encode($result));            
                }
            }
            else {
                    
                $params = array();
                $params['=']['mi_user_id'] = $user_id;
                $params['=']['mi_like'] = 'Y';

                $extra = array(
                    'fields' => 'mi_order',
                    'order_by' => 'mi_order DESC',
                    'limit' => 1,
                    //'slavedb' => true
                );

                $max_info = array_pop($this->myitem_tb_model->getList($params, $extra)->getData());
                $mi_order = $max_info['mi_order'] + 1;

                $params = array(
                    'mi_user_id' => $user_id,
                    'mi_ticker' => $ticker,
                    'mi_reg_date' => date('Y-m-d H:i:s'),
                    'mi_mod_date' => date('Y-m-d H:i:s'),
                    'mi_order' => $mi_order,
                    'mi_like' => 'Y',
                );

                if($this->myitem_tb_model->doInsert($params)->isSuccess()) {

                    if($count == 'Y') {
                        $params = array();
                        //$params['slavedb'] = TRUE;
                        $params['=']['mi_ticker'] = $ticker;
                        $params['=']['mi_like'] = 'Y';
                        $total_count = $this->myitem_tb_model->getCount($params)->getData();
                        $result = array('success' => TRUE, 'res' => 'Y', 'count' => number_format($total_count));
                    }
                    else {
                        $result = array('success' => TRUE, 'res' => 'Y', 'count' => '');
                    }
                    exit(json_encode($result));
                }
                else {
                    $result = array('error' => '관심종목 설정에 실패했습니다.[2]', 'res' => '2');
                    exit(json_encode($result));            
                }
            }
        }
        else {
            $result = array('error' => '서비스 신청 후 이용하실 수 있습니다.', 'res' => '1');
            exit(json_encode($result));
        }
    }

    public function api($type='') {

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
        else if($type=='B') {
            //크롬익스텐션 용 api
            $ticker = $this->input->get('ticker');
            $ticker = strtoupper($ticker);

            if( ! isset($this->ticker_info_map[$ticker])) {
                $result = array();
                $result['retmsg'] = 'ticker is not exist';
                echo json_encode($result);
                exit;
            }

            $dimension='MRY';
            $option = array(
                'with_history' => false,
            );

            $data = $this->_general_data($ticker, $dimension, $option);

            //echo '<pre>'; print_r($data); exit;

            $result = array();
            $result['koname'] = $this->ticker_info_map[$ticker]['tkr_name']; // 1)티커한글
            $result['ticker'] = $ticker;    // 2)티커
            $result['close'] = $data['ticker']['tkr_close'];    // 3)종가
            $result['diff'] = $data['ticker']['tkr_diff_str'];    // 4)전일대비
            $result['rate'] = str_replace('%', '', $data['ticker']['tkr_rate_str']);    // 5)등락율
            $result['exchange'] = $data['ticker']['tkr_exchange'];    // 6)시장구분

            // 7) 배당주
            $result['dividend'] = '';
            $result['dilink'] = '';
            if($data['mri_data']['m_biz_dividend_score'] >= 16) {
                $result['dividend'] = '배당주';
                $result['dilink'] = 'https://www.choicestock.co.kr/stock/recipe/dividend';
            }

            // 8) 성장주
            $result['growth'] = '';
            $result['grlink'] = '';
            if($data['mri_data']['m_biz_growth_score'] >= 16) {
                $result['growth'] = '성장주';
                $result['grlink'] = 'https://www.choicestock.co.kr/stock/recipe/growth';
            }

            // 9) 가치주
            $result['moat'] = '';
            $result['molink'] = '';
            if($data['mri_data']['m_biz_moat_score'] >= 16) {
                $result['moat'] = '가치주';
                $result['molink'] = 'https://www.choicestock.co.kr/stock/recipe/moat';
            }

            if($this->is_open === true) {
                $result['date'] = date('y.m/d H:i', strtotime($data['ticker']['tkr_lastpricedate']));    // 10)기준일
            }
            else {
                $result['date'] = date('y.m/d', strtotime($data['ticker']['tkr_lastpricedate']));    // 10)기준일
            }


            $result['score'] =  $data['mri_data']['m_biz_total_score'];    // 11) 투자매력점수
            $expected_star = $this->cal_valuation($data['mri_data']['m_v_fairvalue3'], $data['ticker']['tkr_close']); 
            
            if($expected_star=='1') $value_score_txt = '저평가';
            else if($expected_star=='3') $value_score_txt = '적정가';
            else if($expected_star=='5') $value_score_txt = '고평가';
            else $value_score_txt = 'N/A';

            $result['expected'] = $value_score_txt; // 12)매력평가
            $result['atlink'] = 'https://www.choicestock.co.kr/search/invest_charm/'.$ticker; // 13) 종목진단링크

            $chart = array();
            $chart_value = array();
            $chart = $this->itoozaapi->getSEPListForChart(array($ticker));
            if(isset($chart[$ticker]) && is_array($chart[$ticker])) {
                $chart_value = array_slice($chart[$ticker], (-20*3), (20*3)); // 3개월 
            }

            $result['chart_value'] = implode(',', array_values($chart_value)); // 14)차트밸류
            $result['chart_key'] = array_keys($chart_value); // 15)차트키값

            $result['marketcap'] = number_format($data['daily_data']['dly_marketcap']);    // 16)시가총액
            $result['per'] = number_format($data['daily_data']['dly_pe'], 2);    // 17)PER
            $result['pbr'] = ($data['mrt_data']['sf1_equity'] > 0) ? number_format($data['daily_data']['dly_pb'], 2) : 'N/A';    // 18)PBR
            $result['roe'] = str_replace('%', '', $data['mrt_data']['sf1_roe']); // 19)ROE
            $result['divyield'] = str_replace('%', '', $data['mry_data']['sf1_divyield']); // 20)DY(배당)

            $result['summary'] = 'https://www.choicestock.co.kr/search/summary/'.$ticker; // 21)기업개요 링크
            $result['finance'] = 'https://www.choicestock.co.kr/search/financials/'.$ticker; // 22)재무정보 링크

            //탐구생활
            $ex_banner_file = 'ex_banner.json';
            $file_path = WEBDATA.'/'.$ex_banner_file;
            $result['extitle'] = '';
            $result['exlink'] = '';
            
            if( is_file($file_path) ) {
                $file_data = unserialize(file_get_contents($file_path));
                $rand = rand(1,2);
                $result['extitle'] = str_replace('<br>',' ',$file_data['bn'.$rand.'_txt']); // 23) 탐구생활 제목
                $result['exlink'] =  'https://www.choicestock.co.kr/stock/research_view/'.$file_data['bn'.$rand.'_id'];  // 23) 탐구생활 링크
            }

            //주가추세 
            $winner = $this->_get_winner($ticker);
            $result['win_short'] = $winner['winner']['win_short'];
            $result['win_medium'] = $winner['winner']['win_medium'];
            $result['win_long'] = $winner['winner']['win_long'];

            //배당매력 벌점
            $result['dividend_stars']  = $data['mri_data']['m_biz_dividend_stars'];

            //PSR(주가매출액배수)
            $result['psr']  = number_format($data['daily_data']['dly_ps'], 2);

            //관심종목개수
            $result['myitem']  = number_format($data['myitem']['total_count']);

            //echo '<pre>'; print_r($result);
            echo json_encode($result);
            exit;
        }
        else {
            $this->common->locationhref('/');
            exit;
        }
    }
}
