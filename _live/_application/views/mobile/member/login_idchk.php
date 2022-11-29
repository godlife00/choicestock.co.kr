			<!-- 주요 콘텐츠 -->
            <div class="loign_chk">
                <h2 class="login_title">회원로그인</h2>            
                <div class="id_chk">
                    <p class="sns_name"><?=$user_path=='N' ? '네이버' : '카카오'?> 이메일</p>
                    <p class="sns_chk"><?=$user_email;?></p>
                </div>      
                <!-- //id_chk -->
            </div>
            <!-- //loign_chk -->
			<form name="infoForm">
				<input type="hidden" name="user_path" value="<?=$user_path?>">
				<input type="hidden" name="time_check" value="">
				<!--<input type="hidden" name="m_push_check" value="">-->
				<input type="hidden" name="auth_check" value="">
            <div class="agree_area">
				<p class="new_free2week"><strong>신규 회원에게는<br><b>프리미엄 2주 무료체험</b>이 제공됩니다.</strong> (최초 1회)</p>
                <p class="txt">서비스 이용을 위해 약관을 확인하시고 동의해주세요.</p>
                <div class="agree_from">
                    <div class="label" id="terms_tab">
                        <p class="label_chk"><i></i>초이스스탁US 서비스 약관에 동의합니다.</p>                        
                        <a href="/member/terms"><span class="terms_btn">내용보기</span></a>
                    </div>
                    <div class="label" id="policy_tab">
                        <p class="label_chk"><i></i>개인정보 수집 및 이용에 동의합니다.</p>                        
                        <a href="/member/policy"><span class="terms_btn">내용보기</span></a>
                    </div>

					<!-- 휴대폰 등록 -->
                    <div class="label phone_label" id="phone_tab">
                        <p class="label_chk"><i></i>프리미엄 서비스를 위한 휴대폰번호 수집 동의(필수)</p>
                        <p class="guide_txt">서비스 편의를 위해 휴대폰 문자 또는 알림 메시지(Push)등으로 종목추천/관심종목 등 알림서비스가 제공됩니다.</p>
                    </div>
                    <div class="phonePin_form">
						<fieldset>
							<div class="box">
								<input type="tel" name="new_phone_number" id="new_phone_number" maxlength="13" placeholder="010-1234-4567" class="pinInput" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
								<!-- 최초 인증 요청 -->
								<input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendAuthNo('info');" value="인증 요청" class="pinBtn pin_req">
								<!-- 다시 인증 요청 -->
								<input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendInit();" value="다시 요청" class="pinBtn pin_reqAgain">
								<p class="dsc_error" id="phone_noti" style="display:none;"></p>
							</div>
							<div class="box" id="new_auth_area">
								<input type="number" class="pinInput_out" name="auth_no" id="timer" maxlength="4" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" placeholder="인증번호 입력 (03:00)">
								<input type="button" src="/img/icon_search.svg" onClick="javascript:fnAuthConfirm();" value="번호 확인" class="pin_completion">
                                <p class="dsc_error" id="auth_result" style="display:none;"></p>
								<p class="txt_reject">휴대폰으로 전송된 인증번호 입력 후 '확인' 버튼을 눌러주세요.</p>
							</div>
						</fieldset>
                    </div>
                    <!-- //phonePin_form -->
                    <!-- //휴대폰 등록 -->

					<div class="label sub_label" id="marketing_tab">
						<p class="label_chk"><i></i>뉴스레터, 특별 프로모션 정보를 수신합니다. (선택)</p>      
                    </div>

                    <div class="btnArea payBtn">                        
                        <a href="javascript:fnAgreeChk()" class="btn btn_save">동의<i></i></a>
                    </div>
                </div>
                <!-- //agree_from -->
            </div>
            <!-- //agree_area -->
			</form>
