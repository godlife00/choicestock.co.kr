<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Master_tb_model extends MY_Model {

	protected $pk = 'ms_id';


	// NOT NULL 필드들에대한 정의. 각 모델에서 재정의
	protected $emptycheck_keys = array(

		'ms_guru' 		=> 'ms_guru value is empty.',
		'ms_stocks' 		=> 'ms_stocks value is empty.',
		'ms_newstocks' 		=> 'ms_newstocks value is empty.',
		'ms_10yavgreturn' 		=> 'ms_10yavgreturn value is empty.',
		'ms_portfolioname' 		=> 'ms_portfolioname value is empty.',
		'ms_portfoliodate' 		=> 'ms_portfoliodate value is empty.',
		'ms_created_at' 		=> 'ms_created_at value is empty.',
		'ms_updated_at' 		=> 'ms_updated_at value is empty.'
		);

	// ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
	protected $enumcheck_keys = array(

		);

    public function getActionName($action) {
        $action_name_map = array(
            '' => '',
            'New Buy' => '신규 매수',
            'Add' => '추가 매수',
            'Reduce' => '비중 축소',
            'Maintain' => '비중 유지',
            'Sold Out' => '전량 매도',
        );
        return $action_name_map[$action];
    }

	function __construct() {
		$this->db_name = array_pop(explode('/', dirname(__FILE__)));
		parent::__construct();
		$this->table = strtolower(substr(__CLASS__,0,-6));
		$this->fields = $this->db->list_fields($this->table);
	}

	public function doDelete($pk, $exec_type='exec') {
        parent::doDelete($pk, $exec_type);
        if( ! $this->isSuccess()) {
            return $this;
        }

        // 파일 삭제
        $filepath = MASTER_DATA.'/master_'.$pk.'.info';
        if(file_exists($filepath)) {
            @unlink($filepath);
        }

        $result = $this->getData();

        $this->load->model(DBNAME.'/notify_tb_model');

        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'master_tb'
        );
        $this->notify_tb_model->doSyncNotify('DELETE', $options);
 
        $this->setSuccessResult($result);
        return $this;
    }



	protected function __filter($params) {
        $params['ms_created_at'] = date('Y-m-d H:i:s');
        $params['ms_updated_at'] = date('Y-m-d H:i:s');
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
