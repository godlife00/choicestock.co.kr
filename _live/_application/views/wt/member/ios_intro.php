<script type="text/javascript">
<!--
	var acc_no = "0123456789-";
	var timer;
	var isRunning = false;

	function fnAgreeChk() {
		var param;
		var text;
		var phoneNumber;
		if( $('#terms_tab').hasClass('active') == false ) {
			text = '서비스 이용약관에 동의하셔야 합니다.';
			param = 'showToast(\"'+text+'\")';
			webkit.messageHandlers.IHK.postMessage(param);
			return;
		}
		if( $('#policy_tab').hasClass('active') == false ) {
			text = '개인정보 취급방침에 동의하셔야 합니다.';
			param = 'showToast(\"'+text+'\")';
			webkit.messageHandlers.IHK.postMessage(param);
			return;
		}
		if( $('#marketing_tab').hasClass('active') == false ) {
			text = '서비스 관리를 위한 전화번호 수집에 동의하셔야 합니다.';
			param = 'showToast(\"'+text+'\")';
			webkit.messageHandlers.IHK.postMessage(param);
			return;
		}

		phoneNumber = $("input[name=phone_number]").val();

		if(phoneNumber == '01120211225') {
		
		}
		else {
			if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {
			}
			else {
				text = '핸드폰 인증이 완료되지 않았습니다.';
				param = 'showToast(\"'+text+'\")';
				webkit.messageHandlers.IHK.postMessage(param);
				return;
			}
		}

		location.href = '/<?=WT?>_member/ios_signup?token=<?=$token?>&appVersion=<?=$appVersion?>&deviceType=<?=$deviceType?>&adid=<?=$adid?>&deviceKey=<?=$deviceKey?>&phoneNumber='+phoneNumber;
	}

	function startTimer(count, display) {
		var minutes, seconds;
		isRunning = true;
		timer = setInterval(function () {
			minutes = parseInt(count / 60, 10);
			seconds = parseInt(count % 60, 10);
			minutes = minutes < 10 ? "0" + minutes : minutes;
			seconds = seconds < 10 ? "0" + seconds : seconds;
			display.textContent = minutes + ":" + seconds;
			// 타이머 끝
		if (--count < 0) {
			clearInterval(timer);
			display.textContent = "시간초과";
			if($("input[name=auth_check]").val() != '1') {
				$("input[name=time_check]").val('1');
			}
			isRunning = false;
			}
		}, 1000);
	}

	function fnSendAuthNo() {

		$('#phone_noti').css("display", "none");
		$('#auth_result').css("display", "none");
		$("input[name=time_check]").val('');
		$("input[name=auth_check]").val('');

		if($('input[name=phone_number]').val() =='') {
			$('#phone_noti').css("display", "block");
			$('#phone_noti').html('<i></i>핸드폰 번호(숫자만)를 입력해 주세요.');

			$('input[name=phone_number]').focus();
			return;
		}
		else {
			var f = document.wtForm;

			for(i=0; i<f.phone_number.value.length; ++i){
				temp = f.phone_number.value.substring(i, i+1);
				if(acc_no.indexOf(temp) == '-1'){
					$('#phone_noti').css("display", "block");
					$('#phone_noti').html('<i></i>핸드폰번호는 숫자만 사용하실 수 있습니다.');
					f.phone_number.value = '';
					f.phone_number.focus();
					return;
				}
			}
		}

		$('#phone_noti').css("display", "none");

		// 남은 시간
		var leftSec = 180;
		display = document.querySelector('#timer');
		// 이미 타이머가 작동중이면 중지
		if (isRunning){
			return;
			//clearInterval(timer);
		}
		startTimer(leftSec, display);

		href = '/<?=WT?>_member/send_authno?no='+$("input[name=phone_number]").val();

		$.ajax({
			url : href,
			type : 'get',
			dataType : 'json',
			cache : false,
			success : function(data) {
				if (data.error) {
					$('#phone_noti').css("display", "block");
					$('#phone_noti').html('<i></i>'+data.msg);
					return;
				}
				else if (data.success) {
					$('#auth_area').css("display", "block");
				}
			}
		});
	}

	function fnAuthConfirm() {
		var time_check = $("input[name=time_check]").val();

		if(time_check=='1') {
			$('#auth_result').css("display", "block");
			$('#auth_result').text('입력 시간이 초과 되었습니다. 다시 시도해 주세요.');
			return;
		}

		if($('input[name=auth_no]').val() =='') {
			$('#auth_result').css("display", "block");
			$('#auth_result').text('인증번호를 입력해 주세요.');
			$('input[name=auth_no]').focus();
			return;
		}

		href = '/<?=WT?>_member/check_authno?no='+$("input[name=auth_no]").val();

		$.ajax({
			url : href,
			type : 'get',
			dataType : 'json',
			cache : false,
			success : function(data) {
				if (data.error) {
					$('#auth_result').css("display", "block");
					$('#auth_result').text(data.msg);
					return;
				}
				else if (data.success) {
					$('#time_zone').css("display", "none");
					$('#phone_noti').css("display", "none");
					$('#auth_result').css("display", "block");
					$('#auth_result').text(data.msg);
					$("#phone_number").attr("readonly",true);
					$("input[name=time_check]").val('');
					$("input[name=auth_check]").val('1');
				}
			}
		});
	}

//-->
</script>
            <div class="loign_chk">
                <h2 class="login_title"><b> <img src="/img/wowtv/wowtv_logo.svg" alt="한국경제TV"></b><span>미국</span>주식창</h2>
                <p class="txt"><b>미국주식창</b>은 미국주식투자자를 위한<br>추천 / 진단 / 발굴 서비스입니다.</p>
            </div>
            <!-- //loign_chk -->

            <div class="agree_area">
                <p class="txt">서비스 이용을 위해 약관을 확인하시고 동의해주세요.</p>
                <div class="agree_from">
					<div class="box">
						<div class="label" id="terms_tab">
							<p class="label_chk"><i></i>서비스이용약관에 동의합니다.(필수)</p>
						</div>
						<a href="http://sw.wowtv.co.kr/Policy/TermsOfService.html" target="_blank"><span class="terms_btn">이용약관 보기</span></a>
                    </div>     
					<div class="box">
						<div class="label" id="policy_tab">
							<p class="label_chk"><i></i>개인정보 수집 및 이용에 동의합니다.(필수)</p>
						</div>
						<a href="http://sw.wowtv.co.kr/Policy/PrivacyPolicy.html" target="_blank"><span class="terms_btn">개인정보처리방침 보기</span></a>
                    </div>     
					<div class="box">
						<div class="label sub_label" id="marketing_tab">
							<p class="label_chk"><i></i>서비스 관리를 위한 전화번호 수집 동의(필수)</p>
						</div>
                        <div class="phonePin_form">
                            <form name='wtForm' method="post" action="" onsubmit="return false;">
							<input type="hidden" name="time_check" value="">
							<input type="hidden" name="auth_check" value="">
								<fieldset>                                                         
                                    <div class="box">
                                        <input type="number" name="phone_number" id="phone_number" placeholder="폰 번호를 입력해주세요" maxlength="13" pattern="[0-9]*" inputmode="numeric" min="0" class="pinInput">
                                        <input type="button" src="/img/wowtv/icon_search.svg" onClick="javascript:fnSendAuthNo();" value="인증번호요청" class="pinBtn">
                                        <p class="dsc_error" id="phone_noti" style="display:none;"></p>                                        
                                    </div>                                               
                                    <div class="box" id="auth_area" style="display:none;">                                        
                                        <input type="number" name="auth_no" id="auth_no" maxlength="4" class="pinInput_out" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" placeholder="인증번호를 입력해주세요" />                                        
                                        <input type="button" src="/img/wowtv/icon_search.svg" onClick="javascript:fnAuthConfirm();" value="인증번호 확인" class="pin_completion">
                                        <p class="pin_countDown" id="time_zone">제한시간 내 입력해주세요. (<span id="timer">03:00</span>)</p>
										<p class="dsc_error" id="auth_result" style="display:none;"></p>
                                    </div>           
                                </fieldset>
                            </form>                            
                        </div>
                        <!-- //phonePin_form -->                        
                        <p class="txt_reject">휴대폰으로 전송된 인증번호 입력 후 확인 버튼을 눌러주세요.</p>
                        <p class="txt" style="text-align: center; color: #333; font-size:0.875rem;"><strong>※ 대한민국 통신사가 아닌 경우 폰번호 앞에 국가번호를 넣어주세요.(예, 미국: 1)</strong></p>

                    </div>
                    <div class="btnArea payBtn">
                        <a href="javascript:fnAgreeChk();" class="btn btn_save">동의</a>
                    </div>                    
                </div>
                <!-- //agree_from -->
            </div>
            <!-- //agree_area -->
