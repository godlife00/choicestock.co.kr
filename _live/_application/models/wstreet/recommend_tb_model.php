<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Recommend_tb_model extends MY_Model {

    protected $pk = 'rc_id';


    // NOT NULL 필드들에대한 정의. 각 모델에서 재정의
    protected $emptycheck_keys = array(

        'rc_ticker' 		=> 'rc_ticker value is empty.',
        'rc_invest_point' 		=> 'rc_invest_point value is empty.',
        'rc_event' 		=> 'rc_event value is empty.',
        'rc_recom_price' 		=> 'rc_recom_price value is empty.',
        'rc_giveup_price' 		=> 'rc_giveup_price value is empty.',
        'rc_goal_price' 		=> 'rc_goal_price value is empty.',
        'rc_display_date' 		=> 'rc_display_date value is empty.',
        //'rc_view_count' 		=> 'rc_view_count value is empty.',
        'rc_admin_id' 		=> 'rc_admin_id value is empty.',
        'rc_created_at' 		=> 'rc_created_at value is empty.',
        'rc_updated_at' 		=> 'rc_updated_at value is empty.'
        );

    // ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
    protected $enumcheck_keys = array(

        'rc_use_chart'		=> array(
                            'enum'	=> array ('YES','NO'),
                            'message'	=> 'rc_use_chart value is not valid.'
                            ),
        'rc_endtype'		=> array(
                            'enum'	=> array ('ING','SUCCESS','FAIL'),
                            'message'	=> 'rc_endtype value is not valid.'
                            ),
        'rc_is_active'		=> array(
                            'enum'	=> array ('YES','NO'),
                            'message'	=> 'rc_is_active value is not valid.'
                            )
        );

    function __construct() {
        $this->db_name = array_pop(explode('/', dirname(__FILE__)));
        parent::__construct();
        $this->table = strtolower(substr(__CLASS__,0,-6));
        $this->fields = $this->db->list_fields($this->table);
    }

    public static $use_chart_map = array(
        'YES' => 'YES',
        'NO' => 'NO',
    );
    public function getUseChartMap() {
        return self::$use_chart_map;
    }

    public static $active_map = array(
        'YES' => 'YES',
        'NO' => 'NO',
    );
    public function getActiveMap() {
        return self::$active_map;
    }

    public static $endtype_map = array(
        'ING' => '진행중',
        'FAIL' => '손절가 도달',
        'SUCCESS' => '목표가 도달',
    );
    public function getEndTypeMap() {
        return self::$endtype_map;
    }

    public function doInsert($params, $skip_escape=array(), $exec_type='exec') {
        parent::doInsert($params, $skip_escape, $exec_type);
        if( ! $this->isSuccess()) {
            return $this;
        }

        $this->load->model(DBNAME.'/notify_tb_model');

        // override 안했다면 일반적으로 컨트롤러에서 getData()시 받았을 AutoIncrement PK 값
        $pk = $this->getData();
/*
        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'recommend_tb'
        );
        $this->notify_tb_model->doSyncNotify('INSERT', $options);
*/
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
/*
        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'recommend_tb'
        );
        $this->notify_tb_model->doSyncNotify('INSERT', $options);
 */
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
/*
        // 알림 동기화
        $options = array(
            'nt_pk' => $pk,
            'nt_table' => 'recommend_tb'
        );
        $this->notify_tb_model->doSyncNotify('DELETE', $options);
 */
        $this->setSuccessResult($result);
        return $this;
    }

    protected function __filter($params) {
        $params['rc_created_at'] = date('Y-m-d H:i:s');
        $params['rc_updated_at'] = date('Y-m-d H:i:s');
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
