			<!-- 주요 콘텐츠 -->
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

				<?php if($this->session->userdata('user_auto_pay') == 'Y') :?>
					<div class="step_box active" id="payment_choice1">                    
						<h3 class="title">월 정기결제 <span class="way">신용카드</span></h3>
						<div class="payRight">
							<span class="pay01"><?=number_format($pay_info['1']['ori_price'])?><b>원</b><span class="pay_sale"><strong>40%</strong> 할인!</span></span>
							<span class="pay02"><?=number_format($pay_info['1']['price'])?><b>원</b></span>                           
							<div class="txt_line">
								<p class="txt"><strong>월 정기결제시 프리미엄 서비스를 40% 할인된 금액에 이용</strong> 할 수 있습니다. (월 <?=number_format($pay_info['1']['price'])?>원)</p>                            
								<p class="txt">월 정기 결제는 신용카드 결제만 가능합니다.</p>
								<p class="txt"><strong>약정 기간 없이 언제든 해지 가능합니다.</strong></p>
							</div>
						</div>
						<!-- //payRight -->
					</div>
					<!-- //step_box -->
				<?php else :?>
					<?php if($is_event === true) :?>
					<div class="event_1year" style="margin-bottom: 15px;">
						<a href="/main/first_event" target="_blank"><img src="/img/banner/1year_event_banner.png" alt="[1주년 이벤트] 9월이니까 <?=number_format($pay_info['1']['event_price']/1.1)?>원"></a>
					</div>
					<!-- //event_1year -->

					<div class="step_box active event_1year" id="payment_choice1">
						<!-- 1주년 900원 이벤트 class = event_1year -->
						<h3 class="title">월 정기결제 <span class="way">신용카드</span></h3>
						<div class="payRight">
							<span class="pay01"><?=number_format($pay_info['1']['ori_price'])?><b>원<span class="pay_sale">이벤트 할인!</span></b></span>
							<span class="pay02"><?=number_format($pay_info['1']['event_price'])?><b>원</b></span>
							<div class="txt_line">
								<p class="txt">
									[이벤트] 신규 월 정기결제시, 프리미엄 서비스를 한달 간 <?=number_format($pay_info['1']['event_price'])?>원에 이용할 수 있으며, 둘째 달 부터는 매월 정상가로 자동결제됩니다.(월 <?=number_format($pay_info['1']['price'])?>원, 부가세 포함)
								</p>
								<p class="txt">월 정기 결제는 신용카드 결제만 가능합니다.</p>
								<p class="txt"><strong>약정 기간 없이 언제든 해지 가능합니다.</strong></p>
							</div>
						</div>
						<!-- //payRight -->
					</div>
					<!-- //step_box -->
					<?php else :?>
					<div class="step_box active event_1year" id="payment_choice1">                    
						<h3 class="title">월 정기결제 <span class="way">신용카드</span></h3>
						<div class="payRight">
							<span class="pay01"><?=number_format($pay_info['1']['ori_price'])?><b>원</b><span class="pay_sale"><strong>신규결제</strong> 할인!</span></span>
							<span class="pay02"><?=number_format($pay_info['1']['first_price'])?><b>원</b></span>                           
							<div class="txt_line">
								<p class="txt">                                
									 <strong>신규 월 정기결제시, 프리미엄 서비스를 한달 간 <?=number_format($pay_info['1']['first_price'])?>원에 이용</strong>할 수 있으며, 둘째 달 부터는 매월 <?=number_format($pay_info['1']['price'])?>원(정상가에서 40%할인)으로 자동 결제됩니다.
								</p>
								<p class="txt">월 정기 결제는 신용카드 결제만 가능합니다.</p>
								<p class="txt"><strong>약정 기간 없이 언제든 해지 가능합니다.</strong></p>
							</div>
						</div>
						<!-- //payRight -->
					</div>
					<!-- //step_box -->
					<?php endif;?>
				<?php endif;?>

                <div class="step_box"  id="payment_choice2">                    
                    <h3 class="title">3개월 기간 결제<span class="way">신용카드, 가상계좌(무통장), 계좌이체</span></h3>
                    <div class="payRight">  
                        <span class="pay01"><?=number_format($pay_info['2']['ori_price'])?><b>원</b></span>
                        <span class="pay02"><?=number_format($pay_info['2']['price'])?><b>원</b> <span class="pay_sale02">(10% 할인)</span><span class="pay_sale"><?=number_format(SRV_PRICE)?>원 * <?=$pay_info['2']['month']?>개월</span></span>
						<!--<span class="pay03"><?=number_format(SRV_PRICE)?><b>원 * 3개월 =</b></span>
                        <span class="pay02"><?=number_format($pay_info['2']['price'])?><b>원</b></span>-->
                    </div>
                    <!-- //payRight -->
                </div>
                <!-- //step_box -->

                <div class="step_box"  id="payment_choice3">                    
                    <h3 class="title">6개월 기간 결제<span class="way">신용카드, 가상계좌(무통장), 계좌이체</span></h3>
                    <div class="payRight"> 
                        <span class="pay01"><?=number_format($pay_info['3']['ori_price'])?><b>원</b></span>
                        <span class="pay02"><?=number_format($pay_info['3']['price'])?><b>원</b> <span class="pay_sale02">(20% 할인)</span><span class="pay_sale"><?=number_format(SRV_PRICE)?>원 * <?=$pay_info['3']['month']?>개월</span></span>
						<!--<span class="pay03"><?=number_format(SRV_PRICE)?><b>원 * 6개월 =</b></span>   
                        <span class="pay02"><?=number_format($pay_info['3']['price'])?><b>원</b></span>-->
                    </div>
                    <!-- //payRight -->
                </div>
                <!-- //step_box -->
            </div>
            <!-- //serviceStep -->
			<form name="payForm">
				<input type="hidden" name="pay_type" value="<?=$paylist['p_type']?>">
				<input type="hidden" name="pay_date" value="<?=substr($paylist['p_end_date'], 4, 2)?>월<?=substr($paylist['p_end_date'], 6, 2)?>일">
			</form>
            <div class="btnArea payBtn fix_btn">
                <a href="/" class="btn btn_cncl"><i></i>결제취소</a>
				<?php if($this->session->userdata('is_login') === TRUE) :?>
		            <a href="javascript:fnPayment();" class="btn btn_save">다음<i></i></a>
				<?php else :?>
		            <a href="/member/login?ru=<?=urlencode('payment/choice')?>" class="btn btn_save">다음<i></i></a>
				<?php endif;?>
            </div>