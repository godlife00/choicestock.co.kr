			<!-- 주요 콘텐츠 -->
            <div class="mapage_area">
			<?php include_once INC_PATH.'/info_submenu.php'; ?>
                <div class="mapage_form">
                    <form name="infoForm" method="post" action="/member/save_info"  onsubmit="return false;">
					<input type="hidden" name="time_check" value="">
					<input type="hidden" name="m_push_check" value="">
					<input type="hidden" name="auth_check" value="">
                        <fieldset>
                            <div class="form_table">
                                <table border="1" class="">
                                    <tbody>
                                        <tr>
                                            <th scope="row">이름</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info"><?=$user_name?></p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">이메일</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info"><?=$user_email?></p>
                                                    <p class="i_dsc email"><i></i><?=$user_path=='N' ? '네이버' : '카카오'?>ID로 가입하셨습니다.</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">성별</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info">확인불가</p>
                                                </div>
                                            </td>
                                        </tr>

									<?php if($this->session->userdata('is_paid')===TRUE) :?>
										<?php if(isset($user_phone) && $user_phone!='') :?>
											<?php
												if(strlen($user_phone) > 10) {
													$phone_no =  substr($user_phone,0,3).'-'.substr($user_phone,3,4).'-'.substr($user_phone,7,4);
												}
												else {
													$phone_no =  substr($user_phone,0,3).'-'.substr($user_phone,3,3).'-'.substr($user_phone,6,4);
												}
											?>

                                        <tr>
                                            <th scope="row">휴대폰번호</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <p class="txt_info" id="phone_number"><?=$phone_no;?></p>
                                                    <span class="mod_btn"><a href="javascript:fnChangePhone();">휴대폰 번호 변경</a></span>
                                                    <p class="i_dsc phone_premium"><i></i>프리미엄회원에게는 휴대폰으로 종목추천&#47;관심 종목 등 알림서비스가 제공됩니다.</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="new_phone_area" style="display:none;">
                                            <th scope="row">신규 휴대폰번호</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <input type="tel" name="new_phone_number" id="new_phone_number" class="phone_mod" maxlength="13" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                    <a href="javascript:fnSendAuthNo('info');"><span class="certifi_btn">인증문자 전송</span></a>
													<!--<p class="i_guide">휴대폰 번호로 프리미엄 알림서비스가 제공됩니다.</p>-->
                                                    <p class="i_dsc phone" id="phone_noti" style="display:none;"></p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="new_auth_area" style="display:none;">
                                            <th scope="row">인증코드 입력</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <input type="tel" name="auth_no" id="new_auth_no" maxlength="4" class="phone_mod" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                    <a href="javascript:fnAuthConfirm();"><span class="certifi_btn">확인</span></a>
                                                    <p class="i_dsc phone" id="time_zone">제한시간 내 입력해주세요. (<span id="timer">03:00</span>)</p>
                                                    <p class="i_dsc phone" id="auth_result" style="display:none;"></p>
                                                </div>
                                            </td>
                                        </tr>
										<?php else :?>
                                        <tr id="new_phone_area" style="display:table-row;">
                                            <th scope="row">신규 휴대폰번호</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <input type="tel" name="new_phone_number" id="new_phone_number" class="phone_mod" maxlength="13" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                    <a href="javascript:fnSendAuthNo('info');"><span class="certifi_btn">인증문자 전송</span></a>
                                                    <p class="i_dsc phone_premium"><i></i>프리미엄회원에게는 휴대폰으로 종목추천&#47;관심 종목 등 알림서비스가 제공됩니다.</p>
													<!--<p class="i_guide">휴대폰 번호로 프리미엄 알림서비스가 제공됩니다.</p>-->
                                                    <p class="i_dsc phone" id="phone_noti" style="display:none;"></p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="new_auth_area" style="display:none;">
                                            <th scope="row">인증코드 입력</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <input type="tel" name="auth_no" id="new_auth_no" maxlength="4" class="phone_mod" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                    <a href="javascript:fnAuthConfirm();"><span class="certifi_btn">확인</span></a>
                                                    <p class="i_dsc phone" id="time_zone">제한시간 내 입력해주세요. (<span id="timer">03:00</span>)</p>
                                                    <p class="i_dsc phone" id="auth_result" style="display:none;"></p>
                                                </div>
                                            </td>
                                        </tr>
										<?php endif;?>
									<?php endif;?>
                                    </tbody>
                                </table>
                            </div>
                        </fieldset>

						<?php if($this->session->userdata('is_paid')===TRUE) :?>
						<div class="agree_area">
							<div class="agree_from">
								<p class="free_sum">                                
									<!--<p class="free_sum"><strong>프리미엄회원에게는 휴대폰으로 종목추천/관심종목 등 알림 서비스가 제공됩니다.</strong></p>-->
									<div class="label<?=($user_marketing=='Y') ? ' active':''?>" id="marketing_tab">
										<p class="label_chk"><i></i>뉴스레터, 특별 프로모션 정보를 수신합니다.(선택)</p>                                                                
									</div>
							</div>
						</div>
						<?php endif;?>

                    </form>
                </div>
            </div>
            <!-- //mapage_area -->

		<?php if($this->session->userdata('is_paid')===TRUE) :?>
			<?php //if(isset($user_phone)&&$user_phone!='') :?>

            <div class="btnArea modBtn">
                <a href="/" class="btn btn_cncl">취소</a>
                <a href="javascript:fnInfoSave();" class="btn btn_save">수정완료</a>
            </div>
			<?php //endif;?>
		<?php endif;?>
