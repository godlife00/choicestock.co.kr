<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Daily_tb_model extends MY_Model {

	protected $pk = 'dly_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'dly_ticker' 		=> 'dly_ticker value is empty.',
		'dly_date' 		=> 'dly_date value is empty.',
		'dly_lastupdated' 		=> 'dly_lastupdated value is empty.',
		'dly_ev' 		=> 'dly_ev value is empty.',
		'dly_evebit' 		=> 'dly_evebit value is empty.',
		'dly_evebitda' 		=> 'dly_evebitda value is empty.',
		'dly_marketcap' 		=> 'dly_marketcap value is empty.',
		'dly_pb' 		=> 'dly_pb value is empty.',
		'dly_pe' 		=> 'dly_pe value is empty.',
		'dly_ps' 		=> 'dly_ps value is empty.',
		'dly_created_at' 		=> 'dly_created_at value is empty.',
		'dly_updated_at' 		=> 'dly_updated_at value is empty.'
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
        if( ! isset($data_params['dly_created_at'])) {
            $params['dly_created_at'] = date('Y-m-d H:i:s');
        }
        if( ! isset($data_params['dly_updated_at'])) {
            $params['dly_updated_at'] = date('Y-m-d H:i:s');
        }
		return $params;
	}

	public function doUpdate($pk, $data_params, $skip_escape=array(), $exec_type='exec') {
        if( ! isset($data_params['dly_updated_at'])) {
            $data_params['dly_updated_at'] = date('Y-m-d H:i:s');
        }
        return parent::doUpdate($pk, $data_params, $skip_escape, $exec_type);
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
