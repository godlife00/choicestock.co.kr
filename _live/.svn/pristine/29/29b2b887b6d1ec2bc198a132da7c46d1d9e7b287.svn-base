<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

include_once dirname(__FILE__).'/BaseBusiness.php';

class ItoozaApi extends BaseBusiness {
    private $ticker_data = array();
    private $cache_path;

    public function __construct() {
        parent::__construct();
        $this->cache_path = WEBDATA.'/itooza_cache';
        $this->cache_path_mry = WEBDATA.'/vchart_mry';
        $this->cache_path_mrt = WEBDATA.'/vchart_mrt';
        $this->cache_path_mrq = WEBDATA.'/vchart_mrq';
        $this->cache_path_base = WEBDATA.'/base_data';
    }

    private function _dataGetContents($method, $lifetime=43200) {

		$skip_array = array('getTickerInfoMap', 'getTickerKoreanMap', 'getTickerList', 'getSepData', 'getSepCount');

        if(strstr($method, 'getVChart') && strstr($method, 'MRY')) {
            $cache_file = $this->cache_path_mry.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getVChart') && strstr($method, 'MRT')) {
            $cache_file = $this->cache_path_mrt.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getVChart') && strstr($method, 'MRQ')) {
            $cache_file = $this->cache_path_mrq.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getBaseData')) {
            $cache_file = $this->cache_path_base.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else {
            $cache_file = $this->cache_path.'/'.str_replace(array('/',','),'__',$method).'.info';
        }

        //$cache_file = $this->cache_path.'/getSEPList____AAPL.info';

        $yoil = date("N");
        $hour =    date("H");

        if( $yoil > 1 && $yoil < 7 && $hour > 8 && $hour < 16 ) {
            if(strstr($method,'getSEPList')) {
                if( is_file($cache_file) && intval(date('Hi', filemtime($cache_file))) < 903 ) {
                    $lifetime = 1;
                }
            }
        }

        if(
            is_file($cache_file)
            && time() - filemtime($cache_file) < $lifetime
        ) {
            $content = file_get_contents($cache_file);
            if(strpos($content, 'a:') !== 0) {
                //echo 'Response Error !'."\n";
                //echo $content;
            } else {
                return unserialize(file_get_contents($cache_file));
            }
        }
		if(!in_array($method, $skip_array)) {
	        touch($cache_file);
		}
        $data = $this->common->restful_curl(API_URL.'/api/'.$method);
		if(!in_array($method, $skip_array)) {
			file_put_contents($cache_file, $data);
		}    
		$data = @unserialize($data);
        return $data;
    }

    private function _dataGetFileContents($method) {

        if(strstr($method, 'getVChart') && strstr($method, 'MRY')) {
            $cache_file = $this->cache_path_mry.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getVChart') && strstr($method, 'MRT')) {
            $cache_file = $this->cache_path_mrt.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getVChart') && strstr($method, 'MRQ')) {
            $cache_file = $this->cache_path_mrq.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        else if(strstr($method, 'getBaseData')) {
            $cache_file = $this->cache_path_base.'/'.str_replace(array('/',','),'__',$method).'.info';
			if(is_file($cache_file)) {
				//if( time() - filemtime($cache_file) > 3600*24*2 ) {
				//if( time() - filemtime($cache_file) > 3600*24*0.5 ) {
				if( time() - filemtime($cache_file) > 3600*6 ) {
					$new_cache_file = $cache_file;
					$cache_file = '';
				}
			}
        }
        else {
            $cache_file = $this->cache_path.'/'.str_replace(array('/',','),'__',$method).'.info';
        }
        if( is_file($cache_file) ) {
            $content = file_get_contents($cache_file);
            if(strpos($content, 'a:') !== 0) {
				@touch($cache_file);
				$data = $this->common->restful_curl(API_URL.'/api/'.$method);
				@file_put_contents($cache_file, $data);
				$data = @unserialize($data);
				return $data;
                //echo 'Response Error !'."\n";
                //echo $content;
            } else {
                return unserialize(file_get_contents($cache_file));
            }
        }
        else {
			if($cache_file=='') $cache_file = $new_cache_file;
			$data = array();
			if($cache_file != '' ) {
				@touch($cache_file);
				$data = $this->common->restful_curl(API_URL.'/api/'.$method);
				@file_put_contents($cache_file, $data);
				$data = @unserialize($data);
			}
			return $data;
        }
    }

    // 티커 코드별 상단 검색바 자동완성 검색용 텍스트 제공
    public function getSearchTickerList($lifetime=23400) {
        return $this->_dataGetContents('getSearchTickerList', $lifetime);
    }

    // 티커 코드별 한국어 설정 맵핑 정보 제공
    public function getTickerKoreanMap($lifetime=23400) {
        return $this->_dataGetContents('getTickerKoreanMap', $lifetime);
    }

    // 티커 코드별 종목정보 맵 제공
    public function getTickerInfoMap($lifetime=23400) {
        return $this->_dataGetContents('getTickerInfoMap', $lifetime);
    }

    // 티커 코드별 거래가 정보 맵 제공
    public function getTickerList($lifetime=23400) {
        return $this->_dataGetContents('getTickerList', $lifetime);
    }

    // 티커 코드별 MRI 점수 포함 종목 관련데이터 조회
    public function getMRIList($lifetime=23400) {
        return $this->_dataGetContents('getMRIList', $lifetime);
    }

    // 티커 코드별 회사정보 기입데이터 조회
    public function getCompanyList($lifetime=23400) {
        return $this->_dataGetContents('getCompanyList', $lifetime);
    }

    // 최종 SF1 데이터 제공
    public function getLastSF1List($dimension, $tickers=array(), $lifetime=23400) {
        $dimension = strtoupper($dimension);
        if( ! in_array($dimension, array('MRY','MRT','MRQ'))) {
            return array();
        }

        $ticker_filter = '';
        if(is_array($tickers) && sizeof($tickers) > 0) {
            $ticker_filter = '/'.implode(',',$tickers);
        }

        return $this->_dataGetContents('getLastSF1/'.$dimension.$ticker_filter, $lifetime);
    }

    // 최종 Daily 데이터 제공
    public function getLastDailyList($tickers=array(), $lifetime=23400) {
        $ticker_filter = '';
        if(is_array($tickers) && sizeof($tickers) > 0) {
            $ticker_filter = '/'.implode(',',$tickers);
        }

        return $this->_dataGetContents('getLastDaily/'.$ticker_filter, $lifetime);
    }

    // 최종 Daily 데이터 제공
    public function getSEPList($tickers=array(), $lifetime=23400) {
        if(sizeof($tickers) <= 0) {
            if( ! is_array($tickers) && strlen($tickers) > 0) {
                $tickers = array($tickers);
            } else {
                return array(); // 티커 조회 필수.
            }
        }
        if(sizeof($tickers) > 100) {
            return array(); // 티커 리밋 초과
        }

        $ticker_filter = '';
        if(is_array($tickers) && sizeof($tickers) > 0) {
            $ticker_filter = '/'.implode(',',$tickers);
        }

        return $this->_dataGetContents('getSEPList/'.$ticker_filter, $lifetime);
    }

    // 최종 Daily 데이터 제공 - 차트용으로 뒤집어 줌
    public function getSEPListForChart($tickers=array(), $lifetime=23400) {
        $data = $this->getSEPList($tickers, $lifetime);

        foreach($data as $ticker => &$seps) {
            $seps = array_reverse($seps);
            $closes = array();
            foreach($seps as $sep) {
                $closes[$sep['sep_date']] = $sep['sep_close'];
            }
            $seps = $closes;
        }

        return $data;
    }


    /*
       @ 특정 종목의 기본상세정보 리턴

       @ Method : getBaseData($ticker_code, $dimension='MRT', $cell_type='data', $pExtra=array()) {

       @ Params 
       $ticker_code : ticker code
       $dimension : MRY or MRT or MRQ
       $cell_type : data or ratio
     */
    public function getBaseData($ticker_code, $dimension='MRT', $cell_type='data', $lifetime=3600*24) {
        $dimension = strtoupper(trim($dimension));
        $cell_type = strtolower(trim($cell_type));
        return $this->_dataGetFileContents('getBaseData/'.$ticker_code.'/'.$dimension.'/'.$cell_type, $lifetime);
    }

    public function makeBaseData($ticker_code, $dimension='MRT', $cell_type='data', $lifetime=3600) {
        $dimension = strtoupper(trim($dimension));
        $cell_type = strtolower(trim($cell_type));
        return $this->_dataGetContents('getBaseData/'.$ticker_code.'/'.$dimension.'/'.$cell_type, '1');
    }

    // 경쟁사 정보 제공 API
    public function getCompetitor($ticker_code, $lifetime=3600*24) {
        return $this->_dataGetFileContents('getCompetitor/'.$ticker_code, $lifetime);
    }

    // 경쟁사 정보 제공 API
    public function makeCompetitor($ticker_code, $lifetime=23400) {
        return $this->_dataGetContents('getCompetitor/'.$ticker_code, '1');
    }

    // 전년동기 대비 실적
    public function getIncomeGrowthRate($tickers = array()) {
        if( ! is_array($tickers) && is_string($tickers) && strlen($tickers) > 0) {
            $tickers = array(strtoupper($tickers));
        }

        $result = array();
/*
        foreach($tickers as $ticker) {
            $res = $this->getBaseData($ticker, 'MRQ');

            if( ! (isset($res['last_mrq_list_nc']) && sizeof($res['last_mrq_list_nc']) > 0)) {
                $result[$ticker] = array();
                continue;
            }
            $avg_items = array();
            foreach($res['last_mrq_list_nc'] as $sf1_row) {
                $avg_items[] = str_replace(',','',$sf1_row['sf1_netinc']);
                if(sizeof($avg_items) >= 5) {
                    break;
                }
            }

            //$result['rate'][$ticker] = round($avg_items[0] / (array_sum($avg_items) / sizeof($avg_items)) * 100, 2);
            // ((2019년 4분기/2018년 4분기)-1)*100
            $result['rate'][$ticker] = round((($avg_items[0] / $avg_items[4]) - 1) * 100, 2);
            //$result['rate'][$ticker] = round($avg_items[0] / (array_sum($avg_items) / sizeof($avg_items)) * 100, 2);
            $result['incomes'][$ticker] = $avg_items;
        }
*/
        foreach($tickers as $ticker) {
            $res = $this->getBaseData($ticker, 'MRT');

            if( ! (isset($res['last_mrt_list']) && sizeof($res['last_mrt_list']) > 0)) {
                $result[$ticker] = array();
                continue;
            }
            $avg_items = array();
            $arr_lastupdated = array();
            foreach($res['last_mrq_list'] as $sf1_row) {
                $avg_items[] = str_replace(',','',$sf1_row['sf1_netinccmnusd']);
                $arr_lastupdated[] = $sf1_row['sf1_lastupdated'];
                if(sizeof($avg_items) >= 5) {
                    break;
                }
            }

/*
1) 최근 순이익 > 0 and 비교시점 순이익 < 0 : 흑자전환
2) 최근 순이익 < 0 and 비교시점 순이익 < 0 : 적자지속
3) 최근 순이익 < 0 and 비교시점 순이익 > 0 : 적자전환
* 참고로 전년대비 성장률이 현재처럼 나오는 경우는 최근 순이익 > 0 and 비교시점 순이익 > 0 인 경우입니다.    
$avg_items[0] // 최근 순이익
$avg_items[4] // 비교시점 순이익
$rate = sprintf('%.2f', ($curr['sf1_netinccmnusd'] / $before['sf1_netinccmnusd'] -1) * 100);
*/
            $rate = 0;
            if( $avg_items[0] > 0 && $avg_items[4] < 0 ) {
                $rate = 1;
                $str_netinc = '흑자전환';
            }
            else if( $avg_items[0] < 0 && $avg_items[4] < 0 ) {
                $str_netinc = '적자지속';
            }
            else if( $avg_items[0] < 0 && $avg_items[4] > 0 ) {
                $str_netinc = '적자전환';
            }
            else {
                $rate = @sprintf('%.2f', ($avg_items[0] / $avg_items[4] -1) * 100);
                if(!is_numeric($rate)) {
                    $str_netinc = 'N/A';
                }
                else {
                    $str_netinc = $rate.'%';
                }
            }

            $result['rate'][$ticker] = $str_netinc;
            $result['rate_pm'][$ticker] = $rate;
    
            $result['incomes'][$ticker] = $avg_items;
            $result['lastupdated'][$ticker] = $arr_lastupdated[0];
        }

        return $result;
    }

    // MRI Detail 조회
    public function getMRIDetail($ticker_code, $lifetime=23400) {
        return $this->_dataGetContents('getMRIDetail/'.$ticker_code, $lifetime);
    }


    // Biz MRI detail 조회
    public function getBizMRIDetail($ticker_code, $lifetime=3600*24) {
        return $this->_dataGetContents('getBizMRIDetail/'.$ticker_code, $lifetime);
    }

    // VChart 조회
    public function getVChart($ticker_code, $dimension, $vchart_type, $indicator, $lifetime=23400) {
        $dimension = strtoupper(trim($dimension));
        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) return;

        $ticker_code = strtoupper(trim($ticker_code));
        /*
               vchart_type  indicator
           $map['profit']['salesincome']       = array('title' => '매출액 & 이익');
           $map['profit']['margin']            = array('title' => '이익률');
           $map['profit']['cor']               = array('title' => '원가율');
           $map['profit']['rnd']               = array('title' => '연구개발비');

           $map['safety']['debtcr']            = array('title' => '부채비율 & 유동비율');
           $map['safety']['borrow']            = array('title' => '차입금 & 차입금비율');
           $map['safety']['opintexp']          = array('title' => '영업이익 & 이자비용');
           $map['safety']['intexpcoverage']    = array('title' => '이자보상배수');
           $map['safety']['debtcost']          = array('title' => '차입금 & 금융비용');

           $map['structure']['assetstructure'] = array('title' => '자산 구조');
           $map['structure']['profitaccum']    = array('title' => '이익 축적');
           $map['structure']['dividend']       = array('title' => '주당배당금 & 배당률');
           $map['structure']['payout']         = array('title' => '배당성향');

           $map['efficiency']['roepbr']        = array('title' => 'ROE & PBR');
           $map['efficiency']['dupont']        = array('title' => 'ROE 듀퐁분석');
           $map['efficiency']['roaroeroic']    = array('title' => 'ROA & ROE & ROIC');
           $map['efficiency']['turnoverdays']  = array('title' => '운전자본 회전일수');
           $map['efficiency']['ccc']           = array('title' => '현금 회전일수');

           $map['cashflow']['cashflow']        = array('title' => '현금흐름표');
           $map['cashflow']['freecashflow']    = array('title' => '잉여현금흐름');
           $map['cashflow']['fcfonrevenue']    = array('title' => '잉여현금흐름 비율');

           $map['valuation']['per']            = array('title' => '주가수익배수(PER)');
           $map['valuation']['priceeps']       = array('title' => '주가 & 주당순이익');
           $map['valuation']['pbr']            = array('title' => '주가순자산배수(PBR)');
           $map['valuation']['pricebps']       = array('title' => '주가 & 주당순자산');
           $map['valuation']['pcr']            = array('title' => '주가현금흐름배수(PCR)');
           $map['valuation']['pircecps']       = array('title' => '주가 & 주당현금흐름');
           $map['valuation']['psr']            = array('title' => '주가매출액배수(PSR)');
           $map['valuation']['pricesps']       = array('title' => '주가 & 주당매출액');
           $map['valuation']['evebitda']       = array('title' => 'EV/EBITDA');
              ^^^^^^^^^^^^^   ^^^^^^^^
               vchart_type   indicator
        getVChart/FINV/MRY/profit/salesincome
        getVChart/FINV/MRY/profit/margin
        getVChart/FINV/MRY/safety/debtcr
        getVChart/FINV/MRY/structure/dividend
        getVChart/FINV/MRY/efficiency/roepbr
        getVChart/FINV/MRY/efficiency/turnoverdays
        getVChart/FINV/MRY/cashflow/cashflow
        getVChart/FINV/MRY/valuation/per
        getVChart/FINV/MRY/valuation/priceeps
        getVChart/FINV/MRY/valuation/pbr
        getVChart/FINV/MRY/valuation/pricebps
        */

        return $this->_dataGetContents('getVChart/'.$ticker_code.'/'.$dimension.'/'.$vchart_type.'/'.$indicator, $lifetime);
    }

    // VChart 파일 생성
    public function getVChartFile($ticker_code, $dimension, $vchart_type, $indicator) {
        $dimension = strtoupper(trim($dimension));
        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) return;

        $ticker_code = strtoupper(trim($ticker_code));

        return $this->_dataGetFileContents('getVChart/'.$ticker_code.'/'.$dimension.'/'.$vchart_type.'/'.$indicator);
    }

    public function getCharmFinanceVChartFile($ticker_code, $dimension) {

        $dimension = strtoupper(trim($dimension));
        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) return;

        $indicator_charttype = array(
        'salesincome'   =>  'profit',
        'margin'        =>  'profit',

        'debtcr'        =>  'safety',

        'dividend'      =>   'structure',

        'roepbr'        =>  'efficiency',
        'turnoverdays'  =>  'efficiency',

        'cashflow'      =>    'cashflow',

        'per'           =>   'valuation',
        'priceeps'      =>   'valuation',
        'pbr'           =>   'valuation',
        'pricebps'      =>   'valuation',
        );

        $dimension_indi_map = array();
        $dimension_indi_map['MRT']['debtcr'] = 'MRQ';
        $dimension_indi_map['MRT']['pbr'] = 'MRQ';
        $dimension_indi_map['MRT']['pricebps'] = 'MRQ';

        $dimension_indi_map['MRQ']['roepbr'] = 'MRT';
        $dimension_indi_map['MRQ']['turnoverdays'] = 'MRT';
        $dimension_indi_map['MRQ']['per'] = 'MRT';
        $dimension_indi_map['MRQ']['priceeps'] = 'MRT';

        $result = array();
        foreach($indicator_charttype as $indicator => $chart_type ) {
            $dim = isset($dimension_indi_map[$dimension][$indicator]) ? $dimension_indi_map[$dimension][$indicator] : $dimension;
            $result[$indicator] = $this->getVChartFile($ticker_code, $dim, $chart_type, $indicator, $lifetime);
            if(sizeof($result) == 1 && $result[$indicator] == false) {
                return;
            }
            foreach($result[$indicator]['data'] as $axis => &$date_num_list) {
                foreach($date_num_list as $date => &$num) {
                    $num = round(floatval($num), 4);
                }
            }

        }
        return $result;
    }

    public function getCharmFinanceVChart($ticker_code, $dimension, $lifetime=3600*24) {

        $dimension = strtoupper(trim($dimension));
        if( ! in_array($dimension, array('MRY', 'MRT', 'MRQ'))) return;

        $indicator_charttype = array(
        'salesincome'   =>  'profit',
        'margin'        =>  'profit',

        'debtcr'        =>  'safety',

        'dividend'      =>   'structure',

        'roepbr'        =>  'efficiency',
        'turnoverdays'  =>  'efficiency',

        'cashflow'      =>    'cashflow',

        'per'           =>   'valuation',
        'priceeps'      =>   'valuation',
        'pbr'           =>   'valuation',
        'pricebps'      =>   'valuation',
        );

        /*
        dimension 변경조건

        * debtcr은 MRT > MRQ로 처리         
        * pbr은 MRT > MRQ로 처리            
        * pricebps은 MRT > MRQ로 처리           
                    
        * roepbr은 MRQ > MRT로 처리         
        * turnoverdays은 MRQ > MRT로 처리           
        * per은 MRQ > MRT로 처리            
        * priceeps은 MRQ > MRT로 처리           
        */
        $dimension_indi_map = array();
        $dimension_indi_map['MRT']['debtcr'] = 'MRQ';
        $dimension_indi_map['MRT']['pbr'] = 'MRQ';
        $dimension_indi_map['MRT']['pricebps'] = 'MRQ';

        $dimension_indi_map['MRQ']['roepbr'] = 'MRT';
        $dimension_indi_map['MRQ']['turnoverdays'] = 'MRT';
        $dimension_indi_map['MRQ']['per'] = 'MRT';
        $dimension_indi_map['MRQ']['priceeps'] = 'MRT';

        $result = array();
        foreach($indicator_charttype as $indicator => $chart_type ) {
            $dim = isset($dimension_indi_map[$dimension][$indicator]) ? $dimension_indi_map[$dimension][$indicator] : $dimension;
            $result[$indicator] = $this->getVChart($ticker_code, $dim, $chart_type, $indicator, $lifetime);
            if(sizeof($result) == 1 && $result[$indicator] == false) {
                return;
            }
            foreach($result[$indicator]['data'] as $axis => &$date_num_list) {
                foreach($date_num_list as $date => &$num) {
                    $num = round(floatval($num), 4);
                }
            }

        }
        return $result;
    }

    // 경쟁사 정보 제공 API
    public function getPrimaryTkr($ticker_code, $lifetime=43200) {
        return $this->_dataGetContents('getPrimaryTkr/'.$ticker_code, $lifetime);
    }

    // 배당데이터 query
    public function getDpsTkr($ticker_code, $lifetime=43200) {
        return $this->_dataGetContents('getDpsTkr/'.$ticker_code, $lifetime);
    }

    public function getSepLastDate($lifetime=1) {
        return $this->_dataGetContents('getSepLastDate', $lifetime);
    }
	
    // 배당데이터 query
    public function getInvestTkr($ticker_code, $dimenstion, $lifetime=3600*12) {
        return $this->_dataGetContents('getInvest/'.$ticker_code.'/'.$dimenstion, $lifetime);
    }

    // sep_tb 데이터 query(20.06/17)
    public function getSepData($ticker_code) {
        return $this->_dataGetContents('getSepData/'.$ticker_code);
    }

    // sep_tb 데이터 query(20.06/17)
    public function getSepCount($view_date) {
        return $this->_dataGetContents('getSepCount/'.$view_date);
    }
}
