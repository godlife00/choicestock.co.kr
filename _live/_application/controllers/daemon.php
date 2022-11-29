<?php 
if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/*
crontab 등록할 메서드 :

# sf1, daily, ticker, mri 테이블 싱크 처리기  + 목표가 손절가 종료 관리
php index.php daemon data_sync

*/
class Daemon extends CI_Controller {
    public function __construct() {
        parent::__construct();

        ini_set('memory_limit', '2G');
        set_time_limit(3600);

        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/ticker_tb_model',
            DBNAME.'/mri_tb_model',
            DBNAME.'/sf1_tb_model',
            DBNAME.'/daily_tb_model',
            DBNAME.'/recommend_tb_model',
        ));
    }

    // ticker_tb, mri_tb sync 처리기. 크론 배치 등록 필요.
    public function data_sync() {
        // 검색어 텍스트 수집

        //주가 기준일 가져오기(sep_tb=>sep_date(2020-03-04)
        $arr_sepdata = array();
        $arr_sepdata = $this->itoozaapi->getSepLastDate(1);
        $arr_sepdata = array_values($arr_sepdata);
        $chk_sep_date = $arr_sepdata[0]['sep_date']; 
        $chk_sep_date = str_replace('-', '', $chk_sep_date);

        //ticker_tb tkr_lastpricedate(max) 가져오기
        $arr_tkrdata = array();
        $arr_tkrdata = $this->common->getDataByPK($this->ticker_tb_model->getList(array(), array('order_by' => 'tkr_lastpricedate desc', 'limit' => 1))->getData(), 'tkr_ticker');
        $arr_tkrdata = array_values($arr_tkrdata);
        $tkr_maxdate = $arr_tkrdata[0]['tkr_lastpricedate']; 
        $tkr_maxdate = str_replace('-', '', $tkr_maxdate);

        if( $chk_sep_date <= $tkr_maxdate ) {
            echo '이미 업데이트 됐습니다. ['.date("Y-m-d H:i:s")."]\n";
            //exit;
        }
        //ticker price info 초기화
        $this->tickerprice_init();

        $name_kr_map = $this->itoozaapi->getTickerKoreanMap(1);
        //echo '<pre>';
        //print_r($name_kr_map);
        //exit;

        $info_map = $this->itoozaapi->getTickerInfoMap(1);

        // Ticker table sync
        $updated_at = date('Y-m-d H:i:s'); // 이번 SyncTime에 들어온 전 종목은 같은 수정시간으로 담고, 이 시간 업데이트에 안들어온 종목은 is_active = NO 되도록 함.
        
        $company_map = $this->itoozaapi->getCompanyList(1);
        
        $price_map = $this->itoozaapi->getTickerList(1);

        //echo '<pre>';
        //print_r($price_map);
        //exit;
        foreach($info_map as $ticker => $info) {
            // info
            $info['tkr_updated_at'] = $updated_at;
            $info['tkr_name_en'] = $info['tkr_name'];
            $info['tkr_is_active'] = 'YES';

            // name_kr_map
            echo '['.$ticker.'] name_kr_map==>'.$name_kr_map[$ticker]."\n";
            echo '['.$ticker.'] price_map==>'.$price_map[$ticker]['close']."\n";
            $info['tkr_name'] = isset($name_kr_map[$ticker]) ? $name_kr_map[$ticker] : $info['tkr_name'];;
            // price_map
            if(isset($price_map[$ticker])) {
                $info['tkr_close'] = $price_map[$ticker]['close'] ? str_replace(',','',$price_map[$ticker]['close']) : 0;
                //if(isset($ticker_close_map[$ticker])) {
                //    $info['tkr_close'] = $ticker_close_map[$ticker];
                //}
                $info['tkr_diff_str'] = $price_map[$ticker]['diff'] ? $price_map[$ticker]['diff'] : '-';
                $info['tkr_rate_str'] = $price_map[$ticker]['diff_rate'] ? $price_map[$ticker]['diff_rate'] : '-';
                $info['tkr_diff'] = $price_map[$ticker]['diff_num'] ? str_replace(',','',$price_map[$ticker]['diff_num']) : '0';
                $info['tkr_rate'] = $price_map[$ticker]['diff_rate_num'] ? str_replace(',','',$price_map[$ticker]['diff_rate_num']) : '0';
            } else {
                /*
                // 주말이면 diff가 - 로 모두 변하는거. 그냥 최종 종가 유지되게 수정
                if(isset($ticker_close_map[$ticker])) {
                    $info['tkr_close'] = $ticker_close_map[$ticker];
                }
                $info['tkr_diff_str'] = '-';
                $info['tkr_rate_str'] = '-';
                $info['tkr_diff'] = '0';
                $info['tkr_rate'] ='0';
                */
            }

            // company
            if(isset($company_map[$ticker])) {
                $info['tkr_description'] = $company_map[$ticker]['cp_description'] ? $company_map[$ticker]['cp_description'] : $company_map[$ticker]['cp_short_description'];
            } else {
                $info['tkr_description'] = '';
            }

            //print_r($info);

            if($this->ticker_tb_model->get(array('tkr_ticker' => $ticker))->isSuccess()) {
                // update
                $selected_row = $this->ticker_tb_model->getData();
                if( ! $this->ticker_tb_model->doUpdate($selected_row['tkr_id'], $info)->isSuccess()) {
                    echo $this->ticker_tb_model->getErrorMsg();
                    //echo '...UPDATE FAIL'."\n";
                } else {
                    //echo '...UPDATE DONE'."\n";
                }
            } else {
                // insert
                if( ! $this->ticker_tb_model->doInsert($info)->isSuccess()) {
                    echo $this->ticker_tb_model->getErrorMsg();
                    //echo '...INSERT FAIL'."\n";
                } else {
                    //echo '...INSERT DONE'."\n";
                }
            }

            // 이번에 안들어 온 종목 is_active = NO 처리 하기
            $active_set = array(
                'tkr_is_active' => 'NO'
            );
            $active_where_params = array();
            $active_where_params['!=']['tkr_updated_at'] = $updated_at;
            if( ! $this->ticker_tb_model->doMultiUpdate($active_set, $active_where_params)->isSuccess()) {
                // FAIL..
            }
            
        }

        unset($price_map);
        unset($company_map);


        //$this->sync_sf1();

        $this->sync_daily();

        // 추천 종목 종료일자와 성공여부 채우기
        $this->fill_recommend_enddate();

        $this->delete_sync_query_cache();

        echo "\n".'['.date("Y-m-d H:i:s")."] data_sync success!!\n";
    }

    public function data_sync2() {

        //mri 테이블 sync
        $mri_map = $this->itoozaapi->getMRIList(1);

        $ticker_close_map = array();
        // mri data sync
        foreach($mri_map as $m) {
            if( ! $this->mri_tb_model->get($m['m_ticker'])->isSuccess()) {
                // insert
                $this->mri_tb_model->doInsert($m);
            } else {
                // update
                $this->mri_tb_model->doUpdate($m['m_ticker'], $m);
            }
            $ticker_close_map[$m['m_ticker']] = $m['m_close'];
        }
        unset($mri_map);

        $this->sync_sf1();

        $this->delete_sync2_query_cache();

        //$this->chart_cache();

        echo "\n".'['.date("Y-m-d H:i:s")."] data_sync2 success!!\n";
    }

    // sf1_tb Sync
    public function sync_sf1() {
        $updated_at = date('Y-m-d H:i:s');
        foreach(array('MRY','MRT','MRQ') as $dimension) {
            $sf1_list = $this->itoozaapi->getLastSF1List($dimension, array(), 1);
            foreach($sf1_list as $row) {
                $row['sf1_rndratio'] *= 100;
                $row['sf1_opmargin'] *= 100;
                if($this->sf1_tb_model->get(array('sf1_dimension' => $row['sf1_dimension'], 'sf1_ticker' => $row['sf1_ticker']))->isSuccess()) {
                    // update
                    $dbrow = $this->sf1_tb_model->getData();
                    $row['sf1_updated_at'] = $updated_at;
                    $this->sf1_tb_model->doUpdate($dbrow['sf1_id'], $row);
                } else {
                    // insert
                    $row['sf1_created_at'] = $updated_at;
                    $row['sf1_updated_at'] = $updated_at;
                    $this->sf1_tb_model->doInsert($row);
                }
            }
            unset($sf1_list);
        }
    }

    public function chart_cache() {

        echo "\n".'['.date("Y-m-d H:i:s")."] chart_cache start!!\n";
        $params = array();
        $params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';
        //$params['>=']['dly_marketcap'] = '10000';
        //$params['>=']['m_biz_total_score'] = 80;

        $extra = array();
        $extra = array(
            'fields' => array('m_ticker'),
            'limit' => 10000, 
        );
        $extra['slavedb'] = true;
        $valuation_list = array();
        $valuation_list = $this->mri_tb_model->getRecomStockList('total_score', $limit, $params, $extra);

        foreach($valuation_list as $val) {

            $strChartURL = 'https://hero.datahero.co.kr/search/finance_chart2/'. $val['m_ticker'].'?pn=kiwoom';
            $this->get_content($strChartURL);
            usleep(100000);
            $strChartURL = 'https://hero.datahero.co.kr/search/finance_chart2/'. $val['m_ticker'].'/MRT?pn=kiwoom';
            $this->get_content($strChartURL);
            usleep(100000);
            $strChartURL = 'https://hero.datahero.co.kr/search/finance_chart2/'. $val['m_ticker'].'/MRQ?pn=kiwoom';
            $this->get_content($strChartURL);
            usleep(100000);
            
            echo $val['m_ticker']."\n";
        }
        //print_r($fav_all);
        echo "\n".'['.date("Y-m-d H:i:s")."] tkr_cache end!!\n";
    }


    public function makeChartFile() {

        $params = array();
        $params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';

        $extra = array();
        $extra = array(
            'fields' => array('m_ticker'),
            'limit' => 10000, 
        );
        $extra['slavedb'] = true;
        $valuation_list = array();
        $valuation_list = $this->mri_tb_model->getRecomStockList('total_score', $limit, $params, $extra);

//        $data['ticker'] = $this->ticker_info_map[$ticker];
//print_r($data['ticker']);
//print_r($valuation_list);
//        exit;
        $dimension = 'MRY';
        $cnt=0;
        foreach($valuation_list as $val) {
            if($cnt>10) break;
            $vchart_data = array();
            $this->itoozaapi->getCharmFinanceVChart($val['m_ticker'], 'MRY', '1');
            //usleep(100000);
            $this->itoozaapi->getCharmFinanceVChart($val['m_ticker'], 'MRT', '1');
            //usleep(100000);
            $this->itoozaapi->getCharmFinanceVChart($val['m_ticker'], 'MRQ', '1');
            
            echo $val['m_ticker']."\n";
            $cnt++;
        }
    }

    public function makeBaseData() {
        echo "\n".'['.date("Y-m-d H:i:s")."] makeBaseData start!!\n";
/*
        $params = array();
        $params['=']['tkr_is_active'] = 'YES';
        $extra = array();
        $extra = array(
            'fields' => array('tkr_ticker'),
        );
        $extra['slavedb'] = true;
*/
        $params = array();
        $params['join']['daily_tb'] = 'dly_ticker = tkr_ticker';

        $extra = array();
        $extra = array(
            'fields' => array('m_ticker'),
            'limit' => 10000, 
        );
        $extra['slavedb'] = true;
        $valuation_list = array();
        $valuation_list = $this->mri_tb_model->getRecomStockList('total_score', $limit, $params, $extra);

        foreach($valuation_list as $val) {
			$strTkrURL = 'https://hero.datahero.co.kr/search/invest_charm2/'. $val['m_ticker'].'?pn=kiwoom';
            $this->get_content($strTkrURL);
            //usleep(100000);
            echo $val['m_ticker']."\n";
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] makeBaseData end!!\n";
    }

    public function call_homepage() {
        $strHomeURL = 'https://hero.datahero.co.kr?pn=kiwoom';
        $this->get_content($strHomeURL);
        echo "\n".'['.date("Y-m-d H:i:s")."] homepage call success!!\n";
    }

    public function tickerprice_init() {
        $strTkrPriceURL = 'http://us153.datahero.co.kr/stocks/makePriceMap';
        $result = $this->get_content($strTkrPriceURL);
        echo '<pre>';
        print_r($result);
    }

    // daily_tb Sync
    public function sync_daily() {
        // daily_tb sync
        $updated_at = date('Y-m-d H:i:s');
        $daily_list = $this->itoozaapi->getLastDailyList('', 1);
        
        print_r($daily_list);

        foreach($daily_list as $row) {
            if($this->daily_tb_model->get(array('dly_ticker' => $row['dly_ticker']))->isSuccess()) {
                // update
                $dbrow = $this->daily_tb_model->getData();
                $row['dly_updated_at'] = $updated_at;
                $this->daily_tb_model->doUpdate($dbrow['dly_id'], $row);
            } else {
                // insert
                $row['dly_created_at'] = $updated_at;
                $row['dly_updated_at'] = $updated_at;
                $this->daily_tb_model->doInsert($row);
            }
        }
        unset($daily_list);
    }

    // 추천 종목 종료일자와 성공여부 채우기
    public function fill_recommend_enddate() {
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['=']['rc_endtype'] = 'ING';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
        $params['raw'] = '(rc_goal_price <= tkr_close or rc_giveup_price >= tkr_close)';

        $extra = array();
        $extra['fields'] = array('rc_id', 'rc_ticker', 'rc_goal_price', 'rc_giveup_price', 'tkr_close', 'IF(rc_goal_price <= tkr_close, "SUCCESS","FAIL") as endtype');
        $extra['order_by'] = '';

        $data = $this->recommend_tb_model->getList($params, $extra)->getData();
        //echo $this->recommend_tb_model->getLastQuery()."\n";

        $enddate = date('Y-m-d');
        $result_log = array();
        foreach($data as $row) {
            $update_params = array();
            $update_params['rc_endtype'] = $row['endtype'];
            $update_params['rc_enddate'] = $enddate;

            $result_log[$row['rc_ticker']] = array(
                'recommend' => $row,
                'update_params' => $update_params,
                'is_success' => 'YES'
            );


            if( ! $this->recommend_tb_model->doUpdate($row['rc_id'], $update_params)->isSuccess()) {
                // 업데이트 실패 로그
                $result_log[$row['rc_ticker']]['is_success'] = 'NO!!!';
            }
        }
        $this->common->logWrite('recommend_enddate', print_r($result_log, true));
    }

    public function delete_sync_query_cache(){
        $this->ticker_tb_model->deleteAllCache();
        $this->daily_tb_model->deleteAllCache();
        $this->recommend_tb_model->deleteAllCache();
    }

    public function delete_sync2_query_cache(){
        $this->sf1_tb_model->deleteAllCache();
        $this->mri_tb_model->deleteAllCache();
    }

    public function get_content($url) {
        $agent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.0)';
        $curlsession = curl_init();
        curl_setopt ($curlsession, CURLOPT_URL, $url);
        curl_setopt ($curlsession, CURLOPT_HEADER, 0);
        curl_setopt ($curlsession, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt ($curlsession, CURLOPT_POST, 0);
        curl_setopt ($curlsession, CURLOPT_USERAGENT, $agent);
        curl_setopt ($curlsession, CURLOPT_REFERER, "");
        curl_setopt ($curlsession, CURLOPT_TIMEOUT, 3);
        $buffer = curl_exec ($curlsession);
        $cinfo = curl_getinfo($curlsession);
        curl_close($curlsession);
        if ($cinfo['http_code'] != 200)
        {
            return "";
        }
        return $buffer;
    }
}

