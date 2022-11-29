<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Npay_tb_model extends MY_Model {

	protected $pk = 'n_id';

	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(
		'n_code' => 'n_code value is empty.',
		'n_user_id' =>  'n_user_id value is empty.',
		'n_click_key' =>  'n_click_key value is empty.',
		'n_pay_code' => 'n_pay_code value is empty.',
		'n_pay_message' => 'n_pay_message value is empty.',
		'n_reg_date' => 'n_reg_date value is empty.',
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

	protected function __filter($params) {
        //$params['fp_date'] = date("Y-m-d H:i:s");
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
