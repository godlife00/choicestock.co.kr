<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Mriall_tb_model extends MY_Model {

	protected $pk = 'm_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(
			'm_usname' => 'm_usname value is empty.',
			'm_korname' => 'm_korname value is empty.',
			'm_exchange' => 'm_exchange value is empty.',
			'm_sector' => 'm_sector value is empty.',
			'm_industry' => 'm_industry value is empty.',
			'm_growth_score' => 'm_growth_score value is empty.',
			'm_growth_stars' => 'm_growth_stars value is empty.',
			'm_safety_score' => 'm_safety_score value is empty.',
			'm_safety_stars' => 'm_safety_stars value is empty.',
			'm_cashflow_score' => 'm_cashflow_score value is empty.',
			'm_cashflow_stars' => 'm_cashflow_stars value is empty.',
			'm_moat_score' => 'm_moat_score value is empty.',
			'm_moat_stars' => 'm_moat_stars value is empty.',
			'm_valuation_score' => 'm_valuation_score value is empty.',
			'm_valuation_stars' => 'm_valuation_stars value is empty.',
			'm_total_score' => 'm_total_score value is empty.',
			'm_biz_growth_score' => 'm_biz_growth_score value is empty.',
			'm_biz_growth_stars' => 'm_biz_growth_stars value is empty.',
			'm_biz_safety_score' => 'm_biz_safety_score value is empty.',
			'm_biz_safety_stars' => 'm_biz_safety_stars value is empty.',
			'm_biz_cashflow_score' => 'm_biz_cashflow_score value is empty.',
			'm_biz_cashflow_stars' => 'm_biz_cashflow_stars value is empty.',
			'm_biz_moat_score' => 'm_biz_moat_score value is empty.',
			'm_biz_moat_stars' => 'm_biz_moat_stars value is empty.',
			'm_biz_dividend_score' => 'm_biz_dividend_score value is empty.',
			'm_biz_dividend_stars' => 'm_biz_dividend_stars value is empty.',
			'm_biz_total_score' => 'm_biz_total_score value is empty.',
			'm_sep_date' => 'm_sep_date value is empty.',
			'm_close' => 'm_close value is empty.',
			'm_marketcap' => 'm_marketcap value is empty.',
			'm_netmargin' => 'm_netmargin value is empty.',
			'm_pbr' => 'm_pbr value is empty.',
			'm_per' => 'm_per value is empty.',
			'm_psr' => 'm_psr value is empty.',
			'm_roe' => 'm_roe value is empty.',
			'm_divyield' => 'm_divyield value is empty.',
			'm_eps1' => 'm_eps1 value is empty.',
			'm_eps2' => 'm_eps2 value is empty.',
			'm_eps3' => 'm_eps3 value is empty.',
			'm_eps4' => 'm_eps4 value is empty.',
			'm_eps1_date' => 'm_eps1_date value is empty.',
			'm_eps2_date' => 'm_eps2_date value is empty.',
			'm_eps3_date' => 'm_eps3_date value is empty.',
			'm_eps4_date' => 'm_eps4_date value is empty.',
			'm_v_formula' => 'm_v_formula value is empty.',
			'm_v_multiple' => 'm_v_multiple value is empty.',
			'm_v_fairvalue5' => 'm_v_fairvalue5 value is empty.',
			'm_v_fairvalue4' => 'm_v_fairvalue4 value is empty.',
			'm_v_fairvalue3' => 'm_v_fairvalue3 value is empty.',
			'm_v_fairvalue2' => 'm_v_fairvalue2 value is empty.',
			'm_v_fairvalue1' => 'm_v_fairvalue1 value is empty.',
			'm_g_roe' => 'm_g_roe value is empty.',
			'm_g_epsgr' => 'm_g_epsgr value is empty.',
			'm_s_bis' => 'm_s_bis value is empty.',
			'm_s_crratio' => 'm_s_crratio value is empty.',
			'm_s_debtratio' => 'm_s_debtratio value is empty.',
			'm_s_intcoverage' => 'm_s_intcoverage value is empty.',
			'm_s_boingratio' => 'm_s_boingratio value is empty.',
			'm_s_fincost' => 'm_s_fincost value is empty.',
			'm_c_pcr' => 'm_c_pcr value is empty.',
			'm_c_cashflow' => 'm_c_cashflow value is empty.',
			'm_c_ffrevenue' => 'm_c_ffrevenue value is empty.',
			'm_m_assetsgr' => 'm_m_assetsgr value is empty.',
			'm_m_roe' => 'm_m_roe value is empty.',
			'm_m_opmargin' => 'm_m_opmargin value is empty.',
			'm_m_revenuegr' => 'm_m_revenuegr value is empty.',
			'm_d_epsgr2' => 'm_d_epsgr2 value is empty.',
			'm_d_fcfgr' => 'm_d_fcfgr value is empty.',
			'm_d_divyield' => 'm_d_divyield value is empty.',
			'm_d_poratio' => 'm_d_poratio value is empty.',
			'm_d_dps_year1' => 'm_d_dps_year1 value is empty.',
			'm_d_dps_year2' => 'm_d_dps_year2 value is empty.',
			'm_d_dps_year3' => 'm_d_dps_year3 value is empty.',
			'm_d_dps_year4' => 'm_d_dps_year4 value is empty.',
			'm_d_dps_year5' => 'm_d_dps_year5 value is empty.',
			'm_d_dps1' => 'm_d_dps1 value is empty.',
			'm_d_dps2' => 'm_d_dps2 value is empty.',
			'm_d_dps3' => 'm_d_dps3 value is empty.',
			'm_d_dps4' => 'm_d_dps4 value is empty.',
			'm_d_dps5' => 'm_d_dps5 value is empty.'
		);

	// ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
	protected $enumcheck_keys = array(

		);

	function __construct() {
		parent::__construct();
		//$this->db_name = array_pop(explode('/', dirname(__FILE__)));
		//$this->table = strtolower(substr(__CLASS__,0,-6));
		//$this->fields = $this->db->list_fields($this->table);
        $this->db = $this->load->database('quandldb', true);
		//$this->db_name = 'quandl';
		$this->table = strtolower(substr(__CLASS__,0,-6));
		$this->fields = $this->db->list_fields($this->table);
	}

	protected function __filter($params) {
		$params['m_date'] = date('Ymd');
		//$params['sp5_updated_at'] = date('Y-m-d H:i:s');

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
