<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');
abstract class Wt_BaseMobile_Controller extends CI_Controller {
    // 컨트롤러 전체가 로그인 회원만 제공할 경우 컨트롤러에서 true로 설정하면 생성자에서 로긴 페이지로 redirect.
    // 특정 view 만 로긴 회원이어야 하는 컨트롤러는 해당 action method에서
    // if($this->check_signin() == false) {
    //        return;
    // }
    // 하여 사용하기.

    protected $signin_only = false;

    protected $header_data = array(
        'header_template' => '1',
        'header_type' => '', // 컨트롤러 메서드에서 재정의 가능. sch_heaher: 흰색 머리. 검색영역 숨김
        'head_title' => SERVICE_NAME,
        'head_url' => '',
        'show_alarm' => FALSE,

    );
    protected $partner_info = array();

    // 전종목 Ticker 정보. 그냥 들고 있자.
    protected $ticker_info_map = array();

    // 종목 검색시 클라이언트 브라우져 리소스가 감당토록 떨궈둘 검색 기업정보 저장소
    protected $search_ticker_list = array();

    // 인기주 TOP 50
    //protected $popular_search_ticker = array();

    protected $is_mobile = false;
    protected $is_iphone = false;
    protected $is_open = false;
    protected $is_google = false;

    function __construct() {
        parent::__construct();

        //if($this->signin_only == true && $this->check_signin() == false) {
        //    die();
        //}

        $this->load->model(array(
            DBNAME.'/ticker_tb_model',
            DBNAME.'/mri_tb_model',
            DBNAME.'/search_log_tb_model',
            DBNAME.'/notify_tb_model',
            DBNAME.'/sp500_tb_model',
            'business/itoozaapi',
        ));

		$this->load->helper('cookie');

        $ticker_info_file = 'ticker_info.json';

        //$file_path = WEBDATA.'/'.$ticker_info_file;
        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$ticker_info_file;

        if( is_file($file_path) ) {
            $this->ticker_info_map = json_decode(file_get_contents($file_path), true);
        }
        else {
            $params = array();
            $params['=']['tkr_is_active'] = 'YES';
            //2020.08.26 수정 $params['not in']['tkr_category'] = array('Domestic Warrant', 'ADR Warrant', 'Canadian Warrant');
            $params['raw'] = 'tkr_category not like \'%Warrant%\'';

            $extra = array();
            $extra['order_by'] = '';
            $extra['slavedb'] = true;
            $extra['cache_sec'] = 3600; // update 중에 떠져버리면 티커 코드가 6천개 중 5백개만 있을때 떠져버리곤 오래 지속된다. 캐싱 뺌

            // 전종목 정보 채우기
            $this->ticker_info_map = $this->common->getDataByPK($this->ticker_tb_model->getList($params, $extra)->getData(), 'tkr_ticker');
        }
        //echo sizeof($this->ticker_info_map);

        // 전종목 종목별 검색정보 만들기
        foreach($this->ticker_info_map as $tic => $ticker_row) {
            $this->search_ticker_list[$tic] = array(
                'ticker' => $tic,
                'name' => $ticker_row['tkr_name'].' '.$ticker_row['tkr_name_en']
            );
        }

        // 알림
        $params = array();
        $params['=']['nt_view_wt'] = 'Y';
        $params['!=']['nt_table'] = 'master_tb';
        $params['<=']['nt_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['nt_display_date'] = date('Y-m-d H:i:s',strtotime("-1 day", time()));

        $extra = array();
        //$extra['limit'] = 1;
        $extra['cache_sec'] = 3600*6;
        $extra['order_by'] = 'nt_display_date DESC';
        $extra['slavedb'] = true;
        $this->header_data['noti_list'] = $this->notify_tb_model->getList($params, $extra)->getData();

        //장 시작시간 체크 
        $this->_open_check();

        $this->load->library('user_agent');

        if($this->agent->is_mobile()) {
            $this->is_mobile = TRUE;
        }

        if($this->agent->is_mobile('iphone')) {
            $this->is_iphone = TRUE;
        }

		if(!strstr($_SERVER['HTTP_USER_AGENT'], 'HK_AOS')) {
	        $this->_partner_session();
		}
		else {
	       //echo '<pre>'; print_r($this->session->all_userdata());
		}
    }
/*
전일 종가 적용 화면 
메인 > 종목추천
메인 > 추천 포트폴리오

메인 > 추천 > 추천 리스트
메인 > 추천 > 포트폴리오 리스트
메인 > 추천 > 승부주 리스트

발굴 > 레시피 > 급등주

15분 지연 적용
메인 > 진단 > 관신종목
메인 > 진단 > 인기종목

진단 > 관심종목
진단 > 인기종목
진단 > 종목검색결과

발굴 > 캐치

발굴 > 레시피 > 관심TOP50
발굴 > 레시피 > 실적발표
발굴 > 레시피 > 지금 세일중!
발굴 > 레시피 > 배당매력주
발굴 > 레시피 > 이익성장주
발굴 > 레시피 > 소비자독점
발굴 > 레시피 > 슈퍼스톡
*/
    private function _open_check() {

		$closed_day = array('20220117', '20220221', '20220415', '20220530', '20220620', '20220704', '20220905', '20221124', '20221226');

        $yoil = date('w');
        $today = date('Ymd');
        $yesterday = date('Ymd',strtotime("-1 day", time()));

        if($yoil>0 && $yoil<7) {
            $check_time = intval(date('Hi'));
            if($yoil == 1) {
                if($check_time>=START_TIME && !in_array($today, $closed_day)) {
                    $this->is_open = true;
                }
            }
            else if($yoil == 6) {
                if($check_time<=END_TIME && !in_array($yesterday, $closed_day)) {
                    $this->is_open = true;
                }
            }
            else {
                if(($check_time<=END_TIME && !in_array($yesterday, $closed_day)) || ($check_time>=START_TIME && !in_array($today, $closed_day))) {
                    $this->is_open = true;
                }
            }
        }
    }

    public function member_check($user_id) {
		return;
		$this->load->model(DBNAME.'/member_tb_model');

		if( ! $this->member_tb_model->get($user_id)->isSuccess()) {

			$params = array(
				'm_id' => $user_id,
				'm_name' => 'wowtv',
				'm_gender' => 'U',
				'm_path' => 'W',
				'm_reg_date' => date('Y-m-d H:i:s'),
				'm_mod_date' => date('Y-m-d H:i:s'),
				'm_login_date' => date('Y-m-d H:i:s'),
			);

			$this->member_tb_model->doInsert($params);
		}
		return;
	}


    private function _partner_session() {

		$pt_session = $this->input->get('serviceYN');
        //$pt_usernum = $this->input->get('customNo');

        if($pt_session != '' && $pt_session == 'Y') {
            $this->session->set_userdata('is_paid', TRUE);
        }
        else {
            if($pt_session != '' && $pt_session == 'N') {
                //$this->session->set_userdata('is_paid', FALSE);
				//$this->session->unset_userdata('user_id');
				$this->session->sess_destroy();
            }
        }
	}

    protected function set_session($sess_data=array()) {

        if( is_array($sess_data) && sizeof($sess_data) > 0 ) {

            $this->session->set_userdata(
                array(
                    'is_login' => TRUE,
                    'is_paid' => isset($sess_data['is_paid'])? $sess_data['is_paid']:FALSE,
                    'user_id' => $sess_data['user_id'],
                    'user_name' => $sess_data['user_name'],
                    'user_phone' => $sess_data['user_phone'],
                    'user_push' => $sess_data['user_push'],
                    'user_key' => $sess_data['user_key'],
                    'user_startday' => $sess_data['user_startday'],
                    'user_endday' => $sess_data['user_endday'],
                    'user_state' => $sess_data['user_state'],
                    'user_level' => $sess_data['user_level'],
                    'user_stock' => $sess_data['user_stock'],
                    'user_appver' => $sess_data['user_appver'],
                    'user_dtype' => $sess_data['user_dtype'],
                    'user_token' => $sess_data['user_token'],
                    'user_adid' => $sess_data['user_adid'],
                    'user_ostype' => $sess_data['user_ostype'],
                )
            );
        }
		/*
        else {
            $this->common->alert('잘못된 경로로 접근하셨습니다.');
            $this->common->locationhref('/');
            exit;
        }
		*/
    }

    protected function loginCheck(){
        if(!$this->session->userdata('is_login')){
			$this->common->alert('로그인 중입니다....');
			$movepage = ($this->session->userdata('user_ostype') == 'I') ? 'iosopen':'adropen';
			$this->common->locationhref('/'.WT.'_main/'.$movepage);
			exit;
        }
    }

    protected function payCheck(){
        if(!$this->session->userdata('is_paid')){
			echo '<script type="text/javascript">';
			echo 'HK.showToast(\'유료서비스입니다.\');';
			echo '</script>';
			if($this->session->userdata('user_state')=='1') {
	            $this->common->locationhref('/wt_main');
			}
			else {
	            $this->common->locationhref('/wt_main');
				//$this->common->locationhref('/'.WT.'_member/intro');
			}
            exit;
		}
    }

    protected function paramCheck(){
        return; //remove
        $strCookie = get_cookie('part_name');

        if($strCookie=='') {
            $this->common->locationhref('/');
            exit;
        }
    }

    protected function check_signin() {
        return; //remove
        $this->load->library('encrypt');
        $data = array();
        $data['sess_data'] = $this->session->all_userdata();
        if(
                isset($data['sess_data']['customer'])
                && isset($data['sess_data']['customer']['u_id'])
                && strlen($data['sess_data']['customer']['u_id']) > 0
          ){
            return true;
        }
        // logout user.
        if($this->input->is_ajax_request() === TRUE){
            echo json_encode(array('is_success' => false, 'code' => 'NotSignIn'));
            return FALSE;
        } else{
            $this->common->locationhref(HTTPS_SHOP_URL.'/account/login');
        }
        return false;
    }


    public function _view($view, $data=array(), $return_contents = false){

//if($_SERVER['REMOTE_ADDR'] == '1.214.48.194' ) {
//    echo '<br>name===>'.$this->partner_info['name'];
//    echo '<br>page===>'.$this->partner_info['page'];
    //echo '<br>key===>'.$this->partner_info['key'];
//}
        //echo '<pre>'; print_r($data);
        $data['sess_data'] = $this->session->all_userdata();

        $header = array();

        //심사용
        //$header['part_all'] = $this->partner_info['part_all'];

        //if($header['part_all']=='') {
        //    $header['part_all'] = get_cookie('part_all');
        //}

        $header['sess_data'] = $this->session->all_userdata();

        $this->load->library('Menu');

		if($data['is_html'] == false) {
	        $header['header_data'] = $this->header_data;
	        $header['search_ticker_list'] = $this->search_ticker_list;
		}
        /*
ogin..<pre>Array
(
    [header_template] => 1
    [header_type] =>
    [head_title] => 미국주식창
    [head_url] => /
    [show_alarm] => 1
    [noti_list] => Array
        (
            [0] => Array
                (
                    [nt_id] => 228
                    [nt_title] => [미탐] 코카콜라 예상 EPS 0.44 (4월 4째주 주요 실적발표 기업)
                    [nt_content] =>
                    [nt_table] => explore_tb
                    [nt_pk] => 65
                    [nt_url] => /stock/research_view/65
                    [nt_is_active] => YES
                    [nt_display_date] => 2020-04-20 17:00:00
                    [nt_created_at] => 2020-04-20 13:32:07
                    [nt_updated_at] => 2020-04-21 14:46:45
                )

        )

    [noti_table_map] => Array
        (
            [recommend_tb] => 종목추천
            [analysis_tb] => 종목분석
            [explore_tb] => 미국주식 탐구생활
            [master_tb] => 대가의 종목
            [custom] => 알림
        )

        echo '<pre>'; print_r($header['header_data']);
        */

        $container_class = '';
        $show_footer = TRUE;
        $show_menu = TRUE;
        $show_type = '';
        $is_main = FALSE;
        $is_searching = FALSE;
        $searching_title = '';
        $is_sicon = TRUE;
        $is_headtop = FALSE;
        $is_morning = FALSE;
        $wt_banner = TRUE;
        $headtop_title = '';
        $back_url = '';

        //$is_vt_banner = FALSE;
        $request_uri = $this->uri->segment(1).'/'.$this->uri->segment(2);
		$add_uri = $this->uri->segment(3);

		if( ! isset($this->header_data['container_class'])) { // controller 메서드에서 $this->header_data['container_class'] = 'sub_search'; 같은 set 없을시만.
            //echo 'm='.$request_uri;
            $header['header_class'] = '';
            switch($request_uri) {
                case '/':
                case WT.'_main/':
                    $header['header_class'] = ' h_sub';
                    $is_headtop = true;
                    $is_main = TRUE;
                    $is_searching = true;
                    //$is_vt_banner = TRUE;
                    //$show_footer = FALSE;
                    break;
/* remove
                case 'member/terms':
                case 'member/policy':
                    $show_type = '3';
                    $container_class = 'sub_terms';
                    $show_menu = false;
                    break;
                case 'member/notice':
                    $container_class = 'sub_alarm';
                    break;
remove */
                case WT.'_main/myticker':
                case WT.'_main/onestop':
                case WT.'_main/search':
                    $container_class = 'sub_search schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
                    $searching_title = '진단';
                    break;
                case WT.'_stock/recommend':
                    $header['header_class'] = ' h_sub';
					if($add_uri=='portfolio') $container_class = 'sub_recom sub_portfolio schfix_inc';
					else $container_class = 'sub_recom schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
                    $searching_title = '추천';
                    //$is_vt_banner = TRUE;
                    break;
                case WT.'_stock/recommend_view':
                    $container_class = 'sub_recom';
                    $show_type = '2';
                    //$is_headtop = true;
                    $headtop_title = '종목추천';
                    $is_sicon = false;
                    break;
                case WT.'_stock/winner':
                    $header['header_class'] = ' h_sub';
                    $container_class = 'sub_game schfix_inc';
                    $is_headtop = true;
                    $is_searching = true;
                    $searching_title = '추천';
                    $show_type = '2';
                    break;
                case WT.'_stock/alarm':
                    $container_class = 'sub_alarm';
                    $show_type = '3';
                    //$is_headtop = true;
                    $headtop_title = '알림';
                    $is_morning = TRUE;
                    $is_sicon = false;
                    break;
                case WT.'_stock/recipe_intro':
                    $header['header_class'] = ' h_sub';
                    $container_class = 'sub_recipe schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
					$wt_banner = false;
                    $searching_title = '탐색';
                    break;
                case WT.'_stock/recipe':
                    $container_class = 'sub_recipe schfix_inc';
                    $show_type = '2';
                    //$is_headtop = true;
                    $is_sicon = true;
                    $headtop_title = '투자레시피';
                    break;
                case WT.'_stock/wowtv':
                case WT.'_stock/news':
                    $header['header_class'] = ' h_sub';
                    $container_class = 'sub_research schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
					$wt_banner = false;
                    $searching_title = '뉴스';
                    break;
                case WT.'_stock/vod':
                case WT.'_stock/note':
                case WT.'_stock/research':
                    $header['header_class'] = ' h_sub';
                    $container_class = 'sub_research schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
					$wt_banner = false;
                    $searching_title = '탐색';
                    break;
                case WT.'_stock/wowtv_view':
                    $container_class = 'sub_research';
                    $show_type = '2';
                    //$is_headtop = true;
                    $headtop_title = '뉴스';
                    $is_sicon = false;
                    $back_url = 'wowtv';
                    break;
                case WT.'_stock/news_view':
                    $container_class = 'sub_research';
                    $show_type = '2';
                    //$is_headtop = true;
                    $headtop_title = '뉴스';
                    $is_sicon = false;
                    $back_url = 'news';
                    break;
                case WT.'_stock/vod_view':
                    $container_class = 'sub_research';
                    $show_type = '2';
                    //$is_headtop = true;
                    $headtop_title = '동영상';
                    $is_sicon = false;
                    $back_url = 'vod';
                    break;
                case WT.'_search/news_view':
                case WT.'_stock/research_view':
                    $container_class = 'sub_research';
                    $show_type = '2';
                    //$is_headtop = true;
                    $headtop_title = '탐구생활';
                    $is_sicon = false;
                    break;
                case WT.'_stock/morning_view':
                case WT.'_stock/morning':
                    $container_class = 'sub_briefing';
                    $show_type = '2';
                    //$is_headtop = true;
                    $is_sicon = false;
                    $headtop_title = '모닝브리핑';
                    break;
                case WT.'_stock/catch_info':
                    $header['header_class'] = ' h_sub';
                    $container_class = 'sub_catch schfix_inc';
                    $show_type = '2';
                    $is_headtop = true;
                    $is_searching = true;
					$wt_banner = false;
                    $searching_title = '탐색';
                    break;
                case WT.'_search/primary_ticker':
                case WT.'_search/news':
                case WT.'_search/fairvalue':
                case WT.'_search/invest_charm':
                case WT.'_search/summary':
                case WT.'_search/finance_chart':
                case WT.'_search/invest':
                case WT.'_search/financials':
                case WT.'_search/dividend':
                case WT.'_search/competitor':
                    $show_type = '2';
                    $container_class = 'sub_search';
                    $is_sicon = true;
                    $headtop_title = '종목검색';
                    //$back_url = 'recommend';
					$search_ticker = $this->uri->segment(3);
                    break;
                case WT.'_attractiveness/attractive':
                    $header['header_class'] = ' h_sub';
                    $show_type = '2';
                    $container_class = 'sub_attract  schfix_inc';
                    $is_headtop = true;
                    $is_searching = true;
					$wt_banner = false;
                    $searching_title = '탐색';
                    break;
                case WT.'_member/intro':
                case WT.'_member/ios_intro':
                case WT.'_member/ios_auth':
                case WT.'_member/auth':
                    $container_class = 'sub_login';
                    $show_menu = false;
                    $show_type = '3';
                    $headtop_title = '미국주식창 INTRO';
                    $is_sicon = false;
                    $show_footer = FALSE;
                    break;
                case WT.'_member/info':
                    $container_class = 'sub_alarm';
                    $show_type = '3';
                    $headtop_title = '정보설정';
                    $is_sicon = false;
                    $show_footer = FALSE;
                    break;
                case WT.'_member/withdrawal':
                    $container_class = 'sub_login';
                    $show_type = '3';
                    $headtop_title = '탈퇴하기';
                    $is_sicon = false;
                    $show_footer = FALSE;
                    break;
                case WT.'_main/menu':
                    $show_type = '3';
                    $container_class = 'sub_menu';
                    $header['header_class'] = ' h_sub m_sub';
                    $show_footer = FALSE;
                    break;
                case WT.'_member/policy':
                case WT.'_main/service':
                case WT.'_main/service_guide':
                case WT.'_main/service_prm':
                    $show_type = '3';
                    //$is_vt_banner = TRUE;
                    $container_class = 'sub_service';
                    $headtop_title = '서비스소개';
                    $is_sicon = false;
                    $back_url = 'none';
                    $show_footer = FALSE;
                    break;
//remove        case 'payment/pay_free':
                case WT.'_main/service_free':
                    $show_type = '3';
                    $container_class = 'sub_payment sub_freeguide';
                    break;
            }
        } else {
            $container_class = $this->header_data['container_class'];
        }
        $header['container_class'] = $container_class;

		/*
        shuffle($this->popular_search_ticker);
        $top_popular_ticker = array();
        foreach(array_slice($this->popular_search_ticker, 0 ,3) as $val) {
            $top_popular_ticker[] = array('ticker' => $val, 'name' => $this->ticker_info_map[$val]['tkr_name']);
        }
        $header['top_popular_ticker'] = $top_popular_ticker;
		*/

        if($request_uri=='payment/card_regist'||$request_uri=='member/menu') {
            $header['header_contents_html'] = '';
        }
        else {
            $header['header_contents_html'] = '';
            //$header['header_contents_html'] = $this->menu->get_header_contents($this->header_data['header_template'], $header);
        }
        if(isset($data['footer_type']) && $data['footer_type'] !='')
        $show_type = $data['footer_type'];

        $footer = array();
        $footer['show_footer'] = $show_footer;
        $footer['type'] = $show_type;
        $footer['is_main'] = $is_main;


        //$footer['is_vt_banner'] = $is_vt_banner;
        //$footer['footer_notice'] = $data['footer_notice'];

        /*
        $part_name = get_cookie('part_name');

        if($part_name=='') {
            $part_name = $this->partner_info['part_name'];
        }

        $header['part_name'] = $part_name;
        */
        $header['header_template'] = $this->header_data['header_template'];

        if(isset($data['meta_title']) && $data['meta_title'] != '') {
            $header['meta_title'] = $data['meta_title'];
        }
        else {
            $header['meta_title'] = '미국주식투자자를 위한 서비스 - 미국주식창';
        }

        
        $header['show_menu'] = $show_menu;
        $header['is_main'] = $is_main;
		/*
        $check_alarm = true;
        $check_time = date("YmdHis",time()-60*60*36);
        $noti_time = date('YmdHis', strtotime($this->header_data['noti_list'][0]['nt_display_date']));

        if(sizeof($this->header_data['noti_list']) > 0 && $check_time <= $noti_time) {
            $check_alarm = false;
        }
        $header['check_alarm'] = $check_alarm;
		*/

        $header['view'] = $view;
        $header['noti_list'] = $this->header_data['noti_list'];
        $header['is_searching'] = $is_searching;
        $header['search_ticker'] = $search_ticker;
        $header['searching_title'] = $searching_title;
        $header['is_headtop'] = $is_headtop;
        $header['headtop_title'] = $headtop_title;

		if($wt_banner === TRUE) {
			//echo '<pre>'; print_r($data['banner_list']);
			if(!isset($data['banner_list'])) {
				//메인배너
				$banner_file = 'banner_list.json';
				if(IS_REAL_SERVER)
					$file_path = str_replace('hoon','datahero',WEBDATA).'/json/'.$banner_file;
				else 
					$file_path = str_replace('datahero','hoon',WEBDATA).'/json/'.$banner_file;
				
				if( is_file($file_path) ) {
					$data['banner_list'] = json_decode(file_get_contents($file_path), true);
				}
			}

			$header['rolling_banner'] = (isset($data['banner_list'][3]) && sizeof($data['banner_list'][3])>0) ? $data['banner_list'][3]:array();
		}

        $header['wt_banner'] = $wt_banner;
        $header['is_sicon'] = $is_sicon;
        $header['is_morning'] = $is_morning;
        $header['back_url'] = $back_url;
        $header['header_back'] = $this->header_data['back_url'];

        if( ! $return_contents) {

            $this->load->view('/'.WT.'/inc/header.php', $header);
            $this->load->view('/'.WT.'/'.$view.'.php', $data);
            $this->load->view('/'.WT.'/inc/footer.php', $footer);
        } else {

            //if($data['chkUri']!='mirae') {
            $result  = $this->load->view('/'.WT.'/inc/header.php', $header, true)."\n";
            $result .= $this->load->view('/'.WT.'/'.$view.'.php', $data, true)."\n";
            //}
            $result .= $this->load->view('/'.WT.'/inc/footer.php', $footer, true)."\n";
            return $result;
        }
    }

    /*
    저평가 : 현재주가 < [fairvalue3]*0.88
    적정가 : [fairvalue3]*0.88 <= 현재주가 <= [fairvalue3]*1.15
    고평가 : 현재주가 > [fairvalue3]*1.15
    */

    public function cal_valuation($fairvalue, $close) {

        if($fairvalue <= 0) return 'N/A';
        else {
            if( $close > $fairvalue * 1.15 ) {
                $star = 5;    //고평가
            }
            else if( $close >= $fairvalue * 0.88 ) {
                $star = 3;
            }
            else {
                $star = 1;    //저평가
            }

            return $star;
        }
    }

    protected $spider_comment = array (
        'dividend_5' => '배당주 투자 대상으로 최고의 매력을 가지고 있습니다.별점 5점은 미국 주식 #TOTAL#개 중 상위 #RATE#%인 #HIGH#개 기업만이 받았습니다. 배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론, 향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금 성장성 등을 종합해 평가합니다.',
        'dividend_4' => '배당주 투자 대상으로 매력이 있습니다. 꾸준히 배당금을 지급하고 있어 향후에도 안정적인 배당금 수입이 예상됩니다. 배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론, 향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금 성장성 등을 종합해 평가합니다. ',
        'dividend_3' => '배당주 투자 매력은 보통입니다. 배당금을 지급하지만 상대적으로 배당 투자 매력은 떨어지는 편입니다. 배당 투자 목적으로만 주식을 매수하기에는 매력이 없습니다. 배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론, 향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금 성장성 등을 종합해 평가합니다. ',
        'dividend_2' => '배당주 투자 매력은 낮은 편입니다. 현재 배당금을 지급할 여력은 있으나, 배당에 적극적이지 않고 미래에도 꾸준히 안정적인 배당을 기대하는 건 현재로선 어려워 보입니다. 순이익 증가로 주가 상승을 기대할 수 있는 요인이 있는지 함께 검토하는 것이 좋습니다. 배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론, 향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금 성장성 등을 종합해 평가합니다.',
        'dividend_1' => '배당주 투자 대상으로는 매력이 없습니다. 과거 배당금 지급이 제한적이고, 미래 배당 지급 여력도 낮은 편입니다. 순이익 증가로 주가 상승을 기대할 수 있는 요인이 있는지 함께 검토하는 것이 좋습니다. 배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론, 향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금 성장성 등을 종합해 평가합니다. ',
        'moat_5' => '워렌 버핏이 강조하는 경제적해자가 가장 넓은 기업입니다. 넓은 경제적해자를 가진 기업은 현재의 고수익을 오랫동안 지킬 수 있는 사업독점력을 갖춘 회사를 말합니다. 향후에도 장기간 이익을 훼손하지 않고 고수익을 유지할 수 있어 꾸준한 주가 상승의 원동력이 됩니다.별점 5점은 미국 주식 #TOTAL#개 중 상위 #RATE#%인 #HIGH#개 기업만이 받았습니다. 사업독점력은 장기간  ROE, 낮은 원가율, 영업활동 현금흐름, 연평균 매출 성장률 등을 종합해 평가합니다. ',
        'moat_4' => '워렌 버핏이 강조하는 경제적해자가 넓은 기업입니다. 오랜기간 안정적으로 고수익을 달성한 기업으로 미래에도 현재의 수익을 유지할 가능성이 높은 기업입니다. 별점이 5점에서 4점으로 낮아졌다면 사업독점력이 약간 훼손됐다는 것을 의미하며, 0 ~ 3점에서 4점으로 올랐으면 사업독점력이 강화돼 긍정적인 신호로 해석합니다. 사업독점력은 장기간  ROE, 낮은 원가율, 영업활동 현금흐름, 연평균 매출 성장률 등을 종합해 평가합니다.',
        'moat_3' => '워렌 버핏이 강조하는 경제적해자가 보통인 기업입니다. 장기간 산업 평균 수준의 수익성을 유지해온 기업입니다. 별점이 작년 대비 낮아지는 추세라면 산업내 경쟁력이 약화되고 있다는 것을 말합니다. 이는 장기적으로 주가 상승의 걸림돌이 되기 때문에 꼼꼼한 점검이 필요합니다. 사업독점력은 장기간  ROE, 낮은 원가율, 영업활동 현금흐름, 연평균 매출 성장률 등을 종합해 평가합니다. ',
        'moat_2' => '워렌 버핏이 강조하는 경제적해자가 좁은 기업입니다. 제품과 서비스의 경쟁력을 높이지 못하면 향후 수익성이 훼손될 가능성이 있습니다. 다만, 4차 산업 등 신규 산업에 속한 기업들은 업력이 상대적으로 짧아 현재 경쟁력 보다 약간 낮은 점수를 받을 수도 있습니다. 따라서 신규 산업에 속한 기업은 사업독점력외에 수익성, 현금창출력 등의 투자지표도 함께 참고해서 투자의사를 결정하는 것이 좋습니다. 사업독점력은 장기간  ROE, 낮은 원가율, 영업활동 현금흐름, 연평균 매출 성장률 등을 종합해 평가합니다. ',
        'moat_1' => '워렌 버핏이 강조하는 경제적해자가 거의 없는 기업입니다. 경기 변동에 따라 수익성이 크게 움직일 가능성이 높습니다. 호황에는 수익을 내더라도, 불황에는 수익이 크게 훼손될 수 있는 만큼 투자할때 더욱 꼼꼼히 살펴야 합니다. 상장 후 10년 이내의 기업이 아니라면 장기적으로 낮은 별점을 받은 기업은 투자 대상에서 제외하는 것이 좋습니다. 사업독점력은 장기간  ROE, 낮은 원가율, 영업활동 현금흐름, 연평균 매출 성장률 등을 종합해 평가합니다. ',
        'safety_5' => '재무안전성이 매우 높은 기업입니다. 단기적으로 부도 위험이 없고, 불황이 닥쳐도 충분히 견딜 수 있는 우량한 재무구조를 갖춘 회사입니다. 재무안전성은 잃지 않는 투자를 위해 꼭 확인해야 할 항목입니다. 재무안전성이 높은 기업은  부도위험이 낮고, 불황이 닥쳐도 충분히 견딜수 있습니다.별점 5점은 미국 주식 #TOTAL#개 중 상위 #RATE#%인 #HIGH#개 기업만이 받았습니다.',
        'safety_4' => '재무안전성이 높은 기업입니다. 단기적으로 부도 위험이 낮은 편이며, 일반적인 기업에 비해 안전한 재무구조를 갖추고 있습니다. 미국 기업은 한국 기업에 비해 일반적으로 부채비율이 높기 때문에 이자보상배수, 현금흐름 등 여러가지 재무안전성 지표를 함께 살펴보는 것이 좋습니다.  ',
        'safety_3' => '재무안전성이 보통인 기업입니다. 상장기업의 평균적인 재무안전성을 갖춘 회사입니다. 재무위험이 높지는 않지만 순이익이 크게 줄거나 현금흐름이 나빠지면 부정적인 신호로 해석합니다.',
        'safety_2' => '재무안전성이 낮은 기업입니다. 순이익이 줄거나 현금흐름이 더 악화되면 단기적인 자금 부족이 나타날 수 있습니다. 재무안전성 별점이 낮아지고 있다면 재무안전성이 나빠지고 있는 신호입니다. 이 경우 투자 후보 대상 기업에서 제외하는 것이 좋습니다. ',
        'safety_1' => '재무안전성이 매우 낮은 기업입니다. 잃지 않는 투자를 지향하는 투자자라면 투자 대상에서 제외하는 것이 좋습니다. 유상증자나 인수합병(M&A) 뉴스 등을 통해 주가가 급등하기도 하지만 행운에 기댄 투자보다는 합리적인 투자가 필요합니다.  ',
		'growth_5' => '최고의 수익성을 갖춘 기업입니다. 수익성은 사업의 독점력을 평가하는 경제적 해자를 판단하는 중요한 지표 중 하나입니다. 이 그룹은 영업이익률이 20% 이상, 순이익률은 16% 이상으로 매출액 대비 이익률이 매우 높고, 자기자본 이익률(ROE)과 투하자본 이익률(ROIC)이 25% 이상인 고마진 기업입니다. 별점 5점은 미국 주식 #TOTAL#여개 중 상위 #RATE#%인 #HIGH#개 기업만이 받았습니다. 수익성은 영업이익률, 순이익률, 자기자본이익률(ROE) 등을 종합해 평가합니다.',
        'growth_4' => '수익성이 높은 기업입니다. 영업이익률이 15% 이상, 순이익률은 12% 이상인 기업입니다. 고마진 기업을 찾는 투자자라면 관심을 가져야 할 기업입니다. 또한, 영업이익이 적자였지만 순이익은 흑자를 기록해 자기자본이익률(ROE)과 투하자본 이익률(ROIC)이 높은 기업도 이 그룹에 해당합니다. 수익성은 영업이익률, 순이익률, 자기자본이익률(ROE) 등을 종합해 평가합니다.',
        'growth_3' => '수익성이 평균 이상인 기업으로 안정적인 수익을 내는 기업입니다. 다만, 수익성 지표의 상승 또는 하락 추세를 확인해 향후 수익성 개선 여부를 판단하는 것이 중요합니다. 수익성은 영업이익률, 순이익률, 자기자본이익률(ROE) 등을 종합해 평가합니다.',
        'growth_2' => '수익성이 평균 이하인 기업입니다. 일시적인 이익 등으로 일부 수익성 평가 지표에서만 점수를 높게 받은 기업으로 고마진 기업을 찾는 투자자에겐 매력이 낮은 회사입니다. 비용 절감 등으로 수익성을 회복할 수 있는 여력이 있는지 확인 후 투자하는 것이 좋습니다. 수익성은 영업이익률, 순이익률, 자기자본이익률(ROE) 등을 종합해 평가합니다.',
        'growth_1' => '순이익이 적자를 기록했거나, 자기자본이나 자산, 투하자본 대비 낮은 이익률을 기록한 회사입니다. 순이익 적자가 계속 이어질 경우 재무안전성이 낮아 재무 리스크가로 인한 주가 하락이 발생할 수 있습니다. 이익 성장이 없는 주가 상승은 모래 위에 성을 쌓는 것과 같아 언젠가는 무너지고 맙니다. 수익성은 영업이익률, 순이익률, 자기자본이익률(ROE) 등을 종합해 평가합니다.',
        'cashflow_5' => '현금창출력이 가장 우수한 기업입니다. 현금은 기업의 혈액과도 같은 역할을 합니다. 현금은 기업의 재무 구조를 개선시키고, 성장을 위한 투자 자금으로 사용합니다. 또한, 주주를 위한 배당, 자사주 매입에도 사용할 수 있기 때문에 주주가치를 높이는데도 활용할 수 있습니다.별점 5점은 미국 주식 #TOTAL#개 중 상위 #RATE#%인 #HIGH#개 기업이 받았습니다. 현금창출력은 영업활동 현금흐름, 잉여현금흐름, 현금흐름배수(PCR) 등을 종합해 평가합니다.',
        'cashflow_4' => '현금창출력이 우수한 기업입니다. 기업의 영업, 투자, 재무활동을 위한 현금흐름에 거의 문제가 없습니다. 영업활동 현금흐름이 꾸준한 플러스(+)를 유지하고 있어, 이를 바탕으로 성장을 위한 투자나 배당 등을 꾸준히 지급하고 있습니다. 현금창출력은 영업활동 현금흐름, 잉여현금흐름, 현금흐름배수(PCR) 등을 종합해 평가합니다.',
        'cashflow_3' => '현금창출력이 보통인 기업입니다. 영업활동 현금흐름이 플러스(+)를 기록하고 있어, 일반적으로 현금흐름에 문제는 없는 편입니다. 다만, 순이익이 크게 줄거나 적자로 전환할 경우 단기적인 현금흐름이 나빠질 수 있으니 부채비율, 이자보상배율 등 재무안전성도 함께 확인하는 것이 좋습니다. 현금창출력은 영업활동 현금흐름, 잉여현금흐름, 현금흐름배수(PCR) 등을 종합해 평가합니다.',
        'cashflow_2' => '현금창출력이 낮은 기업입니다. 회사의 영업활동 현금흐름이 향후 플러스(+)를 유지할 수 있는 지 확인이 필요합니다. 영업활동 현금흐름의 출발점은 순이익입니다. 순이익이 적자를 기록하면 영업활동 현금흐름은 일반적으로 마이너스(-)를 기록합니다. 지난 분기 대비 현금창출력 점수가 낮아졌다면 좀 더 꼼꼼히 기업의 재무 안전성을 체크해 보는 것이 좋습니다. 현금창출력은 영업활동 현금흐름, 잉여현금흐름, 현금흐름배수(PCR) 등을 종합해 평가합니다.',
        'cashflow_1' => '현금창출력이 매우 낮은 기업입니다. 순이익이 흑자를 기록하더라도 영업활동 현금흐름이 계속 마이너스(-)로 나타나면, 현금 부족에 따른 재무구조 악화와 부실이 발생합니다. 이는 기업가치와 주가 하락으로 이어집니다. 이 기업에 대한 현금흐름 개선 등 미래 실적 추정에 대한 확신이 없다면 가급적 투자는 피하는 것이 좋습니다. 현금창출력은 영업활동 현금흐름, 잉여현금흐름, 현금흐름배수(PCR) 등을 종합해 평가합니다.',
		'future_5' => '최고의 성장주 투자 대상 기업입니다. 현재뿐 아니라 미래 성장률도 최고의 성장성이 기대되는 기업입니다. 이 기업은 향후 매출액은 25% 이상, 영업이익은 30% 이상 성장할 것으로 예상됩니다. 별점 5점은 미국 주식 #TOTAL#여개 중 상위 #RATE#%인 #HIGH#개 기업만이 받았습니다. 미래성장성은 과거 실적과 향후 예상 실적을 추정해 종합적으로 평가합니다.',
		'future_4' => '미래성장성이 높은 고성장주입니다. 향후 매출액과 영업이익 성장률이 모두 최소 15% 이상 기대되는 기업입니다. 성장주 투자 대상으로 좋습니다. 미래성장성은 과거 실적과 향후 예상 실적을 추정해 종합적으로 평가합니다.',
		'future_3' => '미래성장성이 평균 이상인 기업입니다. 미래 성장률이 작년의 매출과 이익성장률 보다 높게 나타나면  향후 성장성 평가에서 더 높은 점수를 받을 수 있어 성장주 후보군에 속합니다. 다만, 이 기업은 향후 매출액과 영업이익 성장률이 상승 또는 하락하고 있는지 추세를 확인하는 것이 중요합니다. 미래성장성은 과거 실적과 향후 예상 실적을 추정해 종합적으로 평가합니다.',
		'future_2' => '미래성장성이 평균 이하의 기업입니다. 산업을 주도할 만한 성장성이 아직 확인되지 않았고, 향후 꾸준한 관찰이 필요한 유형입니다. 매출액 성장률이 높더라도, 영업적자를 기록 중인 기업들도 이 그룹에 속합니다. 미래성장성은 과거 실적과 향후 예상 실적을 추정해 종합적으로 평가합니다.',
		'future_1' => '미래성장성이 매우 낮은 기업입니다. 과거뿐 아니라 미래에도 성장 가능성이 낮게 평가됩니다. 신제품 출시, 신규사업 진출, M&A 등으로 성장동력이 필요한 기업유형입니다. 향후 비지니스 모델에 대한 명확한 그림이 없다면 성장주 투자 검토 대상 기업으로는 부적절합니다. 미래성장성은 과거 실적과 향후 예상 실적을 추정해 종합적으로 평가합니다.'
    );

    function get_spcomment($item, $param=array()) {
        $comment = $this->spider_comment[$item];
        $comment = str_replace('#TOTAL#',number_format($param['total']),$comment);
        $comment = str_replace('#RATE#',$param['high_rate'],$comment);
        $comment = str_replace('#HIGH#',number_format($param['high']),$comment);
        return $comment;
    }


    protected $ticker_currency = array (
    'KRW'=>array('억원(KRW)', '100'),
    'USD'=>array('백만달러(USD)', '0'),
    'ARS'=>array('천만페소(ARS)', '10'),
    'AUD'=>array('백만달러(AUD)', '0'),
    'BRL'=>array('백만레알(BRL)', '0'),
    'CAD'=>array('백만달러(CAD)', '0'),
    'CHF'=>array('백만프랑(CHF)', '0'),
    'CLP'=>array('천만페소(CLP)', '10'),
    'CNY'=>array('백만위안(CNY)', '0'),
    'COP'=>array('억페소(COP)', '100'),
    'DKK'=>array('백만크로네(DKK)', '0'),
    'EUR'=>array('백만유로(EUR)', '0'),
    'GBP'=>array('백만파운드(GBP)', '0'),
    'HKD'=>array('백만달러(HKD)', '0'),
    'IDR'=>array('억루피아(IDR)', '100'),
    'ILS'=>array('백만세켈(ILS)', '0'),
    'INR'=>array('백만루피(INR)', '0'),
    'JPY'=>array('억엔(JPY)', '100'),
    'MXN'=>array('백만페소(MXN)', '0'),
    'MYR'=>array('백만링깃(MYR)', '0'),
    'NOK'=>array('백만크로네(NOK)', '0'),
    'PEN'=>array('백만누에보솔(PEN)', '0'),
    'PHP'=>array('백만페소(PHP)', '0'),
    'PLN'=>array('백만즈워티(PLN)', '0'),
    'RUB'=>array('천만루블(RUB)', '10'),
    'SEK'=>array('백만크로나(SEK)', '0'),
    'TRY'=>array('백만리라(TRY)', '0'),
    'TWD'=>array('천만달러(TWD)', '10'),
    'ZAR'=>array('백만란드(ZAR)','0'));

    public function get_snp500() {

        $snp500_file = 'snp500.json';
        $file_path = str_replace('hoon','datahero',WEBDATA).'/'.$snp500_file;

        if( is_file($file_path) ) {
            $result = json_decode(file_get_contents($file_path), true);
        }
        else {
			$snp_params = array();
			//$snp_params['=']['sp5_date'] = '2020-02-17';
			$snp_params['=']['sp5_action'] = 'current';
			$snp_params['raw'] = array('sp5_date = (select max(sp5_date) from sp500_tb)');
			$snp_params['join']['ticker_tb'] = 'sp5_ticker = tkr_ticker and tkr_table = "SF1" and tkr_isdelisted = "N" ';

			$snp_extra = array(
				'order_by' => 'sp5_date desc',
				'fields' => 'sp5_ticker',
				'quandldb' => true,
				'cache_sec' => 3600*12
			);

			//$this->ticekr_snp500_map = $this->sp500_tb_model->getList($snp_params, $snp_extra)->getData();
			$result = array_keys($this->common->getDataByPK($this->sp500_tb_model->getList($snp_params, $snp_extra)->getData(), 'sp5_ticker'));
		}

        return $result;
    }

    public function like($ticker='', $total='') {

        if( $this->session->userdata('user_id') != '' && isset($ticker)) {

            $user_id = $this->session->userdata('user_id');

            $this->load->model(DBNAME.'/myitem_tb_model');

            $params = array();
            $params['=']['mi_user_id'] = $user_id;
            $params['=']['mi_ticker'] = $ticker;

            $extra = array(
                'fields' => 'mi_like',
                'slavedb' => true
            );

            $like_info = array();
            $like_info = array_shift($this->myitem_tb_model->getList($params, $extra)->getData());

            if($total =='Y') {

                $params = array();
                $params['slavedb'] = TRUE;
                $params['=']['mi_ticker'] = $ticker;
                $params['=']['mi_like'] = 'Y';
                $total_count = $this->myitem_tb_model->getCount($params)->getData();

                $like_info['total_count'] = $total_count;
            }

            return $like_info;
        }
        else {
            if($total =='Y' && isset($ticker)) {

                $this->load->model(DBNAME.'/myitem_tb_model');
                $params = array();
                $params['slavedb'] = TRUE;
                $params['=']['mi_ticker'] = $ticker;
                $params['=']['mi_like'] = 'Y';
                $total_count = $this->myitem_tb_model->getCount($params)->getData();

                $like_info = array();
                $like_info['total_count'] = $total_count;

                return $like_info;
            }
        } 
    }

    //적정주가 비율
    protected function get_fairrate($tkr_close, $mri_data) {

    /*
    $result['fairvalue5'] = round($tkr_valuation*0.7, 2);
    $result['fairvalue4'] = round($tkr_valuation*0.85, 2);
    $result['fairvalue3'] = $tkr_valuation;
    $result['fairvalue2'] = round($tkr_valuation*1.176, 2);
    $result['fairvalue1'] = round($tkr_valuation*1.43, 2);
    */
        if( $mri_data['m_v_fairvalue3'] <= '0' || $mri_data['m_v_fairvalue3'] == '' ) {
            return -10;
        }
        //$tkr_close = 74.10;

        $rate = 0;
        if( $tkr_close > $mri_data['m_v_fairvalue1'] ) { //매우 고평가
            $rate = 106;
        }
        else if( $tkr_close > $mri_data['m_v_fairvalue2'] && $tkr_close <= $mri_data['m_v_fairvalue1'] ) {
            //76~100
            $term = ($mri_data['m_v_fairvalue1'] - $mri_data['m_v_fairvalue2'])/25;
            $value = $mri_data['m_v_fairvalue1'];
            for($i=25;$i>0;$i--) {

                if($i<25) $value -= $term;
                if($tkr_close >= $value) break;
            }
            $rate = 75 + $i;
        }
        else if( $tkr_close > $mri_data['m_v_fairvalue3'] && $tkr_close <= $mri_data['m_v_fairvalue2'] ) {
            //51~75
            $term = ($mri_data['m_v_fairvalue2'] - $mri_data['m_v_fairvalue3'])/25;
            $value = $mri_data['m_v_fairvalue2'];

            for($i=25;$i>0;$i--) {
                if($i<25) $value -= $term;
                if($tkr_close >= $value) break;
            }
            $rate = 50 + $i;
        }
        else if( $tkr_close > $mri_data['m_v_fairvalue4'] && $tkr_close <= $mri_data['m_v_fairvalue3'] ) {
            //26~50
            $term = ($mri_data['m_v_fairvalue3'] - $mri_data['m_v_fairvalue4'])/25;
            $value = $mri_data['m_v_fairvalue3'];

            for($i=25;$i>0;$i--) {
                if($i<25) $value -= $term;
                if($tkr_close >= $value) break;
            }
            $rate = 25 + $i;
        }
        else if( $tkr_close > $mri_data['m_v_fairvalue5'] && $tkr_close <= $mri_data['m_v_fairvalue4'] ) {
            //1~25
            $term = ($mri_data['m_v_fairvalue4'] - $mri_data['m_v_fairvalue5'])/25;
            $value = $mri_data['m_v_fairvalue4'];

            for($i=25;$i>0;$i--) {
                if($i<25) $value -= $term;
                if($tkr_close >= $value) break;
            }
            $rate = $i;
        }
        else {    //매우 저평가
            $rate = -5;
        }

        return $rate;
    }

    protected $yoil = array("일", "월", "화", "수", "목", "금", "토");
    protected $win_trend = array('S'=>'up', 'N'=>'trans', 'W'=>'down');

    //적정주가 오픈 티커 (15종목, 20.06/16)
    protected $open_ticker = array('AAPL', 'MSFT', 'AMZN', 'DAL', 'INTC', 'CCL', 'KO', 'GOOGL', 'T', 'MRK', 'JNJ', 'AMD', 'NVDA', 'O', 'XOM');

    //티커명 예외처리. 21.09.07
    protected $exc_ticker = array('GOOG');

	public function stripUrl($str) {
		preg_match_all("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $str, $matches);

		$urls = array_shift($matches);
		foreach($urls as $val) {
			$str = str_replace($val, '', $str);
		}

		return $str;
	}

    public function auto_link($str) {
        $str = preg_replace("/&lt;/", "\t_lt_\t", $str);
        $str = preg_replace("/&gt;/", "\t_gt_\t", $str);
        $str = preg_replace("/&amp;/", "&", $str);
        $str = preg_replace("/&quot;/", "\"", $str);
        $str = preg_replace("/&nbsp;/", "\t_nbsp_\t", $str);
        $str = preg_replace("/([^(http:\/\/)]|\(|^)(www\.[^[:space:]]+)/i", "\\1<A HREF=\"http://\\2\">\\2</A>", $str);
        $str = preg_replace("/([^(HREF=\"?'?)|(SRC=\"?'?)]|\(|^)((http|https|ftp|telnet|news|mms):\/\/[a-zA-Z0-9\.-]+\.[\xA1-\xFEa-zA-Z0-9\.:&#=_\?\/~\+%@;\-\|\,]+)/i", "\\1<A HREF=\"\\2\">\\2</A>", $str);
        $str = preg_replace("/([0-9a-z]([-_\.]?[0-9a-z])*@[0-9a-z]([-_\.]?[0-9a-z])*\.[a-z]{2,4})/i", "<a href='mailto:\\1'>\\1</a>", $str);
        $str = preg_replace("/\t_nbsp_\t/", "&nbsp;" , $str);
        $str = preg_replace("/\t_lt_\t/", "&lt;", $str);
        $str = preg_replace("/\t_gt_\t/", "&gt;", $str);
        return $str;
    }

	//Post api call
	public function _reqBasePost(Array $data, $url, $access_token){
		$header_data = [];
		$header_data[] = 'Authorization : PLTOKEN '.$access_token;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);

		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 15);	//connection timeout 15 
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));	//POST data
		curl_setopt($ch, CURLOPT_POST, true);
		curl_setopt($ch, CURLOPT_HTTPHEADER, $header_data);
		$response = curl_exec($ch);

        $logdata = array(
            'url' => $url,
            'data' => $data,
            'method' => $this->router->fetch_method(),
            'result' => $response,
            'http_code' => curl_getinfo($ch, CURLINFO_HTTP_CODE),
            'get' => $this->input->get(),
            'post' => $this->input->post(),
        );
		curl_close($ch);	 

        // todo. Delete! 안 지우면 로그 용량 먹으니 logdata/ 아래 파일 삭제관리 필요
        //$this->common->logWrite('test', print_r($logdata, TRUE), __FUNCTION__); 

		return $response;
	}

	public function _reqPost(Array $data, $url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 15);					//connection timeout 15 
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));	//POST data
		curl_setopt($ch, CURLOPT_POST, true);
		$response = curl_exec($ch);



        $logdata = array(
            'url' => $url,
            'data' => $data,
            'method' => $this->router->fetch_method(),
            'result' => $response,
            'http_code' => curl_getinfo($ch, CURLINFO_HTTP_CODE),
            'get' => $this->input->get(),
            'post' => $this->input->post(),
        );
		curl_close($ch);	 

        // todo. Delete! 안 지우면 로그 용량 먹으니 logdata/ 아래 파일 삭제관리 필요
        //$this->common->logWrite('test', print_r($logdata, TRUE), __FUNCTION__); 
		return $response;
	}
/*
    public function get_wtsise($ticker='CME-ES')
    {
		$sise_url = 'http://wtsise.choicestock.co.kr/get_prices.php?tickers='.$ticker;
		return file_get_contents($sise_url);
		*
		$tickers = array_shift(json_decode(file_get_contents($sise_url), true));
		if(is_array($tickers) && sizeof($tickers) > 0) {
			$result = array('success' => true, 'ticker' => $tickers['ticker'], 'last_price' => $tickers['last_price'], 'diff_rate' => sprintf('%.2f', $tickers['diff_rate']), 'diff_price' => sprintf('%.2f', $tickers['diff_price']));
		}
		else {
			$result = array('error' => true, 'msg' => 'not exist ticker');
		}
		exit(json_encode($result));
		*
	}
*/
/*
function send_notification($tokens, $message) {

    $url = 'https://fcm.googleapis.com/fcm/send';

	if ($message) {
		$fields = array (
			'notification' => array ('body' => $message['body'], 'title' => $message['title'])
		);
	}

	if(is_array($tokens)) {
		$fields['registration_ids'] = $tokens;
	} else {
		$fields['to'] = $tokens;
	}

    $fields['priority'] = "high";

    $FCM_SERVER_KEY = "AAAAAw0PMU0:APA91bG0TLzc8NprkLJK8sLSWTeSvXeZhdNFRM9iNDkX6IBlUL8R5pgMmFlyCN2AuVSIkrbF8prx8eFM-Db-dzMe9AZRQzGmL9TpK4_IAIlwKMndSel4XcoqJuKsMccSaSCgOqj26-41"; 

    $headers = array(
        'Authorization:key =' . $FCM_SERVER_KEY,
        'Content-Type: application/json'
    );


    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);  
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($fields));
    $result = curl_exec($ch);           
    if ($result === FALSE) {
       die('Curl failed: ' . curl_error($ch));
    }
    curl_close($ch);
    return $result;
}



$tokens = "사용자토큰키";

$message = array(
	"title"   => "알림제목", 
	"body" => "알림내용", 
);
send_notification($tokens, $message);
*/
}