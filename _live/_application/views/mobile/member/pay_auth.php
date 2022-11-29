            <div class="step_area">
                <ul>
                    <li class="active">1. 가입방법 선택</li>
                    <li>2. 결제하기</li>
                    <li>3. 결제완료</li>
                </ul>
            </div>
            <!-- //step_area -->

            <div class="serviceStep step01">
                <div class="step_top">
                    <h2 class="step_title">결제하기</h2>                    
                </div>
                <!-- //step_top -->

                <div class="step_box active">                    
				<?php if($pay=='1') :?>
                    <h3 class="title">월 정기결제 <span class="way">&nbsp;</span></h3>
                    <div class="payRight">
                        <span class="pay01"><?=number_format($pay_info[$pay]['ori_price'])?><b>원 <span class="pay_sale">25%할인</span></b></span>
                        <span class="pay02"><?=number_format($pay_info[$pay]['price'])?><b>원</b></span>                        
                        <div class="pay_line">
                            <p class="txt">(월 정기결제 할인가)</p>
                        </div>                        
				<?php else :?>
                    <h3 class="title"><?=$pay_info[$pay]['month']?>개월 기간 결제 <span class="way">&nbsp;</span></h3>
                    <div class="payRight"> 
                        <span class="pay03"><?=number_format(SRV_PRICE)?><b>원 * <?=$pay_info[$pay]['month']?>개월 =</b></span>                                     
                        <span class="pay02" id="payPrice_1"><?=number_format($pay_info[$pay]['price'])?><b>원</b></span>                        
				<?php endif;?>
                    </div>
                    <!-- //payRight -->
                </div>
                <!-- //step_box -->
            </div>
            <!-- //serviceStep -->

            <div class="account_box">
                <h4 class="title">정보확인</h4>
                <p class="txt_t">계정 정보를 확인해주세요.</p>
                <p class="txt">유료서비스 결제 진행 및 원활한 서비스 제공목적(기본, 부가 서비스 등)</p>
            </div>
            <!-- //account_box -->
            
            <div class="mapage_form">
                <form name="infoForm" method="post">
					<input type="hidden" name="time_check" value="">
					<input type="hidden" name="auth_check" value="">
					<input type="hidden" name="phone_check" value="<?=($user_info['m_phone']!='')? 'Y':'N'?>">
					<input type="hidden" name="pay" value="<?=$pay?>">

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
												<a href="javascript:fnSendAuthNo('pay');"><span class="certifi_btn">인증문자 전송</span></a>
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

            <div class="btnArea payBtn fix_btn">
                <a href="/" class="btn btn_cncl"><i></i>결제취소</a>
                <a href="javascript:fnPayment('<?=$pay?>');" class="btn btn_save">다음<i></i></a>
            </div>