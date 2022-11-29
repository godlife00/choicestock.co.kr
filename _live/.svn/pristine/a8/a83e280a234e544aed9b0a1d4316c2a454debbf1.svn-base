<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Member_tb_model extends MY_Model {

	protected $pk = 'm_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'm_id' 		=> 'm_id value is empty.',
		//'m_pw' 		=> 'm_pw value is empty.',
		'm_name' 		=> 'm_name value is empty.',
		//'m_email' 		=> 'm_email value is empty.',
		//'m_gender' 		=> 'm_gender value is empty.',
		'm_path' 		=> 'm_path value is empty.',
		'm_reg_date' 		=> 'm_reg_date value is empty.',
		'm_mod_date' 		=> 'm_mod_date value is empty.'
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
        $ip = '';
        $params['m_reg_date'] = date("Y-m-d H:i:s");
        $params['m_mod_date'] = date("Y-m-d H:i:s");

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
