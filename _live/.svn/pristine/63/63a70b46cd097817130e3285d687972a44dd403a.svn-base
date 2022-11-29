<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Ticker_tb_model extends MY_Model {

	protected $pk = 'tkr_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'tkr_ticker' 		=> 'tkr_ticker value is empty.',
		'tkr_permaticker' 		=> 'tkr_permaticker value is empty.',
		'tkr_name' 		=> 'tkr_name value is empty.',
		'tkr_name_en' 		=> 'tkr_name_en value is empty.',
		'tkr_lastpricedate' 		=> 'tkr_lastpricedate value is empty.',
		'tkr_sector' 		=> 'tkr_sector value is empty.',
		'tkr_industry' 		=> 'tkr_industry value is empty.',
		'tkr_exchange' 		=> 'tkr_exchange value is empty.',
		'tkr_category' 		=> 'tkr_category value is empty.',
		'tkr_currency' 		=> 'tkr_currency value is empty.',
		'tkr_close' 		=> 'tkr_close value is empty.',
		'tkr_diff_str' 		=> 'tkr_diff_str value is empty.',
		'tkr_rate_str' 		=> 'tkr_rate_str value is empty.',
		'tkr_diff' 		=> 'tkr_diff value is empty.',
		'tkr_rate' 		=> 'tkr_rate value is empty.',
		'tkr_description' 		=> 'tkr_description value is empty.',
		'tkr_companysite' 		=> 'tkr_companysite value is empty.',
		'tkr_created_at' 		=> 'tkr_created_at value is empty.',
		'tkr_updated_at' 		=> 'tkr_updated_at value is empty.'
		);

	// ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
	protected $enumcheck_keys = array(

		'tkr_is_active'		=> array(
							'enum'	=> array ('YES','NO'),
							'message'	=> 'tkr_is_active value is not valid.'
							)
		);

	function __construct() {
		$this->db_name = array_pop(explode('/', dirname(__FILE__)));
		parent::__construct();
		$this->table = strtolower(substr(__CLASS__,0,-6));
		$this->fields = $this->db->list_fields($this->table);
	}

    public function convertSyncInfo($row) {
        if( ! isset($row['tkr_ticker'])) {
            return $row;
        }
        $item = $this->common->get_sync_info($row['tkr_ticker'], $row['tkr_lastpricedate']);
        if( !sizeof($item)) return $row;

        $row['tkr_close'] = $item['last_price'];
        $row['tkr_rate'] = $item['diff_rate'];
		date_default_timezone_set("America/New_York");
        $row['tkr_lastpricedate'] = date('Y-m-d H:i:s', $item['updated_at']);

        $item_str = $this->common->get_sync_text($row['tkr_ticker'], $row['tkr_lastpricedate']);
        $row['tkr_rate_str'] = $item_str['diff_rate'];
        $row['tkr_diff_str'] = $item_str['diff_price'];

        return $row;
    }

	protected function __filter($params) {
        $params['tkr_created_at'] = date('Y-m-d H:i:s');
        if( ! isset($params['tkr_updated_at'])) {
            $params['tkr_updated_at'] = date('Y-m-d H:i:s');
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

