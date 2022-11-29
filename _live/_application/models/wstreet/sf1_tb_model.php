<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Sf1_tb_model extends MY_Model {

	protected $pk = 'sf1_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'sf1_ticker' 		=> 'sf1_ticker value is empty.',
		'sf1_dimension' 		=> 'sf1_dimension value is empty.',
		'sf1_calendardate' 		=> 'sf1_calendardate value is empty.',
		'sf1_datekey' 		=> 'sf1_datekey value is empty.',
		'sf1_reportperiod' 		=> 'sf1_reportperiod value is empty.',
		'sf1_lastupdated' 		=> 'sf1_lastupdated value is empty.',
		'sf1_accoci' 		=> 'sf1_accoci value is empty.',
		'sf1_assets' 		=> 'sf1_assets value is empty.',
		'sf1_assetsavg' 		=> 'sf1_assetsavg value is empty.',
		'sf1_assetsq' 		=> 'sf1_assetsq value is empty.',
		'sf1_assetsc' 		=> 'sf1_assetsc value is empty.',
		'sf1_assetscetc' 		=> 'sf1_assetscetc value is empty.',
		'sf1_assetsnc' 		=> 'sf1_assetsnc value is empty.',
		'sf1_assetsncetc' 		=> 'sf1_assetsncetc value is empty.',
		'sf1_assetturnover' 		=> 'sf1_assetturnover value is empty.',
		'sf1_bvps' 		=> 'sf1_bvps value is empty.',
		'sf1_capex' 		=> 'sf1_capex value is empty.',
		'sf1_cashneq' 		=> 'sf1_cashneq value is empty.',
		'sf1_cashnequsd' 		=> 'sf1_cashnequsd value is empty.',
		'sf1_cor' 		=> 'sf1_cor value is empty.',
		'sf1_consolinc' 		=> 'sf1_consolinc value is empty.',
		'sf1_currentratio' 		=> 'sf1_currentratio value is empty.',
		'sf1_de' 		=> 'sf1_de value is empty.',
		'sf1_debt' 		=> 'sf1_debt value is empty.',
		'sf1_debtc' 		=> 'sf1_debtc value is empty.',
		'sf1_liabilitiescetc' 		=> 'sf1_liabilitiescetc value is empty.',
		'sf1_debtnc' 		=> 'sf1_debtnc value is empty.',
		'sf1_debtusd' 		=> 'sf1_debtusd value is empty.',
		'sf1_deferredrev' 		=> 'sf1_deferredrev value is empty.',
		'sf1_depamor' 		=> 'sf1_depamor value is empty.',
		'sf1_deposits' 		=> 'sf1_deposits value is empty.',
		'sf1_divyield' 		=> 'sf1_divyield value is empty.',
		'sf1_dps' 		=> 'sf1_dps value is empty.',
		'sf1_ebit' 		=> 'sf1_ebit value is empty.',
		'sf1_ebitda' 		=> 'sf1_ebitda value is empty.',
		'sf1_ebitdamargin' 		=> 'sf1_ebitdamargin value is empty.',
		'sf1_ebitdausd' 		=> 'sf1_ebitdausd value is empty.',
		'sf1_ebitusd' 		=> 'sf1_ebitusd value is empty.',
		'sf1_ebt' 		=> 'sf1_ebt value is empty.',
		'sf1_eps' 		=> 'sf1_eps value is empty.',
		'sf1_epsdil' 		=> 'sf1_epsdil value is empty.',
		'sf1_epsusd' 		=> 'sf1_epsusd value is empty.',
		'sf1_equity' 		=> 'sf1_equity value is empty.',
		'sf1_equityavg' 		=> 'sf1_equityavg value is empty.',
		'sf1_equityusd' 		=> 'sf1_equityusd value is empty.',
		'sf1_ev' 		=> 'sf1_ev value is empty.',
		'sf1_evebit' 		=> 'sf1_evebit value is empty.',
		'sf1_evebitda' 		=> 'sf1_evebitda value is empty.',
		'sf1_fcf' 		=> 'sf1_fcf value is empty.',
		'sf1_fcfps' 		=> 'sf1_fcfps value is empty.',
		'sf1_fxusd' 		=> 'sf1_fxusd value is empty.',
		'sf1_gp' 		=> 'sf1_gp value is empty.',
		'sf1_grossmargin' 		=> 'sf1_grossmargin value is empty.',
		'sf1_intangibles' 		=> 'sf1_intangibles value is empty.',
		'sf1_intexp' 		=> 'sf1_intexp value is empty.',
		'sf1_invcap' 		=> 'sf1_invcap value is empty.',
		'sf1_invcapavg' 		=> 'sf1_invcapavg value is empty.',
		'sf1_inventory' 		=> 'sf1_inventory value is empty.',
		'sf1_investments' 		=> 'sf1_investments value is empty.',
		'sf1_investmentsc' 		=> 'sf1_investmentsc value is empty.',
		'sf1_investmentsnc' 		=> 'sf1_investmentsnc value is empty.',
		'sf1_liabilities' 		=> 'sf1_liabilities value is empty.',
		'sf1_liabilitiesc' 		=> 'sf1_liabilitiesc value is empty.',
		'sf1_liabilitiesnc' 		=> 'sf1_liabilitiesnc value is empty.',
		'sf1_liabilitiesncetc' 		=> 'sf1_liabilitiesncetc value is empty.',
		'sf1_marketcap' 		=> 'sf1_marketcap value is empty.',
		'sf1_ncf' 		=> 'sf1_ncf value is empty.',
		'sf1_ncfbus' 		=> 'sf1_ncfbus value is empty.',
		'sf1_ncfcommon' 		=> 'sf1_ncfcommon value is empty.',
		'sf1_ncfdebt' 		=> 'sf1_ncfdebt value is empty.',
		'sf1_ncfdiv' 		=> 'sf1_ncfdiv value is empty.',
		'sf1_ncff' 		=> 'sf1_ncff value is empty.',
		'sf1_ncfi' 		=> 'sf1_ncfi value is empty.',
		'sf1_ncfinv' 		=> 'sf1_ncfinv value is empty.',
		'sf1_ncfo' 		=> 'sf1_ncfo value is empty.',
		'sf1_ncfx' 		=> 'sf1_ncfx value is empty.',
		'sf1_netinc' 		=> 'sf1_netinc value is empty.',
		'sf1_netinccmn' 		=> 'sf1_netinccmn value is empty.',
		'sf1_netinccmnusd' 		=> 'sf1_netinccmnusd value is empty.',
		'sf1_netincdis' 		=> 'sf1_netincdis value is empty.',
		'sf1_netincnci' 		=> 'sf1_netincnci value is empty.',
		'sf1_netmargin' 		=> 'sf1_netmargin value is empty.',
		'sf1_opex' 		=> 'sf1_opex value is empty.',
		'sf1_opexetc' 		=> 'sf1_opexetc value is empty.',
		'sf1_opinc' 		=> 'sf1_opinc value is empty.',
		'sf1_payables' 		=> 'sf1_payables value is empty.',
		'sf1_payoutratio' 		=> 'sf1_payoutratio value is empty.',
		'sf1_pb' 		=> 'sf1_pb value is empty.',
		'sf1_pe' 		=> 'sf1_pe value is empty.',
		'sf1_pe1' 		=> 'sf1_pe1 value is empty.',
		'sf1_ppnenet' 		=> 'sf1_ppnenet value is empty.',
		'sf1_prefdivis' 		=> 'sf1_prefdivis value is empty.',
		'sf1_price' 		=> 'sf1_price value is empty.',
		'sf1_ps' 		=> 'sf1_ps value is empty.',
		'sf1_ps1' 		=> 'sf1_ps1 value is empty.',
		'sf1_receivables' 		=> 'sf1_receivables value is empty.',
		'sf1_retearn' 		=> 'sf1_retearn value is empty.',
		'sf1_revenue' 		=> 'sf1_revenue value is empty.',
		'sf1_revenueusd' 		=> 'sf1_revenueusd value is empty.',
		'sf1_rnd' 		=> 'sf1_rnd value is empty.',
		'sf1_roa' 		=> 'sf1_roa value is empty.',
		'sf1_roe' 		=> 'sf1_roe value is empty.',
		'sf1_roic' 		=> 'sf1_roic value is empty.',
		'sf1_ros' 		=> 'sf1_ros value is empty.',
		'sf1_sbcomp' 		=> 'sf1_sbcomp value is empty.',
		'sf1_sgna' 		=> 'sf1_sgna value is empty.',
		'sf1_sharefactor' 		=> 'sf1_sharefactor value is empty.',
		'sf1_sharesbas' 		=> 'sf1_sharesbas value is empty.',
		'sf1_shareswa' 		=> 'sf1_shareswa value is empty.',
		'sf1_shareswadil' 		=> 'sf1_shareswadil value is empty.',
		'sf1_sps' 		=> 'sf1_sps value is empty.',
		'sf1_tangibles' 		=> 'sf1_tangibles value is empty.',
		'sf1_taxassets' 		=> 'sf1_taxassets value is empty.',
		'sf1_taxexp' 		=> 'sf1_taxexp value is empty.',
		'sf1_nonopinc' 		=> 'sf1_nonopinc value is empty.',
		'sf1_taxliabilities' 		=> 'sf1_taxliabilities value is empty.',
		'sf1_tbvps' 		=> 'sf1_tbvps value is empty.',
		'sf1_workingcapital' 		=> 'sf1_workingcapital value is empty.',
		'sf1_created_at' 		=> 'sf1_created_at value is empty.',
		'sf1_updated_at' 		=> 'sf1_updated_at value is empty.'
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

	public function doUpdate($pk, $data_params, $skip_escape=array(), $exec_type='exec') {
        if( ! isset($data_params['sf1_updated_at'])) {
            $data_params['sf1_updated_at'] = date('Y-m-d H:i:s');
        }
        return parent::doUpdate($pk, $data_params, $skip_escape, $exec_type);
    }

	protected function __filter($params) {
        if( ! isset($data_params['sf1_created_at'])) {
            $params['sf1_created_at'] = date('Y-m-d H:i:s');
        }
        if( ! isset($data_params['sf1_updated_at'])) {
            $params['sf1_updated_at'] = date('Y-m-d H:i:s');
        }

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
