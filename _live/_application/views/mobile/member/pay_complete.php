            <!-- 주요 콘텐츠 -->
            <div class="step_area">
                <ul>
                    <li>1. 가입방법 선택</li>
                    <li>2. 결제하기</li>
                    <li class="active">3. 결제완료</li>
                </ul>
            </div>
            <!-- //step_area -->

            <div class="serviceStep">
                <div class="step_top">
                    <div class="payment_com">
                        <h2 class="login_title"><strong><?=$srv_name;?></strong> <?=$result_title;?></h2>
						<?php if($p_method=='VBANK') :?>
                        <p class="txt">무통장 결제 신청시 다음의 계좌로 결제금액을 입금해주세요. 입금내역이 확인 즉시, 바로 서비스를 이용하실 수 있습니다.</p>
                        <p class="txt">입금기한 내 미입금 시, 서비스 신청은 자동 취소됩니다.</p>
						<?php endif;?>

                    </div>
                    <!-- //payment_com -->
                </div>
                <!-- //step_top -->
            </div>
            <!-- //serviceStep -->

            <div class="payment_guide">
                <ul class="guide">
                    <li class="th">신청서비스</li>
                    <li class="td_txt"><?=$srv_name;?></li>                    
                </ul>
                <ul class="guide">
                    <li class="th">서비스기간</li>
                    <li class="td_txt">기간결제 <?=$month?>개월</li>                    
                </ul>

				<?php if($p_method=='VBANK') :?>
                <ul class="guide">
                    <li class="th">입금금액</li>
                    <li class="td_txt c_blue"><strong><?=number_format($price)?></strong>원</li>                    
                </ul>
                <ul class="guide">
                    <li class="th">입금 은행계좌</li>
                    <li class="td_txt c_blue"><?=$p_vb_bankname?> (<?=$p_vb_banknum?>)</li>                    
                </ul>
                <ul class="guide">
                    <li class="th">예금주</li>
                    <li class="td_txt"><?=$p_vb_username?></li>                    
                </ul>
                <ul class="guide">
                    <li class="th">입금기간</li>
                    <li class="td_txt"><?=date('Y년 m월 d일 H:i까지', strtotime($p_vb_expdate))?></li>                    
                </ul>
				<?php else :?>
                <ul class="guide">
                    <li class="th">결제금액</li>
                    <li class="td_txt"><strong><?=number_format($price)?></strong>원 <span>(부가세포함)</span></li>                    
                </ul>
				<?php endif;?>

                <ul class="guide">
                    <li class="th">결제수단</li>
                    <li class="td_txt"><?=$p_method_name?></li>                    
                </ul>
            </div>
            <!-- //payment_guide -->

            <div class="payment_note">
                <ul class="note">
                    <li><span>결제 확인 및 취소/환불 신청은 '마이페이지'에서 확인</span>할 수 있습니다.<br>
                        <a href="/member/paylist" class="mod_btn">마이페이지</a></li>
                    <li>고객센터 <a href="tel:0262252300">02)6225-2300</a>, <a
                            href="mailto:hero@datahero.co.kr">hero@datahero.co.kr</a><br>
                        (평일 09:00~17:00 (주말, 공휴일 제외), 점심시간 (11:30~12:30)</li>
                </ul>

            </div>
            <!-- //payment_note -->

            <div class="btnArea payBtn">
                <a href="/" class="btn btn_save">서비스 메인으로<i></i></a>
            </div>