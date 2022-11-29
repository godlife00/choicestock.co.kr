<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Freepay_tb_model extends MY_Model {

	protected $pk = 'fp_id';

	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(
		'fp_user_id' =>  'fp_user_id value is empty.',
		'fp_code' => 'fp_code value is empty.',
		'fp_start_date' =>  'fp_start_date value is empty.',
		'fp_end_date' => 'fp_end_date value is empty.',
		'fp_date' => 'fp_date value is empty.',
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
        $params['fp_date'] = date("Y-m-d H:i:s");
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
