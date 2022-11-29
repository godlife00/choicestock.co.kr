<?php  if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Notify_tb_model extends MY_Model {

    protected $pk = 'nt_id';


    // NOT NULL 필드들에대한 정의. 각 모델에서 재정의
    protected $emptycheck_keys = array(

        'nt_title' 		=> 'nt_title value is empty.',
        //'nt_content' 		=> 'nt_content value is empty.',
        'nt_table' 		=> 'nt_table value is empty.',
        //'nt_pk' 		=> 'nt_pk value is empty.',
        'nt_url' 		=> 'nt_url value is empty.',
        'nt_created_at' 		=> 'nt_created_at value is empty.',
        'nt_updated_at' 		=> 'nt_updated_at value is empty.'
        );

    // ENUM 필드마다 가질 수 있는 값들을 KEY => VALUE 형태의 배열로 정의. 각 모델에서 재정의
    protected $enumcheck_keys = array(

        'nt_is_active'		=> array(
                            'enum'	=> array ('YES','NO'),
                            'message'	=> 'nt_is_active value is not valid.'
                            )
        );

    function __construct() {
        $this->db_name = array_pop(explode('/', dirname(__FILE__)));
        parent::__construct();
        $this->table = strtolower(substr(__CLASS__,0,-6));
        $this->fields = $this->db->list_fields($this->table);
    }

    public static $table_map = array(
        'recommend_tb' => '종목추천',
        'analysis_tb' => '종목분석',
        'explore_tb' => '미국주식 탐구생활',
        'master_tb' => '대가의 종목',
        'custom' => '알림',
    );
    public static $table_url_map = array(
        'recommend_tb' => '/stock/recommend_view',
        'analysis_tb' => '/stock/analysis_view',
        'explore_tb' => '/stock/research_view',
        'master_tb' => '/stock/master_view',
    );
    public function getTableMap() {
        return self::$table_map;
    }

    public static $active_map = array(
        'YES' => 'YES',
        'NO' => 'NO',
    );
    public function getActiveMap() {
        return self::$active_map;
    }

    public function makeUrl($table, $pk) {
        $url = self::$table_url_map[$table];
        $url .= '/'.$pk.'?type=at';
        return $url;
    }

    /**
     * 종목추천 / 종목분석 / 탐구생활 / 대가의 종목 등록/수정/삭제 시 알림데이터도 같이 동기화 처리.
     */
    public function doSyncNotify($act='INSERT', $options=array()) {
		return;
        
		if( ! in_array($act, array('INSERT','UPDATE','DELETE'))) {
            return;
        }

        extract($options);

        if( ! array_key_exists($nt_table, self::$table_map)) {
            return;
        }

        $this->load->model(array(
            DBNAME.'/recommend_tb_model',
            DBNAME.'/analysis_tb_model',
            DBNAME.'/explore_tb_model',
            DBNAME.'/master_tb_model',
            DBNAME.'/ticker_tb_model',
        ));

        $sess = $this->session->userdata('admin');
        if( ! isset($sess['login_id'])) {
            $sess = array(
                'login_id' => 'System',
                'name' => 'System',
            );
        }
        $act_key = 0;
        $log_array = array();
        switch($act) {
            case 'INSERT':
                $modelname = $nt_table.'_model';
                $inserted_data = $this->{$modelname}->get($nt_pk)->getData();
                
                $nt_title = '';
                $nt_display_date = '0';
                $nt_is_active = 'NO';
                if($nt_table == 'recommend_tb') {
                    $ticker = $this->ticker_tb_model->get(array('tkr_ticker' => $inserted_data['rc_ticker']))->getData();
                    //$nt_title = '신규 종목추천이 등록되었습니다. - '.$ticker['tkr_name'].'('.$ticker['tkr_ticker'].')';
                    $nt_display_date = $inserted_data['rc_display_date'];
                    $nt_is_active = $inserted_data['rc_is_active'];

                } else if($nt_table == 'analysis_tb') {
                    $ticker = $this->ticker_tb_model->get(array('tkr_ticker' => $inserted_data['an_ticker']))->getData();
                    //$nt_title = '신규 종목분석이 등록되었습니다. - '.$ticker['tkr_name'].'('.$ticker['tkr_ticker'].')';
                    $nt_display_date = $inserted_data['an_display_date'];
                    $nt_is_active = $inserted_data['an_is_active'];

                } else if($nt_table == 'explore_tb') {
                    $nt_title = str_replace("\n", ' ', $inserted_data['e_title']);
                    $nt_display_date = $inserted_data['e_display_date'];
                    $nt_is_active = $inserted_data['e_is_active'];

                } else if($nt_table == 'master_tb') {
                    $nt_title = (strlen($inserted_data['ms_korguru']) > 0) ? $inserted_data['ms_korguru'] : $inserted_data['ms_guru'];
                    //$nt_title .= ' 보유종목 정보가 업데이트 되었습니다.';
                    $nt_display_date = date('Y-m-d H:i:s');
                    $nt_is_active = 'YES';
                }

                $params = array(
                    'nt_title' => $nt_title,
                    'nt_table' => $nt_table,
                    'nt_pk' => $nt_pk,
                    'nt_url' => $this->makeUrl($nt_table, $nt_pk),
                    'nt_display_date' => $nt_display_date,
                    'nt_is_active' => $nt_is_active,
                );


                //////// update
                $exist_check_params = array(
                    'nt_table' => $nt_table,
                    'nt_pk' => $nt_pk,
                );
                if(in_array($nt_table, array('explore_tb', 'analysis_tb', 'recommend_tb')) && $this->get($exist_check_params)->isSuccess()) {
                    $exist_row = $this->getData();
                    $nt_id= $exist_row['nt_id'];
                    $params['nt_updated_at'] = date('Y-m-d H:i:s');
                    $this->doUpdate($nt_id, $params);
                    break;
                }
                ////////////////


                $this->doInsert($params);

                $act_key = $this->getData();
                $this->common->write_history_log($sess, $act, $act_key, $log_array, 'notify_tb');
                $log_array = $params;
                break;

            //case 'UPDATE':
                // TODO Check. 어느정도까지 Sync 할 것인지 확인.
                //break;

            case 'DELETE':
                // 관련 내용으로 등록된 내역 모두 삭제.
                $params = array();
                $params['=']['nt_table'] = $nt_table;
                $params['=']['nt_pk'] = $nt_pk;
                $extra = array(
                    'order_by' => '',
                );
                $nt_data = $this->getList($params, $extra)->getData();
                $nt_ids = array_keys($this->common->getDataByPK($nt_data, 'nt_id'));

                if(sizeof($nt_ids) > 0) {
                    $params = array();
                    $params['in']['nt_id'] = $nt_ids;
                    $this->doMultiDelete($params);

                    $act_key = implode(',', $nt_ids);
                    $log_array = $nt_data;
                    $this->common->write_history_log($sess, $act, $act_key, $log_array, 'notify_tb');
                }
                break;
        }
        return;
    }

    protected function __filter($params) {
        $params['nt_created_at'] = date('Y-m-d H:i:s');
        $params['nt_updated_at'] = date('Y-m-d H:i:s');
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
