<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Explore_tb_model extends MY_Model {

    protected $pk = 'e_id';


    // NOT NULL 필드들에대한 정의. 각 모델에서 재정의
    protected $emptycheck_keys = array(
        'e_admin_id' 		=> '작성자 value is empty.',
        'e_title' 		=> '제목 value is empty.',
        'e_content' 		=> '내용 value is empty.',
        'e_display_date' 		=> '표출날짜 value is empty.',
        //'e_view_count' 		=> '조회수 value is empty.',
        'e_created_at' 		=> '등록일 value is empty.',
        'e_updated_at' 		=> '수정일 value is empty.'
        );

    // ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
    protected $enumcheck_keys = array(
        'e_is_active'		=> array(
                            'enum'	=> array ('YES','NO'),
                            'message'	=> 'e_is_active value is not valid.'
                            )
        );

    function __construct() {
        $this->db_name = array_pop(explode('/', dirname(__FILE__)));
        parent::__construct();
        $this->table = strtolower(substr(__CLASS__,0,-6));
        $this->fields = $this->db->list_fields($this->table);
    }

    public static $active_map = array(
        'YES' => 'YES',
        'NO' => 'NO',
    );
    public function getActiveMap() {
        return self::$active_map;
    }

    public function doInsert($params, $skip_escape=array(), $exec_type='exec') {
        parent::doInsert($params, $skip_escape, $exec_type);
        if( ! $this->isSuccess()) {
            return $this;
        }

        $this->load->model(DBNAME.'/notify_tb_model');

        // override 안했다면 일반적으로 컨트롤러에서 getData()시 받았을 AutoIncrement PK 값
        $pk = $this->getData();

        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'explore_tb'
        );
        $this->notify_tb_model->doSyncNotify('INSERT', $options);

        // getData() 하면 AutoIncrement 값 $pk 가 받아지도록 되돌려놓기.
        $this->setSuccessResult($pk);

        return $this;
    }

	public function doUpdate($pk, $data_params, $skip_escape=array(), $exec_type='exec') {
        parent::doUpdate($pk, $data_params, $skip_escape, $exec_type);
        if( ! $this->isSuccess()) {
            return $this;
        }

        $result = $this->getData();

        $this->load->model(DBNAME.'/notify_tb_model');

        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'explore_tb'
        );
        $this->notify_tb_model->doSyncNotify('INSERT', $options);
 
        $this->setSuccessResult($result);
        return $this;
    }


	public function doDelete($pk, $exec_type='exec') {
        parent::doDelete($pk, $exec_type);
        if( ! $this->isSuccess()) {
            return $this;
        }

        $result = $this->getData();

        $this->load->model(DBNAME.'/notify_tb_model');

        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'explore_tb'
        );
        $this->notify_tb_model->doSyncNotify('DELETE', $options);
 
        $this->setSuccessResult($result);
        return $this;
    }



    protected function __filter($params) {
        $params['e_created_at'] = date('Y-m-d H:i:s');
        $params['e_updated_at'] = date('Y-m-d H:i:s');
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
