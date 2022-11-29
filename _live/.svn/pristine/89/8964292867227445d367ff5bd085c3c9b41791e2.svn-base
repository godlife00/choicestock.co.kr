<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

require_once dirname(__FILE__).'/base_mobile.php';
class Member extends BaseMobile_Controller {

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

	private function _withdrawal_check($user_id) {
		if(!isset($user_id) && $user_id == '') {
			$this->common->alert('회원 인증에 실패했습니다.');
			$this->common->locationhref('/');
			exit;
		}
		else {
			$this->load->model(DBNAME.'/withdrawal_tb_model');
			
			$params = array();
			$params['=']['wd_user_id'] = $user_id;
			$params['=']['wd_code'] = SRV_CODE;
			$params['<']['wd_date'] = date('Y-m-d H:i:s');
			$params['>']['wd_end_date'] = date('Ymd');

			$extra = array(
				'fields' => '*',
				'order_by' => 'wd_date DESC',
				'limit' => 1,
				'slavedb' => true
			);
			$wd_data = array();
			$wd_data = array_shift($this->withdrawal_tb_model->getList($params, $extra)->getData());

			if(is_array($wd_data) && sizeof($wd_data)>0) {
				$this->session->sess_destroy();
				return TRUE;
			}
			else {
				return FALSE;
			}
		}
	}

	private function _paycheck($user_id) {

		//유료회원 체크
		// pay_tb 확인(서비스코드, 결제상태(P), 서비스 종료일 체크

		if(!isset($user_id) && $user_id == '') {
			$this->common->alert('회원 정보가 없습니다.');
			$this->common->locationhref('/');
			exit;
		}

		$this->load->model(DBNAME.'/pay_tb_model');
		
		$params = array();
		$params['=']['p_user_id'] = $user_id;
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		//$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			//'slavedb' => true
		);
		$paydata = array();
		$paydata = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(is_array($paydata) && sizeof($paydata)>0) {
			if($paydata['p_end_date'] >= date('Ymd')) {
				return TRUE;
			}
			else {
				$update_params = array(
					'p_status' => 'E', 
				);

				$this->pay_tb_model->doUpdate($paydata['p_id'], $update_params);
				
				$this->load->model(DBNAME.'/member_tb_model');

				$update_params = array(
					'm_paid' => 'N', 
				);

				$this->member_tb_model->doUpdate($user_id, $update_params);
				return FALSE;
			}
		
		}
		else {
			$this->load->model(DBNAME.'/freepay_tb_model');

			$params = array();
			$params['=']['fp_user_id'] = $user_id;
			$params['=']['fp_code'] = SRV_CODE;
			$params['>=']['fp_end_date'] = date('Ymd');

			$extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$freepay_data = array();
			$freepay_data = array_shift($this->freepay_tb_model->getList($params, $extra)->getData());

			if(is_array($freepay_data) && sizeof($freepay_data)>0) {

				//핸드폰 체크
				$this->load->model(DBNAME.'/member_tb_model');

				$member_params = array();
				$member_params['=']['m_id'] = $user_id;

				$member_extra = array(
					'fields' => 'm_phone',
					'slavedb' => true
				);
		
				$member_info = array_shift($this->member_tb_model->getList($member_params, $member_extra)->getData());

				if($member_info['m_phone'] == '') {
					$free_notice = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
				}
				else {
					$s_date = strtotime($freepay_data['fp_start_date']);
					$e_date = strtotime($freepay_data['fp_end_date']); 
					$during =  ceil(($e_date - $s_date)/(60*60*24))+1; // 일차이

					$free_notice = '<a href="/main/service_prm">프리미엄 '.$during.'일 무료 체험</a> 중 입니다(~'.date('m/d', strtotime($freepay_data['fp_end_date'])).'까지)';
				}
				$this->session->set_userdata('free_notice', $free_notice);
				return TRUE;
			}
			else {
				$this->session->unset_userdata('free_notice');

				$this->load->model(DBNAME.'/member_tb_model');

				$update_params = array(
					'm_paid' => 'N', 
				);

				$this->member_tb_model->doUpdate($user_id, $update_params);

				return FALSE;
			}
		}
	}

	public function oauth() {
	    
		$code = $this->input->get('code');
		$state = $this->input->get('state');

		if( $this->session->userdata('cs_state_code') != $state ) {

            $this->common->alert('카카오 로그인이 정상적으로 진행되지 않았습니다.[1]');
			$this->common->locationhref('/member/login');
			exit;
		}

		if( isset($code) && $code != '' ) {

			$redirectURI = urlencode(HOME_URL."/member/oauth");

			$params = sprintf( 'grant_type=authorization_code&client_id=%s&redirect_uri=%s&code=%s&client_secret=%s', KAKAO_CLIENT_ID, $redirectURI, $code, KAKAO_CLIENT_SECRET);
			$TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";
		
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
		
			//$_SESSION['kakao_access_token'] = $responseArr['access_token']; 
			//$_SESSION['kakao_refresh_token'] = $responseArr['refresh_token']; 
			//$_SESSION['kakao_refresh_token_expires_in'] = $responseArr['refresh_token_expires_in']; 
			
			$this->session->set_userdata('refresh_token', $responseArr['refresh_token']);

			//사용자 정보 가저오기 
			$USER_API_URL= "https://kapi.kakao.com/v2/user/me";
				
			$opts = array( 
				CURLOPT_URL => $USER_API_URL, 
				CURLOPT_SSL_VERIFYPEER => false, 
				CURLOPT_SSLVERSION => 1, 
				CURLOPT_POST => true, 
				CURLOPT_POSTFIELDS => false, 
				CURLOPT_RETURNTRANSFER => true, 
				CURLOPT_HTTPHEADER => array( "Authorization: Bearer " . $responseArr['access_token'] ) 
			); 
			
			$curlSession = curl_init();
			curl_setopt_array($curlSession, $opts); 
			$accessUserJson = curl_exec($curlSession);
			curl_close($curlSession); 
			
			$me_responseArr = json_decode($accessUserJson, true); 

			/*
			Array
			(
				[id] => 134232****
				[connected_at] => 2020-04-24T05:31:56Z
				[properties] => Array
					(
						[nickname] => 홍길동
						[profile_image] => http://k.kakaocdn.net/dn/duI6CU/btqzNNtzgd4/owPTi6bRb4dqKSPm5GYAsK/img_640x640.jpg
						[thumbnail_image] => http://k.kakaocdn.net/dn/duI6CU/btqzNNtzgd4/owPTi6bRb4dqKSPm5GYAsK/img_110x110.jpg
					)

				[kakao_account] => Array
					(
						[profile_needs_agreement] => 
						[profile] => Array
							(
								[nickname] => 홍길동
								[thumbnail_image_url] => http://k.kakaocdn.net/dn/duI6CU/btqzNNtzgd4/owPTi6bRb4dqKSPm5GYAsK/img_110x110.jpg
								[profile_image_url] => http://k.kakaocdn.net/dn/duI6CU/btqzNNtzgd4/owPTi6bRb4dqKSPm5GYAsK/img_640x640.jpg
							)

						[has_email] => 1
						[email_needs_agreement] => 
						[is_email_valid] => 1
						[is_email_verified] => 1
						[email] => c**@kakao.com
						[has_gender] => 1
						[gender_needs_agreement] => 
						[gender] => male
					)

			)
			$mb_nickname = $me_responseArr['properties']['nickname']; // 닉네임 
			$mb_profile_image = $me_responseArr['properties']['profile_image']; // 프로필 이미지
			$mb_thumbnail_image = $me_responseArr['properties']['thumbnail_image']; // 프로필 이미지
			$mb_email = $me_responseArr['kakao_account']['email']; // 이메일
			$mb_gender = $me_responseArr['kakao_account']['gender']; // 성별 female/male
			$mb_age = $me_responseArr['kakao_account']['age_range']; // 연령대
			$mb_birthday = $me_responseArr['kakao_account']['birthday']; // 생일 
			*/
			if($me_responseArr['id']) { 
				$strKakaoId		= 'kakao_'.$me_responseArr['id'];
				$strKakaoEmail	= $me_responseArr['kakao_account']['email'];
				$strKakaoName	= $me_responseArr['kakao_account']['profile']['nickname'];

				$this->load->model(DBNAME.'/member_tb_model');

				if($this->member_tb_model->get(array('m_id' => $strKakaoId))->isSuccess()) {

					$dbrow = $this->member_tb_model->getData();

					$partner_code = explode('|', $state); 

					if(substr($partner_code[2], 0, 3) == 'CSM') {
						$dbrow['mode'] = 'U';
						$dbrow['m_pt_code'] = $partner_code[2];
						$this->_mcUserCheck($dbrow);
					}
					else {
						//유료회원 체크
						$is_paid = FALSE;
						if($this->_paycheck($strKakaoId)) {
							$is_paid = TRUE;
						}
						else {
							if($dbrow['m_level'] == 9) {
								$is_paid = TRUE;
							}
						}

						$sess_data = array(
							//'is_paid' => ($dbrow['m_paid']=='Y') ? TRUE:FALSE, 
							'is_paid' => $is_paid, 
							'user_id' => $strKakaoId,
							'user_email' => $dbrow['m_email'],
							'user_name' => $dbrow['m_name'],
							'user_phone' => $dbrow['m_phone'],
							'user_level' => $dbrow['m_level'],
							'user_auto_pay' => $dbrow['m_auto_pay'],
							//'cho_user_id' =>							
						);

						if($is_paid===TRUE && $dbrow['m_phone'] == '') {
							$sess_data['free_notice'] = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
						}

						$this->set_session($sess_data);
					}

					$this->common->write_login_log($strKakaoId);

					$update_params = array(
						'm_login_date' => date('Y-m-d H:i:s')
					);

					$this->member_tb_model->doUpdate($strKakaoId , $update_params);

					$return_url = explode('|', $state); 
					$return_url = $return_url[1];

					$this->common->locationhref(HOME_URL.'/'.$return_url);
					exit;
				}
				else {

					//탈퇴회원체크
					if($this->_withdrawal_check($strKakaoId)) {
						$this->common->alert('탈퇴회원 계정입니다.\n안정된 서비스 제공과 부정 이용 방지를 위해\n회원탈퇴 후 6개월 간 재가입이 불가합니다.');
						$this->common->locationhref('/');
						exit;
					}

					$redirect_url = '/member/login_idchk?ue='.$strKakaoEmail."&up=K";
					$this->common->locationhref($redirect_url);
					exit;
				}
			}
			else {
				$this->common->alert('카카오 로그인이 정상적으로 진행되지 않았습니다.[3]');
				$this->common->locationhref('/member/login');
				exit;
			}
		} 
		else { 
		 // 회원정보를 가져오지 못했습니다. 
            $this->common->alert('카카오 로그인이 정상적으로 진행되지 않았습니다.[2]');
			$this->common->locationhref('/member/login');
			exit;
		}
	}

	public function nauth() {
	    
		$code = $this->input->get('code');
		$state = $this->input->get('state');

		if( $this->session->userdata('cs_state_code') != $state ) {
            $this->common->alert('네이버 로그인이 정상적으로 진행되지 않았습니다.[1]');
			$this->common->locationhref('/member/login');
			exit;
		}
		
		$url = "https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id=".NAVER_CLIENT_ID."&client_secret=".NAVER_CLIENT_SECRET."&code=".$code."&state=".$state;

		$is_post = false;
		$ch = curl_init();
		curl_setopt($ch, CURLOPT_URL, $url);
		curl_setopt($ch, CURLOPT_POST, $is_post);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
		$headers = array();
		$response = curl_exec ($ch);
		$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
	    curl_close ($ch);

		if($status_code == 200) {
		    
			//회원정보 가져오기
			$strArrToken = json_decode($response, true);
			/*
				Array
				(
					[access_token] => AAAAOnfpYIAz6lxD1WAy4BO0uEhbRrSkC6H1_dD_YAeB1odiHaloZjPE7aAveAw774zt7s0ClD7CLjlhX54Y72RI3hQ
					[refresh_token] => ao9bpOulwVHspMsDatrIIGipKaVHKoEHsmWT9Dd6WeuJNNR6A4XnoMcpSfDipujxW2jFdXdHuTQtYQsEDrAcipUD9O1eO0XNQczqLWYYl3CwiiKv6jd0tQLKKW1Gum3L9494
					[token_type] => bearer
					[expires_in] => 3600
				)
				//$_SESSION['kakao_refresh_token'] = $responseArr['refresh_token']; 

				$this->session->unset_userdata('cs_state_code');
				$this->session->set_userdata('cs_state_code', $state);

			*/

			//$this->session->unset_userdata('naver_refresh_token');
			$this->session->set_userdata('refresh_token', $strArrToken['refresh_token']);

			$header = "Bearer ".$strArrToken['access_token']; // Bearer 다음에 공백 추가

			$url = "https://openapi.naver.com/v1/nid/me";
			$ch = curl_init();
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_POST, $is_post);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
			$headers = array();
			$headers[] = "Authorization: ".$header;
			curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
			$response = curl_exec ($ch);
			$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
			curl_close ($ch);

			if($status_code == 200) {
				$strArrMemInfo = json_decode($response, true);
				if( $strArrMemInfo['resultcode'] == '00' && $strArrMemInfo['message'] == 'success' ) {

					$strNaverId		= 'naver_'.$strArrMemInfo['response']['id'];
					$strNaverName	= $strArrMemInfo['response']['name'];
					$strNaverEmail	= $strArrMemInfo['response']['email'];
					//$strNaverGender	= $strArrMemInfo['response']['gender'];
					/* - F: 여성 - M: 남성 - U: 확인불가*/

					$this->load->model(DBNAME.'/member_tb_model');

					if($this->member_tb_model->get(array('m_id' => $strNaverId))->isSuccess()) {
						
						$dbrow = $this->member_tb_model->getData();

						$partner_code = explode('|', $state); 

						if(substr($partner_code[2], 0, 3) == 'CSM') {
							$dbrow['mode'] = 'U';
							$dbrow['m_pt_code'] = $partner_code[2];
							$this->_mcUserCheck($dbrow);
						}
						else {
							//유료회원 체크
							$is_paid = FALSE;
							if($this->_paycheck($strNaverId)) {
								$is_paid = TRUE;
							}
							else {
								if($dbrow['m_level'] == 9) {
									$is_paid = TRUE;
								}
							}

							$sess_data = array(
								//'is_paid' => ($dbrow['m_paid']=='Y') ? TRUE:FALSE, 
								'is_paid' => $is_paid, 
								'user_id' => $strNaverId,
								'user_email' => $dbrow['m_email'],
								'user_name' => $dbrow['m_name'],
								'user_phone' => $dbrow['m_phone'],
								'user_level' => $dbrow['m_level'],
								'user_auto_pay' => $dbrow['m_auto_pay'],
								//'cho_user_id' =>							
							);

							if($is_paid===TRUE && $dbrow['m_phone'] == '') {
								$sess_data['free_notice'] = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
							}

							$this->set_session($sess_data);
						}

						$this->common->write_login_log($strNaverId);

						$update_params = array(
							'm_login_date' => date('Y-m-d H:i:s')
						);

	                    $this->member_tb_model->doUpdate($strNaverId , $update_params);
						
						$return_url = explode('|', $state); 
						$return_url = $return_url[1];

						$this->common->locationhref(HOME_URL.'/'.$return_url);
						exit;
					}
					else {

						//탈퇴회원체크
						if($this->_withdrawal_check($strNaverId)) {
							$this->common->alert('탈퇴회원 계정입니다.\n안정된 서비스 제공과 부정 이용 방지를 위해\n회원탈퇴 후 6개월 간 재가입이 불가합니다.');
							$this->common->locationhref('/');
							exit;
						}

						$redirect_url = '/member/login_idchk?ue='.$strNaverEmail."&up=N";
						$this->common->locationhref($redirect_url);
						exit;
					}
				}
				else {
					$this->common->alert('네이버 로그인이 정상적으로 진행되지 않았습니다.[4]');
					$this->common->locationhref('/member/login');
					exit;
				}			
			}
			else {
				$this->common->alert('네이버 로그인이 정상적으로 진행되지 않았습니다.[3]');
				$this->common->locationhref('/member/login');
				exit;
			}
		} else {
            $this->common->alert('네이버 로그인이 정상적으로 진행되지 않았습니다.[2]');
			$this->common->locationhref('/member/login');
			exit;
		}
	}

	public function login_idchk() {

		$user_email = $this->input->get('ue');
		$user_path = $this->input->get('up');

		if(isset($user_email) && isset($user_path)) {
			$data = array();

			$this->header_data['header_template'] = '11';
			$this->header_data['head_url'] = '/';
			$this->header_data['show_alarm'] = false;

			$this->header_data['back_url'] = '/';
	        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
			$data['user_email'] = $user_email;
			$data['user_path'] = $user_path;
			$this->_view('/member/login_idchk', $data);
		}
		else {
            $this->common->alert('로그인이 정상적으로 진행되지 않았습니다.[check]');
			$this->common->locationhref('/member/login');
			exit;
		}
	}

	public function request_free() {
		return;
		$new_phone_number = $this->input->post('new_phone_number');
		if($this->session->userdata('user_id') != '' && $new_phone_number != '') {
			
			$this->load->model(DBNAME.'/member_tb_model');

			$update_params = array(
				'm_phone' => str_replace('-', '', $new_phone_number),
				'm_push_ticker' => 'Y',
				'm_push_service' => 'Y',
				'm_push_date' => date('Y-m-d H:i:s'),
			);

			$this->member_tb_model->doUpdate($this->session->userdata('user_id'), $update_params);
			$this->_freepay($this->session->userdata('user_id'));

			$this->session->set_userdata('user_phone', str_replace('-','',$new_phone_number));

			$this->common->alert('14일 무료체험 신청이 완료되었습니다.');
			$this->common->locationhref('/');
			exit;
		}
		else {
			$this->common->locationhref('/');
			exit;
		}
	}

	private function _freepay($user_id) {
		
		if(isset($user_id) && $user_id !='') {

			$this->load->model(DBNAME.'/freepay_tb_model');

			$params = array();
			$params['=']['fp_code'] = SRV_CODE;
			$params['=']['fp_user_id'] = $user_id;
			$params['slavedb'] = true;
			$user_count = $this->freepay_tb_model->getCount($params)->getData();

			//$freeday = 2; 21.11.22 기존 3일 -> 14일로 변경
			$freeday = 13;

			if($this->session->userdata('partner_code') == 'CSPART015' || $this->session->userdata('partner_code') == 'CSPART016' || $this->session->userdata('partner_code') == 'CSPART019' || $this->session->userdata('partner_code') == 'CSPART021') {
				//$freeday = 6; 21.11.22 기존 7일 -> 14일로 변경
				$freeday = 13;
			}

			if($user_count==0) {
				$fp_end_date = date('Ymd', time()+86400*$freeday);
				$params = array(
					'fp_user_id' => $user_id,
					'fp_code' => SRV_CODE,
					'fp_start_date' => date('Ymd'),
					'fp_end_date' => $fp_end_date,
					'fp_date' => date('Y-m-d H:i:s'),
				);

				$this->freepay_tb_model->doInsert($params);

				//$free_notice = '<a href="/main/service_prm">프리미엄 3일 무료 체험</a> 중 입니다(~'.date('m/d', strtotime($fp_end_date)).'까지)';
				$free_notice = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
				$this->session->set_userdata('free_notice', $free_notice);
				$this->session->set_userdata('is_paid', TRUE);
			}
/*
			if($user_count>0) {
				$this->common->alert('이미 3일 무료체험을 사용하셨습니다.');
				$this->common->locationhref('/');
				exit;
			}
			else {
				$fp_end_date = date('Ymd', time()+86400*2);
				$params = array(
					'fp_user_id' => $user_id,
					'fp_code' => SRV_CODE,
					'fp_start_date' => date('Ymd'),
					'fp_end_date' => $fp_end_date,
					'fp_date' => date('Y-m-d H:i:s'),
				);

				$this->freepay_tb_model->doInsert($params);

				//$free_notice = '<a href="/main/service_prm">프리미엄 3일 무료 체험</a> 중 입니다(~'.date('m/d', strtotime($fp_end_date)).'까지)';
				$free_notice = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요.<a href="/member/info">[등록]</a>';
				$this->session->set_userdata('free_notice', $free_notice);
				$this->session->set_userdata('is_paid', TRUE);
			}
*/
		}
	}

	public function login_complete() {

		$refresh_token = $this->session->userdata('refresh_token');
        $user_path = $this->input->get('up');
        $push_marketing = $this->input->get('push_marketing');
        $new_phone_number = $this->input->get('new_phone_number');

		if( isset($refresh_token) &&  $refresh_token != '' && in_array($user_path, array('N', 'K'))) {

			if( $user_path == 'N' ) {

				$url = "https://nid.naver.com/oauth2.0/token?grant_type=refresh_token&client_id=".NAVER_CLIENT_ID."&client_secret=".NAVER_CLIENT_SECRET."&refresh_token=".$refresh_token;

				$is_post = false;
				$ch = curl_init();
				curl_setopt($ch, CURLOPT_URL, $url);
				curl_setopt($ch, CURLOPT_POST, $is_post);
				curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
				$headers = array();
				$response = curl_exec ($ch);
				$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
				curl_close ($ch);

				if($status_code == 200) {
				
					//회원정보 가져오기
					$strArrToken = json_decode($response, true);

					$header = "Bearer ".$strArrToken['access_token']; // Bearer 다음에 공백 추가

					$url = "https://openapi.naver.com/v1/nid/me";
					$ch = curl_init();
					curl_setopt($ch, CURLOPT_URL, $url);
					curl_setopt($ch, CURLOPT_POST, $is_post);
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
					$headers = array();
					$headers[] = "Authorization: ".$header;
					curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
					$response = curl_exec ($ch);
					$status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
					curl_close ($ch);

					if($status_code == 200) {
						$strArrMemInfo = json_decode($response, true);
						if( $strArrMemInfo['resultcode'] == '00' && $strArrMemInfo['message'] == 'success' ) {

							$strNaverId		= 'naver_'.$strArrMemInfo['response']['id'];
							$strNaverName	= $strArrMemInfo['response']['name'];
							$strNaverEmail	= $strArrMemInfo['response']['email'];
							$strNaverGender	= $strArrMemInfo['response']['gender'];
							/* - F: 여성 - M: 남성 - U: 확인불가 */
							if( !isset($strNaverGender) && $strNaverGender == '' ) $strNaverGender = 'U';

							//탈퇴회원체크
							if($this->_withdrawal_check($strNaverId)) {
								$this->common->alert('탈퇴회원 계정입니다.\n안정된 서비스 제공과 부정 이용 방지를 위해\n회원탈퇴 후 6개월 간 재가입이 불가합니다.');
								$this->common->locationhref('/');
								exit;
							}

							//파트너코드 체크
							$partner_code = array();
							$strState = $this->session->userdata('cs_state_code');
							$partner_code = explode('|', $strState);

							$this->load->model(DBNAME.'/member_tb_model');

							$params = array(
								'm_id' => $strNaverId,
								//'m_pw' =>  $nt_table,
								'm_name' => $strNaverName,
								'm_email' => $strNaverEmail,
								'm_gender' => $strNaverGender,
								'm_path' => 'N',
								'm_pt_code' => $partner_code[2],
								'm_phone' => str_replace('-', '', $new_phone_number),
								'm_push_ticker' => 'Y',
								'm_push_service' => 'Y',
								'm_push_marketing' => $push_marketing,
								'm_push_date' => date('Y-m-d H:i:s'),
								'm_reg_date' => date('Y-m-d H:i:s'),
								'm_mod_date' => date('Y-m-d H:i:s'),
								'm_login_date' => date('Y-m-d H:i:s'),
							);
/*
							if($push_marketing == 'Y') {
								$params['m_push_marketing'] = 'Y';
								$params['m_push_date'] = date('Y-m-d H:i:s');
							}
*/
							if($this->member_tb_model->doInsert($params)->isSuccess()) {

								//미래에셋캐피탈 회원처리 CSM2IH311
								if(substr($partner_code[2], 0, 3) == 'CSM') {
									$params['mode'] = 'I';
									$this->_mcUserCheck($params);
								}
								else {
									$sess_data = array(
										'user_id' => $strNaverId,
										'user_email' => $strNaverEmail,
										'user_name' => $strNaverName,
										'user_phone' => str_replace('-', '', $new_phone_number),
									);
									$this->set_session($sess_data);
								}

								$this->common->write_login_log($strNaverId);

								$data = array();
								$this->header_data['header_template'] = '11';
								$this->header_data['head_url'] = '/';
								$this->header_data['show_alarm'] = false;

								$this->header_data['back_url'] = '';
						        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
								$data['is_iphone'] = $this->is_iphone;

								if(substr($partner_code[2], 0, 3) != 'CSM') {
									$this->_freepay($this->session->userdata('user_id'));
								}
								$data['part'] = $this->session->userdata('partner_code');
								$this->_view('/member/login_complete', $data);
							} 
							else {
								$this->common->alert('회원 가입에 실패했습니다[N4].');
								$this->common->locationhref('/member/login');
								exit;
							}
						}
						else {
							$this->common->alert('회원 가입에 실패했습니다[N3].');
							$this->common->locationhref('/member/login');
							exit;
						}
					}
					else {
						$this->common->alert('회원 가입에 실패했습니다[N2].');
						$this->common->locationhref('/member/login');
						exit;
					}
				}
				else {
					$this->common->alert('회원 가입에 실패했습니다[N1].');
					$this->common->locationhref('/member/login');
					exit;
				}
			}
			else {

				$params = sprintf( 'grant_type=refresh_token&client_id=%s&client_secret=%s&refresh_token=%s', KAKAO_CLIENT_ID, KAKAO_CLIENT_SECRET, $refresh_token);
				$TOKEN_API_URL = "https://kauth.kakao.com/oauth/token";
		
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
		
				//$_SESSION['kakao_access_token'] = $responseArr['access_token']; 
				//$_SESSION['kakao_refresh_token'] = $responseArr['refresh_token']; 
				//$_SESSION['kakao_refresh_token_expires_in'] = $responseArr['refresh_token_expires_in']; 
				//$this->session->set_userdata('refresh_token', $responseArr['refresh_token']);

				//사용자 정보 가저오기 
				$USER_API_URL= "https://kapi.kakao.com/v2/user/me";
					
				$opts = array( 
					CURLOPT_URL => $USER_API_URL, 
					CURLOPT_SSL_VERIFYPEER => false, 
					CURLOPT_SSLVERSION => 1, 
					CURLOPT_POST => true, 
					CURLOPT_POSTFIELDS => false, 
					CURLOPT_RETURNTRANSFER => true, 
					CURLOPT_HTTPHEADER => array( "Authorization: Bearer " . $responseArr['access_token'] ) 
				); 
			
				$curlSession = curl_init();
				curl_setopt_array($curlSession, $opts); 
				$accessUserJson = curl_exec($curlSession);
				curl_close($curlSession); 
			
				$me_responseArr = json_decode($accessUserJson, true); 

				if($me_responseArr['id']) {

					$strKakaoId		= 'kakao_'.$me_responseArr['id'];
					$strKakaoEmail	= $me_responseArr['kakao_account']['email'];
					$strKakaoName	= $me_responseArr['kakao_account']['profile']['nickname'];
					$strKakaoGender = $me_responseArr['kakao_account']['gender']; // 성별 female/male
					if($strKakaoGender=='male') $strKakaoGender = 'M';
					else if($strKakaoGender=='female')  $strKakaoGender = 'F';
					else  $strKakaoGender = 'U';

					//탈퇴회원체크
					if($this->_withdrawal_check($strKakaoId)) {
						$this->common->alert('탈퇴회원 계정입니다.\n안정된 서비스 제공과 부정 이용 방지를 위해\n회원탈퇴 후 6개월 간 재가입이 불가합니다.');
						$this->common->locationhref('/');
						exit;
					}

					//파트너코드 체크
					$partner_code = array();
					$strState = $this->session->userdata('cs_state_code');
					$partner_code = explode('|', $strState);
					
					$this->load->model(DBNAME.'/member_tb_model');

					$params = array(
						'm_id' => $strKakaoId,
						//'m_pw' =>  $nt_table,
						'm_name' => $strKakaoName,
						'm_email' => $strKakaoEmail,
						'm_gender' => $strKakaoGender,
						'm_path' => 'K',
						'm_pt_code' => $partner_code[2],
						'm_phone' => str_replace('-', '', $new_phone_number),
						'm_push_ticker' => 'Y',
						'm_push_service' => 'Y',
						'm_push_marketing' => $push_marketing,
						'm_push_date' => date('Y-m-d H:i:s'),
						'm_reg_date' => date('Y-m-d H:i:s'),
						'm_mod_date' => date('Y-m-d H:i:s'),
						'm_login_date' => date('Y-m-d H:i:s'),
					);
/*
					if($push_marketing == 'Y') {
						$params['m_push_marketing'] = 'Y';
						$params['m_push_date'] = date('Y-m-d H:i:s');
					}
*/
					if($this->member_tb_model->doInsert($params)->isSuccess()) {

						if(substr($partner_code[2], 0, 3) == 'CSM') {
							$params['mode'] = 'I';
							$this->_mcUserCheck($params);
						}
						else {

							$sess_data = array(
								'user_id' => $strKakaoId,
								'user_email' => $strKakaoEmail,
								'user_name' => $strKakaoName,
								'user_phone' => str_replace('-', '', $new_phone_number),
							);

							$this->set_session($sess_data);
						}

						$this->common->write_login_log($strKakaoId);

						$data = array();
						$this->header_data['header_template'] = '11';
						$this->header_data['head_url'] = '/';
						$this->header_data['show_alarm'] = false;

						$this->header_data['back_url'] = '';
				        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
						$data['is_iphone'] = $this->is_iphone;

						if(substr($partner_code[2], 0, 3) != 'CSM') {
							$this->_freepay($this->session->userdata('user_id'));
						}
						$data['part'] = $this->session->userdata('partner_code');
						$this->_view('/member/login_complete', $data);
					} 
					else {
						$this->common->alert('회원 가입에 실패했습니다[K2].');
						$this->common->locationhref('/member/login');
						exit;
					}				
				}
				else {
					$this->common->alert('회원 가입에 실패했습니다[K1].');
					$this->common->locationhref('/member/login');
					exit;
				}
			}
		}
		else {
            $this->common->alert('회원 가입에 실패했습니다.');
			$this->common->locationhref('/member/login');
			exit;
		}	
	}

	//미래에셋캐피탈 회원처리
	private function _mcUserCheck($data=array()) {

		if(!is_array($data) || sizeof($data) < 1) return;
		
		if(substr($data['m_pt_code'], 0, 3) != 'CSM') return;

		//CSM2IH311
		$y = date('Y');
		$y = substr($y, 0, 2);
		$year = $y.substr($data['m_pt_code'], 3, 1).substr($data['m_pt_code'], -1);
		$p = strtolower(substr($data['m_pt_code'],5,1));
		$month = $this->check_mon[$p];
		if(strlen($month) == 1) $month = '0'.$month;
		$day = substr($data['m_pt_code'], 6, 2);

		$p_end_date = $year.$month.$day;

		if($p_end_date < date('Ymd')) return;

		$this->load->model(DBNAME.'/pay_tb_model');
		$this->load->model(DBNAME.'/member_tb_model');

		$insert_params = array(
			'p_user_id' => $data['m_id'],
			'p_code' => SRV_CODE,
			'p_user_name' => $data['m_name'],
			'p_moid' => SRV_CODE.str_pad(mt_rand(0,9999),4,'0').date('YmdHis'), // 상품주문번호(CS01+rand+date(YmdHis))
			'p_price' => '0',
			'p_real_price' => '0',
			'p_pay' => '2',
			'p_type' => 'G',
			'p_method' => 'COUPON',
			'p_status' => 'P',
			'p_coupon' => $data['m_pt_code'],
			'p_dcrate' => '100',
			'p_pt_code' => $data['m_pt_code'],
			'p_date' =>  date('Y-m-d H:i:s'),
			'p_start_date' => date('Ymd'),
			'p_end_date' => $p_end_date,
			'p_authdate' => date('Y-m-d H:i:s'),
		);

		if($this->pay_tb_model->doInsert($insert_params)->isSuccess()) {

			if($data['mode'] == 'I') {
				$update_params = array(
					'm_paid' => 'Y', 
					'm_memo' => date('Y-m-d H:i:s').' - '.$data['m_pt_code']."\n",
				);
			}
			else {
				$update_params = array(
					'm_paid' => 'Y', 
					'm_pt_code' => $data['m_pt_code'],
					'm_mod_date' => date('Y-m-d H:i:s'),
					'm_memo' => $data['m_memo'].date('Y-m-d H:i:s').' - '.$data['m_pt_code']."\n",
				);
			}

			$this->member_tb_model->doUpdate($data['m_id'], $update_params);

			$sess_data = array(
				'is_paid' => TRUE, 
				'user_id' => $data['m_id'],
				'user_email' => $data['m_email'],
				'user_name' => $data['m_name'],
				'user_level' => '0',
				'user_auto_pay' => 'N',
			);

			if(!isset($data['m_phone']) || $data['m_phone'] == '') {
				$sess_data['free_notice'] = '알림 서비스 수신을 위해 <b>휴대폰번호를 등록</b>해주세요. <a href="/member/info">[등록]</a>';
			}

			$this->set_session($sess_data);
		}
		else {
			$sess_data = array(
				'user_id' => $data['m_id'],
				'user_email' => $data['m_email'],
				'user_name' => $data['m_name'],
				'user_phone' => (isset($data['m_phone'])) ? $data['m_phone']:'',
				'user_level' => (isset($data['m_level'])) ? $data['m_level']:'0',
				'user_auto_pay' => (isset($data['m_auto_pay'])) ? $data['m_auto_pay']:'N',
			);
			$this->set_session($sess_data);
		}
		
		return;			
	}

	public function logout()
	{
		$this->session->sess_destroy();
		$cookie = array(
			'name'  => 'DchoicestockH',
			'value' => '',
			'expire' => '0',
			'domain' => '.choicestock.co.kr',
			'prefix' => ''
		);
		delete_cookie($cookie);
		$this->common->locationhref('/');
		exit;
	}

	public function mcLogin($partner_code='')
	{
		if($partner_code == '' || substr($partner_code, 0, 3) != 'CSM' || strlen($partner_code) != 9) {
			$this->common->locationhref('/');
			exit;
		}
		else {
			$this->session->sess_destroy();
			$this->common->locationhref('/member/login?pt='.$partner_code);
			exit;
		}
	}

	public function login()
	{
        if($this->session->userdata('is_login')) {
            $this->common->alert('이미 로그인 되어 있습니다.');
			$this->common->locationhref('/');
			exit;
		}
		//미래에셋캐피탈 회원처리
		//신규 : https://www.choicestock.co.kr/member/login?pt=CSM2IH311
		//갱신 : https://www.choicestock.co.kr/member/login?pt=CSM2UH311

		$data = array();

        $this->header_data['header_template'] = '11';
        $this->header_data['head_url'] = '/';
        $this->header_data['show_alarm'] = false;

        $this->header_data['back_url'] = '/';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';

	    $naver_redirectURI = urlencode(HOME_URL."/member/nauth");
	    $kakao_redirectURI = urlencode(HOME_URL."/member/oauth");

		$return_page = $this->input->get('ru');

		$partner_code = $this->session->userdata('partner_code');
		//$partner_code = $this->input->get('pt');

		$state = md5(microtime().mt_rand()).'|'.$return_page.'|'.$partner_code;

		$this->session->unset_userdata('cs_state_code');
		$this->session->set_userdata('cs_state_code', $state);

		//delete_cookie('cs_state_code');
		//set_cookie('cs_state_code', $state, time()+500, '.choicestock.co.kr' );

		//echo 'cookie===>'.get_cookie('nv_state_code');
		$naver_apiURL = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=".NAVER_CLIENT_ID."&redirect_uri=".$naver_redirectURI."&state=".$state;
		$kakao_apiURL = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=".KAKAO_CLIENT_ID."&redirect_uri=".$kakao_redirectURI."&state=".$state;

		$data['naver_login_url'] = $naver_apiURL;
		$data['kakao_login_url'] = $kakao_apiURL;

		$this->_view('/member/login', $data);
	}

	public function save_info() {

        $this->loginCheck();

        $user_id = $this->session->userdata('user_id');
		$m_phone = $this->input->post('new_phone_number'); //핸드폰 번호
		$m_push_marketing = $this->input->post('m_push_check'); //마케팅 수신 동의
		$m_push_before = $this->input->post('m_push_before'); //마케팅 수신 동의(기존)
		if($m_push_before == '') $m_push_before = 'N';

		if(isset($m_phone) && $m_phone!='') {
			$update_params = array(
				'm_phone' => str_replace('-', '', $m_phone),
				'm_push_ticker' => 'Y',
				'm_push_service' => 'Y',
				//'m_push_date' => date('Y-m-d H:i:s'),
			);
		}

		//if($m_push_marketing == 'Y') {
		if($m_push_marketing == $m_push_before) {
			$m_push_marketing = '';
		}
		else {
			$update_params['m_push_marketing'] =  $m_push_marketing;
			$update_params['m_push_date'] = date('Y-m-d H:i:s');
		}
		$update_params['m_mod_date'] = date('Y-m-d H:i:s');
		//}

		if(is_array($update_params) && sizeof($update_params) > 0) {

			$this->load->model(DBNAME.'/member_tb_model');
			$this->member_tb_model->doUpdate($user_id, $update_params);

			$is_free = false;
			if($update_params['m_phone'] != '') {
				$this->load->model(DBNAME.'/freepay_tb_model');
				$free_params = array();
				$free_params['=']['fp_user_id'] = $user_id;
				$free_params['=']['fp_code'] = SRV_CODE;
				$free_params['>=']['fp_end_date'] = date('Ymd');
				$free_extra = array(
					'fields' => '*',
					'slavedb' => true
				);

				$freepay_data = array();
				$freepay_data = array_shift($this->freepay_tb_model->getList($free_params, $free_extra)->getData());

				$s_date = strtotime($freepay_data['fp_start_date']);
				$e_date = strtotime($freepay_data['fp_end_date']); 
				$during =  ceil(($e_date - $s_date)/(60*60*24))+1; // 일차이

				if(is_array($freepay_data) && sizeof($freepay_data) > 0) {				
					$free_notice = '<a href="/main/service_prm">프리미엄 '.$during.'일 무료 체험</a> 중 입니다(~'.date('m/d', strtotime($freepay_data['fp_end_date'])).'까지)';
					$this->session->set_userdata('free_notice', $free_notice);
					$is_free = true;
				}

				$this->session->set_userdata('user_phone', str_replace('-','',$m_phone));

				//$member_url = SUPER_HOME.'/member/koUserUpdate/'.$user_id.'/'.$m_phone.'?m_push_check='.$m_push_marketing;
				$member_url = SUPER_HOME.'/member/koUserUpdate/'.$user_id.'?m_phone='.$m_phone.'&m_push_check='.$m_push_marketing;
				$result = json_decode($this->get_content($member_url), true);
				//$result = json_decode(file_get_contents($member_url), true);
			}
			else if($m_push_marketing != '') {
				$member_url = SUPER_HOME.'/member/koUserUpdate/'.$user_id.'?m_push_check='.$m_push_marketing;
				$result = json_decode($this->get_content($member_url), true);
			}

			//2021.2.9 추가
			if($this->session->userdata('is_paid')===TRUE && $this->session->userdata('user_phone') != '' && $is_free === false) {
				$this->session->unset_userdata('free_notice');
			}
		}

		$this->common->locationhref('/');
	}

// 푸시테스트
	public function push_test($template) {
/*
$nickname = "이지코드이지코드";
$nickname2 = "abcedfe";
$nickname3 = "Pbcedfe";
echo iconv_substr($nickname, 0, 1, "utf-8");
exit;
*/
		
		$push_info = array();
		$push_info['template']= $template; 
		$push_info['push_type']= 'at'; 
		$push_info['from']= PUSH_FROM; 
		$push_info['to']= '01076121487'; 

		//SMS일 경우
		//$push_info['sms_message'] = '내용입력';

		//$push_info['at_message']['replace_0'] = '미국주식를 탐구해 보세요';
		//$push_info['at_message']['replace_1'] = 'H&R 블록 예상 EPS 2.82';

		//$push_info['at_message']['replace_0'] = '종목분석';
		//$push_info['at_message']['replace_1'] = '신규 종목분석이 등록되었습니다. - 한글종목명(AT)';

		//$push_info['at_message']['replace_0'] = '종목추천';
		//$push_info['at_message']['replace_1'] = '한글종목명(AT)이(가) 목표가에 도달했습니다.';

		//$auth_no = str_pad(mt_rand(0,9999),4,'0');
		//$push_info['at_message']['replace_0'] = '초이스스탁US';
		//$push_info['at_message']['replace_1'] = $auth_no;

		$push_info['at_message']['replace_0'] = '종목분석';
		$push_info['at_message']['replace_1'] = '신규 종목분석이 등록되었습니다. 신규 종목분석이 등록되었습니다. 신규 종목분석이 등록되었습니다.';

		$push_info['count']= '2'; 

		$result = $this->send_push($push_info);	
		echo '<pre>'; print_r($result);
	}

	public function check_authno() {
        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/');
			exit;
		}

		//$this->loginCheck();

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

		//$this->loginCheck();

		$phone_no = $this->input->get('no');

		if(isset($phone_no) && $phone_no) {
			
			/*
			//네이버페이 중복 체크
			$this->load->model(DBNAME.'/member_tb_model');
	        $user_id = $this->session->userdata('user_id');

			if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {
				$user_info = $this->member_tb_model->getData();
				if($user_info['m_pt_code'] == 'CSPART013') {

					//핸드폰 번호 체크
					$params = array();
					$params['=']['m_phone'] = str_replace('-', '', $phone_no);
					$params['!=']['m_id'] = $user_id;
					$params['=']['m_auto_pay'] = 'Y';
					$params['slavedb'] = true;
					$user_count = $this->member_tb_model->getCount($params)->getData();

					if($user_count>0) {
						$error = TRUE;
						$result = array('error' => $error, 'msg' => 'dup');
						exit(json_encode($result));
					}
				}
			}
			*/

			$push_info = array();
			$push_info['template']= '7'; 
			$push_info['push_type']= 'sms'; 
			$push_info['from']= PUSH_FROM; 
			$push_info['to']= str_replace('-', '', $phone_no); 

			$auth_no = str_pad(mt_rand(0,9999),4,'0');
			$push_info['at_message']['replace_0'] = '초이스스탁US';
			$push_info['at_message']['replace_1'] = $auth_no;
			$push_info['count']= '2'; 

			$result = $this->send_push($push_info);	
			/*
			Array
			(
				[code] => 1000
				[description] => ok
				[refkey] => CS01at305SuJw20200529153822
				[messagekey] => 200529153822889#at026972dataF1xq
			)
			*/
			//print_r(json_decode($result));
			//{"code":1000,"description":"ok","refkey":"CS01at3982vpN20200529145610","messagekey":"200529145611124#at027014dataqo9b"}
				//$success = TRUE;
				//$result = array('success' => $success, 'msg' => $result['code'] );
				//exit(json_encode($result));
			$this->output->set_content_type('application/json');
			
			//$auth_no = '1111';
			if($result['code'] == '1000') {
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

	public function withdrawal_process() {

		if($this->session->userdata('user_id')=='') {
			$this->common->alert('회원 정보가 없습니다.');
			$this->common->locationhref('/');
			exit;
		}

		if($this->session->userdata('is_paid')===TRUE) {
			$this->common->alert('유료서비스 이용 중입니다. 서비스해지 후 회원탈퇴를 진행해주세요.');
			$this->common->locationhref('/');
			exit;
		}

		$user_id = $this->session->userdata('user_id');
		$user_name = $this->session->userdata('user_name');

		//밸류라인, 슈스톡 탈퇴 처리
		$leave_url = VALUE_HOME.'/member/koLeave/'.$user_id;
		$cs_leavedata = array();
		//$cs_leavedata = json_decode(file_get_contents($leave_url), true);
		$cs_leavedata = json_decode($this->get_content($leave_url), true);
		if($cs_leavedata['is_leave'] == false) {
			$this->common->alert('유료서비스 이용 중입니다. 서비스해지 후 회원탈퇴를 진행해주세요[V].');
			$this->common->locationhref('/');
			exit;
		}

		$sess = array();
		$sess['login_id'] = $user_id;
		$sess['name'] = $user_name;

		//탈퇴테이블 등록(withdrawal_tb)
		$this->load->model(DBNAME.'/withdrawal_tb_model');

		$wd_end_date = date('Ym').'01';
		$wd_end_date = date("Ym", strtotime($wd_end_date." +6 month"));
		$wd_end_date = $wd_end_date.substr(date('Ymd'), 6, 2);

		$params = array(
			'wd_user_id' => $user_id,
			'wd_code' => SRV_CODE,
			'wd_date' => date('Y-m-d H:i:s'),
			'wd_end_date' => $wd_end_date,
			'wd_mng_id' => $user_id,
			'wd_mng_date' => date('Y-m-d H:i:s'),
		);

		$this->withdrawal_tb_model->doInsert($params);

		//회원정보 지우기(member_tb)
		$this->load->model(DBNAME.'/member_tb_model');
		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {
			$dbrow = $this->member_tb_model->getData();
			$this->member_tb_model->doDelete($dbrow['m_id']);

			$act_key = $dbrow['m_id'];
			$log_array = $dbrow;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'member_tb');
		}

		//결제내역 지우기(pay_tb)
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $user_id;
		$extra = array(
			'order_by' => '',
		);

		$paylist = $this->pay_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($paylist);

		$p_ids = array_keys($this->common->getDataByPK($paylist, 'p_id'));

		if(sizeof($p_ids) > 0) {
			$params = array();
			$params['in']['p_id'] = $p_ids;
			//echo '<pre>'; print_r($params);
			$this->pay_tb_model->doMultiDelete($params);

			$act_key = implode(',', $p_ids);
			$log_array = $paylist;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'pay_tb');
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

		//3일무료정보 지우기(freepay_tb)
		$this->load->model(DBNAME.'/freepay_tb_model');
		if($this->freepay_tb_model->get(array('fp_user_id' => $user_id))->isSuccess()) {
			$dbrow = $this->freepay_tb_model->getData();
			$this->freepay_tb_model->doDelete($dbrow['fp_id']);

			$act_key = $dbrow['fp_id'];
			$log_array = $dbrow;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'freepay_tb');
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
/*
		//로그인 로그 지우기(login_log_tb)
		//$this->load->model(DBNAME.'/login_log_tb_model');
*/
		$this->common->alert('회원 탈퇴 처리가 완료되었습니다.\n그동안 초이스스탁US를 이용해 주셔서 감사합니다.');
		$this->session->sess_destroy();
		$this->common->locationhref('/');

		exit;
	}

	public function withdrawal() {

        $this->loginCheck();

        $user_id = $this->session->userdata('user_id');

		$this->load->model(DBNAME.'/member_tb_model');

		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {

			$user_info = $this->member_tb_model->getData();

			$data = array();
			$this->header_data['header_template'] = '11';
			$this->header_data['show_alarm'] = false;
			//$this->header_data['back_url'] = '/member/menu';
			$this->header_data['back_url'] = '/';
			$this->header_data['head_title'] = '회원탈퇴';

	        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
			
			//초스유료내역
			$this->load->model(DBNAME.'/pay_tb_model');
			$params = array();
			$params['=']['p_user_id'] = $user_id;
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['>=']['p_end_date'] = date('Ymd');

			$extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				'limit' => 1,
				'slavedb' => true
			);
			$cs_paydata = array();
			$cs_paydata = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

			if(is_array($cs_paydata) && sizeof($cs_paydata)>0) {
				$data['cs_paydata'] = $cs_paydata;
			}

			//슈스톡, 밸류라인 유료체크
			$pay_url = SUPER_HOME.'/member/koPayCheck/'.$user_id;
			$ko_paydata = array();
			//$ko_paydata = json_decode(file_get_contents($pay_url), true);
			$ko_paydata = json_decode($this->get_content($pay_url), true);

			if($ko_paydata['is_pay'] == true) {
				$data['ko_paydata'] = $ko_paydata;
			}
			
			/*
			if($this->session->userdata('is_paid')===TRUE) {

				$this->load->model(DBNAME.'/pay_tb_model');

				$params = array();
				$params['=']['p_user_id'] = $user_id;
				$params['=']['p_code'] = SRV_CODE;
				$params['=']['p_status'] = 'P';
				$params['>=']['p_end_date'] = date('Ymd');

				$extra = array(
					'fields' => '*',
					'order_by' => 'p_end_date DESC',
					'limit' => 1,
					'slavedb' => true
				);

		        $data['pay'] = array_shift($this->pay_tb_model->getList($params, $extra)->getData());
			}
			*/

			$this->_view('/member/withdrawal', $data);
		}
		else {
            $this->common->alert('회원 정보가 없습니다.');
			$this->common->locationhref('/');
			exit;
		}
	}

	public function info() {

        $this->loginCheck();

        $user_id = $this->session->userdata('user_id');

		$this->load->model(DBNAME.'/member_tb_model');

		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {

			$user_info = $this->member_tb_model->getData();

			$data = array();
			$this->header_data['header_template'] = '11';
			$this->header_data['show_alarm'] = false;
			//$this->header_data['back_url'] = '/member/menu';
			$this->header_data['back_url'] = '/';
			$this->header_data['head_title'] = '내 정보';

	        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
			$data['user_name'] = $user_info['m_name'];
			$data['user_email'] = $user_info['m_email'];
			$data['user_path'] = $user_info['m_path'];
			$data['user_gender'] = $user_info['m_gender'];
			$data['user_phone'] = $user_info['m_phone'];
			$data['user_marketing'] = $user_info['m_push_marketing'];

			//$this->load->library('user_agent');
			//$is_iphone = FALSE;
			//if($this->agent->is_mobile('iphone')) {
			//	$is_iphone = TRUE;
			//}

			$data['is_iphone'] = $this->is_iphone;

			//초스유료내역
			$this->load->model(DBNAME.'/pay_tb_model');
			$params = array();
			$params['=']['p_user_id'] = $user_id;
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['>=']['p_end_date'] = date('Ymd');

			$extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				'limit' => 1,
				'slavedb' => true
			);
			$cs_paydata = array();
			$cs_paydata = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

			if(is_array($cs_paydata) && sizeof($cs_paydata)>0) {
				$data['cs_paydata'] = $cs_paydata;
			}

			//슈스톡, 밸류라인 유료체크
			$pay_url = SUPER_HOME.'/member/koPayCheck/'.$user_id;
			$ko_paydata = array();
			//$ko_paydata = json_decode(file_get_contents($pay_url), true);
			$ko_paydata = json_decode($this->get_content($pay_url), true);

			if($ko_paydata['is_pay'] == true) {
				$data['ko_paydata'] = $ko_paydata;
			}

			$data['info_submenu'] = 'info';
			$this->_view('/member/info', $data);
		}
		else {
            $this->common->alert('회원 정보가 없습니다.');
			$this->common->locationhref('/');
			exit;
		}
	}

	public function paylist() {

        $this->loginCheck();

		$this->load->model(DBNAME.'/pay_tb_model');

        $params = array();
        $params['=']['p_user_id'] = $this->session->userdata('user_id');
        $extra = array(
            'fields' => '*',
            'order_by' => 'p_id DESC',
			'slavedb' => true
        );

		$paylist = array();
		$autopay = array();

		$today = date('Ymd');
        $paylist = $this->pay_tb_model->getList($params, $extra)->getData();
		if(sizeof($paylist) > 0) {
			//if($paylist[0]['p_type'] == 'A') {
			if($paylist[0]['p_type'] == 'A' && in_array($paylist[0]['p_status'], array('P', 'W')) && $paylist[0]['p_end_date'] >= date('Ymd')) {
				$autopay = array_shift($paylist);

				//카드변경일 체크
				$autopay['is_update'] = TRUE;

				if($autopay['p_at_day'] == $today || $autopay['p_card_code'] == 'PA') {
					$autopay['is_update'] = FALSE;
				}
				else if( substr($autopay['p_at_day'], 0, 6) == substr($today, 0, 6) && $autopay['p_at_day'] > $today) {
					
					$check_day = date('Y-m-d');
					$lastday = date("Ymt", strtotime($check_day));
					//오늘이 마지막 날이면
					if( $today == $lastday && $lastday < $autopay['p_at_day'] ) {
						$autopay['is_update'] = FALSE;
					}
				}
			}
			//else if($paylist[0]['p_type'] == 'G' && $paylist[0]['p_status'] == 'P') {
			//	$termpay = array_shift($paylist);
			//}

			//결제 취소 시 환불계좌 처리
			$this->load->model(DBNAME.'/bankcard_tb_model');

			$bank_params = array();
			$bank_params['=']['bc_type'] = 'B';
			$bank_extra = array(
				'fields' => 'bc_code, bc_name',
				'order_by' => 'bc_code ASC',
				'slavedb' => true
			);

			$bank_list = array();
			$bank_list = $this->bankcard_tb_model->getList($bank_params, $bank_extra)->getData();
		}
		//echo '<pre>'; print_r($paylist);

		//3일 무료 회원 데이터
		$this->load->model(DBNAME.'/freepay_tb_model');

		$free_params = array();
        $free_params['=']['fp_user_id'] = $this->session->userdata('user_id');
		$free_params['=']['fp_code'] = SRV_CODE;
		$free_params['>=']['fp_end_date'] = date('Ymd');
        $free_extra = array(
            'fields' => '*',
			'slavedb' => true
        );

		$freepay_data = array();
		$freepay_data = array_shift($this->freepay_tb_model->getList($free_params, $free_extra)->getData());

		$data = array();
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;

        $this->header_data['back_url'] = '/';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->header_data['head_title'] = '내 정보';
		
		$data['info_submenu'] = 'paylist';
		$data['termpay'] = $termpay;
		$data['autopay'] = $autopay;
		$data['paylist'] = $paylist;
		$data['pay_name'] = $this->pay_name;
		$data['pay_method_name'] = $this->pay_method_name;
		$data['srv_name'] = SRV_NAME;
		$data['pay_info'] = $this->pay_info;
		$data['bank_list'] = $bank_list;
		$data['freepay_data'] = $freepay_data;
		$this->_view('/member/paylist', $data);
	}

    public function policy() {
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;
        $this->header_data['head_title'] = '개인정보처리방침';
        $this->header_data['back_url'] = '-1';
        //$this->header_data['back_url'] = '/';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->_view('/member/policy', $data);
    }

    public function terms() {
        $this->header_data['header_template'] = '11';
        $this->header_data['show_alarm'] = false;
        $this->header_data['head_title'] = '이용약관';
        $this->header_data['back_url'] = '-1';
        //$this->header_data['back_url'] = '/';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->_view('/member/terms', $data);
    }

    public function menu() {
        $this->header_data['header_template'] = '16';
        $this->header_data['show_alarm'] = TRUE;
        $this->header_data['head_title'] = '';
        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
        $this->_view('/member/menu');
    }

    public function notice() {
        $this->loginCheck();
	
        $user_id = $this->session->userdata('user_id');

		$this->load->model(DBNAME.'/member_tb_model');

		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {

			$user_info = $this->member_tb_model->getData();

			$data = array();
			$this->header_data['header_template'] = '11';
			$this->header_data['show_alarm'] = false;
			$this->header_data['head_title'] = '설정';
			$this->header_data['back_url'] = '/';
			//$this->header_data['back_url'] = '/member/menu';
			
	        $data['meta_title'] = '투자를 쉽고 편리하게 - 초이스스탁US';
			$data['m_push_ticker'] = $user_info['m_push_ticker'];
			$data['m_push_service'] = $user_info['m_push_service'];
			$data['m_push_marketing'] = $user_info['m_push_marketing'];
			$data['m_push_date'] = $user_info['m_push_date'];

			$this->_view('/member/notice', $data);
		}
		else {
            $this->common->alert('회원 정보가 없습니다.');
			$this->common->locationhref('/');
			exit;
		}
    }

	public function notice_setup($col='', $val='') {
	
        if($this->input->is_ajax_request() === FALSE) {
            $this->common->alert('잘못된 접근입니다.');
			$this->common->locationhref('/');
			exit;
		}

        if($this->session->userdata('is_login')) {
			$user_id = $this->session->userdata('user_id');
		
			if($col == '' || $val == '') {
				$result = array('error' => '알림 설정이 실패했습니다.[1]', 'res' => '2');
				exit(json_encode($result));
			}

			$this->output->set_content_type('application/json');

			$this->load->model(DBNAME.'/member_tb_model');
			$update_params = array(
				$col => $val,
				//'m_push_date' => date('Y-m-d H:i:s')
				'm_mod_date' => date('Y-m-d H:i:s')
			);

			if($this->member_tb_model->doUpdate($user_id, $update_params)->isSuccess()) {

				if($col == 'm_push_marketing') {
					$member_url = SUPER_HOME.'/member/koUserUpdate/'.$user_id.'?m_push_check='.$val;
					$ko_result = json_decode($this->get_content($member_url), true);
				}

				$success = TRUE;
				$result = array('success' => $success, 'res' => date('Y. m/d'));
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

	//이메일 보내기 test
	public function sendmail() {

		$this->load->library('email');
        // 전송할 데이터가 html 문서임을 옵션으로 설정
        $this->email->initialize(array('mailtype'=>'html'));

		// 송신자의 이메일과 이름 정보
		$this->email->from('high@datahero.co.kr', 'master');            
		// 이메이 제목
		$this->email->subject('이메일 전송 test 입니다.');
		// 이메일 본문
		$this->email->message('<a href="https:www.choicestock.co.kr">Click!!</a>');
		// 이메일 수신자.
		//$this->email->to($user->email);
		//$user_email = 'cantatoure@naver.com';
		$user_email = 'cantatoure@daum.net';
		$this->email->to($user_email);
		// 이메일 발송
		if($this->email->send()) {
			echo 'ok ['.date('Y-m-d H:i:s').']';
		}
		else {
			echo 'error ['.date('Y-m-d H:i:s').']';
		}
	}

	public function payuser_test() {

		/* 미주미 유료 회원 리스트 */
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['in']['m_pt_code'] = array('CSPART015', 'CSPART016');
		$params['!=']['m_id'] = 'naver_30305452';

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$member_list = $this->member_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($member_list); exit;
echo '<pre>';
		$cnt = 1;
		foreach($member_list as $key => $val) {
	
			$pay_params = array();
			$pay_params['=']['p_user_id'] = $val['m_id'];
			$pay_params['=']['p_code'] = SRV_CODE;
			//$pay_params['=']['p_status'] = 'P';
			//$pay_params['>=']['p_end_date'] = date('Ymd');

			$pay_extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				//'limit' => 1,
				'slavedb' => true
			);

			$pay_data = array();
			$pay_data = $this->pay_tb_model->getList($pay_params, $pay_extra)->getData();

			foreach($pay_data as $pk => $pv) {
				echo '\''.$pv['p_id'].'\',';
				//print_r($pv);
			}
			/*
			if(is_array($pay_data) && sizeof($pay_data)>0) {
				//echo '\''.$pay_data['p_id'].'\',';
				print_r($pay_data);


				//echo $cnt.'@'.$pay_data['p_user_id'].'@'.$pay_data['p_user_name'].'<br>';

				$cnt++;
			}
			*/
			//echo '<pre>'; print_r($pay_data);

			//if(is_array($pay_data) && sizeof($pay_data)>0 && is_array($data) && sizeof($data)>0) {
			//}
		}

		/* 유료 회원 리스트 
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['m_paid'] = 'Y';
		$params['=']['m_push_service'] = 'Y';
		$params['!=']['m_phone'] = '';

		$extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$member_list = $this->member_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($member_list); exit;

		$cnt = 1;
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
			
			if(is_array($pay_data) && sizeof($pay_data)>0) {
				echo $cnt.' === '.$pay_data['p_user_id'].' === '.$pay_data['p_user_name'].'<br>';

				$cnt++;
			}
			//echo '<pre>'; print_r($pay_data);

			//if(is_array($pay_data) && sizeof($pay_data)>0 && is_array($data) && sizeof($data)>0) {
			//}
		}
		*/

		/* 3일 무료 체험 
		$this->load->model(DBNAME.'/freepay_tb_model');

		$free_params = array();
		$free_params['=']['fp_code'] = SRV_CODE;
		$free_params['>=']['fp_end_date'] = date('Ymd');
		$free_params['=']['m_paid'] = 'N';
		$free_params['!=']['m_phone'] = '';
		$free_params['join']['member_tb'] = 'fp_user_id = m_id';

		$free_extra = array(
			'fields' => '*',
			'slavedb' => true
		);

		$freepay_list = array();
		$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

		$cnt = 1;
		foreach($freepay_list as $key => $val) {
			echo $cnt.' === '.$val['m_id'].'<br>'; 
			$cnt++;
		}
		*/
	}

	//유료회원 리스트
	public function user() {
        
		$this->loginCheck();
        $str = $this->input->get('str');

		if($this->session->userdata('user_level') != '9' || $str == '') {
			$this->common->locationhref('/');
			exit;
		}

		$this->load->model(DBNAME.'/member_tb_model');
		/* 일반회원 */
		$params = array();
		$params['raw'] = '( m_name like \'%'.$str.'%\' || m_phone like \'%'.str_replace('-','',$str).'%\' || m_email like \'%'.$str.'%\' )';

		$extra = array(
			'fields' => 'm_id, m_name, m_phone, m_email, m_paid, m_pt_code, m_reg_date, m_login_date',
			'slavedb' => true,
			'order_by' => 'm_reg_date desc'
		);

		$user = $this->member_tb_model->getList($params, $extra)->getData();

		echo '<table border=1>';
		echo '<tr>';
		echo '<th>아이디</th>';
		echo '<th>필명</th>';
		echo '<th>연락처</th>';
		echo '<th>메일</th>';
		echo '<th>유/무료</th>';
		echo '<th>제휴사코드</th>';
		echo '<th>가입일</th>';
		echo '<th>최근로그인</th>';
		echo '</tr>';

		$this->load->model(DBNAME.'/pay_tb_model');
		
		foreach($user as $val) {
			echo '<tr bgcolor="#FFFF00">';
			echo '<td>'.$val['m_id'].'</td>';
			echo '<td>'.$val['m_name'].'</td>';
			echo '<td>'.$val['m_phone'].'</td>';
			echo '<td>'.$val['m_email'].'</td>';
			echo '<td align="center">'.($val['m_paid']=='Y' ? '유료':'무료').'</td>';
			echo '<td>'.$val['m_pt_code'].'</td>';
			echo '<td>'.$val['m_reg_date'].'</td>';
			echo '<td>'.$val['m_login_date'].'</td>';
			echo '</tr>';

			$pay_params = array();
			$pay_params['=']['p_user_id'] = $val['m_id'];

			$pay_extra = array(
				'fields' => 'p_price, p_pay, p_method, p_status, p_card_code, p_start_date, p_end_date, p_cancel_date, p_at_count, p_at_eventprice, p_at_eventuse, p_rf_price',
				'slavedb' => true,
				'order_by' => 'p_end_date desc'
			);

			$pay = $this->pay_tb_model->getList($pay_params, $pay_extra)->getData();

			if(count($pay)>0) {

				echo '<tr><td colspan="8"><table border="1">';

				echo '<tr>';
				echo '<th width="80">상태</th>';
				echo '<th width="80">구분</th>';
				echo '<th width="80">방법</th>';
				echo '<th width="100">결제금액</th>';
				echo '<th width="80">카드사</th>';
				echo '<th width="100">시작일</th>';
				echo '<th width="100">종료일</th>';
				echo '<th width="100">취소일</th>';
				echo '</tr>';

				foreach($pay as $pval) {
					echo '<tr>';
					
					if($pval['p_pay']=='2') $p_pay = '3달';
					else if($pval['p_pay']=='3') $p_pay = '6달';
					else $p_pay = '자동';

					if($pval['p_method']=='CARD') $p_method = '카드';
					else if($pval['p_method']=='BANK') $p_method = '계좌이체';
					else $p_method = '가상계좌';

					if($pval['p_status']=='E') $p_status = '만료';
					else if($pval['p_status']=='C') $p_status = '취소';
					else if($pval['p_status']=='R') $p_status = '환불';
					else if($pval['p_status']=='W') $p_status = '대기';
					else $p_status = '결제';

					if($pval['p_card_code']=='PA') $p_card_code = '페이팔';
					else if($pval['p_card_code']=='01') $p_card_code = '비씨';
					else if($pval['p_card_code']=='02') $p_card_code = '국민';
					else if($pval['p_card_code']=='04') $p_card_code = '삼성';
					else if($pval['p_card_code']=='06') $p_card_code = '신한';
					else if($pval['p_card_code']=='07') $p_card_code = '현대';
					else if($pval['p_card_code']=='08') $p_card_code = '롯데';
					else if($pval['p_card_code']=='12') $p_card_code = 'NH';
					else if($pval['p_card_code']=='16') $p_card_code = '하나';
					else if($pval['p_card_code']=='37') $p_card_code = '카뱅';

 
					if($pval['p_at_eventprice']>0 &&$pval['p_at_count']==1 &&$pval['p_at_eventuse']=='Y') {
						$p_price = $pval['p_at_eventprice'];
					}
					else {
						$p_price = $pval['p_price'];
					}

					echo '<td align="center">'.$p_status.'</td>';
					echo '<td align="center">'.$p_pay.'</td>';
					echo '<td>'.$p_method.'</td>';
					echo '<td align="right">'.number_format($p_price).'원</td>';
					echo '<td align="center">'.$p_card_code.'</td>';
					echo '<td>'.($pval['p_start_date'] != '' ? date('Y년m월d일', strtotime($pval['p_start_date'])):'').'</td>';
					echo '<td>'.($pval['p_end_date'] != '' ? date('Y년m월d일', strtotime($pval['p_end_date'])):'').'</td>';
					echo '<td>'.($pval['p_cancel_date'] != '' ? date('Y년m월d일', strtotime($pval['p_cancel_date'])):'').'</td>';
					echo '</tr>';
				}
				echo '</table></td></tr>';
			}
		}
		if(count($user)==0) {
			echo '<tr><td colspan="7" align="center">조회된 데이터가 없습니다.</td></tr>';
		}
		echo '</table>';
	}

	//유료회원 리스트
	public function payuser() {
        
		$this->loginCheck();

		if($this->session->userdata('user_level') != '9') {

			$this->common->locationhref('/');
			exit;
		}
		$this->load->model(DBNAME.'/pay_tb_model');
		$params = array();
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => 'p_user_name, m_phone, p_end_date, m_pt_code, m_reg_date, p_pt_code, p_coupon, p_at_count, p_type, p_card_no, p_at_billkey, p_at_day, p_cancel_date, p_at_eventprice, p_pay, p_card_code',
			'slavedb' => true,
			'order_by' => 'p_end_date asc'
		);

        $payuser_list = $this->pay_tb_model->getList($params, $extra)->getData();

//echo '<pre>'; print_r($payuser_list); exit;

		$this->load->model(DBNAME.'/freepay_tb_model');

		$free_params = array();
		$free_params['=']['fp_code'] = SRV_CODE;
		$free_params['>=']['fp_end_date'] = date('Ymd');
		$free_params['=']['m_paid'] = 'N';
		$free_params['not in']['fp_user_id'] = array('naver_22004869');
		$free_params['join']['member_tb'] = 'fp_user_id = m_id';

		$free_extra = array(
			'fields' => 'm_name, m_phone, m_reg_date, fp_end_date, m_pt_code',
			'slavedb' => true,
			'order_by' => 'fp_end_date asc'
		);

		$freepay_list = array();
		$freepay_list = $this->freepay_tb_model->getList($free_params, $free_extra)->getData();

		$this->load->model(DBNAME.'/member_tb_model');
		/* 일반회원 */
		$user_params = array();
		$user_params['>=']['m_reg_date'] = date('Y-m-d 00:00:00', strtotime('-5 days'));
		$user_params['=']['m_paid'] = 'N';

		$user_extra = array(
			'fields' => 'm_id, m_name, m_phone, m_reg_date, m_pt_code',
			'slavedb' => true,
			'order_by' => 'm_reg_date desc'
		);

		$user_3day_list = array();
		$user_3day_list = $this->member_tb_model->getList($user_params, $user_extra)->getData();

		$user_list = array();
		foreach($user_3day_list as $key=>$val) {
			if(!$this->freepay_tb_model->get(array('fp_user_id ' => $val['m_id']))->isSuccess()) {
				$user_list[] = $val;
			}
		}

		//echo '<pre>'; print_r($user_list); exit;

		echo date('Y년 m월 d일').', 총 유료회원 : '.number_format(count($payuser_list)+count($freepay_list)).'명 (2주무료 : '.count($freepay_list).' 명)<br><br>';
		
		echo '<table><tr><td><table border=1>';

		foreach($payuser_list as $key => $val) {
			if($val['p_user_name']=='') $val['p_user_name'] = '&nbsp;';
			echo '<tr><td>'.$val['p_user_name'].'</td><td>'.substr($val['m_reg_date'], 0, 10).'</td></tr>';

			if(substr($val['m_pt_code'], 0, 3) == 'CSM') $payuser_list[$key]['is_mc'] = true;
		}
//echo '<pre>'; print_r($payuser_list); exit;

		foreach($freepay_list as $key => $val) {
			if($val['m_name']=='') $val['m_name'] = '&nbsp;';
			echo '<tr><td bgcolor="#DEDEDE">'.$val['m_name'].'</td><td bgcolor="#DEDEDE">'.substr($val['m_reg_date'], 0, 10).'</td></tr>';
		}


		foreach($user_list as $key => $val) {
			if($val['m_name']=='') $val['m_name'] = '&nbsp;';

			if(substr($val['m_id'],0,2)=='hn') $val['m_name'] = 'hana';
			else if(substr($val['m_id'],0,2)=='mr') $val['m_name'] = 'mirae';

			echo '<tr><td bgcolor="#DEDEFF">'.$val['m_name'].'</td><td bgcolor="#DEDEFF">'.substr($val['m_reg_date'], 0, 10).'</td></tr>';
		}
		
		echo '</table></td><td><table border=1>';

		foreach($payuser_list as $key => $val) {
			if($val['m_phone']=='') $val['m_phone'] = 'N/A';
			echo '<tr><td>'.$val['m_phone'].'</td></tr>';
		}

		foreach($freepay_list as $key => $val) {
			if($val['m_phone']=='') $val['m_phone'] = 'N/A';
			echo '<tr><td bgcolor="#DEDEDE">'.$val['m_phone'].'</td></tr>';
		}

		foreach($user_list as $key => $val) {
			if($val['m_phone']=='') $val['m_phone'] = 'N/A';
			echo '<tr><td bgcolor="#DEDEFF">'.$val['m_phone'].'</td></tr>';
		}

		echo '</table></td><td><table border=1>';

		foreach($payuser_list as $key => $val) {
			if($val['m_pt_code'] !='' && ($val['m_pt_code'] == $val['m_pt_code'])) {
				$m_pt_code = $val['m_pt_code'];
				if($m_pt_code=='CSPART015') $m_pt_code = '미주미';
				else if($m_pt_code=='CSPART016') $m_pt_code = '미주미출판';
				else if($m_pt_code=='CSPART018') $m_pt_code = '인베스팅';
				else if($m_pt_code=='CSPART019') $m_pt_code = '미탐TV';
				else if($m_pt_code=='CSPART021') $m_pt_code = '팍스넷';
			
				if(isset($val['is_mc']) && $val['is_mc'] === true) $m_pt_code = '미래에셋캐피탈';
			}
			else {
				$m_pt_code = '데이터히어로';
			}

			if(substr($val['p_coupon'],0,3) == 'WDZ') {
				$p_coupon = '와디즈';			
			}
			/*
			else if(substr($val['p_coupon'],0,3) == 'STO') {
				$p_coupon = '증권사';			
			}
			else if(substr($val['p_coupon'],0,3) == 'CSP') {
				$p_coupon = '제휴사';			
			}
			else if(substr($val['p_coupon'],0,2) == 'C2') {
				$p_coupon = '프로모션';			
			}
			else if(substr($val['p_coupon'],0,3) == 'CHO') {
				$p_coupon = '홍보용';			
			}
			else if(substr($val['p_coupon'],0,3) == 'UPS') {
				$p_coupon = '외부업체';			
			}
			*/
			else {
				$p_coupon = $val['p_coupon'];			
			}

			$twoweek = '';
			$event = '';
			$term = '';
			if($val['p_type']=='A' && $val['p_card_no'] != '' && $val['p_at_billkey'] != '' && $val['p_at_day'] != '' && $val['p_at_count'] < 1) {
				$twoweek = '2주체험';
			}

			if($val['p_type']=='A' && $val['p_card_no'] != '' && $val['p_at_billkey'] != '' && $val['p_at_eventprice'] == '990') {
				$event = '900원이벤트';
			}

			if($val['p_card_code']=='PA') {
				$event = '해외(페이팔)';
			}

			if($val['p_type']=='G') {
				$term = ($val['p_pay']=='2') ? '3개월 ':'6개월 ';
				if(isset($val['is_mc']) && $val['is_mc'] === true) $term = '';//date('Y-m-d', strtotime($val['p_end_date']));
			}

			$cancel = '';
			if($val['p_at_day'] == '' && $val['p_cancel_date'] != '') $cancel = '(취소)';

			$check_day = substr($val['p_end_date'], 0, 6).'01';
			$lastday = date("Ymt", strtotime($check_day));

			if($val['p_end_date'] > $lastday) {
				$endate = date('Y-m-d', strtotime($lastday));
			}
			else {
				$endate = date('Y-m-d', strtotime($val['p_end_date']));
			}

			echo '<tr><td>'.$endate.$cancel.'</td><td>'.$m_pt_code.'</td><td>'.$term.$event.$twoweek.$p_coupon.'</td><td width=80 align=center>'.$val['p_at_count'].'</td></tr>';
		}

		foreach($freepay_list as $key => $val) {
			if($val['m_pt_code']=='CSPART015') $val['m_pt_code'] = '미주미';
			else if($val['m_pt_code']=='CSPART016') $val['m_pt_code'] = '미주미출판';
			else if($val['m_pt_code']=='CSPART018') $val['m_pt_code'] = '인베스팅';
			else if($val['m_pt_code']=='CSPART019') $val['m_pt_code'] = '미탐TV';
			else if($val['m_pt_code']=='CSPART021') $val['m_pt_code'] = '팍스넷';

			echo '<tr bgcolor="#DEDEDE"><td>'.date('Y-m-d', strtotime($val['fp_end_date'])).'</td><td>'.(($val['m_pt_code']=='')?'데이터히어로':$val['m_pt_code']).'</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
		}

		foreach($user_list as $key => $val) {
			if($val['m_pt_code']=='CSPART015') $val['m_pt_code'] = '미주미';
			else if($val['m_pt_code']=='CSPART016') $val['m_pt_code'] = '미주미출판';
			else if($val['m_pt_code']=='CSPART018') $val['m_pt_code'] = '인베스팅';
			else if($val['m_pt_code']=='CSPART019') $val['m_pt_code'] = '미탐TV';
			else if($val['m_pt_code']=='CSPART021') $val['m_pt_code'] = '팍스넷';

			if(strstr($val['m_id'], 'sk_')) {
				echo '<tr bgcolor="#DEDEFF"><td>&nbsp;</td><td>'.(($val['m_pt_code']=='')?'SK증권':$val['m_pt_code']).'</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
			}
			else {
				echo '<tr bgcolor="#DEDEFF"><td>&nbsp;</td><td>'.(($val['m_pt_code']=='')?'데이터히어로':$val['m_pt_code']).'</td><td>&nbsp;</td><td>&nbsp;</td></tr>';
			}
		}

		echo '</table></td></tr></table>';
	}

	public function memberCheck($id) {
	
        //if(!strstr($_SERVER['REMOTE_ADDR'], '35.83.101.246')) {
        //    exit;
        //}

		$this->_dhCheck();

		$this->load->model(DBNAME.'/member_tb_model');

		if($this->member_tb_model->get(array('m_id'=> $id))->isSuccess()) {
			$dbrow = $this->member_tb_model->getData();

            $result = array();
            $result['is_member'] = true;
            $result['m_email'] = $dbrow['m_email'];
            $result['m_name'] = $dbrow['m_name'];
            $result['m_phone'] = $dbrow['m_phone'];
            $result['m_gender'] = $dbrow['m_gender'];
            $result['m_path'] = $dbrow['m_path'];
            //$result['m_auto_pay'] = $dbrow['m_auto_pay'];
            $result['m_push_ticker'] = $dbrow['m_push_ticker'];
            $result['m_push_service'] = $dbrow['m_push_service'];
            $result['m_push_marketing'] = $dbrow['m_push_marketing'];
            $result['m_push_date'] = $dbrow['m_push_date'];
            $result['m_reg_date'] = $dbrow['m_reg_date'];
            $result['m_level'] = $dbrow['m_level'];
            echo json_encode($result);
            exit;
		}
		else {
            $result = array();
            $result['is_member'] = false;
            echo json_encode($result);
            exit;
		}
	}

	public function csPayCheck($id) {
	
        //if(!strstr($_SERVER['REMOTE_ADDR'], '35.83.101.246')) {
        //    exit;
        //}

		$this->_dhCheck();

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $id;
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			//'slavedb' => true
		);
		$data = array();
		$data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(is_array($data) && sizeof($data)>0) {
            $result = array();
            $result['is_pay'] = true;
            $result['p_pay'] = $data['p_pay'];
            $result['p_type'] = $data['p_type'];
            $result['p_start_date'] = $data['p_start_date'];
            $result['p_end_date'] = $data['p_end_date'];
            echo json_encode($result);
            exit;
		}
		else {
            $result = array();
            $result['is_pay'] = false;
            echo json_encode($result);
            exit;
		}
	}

	public function csUserUpdate($id) {
		
		$this->_dhCheck();

		$phone = $m_push_marketing = '';
		$m_push_marketing = $this->input->get('m_push_check'); //마케팅 수신 동의
		$phone = $this->input->get('m_phone'); 

		//if($id != '' && $phone != '') {
		if($id != '') {

			$this->load->model(DBNAME.'/member_tb_model');

			$update_params = array(
				//'m_phone' => str_replace('-', '', $phone),
				'm_mod_date' =>  date('Y-m-d H:i:s'),
			);

			if($m_push_marketing != '') {
				$update_params['m_push_marketing'] = $m_push_marketing;
				$update_params['m_push_date'] = date('Y-m-d H:i:s');
			}

			if($phone != '') {
				$update_params['m_phone'] = str_replace('-', '', $phone);
			}

			if($this->member_tb_model->doUpdate($id, $update_params)->isSuccess()) {
				$result = array();
				$result['is_update'] = true;
				echo json_encode($result);
				exit;			
			}
			else {
				$result = array();
				$result['is_update'] = false;
				echo json_encode($result);
				exit;
			}
		}
	}

	public function csUserInsert() {
		
		$this->_dhCheck();

		$this->load->model(DBNAME.'/member_tb_model');

		$m_id = $this->input->post('str_id');
		$m_name = $this->input->post('str_name');
		$m_phone = $this->input->post('str_phone');
		$m_email = $this->input->post('str_email');
		$m_gender = $this->input->post('str_gender');
		$m_path = $this->input->post('str_path');
		$m_paid = $this->input->post('str_paid');
		$m_push_marketing = $this->input->post('str_push_marketing');
		$m_push_date = $this->input->post('str_push_date');
		$m_reg_date = $this->input->post('str_reg_date');
		$m_mod_date = $this->input->post('str_mod_date');
		$m_login_date = $this->input->post('str_login_date');

		if(!$this->member_tb_model->get(array('m_id' => $m_id))->isSuccess()) {

			$insert_params = array(
				'm_id' => $m_id,
				'm_name' => $m_name,
				'm_phone' => $m_phone,
				'm_email' => $m_email,
				'm_gender' => $m_gender,
				'm_path' => $m_path,
				'm_paid' => $m_paid,
				'm_push_marketing' => $m_push_marketing,
				'm_push_date' => $m_push_date,
				'm_reg_date' => $m_reg_date,
				'm_mod_date' => $m_mod_date,
				'm_login_date' => $m_login_date,
			);

			if($this->member_tb_model->doInsert($insert_params)->isSuccess()) {
				$result = array();
				$result['proc'] = 'S';
				echo json_encode($result);
				exit;
			}
			else {
				$result = array();
				$result['proc'] = 'F';
				echo json_encode($result);
				exit;
			}
		}
		else {
			$result = array();
			$result['proc'] = 'E';
			echo json_encode($result);
			exit;
		}
	}

	public function csLeave($id) {

		//$this->_dhCheck();

		if($id=='') {
            $result = array();
            $result['is_leave'] = false;
            echo json_encode($result);
            exit;
		}

		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $id;
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['>=']['p_end_date'] = date('Ymd');

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_end_date DESC',
			'limit' => 1,
			//'slavedb' => true
		);
		$data = array();
		$data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(is_array($data) && sizeof($data)>0) {
            $result = array();
            $result['is_leave'] = false;
            echo json_encode($result);
            exit;
		}

		$user_id = $id;
		//$user_name = $this->session->userdata('user_name');
		$sess = array();
		$sess['login_id'] = $user_id;
		//$sess['name'] = $user_name;

		//탈퇴테이블 등록(withdrawal_tb)
		$this->load->model(DBNAME.'/withdrawal_tb_model');

		$wd_end_date = date('Ym').'01';
		$wd_end_date = date("Ym", strtotime($wd_end_date." +6 month"));
		$wd_end_date = $wd_end_date.substr(date('Ymd'), 6, 2);

		$params = array(
			'wd_user_id' => $user_id,
			'wd_code' => SRV_CODE,
			'wd_date' => date('Y-m-d H:i:s'),
			'wd_end_date' => $wd_end_date,
			'wd_mng_id' => $user_id,
			'wd_mng_date' => date('Y-m-d H:i:s'),
		);

		$this->withdrawal_tb_model->doInsert($params);

		//회원정보 지우기(member_tb)
		$this->load->model(DBNAME.'/member_tb_model');
		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {
			$dbrow = $this->member_tb_model->getData();
			$this->member_tb_model->doDelete($dbrow['m_id']);

			$act_key = $dbrow['m_id'];
			$log_array = $dbrow;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'member_tb');
		}

		//결제내역 지우기(pay_tb)
		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $user_id;
		$extra = array(
			'order_by' => '',
		);

		$paylist = $this->pay_tb_model->getList($params, $extra)->getData();
		//echo '<pre>'; print_r($paylist);

		$p_ids = array_keys($this->common->getDataByPK($paylist, 'p_id'));

		if(sizeof($p_ids) > 0) {
			$params = array();
			$params['in']['p_id'] = $p_ids;
			//echo '<pre>'; print_r($params);
			$this->pay_tb_model->doMultiDelete($params);

			$act_key = implode(',', $p_ids);
			$log_array = $paylist;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'pay_tb');
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

		//3일무료정보 지우기(freepay_tb)
		$this->load->model(DBNAME.'/freepay_tb_model');
		if($this->freepay_tb_model->get(array('fp_user_id' => $user_id))->isSuccess()) {
			$dbrow = $this->freepay_tb_model->getData();
			$this->freepay_tb_model->doDelete($dbrow['fp_id']);

			$act_key = $dbrow['fp_id'];
			$log_array = $dbrow;
			$this->common->write_history_log($sess, 'DELETE', $act_key, $log_array, 'freepay_tb');
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
/*
		//로그인 로그 지우기(login_log_tb)
		//$this->load->model(DBNAME.'/login_log_tb_model');
*/
		$result = array();
		$result['is_leave'] = true;
		echo json_encode($result);
		exit;
	}

	public function getMinfo($day='') {
	
		$this->_dhCheck();
		if($day == '') $day = date('Ymd');

		//전체회원수(공통)
		//초스 유료회원(누적, 신규, 취소)

		//전체회원수
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/pay_tb_model');
		$params = array();
		$params['<=']['m_reg_date'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['raw'] = '( m_id like \'naver%\' || m_id like \'kakao%\')';
		$params['slavedb'] = true;
		$all_user = $this->member_tb_model->getCount($params)->getData();

		//신규회원수(당일)
		$params = array();
		$params['raw'] = '( m_id like \'naver%\' || m_id like \'kakao%\')';
 		$params['like_']['m_reg_date'] = date('Y-m-d', strtotime($day));
		$params['slavedb'] = true;
		$day_user = $this->member_tb_model->getCount($params)->getData();

		//유료회원수(누적)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['<=']['p_authdate'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['>=']['p_end_date'] = $day;
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$all_pay = $this->pay_tb_model->getCount($params)->getData();

		//유료회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$day_pay = $this->pay_tb_model->getCount($params)->getData();

		//유료회원수(당월)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$mon_pay = $this->pay_tb_model->getCount($params)->getData();

		//취소회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_cancel_date'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$day_cancel = $this->pay_tb_model->getCount($params)->getData();

		//취소회원수(당월)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_cancel_date'] = date('Y-m', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$mon_cancel = $this->pay_tb_model->getCount($params)->getData();

		//자동결제 유료회원수(누적)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
		$params['<=']['p_authdate'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$all_cs_auto = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 3개월 유료회원수(누적)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '2';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
		$params['<=']['p_authdate'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$all_cs_3g = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 6개월 유료회원수(누적)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '3';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
		$params['<=']['p_authdate'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$all_cs_6g = $this->pay_tb_model->getCount($params)->getData();

		//자동결제 유료회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$cs_auto = $this->pay_tb_model->getCount($params)->getData();

		//(첫)자동결제 유료회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_status'] = 'P';
		$params['=']['p_at_count'] = '1';
		$params['>']['p_at_eventprice'] = 0;
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$cs_auto_first = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 3개월 유료회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '2';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$cs_3g = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 6개월 유료회원수(당일)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '3';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m-d', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$cs_6g = $this->pay_tb_model->getCount($params)->getData();
		
		//자동결제 유료회원수(당월)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$mon_cs_auto = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 3개월 유료회원수(당월)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '2';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$mon_cs_3g = $this->pay_tb_model->getCount($params)->getData();

		//기간결제 6개월 유료회원수(당월)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '3';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
 		$params['like_']['p_authdate'] = date('Y-m', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		$params['slavedb'] = true;
		$mon_cs_6g = $this->pay_tb_model->getCount($params)->getData();
		
		//자동결제 유료회원정보(누적)
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['=']['p_pay'] = '1';
		$params['=']['p_status'] = 'P';
		$params['!=']['p_method'] = 'COUPON';
		$params['>=']['p_end_date'] = $day;
		$params['<=']['p_authdate'] = date('Y-m-d 23:59:59', strtotime($day));
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';
		
		$extra = array(
			'fields' => array('p_at_count', 'count(p_id) as cnt'),
			'group_by' => 'p_at_count',
			'order_by' => 'p_at_count DESC',
			'slavedb' => true
		);

		$auto_list = $this->pay_tb_model->getList($params, $extra)->getData();

		$result = array();
		$result['all_cs_user'] = $all_user;			//전체회원수
		$result['all_cs_pay'] = $all_pay;			//유료회원수(전체)
		$result['day_cs_pay'] = $day_pay;			//유료회원수(당일)
		$result['day_cs_cancel'] = $day_cancel;		//취소회원수(당일)
		$result['day_cs_user'] = $day_user;			//신규회원수(당일)
		$result['mon_cs_pay'] = $mon_pay;			//유료회원수(당월)
		$result['mon_cs_cancel'] = $mon_cancel;		//취소회원수(당월)
		$result['all_cs_auto'] = $all_cs_auto;		//자동결제 유료회원수(전체)
		$result['all_cs_3g'] = $all_cs_3g;			//기간결제 3개월 유료회원수(전체)
		$result['all_cs_6g'] = $all_cs_6g;			//기간결제 6개월 유료회원수(전체)
		$result['cs_auto'] = $cs_auto;				//자동결제 유료회원수(당일)
		$result['cs_3g'] = $cs_3g;					//기간결제 3개월 유료회원수(당일)
		$result['cs_6g'] = $cs_6g;					//기간결제 6개월 유료회원수(당일)
		$result['cs_auto_list'] = $auto_list;		//자동결제 유료회원정보(전체)
		$result['mon_cs_auto'] = $mon_cs_auto;		//자동결제 유료회원수(당월)
		$result['mon_cs_3g'] = $mon_cs_3g;			//기간결제 3개월 유료회원수(당월)
		$result['mon_cs_6g'] = $mon_cs_6g;			//기간결제 6개월 유료회원수(당월)
		$result['cs_auto_first'] = $cs_auto_first;	//(첫)자동결제 유료회원수(당일)

		echo json_encode($result);
		exit;
	}

	public function getMlist($page='1') {
		$this->_dhCheck();
		$this->load->model(DBNAME.'/member_tb_model');

		if($page == null){
			$page = 1;
		}

        $chk_term = $this->input->get('chk_term');
        $sdate = $this->input->get('sdate');
		$edate = $this->input->get('edate');
		$view_type = $this->input->get('vt');
		$view_keyword = $this->input->get('vk');

		$PAGE_ARTICLE_ROW = 20;
		$PAGE_OFFSET = ($page - 1) * $PAGE_ARTICLE_ROW;

		$params = array();
		$params['raw'] = '( m_id like \'naver%\' || m_id like \'kakao%\')';

		if($chk_term == '1') {
			$params['>=']['m_reg_date'] = $sdate.' 00:00:00';
			$params['<=']['m_reg_date'] = $edate.' 23:59:59';
		}

		if($view_keyword != '') {
			if($view_type == 't') {
				$params['like']['m_phone'] = $view_keyword;
			}
			else if($view_type == 'n'){
				$params['like']['m_name'] = $view_keyword;
			}
			else {
				$params['like']['m_email'] = $view_keyword;
			}
		}

		$TOTAL_COUNT = $this->member_tb_model->getCount($params)->getData();

		$extra = array(
			'fields' => array('m_id', 'm_name', 'm_phone', 'm_email', 'm_login_date'),
			'order_by' => 'm_reg_date DESC',
			'offset' => ($page-1) * $PAGE_ARTICLE_ROW,
			'limit' => $PAGE_ARTICLE_ROW,
			'slavedb' => true
		);

		$list = $this->member_tb_model->getList($params, $extra)->getData();

		$result = array();
		$result['list'] = $list; 
		$result['total_count'] = $TOTAL_COUNT; 
		echo json_encode($result);
		exit;
	}

	public function getPlist($type='') {
		$this->_dhCheck();
		$this->load->model(DBNAME.'/pay_tb_model');

		if($type=='list') {
			$chk_term = $this->input->get('chk_term');
			$sdate = $this->input->get('sdate');
			$edate = $this->input->get('edate');
			$view_type = $this->input->get('vt');
			$view_keyword = $this->input->get('vk');

			//유료회원리스트
			$params = array();
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['!=']['p_method'] = 'COUPON';
			$params['>=']['p_end_date'] = date('Ymd');
			$params['<=']['p_authdate'] = date('Y-m-d 23:59:59');
			$params['=']['m_level'] = '0';
			$params['join']['member_tb'] = 'p_user_id = m_id';
			
			if($chk_term == '1') {
				$params['>=']['m_reg_date'] = $sdate.' 00:00:00';
				$params['<=']['m_reg_date'] = $edate.' 23:59:59';
			}

			if($view_keyword != '') {
				if($view_type == 't') {
					$params['like']['m_phone'] = $view_keyword;
				}
				else if($view_type == 'n'){
					$params['like']['m_name'] = $view_keyword;
				}
				else {
					$params['like']['m_email'] = $view_keyword;
				}
			}

			$total_count = $this->pay_tb_model->getCount($params)->getData();

			$extra = array(
				'fields' => array('m_id', 'm_name', 'm_phone', 'm_email', 'm_login_date'),
				'order_by' => 'p_id DESC',
				'slavedb' => true
			);

			$cs_payuser = $this->pay_tb_model->getList($params, $extra)->getData();

			$result = array();
			$result['list'] = $cs_payuser; 
			$result['total_count'] = $total_count; 
			echo json_encode($result);
			exit;
		}
		else {
			//유료회원리스트
			$params = array();
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['!=']['p_method'] = 'COUPON';
			$params['>=']['p_end_date'] = date('Ymd');
			$params['<=']['p_authdate'] = date('Y-m-d 23:59:59');
			$params['=']['m_level'] = '0';
			$params['join']['member_tb'] = 'p_user_id = m_id';
			
			$extra = array(
				'fields' => array('p_user_id'),
				'order_by' => 'p_id DESC',
				'slavedb' => true
			);

			//$cs_payuser = $this->pay_tb_model->getList($params, $extra)->getData();
			$cs_payuser = array_keys($this->common->getDataByPK($this->pay_tb_model->getList($params, $extra)->getData(), 'p_user_id'));

			$result = array();
			$result['cs_payuser'] = $cs_payuser; 
			echo json_encode($result);
			exit;
		}
	}

	public function getPayAll($page='1') {
		$this->_dhCheck();
		$this->load->model(DBNAME.'/pay_tb_model');

		if($page == null){
			$page = 1;
		}

		$chk_term = $this->input->get('chk_term');
		$sdate = $this->input->get('sdate');
		$edate = $this->input->get('edate');
		$view_srv = $this->input->get('vs');
		$view_type = $this->input->get('vt');
		$view_keyword = $this->input->get('vk');
		$view_methood = $this->input->get('vm');
		$view_refund = $this->input->get('vr');
		$view_date = $this->input->get('vd');

		if($view_date == '') {
			$orderby = 'p_authdate';
		}
		else {
			$orderby = 'p_date';
		}

		$PAGE_ARTICLE_ROW = 20;
		$PAGE_OFFSET = ($page - 1) * $PAGE_ARTICLE_ROW;

		//유료회원리스트
		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		//$params['=']['p_status'] = 'P';
		//$params['!=']['p_method'] = 'COUPON';
		//$params['>=']['p_end_date'] = date('Ymd');
		//$params['<=']['p_authdate'] = date('Y-m-d 23:59:59');
		//$params['=']['m_level'] = '0';
		$params['join']['member_tb'] = 'p_user_id = m_id';
		
		if($chk_term == '1') {
			$params['>='][$orderby] = $sdate.' 00:00:00';
			$params['<='][$orderby] = $edate.' 23:59:59';
		}
		else {
			if($view_srv == '' && $view_keyword == '') {
				$now = time();
				$month_ago = date('Y-m-d', strtotime('-1 month', $now));
				$params['>='][$orderby] = $month_ago.' 00:00:00';
			}
		}

		if($view_keyword != '') {
			if($view_type == 't') {
				$params['like']['m_phone'] = $view_keyword;
			}
			else if($view_type == 'n'){
				$params['like']['m_name'] = $view_keyword;
			}
			else {
				$params['like']['m_email'] = $view_keyword;
			}
		}

		if($view_methood != '') {
			$params['=']['p_type'] = $view_methood;
		}

		if($view_refund == 'R') {
			$params['!=']['p_rf_requestdate'] = '';
			$params['raw'] = '(p_rf_pcdate is null || p_rf_pcdate = \'\')';
			$params['>=']['p_end_date'] = date('Ymd');
		}

		$TOTAL_COUNT = $this->pay_tb_model->getCount($params)->getData();

		$extra = array(
			//'fields' => array('m_id', 'm_name', 'm_phone', 'm_email', 'm_login_date', 'p_id', 'p_price', 'p_pay', 'p_method', 'p_status', 'p_date', 'p_start_date', 'p_end_date', 'p_authdate', 'p_cancel_date', 'p_cancel_num', 'p_rf_price'),
			'fields' => '*',
			'order_by' => $orderby.' DESC',
			'offset' => ($page-1) * $PAGE_ARTICLE_ROW,
			'limit' => $PAGE_ARTICLE_ROW,
			'slavedb' => true
		);

		$list = $this->pay_tb_model->getList($params, $extra)->getData();

		$result = array();
		$result['list'] = $list; 
		$result['total_count'] = $TOTAL_COUNT; 

		if($chk_term == '1' && $view_srv == 'C') {
			$params = array();
			$params['=']['p_code'] = SRV_CODE;
			$params['=']['p_status'] = 'P';
			$params['!=']['p_method'] = 'COUPON';
			$params['=']['m_level'] = '0';
			$params['>='][$orderby] = $sdate.' 00:00:00';
			$params['<='][$orderby] = $edate.' 23:59:59';
			$params['raw'] = '(p_cancel_date is null || p_cancel_date = \'\')';
			$params['join']['member_tb'] = 'p_user_id = m_id';

			$extra = array(
				'fields' => '*',
				'order_by' => 'p_id DESC',
				'slavedb' => true
			);

			$paylist = $this->pay_tb_model->getList($params, $extra)->getData();

			$cs_count = $cs_price = 0;
			foreach($paylist as $val) {
				$cs_price += ($val['p_at_count'] == '1' && $val['p_event_price'] > 0 && $val['p_at_eventuse'] == 'Y') ? $val['p_event_price']:$val['p_price'];
			}
			$cs_count = count($paylist);
			$result['cs_count'] = $cs_count; 
			$result['cs_price'] = $cs_price;
		} 

		echo json_encode($result);
		exit;
	}

	public function setPay() {
		$this->_dhCheck();

        $p_id = $this->input->get('p_id');
        $p_user_id = $this->input->get('p_user_id');
        $p_admin_id = $this->input->get('p_admin_id');
		$p_method = $this->input->post('p_method');
		$refund_price = $this->input->post('refund_price');
		$p_rf_bank = $this->input->post('select_bank');
		$p_rf_accno = $this->input->post('account_number');


		$this->load->model(DBNAME.'/pay_tb_model');

		$params = array();
		$params['=']['p_user_id'] = $p_user_id;
		$params['=']['p_id'] = $p_id;

		$extra = array(
			'fields' => '*',
		);

		$pay_data = array_shift($this->pay_tb_model->getList($params, $extra)->getData());

		if(is_array($pay_data) && sizeof($pay_data)) {

			//자동결제이고 결제승인일이 1일 지난 고객일 경우 ==> 결제취소가 아닌 결제예정일 삭제
			$s_date = strtotime(date('Ymd'));
			$e_date = strtotime(date('Ymd', strtotime($pay_data['p_authdate']))); //결제승인일
			//$e_date = strtotime($pay_data['p_start_date']); //서비스시작일(결제승인일)

			$during =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

			if($pay_data['p_type'] == 'A' && $during > 1 ) {

				$update_params = array(
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_cancel_num' => $p_admin_id, //관리자ID
					'p_at_day' => '',
				);
			}
			else {
				$update_params = array(
					'p_status' => 'C',
					'p_cancel_date' => date('Y-m-d H:i:s'),
					'p_cancel_num' => $p_admin_id, //관리자ID
					'p_at_billkey' => '',
					'p_at_day' => '',
					'p_rf_price' => $refund_price,
				);

				if($p_method == 'VBANK' && $p_rf_bank != '' && $p_rf_accno!='') {
					$update_params['p_status'] = 'R';
					$update_params['p_rf_bank'] = $p_rf_bank;
					$update_params['p_rf_accno'] = $p_rf_accno;
					$update_params['p_rf_pcdate'] = date('Y-m-d H:i:s');
				}
			}

			$this->pay_tb_model->doUpdate($pay_data['p_id'], $update_params);

			$this->load->model(DBNAME.'/member_tb_model');
			
			$member_update = array(
				'm_paid' => 'N'
			);

			$this->member_tb_model->doUpdate($p_user_id, $member_update);

			$result = array();
			$result['is_success'] = true; 
			echo json_encode($result);
			exit;
		}
		else {
			$result = array();
			$result['is_success'] = false; 
			$result['msg'] = '결제 정보가 없습니다.'.$user_id; 
			echo json_encode($result);
			exit;
		
		}
	}

	public function getPayTop() {
		$this->_dhCheck();
		$this->load->model(DBNAME.'/pay_tb_model');

		//당일 결제회원 수, 결제금액, 취소회원 수
		//당월 결제회원수, 결제금액, 취소회원 수
		//- (순)결제: 총결제금액- (결제취소금액+ 환불완료금액)

		$params = array();
		$params['=']['p_code'] = SRV_CODE;
		$params['!=']['p_method'] = 'COUPON';
 		$params['like_']['p_authdate'] = date('Y-m');
		$params['=']['m_level'] = '0';
        $params['join']['member_tb'] = 'p_user_id = m_id';

		$extra = array(
			'fields' => '*',
			'order_by' => 'p_id DESC',
			'slavedb' => true
		);

		$list = array();
		$list = $this->pay_tb_model->getList($params, $extra)->getData();
		
		$day_cs_pcount = $day_cs_price = $day_cs_cprice = $day_cs_ccount = $mon_cs_pcount = $mon_cs_price = $mon_cs_cprice = $mon_cs_ccount = 0;
		
		foreach($list as $val) {
			if(date('Ymd', strtotime($val['p_authdate'])) == date('Ymd') && $val['p_status'] == 'P' && $val['p_end_date'] >= date('Ymd')) {
				$day_cs_pcount += 1;

				if($val['p_at_eventprice']>0 && $val['p_at_count']==1 && $val['p_at_eventuse']=='Y') {
					$day_cs_price += $val['p_at_eventprice'];
				}
				else {
					$day_cs_price += $val['p_price'];
				}
			}

			if(date('Ymd', strtotime($val['p_authdate'])) == date('Ymd') && $val['p_status'] == 'C') {
				$day_cs_ccount += 1;
				$day_cs_cprice += $val['p_rf_price'];
			}

			if($val['p_status'] == 'P') {
				$mon_cs_pcount += 1;

				if($val['p_at_eventprice']>0 && $val['p_at_count']==1 && $val['p_at_eventuse']=='Y') {
					$mon_cs_price += $val['p_at_eventprice'];
				}
				else {
					$mon_cs_price += $val['p_price'];
				}

			}
			else if($val['p_status'] == 'C') {
				$mon_cs_ccount += 1;
				$mon_cs_cprice += $val['p_rf_price'];
			}
		}

		$result = array();
		$result['day_cs_pcount'] = $day_cs_pcount; 
		$result['day_cs_price'] = $day_cs_price - $day_cs_cprice; 
		$result['day_cs_ccount'] = $day_cs_ccount; 

		$result['mon_cs_pcount'] = $mon_cs_pcount; 
		$result['mon_cs_price'] = $mon_cs_price - $mon_cs_cprice; 
		$result['mon_cs_ccount'] = $mon_cs_ccount; 

		echo json_encode($result);
		exit;
	}

	public function getMember($user_id='') {
		$this->_dhCheck();
		$this->load->model(DBNAME.'/pay_tb_model');
		$this->load->model(DBNAME.'/member_tb_model');
		$this->load->model(DBNAME.'/freepay_tb_model');

		if($this->member_tb_model->get(array('m_id' => $user_id))->isSuccess()) {

			$user_info = $this->member_tb_model->getData();

			$params = array();
			$params['=']['p_user_id'] = $user_id;
			$params['=']['p_code'] = SRV_CODE;

			$extra = array(
				'fields' => '*',
				'order_by' => 'p_end_date DESC',
				'slavedb' => true
			);

			$cs_pay_info = array();
			$cs_pay_info = $this->pay_tb_model->getList($params, $extra)->getData();

			$free_params = array();
			$free_params['=']['fp_user_id'] = $user_id;
			$free_params['=']['fp_code'] = SRV_CODE;
			$free_extra = array(
				'fields' => '*',
				'slavedb' => true
			);

			$cs_free_info = array();
			$cs_free_info = array_shift($this->freepay_tb_model->getList($free_params, $free_extra)->getData());

			$result = array();
			$result['user_info'] = $user_info; 
			$result['cs_free_info'] = $cs_free_info; 
			$result['cs_pay_info'] = $cs_pay_info; 
			echo json_encode($result);
			exit;
		}
		else {
			$result = array();
			$result['user_info'] = ''; 
			$result['cs_free_info'] = ''; 
			$result['cs_pay_info'] = ''; 
			echo json_encode($result);
			exit;
		}
	}

	public function setMember() {
		$this->_dhCheck();

        $user_id = $this->input->post('user_id');
        $user_phone = $this->input->post('user_phone');
        $user_email = $this->input->post('user_email');
        $memo = $this->input->post('memo');
        $admin_info = $this->input->post('admin_info');

		if($user_id == '') {
			$result = array();
			$result['is_success'] = false; 
			$result['msg'] = '회원아이디가 없습니다.'; 
			echo json_encode($result);
			exit;
		}

		$update_params = array();

		if($user_phone != '') {
			$update_params['m_phone'] = $user_phone;
		}

		if($user_email != '') {
			$update_params['m_email'] = $user_email;
		}

		$update_params['m_memo'] = $admin_info.'|'.$memo;

		$this->load->model(DBNAME.'/member_tb_model');
		$this->member_tb_model->doUpdate($user_id, $update_params);

		$result = array();
		$result['is_success'] = true; 
		echo json_encode($result);
		exit;
	}

    private function _dhCheck() {
        if(!strstr($_SERVER['REMOTE_ADDR'], '35.83.101.246')) {
		//if(!strstr($_SERVER['REMOTE_ADDR'], '61.74.181') && !strstr($_SERVER['REMOTE_ADDR'], '211.37.174.28') && !strstr($_SERVER['REMOTE_ADDR'], '35.83.101.246')) {
            exit;
        }
    }
}
/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */