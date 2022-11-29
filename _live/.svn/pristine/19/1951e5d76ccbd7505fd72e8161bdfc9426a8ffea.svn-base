<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/wt_base_mobile.php';
class Wt_member extends Wt_BaseMobile_Controller {

    /**
     * Index Page for this controller.
     *
     * Maps to the following URL
     *         http://example.com/index.php/welcome
     *    - or -  
     *         http://example.com/index.php/welcome/index
     *    - or -
     * Since this controller is set as the default controller in 
     * config/routes.php, it's displayed at http://example.com/
     *
     * So any other public methods not prefixed with an underscore will
     * map to /index.php/welcome/<method_name>
     * @see http://codeigniter.com/user_guide/general/urls.html
     */

	/*안드로이드인앱결제 API확인-주문번호*/
	public function showAndOrder() {

		if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') || IS_REAL_SERVER) {
            redirect('https://www.choicestock.co.kr');
            exit;
        }
/*
    [appType] => 15
    [memberId] => 672a8e68-be29-4dd4-9d9b-5f490969665d
    [purchaseType] => 1
    [packageId] => 101863
    [cpItemId] => 
    [cpItemName] => 
*/
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$memberId = '82a0d3e4-d46c-4cff-934f-bc26e717ce07'; 
		$purchaseType = '1';
		$packageId = '101863'; //정기결제 - 101802
		$cpItemId = '';
		$cpItemName = '';

        $data = array(
            'appType' => $appType,
            'memberId' => $memberId,
            'purchaseType' => $purchaseType,
            'packageId' => $packageId,
            'cpItemId' => $cpItemId,
            'cpItemName' => $cpItemName,
        );
echo '<pre>'; print_r($data);
		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$postURL = DEV_WT_API_URL.'/v1/payment/google/insorder'; 
		//$postURL = WT_API_URL.'/v1/apple/'.$movepage; 
		$response_str = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
        $response = json_decode($response_str, true);

		echo '<pre>'; print_r($response); exit;
	}

	/*안드로이드인앱결제 API확인*/
	public function showAndNoti() {

		if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') || IS_REAL_SERVER) {
            redirect('https://www.choicestock.co.kr');
            exit;
        }
/*
    [payResultCode] => 1
    [payOrderNo] => 1
    [memberId] => 672a8e68-be29-4dd4-9d9b-5f490969665d
    [packageId] => GPA.3388-7432-4952-30467
    [payTransNo] => GPA.3388-7432-4952-30467
    [payTransTime] => 220629163145
    [payToken] => jjgaldmhldllpnakihgkidba.AO-J1OxBdd8RDtfzdKxPD11ZWytxl8hUgl1YEytRVD7m3QT31w7poW9EdMRUU8thQ-AAtNWWCuS6Oi8Sm2MnXbl4TC15xBa9fg

	payResultCode	String	1	M	결과코드	0:오류, 1:성공
	payOrderNo	String	50	M	주문번호	
	memberId	String	36	M	회원ID	
	packageId	String	10	M	구글등록 상품번호	패키지ID
	payTransNo	String	50	M	구글 거래번호	구글빌링번호
	payTransTime	String	20	M	결제시간	구글 거래시간
	payToken	String	256	M	결제토큰	구글 TID

		https://capdev.choicestock.co.kr/wt_member/showAndNoti
*/
		$memberId = '672a8e68-be29-4dd4-9d9b-5f490969665d'; 

		$payResultCode = '1';
		$payOrderNo = '101863';
		$packageId = 'GPA.3388-7432-4952-30467';
		$payTransNo = 'GPA.3388-7432-4952-30467';
		$payTransTime = '220629163145';
		$payToken = 'jjgaldmhldllpnakihgkidba.AO-J1OxBdd8RDtfzdKxPD11ZWytxl8hUgl1YEytRVD7m3QT31w7poW9EdMRUU8thQ-AAtNWWCuS6Oi8Sm2MnXbl4TC15xBa9fg';

        $data = array(
            'payResultCode' => $payResultCode,
            'payOrderNo' => $payOrderNo,
            'memberId' => $memberId,
            'packageId' => $packageId,
            'payTransNo' => $payTransNo,
            'payTransTime' => $payTransTime,
            'payToken' => $payToken,
        );

		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;
	
		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$postURL = DEV_WT_API_URL.'/v1/payment/google/notification'; 
		//$postURL = WT_API_URL.'/v1/apple/'.$movepage; 
		$response_str = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
        $response = json_decode($response_str, true);

		echo '<pre>'; print_r($response); exit;
	}

	//안드로이드 인앱결제 - NOTI
	public function and_noti() {

        if( ! $this->input->is_ajax_request()) {
            $this->common->locationhref('/wt_member/and_pay');
            return;
        }
        
        /**
         *  상품정보 구매 > 앱스토어 구매완료 시 호출
         */
        $request = $this->input->post();

        $this->common->logWrite('test', 'and_noti::request[0]::'.print_r($request, TRUE)); 

        $data = array(
            'payResultCode' => $request['payResultCode'],
            'payOrderNo' => $request['payOrderNo'],
            'memberId' => $request['memberId'],
            'packageId' => $request['packageId'],
            'payTransNo' => $request['payTransNo'],
            'payTransTime' => $request['payTransTime'],
            'payToken' => $request['payToken'],
        );

		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		//$postURL = DEV_WT_API_URL.'/v1/payment/google/notification'; 
		$postURL = WT_API_URL.'/v1/payment/google/notification'; 
		$response_str = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
        $response = json_decode($response_str, true);

		$this->common->logWrite('test', 'and_noti:[1]:response::'.print_r($response, TRUE)); 

		$return_data = array();
        if( ! isset($response['resultCode']) || $response['resultCode'] != '0') {
            $return_data['is_success'] = FALSE;
            $return_data['req'] = $data;
            $return_data['debug'] = $response_str;
            $return_data['error_message'] = '잠시 후 다시 시도하세요[1]'; 
        } else {

	        if( ! isset($response['data']['resultCode']) || $response['data']['resultCode'] != '0') {
				$return_data['is_success'] = FALSE;
				$return_data['req'] = $data;
				$return_data['debug'] = $response_str;
				if($response['data']['resultCode'] == '1') {
					$return_data['error_message'] =  '주문 번호 오류가 발생했습니다.'; 
				}
				else if($response['data']['resultCode'] == '2') {
					$return_data['error_message'] =  '중복 호출 오류가 발생했습니다.'; 
				}
				else {
					$return_data['error_message'] =  '기타 오류가 발생했습니다.'; 
				}
			}
			else {
	            $return_data['is_success'] = TRUE; 
	        }
        }

        echo json_encode($return_data);
	}

	//안드로이드 인앱결제 - 주문정보 등록
	public function and_order() {

        if( ! $this->input->is_ajax_request()) {
            $this->common->locationhref('/wt_member/and_pay');
            return;
        }
        
        /**
         * 구글 PAY 주문정보를 등록한다
         */

        $request = $this->input->post();
        $this->common->logWrite('test', 'and_order::'.print_r($request, TRUE)); 
        
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

        $data = array(
            'appType' => $appType,
            'memberId' => $this->session->userdata('user_key'),
            'purchaseType' => $request['purchaseType'],
            'packageId' => $request['packageId'],
            'cpItemId' => $request['cpItemId'],
            'cpItemName' => $request['cpItemName'],
        );

        $this->common->logWrite('test', 'and_order::data::'.print_r($data, TRUE)); 

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		//$postURL = DEV_WT_API_URL.'/v1/payment/google/insorder'; 
		$postURL = WT_API_URL.'/v1/payment/google/insorder'; 
		$response_str = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
        $response = json_decode($response_str, true);

        $this->common->logWrite('test', 'and_order::response::'.print_r($response, TRUE)); 

		$return_data = array();
        if( ! isset($response['resultCode']) || $response['resultCode'] != '0') {
            $return_data['is_success'] = FALSE;
            $return_data['req'] = $data;
            $return_data['debug'] = $response_str;
            $return_data['error_message'] = '잠시 후 다시 시도하세요[0]'; 
        } else {
			$return_data['is_success'] = TRUE; 
			$return_data['order_no'] = $response['data']['payOrderNo']; 
        }

        echo json_encode($return_data);
	}

	//아이폰 인앱결제용
	public function ios_apisend() {

        if( ! $this->input->is_ajax_request()) {
            $this->common->locationhref('/wt_member/ios_pay');
            return;
        }
        
        /**
         *  상품정보 구매 > 앱스토어 구매완료 시 호출
         */
        $request = $this->input->post();
        
        $this->common->logWrite('test', 'REQ:'.print_r($request, TRUE)); 
        
        $return_data = array(
            'is_success' => FALSE,
        );
        $request = $this->input->post();

        $need_params = array(
            'memberId',     // uuid
            'receipt',      // 영수증 정보 
            'productid',    // 상품코드
            'ipAddress',    // ip주소
            //'orgTransactionId', // 원천 거래번호 -> 정기결제만 있는 key
            'transactionId',    // 거래번호 
        );
        
        // 하나라도 없으면 리턴
        foreach($need_params as $f) {

            if( ! array_key_exists($f, $request)) {
                $return_data['error_message'] = '잠시 후 다시 시도하세요...';
                $return_data['debug'] = $f;
                //$this->common->logWrite('test', print_r($return_data, TRUE)); 
                echo json_encode($return_data);
                return;
            }
        }


        // payletter에서 요구하는 파라미터명으로 재구성
        $data = array(
            'memberId' => $request['memberId'],
			'receiptData' => $request['receipt'],
			'productId' => $request['productid'],
			'transactionId' => $request['transactionId'],
			'ipAddress' => $request['ipAddress'],
			//'payType' => 'A',
			//'CharSet' => 'utf-8'
        );

        $is_monthbill = FALSE;

        // 3.34 애플 인앱 일반결제
        // 3.35 애플 인앱 정기결제
        if($request['productid'] !== 'US550002') {
            $is_monthbill = TRUE;
            $data['orgTransactionId'] = isset($request['orgTransactionId']) ? $request['orgTransactionId']:$request['transactionId'];
        }
        //$data['orgTransactionId'] = $request['orgTransactionId'];


        // 응답은 http_code 200으로 확인하나, 현재는 응답전문을 리턴하므로, 
        // 해당 데이터로 요청에 대한 성공여부를 판단해야 함.


/*

		//일반 결제일 경우
		$data = Array(
			'memberId' => $response['data']['memberId'],
			'receiptData' => $receiptData,
			'productId' => $productId,
			'transactionId' => $transactionId,
			'ipAddress' => $ipAddress,
			'payType' => 'A',
			'CharSet' => 'utf-8'
		);		
*/

		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		//$movepage = ($data['payType'] == 'A') ? 'pay':'monthbillpay';
		$movepage = ($is_monthbill) ? 'monthbillpay':'pay';
		//$postURL = DEV_WT_API_URL.'/v1/apple/'.$movepage; 
		$postURL = WT_API_URL.'/v1/apple/'.$movepage; 
		$response_str = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
        $response = json_decode($response_str, true);

        $return_data['transactionId'] = $request['transactionId']; 
        if( ! isset($response['resultCode']) || $response['resultCode'] != '0') {
            $return_data['is_success'] = FALSE;
            $return_data['req'] = $data;
            $return_data['debug'] = $response_str;
            $return_data['error_message'] = '잠시 후 다시 시도하세요.'; 
        } else {
            $return_data['is_success'] = TRUE; 
        }

        //$this->common->logWrite('test', print_r($return_data, TRUE)); 



        // 지금 API는 live URL로 쏘고 있는데, 
        //{"error":{"code":"996","message":"Cannot find resource. Please check resource.","detail":"v1/apple/monthbillpay"}}


        // todo. 오영훈 팀장님! 실섭에 API 적용되면 이 블럭 지우셔요~!
        // TODO. DELETE!!! 에러 리턴하고 있어서 일단 TRUE로 이어가도록 처리
        //$return_data['is_success'] = TRUE; 
        //////////////////////////////////////////////////////////////////


        echo json_encode($return_data);
	}

	public function ios_pay() {
		$data = array();

		$this->load->view('/'.WT.'/member/ios_pay.php', $data);
	}

	public function and_pay() {
		$data = array();

		$this->load->view('/'.WT.'/member/and_pay.php', $data);
	}

	public function init_key_intro()
	{
	    $this->load->view('/'.WT.'/member/init_key_intro');
	}

	public function initKey()
	{
	    $this->load->view('/'.WT.'/member/init_key');
	}

	public function intro($data=array()) 
	{
		$data['is_html'] = true;
		$this->_view('/member/intro', $data);
	}

    // common_ios_pay.js logWrite(from, data) JS함수로부터 보내진 데이터 로그파일 쓰기
    public function logtest() {
        $request = $this->input->post();

        $this->common->logWrite('test', print_r($request, TRUE)); 
    }

	/* deviceKey settig */
	public function ios_set_key() {
		$deviceKey = $this->input->get('deviceKey');
		if($deviceKey != '') {
			$data = array();
			$data['deviceKey'] = $deviceKey;
			$this->load->view('/'.WT.'/member/ios_set_key.php', $data);
		}
		else {
			$this->common->alert('key setting error.');
			$this->common->locationhref('/'.WT.'_main/iosopen');
			exit;
		}
	}

	/* deviceKey settig */
	public function set_key() {
		$deviceKey = $this->input->get('deviceKey');
		if($deviceKey != '') {
			$data = array();
			$data['deviceKey'] = $deviceKey;
			$this->load->view('/'.WT.'/member/set_key.php', $data);
		}
		else {
			$this->common->alert('key setting error.');
			$this->common->locationhref('/'.WT.'_main/adropen');
			exit;
		}
	}

	//phone-chk
	public function get_phone() {
		$data = array();
		$data['type'] = 'I';
		$data['token'] = trim($this->input->get('token'));
		$data['appVersion'] = trim($this->input->get('appVersion'));
		$data['deviceType'] = trim($this->input->get('deviceType'));
		$data['adid'] = trim($this->input->get('adid'));
		$this->load->view('/'.WT.'/member/get_phone.php', $data);
	}

	//phone-chk auth->deviceKey 있을 경우
	public function auth_getphone() {

        $phoneNumber = trim($this->input->get('phoneNumber'));
		if(substr($phoneNumber, 0, 2) == '82') $phoneNumber = '0'.substr($phoneNumber,2);

		$token = $this->input->get('token');
        $deviceKey = $this->input->get('deviceKey');
        $appVersion = $this->input->get('appVersion');
        $deviceType = $this->input->get('deviceType');
        $adid = $this->input->get('adid');

        $return_url = $this->input->get('return_url'); //NEW PUSH

		$data=array();
		$data['phoneNumber'] = $phoneNumber;
		$data['token'] = $token;
		$data['deviceKey'] = $deviceKey;
		$data['appVersion'] = $appVersion;
		$data['deviceType'] = $deviceType;
		$data['adid'] = $adid;

		$data['return_url'] = $return_url; //NEW PUSH

		$this->_login_process($data);
	}

	/* deviceKey가 없을 경우(insert) */
	public function signup() {

		$phoneNumber = trim($this->input->get('phoneNumber'));

		if($phoneNumber == 'undefined' || $phoneNumber == 'null') {
			$this->common->alert('전화번호 오류 발생['.$phoneNumber.']');
			$this->common->locationhref('/'.WT.'_member/intro');
			exit;
		}

		if(substr($phoneNumber, 0, 2) == '82') $phoneNumber = '0'.substr($phoneNumber,2);

		$token = $this->input->get('token');
        $appVersion = $this->input->get('appVersion');
        $deviceType = $this->input->get('deviceType');
        $adid = $this->input->get('adid');

		//deviceKey 생성
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();

		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$appType = WT_APP_TYPE;
		$memberId = '';
		$phoneNo = $phoneNumber;
	
		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'CharSet' => 'utf-8'
		);
		
		$postURL = WT_API_URL.'/v1/members/login'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );

		//echo '<pre>'; print_r($response); exit;
		if($response['data']['memberId'] != '') {

			//22.02.09 추가(회원 탈퇴상태 복구)
			if($response['data']['memberState'] == '2') {
				$data_updapp = Array(
					'appType' => $appType,
					'memberId' => $memberId,
					'OSType' => 'A',
					'CharSet' => 'utf-8'
				);
				$response_withdrawal = $this->_wow_login_updapp($data_updapp);
			}

			//if($response['data']['memberState'] == '1') {
			$this->load->model(DBNAME.'/wt_member_tb_model');

			$enc_phoneNumber = $this->common->csAesEncryptSSL($phoneNumber, WT_ENC_KEY);
			if($this->wt_member_tb_model->get(array('wm_phone' => $enc_phoneNumber))->isSuccess()) {

				$member = array();
				$member['phoneNumber'] = $phoneNo;
				$member['token'] = $token;
				$member['deviceKey'] = $response['data']['memberId'];
				$member['appVersion'] = $appVersion;
				$member['deviceType'] = $deviceType;
				$member['adid'] = $adid;
				$member['is_setkey'] = true;

				//echo '<pre>'; print_r($member); exit;
				$this->_login_process($member);
			}
			else {
				$wm_id = uniqid('wt_');

				$params = array(
					'wm_id' => $wm_id,
					'wm_name' => $response['data']['memberName'],
					'wm_phone' => $enc_phoneNumber,
					'wm_devicekey' => $response['data']['memberId'],
					'wm_paid' => 'N',
					'wm_is_push' => 'Y',
					'wm_pushkey' => $token,
					'wm_ostype' => 'A',
					'wm_reg_date' => date('Y-m-d H:i:s'),
					'wm_mod_date' => date('Y-m-d H:i:s'),
					'wm_login_date' => date('Y-m-d H:i:s'),
					'wm_level' => '0',
					'wm_stock' => '0',
					'wm_adid' => $adid,
					'wm_version' => str_replace('.', '', $appVersion),
				);

				//안드로이드 인앱 결제 후 삭제
				//$params['wm_paid'] = 'Y';

				if($this->wt_member_tb_model->doInsert($params)->isSuccess()) {

					/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
					$OSType = 'A';
					$deviceId = $OSType.$appType.$appVersion.$phoneNumber;
					$sessionKey = substr($response['data']['memberId'], 0, 8).'_'.date('Ymd').'_'.$deviceType;
					$accessIp = $_SERVER['REMOTE_ADDR'];
					$pushNoticeAgreeFlag = 'N';

					$data_main = Array(
						'appType' => $appType,
						'memberId' => $response['data']['memberId'],
						'phoneNo' => $phoneNo,
						'deviceId' => $deviceId,
						'deviceType' => $deviceType,
						'OSType' => $OSType,
						'appVersion' => $appVersion,
						'pushKey' => $token,
						'pushNoticeAgreeFlag' => $pushNoticeAgreeFlag,
						'accessIp' => $accessIp,
						'sessionKey' => $sessionKey,
						'CharSet' => 'utf-8'
					);		

					$response_main = $this->_wow_login_main($data_main);

					//광고ID 처리(21.09.13추가)
					if($adid != '') {
						$data_ad = Array(
							'appType' => $appType,
							'memberId' => $response['data']['memberId'],
							'advertId' => $adid,
							'osType' => 'A',
							'CharSet' => 'utf-8'
						);		

						$response_ad = $this->_wow_login_ad($data_ad);
					}

					$sess_data = array(
						'user_id' => $wm_id,
						'user_name' => $response['data']['memberName'],
						'user_phone' => $enc_phoneNumber,
						'user_key' => $response['data']['memberId'],
						'user_state' => $response['data']['memberState'],
						'user_appver' => $appVersion,
						'user_dtype' => $deviceType,
						'user_token' => $token,
						'user_adid' => $adid,
						'user_push' => 'Y',
						'user_level' => '0',
						'user_ostype' => 'A',
					);

					//안드로이드 인앱 결제 후 삭제
					//$sess_data['is_paid'] = true;

					$this->set_session($sess_data);
					$this->common->write_login_log($wm_id);
					$this->common->locationhref('/'.WT.'_member/set_key?deviceKey='.$response['data']['memberId']);
					exit;
				} 
				else {
					$this->common->alert('회원 가입에 실패했습니다[1].');
					$this->common->locationhref('/'.WT.'_main/adropen');
					exit;
				}
			}
			//}
			/*
			else if($response['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[2].');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			else {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			*/
		}
		else {
            $this->common->alert('회원 가입에 실패했습니다[0].');
			$this->common->locationhref('/'.WT.'_main/adropen');
			exit;
		}
	}

	private function _ios_getphone($uuid) {
	
		$this->load->model(DBNAME.'/wt_member_tb_model');

		$params = array();
		$params['=']['wm_devicekey'] = $uuid;
		$extra = array(
			'fields' => array('wm_phone'),
			'slavedb' => true
		);

		$data = array_shift($this->wt_member_tb_model->getList($params, $extra)->getData());
		$phoneNumber = $this->common->csAesDecryptSSL($data['wm_phone'], WT_ENC_KEY);

		return $phoneNumber;
	}

	private function _ios_login_process($data=array()) 
	{
		$is_setkey = false;
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		
		$appType = WT_APP_TYPE;
		
		$memberId =  $data['deviceKey'];
		$phoneNo = $data['phoneNumber'];

		if($phoneNo == '') $phoneNo = $this->_ios_getphone($memberId);
		//21.12.27 추가
		if($phoneNo == '') {
			$data['is_html'] = true;
			$this->_view('/member/ios_intro', $data);
			return;
		}
		
		$token = $data['token'];
		$appVersion = $data['appVersion'];
		$deviceType = $data['deviceType'];
		$adid = $data['adid'];
		$return_url = $data['return_url'];
		$is_setkey =  $data['is_setkey'];

		if($return_url=='') $return_url = '/'.WT.'_main';

		//echo '<pre>'; print_r($data); 
		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'CharSet' => 'utf-8'
		);		
	
		/* 회원정보 조회(로그인용 - 인증) */
		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/login'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		//echo '<pre>'; print_r($response); exit;
		
		//22.02.08 추가
		if($response['data']['memberIdState'] == '1') {
			$data['is_html'] = true;
			$this->_view('/member/ios_intro', $data);
			return;
		}

		//22.02.09 추가(회원 탈퇴상태 복구)
		if($response['data']['memberState'] == '2') {
			$data_updapp = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'OSType' => 'I',
				'CharSet' => 'utf-8'
			);
			$response_withdrawal = $this->_wow_login_updapp($data_updapp);
		}

		//usleep(500000);
		/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
		$OSType = 'I';
		$deviceId = $OSType.$appType.$appVersion.$phoneNo;
		$sessionKey = substr($memberId, 0, 8).'_'.date('Ymd').'_'.$deviceType;
		$accessIp = $_SERVER['REMOTE_ADDR'];
		//$pushNoticeAgreeFlag = 'Y';
		$pushNoticeAgreeFlag = $this->_getNotice($phoneNo);

		$data_main = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'deviceId' => $deviceId,
			'deviceType' => $deviceType,
			'OSType' => $OSType,
			'appVersion' => $appVersion,
			'pushKey' => $token,
			'pushNoticeAgreeFlag' => $pushNoticeAgreeFlag,
			'accessIp' => $accessIp,
			'sessionKey' => $sessionKey,
			'CharSet' => 'utf-8'
		);		

		$response_main = $this->_wow_login_main($data_main);
		//echo '<pre>'; print_r($data_main); exit;

		
		$data_pay = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'CharSet' => 'utf-8'
		);		
		
		$response_info = $this->_wow_login_pay($data_pay);

		for($i=0;$i<10;$i++) {
			if(isset($response_info['resultCode']) && $response_info['resultCode'] == '0') break;
			$response_info = $this->_wow_login_pay($data_pay);
		}

		//광고ID 처리(21.09.13추가)
		//아이폰용
		if($adid != '') {
			$data_ad = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'idfv' => $adid,
				'osType' => 'I',
				'CharSet' => 'utf-8'
			);		
			$response_ad = $this->_wow_login_ad($data_ad);
		}

		if(is_array($response['data']) && is_array($response_info['data'])) {

			//if($response['data']['memberState'] == '1') {
			if($response_info['data']['blockType'] != '2') {
				$this->load->model(DBNAME.'/wt_member_tb_model');

				//21.12/24 핸드폰>디바이스키로 변경
				$enc_phoneNo = $this->common->csAesEncryptSSL($phoneNo, WT_ENC_KEY);
				//if($this->wt_member_tb_model->get(array('wm_phone' => $enc_phoneNo))->isSuccess()) {
				if($this->wt_member_tb_model->get(array('wm_devicekey' => $response['data']['memberId']))->isSuccess()) {
					$dbrow = $this->wt_member_tb_model->getData();
					//echo '<pre>'; print_r($dbrow); exit;
					$update_params = array(
						'wm_adid' => $adid,
						'wm_ostype' => $OSType,
						'wm_version' => str_replace('.', '', $appVersion),
						'wm_login_date' => date('Y-m-d H:i:s'),
					);

					$mod=0;
					//핸드폰 체크
					if($dbrow['wm_phone'] == '') {
						$update_params['wm_phone'] = $enc_phoneNo;
						$mod++;
					}

					//필명 체크
					if($dbrow['wm_name'] != $response_info['data']['memberName']) {
						$update_params['wm_name'] = $response_info['data']['memberName'];
						$dbrow['wm_memo'] .= "\n".'필명 변경 '.$dbrow['wm_name'].'=>'.$response['data']['memberName'].'['.date('Y-m-d H:i:s').']';
						$mod++;
					}
					
					$is_update = false;
					//deviceKey 체크
					if($dbrow['wm_devicekey'] != $response['data']['memberId']) {
						$update_params['wm_devicekey'] = $response['data']['memberId'];
						$dbrow['wm_memo'] .= "\n".'devicekey 변경 '.$dbrow['wm_devicekey'].'=>'.$response['data']['memberId'].'['.date('Y-m-d H:i:s').']';
						$is_update = true;
						$mod++;
					}

					//token 체크
					if($dbrow['wm_pushkey'] != $token && $token != '' && $token != 'undefined') {
						$update_params['wm_pushkey'] = $token;
						$dbrow['wm_memo'] .= "\n".'token 변경 ['.$token.']['.date('Y-m-d H:i:s').']';
						$mod++;
					}

					//유료회원체크
					$is_paid = false;
					$purchaseYmd = '';
					$maxExpireYmd = '';
					foreach($response_info['data']['list'] as $pay) {
						if($pay['categoryId'] == 'AAAAAAAAJ' && $pay['categoryName'] == '미국주식창' && $pay['maxExpireYmd'] >= date('Ymd')) {
							$update_params['wm_paid'] = 'Y';
							$purchaseYmd = $pay['purchaseYmd'];
							$maxExpireYmd = $pay['maxExpireYmd'];
							$is_paid = true;
							break;
						}
					}

					//아이폰 인앱 결제 후 삭제(주석제거)
					/**/
					if($is_paid === false) {
						if($dbrow['wm_level'] == '9') {
							$is_paid = true;
						}
						else {
							if($dbrow['wm_paid'] == 'Y') {
								$update_params['wm_paid'] = 'N';
								$dbrow['wm_memo'] .= "\n".'무료회원전환['.date('Y-m-d H:i:s').']';
								$mod++;
							}
						}
					}
					/**/

					//정보수정일
					if($mod>0) {
						$update_params['wm_mod_date'] = date('Y-m-d H:i:s');
						$update_params['wm_memo'] = $dbrow['wm_memo'];
					}

					if($this->wt_member_tb_model->doUpdate($dbrow['wm_id'] , $update_params)->isSuccess()) {

						//아이폰 인앱 결제 후 삭제
						//$is_paid = true;

						$sess_data = array(
							'is_paid' => $is_paid, 
							'user_id' => $dbrow['wm_id'],
							'user_name' => $dbrow['wm_name'],
							'user_phone' => $enc_phoneNo,
							'user_key' => $memberId,
							'user_push' => $dbrow['wm_is_push'],
							'user_startday' => $purchaseYmd,
							'user_endday' => $maxExpireYmd,
							'user_state' => $response_info['data']['memberState'],
							'user_level' => $dbrow['wm_level'],
							'user_stock' => $dbrow['wm_stock'],
							'user_appver' => $appVersion,
							'user_dtype' => $deviceType,
							'user_token' => $token,
							'user_adid' => $adid,
							'user_ostype' => $OSType,
						);

						$this->set_session($sess_data);
						$this->common->write_login_log($dbrow['wm_id']);

						if($response['data']['memberIdState'] == '3' || $is_update === true || $is_setkey === true) {
							$this->common->locationhref('/'.WT.'_member/ios_set_key?deviceKey='.$response['data']['memberId']);
							return;
						}
						else {
							$this->common->locationhref($return_url);
							return;
						}
					}
					else {
						$this->common->alert('로그인에 실패했습니다[1].');
						$this->common->locationhref('/'.WT.'_main/iosopen');
						return;
					}
				}
				else {
					$wm_id = uniqid('wt_');
					$params = array(
						'wm_id' => $wm_id,
						'wm_name' => $response['data']['memberName'],
						'wm_phone' => $enc_phoneNo,
						'wm_devicekey' => $response['data']['memberId'],
						'wm_paid' => 'N',
						'wm_is_push' => 'Y',
						'wm_pushkey' => $token,
						'wm_ostype' => $OSType,
						'wm_reg_date' => date('Y-m-d H:i:s'),
						'wm_mod_date' => date('Y-m-d H:i:s'),
						'wm_login_date' => date('Y-m-d H:i:s'),
						'wm_level' => '0',
						'wm_stock' => '0',
						'wm_adid' => $adid,
						'wm_version' => str_replace('.', '', $appVersion),
					);

					//아이폰 인앱 결제 후 삭제
					//$params['wm_paid'] = 'Y';

					if($this->wt_member_tb_model->doInsert($params)->isSuccess()) {

						$sess_data = array(
							'user_id' => $wm_id,
							'user_name' => $response['data']['memberName'],
							'user_phone' => $enc_phoneNo,
							'user_key' => $response['data']['memberId'],
							'user_state' => $response['data']['memberState'],
							'user_appver' => $appVersion,
							'user_dtype' => $deviceType,
							'user_token' => $token,
							'user_adid' => $adid,
							'user_ostype' => $OSType,
							'user_push' => 'Y',
							'user_level' => '0',
						);
						//아이폰 인앱 결제 후 삭제
						//$sess_data['is_paid'] = true;

						$this->set_session($sess_data);
						$this->common->write_login_log($wm_id);
						$this->common->locationhref('/'.WT.'_member/ios_set_key?deviceKey='.$response['data']['memberId']);
						return;
					} 
					else {
						$this->common->alert('로그인에 실패했습니다[0].');
						$this->common->locationhref('/'.WT.'_main/iosopen');
						return;
					}
				}
			}
			else {
				$this->common->alert('차단된 회원입니다.['.$response_info['data']['blockType'].']');
				$this->common->locationhref('/'.WT.'_main/iosopen');
				return;
			}
			
			/*
			}
			else if($response['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[1].');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			*/
		}
		else {
			/*
			if($response_info['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[0].');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else if($response_info['data']['memberState'] == '3') {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else {
				//$this->common->alert('로그인 중입니다...');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			*/
			$this->common->locationhref('/'.WT.'_main/iosopen');
			return;
		}
	}

	/* 문자발송 21.11.16 추가 */
	private function _send_sms($data=array()) {
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/sms/send'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		return $response;
	}


	public function check_authno() {
        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/');
			exit;
		}

		$auth_no = $this->input->get('no');

		if(isset($auth_no) && $auth_no) {

			if($auth_no == $this->session->userdata('auth_no')) {
				$success = TRUE;
				$result = array('success' => $success, 'msg' => '휴대폰 번호를 인증하였습니다.');
				exit(json_encode($result));
			}
			else {
				$error = TRUE;
				$result = array('error' => $error, 'msg' => '휴대폰 인증코드가 일치하지 않습니다.');
				exit(json_encode($result));
			}
		}
		else {
			$error = TRUE;
			$result = array('error' => $error, 'msg' => '인증번호가 입력되지 않았습니다.');
			exit(json_encode($result));
		}

	}

	public function send_authno() {

        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/');
			exit;
		}

		$phone_no = $this->input->get('no');
		
		//if($phone_no == '') $phone_no = '010-7612-1487';
		
		if(isset($phone_no) && $phone_no) {
			$data = array();
			$data['phoneNo']= str_replace('-', '', $phone_no); 
			$data['senderPhoneNo']= '0262252300'; 
			$auth_no = str_pad(mt_rand(0,9999),4,'0');
			$data['sendContent'] = '인증번호 ['.$auth_no.']를 입력해 주세요';
			$data['sendType'] = '1';
			$data['cpId'] = '53';

			$result = $this->_send_sms($data);	

			$this->output->set_content_type('application/json');
			
			if($result['resultCode'] == '0') {
				$success = TRUE;
				$result = array('success' => $success);
				$this->session->set_userdata('auth_no', $auth_no);
				exit(json_encode($result));
			}
			else {
				$error = TRUE;
				$result = array('error' => $error, 'msg' => '문자전송이 실패했습니다.');
				exit(json_encode($result));
			}
		}
		else {
			$error = TRUE;
			$result = array('error' => $error, 'msg' => '핸드폰 번호가 잘못 입력되었습니다.');
			exit(json_encode($result));
		}
	}

	/* deviceKey가 없을 경우(insert) */
	public function ios_signup() {

		$phoneNumber = trim($this->input->get('phoneNumber'));

		if($phoneNumber == 'undefined' || $phoneNumber == 'null') {
			$this->common->alert('전화번호 오류 발생['.$phoneNumber.']');
			$this->common->locationhref('/'.WT.'_main/iosopen');
			exit;
		}

		if(substr($phoneNumber, 0, 2) == '82') $phoneNumber = '0'.substr($phoneNumber,2);

		$token = $this->input->get('token');
        $appVersion = $this->input->get('appVersion');
        $deviceType = $this->input->get('deviceType');
        $adid = $this->input->get('adid');
        //$deviceKey = $this->input->get('deviceKey');

		//deviceKey 생성
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();

		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$appType = WT_APP_TYPE;
		$memberId = '';
		
		//if($deviceKey != '') $memberId = $deviceKey;

		$phoneNo = $phoneNumber;
		$OSType = 'I';

		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'CharSet' => 'utf-8'
		);
		
		$postURL = WT_API_URL.'/v1/members/login'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );

		//echo '<pre>'; print_r($response); exit;
		if($response['data']['memberId'] != '') {

			//22.02.09 추가(회원 탈퇴상태 복구)
			if($response['data']['memberState'] == '2') {
				$data_updapp = Array(
					'appType' => $appType,
					'memberId' => $memberId,
					'OSType' => $OSType,
					'CharSet' => 'utf-8'
				);
				$response_withdrawal = $this->_wow_login_updapp($data_updapp);
			}

			//if($response['data']['memberState'] == '1') {
			$this->load->model(DBNAME.'/wt_member_tb_model');
			
			//21.12/24 핸드폰>디바이스키로 변경
			$enc_phoneNumber = $this->common->csAesEncryptSSL($phoneNumber, WT_ENC_KEY);
			//if($this->wt_member_tb_model->get(array('wm_phone' => $enc_phoneNumber))->isSuccess()) {
			if($this->wt_member_tb_model->get(array('wm_devicekey' => $response['data']['memberId']))->isSuccess()) {

				$member = array();
				$member['phoneNumber'] = $phoneNo;
				$member['token'] = $token;
				$member['deviceKey'] = $response['data']['memberId'];
				$member['appVersion'] = $appVersion;
				$member['deviceType'] = $deviceType;
				$member['adid'] = $adid;
				$member['is_setkey'] = true;

				//echo '<pre>'; print_r($member); exit;
				$this->_ios_login_process($member);
			}
			else {
				$wm_id = uniqid('wt_');

				$params = array(
					'wm_id' => $wm_id,
					'wm_name' => $response['data']['memberName'],
					'wm_phone' => $enc_phoneNumber,
					'wm_devicekey' => $response['data']['memberId'],
					'wm_paid' => 'N',
					'wm_is_push' => 'Y',
					'wm_pushkey' => $token,
					'wm_ostype' => $OSType,
					'wm_reg_date' => date('Y-m-d H:i:s'),
					'wm_mod_date' => date('Y-m-d H:i:s'),
					'wm_login_date' => date('Y-m-d H:i:s'),
					'wm_level' => '0',
					'wm_stock' => '0',
					'wm_adid' => $adid,
					'wm_version' => str_replace('.', '', $appVersion),
				);

				//아이폰 인앱 결제 후 삭제
				//$params['wm_paid'] = 'Y';

				if($this->wt_member_tb_model->doInsert($params)->isSuccess()) {

					/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
					$deviceId = $OSType.$appType.$appVersion.$phoneNumber;
					$sessionKey = substr($response['data']['memberId'], 0, 8).'_'.date('Ymd').'_'.$deviceType;
					$accessIp = $_SERVER['REMOTE_ADDR'];
					$pushNoticeAgreeFlag = 'N';

					$data_main = Array(
						'appType' => $appType,
						'memberId' => $response['data']['memberId'],
						'phoneNo' => $phoneNo,
						'deviceId' => $deviceId,
						'deviceType' => $deviceType,
						'OSType' => $OSType,
						'appVersion' => $appVersion,
						'pushKey' => $token,
						'pushNoticeAgreeFlag' => $pushNoticeAgreeFlag,
						'accessIp' => $accessIp,
						'sessionKey' => $sessionKey,
						'CharSet' => 'utf-8'
					);		

					$response_main = $this->_wow_login_main($data_main);

					//광고ID 처리(21.09.13추가)
					//아이폰용
					if($adid != '') {
						$data_ad = Array(
							'appType' => $appType,
							'memberId' => $response['data']['memberId'],
							'idfv' => $adid,
							'osType' => 'I',
							'CharSet' => 'utf-8'
						);		

						$response_ad = $this->_wow_login_ad($data_ad);
					}

					$sess_data = array(
						'user_id' => $wm_id,
						'user_name' => $response['data']['memberName'],
						'user_phone' => $enc_phoneNumber,
						'user_key' => $response['data']['memberId'],
						'user_state' => $response['data']['memberState'],
						'user_appver' => $appVersion,
						'user_dtype' => $deviceType,
						'user_token' => $token,
						'user_adid' => $adid,
						'user_push' => 'Y',
						'user_level' => '0',
						'user_ostype' => $OSType,
					);

					//아이폰 인앱 결제 후 삭제
					//$sess_data['is_paid'] = true;

					$this->set_session($sess_data);
					$this->common->write_login_log($wm_id);
					$this->common->locationhref('/'.WT.'_member/ios_set_key?deviceKey='.$response['data']['memberId']);
					exit;
				} 
				else {
					$this->common->alert('회원 가입에 실패했습니다[1].');
					$this->common->locationhref('/'.WT.'_main/iosopen');
					exit;
				}
			}
			//}
			/*
			else if($response['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[2].');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			else {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			*/
		}
		else {
            $this->common->alert('회원 가입에 실패했습니다[0].');
			$this->common->locationhref('/'.WT.'_main/iosopen');
			exit;
		}
	}

	public function ios_auth() {

        $token = $this->input->get('token');
        $deviceKey = $this->input->get('deviceKey');
        $appVersion = $this->input->get('appVersion');
		
		$typeAd = $this->input->get('deviceType');
		$arrTypeAd = explode('|', $typeAd);
		$deviceType = $arrTypeAd[0];
        $adid = $arrTypeAd[1];
		$return_url = $this->input->get('return_url'); //NEW PUSH

		/* deviceKey 초기화
		$this->session->sess_destroy();
		echo '<a href="/'.WT.'_member/initKey">초기화</a>';
		exit;
		*/
		$data=array();
		//phone-chk $data['phoneNumber'] = $phoneNumber;
		$data['token'] = $token;
		$data['deviceKey'] = $deviceKey;
		$data['appVersion'] = $appVersion;
		$data['deviceType'] = $deviceType;
		$data['adid'] = $adid;

		$data['return_url'] = $return_url; //NEW PUSH
		//echo '<pre>'; print_r($data); exit;
		//phone-chk if($deviceKey == '' || $deviceKey == 'null' || $phoneNumber == 'undefined' || $phoneNumber == 'null') {
		if($deviceKey == '' || $deviceKey == 'null') {
			$data['is_html'] = true;
			$this->_view('/member/ios_intro', $data);
		}
		else {
			/*
			$data['type'] = 'U';
			$this->load->view('/'.WT.'/member/get_phone.php', $data);
			*/

			$this->_ios_login_process($data);
		}
	}

	public function auth()
	{
        //phone-chk $phoneNumber = trim($this->input->get('phoneNumber'));
		//phone-chk if(substr($phoneNumber, 0, 2) == '82') $phoneNumber = '0'.substr($phoneNumber,2);

        $token = $this->input->get('token');
        $deviceKey = $this->input->get('deviceKey');
        $appVersion = $this->input->get('appVersion');
		
		$typeAd = $this->input->get('deviceType');
		$arrTypeAd = explode('|', $typeAd);
		$deviceType = $arrTypeAd[0];
        $adid = $arrTypeAd[1];

		$return_url = $this->input->get('return_url'); //NEW PUSH

		/* deviceKey 초기화
		$this->session->sess_destroy();
		echo '<a href="/'.WT.'_member/initKey">초기화</a>';
		exit;
		*/
		$data=array();
		//phone-chk $data['phoneNumber'] = $phoneNumber;
		$data['token'] = $token;
		$data['deviceKey'] = $deviceKey;
		$data['appVersion'] = $appVersion;
		$data['deviceType'] = $deviceType;
		$data['adid'] = $adid;

		$data['return_url'] = $return_url; //NEW PUSH

		//echo '<pre>'; print_r($data); exit;
		//phone-chk if($deviceKey == '' || $deviceKey == 'null' || $phoneNumber == 'undefined' || $phoneNumber == 'null') {
		if($deviceKey == '' || $deviceKey == 'null') {
			$data['is_html'] = true;
			$this->_view('/member/intro', $data);
			//$this->common->locationhref('/'.WT.'_main/adropen');
			//exit;
		}
		else {
			//echo '======='; exit;
			$data['type'] = 'U';
			$this->load->view('/'.WT.'/member/get_phone.php', $data);

			//phone-chk $this->_login_process($data);
		}
	}

	/* 정보 수정 처리 member view - info, withdrawal */
	public function update_info()
	{
		$this->loginCheck();

		$data=array();
		$data['phoneNumber'] = $this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY);
		$data['token'] = $this->session->userdata('user_token');
		$data['deviceKey'] = $this->session->userdata('user_key');

		$data['appVersion'] = $this->session->userdata('user_appver');
		$data['deviceType'] = $this->session->userdata('user_dtype');
		$data['adid'] = $this->session->userdata('user_adid');

		$data['return_url'] = '/'.WT.'_member/info';

		//echo '<pre>'; print_r($data); exit;

		$this->_login_process($data);
	}

	/* 마이크로 TIME 가져오기 21.08.26 추가 */
	private function _get_microtime() {
		$t = microtime(true);
		$micro = sprintf("%06d",($t - floor($t)) * 1000000);
		$d = new DateTime( date('Y-m-d H:i:s.'.$micro, $t) );
		return $d->format("YmdHisu");
	}

	public function wow_api() {
		//https://www.wowtv.co.kr/Broad/ProgramMain/Index?menuSeq=644&programCode=P3268&broadWatchNumber=128471
		//http://godlife.ivyro.net/wowtv/stock/research_video_view.html
		$url = 'https://provide.wowtv.co.kr/api/Vod';
		$data = '{"programID": "P3268", "page": "1", "pageSize": "15"}';

		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json'));
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');

		curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
		$response  = curl_exec($ch);
		curl_close($ch);

		$response = json_decode( $response, true );
		echo '<pre>'; print_r($response); 
		exit;
	}

	/* 회원정보 변경(광고 ID) 21.09.07 추가 */
	private function _wow_login_ad($data=array()) {
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$movepage = ($data['osType'] == 'A') ? 'updadvertid':'updidfv';
		$postURL = WT_API_URL.'/v1/members/'.$movepage; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		return $response;
	}
	
	/* 회원 탈퇴상태 복구 22.02.09 추가 */
	private function _wow_login_updapp($data=array()) {
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;

		$postURL = WT_API_URL.'/v1/members/updappwithdrawal'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		return $response;
	}

	/* 회원정보 조회(로그인용 - 유료정보) 21.07.21 추가 */
	private function _wow_login_pay($data=array()) {
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/getpayinfo'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		return $response;
	}

	/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
	private function _wow_login_main($data=array()) {
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/login/main'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		return $response;
	}

	/* 푸시 정보 가져오기 */
	private function _getNotice($phoneNo) {
		$push_info = 'N';
		if($phoneNo=='') return $push_info;

		$this->load->model(DBNAME.'/wt_member_tb_model');

		$params = array();

		$enc_phoneNo = $this->common->csAesEncryptSSL($phoneNo, WT_ENC_KEY);
		$params['=']['wm_phone'] = $enc_phoneNo;
		$extra = array(
			'fields' => array('wm_is_push'),
			'slavedb' => true
		);

		$push_info = array_shift($this->wt_member_tb_model->getList($params, $extra)->getData());
		if($push_info['wm_is_push'] == 'Y') $push_info = 'Y';

		return $push_info;
	}

	public function pay() 
	{
		$memberId = $this->input->post('devk');
		//$memberId = 'b6e26768-fe35-4400-ab6b-aa9ccc513cb7';
		if($memberId != '') {
			//유료정보 확인
			$appType = WT_APP_TYPE;

			$data = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'CharSet' => 'utf-8'
			);		

			$response_info = $this->_wow_login_pay($data);

			for($i=0;$i<10;$i++) {
				if(isset($response_info['resultCode']) && $response_info['resultCode'] == '0') break;
				$response_info = $this->_wow_login_pay($data);
			}

			if(is_array($response_info['data']['list']) && sizeof($response_info['data']['list'])>0) {
				$is_paid = false;
				foreach($response_info['data']['list'] as $pay) {
					if($pay['categoryId'] == 'AAAAAAAAJ' && $pay['categoryName'] == '미국주식창' && $pay['maxExpireYmd'] >= date('Ymd')) {
						$update_params['wm_paid'] = 'Y';
						$is_paid = true;
					}
				}

				if($is_paid === true) {
					$this->load->model(DBNAME.'/wt_member_tb_model');

					if($this->wt_member_tb_model->get(array('wm_devicekey' => $memberId))->isSuccess()) {
						$dbrow = $this->wt_member_tb_model->getData();
				
						$dbrow['wm_memo'] .= "\n".'유료결제 ['.date('Y-m-d H:i:s').']';

						$update_params['wm_mod_date'] = date('Y-m-d H:i:s');
						$update_params['wm_paid'] = 'Y';
						$update_params['wm_memo'] = $dbrow['wm_memo'];

						if($this->wt_member_tb_model->doUpdate($dbrow['wm_id'] , $update_params)->isSuccess()) {
							$this->session->set_userdata('is_paid', TRUE);
						}
					}
				}
			}
			else {
				$this->load->model(DBNAME.'/wt_member_tb_model');

				if($this->wt_member_tb_model->get(array('wm_devicekey' => $memberId))->isSuccess()) {
					$dbrow = $this->wt_member_tb_model->getData();
			
					$dbrow['wm_memo'] .= "\n".'유료결제E ['.date('Y-m-d H:i:s').']';

					$update_params['wm_mod_date'] = date('Y-m-d H:i:s');
					$update_params['wm_paid'] = 'Y';
					$update_params['wm_memo'] = $dbrow['wm_memo'];

					if($this->wt_member_tb_model->doUpdate($dbrow['wm_id'] , $update_params)->isSuccess()) {
						$this->session->set_userdata('is_paid', TRUE);
					}
				}			
			}
		}

		$this->common->locationhref('/'.WT.'_main');
		exit;

/*			
			$app_id = WT_APP_ID;
			$app_key = WT_APP_KEY;
			$appType = WT_APP_TYPE;

			$data = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'CharSet' => 'utf-8'
			);		

			$timestamp = strtotime(date('YmdHis'));
			$nonce = date('YmdHis');
			$RequestString = $app_id.'POST'.$timestamp.$nonce;
			$binaryKey = base64_decode($app_key);
			$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
			$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
			
			$postURL = WT_API_URL.'/v1/members/getpayinfo'; 
			$response_info = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
			$response_info = json_decode( $response_info, true );

			//echo '<pre>'; print_r($response_info); exit;
*/
/*
Array
(
    [resultCode] => 0
    [data] => Array
        (
            [memberName] => SW219157821
            [phoneNo] => 01076121487
            [memberState] => 1
            [blockType] => 0
            [blockEndYmd] => 
            [blockReason] => good guy
            [deviceId] => A151.0.001076121487
            [deviceType] => 1
            [OSType] => A
            [appVersion] => 1.0.0
            [pushKey] => eC9ZAHtsQWWW8SzcZMFqcT:APA91bGaob4AkBww_CWiqJCA7_Ev-uDIY5KA3OzRPv7lRl3tOAbYzVdQA_KcPfXzDgNd2ZjXyOufo-eUN654JoCkVzBtXCf5BtS6iFPK1gXDq2BbDUH6eSbE3wGeZYEDfp_9JwZ5PNTa
            [pushNoticeAgreeFlag] => Y
            [accessIp] => 58.233.13.108
            [sessionKey] => b6e26768_20210804_1
            [memberNameUpdCnt] => 0
            [list] => Array
                (
                )

        )

)
memberState	String	1	회원 상태	1:정상, 2:탈퇴, 3:휴면
blockType	String	1	차단 유형	1:전체, 2:앱 차단, 3:채팅방 차단, 4:구매 제한
*/
/*
			if($response_info['data']['memberState'] == '1' && $response_info['data']['blockType'] == '0') {
				$this->load->model(DBNAME.'/wt_member_tb_model');

				$enc_phoneNo = $this->common->csAesEncryptSSL($phoneNo, WT_ENC_KEY);
				if($this->wt_member_tb_model->get(array('wm_phone' => $enc_phoneNo))->isSuccess()) {
					$dbrow = $this->wt_member_tb_model->getData();
					//echo '<pre>'; print_r($dbrow); exit;
					$update_params = array(
						'wm_login_date' => date('Y-m-d H:i:s'),
					);

					$mod=0;
					//필명 체크
					if($dbrow['wm_name'] != $response_info['data']['memberName']) {
						$update_params['wm_name'] = $response_info['data']['memberName'];
						$dbrow['wm_memo'] .= "\n".'필명 변경 '.$dbrow['wm_name'].'=>'.$response['data']['memberName'].'['.date('Y-m-d H:i:s').']';
						$mod++;
					}
					
					$is_update = false;
					//deviceKey 체크
					if($dbrow['wm_devicekey'] != $response['data']['memberId']) {
						$update_params['wm_devicekey'] = $response['data']['memberId'];
						$dbrow['wm_memo'] .= "\n".'devicekey 변경 '.$dbrow['wm_devicekey'].'=>'.$response['data']['memberId'].'['.date('Y-m-d H:i:s').']';
						$is_update = true;
						$mod++;
					}

					//token 체크
					if($dbrow['wm_pushkey'] != $token && $token != '' && $token != 'undefined') {
						$update_params['wm_pushkey'] = $token;
						$dbrow['wm_memo'] .= "\n".'token 변경 ['.$token.']['.date('Y-m-d H:i:s').']';
						$mod++;
					}

					//유료회원체크
					if($response_info['data']['list']['categoryId'] != '' && $response_info['data']['list']['maxExpireYmd'] >= date('Ymd')) {
						$update_params['wm_paid'] = 'Y';
						$is_paid = true;
					}
					else {
						*
						if($dbrow['wm_paid'] == 'Y') {
							$update_params['wm_paid'] = 'N';
						}
						*
						$is_paid = false;

						if($dbrow['wm_paid'] == 'Y') {
							$is_paid = true;
						}
					}

					//정보수정일
					if($mod>0) {
						$update_params['wm_mod_date'] = date('Y-m-d H:i:s');
						$update_params['wm_memo'] = $dbrow['wm_memo'];
					}

					if($this->wt_member_tb_model->doUpdate($dbrow['wm_id'] , $update_params)->isSuccess()) {
					
						$sess_data = array(
							'is_paid' => $is_paid, 
							'user_id' => $dbrow['wm_id'],
							'user_name' => $dbrow['wm_name'],
							'user_phone' => $enc_phoneNo,
							'user_key' => $memberId,
							'user_push' => $dbrow['wm_is_push'],
							'user_startday' => $response_info['data']['list']['purchaseYmd'],
							'user_endday' => $response_info['data']['list']['maxExpireYmd'],
							'user_state' => $response_info['data']['memberState'],
							'user_level' => $dbrow['wm_level'],
							'user_stock' => $dbrow['wm_stock'],
							//'user_appversion' => $appVersion,
							//'user_devicetype' => $deviceType,
						);

						$this->set_session($sess_data);
						$this->common->write_login_log($dbrow['wm_id']);

						if($response['data']['memberIdState'] == '3' || $is_update === true || $is_setkey === true) {
							$this->common->locationhref('/'.WT.'_member/set_key?deviceKey='.$response['data']['memberId']);
							exit;
						}
						else {
							$this->common->locationhref($return_url);
							exit;
						}
					}
					else {
						$this->common->alert('로그인에 실패했습니다[1].');
						$this->common->locationhref('/'.WT.'_main/adropen');
						exit;
					}
				}
			}



Array
(
    [resultCode] => 0
    [data] => Array
        (
            [memberName] => 주식창이차장
            [phoneNo] => 01074721311
            [memberState] => 1
            [blockType] => 0
            [blockEndYmd] => 
            [blockReason] => good guy
            [deviceId] => A151.0.001074721311
            [deviceType] => 1
            [OSType] => A
            [appVersion] => 1.0.0
            [pushKey] => fs7u4qkNTMyb4yd5vtFf7m:APA91bGQYMcSDB6AhltymkNHcvtubuP66OO1nIXdBfgvhnHY4hxo5VsqddixM5WId-Ks46ZSZMndI8COQdTw8DaZrHPIha-vcm8dRmziuPQIdXVb70_rL_qvmcXxI5-kIkkjHIAVBPUc
            [pushNoticeAgreeFlag] => Y
            [accessIp] => 223.62.188.214
            [sessionKey] => 2f1041d1_20210819_1
            [memberNameUpdCnt] => 1
            [list] => Array
                (
                    [0] => Array
                        (
                            [categoryId] => AAAAAAAAB
                            [categoryName] => 종목알파고
                            [purchaseYmd] => 20210113
                            [maxExpireYmd] => 20220113
                            [remainCnt] => 146
                        )

                    [1] => Array
                        (
                            [categoryId] => AAAAAAAAD
                            [categoryName] => 주식비타민
                            [purchaseYmd] => 20201028
                            [maxExpireYmd] => 20211028
                            [remainCnt] => 69
                        )

                    [2] => Array
                        (
                            [categoryId] => AAAAAAAAJ
                            [categoryName] => 미국주식창
                            [purchaseYmd] => 20210802
                            [maxExpireYmd] => 20220902
                            [remainCnt] => 378
                        )

                    [3] => Array
                        (
                            [categoryId] => AAAAABAAD
                            [categoryName] => 강동진트레이딩룸
                            [purchaseYmd] => 20201214
                            [maxExpireYmd] => 20211214
                            [remainCnt] => 116
                        )

                    [4] => Array
                        (
                            [categoryId] => AAAAABAAE
                            [categoryName] => 강동진특종Q
                            [purchaseYmd] => 20210223
                            [maxExpireYmd] => 20220223
                            [remainCnt] => 187
                        )

                    [5] => Array
                        (
                            [categoryId] => AAAAADAAD
                            [categoryName] => 구본영
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [6] => Array
                        (
                            [categoryId] => AAAAAGAAA
                            [categoryName] => 김수환
                            [purchaseYmd] => 20210805
                            [maxExpireYmd] => 20220805
                            [remainCnt] => 350
                        )

                    [7] => Array
                        (
                            [categoryId] => AAAAAGAAC
                            [categoryName] => 김수환종목쓰리고
                            [purchaseYmd] => 20201103
                            [maxExpireYmd] => 20221109
                            [remainCnt] => 446
                        )

                    [8] => Array
                        (
                            [categoryId] => AAAAAHAAC
                            [categoryName] => 김우식
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [9] => Array
                        (
                            [categoryId] => AAAAAHAAE
                            [categoryName] => 김우식수익리포트
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [10] => Array
                        (
                            [categoryId] => AAAAAJAAG
                            [categoryName] => 김종철증권알파고
                            [purchaseYmd] => 20201214
                            [maxExpireYmd] => 20211214
                            [remainCnt] => 116
                        )

                    [11] => Array
                        (
                            [categoryId] => AAAAANAAA
                            [categoryName] => 김한상
                            [purchaseYmd] => 20210811
                            [maxExpireYmd] => 20220811
                            [remainCnt] => 356
                        )

                    [12] => Array
                        (
                            [categoryId] => AAAAAOAAC
                            [categoryName] => 박영호수급왕
                            [purchaseYmd] => 20210216
                            [maxExpireYmd] => 20220216
                            [remainCnt] => 180
                        )

                    [13] => Array
                        (
                            [categoryId] => AAAAAOAAD
                            [categoryName] => 박영호수급플러스
                            [purchaseYmd] => 20210216
                            [maxExpireYmd] => 20220216
                            [remainCnt] => 180
                        )

                    [14] => Array
                        (
                            [categoryId] => AAAAAUAAB
                            [categoryName] => 윤유석
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [15] => Array
                        (
                            [categoryId] => AAAAAXAAE
                            [categoryName] => 이헌상불타는주식
                            [purchaseYmd] => 20210331
                            [maxExpireYmd] => 20220331
                            [remainCnt] => 223
                        )

                    [16] => Array
                        (
                            [categoryId] => AAAAAXAAF
                            [categoryName] => 이헌상수급박스
                            [purchaseYmd] => 20200911
                            [maxExpireYmd] => 20220911
                            [remainCnt] => 387
                        )

                    [17] => Array
                        (
                            [categoryId] => AAAAAXAAG
                            [categoryName] => 이헌상황금배팅
                            [purchaseYmd] => 20210331
                            [maxExpireYmd] => 20220331
                            [remainCnt] => 223
                        )

                    [18] => Array
                        (
                            [categoryId] => AAAAAZAAA
                            [categoryName] => 장동우급등주플러스
                            [purchaseYmd] => 20210428
                            [maxExpireYmd] => 20220428
                            [remainCnt] => 251
                        )

                    [19] => Array
                        (
                            [categoryId] => AAAAAZAAB
                            [categoryName] => 장동우알토란주식
                            [purchaseYmd] => 20210428
                            [maxExpireYmd] => 20220428
                            [remainCnt] => 251
                        )

                    [20] => Array
                        (
                            [categoryId] => AAAAAZAAE
                            [categoryName] => 장동우시그널
                            [purchaseYmd] => 20210520
                            [maxExpireYmd] => 20220520
                            [remainCnt] => 273
                        )

                    [21] => Array
                        (
                            [categoryId] => AAAABIAAE
                            [categoryName] => 최승욱종목점수
                            [purchaseYmd] => 20201214
                            [maxExpireYmd] => 20211214
                            [remainCnt] => 116
                        )

                    [22] => Array
                        (
                            [categoryId] => AAAABJAAA
                            [categoryName] => 하창봉
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [23] => Array
                        (
                            [categoryId] => AAAABMAAE
                            [categoryName] => 미래주가골드
                            [purchaseYmd] => 20201214
                            [maxExpireYmd] => 20211214
                            [remainCnt] => 116
                        )

                    [24] => Array
                        (
                            [categoryId] => AAAABNAAA
                            [categoryName] => 류태형주식포커스
                            [purchaseYmd] => 20210308
                            [maxExpireYmd] => 20220308
                            [remainCnt] => 200
                        )

                    [25] => Array
                        (
                            [categoryId] => AAAABNAAC
                            [categoryName] => 류태형단축공략주
                            [purchaseYmd] => 20210308
                            [maxExpireYmd] => 20220308
                            [remainCnt] => 200
                        )

                    [26] => Array
                        (
                            [categoryId] => AAAABNAAF
                            [categoryName] => 류태형로켓축
                            [purchaseYmd] => 20210308
                            [maxExpireYmd] => 20220315
                            [remainCnt] => 207
                        )

                    [27] => Array
                        (
                            [categoryId] => AAAABOAAA
                            [categoryName] => 이서현
                            [purchaseYmd] => 20210412
                            [maxExpireYmd] => 20220415
                            [remainCnt] => 238
                        )

                    [28] => Array
                        (
                            [categoryId] => AAAABRAAA
                            [categoryName] => 장우석미국주식플러스
                            [purchaseYmd] => 20210203
                            [maxExpireYmd] => 20220220
                            [remainCnt] => 184
                        )

                    [29] => Array
                        (
                            [categoryId] => AAAABTAAA
                            [categoryName] => 이정민파동매매반
                            [purchaseYmd] => 20210720
                            [maxExpireYmd] => 20220723
                            [remainCnt] => 337
                        )

                    [30] => Array
                        (
                            [categoryId] => AAAABVAAA
                            [categoryName] => 심재용주식화룡점정
                            [purchaseYmd] => 20210818
                            [maxExpireYmd] => 20220818
                            [remainCnt] => 363
                        )

                )

        )

)
*/
	}

	public function showUserList($day='') {
        if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') || IS_REAL_SERVER) {
            redirect('https://www.choicestock.co.kr');
            exit;
        }

		if($day == '') $day = date('Y-m-d');

		//유료회원 체크 ( wm_paid : Y, wm_is_push : Y)
		$this->load->model(DBNAME.'/wt_member_tb_model');
		$params = array();
		if($day != 'all') {
			$params['like_']['wm_reg_date'] = $day;
		}

		$extra = array(
			'fields' => array('wm_id', 'wm_name', 'wm_phone', 'wm_devicekey', 'wm_paid', 'wm_is_push', 'wm_reg_date', 'wm_mod_date', 'wm_login_date', 'wm_memo'),
			'slavedb' => true
		);

		$list = $this->wt_member_tb_model->getList($params, $extra)->getData();

		//echo '<pre>'; print_r($list); exit;

		echo '<table border="1">';
			echo '<tr>';
			echo '<th>아이디</th>';
			echo '<th>필명</th>';
			echo '<th>UUID</th>';
			echo '<th>Phone</th>';
			echo '<th>유료</th>';
			echo '<th>푸시</th>';
			echo '<th>가입일</th>';
			echo '<th>최근로그인</th>';
			echo '<th>메모</th>';
			echo '</tr>';
		foreach($list as $val) {
			echo '<tr>';
			echo '<td>'.$val['wm_id'].'</td>';
			echo '<td>'.$val['wm_name'].'</td>';
			echo '<td>'.$val['wm_devicekey'].'</td>';
			echo '<td>'.$this->common->csAesDecryptSSL($val['wm_phone'], WT_ENC_KEY).'</td>';
			echo '<td>'.$val['wm_paid'].'</td>';
			echo '<td>'.$val['wm_is_push'].'</td>';
			echo '<td>'.$val['wm_reg_date'].'</td>';
			echo '<td>'.$val['wm_login_date'].'</td>';
			echo '<td>'.nl2br($val['wm_memo']).'</td>';
			echo '</tr>';
		}
		echo '</table>';
	}

	public function showPhoneNo() {
        if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') || IS_REAL_SERVER) {
            redirect('https://www.choicestock.co.kr');
            exit;
        }
	//nPcqor1b29xrit9jbCkxRQ==  01000000000
	//dErQIvjWzsgo4ilrOm4IHw==	99999999999
	//cRDhyMEWdAQ0i8m1jdguyg==	01064291476
	//tWwZVNTk1nzt7fD12n1fLw==

		$no = '01038403090';
		echo 'phone==>'.$this->common->csAesEncryptSSL($no, WT_ENC_KEY);	
		exit;

		//$no = 'sOgCYvjq3yj52PNVmjGOWw=='; //01090308784
		//$no = 'V58LasRPRrDvLKqjBLOygw=='; //01092158725 
		//tWwZVNTk1nzt7fD12n1fLw==
		//Qr46vmUZTX4VIbkU6jj6bA==
		
		$no = 'VKeiYOuzOYLjIvhrXs2MXA==';
		echo 'phone==>'.$this->common->csAesDecryptSSL($no, WT_ENC_KEY);	
	}

	/*회원정보 API확인*/
	public function showUserInfo() {
        if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') || IS_REAL_SERVER) {
            redirect('https://www.choicestock.co.kr');
            exit;
        }

/* 회원탈퇴 체크 
		$memberId = 'b6e26768-fe35-4400-ab6b-aa9ccc513cb7'; //오
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;
		$ostype = 'A';

		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'OSType' => $ostype,
			'CharSet' => 'utf-8'
		);		
		$timestamp = strtotime(date('YmdHis'));
		$nonce = date('YmdHis');
		//micro $nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/withdrawal'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );

		echo '<pre>'; print_r($response); exit;
*/

		//유료정보 확인
		//$memberId = '2f1041d1-77aa-4f07-a4c3-ef245eed8daa'; //이
		//$phoneNo = '01074721311'; 
		
		$memberId = 'cf572046-4783-4826-ab30-8eb55ab442ec'; //오
		$phoneNo = '01074872327'; 
		//$memberId = 'ea3ec5bb-4ae5-4693-9cd1-f378984383b3'; //김
		//$phoneNo = '01047549624'; 

		//$memberId = 'd0750324-eb71-46bd-b92a-38d38cb080d1'; //환
		//$phoneNo = '01097115926'; 

		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;
/*
		$advertId = '80bc50ac-d561-463f-a012-20279b70d8c0';
		$data_ad= Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'advertId' => $advertId,
			'CharSet' => 'utf-8'
		);		
	
		$response_ad = $this->_wow_login_ad($data_ad);
		echo '<pre>'; print_r($response_ad); exit;
*/
		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'CharSet' => 'utf-8'
		);		
	
		/* 회원정보 조회(로그인용 - 인증) */
		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/login'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		echo '<pre>'; print_r($response); //exit;
		
		//usleep(500000);
		/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
		$OSType = 'A';
		$deviceType = '1';
		$deviceId = $OSType.$appType.$appVersion.$phoneNo;
		$sessionKey = substr($memberId, 0, 8).'_'.date('Ymd').'_'.$deviceType;
		$accessIp = $_SERVER['REMOTE_ADDR'];
		//$pushNoticeAgreeFlag = 'Y';
		$pushNoticeAgreeFlag = $this->_getNotice($phoneNo);

		$data_main = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'deviceId' => $deviceId,
			'deviceType' => $deviceType,
			'OSType' => $OSType,
			'appVersion' => $appVersion,
			'pushKey' => $token,
			'pushNoticeAgreeFlag' => $pushNoticeAgreeFlag,
			'accessIp' => $accessIp,
			'sessionKey' => $sessionKey,
			'CharSet' => 'utf-8'
		);		

		$response_main = $this->_wow_login_main($data_main);
		echo '<pre>'; print_r($response_main); //exit;

		$data_pay = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'CharSet' => 'utf-8'
		);		
		
		$response_info = $this->_wow_login_pay($data_pay);
		echo '<pre>'; print_r($response_info); exit;
	}

    public function policy() {
        $this->load->view(WT.'/member/policy');
    }

	/* 로그인 처리 */
	//public function login_process($data=array()) 
	private function _login_process($data=array()) 
	{
		$is_setkey = false;
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		
		$appType = WT_APP_TYPE;
		
		$memberId =  $data['deviceKey'];
		$phoneNo = $data['phoneNumber'];
		
		//$memberId = '2f1041d1-77aa-4f07-a4c3-ef245eed8daa'; //이
		//$phoneNo = '01074721311'; 
		
		$token = $data['token'];
		$appVersion = $data['appVersion'];
		$deviceType = $data['deviceType'];
		$adid = $data['adid'];
		$return_url = $data['return_url'];
		$is_setkey =  $data['is_setkey'];

		if($return_url=='') $return_url = '/'.WT.'_main';

		//echo '<pre>'; print_r($data); 
		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'CharSet' => 'utf-8'
		);		
	
		/* 회원정보 조회(로그인용 - 인증) */
		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/login'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );
		//echo '<pre>'; print_r($response); exit;

		//22.02.09 추가(회원 탈퇴상태 복구)
		if($response['data']['memberState'] == '2') {
			$data_updapp = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'OSType' => 'A',
				'CharSet' => 'utf-8'
			);
			$response_withdrawal = $this->_wow_login_updapp($data_updapp);
		}

		//usleep(500000);
		/* 회원정보 조회(로그인용 - 접속) 21.07.21 추가 */
		$OSType = 'A';
		$deviceId = $OSType.$appType.$appVersion.$phoneNo;
		$sessionKey = substr($memberId, 0, 8).'_'.date('Ymd').'_'.$deviceType;
		$accessIp = $_SERVER['REMOTE_ADDR'];
		//$pushNoticeAgreeFlag = 'Y';
		$pushNoticeAgreeFlag = $this->_getNotice($phoneNo);

		$data_main = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'phoneNo' => $phoneNo,
			'deviceId' => $deviceId,
			'deviceType' => $deviceType,
			'OSType' => $OSType,
			'appVersion' => $appVersion,
			'pushKey' => $token,
			'pushNoticeAgreeFlag' => $pushNoticeAgreeFlag,
			'accessIp' => $accessIp,
			'sessionKey' => $sessionKey,
			'CharSet' => 'utf-8'
		);		

		$response_main = $this->_wow_login_main($data_main);
		//echo '<pre>'; print_r($data_main); exit;

		
		$data_pay = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'CharSet' => 'utf-8'
		);		
		
		$response_info = $this->_wow_login_pay($data_pay);

		for($i=0;$i<10;$i++) {
			if(isset($response_info['resultCode']) && $response_info['resultCode'] == '0') break;
			$response_info = $this->_wow_login_pay($data_pay);
		}

		//광고ID 처리(21.09.13추가)
		if($adid != '') {
			$data_ad = Array(
				'appType' => $appType,
				'memberId' => $memberId,
				'advertId' => $adid,
				'osType' => 'A',
				'CharSet' => 'utf-8'
			);		
			$response_ad = $this->_wow_login_ad($data_ad);
		}

		if(is_array($response['data']) && is_array($response_info['data'])) {

			//if($response['data']['memberState'] == '1') {
			if($response_info['data']['blockType'] != '2') {
				$this->load->model(DBNAME.'/wt_member_tb_model');

				$enc_phoneNo = $this->common->csAesEncryptSSL($phoneNo, WT_ENC_KEY);
				if($this->wt_member_tb_model->get(array('wm_phone' => $enc_phoneNo))->isSuccess()) {
					$dbrow = $this->wt_member_tb_model->getData();
					//echo '<pre>'; print_r($dbrow); exit;
					$update_params = array(
						'wm_adid' => $adid,
						'wm_ostype' => $OSType,
						'wm_version' => str_replace('.', '', $appVersion),
						'wm_login_date' => date('Y-m-d H:i:s'),
					);

					$mod=0;
					//필명 체크
					if($dbrow['wm_name'] != $response_info['data']['memberName']) {
						$update_params['wm_name'] = $response_info['data']['memberName'];
						$dbrow['wm_memo'] .= "\n".'필명 변경 '.$dbrow['wm_name'].'=>'.$response['data']['memberName'].'['.date('Y-m-d H:i:s').']';
						$mod++;
					}
					
					$is_update = false;
					//deviceKey 체크
					if($dbrow['wm_devicekey'] != $response['data']['memberId']) {
						$update_params['wm_devicekey'] = $response['data']['memberId'];
						$dbrow['wm_memo'] .= "\n".'devicekey 변경 '.$dbrow['wm_devicekey'].'=>'.$response['data']['memberId'].'['.date('Y-m-d H:i:s').']';
						$is_update = true;
						$mod++;
					}

					//token 체크
					if($dbrow['wm_pushkey'] != $token && $token != '' && $token != 'undefined') {
						$update_params['wm_pushkey'] = $token;
						$dbrow['wm_memo'] .= "\n".'token 변경 ['.$token.']['.date('Y-m-d H:i:s').']';
						$mod++;
					}

					//유료회원체크
					$is_paid = false;
					$purchaseYmd = '';
					$maxExpireYmd = '';
					foreach($response_info['data']['list'] as $pay) {
						if($pay['categoryId'] == 'AAAAAAAAJ' && $pay['categoryName'] == '미국주식창' && $pay['maxExpireYmd'] >= date('Ymd')) {
							$update_params['wm_paid'] = 'Y';
							$purchaseYmd = $pay['purchaseYmd'];
							$maxExpireYmd = $pay['maxExpireYmd'];
							$is_paid = true;
							break;
						}
					}

					//안드로이드 인앱 결제 후 삭제(주석제거)
					/**/
					if($is_paid === false) {
						if($dbrow['wm_level'] == '9') {
							$is_paid = true;
						}
						else {
							if($dbrow['wm_paid'] == 'Y') {
								$update_params['wm_paid'] = 'N';
								$dbrow['wm_memo'] .= "\n".'무료회원전환['.date('Y-m-d H:i:s').']';
								$mod++;
							}
						}
					}
					/**/

					//정보수정일
					if($mod>0) {
						$update_params['wm_mod_date'] = date('Y-m-d H:i:s');
						$update_params['wm_memo'] = $dbrow['wm_memo'];
					}

					if($this->wt_member_tb_model->doUpdate($dbrow['wm_id'] , $update_params)->isSuccess()) {
					
						//안드로이드 인앱 결제 후 삭제
						//$is_paid = true;

						$sess_data = array(
							'is_paid' => $is_paid, 
							'user_id' => $dbrow['wm_id'],
							'user_name' => $dbrow['wm_name'],
							'user_phone' => $enc_phoneNo,
							'user_key' => $memberId,
							'user_push' => $dbrow['wm_is_push'],
							'user_startday' => $purchaseYmd,
							'user_endday' => $maxExpireYmd,
							'user_state' => $response_info['data']['memberState'],
							'user_level' => $dbrow['wm_level'],
							'user_stock' => $dbrow['wm_stock'],
							'user_appver' => $appVersion,
							'user_dtype' => $deviceType,
							'user_token' => $token,
							'user_adid' => $adid,
							'user_ostype' => 'A',
						);

						$this->set_session($sess_data);
						$this->common->write_login_log($dbrow['wm_id']);

						if($response['data']['memberIdState'] == '3' || $is_update === true || $is_setkey === true) {
							$this->common->locationhref('/'.WT.'_member/set_key?deviceKey='.$response['data']['memberId']);
							exit;
						}
						else {
							$this->common->locationhref($return_url);
							exit;
						}
					}
					else {
						$this->common->alert('로그인에 실패했습니다[1].');
						$this->common->locationhref('/'.WT.'_main/adropen');
						exit;
					}
				}
				else {
					$wm_id = uniqid('wt_');
					$params = array(
						'wm_id' => $wm_id,
						'wm_name' => $response['data']['memberName'],
						'wm_phone' => $enc_phoneNo,
						'wm_devicekey' => $response['data']['memberId'],
						'wm_paid' => 'N',
						'wm_is_push' => 'Y',
						'wm_pushkey' => $token,
						'wm_ostype' => 'A',
						'wm_reg_date' => date('Y-m-d H:i:s'),
						'wm_mod_date' => date('Y-m-d H:i:s'),
						'wm_login_date' => date('Y-m-d H:i:s'),
						'wm_level' => '0',
						'wm_stock' => '0',
						'wm_adid' => $adid,
						'wm_version' => str_replace('.', '', $appVersion),
					);

					//안드로이드 인앱 결제 후 삭제
					//$params['wm_paid'] = 'Y';

					if($this->wt_member_tb_model->doInsert($params)->isSuccess()) {

						$sess_data = array(
							'user_id' => $wm_id,
							'user_name' => $response['data']['memberName'],
							'user_phone' => $enc_phoneNo,
							'user_key' => $response['data']['memberId'],
							'user_state' => $response['data']['memberState'],
							'user_appver' => $appVersion,
							'user_dtype' => $deviceType,
							'user_token' => $token,
							'user_adid' => $adid,
							'user_push' => 'Y',
							'user_level' => '0',
							'user_ostype' => 'A',
						);
						//안드로이드 인앱 결제 후 삭제
						//$sess_data['is_paid'] = true;

						$this->set_session($sess_data);
						$this->common->write_login_log($wm_id);
						$this->common->locationhref('/'.WT.'_member/set_key?deviceKey='.$response['data']['memberId']);
						exit;
					} 
					else {
						$this->common->alert('로그인에 실패했습니다[0].');
						$this->common->locationhref('/'.WT.'_main/adropen');
						exit;
					}
				}
			}
			else {
				$this->common->alert('차단된 회원입니다.['.$response_info['data']['blockType'].']');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			
			/*
			}
			else if($response['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[1].');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			*/
		}
		else {
			/*
			if($response_info['data']['memberState'] == '2') {
				$this->common->alert('탈퇴 회원입니다[0].');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else if($response_info['data']['memberState'] == '3') {
				$this->common->alert('휴면 회원입니다.');
				$this->common->locationhref('/'.WT.'_member/intro');
				exit;
			}
			else {
				//$this->common->alert('로그인 중입니다...');
				$this->common->locationhref('/'.WT.'_main/adropen');
				exit;
			}
			*/
			$this->common->locationhref('/'.WT.'_main/adropen');
			exit;
		}
	}

	/* 회원 정보 */
	public function info() {
		$this->loginCheck();
		$data = array();
		$this->_view('/member/info', $data);
	}

	/* 회원 탈퇴 */
	public function withdrawal() {
		$this->loginCheck();
		$data = array();
		$this->_view('/member/withdrawal', $data);
	}

	private function _wowtvPushUpdate($data=array()) {
		if(sizeof($data) > 0) {
			$data = Array(
				'appType' => $data['appType'],
				'memberId' => $this->session->userdata('user_key'),
				'pushNoticeAgreeFlag' => $data['pushNoticeAgreeFlag'],
				'OSType' => $data['OSType'],
				'CharSet' => 'utf-8'
			);		

			$app_id = WT_APP_ID;
			$app_key = WT_APP_KEY;

			$timestamp = strtotime(date('YmdHis'));
			//micro $nonce = date('YmdHis');
			$nonce = $this->_get_microtime();
			$RequestString = $app_id.'POST'.$timestamp.$nonce;
			$binaryKey = base64_decode($app_key);
			$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
			$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
			
			$postURL = WT_API_URL.'/v1/members/updpushnoticeagree'; 
			$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
			$response = json_decode( $response, true );		
		}
	}

	/* 주문 증권사 세팅 */
	public function setStock() {

        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/'.WT.'_main');
			exit;
		}

		$wm_stock = $this->input->get('comp');

		if($wm_stock=='') {
			$result = array('error' => TRUE, 'msg' => '선택한 증권사가 없습니다.');
			exit(json_encode($result));
		}
		else {
			if($this->session->userdata('user_id') != '') {
				$user_id = $this->session->userdata('user_id'); // 'wt_60d3dc0f7a778'; 
				$this->output->set_content_type('application/json');
			
				$this->load->model(DBNAME.'/wt_member_tb_model');
				$update_params = array(
					'wm_stock' => $wm_stock,
					'wm_mod_date' => date('Y-m-d H:i:s')
				);

				if($this->wt_member_tb_model->doUpdate($user_id, $update_params)->isSuccess()) {
					$this->session->set_userdata('user_stock', $wm_stock);
					$result = array('success' => TRUE);
					exit(json_encode($result));
				}
			}
			else {
				$result = array('error' => TRUE, 'msg' => '로그인 정보가 없습니다.');
				exit(json_encode($result));
			}
		}	
	}

	/* 푸시 설정 */
	public function notice_setup($col='', $val='') {
		$this->loginCheck();
        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/'.WT.'_main');
			exit;
		}

        if($this->session->userdata('is_login')) {
		
			if($col == '' || $val == '') {
				$result = array('error' => '알림 설정이 실패했습니다.[1]', 'res' => '2');
				exit(json_encode($result));
			}

			$this->output->set_content_type('application/json');

			$this->load->model(DBNAME.'/wt_member_tb_model');
			$update_params = array(
				$col => $val,
				'wm_push_date' => date('Y-m-d H:i:s')
			);

			if($this->wt_member_tb_model->doUpdate($this->session->userdata('user_id'), $update_params)->isSuccess()) {
				$this->session->set_userdata('user_push', $val);
				$success = TRUE;
				$res = '알림 서비스가 설정되었습니다.';
				$result = array('success' => $success, 'res' => $res);

				//한경 update
				$push_data = array();
				$push_data['appType'] = WT_APP_TYPE;
				$push_data['memberId'] = $this->session->userdata('user_key');
				$push_data['pushNoticeAgreeFlag'] = $val;
				$push_data['OSType'] = 'A';

				$this->_wowtvPushUpdate($push_data);

				exit(json_encode($result));
			}
			else {
				//업데이트 실패시
				$result = array('error' => '알림 설정이 실패했습니다.[2]', 'res' => '2');
				exit(json_encode($result));
			}
		}
		else {
			$result = array('error' => '회원정보가 없습니다.', 'res' => '1');
			exit(json_encode($result));
		}
	}

	public function withdrawal_process() {
		$this->loginCheck();

		if($this->session->userdata('is_paid')===TRUE) {
			$this->common->alert('유료서비스 이용 중입니다. 서비스해지 후 회원탈퇴를 진행해주세요.');
			$this->common->locationhref('/'.WT.'_member/withdrawal');
			exit;
		}

		$user_id = $this->session->userdata('user_id');
		$user_name = $this->session->userdata('user_name');
		$user_key = $this->session->userdata('user_key');
		$ostype = $this->session->userdata('user_ostype');
		$movepage = ($ostype == 'I') ? 'iosopen':'adropen';
		$intropage = ($ostype == 'I') ? 'ios_intro':'intro';

		if($ostype != 'I') $ostype = 'A';

		/* 한경TV 탈퇴 */
		$app_id = WT_APP_ID;
		$app_key = WT_APP_KEY;
		$appType = WT_APP_TYPE;

		$memberId =  $user_key;
		//$ostype = 'A';

		$data = Array(
			'appType' => $appType,
			'memberId' => $memberId,
			'OSType' => $ostype,
			'CharSet' => 'utf-8'
		);		

		$timestamp = strtotime(date('YmdHis'));
		//micro $nonce = date('YmdHis');
		$nonce = $this->_get_microtime();
		$RequestString = $app_id.'POST'.$timestamp.$nonce;
		$binaryKey = base64_decode($app_key);
		$Signature = base64_encode(hash_hmac("sha256", $RequestString, $binaryKey, true));
		$access_token = $app_id.':'.$Signature.':'.$nonce.':'.$timestamp;
		
		$postURL = WT_API_URL.'/v1/members/withdrawal'; 
		$response = $this->_reqBasePost($data, $postURL, $access_token); 	//승인 호출
		$response = json_decode( $response, true );

		if(is_array($response['data'])) {
			if($response['data']['resultCode'] == '0' || $response['data']['resultCode'] == '804') {

				$sess = array();
				$sess['login_id'] = $user_id;
				$sess['name'] = $user_name;

				//회원정보 지우기(wt_member_tb)
				$this->load->model(DBNAME.'/wt_member_tb_model');
				if($this->wt_member_tb_model->get(array('wm_id' => $user_id))->isSuccess()) {
					$dbrow = $this->wt_member_tb_model->getData();

					$this->wt_member_tb_model->doDelete($dbrow['wm_id']);

					$act_key = $dbrow['wm_id'];
					$log_array = $dbrow;
					$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'wt_member_tb');
				}

				//캐치정보 지우기(catch_tb)
				$this->load->model(DBNAME.'/catch_tb_model');
				if($this->catch_tb_model->get(array('c_user_id' => $user_id))->isSuccess()) {
					$dbrow = $this->catch_tb_model->getData();

					$this->catch_tb_model->doDelete($dbrow['c_user_id']);
				
					$act_key = $dbrow['c_user_id'];
					$log_array = $dbrow;
					$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'catch_tb');
				}

				//관심종목 지우기(myitem_tb)
				$this->load->model(DBNAME.'/myitem_tb_model');

				$params = array();
				$params['=']['mi_user_id'] = $user_id;
				$extra = array(
					'order_by' => '',
				);

				$myitem = $this->myitem_tb_model->getList($params, $extra)->getData();
				
				if(is_array($myitem) && sizeof($myitem) >0) {
					foreach($myitem as $val) {
						$pk=array();
						$pk['mi_user_id'] = $val['mi_user_id'];
						$pk['mi_ticker'] = $val['mi_ticker'];
						$this->myitem_tb_model->doDelete($pk);
					}

					$act_key = $user_id;
					$log_array = $myitem;
					$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'myitem_tb');
				} 

				$this->common->alert('회원 탈퇴 처리가 완료되었습니다.\n그동안 미국주식창을 이용해 주셔서 감사합니다.');
				
				//$token = $this->session->userdata('user_token');
				//$appVersion = $this->session->userdata('user_appver');
				//$deviceType = $this->session->userdata('user_dtype');
				//$adid = $this->session->userdata('user_adid');

				$this->session->sess_destroy();
				/*
				$data['token'] = $token;
				$data['deviceKey'] = $memberId;
				$data['appVersion'] = $appVersion;
				$data['deviceType'] = $deviceType;
				$data['adid'] = $adid;
				$data['is_html'] = true;
				$this->_view('/member/'.$intropage, $data);
				*/
				$this->common->locationhref('/'.WT.'_member/init_key_intro');
				//exit;	
			}
			else if($response['data']['resultCode'] == '802') {
				$this->common->alert('[탈퇴불가] 이용중인 유료서비스가 있습니다.');
				$this->common->locationhref('/'.WT.'_member/withdrawal');
				exit;
			}
			else if($response['data']['resultCode'] == '803') {
				$this->common->alert('[탈퇴불가] 이용중인 정기결제가 있습니다.');
				$this->common->locationhref('/'.WT.'_member/withdrawal');
				exit;
			}
			else {
				$this->common->alert('이용중인 상태의 앱이 아닙니다.['.$response['data']['resultCode'].'].');
				$this->common->locationhref('/'.WT.'_main/'.$movepage);
				//$this->common->locationhref('/'.WT.'_member/withdrawal');
				exit;
			}
		}
		else {
			$this->common->alert('회원탈퇴 시 오류가 발생했습니다[0].');
			$this->common->locationhref('/'.WT.'_member/withdrawal');
			exit;
		}
	}

    public function push_test() {
		echo '<pre>';
		$message = 'OUSERPUSH3||USW||2021070516372142||402||Y||MESSAGE_FORMAT$$$$$$402 그룹 푸시 - 공통포멧 테스트$$$$402 그룹 푸시 - 공통포멧 테스트 제목||84159beb-a178-4ae4-a513-9b3b57fdaae2$$A$$c_EcMWdie2Q:APA91bGJ_vlenI6hk4h9GNcMBbQD_FJUNisZ7WEs4QNBP_bDCaJVSbjpTHZyaXKT0g7NtzDqbn47J7zde8f7ProakMhY9ernYAskMKUUIeRxi232MbgkqBBB_vOwO0DtpL2HVNapNp75$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=84159beb-a178-4ae4-a513-9b3b57fdaae2&phno=01072983822&seq=95377$$||a455fb55-4a7f-412d-b43a-ea36e553c0a6$$A$$epLtkYLa3tE:APA91bGhhj2RqC8wiJa_gvwbvrucwUrk0Kx5Fr_sSj2qwu9SyGm_7V2sGyv_xKRNZS2UzdRdnEXd3DohAddlWXA7T63UMM0E1iUSE79IrJi1JSbpvBYP3yKxW_GTi1upuenya0lSATl5$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=a455fb55-4a7f-412d-b43a-ea36e553c0a6&phno=01072983822&seq=95377$$||831702bc-2b0f-483d-a721-05b5809b0c59$$A$$doLVylnFmFA:APA91bFbGVH5XoaBOnIzgtpQuZ4ZkbKpIWJLn7yIjPKHhqjVjv-ckkB2jveO0uwdxPsUi9fGb-L-g6yt9n5Im76HT0Gf-5BripncXj0f6mfeunRm81VHMY7MkvAMrpV3hFru6K3AbE0K$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=831702bc-2b0f-483d-a721-05b5809b0c59&phno=01072983822&seq=95377$$';

		$field = explode('||',$message);

		$push_format = array_shift($field); //SVCN+푸시COUNT
		$app_id = array_shift($field);		//앱ID
		$message_key = array_shift($field);	//MESSAGEKEY
		$push_type = array_shift($field);	//PUSHTYPE
		$format = array_shift($field);		//FORMAT

		//echo 'push_format==>'.$push_format.'<br>';
		//echo 'app_id==>'.$app_id.'<br>';
		//echo 'message_key==>'.$message_key.'<br>';
		//echo 'push_type==>'.$push_type.'<br>';
		//echo 'format==>'.$format.'<br>';

		if(!strstr($push_format,'USERPUSH') || $app_id != 'USW' || $message_key == '' || $push_type == '' || $format != 'Y') {
			echo '<pre>'; print_r($field);
		}
		else {
			$title = ''; 
			$body = '';
			foreach($field as $key=>$val) {

				$sub_field = explode('$$', $val);

				if($key == 0) {
					if($sub_field[0] == 'MESSAGE_FORMAT') {
						$title = $sub_field[5];
						$body = $sub_field[3];
					}
				}
				else {
					if($title == '' || $body == '') {
						echo '<pre>'; print_r($val);
					}
					else {
						$device_key = $sub_field[0];
						$url = $sub_field[4];

						echo 'key==>'.$key.'<br>';
						echo 'title==>'.$title.'<br>';
						echo 'body==>'.$body.'<br>';
						echo 'device_key==>'.$device_key.'<br>';
						echo 'url==>'.$url.'<br>';
					}
				}
			}
		}
/*
Array
(
    [0] => OUSERPUSH3
    [1] => USW
    [2] => 2021070516372142
    [3] => 402
    [4] => Y
    [5] => MESSAGE_FORMAT$$$$$$402 그룹 푸시 - 공통포멧 테스트$$$$402 그룹 푸시 - 공통포멧 테스트 제목
    [6] => 84159beb-a178-4ae4-a513-9b3b57fdaae2$$A$$c_EcMWdie2Q:APA91bGJ_vlenI6hk4h9GNcMBbQD_FJUNisZ7WEs4QNBP_bDCaJVSbjpTHZyaXKT0g7NtzDqbn47J7zde8f7ProakMhY9ernYAskMKUUIeRxi232MbgkqBBB_vOwO0DtpL2HVNapNp75$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=84159beb-a178-4ae4-a513-9b3b57fdaae2&phno=01072983822&seq=95377$$
    [7] => a455fb55-4a7f-412d-b43a-ea36e553c0a6$$A$$epLtkYLa3tE:APA91bGhhj2RqC8wiJa_gvwbvrucwUrk0Kx5Fr_sSj2qwu9SyGm_7V2sGyv_xKRNZS2UzdRdnEXd3DohAddlWXA7T63UMM0E1iUSE79IrJi1JSbpvBYP3yKxW_GTi1upuenya0lSATl5$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=a455fb55-4a7f-412d-b43a-ea36e553c0a6&phno=01072983822&seq=95377$$
    [8] => 831702bc-2b0f-483d-a721-05b5809b0c59$$A$$doLVylnFmFA:APA91bFbGVH5XoaBOnIzgtpQuZ4ZkbKpIWJLn7yIjPKHhqjVjv-ckkB2jveO0uwdxPsUi9fGb-L-g6yt9n5Im76HT0Gf-5BripncXj0f6mfeunRm81VHMY7MkvAMrpV3hFru6K3AbE0K$$$$http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=831702bc-2b0f-483d-a721-05b5809b0c59&phno=01072983822&seq=95377$$
)
Array
(
    [0] => OUSERPUSH3
)
Array
(
    [0] => USW
)
Array
(
    [0] => 2021070516372142
)
Array
(
    [0] => 402
)
Array
(
    [0] => Y
)
Array
(
    [0] => MESSAGE_FORMAT
    [1] => 
    [2] => 
    [3] => 402 그룹 푸시 - 공통포멧 테스트
    [4] => 
    [5] => 402 그룹 푸시 - 공통포멧 테스트 제목
)
Array
(
    [0] => 84159beb-a178-4ae4-a513-9b3b57fdaae2
    [1] => A
    [2] => c_EcMWdie2Q:APA91bGJ_vlenI6hk4h9GNcMBbQD_FJUNisZ7WEs4QNBP_bDCaJVSbjpTHZyaXKT0g7NtzDqbn47J7zde8f7ProakMhY9ernYAskMKUUIeRxi232MbgkqBBB_vOwO0DtpL2HVNapNp75
    [3] => 
    [4] => http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=84159beb-a178-4ae4-a513-9b3b57fdaae2&phno=01072983822&seq=95377
    [5] => 
)
Array
(
    [0] => a455fb55-4a7f-412d-b43a-ea36e553c0a6
    [1] => A
    [2] => epLtkYLa3tE:APA91bGhhj2RqC8wiJa_gvwbvrucwUrk0Kx5Fr_sSj2qwu9SyGm_7V2sGyv_xKRNZS2UzdRdnEXd3DohAddlWXA7T63UMM0E1iUSE79IrJi1JSbpvBYP3yKxW_GTi1upuenya0lSATl5
    [3] => 
    [4] => http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=a455fb55-4a7f-412d-b43a-ea36e553c0a6&phno=01072983822&seq=95377
    [5] => 
)
Array
(
    [0] => 831702bc-2b0f-483d-a721-05b5809b0c59
    [1] => A
    [2] => doLVylnFmFA:APA91bFbGVH5XoaBOnIzgtpQuZ4ZkbKpIWJLn7yIjPKHhqjVjv-ckkB2jveO0uwdxPsUi9fGb-L-g6yt9n5Im76HT0Gf-5BripncXj0f6mfeunRm81VHMY7MkvAMrpV3hFru6K3AbE0K
    [3] => 
    [4] => http://stockwin.wowtv.co.kr/vitamin/lhs_view.asp?devk=831702bc-2b0f-483d-a721-05b5809b0c59&phno=01072983822&seq=95377
    [5] => 
)
*/
	}

/*****
    public function datacheck() {
		$data ='1||USW||219033||402||Y||MESSAGE_FORMAT$$$$$$[김종철 미국주식계좌플러스]  미증시 분석과 투자전략 $$$$[김종철 미국주식계좌플러스] 투자 유망 기업소개||239dbb97-019f-4421-99ca-680ba798cbaa$$A$$dqMdH_5OSjCdKpGHbzpT0d:APA91bEhPWIuJhVDOPNGV3q8--3DVuTasVjpraF2v83OxuQ4AkMLi8HnS1OJIpnHTiTKnfVqEALAauk-wUl0BcconilcBjCeLbXDnW_HwCB3672XUbsKA7odyZ1WCCzJnRXyP4pjmzkT$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=239dbb97-019f-4421-99ca-680ba798cbaa&phno=01025791101&seq=104589$$||01350b85-e4dd-45be-a3b2-2b456d646e89$$A$$djT5n0jZTRityUIwW9k21u:APA91bECq1YJI1RMbmimTiA5HFnc2a434vkBAWf7llSaoqcFTo-26Qltto3BStWCs9bBSGHkqSWG2cCNq-GygkgjA2dsflZc41kRxKORtHj2HVixJdxQK6XXLKDuQ3d0D0Gvj2AagyJj$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=01350b85-e4dd-45be-a3b2-2b456d646e89&phno=01098093699&seq=104589$$||ce9d7379-e32d-407c-9e5c-4c894bdb6345$$A$$edrqC1pRSImmQO5DgNxD7U:APA91bEeJgWe4r2tIPQMBLw9H3nAxXjsP6mGke5tFt6cRT5XVbkSCkKcK6PaRBEtoF3JaJJq00CQ-qD-Mh_-JYY19A2eL4L-BXeotjdWqxMFek0nz2ctDzLfRyr5DBzvAow_T4EXzlao$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ce9d7379-e32d-407c-9e5c-4c894bdb6345&phno=01085063341&seq=104589$$||22bee7d7-b48c-485f-ba10-97bfc6c45db9$$A$$fpoMYV0aQWG5wlJDLLrBbp:APA91bG_-cNa3r2QJ2fueWkiXjNvCQWU87QWPFz7MP1YjkGZR14QZw-Cnsf9cxy-iaoA673ve4pskFC7DdCvc90wcL--8rt5su04w6Gjm8qHeqPY57ru7fUMzQOusXHBLgGGSHz8VXPv$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=22bee7d7-b48c-485f-ba10-97bfc6c45db9&phno=01093295781&seq=104589$$||cef1c1d0-1af8-40f6-9b99-9b0a4d4354f8$$A$$dm5mEEbgQIeUuDILI71Cgg:APA91bGyr47q9JgPcMTFYkEhi3brZG6TzhDKNLKq9c8RJMbu8QFAPnr-B8a4HtpmdyL6IPytFm9WGqLPmiVCaksIX6YKLNuhZbK2-lKF7Yx84fQwCw4W_eLEkD8VNf13E7qziWUytec-$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=cef1c1d0-1af8-40f6-9b99-9b0a4d4354f8&phno=01087990964&seq=104589$$||caa4ef26-5902-4641-aa46-babaf637827d$$A$$dksNnjC4Qv-EXc1BJfGLDw:APA91bF_1AaWPH6JFyDD7wFg2v5GHsJ5A-nrDC6oDAtUEqa0hA3Usi9WT2cUgtb9tfdBFC993MQOwqdK5XbA__O-_ALJG0BfosBxJIhbfPZI7AsjkjUnYsMFDBz3dX1_MjTMA9G-tOwe$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=caa4ef26-5902-4641-aa46-babaf637827d&phno=01054523488&seq=104589$$||55485fb8-7175-4fd1-af24-0ed1b232bee2$$A$$dt8XZAPCQCGswj1oMbGvWK:APA91bF6AQ3ndT81FWEpY-LlGaobko2_IjIfVNhgx8LAj0hXLKzuEZuYqAmcccAORpFWsrL-LKw8djKLwmQ_lBuSyQYoyvz5BWdk8qRJ0UNYPGgsRGc9YeW-GUQMbJIuAb-JfKCdgF4x$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=55485fb8-7175-4fd1-af24-0ed1b232bee2&phno=01071774719&seq=104589$$||073315e4-7257-45fc-aa2f-db96f42f7da2$$A$$di3VwWTZQbytmsjTaQpXm5:APA91bHZ2hhsNbf511J2gD-YbIRODz7tUjYtjAU8LXG-O1LgQKDDK4HZcmaOI_8eNhblubG_FK_3IRezGaUfOPLwXl3dhkZBrkCWFO9XpaAi5YT2Km7Hl4c1U5uyE8wEbK8PURFMmV18$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=073315e4-7257-45fc-aa2f-db96f42f7da2&phno=01075597718&seq=104589$$||87a0713b-d3d8-4ec1-8511-d8dc1eda47e1$$A$$ejZkZ3c5T3KKyElYdKZMyO:APA91bHfYrwfSduBB3pTGli8KFwlIh_I7JsoVktiTjSz4gsUN4LIwkWODYaeopu0IEw20qQrm6jBRXYY-pkMoD52myv35cKCGBV8wr5RsM9cIq6YnxLhmSLODyAoYncrBk38Jkz6iXSz$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=87a0713b-d3d8-4ec1-8511-d8dc1eda47e1&phno=01081920212&seq=104589$$||c62d71d6-7d4b-4a99-bb13-bf46ea13be71$$A$$e2mUVGHxRGaQ-IGmsDjXWk:APA91bG6uQ-kxtJLmzsICUSV0D4VBTZhRaRZekT1lfG5s6yCd6R-B99rZWEU16oXKQS9ORSmUja9VZePtq8t-EXuwrMLV7v0rS8Eyb2irC36DSPbL6mVz6VJztt5nuYhWgI6am_HGImJ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=c62d71d6-7d4b-4a99-bb13-bf46ea13be71&phno=01037693750&seq=104589$$||95fb33c0-8210-4358-b04e-4683999a8f24$$A$$f-Be2IaXQ2-l8uqwWCEC9a:APA91bFh8yNHvZMk-osmCE_BfaiW_gLZv8woTkIJGCX_HeTcwGOvMCkR8j406I4JDPjPaFjeKy2BsPbnpR-9fd6aJGufnxK0A0Z6IcVpA-Uc4Mut49MoL3md2LNAOtJ8VeCa1YxwJZPw$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=95fb33c0-8210-4358-b04e-4683999a8f24&phno=01072761987&seq=104589$$||3a7402e5-768d-4e63-afa5-5292372c5a78$$A$$eXJxfz9MTySmu0DqgsjxKh:APA91bHMwEwveHjvh39Rs_c4Rs_iHBYRg83mSsbqHULnX7PKmryFZ6a_YJl4LZ_WY6pMjhxfPTUfPjwAVdWUKfEsGJ6VuUxv4ZBM4L0oAGnKg8qBgOtzH_RQhWKNw8TEnRzZrEVzceDf$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=3a7402e5-768d-4e63-afa5-5292372c5a78&phno=01095505160&seq=104589$$||2e1a9cda-1d6b-4817-8fa7-b212f17da277$$A$$ekTx3m-3TZmmozccQTxr-x:APA91bEmeBf0CT2NxxDLQ0hfNf50YVhNx4plAPMeYEC01Q3uWZ5J5VAnNzB8lMAUntx6WOxrPEQqyxTTVsrHiMMsmHbK7PBSpfp_cFidV_eFKvs5e13MEGvVC2LDl5X22ATKZ46s54TZ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=2e1a9cda-1d6b-4817-8fa7-b212f17da277&phno=01099105242&seq=104589$$||4604eb4c-6466-46c2-a245-722360afc8d6$$A$$cNMsuckNQbqBDF7gMJEIJV:APA91bHvLN5vaDq8-vxqF95JUUJvMXcDY8Il-Kw8G47loE3Ol5tL65FaTZ4yFeFqOwf_K8ObaK2aurOrMMlst5pSoFBjo6Roj6LRFPGOOYcSkiKSWs_m4uEVOfYb6aw3fxnS9pEdXfcq$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4604eb4c-6466-46c2-a245-722360afc8d6&phno=01043573855&seq=104589$$||cda3901c-5eb3-48cf-bbff-fe9f57004200$$A$$e2ncY77rRkWu0T-PcjnvL5:APA91bHWa4rndmo3P9ea4iiA2qNjMpa7nxjIyTt4DccuDYmUG5QPV1YVGhFNZFztvhbw2v2m4dmE8oajSWYSwVlM5UJADKbWRaPXnGTO78NT_kM-KT8u-lai-zLvQ8aDZ2Aql0rsh2aF$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=cda3901c-5eb3-48cf-bbff-fe9f57004200&phno=01037367200&seq=104589$$||325f3f31-601f-4f31-a79f-2202251ef01d$$A$$cyC18aBIRJuR-G7rHLf_zl:APA91bHCXAt4wwlIzQnJAA0YHqEw8AYYnVY7ya_H7QoElTnXOxfhSFOSQxiP2UPXQ3YvlLc4xobMo-0UoZE9YZr_Wqw4PHTIcAeg4LWTkwOXWwKAfsXUrn6K3gcN1gc26BYsh3BnE6Ak$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=325f3f31-601f-4f31-a79f-2202251ef01d&phno=01089947967&seq=104589$$||763962e7-07cc-4e19-bae7-b9a1722c0d36$$A$$eGQHiP8hSB63AMrfXArloG:APA91bHt1YsncWCVQQ-wPVe6Icv6l0FwqZfpvRWIAVwKVPnYlQw0nRsoPbqNkD9QDVwlJKu1BiWfhYH-3cAgt-ht-a00TqQxl-wZzXN4SBU5qp7C1d8lOOWx6t8qb986ImuVnFbT7s8t$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=763962e7-07cc-4e19-bae7-b9a1722c0d36&phno=01087996918&seq=104589$$||d778ecd6-dc27-4c78-96d0-c369b2ec3f4e$$A$$f6UWPfL3RR-txUf6o7qyUx:APA91bESD3gn-jkDODw8apAwg1LEfiC6dIQH7iYlBIK0Tpwk9WUfkv3BeyqMtwJ2qB0VEaAeZV14yhythhDz8-yzkr5y10f9YZr0xL7ZL-_3rnc9RohFencpKvG9gFnNOXHodjWvnRbw$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=d778ecd6-dc27-4c78-96d0-c369b2ec3f4e&phno=01055091862&seq=104589$$||549ed9d8-3db2-40bd-bdc9-71dcf46f3113$$A$$crEdxIBbRouzFXHAOA-CvV:APA91bECeHeieGDrd961sV1bDe4ZFlH5ULJra27goIkImx5jk-_b2sdnoB4dfkQ6_YJxZzlRyai5Eo2ERQiMdY4Izkeshd_YdRb0gEVKxdeV9ITa0_8iOeUh-F3iLqHIVoZ4FjZCGORs$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=549ed9d8-3db2-40bd-bdc9-71dcf46f3113&phno=01036643265&seq=104589$$||2f1041d1-77aa-4f07-a4c3-ef245eed8daa$$A$$fs7u4qkNTMyb4yd5vtFf7m:APA91bGQYMcSDB6AhltymkNHcvtubuP66OO1nIXdBfgvhnHY4hxo5VsqddixM5WId-Ks46ZSZMndI8COQdTw8DaZrHPIha-vcm8dRmziuPQIdXVb70_rL_qvmcXxI5-kIkkjHIAVBPUc$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=2f1041d1-77aa-4f07-a4c3-ef245eed8daa&phno=01074721311&seq=104589$$||300be460-e9f5-499c-8a3f-8183f4ec6aae$$A$$eZKO6EY5QSeHUoz-k8hWlJ:APA91bGj-S-zx4CG5Mghz6wAWjnUahiK1lSPC_xpgqKP7WSPqD0TAacRZ2D69V2KPP0HRyne9dTB03J6xisCfpbxEc45FpQ5_PaBZgRZc2ZueUJ2wpAZ-fiLH9ZddjdDl7ema2-KgxZn$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=300be460-e9f5-499c-8a3f-8183f4ec6aae&phno=01045646609&seq=104589$$||22062873-b4e4-4112-85b2-bf29ab32e0e4$$A$$cI3gp_BqQrC9895SINLLuF:APA91bG1KvdHICx-g7jqOi8g4Y38gEBPyRP91Rsx1BYlDMqLmQaiEUu2s6afCIGry0W3pS42k47iUJuvc27wgRluw9McunZfVY9EgdyJaUAaWdGOOKveml9axDfaRUgLXHJzYSxR-rd7$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=22062873-b4e4-4112-85b2-bf29ab32e0e4&phno=01054300277&seq=104589$$||4f03966b-ea65-46b6-a00a-309d7d1acdbb$$A$$fl7GPU4KTFWo7ogrxHfbc-:APA91bE9_P90zpUTHt5C1e9blDcTcYNTLvXZH0PLPAYZSjnlCnOoeOcZZShTzUjgIAgj7U6iflK-2asDFQIXGdFp5u9jFdU0ekq81MFhR6Z-tUWi_MaUoM3EVUeWabL8Ost9IkCFOIIl$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4f03966b-ea65-46b6-a00a-309d7d1acdbb&phno=01038938352&seq=104589$$||694619cf-13f6-4d72-a13e-f3f03a895e06$$A$$ceigr3qyQJim9vPspU32af:APA91bGG2dFdO1EB4KiBClRcjkMowIdatc_Hqp3yftujdO60UMrUlMvTNsksb0tdpaaLnUK9zftSfxW4vBIJux70tbeT_LiScvbwrmXveUqMhKqBGd-91paILA0fktQOe72CKoiPloNk$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=694619cf-13f6-4d72-a13e-f3f03a895e06&phno=01053095720&seq=104589$$||5bbd3035-850e-4a0e-b367-b41320428844$$A$$fBRzIDPsT_C4kN7wFYUCRy:APA91bEOFV24kirFcUeI9USJ-665Hb6IZLFAE0eJk4XYaW0gj-1cEGf4qtmUhdQohBEgfpcGm9O2VgH6VOH56qJ79XPxSQNDUnj-J2jRnU6XEh7qrfDY0Ip543zPMnxkgvN3JChytuQO$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=5bbd3035-850e-4a0e-b367-b41320428844&phno=01057521577&seq=104589$$||04f297c1-568a-41fa-ad5f-430285e2364e$$A$$fQv2DaiKTm672wLJnoj-sd:APA91bFhoiZyAFBU5MfTi4ox_FvpYBnO57H2PlbusLfu7JRzZ-gVMhtUSqaMSmnrKVauxzT2vTuq-Cem6jrVbaEmHnWfJUwJ8G36yCY5DbrWmqF_3v31FbLnzKp80I7KAEPVm89vrpJG$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=04f297c1-568a-41fa-ad5f-430285e2364e&phno=01099583699&seq=104589$$||9ebeb330-5e1d-41e3-85e2-d3ec1ba22c7e$$A$$cNk5u205SfSgHIxzkmPyjN:APA91bHJCydD9K7rSy_6TfsiC57whLdmDl6IOcXOhKAIEY-VvEg-oG6M_agZtmienLRoTtJ3dLLbU1-n1fiC3HGf2iND9cSmYLtVm0Tyqlt71RIYb7ZWxyKbxBaGdZT9ymwpnjABOH5P$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=9ebeb330-5e1d-41e3-85e2-d3ec1ba22c7e&phno=01052649917&seq=104589$$||71670463-da0e-4663-b195-741296a9b287$$A$$dNZV2pJ9QYaM2u-ALm9LPS:APA91bHVKwfPykjMNBCHr-sQH5z6VL8D_fXEZo3-VaoH6vFEYeBlidj68ptEtF_mA83bU6nNBxj0R-0oVmZv_oBz16rLBrvNC1qYCp7giieitFF9g7tZk7b6Par2-Ac-wN_WEKV1M5V0$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=71670463-da0e-4663-b195-741296a9b287&phno=01032759766&seq=104589$$||617f4301-1ddd-45af-82fe-8cacb90d501c$$A$$dfPC6cAhRjCeVtCNFWf2O4:APA91bHko-b6NnOoQx6cMsnY_XmPtQTxZGZig2cneHfzOYkdRYPLqAtQi4QroQTqWa7zQngliMxwSLJCeyTKev_fabh6AVaMUSiAJP7Na_QdHZX7KseiEoZuy2CB7geM_59_VDNMMD7M$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=617f4301-1ddd-45af-82fe-8cacb90d501c&phno=01029827747&seq=104589$$||8fa1cbee-324b-415a-a9a1-733921faf183$$A$$dpzq9ZXgTeyqAPdVeRC2Zk:APA91bGU2msRqTuJ0WxGPdIunpBqc8Yc5xZL3sNeQoPVV-HnKBb90JIdLaiU0tHuhIlniBlSBrP8Rx53AmcKizNyJ8c8TN_kyBFlDInX1ph9rf3koqvYs1c0_zHpZ8j03wwjKa-Z-xnv$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8fa1cbee-324b-415a-a9a1-733921faf183&phno=01071613653&seq=104589$$||d484400c-9dab-4338-80aa-9bdb785d4ae2$$A$$drlkueu5S721J93OvlURC_:APA91bGHbO1oRsrnCfK0gRCqRE-09UH-aUolswviqMXLzOpdCjMsVcuS9tWyZz8zXmpjsVveN6UaEJZf6CRPFvDsJG6E2YtRl-vmJoWY463VZpDbVecG88MYzE4SQ7yn7ys6Ee7u-Ss6$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=d484400c-9dab-4338-80aa-9bdb785d4ae2&phno=01072473968&seq=104589$$||7673e6a8-87a7-4352-9950-2dfbb49e710e$$A$$ccgOy0kfSR6LS_H2D2_c3e:APA91bFo74szuOr6d5-LA5XZQJE9156zU2TEkM5MxGaQ5nL3bXrpVhQu0sZGeDXEUP_C0jhkTg4zEn8N9W0BGRitH3gFcCz6eGI0Jyccg_ZhGt9f0kiBRYQrkTqPrcIneW0k0A9W17dq$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=7673e6a8-87a7-4352-9950-2dfbb49e710e&phno=01052264344&seq=104589$$||51943361-8a93-4971-9c2e-72bf85dbdd43$$A$$fIbcr3EXQzqbIQY53jZgU4:APA91bE78zMrpQO7DWYf-qm8RtzUyd_YXHYzS8iPr_pqz-aDnEWwSog7KdnoQLDm6idEbImYJw4M4zWf3NJj4xegiv8o1KQR2bN6WRzMWW8CAQ-c8LySrU--ZU9ZDZnlFBcVAiSxnt0f$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=51943361-8a93-4971-9c2e-72bf85dbdd43&phno=01042396676&seq=104589$$||51943361-8a93-4971-9c2e-72bf85dbdd43$$I$$fDnYGmLzZEw5hAqlJ1bG-2:APA91bH5bpHfPFlHwoQLJqmZ7lXup_AXX9o35NblVoHIkPtqg_adxhOgURE7ungVb6wN7UspchksZchgtjvIfAXPM367pP8qTsiyErTdm5MIYBZHOTg3JmNt-rhKxa4SS5j92lF64-yZ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=51943361-8a93-4971-9c2e-72bf85dbdd43&phno=01042396676&seq=104589$$||e50c406a-c8b4-45a3-89ed-3fd25c39c617$$A$$eQkbo6E_SEyOMmMLn-4Wop:APA91bEj1otMQTOYLDogHw0Zah1uxL8H_J9kHCP2RGZC_BM4SSH6Rq5atMLn7_NevU0I2hAyCu_pFXixPIIlpRlmAYpSgl3ITy_STwipZlip7ckpF3sEJsA4rnNxZTHiHNGa-Rq-MpEH$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e50c406a-c8b4-45a3-89ed-3fd25c39c617&phno=01022853185&seq=104589$$||6a83446e-f50b-42c9-9cf0-47b242acdffc$$A$$cYuLrWPORUmJ-8UHz4dr4V:APA91bHRfRqN4_gIBNgZkwPNMIQtFragqD39kt4UH2x7B-uBnGjao0eGdZiG-JxYlKjTeP2lyLSHs6zKRaUjPvwJplbOI6v9XjoFq7wsFXdGnDQy7ORzXmohykIOajg9ONHKz4XWPIHs$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=6a83446e-f50b-42c9-9cf0-47b242acdffc&phno=01094099157&seq=104589$$||35b21f50-12e7-40b1-bd0e-7ad4146ec9f7$$A$$eLIKlc4hSLOAWdMFUZxygn:APA91bHKQ4-XC_S7gMWem5iky7I62XrS1PSHs4zJmEe6as7DJO1sOlV0OwI4Pb1Az3rt72NtJjq4dvnvX3npHBqQpLmHK9zaJZx-4lFQMcFcXuN492oS43E4opj1zcwSVQbYut-KQW2d$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=35b21f50-12e7-40b1-bd0e-7ad4146ec9f7&phno=01064006505&seq=104589$$||fe228694-7bec-483b-a2ba-c3af3c3d9bd0$$A$$dK0GWF5PQ7yGJVnzBYJLd2:APA91bESrGW3fBSWWtqD_0ZTfvsuQ9rvaxrfkzuvcRtOCm49m2s1013D0xoWyIHsfau1VHE1h1V0O0kaH2Fs1QkGXcXWGpKxjdyyFWVyyv7uB6z0zL2bZLxM5atZIsOslDtwkvYRhXRD$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=fe228694-7bec-483b-a2ba-c3af3c3d9bd0&phno=01062146719&seq=104589$$||7a37d608-28d6-4948-8b28-789fca9d12bc$$A$$eJHCIXwJRx2oJPJkIUJhni:APA91bFVS28PC3CLmaVZK6NG4Wc3LbNwEJLoWbxvJAe29LOn3o0khUEROv4D7_re2k-jXnrt3u38Xe_jaUIkZvhXFy2Rr7byJX6UQnu7I7FydTrAE9k2skyb0T_MyD-bqD1E8mM8pFqc$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=7a37d608-28d6-4948-8b28-789fca9d12bc&phno=01090604786&seq=104589$$||abe8b91c-ed64-4987-9101-048b7fbc9670$$A$$cQfcOpXLRiW5hx_XVQGpVn:APA91bGefwCHhdUpsLVvEjHrcyR14Iz_uQbUOApUuWUHQfso3-qr7wWCzXGbUIXjckcdbmOq_h3Ue6vPq90eXzDZvbv__EcMwZRqVqQcBHyBjosoS-Q-2zsuoPdM1fdW9nOlNnbpk_8y$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=abe8b91c-ed64-4987-9101-048b7fbc9670&phno=01024404657&seq=104589$$||26cff6e6-a812-4e7b-b548-d336c9ac13e9$$A$$eFUc8NN9SrqH-SYFIV4vh4:APA91bGlpEIDqxl6h9z_aiuwx06Q4DnIVlpT1CNUTMIfABODgo-r6r2PzZXiOuoAhhpKSF7LdtnyWPGWfIH3njyFE6fBAZn3RKpJmISR0v3hEYolrNtXfXGj9zBuZNRVrUuBArgefpc7$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=26cff6e6-a812-4e7b-b548-d336c9ac13e9&phno=01056159411&seq=104589$$||a713d441-c4ca-4ba9-978b-c3742fa2c222$$A$$dyFGQ90kSlyy5SH95jK6uw:APA91bHEKsb9PWK_wUUbUK4ykG5XjJ0X2aPwGLQvjGiaMWBYMFm9OBD-xMrlTLgEod0dP6NNJs8YKsPSVwplsL3iST708quQx58B9ZaGv1nzK0uu8SzwpVvuIlq_Iw9BL5nhq7WUFnBw$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a713d441-c4ca-4ba9-978b-c3742fa2c222&phno=01072900052&seq=104589$$||b10671aa-b407-460f-9462-b942255a0641$$A$$fM8p4sTeReycILd6jicIbH:APA91bHxNLVM6blkBVyICbgt-23aGq_uAh00VuUB5ZXcInUa_CVCmnnIcF8xMNSdDWqrZEXuag1jbEZ9o_n5kJlCwVjLiWV5BKASPjO3J9Iy0mKzGuES8zvBHHEdgnkZvqOvyHckroQC$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=b10671aa-b407-460f-9462-b942255a0641&phno=01033820093&seq=104589$$||3373bccb-b0e3-4f3e-824d-780db281916b$$A$$fNZzXEsQRqaE8WZCNROMq1:APA91bHAxld_wHTXNtem7wxXbuieRgxiq1QC19rUbGShraSDLhcFMB9h8UAE50OhFWWCR9vTyTmow5mubVBKSerjVDxUA9qM_s2NiCog4j9luqV81giRPk6tqngAjVf7iywQvW-KATAk$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=3373bccb-b0e3-4f3e-824d-780db281916b&phno=01076450011&seq=104589$$||ccf9e104-0c2a-4d95-a348-50040e6e2f1c$$A$$fq8mNV8KQ4iwfE2_2b-wDd:APA91bGDqEL1td9K6qm7gB9RHEui4y3RNaYaB1-5HCUa5yMN1R0p2v6RpTeyujNAueaOOFFqRS-1AUS9sH0eV1_IaZn_lGvvBRXmXLRUnVCUfuVazSG3MWzeScm9uI7R0oCmU8_tomQq$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ccf9e104-0c2a-4d95-a348-50040e6e2f1c&phno=01032773243&seq=104589$$||8c308c06-e01d-4499-8eba-779a1ed65660$$A$$dw8AghfRRtWXnTWhOP-AEh:APA91bE4AtQ2gm0XE4kPduXBVyaoICRU5KBE_4TBgfSAxH6l6vkCI0K7gWxixTUUjfj8NrC3_sPJ9HoQsgx3u9D4ubFV4TTlaKbwjdxTbGrCgT9AJ18WEZsnf5O2mMyIPQZBh8tk0QWq$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8c308c06-e01d-4499-8eba-779a1ed65660&phno=01090362435&seq=104589$$||d2c47a28-4b16-4575-ac62-8f386d7329b9$$A$$d8KUK5ooTAGct19QC9BKME:APA91bGnQV7LOOWxlvdSs_OIE7uty_XttWGGkq_7m_nbKPPqpiAaPHktlwAvlHpMepuNtNJqTZ4EhcDyb4uQZfGBMVyh9ANKUjfqWuMXChZYSEKr-7fVDGpYqMVWprTFu5NViO6iFYjn$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=d2c47a28-4b16-4575-ac62-8f386d7329b9&phno=01032708948&seq=104589$$||dbd89e17-8d17-4b50-854c-994e4718e518$$A$$c6v1epORS8OoANNwZ2J_cR:APA91bHLDlYd9-oz51W98ncEgVCFufxIkXwByhoJ24BQdft8z7e2IPdjsBOuWDxKpNPrJll59iJW68wfCOjFGYz3mwv5CMn50MALeWN1fo3kV_SY_iSXHzNT9rhPPf0_TD3P5Kf1oVP7$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=dbd89e17-8d17-4b50-854c-994e4718e518&phno=01026825838&seq=104589$$||a5804cd8-1cbd-4d16-a562-b5bee9375759$$A$$esgQkEBqTteS7l-6Kt2OAc:APA91bHAP9DESBYZ5mXbSDx3YvrXpYzS8pzhiktr1OlmQS_jSBbvt8RuJRHCPOBmoNt1ykNVfG0-diZtb3SpgAlCVOCAUApkR8KEtRogngKtM5EeTPBTjTD1NUFtzS2zWDgtg1J9kyjP$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a5804cd8-1cbd-4d16-a562-b5bee9375759&phno=01056580054&seq=104589$$||4aaffb92-28fa-4e07-918f-b2f737e9d78b$$A$$ejt_VDplSPCidmy7eZt-tI:APA91bGU1sfEQxJU1Mvc42RSzAo0CqqgFHDWIOGI7Iyaxx97n582LVP5oYIZ8aRrLkhbIRt6GOL6bt-X261Trq0D16rhxHDOqlMY4MC6NQS5KmIKERjDIH0XFUaEXU1TVHICDSknrPZ1$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4aaffb92-28fa-4e07-918f-b2f737e9d78b&phno=01087458552&seq=104589$$||1573f240-d35f-48a2-ac1c-5258c66aa196$$A$$ea_uMFgQTqG4P7H_NkJY2F:APA91bHQYnQDpM9JXS2B_sUDvEDrYq9m9Y0zt5QbrvmfPbe2R9hK_dn-Jn-BKYyZ9MxFEGAGieFF7GsfMzHLeeQLk3VnwhCJP4kQdKUWrsCOxziPjBxKLzsSjpNE7rEFkqTN1tNtJ41K$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=1573f240-d35f-48a2-ac1c-5258c66aa196&phno=01045367318&seq=104589$$||3ce4e8ca-48cf-44e3-b355-912300d59301$$A$$d4VLYwLuTb--Qd1oUs9RWm:APA91bHm4IiobY8k_SQ8UYctc2k2blfy7p2peI7jX1o8hlwyx9dnIlQVw-Rt8dgVnM2wTMRoBMXCrArCAY32E_3kd_tBhG_4UfxtKwR90swc_3tdsXym5ex4sDMFbZ2QYBW3qrY5Hv-U$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=3ce4e8ca-48cf-44e3-b355-912300d59301&phno=01081029497&seq=104589$$||8c6e000e-f4b5-4a07-a168-10c199db376f$$A$$dfrNhwe3Qw2wqrTBQ7HjpE:APA91bFBFnbJckHVTsHR2zLov1Qe6Wnyz9JPSyIFP-9dsP2JxSLJhCzzUE4T52u-bkV6PqhWRWj4AyZDU5aLR4i6T-4TJK1lJ1bG38PAeXDf4NQPBpzcXBNtTFAZvIf4Ta2K074438wc$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8c6e000e-f4b5-4a07-a168-10c199db376f&phno=01056402219&seq=104589$$||58bbf68b-883f-46b0-92d9-8dff89f377ed$$A$$dij4UENqRSmUaImBg7yCSq:APA91bH8xvqYUV0_YmZzXkOBRyCET4ulkskAKgDS-xKRF5FQe0t-cR0cZoLk2Np9ihMNXqE5flyewVHPMA_71z3abajFQIaOwVU2w1rxK-Tr6dySNM-o-azdTnDlCUZLf5eroZX8m0BZ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=58bbf68b-883f-46b0-92d9-8dff89f377ed&phno=01045409722&seq=104589$$||994d453e-9b4b-426a-b463-9a6bffa9672f$$A$$c0Xjhr0oQuuWSaf7bPiz7T:APA91bEVfMC6T3V7Ix2ii8rIzkUCaPmR66m6ZRbJOEaI3V1iuSqdfi3COC_aXHRPgbZmLYCuDbZ5JoBs9661FyiK7TcvPdUWLS-UOid027xS6Da6gnctXgOUDIK9wQc02xaBjAFE4XCq$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=994d453e-9b4b-426a-b463-9a6bffa9672f&phno=01023385974&seq=104589$$||01bf0aa4-0b0b-4246-9041-1c36389e38e9$$A$$fiI8O6snQKWtUmxQR87k62:APA91bHxgktYuCo0RIbbdmFVhSZcW-Fq-Rr3Fuqw56LPU-BSQglMBM6upNeM9kj7qL9L51d4u9L0hivxYSF1Q-hD5yLtj6C1TVpHXTMaXlhGr369hSVvE52wnkQkPzfk2N8rQ7cCCQi3$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=01bf0aa4-0b0b-4246-9041-1c36389e38e9&phno=01031312816&seq=104589$$||6a4aa51d-467b-4047-91ad-7c4830c5295e$$A$$ec43u6jfQ92BV9QYBEau_Q:APA91bFXNIEoXT7_gIh8W4h_xpDrwBV4WlNJtAhcsC85u8YU0PpAAVEUaI1JbzmfGs3tlRuSg7stwqnbGrdo6YlBZpbkNJ6u8nRXjUvFjJW2IjV8D37s8RNfI6WFIPK4DwKUuLL37mDe$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=6a4aa51d-467b-4047-91ad-7c4830c5295e&phno=01091161034&seq=104589$$||6b281a68-81a6-444f-adf2-c59781c890fe$$A$$dxJuyd-iRwK0z_8AtM9sWC:APA91bHZUtt_KtlPLBGUlNAnbXE1uXUgn0tfvDDra3HHmhGn-O5K2PpX6lLgmNAp8NX-TMwnylsKxAuqybx7bdmZju1xCPOFtQFskhBl1PtltR6GcMNIJdhYGz-yYUaU48SICE_wwxs2$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=6b281a68-81a6-444f-adf2-c59781c890fe&phno=01049315716&seq=104589$$||498dd022-83f2-4ac9-95ec-ae25bf273772$$A$$dlMLIYTNREq2mHsn1otHPZ:APA91bEmrClXtLR-wklgewR4H9-vbtyS0pv0Xb0xD1KIr7gCgSVUeFawrbOc25aJnlANO9_OJKzsvDLM9zl53QG21iK2qaOT_0hfamoU1Ni8ohOtRYAxe_ExqGHjlH2Jja0OzQWZGeWV$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=498dd022-83f2-4ac9-95ec-ae25bf273772&phno=01076890120&seq=104589$$||df24c1d6-07d3-4801-95f1-839891a4e999$$A$$fS8Z_R02QjSlJ1heDie3Eo:APA91bEChyu1dnaSM2Hxs1Tv0IdRHYe8Tg8Q2a6OWPDxkJPwwlNqbSqTldgdQDIlfBM4WnEjFCRsNewkhFxUsKE1UBw2TFmefbExFaSpMldOQdro32EeJP0xo9CrDm-xUaf1LfntFnhF$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=df24c1d6-07d3-4801-95f1-839891a4e999&phno=01031589206&seq=104589$$||7beb3e0d-bf2b-4ebb-9457-d338c974b384$$A$$cUq0tlxUSOaeRvLQGdx5jI:APA91bEbOCxMm6CM-RP_zFJtD1UXA2UETpoBKJ8yKHjHNmoyAa9LMC-9aiDf7JlRLR5_cuIywt1lYcF-9fEX6cxVUsrpsYKxq_kMfTn5HabwNcS5i9DSQBYHBXtD-0Tkf-Hf7Lx3Y-vp$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=7beb3e0d-bf2b-4ebb-9457-d338c974b384&phno=01098985398&seq=104589$$||414fd745-8d01-4c7d-9cf1-a03129898c1f$$A$$cAEJ1S92R7qmED2fEEAYcc:APA91bFnR6vHQc7mWtm8Ro2VPFjbfR_a8swkPF255rETAZuBqncHoXIDl3cXfvNe7jiAECnVXnJIqSyLhs7Z2dVOArge6FalpC53VbftVfxAzjEvORRNpDmB3602rBZY1eccramZi7Qu$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=414fd745-8d01-4c7d-9cf1-a03129898c1f&phno=01089209570&seq=104589$$||e86e3f2d-1da3-4bf5-b7d9-55f84f4f24a8$$A$$c0F-f4z7TtmScwD4dGDJxw:APA91bF3e9TUfuo0tDOrgbp32vQd6AZ_UdoDYkm9uHctzR-qBojZR9XwTwZ_ALj1rAt7ByvKuswd4Li9aTde3wBlQarpTVGWAN5xcpxGCcdy6djTdzfI82oKAyaNnBwrQ1g3e3K273xC$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e86e3f2d-1da3-4bf5-b7d9-55f84f4f24a8&phno=01041575101&seq=104589$$||dc517aaa-caa9-4739-847e-13aa092fb94e$$A$$d-jSyp6RSpGOvIeV93fQdJ:APA91bECQdHFZO6fPQ6v5ly-sVgxyrKnvGCviCuQIrnFe7w4hNOmAn9C2rKPEmwvz_iYd0b_rlpt-CGGHT3aJY86fMoiJRV1T6bAcnEq1gmxtMyQ_QJcQqTor6pRAFaZWVsHzzkteD5H$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=dc517aaa-caa9-4739-847e-13aa092fb94e&phno=01048795534&seq=104589$$||e2f63195-0f64-46b2-a7f9-2ac0d0b4545d$$A$$fkniJM9xR1qGrWBv4oNvdy:APA91bEVtCJLvIAMPoCs94mAjTOGhOkWpPC-o90spK6JmID5qhgpmlVLn6R6eQffcPkDlRrTskgyBg9pGs3BRlRzpte_wPQ7g9HLGD4jlozZ4F3botWdx1O2AQHkKjw3kd5WqDjyAsJf$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e2f63195-0f64-46b2-a7f9-2ac0d0b4545d&phno=01035290031&seq=104589$$||f968308d-7750-40f1-aee6-f394c4e8ddfe$$A$$dEwwLgA0T-mU6jLNXkQJAq:APA91bHUGDbuCKdZfTIwD4Vx-bFr9nJX__NkzlHznJ8f_B5XHhRTUVveFxtECsIcymelHVEFvQ3kd-DSC33lwI5hphmn1qzFdWxqdC03Pwre_wWSXwwLgFB1KIEIEgDCqCLJ2av6y5bx$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=f968308d-7750-40f1-aee6-f394c4e8ddfe&phno=01052175965&seq=104589$$||b2561425-b470-40ab-95bb-34453de1119b$$A$$erdpEleIRXWWX_y2OBjgJy:APA91bEU1YKg3xy_Ss8mNfv31RqxTWYyu1nSdio4u1TcaGiMoL1vibmaXvOZYBGoua2raooQvrELsKO-dugaHlfHzIaQNhtiVIb0X9zydPqH40hrAaHP9pK4kVB90PP52dFsrrYitA2b$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=b2561425-b470-40ab-95bb-34453de1119b&phno=01089534785&seq=104589$$||b85deef0-8863-4d37-9d24-aeb56c9b9dbf$$A$$f473WQIPQdCbf_sOXc04Wa:APA91bEOMq3IQhUtcFN-gI-sQpU3co2jnAIgFVkUkyaKta1sG9lW_6RjIDysU9HJRXswbY9bw08n5t92YGJvvz8JxuMWLQRNGRMP-4b7MSsTCuiXM2bQc0j1akeBHg_13TCYxLqkBA0I$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=b85deef0-8863-4d37-9d24-aeb56c9b9dbf&phno=01086536247&seq=104589$$||68c40f39-8c71-4c82-a1ba-3ea517d2a923$$A$$c3iwtMSdRdKy0IoA6UIR2f:APA91bGJB_z-P8qBufGisJPK9_jvOn4EJ8F_CRQuFSsBC3PcvuQ2CBpM1rFKirsv5ddfuRYCsSYNkKB_sZOIo1vgg_NU-gxLef5SQDD2bbs5TDQ4hWwSeRf_Rb_-OAaW1anGCH9ZIsov$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=68c40f39-8c71-4c82-a1ba-3ea517d2a923&phno=01072655615&seq=104589$$||ba59c810-58f1-4abf-ae84-086f376c8730$$A$$fD4rH8DgQWOW2mBrhS7aCK:APA91bEQruTcTWGEHqyfJr0bS2gVxNiReBngfabl_CF95k8_bkYvwb2aPjuCyy42qZxohVerdoE90IpBKAUyaFb8buQ5uv4RiFuOS38Xy1M2h0b6Wa5fSHckCjY4ba446skBaPvHJlw1$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ba59c810-58f1-4abf-ae84-086f376c8730&phno=01027198878&seq=104589$$||92555808-8ad5-4c99-a3a4-2a5fb814b545$$A$$fgtl4anNRoKc6H29ICg4W4:APA91bHsI1QxIuwLGq3MZxPcKTGtoGSz__EMjaIEruSxKn0mGKeJT7bzyLDWZmAJawuklyZUvn4p7o1J-78figEcTgAMAjg43LypX3-4SG62PuYIquz4ap2eak_zmJIY15WAxhIdlASs$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=92555808-8ad5-4c99-a3a4-2a5fb814b545&phno=01086150757&seq=104589$$||0feaf525-f8ed-45b2-9d14-87abc40362ee$$A$$ermrzrr4Sn6w0OnsXttt-8:APA91bFdPCKGfZQe00zDF9yPYlt38iOfe4IXM_m1Lh2fYE2tfCF2v_4YgnS8r9gD7LFhm4iol7SAuGBBhH7aYKPTWVVv3PSapcBuEOiqeXeIo_COHsj0Y_xANL4EEhs2cEUIDxCNlxHX$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=0feaf525-f8ed-45b2-9d14-87abc40362ee&phno=01051185185&seq=104589$$||8d0da9c2-f4bd-4897-a377-cd29284d369c$$A$$dWV3eorjRGW10REYAuqoRi:APA91bF0sGNbI-VLeVIKhbyIcP6d1jL43pleHFbK8cZ3CtyHSA1WCnAvOlnGn_eDmZoIfMF-sspDlsRDexJjeOB2zHfPE8D4j2FNFvuPKNK9v0ZxU3jq8hb6Z2L_t8RDp0s9Wmw29AVe$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8d0da9c2-f4bd-4897-a377-cd29284d369c&phno=01089947388&seq=104589$$||77799859-8678-4004-8dea-90ed8aae5f67$$A$$dABiHEUlT-GFb4KcAq7Fn4:APA91bEw-5e4yyyeboaylE4CW7PqfbC5nJHAnUbeJFHs4XNoYD-9XfpWvUjUJYXxswxdBap4KVRjFjlT7MDoisFV4-zAKLpMB2b56o48nBmvyUVO8WmxyZ67QI3zgiFtahCFkf2WT6XC$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=77799859-8678-4004-8dea-90ed8aae5f67&phno=01023252164&seq=104589$$||fef3d83a-09c8-4623-9272-370a1f0f9f39$$A$$dpBc3ng2T9WUsP2jRjZfD8:APA91bGHX6JeUGfrMPe65kIIj8Vy8mJThCDcn5Ppjj8FdFwT4qugURTxZ6uXEl7erC9Zk1BwLjAu-eC2FtfIHLhD3FLBd1h3xdTvtG2aiEQzQvb7LpqlegoiipZR95z4HSgLj8IxuDuF$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=fef3d83a-09c8-4623-9272-370a1f0f9f39&phno=01030850779&seq=104589$$||b472b9fb-0bc4-44ad-9c1a-39ceee570b60$$A$$et5R26JrQc2xXD3yWjuPn0:APA91bEpjS75m6fjmaBgDJ6u4AM9ds7cHORO7OL1KOu0ph7KMTwBdcJfUUnw9EZJ8FV65rlZVBhAXz_TBBd39euBbF3W_MyFnj_-ply0fRvMZCxy5JJynG6OigAxj4PJY3wBse4NVkRd$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=b472b9fb-0bc4-44ad-9c1a-39ceee570b60&phno=01072740086&seq=104589$$||74d3755d-6d24-4d3e-9908-9dac6d578dd8$$A$$e7tNeAGcTfOROW5i8Q3qPp:APA91bEpedpZsFYnzhGnlPpTK_KbV1MHgV-jKJoq1WadpeawgmbyBBCeZakyQu__wBizHRnHYsO0kxy47nDhAk69jrvN3N1BPCyyhyVkm59hNivi0LPe4HLT-uNA4Wtnbwo3EN-Lgvwg$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=74d3755d-6d24-4d3e-9908-9dac6d578dd8&phno=01034983689&seq=104589$$||457610ae-bf40-4f9a-9300-962a7504da84$$A$$dq-RWDOKQ_6At3aiDTO79A:APA91bF_D_RvuHRiNuCjMW8yOLvkX8-7GV5HuTFVMr58xuJioa7NMIumPJmwtuqvz4wIYPJFuUhzXAVS6WXYbrZA0ROibTr6dmKvqcjgqRH3CECHYeMzc7kNo5vYV3xrMptZ7ob7m-4V$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=457610ae-bf40-4f9a-9300-962a7504da84&phno=01020182291&seq=104589$$||d29bba3d-523e-4727-88cb-b4fdf7fa958e$$A$$fAzZCed1T4CSjfwZPILx8D:APA91bH_vgALJlhXRVsqnNEDH8VTljQEyaXEyHLYuasCbbl9LvtQ6NWjl2OBq4PpheVrLzMRACLZqgCgiYaOLc7VGoI5UjiVgHFpAUqYKS1Il5Z6FsJn3MjDmb9lnn-WtWDRL07q0me-$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=d29bba3d-523e-4727-88cb-b4fdf7fa958e&phno=01056877619&seq=104589$$||19b9d7d4-0ef7-4673-8c6c-e98b0e19237d$$A$$c78uagVfST6GLRJLzd8x06:APA91bHm7RpgEjd-kuCkAuWPeT_k_C7N8c5B5SFV1OXBtQ6hd7-Y5bKDBqAQLY-OpL8IIMQ6oUyoA0fi42S7NtX43KUTP9yQvjGmvmuk-qvYNYzxHqiR6sYDmhHlKozSZljvQFSaUDbG$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=19b9d7d4-0ef7-4673-8c6c-e98b0e19237d&phno=01075164225&seq=104589$$||84159beb-a178-4ae4-a513-9b3b57fdaae2$$A$$cJ0-4g6OTE2TPD2Cm_ydiB:APA91bEx_xFfMMHZOwfU2z-157700LUK-X_ykxIL5x5PRuj344UDezdnRyPzlgWDYmOZpObgfalfG_oxuJtJ38nEpwm1Z5DbcLQuI0kLVNdMKUfZTcr5qCUT_ZYZOPwWxt2LvE0Z23X1$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=84159beb-a178-4ae4-a513-9b3b57fdaae2&phno=01072983822&seq=104589$$||d0750324-eb71-46bd-b92a-38d38cb080d1$$A$$fImozjvSS5eB6B1x-5hGxM:APA91bFmQ25U6xH4CP2CO1grUwDUL9DXc1I76VKRl6W6uTgNerUnnmS1FCt0jUJGgMo1ghI1Z13jqssk0duwPYEAbbhPd68XtJWbfugkfU59E1FFC6zfAPhvAx9eVZolyBEojVNQQ3ii$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=d0750324-eb71-46bd-b92a-38d38cb080d1&phno=01097115926&seq=104589$$||6816b0e0-396d-4869-8268-5f29694f630c$$A$$fBCBR3WcQ9O3aagGVn72gz:APA91bEvvBdxI5M3dSb8RGB-wDGNAy014DbX_zmxXpwXzTkkSWgTuxgQz-c2SUu3QiDn0NWg9Ue30D0EiSDmeDuGvF-t31cWAlkaPMLscZFo5o9wYijvB2ts7NOr5UkfqzPvDx9vos8O$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=6816b0e0-396d-4869-8268-5f29694f630c&phno=01037288445&seq=104589$$||4f1b6ff4-1447-4efd-930c-e9e9279d6215$$A$$dzYR-Y9AQ2K1Q7eimfzMj8:APA91bEOTLnzeuNVtYNRwEc6Ss_CiUmJn7MuAvJFqhwZi_SpNKYLjcrfqbw3lJchCRf6WJsv9hkF-dHDNe-Aq84zKLtInE3K1kRYxIYQu8aLzwv5iLeXUlsDCa4AZFeRwVKTDUZW3sKu$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4f1b6ff4-1447-4efd-930c-e9e9279d6215&phno=01039202002&seq=104589$$||878e8aaa-0b22-4124-9a3f-4d899eb66634$$A$$fTyzdMkJSzC2PBKVjLmK3R:APA91bEs60evOuq0Rk7y_-wdr2ExP-G8IBcxuam3O3ZdSK_T9aY3jUPGZ1ymgpnUTDzlHr8us5B4iKXFVCRWMSWEENhwhuFJZ49Jzr4fnso86sf8C9nophZ8mUQBKreaJZi1fzg94L_s$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=878e8aaa-0b22-4124-9a3f-4d899eb66634&phno=01032200783&seq=104589$$||141dc997-95d3-4fb5-9ef3-e471fe7f03da$$A$$ecHPAlmhRqioTnhbhm5pZt:APA91bHqrGxbyNVz5BXnlMZ5KQOolbenbAmDn-OVmmHjXUz73GZ347Zf7g0QFwOBmY2FuCfyqh1IrXUx_97mi988XKuCPeKR9nzG5tiPDdk8YjkCK7dmI_tRoeFosm0gDF3M3RogFElj$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=141dc997-95d3-4fb5-9ef3-e471fe7f03da&phno=01050218245&seq=104589$$||8a51fff8-a2bf-407a-a4f6-b65f24ff9713$$A$$d_8mzn6jQzmVkZ7ktG5ph-:APA91bHEiwgu1jPdU0CgW1-GTHkuGSV4OwYsqPr1XBFVAFdXcbJQBPo9FT1ndL5avAAZkGb8QJD66EjIT2Ml_CIkS0uAcm4pMrJEGsoB4bLaz4cSgTMBOC5NY6cfQgHBXkKD1NfeQyCg$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8a51fff8-a2bf-407a-a4f6-b65f24ff9713&phno=01045868392&seq=104589$$||de1d00dd-a37f-4828-abd3-6df038e8225b$$A$$eUvLMn-ATgK1EfpBqZV139:APA91bEzjkTQmyqe5HltAYxunjAb57NpNtRTyouICdDBIvbBS5ABcOy7GtBoTKpWa14uIZyIpJW3sEUnI2A-_ALr0RP2downi_G5kUi1RdCdVbwaL4NNxesJ977fW_qmmek1VqKBvdJQ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=de1d00dd-a37f-4828-abd3-6df038e8225b&phno=01049330364&seq=104589$$||3396543a-e1d7-4e94-ac71-c0e22534d9bf$$A$$fyGzCWXLQmmFLExdxiJ9cf:APA91bHrS0FsA0XnrGOKouwe-n9kZtGe0hcL0p3hNq5yf_sUMrPMA7acrB1S6sVBwoZtlNGcTmc8B_6qhdvmhZka7mXWkccGhZNeX3ux0hppNvDL01d2N41Zfib5WsFbDBoEUq0cbdK0$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=3396543a-e1d7-4e94-ac71-c0e22534d9bf&phno=01032291736&seq=104589$$||eb3c49b3-153b-4e65-8b51-28557bf6f6db$$A$$cnAJRrt0QBqCQpSf9ZrsTN:APA91bGrM0d-bY3OwDCpeJMkfMpp56NwZsGYszieL8K2r5z_C7gn3SSZL4fjyizWxctJ3y_7WtZDQLGLW5Z-QmFtvAJ9Et9-9jfrBZcB960XozT0h5X5ue9xZB-9Gf06YSn02hxN9q3_$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=eb3c49b3-153b-4e65-8b51-28557bf6f6db&phno=01099642250&seq=104589$$||52893cfe-a93c-4998-903f-14d8e05c3b4a$$A$$fsIeTn_iTFK33IoFW5kZSI:APA91bH1xGcSt661wL9UjRJF9uRsj-ripZHhw7x5TpFVfd40LwWhBq-iWyy2FIqfaQP-LlKtgQRR3NbbW_NQoIoZgUtQmBeOwXxOLtbbYo8HWP9hLJEBYpVM8mmBpOCrWDzDyf0zjD45$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=52893cfe-a93c-4998-903f-14d8e05c3b4a&phno=01073470667&seq=104589$$||fd0976e2-415d-415e-8fd2-e3e0b6c7b14f$$A$$e2zz6_v_RN2NeIgUOWtM6p:APA91bGrUA9jB6vjsMz0kl74gHxBHxiU2imxb37FCf4QQqbcBRNS933eK43ZrWt40dUzAtKEnAzy9yg2D4mjiHQvKfjnUKcQ_C3bN5lBjiTcM0CSMlc_obO9XnSGXEsPg2NXN0RZWtSl$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=fd0976e2-415d-415e-8fd2-e3e0b6c7b14f&phno=01082556605&seq=104589$$||74bd5783-e730-470e-a0c8-bc93dd1bd4b8$$A$$cJDaxd-iSzK8es-ipcBbZc:APA91bHUSFK_mVHc5JuVDYCwt3lKVtAl8bEElKz2S4t2lys-uHadthmn1kllplE-s5IIgEgu0-z7GVRuqxvIjYQMoWsbg52n1hy9B0XXSTMWKhmxuKUdv8DR0wVaw0GmdsjoquoTYNeI$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=74bd5783-e730-470e-a0c8-bc93dd1bd4b8&phno=01020763387&seq=104589$$||66024732-71eb-4ba4-bf1c-4405655b0bea$$A$$dlJ90RAkQwejP0Tklvn9WG:APA91bHvoL8KB7bTQp6orGpfEVr0n2A033EE1XhfP4vE9otbJqPWKS73iaDjal2z03jlo2rZVIkAwGYZr3xIadklL2v0LDy71oOsrgOB5SPs1e3hgZWlhamuXk8pxJzPNlq7TTpOEziy$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=66024732-71eb-4ba4-bf1c-4405655b0bea&phno=01093031595&seq=104589$$||4da33fa8-9351-4cb5-8ab6-a04414a83d51$$A$$fbbwkD5xTmaRGPYJGiqnl3:APA91bH44Cw07AAOtsrVQDcPb7juntEEeNxGdMflLcmMgiAAjP-G1UeIqAnkFWhkWTpu_By3ULCw6OGEcEf4vAEK3KRWUOR96bX3ogL5eKrRFO_tDIZjDhKTbp5N2A4pHrPwPv6KWymP$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4da33fa8-9351-4cb5-8ab6-a04414a83d51&phno=01027279774&seq=104589$$||ea72d969-ba46-4327-8d7e-f752b4ba4772$$A$$e7HY9eGETYmhHHgKCj1Jla:APA91bHMtFcCnv2FrS5LI_agspoNLW-gIR9Ney1ltW32ir1rzh5QznMPV6GLgk-Qj3fJPOR2AhetXWiU1ST6KErnsyk7tsFe4GutZShK4nTqavg5EtxZPTK0rDJ8G39N1qPX2HN94mn6$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ea72d969-ba46-4327-8d7e-f752b4ba4772&phno=01048843722&seq=104589$$||0b027d6e-52d4-44a0-b0f0-9ef55ce40002$$A$$fF6VkkzOQNWms77VrQAnR3:APA91bG21J7Gw3kvrlj1_0Obq1BrMcdoyqWAWgbyVzRnhTwXeTIYD_6_bpqhHFouyJvSBLdG262UMFq0ncAst9czmyeSDRtspUJ15jGxO5hhrqovUTuq8UDzQQJVM1Qg2p6eZy57_Pck$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=0b027d6e-52d4-44a0-b0f0-9ef55ce40002&phno=01087074349&seq=104589$$||a20441f1-a7bb-46c3-8b12-8632bb15da5b$$A$$cmjJ2IBNTreFxLfrgiIWg6:APA91bE5lp4zzUnUmeOOwPqqm_aRl0KXl7mqsaaP1R7cLIh-w2UXgE8auJ88hJIQ6GjbqIJcO2SZ3AVhwcaP1Zm05Yt-BSBnobK5VEL1lEzFChynBKJ1h2pTJcKZCK_KVWQoRQhdVHA_$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a20441f1-a7bb-46c3-8b12-8632bb15da5b&phno=01056973930&seq=104589$$||bb3ca535-fe5d-497a-8aa7-fabbdc08b56b$$A$$ceXcSOKpStW-aDxyH0S8hP:APA91bEi0wtxVFihnr8qtbGebfseYUBWm0et1732y7dwfEUZUFaQMo-zUzHQfD-WjuTiD0nvstVVYrfJUifS3ePr1qLu2OXXf192sRR01ZthUqFDYexagfOPR6Xs8hNqZZ-rAmBadry1$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=bb3ca535-fe5d-497a-8aa7-fabbdc08b56b&phno=01085105697&seq=104589$$||8ec656bf-a47c-4c96-82e5-a036882ce438$$A$$cyduV8mUSKKvcQC3VXNEKN:APA91bHwLEJdW5mpt7FI5EhzAbsFe6IWGHeOfVBuGb8BfubiF3t6_Gzfe7M4XUxs-55jjg_I5PPJumK7xGJjSi8mVmy1-ceqK8-mmhPDgPVVElo0eCq7KcGqIBw43Fe3YJEFKZfTOnBC$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8ec656bf-a47c-4c96-82e5-a036882ce438&phno=01071324385&seq=104589$$||19751f8f-06ba-4c05-8847-61fe619e970f$$A$$de16yx3hQv6uwidW9YGLMe:APA91bGBWMBAO4iRaVYBLu-P6uVlKeJrkwNXxnlfSFhft7Tbeg-DLGzTWSTif---xYxfm5mTL8fBv1WagfsKJPtUE5GG71KgDRzgiwiTzdgHAucy39FB69Y9p0zSeEHPMMJ78lwYLEfL$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=19751f8f-06ba-4c05-8847-61fe619e970f&phno=01084232339&seq=104589$$||4a6a0595-4258-4e1e-a0be-932626304805$$A$$fp3RQTT8QvOLfgSWNa46UD:APA91bEkkOYg5iDBBCKqiMOqPkAL9d3RBIXxC8zB5Ffv_JnPgMXl5lLqUIyrM0LFi-7vOaZN3cGm_yuX2pa8h8Nv3UHkpN_7_IfCBe_6aCTyWGLDWbJxUM8hd6uBpHcC57MXEqLgOIze$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=4a6a0595-4258-4e1e-a0be-932626304805&phno=01087745518&seq=104589$$||605dcd1b-0474-4fe5-a883-8c7b23cc35ae$$A$$fKWA1zT6TaC91AysQ7qTEx:APA91bH8Jr0aoBfwhsOQfElFxR19ifTU5fQ4PUl9cnQx4DeCgc_JEV8myaywSwy_Ui3LPcl4t9JOQ8cVNsiB6Jdg-_gtwdu1FZwjEENO4jSGcyg8yFpUeTG8qfVvmxhBvK8ulAZws1pc$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=605dcd1b-0474-4fe5-a883-8c7b23cc35ae&phno=01033265856&seq=104589$$||9676300d-8e6b-47d3-8e86-cdc4b42a7703$$A$$faQDEhenSpyzUlgK7qFeio:APA91bGaUk2dJSdVq0ZEcySA6GDMRvlg8HAqn-qnWurtE8Xq8oPJ1IWYoWD4eii5qXlWRFWJ0updctHCxRSAMF80iKEgG_OxtyF0CqhyQ3lZeIg5CQZGRV1inK3pFD5GfW6zfNYDByAr$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=9676300d-8e6b-47d3-8e86-cdc4b42a7703&phno=01044103838&seq=104589$$||32172c55-4753-405b-912d-5149c84adb92$$A$$dTdLeGwORTW38m01ikcJv4:APA91bFwT7jvtqya0YHYixgeQC9SX2fyKDB83dFJbgI9gYlRQvAGzSYzEnah39aT_G1XDPK7t2Zi9s6BC6WfA7tUQ1r9pCkSpA8zNPeHdIigcQq2u__3DxWn_OIt8RLWjaMYHlCA1-FE$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=32172c55-4753-405b-912d-5149c84adb92&phno=01092342552&seq=104589$$||ec7fe669-3098-40f1-a1b4-167acfd065ac$$A$$f-MU3lLMTbyASJy-tiT7FM:APA91bGSdDPqr5eNVLOlEh1p_4lz_Jgh9AqjuT-ddHZvx9W_nQuzRHz5scq9q8cEtP70iIAhibvWswVcMTDf1z5JjbD42C485jdKlV9p1fqg4SsFuotThQ6IPvBT05EAvKx2q0tLmHTx$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ec7fe669-3098-40f1-a1b4-167acfd065ac&phno=01063616588&seq=104589$$||0ebdd6c9-7e6e-4952-9595-e731879d63c6$$A$$dY9yoWrRRZCcETWMTuPZjG:APA91bHghIkNaq7ldxJtn53Mc2KxtDElCGh2Y47AI6TJXTOrPIuD1RKcKj2klyr6VKiz3cC1X0wM7jc-97ZKiBXBN7j4VAOqEGIyNnwtHY22sfT5cz1oloxRCxzafVPG0saI44AajuEW$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=0ebdd6c9-7e6e-4952-9595-e731879d63c6&phno=01030483566&seq=104589$$||c6f9d05b-a5e8-4331-8377-0bcd47dffe80$$A$$fpp3Y8JlR6GQOwdICIg_xq:APA91bHgRj2mW2TYj26MNdcse9EuZ048t0fqei475UfKuabhnUpRKbEyFEV-AW2EkOXn4y317NkLt0ifXnH3MKqwvu3A3JgtCtrpN3YihjFGcCt3ymTE-uWAyYS_yupAdbQxYFSyBxM-$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=c6f9d05b-a5e8-4331-8377-0bcd47dffe80&phno=01050915750&seq=104589$$||3f3d9b5a-a93a-4977-bc30-0368503ccb12$$A$$dgIujut8RG2YPX57lDVKqg:APA91bHlQXZcPPYNmZD8qhv6IuVUBxGV-4Q1UIef6jcX6qzy7-8cyLO4f923FTLDrYew1CViSWjapokArhWbbMdAF6XlppxtBKFr6C3n7mCehGvuHlWlPL0cJ1nEhMWRhkiKSDUFveb5$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=3f3d9b5a-a93a-4977-bc30-0368503ccb12&phno=01098085760&seq=104589$$||854308c9-2c3a-4c22-9093-149513be7be7$$A$$dOB6V7QxRxKVndwTQNrsBx:APA91bGlACzd1sGRdhPx3kuvUuHY2h5F9YWsFb69u6Y4Z1VJxX437W4nkxB4zntSe8JwjLgZIUFC_1qRsVrRCmk1HA2evQLYI6VzMBDXPbnjgxvFqbMBlqXFfqMXM5kRLU9-Mr6pq-Yk$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=854308c9-2c3a-4c22-9093-149513be7be7&phno=01037640838&seq=104589$$||ee234460-5c67-435f-88dc-2b627af16a0e$$A$$cEM-RCO4QbW4yW92qwW0ZF:APA91bH2rFlblkVW2cpyVZJntT892swscbEheKZYRxSlnnGfACwfrPzjMhIUXM9cbwjDo_jOAcVm6Q99yDVBTscoZJHOUJf3J2LI9uLOWfk214Qdyngr-PZEin7ILPi2yxDnbq-eNQKJ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ee234460-5c67-435f-88dc-2b627af16a0e&phno=01096995798&seq=104589$$||58ac61e7-0c4c-4d6c-8504-d50c5d8b5c84$$A$$dagRg7awT82bPlFYZRoeF_:APA91bHipsN6mEQAGQ_dJ7jZO_NLcsON7j6Y9ZtaK2QCZxMjxIolZ1SxeWSjaf2kdKWGz8qYTE268gOrqQPRxBm__3sS0f5QHBt1dk1HIzeAHxiwRFPnbZKtIbyaIMxW1cQeOTk4qWzX$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=58ac61e7-0c4c-4d6c-8504-d50c5d8b5c84&phno=01088615704&seq=104589$$||a44ad12f-6bdf-467f-9e0d-ca4ac7e00a5b$$A$$fNkifko2T8ukk3ATJRxNGG:APA91bGTz_a3zS3DUhNjdl-09phGu7HnDH4S3t2f-u8n8KM1aVzfFd_jb2S3ovOGTbFZbbLqV_WDZtD1XeH8zXOC9j9rNDlhcLwG5nimW5MZ4z2lY-Cemk5MoGAPUV5C63ef3Y-P-ryi$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a44ad12f-6bdf-467f-9e0d-ca4ac7e00a5b&phno=01033200033&seq=104589$$||fd0180a9-f7bb-4da2-b9b5-75ec52500e61$$A$$fSxOUp0MRQ2oN4T8V2zhIy:APA91bEJBvYn3C-oes7qL3e8xq1ZfDtclAyh8kAkSZiCs9A8I1wNXr4FCe4NC97xfSoNQPhKCo1XFa-01v8AZiss4j-A4dl7PfRtTceMhkRYsq4DS7zvJGaXJzzmj4xaHIxSOUKunidW$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=fd0180a9-f7bb-4da2-b9b5-75ec52500e61&phno=01022161967&seq=104589$$||cf90d834-7831-4ba1-94f1-c783054bcd9e$$A$$dbFiwkWDQuOSbZPwWZjLZH:APA91bE5R2YyuuGZWHuHpvl8CulLg6FY5UzBdLJb3RcH6RN8jSjBF4JHy0aGjJrpm-cvhS3QGbFKZMNiVQVxGEfB_qJ3LY9G0ShRz3VJLwUyovjPvnL1g5MEb5WV5Ui8PFuJ7Eeiml42$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=cf90d834-7831-4ba1-94f1-c783054bcd9e&phno=01031948662&seq=104589$$||e4dbb88b-cde4-4eac-bc89-e4cebcda3a68$$A$$dw5--X7cQUqafxjXQtU0J7:APA91bGpKxmpkotOYQYkEvqrFrEnbG2VDa7ldW8xPrRE5mlEBDAYc0Fr7S_d98bowjbXltndssA3fsIgBnB8nhirnlhyYA2ppTGiMQTq3_2ME75-QCFMnI3sHmqHCuWf1WtXzA0zs2Bu$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e4dbb88b-cde4-4eac-bc89-e4cebcda3a68&phno=01057717843&seq=104589$$||ef65ef6e-89f6-431d-b17f-00fb5f2ca536$$A$$dhdpY-dxTqe0crQMx5Nei9:APA91bHA6Yqr4ftcq7TQf7F0_1oHagfeY-qISX_FbG57G1u6qxv5IK40UMXURWA2q-3tqDUjI10gTKEVi3_BSSmG1ED5bBeXWXqn9L8JmVpOd50EBrd7wAZshRAezROCC24xfxyi31-f$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ef65ef6e-89f6-431d-b17f-00fb5f2ca536&phno=01086386302&seq=104589$$||af39f87f-b1ed-4350-973f-c3b2c13f16e1$$A$$c1xSMgTETHi0lgn6_Dd8Bc:APA91bEzeDLy8LM_W57cRC0IYX_r3sm12tZebzIenH30csT-T2hGtGMnxKhtuMnlnWEryrtDvyqpGQA5OLgrIzN_4vG3rtiqhFiHh068jpTxsLYAgXZZSUi42pFVeMCOeX0muyOKlyrp$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=af39f87f-b1ed-4350-973f-c3b2c13f16e1&phno=01084913331&seq=104589$$||f52f06af-d8d9-40c1-b909-26f8ae92226b$$A$$fZRl2Uj9TECqdCIIGg2_2b:APA91bE-yllth3RKtIvca_mCXbTCqyd6oZJM9yq0ivhXspFw5MqCwIlF3tz-3bS9T94-11Tyjrs_dqPetKKX-Y2lksRNIX2uNsqwAPErwdE6iI8wdxy5Qj9-NiN6Fqkk-ldk-ZPrFHj4$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=f52f06af-d8d9-40c1-b909-26f8ae92226b&phno=01092318912&seq=104589$$||2facc54a-d7d7-4256-8a19-0c98e5b42e8a$$A$$f0XcVM2_SI6CR_mb_S6Edd:APA91bGmCT4oGgeT4DgxzojexJhieFtenoF-Hb5nBJ320BsgHUwA8HPl4_c0ucH22x-ExGjSYN7UYWnlZLzO-D9KAdOZXeh0G-euwnnV3QjYVzckfVIN61sN7gOW7MI6d7o9hu046G48$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=2facc54a-d7d7-4256-8a19-0c98e5b42e8a&phno=01037483202&seq=104589$$||a4a89275-c8ed-4535-be62-3c13b6a75d65$$A$$dMhq4qVxRPCKcAA4QjlZXK:APA91bGHLE4IA-Mh2ecHDeonk-S62uYldfLSpQ0iLs079w9KXI7y0WJAR3V6ZqMHCcpBp4FQlY5MNLcOUrfxptSvIfVYlhyXzAgMqleH_knxm39RK-Or_F7z8NW9xIoS7_qRqMfOBMaN$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a4a89275-c8ed-4535-be62-3c13b6a75d65&phno=01045989004&seq=104589$$||16f355f1-d45d-416b-8733-a6ba21692743$$A$$feyEZsN0QVaITW-8UtcbAz:APA91bEPmgfcPQUtFXro4fVbnqEVzuJ69qEopa-GbIXmquz2_aaqn247JCLlKSU8gE3qmlqXDtcRmtiXj-eVsMcGtvJ7mchdjuk8bBTmINOAVy4GZ1cnmbL1zTmXFKpqX1vEONIuaaI7$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=16f355f1-d45d-416b-8733-a6ba21692743&phno=01054143634&seq=104589$$||8433b723-749b-4244-aa9f-8c87aeb01d39$$A$$fUgN3DwvSwKhTuMLhRZO7S:APA91bH3SbrJZgRCV-xwO1q0S3gJuMLtF8VN-iOOAB-pcvPvI2Ugbc7arz95rfvslFTrVpb6VPwOPQWneHPKOdzpzMVqtlXznXIOoU0TJv0sQu4X2RZ7ph66Lx-Q2KWCK1OYCtJXCBPV$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=8433b723-749b-4244-aa9f-8c87aeb01d39&phno=01071442990&seq=104589$$||a2c29b42-f0ed-4dca-bcec-9de9c31c3223$$A$$fPz2VntEQ2yqUfMpLBbGX4:APA91bGNC_oVLMd-C5rZpsyAt-WjgHpAaX4yjj046M4UW1NTTDkD2adUrEp6nSvk9bHxNQwhI1ZdNWO73FdGuj15TRyaJX70oj-JXNmr0SY1EMtmIat3dyUJsb1Kcy6xMNRqJqBjnVKf$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a2c29b42-f0ed-4dca-bcec-9de9c31c3223&phno=855965821568&seq=104589$$||5df96ec3-09c3-4e6d-8375-319cf3d77e67$$A$$ebpxEJZWSDuSgXh3jdLMRC:APA91bF10xrwVBoB1I_MXaFapJwK9MDIn2P68w1z_1MyTMrMMNqOMl-SRyDL9Z5AsbFpxPfEYggE7F4kKtXhK_DYZdxAlnJ5NpaQAKi0pbNJUC2Ff9E3aALcEU4SjLI-LO8g66vHc7Vf$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=5df96ec3-09c3-4e6d-8375-319cf3d77e67&phno=01088535793&seq=104589$$||5332e3ad-6fbe-4784-a01f-1b92e61c5058$$A$$ePeNp4XeT6qa5PcxnLo6Z1:APA91bFv9-MiSh6-pFmrnL5W_fCU3fqh0ZjUt2_KV8kHBK4eeDtWhiUJ7zHQsSwvaZrezaCdVq_w2TqH47oQJ3NFQcYycrCPBK3QsDbIreEz-bwzLCmcXHVnOoTK7yVKdQgEOc9r08Jv$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=5332e3ad-6fbe-4784-a01f-1b92e61c5058&phno=01089891856&seq=104589$$||b6875988-c4f1-483a-84c4-8915b0a6ee89$$A$$ekSWRe4MSreGpud0Ydzx8Q:APA91bESHKfE1UyMhrHCv7UVALiW1kJzoOuYtcPBXE9Bvdt1ET220JC_DVq_PAmzWorrvVzG7zDXaAOSGlew3opX0itkwXrM02SOdmiTLtzNjJ4AoDOdlIigPrXeHpSLVhUGD4qdPK6W$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=b6875988-c4f1-483a-84c4-8915b0a6ee89&phno=01033579775&seq=104589$$||e7e6ac68-8105-4038-b64c-34e5450fed52$$A$$djnzvL8yRtOmGdozh8rGot:APA91bGCVDH1rbY3C1DXVGki1s1aNz_Zpg2-B0kG39EsibhOgUhI23vR35ddt1bkBnKwwV6OTtQVzPIwNPHrWbgy9PKW2lDndkDK-gyX6D7ZeMgQpmOv3lt3R7GK5kDDyvTGYt4D0bFo$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e7e6ac68-8105-4038-b64c-34e5450fed52&phno=01032877195&seq=104589$$||29907f1e-d916-4995-a6a3-882fa089a88f$$A$$fpAEPl8lS3CDMDG3J5PnJB:APA91bGUp1qTR5yDnQRCasgZafBBCjDP3Mc-GLg71lBE-STvQS_4M_TQ4tgGMsO57fQ8GcHd5JsuOriId_n5fw_yg2C8kDsjda9j_kOj2DUOJCPnN-QgINtCKLmPS5f8c1PdgXboU_8N$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=29907f1e-d916-4995-a6a3-882fa089a88f&phno=01037622894&seq=104589$$||f18aaa84-5460-499f-aba2-9d86a8733fe3$$A$$cHa3YqA-SdWwxE18_HO8yc:APA91bHW8h609TwjIBtwDTZupxQCVZwu9mYxDW-pdJnFFcumNstBrp5W-r56eQt9iN4p5RDyknfjZr0R0biDxPqBose_WBBqdWuCZO3tLIWDnPz3qR0ju3rtwfl0Qfv4gdNoj1S9ibf6$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=f18aaa84-5460-499f-aba2-9d86a8733fe3&phno=01037622786&seq=104589$$||57d4980e-a41e-41bd-8a58-9f9ad0dd7f7d$$A$$eYbOMecvTH2-s_eGuI3AGD:APA91bErNiM1D-42BhlpIuHb5R0-ftIxpQ58YYF7CNY111-HglF85QtdP32QxqpXHpDm_826kzlXA2IGaTEDlwYZmBlOCd3XCmzdSmz7zVcPGfUmY7RCm_RKmyvWvq3lYKU9B4e_JJVY$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=57d4980e-a41e-41bd-8a58-9f9ad0dd7f7d&phno=01029442875&seq=104589$$||9c072280-2004-4af7-8e48-8e7e0f5784c7$$A$$cfbpTZmLR4uxRLvTmlzmyE:APA91bFZl-4QVVGYQnsOMHLUCl8Kpoylracc990ai4RKISzmjv-ktJ6QtKYSzpcafWbwjN8IwLgGxLv5QPvCNZaRTjPFTFFpAe4ojRP7S53p1UKvxL56AhfXGRi60wCwbbUEytZW5TZB$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=9c072280-2004-4af7-8e48-8e7e0f5784c7&phno=01033960706&seq=104589$$||1b7ba1cc-5e41-47d6-ba13-5c8dd397172e$$A$$dRhM5MenRpCpwvv0ynfub7:APA91bHR9yzbop8ukEJxSOGrvMdVRS8jLUXnRoxKaUyJ8L8RAfuhtBgvjIq2_HpLylO7i4vM9l_iXCkznGUDunOfrTym7U1VXXj7FCvLPLijwbjpoOWqUCcxhdlyglsk9jcpG1ijeUbo$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=1b7ba1cc-5e41-47d6-ba13-5c8dd397172e&phno=01043338418&seq=104589$$||e0c30498-0d99-45e3-9274-0548b95cd264$$A$$f3NSkWkYQXerFCasDEzb_W:APA91bEJgaX0bfu2oY7NPWdZ6XKq1lmyn4nfQZknsMcfOM7RuBKfv9mPVQxPVHGaUwXocWLtAQYKdXHI-jIQzZhee1jh1BCLqDVLuTvdrgkX2NciSGvU1A_hZRcZ38NMvF-hkaoNIjqA$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=e0c30498-0d99-45e3-9274-0548b95cd264&phno=01093271354&seq=104589$$||41005ae2-39e4-4f8a-81bc-502b299ec0c3$$A$$eNiMhEHoRz-JAXGWD-blee:APA91bGRELP8oJuN4Kp0b__vX88veqjxP6pfdSR_PkGB2j5hsAYTv9mxGqrKWPX43sPaq5DN8OTBMt-V9uu9zNQV9hhxKKLp-gEIqN8g0aqLrn_rKAhkl8nUJE0EaVqvrGabLavSLDr9$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=41005ae2-39e4-4f8a-81bc-502b299ec0c3&phno=01025273339&seq=104589$$||672a8e68-be29-4dd4-9d9b-5f490969665d$$A$$d8XSpBFYRg-WUoPlurA46_:APA91bG9JiBlqfwnfih7X-l84LAgomherSGOWPimYMnm9zNP10NjFs2ZHWXySzYXMLgKO_swrPOhG3bK9btoQWLOXUWnYAckN1njHXFG6OF-HPYedX0J1WhbPqBNeBmxRjuPFFGcVssP$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=672a8e68-be29-4dd4-9d9b-5f490969665d&phno=01076121487&seq=104589$$||a74a452b-a54b-4f5c-9713-94772d879c7d$$A$$eNs2tKKjRPybcW9mSbdIsZ:APA91bEwgiGvAJf1c-kUdPMWH3BEheB8qT1yjzk_2-PCTmSrj5DpkWnRuIwEYwVFSXWyajvP_n4jkYQzcNH6S2L4kgbZq4m9Si4cc_PyxpyJBEp2j5D279aZ073TXFz83kM3DpapLbHJ$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=a74a452b-a54b-4f5c-9713-94772d879c7d&phno=01028235352&seq=104589$$||ac4eb673-1a9e-47b4-9ee4-8391df5e6ba2$$A$$ciQqEzw5RnSzIDsyiSENM5:APA91bH3sMM062PFtv3RyMSl5lnNtB90HKufICtNFFiI1xZKHEi5DJ6YmGoYAF77esHUWoAURLPlLdYFM8-gD9SGVaBpyTB_TDOHr4ejGJ2iUX5L55voP961aTB9Rxp_puppeck5Wq-G$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=ac4eb673-1a9e-47b4-9ee4-8391df5e6ba2&phno=01089912691&seq=104589$$||267052bb-ef7f-498c-bc86-3146c85cb204$$A$$dGE_gf2QQJKdNYMP9PjjSf:APA91bFzPfUgt3PY4FOAakB6D-L14sozJfp9grYLPt0grLZ1BOHSorXtKQb8EPks-qw6jA7OUYme44ODGmx1M8W1H5jFfT8WUFqQlmFwia_8K43hDMhCF2blZ49-EcUfxF21GbffYnG3$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=267052bb-ef7f-498c-bc86-3146c85cb204&phno=01027211005&seq=104589$$||36931fd8-7927-4196-bf39-55bbea1578cd$$A$$fX2-ThmERDWJEHn-cwjmGt:APA91bHtHPggQ_1LsMeXIjjGIqnZlryd5d6wdUGpv9X_tFIUBrTjtLmq2gUOPX5EtxokS6iKx79I-3gI_Kz8wu3akD4yi6twHyPYOHeCaASwP3s47UwhlY6Gipjx4TuzuaZMFwo-qHXa$$$$http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=36931fd8-7927-4196-bf39-55bbea1578cd&phno=01032963663&seq=104589$$';
	
		$field = explode('||',$data);

		$push_format = array_shift($field); //SVCN+푸시COUNT
		$app_id = array_shift($field);		//앱ID
		$message_key = array_shift($field);	//MESSAGEKEY
		$push_type = array_shift($field);	//PUSHTYPE
		$format = array_shift($field);		//FORMAT
	
		echo 'push_format==>'.$push_format.'<br>';
		echo 'app_id==>'.$app_id.'<br>';
		echo 'message_key==>'.$message_key.'<br>';
		echo 'push_type==>'.$push_type.'<br>';
		echo 'format==>'.$format.'<br>';

		$return = array();
		$err_msg = '';
		//if($app_id != 'USW' || $message_key == '' || $push_type == '' || !in_array($format, array('Y', 'D'))){
		if(!in_array($push_format, array('1', '2')) || $app_id != 'USW' || $message_key == '' || $push_type == '' || !in_array($format, array('Y', 'D'))){
			$err_msg = 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] format=>['.$format.']';
			//echo '<pre>'; print_r($field);
			echo $err_msg; exit;
		}
		else {
			$title = ''; 
			$body = '';


			if($push_type == '999' && $format == 'D') {
			
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] != 'DELETE_PUSH') {
							$err_msg .= 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] sub_field=>['.$sub_field[0].']';
						}
					}
					else {
						$send_data = array();
						$send_data['noti_type'] = 'D';

						$send_data['device_key'] = $sub_field[0];
						$send_data['url'] = $sub_field[4];
						//$send_data['title'] = $title;
						//$send_data['body'] = $body;
						$send_data['appid'] = $app_id;
						$send_data['msgkey'] = $message_key;
						//$send_data['osgb'] = 'A';
						$send_data['osgb'] = $sub_field[1];

						$return[] = $this->_noti_process_test($send_data);
						$return[] = $send_data;
					}
				}

			}
			else {

				echo '<pre>';
				$cnt=0;
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] == 'MESSAGE_FORMAT') {
							$title = $sub_field[5];
							$body = $sub_field[3];
						}
					}
					else {
						if($title == '' || $body == '') {
							$err_msg .= 'title=>['.$title.'] body=>['.$body.']'; 
							break;
						}
						else {
							$send_data = array();
							$send_data['device_key'] = $sub_field[0];
							
							 URL 체크(21.10.12)
							주식창W 특정 게시물 내용으로 이동(seq값 가변)
							http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=&nick=&phno=&seq=45761
							=> https://wowtv.choicestock.co.kr/bridge/A?seq=45761

							주식창W 미국주식창 메인화면 이동(hidden, ver 값 고정)
							http://stockwin.wowtv.co.kr/vitamin/list.asp?devk=&phno=&hidden=27&ver=2

							=> https://wowtv.choicestock.co.kr/bridge/B
							

							if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/view.asp')) {
								$arr_url=parse_url($sub_field[4]);
								parse_str($arr_url['query'], $output);
								$seq = $output['seq'];

								//$arr_seq = explode('seq=',$sub_field[4]);
								//$seq = $arr_seq[1];

								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/A?seq='.$seq;
							}
							else if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/list.asp')) {
								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/B';
							}
							else {
								$send_data['url'] = $sub_field[4];
							}

							$send_data['title'] = $title;
							$send_data['body'] = $body;

							$send_data['appid'] = $app_id;
							$send_data['msgkey'] = $message_key;
							//$send_data['osgb'] = 'A';
							$send_data['osgb'] = $sub_field[1];
							$send_data['noti_type'] = 'I';

							print_r($send_data);
							echo $cnt++;
						}
					}
				}
			}
		}
	}
*****/
    public function directPush_test() {

		@extract($_GET);
		@extract($_POST);
		@extract($_SERVER);
		
        $api_key = $api_key;

		$push = $push;

		$logfile = fopen(LOG_PATH."/directPush_test.log", "a+" );

		fwrite( $logfile,"************************************************\r\n");
		fwrite( $logfile,"message : [".$push."]\r\n");

		$result = array();

        if($api_key == '') {
            $result['result'] = 'FAIL';
            $result['retmsg'] = 'key error[key is null]';
            echo json_encode($result);

			fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

        if($api_key != API_KEY_X1) {
            $result = array();
            $result['result'] = 'FAIL';
            $result['retmsg'] = 'key match error';
            echo json_encode($result);

			fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

        if($push=='' || $api_key == '') {
            $result = array();
            $result['retmsg'] = 'argument error[message or key is null]';
            echo json_encode($result);

			fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

		$field = explode('||',$push);

		$push_format = array_shift($field); //SVCN+푸시COUNT
		$app_id = array_shift($field);		//앱ID
		$message_key = array_shift($field);	//MESSAGEKEY
		$push_type = array_shift($field);	//PUSHTYPE
		$format = array_shift($field);		//FORMAT

		$return = array();

		if($push_format == '' || $app_id != 'USW' || $message_key == '' || $push_type == '' || !in_array($format, array('Y', 'D'))){
			$err_msg = 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] format=>['.$format.']';

            $result = array();
            $result['result'] = 'FAIL';
            $result['retmsg'] = 'data is not match ::'.$err_msg ;
            echo json_encode($result);

			fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
			//echo '<pre>'; print_r($field);
		}
		else {
			$title = ''; 
			$body = '';

			if($push_type == '999' && $format == 'D') {
			
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] != 'DELETE_PUSH') {
							$err_msg = 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] sub_field=>['.$sub_field[0].']';

							$result = array();
							$result['result'] = 'FAIL';
							$result['retmsg'] = 'data is not match(delete) ::'.$err_msg ;
							echo json_encode($result);

							fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
							fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
							fwrite( $logfile,"************************************************\r\n");
							fclose( $logfile );
							exit;
						}
					}
					else {
						$send_data = array();
						$send_data['noti_type'] = 'D';

						$send_data['device_key'] = $sub_field[0];
						$send_data['url'] = $sub_field[4];
						//$send_data['title'] = $title;
						//$send_data['body'] = $body;
						$send_data['appid'] = $app_id;
						$send_data['msgkey'] = $message_key;
						//$send_data['osgb'] = 'A';
						$send_data['osgb'] = $sub_field[1];

						$return[] = $this->_noti_process_test($send_data);
						$return[] = $send_data;
					}
				}

			}
			else {
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] == 'MESSAGE_FORMAT') {
							$title = $sub_field[5];
							$body = $sub_field[3];
						}
					}
					else {
						if($title == '' || $body == '') {
							$err_msg = 'title=>['.$title.'] body=>['.$body.']'; 
						
							$result = array();
							$result['result'] = 'FAIL';
							$result['retmsg'] = 'data is null ::'.$err_msg ;
							echo json_encode($result);

							fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
							fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
							fwrite( $logfile,"************************************************\r\n");
							fclose( $logfile );
							exit;
						}
						else {
							$send_data = array();
							$send_data['device_key'] = $sub_field[0];
							
							/* URL 체크(21.10.12)
							주식창W 특정 게시물 내용으로 이동(seq값 가변)
							http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=&nick=&phno=&seq=45761
							=> https://wowtv.choicestock.co.kr/bridge/A?seq=45761

							주식창W 미국주식창 메인화면 이동(hidden, ver 값 고정)
							http://stockwin.wowtv.co.kr/vitamin/list.asp?devk=&phno=&hidden=27&ver=2

							=> https://wowtv.choicestock.co.kr/bridge/B
							*/

							if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/view.asp')) {
								$arr_url=parse_url($sub_field[4]);
								parse_str($arr_url['query'], $output);
								$seq = $output['seq'];

								//$arr_seq = explode('seq=',$sub_field[4]);
								//$seq = $arr_seq[1];

								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/A?seq='.$seq;
							}
							else if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/list.asp')) {
								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/B';
							}
							else {
								$send_data['url'] = $sub_field[4];
							}

							$send_data['title'] = $title;
							$send_data['body'] = $body;
							//$return[] = $this->_send_push_test($send_data);

							$send_data['appid'] = $app_id;
							$send_data['msgkey'] = $message_key;
							//$send_data['osgb'] = 'A';
							$send_data['osgb'] = $sub_field[1];
							$send_data['noti_type'] = 'I';

							$return[] = $this->_noti_process_test($send_data);
							$return[] = $send_data;
						}
					}
				}
			}
		}

		$cnt = 0;
		foreach($return as $key=>$val) {
			if(is_array($val) && sizeof($val) > 0) {
				foreach($val as $subval) {
					fwrite( $logfile, "[".$key."] : [".$subval."]\r\n");
				}
			}
			else {

				$val_decode = json_decode( $val, true );
				if(is_array($val_decode) && $val_decode['success'] == '1') {
					$cnt++;
				}

				fwrite( $logfile, "[".$key."] : [".$val."]\r\n");
			}
		}

		fwrite( $logfile,"count    : ".$cnt."\r\n");
		fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
		fwrite( $logfile,"************************************************\r\n");
		fclose( $logfile );

        $result['result'] = 'OK';
        $result['retmsg'] = 'push transfer completed [count::'.$cnt.']';
        echo json_encode($result);
        exit;
	}

	private function _noti_process_test($data) {

		return;

		if(is_array($data) && sizeof($data) > 0) {
		
			$this->load->model(DBNAME.'/wt_notify_tb_model');

			if($data['noti_type'] == 'D') {

				if($this->wt_notify_tb_model->get(array('wn_devicekey' => $data['device_key'], 'wn_appid' => $data['appid'], 'wn_msgkey' => $data['msgkey'], 'wn_view' => 'Y'))->isSuccess()) {
					$dbrow = $this->wt_notify_tb_model->getData();
				
					$update_params['wn_view'] = 'N';

					if( ! $this->wt_notify_tb_model->doUpdate($dbrow['wn_id'], $update_params)->isSuccess()) {
						echo 'wt_notify_tb update error['.$dbrow['wn_id'].']['.$data['device_key'].']['.$data['msgkey']."]\n";
						echo $this->wt_notify_tb_model->getErrorMsg();
						echo "\n";
					}
					/*
					if( ! $this->wt_notify_tb_model->doDelete($dbrow['wn_id'])->isSuccess()) {
						echo 'wt_notify_tb delete error['.$data['device_key'].']['.$data['msgkey']."]\n";
						echo $this->wt_notify_tb_model->getErrorMsg();
						echo "\n";
					}
					*/
				}
				else {
					echo 'wt_notify_tb del_select error['.$data['device_key'].']['.$data['msgkey']."]\n";
				}
			}
			else {
				$params = array(
					'wn_devicekey' => $data['device_key'],
					'wn_title' => $data['title'],
					'wn_content' => $data['body'],
					'wn_appid' => $data['appid'],
					'wn_msgkey' => $data['msgkey'],
					'wn_osgb' => $data['osgb'],
					'wn_url' => $data['url'],
					'wn_view' => 'Y',
					'wn_display_date' => date('Y-m-d H:i:s'),
				);

				if(!$this->wt_notify_tb_model->doInsert($params)->isSuccess()) {
					echo 'wt_notify_tb insert error['.$data['device_key'].']['.$data['msgkey']."]\n";
					echo $this->wt_notify_tb_model->getErrorMsg();
					echo "\n";
				}
			}
		}
	}

	private function _send_push_test($send_data=array()) {
		if(sizeof($send_data) > 0) {

			//유료회원 체크 ( wm_paid : Y, wm_is_push : Y)
			$this->load->model(DBNAME.'/wt_member_tb_model');
			$params = array();
			//$params['=']['wm_paid'] = 'Y';
			//$params['=']['wm_is_push'] = 'Y';
			$params['=']['wm_devicekey'] = $send_data['device_key'];
			//$params['!=']['wm_phone'] = '';
			//$params['=']['wm_id'] = 'wt_60d3dc0f7a778';
			$params['!=']['wm_pushkey'] = '';

			$extra = array(
				'fields' => array('wm_pushkey', 'wm_version'),
				'slavedb' => true
			);

			$send = array_shift($this->wt_member_tb_model->getList($params, $extra)->getData());

			$url = 'https://fcm.googleapis.com/fcm/send';
			$FCM_SERVER_KEY = "AAAAAw0PMU0:APA91bG0TLzc8NprkLJK8sLSWTeSvXeZhdNFRM9iNDkX6IBlUL8R5pgMmFlyCN2AuVSIkrbF8prx8eFM-Db-dzMe9AZRQzGmL9TpK4_IAIlwKMndSel4XcoqJuKsMccSaSCgOqj26-41"; 
			//ios $FCM_SERVER_KEY = "AAAAFHj34RI:APA91bFM4HFleKwBkrdJRqwRH2XN2_jJSVBSrrCmb-G1zeSOrmvdjtcV-paKxD_TDrsS7YzlGz3_y055wMtWxOANzbYzqYUN2eWzwK6dP_vRZtlE9cZ50HMEWR--bNxhnvAxpurG6Lkn"; 

			//NEW PUSH
			if($send['wm_version'] > 110) {
				$fields = array (
					'data' => array ('body' => $send_data['body'], 'title' => $send_data['title'], 'url' => $send_data['url']),
				);
			}
			else {
				$fields = array (
					'notification' => array ('body' => $send_data['body'], 'title' => $send_data['title']),
					'data' => array ('url' => $send_data['url']),
				);
			}

			$fields['to'] = $send['wm_pushkey'];
			$fields['priority'] = "high";

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
			    return 'Curl failed: ' . curl_error($ch);
			}
			curl_close($ch);
			return $result;
		}
		else {
			return 'send_data is not array';
		}
	}

	private function _send_push($send_data=array()) {
		if(sizeof($send_data) > 0) {

			//유료회원 체크 ( wm_paid : Y, wm_is_push : Y)
			$this->load->model(DBNAME.'/wt_member_tb_model');
			$params = array();
			//$params['=']['wm_paid'] = 'Y';
			//$params['=']['wm_is_push'] = 'Y';
			$params['=']['wm_devicekey'] = $send_data['device_key'];
			//$params['!=']['wm_phone'] = '';
			$params['!=']['wm_pushkey'] = '';

			$extra = array(
				'fields' => array('wm_pushkey', 'wm_version', 'wm_ostype'),
				'slavedb' => true
			);

			$send = array_shift($this->wt_member_tb_model->getList($params, $extra)->getData());

			$url = 'https://fcm.googleapis.com/fcm/send';
		
			if($send['wm_ostype'] == 'I') {
				$FCM_SERVER_KEY = "AAAAFHj34RI:APA91bFM4HFleKwBkrdJRqwRH2XN2_jJSVBSrrCmb-G1zeSOrmvdjtcV-paKxD_TDrsS7YzlGz3_y055wMtWxOANzbYzqYUN2eWzwK6dP_vRZtlE9cZ50HMEWR--bNxhnvAxpurG6Lkn"; 
			}
			else {
				$FCM_SERVER_KEY = "AAAAAw0PMU0:APA91bG0TLzc8NprkLJK8sLSWTeSvXeZhdNFRM9iNDkX6IBlUL8R5pgMmFlyCN2AuVSIkrbF8prx8eFM-Db-dzMe9AZRQzGmL9TpK4_IAIlwKMndSel4XcoqJuKsMccSaSCgOqj26-41"; 
			}

			//NEW PUSH
			if($send['wm_version'] > 110) {
				$fields = array (
					'data' => array ('body' => $send_data['body'], 'title' => $send_data['title'], 'url' => $send_data['url']),
				);
			}
			else {
				$fields = array (
					'notification' => array ('body' => $send_data['body'], 'title' => $send_data['title']),
					'data' => array ('url' => $send_data['url']),
				);
			}

			//$fields['to'] = $send['wm_pushkey']; //$send_data['push_key'] 넘어온 push key
			$fields['to'] = $send_data['push_key']; 
			$fields['priority'] = "high";

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
			    return 'Curl failed: ' . curl_error($ch);
			}
			curl_close($ch);
			return $result;
		}
		else {
			return 'send_data is not array';
		}
	}

	private function _noti_process($data) {

		if(is_array($data) && sizeof($data) > 0) {
		
			$this->load->model(DBNAME.'/wt_notify_tb_model');

			if($data['noti_type'] == 'D') {

				if($this->wt_notify_tb_model->get(array('wn_devicekey' => $data['device_key'], 'wn_appid' => $data['appid'], 'wn_msgkey' => $data['msgkey'], 'wn_view' => 'Y'))->isSuccess()) {
					$dbrow = $this->wt_notify_tb_model->getData();
				
					$update_params['wn_view'] = 'N';

					if( ! $this->wt_notify_tb_model->doUpdate($dbrow['wn_id'], $update_params)->isSuccess()) {
						echo 'wt_notify_tb update error['.$dbrow['wn_id'].']['.$data['device_key'].']['.$data['msgkey']."]\n";
						echo $this->wt_notify_tb_model->getErrorMsg();
						echo "\n";
					}
					/*
					if( ! $this->wt_notify_tb_model->doDelete($dbrow['wn_id'])->isSuccess()) {
						echo 'wt_notify_tb delete error['.$data['device_key'].']['.$data['msgkey']."]\n";
						echo $this->wt_notify_tb_model->getErrorMsg();
						echo "\n";
					}
					*/
				}
				else {
					echo 'wt_notify_tb del_select error['.$data['device_key'].']['.$data['msgkey']."]\n";
				}
			}
			else {
				$params = array(
					'wn_devicekey' => $data['device_key'],
					'wn_title' => $data['title'],
					'wn_content' => $data['body'],
					'wn_appid' => $data['appid'],
					'wn_msgkey' => $data['msgkey'],
					'wn_osgb' => $data['osgb'],
					'wn_url' => $data['url'],
					'wn_view' => 'Y',
					'wn_display_date' => date('Y-m-d H:i:s'),
				);

				if(!$this->wt_notify_tb_model->doInsert($params)->isSuccess()) {
					//$err_msg = 'wt_notify_tb insert error['.$data['device_key'].']['.$data['msgkey']."]\n";
					return $this->wt_notify_tb_model->getErrorMsg();
					//echo "\n";
				}
				else {
					$msg = 'wt_notify_tb insert';
					return $msg;
				}
			}
		}
	}

    public function directPush() {

		@extract($_GET);
		@extract($_POST);
		@extract($_SERVER);
		
        $api_key = $api_key;
		$push = $push;

		$logfile = fopen(LOG_PATH."/directPush.log", "a+" );

		fwrite( $logfile,"************************************************\r\n");
		fwrite( $logfile,"message : [".$push."]\r\n");

		$result = array();

        if($api_key == '') {
            $result['result'] = 'FAIL';
            $result['retmsg'] = 'key error[key is null]';
            echo json_encode($result);

			fwrite( $logfile,"retmsg  : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

        if($api_key != API_KEY_X1) {
            $result['result'] = 'FAIL';
            $result['retmsg'] = 'key match error';
            echo json_encode($result);

			fwrite( $logfile,"retmsg  : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

        if($push=='' || $api_key == '') {
            $result['retmsg'] = 'argument error[message or key is null]';
            echo json_encode($result);

			fwrite( $logfile,"retmsg : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time   : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
        }

		$field = explode('||',$push);

		$push_format = array_shift($field); //SVCN+푸시COUNT
		$app_id = array_shift($field);		//앱ID
		$message_key = array_shift($field);	//MESSAGEKEY
		$push_type = array_shift($field);	//PUSHTYPE
		$format = array_shift($field);		//FORMAT

		$return = array();
		$err_msg = '';

		if($push_format == '' || $app_id != 'USW' || $message_key == '' || $push_type == '' || !in_array($format, array('Y', 'D'))){
			$err_msg = 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] format=>['.$format.']';

            $result['result'] = 'FAIL';
            $result['retmsg'] = 'data is not match ::'.$err_msg ;
            echo json_encode($result);

			fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
			fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
			fwrite( $logfile,"************************************************\r\n");
			fclose( $logfile );
            exit;
			//echo '<pre>'; print_r($field);
		}
		else {
			$title = ''; 
			$body = '';

			if($push_type == '999' && $format == 'D') {
			
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] != 'DELETE_PUSH') {
							$err_msg = 'push_format=>['.$push_format.'] app_id=>['.$app_id.'] message_key=>['.$message_key.'] push_type=>['.$push_type.'] sub_field=>['.$sub_field[0].']';
							
							$result['result'] = 'FAIL';
							$result['retmsg'] = 'data is not match(delete) ::'.$err_msg ;
							echo json_encode($result);

							fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
							fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
							fwrite( $logfile,"************************************************\r\n");
							fclose( $logfile );
							exit;
						}
						else {
							/* 21.12.02 응답을 먼저 처리*/
							$result['result'] = 'OK';
							$result['retmsg'] = 'delete push transfer completed';
							echo json_encode($result);
						}
					}
					else {
						$send_data = array();
						$send_data['noti_type'] = 'D';

						$send_data['device_key'] = $sub_field[0];
						$send_data['url'] = $sub_field[4];
						//$send_data['title'] = $title;
						//$send_data['body'] = $body;
						$send_data['appid'] = $app_id;
						$send_data['msgkey'] = $message_key;
						//$send_data['osgb'] = 'A';
						$send_data['osgb'] = $sub_field[1];

						$return[] = $this->_noti_process($send_data);
						$return[] = $send_data;
					}
				}
			}
			else {
				foreach($field as $key=>$val) {

					$sub_field = explode('$$', $val);

					if($key == 0) {
						if($sub_field[0] == 'MESSAGE_FORMAT') {
							$title = $sub_field[5];
							$body = $sub_field[3];

							if($title !='' && $body !='') {
								/* 21.12.02 응답을 먼저 처리*/
								$result['result'] = 'OK';
								$result['retmsg'] = 'push transfer completed';
								echo json_encode($result);
							}
						}
					}
					else {
						if($title == '' || $body == '') {
							$err_msg = 'title=>['.$title.'] body=>['.$body.']'; 

							$result['result'] = 'FAIL';
							$result['retmsg'] = 'data is null ::'.$err_msg ;
							echo json_encode($result);

							fwrite( $logfile,"retmsg    : ".$result['retmsg']."\r\n");
							fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
							fwrite( $logfile,"************************************************\r\n");
							fclose( $logfile );
							exit;
						}
						else {
							$send_data = array();
							$send_data['device_key'] = $sub_field[0];
							
							/* URL 체크(21.10.12)
							주식창W 특정 게시물 내용으로 이동(seq값 가변)
							http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=&nick=&phno=&seq=45761
							=> https://wowtv.choicestock.co.kr/bridge/A?seq=45761

							주식창W 미국주식창 메인화면 이동(hidden, ver 값 고정)
							http://stockwin.wowtv.co.kr/vitamin/list.asp?devk=&phno=&hidden=27&ver=2

							=> https://wowtv.choicestock.co.kr/bridge/B

							$sub_field[2]==>넘어온 푸시키
							*/

							if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/view.asp')) {
								$arr_url=parse_url($sub_field[4]);
								parse_str($arr_url['query'], $output);
								$seq = $output['seq'];

								//$arr_seq = explode('seq=',$sub_field[4]);
								//$seq = $arr_seq[1];

								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/A?seq='.$seq;
							}
							else if(strstr($sub_field[4], 'stockwin.wowtv.co.kr/vitamin/list.asp')) {
								$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/B';
							}
							else {
								$send_data['url'] = $sub_field[4];
							}

							$send_data['title'] = $title;
							$send_data['body'] = $body;
							$send_data['push_key'] = $sub_field[2];
							$return[] = $this->_send_push($send_data);

							$send_data['appid'] = $app_id;
							$send_data['msgkey'] = $message_key;
							//$send_data['osgb'] = 'A';
							$send_data['osgb'] = $sub_field[1];
							$send_data['noti_type'] = 'I';

							$return[] = $this->_noti_process($send_data);
							$return[] = $send_data;
						}
					}
				}
			}
		}

		$cnt = 0;
		foreach($return as $key=>$val) {

			if(is_array($val) && sizeof($val) > 0) {
				foreach($val as $subval) {
					fwrite( $logfile, "[".$key."] : [".$subval."]\r\n");
				}
			}
			else {

				$val_decode = json_decode( $val, true );
				if(is_array($val_decode) && $val_decode['success'] == '1') {
					$cnt++;
				}

				fwrite( $logfile, "[".$key."] : [".$val."]\r\n");
			}
		}

		fwrite( $logfile,"count    : ".$cnt."\r\n");
		fwrite( $logfile,"time    : ".date('Y-m-d H:i:s')."\r\n");
		fwrite( $logfile,"************************************************\r\n");
		fclose( $logfile );

        exit;
	}
}