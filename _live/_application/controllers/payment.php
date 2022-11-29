<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/base_mobile.php';
class Payment extends BaseMobile_Controller {

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see http://codeigniter.com/user_guide/general/urls.html
	 */
/*

var_dump(checkdate(12, 31, 2000));
# bool(true)
결제			p_id		auto
사용자아이디	p_user_id	20
서비스코드		p_code		4
서비스명		p_name		30
결제방법		p_method	1
(카드, 계좌이체, 가상계좌, 월정기)
상품주문번호	p_moid		30

결제금액(원래)	p_price		10
결제금액(할인)	p_dc_price	10
결제금액(실제)	p_real_price 10
결제기간		p_term		2
(한달, 3달, 6달)

결제카드		p_card_no	100
결제TYPE		p_type		1
(자동,기간)

시작일			p_start_date	date
종료일			p_end_date		date

자동결제일		p_auto_date		2
결제취소일		p_cancel_date	date
입금상태		p_status		1
*/


	//결제 금액 0인 경우 처리(기간-싱글쿠폰)
	public function advance() {

        $this->loginCheck();

		$Amt = $this->input->post('Amt');					//결제금액
		$pay = $this->input->post('pay');					//결제구분
		$p_code = $this->input->post('p_code');				//서비스코드
		$coupon_code = $this->input->post('coupon_nm');		//쿠폰코드
		$cp_done = $this->input->post('cp_done');			//쿠폰확인
		$dc_rate = $this->input->post('dc_rate');			//할인율
		//$new_phone_number = $this->input->post('new_phone_number');	//핸드폰번호

		if( $Amt == 0 && $coupon_code != '' && in_array($pay, array('2', '3')) && $p_code != '' && $cp_done == '1' ) {

			//사용 가능한 쿠폰인지 체크
			$this->load->model(DBNAME.'/coupon_tb_model');

			if($this->coupon_tb_model->get(array('cp_code' => $coupon_code, 'cp_status' => 'Y', 'cp_pay' => $pay, 'cp_type' => $this->pay_info[$pay]['type'], 'cp_use_count' => '0' ))->isSuccess()) {

				//$coupon_data = $this->coupon_tb_model->getData();

				//pay_tb에서 쿠폰 사용 유무 검사
				$this->load->model(DBNAME.'/pay_tb_model');

				$params = array();
				$params['=']['p_user_id'] = $this->session->userdata('user_id');
				$params['=']['p_code'] = $p_code;
				$params['=']['p_coupon'] = $coupon_code;
				$params['=']['p_type'] = $this->pay_info[$pay]['type'];
				//$params['slavedb'] = true;
				$cp_count = $this->pay_tb_model->getCount($params)->getData();

				if( $cp_count > 0 ) {
					$this->common->alert('이미 사용한 쿠폰입니다.[A05]');
					$this->common->locationhref('/');
					exit;
				}
				else {
					//기간결제 사용 유무 확인
					$params = array();
					$params['=']['p_user_id'] = $this->session->userdata('user_id');
					$params['=']['p_code'] = $p_code;
					$params['=']['p_type'] = 'G';
					$params['=']['p_status'] = 'P';
					$params['>=']['p_end_date'] = date('Ymd');

					$extra = array(
						'fields' => 'p_end_date',
						'order_by' => 'p_end_date DESC',
						'limit' => 1,
						//'slavedb' => true
					);

					$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

					if(isset($paylist_term['p_end_date'])&&$paylist_term['p_end_date']!='') {

						$term_end_date =  date('Ymd', strtotime($paylist_term['p_end_date'])+86400);
						$now_date = date('Ymd');
						$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
						$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));
					}
					else {
						$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']));
					}

					$params = array(
						'p_user_id' => $this->session->userdata('user_id'),
						'p_code' => $p_code,
						'p_user_name' => $this->session->userdata('user_name'),
						'p_moid' => $p_code.str_pad(mt_rand(0,9999),4,'0').date('YmdHis'), // 상품주문번호(CS01+rand+date(YmdHis))
						'p_price' => intval($Amt),
						'p_real_price' => intval($Amt),
						'p_pay' => $pay,
						'p_type' => 'G',
						'p_method' => 'COUPON',
						'p_status' => 'P',
						'p_coupon' => $coupon_code,
						'p_dcrate' => $dc_rate,
						'p_date' =>  date('Y-m-d H:i:s'),
						'p_start_date' => date('Ymd'),
						'p_end_date' => $p_end_date,
						'p_authdate' => date('Y-m-d H:i:s'),
					);

					if($this->pay_tb_model->doInsert($params)->isSuccess()) {

						//결제 DB 반영 후 member_tb 업데이트, 세션 생성
						$this->load->model(DBNAME.'/member_tb_model');

						$update_params = array(
							'm_paid' => 'Y',
							'm_push_ticker' => 'Y',
							'm_push_service' => 'Y',
							//'m_push_date' => date('Y-m-d H:i:s'),
						);

						/*
						if(isset($new_phone_number) && $new_phone_number!='') {
							$update_params['m_phone'] = str_replace('-','',$new_phone_number);
						}
						*/

						if($this->member_tb_model->doUpdate($this->session->userdata('user_id'), $update_params)->isSuccess()) {

							$this->session->set_userdata('is_paid', TRUE);

							/*
							if(isset($new_phone_number) && $new_phone_number!='') {
								$this->session->set_userdata('user_phone', str_replace('-','',$new_phone_number));
							}
							*/

							//쿠폰 사용 처리
							$coupon_params = array(
								'cp_use_count' => '1',
								'cp_single_date' => date('Y-m-d H:i:s'),
							);

							if(!$this->coupon_tb_model->doUpdate($coupon_code, $coupon_params)->isSuccess()) {
								$this->common->alert('결제 처리 과정에서 장애가 발생했습니다.[A03]');
								$this->common->locationhref('/');
								exit;
							}

							$send_phone = ($new_phone_number!='') ? $new_phone_number:$this->session->userdata('user_phone');
							/* push 보내기(template - 5, 기간결제 완료) */
							if($send_phone!='') {
								$push_info = array();
								$push_info['template']= '5';
								$push_info['push_type']= 'at';
								$push_info['from']= PUSH_FROM;
								$push_info['to']= $send_phone;

								$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
								$push_info['at_message']['replace_1'] = '초이스스탁US';	//서비스명
								$push_info['at_message']['replace_2'] = '프리미엄';		//프리미엄
								$push_info['at_message']['replace_3'] = $this->pay_info[$pay]['month'].'개월';//개월수
								$push_info['at_message']['replace_4'] = number_format($Amt);//결제금액
								$push_info['at_message']['replace_5'] = '초이스스탁US';	//서비스명
								$push_info['count']= '6';

								$result = $this->send_push($push_info);
							}
							/* push 보내기 */

							$this->header_data['header_template'] = '11';
							$this->header_data['show_alarm'] = false;
							$this->header_data['head_title'] = '서비스 가입/결제';
							//$this->header_data['back_url'] = '/';
							$this->header_data['back_url'] = '';

							$data = array();
					        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
							$data['srv_name'] = SRV_NAME;
							$data['month'] = $this->pay_info[$pay]['month'];
							$data['price'] = intval($Amt);
							$data['p_method'] = 'COUPON';
							$data['p_method_name'] = '쿠폰';

							$data['result_title'] = '정상적으로 결제가<br>완료 되었습니다.';
							$this->_view('/member/pay_complete', $data);
						}
						else {
							$this->common->alert('회원 정보 UPDATE 중 오류가 발생했습니다.[A04]');
							$this->common->locationhref('/');
							exit;
						}
					}
					else {
						$this->common->alert('결제 처리 과정에서 장애가 발생했습니다.[A03]');
						$this->common->locationhref('/payment/choice');
						exit;
					}
				}
			}
			else {
				$this->common->alert('잘못된 접근입니다.[A02]');
				$this->common->locationhref('/');
				exit;
			}
		}
		else {
            $this->common->alert('잘못된 접근입니다.[A01]');
			$this->common->locationhref('/');
			exit;

		}
	}

	public function coupon($coupon_code='', $srv_code='') {

        $this->loginCheck();

		$pay = $this->input->get('pay');

        if($this->input->is_ajax_request() === FALSE || !isset($coupon_code) || $coupon_code == '' || $srv_code == '' || !in_array($pay, array('1', '2', '3'))) {
            $this->common->alert('잘못된 접근입니다.[CP01]');
			$this->common->locationhref('/');
			exit;
		}

		//쿠폰 유무 확인
		$this->load->model(DBNAME.'/coupon_tb_model');

        if($this->coupon_tb_model->get(array('cp_code' => $coupon_code, 'cp_status' => 'Y', 'cp_pay' => $pay, 'cp_type' => $this->pay_info[$pay]['type'] ))->isSuccess()) {

            $coupon_info = $this->coupon_tb_model->getData();

			if( date('Ymd') > date('Ymd', strtotime($coupon_info['cp_end_date'])) ) {
				//기간만료쿠폰
				$error = TRUE;
				$result = array('error' => $error, 'msg' => '만료된 쿠폰입니다.');
				exit(json_encode($result));
			}
			else {
				//싱글 쿠폰 사용 유무 체크
				if( $coupon_info['cp_single'] == 'Y' ) {
					if( $coupon_info['cp_use_count'] > 0 ) {
						$error = TRUE;
						$result = array('error' => $error, 'msg' => '이미 사용한 쿠폰입니다.');
						exit(json_encode($result));
					}
				}
				else {
					if( $coupon_info['cp_number'] <= $coupon_info['cp_use_count'] ) {
						$error = TRUE;
						$result = array('error' => $error, 'msg' => '사용할 수 없는 쿠폰입니다.');
						exit(json_encode($result));
					}
				}
			}

			//pay_tb에서 쿠폰 사용 유무 검사
			$this->load->model(DBNAME.'/pay_tb_model');

			$params = array();
			$params['=']['p_user_id'] = $this->session->userdata('user_id');
			$params['=']['p_code'] = $srv_code;
			$params['=']['p_coupon'] = $coupon_code;
			$params['=']['p_type'] = $this->pay_info[$pay]['type'];
			//$params['slavedb'] = true;
			$cp_count = $this->pay_tb_model->getCount($params)->getData();

			if( $cp_count > 0 ) {
				$error = TRUE;
				$result = array('error' => $error, 'msg' => '쿠폰은 1회 등록용이며, 중복등록 할 수 없습니다!');
				exit(json_encode($result));
			}
			else {

				$dc_rate = (100-$coupon_info['cp_dcrate'])/100;
				$price = round(( $this->pay_info[$pay]['price']/1.1 * $dc_rate ) * 1.1);

				$merchantKey = MERCHANTKEY_G; // 상점키
				$MID = MID_G;  // 상점아이디

				$ediDate = date("YmdHis");
				$hashString = bin2hex(hash('sha256', $ediDate.$MID.$price.$merchantKey, true));

				$this->output->set_content_type('application/json');
				$success = TRUE;
				$result = array('success' => $success, 'dc_rate' => $coupon_info['cp_dcrate'], 'price' => $price, 'hash' => $hashString, 'ediDate' => $ediDate);
				exit(json_encode($result));
			}
		}
		else {
			$error = TRUE;
			$result = array('error' => $error, 'msg' => '쿠폰코드가 일치하지 않습니다. 쿠폰코드 또는 결제방법을 확인해주세요. [다시입력]');
			exit(json_encode($result));
		}
	}

	public function re_hashcode($pay_method) {

	    $this->loginCheck();

		$pay = $this->input->get('pay');
		$pay_method = '';
        if($this->input->is_ajax_request() === FALSE || $pay_method == '' || !in_array($pay, array('1', '2', '3'))) {
            $this->common->alert('잘못된 접근입니다.[R01]');
			$this->common->locationhref('/');
			exit;
		}

		if($pay_method == 'VBANK') {
			$dc_rate = 0.9;
			$price = $this->pay_info[$pay]['price'] * $dc_rate;
		}
		else {
			$price = $this->pay_info[$pay]['price'];
		}

		$MID = MID_G;  // 상점아이디
		$merchantKey = MERCHANTKEY_G; // 상점키

		$ediDate = date("YmdHis");
		$hashString = bin2hex(hash('sha256', $ediDate.$MID.$price.$merchantKey, true));

		$this->output->set_content_type('application/json');

		$success = TRUE;
		$result = array('success' => $success, 'price' => $price, 'hash' => $hashString, 'ediDate' => $ediDate);
		exit(json_encode($result));
	}


	public function card_complete() {

        $this->loginCheck();
        $this->payCheck();

		$p_id = $this->input->post('cs_ano');

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_id'] = $p_id;

		$extra = array(
			'fields' => '*',
		);

		$pay_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());


		$cardno_1 = $this->input->post('cardno_1');
		$cardno_2 = $this->input->post('cardno_2');
		$cardno_3 = $this->input->post('cardno_3');
		$cardno_4 = $this->input->post('cardno_4');

		$cardNo = $cardno_1.$cardno_2.$cardno_3.$cardno_4;	// 카드번호

		$expYear = $this->input->post('select_year'); // 유효기간(년)
		$expMonth = $this->input->post('select_mon'); // 유효기간(월)

		$IDNo =  $this->input->post('auth_no');	// 주민번호 또는 사업자번호
		$cardPw = $this->input->post('cardpw');	// 카드 비밀번호 앞 2자리

		if(!isset($cardNo) ||  !isset($expYear) || !isset($expMonth) || !isset($IDNo) || !isset($cardPw)) {
			$this->common->alert('카드 정보가 올바르지 않습니다.\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)');
			$this->common->historyback();
		}

		$mid         = MID_A;  // 상점아이디
		$moid        = SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis'); // 상품주문번호(CS01+rand+date(YmdHis))
		$goodsName   = SRV_NAME;  // 결제상품명

		$buyerName   = $this->session->userdata('user_name'); // 구매자명
		$buyerTel	 = $this->session->userdata('user_phone'); // 구매자연락처
		$buyerEmail  = $this->session->userdata('user_email'); // 구매자메일주소

		$response = "";

		/*
		****************************************************************************************
		* <해쉬암호화> (수정하지 마세요)
		* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
		****************************************************************************************
		*/

		$plainText = "CardNo=".$cardNo."&ExpYear=".$expYear."&ExpMonth=".$expMonth."&IDNo=".$IDNo."&CardPw=".$cardPw;

		$ediDate = date("YmdHis");
		$merchantKey = MERCHANTKEY_A; // 상점키
		$postURL = "https://webapi.nicepay.co.kr/webapi/billing/billing_regist.jsp";	// 빌키 발급 요청 URL
		$encData = bin2hex($this->_aesEncryptSSL($plainText, substr($merchantKey, 0, 16)));
		$signData = bin2hex(hash('sha256', $mid . $ediDate . $moid . $merchantKey, true));

		$data = Array(
			'MID' => $mid,
			'Moid' => $moid,
			'EdiDate' => $ediDate,
			'EncData' => $encData,
			'SignData' => $signData
		);

		$response = $this->_reqAutoPost($data, $postURL); 				//승인 호출
		$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );
/*
성공시
Array
(
    [ResultCode] => F100
    [ResultMsg] =>   .
    [BID] => BIKYnictest04m2005081610328428
    [AuthDate] => 20200508
    [CardCode] => 07
    [CardName] => []
    [TID] => nictest04m01162005081610328782
)
실패시
Array
(
    [ResultCode] => 3021
    [ResultMsg] =>
    [BID] =>
    [AuthDate] =>
    [CardCode] =>
    [CardName] =>
    [TID] => nictest04m01162005081402517085
)
*/
		if($response['ResultCode'] == 'F100') {

			$update_params = array(
				'p_moid' => $moid,
				'p_tid' => $response['TID'],
				'p_card_no' => $cardno_1.$cardno_2.'****'.$cardno_4,
				'p_card_code' => $response['CardCode'],
				'p_date' => date('Y-m-d H:i:s'),
				'p_at_billkey' => $response['BID'],
				//'p_at_tid' => $response['TID'],
			);

			if($this->pay_tb_model->doUpdate($p_id, $update_params)->isSuccess()) {

				$this->common->alert('카드정보가 변경됐습니다.');
				$this->common->locationhref('/member/paylist');
				exit;
			}
			else {
				$this->common->alert('카드정보 변경이 정상적으로 진행되지 않았습니다.\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)');



				$this->common->historyback();
			}
		}
		else {
			$this->common->alert('카드정보 변경이 정상적으로 진행되지 않았습니다.['.$response['ResultCode'].']\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)');
			$this->common->historyback();
		}
	}

	public function card_update($p_id) {

        $this->loginCheck();
        $this->payCheck();

		if( !isset($p_id) || $p_id == '') {
			$this->common->alert('잘못된 접근입니다.[CU01]');
			$this->common->locationhref('/');
			exit;
		}

		$data = array();
		//$data['price'] = $price;
		//$data['pay'] = $pay;
		//$data['cp_done'] = $cp_done;
		//$data['dc_rate'] = $dc_rate;
		//$data['coupon_nm'] = $coupon_nm;

        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;

		$data['is_iphone'] = $this->is_iphone;

        //$this->header_data['back_url'] = '/payment/choice';
        $this->header_data['back_url'] = '';
        $this->header_data['head_title'] = '월정기 카드변경';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $data['cs_ano'] = $p_id;

		$this->_view('/member/pay_auto_update', $data);
	}

	public function card_regist() {

        $this->loginCheck();

		$pay = $this->input->post('pay');
		$card = $this->input->post('card');

		//$new_phone_number = $this->input->post('new_phone_number');

		if(!isset($pay) || $pay != '1') {
			$this->common->alert('월 자동결제가 선택되지 않았습니다.[CR01]');
			$this->common->locationhref('/payment/choice');
			exit;
		}
		//$coupon_nm = $this->input->post('coupon_nm');
		//$cp_done = $this->input->post('cp_done');
		//$dc_rate = $this->input->post('dc_rate');
		//--$price = $this->input->post('Amt');
		//$pay_free = $this->input->post('pay_free');

		/*
		if( isset($coupon_nm) && isset($cp_done) && isset($dc_rate) ) {
			$rate = @(100-$dc_rate)/100;
			$chk_price = round(( $this->pay_info[$pay]['price']/1.1 * $rate ) * 1.1);
		}
		else {
			$chk_price = $this->pay_info[$pay]['event_price'];
		}
		*/

		/*
		if($this->is_event === true) {
			$chk_price = $this->pay_info[$pay]['event_price'];
		}
		else {
			$chk_price = $this->pay_info[$pay]['first_price'];
		}

		if( $price != $chk_price ) {
			$this->common->alert('결제 금액에 문제가 발생했습니다.[CR02]');
			$this->common->locationhref('/payment/choice');
			exit;
		}
		*/

		$data = array();
		//--$data['price'] = $price;
		$data['pay'] = $pay;
		$data['card'] = $card;
		//$data['cp_done'] = $cp_done;
		//$data['dc_rate'] = $dc_rate;
		//$data['coupon_nm'] = $coupon_nm;
		//$data['new_phone_number'] = $new_phone_number;
		//$data['pay_free'] = $pay_free;

		$data['is_iphone'] = $this->is_iphone;

        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;

        //$this->header_data['back_url'] = '/payment/choice';
        $this->header_data['back_url'] = '';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->header_data['head_title'] = '서비스 가입/결제';

		$data['is_event'] = $this->is_event;
		$data['pay_info'] = $this->pay_info;

		$this->_view('/member/pay_auto_regist', $data);
	}

	public function auto_process() {
        $this->loginCheck();
		$pay = $this->input->get('pay');

		if(!isset($pay) || $pay != '1') {
            $this->common->alert('월 자동결제가 선택되지 않았습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		//--$ori_price = $this->pay_info[$pay]['ori_price'];
		//--$price = $this->pay_info[$pay]['price'];
		//$price = $this->pay_info[$pay]['event_price'];

		$data = array();

/*
 		//쿠폰 유무 확인
		$this->load->model(DBNAME.'/coupon_tb_model');

		$params = array();
		$params['=']['cp_srv_code'] = SRV_CODE;
		$params['=']['cp_status'] = 'Y';
		$params['=']['cp_type'] = 'A';
		$params['slavedb'] = true;
		$cp_count = $this->coupon_tb_model->getCount($params)->getData();

		$data['is_coupon'] = FALSE;

		if($cp_count>0) {
			$data['is_coupon'] = TRUE;
		}
*/
		$data['is_coupon'] = FALSE;

		//$data['month'] = $month;
		$data['p_code'] = SRV_CODE;

		$data['pay'] = $pay;
		//--$data['price'] = $price;
		//--$data['ori_price'] = $ori_price;
		$data['pay_info'] = $this->pay_info;

		$data['is_iphone'] = $this->is_iphone;

		/*
		$new_phone_number = $this->input->post('new_phone_number');
		if($new_phone_number=='') $new_phone_number = $this->session->userdata('user_phone');

		$data['new_phone_number'] = $new_phone_number;
		*/

        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;

        //$this->header_data['back_url'] = '/payment/choice';
        $this->header_data['back_url'] = '';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->header_data['head_title'] = '서비스 가입/결제';

		$data['is_event'] = $this->is_event;
		$this->_view('/member/pay_autoprocess', $data);
	}

	public function choice() {
        //$this->loginCheck();

		$data = array();
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;
        //$this->header_data['back_url'] = '/';
        $this->header_data['back_url'] = '';
        $this->header_data['head_title'] = '서비스 가입/결제';

        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
		$data['pay_info'] = $this->pay_info;

		//유료회원유무 확인
		$this->load->model(DBNAME.'/pay_tb_model');

		$paylist = array();

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => 'p_type, p_end_date',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			'slavedb' => true
		);

		$paylist = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		$data['paylist'] = $paylist;
		$data['is_event'] = $this->is_event;
		$this->_view('/member/pay_choice', $data);
	}

	public function pay_free() {
		return;
		//네이버 페이 호출
		$npay_click_key = $this->input->get('click_key');

		if(isset($npay_click_key) && $npay_click_key != '') {
			$this->session->set_userdata('nPayClickKey', $npay_click_key);
		}

		$this->loginCheck();

		if($this->session->userdata('user_auto_pay')=='Y') {
            $this->common->alert('\'2주 무료 이용\'은 회원 당 1회 입니다.\n이전에 \'2주 무료 이용\'을 신청한 회원은 추가로\n무료 이용 신청을 하실 수 없습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		$pay = '1';
		$price = $this->pay_info[$pay]['price'];

        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;
        $this->header_data['back_url'] = '';
        $this->header_data['head_title'] = '무료 이용 신청';

		$data = array();
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
		$data['pay'] = $pay;
		$data['price'] = $price;
		$data['p_code'] = SRV_CODE;
		$data['is_iphone'] = $this->is_iphone;

		$this->load->model(DBNAME.'/member_tb_model');

		$params = array();
		$params['=']['m_id'] = $this->session->userdata('user_id');

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$member_info = array_shift($this->member_tb_model->getList($params, $extra)->getData());
		$data['user_info'] =  $member_info;

		$data['p_at_day'] = date('Ymd', time()+86400*$this->pay_info[$pay]['freeday']); //결제일
		$this->_view('/member/pay_free', $data);
	}

	public function pay_auth() {
        return;
		$this->loginCheck();

		$pay = $this->input->get('pay');

		if(!isset($pay) || !in_array($pay, array('1', '2', '3'))) {
            $this->common->alert('결제가 선택되지 않았습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		$data = array();
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;
        //$this->header_data['back_url'] = '/';
        $this->header_data['back_url'] = '';
        $this->header_data['head_title'] = '서비스 가입/결제';

        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
		$data['pay'] = $pay;
		$data['pay_info'] = $this->pay_info;
		$data['is_iphone'] = $this->is_iphone;


		$this->load->model(DBNAME.'/member_tb_model');

		$params = array();
		$params['=']['m_id'] = $this->session->userdata('user_id');

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$member_info = array_shift($this->member_tb_model->getList($params, $extra)->getData());
		$data['user_info'] =  $member_info;
/*
		//유료회원유무 확인
		$this->load->model(DBNAME.'/pay_tb_model');

		$paylist = array();

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => 'p_type, p_end_date',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			//'slavedb' => true
		);
		$paylist = array_shift($this->pay_tb_model->getList($params, $extra)->getData());
		//echo '<pre>'; print_r($paylist);
		$data['paylist'] = $paylist;
*/
		$this->_view('/member/pay_auth', $data);
	}

	public function process() {
        $this->loginCheck();
		$pay = $this->input->get('pay');

		if(!isset($pay) || !in_array($pay, array('2', '3'))) {
            $this->common->alert('결제가 선택되지 않았습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		$data = array();

 		//쿠폰 유무 확인
		$this->load->model(DBNAME.'/coupon_tb_model');

		$params = array();
		$params['=']['cp_srv_code'] = SRV_CODE;
		$params['=']['cp_status'] = 'Y';
		$params['=']['cp_type'] = 'G';
		//$params['slavedb'] = true;
		$cp_count = $this->coupon_tb_model->getCount($params)->getData();

		$data['is_coupon'] = FALSE;

		if($cp_count>0) {
			$data['is_coupon'] = TRUE;
		}
		/*
		*******************************************************
		* <결제요청 파라미터>
		* 결제시 Form 에 보내는 결제요청 파라미터입니다.
		* 샘플페이지에서는 기본(필수) 파라미터만 예시되어 있으며,
		* 추가 가능한 옵션 파라미터는 연동메뉴얼을 참고하세요.
		*******************************************************
		*/

		$merchantKey = MERCHANTKEY_G; // 상점키
		$MID         = MID_G;  // 상점아이디

		$moid	     = 'CS01'.str_pad(mt_rand(0,9999),4,'0').date('YmdHis'); // 상품주문번호(CS01+rand+date(YmdHis))

		$price = $this->pay_info[$pay]['price'];

		/*
		$new_phone_number = $this->input->post('new_phone_number');
		if($new_phone_number=='') $new_phone_number = $this->session->userdata('user_phone');
		*/

		$this->load->model(DBNAME.'/pay_tb_model');

		//기간결제 사용 유무 확인
		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => 'p_end_date',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			//'slavedb' => true
		);

		$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(isset($paylist_term['p_end_date'])) {

			$term_end_date =  date('Ymd', strtotime($paylist_term['p_end_date'])+86400);
			$now_date = date('Ymd');
			$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
			$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));

			$Period = date('Ymd').':'.$p_end_date;
		}
		else {
			$Period = date('Ymd').':'.date('Ymd', time()+86400*$this->pay_info[$pay]['period']);
		}

		$month = $this->pay_info[$pay]['month'];

		$goodsName   = SRV_NAME;  // 결제상품명
		$buyerName   = $this->session->userdata('user_name'); // 구매자명
		//$buyerTel	 = $new_phone_number; // 구매자연락처
		$buyerTel	 = ''; // 구매자연락처
		$buyerEmail  = $this->session->userdata('user_email'); // 구매자메일주소
		$returnURL	 = HOME_URL.'/payment/complete'; // 결과페이지(절대경로) - 모바일 결제창 전용

		$VbankExpDate =  date('Ymd', time()+86400*4);	//가상계좌입금만료일(YYYYMMDD)
		//옵션
		$GoodsCl = '0';			//상품구분(실물(1),컨텐츠(0))
		$TransType = '0';		//일반(0)/에스크로(1)
		$CharSet = 'utf-8';		//응답 파라미터 인코딩 방식
		//$ReqReserved = '';		//상점 예약필드

		/*
		*******************************************************
		* <해쉬암호화> (수정하지 마세요)
		* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
		*******************************************************
		*/
		$ediDate = date("YmdHis");
		$hashString = bin2hex(hash('sha256', $ediDate.$MID.$price.$merchantKey, true));

		$data['merchantKey'] = $merchantKey;
		$data['MID'] = $MID;
		$data['moid'] = $moid;

		$data['goodsName'] = $goodsName;
		$data['price'] = $price;
		$data['buyerName'] = $buyerName;
		$data['buyerTel'] = $buyerTel;
		$data['buyerEmail'] = $buyerEmail;
		$data['returnURL'] = $returnURL;
		$data['Period'] = $Period;
		$data['GoodsCl'] = $GoodsCl;
		$data['TransType'] = $TransType;
		$data['CharSet'] = $CharSet;
		$data['VbankExpDate'] = $VbankExpDate;

		$data['ediDate'] = $ediDate;
		$data['hashString'] = $hashString;

		$data['month'] = $month;
		$data['p_code'] = SRV_CODE;
		$data['pay'] = $pay;

		//$data['new_phone_number'] = $new_phone_number;

        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;

        //$this->header_data['back_url'] = '/payment/choice';
        $this->header_data['back_url'] = '';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->header_data['head_title'] = '서비스 가입/결제';

		$data['is_event'] = $this->is_event;
		$data['pay_info'] = $this->pay_info;

		$this->_view('/member/pay_process', $data);
	}

	public function auto_complete() {

        $this->loginCheck();
		$pay = $this->input->post('pay');

		if(!isset($pay) || $pay != '1') {
			$this->common->alert('월 자동결제가 선택되지 않았습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		//월 자동결제 사용 유무 확인
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = $this->pay_info[$pay]['type'];
        $params['in']['p_status'] = array('P', 'W');
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_end_date DESC',
			'slavedb' => true
		);

		$autopay_data = array();
        $autopay_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());
		//$auto_count = $this->pay_tb_model->getCount($params)->getData();

		//if( $auto_count > 0 ) {
		if( isset($autopay_data['p_id']) && $autopay_data['p_id'] != '' ) {
			$this->common->alert('이미 월정기 서비스를 이용 중 입니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		//기간결제 사용 유무 확인
		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => 'p_end_date',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			'slavedb' => true
		);

		$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		$cardno_1 = $this->input->post('cardno_1');
		$cardno_2 = $this->input->post('cardno_2');
		$cardno_3 = $this->input->post('cardno_3');
		$cardno_4 = $this->input->post('cardno_4');

		$cardNo = $cardno_1.$cardno_2.$cardno_3.$cardno_4;	// 카드번호

		$expYear = $this->input->post('select_year'); // 유효기간(년)
		$expMonth = $this->input->post('select_mon'); // 유효기간(월)

		$IDNo =  $this->input->post('auth_no');	// 주민번호 또는 사업자번호
		$cardPw = $this->input->post('cardpw');	// 카드 비밀번호 앞 2자리

		$price = $this->input->post('Amt');
		//$pay_free = $this->input->post('pay_free');

		//핸드폰번호
		//$new_phone_number = $this->input->post('new_phone_number');

		if(!isset($cardNo) || !isset($price) || !isset($expYear) || !isset($expMonth) || !isset($IDNo) || !isset($cardPw)) {
			$this->common->alert('카드 정보가 올바르지 않습니다.');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		//$cp_done = $this->input->post('cp_done');
		//$dc_rate = $this->input->post('dc_rate');
		//$coupon_nm = $this->input->post('coupon_nm');

		$mid         = MID_A;  // 상점아이디
		$moid        = SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis'); // 상품주문번호(CS01+rand+date(YmdHis))
		$goodsName   = SRV_NAME;  // 결제상품명
		$goodsName   = iconv('UTF-8', 'EUC-KR', $goodsName);

		$buyerName   = $this->session->userdata('user_name'); // 구매자명
		$buyerName   = iconv('EUC-KR', 'UTF-8', $buyerName);

		$buyerTel	 = $this->session->userdata('user_phone'); // 구매자연락처
		//if($buyerTel=='') {
		//	$buyerTel = $new_phone_number;
		//}
		$buyerEmail  = $this->session->userdata('user_email'); // 구매자메일주소

		//$returnURL	 = HOME_URL.'/payment/complete'; // 결과페이지(절대경로) - 모바일 결제창 전용
		//$Period = date('Ymd').':'.date('Ymd', time()+86400*$this->pay_info[$pay]['period']);
		//$month = $this->pay_info[$pay]['month'];

		$response = "";

		/*
		****************************************************************************************
		* <해쉬암호화> (수정하지 마세요)
		* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
		****************************************************************************************
		*/

		$plainText = "CardNo=".$cardNo."&ExpYear=".$expYear."&ExpMonth=".$expMonth."&IDNo=".$IDNo."&CardPw=".$cardPw;

		$ediDate = date("YmdHis");
		$merchantKey = MERCHANTKEY_A; // 상점키
		$postURL = "https://webapi.nicepay.co.kr/webapi/billing/billing_regist.jsp";	// 빌키 발급 요청 URL
		$encData = bin2hex($this->_aesEncryptSSL($plainText, substr($merchantKey, 0, 16)));
		$signData = bin2hex(hash('sha256', $mid . $ediDate . $moid . $merchantKey, true));

		$data = Array(
			'MID' => $mid,
			'Moid' => $moid,
			'GoodsName' => $goodsName,
			'BuyerName' => $buyerName,
			'BuyerEmail' => $buyerEmail,
			'EdiDate' => $ediDate,
			'EncData' => $encData,
			'SignData' => $signData
		);

		$response = $this->_reqAutoPost($data, $postURL); 				//승인 호출
		$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );
/*
성공시
Array
(
    [ResultCode] => F100
    [ResultMsg] =>   .
    [BID] => BIKYnictest04m2005081610328428
    [AuthDate] => 20200508
    [CardCode] => 07
    [CardName] => []
    [TID] => nictest04m01162005081610328782
)
실패시
Array
(
    [ResultCode] => 3021
    [ResultMsg] =>
    [BID] =>
    [AuthDate] =>
    [CardCode] =>
    [CardName] =>
    [TID] => nictest04m01162005081402517085
)
*/
		if($response['ResultCode'] == 'F100') {

			//카드 빌키 발급 성공
			$p_status = 'P'; //결제상태(결제:P, 대기:W, 취소:C, 환불:R)

			//제휴사 및 최초 결제 체크
			$this->load->model(DBNAME.'/member_tb_model');

			$member_params = array();
			$member_params['=']['m_id'] = $this->session->userdata('user_id');

			$extra = array(
				'fields' => 'm_pt_code, m_auto_pay',
				//'slavedb' => true
			);

			$member_info = array_shift($this->member_tb_model->getList($member_params, $extra)->getData());

			$is_first = TRUE;

			$p_at_eventprice = '';
			$p_at_eventuse = '';

			if(isset($member_info['m_auto_pay']) && $member_info['m_auto_pay'] == 'Y') {
				$is_first = FALSE;
				$send_price = $price;
			}
			else {
				$p_at_eventprice = ($this->is_event === true) ? $this->pay_info[$pay]['event_price'] : $this->pay_info[$pay]['first_price'];;
				$p_at_eventuse = 'N';
				$send_price = $p_at_eventprice;
			}

			//$send_price = $price;
			//쿠폰 사용 일 경우
			//$p_at_eventprice = '';
			//$p_at_eventuse = '';

			/*
			if( $coupon_nm != '' && $cp_done == '1') {
				$p_at_eventprice = $price;
				$p_at_eventuse = 'N';

				if( substr($coupon_nm, 0, 4) != 'CASE' ) {
					$price = $this->pay_info[$pay]['price'];
				}
			}
			*/

			//if($is_first === TRUE) {
			//	$free_day = $this->pay_info[$pay]['freeday'];
			//}
			//else {
			$free_day = 0;
			//}

			if(isset($paylist_term['p_end_date']) && $paylist_term['p_end_date'] != '') {

				$term_end_date =  date('Ymd', strtotime($paylist_term['p_end_date'])+86400);
				$now_date = date('Ymd');
				$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
/*
				$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));
				$p_at_day = date('Ymd', time()+86400*($this->pay_info[$pay]['freeday']+$term_rest));
				$p_status = 'W';
*/
				//$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));
				$p_at_day = date('Ymd', time()+86400*($free_day+$term_rest));

				$p_end_date = $p_at_day;

				//$p_end_date = date("Ym", strtotime($p_at_day." +1 month")).substr($p_at_day, 6, 2);

				//$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));
				//$p_end_date = date("Ym",strtotime("+1 month", time())).substr($p_at_day, 6, 2);
				$p_status = 'W';
			}
			else {
				$p_at_day = date('Ymd', time()+86400*$free_day);

				$p_end_date = $p_at_day;

				//$p_end_date = date("Ym", strtotime($p_at_day." +1 month")).substr($p_at_day, 6, 2);

				//$p_end_date = date("Ym",strtotime("+1 month", time())).substr($p_at_day, 6, 2);
				//$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']));
			}

			$params = array(
				'p_user_id' => $this->session->userdata('user_id'),
				'p_code' => SRV_CODE,
				'p_user_name' => $this->session->userdata('user_name'),
				'p_moid' => $moid,
				'p_price' => $price,
				'p_real_price' => $price,
				'p_pay' => $pay,
				'p_type' => 'A',
				'p_method' => 'CARD',
				'p_status' => $p_status,
				'p_tid' => $response['TID'],
				'p_card_no' => $cardno_1.$cardno_2.'****'.$cardno_4,
				'p_card_code' => $response['CardCode'],
				'p_coupon' => $coupon_nm,
				'p_dcrate' => $dc_rate,
				'p_date' => date('Y-m-d H:i:s'),
				'p_start_date' => date('Ymd'),
				'p_end_date' => $p_end_date,
				'p_at_day'  => $p_at_day,
				//'p_authdate' => date('Y-m-d H:i:s'), //$response['AuthDate'],
				'p_at_billkey' => $response['BID'],
				//'p_tid' => $response['TID'],
				'p_at_eventprice' => $p_at_eventprice,
				'p_at_eventuse' => $p_at_eventuse
			);

			if($is_first === TRUE && $member_info['m_pt_code'] != '') {
				$params['p_pt_code'] = $member_info['m_pt_code'];
			}

			if($this->pay_tb_model->doInsert($params)->isSuccess()) {

				//결제 DB 반영 후 member_tb 업데이트, 세션 생성
				$update_params = array(
					'm_paid' => 'Y',
					'm_push_ticker' => 'Y',
					'm_push_service' => 'Y',
					//'m_push_date' => date('Y-m-d H:i:s'),
				);

				/*
				if(isset($new_phone_number) && $new_phone_number!='') {
					$update_params['m_phone'] = str_replace('-','',$new_phone_number);
					$this->session->set_userdata('user_phone', str_replace('-','',$new_phone_number));
				}
				*/

				if($is_first === TRUE) {
					$update_params['m_auto_pay'] = 'Y';
				}

				if($this->member_tb_model->doUpdate($this->session->userdata('user_id'), $update_params)->isSuccess()) {

					// 최초가 아닐 경우(결제일이 오늘일 경우 승인 처리
					//if( $is_first == FALSE && $p_at_day = date('Ymd') ) {
					if( $p_at_day == date('Ymd') ) {

						$approve_params = array();
						$approve_params['=']['p_user_id'] = $this->session->userdata('user_id');
						$approve_params['=']['p_code'] = SRV_CODE;
						$approve_params['=']['p_pay'] = $pay;
						$approve_params['=']['p_type'] = 'A';
						$approve_params['=']['p_status'] = 'P';
						$approve_params['=']['p_tid'] = $response['TID'];
						$approve_params['>=']['p_end_date'] = date('Ymd');

						$approve_extra = array(
							'fields' => '*',
							'order_by' => 'p_id DESC',
							'limit' => 1,
						);

						$approve_val = array();
						$approve_val = array_shift($this->pay_tb_model->getList($approve_params, $approve_extra)->getData());
						$approve_val['is_send'] = false;
						if(!$this->_doapprove($approve_val)) {

							$cancel_params = array(
								'm_paid' => 'N',
								'm_push_ticker' => 'N',
								'm_push_service' => 'N',
								//'m_push_date' => '',
							);

							if($is_first === TRUE) {
								$cancel_params['m_auto_pay'] = 'N';
							}

							$this->member_tb_model->doUpdate($this->session->userdata('user_id'), $cancel_params);

							$this->common->alert('결제가 정상적으로 진행되지 않았습니다.[AC03]\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)');
							$this->common->locationhref('/payment/choice');
							exit;
						}
						else {
							$at_params = array();
							$at_params['=']['p_user_id'] = $this->session->userdata('user_id');
							$at_params['=']['p_id'] = $approve_val['p_id'];

							$at_extra = array(
								'fields' => '*',
							);

							$at_data = array_shift($this->pay_tb_model->getList($at_params, $at_extra)->getData());

							$p_at_day = $at_data['p_at_day'];
						}
					}

					$this->session->set_userdata('is_paid', TRUE);

					if($this->session->userdata('user_phone')=='') {
						$free_notice = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
						$this->session->set_userdata('free_notice', $free_notice);
					}

					/*
					//쿠폰 사용 처리
					if($cp_done == '1' && $coupon_nm != '') {
						$this->load->model(DBNAME.'/coupon_tb_model');

						if($this->coupon_tb_model->get(array('cp_code' => $coupon_nm))->isSuccess()) {

							$coupon_info = $this->coupon_tb_model->getData();

							$update_coupon['cp_use_count'] = $coupon_info['cp_use_count'] + 1;
							$update_coupon['cp_sum'] = $coupon_info['cp_sum'] + $p_at_eventprice;
							if($coupon_info['cp_single'] == 'Y') $update_coupon['cp_single_date'] = date('Y-m-d H:i:s');

							$this->coupon_tb_model->doUpdate($coupon_nm, $update_coupon);
						}
					}
					*/

					if($is_first === TRUE) {
						$this->session->set_userdata('user_auto_pay', 'Y');

						/* push 보내기(template - 18, 결제완료_월정기_2주무료)
						$send_phone = $this->session->userdata('user_phone');
						if($send_phone!='') {
							$push_info = array();
							$push_info['template']= '18';
							$push_info['push_type']= 'at';
							$push_info['from']= PUSH_FROM;
							$push_info['to']= $send_phone;
							$push_info['at_message']['replace_0'] = ( $this->session->userdata('user_name') != '') ? $this->session->userdata('user_name'):'고객' ; //이름
							$push_info['at_message']['replace_1'] = date('Y년 m월 d', strtotime($p_at_day)); //결제일
							//$push_info['at_message']['replace_2'] = '초이스스탁US';				//서비스명
							//$push_info['at_message']['replace_3'] = '프리미엄';					//프리미엄
							//$push_info['at_message']['replace_4'] = '월정기';					//월정기
							//$push_info['at_message']['replace_5'] = number_format($send_price);	//결제금액
							//$push_info['at_message']['replace_6'] = date('Y년 m월 d', strtotime($p_at_day));	//결제일
							$push_info['count']= '2';

							$result = $this->send_push($push_info);
						}
						push 보내기 */
					}
					//else {
					/* push 보내기(template - 1, 월정기)
					$send_phone = $this->session->userdata('user_phone');
					if($send_phone!='') {
						$push_info = array();
						$push_info['template']= '1';
						$push_info['push_type']= 'at';
						$push_info['from']= PUSH_FROM;
						$push_info['to']= $send_phone;
						$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
						$push_info['at_message']['replace_1'] = '초이스스탁US';				//서비스명
						$push_info['at_message']['replace_2'] = '프리미엄';					//프리미엄
						$push_info['at_message']['replace_3'] = '월정기';					//월정기
						$push_info['at_message']['replace_4'] = number_format($send_price);	//결제금액
						$push_info['at_message']['replace_5'] = substr($p_at_day, 6, 2);	//결제일
						$push_info['at_message']['replace_6'] = '초이스스탁US';				//서비스명
						$push_info['count']= '7';

						$result = $this->send_push($push_info);
					}
					push 보내기 */
					//}

					/* push 보내기(template - 13, 결제안내(관리자용)) */
					$push_info = array();
					$push_info['template']= '13';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= ADMIN_PHONE;
					$push_info['at_message']['replace_0'] = date('Y-m-d H:i:s'); //결제일자
					$push_info['at_message']['replace_1'] = $this->session->userdata('user_name');	//결제자
					$push_info['at_message']['replace_2'] = '초이스스탁US';		//서비스명
					$push_info['at_message']['replace_3'] = '프리미엄';			//프리미엄
					$push_info['at_message']['replace_4'] = '월정기'			;//월정기
					$push_info['at_message']['replace_5'] = '신용카드';			//결제수단
					$push_info['at_message']['replace_6'] = number_format($send_price);	//결제금액
					$push_info['count']= '7';

					$result = $this->send_push($push_info);
					/* push 보내기 */

					$data = array();
					$data['p_at_day'] = $p_at_day; //결제일
					//$data['price'] = $price; //결제금액
					//$data['p_at_eventprice'] = $p_at_eventprice; //이벤트 결제금액
					$data['cardno'] = '**'.$cardno_4; //카드넘버

					$this->header_data['header_template'] = '11';
					$this->header_data['show_alarm'] = false;
			        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
					$this->header_data['head_title'] = '서비스 가입/결제';

					//$this->header_data['back_url'] = '/';
					$this->header_data['back_url'] = '';

					//if($pay_free == 'Y') {
						/*
						//네이버 페이 체크
						if( $is_first === TRUE ) {
							$this->_naver_pay();
						}
						*/

						//$this->header_data['header_template'] = '13';
						//$this->header_data['head_title'] = '무료 이용 신청';
						//$this->_view('/member/pay_freecomplete', $data);
					//}
					//else {
					$data['is_event'] = $this->is_event;
					$data['pay_info'] = $this->pay_info;
					$data['is_first'] = $is_first;
					$this->_view('/member/pay_autocomplete', $data);
					//}
					return;
				}
				else {
					$this->common->alert('회원 정보 UPDATE 중 오류가 발생했습니다.[AC02]');
					$this->common->locationhref('/');
					exit;
				}
			}
			else {
				//echo '<pre>';
				//print_r($params);
				$this->common->alert('결제 진행 중 오류가 발생했습니다.[AC01]');
				//if($pay_free == 'Y') {
				//	$this->common->locationhref('/payment/pay_free');
				//}
				//else {
				$this->common->locationhref('/payment/choice');
				//}
				exit;
			}
/*
			member_tb
			pay_tb

1.pay_tb 데이터 확인
	- 없을 때
	- 있을 때
*/

/*
echo '<pre>'; print_r($response);
echo 'moid-->'.$moid;

moid-->CS0179020200508161030
TID생성
$tid = $mid.'0116'.date('ymdHis').str_pad(mt_rand(0,9999),4,'0');

TID(30byte) nictest00m01161912191404041136
MID(10byte) 지불수단(2byte)

매체구분(2byte)

시간정보(yyMMddHHmmss, 12byte) 랜덤(4byte)
nictest00m 01 (신용카드) 16 (빌링) 191219140404 1136
=nicepay00m01012004281536436745


정상 승인 메세지
ResultCode=3001
ResultMsg=카드 결제 성공
AuthCode=00778229
AuthDate=200508161439
AcquCardCode=07
AcquCardName=현대
CardCode=07
CardName=현대
CardQuota=00
CardInterest=0
CardCl=0
Amt=000000001004
GoodsName=나이스페이
MID=nictest04m
Moid=CS0179020200508161030
BuyerName=
TID=nictest04m01162005081610328783
CardNo=43302888****8920
*/
		}
		else {
			$this->common->alert('등록한 카드정보가 일치하지 않습니다. 다시 확인해 주세요.['.$response['ResultCode'].']\n(등록 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)');
			$this->common->historyback();
			exit;
		}
	}

	private function _naver_pay() {
		return;
		$npay_click_key = $this->session->userdata('nPayClickKey');

		if(isset($npay_click_key) && $npay_click_key!='') {

			$result = array();
			/*
			$data = Array(
				'advertiser_token' => $advertiser_token,
				'click_key' => $npay_click_key
			);
			$postURL = 'https://postback-ao.adison.co/api/postbacks/server';
			$result = $this->_reqPost($data, $postURL);
			*/
			$advertiser_token = 'LZVp9hgyxGRyBr32WKjYe348';
            $npay_url = 'https://postback-ao.adison.co/api/postbacks/server?advertiser_token='.$advertiser_token.'&click_key='.$npay_click_key;

			//$result = json_decode(file_get_contents($npay_url), true);
			//$result = iconv('EUC-KR', 'UTF-8', $this->get_content($npay_url));
			/*
			$result = $this->get_content($npay_url);
			$result = json_decode($result, true);
			*/

			$result = json_decode(file_get_contents($npay_url), true);
			//echo $npay_url.'<br>'; echo '<pre>'; print_r($result);

			//if(is_array($result) && sizeof($result) > 0) {
			$this->load->model(DBNAME.'/npay_tb_model');
			//npay_tb insert
			$params = array(
				'n_user_id' => $this->session->userdata('user_id'),
				'n_code' => SRV_CODE,
				'n_click_key' => $npay_click_key,
				'n_reg_date' => date('Y-m-d H:i:s'),
				'n_pay_code' => ($result['code']=='') ? '0': $result['code'],
				'n_pay_message' =>  ($result['message']=='') ? 'OK': $result['message'],
			);

			$this->npay_tb_model->doInsert($params);
			$this->session->unset_userdata('nPayClickKey');
			//}
		}
		return;
	}

	public function complete() {

        $this->loginCheck();

		/*
		****************************************************************************************
		* <인증 결과 파라미터>
		****************************************************************************************
		*/
		$authResultCode = $this->input->post('AuthResultCode');		// 인증결과 : 0000(성공)
		$authResultMsg = $this->input->post('AuthResultMsg');		// 인증결과 메시지
		$nextAppURL = $this->input->post('NextAppURL');				// 승인 요청 URL
		$txTid = $this->input->post('TxTid');						// 거래 ID
		$authToken = $this->input->post('AuthToken');				// 인증 TOKEN
		$payMethod = $this->input->post('PayMethod');				// 결제수단
		$mid = $this->input->post('MID');							// 상점 아이디
		$moid = $this->input->post('Moid');							// 상점 주문번호
		$amt = $this->input->post('Amt');							// 결제 금액
		$reqReserved = $this->input->post('ReqReserved');			// 상점 예약필드(pay|쿠폰코드|할인율|쿠폰적용확인)
		$netCancelURL = $this->input->post('NetCancelURL');			// 망취소 요청 URL

		$reserve_result = explode('|', $reqReserved);
		$pay = $reserve_result[0];
		$coupon_nm = $reserve_result[1];
		$dc_rate = $reserve_result[2];
		$cp_done = $reserve_result[3];
		//$new_phone_number = $reserve_result[4];

		if(!isset($pay) || !in_array($pay, array('2', '3'))) {
            $this->common->alert('결제가 선택되지 않았습니다.[C01]');
			$this->common->locationhref('/payment/choice');
			exit;
		}

		/*
		****************************************************************************************
		* <승인 결과 파라미터 정의>
		* 샘플페이지에서는 승인 결과 파라미터 중 일부만 예시되어 있으며,
		* 추가적으로 사용하실 파라미터는 연동메뉴얼을 참고하세요.
		****************************************************************************************
		*/

		$response = "";

		if($authResultCode === "0000"){

			/*
			****************************************************************************************
			* <해쉬암호화> (수정하지 마세요)
			* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
			****************************************************************************************
			*/
			$ediDate = date("YmdHis");
			$merchantKey = MERCHANTKEY_G; // 상점키
			$signData = bin2hex(hash('sha256', $authToken . $mid . $amt . $ediDate . $merchantKey, true));

			try{
				$data = Array(
					'TID' => $txTid,
					'AuthToken' => $authToken,
					'MID' => $mid,
					'Amt' => $amt,
					'EdiDate' => $ediDate,
					'SignData' => $signData,
					'CharSet' => 'utf-8'
				);
				$response = $this->_reqPost($data, $nextAppURL); //승인 호출
				//$this->jsonRespDump($response); //response json dump example

			}catch(Exception $e){
				$e->getMessage();
				$data = Array(
					'TID' => $txTid,
					'AuthToken' => $authToken,
					'MID' => $mid,
					'Amt' => $amt,
					'EdiDate' => $ediDate,
					'SignData' => $signData,
					'NetCancel' => '1',
					'CharSet' => 'utf-8'
				);
				$response = $this->_reqPost($data, $netCancelURL); //예외 발생시 망취소 진행
/*

//신용카드
ResultCode=3001
ResultMsg=카드 결제 성공
Amt=000000001000
MID=nicepay00m
Moid=mnoid1234567890
BuyerEmail=happy@day.co.kr
BuyerTel=01000000000
BuyerName=나이스
GoodsName=나이스페이
TID=nicepay00m01012004281536436745
AuthCode=00493055
AuthDate=200428153643
PayMethod=CARD
CartData=
CardCode=07
CardName=현대
CardNo=43826500****8607
CardQuota=00
CardInterest=0
AcquCardCode=07
AcquCardName=현대
CardCl=0
CcPartCl=1
CouponAmt=000000000000
CouponMinAmt=000000000000
PointAppAmt=000000000000
ClickpayCl=

가상계좌
파라미터명	파라미터설명
VbankBankCode	3 byte 결제은행코드(은행 코드 참조)
VbankBankName	20 byte 결제은행명 (euc-kr)
VbankNum	20 byte 가상계좌번호
VbankExpDate	8 byte 가상계좌 입금만료일(yyyyMMdd)
VbankExpTime	6 byte 가상계좌 입금만료시간(HHmmss)

파라미터명	파라미터설명
BankCode	3 byte 결제은행코드(은행 코드 참조)
BankName	20 byte 결제은행명 (euc-kr)
RcptType	1 byte 현금영수증타입 (0:발행안함,1:소득공제,2:지출증빙)
RcptTID	30 byte 옵션 현금영수증 TID, 현금영수증 거래인 경우 리턴
RcptAuthCode	30 byte 옵션 현금영수증 승인번호, 현금영수증 거래인 경우 리턴

//가상계좌
Array
(
    [ResultCode] => 4100
    [ResultMsg] => 가상계좌 발급 성공
    [Amt] => 000000013200
    [MID] => nicepay00m
    [Moid] => CS01407220200629151657
    [BuyerEmail] => high@datahero.co.kr
    [BuyerTel] =>
    [BuyerName] => 오영훈
    [GoodsName] => 초이스스탁
    [TID] => nicepay00m03012006291518134127
    [AuthCode] =>
    [AuthDate] => 200629151814
    [PayMethod] => VBANK
    [CartData] =>
    [Signature] => 7a17102e42886670670257e71b062c0199184b9908ea3f01a74d7ec2fdfb106b
    [VbankBankCode] => 004
    [VbankBankName] => 국민은행
    [VbankNum] => 39919013809210
    [VbankExpDate] => 20200703
    [VbankExpTime] => 235959
)
*/
			}

			$respArr = json_decode($response, true);
			//echo '<pre>'; print_r($respArr);

			//3001:신용카드, 4000:계좌이체, 4100:가상계좌
			if(in_array($respArr['ResultCode'], array('3001', '4000', '4100'))) {
				//결제성공 시 결제table insert or update

				$this->load->model(DBNAME.'/pay_tb_model');

				//기간결제 사용 유무 확인
				$params = array();
				$params['=']['p_user_id'] = $this->session->userdata('user_id');
				$params['=']['p_code'] = SRV_CODE;
				$params['=']['p_type'] = 'G';
				$params['=']['p_status'] = 'P';
				$params['>=']['p_end_date'] = date('Ymd');

				$extra = array(
					'fields' => 'p_end_date',
					'order_by' => 'p_end_date DESC',
					'limit' => 1,
					//'slavedb' => true
				);

				$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

				if(isset($paylist_term['p_end_date']) && $paylist_term['p_end_date'] !='') {

					$term_end_date =  date('Ymd', strtotime($paylist_term['p_end_date'])+86400);
					$now_date = date('Ymd');
					$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
					$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']+$term_rest));
				}
				else {
					$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay]['period']+$this->pay_info[$pay]['freeday']));
				}

				$params = array(
					'p_user_id' => $this->session->userdata('user_id'),
					'p_code' => SRV_CODE,
					'p_user_name' => $respArr['BuyerName'],
					'p_moid' => $respArr['Moid'],
					'p_price' => intval($respArr['Amt']),
					'p_real_price' => intval($respArr['Amt']),
					'p_pay' => $pay,
					'p_type' => 'G',
					'p_method' => $respArr['PayMethod'],
					'p_status' => ($respArr['PayMethod']=='VBANK') ? 'W':'P',
					'p_tid' => $respArr['TID'],
					'p_card_no' => $respArr['CardNo'],
					'p_card_code' => $respArr['CardCode'],
					'p_coupon' => ($cp_done=='1') ? $coupon_nm:'',
					'p_dcrate' => ($cp_done=='1') ? $dc_rate:'',
					'p_vb_bankcode' => (isset($respArr['VbankBankCode'])) ? $respArr['VbankBankCode']:'',
					'p_vb_banknum' => (isset($respArr['VbankNum'])) ? $respArr['VbankNum']:'',
					'p_vb_expdate' => (isset($respArr['VbankExpDate'])) ? $respArr['VbankExpDate'].$respArr['VbankExpTime']:'',
					'p_vb_status' => ($respArr['PayMethod']=='VBANK') ? 'N':'',
					'p_date' => date('Y-m-d H:i:s'),
					'p_start_date' => ($respArr['PayMethod']=='VBANK') ? '':date('Ymd'),
					'p_end_date' => ($respArr['PayMethod']=='VBANK') ? '':$p_end_date,
					'p_authdate' => ($respArr['PayMethod']=='VBANK') ? '':date('Y-m-d H:i:s'),
					'p_cr_type' => (isset($respArr['RcptType'])) ? $respArr['RcptType']:'',
					'p_cr_tid' => (isset($respArr['RcptTID'])) ? $respArr['RcptTID']:'',
					'p_cr_authcode' => (isset($respArr['RcptAuthCode'])) ? $respArr['RcptAuthCode']:'',
				);

				if($this->pay_tb_model->doInsert($params)->isSuccess()) {

					//결제 DB 반영 후 member_tb 업데이트, 세션 생성
					$this->load->model(DBNAME.'/member_tb_model');

					//if($respArr['PayMethod']=='VBANK' && $paylist_term['p_end_date'] == '') {
					$is_paid = TRUE;
					if($respArr['PayMethod']=='VBANK') {
						if(isset($paylist_term['p_end_date']) && $paylist_term['p_end_date'] !='') {
							$update_params = array(
								'm_paid' => 'Y',
								'm_push_ticker' => 'Y',
								'm_push_service' => 'Y',
								//'m_push_date' => date('Y-m-d H:i:s'),
							);

						}
						else {
							$update_params = array(
								'm_paid' => 'N',
							);
							$is_paid = FALSE;
						}
					}
					else {
						$update_params = array(
							'm_paid' => 'Y',
							'm_push_ticker' => 'Y',
							'm_push_service' => 'Y',
							//'m_push_date' => date('Y-m-d H:i:s'),
						);
					}

					/*
					if(isset($new_phone_number) && $new_phone_number!='') {
						$update_params['m_phone'] = str_replace('-','',$new_phone_number);
					}
					*/

					if($this->member_tb_model->doUpdate($this->session->userdata('user_id'), $update_params)->isSuccess()) {

						if($is_paid===TRUE) {
							$this->session->set_userdata('is_paid', TRUE);

							/*
							if(isset($new_phone_number) && $new_phone_number!='') {
								$this->session->set_userdata('user_phone', str_replace('-','',$new_phone_number));
							}
							*/
							if($this->session->userdata('user_phone')=='') {
								$free_notice = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
								$this->session->set_userdata('free_notice', $free_notice);
							}
						}
						else {
							$this->session->set_userdata('is_paid', FALSE);
						}

						//쿠폰 사용 처리
						if($cp_done == '1' && $coupon_nm != '') {

							$this->load->model(DBNAME.'/coupon_tb_model');

							if($this->coupon_tb_model->get(array('cp_code' => $coupon_nm))->isSuccess()) {

								$coupon_info = $this->coupon_tb_model->getData();

								$update_params['cp_use_count'] = $coupon_info['cp_use_count'] + 1;
								$update_params['cp_sum'] = $coupon_info['cp_sum'] + intval($respArr['Amt']);
								if($coupon_info['cp_single'] == 'Y') $update_params['cp_single_date'] = date('Y-m-d H:i:s');

								//$update_params = array(
								//	'cp_use_count' => 'cp_use_count+1',
								//	'cp_sum' => 'cp_sum+',
								//);

				                $this->coupon_tb_model->doUpdate($coupon_nm, $update_params);
								/*
								if(!$this->coupon_tb_model->doUpdate($coupon_nm, $update_params)->isSuccess()) {
									$this->common->alert('결제 처리 과정에서 장애가 발생했습니다.[C02]');
									$this->common->locationhref('/');
									exit;
								}
								*/
							}
						}

						//$send_phone = ($new_phone_number!='') ? $new_phone_number:$this->session->userdata('user_phone');
						$send_phone = ''; //2021.2.9 작업
						if($respArr['PayMethod']=='VBANK') {

							/* push 보내기(template - 4, 무통장입금 안내) */
							if($send_phone!='') {
								$push_info = array();
								$push_info['template']= '4';
								$push_info['push_type']= 'at';
								$push_info['from']= PUSH_FROM;
								$push_info['to']= $send_phone;
								$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
								$push_info['at_message']['replace_1'] = $respArr['VbankBankName'];	//입금은행명
								$push_info['at_message']['replace_2'] = $respArr['VbankNum'];	//가상계좌번호
								$push_info['at_message']['replace_3'] = number_format(intval($respArr['Amt']));//결제금액
								$push_info['at_message']['replace_4'] = date('Y년m월d일', strtotime($respArr['VbankExpDate'].$respArr['VbankExpTime']));	//입금마감일
								$push_info['count']= '5';

								$result = $this->send_push($push_info);
							}
							/* push 보내기 */
						}
						else {
							/* push 보내기(template - 5, 기간결제 완료) */
							if($send_phone!='') {
								$push_info = array();
								$push_info['template']= '5';
								$push_info['push_type']= 'at';
								$push_info['from']= PUSH_FROM;
								$push_info['to']= $send_phone;

								//SMS일 경우
								//$push_info['sms_message'] = '내용입력';

								$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
								$push_info['at_message']['replace_1'] = '초이스스탁US';	//서비스명
								$push_info['at_message']['replace_2'] = '프리미엄';		//프리미엄
								$push_info['at_message']['replace_3'] = $this->pay_info[$pay]['month'].'개월';//개월수
								$push_info['at_message']['replace_4'] = number_format(intval($respArr['Amt']));//결제금액
								$push_info['at_message']['replace_5'] = '초이스스탁US';	//서비스명
								$push_info['count']= '6';

								$result = $this->send_push($push_info);
							}
							/* push 보내기 */

							/* push 보내기(template - 13, 결제안내(관리자용)) */
							$push_info = array();
							$push_info['template']= '13';
							$push_info['push_type']= 'at';
							$push_info['from']= PUSH_FROM;
							$push_info['to']= ADMIN_PHONE;
							$push_info['at_message']['replace_0'] = date('Y-m-d H:i:s'); //결제일자
							$push_info['at_message']['replace_1'] = $this->session->userdata('user_name');	 //결제자
							$push_info['at_message']['replace_2'] = '초이스스탁US';		//서비스명
							$push_info['at_message']['replace_3'] = '프리미엄';			//프리미엄
							$push_info['at_message']['replace_4'] = $this->pay_info[$pay]['month'].'개월';	 //개월수
							$push_info['at_message']['replace_5'] = $this->pay_method_name[$respArr['PayMethod']];//결제수단
							$push_info['at_message']['replace_6'] = number_format(intval($respArr['Amt']));	//결제금액
							$push_info['count']= '7';

							$result = $this->send_push($push_info);
							/* push 보내기 */
						}

						$this->header_data['header_template'] = '11';
						$this->header_data['show_alarm'] = false;
						$this->header_data['head_title'] = '서비스 가입/결제';
						//$this->header_data['back_url'] = '/';
						$this->header_data['back_url'] = '';

						$data = array();
				        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
						$data['srv_name'] = SRV_NAME;
						$data['month'] = $this->pay_info[$pay]['month'];
						$data['price'] = intval($respArr['Amt']);
						$data['p_method'] = $respArr['PayMethod'];

						$data['result_title'] = '정상적으로 결제가<br>완료 되었습니다.';

						if( $respArr['PayMethod'] == 'VBANK' ) {
							$data['result_title'] = '유료서비스가<br>신청되었습니다.';
							$data['p_method_name'] = '가상계좌(무통장)';

							$this->load->model(DBNAME.'/bankcard_tb_model');

							if($this->bankcard_tb_model->get(array('bc_code' => $respArr['VbankBankCode']))->isSuccess()) {
								$selected_row = $this->bankcard_tb_model->getData();
							}
							else {
								echo $this->bankcard_tb_model->getErrorMsg();
							}
							$data['p_vb_bankname'] = (isset($selected_row['bc_name'])) ? $selected_row['bc_name']:'';
							$data['p_vb_banknum'] = (isset($respArr['VbankNum'])) ? $respArr['VbankNum']:'';
							$data['p_vb_expdate'] = (isset($respArr['VbankExpDate'])) ? ($respArr['VbankExpDate'].$respArr['VbankExpTime']):'';
							$data['p_vb_username'] = $respArr['BuyerName'];

						}
						else if( $respArr['PayMethod'] == 'BANK' ) {
							$data['p_method_name'] = '계좌이체';
						}
						else {
							$data['p_method_name'] = '신용카드 (**'.substr($respArr['CardNo'],-4).')';
						}

						$this->_view('/member/pay_complete', $data);
					}
					else {
						$this->common->alert('회원 정보 UPDATE 중 오류가 발생했습니다.[C03]');
						$this->common->locationhref('/');
						exit;
					}
				}
				else {
					$this->common->alert('결제 진행 중 오류가 발생했습니다.[C04]');
					$this->common->locationhref('/payment/choice');
					exit;
				}
			}
			else {

				if($ResultCode == '3091') {
					$ResultMsg = '결제가 정상적으로 진행되지 않았습니다.[3091]\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)';
				}
				else {
					$ResultMsg = '결제가 정상적으로 진행되지 않았습니다.[C05]\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)';
				}

				$this->common->alert($ResultMsg.'['.$ResultCode.']');
				$this->common->locationhref('/payment/choice');
				exit;
			}

		}
		else{
			//인증 실패 하는 경우 결과코드, 메시지
			$ResultCode = $authResultCode;
			$ResultMsg = $authResultMsg;

			if($ResultCode == '3091') {
				$ResultMsg = '결제가 정상적으로 진행되지 않았습니다.[3091]\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)';
			}
			else {
				$ResultMsg = '결제가 정상적으로 진행되지 않았습니다.[C06]\n(결제 가능 카드사 : 롯데, 삼성, 신한, 현대, NH)';
			}
            $this->common->alert($ResultMsg.'['.$ResultCode.']');
			$this->common->locationhref('/payment/choice');
			exit;
		}
	}

	public function payTest() {

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array(
    'p_user_id' => 'naver_30305452',
    'p_code' => 'CS01',
    'p_user_name' => '홍길동',
    'p_moid' => 'CS01891820200510160949',
    'p_price' => '33000',
    'p_real_price' => '33000',
    'p_pay' => '1',
    'p_type' => 'A',
    'p_method' => 'CARD',
    'p_status' => 'W',
    'p_tid' => 'nictest04m01162005101609507890',
    'p_card_no' => '43302888****8920',
    'p_card_code' => '07',
    'p_coupon' => '',
    'p_dcrate' => '',
    'p_date' => '2020-05-10 16:09:49',
    'p_start_date' => '20200510',
    'p_end_date' => '20200704',
    'p_authdate' => '20200510',
    'p_at_day' => '20200604',
    'p_at_billkey' => 'BIKYnictest04m2005101609507313',
    'p_at_eventprice' => '33000',
    'p_at_eventuse' => 'N',
	);


		if( ! $this->pay_tb_model->doInsert($params)->isSuccess()) {
			echo $this->pay_tb_model->getErrorMsg();
		}

		//$this->pay_tb_model->doInsert($params);
	}

	// API CALL foreach 예시
	private function _jsonRespDump($resp){
		$respArr = json_decode($resp);
		foreach ( $respArr as $key => $value ){
			if($key == "Data"){
				echo decryptDump ($value, $merchantKey)."<br />";
			}else{
				echo "$key=". $value."<br />";
			}
		}
	}

	//Post api call
	private function _reqPost(Array $data, $url){
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 15);					//connection timeout 15
		curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
		curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));	//POST data
		curl_setopt($ch, CURLOPT_POST, true);
		$response = curl_exec($ch);
		curl_close($ch);
		return $response;
	}

	// AES 암호화 (opnessl)
	private function _aesEncryptSSL($data, $key){
		$iv = openssl_random_pseudo_bytes(16);
		$encdata = @openssl_encrypt($data, "AES-128-ECB", $key, true, $iv);
		return $encdata;
	}

	// AES 복호화 (openssl)
	private function _aesDecryptSSL($data, $key)
	{
		$iv = openssl_random_pseudo_bytes(16);

		$decdata = @openssl_decrypt($data, "AES-128-ECB", $key, OPENSSL_RAW_DATA, $iv);
		return $decdata;
	}

	//Post api call
	private function _reqAutoPost($data, $url){
		$requestData = stream_context_create(array(
			'http' => array(
				'method' => 'POST',
				'header' => 'Content-type: application/x-www-form-urlencoded;charset=euc-kr"',
				'content' => http_build_query($data),
				'timeout' => 15
			)
		));
		$response = file_get_contents($url, FALSE, $requestData);
		return $response;
	}

	private function _doapprove($pay=array()){

		if( !is_array($pay) || sizeof($pay)==0) {
			//die();
			return;
		}

		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		if($this->member_tb_model->get(array('m_id' => $pay['p_user_id']))->isSuccess()) {
			$member_info = $this->member_tb_model->getData();

			$price = $pay['p_price'];
			$is_eventuse = FALSE;

			//if( $pay['p_coupon'] != '' && $pay['p_at_eventprice'] > 0 && $pay['p_at_eventuse'] == 'N' ) {
			if( $pay['p_at_eventprice'] > 0 && $pay['p_at_eventuse'] == 'N' ) {
				$price = $pay['p_at_eventprice'];

				$is_eventuse = TRUE;
			}

			//TID(30byte) nictest00m01161912191404041136
			//MID(10byte)+지불수단(2byte)+매체구분(2byte)+시간정보(yyMMddHHmmss, 12byte)+랜덤(4byte)
			//nictest00m+01(신용카드)+16(빌링)+200519140404+1136=nicepay00m01012004281536436745

			$mid = MID_A;										// 상점 아이디
			$tid = $mid.'0116'.date('ymdHis').str_pad(mt_rand(0,9999),4,'0');	// 거래 ID
			$bid = $pay['p_at_billkey'];						// 빌키
			$moid = SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis');	// 상점 주문번호
			$amt = $price;										// 결제 금액

			//member 정보 가져오기
			$buyerName = $member_info['m_name'];		// 구매자명
			$buyerName = iconv('UTF-8', 'EUC-KR', $buyerName);
			$buyerTel = $member_info['m_phone'];		// 구매자 전화번호
			$buyerEmail = $member_info['m_email'];		// 구매자 이메일

			$goodsName = SRV_NAME;		// 상품명
			$goodsName = iconv('UTF-8', 'EUC-KR', $goodsName);
			$cardInterest = '0';		// 무이자 여부
			$cardQuota = '00';			// 할부개월 수

			$response = "";
			/*
			****************************************************************************************
			* <해쉬암호화> (수정하지 마세요)
			* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
			****************************************************************************************
			*/

			$ediDate = date("YmdHis");
			$merchantKey = MERCHANTKEY_A; // 상점키
			$postURL = "https://webapi.nicepay.co.kr/webapi/billing/billing_approve.jsp";
			$signData = bin2hex(hash('sha256', $mid . $ediDate . $moid . $amt . $bid . $merchantKey, true));

			$data = Array(
				'TID' => $tid,
				'BID' => $bid,
				'MID' => $mid,
				'Amt' => $amt,
				'Moid' => $moid,
				'GoodsName' => $goodsName,
				'BuyerName' => $buyerName,
				'BuyerEmail' => $buyerEmail,
				'BuyerTel' => $buyerTel,
				'CardInterest' => $cardInterest,
				'CardQuota' => $cardQuota,
				'EdiDate' => $ediDate,
				'SignData' => $signData
			);

			$response = $this->_reqPost($data, $postURL); 	//승인 호출
			$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );

			/*
			echo '<pre>'; print_r($response);
			Array
			(
				[ResultCode] => 3001
				[ResultMsg] =>
				[AuthCode] => 00484673
				[AuthDate] => 200520170517
				[AcquCardCode] => 07
				[AcquCardName] =>
				[CardCode] => 07
				[CardName] =>
				[CardQuota] => 00
				[CardInterest] => 0
				[CardCl] => 0
				[Amt] => 000000001004
				[GoodsName] => ??????
				[MID] => nictest04m
				[Moid] => CS0193520200520170515
				[BuyerName] =>
				[TID] => nictest04m01162005201705153628
				[CardNo] => 43302888****8920
			)
			*/

			//결제 성공
			if($response['ResultCode'] == '3001') {

				//다음 결제일
				$next_month = date('Ym').'01';
				$next_month = date("Ym", strtotime($next_month." +1 month"));
				//$p_at_day = date("Ym",strtotime("+1 month", time())).substr($pay['p_at_day'], 6, 2);
				$p_at_day = $next_month.substr($pay['p_at_day'], 6, 2);

				//서비스 종료일 update
				$p_end_date = $p_at_day;

				//$p_end_date = date("Ym", strtotime($p_at_day." +1 month")).substr($p_at_day, 6, 2);
				/*
				$term_end_date =  date('Ymd', strtotime($pay['p_end_date'])+86400);
				$now_date = date('Ymd');
				$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
				$p_end_date = date('Ymd', time()+86400*($this->pay_info[$pay['p_pay']]['period']+$term_rest));
				*/

				$update_params = array(
					'p_end_date' => $p_end_date,
					'p_moid' => $response['Moid'],
					'p_card_no' => $response['CardNo'],
					'p_at_tid' => $response['TID'],
					'p_authdate' => date('Y-m-d H:i:s'),
					'p_at_day' =>  $p_at_day,
					'p_at_count' => $pay['p_at_count']+1,
					'p_at_resultcode' => $response['ResultCode'],
				);

				if($is_eventuse === TRUE) {
					$update_params['p_at_eventuse'] = 'Y';
				}

				$this->pay_tb_model->doUpdate($pay['p_id'], $update_params);

				/* push 보내기(template - 10, 월정기결제) */
				$send_phone = $member_info['m_phone'];
				if($send_phone!='' && $pay['is_send'] === true) {
					$push_info = array();
					$push_info['template']= '10';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = '초이스스탁US 프리미엄 서비스'; //서비스명
					$push_info['at_message']['replace_1'] = number_format($price); //결제금액
					$push_info['count']= '2';

					$result = $this->send_push($push_info);
				}
				/* push 보내기 */

				return TRUE;
			}
			else {
				$update_params = array(
					'p_status' => 'C',
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_at_resultcode' => $response['ResultCode'],
				);

				$this->pay_tb_model->doUpdate($pay['p_id'], $update_params);

				return FALSE;
			}
		}
		else {
			return FALSE;
		}
	}

	//월정기 결제 자동 처리
	public function autopay_approve(){

        if( ! $this->input->is_cli_request()) {
            die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] autopay approve start!!\n";
/*		/usr/local/bin/php /home/hoon/html/choicestock/index.php payment autopay_approve  */
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_type'] = 'A';
        //$params['in']['p_status'] = array('P', 'W');
        $params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');
		$params['!=']['p_at_day'] = '';
		$params['!=']['p_card_code'] = 'PA';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			//'slavedb' => true
		);

		$autopay_list = array();
        $autopay_list = $this->pay_tb_model->getList($params, $extra)->getData();

		echo '<pre>'; print_r($autopay_list);

		//$day = date('d');
		//$check_day = date('Ym');

		$today = date('Ymd');
		$check_day = date('Y-m-d');
		$lastday = date("Ymt", strtotime($check_day));

		if(sizeof($autopay_list)>0) {

			foreach($autopay_list as $key => $val) {

				if($val['p_status'] == 'P') {

					if( substr($today, 0, 6) == substr($val['p_at_day'], 0, 6) ) {
						if($val['p_at_day'] == $today) {
							echo '월정기 결제 진행'."\n";
							print_r($val);
							$val['is_send'] = true;
							//결제 진행
							$this->_doapprove($val);
						}
						else if($val['p_at_day'] > $today) {
							//1. 오늘 마지막 날인지, 2.결제일이 마지막 날 보다 큰지
							if( $today == $lastday && $lastday < $val['p_at_day']  ) {
								echo '월정기 결제 진행(미리결제)'."\n";
								print_r($val);
								//결제 진행
								$val['is_send'] = true;
								$this->_doapprove($val);
							}
						}
					}

					//p_at_day가 없거나...C_WAIT (월정기 결제 취소 처리>
				}
				else if($val['p_status'] == 'W') {
					//기간 결제 확인
					$params = array();
					$params['=']['p_user_id'] = $val['user_id'];
					$params['=']['p_code'] = SRV_CODE;
					$params['=']['p_type'] = 'G';
					$params['=']['p_status'] = 'P';
					$params['>=']['p_end_date'] = date('Ymd');

					$extra = array(
						'fields' => 'p_id, p_end_date',
						'order_by' => 'p_end_date DESC',
						'limit' => 1,
						//'slavedb' => true
					);

					$paylist_term = array();
					$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

					//기간 결제 만료일이 오늘인 경우
					if( isset($paylist_term['p_id']) && $paylist_term['p_id'] != '' ) {
						if($paylist_term['p_end_date'] == date('Ymd')) {
							//기간을 p=>e로 바꾸고
							$update_params = array(
								'p_status' => 'E'
							);
							$this->pay_tb_model->doUpdate($paylist_term['p_id'], $update_params);

							//자동을 w=>p로 변경
							$update_params = array(
								'p_status' => 'P'
							);
							$this->pay_tb_model->doUpdate($val['p_id'], $update_params);
						}
					}
				}
			}
		}
        echo "\n".'['.date("Y-m-d H:i:s")."] autopay approve end!!\n";
	}


	public function pay_refund() {

		$this->loginCheck();
        $this->payCheck();

		$p_id = $this->input->post('cs_rfno');
		$p_rf_bank = $this->input->post('select_bank');
		$p_rf_accno = $this->input->post('account_number');

		if( !isset($p_id) || $p_id == '' || $p_rf_bank == '' || $p_rf_accno == '') {
			$this->common->alert('잘못된 접근입니다.[PR01]');
			$this->common->locationhref('/');
			exit;
		}

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_id'] = $p_id;

		$extra = array(
			'fields' => '*',
		);

		$pay_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if( isset($pay_data) && sizeof($pay_data)>0) {

			//환불금액 계산하기
			$s_date = strtotime(date('Ymd'));
			$e_date = strtotime(date('Ymd', strtotime($pay_data['p_authdate']))); //결제승인일
			$during =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

			if($during == 1) {
				$refund_price = $pay_data['p_price'];
			}
			else {
				// 결제금액 : $pay['p_price']
				// 부여일수 : $pay_info[$pay['p_pay']]['period']
				// 사용일수 : $during
				// 환불수수료율 : 3.50%
				$srv_day = $this->pay_info[$pay_data['p_pay']]['period']+1; //부여일수
				$refund_rate = 0.035;

				if($during < 4) {
					//3일 전
					//결제금액((부여일수-남은일수)/부여일수)
					$refund_price = round($pay_data['p_price']*(($srv_day-$during)/$srv_day));
				}
				else {
					//3일 이후
					//결제금액((부여일수-남은일수)/부여일수)*(1-환불수수료율)
					$refund_price = round($pay_data['p_price']*(($srv_day-$during)/$srv_day)*(1-$refund_rate));
				}
			}

			$update_params = array(
				'p_rf_requestdate' => date('Y-m-d H:i:s'),
				'p_rf_price' => $refund_price,
				'p_rf_bank' =>  $p_rf_bank,
				'p_rf_accno' => $p_rf_accno,
			);

			$this->pay_tb_model->doUpdate($p_id, $update_params);

			/* push 보내기(template - 12, 서비스해지_기간결제_환불신청안내) */
			$send_phone = $this->session->userdata('user_phone');

			if($send_phone!='') {
				$push_info = array();
				$push_info['template']= '12';
				$push_info['push_type']= 'at';
				$push_info['from']= PUSH_FROM;
				$push_info['to']= $send_phone;
				$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
				$push_info['at_message']['replace_1'] = '초이스스탁US 프리미엄 서비스';	//서비스명
				$push_info['at_message']['replace_2'] = date('Y년m월d일 H시i분');	//환불신청일
				$push_info['at_message']['replace_3'] = '초이스스탁US';	//상품명
				$push_info['at_message']['replace_4'] = '프리미엄';	//프리미엄
				$push_info['at_message']['replace_5'] = $this->pay_info[$pay_data['p_pay']]['month'].'개월';	//개월수
				$push_info['at_message']['replace_6'] = number_format($refund_price);	//환불금액
				$push_info['count']= '7';

				$result = $this->send_push($push_info);
			}
			/* push 보내기 */
		}
		else {
			$this->common->alert('잘못된 접근입니다.[PR02]');
		}

		$this->common->locationhref('/member/paylist');
		exit;
	}

	public function pay_cancel() {

        $this->loginCheck();
        $this->payCheck();

		$p_id = $this->input->post('cs_ano');

		if( !isset($p_id) || $p_id == '') {
			$this->common->alert('잘못된 접근입니다.[CA01]');
			$this->common->locationhref('/');
			exit;
		}

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $this->session->userdata('user_id');
		$params['=']['p_id'] = $p_id;

		$extra = array(
			'fields' => '*',
		);

		$pay_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(is_array($pay_data) && sizeof($pay_data)) {

			//자동이고 p_authdate 없고 p_at_count ==0
			if($pay_data['p_type'] == 'A' && $pay_data['p_authdate'] == '' && ($pay_data['p_at_count'] == '' || $pay_data['p_at_count'] == '0')) {

				$this->_killbill($pay_data);

				$update_params = array(
					'p_status' => 'C',
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_at_billkey' => '',
					'p_at_day' => '',
				);

				$this->pay_tb_model->doUpdate($pay_data['p_id'], $update_params);

				$this->load->model(DBNAME.'/member_tb_model');
				$member_update = array(
					'm_paid' => 'N'
				);
				$this->member_tb_model->doUpdate($this->session->userdata('user_id'), $member_update);

				$this->session->set_userdata('is_paid', FALSE);

				$this->common->locationhref('/member/paylist');
				exit;
			}

			//자동결제이고 결제승인일이 1일 지난 고객일 경우 ==> 결제취소가 아닌 결제예정일 삭제
			$s_date = strtotime(date('Ymd'));
			$e_date = strtotime(date('Ymd', strtotime($pay_data['p_authdate']))); //결제승인일
			//$e_date = strtotime($pay_data['p_start_date']); //서비스시작일(결제승인일)

			$during =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

			//if($pay_data['p_type'] == 'A' && $during > 2 ) { 3일에서 당일로(20.05.27수정)
			if($pay_data['p_type'] == 'A' && $during > 1 ) {

				$update_params = array(
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_at_day' => '',
				);

				$this->pay_tb_model->doUpdate($pay_data['p_id'], $update_params);


				/* push 보내기(template - 8, 월정기 해지) */
				$send_phone = $this->session->userdata('user_phone');
				if($send_phone!='') {

					//잔여일수 구하기
					$s_date = strtotime($pay_data['p_end_date']);
					$e_date = strtotime(date('Ymd'));
					$rest_day =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

					$push_info = array();
					$push_info['template']= '8';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
					$push_info['at_message']['replace_1'] = '초이스스탁US';	//서비스명
					$push_info['at_message']['replace_2'] = '프리미엄';		//프리미엄
					$push_info['at_message']['replace_3'] = '월정기';		//월정기
					$push_info['at_message']['replace_4'] = $rest_day;		//잔여일수
					$push_info['at_message']['replace_5'] = '초이스스탁US';	//서비스명
					$push_info['count']= '6';

					$result = $this->send_push($push_info);
				}
				/* push 보내기 */

				$this->common->locationhref('/member/paylist');
				exit;
			}
			else {
				//월 자동 결제 취소 금액 처리
				if($pay_data['p_type'] == 'A') {
					//if($pay_data['p_coupon']!='' && $pay_data['p_at_eventprice'] > 0 && $pay_data['p_at_count'] == '1' && $pay_data['p_at_eventuse'] == 'Y') {
					if( $pay_data['p_at_eventprice'] > 0 && $pay_data['p_at_count'] == '1' && $pay_data['p_at_eventuse'] == 'Y') {
						$pay_data['p_price'] = $pay_data['p_at_eventprice'];
					}
				}

				$result = $this->_pay_cancel_request($pay_data);

				if(is_array($result) && sizeof($result)>0 && $result['ResultCode'] == '2001'){
				//if($this->_pay_cancel_request($pay_data)) {
					/*
					[ResultCode] => 2001
					[ResultMsg] =>
					[ErrorCD] => 0000
					[ErrorMsg] =>
					[CancelAmt] => 000000001010
					[MID] => nictest04m
					[Moid] => CS01354720200524141631
					[PayMethod] => CARD
					[TID] => nictest04m01162005241134369881
					[CancelDate] => 20200524
					[CancelTime] => 141633
					[CancelNum] => 00931990
					[RemainAmt] => 000000000000
					*/

					$update_params = array(
						'p_status' => 'C',
						'p_moid' => $result['Moid'],
						'p_method' => $result['PayMethod'],
						'p_tid' => $result['TID'],
						'p_cancel_date' => date('Y-m-d H:i:s', strtotime($result['CancelDate'].$result['CancelTime'])),
						'p_cancel_num' => $result['CancelNum'],
						'p_rf_price' => intval($result['CancelAmt']),
						'p_at_resultcode' => $result['ResultCode'],
						//'p_rf_requestdate' => date('Y-m-d H:i:s'),
					);

					if($pay_data['p_type'] == 'A') $update_params['p_at_day'] = '';

					$this->pay_tb_model->doUpdate($pay_data['p_id'], $update_params);

					/* push 보내기(template - 6, 기간결제(월정기당일) 해지) */
					$send_phone = $this->session->userdata('user_phone');
					if($send_phone!='') {

						$push_info = array();
						$push_info['template']= '6';
						$push_info['push_type']= 'at';
						$push_info['from']= PUSH_FROM;
						$push_info['to']= $send_phone;
						$push_info['at_message']['replace_0'] = $this->session->userdata('user_name'); //이름
						$push_info['at_message']['replace_1'] = '초이스스탁US';	//서비스명
						$push_info['at_message']['replace_2'] = '프리미엄';		//프리미엄
						$push_info['at_message']['replace_3'] = ($pay_data['p_type'] == 'A') ? '월정기' : $this->pay_info[$pay_data['p_pay']]['month'].'개월'; //개월수
						$push_info['at_message']['replace_4'] = number_format(intval($result['CancelAmt'])); //환불금액
						$push_info['at_message']['replace_5'] = '초이스스탁US';	//서비스명
						$push_info['count']= '6';

						$result = $this->send_push($push_info);
					}
					/* push 보내기 */

					$this->load->model(DBNAME.'/member_tb_model');
					$member_update = array(
						'm_paid' => 'N'
					);
					$this->member_tb_model->doUpdate($this->session->userdata('user_id'), $member_update);

					$this->session->set_userdata('is_paid', FALSE);

					$this->common->locationhref('/member/paylist');
					exit;
				}
				else {
					$this->common->alert('카드 취소 처리가 실패했습니다.['.$result['ResultCode'].']');
					$this->common->locationhref('/member/paylist');
					exit;
				}
			}
		}
	}

	private function _pay_cancel_request($pay=array()) {

		$this->loginCheck();
        $this->payCheck();
		//echo '<pre>'; print_r($pay); exit;
		if(sizeof($pay)>0 && $pay['p_user_id'] == $this->session->userdata('user_id')){

			//		echo '<pre>'; print_r($pay);
			//		exit;
			$merchantKey = ($pay['p_type']=='A') ? MERCHANTKEY_A : MERCHANTKEY_G;
			$mid = ($pay['p_type']=='A') ? MID_A : MID_G;

			$moid = SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis');	// 상점 주문번호
			//$moid = $pay['p_moid'];
			//$moid = "nicepay_api_3.0_test";
			$cancelMsg = "고객요청";

			//원거래 ID	TID
			if($pay['p_type'] == 'A') {
				$tid = $pay['p_at_tid'];
			}
			else {
				$tid = $pay['p_tid'];
			}

			//환불금액 계산하기
			$s_date = strtotime(date('Ymd'));
			$e_date = strtotime(date('Ymd', strtotime($pay['p_authdate']))); //결제승인일
			$during =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

			$cancel_type = 0; //부분취소 여부	PartialCancelCode 0 (전체)	PartialCancelCode 1 (부분)

			//카드결제
			//당일 취소 전액 환불
			//영업일 3일 이내 사용일 수 제외하고 환불
			//영업일 3일 이후 수수료 3.5% 차감 후 환불

			if($during == 1) {
				$refund_price = $pay['p_price'];
			}
			else {
				// 결제금액 : $pay['p_price']
				// 부여일수 : $pay_info[$pay['p_pay']]['period']
				// 사용일수 : $during
				// 환불수수료율 : 3.50%
				$srv_day = $this->pay_info[$pay['p_pay']]['period']+1; //부여일수
				$refund_rate = 0.035;

				if($during < 4) {
					//3일 전
					//결제금액((부여일수-남은일수)/부여일수)
					$refund_price = round($pay['p_price']*(($srv_day-$during)/$srv_day));
				}
				else {
					//3일 이후
					//결제금액((부여일수-남은일수)/부여일수)*(1-환불수수료율)
					$refund_price = round($pay['p_price']*(($srv_day-$during)/$srv_day)*(1-$refund_rate));
				}
				$cancel_type = 1;
			}

			$cancelAmt = $refund_price; //취소 금액	CancelAmt
			$partialCancelCode = $cancel_type;

			$ediDate = date("YmdHis");
			$signData = bin2hex(hash('sha256', $mid . $cancelAmt . $ediDate . $merchantKey, true));

			$response = "";

			try{
				$data = Array(
					'TID' => $tid,
					'MID' => $mid,
					'Moid' => $moid,
					'CancelAmt' => $cancelAmt,
					'CancelMsg' => $cancelMsg,
					'PartialCancelCode' => $partialCancelCode,
					'EdiDate' => $ediDate,
					'SignData' => $signData
				);
				/*
				[TID] => nictest04m01162005241134369881
				[MID] => nictest04m
				[Moid] => CS01354720200524141631
				[CancelAmt] => 1010
				[CancelMsg] => 고객요청
				[PartialCancelCode] => 0
				[EdiDate] => 20200524141631
				[SignData] => 3351ca76e838155f4a66f73d529786c9615898de13afcd0eb2ed304b3b15c8ef
				*/

				$response = $this->_reqPost($data, "https://webapi.nicepay.co.kr/webapi/cancel_process.jsp"); //취소 API 호출
				$respArr = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );

				//jsonRespDump($response);
			}catch(Exception $e){
				$e->getMessage();
				$ResultCode = "9999";
				$ResultMsg = "통신실패";
			}

			if($respArr['ResultCode'] == '2001') {
				//결제 취소 성공
				/*
				[ResultCode] => 2001
				[ResultMsg] =>
				[ErrorCD] => 0000
				[ErrorMsg] =>
				[CancelAmt] => 000000001010
				[MID] => nictest04m
				[Moid] => CS01354720200524141631
				[PayMethod] => CARD
				[TID] => nictest04m01162005241134369881
				[CancelDate] => 20200524
				[CancelTime] => 141633
				[CancelNum] => 00931990
				[RemainAmt] => 000000000000
				*/

				//자동결제 취소일 경우 kill_billkey
				if($pay['p_type'] == 'A') {
					$this->_killbill($pay);
				}

				return $respArr;
			}
			else {
				//결제 취소 실패
				return FALSE;
			}
		}
		else {
			return FALSE;
		}
	}

	private function _killbill($pay=array()) {

		$this->loginCheck();
        $this->payCheck();

		if(sizeof($pay)>0 && $pay['p_user_id'] == $this->session->userdata('user_id')){


			$bid = $pay['p_at_billkey'];	// 빌키
			$mid = MID_A;					// 상점 아이디
			$moid = SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis');	// 상점 주문번호
			$charSet = 'euc-kr';	// 응답 파라미터 인코딩

			$response = "";
			/*
			****************************************************************************************
			* <해쉬암호화> (수정하지 마세요)
			* SHA-256 해쉬암호화는 거래 위변조를 막기위한 방법입니다.
			****************************************************************************************
			*/
			$ediDate = date("YmdHis");
			$merchantKey = MERCHANTKEY_A; // 상점키
			$postURL = "https://webapi.nicepay.co.kr/webapi/billing/billkey_remove.jsp ";
			$signData = bin2hex(hash('sha256', $mid . $ediDate . $moid . $bid . $merchantKey, true));

			$data = Array(
				'BID' => $bid,
				'MID' => $mid,
				'Moid' => $moid,
				'EdiDate' => $ediDate,
				'CharSet' => $charSet,
				'SignData' => $signData
			);
			$response = $this->_reqPost($data, $postURL); //승인 호출
			$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );

			//if($response) return TRUE;
			//F101
			//echo '<pre>'; print_r($response);

			//if($respArr['ResultCode'] == '2001') {
			/*
			[ResultCode] => F101
			[ResultMsg] =>    .
			[TID] => nictest04m01162005242000358771
			[BID] => BIKYnictest04m2005241945255653
			[AuthDate] => 20200524
			*/
			return TRUE;
		}
		else {
			return FALSE;
		}
	}
/*
	function ticker_close_test() {
		$this->load->model(DBNAME.'/myitem_tb_model');
		$myitem_params = array();
		$myitem_params['=']['mi_user_id'] = $this->session->userdata('user_id');
		$myitem_params['=']['mi_like'] = 'Y';
		$myitem_params['join']['ticker_tb'] = 'mi_ticker = tkr_ticker';

		$myitem_extra = array(
			'fields' => '*',
			'slavedb' => true,
			'order_by' => 'tkr_rate DESC',
			'limit' => '10',
		);
		$myitem_list = $this->myitem_tb_model->getList($myitem_params, $myitem_extra)->getData();

		if(is_array($myitem_list) && sizeof($myitem_list) > 0) {
			$contents = '';
			foreach($myitem_list as $item_key => $item_val) {

				$recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($item_val['tkr_ticker']);

				//2021.3.29 변경
				//$sep_data = array_shift($this->itoozaapi->getSepData($item_val['tkr_ticker']));
				$dividend_data = array_shift($this->itoozaapi->getDividend($item_val['tkr_ticker']));

				$contents .= '■ '.$item_val['tkr_name'].' | '.$item_val['tkr_ticker'];
				$contents .= "\n";

				if($item_val['tkr_rate']>0) {
					$trk_rate_sign = '▲';
				}
				else if($item_val['tkr_rate']==0) {
					$trk_rate_sign = '';
				}
				else {
					$trk_rate_sign = '▼';
				}

				$contents .= '전일종가 '.$item_val['tkr_close'].' ('.$trk_rate_sign.' '.abs($item_val['tkr_rate']).'%)';

				$recent_report = '';
				if($recent_report_rates['lastupdated'][$item_val['tkr_ticker']] == date('Y-m-d', strtotime('-2 days'))) {
					$recent_report = "\n".'실적발표 '.$recent_report_rates['rate'][$item_val['tkr_ticker']].'(전년비)';
				}
				$sep_dividends = '';
				if($dividend_data['act_date'] == date('Y-m-d', strtotime('-1 days')) && $dividend_data['act_value']>0) {
					$sep_dividends = '배당락반영 $'.rtrim($dividend_data['act_value'], 0);
				}

				if($recent_report != '') {
					$contents .= $recent_report;
				}

				if($sep_dividends != '') {
					if($recent_report != '') {
						$contents .= ' / '.$sep_dividends;
					}
					else {
						$contents .= "\n".$sep_dividends;
					}
				}

				$contents .= "\n\n";

				echo $contents;
			}
		}
	}
*/
	function push_ticker() {

        if( ! $this->input->is_cli_request()) {
           die('cli only');
        }

		$closed_day = array('20220118', '20220222', '20220416', '20220531', '20220621', '20220705', '20220906', '20221125', '20221227');

        echo "\n".'['.date("Y-m-d H:i:s")."] push_ticker start!!\n";

		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		$this->load->model(DBNAME.'/myitem_tb_model');
		$this->load->model(DBNAME.'/control_tb_model');
		$this->load->model(DBNAME.'/freepay_tb_model');

		if($this->control_tb_model->get(array('con_id' => '1'))->isSuccess()) {
			$con_row = $this->control_tb_model->getData();

			if($con_row['con_status'] == 'N') {
				echo "\n".'['.date("Y-m-d H:i:s")."] push stop :: con_status[N]\n";
				exit;
			}
		}
		else {
		    echo "\n".'['.date("Y-m-d H:i:s")."] control_tb :: select error!!\n";
			exit;
		}

		if(date('w') == 0 || date('w') == 1) {
		    echo "\n".'['.date("Y-m-d H:i:s")."] day check :: [".date('w')."] STOP!!\n";
			exit;
		}

		if(in_array(date('Ymd'), $closed_day)) {
		    echo "\n".'['.date("Y-m-d H:i:s")."] closed day STOP!!\n";
			exit;
		}
/*

date('w')
휴장일과 일, 월 체크
2020년
7/3(금)
9/7(월)
10/12(월)
11/11(수)
11/26(목)
12/25(금)
*/
		$params = array();
		$params['=']['m_paid'] = 'Y';
		$params['=']['m_push_ticker'] = 'Y';
		$params['!=']['m_phone'] = '';
		//$params['=']['m_id'] = 'kakao_1342320378';
		//$params['in']['m_id'] = array('naver_96845941', 'naver_38742161', 'kakao_1342320378');

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $member_list = $this->member_tb_model->getList($params, $extra)->getData();

		foreach($member_list as $key => $val) {

			$pay_params = array();
			$pay_params['=']['p_user_id'] = $val['m_id'];
			$pay_params['=']['p_code'] = SRV_CODE;
			$pay_params['=']['p_status'] = 'P';
			$pay_params['>=']['p_end_date'] = date('Ymd');

			$pay_extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				'limit' => '1',
				'slavedb' => true
			);

			$pay_data = array();
			$pay_data = array_shift($this->pay_tb_model->getList($pay_params, $pay_extra)->getData());

			if(is_array($pay_data) && sizeof($pay_data)>0) {

				$myitem_params = array();
				$myitem_params['=']['mi_user_id'] = $val['m_id'];
				$myitem_params['=']['mi_like'] = 'Y';
				$myitem_params['join']['ticker_tb'] = 'mi_ticker = tkr_ticker';

				$myitem_extra = array(
					'fields' => '*',
					'slavedb' => true,
					'order_by' => 'tkr_rate DESC',
					'limit' => '10',
				);

				$myitem_list = $this->myitem_tb_model->getList($myitem_params, $myitem_extra)->getData();

				if(is_array($myitem_list) && sizeof($myitem_list) > 0) {
					$contents = '';
					foreach($myitem_list as $item_key => $item_val) {

						$recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($item_val['tkr_ticker']);

						//2021.3.29 변경
						//$sep_data = array_shift($this->itoozaapi->getSepData($item_val['tkr_ticker']));
						$dividend_data = array_shift($this->itoozaapi->getDividend($item_val['tkr_ticker']));

						$contents .= '■ '.$item_val['tkr_name'].' | '.$item_val['tkr_ticker'];
						$contents .= "\n";

						if($item_val['tkr_rate']>0) {
							$trk_rate_sign = '▲';
						}
						else if($item_val['tkr_rate']==0) {
							$trk_rate_sign = '';
						}
						else {
							$trk_rate_sign = '▼';
						}

						$contents .= '전일종가 '.$item_val['tkr_close'].' ('.$trk_rate_sign.' '.abs($item_val['tkr_rate']).'%)';

						$recent_report = '';
						if($recent_report_rates['lastupdated'][$item_val['tkr_ticker']] == date('Y-m-d', strtotime('-2 days'))) {
							$recent_report = "\n".'실적발표 '.$recent_report_rates['rate'][$item_val['tkr_ticker']].'(전년비)';
						}
						$sep_dividends = '';
						if($dividend_data['act_date'] == date('Y-m-d', strtotime('-1 days')) && $dividend_data['act_value']>0) {
							$sep_dividends = '배당락반영 $'.rtrim($dividend_data['act_value'], 0);
						}

						if($recent_report != '') {
							$contents .= $recent_report;
						}

						if($sep_dividends != '') {
							if($recent_report != '') {
								$contents .= ' / '.$sep_dividends;
							}
							else {
								$contents .= "\n".$sep_dividends;
							}
						}

						$contents .= "\n\n";
					}

					/* push 보내기(template - 19, 관심종목 알리미) */
					$push_info = array();
					$push_info['template']= '19';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $val['m_phone'];
					$push_info['at_message']['replace_0'] = date('m').'월'.date('d').'일'; //날짜
					$push_info['at_message']['replace_1'] = $contents; //내용
					//$push_info['at_message']['replace_2'] = HOME_URL; //링크
					$push_info['count']= '2';

					$result = $this->send_push($push_info);
					/* push 보내기 */
					//echo '<pre>'; print_r($result);
					echo 'm_id==>'.$val['m_id']."\n";
				}
			}
		}

		//3일 무료 회원 푸시(20.07/07)
		$free_params = array();
		$free_params['=']['fp_code'] = SRV_CODE;
		$free_params['>=']['fp_end_date'] = date('Ymd');
		$free_params['=']['m_paid'] = 'N';
		$free_params['!=']['m_phone'] = '';
		//$free_params['=']['m_push_ticker'] = 'Y';
		//$free_params['=']['m_push_service'] = 'Y';
		$free_params['join']['member_tb'] = 'fp_user_id = m_id';

		$free_extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$freepay_list = array();
		$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

		foreach($freepay_list as $free_key => $free_val) {

			$myitem_params = array();
			$myitem_params['=']['mi_user_id'] = $free_val['m_id'];
			$myitem_params['=']['mi_like'] = 'Y';
			$myitem_params['join']['ticker_tb'] = 'mi_ticker = tkr_ticker';

			$myitem_extra = array(
				'fields' => '*',
				'slavedb' => true,
				'order_by' => 'tkr_rate DESC',
				'limit' => '10',
			);

			$myitem_list = $this->myitem_tb_model->getList($myitem_params, $myitem_extra)->getData();

			if(is_array($myitem_list) && sizeof($myitem_list) > 0) {
				$contents = '';
				foreach($myitem_list as $item_key => $item_val) {

					$recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($item_val['tkr_ticker']);

					//2021.3.29 변경
					//$sep_data = array_shift($this->itoozaapi->getSepData($item_val['tkr_ticker']));
					$dividend_data = array_shift($this->itoozaapi->getDividend($item_val['tkr_ticker']));

					$contents .= '■ '.$item_val['tkr_name'].' | '.$item_val['tkr_ticker'];
					$contents .= "\n";

					if($item_val['tkr_rate']>0) {
						$trk_rate_sign = '▲';
					}
					else if($item_val['tkr_rate']==0) {
						$trk_rate_sign = '';
					}
					else {
						$trk_rate_sign = '▼';
					}

					$contents .= '전일종가 '.$item_val['tkr_close'].' ('.$trk_rate_sign.' '.abs($item_val['tkr_rate']).'%)';

					$recent_report = '';
					if($recent_report_rates['lastupdated'][$item_val['tkr_ticker']] == date('Y-m-d', strtotime('-2 days'))) {
						$recent_report = "\n".'실적발표 '.$recent_report_rates['rate'][$item_val['tkr_ticker']].'(전년비)';
					}
					$sep_dividends = '';
					if($dividend_data['act_date'] == date('Y-m-d', strtotime('-1 days')) && $dividend_data['act_value']>0) {
						$sep_dividends = '배당락반영 $'.rtrim($dividend_data['act_value'], 0);
					}

					if($recent_report != '') {
						$contents .= $recent_report;
					}

					if($sep_dividends != '') {
						if($recent_report != '') {
							$contents .= ' / '.$sep_dividends;
						}
						else {
							$contents .= "\n".$sep_dividends;
						}
					}

					$contents .= "\n\n";
				}

				/* push 보내기(template - 19, 관심종목 알리미) */
				$push_info = array();
				$push_info['template']= '19';
				$push_info['push_type']= 'at';
				$push_info['from']= PUSH_FROM;
				$push_info['to']= $free_val['m_phone'];
				$push_info['at_message']['replace_0'] = date('m').'월'.date('d').'일'; //날짜
				$push_info['at_message']['replace_1'] = $contents; //내용
				//$push_info['at_message']['replace_2'] = HOME_URL; //링크
				$push_info['count']= '2';

				$result = $this->send_push($push_info);
				/* push 보내기 */
				//echo '<pre>'; print_r($result);
				echo 'm_id==>'.$free_val['m_id']."\n";
			}
		}

		echo "\n".'['.date("Y-m-d H:i:s")."] push_ticker end!!\n";
	}

	private function _push_partner($data=array()) {

        if( ! $this->input->is_cli_request()) {
            //die('cli only');
        }

		if(sizeof($data)>0) {

			$push_info = array();
			$push_info['template']= $data['template'];

			if($data['template']=='28') { //탐구생활
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['contents']; //내용
				$push_info['replace_1'] = $data['url']; //링크
				$push_info['count']= $data['count'];
				$push_info['view_wt']= $data['view_wt'];
				$push_info['view_st']= $data['view_st'];
				$push_info['view_kw']= $data['view_kw'];
				$push_info['view_pe']= $data['view_pe'];
				$push_info['is_vod']= $data['is_vod'];
			}
			else if($data['template']=='20') { //종목추천 신규
				$push_info['title'] =  $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='21' || $data['template']=='22') { //포트 편입 신규, 포트 업데이트
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate'];  //목표수익률
				$push_info['replace_5'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='23') { //포트 목표가 조정
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_adjust'];		//목표가 상향/하향
				$push_info['replace_1'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_2'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_3'] = $data['rc_close_price'];  //현재가 777.00달러
				$push_info['replace_4'] = $data['rc_goal_price'];	//기존목표가 777.00달러
				$push_info['replace_5'] = $data['rc_adjust_price']; //변경목표가 777.00달러
				$push_info['replace_6'] = $data['rc_profit_rate'];  //목표수익률
				$push_info['replace_7'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='24') { //포트 목표가 달성
				$push_info['title'] =  $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price']; //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_close_price']; //현재가 777.00달러
				$push_info['replace_3'] = $data['rc_goal_price'];  //목표가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate']; //수익률
				$push_info['replace_5'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='25') { //포트 손절가 도달
				$push_info['title'] =  $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate'];  //수익률
				$push_info['replace_5'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='26') { //포트 중간매도
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_mid_price'];	//매도가 777.00달러
				$push_info['replace_3'] = $data['rc_profit_rate'];  //수익률
				$push_info['replace_4'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='27') { //모닝브리핑
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['mo_date'];	  //날짜
				$push_info['replace_1'] = $data['mo_contents']; //본문
				$push_info['replace_2'] = $data['url']; //링크
				$push_info['contents_all'] = $data['mo_contents_all']; //본문
				$push_info['count']= $data['count'];
			}
			else {
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['contents']; //내용
				$push_info['replace_1'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}

			//2021.6.10 추가
			$push_info['wowtv_url']= $data['wowtv_url'];

			$result = $this->send_push_partner($push_info);
			echo '<pre>[[[push_info : '.date('YmdHis').']]]'."\n"; print_r($push_info);
		}
	}

	private function _push_choice($data=array()) {

		//유료회원 체크 ( m_push_service: Y)
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		if(is_array($data) && sizeof($data)>0) {
			$params = array();
			$params['=']['m_paid'] = 'Y';
			$params['=']['m_push_service'] = 'Y';
			$params['!=']['m_phone'] = '';
			//$params['=']['m_id'] = 'kakao_1342320378';
			//$params['in']['m_id'] = array('kakao_1342320378', 'naver_95473437', 'naver_38742161');

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$member_list = $this->member_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($member_list); exit;

			foreach($member_list as $key => $val) {

				$pay_params = array();
				$pay_params['=']['p_user_id'] = $val['m_id'];
				$pay_params['=']['p_code'] = SRV_CODE;
				$pay_params['=']['p_status'] = 'P';
				$pay_params['>=']['p_end_date'] = date('Ymd');

				$pay_extra = array(
					'fields' => '*',
					'order_by' => 'p_end_date DESC',
					'limit' => 1,
					'slavedb' => true
				);

				$pay_data = array();
				$pay_data = array_shift($this->pay_tb_model->getList($pay_params, $pay_extra)->getData());
				//echo '<pre>'; print_r($pay_data);

				if(is_array($pay_data) && sizeof($pay_data)>0 && is_array($data) && sizeof($data)>0) {
					$push_info = array();
					$push_info['template']= $data['template'];

					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $val['m_phone'];

					if($data['template']=='28') { //탐구생활
						$push_info['at_message']['replace_0'] = $data['contents']; //내용
						$push_info['at_message']['replace_1'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='20') { //종목추천 신규
						$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
						$push_info['at_message']['replace_4'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='21' || $data['template']=='22') { //포트편입 신규, 포트 업데이트
						$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_2'] = $data['rc_goal_price'];	  //목표가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
						$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //목표수익률
						$push_info['at_message']['replace_5'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='23') { //포트 목표가 조정
						$push_info['at_message']['replace_0'] = $data['rc_adjust'];		  //목표가 상향/하향
						$push_info['at_message']['replace_1'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_2'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_close_price'];  //현재가 777.00달러
						$push_info['at_message']['replace_4'] = $data['rc_goal_price'];	  //기존목표가 777.00달러
						$push_info['at_message']['replace_5'] = $data['rc_adjust_price']; //변경목표가 777.00달러
						$push_info['at_message']['replace_6'] = $data['rc_profit_rate'];  //목표수익률
						$push_info['at_message']['replace_7'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='24') { //포트 목표가 달성
						$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_goal_price'];   //목표가 777.00달러
						$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //수익률
						$push_info['at_message']['replace_5'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='25') { //포트 손절가 도달
						$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
						$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //수익률
						$push_info['at_message']['replace_5'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='26') { //포트 중간매도
						$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
						$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
						$push_info['at_message']['replace_2'] = $data['rc_mid_price'];	  //매도가 777.00달러
						$push_info['at_message']['replace_3'] = $data['rc_profit_rate'];  //수익률
						$push_info['at_message']['replace_4'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='27') { //모닝브리핑
						//$push_info['push_type']= 'lms';
						$push_info['title']= $data['title'];
						$push_info['at_message']['replace_0'] = $data['mo_date'];	  //날짜
						$push_info['at_message']['replace_1'] = $data['mo_contents']; //본문
						$push_info['at_message']['replace_2'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='29') { //일반PUSH(2021.2.15 추가)
						$push_info['push_type']= 'lms';
						$push_info['title']= $data['title'];
						$push_info['at_message']['replace_0'] = $data['title']; //제목
						$push_info['at_message']['replace_1'] = $data['contents']; //내용
						$push_info['count']= $data['count'];
					}
					else {
						$push_info['at_message']['replace_0'] = $data['title']; //콘텐츠 이름
						$push_info['at_message']['replace_1'] = $data['contents']; //내용
						$push_info['count']= $data['count'];
					}

					$result = $this->send_push($push_info);
					//echo '<pre>'; print_r($push_info);
					echo 'p_id=>'.$pay_data['p_id'].'  p_user_id=>'.$pay_data['p_user_id']."\n";
				}
			}

			//3일 무료 회원 푸시(20.07/07)
			$this->_push_choicefree($data);
		}
	}

	private function _push_choicefree($data=array()) {

		if(is_array($data) && sizeof($data)>0) {
			//3일 무료 회원 푸시(20.07/07)
			$this->load->model(DBNAME.'/freepay_tb_model');

			$free_params = array();
			$free_params['=']['fp_code'] = SRV_CODE;
			$free_params['>=']['fp_end_date'] = date('Ymd');
			$free_params['=']['m_paid'] = 'N';
			$free_params['!=']['m_phone'] = '';
			//$free_params['=']['m_push_ticker'] = 'Y';
			//$free_params['=']['m_push_service'] = 'Y';
			$free_params['join']['member_tb'] = 'fp_user_id = m_id';

			$free_extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$freepay_list = array();
			$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

			foreach($freepay_list as $key => $val) {
				$push_info = array();
				$push_info['template']= $data['template'];
				$push_info['push_type']= 'at';
				$push_info['from']= PUSH_FROM;
				$push_info['to']= $val['m_phone'];

				if($data['template']=='28') { //탐구생활
					$push_info['at_message']['replace_0'] = $data['contents']; //내용
					$push_info['at_message']['replace_1'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='20') { //종목추천 신규
					$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
					$push_info['at_message']['replace_4'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='21' || $data['template']=='22') { //포트편입 신규, 포트 업데이트
					$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_2'] = $data['rc_goal_price'];	  //목표가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
					$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //목표수익률
					$push_info['at_message']['replace_5'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='23') { //포트 목표가 조정
					$push_info['at_message']['replace_0'] = $data['rc_adjust'];		  //목표가 상향/하향
					$push_info['at_message']['replace_1'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_2'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_close_price'];  //현재가 777.00달러
					$push_info['at_message']['replace_4'] = $data['rc_goal_price'];	  //기존목표가 777.00달러
					$push_info['at_message']['replace_5'] = $data['rc_adjust_price']; //변경목표가 777.00달러
					$push_info['at_message']['replace_6'] = $data['rc_profit_rate'];  //목표수익률
					$push_info['at_message']['replace_7'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='24') { //포트 목표가 달성
					$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_goal_price'];   //목표가 777.00달러
					$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //수익률
					$push_info['at_message']['replace_5'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='25') { //포트 손절가 도달
					$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
					$push_info['at_message']['replace_4'] = $data['rc_profit_rate'];  //수익률
					$push_info['at_message']['replace_5'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='26') { //포트 중간매도
					$push_info['at_message']['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
					$push_info['at_message']['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
					$push_info['at_message']['replace_2'] = $data['rc_mid_price'];	  //매도가 777.00달러
					$push_info['at_message']['replace_3'] = $data['rc_profit_rate'];  //수익률
					$push_info['at_message']['replace_4'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='27') { //모닝브리핑
					//$push_info['push_type']= 'lms';
					$push_info['title']= $data['title'];
					$push_info['at_message']['replace_0'] = $data['mo_date'];	  //날짜
					$push_info['at_message']['replace_1'] = $data['mo_contents']; //본문
					$push_info['at_message']['replace_2'] = $data['url']; //링크
					$push_info['count']= $data['count'];
				}
				else if($data['template']=='29') { //일반PUSH(2021.2.15 추가)
					$push_info['push_type']= 'lms';
					$push_info['title']= $data['title'];
					$push_info['at_message']['replace_0'] = $data['title']; //제목
					$push_info['at_message']['replace_1'] = $data['contents']; //내용
					$push_info['count']= $data['count'];
				}
				else {
					$push_info['at_message']['replace_0'] = $data['title']; //콘텐츠 이름
					$push_info['at_message']['replace_1'] = $data['contents']; //내용
					$push_info['count']= $data['count'];
				}

				$result = $this->send_push($push_info);
				//echo '<pre>'; print_r($push_info);
			}
		}
	}

	private function _push_notpay($data=array()) {

		if(is_array($data) && sizeof($data)>0) {

			$this->load->model(DBNAME.'/member_tb_model');
			$this->load->model(DBNAME.'/freepay_tb_model');
			$this->load->model(DBNAME.'/pay_tb_model');

			//결제회원
			$params = array();
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['>=']['p_end_date'] = date('Ymd');
	        $params['join']['member_tb'] = 'p_user_id = m_id';

			$extra = array(
				'fields' => array('m_id'),
				'slavedb' => true,
				'order_by' => 'm_id desc'
			);

			$payuser_list = array();
			$payuser_list = $this->pay_tb_model->getList($params, $extra)->getData();

			//3일 무료 회원
			$free_params = array();
			$free_params['=']['fp_code'] = SRV_CODE;
			$free_params['>=']['fp_end_date'] = date('Ymd');
			$free_params['=']['m_paid'] = 'N';
			$free_params['!=']['m_phone'] = '';
			$free_params['join']['member_tb'] = 'fp_user_id = m_id';

			$free_extra = array(
				'fields' => array('m_id'),
				'slavedb' => true,
				'order_by' => 'm_id desc'
			);

			$freepay_list = array();
			$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

			$payuser_list = array_merge($payuser_list, $freepay_list);

			$pay_list = array();
			foreach($payuser_list as $val) {
				$pay_list[] = $val['m_id'];
			}

			$params = array();
			$params['!=']['m_phone'] = '';
			$params['not in']['m_id'] = $pay_list;
			$params['raw'] = '(m_id like \'naver_%\' || m_id like \'kakao_%\')';
			$params['=']['m_push_marketing'] = 'Y';

			$extra = array(
				'fields' => array('m_id', 'm_phone'),
				'slavedb' => true,
				'order_by' => 'm_id desc'
			);

			$notpay_list = array();
			$notpay_list = $this->member_tb_model->getList($params, $extra)->getData();

			foreach($notpay_list as $val) {
				$push_info = array();
				$push_info['template']= $data['template'];
				$push_info['push_type']= 'at';
				$push_info['from']= PUSH_FROM;
				$push_info['to']= $val['m_phone'];

				if($data['template']=='29' && $data['title'] != '' && $data['contents'] != '') { //일반PUSH (2022.11.23 추가)
					$push_info['push_type']= 'lms';
					$push_info['title']= $data['title'];
					$push_info['at_message']['replace_0'] = $data['title']; //제목
					$push_info['at_message']['replace_1'] = $data['contents']; //내용
					$push_info['count']= $data['count'];

					$result = $this->send_push($push_info);
				}
			}
		}
	}

	private function _pay_user_push($data=array()) {
		return;
		//유료회원 체크 ( m_push_service: Y)
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		if(is_array($data) && sizeof($data)>0) {
			$params = array();
			$params['=']['m_paid'] = 'Y';
			$params['=']['m_push_service'] = 'Y';
			$params['!=']['m_phone'] = '';
			//$params['=']['m_id'] = 'kakao_1342320378';
			//$params['in']['m_id'] = array('naver_96845941', 'naver_38742161', 'kakao_1342320378');

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$member_list = $this->member_tb_model->getList($params, $extra)->getData();

			foreach($member_list as $key => $val) {

				$pay_params = array();
				$pay_params['=']['p_user_id'] = $val['m_id'];
				$pay_params['=']['p_code'] = SRV_CODE;
				$pay_params['=']['p_status'] = 'P';
				$pay_params['>=']['p_end_date'] = date('Ymd');

				$pay_extra = array(
					'fields' => '*',
					'order_by' => 'p_end_date DESC',
					'limit' => 1,
					'slavedb' => true
				);

				$pay_data = array();
				$pay_data = array_shift($this->pay_tb_model->getList($pay_params, $pay_extra)->getData());

				if(is_array($pay_data) && sizeof($pay_data)>0 && $data['title'] !='' && $data['contents'] !='') {
					$push_info = array();
					$push_info['template']= $data['template'];
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $val['m_phone'];
					$push_info['at_message']['replace_0'] = $data['title']; //콘텐츠 이름
					$push_info['at_message']['replace_1'] = $data['contents']; //내용
					$push_info['count']= '2';

					$result = $this->send_push($push_info);
					echo '<pre>'; print_r($push_info);
				}
			}

			//3일 무료 회원 푸시(20.07/07)
			$this->_freepay_push($data);
		}
	}

	private function _freepay_push($data=array()) {
		return;
		if(is_array($data) && sizeof($data)>0) {
			//3일 무료 회원 푸시(20.07/07)
			$this->load->model(DBNAME.'/freepay_tb_model');

			$free_params = array();
			$free_params['=']['fp_code'] = SRV_CODE;
			$free_params['>=']['fp_end_date'] = date('Ymd');
			$free_params['=']['m_paid'] = 'N';
			$free_params['!=']['m_phone'] = '';
			//$free_params['=']['m_push_ticker'] = 'Y';
			//$free_params['=']['m_push_service'] = 'Y';
			$free_params['join']['member_tb'] = 'fp_user_id = m_id';

			$free_extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$freepay_list = array();
			$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

			foreach($freepay_list as $key => $val) {
				$push_info = array();
				$push_info['template']= $data['template'];
				$push_info['push_type']= 'at';
				$push_info['from']= PUSH_FROM;
				$push_info['to']= $val['m_phone'];
				$push_info['at_message']['replace_0'] = $data['title']; //콘텐츠 이름
				$push_info['at_message']['replace_1'] = $data['contents']; //내용
				$push_info['count']= '2';

				$result = $this->send_push($push_info);
				echo '<pre>'; print_r($push_info);
			}
		}
	}

	///usr/local/bin/php /home/hoon/html/wallstreet/index.php daemon push_test
	///usr/local/bin/php /home/hoon/html/choicestock/index.php payment push_contents
	function push_success($rc_id, $ticker) {
		return;
		if(isset($rc_id) && $rc_id != '' && isset($ticker) && $ticker != '') {

			$ticker_kor = $this->ticker_info_map[$ticker]['tkr_name'];
			if($ticker_kor == '') {
				$ticker_kor = $this->_get_ticker_korname($ticker);
			}

			$data=array();
			$data['title'] = '종목추천';
			$data['template'] = 16;
			$data['contents'] = $ticker_kor.'('.$ticker.')이(가) 목표가에 도달했습니다.'."\n".HOME_URL.'/stock/recommend_view/'.$rc_id.'?type=at';
			$result = $this->_pay_user_push($data);
			//echo '<pre>'; print_r($data);

			return $result;
		}
	}

	private function _ticker_sync($data = array()) {

		if(is_array($data) && sizeof($data)>0) {
			$params = array();
			$params['!=']['rc_id'] = $data['rc_id'];
			$params['=']['rc_ticker'] = $data['rc_ticker'];
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'ING';
			$extra = array(
				'fields' => '*',
			);

			$list = array();
			$list = $this->recommend_tb_model->getList($params, $extra)->getData();

			foreach($list as $key=>$val) {
				$update_params = array(
					'rc_endtype' => $data['rc_endtype'],
					'rc_enddate' => date('Y-m-d'),
					'rc_updated_at' => date('Y-m-d H:i:s'),
				);
				$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);
			}
		}

		return;
	}

	private function _portout($ticker='') {

		if($ticker!='') {
			$this->load->model(DBNAME.'/recommend_tb_model');
			/*
            $active_set = array(
                'rc_portfolio' => 'N'
            );
            $active_where_params = array();
            $active_where_params['=']['rc_ticker'] = $ticker;
            if( ! $this->recommend_tb_model->doMultiUpdate($active_set, $active_where_params)->isSuccess()) {
                // FAIL..
            }
			*/

			/*이미 등록된 티커 초기화*/
			$pf_params = array();
			$pf_params['=']['rc_ticker'] = $ticker;
			$pf_extra = array(
				'fields' => '*',
			);

			$pf_list = array();
			$pf_list = $this->recommend_tb_model->getList($pf_params, $pf_extra)->getData();

			foreach($pf_list as $pf_key=>$pf_val) {
				$update_params = array(
					'rc_portfolio' => 'N',
					'rc_portupdate' => date('Y-m-d H:i:s'),
				);
				$this->recommend_tb_model->doUpdate($pf_val['rc_id'], $update_params);
			}
		}
	}

	//포트 목표가/손절가 도달
	function trade_test() {
		if( ! $this->input->is_cli_request()) {
            die('cli only');
        }

		//if($this->is_open===false) return;

        echo "\n".'['.date("Y-m-d H:i:s")."] push_trade start!!\n";

		$this->load->model(DBNAME.'/recommend_tb_model');
		//$this->load->model(DBNAME.'/ticker_tb_model');
		//$this->load->model(DBNAME.'/notify_tb_model');

		//포트 목표가 도달 24/5
		$recommend_list = array();
		$params = array();
		$params['=']['rc_is_active'] = 'YES';
		$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
		$params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_portfolio'] = 'Y';
		$params['=']['rc_succ_push'] = 'N';
		$params['=']['rc_endtype'] = 'ING';
		$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
		//test $params['=']['rc_id'] = '2080';

		$extra = array(
			'fields' => '*',
            'order_by' => 'rc_display_date DESC',
			'slavedb' => true
		);

		$recommend_all = $this->recommend_tb_model->getList($params, $extra)->getData();
		echo '<pre>'; print_r($recommend_all);
  		$dup_check = array();
  		$recommend_list = array();

		foreach($recommend_all as $key=>$val) {
			if(!in_array($val['rc_ticker'], $dup_check)) {
				$dup_check[] = $val['rc_ticker'];
				$recommend_list[] = $val;
			}
		}

		echo '<pre>'; print_r($recommend_list); exit;
	}

	//포트 목표가/손절가 도달
	function push_trade() {
		if( ! $this->input->is_cli_request()) {
            die('cli only');
        }

		if($this->is_open===false) return;

        echo "\n".'['.date("Y-m-d H:i:s")."] push_trade start!!\n";

		$this->load->model(DBNAME.'/recommend_tb_model');
		$this->load->model(DBNAME.'/ticker_tb_model');
		$this->load->model(DBNAME.'/notify_tb_model');

		//포트 목표가 도달 24/5
		$recommend_all = array();
		$params = array();
		$params['=']['rc_is_active'] = 'YES';
		$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
		$params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_portfolio'] = 'Y';
		$params['=']['rc_succ_push'] = 'N';
		$params['=']['rc_endtype'] = 'ING';
		$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
		//test $params['=']['rc_id'] = '2080';

		$extra = array(
			'fields' => '*',
            'order_by' => 'rc_display_date DESC',
			'slavedb' => true
		);

		$recommend_all = $this->recommend_tb_model->getList($params, $extra)->getData();

  		$dup_check = array();
  		$recommend_list = array();

		foreach($recommend_all as $key=>$val) {
			if(!in_array($val['rc_ticker'], $dup_check)) {
				$dup_check[] = $val['rc_ticker'];
				$recommend_list[] = $val;
			}
		}

		//echo '<pre>'; print_r($recommend_list); exit;

		$nowday = date('Y-m-d H:i:s');
		//echo '<pre>';
		foreach($recommend_list as $key => $val) {

			if($val['rc_id']!='') {

				$gap = '';
				$gap_wow = '';
				$crawling = array();
				//WOWTV
				$wval = array();
				$crawling['tkr_ticker'] = $val['rc_ticker'];

				$crawling = $this->ticker_tb_model->convertSyncInfo($crawling);
				$wval = $this->common->get_wowtv_info($val['rc_ticker']);
				
				$gap = (int)((strtotime($nowday) - strtotime($crawling['tkr_lastpricedate'])) / 60); //분단위 차이...900분(15시간)
				$gap_wow = (int)((strtotime($nowday) - strtotime($wval['updated_at'])) / 60); //분단위 차이...900분(15시간)


				if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
					$val['rc_goal_price'] = $val['rc_adjust_price'];
				endif;
				
				//$wval['status'] == '1'
				echo 'ticker-->[ '.$val['rc_ticker'].' ] nowday-->[ '.$nowday.' ] gap-->[ '.$gap.' ][ '.$gap_wow.' ]['.$wval['status']."]\n";
				echo 'goal_price-->[ '.$val['rc_goal_price'].'] giveup_price-->[ '.$val['rc_giveup_price'].' ] crawling-->[ '.$crawling['tkr_close'].' ][ '.$wval['last_price']." ]\n";
				//if($gap<=1520) {
				//if($gap<=840) {
				
				//YB if($gap<=900) {
				//WOWTV
				if($gap_wow<=900) {

					$data=array();

					//목표가 달성 체크
					//YB if($val['rc_goal_price'] <= $crawling['tkr_close']) {
					//WOWTV
					if($val['rc_goal_price'] <= $wval['last_price']) {

						$template = '24';
						$count = '6';

						$data['title'] = '포트폴리오 목표가 도달 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';

						$data['rc_ticker'] = $val['rc_ticker'];
						$data['rc_ticker_name'] = $val['tkr_name'];
						$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
						//YB $data['rc_close_price'] = $crawling['tkr_close'].'달러';
						//WOWTV
						$data['rc_close_price'] = $wval['last_price'].'달러';
						$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
						$data['rc_profit_rate'] = number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2).'%';
						$data['template'] = $template;
						$data['count'] = $count;
						$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
						$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

						$update_params = array();
						$update_params['rc_display_date'] = date('Y-m-d H:i:s');
						$update_params['rc_portfolio'] = 'N';
						$update_params['rc_portupdate'] =  date('Y-m-d H:i:s');
						$update_params['rc_succ_push'] = 'Y';
						$update_params['rc_endtype'] = 'SUCCESS';
						$update_params['rc_exclude'] = 'Y';
						$update_params['rc_enddate'] =  date('Y-m-d');
						$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);
						$this->_portout($val['rc_ticker']);

						//ticker sync(2021.2.25 추가)
						$ticker_params = array(
							'rc_id' => $val['rc_id'],
							'rc_ticker' => $val['rc_ticker'],
							'rc_endtype' => 'SUCCESS',
						);
						$this->_ticker_sync($ticker_params);

						//알림테이블 등록
						//$nt_title = '\''.$val['tkr_name'].'('.$val['rc_ticker'].')\'가 목표가에 도달했습니다.(수익률 '.$data['rc_profit_rate'].'%)';
						$nt_title = '포트폴리오 편입종목이 목표가에 도달했습니다.';

						$nt_table = 'recommend_tb';
						$nt_pk = $val['rc_id'];
						$nt_url = '/stock/recommend_view/'.$nt_pk.'?type=at';
						$nt_is_active = 'YES';
						$nt_display_date = $nowday;
						$nt_view_srv = 'C';

						$nt_params = array(
							'nt_title' => $nt_title,
							'nt_table' => $nt_table,
							'nt_ticker' => $val['rc_ticker'],
							'nt_ticker_name' => $val['tkr_name'],
							'nt_pk' => $nt_pk,
							'nt_url' => $nt_url,
							'nt_is_active' => $nt_is_active,
							'nt_display_date' => $nt_display_date,
		                    'nt_view_srv' => $nt_view_srv,
		                    'nt_view_cs' => 'Y',
		                    'nt_view_wt' => 'Y',
		                    'nt_view_kw' => 'Y',
		                    'nt_view_st' => 'Y',
		                    'nt_view_pe' => 'Y',
		                    'nt_view_ws' => 'N',
						);

						if($this->notify_tb_model->doInsert($nt_params)->isSuccess()) {
							echo '(goal)notify_tb insert success!'."\n";
						}
						else {
							echo '(goal)notify_tb insert fail!'."\n";
						}

						echo "\n";
						print_r($nt_params);
						echo "\n";

						$makeport_url = HOME_URL.'/payment/makePortFolio';
						file_get_contents($makeport_url);

						// 2021.6.10 이동
						/*21.11.26주석처리
						$this->_push_choice($data);
						$this->_push_partner($data);
						*/

						//22.11.4 추가
						$this->setTrade($data);
					}
					//WOWTV
					else if($val['rc_giveup_price'] >= $wval['last_price']) { 
					//YB else if($val['rc_giveup_price'] >= $crawling['tkr_close']) {

						$template = '25';
						$count = '6';

						$data['title'] = '포트폴리오 손절가 도달 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';

						$data['rc_ticker'] = $val['rc_ticker'];
						$data['rc_ticker_name'] = $val['tkr_name'];
						$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
						//YB $data['rc_close_price'] = $crawling['tkr_close'].'달러';
						//WOWTV
						$data['rc_close_price'] = $wval['last_price'].'달러';
						$data['rc_giveup_price'] = $val['rc_giveup_price'].'달러';
						$data['rc_profit_rate'] = number_format((($val['rc_giveup_price']/$val['rc_recom_price'])-1)*100, 2).'%';
						$data['template'] = $template;
						$data['count'] = $count;
						$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
						$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

						$update_params = array();
						$update_params['rc_display_date'] = date('Y-m-d H:i:s');
						$update_params['rc_portfolio'] = 'N';
						$update_params['rc_portupdate'] =  date('Y-m-d H:i:s');
						$update_params['rc_succ_push'] = 'Y';
						$update_params['rc_endtype'] = 'FAIL';
						$update_params['rc_exclude'] = 'Y';
						$update_params['rc_enddate'] =  date('Y-m-d');
						$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);
						$this->_portout($val['rc_ticker']);

						//ticker sync(2021.2.25 추가)
						$ticker_params = array(
							'rc_id' => $val['rc_id'],
							'rc_ticker' => $val['rc_ticker'],
							'rc_endtype' => 'FAIL',
						);
						$this->_ticker_sync($ticker_params);

						//알림테이블 등록
						//$nt_title = '\''.$val['tkr_name'].'('.$val['rc_ticker'].')\'가 손절가에 도달했습니다.(수익률 '.$data['rc_profit_rate'].'%)';
						$nt_title = '포트폴리오 편입종목이 손절가에 도달했습니다.';
						$nt_table = 'recommend_tb';
						$nt_pk = $val['rc_id'];
						$nt_url = '/stock/recommend_view/'.$nt_pk.'?type=at';
						$nt_is_active = 'YES';
						$nt_display_date = $nowday;
						$nt_view_srv = 'C';

						$nt_params = array(
							'nt_title' => $nt_title,
							'nt_table' => $nt_table,
							'nt_ticker' => $val['rc_ticker'],
							'nt_ticker_name' => $val['tkr_name'],
							'nt_pk' => $nt_pk,
							'nt_url' => $nt_url,
							'nt_is_active' => $nt_is_active,
							'nt_display_date' => $nt_display_date,
		                    'nt_view_srv' => $nt_view_srv,
		                    'nt_view_cs' => 'Y',
		                    'nt_view_wt' => 'Y',
		                    'nt_view_kw' => 'Y',
		                    'nt_view_st' => 'Y',
		                    'nt_view_pe' => 'Y',
		                    'nt_view_ws' => 'N',
						);

						if($this->notify_tb_model->doInsert($nt_params)->isSuccess()) {
							echo '(giveup)notify_tb insert success!'."\n";
						}
						else {
							echo '(giveup)notify_tb insert fail!'."\n";
						}

						echo "\n";
						print_r($nt_params);
						echo "\n";

						$makeport_url = HOME_URL.'/payment/makePortFolio';
						file_get_contents($makeport_url);

						// 2021.6.10 이동
						/*21.11.26주석처리
						$this->_push_choice($data);
						$this->_push_partner($data);
						*/
					}
				}
			}
		}

        echo "\n".'['.date("Y-m-d H:i:s")."] push_trade end!!\n";
	}

    public function setTrade($data=array()) {
		$this->load->model(DBNAME.'/push_trade_tb_model');

		if(!empty($data)) {
			if(!$this->push_trade_tb_model->get(array('pt_ticker' => $data['rc_ticker'], 'pt_is_send' => 'N'))->isSuccess()) {
				$insert_params = array(
					'pt_title' => $data['title'],
					'pt_ticker' => $data['rc_ticker'],
					'pt_ticker_name' => $data['rc_ticker_name'],
					'pt_recom_price' => $data['rc_recom_price'],
					'pt_close_price' => $data['rc_close_price'],
					'pt_goal_price' => $data['rc_goal_price'] ? $data['rc_goal_price']:0,
					'pt_giveup_price' => $data['rc_giveup_price'] ? $data['rc_giveup_price']:0,
					'pt_profit_rate' => $data['rc_profit_rate'],
					'pt_template' => $data['template'],
					'pt_count' => $data['count'],
					'pt_url' => $data['url'],
					'pt_wowtv_url' => $data['wowtv_url'],
					'pt_is_send' => 'N',
					'pt_created_at' => date('Y-m-d H:i:s'),
				);

				if(!$this->push_trade_tb_model->doInsert($insert_params)->isSuccess()) {
					echo $this->push_trade_tb_model->getErrorMsg();
					print_r($insert_params);
				}
			}
		}
		return;
	}

	//포트 목표가/손절가 도달 푸시발송(D+1, 오전8시) (22.11/04)
	public function push_trade_morning() {
		if( ! $this->input->is_cli_request()) {
            die('cli only');
        }

		$closed_day = array('20220118', '20220222', '20220416', '20220531', '20220621', '20220705', '20220906', '20221125', '20221227');

		$this->load->model(DBNAME.'/control_tb_model');

		if($this->control_tb_model->get(array('con_id' => '1'))->isSuccess()) {
			$con_row = $this->control_tb_model->getData();

			if($con_row['con_status'] == 'N') {
				echo '['.date("Y-m-d H:i:s")."] push stop :: con_status[N]".PHP_EOL;
				exit;
			}
		}
		else {
		    echo '['.date("Y-m-d H:i:s")."] control_tb :: select error!!".PHP_EOL;
			exit;
		}

		if(date('w') == 0 || date('w') == 1) {
		    echo '['.date("Y-m-d H:i:s")."] day check :: [".date('w')."] STOP!!".PHP_EOL;
			exit;
		}

		if(in_array(date('Ymd'), $closed_day)) {
		    echo '['.date("Y-m-d H:i:s")."] closed day STOP!!".PHP_EOL;
			exit;
		}

        echo '['.date("Y-m-d H:i:s")."] push_trade_morning start!!".PHP_EOL;

		$this->load->model(DBNAME.'/push_trade_tb_model');

		$params = $list = array();
		$params['=']['pt_is_send'] = 'N';
		$params['=']['pt_template'] = '24';
		$params['>=']['pt_created_at'] = date('Y-m-d H:i:s', strtotime('-7 days'));

		$extra = array(
			'fields' => '*',
            'order_by' => 'pt_created_at DESC',
			'slavedb' => true
		);

		$list = $this->push_trade_tb_model->getList($params, $extra)->getData();

		foreach($list as $val) {

			$update_params = $data = array();
			$update_params['pt_is_send'] = 'Y';
			$this->push_trade_tb_model->doUpdate($val['pt_id'], $update_params);

			$data['title'] = $val['pt_title'];
			$data['rc_ticker'] = $val['pt_ticker']; 
			$data['rc_ticker_name'] = $val['pt_ticker_name']; 
			$data['rc_recom_price'] = $val['pt_recom_price']; 
			$data['rc_close_price'] = $val['pt_close_price']; 
			//if($val['pt_template'] == '24') {
			$data['rc_goal_price'] = $val['pt_goal_price']; 
			//}
			//else {
			//	$data['rc_giveup_price'] = $val['pt_giveup_price']; 
			//}
			$data['rc_profit_rate'] = $val['pt_profit_rate']; 
			$data['template'] = $val['pt_template']; 
			$data['count'] = $val['pt_count']; 
			$data['url'] = $val['pt_url']; 
			$data['wowtv_url'] = $val['pt_wowtv_url']; 

			$this->_push_choice($data);
			$this->_push_partner($data);
		}

        echo PHP_EOL.'['.date("Y-m-d H:i:s")."] push_trade_morning end!!".PHP_EOL;
	}

	//탐구생활, 신규추천/포트편입/포트업데이트/포트목표가조정/포트중간매도/, 모닝브리핑, 기타
	function push_proc() {
		if( ! $this->input->is_cli_request()) {
            die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] push_proc start!!\n";

		$check_time = intval(date('Hi'));

		//if($check_time>='700' && $check_time<='2359') {

			$this->load->model(DBNAME.'/explore_tb_model');

			if($check_time>='700' && $check_time<='1200') {

				//모닝브리핑
				//$this->load->model(DBNAME.'/morning_tb_model');
				/*
				$morning_list = array();
				$params = array();
				$params['=']['mo_is_active'] = 'Y';
				$params['=']['mo_push'] = 'N';
				$params['<=']['mo_display_date'] = date('Y-m-d H:i:s');
				$params['>=']['mo_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
				//$test params['>=']['mo_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

				$extra = array(
					'fields' => '*',
					'slavedb' => true
				);

				$morning_list = $this->morning_tb_model->getList($params, $extra)->getData();
				*/
				//2021.04.15변경
				$morning_list = array();
				$params = array();
				$params['=']['e_view_cs'] = 'Y';
				$params['=']['e_class'] = '3';
				$params['=']['e_push_srv'] = 'Y';
				$params['=']['e_push'] = 'N';
				$params['<=']['e_display_date'] = date('Y-m-d H:i:s');
				$params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
				//test $params['=']['e_id'] = '119';
				//test $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

				$extra = array(
					'fields' => '*',
					'slavedb' => true
				);

				$morning_list = $this->explore_tb_model->getList($params, $extra)->getData();
				//echo '<pre>'; print_r($morning_list); exit;

				$template = '27';
				$count = '3';

				foreach($morning_list as $key => $val) {

					if($val['e_id']!='') {
						$data=array();
						$data['title'] = $val['e_title'];
						$data['mo_date'] = date('m월 d일');
						$data['mo_contents'] = iconv_substr($val['e_content'], 0, 300, 'utf-8')."\n\n".'...(중략)'."\n"; //본문
						$data['mo_contents_all'] = $val['e_content']; //본문전체
						$data['template'] = $template;
						$data['count'] = $count;
						$data['url'] = '▶ 모닝브리핑 전문 보기'."\n".'https://www.choicestock.co.kr/stock/morning_view/'.$val['e_id'].'?type=at';
						$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/morning_view/'.$val['e_id'];

						$update_params = array();
						$update_params['e_push'] = 'Y';
						$this->explore_tb_model->doUpdate($val['e_id'], $update_params);

						//초이스스탁 회원
						$this->_push_choice($data);
						//파트너사
						$this->_push_partner($data);
					}
				}
			}

			$this->load->model(DBNAME.'/recommend_tb_model');
	        $this->load->model(DBNAME.'/vod_mjm_tb_model');

			//탐구생활
			$explore_list = array();
			$params = array();
			//$params['=']['e_is_active'] = 'YES';
			$params['raw'] = '(e_view_cs = \'Y\' || e_view_wt = \'Y\' || e_view_st = \'Y\' || e_view_pe = \'Y\')';
			$params['in']['e_class'] = array('1', '2');
			//$params['!=']['e_view_srv'] = 'W';
			$params['=']['e_push_srv'] = 'Y';
			$params['=']['e_push'] = 'N';
			$params['<=']['e_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			//test $params['=']['e_id'] = '119';
			//test $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$explore_list = $this->explore_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($explore_list); exit;

			$template = '28';
			$count = '2';
			foreach($explore_list as $key => $val) {

				if($val['e_id']!='') {
					$data=array();
					$data['title'] = '[탐구생활] '.$val['e_title'];
					$data['contents'] = $val['e_title'];
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/research_view/'.$val['e_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/research_view/'.$val['e_id'];
					
					//2021.6.10 이동
					$update_params = array();
					$update_params['e_push'] = 'Y';
					$this->explore_tb_model->doUpdate($val['e_id'], $update_params);

					if($val['e_view_cs'] == 'Y') {
						$this->_push_choice($data);
					}

					if($val['e_view_wt'] == 'Y' || $val['e_view_st'] == 'Y' || $val['e_view_pe'] == 'Y') {
						$data['view_wt'] = $val['e_view_wt'];
						$data['view_kw'] = $val['e_view_st'];
						$data['view_st'] = $val['e_view_st'];
						$data['view_pe'] = $val['e_view_pe'];
						$data['is_vod'] = false;

						$this->_push_partner($data);
					}

					//if($val['e_push_srv'] != 'C' && $val['e_is_inside'] != 'Y') {
					//	$data['e_push_srv'] = $val['e_push_srv'];
					//	$this->_push_partner($data);
					//}

					/* 2021.6.10 이동
					$update_params = array();
					$update_params['e_push'] = 'Y';
					$this->explore_tb_model->doUpdate($val['e_id'], $update_params);
					*/
				}
			}

			//동영상(2021.2.15추가)
			$vm_list = array();
			$params = array();
			//$params['=']['vm_is_active'] = 'YES';
			//$params['in']['vm_view_srv'] = array('C', 'M');
			//$params['=']['vm_choice'] = 'Y';
			$params['raw'] = '(vm_view_cs = \'Y\' || vm_view_wt = \'Y\' || vm_view_kw = \'Y\' || vm_view_st = \'Y\' || vm_view_pe = \'Y\')';
			$params['=']['vm_is_push'] = 'Y';
			$params['=']['vm_push'] = 'N';
			$params['<=']['vm_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['vm_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$vm_list = $this->vod_mjm_tb_model->getList($params, $extra)->getData();

			foreach($vm_list as $key => $val) {

				if($val['vm_id']!='') {
					$data=array();
					$data['title'] = '[동영상] '.$val['vm_title'];
					$data['contents'] = $val['vm_title'];
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/vod_view/'.$val['vm_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/vod_view/'.$val['vm_id'];

					//2021.6.10 이동
					$update_params = array();
					$update_params['vm_push'] = 'Y';
					$this->vod_mjm_tb_model->doUpdate($val['vm_id'], $update_params);

					if($val['vm_view_cs'] == 'Y') {
						$this->_push_choice($data);
					}

					if($val['vm_view_wt'] == 'Y' || $val['vm_view_kw'] == 'Y' || $val['vm_view_st'] == 'Y' || $val['vm_view_pe'] == 'Y') {
						$data['view_wt'] = $val['vm_view_wt'];
						$data['view_kw'] = $val['vm_view_kw'];
						$data['view_st'] = $val['vm_view_st'];
						$data['view_pe'] = $val['vm_view_pe'];
						$data['is_vod'] = true;

						$this->_push_partner($data);
					}

					//if($val['vm_push_srv'] != 'C' && $val['vm_is_inside'] != 'Y') {
					//	$data['vm_push_srv'] = $val['vm_push_srv'];
					//	$this->_push_partner($data);
					//}

					/* 2021.6.10 이동
					$update_params = array();
					$update_params['vm_push'] = 'Y';
					$this->vod_mjm_tb_model->doUpdate($val['vm_id'], $update_params);
					*/
				}
			}

			//신규추천
			$recommend_list = array();
			$params = array();
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'ING';
			$params['!=']['rc_view_srv'] = 'W';
			$params['=']['rc_portfolio'] = 'N';
			$params['=']['rc_push'] = 'N';
			$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
			//test $params['=']['rc_id'] = '2069';

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($recommend_list); exit;

			$template = '20';
			$count = '5';

			foreach($recommend_list as $key => $val) {

				if($val['rc_id']!='') {
					$data=array();
					$data['title'] = '신규 종목 추천 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
					$data['rc_ticker'] = $val['rc_ticker'];
					$data['rc_ticker_name'] = $val['tkr_name'];
					$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
					$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
					$data['rc_giveup_price'] = $val['rc_giveup_price'].'달러';
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

					$update_params = array();
					$update_params['rc_push'] = 'Y';
					$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);

					$this->_push_choice($data);
					$this->_push_partner($data);
				}
			}

			//포트편입(신규)
			$recommend_list = array();
			$params = array();
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'ING';
			$params['!=']['rc_view_srv'] = 'W';
			$params['=']['rc_portfolio'] = 'Y';
			$params['=']['rc_push'] = 'N';
			$params['=']['rc_is_update'] = 'N';
			$params['raw'] = '(rc_adjust is null || rc_adjust = \'\')';
			$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';
			//test $params['=']['rc_id'] = '2089';

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($recommend_list); exit;

			$template = '21';
			$count = '6';

			foreach($recommend_list as $key => $val) {

				if($val['rc_id']!='') {
					$data=array();
					$data['title'] = '포트폴리오 신규 편입 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
					$data['rc_ticker'] = $val['rc_ticker'];
					$data['rc_ticker_name'] = $val['tkr_name'];
					$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
					$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
					$data['rc_giveup_price'] = $val['rc_giveup_price'].'달러';
					$data['rc_profit_rate'] = number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2).'%';
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

					$update_params = array();
					$update_params['rc_push'] = 'Y';
					$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);

					$this->_push_choice($data);
					$this->_push_partner($data);
				}
			}

			//포트 업데이트
			$recommend_list = array();
			$params = array();
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'ING';
			$params['!=']['rc_view_srv'] = 'W';
			$params['=']['rc_portfolio'] = 'Y';
			$params['=']['rc_push'] = 'N';
			$params['=']['rc_is_update'] = 'Y';
			$params['raw'] = '(rc_adjust is null || rc_adjust = \'\')';
			$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($recommend_list); exit;

			$template = '22';
			$count = '6';

			foreach($recommend_list as $key => $val) {

				if($val['rc_id']!='') {
					$data=array();
					$data['title'] = '포트폴리오 리포트 업데이트 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
					$data['rc_ticker'] = $val['rc_ticker'];
					$data['rc_ticker_name'] = $val['tkr_name'];
					$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
					$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
					$data['rc_giveup_price'] = $val['rc_giveup_price'].'달러';
					$data['rc_profit_rate'] = number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100, 2).'%';
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

					$update_params = array();
					$update_params['rc_push'] = 'Y';
					$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);

					$this->_push_choice($data);
					$this->_push_partner($data);
				}
			}

			//포트 목표가 조정
			$recommend_list = array();
			$params = array();
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'ING';
			$params['!=']['rc_view_srv'] = 'W';
			$params['=']['rc_portfolio'] = 'Y';
			$params['=']['rc_push'] = 'N';
			$params['in']['rc_adjust'] = array('U', 'D');
			$params['>']['rc_adjust_price'] = '0';
			$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($recommend_list); exit;

			$template = '23';
			$count = '8';

			foreach($recommend_list as $key => $val) {
				if($val['rc_id']!='') {
					$data=array();
					$data['title'] = '포트폴리오 목표가 조정 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
					$data['rc_ticker'] = $val['rc_ticker'];
					$data['rc_ticker_name'] = $val['tkr_name'];
					$data['rc_adjust'] = ($val['rc_adjust']=='U') ? '상향':'하향';
					$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
					$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
					$data['rc_close_price'] = $val['tkr_close'].'달러';
					$data['rc_adjust_price'] = $val['rc_adjust_price'].'달러';
					$data['rc_profit_rate'] = number_format((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100, 2).'%';
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

					$update_params = array();
					$update_params['rc_push'] = 'Y';
					$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);

					$this->_push_choice($data);
					$this->_push_partner($data);
				}
			}

			//포트 중간 매도
			$recommend_list = array();
			$params = array();
			$params['=']['rc_is_active'] = 'YES';
			$params['=']['rc_endtype'] = 'SELL';
			$params['!=']['rc_view_srv'] = 'W';
			$params['=']['rc_portfolio'] = 'Y';
			$params['=']['rc_succ_push'] = 'N';
			$params['>']['rc_mid_price'] = '0';
			$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
			$params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($recommend_list); exit;

			$template = '26';
			$count = '5';

			foreach($recommend_list as $key => $val) {
				if($val['rc_id']!='') {
					$data=array();
					$data['title'] = '포트폴리오 종목 매도 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
					$data['rc_ticker'] = $val['rc_ticker'];
					$data['rc_ticker_name'] = $val['tkr_name'];
					$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
					$data['rc_mid_price'] = $val['rc_mid_price'].'달러';
					$data['rc_profit_rate'] = number_format((($val['rc_mid_price']/$val['rc_recom_price'])-1)*100, 2).'%';
					$data['template'] = $template;
					$data['count'] = $count;
					$data['url'] = 'https://www.choicestock.co.kr/stock/recommend_view/'.$val['rc_id'].'?type=at';
					$data['wowtv_url'] = 'https://wowtv.choicestock.co.kr/'.WT.'_stock/recommend_view/'.$val['rc_id'];

					$update_params = array();
					$update_params['rc_succ_push'] = 'Y';
					$update_params['rc_exclude'] = 'Y';
					$update_params['rc_portfolio'] = 'N';
					$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);

					$makeport_url = HOME_URL.'/payment/makePortFolio';
					file_get_contents($makeport_url);

					$this->_push_choice($data);
					$this->_push_partner($data);
				}
			}

			//푸시전용
			$this->load->model(DBNAME.'/push_tb_model');
			$push_list = array();
			$params = array();
			$params['=']['pu_is_push'] = 'Y';
			$params['=']['pu_push'] = 'N';
			$params['<=']['pu_display_date'] = date('Y-m-d H:i:s');
			$params['>=']['pu_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$push_list = $this->push_tb_model->getList($params, $extra)->getData();

			foreach($push_list as $key => $val) {
				if($val['pu_id']!='') {

					$update_params = array();
					$update_params['pu_push'] = 'Y';
					$this->push_tb_model->doUpdate($val['pu_id'], $update_params);

					//if($val['pu_all'] == 'Y' || $val['pu_kiwoom'] == 'Y') {
					if($val['pu_kiwoom'] == 'Y') {
						$this->send_direct($val);
					}

					//if($val['pu_all'] == 'Y' || $val['pu_choice'] == 'Y') {
					if($val['pu_choice'] == 'Y') {

						$template = '29';
						$count = '2';

						$data=array();
						$data['title'] = $val['pu_title'];
						$data['contents'] = $val['pu_content'];
						$data['template'] = $template;
						$data['count'] = $count;

						//초이스스탁 회원
						$this->_push_choice($data);
					}

					if($val['pu_choicefree'] == 'Y') {

						$template = '29';
						$count = '2';

						$data=array();
						$data['title'] = $val['pu_title'];
						$data['contents'] = $val['pu_content'];
						$data['template'] = $template;
						$data['count'] = $count;

						//초이스스탁 미결제회원
						$this->_push_notpay($data);
					}

					if($val['pu_wowtv'] == 'Y') {

						$wt_data = array();
						$wt_data['title'] = str_replace('초이스스탁US', '미국주식창', $val['pu_title']);
						$wt_data['body'] = str_replace('초이스스탁US', '미국주식창', $val['pu_content']);
						$wt_data['url'] = $val['pu_url'];

						$this->wowtv_pushproc($wt_data);
					}

					if($val['pu_wowfree'] == 'Y') {

						$wt_data = array();
						$wt_data['title'] = str_replace('초이스스탁US', '미국주식창', $val['pu_title']);
						$wt_data['body'] = str_replace('초이스스탁US', '미국주식창', $val['pu_content']);
						$wt_data['url'] = $val['pu_url'];

						$this->wowfree_pushproc($wt_data);
					}

					if($val['pu_wowtv'] == 'Y' || $val['pu_wowfree'] == 'Y') {

						$this->load->model(DBNAME.'/notify_tb_model');

						$nt_title = $wt_data['title'];
						$nt_table = 'push_tb';
						$nt_pk = $val['pu_id'];
						$nt_url = $wt_data['url'];
						$nt_is_active = 'YES';
						$nt_display_date = $val['pu_display_date'];
						if($val['pu_wowfree'] == 'Y') {
							$nt_view_srv = 'H';
						}
						else {
							$nt_view_srv = 'C';
						}

						$nt_params = array(
							'nt_title' => $nt_title,
							'nt_table' => $nt_table,
							'nt_ticker' => '',
							'nt_ticker_name' => '',
							'nt_pk' => $nt_pk,
							'nt_url' => $nt_url,
							'nt_is_active' => $nt_is_active,
							'nt_display_date' => $nt_display_date,
		                    'nt_view_srv' => $nt_view_srv,
		                    'nt_view_cs' => 'N',
		                    'nt_view_wt' => 'Y',
		                    'nt_view_kw' => 'N',
		                    'nt_view_st' => 'N',
		                    'nt_view_pe' => 'N',
		                    'nt_view_ws' => 'N',
						);

						if($this->notify_tb_model->doInsert($nt_params)->isSuccess()) {
							echo '(wowtv)notify_tb insert success!'."\n";
						}
						else {
							echo '(wowtv)notify_tb insert fail!'."\n";
						}

						echo 'wowtv - nt_params['.date('Y-m-d H:i:s').']'."\n";
						print_r($nt_params);
						echo "\n";					
					}
					/* 2021.6.10 이동
					$update_params = array();
					$update_params['pu_push'] = 'Y';
					$this->push_tb_model->doUpdate($val['pu_id'], $update_params);
					*/
				}
			}
		//}

		echo "\n".'['.date("Y-m-d H:i:s")."] push_proc end!!\n";
	}

	function pax_test() {

        if(IS_REAL_SERVER) {
			return;
		}

		//팍스넷 푸시 전송
/*
		$title = '영국, 코로나 확산에 봉쇄령..美 3대지수 하락 마감';

$px_message = <<<PHPSKIN
[팍스초이스] 01월 05일 모닝 브리핑

■ 전일 미국증시 주요지수

다우존스 30,223.89 (-1.25%)
나스닥 12,698.45 (-1.47%)
S&P500 3,700.65 (-1.48%)

■ 주요 뉴스

* 영국, 코로나 확산으로 봉쇄령..미국도 변종 바이러스 첫 확인
* 12월 미 제조업 구매관리자지수(PMI) 57.1, 2014년 9월 이후 최고치..미국 제조업 경기 회복 신호
* OPEC+ 2월 이후 증산 여부 결정 연기...유가 2% 급락

■ 추천 포트폴리오 수익률 29.18% (▽1.36%P)

올해 첫 미국주식 시장이 호된 신고식을 치뤘습니다.

...(중략)

PHPSKIN;
		$px_message = iconv_substr($px_message, 0, 800, 'utf-8');

		//$msg = '0|'.urlencode($title).'|'.urlencode($px_message);
		$msg = '0|'.$title.'|'.$px_message.'|1';
		$appCode = 'com.paxnet.paxchoice';
		$notiCode = 'AA001';

		$data = Array(
			'msg' => $msg,
			'appCode' => $appCode,
			'notiCode' => $notiCode,
			'CharSet' => 'utf-8'
		);

		$postURL = 'https://www.paxnet.co.kr/pro/api/sendAppPushAjax';

		$response = $this->_reqPost($data, $postURL); 	//승인 호출
		//$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );
		$response = json_decode( $response, true );
		echo "\n".'<pre>paxnet result-->'."\n";
		print_r($response);
		echo '<--paxnet result'."\n";
*/
		exit;
	}

	public function pushone_test() {
		//https://capdev.choicestock.co.kr/payment/pushone_test

		//$keys = array('672a8e68-be29-4dd4-9d9b-5f490969665d', 'ea3ec5bb-4ae5-4693-9cd1-f378984383b3', '1e36beb0-fe09-4844-86d1-bc3f461d9ca0');
		
		$keys = array('7aa910b6-884e-4b4a-ac47-a857dfaf0801', '672a8e68-be29-4dd4-9d9b-5f490969665d'); //wt_61d6897ddfb9e
		
		$send_data = array();
		
		//$send_data['title'] = '이달의 배당 - 21년 10월 (미국 배당주로 월세 만들기)';
		//$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/774';


		//$send_data['title'] = '[시황] 10년 국채금리 급등..뉴욕증시가 큰 폭 하락';
		//$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/772';


		//$send_data['title'] = '[실적발표] 마이크론 테크놀러지, 주당순이익 2.42 달러..예상치 2.33 달러 상회';
		//$send_data['url'] = 'https://capdev.choicestock.co.kr/wt_stock/research_view/771';

		//$send_data['title'] = '[탐구생활] [배당주] 브로드(AVGO) 등 9월 4주, 최고의 배당주는?';
		//$send_data['url'] = 'https://capdev.choicestock.co.kr/wt_stock/research_view/725';


		//$send_data['title'] = '[더글로벌라운지] 당신이 지금 매수해야 하는 종목은?';
		//$send_data['url'] = 'https://capdev.choicestock.co.kr/wt_stock/wowtv_view/396';

		//$send_data['title'] = '[미인주] 엣시(ETSY) 외 2종목';
		//$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/718';

		
		$send_data['title'] = '[시황] FOMC 의사록 긴축 우려로 나스닥 3.3% ↓';
		//$send_data['url'] = 'http://stockwin.wowtv.co.kr/vitamin/list.asp';
		$send_data['url'] = ' https://wowtv.choicestock.co.kr/wt_stock/research_view/1106';
		//$send_data['url'] = 'http://stockwin.wowtv.co.kr/vitamin/list.asp?devk=672a8e68-be29-4dd4-9d9b-5f490969665d&phno=01076121487&hidden=27&ver=2';
		//$send_data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/recommend_view/2238';
		//$send_data['url'] = 'https://capdev.choicestock.co.kr/wt_main/bridge?no=9998888';

		//$send_data['title'] = '[시황] 세계 경제활동 재개 기대 속 상승 마감';
		//$send_data['url'] = 'https://capdev.choicestock.co.kr/wt_stock/research_view/723';

/*
		$send_data['body'] = '[미국주식창] 미국주식 탐구생활

[실적발표] 오라클, 주당순이익 1.03 달러..예상치 0.97 달러 상회

 ※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.';
*/

$send_data['body'] = '[시황] 세계 경제활동 재개 기대 속 상승 마감

■ 미국 증시 브리핑 (1/5 마감)
- 다우존스 : 36,407.11 (▽392.54 -1.07%)
- 나스닥 : 15,100.17 (▽522.54 -3.34%)
- S&amp;P500 : 4,700.58 (▽92.96 -1.94%)

■ 금일 배당락 발표기업

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.';

		echo '<pre>';
		foreach($keys as $val) {
			$send_data['device_key'] = $val;
			$return = $this->_wt_send_push($send_data);
			print_r($return);
		}
	}

	private function _wt_send_push($send_data=array()) {
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

//$send['wm_pushkey'] = 'cIZf97JARQa3g0qqcNZd-m:APA91bHWnSayDFjreb7RTQlS5-bLWtZRXr36nFrk1wM-tE_2ZZ2j4wfA_vtP3gijv7v_2fNPnDUp3tm5VRfL4Ep4_36xE4grOLhGI0iZswZpFNt3vwx2Wjf5blZ8Qk-aUcsxUSqsMc1m';
//echo '<pre>'; print_r($send); exit;

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

			$fields['to'] = $send['wm_pushkey'];
			$fields['priority'] = "high";
echo '<br><br><pre>'; print_r($fields);
echo '<br><br>';
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
	public function wowtv_push_test() {

        //if(IS_REAL_SERVER) {
		//	return;
		//}

/*
//https://capdev.choicestock.co.kr/payment/wowtv_push_test?token=토큰값(받을 핸드폰 토큰값)
//https://capdev.choicestock.co.kr/payment/wowtv_push_test?token=dEsnIogtSSmrDG2MUuE9I7:APA91bFP8dPlZcoFeRjSdWfSZCNFblOHWculLHJ8EkimPL7ULnxZcs2dosw8Nzh8Zd7FFkKS6iYSEgM1-NG2VpwklS7nV_jgzHcpUjRVzh3MPGLl3kuxZqLyYkAonPzzzio84Qu_GZ1c

		//유료회원 체크 ( wm_paid : Y, wm_is_push : Y)
		$this->load->model(DBNAME.'/wt_member_tb_model');
		$params = array();
		$params['=']['wm_paid'] = 'Y';
		$params['=']['wm_is_push'] = 'Y';
		$params['!=']['wm_pushkey'] = 'undefined';
		//$params['!=']['wm_phone'] = '';
		$params['=']['wm_id'] = 'wt_612f066f2b905';
		//$params['in']['wm_id'] = array('wt_612f066f2b905', 'wt_60c1b51f1e8fa');
		//$params['in']['wm_id'] = array('wt_612f066f2b905', 'wt_61273d2c4ece4');

		$extra = array(
            'fields' => array('wm_id', 'wm_pushkey'),
			'slavedb' => true
		);

https://capdev.choicestock.co.kr/payment/wowtv_push_test?token=czkcjD43RG6uX5iG6KebdB:APA91bG8xa89L-ZmX46ueWmBOz0NLGEngQZ_1CKUG37vNSKdP7Fs1e5rPvK-o9Je2l_lmmWBaAT00x2f5Tvg-DKtya3ETBRK7YDiVhJUXdnlr4sFwgbn87er7OvULvMCiFvTfJE34eai
https://capdev.choicestock.co.kr/payment/wowtv_push_test?token=czkcjD43RG6uX5iG6KebdB:APA91bG8xa89L-ZmX46ueWmBOz0NLGEngQZ_1CKUG37vNSKdP7Fs1e5rPvK-o9Je2l_lmmWBaAT00x2f5Tvg-DKtya3ETBRK7YDiVhJUXdnlr4sFwgbn87er7OvULvMCiFvTfJE34eai
		$wowtv_list = $this->wt_member_tb_model->getList($params, $extra)->getData();

//echo '<pre>'; print_r($wowtv_list); exit;
		
		$tokens = array();
		foreach($wowtv_list as $wowtv) {
			$tokens[] = $wowtv['wm_pushkey'];
		}
*/

		$token = $this->input->get('token');
		//if($token == '') {
		//	echo 'token is null.'; exit;
		//}
		$tokens = array();
		if($token != '') {
			$tokens[] = $token;
		}

		$tokens[] = 'd8XSpBFYRg-WUoPlurA46_:APA91bG9JiBlqfwnfih7X-l84LAgomherSGOWPimYMnm9zNP10NjFs2ZHWXySzYXMLgKO_swrPOhG3bK9btoQWLOXUWnYAckN1njHXFG6OF-HPYedX0J1WhbPqBNeBmxRjuPFFGcVssP';

		$arr_chunk = array_chunk($tokens, 900);
//echo '<pre>'; print_r($arr_chunk); exit;

		echo '<pre>';
/*
		$data['title'] = '[시황] 델타변이 여파로 美경제전망 \'하향조정\'';
		$data['body'] = '■ 미국 증시 브리핑 (9/7 마감)
다우존스 : 35,100 (-0.76%) | 나스닥 : 15,374.33 (+0.07%) | S&P500 : 4,520.03 (-0.34%)

■ 전일 급등주
메첼(MTL) 5달러 (+56.25%) | eFFECTOR Therapeutics Inc(EFTR) 12.83달러 (+49.88%)';

		$data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/707';
		
*/
		$data['title'] = '[TEST] [실적발표] 오라클, 주당순이익 1.03 달러..예상치 0.97 달러 상회';
		//$data['url'] = 'https://wowtv.choicestock.co.kr/wt_main/bridge/B';
		$data['url'] = 'https://capdev.choicestock.co.kr/wt_stock/research_view/722';

		//$data['title'] = '[시황] 세계 경제활동 재개 기대 속 상승 마감';
		//$data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/723';

		//$data['title'] = '[더글로벌라운지] 당신이 지금 매수해야 하는 종목은?';
		//$data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/wowtv_view/396';
		
		//$data['title'] = '[미인주] AI 선정 투자매력 3 종목';
		//$data['url'] = 'https://wowtv.choicestock.co.kr/wt_stock/research_view/718';



		$data['body'] = '[미국주식창] 미국주식 탐구생활

[실적발표] 오라클, 주당순이익 1.03 달러..예상치 0.97 달러 상회

 ※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.';


		foreach($arr_chunk as $arr_token) {

			$data['tokens'] = $arr_token;
			$result = $this->_wowtv_send_push_test($data);
			echo "\n".'push['.date('Y-m-d H:i:s').']'."\n";
			//print_r($data);
			print_r($result);
			echo "\n";
		}
	}

	private function _wowtv_send_push_test($data=array()) {

		if(sizeof($data)>0) {
	
			$url = 'https://fcm.googleapis.com/fcm/send';
			$FCM_SERVER_KEY = "AAAAAw0PMU0:APA91bG0TLzc8NprkLJK8sLSWTeSvXeZhdNFRM9iNDkX6IBlUL8R5pgMmFlyCN2AuVSIkrbF8prx8eFM-Db-dzMe9AZRQzGmL9TpK4_IAIlwKMndSel4XcoqJuKsMccSaSCgOqj26-41"; 

			$send_message = array(
				'title'   => $data['title'], 
				'body' => $data['body'],
				'url' => $data['url'],
			);

			$fields = array (
				'data' => array ('body' => $send_message['body'], 'title' => $send_message['title'], 'url' => $send_message['url']),
			);
/*
			$fields = array (
				'notification' => array ('body' => $send_message['body'], 'title' => $send_message['title']),
				'data' => array ('body' => $send_message['body'], 'title' => $send_message['title'], 'url' => $send_message['url']),
			);
*/
			echo '<pre>'; print_r($fields); 

			if(is_array($data['tokens'])) {
				$fields['registration_ids'] = $data['tokens'];
			} else {
				$fields['to'] = $data['tokens'];
			}
			//$fields['to'] = $data['token'];

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
			   //die('Curl failed: ' . curl_error($ch));
			   return 'Curl failed: ' . curl_error($ch);
			}
			curl_close($ch);
			return $result;
		}
	}

	public function hana_push_test() {

        if( ! $this->input->is_cli_request()) {
            die('cli only');
        }

        if(IS_REAL_SERVER) {
			return;
		}

/* test */
$message0 = <<<PHPSKIN
[초이스스탁US] 신규 종목추천

[인튜이트(INTU)]
추천가 202.00달러
목표가 465.00달러
손절가 335.00달러

https://www.choicestock.co.kr/stock/recommend_view/2050?type=at
▶ 실시간 리딩은 따로 해드리지 않으니 목표가, 손절가를 꼭 지켜주시기 바랍니다.

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message1 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오

신규매수 : 마켓액세스 홀딩스(MKTX)
추천가 537.00달러
목표가 670.00달러
손절가 459.00달러
목표 수익률 24.77%

https://www.choicestock.co.kr/stock/recommend_view/2161?type=at
 포트폴리오 편입종목은 매수부터 매도까지 리딩을 포함한 모든 정보를 제공합니다.

 ※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message2 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오

업데이트 리포트 등록 : 브로드컴(AVGO)
추천가 352.09달러
목표가 540.00달러
손절가 315.00달러
목표 수익률 53.37%

https://www.choicestock.co.kr/stock/recommend_view/2185?type=at
 포트폴리오 편입종목은 매수부터 매도까지 리딩을 포함한 모든 정보를 제공합니다.

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;


$message3 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오

목표가 상향 : 페이스북(FB)
추천가 238.79달러
현재가 307.10달러
기존 목표가 375.00달러
변경 목표가 390.00달러
목표 수익률 63.32%

https://www.choicestock.co.kr/stock/recommend_view/2174?type=at
 포트폴리오 편입종목은 매수부터 매도까지 리딩을 포함한 모든 정보를 제공합니다.

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;


$message4 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오

목표가 도달 : 램리서치(LRCX)
추천가 334.50달러
현재가 500.06달러
목표가 500.00달러
수익률 49.48%

https://www.choicestock.co.kr/stock/recommend_view/2118?type=at
 목표가에 도달, 전량 매도해 수익을 실현합니다.

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;


$message5 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오

손절가 도달 : 마켓액세스 홀딩스(MKTX)
추천가 537.00달러
현재가 458.51달러
손절가 459.00달러
수익률 -14.53%

https://www.choicestock.co.kr/stock/recommend_view/2171?type=at
 손절가에 도달, 전량 매도합니다.

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message6 = <<<PHPSKIN
[초이스스탁US] 추천 포트폴리오
 
매도 : 월마트(WMT)
추천가 144.71달러
매도가 137.66달러
수익률 -4.87%
 
https://www.choicestock.co.kr/stock/recommend_view/2153?type=at
▶ 교체매매를 위해 전량 매도합니다.
 
 ※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message7 = <<<PHPSKIN
[초이스스탁US] 06월 04일 모닝 브리핑

■ 전일 주요지수
다우존스 34,577.04 (-0.07%)
나스닥 13,614.51 (-1.03%)
S&P500 4,192.85 (-0.36%)

■ 주요뉴스
* 5월 미국 민간고용 97만800명 증가, 작년 6월 이후 최대 증가폭
* 바이든, 법인세 21% → 28% 인상 방안 철회 - 월스트리트저널

■ 추천 포트폴리오 수익률 +35.61%(▽0.94%P)

추천 포트폴리오 수익률은 전일대비 0.94% 포인트 하락한 +35.61% 로 마감했습니다. 미국 고용 상황이 크게 호전됐다는 소식에 장기 국채금리는 상승했고 이에 따라 기

...(중략)

▶ 모닝브리핑 전문 보기
https://www.choicestock.co.kr/stock/morning_view/474?type=at

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message8 = <<<PHPSKIN
[초이스스탁US] 미국주식 탐구생활

이달의 배당매력주 - 최고 연간배당 9.52% 6월에 사면 좋을 배당주들을 살펴봅니다. 
https://www.choicestock.co.kr/stock/vod_view/104?type=at

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

		//하나금투 푸시 전송(2021.4.01)
		$hn_info = '8';
		$hn_message = $message8;
		$hn_message = str_replace('#REP_ADD#', '', $hn_message);
		$hn_message = $this->stripUrl($hn_message);
		$hn_message = iconv_substr($hn_message, 0, 90, 'utf-8');
//echo $hn_message.'<br>'; echo mb_strlen($hn_message); exit;
		//데이터 인풋값 내용
		//flag = I 
		//keyx = CHOS
		//valx = 공백
		//info = 해당 내용에 따라 (1~7값 등록 , 메인이면 0)
		//data = 메인 내용 최대 글자수 (200byte)
		$hn_flag = 'I';
		$hn_keyx = 'CHOS';
		$hn_valx = '';

		$data_hana = Array(
			'flag' => $hn_flag,
			'keyx' => $hn_keyx,
			'valx' => $hn_valx,
			'info' => $hn_info,
			'data' => $hn_message,
			'CharSet' => 'utf-8'
		);		

		$hn_push_url = 'https://devwww.hanaw.com/corebbs5/control/admin/pushCall.cmd';
		//$hn_push_url = 'https://www.hanaw.com/corebbs5/control/admin/pushCall.cmd';

		$response_hana = $this->_reqPost($data_hana, $hn_push_url); 	//승인 호출
		$response_hana = json_decode( $response_hana, true );

		//$hn_push_url = 'https://devwww.hanaw.com/corebbs5/control/admin/pushCall.cmd?flag='.$hn_flag.'&keyx='.$hn_keyx.'&valx='.$hn_valx.'&info='.$hn_info.'&data='.urlencode($hn_message);
		//echo 'hana pushUrl : '.$hn_push_url."\n";
		//$hn_push_url = 'https://www.hanaw.com/corebbs5/control/admin/pushCall.cmd?flag='.$hn_flag.'&keyx='.$hn_keyx.'&valx='.$hn_valx.'&info='.$hn_info.'&data='.urlencode($hn_message);
		//$hana_result = json_decode(file_get_contents($hn_push_url), true);

		echo "\n".'hana result-->'."\n";
		print_r($data_hana);
		print_r($response_hana);
		echo '<--hana result'."\n";

		/*
		$hn_push_url = 'https://devwww.hanaw.com/corebbs5/control/admin/pushCall.cmd?flag='.$hn_flag.'&keyx='.$hn_keyx.'&valx='.$hn_valx.'&info='.$hn_info.'&data='.urlencode($hn_message);
		echo $hn_push_url.'<br>';
		//$hn_push_url = 'https://www.hanaw.com/corebbs5/control/admin/pushCall.cmd?flag=I&keyx=CHOS&valx=&info=&data='.urlencode($hn_message);

		$hana_result = json_decode(file_get_contents($hn_push_url), true);

		echo "\n".'hana result-->'."\n";
		print_r($hana_result);
		echo '<--hana result'."\n";
		*/
/*
		$data = Array(
			'flag' => 'I',
			'keyx' => 'CHOS',
			'valx' => '',
			'info' => '0',
			'data' => $hn_message,
			'CharSet' => 'utf-8'
		);

		$postURL = 'https://devwww.hanaw.com/corebbs5/control/pushCall.cmd';

		$response = $this->_reqPost($data, $postURL); 	//승인 호출
		//$response = json_decode( preg_replace('/[\x00-\x1F\x80-\xFF]/', '', $response), true );
		$response = json_decode( $response, true );

		echo "\n".'hana result-->'."\n";
		print_r($response);
		echo '<--hana result'."\n";
*/

/*
		$params = sprintf('flag=I&keyx=CHOS&valx=&info=0&data=%s', urlencode($hn_message));
		$TOKEN_API_URL = "https://devwww.hanaw.com/corebbs5/control/pushCall.cmd";

		$opts = array(
			CURLOPT_URL => $TOKEN_API_URL,
			CURLOPT_SSL_VERIFYPEER => false,
			CURLOPT_SSLVERSION => 1, // TLS
			CURLOPT_POST => true,
			CURLOPT_POSTFIELDS => $params,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_HEADER => false
		);

		$curlSession = curl_init();
		curl_setopt_array($curlSession, $opts);
		$accessTokenJson = curl_exec($curlSession);
		curl_close($curlSession);

		$responseArr = json_decode($accessTokenJson, true);

		echo "\n".'hana result-->'."\n";
		print_r($responseArr);
		echo '<--hana result'."\n";
*/
	}

	public function mirae_push_test() {

        if( ! $this->input->is_cli_request()) {
            //die('cli only');
        }

		if(IS_REAL_SERVER) {
			return;
		}

/* test */
$mirae_body = <<<PHPSKIN
[초이스스탁US] 06월 04일 모닝 브리핑

■ 전일 주요지수
다우존스 34,577.04 (-0.07%)
나스닥 13,614.51 (-1.03%)
S&P500 4,192.85 (-0.36%)

■ 주요뉴스
* 5월 미국 민간고용 97만800명 증가, 작년 6월 이후 최대 증가폭
* 바이든, 법인세 21% → 28% 인상 방안 철회 - 월스트리트저널

■ 추천 포트폴리오 수익률 +35.61%(▽0.94%P)

추천 포트폴리오 수익률은 전일대비 0.94% 포인트 하락한 +35.61% 로 마감했습니다. 미국 고용 상황이 크게 호전됐다는 소식에 장기 국채금리는 상승했고 이에 따라 기

...(중략)

▶ 모닝브리핑 전문 보기
https://www.choicestock.co.kr/stock/morning_view/474?type=at

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

$message8 = <<<PHPSKIN
[초이스스탁US] 미국주식 탐구생활

이달의 배당매력주 - 최고 연간배당 9.52% 6월에 사면 좋을 배당주들을 살펴봅니다. 
https://www.choicestock.co.kr/stock/vod_view/104?type=at

※ 본 메세지는 회원님의 정보 수신설정으로 발송되었습니다.
PHPSKIN;

		//미래 푸시 전송
		$mirae_body = str_replace('#REP_ADD#', '', $mirae_body);
		$mirae_body = rtrim($this->stripUrl($mirae_body));

		$mirae_message = $mirae_body;

		// 따옴표 test 
		$mirae_message = '022000000000000000'.str_replace('"', '\"', $mirae_message);
		echo '[['.$mirae_message.']]<br>';
		//exit;
		shell_exec('curl -XPOST "http://18.237.63.176:11022/" -d "msg='.$mirae_message.'"'); //TEST
		//shell_exec('curl -XPOST "http://18.237.63.176:11021/" -d "msg='.$mirae_message.'"'); //REAL
	}

	public function hantoo_push_test() {

        if(IS_REAL_SERVER) {
			return;
		}

/* test */
$hantoo_body = <<<PHPSKIN
안녕하세요.
한투증권 해외로보 서비스를 제공 중인 초이스스탁US입니다.

방금 회원님께 발송된 인튜이트(INTU) 신규 추천 문자는
시스템 점검 과정에서 과거 내용이 잘못 나갔습니다.

인튜이트는 이미 기존에 편입 중인 종목으로
최근 투자의견은 ‘보유’로 전달해 드렸었습니다.

이용에 혼란을 드려 죄송합니다.

인튜이트(INTU) 현재 투자의견
추천가 : 371.01 달러
현재가 : 445.44 달러
목표가 : 465.00 달러

목표가 도달시 매도 예정입니다.
감사합니다.
PHPSKIN;
$hantoo_type = '01';
		//한투 푸시 전송
		$hantoo_title = '안녕하세요. 초이스스탁US입니다.';
		$cut_title = $this->strcut_utf8($hantoo_title, 100, true, '');
		$cut_title_iconv = iconv('UTF-8', 'EUC-KR', $cut_title);
		$cut_title_length = strlen($cut_title_iconv);

		$space = '';
		if($cut_title_length<100) {
			$diff = 100 - $cut_title_length;
			for($i=0;$i<$diff;$i++) {
				$space .= ' ';
			}
		}
		$hantoo_title = $cut_title.$space;

		$hantoo_body = str_replace('#REP_ADD#', '', $hantoo_body);
		$hantoo_body = rtrim($this->stripUrl($hantoo_body));
		//$hantoo_body = preg_replace('/\r\n|\r|\n/','',$hantoo_body);

		$hantoo_message = $hantoo_type.$hantoo_title.$hantoo_body;

		$hantoo_message = str_replace('"', '\"', $hantoo_message);
		echo '[['.$hantoo_message.']]<br>';
//echo '<pre>'; print_r($hantoo_message);
		//shell_exec('curl -XPOST "http://18.237.63.176:11012/" -d "msg='.$hantoo_message.'"'); //TEST

		//echo "\nhantoo_message[".$hantoo_message."]\n";
	}

	function direct_test() {

        if(IS_REAL_SERVER) {
			return;
		}

		//푸시전용
		$this->load->model(DBNAME.'/push_tb_model');
		$push_list = array();
		$params = array();
		$params['=']['pu_is_push'] = 'Y';
		$params['=']['pu_push'] = 'N';
		$params['<=']['pu_display_date'] = date('Y-m-d H:i:s');
		$params['>=']['pu_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$push_list = $this->push_tb_model->getList($params, $extra)->getData();
		echo '<pre>'; print_r($push_list); exit;
		//$template = '30';
		//$count = '3';

		foreach($push_list as $key => $val) {

			if($val['pu_id']!='') {
				if($val['pu_kiwoom'] == 'Y') {

					//$this->send_direct_test($val);

					$update_params = array();
					$update_params['pu_push'] = 'Y';
					$this->push_tb_model->doUpdate($val['pu_id'], $update_params);
				}
			}
		}
	}

	public function makePortFolio() {

		$this->load->model(DBNAME.'/recommend_tb_model');

		//추천/포트폴리오파일 생성
/*
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        //$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['!=']['rc_view_srv'] = 'W';
		$params['raw'] = '(rc_portfolio = \'Y\' || rc_exclude = \'Y\')';
        //$params['=']['rc_endtype'] = 'ING';
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

        $extra = array(
            'fields' => array('rc_id', 'rc_ticker', 'tkr_name', 'rc_title', 'rc_subtitle','rc_recom_price','rc_giveup_price','rc_goal_price', 'rc_endtype', 'rc_portfolio', 'rc_mid_price', 'rc_exclude', 'rc_enddate', 'rc_adjust', 'rc_adjust_price'),
            'order_by' => 'rc_display_date DESC',
        );

        $rc_all = $this->recommend_tb_model->getList($params, $extra)->getData();

  		$dup_check = array();
  		$rc_list = array();
		foreach($rc_all as $key=>$val) {
			if(!in_array($val['rc_ticker'], $dup_check)) {
				$dup_check[] = $val['rc_ticker'];
				$rc_list[] = $val;
			}
		}
*/
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_portfolio'] = 'Y';
        $params['=']['rc_endtype'] = 'ING';
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

        $extra = array(
            'fields' => array('rc_id', 'rc_ticker', 'tkr_name', 'rc_title', 'rc_subtitle','rc_recom_price','rc_giveup_price','rc_goal_price', 'rc_display_date', 'rc_endtype', 'rc_portfolio', 'rc_mid_price', 'rc_exclude', 'rc_enddate', 'rc_adjust', 'rc_adjust_price'),
            'order_by' => 'rc_display_date DESC',
        );

        $portfolio_list = $this->recommend_tb_model->getList($params, $extra)->getData();

        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_exclude'] = 'Y';
        $params['!=']['rc_endtype'] = 'ING';
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

        $extra = array(
            'fields' => array('rc_id', 'rc_ticker', 'tkr_name', 'rc_title', 'rc_subtitle','rc_recom_price','rc_giveup_price','rc_goal_price', 'rc_display_date', 'rc_endtype', 'rc_portfolio', 'rc_mid_price', 'rc_exclude', 'rc_enddate', 'rc_adjust', 'rc_adjust_price'),
            'order_by' => 'rc_display_date DESC',
        );

        $exclude_all = $this->recommend_tb_model->getList($params, $extra)->getData();
/* 21.10.15 주석처리
  		$dup_check = array();
  		$exclude_list = array();
		foreach($exclude_all as $key=>$val) {
			if(!in_array($val['rc_ticker'], $dup_check)) {
				$dup_check[] = $val['rc_ticker'];
				$exclude_list[] = $val;
			}
		}
*/
		$rc_list = array();
		$rc_list['portfolio'] = $portfolio_list;
		$rc_list['exclude'] = $exclude_all;

        if(is_array($rc_list) && sizeof($rc_list) >0) {
            $data = json_encode($rc_list);
            $portfolio_file = 'portfolio.json';
            $file_path = WEBDATA.'/json/'.$portfolio_file;
            $file_backpath = $file_path . '.bak';

            touch($file_backpath);
            file_put_contents($file_backpath, $data);
            rename($file_backpath, $file_path);
        }

		$this->makeRecommend();
		$this->makeRcNoti();
	}

	function makeRcNoti() {
		//2021.08.09 추천알림 추가
		$this->load->model(DBNAME.'/notify_tb_model');

		$params = array();
        //$params['=']['nt_table'] = 'recommend_tb';
        $params['=']['nt_table'] = 'recommend_tb';
        $params['<=']['nt_display_date'] = date('Y-m-d H:i:s');
		$params['raw'] = 'nt_title not like \'%손절가%\' && (nt_view_cs = \'Y\' || nt_view_wt = \'Y\' || nt_view_kw = \'Y\' || nt_view_st = \'Y\' || nt_view_pe = \'Y\')';

		$extra = array(
			'fields' => array('nt_title', 'nt_ticker', 'nt_ticker_name', 'nt_pk', 'nt_url', 'nt_view_cs', 'nt_view_wt', 'nt_view_kw', 'nt_view_st', 'nt_view_pe', 'nt_display_date'),
			'order_by' => 'nt_display_date DESC',
			'limit' => '10',
			'slavedb' => true
		);

        $noti_list = $this->notify_tb_model->getList($params, $extra)->getData();

		/*
  		$dup_check = array();
  		$dup_list = array();
		foreach($noti_list as $key=>$val) {
			if(!in_array($val['nt_ticker'], $dup_check)) {
				$dup_check[] = $val['nt_ticker'];
				$dup_list[] = $val;
			}
		}
		$noti_list = $dup_list;
		*/

		if(is_array($noti_list) && sizeof($noti_list)>0) {
			$noti_list = json_encode($noti_list);
            $noti_file = 'main_noti.json';
			if(IS_REAL_SERVER) {
				$file_path = WEBDATA.'/json/'.$noti_file;
			}
			else {
				$file_path = '/home/hoon/html/wallstreet/webdata/json/'.$noti_file;
			}
            $file_backpath = $file_path . '.bak';

            touch($file_backpath);
            file_put_contents($file_backpath, $noti_list);
			rename($file_backpath, $file_path);
        }
	}

	function makeRecommend() {
		//2021.08.09 추천알림 추가
		$this->load->model(DBNAME.'/recommend_tb_model');

		//2021.08.09 최신종목추천 3건
        $params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['=']['rc_endtype'] = 'ING';
        $params['!=']['rc_view_srv'] = 'W';
        //$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $extra = array(
			'fields' => array('rc_id', 'rc_ticker', 'rc_recom_price', 'rc_goal_price', 'rc_adjust', 'rc_adjust_price', 'rc_display_date'),
            'order_by' => 'rc_display_date DESC',
			'limit' => '6',
			'slavedb' => true
        );

		$recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
  		
		$dup_check = array();
  		$dup_list = array();
		foreach($recommend_list as $key=>$val) {
			if(!in_array($val['rc_ticker'], $dup_check)) {
				$dup_check[] = $val['rc_ticker'];
				$dup_list[] = $val;
			}
		}
		$recommend_list = $dup_list;

		if(is_array($recommend_list) && sizeof($recommend_list)>0) {
			$recommend_list = json_encode($recommend_list);
            $recommend_file = 'main_recommend.json';
			if(IS_REAL_SERVER) {
				$file_path = WEBDATA.'/json/'.$recommend_file;
			}
			else {
				$file_path = '/home/hoon/html/wallstreet/webdata/json/'.$recommend_file;
			}
            $file_backpath = $file_path . '.bak';

            touch($file_backpath);
            file_put_contents($file_backpath, $recommend_list);
			rename($file_backpath, $file_path);
        }	
	}

	function push_contents() {
		return;
        if( ! $this->input->is_cli_request()) {
            die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] push_contents start!!\n";

		//탐구생활 보내기
        $this->load->model(DBNAME.'/explore_tb_model');
        $explore_list = array();
		$params = array();
        $params['=']['e_is_active'] = 'YES';
        $params['!=']['e_view_srv'] = 'W';
		$params['=']['e_push'] = 'N';
        $params['<=']['e_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
        //$params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $explore_list = $this->explore_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($explore_list); exit;

		$title = '미국주식 탐구생활';
		$template = '16';

		foreach($explore_list as $key => $val) {
			$contents = $val['e_title']."\n".HOME_URL.'/stock/research_view/'.$val['e_id'];

			if($val['e_id']!='') {
				$data=array();
				$data['title'] = $title;
				$data['template'] = $template;
				$data['contents'] = $contents;

				$this->_pay_user_push($data);

				$update_params = array();
				$update_params['e_push'] = 'Y';
				$this->explore_tb_model->doUpdate($val['e_id'], $update_params);
			}
		}

		/*
		//종목분석 보내기
        $this->load->model(DBNAME.'/analysis_tb_model');

        $analysis_list = array();
		$params = array();
        $params['=']['an_is_active'] = 'YES';
        $params['!=']['an_view_srv'] = 'W';
		$params['=']['an_push'] = 'N';
        $params['<=']['an_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['an_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
        $params['join']['ticker_tb'] = 'an_ticker = tkr_ticker';

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $analysis_list = $this->analysis_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($analysis_list); exit;

		$title = '종목분석';
		$template = '16';

		foreach($analysis_list as $key => $val) {
			//#{신규 종목분석이 등록되었습니다. - 한글종목명(티커)}
			$contents = '신규 종목분석이 등록되었습니다. - '.$val['tkr_name'].'('.$val['an_ticker'].')'."\n".HOME_URL.'/stock/analysis_view/'.$val['an_id'].'?type=at';
			if($val['an_id'] != '') {
				$data=array();
				$data['title'] = $title;
				$data['template'] = $template;
				$data['contents'] = $contents;

				$this->_pay_user_push($data);

				$update_params = array();
				$update_params['an_push'] = 'Y';
				$this->analysis_tb_model->doUpdate($val['an_id'], $update_params);
			}
		}
1. 종목추천
게시물 표출 - YES, 추천결과 - 진행중, 표출서비스 - 초이스, 표출일 - 현재시간 보다 작을 경우, 포트폴리오 - NO, 푸시 횟수 - 1

2. 종목추천&포트편입(추천 포트폴리오)
게시물 표출 - YES, 추천결과 - 진행중, 표출서비스 - 초이스, 표출일 - 현재시간 보다 작을 경우, 포트폴리오 - YES, 푸시 횟수 - 1

2. 업데이트 리포트(추천 포트폴리오)
게시물 표출 - YES, 추천결과 - 진행중, 표출서비스 - 초이스, 표출일 - 현재시간 보다 작을 경우, 포트폴리오 - YES
		*/


		//종목추천 보내기
        $this->load->model(DBNAME.'/recommend_tb_model');

        $recommend_list = array();
		$params = array();
        $params['=']['rc_is_active'] = 'YES';
        $params['in']['rc_endtype'] = array('ING', 'SUCCESS');
		$params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_push'] = 'N';
        $params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        $params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($recommend_list); exit;
		print_r($recommend_list); echo "\n";

		$title = '종목추천';
		$template = '16';

		foreach($recommend_list as $key => $val) {

			$rc_count = 0;
			//종목 업데이트 여부 확인
			$cnt_params = array();
			$cnt_params['=']['rc_is_active'] = 'YES';
			$cnt_params['in']['rc_endtype'] = array('ING', 'SUCCESS');
			$cnt_params['!=']['rc_view_srv'] = 'W';
	        $cnt_params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
			$cnt_params['!=']['rc_id'] = $val['rc_id'];
			$cnt_params['=']['rc_ticker'] = $val['rc_ticker'];
			$cnt_params['slavedb'] = TRUE;
			$rc_count = $this->recommend_tb_model->getCount($cnt_params)->getData();

			if($rc_count>0){
				$msg = '업데이트 리포트가 등록되었습니다.';
			}
			else {
				$msg = '신규 종목추천이 등록되었습니다.';
			}

			$contents = $msg.' - '.$val['tkr_name'].'('.$val['rc_ticker'].')'."\n".HOME_URL.'/stock/recommend_view/'.$val['rc_id'].'?type=at';
			if($val['rc_id'] != '') {
				$data=array();
				$data['title'] = $title;
				$data['template'] = $template;
				$data['contents'] = $contents;

				$this->_pay_user_push($data);

				$update_params = array();
				$update_params['rc_push'] = 'Y';
				$this->recommend_tb_model->doUpdate($val['rc_id'], $update_params);
			}
		}

		echo "\n".'['.date("Y-m-d H:i:s")."] push_contents end!!\n";
	}

/* 푸시테스트
	public function push_test_tkr() {

        if( ! $this->input->is_cli_request()) {
           die('cli only');
        }

		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		$this->load->model(DBNAME.'/myitem_tb_model');
		$this->load->model(DBNAME.'/control_tb_model');
		$this->load->model(DBNAME.'/freepay_tb_model');

		$params = array();
		$params['=']['m_paid'] = 'Y';
		$params['=']['m_push_ticker'] = 'Y';
		$params['!=']['m_phone'] = '';
		$params['=']['m_id'] = 'kakao_1342320378';
		//$params['in']['m_id'] = array('naver_96845941', 'naver_38742161', 'kakao_1342320378');

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $member_list = $this->member_tb_model->getList($params, $extra)->getData();

		foreach($member_list as $key => $val) {

			$pay_params = array();
			$pay_params['=']['p_user_id'] = $val['m_id'];
			$pay_params['=']['p_code'] = SRV_CODE;
			$pay_params['=']['p_status'] = 'P';
			$pay_params['>=']['p_end_date'] = date('Ymd');

			$pay_extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				'limit' => '1',
				'slavedb' => true
			);

			$pay_data = array();
			$pay_data = array_shift($this->pay_tb_model->getList($pay_params, $pay_extra)->getData());

			if(is_array($pay_data) && sizeof($pay_data)>0) {

				$myitem_params = array();
				$myitem_params['=']['mi_user_id'] = $val['m_id'];
				$myitem_params['=']['mi_like'] = 'Y';
				$myitem_params['join']['ticker_tb'] = 'mi_ticker = tkr_ticker';

				$myitem_extra = array(
					'fields' => '*',
					'slavedb' => true,
					'order_by' => 'mi_order DESC',
					'limit' => '2',
				);

				$myitem_list = $this->myitem_tb_model->getList($myitem_params, $myitem_extra)->getData();

				if(is_array($myitem_list) && sizeof($myitem_list) > 0) {
					$contents = '';
					foreach($myitem_list as $item_key => $item_val) {

						$recent_report_rates = $this->itoozaapi->getIncomeGrowthRate($item_val['tkr_ticker']);
						$sep_data = array_shift($this->itoozaapi->getSepData($item_val['tkr_ticker']));

						$contents .= '■ '.$item_val['tkr_name'].' | '.$item_val['tkr_ticker'];
						$contents .= "\n";

						if($item_val['tkr_rate']>0) {
							$trk_rate_sign = '▲';
						}
						else if($item_val['tkr_rate']==0) {
							$trk_rate_sign = '';
						}
						else {
							$trk_rate_sign = '▼';
						}

						$contents .= '전일종가 '.$item_val['tkr_close'].' ('.$trk_rate_sign.' '.abs($item_val['tkr_rate']).'%)';

						$recent_report = '';
						if($recent_report_rates['lastupdated'][$item_val['tkr_ticker']] == date('Y-m-d', strtotime('-2 days'))) {
							$recent_report = "\n".'실적발표 '.$recent_report_rates['rate'][$item_val['tkr_ticker']].'(전년비)';
						}
						$sep_dividends = '';
						if($sep_data['sep_date'] == date('Y-m-d', strtotime('-1 days')) && $sep_data['sep_dividends']>0) {
							$sep_dividends = '배당락반영 $'.rtrim($sep_data['sep_dividends'], 0);
						}

						if($recent_report != '') {
							$contents .= $recent_report;
						}

						if($sep_dividends != '') {
							if($recent_report != '') {
								$contents .= ' / '.$sep_dividends;
							}
							else {
								$contents .= "\n".$sep_dividends;
							}
						}

						$contents .= "\n\n";
					}

					//push 보내기(template - 17, 관심종목 알리미)
					$push_info = array();
					$push_info['template']= '19';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $val['m_phone'];
					$push_info['at_message']['replace_0'] = date('m').'월'.date('d').'일'; //날짜
					$push_info['at_message']['replace_1'] = $contents; //내용
					//$push_info['at_message']['replace_2'] = HOME_URL; //링크
					$push_info['count']= '2';

					$result = $this->send_push($push_info);
					// push 보내기
					echo $contents."\n";
					echo '<pre>'; print_r($result);
				}
			}
		}

		echo "\n".'['.date("Y-m-d H:i:s")."] push_ticker end!!\n";
	}
*/

	public function push_proc_test() {

        if(IS_REAL_SERVER) {
			return;
		}

		//동영상(2021.2.15추가)
        $this->load->model(DBNAME.'/vod_mjm_tb_model');

		$vm_list = array();
		$params = array();
		$params['=']['vm_is_active'] = 'YES';
		$params['=']['vm_view_srv'] = 'C';
		$params['=']['vm_id'] = '48';
		//$params['=']['vm_push'] = 'N';
		//$params['<=']['vm_display_date'] = date('Y-m-d H:i:s');
		//$params['>=']['vm_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$vm_list = $this->vod_mjm_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($vm_list); exit;

		$template = '28';
		$count = '2';
		foreach($vm_list as $key => $val) {

			if($val['vm_id']!='') {
				$data=array();
				$data['title'] = '[동영상] '.$val['vm_title'];
				$data['contents'] = $val['vm_title'];
				$data['template'] = $template;
				$data['count'] = $count;
				$data['url'] = 'https://www.choicestock.co.kr/stock/vod_view/'.$val['vm_id'].'?type=at';

				$this->_push_choice_test($data);

				$update_params = array();
				$update_params['vm_push'] = 'Y';
				$this->vod_mjm_tb_model->doUpdate($val['vm_id'], $update_params);
			}
		}

		/*
		//푸시전용
		$this->load->model(DBNAME.'/push_tb_model');
		$push_list = array();
		$params = array();
		$params['=']['pu_is_push'] = 'Y';
		//$params['=']['pu_push'] = 'N';
		$params['=']['pu_id'] = '20';
		//$params['<=']['pu_display_date'] = date('Y-m-d H:i:s');
		//$params['>=']['pu_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$push_list = $this->push_tb_model->getList($params, $extra)->getData();

		echo '<pre>'; print_r($push_list); //exit;

		foreach($push_list as $key => $val) {
			if($val['pu_id']!='') {

				//if($val['pu_all'] == 'Y' || $val['pu_kiwoom'] == 'Y') {
				//	$this->send_direct($val);
				//}

				//if($val['pu_all'] == 'Y' || $val['pu_choice'] == 'Y') {

					$template = '29';
					$count = '2';

					$data=array();
					$data['title'] = $val['pu_title'];
					$data['contents'] = $val['pu_content'];
					$data['template'] = $template;
					$data['count'] = $count;

					//초이스스탁 회원
					$this->_push_choice_test($data);
				//}

				//$update_params = array();
				//$update_params['pu_push'] = 'Y';
				//$this->push_tb_model->doUpdate($val['pu_id'], $update_params);
			}
		}
		*/

		/*
		//신규추천
        $this->load->model(DBNAME.'/recommend_tb_model');

        $recommend_list = array();
		$params = array();
        $params['=']['rc_is_active'] = 'YES';
		$params['=']['rc_endtype'] = 'ING';
		$params['!=']['rc_view_srv'] = 'W';
		$params['=']['rc_push'] = 'N';
		$params['=']['rc_id'] = '2081';
        //$params['<=']['rc_display_date'] = date('Y-m-d H:i:s');
        //$params['>=']['rc_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
        $params['join']['ticker_tb'] = 'rc_ticker = tkr_ticker';

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

        $recommend_list = $this->recommend_tb_model->getList($params, $extra)->getData();
		echo '<pre>'; print_r($recommend_list); exit;

		$template = '20';
		$count = '5';

		foreach($recommend_list as $key => $val) {

			if($val['rc_id'] != '') {
				$data=array();
				$data['title'] = '신규 종목 추천 - '.$val['tkr_name'].'('.$val['rc_ticker'].')';
				$data['rc_ticker'] = $val['rc_ticker'];
				$data['rc_ticker_name'] = $val['tkr_name'];
				$data['rc_recom_price'] = $val['rc_recom_price'].'달러';
				$data['rc_goal_price'] = $val['rc_goal_price'].'달러';
				$data['rc_giveup_price'] = $val['rc_giveup_price'].'달러';
				$data['template'] = $template;
				$data['count'] = $count;
				$data['url'] = 'https://paxnet.choicestock.co.kr/px_stock/recommend_view/'.$val['rc_id'].'?type=at';

				//$this->_push_testpartner($data);
			}
		}
		*/

		/*
		//탐구생활
		$this->load->model(DBNAME.'/explore_tb_model');
		$explore_list = array();
		$params = array();
		$params['=']['e_is_active'] = 'YES';
		$params['!=']['e_view_srv'] = 'W';
		//$params['=']['e_push'] = 'N';
		//$params['<=']['e_display_date'] = date('Y-m-d H:i:s');
		//$params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
		$params['=']['e_id'] = '119';
		//test $params['>=']['e_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$explore_list = $this->explore_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($explore_list); exit;

		$template = '28';
		$count = '2';
		foreach($explore_list as $key => $val) {

			if($val['e_id']!='') {
				$data=array();
				$data['title'] = '[탐구생활] '.$val['e_title'];
				$data['contents'] = $val['e_title'];
				$data['template'] = $template;
				$data['count'] = $count;
				$data['url'] = 'https://paxnet.choicestock.co.kr/px_stock/research_view/'.$val['e_id'].'?type=at';

				//$data[X1.'_url'] = 'http://toogo.kr/mobile/foreign.tg?action=datahero&link=/'.X1.'_stock/research_view/'.$val['e_id'];
				$this->_push_testpartner($data);
			}
		}
		*/

		/*
		//모닝브리핑
		$this->load->model(DBNAME.'/morning_tb_model');
		$morning_list = array();
		$params = array();
		$params['=']['mo_is_active'] = 'Y';
		$params['=']['mo_id'] = '52';
		//$params['=']['mo_push'] = 'N';
		$params['<=']['mo_display_date'] = date('Y-m-d H:i:s');
		//$params['>=']['mo_display_date'] = date('Y-m-d H:i:s', strtotime('-30 minutes'));
		//$test params['>=']['mo_display_date'] = date('Y-m-d H:i:s', strtotime('-1 days'));

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$morning_list = $this->morning_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($morning_list); exit;

		$template = '27';
		$count = '3';

		foreach($morning_list as $key => $val) {

			if($val['mo_id']!='') {
				$data=array();
				$data['title'] = $val['mo_title'];
				$data['mo_date'] = date('m월 d일');
				//$data['mo_contents'] = $val['mo_contents'];
				$data['mo_contents'] = iconv_substr($val['mo_contents'], 0, 300, 'utf-8')."\n\n".'...(중략)'."\n"; //본문
				$data['template'] = $template;
				$data['count'] = $count;
				$data['url'] = '▶ 모닝브리핑 전문 보기'."\n".' https://www.choicestock.co.kr/stock/morning_view/'.$val['mo_id'].'?type=at';

				$this->_push_choice_test($data);

				$this->_push_partner_test($data);
			}
		}
		*/
	}

	private function _push_partner_test($data=array()) {

        if( ! $this->input->is_cli_request()) {
            //die('cli only');
        }
		//echo '<pre>'; print_r($data['url']); exit;

		if(sizeof($data)>0) {

			$push_info = array();
			$push_info['template']= $data['template'];

			if($data['template']=='28') { //탐구생활
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['contents']; //내용
				$push_info['replace_1'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='20') { //종목추천 신규
				$push_info['title'] =  $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='21' || $data['template']=='22') { //포트 편입 신규, 포트 업데이트
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_goal_price'];   //목표가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate'];  //목표수익률
				$push_info['replace_5'] = $data[X1.'_url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='23') { //포트 목표가 조정
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_adjust'];		//목표가 상향/하향
				$push_info['replace_1'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_2'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_3'] = $data['rc_close_price'];  //현재가 777.00달러
				$push_info['replace_4'] = $data['rc_goal_price'];	//기존목표가 777.00달러
				$push_info['replace_5'] = $data['rc_adjust_price']; //변경목표가 777.00달러
				$push_info['replace_6'] = $data['rc_profit_rate'];  //목표수익률
				$push_info['replace_7'] = $data[X1.'_url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='24') { //포트 목표가 달성
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price']; //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_close_price']; //현재가 777.00달러
				$push_info['replace_3'] = $data['rc_goal_price'];  //목표가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate']; //수익률
				$push_info['replace_5'] = $data[X1.'_url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='25') { //포트 손절가 도달
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_close_price'];  //현재가 777.00달러
				$push_info['replace_3'] = $data['rc_giveup_price']; //손절가 777.00달러
				$push_info['replace_4'] = $data['rc_profit_rate'];  //수익률
				$push_info['replace_5'] = $data[X1.'_url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='26') { //포트 중간매도
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['rc_ticker_name'].'('.$data['rc_ticker'].')';  //한글종목명(티커)
				$push_info['replace_1'] = $data['rc_recom_price'];  //추천가 777.00달러
				$push_info['replace_2'] = $data['rc_mid_price'];	//매도가 777.00달러
				$push_info['replace_3'] = $data['rc_profit_rate'];  //수익률
				$push_info['replace_4'] = $data[X1.'_url']; //링크
				$push_info['count']= $data['count'];
			}
			else if($data['template']=='27') { //모닝브리핑
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['mo_date'];	  //날짜
				$push_info['replace_1'] = $data['mo_contents']; //본문
				$push_info['replace_2'] = ''; //링크
				$push_info['count']= $data['count'];
			}
			else {
				$push_info['title'] = $data['title']; //제목
				$push_info['replace_0'] = $data['contents']; //내용
				$push_info['replace_1'] = $data['url']; //링크
				$push_info['count']= $data['count'];
			}

			//echo '<pre>'; print_r($push_info); exit;
			$result = $this->send_push_partner_test($push_info);
			//$result = $this->test_push_partner($push_info);
			//echo '<pre>'; print_r($push_info);
		}
	}

	private function _push_choice_test($data=array()) {

		//유료회원 체크 ( m_push_service: Y)
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		if(is_array($data) && sizeof($data)>0) {
			$params = array();
			$params['=']['m_paid'] = 'Y';
			$params['=']['m_push_service'] = 'Y';
			$params['!=']['m_phone'] = '';
			$params['=']['m_id'] = 'kakao_1342320378';
			//$params['in']['m_id'] = array('naver_96845941', 'naver_38742161', 'kakao_1342320378');

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$member_list = $this->member_tb_model->getList($params, $extra)->getData();
			//echo '<pre>'; print_r($member_list); exit;
			foreach($member_list as $key => $val) {

				$pay_params = array();
				$pay_params['=']['p_user_id'] = $val['m_id'];
				$pay_params['=']['p_code'] = SRV_CODE;
				$pay_params['=']['p_status'] = 'P';
				$pay_params['>=']['p_end_date'] = date('Ymd');

				$pay_extra = array(
					'fields' => '*',
					'order_by' => 'p_end_date DESC',
					'limit' => 1,
					'slavedb' => true
				);

				$pay_data = array();
				$pay_data = array_shift($this->pay_tb_model->getList($pay_params, $pay_extra)->getData());

				if(is_array($pay_data) && sizeof($pay_data)>0 && is_array($data) && sizeof($data)>0) {
					$push_info = array();
					$push_info['template']= $data['template'];
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $val['m_phone'];


					if($data['template']=='27') { //모닝브리핑
						//$push_info['push_type']= 'lms';
						$push_info['title']= $data['title'];
						$push_info['at_message']['replace_0'] = $data['mo_date'];	  //날짜
						$push_info['at_message']['replace_1'] = $data['mo_contents']; //본문
						$push_info['at_message']['replace_2'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='28') { //탐구생활
						$push_info['at_message']['replace_0'] = $data['contents']; //내용
						$push_info['at_message']['replace_1'] = $data['url']; //링크
						$push_info['count']= $data['count'];
					}
					else if($data['template']=='29') { //일반PUSH(2021.2.15 추가)
						$push_info['push_type']= 'lms';
						$push_info['title']= $data['title'];
						$push_info['at_message']['replace_0'] = $data['title']; //제목
						$push_info['at_message']['replace_1'] = $data['contents']; //내용
						$push_info['count']= $data['count'];
					}
					//echo '<pre>============='; print_r($push_info); exit;

					$result = $this->send_push($push_info);
					echo '<pre>'; print_r($result); //exit;
				}
			}
		}
	}

	private function _get_ticker_korname($ticker) {
		if(isset($ticker) && $ticker !='') {
			$this->load->model(DBNAME.'/ticker_tb_model');
			$tkr_params = array();
			$tkr_params['=']['tkr_ticker'] = strtoupper($ticker);
			$tkr_extra = array(
				'order_by' => 'tkr_lastpricedate desc',
				'fields' => 'tkr_name',
				'slavedb' => true,
				'limit' => '1'
			);

			$tkr_data = array_shift($this->ticker_tb_model->getList($params, $extra)->getData());
			return $tkr_data['tkr_name'];
		}
	}

	function make_coupon_no($cnt=1){
        $this->loginCheck();

		$user_id = $this->session->userdata('user_id');

		if($user_id != 'naver_30305452' && $user_id != 'kakao_1342320378') {
			$this->common->locationhref('/');
			exit;
		}

		$cp_precode = 'REV';		//쿠폰코드앞자리 구분값으로 사용
		$cp_srv_code = SRV_CODE;	//서비스코드
		$cp_name = '레뷰인플루언서'; //쿠폰명
		$cp_pay = '2'; //결제구분(1:한달자동, 2:3달기간, 3:6달기간)
		$cp_user_id = $user_id;	//쿠폰등록아이디
		$cp_reg_date = date('Y-m-d H:i:s');	//쿠폰등록일
		$cp_start_date = date('Y-m-d H:i:s');	//쿠폰시작일
		$cp_end_date = date('Y-m-d H:i:s', strtotime($cp_start_date)+86400*31);	//쿠폰종료일
		$cp_dcrate = '100';	//쿠폰할인율
		$cp_number = '1';	//쿠폰개수
		$cp_status = 'Y';	//쿠폰상태(Y:사용, N:미사용)
		$cp_type = 'G';			//쿠폰형태(A:자동, G:기간)
		$cp_use_count = '0';	//쿠폰사용량
		$cp_sum = '0';			//쿠폰총결제금액
		$cp_single = 'Y';		//싱글쿠폰(Y/N)
		$cp_single_date = '';	//싱글쿠폰 사용일
		if($cp_pay=='1') $cp_price = '33000';	//쿠폰가격
		else if($cp_pay=='2') $cp_price = '148500';
		else $cp_price = '264000';
		$cp_memo = '';	//쿠폰메모

		for($i=0;$i<$cnt;$i++) {
			//$cp_code = 'C'.$cp_pay.$this->randstring(8);
			$cp_code = $cp_precode.$cp_pay.strtoupper($this->randstring(6));

			echo "INSERT INTO coupon_tb VALUES ('".$cp_code."','".$cp_srv_code."','".$cp_name."','".$cp_pay."','".$cp_user_id."','".$cp_reg_date."','".$cp_start_date."','".$cp_end_date."','".$cp_dcrate."','".$cp_number."','".$cp_status."','".$cp_type."','".$cp_use_count."','".$cp_sum."','".$cp_single."','".$cp_single_date."','".$cp_price."','".$cp_memo."');<br>";
			//echo "INSERT INTO coupon_tb VALUES ('".$this->randstring(10)."'".."','프로모션기간3개월','2','naver_30305452','2020-05-25 21:22:01','2020-05-26 00:00:01','2020-06-30 23:59:59',100.00,1,'Y','G',0,0,'Y',NULL,132000,NULL);

		}
	}

	//가상계좌 Noti처리
	public function vBankNoti() {
		//https://capdev.choicestock.co.kr/payment/vBankNoti
		//'**********************************************************************************
		//' 구매자가 입금하면 결제데이터 통보를 수신하여 DB 처리 하는 부분 입니다.
		//' 수신되는 필드에 대한 DB 작업을 수행하십시오.
		//' 수신필드 자세한 내용은 메뉴얼 참조
		//'**********************************************************************************

		@extract($_GET);
		@extract($_POST);
		@extract($_SERVER);

		$PayMethod      = $PayMethod;           //지불수단
		$M_ID           = $MID;                 //상점ID
		$MallUserID     = $MallUserID;          //회원사 ID
		$Amt            = $Amt;                 //금액
		$name           = $name;                //구매자명
		$GoodsName      = $GoodsName;           //상품명
		$TID            = $TID;                 //거래번호
		$MOID           = $MOID;                //주문번호
		$AuthDate       = $AuthDate;            //입금일시 (yyMMddHHmmss)
		$ResultCode     = $ResultCode;          //결과코드 ('4110' 경우 입금통보)
		$ResultMsg      = $ResultMsg;           //결과메시지
		$VbankNum       = $VbankNum;            //가상계좌번호
		$FnCd           = $FnCd;                //가상계좌 은행코드
		$VbankName      = $VbankName;           //가상계좌 은행명
		$VbankInputName = $VbankInputName;      //입금자 명
		$CancelDate     = $CancelDate;          //취소일시

		//가상계좌채번시 현금영수증 자동발급신청이 되었을경우 전달되며
		//RcptTID 에 값이 있는경우만 발급처리 됨
		$RcptTID        = $RcptTID;             //현금영수증 거래번호
		$RcptType       = $RcptType;            //현금 영수증 구분(0:미발행, 1:소득공제용, 2:지출증빙용)
		$RcptAuthCode   = $RcptAuthCode;        //현금영수증 승인번호

		//**********************************************************************************
		//이부분에 로그파일 경로를 수정해주세요.
		$logfile = fopen(LOG_PATH."/nice_vacct_noti_result.log", "a+" );
		//로그는 문제발생시 오류 추적의 중요데이터 이므로 반드시 적용해주시기 바랍니다.
		//**********************************************************************************

		fwrite( $logfile,"************************************************\r\n");
		fwrite( $logfile,"PayMethod     : ".$PayMethod."\r\n");
		fwrite( $logfile,"MID           : ".$MID."\r\n");
		fwrite( $logfile,"MallUserID    : ".$MallUserID."\r\n");
		fwrite( $logfile,"Amt           : ".$Amt."\r\n");
		fwrite( $logfile,"name          : ".$name."\r\n");
		fwrite( $logfile,"GoodsName     : ".$GoodsName."\r\n");
		fwrite( $logfile,"TID           : ".$TID."\r\n");
		fwrite( $logfile,"MOID          : ".$MOID."\r\n");
		fwrite( $logfile,"AuthDate      : ".$AuthDate."\r\n");
		fwrite( $logfile,"ResultCode    : ".$ResultCode."\r\n");
		fwrite( $logfile,"ResultMsg     : ".$ResultMsg."\r\n");
		fwrite( $logfile,"VbankNum      : ".$VbankNum."\r\n");
		fwrite( $logfile,"FnCd          : ".$FnCd."\r\n");
		fwrite( $logfile,"VbankName     : ".$VbankName."\r\n");
		fwrite( $logfile,"VbankInputName : ".$VbankInputName."\r\n");
		fwrite( $logfile,"RcptTID       : ".$RcptTID."\r\n");
		fwrite( $logfile,"RcptType      : ".$RcptType."\r\n");
		fwrite( $logfile,"RcptAuthCode  : ".$RcptAuthCode."\r\n");
		fwrite( $logfile,"CancelDate    : ".$CancelDate."\r\n");
		fwrite( $logfile,"************************************************\r\n");

		fclose( $logfile );

		//가맹점 DB처리
		/*
			PG=NICE|
			PayMethod=VBANK|
			MID=nicepay00m|
			MallUserID=|
			Amt=1000|
			GoodsName=나이스상품|
			MOID=test7492739|
			TID=nicepay00m03011708211953289333|
			AuthDate=160910071415|
			AuthCode=|FnCd=088|
			FnName=국민은행|
			StateCd=0|
			name=홍길동|
			BuyerEmail=it@nicepay.co.kr|
			BuyerAuthNum=|
			ReceitType=|
			RcptType=|
			RcptTID=|
			RcptAuthCode=|
			VbankName=국민은행|
			VbankNum=2220652830110|
			VbankInputName=홍길동|
			CartCnt=2|
			ResultCode=4110|
			ResultMsg=승인|
			NICE=PG

		$PayMethod      = $PayMethod;           //지불수단
		$M_ID           = $MID;                 //상점ID
		$MallUserID     = $MallUserID;          //회원사 ID
		$Amt            = $Amt;                 //금액
		$name           = $name;                //구매자명
		$GoodsName      = $GoodsName;           //상품명
		$TID            = $TID;                 //거래번호
		$MOID           = $MOID;                //주문번호
		$AuthDate       = $AuthDate;            //입금일시 (yyMMddHHmmss)
		$ResultCode     = $ResultCode;          //결과코드 ('4110' 경우 입금통보)
		$ResultMsg      = $ResultMsg;           //결과메시지
		$VbankNum       = $VbankNum;            //가상계좌번호
		$FnCd           = $FnCd;                //가상계좌 은행코드
		$VbankName      = $VbankName;           //가상계좌 은행명
		$VbankInputName = $VbankInputName;      //입금자 명
		$CancelDate     = $CancelDate;          //취소일시

		//가상계좌채번시 현금영수증 자동발급신청이 되었을경우 전달되며
		//RcptTID 에 값이 있는경우만 발급처리 됨
		$RcptTID        = $RcptTID;             //현금영수증 거래번호
		$RcptType       = $RcptType;            //현금 영수증 구분(0:미발행, 1:소득공제용, 2:지출증빙용)
		$RcptAuthCode   = $RcptAuthCode;        //현금영수증 승인번호

		*/

		$is_ok = FALSE;
		if($ResultCode == '4110') {

			$srv_check = substr($MOID, 0, 1);
			if($srv_check == 'S' || $srv_check == 'V') {
				//슈스톡, 밸류라인
				$data = Array(
					'PayMethod' => $PayMethod,
					'M_ID' => $M_ID,
					'MallUserID' => $MallUserID,
					'Amt' => $Amt,
					'name' => $name,
					'GoodsName' => $GoodsName,
					'TID' => $TID,
					'MOID' => $MOID,
					'AuthDate' => $AuthDate,
					'ResultCode' => $ResultCode,
					'ResultMsg' => $ResultMsg,
					'VbankNum' => $VbankNum,
					'FnCd' => $FnCd,
					'VbankName' => $VbankName,
					'VbankInputName' => $VbankInputName,
					'CancelDate' => $CancelDate,
					'RcptTID' => $RcptTID,
					'RcptType' => $RcptType,
					'RcptAuthCode' => $RcptAuthCode,
					//'CharSet' => 'utf-8'
				);		

				if($srv_check == 'S') {
					$vbank_url = 'https://super.choicestock.co.kr/payment/vbank_process';
				}
				else {
					$vbank_url = 'https://value.choicestock.co.kr/payment/vbank_process';
				}

				$response = $this->_reqPost($data, $vbank_url); 	//승인 호출
	
				$is_ok = TRUE;
			}
			else {
				$this->load->model(DBNAME.'/pay_tb_model');
				$this->load->model(DBNAME.'/member_tb_model');

				$params = array();
				$params['=']['p_code'] = SRV_CODE;			//서비스코드
				$params['=']['p_method'] = $PayMethod;		//결제수단(가상계좌)
				$params['=']['p_status'] = 'W';				//입금대기
				$params['=']['p_tid'] = $TID;				//거래번호
				$params['=']['p_moid'] = $MOID;				//주문번호
				$params['=']['p_price'] = $Amt;				//입금금액
				//$params['=']['p_user_name'] = $name;		//구매자명

				$extra = array(
					'fields' => '*',
					'slavedb' => true
				);

				$vbank_data = array();
				$vbank_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

				if( isset($vbank_data['p_id']) && $vbank_data['p_id'] != '') {

					//기간결제 사용 유무 확인
					$params = array();
					$params['=']['p_user_id'] = $vbank_data['p_user_id'];
					$params['=']['p_code'] = SRV_CODE;
					$params['=']['p_type'] = 'G';
					$params['=']['p_status'] = 'P';
					$params['>=']['p_end_date'] = date('Ymd');

					$extra = array(
						'fields' => 'p_end_date',
						'order_by' => 'p_end_date DESC',
						'limit' => 1,
						//'slavedb' => true
					);

					$paylist_term = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

					if(isset($paylist_term['p_end_date']) && $paylist_term['p_end_date'] != '') {
						$term_end_date =  date('Ymd', strtotime($paylist_term['p_end_date'])+86400);
						$now_date = date('Ymd');
						$term_rest = (strtotime($term_end_date) - strtotime($now_date)) / 86400;
						$p_end_date = date('Ymd', time()+86400*($this->pay_info[$vbank_data['p_pay']]['period']+$this->pay_info[$vbank_data['p_pay']]['freeday']+$term_rest));
					}
					else {
						$p_end_date = date('Ymd', time()+86400*($this->pay_info[$vbank_data['p_pay']]['period']+$this->pay_info[$vbank_data['p_pay']]['freeday']));
					}

					$update_params = array(
						'p_status' => 'P',
						'p_vb_status' => 'Y',
						//'p_date' => date('Ymd'),
						'p_authdate' => date('Y-m-d H:i:s'),
						'p_start_date' => date('Ymd'),
						'p_end_date' => $p_end_date,
						'p_cr_type' => $RcptType,
						'p_cr_tid' => $RcptTID,
						'p_cr_authcode' => $RcptAuthCode,
					);

					$this->pay_tb_model->doUpdate($vbank_data['p_id'], $update_params);

					$update_params = array(
						'm_paid' => 'Y',
						'm_push_ticker' => 'Y',
						'm_push_service' => 'Y',
						//'m_push_date' => date('Y-m-d H:i:s'),
					);

					$this->member_tb_model->doUpdate($vbank_data['p_user_id'], $update_params);

					$member_params = array();
					$member_params['=']['m_id'] = $vbank_data['p_user_id'];

					$member_extra = array(
						'fields' => '*',
						'slavedb' => true
					);

					$member_info = array_shift($this->member_tb_model->getList($member_params, $member_extra)->getData());

					/* push 보내기(template - 2, 무통장입금) */
					$send_phone = $member_info['m_phone'];
					if($send_phone!='') {
						$push_info = array();
						$push_info['template']= '2';
						$push_info['push_type']= 'at';
						$push_info['from']= PUSH_FROM;
						$push_info['to']= $send_phone;
						$push_info['at_message']['replace_0'] = $member_info['m_name']; //이름
						$push_info['at_message']['replace_1'] = '초이스스탁US';			//서비스명
						$push_info['at_message']['replace_2'] = '프리미엄';				//프리미엄
						$push_info['at_message']['replace_3'] = $this->pay_info[$vbank_data['p_pay']]['month'].'개월';//개월수
						$push_info['at_message']['replace_4'] = number_format($vbank_data['p_price']);	//결제금액
						$push_info['at_message']['replace_5'] = '초이스스탁US';			//서비스명
						$push_info['count']= '6';

						$result = $this->send_push($push_info);
					}
					/* push 보내기 */


					/* push 보내기(template - 13, 결제안내(관리자용)) */
					$push_info = array();
					$push_info['template']= '13';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= ADMIN_PHONE;
					$push_info['at_message']['replace_0'] = date('Y-m-d H:i:s'); //결제일자
					$push_info['at_message']['replace_1'] = $member_info['m_name']; //결제자
					$push_info['at_message']['replace_2'] = '초이스스탁US';		//서비스명
					$push_info['at_message']['replace_3'] = '프리미엄';			//프리미엄
					$push_info['at_message']['replace_4'] = $this->pay_info[$vbank_data['p_pay']]['month'].'개월';//개월수
					$push_info['at_message']['replace_5'] = '무통장입금';				//결제수단
					$push_info['at_message']['replace_6'] = number_format($vbank_data['p_price']);	//결제금액
					$push_info['count']= '7';

					$result = $this->send_push($push_info);
					/* push 보내기 */

					$is_ok = TRUE;
				}
			}
		}

		//**************************************************************************************************
		//**************************************************************************************************
		//결제 데이터 통보 설정 > “OK” 체크박스에 체크한 경우" 만 처리 하시기 바랍니다.
		//**************************************************************************************************
		//TCP인 경우 OK 문자열 뒤에 라인피드 추가
		//위에서 상점 데이터베이스에 등록 성공유무에 따라서 성공시에는 "OK"를 NICEPAY로
		//리턴하셔야합니다. 아래 조건에 데이터베이스 성공시 받는 FLAG 변수를 넣으세요
		//(주의) OK를 리턴하지 않으시면 NICEPAY 서버는 "OK"를 수신할때까지 계속 재전송을 시도합니다
		//기타 다른 형태의 PRINT(out.print)는 하지 않으시기 바랍니다
		//if (데이터베이스 등록 성공 유무 조건변수 = true)
		//{
		//            echo "OK";                        // 절대로 지우지마세요
		//}
		//else
		//{
		//            echo "FAIL";                        // 절대로 지우지마세요
		//}
		//*************************************************************************************************
		//*************************************************************************************************

		if ($is_ok === TRUE)
		{
			echo "OK"; // 절대로 지우지마세요
		}
		else
		{
			echo "FAIL"; // 절대로 지우지마세요
		}
	}


	//가상계좌 입금취소 문자 발송
	public function vbank_cancel(){

        if( ! $this->input->is_cli_request()) {
           die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] vbank_cancel start!!\n";
		/*	/usr/local/bin/php /home/datahero/html/choicestock/index.php payment vbank_cancel  */
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
        $params['=']['p_status'] = 'W';
		$params['=']['p_method'] = 'VBANK';
        $params['=']['p_vb_status'] = 'N';
		$params['=']['p_vb_expdate'] = date('Ymd', time()-86400).'235959';
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			'slavedb' => true
		);

		$vank_list = array();
        $vank_list = $this->pay_tb_model->getList($params, $extra)->getData();

		echo '<pre>'; print_r($vank_list);

		if(sizeof($vank_list)>0) {

			foreach($vank_list as $key => $val) {

				/* push 보내기(template - 3, 무통장입금 취소) */
				$send_phone = $val['m_phone'];
				if($send_phone!='') {
					$push_info = array();
					$push_info['template']= '3';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = $val['m_name']; //이름
					$push_info['at_message']['replace_1'] = '초이스스탁US';	//서비스명
					$push_info['at_message']['replace_2'] = '프리미엄';	//프리미엄
					$push_info['at_message']['replace_3'] = $this->pay_info[$val['p_pay']]['month'].'개월';//개월수
					$push_info['at_message']['replace_4'] = number_format($val['p_price']);	//금액
					$push_info['count']= '5';

					$result = $this->send_push($push_info);
				}
				/* push 보내기 */

				/* p_pay update */
				$update_params = array(
					'p_status' => 'C',
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_vb_status' => 'C',
				);

				$this->pay_tb_model->doUpdate($val['p_id'], $update_params);
			}
		}

		//만료회원 문자발송(22.6.27추가)
		$this->pay_notice();

		echo "\n".'['.date("Y-m-d H:i:s")."] vbank_cancel end!!\n";
	}

	//이용기간 만료 안내 문자 발송
	public function pay_notice(){

        if( ! $this->input->is_cli_request()) {
           die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] pay_notice start!!\n";
		/*	/usr/local/bin/php /home/datahero/html/choicestock/index.php payment pay_notice  */
		/*
		[비즈뿌리오 등록 템플릿]
		30:이용기간 만료 3일전 안내 bizp_2022042810443814053080137 
		31:이용기간 만료 안내 bizp_2022042810370814053966133
		1. 이전 완료 회원 > 기간결제 회원 대상 - 3일전 안내/ 기간만료 안내
		2. 신규 기간결제 회원 대상 - 3일전 안내/ 기간만료 안내"
		select * from pay_tb a, member_tb b where a.p_user_id = b.m_id and a.p_code = 'CS01' and a.p_type = 'G' and a.p_method != 'COUPON' and a.p_status in ('P','E') and b.m_level != '9' and a.p_end_date > '20220624'
		*/
		$this->load->model(DBNAME.'/pay_tb_model');

		//만료3일전 
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
		$params['!=']['p_method'] = 'COUPON';
        $params['=']['p_status'] = 'P';
		$params['!=']['m_level'] = '9';
		$params['=']['p_end_date'] = date('Ymd', time()+86400*3);
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			'slavedb' => true
		);

		$list = array();
        $list = $this->pay_tb_model->getList($params, $extra)->getData();
		echo '<pre>만료3일전'."\n"; print_r($list);
		if(sizeof($list)>0) {

			foreach($list as $key => $val) {
				/* push 보내기(만료3일전) */ 
				$send_phone = $val['m_phone'];
				if($send_phone!='') {
					$push_info = array();
					$push_info['template']= '30';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = '초이스스탁US';	  //서비스명
					$push_info['at_message']['replace_1'] = $val['m_name'];	  //이름
					$push_info['count']= '2';
					$result = $this->send_push($push_info);
				}
				/* push 보내기 */
			}
		}

		//이용기간 만료 안내
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
		$params['!=']['p_method'] = 'COUPON';
        $params['in']['p_status'] = array('P', 'E');
		$params['!=']['m_level'] = '9';
		$params['=']['p_end_date'] = date('Ymd', time()-86400);
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			'slavedb' => true
		);

		$list = array();
        $list = $this->pay_tb_model->getList($params, $extra)->getData();
		echo '<pre>만료1일후'."\n"; print_r($list);
		if(sizeof($list)>0) {

			foreach($list as $key => $val) {
				/* push 보내기(이용기간 만료) */ 
				$send_phone = $val['m_phone'];
				if($send_phone!='') {
					$push_info = array();
					$push_info['template']= '31';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = '초이스스탁US';	  //서비스명
					$push_info['at_message']['replace_1'] = $val['m_name'];	  //이름
					$push_info['at_message']['replace_2'] = 'https://www.choicestock.co.kr/payment/choice';	  //확인URL
					$push_info['count']= '3';
					$result = $this->send_push($push_info);
				}
				/* push 보내기 */
			}
		}

		echo "\n".'['.date("Y-m-d H:i:s")."] pay_notice end!!\n";
	}

	//이용기간 만료 안내 문자 발송
	public function pay_notice_test(){

        if( ! $this->input->is_cli_request()) {
           //die('cli only');
        }
        echo "\n".'['.date("Y-m-d H:i:s")."] pay_notice start!!\n";
		/*	/usr/local/bin/php /home/datahero/html/choicestock/index.php payment pay_notice  */
		/*
		[비즈뿌리오 등록 템플릿]
		30:이용기간 만료 3일전 안내 bizp_2022042810443814053080137 
		31:이용기간 만료 안내 bizp_2022042810370814053966133
		1. 이전 완료 회원 > 기간결제 회원 대상 - 3일전 안내/ 기간만료 안내
		2. 신규 기간결제 회원 대상 - 3일전 안내/ 기간만료 안내"
		select * from pay_tb a, member_tb b where a.p_user_id = b.m_id and a.p_code = 'CS01' and a.p_type = 'G' and a.p_method != 'COUPON' and a.p_status in ('P','E') and b.m_level != '9' and a.p_end_date > '20220624'
		*/
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_type'] = 'G';
		$params['!=']['p_method'] = 'COUPON';
        $params['in']['p_status'] = array('P', 'E');
		//$params['!=']['m_level'] = '9';
		$params['=']['p_end_date'] = date('Ymd', time()+86400*3);
		$params['=']['p_end_date_'] = date('Ymd', time()-86400);
		$params['=']['p_user_id_'] = 'kakao_1342320378';
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			'slavedb' => true
		);

		$list = array();
        $list = $this->pay_tb_model->getList($params, $extra)->getData();

		//echo '<pre>'; print_r($list); exit;

		if(sizeof($list)>0) {

			foreach($list as $key => $val) {
				/* push 보내기(만료3일전) */ 
				$send_phone = $val['m_phone'];
				if($send_phone!='') {
					$push_info = array();
					$push_info['template']= '30';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = '초이스스탁US';	  //서비스명
					$push_info['at_message']['replace_1'] = $val['m_name'];	  //이름
					//$push_info['at_message']['replace_2'] = 'https://www.choicestock.co.kr/payment/choice';	  //확인URL
					$push_info['count']= '2';
					$result = $this->send_push($push_info);
				}
				/* push 보내기 */

				/* push 보내기(이용기간 만료 안내) 
				$send_phone = $val['m_phone'];
				if($send_phone!='') {
					$push_info = array();
					$push_info['template']= '31';
					$push_info['push_type']= 'at';
					$push_info['from']= PUSH_FROM;
					$push_info['to']= $send_phone;
					$push_info['at_message']['replace_0'] = '초이스스탁US';	  //서비스명
					$push_info['at_message']['replace_1'] = $val['m_name'];	  //이름
					$push_info['at_message']['replace_2'] = 'https://www.choicestock.co.kr/payment/choice';	  //확인URL
					$push_info['count']= '3';
					$result = $this->send_push($push_info);
				}
				 push 보내기 */
			}
		}
		echo "\n".'['.date("Y-m-d H:i:s")."] pay_notice end!!\n";
	}
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */