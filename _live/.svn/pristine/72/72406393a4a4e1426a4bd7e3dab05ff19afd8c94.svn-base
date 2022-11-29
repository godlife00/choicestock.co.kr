			<script src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js" type="text/javascript"></script>
			<form name="autoPayForm" method="post" onsubmit="return false;">
				<input type="hidden" name="Amt" value="<?=$pay_info['1']['price']?>">          
				<input type="hidden" name="p_code" value="<?=$p_code?>">          
				<input type="hidden" name="pay" value="<?=$pay?>">          
				<input type="hidden" name="Amt_st" value="<?=$pay_info['1']['price']?>">          
				<!--<input type="hidden" name="new_phone_number" value="<?=$new_phone_number?>">-->
				<input type="hidden" name="dc_rate" value="">          
				<input type="hidden" name="cp_done" value="">          
				<input type="hidden" name="pay_free" value="">          

				<input type="hidden" name="time_check" value="">
				<input type="hidden" name="auth_check" value="">
				<input type="hidden" name="phone_check" value="<?=($user_info['m_phone']!='')? 'Y':'N'?>">
			<!-- 주요 콘텐츠 -->
            <div class="step_area">
                <ul>
                    <li>1. 가입방법 선택</li>
                    <li class="active">2. 결제하기</li>
                    <li>3. 결제완료</li>
                </ul>
            </div>
            <!-- //step_area -->

            <div class="serviceStep step01">
                <div class="step_top">
                    <h2 class="step_title">결제하기</h2>
                    <a href="https://pg.nicepay.co.kr/shared/info.html" class="btn_cardEvent" onclick="window.open('https://pg.nicepay.co.kr/shared/info.html', 'location', 'width=420, height=700, scrollbars=yes'); return false;"><img src="/img/btn_cardEvent..png" alt="카드 무이자 할부 안내"></a>
                </div>
                <!-- //step_top -->

                <div class="step_box active">
                    <h3 class="title">월 정기결제 <span class="way">&nbsp;</span></h3>
                    <div class="payRight">

					<?php if($this->session->userdata('user_auto_pay') == 'Y') :?>
						<span class="pay01"><?=number_format($pay_info['1']['ori_price'])?><b>원</b><span class="pay_sale">40% 할인!</span></span>
						<span class="pay02"><?=number_format($pay_info['1']['price'])?><b>원</b></span>
						<div class="pay_line">
                            <p class="txt"><strong>월 정기결제시 프리미엄 서비스를 40% 할인된 금액에 이용</strong> 할 수 있습니다. (월 <?=number_format($pay_info['1']['price'])?>원)</p>                            
                            <p class="txt">월 정기 결제는 신용카드 결제만 가능합니다.</p>
                            <p class="txt"><strong>약정 기간 없이 언제든 해지 가능합니다.</strong></p>
						</div>
					<?php else :?>

							<span class="pay01"><?=number_format($pay_info['1']['ori_price'])?><b>원</b><span class="pay_sale"><?=($is_event === true) ? '<strong>이벤트</strong>':'<strong>신규결제</strong>'?> 할인!</span></span>
							<span class="pay02"><?=($is_event === true) ? number_format($pay_info['1']['event_price']):number_format($pay_info['1']['first_price'])?><b>원</b></span>
							<div class="txt_line">
								<p class="txt">                                
									 <strong>신규 월 정기결제시, 프리미엄 서비스를 한달 간 <?=number_format($pay_info['1']['first_price'])?>원에 이용</strong>할 수 있으며, 둘째 달 부터는 매월 <?=number_format($pay_info['1']['price'])?>원(정상가에서 40%할인)으로 자동 결제됩니다.
								</p>
								<p class="txt"><strong>약정 기간 없이 언제든 해지 가능합니다.</strong></p>
							</div>

					<?php endif;?>

                    </div>
                    <!-- //payRight -->
                </div>
                <!-- //step_box -->
            </div>
            <!-- //serviceStep -->

            <div class="payment_guide">
                <ul class="guide">
                    <li class="th">결제방법</li>
                    <li class="td_txt card_list">신용카드 <span>(롯데, 삼성, 신한, 현대, NH)</span></li>
                </ul>

				<?php if($is_coupon === true) :?>
                <div class="mapage_form">
					<fieldset>
						<div class="form_table">
							<table border="1" class="">
								<tbody>
									<tr>
										<th scope="row">쿠폰코드</th>
										<td>
											<div class="item mod_coupon">
												<input type="text" name="coupon_nm" id="coupon_nm" class="coupon_mod" onkeyup="if(event.keyCode==8 || event.keyCode==32 || event.keyCode==46){ clearCpmsg(); return false; }" onKeyPress="if(event.keyCode==13){ chkCoupon(); return false; }">
												<span class="certifi_btn" onClick="javascript:chkCoupon();">확인</span>
												<p class="i_dsc coupon" id="coupon_input_msg" style="display:none;"><i></i>쿠폰코드를 입력해주세요.</p>
											</div>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</fieldset>
                </div>
				<?php endif;?>

                <div class="mapage_form">
					<fieldset>                        
						<div class="form_table">
							<table border="1" class="">
								<tbody>                                    
									<?php if(!isset($user_info['m_phone']) || $user_info['m_phone']=='') :?>
									<tr>
										<th scope="row">휴대폰번호</th>
										<td>
											<div class="item mod_phone">
												<input type="tel" name="new_phone_number" id="new_phone_number" class="phone_mod" maxlength="13" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
												<a href="javascript:fnSendAuthNo('auto');"><span class="certifi_btn">인증문자 전송</span></a>
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
				</div>

                <ul class="guide">
                    <li class="th">결제금액</li>
					<?php if($this->session->userdata('user_auto_pay') == 'Y') :?>
                    <li class="td_txt" id="payPrice_1"><strong><?=number_format($pay_info['1']['price'])?></strong>원 <span>(부가세포함)</span></li>
					<?php else :?>
                    <li class="td_txt" id="payPrice_1"><strong><?=($is_event === true) ? number_format($pay_info['1']['event_price']):number_format($pay_info['1']['first_price'])?></strong>원 <span>(부가세포함)</span></li>
					<?php endif;?>
                    <li class="td_sum">(월 정기 결제는 신용카드 결제만 가능합니다.)</li>
                    <?php
					/*
					<li class="td_sale" id="auto_coupon_msg" style="display:none;">
                        <p><span>서비스금액</span> <strong><?=number_format($price/1.1)?></strong>원</p>
                        <p id="coupon_view"><span>쿠폰할인</span> <strong><i></i></strong>원 (0%)</p>
                    </li>
					*/
					?>
                </ul>
            </div>
            <!-- //payment_guide -->

            <div class="payment_note">
                <h4 class="h4_title">[ 서비스 결제 유의사항 ]</h4>
                <strong>월 정기결제</strong>
                 <ul class="note">
                    <li><span>정기결제는 1개월 단위로 제공</span>되며 <strong>구매하신 날과 매월 동일 한 날짜에 결제</strong>가 이루어집니다</li>
                    <li>결제 일자가 특정 월에 포함되지 않은 경우(예: 31일)에는 <span>해당 월의 마지막날에 청구</span>됩니다.</li>
                    <li>결제 당일을 제외한 이용 기간에 언제든지 해지할 수 있습니다.
                        <strong>잔여 일이 있으면, 만료 일자까지 이용</strong> 하실 수 있습니다.
                        월정기결제는 환불신청이 적용되지 않습니다.</li>                    
                    <li>신용카드 승인오류 및 잔액 부족시에는 결제가 해지될 수 있습니다</li>
                    <li>결제일은 실제 신용카드사에서 결제 요청하는 날짜로 실제 출금일은 카드사별로 다를 수 있습니다.</li>
                    <li>상기 내용은 당사의 사정에 따라 사전고지 없이 변경될 수 있습니다.</li>
                </ul>

                <div class="note_chk">
                    <p class="txt"><i></i>결제금액과 결제유의사항을 확인했습니다.</p>                    
                </div>

            </div>
            <!-- //payment_note -->

            <div class="btnArea payBtn fix_btn">
                <a href="/" class="btn btn_cncl"><i></i>결제취소</a>
                <a href="javascript:autoPayStart();" class="btn btn_save">결제하기<i></i></a>
            </div>
			</form>
