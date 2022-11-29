<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class History_tb_model extends MY_Model {

	protected $pk = 'h_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'h_loginid' 		=> 'h_loginid value is empty.',
		'h_name' 		=> 'h_name value is empty.',
		'h_ip' 		=> 'h_ip value is empty.',
		'h_act_table' 		=> 'h_act_table value is empty.',
		'h_act_mode' 		=> 'h_act_mode value is empty.',
		'h_act_key' 		=> 'h_act_key value is empty.',
		'h_serialize' 		=> 'h_serialize value is empty.',
		'h_created_at' 		=> 'h_created_at value is empty.'
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
        if(isset($_SERVER['REMOTE_ADDR'])) $ip = $_SERVER['REMOTE_ADDR'];
        else $ip = '127.0.0.1';
        $params['h_ip'] = $ip;
        $params['h_created_at'] = date("Y-m-d H:i:s");

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
