<script type="text/javascript">
<!--
function fnAgreeChk() {
	if( $('#terms_tab').hasClass('active') == false ) {
		HK.showToast('서비스 이용약관에 동의하셔야 합니다');
		return;
	}
	if( $('#policy_tab').hasClass('active') == false ) {
		HK.showToast('개인정보 취급방침에 동의하셔야 합니다');
		return;
	}
	if( $('#marketing_tab').hasClass('active') == false ) {
		HK.showToast('서비스 관리를 위한 전화번호 수집에 동의하셔야 합니다');
		return;
	}

	location.href= '/<?=WT?>_member/get_phone?token=<?=$token?>&appVersion=<?=$appVersion?>&deviceType=<?=$deviceType?>&adid=<?=$adid?>';
}	
//-->
</script>
			<div class="header_wowtv">
				<h1 class="h1_logo"><a href="javascript:;">미국주식창</a></h1>
				<a href="javascript:;" class="alarm"></a>
			</div>
			<!-- //header_wowtv -->

			<!-- 주요 콘텐츠 -->
            <div class="loign_chk">
                <h2 class="login_title"><b>미국주식창</b></h2>
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
                    </div>
                    <div class="btnArea payBtn">
                        <a href="javascript:fnAgreeChk();" class="btn btn_save">동의</a>
                    </div>                    
                </div>
                <!-- //agree_from -->
            </div>
            <!-- //agree_area -->