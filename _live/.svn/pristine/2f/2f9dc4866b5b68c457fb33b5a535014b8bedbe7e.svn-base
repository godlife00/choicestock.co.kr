<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Sp500_tb_model extends MY_Model {

	protected $pk = 'sp5_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'sp5_date' 		=> 'sp5_date value is empty.',
		'sp5_action' 		=> 'sp5_action value is empty.',
		'sp5_ticker' 		=> 'sp5_ticker value is empty.',
		'sp5_name' 		=> 'sp5_name value is empty.',
		'sp5_contraticker' 		=> 'sp5_contraticker value is empty.',
		'sp5_contraname' 		=> 'sp5_contraname value is empty.',
		'sp5_note' 		=> 'sp5_note value is empty.',
		'sp5_created_at' 		=> 'sp5_created_at value is empty.',
		'sp5_updated_at' 		=> 'sp5_updated_at value is empty.'
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
		$params['sp5_created_at'] = date('Y-m-d H:i:s');
		$params['sp5_updated_at'] = date('Y-m-d H:i:s');

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
