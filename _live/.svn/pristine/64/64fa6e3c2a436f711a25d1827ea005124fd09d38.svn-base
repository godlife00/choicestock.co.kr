<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mri_tb_model extends MY_Model {

	protected $pk = 'm_ticker';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'm_growth_score' 		=> '수익 성장성 점수 value is empty.',
		'm_safety_score' 		=> '재무 안전성 점수 value is empty.',
		'm_cashflow_score' 		=> '현금 창출력 점수 value is empty.',
		'm_moat_score' 		=> '사업 독점력 점수 value is empty.',
		'm_valuation_score' 		=> '밸류에이션 점수 value is empty.',
		'm_total_score' 		=> '종합점수 value is empty.',
		'm_biz_growth_score' 		=> '수익 성장성 점수(기업) value is empty.',
		'm_biz_safety_score' 		=> '재무 안전성 점수(기업) value is empty.',
		'm_biz_cashflow_score' 		=> '현금 창출력 점수(기업) value is empty.',
		'm_biz_moat_score' 		=> '사업 독점력 점수(기업) value is empty.',
		'm_biz_total_score' 		=> '종합점수(기업) value is empty.'
		);

	// ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
	protected $enumcheck_keys = array(

		);

	function __construct() {
		$this->db_name = array_pop(explode('/', dirname(__FILE__)));
		parent::__construct();
		$this->table = strtolower(substr(__CLASS__,0,-6));
		$this->fields = $this->db->list_fields($this->table);
	}
/*
1) 강력매수 : 4.0 <= analystscore
2) 매수 : 3.0 <= analystscore < 4.0
3) 보유 : 2.0 <= analystscore < 3.0
4) 매도 : 1.0 <= analystscore < 2.0
5) 강력매도: 0 <= analystscore < 1.0
6) 없음 : analystscore = N/A
*/
    private $star_investopinion_map = array(
        0 => '강력매도',
        1 => '매도',
        2 => '보유',
        3 => '매수',
        4 => '강력매수',
        5 => 'N/A',
    );
    public function getStarInvestOpinionMap() {
        $map = $this->star_investopinion_map;
        $map['N/A'] = '없음';
        return $map;
    }

    public function getInvestOpinionByStar($star, $divide=5) {
        if($divide == 2) {
            return $star >= 3 ? 'buying' : 'sell';
        }

		if($star!="") {
			if($star >= 4){
				return $this->star_investopinion_map[4];
			}
			else if($star >= 3) {
				return $this->star_investopinion_map[3];
			}
			else if($star >= 2) {
				return $this->star_investopinion_map[2];
			}
			else if($star >= 1) {
				return $this->star_investopinion_map[1];
			}
			else if($star >= 0) {
				return $this->star_investopinion_map[0];
			}
			else {
				return $this->star_investopinion_map[5];
			}
		}
		else {
			return $this->star_investopinion_map[5];
		}
    }

    public function getRecomStockList($type, $limit=5, $addParams=array(), $addExtra=array()) {
        $type = strtolower($type);

        if( ! in_array($type, array(
            'total_score',  // 전종목 투자매력도
            'growth',       // 수익성장성
            'safety',       // 재무안정성
            'cashflow',     // 현금창출력
            'moat',         // 사업독점력
            'dividend'      // 배당매력
        ))) {
            return array();
        }

        $params = array();
        //$params['join']['ticker_tb'] = 'tkr_ticker = m_ticker and tkr_is_active = "YES"';
        $params['join']['ticker_tb'] = 'tkr_ticker = m_ticker';

		if($type == 'dividend') {
	        //$params['!=']['m_ticker'] = 'GSB';
			$params['not in']['m_ticker'] = array('GSB', 'FMC', 'TCO', 'CXW', 'AEG');
		}

        $extra = array();
        $extra['fields'] = 'mri_tb.*, tkr_close, tkr_rate, tkr_diff, tkr_diff_str, tkr_rate_str';
        $extra['limit'] = $limit;
        $extra['slavedb'] = true;

        switch($type) {
            case 'total_score' : // 전종목 투자매력도
                //$params['>=']['m_marketcap'] = 10000;
                //$params['>=']['m_biz_total_score'] = 80;
                $params['join']['sf1_tb'] = 'sf1_ticker = tkr_ticker and sf1_dimension = "MRY"';
                //$extra['fields'] .= ', sf1_epsdil';
                //$extra['order_by'] = 'm_biz_total_score desc, m_marketcap asc';
                //$extra['order_by'] = 'm_biz_total_score desc, sf1_epsdil desc';
                $extra['order_by'] = 'm_biz_total_score desc, m_g_roe desc';
                break;
            case 'growth' : // 수익(이익)성장성
                //$params['>=']['m_marketcap'] = 10000;
                //$params['>=']['m_biz_growth_stars'] = 5;
                $params['join']['sf1_tb'] = 'sf1_ticker = tkr_ticker and sf1_dimension = "MRT"';
                //$extra['fields'] .= ', sf1_epsdil';
                //$extra['order_by'] = 'sf1_epsdil desc, m_ticker asc';
                //$extra['order_by'] = 'm_biz_growth_score desc, sf1_epsdil desc';
                $extra['order_by'] = 'm_biz_growth_score desc, m_g_epsgr desc';
                break;
            case 'safety' : // 재무안정성
                //$params['>=']['m_biz_safety_stars'] = 5;
                //$extra['order_by'] = 'm_biz_safety_score desc, m_ticker asc';
                $extra['order_by'] = 'm_biz_safety_score desc, m_marketcap desc';
                break;
            case 'cashflow' : // 현금창출력
                //$params['>=']['m_biz_cashflow_stars'] = 5;
                //$extra['order_by'] = 'm_biz_cashflow_score desc, m_ticker asc';
                $extra['order_by'] = 'm_biz_cashflow_score desc, m_marketcap desc';
                break;
            case 'moat' : // 사업독점력
                //$params['>=']['m_marketcap'] = 10000;
                //$params['>=']['m_biz_moat_stars'] = 5;
                $params['join']['sf1_tb'] = 'sf1_ticker = tkr_ticker and sf1_dimension = "MRT"';
                $extra['fields'] .= ', sf1_opmargin';
                //$extra['order_by'] = 'sf1_opmargin desc, m_ticker asc';
                $extra['order_by'] = 'm_biz_moat_score desc, sf1_opmargin desc';
                break;
            case 'dividend' : // 배당매력
                //$params['>=']['m_biz_dividend_stars'] = 5;
                $params['join']['sf1_tb'] = 'sf1_ticker = tkr_ticker and sf1_dimension = "MRY"';
                $extra['fields'] .= ', sf1_divyield';
                //$extra['fields'] .= ', sf1_dps, sf1_divyield';
                //$extra['order_by'] = 'sf1_divyield desc, m_ticker asc';
                $extra['order_by'] = 'm_biz_dividend_score desc, sf1_divyield desc';
                break;
        }

        // where절 커스텀
        if(is_array($addParams) && sizeof($addParams) > 0) {
            foreach($addParams as $op => $field_value) {
                if(is_array($field_value) && sizeof($field_value) > 0) {
                    foreach($field_value as $f => $v) {
                        $params[$op][$f] = $v;
                    }
                }
            }
        }

		// extra 커스텀
        if(is_array($addExtra) && sizeof($addExtra) > 0) {
            foreach($addExtra as $k => $v) {
                $extra[$k] = $v;
            }
        }
//echo '<pre>';
//print_r($params);
//print_r($addExtra);

        return $this->getList($params, $extra)->getData();
    }

	protected function __filter($params) {

		return $params;
	}

	protected function __validate($params) {
		$success = parent::__validate($params);

		if($success == true) {
			// emptycheck_keys, enumcheck_keys 외 추가로 검사할 부분이 있으면
			// 여기에서 검사. 데이터에 문제 발견시

			// $this->setErrorResult("문제발견 내용");
			// return false;

			// 형태로 정의할것.

		}
		return $success;
	}
}

?>
