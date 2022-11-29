<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Admin_tb_model extends MY_Model {

	protected $pk = 'a_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

			'a_name' 		=> 'a_name value is empty.',
			'a_loginid' 		=> 'a_loginid value is empty.',
			'a_passwd' 		=> 'a_passwd value is empty.',
			'a_lastlogin_at' 		=> 'a_lastlogin_at value is empty.',
			'a_level' 		=> 'a_level value is empty.',
			'a_created_at' 		=> 'a_created_at value is empty.',
			'a_updated_at' 		=> 'a_updated_at value is empty.',
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

	public static $admin_level  = array(
			'1'	=> '1LEVEL',
			'2'	=> '2LEVEL',
			'3'	=> '3LEVEL',
			'4'	=> '4LEVEL',
			'5'	=> '5LEVEL',
			'6'	=> '6LEVEL',
			'7'	=> '7LEVEL',
			'8'	=> '8LEVEL',
			'9'	=> '9LEVEL',
			);
	public function getAdminLevelMap() {
		return self::$admin_level;
	}
	public function getAdminLevelName($level) {
		return self::$admin_level[$level];
	}
	public function getLimitAdminLevelMap() {
		$limit = 1;
		$sess = $this->session->userdata('admin');

		if(isset($sess['level']) && $sess['level'] > 1) {
			$limit = $sess['level'];
		}

		$res = array();
		foreach(self::$admin_level as $k => $v) {
			if($k <= $limit) {
				$res[$k] = $v;
				continue;
			}
			break;
		}
		return $res;
	}


	protected function __filter($params) {
		$params['a_created_at'] = date('Y-m-d H:i:s');
		if(false == isset($params['a_updated_at'])) {
			$params['a_updated_at'] = 0;
		}
		if(false == isset($params['a_lastlogin_at'])) {
			$params['a_lastlogin_at'] = 0;
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
