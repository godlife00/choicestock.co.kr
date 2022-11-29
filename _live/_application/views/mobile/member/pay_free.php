        <!-- 2주 무료 class = sub_freeguide
        <div id="container" class="sub_payment sub_freeguide">-->
            <div class="serviceStep step01">
                <div class="step_box active">
                    <h3 class="title">초이스스탁US 프리미엄<br> <strong>무료 이용</strong> 신청</h3>
                    <p class="txt">2주간 초이스스탁US를 자유롭게 이용하세요.</p>
                    <ul class="guide">
                        <li><?=date('Y년 m월 d일', strtotime($p_at_day))?> 전에 프리미엄 서비스를 해지하시면 요금이 청구되지 않습니다.</li>
                        <li>무약정으로 언제든지 해지하실 수 있습니다. </li>
                    </ul>
                </div>
                <!-- //step_box -->
            </div>
            <!-- //serviceStep -->

            <div class="mapage_form">

				<form name="autoPayForm" method="post" onsubmit="return false;">
					<input type="hidden" name="time_check" value="">
					<input type="hidden" name="auth_check" value="">
					<input type="hidden" name="phone_check" value="<?=($user_info['m_phone']!='')? 'Y':'N'?>">

					<input type="hidden" name="Amt" value="<?=$price?>">          
					<input type="hidden" name="p_code" value="<?=$p_code?>">          
					<input type="hidden" name="pay" value="<?=$pay?>">          
					<input type="hidden" name="Amt_st" value="<?=$price?>">          
					<input type="hidden" name="pay_free" value="Y">    
					<input type="hidden" name="dc_rate" value="">          
					<input type="hidden" name="cp_done" value="">          
					<input type="hidden" name="coupon_nm" value="">          
                    <fieldset>
                        <div class="form_table">
                            <table border="1" class="">
                                <tbody>
                                    <tr>
                                        <th scope="row">이름</th>
                                        <td>
                                            <div class="item">
                                                <p class="txt_info"><?=$user_info['m_name']?></p>
                                            </div>
                                        </td>
                                    </tr>
									<?php if(!isset($user_info['m_phone']) || $user_info['m_phone']=='') :?>
                                    <tr>
                                        <th scope="row">휴대폰번호</th>
                                        <td>
                                            <div class="item mod_phone">
												<input type="tel" name="new_phone_number" id="new_phone_number" class="phone_mod" maxlength="13" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
												<a href="javascript:fnSendAuthNo('free');"><span class="certifi_btn">인증문자 전송</span></a>
												<p class="i_guide">휴대폰 번호로 프리미엄 알림서비스가 제공됩니다.</p>
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
                                    <tr>
										<?php
											if(strlen($user_info['m_phone']) > 10) {
												$phone_no = substr($user_info['m_phone'],0,3).'-'.substr($user_info['m_phone'],3,4).'-'.substr($user_info['m_phone'],7,4);
											}
											else {
												$phone_no = substr($user_info['m_phone'],0,3).'-'.substr($user_info['m_phone'],3,3).'-'.substr($user_info['m_phone'],6,4);
											}
										?>
                                        <th scope="row">휴대폰번호</th>
                                        <td>
                                            <div class="item mod_phone">
                                                <p class="txt_info"><?=$phone_no;?></p>            
                                                <a href="/member/info" class="mod_btn">휴대폰 번호 변경</a>                                                                                                                                            
                                                <p class="i_dsc phone">휴대폰번호는 마이페이지에서 변경할 수 있습니다.</p>                                        
                                            </div>
                                        </td>
                                    </tr>
									<?php endif;?>
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </form>
            </div>
            
            <div class="sub_mid">
                <ul class="notice_txt">
                    <h3 class="service_title"><strong>[무료 이용 유의사항]</strong></h3>                    
                    <li class="title">무료 이용 종료 전에 서비스를 해지하시지 않으면 월 정기결제로 자동연장됩니다.</li>                    
                    <li class="title">무료 이용 기간에 언제든지 해지하실 수 있습니다.</li>
                </ul>

                <div class="notice_service">
                    <ul class="">
                        <li>- 무료 이용 종료 후 월 정기결제 금액 <strong><?=number_format($price)?>원</strong>(부가세 포함)</li>
                        <li>- 월 정기결제일 : <strong>매월 <?=substr($p_at_day, 6, 2);?>일</strong></li>
                    </ul>
                </div>

                <div class="agree_area">                    
					<div class="agree_from">
                        <div class="label free_label" id="freeChk1">
                            <p class="label_chk"><i></i><strong>[필수] 프리미엄 서비스 2주 무료 이용</strong>을 신청합니다.</p>                                                                                
                        </div>                                                
                        <div class="label free_label" id="freeChk2">                            
                            <p class="label_chk sub_label"><i></i>[필수] 특별 프로모션 알림 정보를 수신합니다.</p>                                                    
                        </div>                                                
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="javascript:autoPayStart('free');" class="btn btn_save">다음<i></i></a>
                </div>

            </div>