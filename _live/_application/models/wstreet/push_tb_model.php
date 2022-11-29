<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Push_tb_model extends MY_Model {

    protected $pk = 'pu_id';


    // NOT NULL 필드들에대한 정의. 각 모델에서 재정의
    protected $emptycheck_keys = array(
        'pu_admin_id' 		=> '작성자 value is empty.',
        'pu_title' 		=> '제목 value is empty.',
        'pu_content' 		=> '내용 value is empty.',
        'pu_display_date' 		=> '표출날짜 value is empty.',
        'pu_created_at' 		=> '등록일 value is empty.',
        'pu_updated_at' 		=> '수정일 value is empty.'
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

	public static $push_map = array(
        'Y' => 'Y',
        'N' => 'N',
    );

    public function getPushMap() {
        return self::$push_map;
    }

    protected function __filter($params) {
        $params['pu_created_at'] = date('Y-m-d H:i:s');
        $params['pu_updated_at'] = date('Y-m-d H:i:s');
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
