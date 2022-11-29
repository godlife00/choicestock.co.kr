			<script src="https://web.nicepay.co.kr/v3/webstd/js/nicepay-3.0.js" type="text/javascript"></script>
			<form name="payForm" method="post" action="/payment/complete" onsubmit="return false;" accept-charset="euc-kr">
				<input type="hidden" name="GoodsName" value="<?=$goodsName?>">
				<input type="hidden" name="Amt" value="<?=$price?>">          
				<input type="hidden" name="MID" value="<?=$MID?>"></td>
				<input type="hidden" name="Moid" value="<?=$moid?>"></td>
				<input type="hidden" name="BuyerName" value="<?=$buyerName?>"></td>
				<input type="hidden" name="BuyerEmail" value="<?=$buyerEmail?>"></td>
				<input type="hidden" name="Period" value="<?=$Period?>"></td>
				<input type="hidden" name="ReturnURL" value="<?=$returnURL?>"></td>
				<input type="hidden" name="VbankExpDate" value="<?=$VbankExpDate?>"></td>
				<input type="hidden" name="GoodsCl" value="<?=$GoodsCl?>"/>		<?php /*상품구분(실물(1),컨텐츠(0))*/?>
				<input type="hidden" name="TransType" value="<?=$TransType?>"/>	<?php /*일반(0)/에스크로(1)*/?>
				<input type="hidden" name="CharSet" value="<?=$CharSet?>"/>	<?php /*응답 파라미터 인코딩 방식*/?>
				<input type="hidden" name="ReqReserved" value=""/>	<!-- 500 -->
					
				<input type="hidden" name="EdiDate" value="<?=$ediDate?>"/>     <?php /*전문 생성일시*/?>
				<input type="hidden" name="SignData" value="<?=$hashString?>"/> <?php /*해쉬값*/?>

				<input type="hidden" name="Amt_st" value="<?=$price?>">          
				<input type="hidden" name="SignData_st" value="<?=$hashString?>">          
				<input type="hidden" name="EdiDate_st" value="<?=$ediDate?>"/>

				<input type="hidden" name="p_code" value="<?=$p_code?>">          
				<input type="hidden" name="pay" value="<?=$pay?>">          
				<!--<input type="hidden" name="new_phone_number" value="<?=$new_phone_number?>">-->
				<input type="hidden" name="cp_done" value="">          
				<input type="hidden" name="dc_rate" value="">          

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
                    <h3 class="title"><?=$month?>개월 기간 결제 <span class="way">&nbsp;</span></h3>
                    <div class="payRight"> 

                        <span class="pay01"><?=number_format($pay_info[$pay]['ori_price'])?><b>원</b></span>
                        <span class="pay02"><?=number_format($price)?><b>원</b> <span class="pay_sale02">(<?=($pay=='2') ? '10':'20'?>% 할인)</span><span class="pay_sale"><?=number_format(SRV_PRICE)?>원 * <?=$month?>개월</span></span>                
                        <!--<span class="pay03"><?=number_format(SRV_PRICE)?><b>원 * <?=$month?>개월 =</b></span>
                        <span class="pay02" id="payPrice_1"><?=number_format($price)?><b>원</b></span>-->
                    </div>
                    <!-- //payRight -->
                </div>
                <!-- //step_box -->
            </div>
            <!-- //serviceStep -->

            <div class="payment_guide">


                <div class="mapage_form">
					<fieldset>
						<div class="form_table">
							<table border="1" class="">
								<tbody>
									<tr>
										<th scope="row">결제수단</th>
										<td>
											<div class="selectbox">
												<label for="select">신용카드</label>
												<select id="select" name="PayMethod" id="PayMethod">
													<option value="CARD" selected>신용카드</option>
													<option value="BANK">계좌이체</option>
													<option value="VBANK">가상계좌(무통장)</option>
												</select>
											</div>
											<p class="i_dsc">신용카드 : 롯데, 삼성, 신한, 현대, NH</p>
											<!--<div class="item mod_coupon">                                                                                                        
												<p class="i_dsc coupon">- 무통장 결제시 1% 할인, 현금영수증 발행</p>
											</div>-->
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</fieldset>
                </div>        

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
												<!--<p class="i_dsc coupon">쿠폰은 1회 등록용이며, 중복등록 할 수 없습니다!</p>-->
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
												<a href="javascript:fnSendAuthNo('term');"><span class="certifi_btn">인증문자 전송</span></a>
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
                    <li class="td_txt" id="payPrice_2"><strong><?=number_format($price)?></strong>원 <span>(부가세포함)</span></li>                    
                    <li class="td_sale" id="td_sale" style="display:none">
                        <p><span>서비스금액</span> <strong><?=number_format($price)?></strong>원</p>
                        <p><span>무통장할인</span> <strong><i></i><?=number_format($price-($price*0.99))?></strong>원 (-1%)</p>
                    </li>
                </ul>
            </div>
            <!-- //payment_guide -->

            <div class="payment_note">
                <h4 class="h4_title">[ 서비스 결제 유의사항 ]</h4>
                <strong>기간 결제</strong>
                <ul class="note">
                    <li>기간 결제는 일 단위(기본 31일)로 제공됩니다</li>
                    <li>결제 당일을 제외한 이용 기간 중 해지를 원하는 경우, 이용 일수를 제외하고 부분 환불 가능합니다</li>
                    <li>상기 내용은 당사의 사정에 따라 사전고지 없이 변경될 수 있습니다.</li>
                </ul>

                <div class="note_chk">
                    <p class="txt"><i></i>결제금액과 결제유의사항을 확인했습니다.</p>                    
                </div>

            </div>
            <!-- //payment_note -->

            <div class="btnArea payBtn fix_btn">
                <a href="/" class="btn btn_cncl"><i></i>결제취소</a>
                <a href="javascript:nicepayStart();" class="btn btn_save">결제하기<i></i></a>
            </div>
			</form>