<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

ini_set('memory_limit', '2G');
set_time_limit(999);

class Dprovider extends CI_Controller {
    private $allow_ips = array(
        '44.238.5.3', // MK시그널 AWS Instance 탄력적 아이피
        '3.36.39.37', // MK시그널 AWS Instance 탄력적 아이피(Seoul 22.08.19 추가)
    );

    public function __construct() {
        parent::__construct();

        if ( ! (isset($_SERVER['REMOTE_ADDR']) && in_array($_SERVER['REMOTE_ADDR'], $this->allow_ips))) {
            //die('Not Allowed IP');
        }

        $this->load->model(array(
            'business/itoozaapi',
            DBNAME.'/ticker_tb_model',
            DBNAME.'/daily_tb_model',
            DBNAME.'/mri_tb_model',
            DBNAME.'/sf1_tb_model',
        ));

    }

    public function ticker_mri() {
        // ticker data 구하기
        $ticker_params = array();
        $ticker_params['=']['tkr_is_active'] = 'YES';

        $ticker_extra = array();
        $ticker_extra['order_by'] = '';

        $ticker_list = $this->common->getDataByPK($this->ticker_tb_model->getList($ticker_params, $ticker_extra)->getData(), 'tkr_ticker');

        $ticker_codes = array_keys($ticker_list);


        // mri 데이터 구하기
        $mri_params = array();
        $mri_params['in']['m_ticker'] = $ticker_codes;

        $mri_extra = array();
        $mri_extra['order_by'] = '';
        $mri_list = $this->common->getDataByPK($this->mri_tb_model->getList($mri_params, $mri_extra)->getData(), 'm_ticker');

        $result = array(
            'ticker_list'   => $ticker_list,
            'mri_list'      => $mri_list,
        );

        echo serialize($result);
    }

    public function closed_days() {
        $this->load->config('closed_day');
        $closed_day = $this->config->item('closed_day');
        echo json_encode($closed_day);
    }

    // 오늘 밤 장 열리는지 안열리는지 YES/NO 응답
    public function is_open_day() {
        $this->load->config('closed_day');
        $closed_day = $this->config->item('closed_day');

        $yoil = date('w');
        $today = date('Ymd');
        $yesterday = date('Ymd',strtotime("-1 day", time()));
        $is_open = 'NO';
        if($yoil>0 && $yoil<7) {
            $check_time = intval(date('Hi'));
            if(in_array($yoil, array(1,2,3,4,5))) {
                if(!in_array($today, $closed_day)) {
                    $is_open = 'YES';
                }
            }
        }
        echo $is_open;
    }
    public function is_open() {
        /*
           2022-01-17  Martin Luther King, Jr. Day
           2022-02-21  Washington's Birthday
           2022-04-15  Good Friday
           2022-05-30  Memorial Day
           2022-06-20  Juneteenth National Independence Day
           2022-07-04  Independence Day
           2022-09-05  Labor Day
           2022-11-24  Thanksgiving Day
           2022-12-26  Christmas Day
         */

        // 아래 올 해의 휴장일 정의는 _application/config/closed_day.php 에서 정의하도록 함.
        //$closed_day = array('20220117', '20220221', '20220415', '20220530', '20220620', '20220704', '20220905', '20221124', '20221226');
        $this->load->config('closed_day'); // _application/config/closed_day.php 를 읽는다.
        $closed_day = $this->config->item('closed_day');


        $yoil = date('w');
        $today = date('Ymd');
        $yesterday = date('Ymd',strtotime("-1 day", time()));
        $is_open = 'NO';

        if($yoil>0 && $yoil<7) {
            $check_time = intval(date('Hi'));
            if($yoil == 1) {
                if($check_time>=START_TIME && !in_array($today, $closed_day)) {
                    $is_open = 'YES';
                }
            }
            else if($yoil == 6) {
                if($check_time<=END_TIME && !in_array($yesterday, $closed_day)) {
                    $is_open = 'YES';
                }
            }
            else {
                if(($check_time<=END_TIME && !in_array($yesterday, $closed_day)) || ($check_time>=START_TIME && !in_array($today, $closed_day))) {
                    $is_open = 'YES';
                }
            }
        }
        echo $is_open;
    }

	public function ticker_info() {
	
        $ticker_info_file = 'ticker_info.json';

        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$ticker_info_file;

        if( is_file($file_path) ) {
            $ticker_info = json_decode(file_get_contents($file_path), true);
			echo '<pre>'; print_r($ticker_info); exit;
            echo json_encode($ticker_info);
            exit;
        }	
	}
}