			<!-- 주요 콘텐츠 -->
            <div class="withdrawal_com">                
                <p class="txt">서비스 탈퇴를 할 경우, 설정된 관심종목과 정보가 모두 삭제됩니다.</p>

                <?php if($this->session->userdata('is_paid')===TRUE) :?>
					<?php
					//안드로이드 인앱 결제 후 삭제
					//if($this->session->userdata('user_ostype') != 'A') :?>
                <div class="att_service">
                    <ul class="guide_txt bg_blue">
                        <h3 class="h3_title"><strong>미국주식창 프리미엄</strong> 유료서비스 이용중입니다.</h3> 
						<?php if($this->session->userdata('user_startday') != '' && $this->session->userdata('user_endday') !='') :?>
                        <p class="term">서비스 만료 기간 : <?=date('Y.m.d', strtotime($this->session->userdata('user_startday')))?> ~ <?=date('Y.m.d', strtotime($this->session->userdata('user_endday')))?> 까지</p>
						<?php endif;?>
						<?php $return_url = 'https://wowtv.choicestock.co.kr/'.WT.'_member/update_info';?>
						<a href="https://swbilluser.wowtv.co.kr/MyPage/Main?sitecode=1&uuid=<?=$this->session->userdata('user_key');?>&phno=<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY);?>&swReturnUrl=<?=$return_url;?>" class="payment_bd">가입내역</a>
                    </ul>
                </div>
                <!-- //att_service -->
					<?php //endif;?>
				<?php endif;?>

				<?php
				//안드로이드 인앱 결제 후 삭제
				if($this->session->userdata('user_ostype') != 'A') :?>
                <ul class="withdrawal_freetxt">
                    <h3 class="service_title"><strong>탈퇴 전에 꼭! 확인해주세요.</strong></h3>
                    <li class="title">회원탈퇴와 동시에 회원 서비스를 이용할 수 없습니다.</li>
	                <?php if($this->session->userdata('is_paid')===TRUE) :?>
                    <li class="title">현재 유료 서비스 이용 중입니다. 회원 탈퇴를 원하시면 고객센터를 통해 서비스 해지 후 회원 탈퇴 가능합니다.</li>
					<?php endif;?>
                    <li class="title">고객센터 : <a href="tel:02-6676-0403">02-6676-0403</a></li>
					<!--<li class="title">프리미엄 유료서비스를 이용 중이라면, 서비스해지 후 탈퇴를 진행해주세요.</li>
                    <li class="title">재가입시에는 신규회원으로 처리됩니다.</li>
                    <li class="title">회원자격이 운영자에 의해 정지된 경우에는 회원탈퇴 후 재가입이 제한됩니다.</li>-->
                </ul>
                <!-- //withdrawal_freetxt -->
				<?php else:?>
                <ul class="withdrawal_freetxt">
                    <h3 class="service_title"><strong>탈퇴 전에 꼭! 확인해주세요.</strong></h3>
                    <li class="title">회원탈퇴와 동시에 회원 서비스를 이용할 수 없습니다.</li>
	                <?php if($this->session->userdata('is_paid')===TRUE) :?>
                    <li class="title">현재 유료 서비스 이용 중입니다. 회원 탈퇴를 원하시면 고객센터를 통해 서비스 해지 후 회원 탈퇴 가능합니다.</li>
					<?php endif;?>
                    <li class="title">고객센터 : <a href="tel:02-6676-0403">02-6676-0403</a></li>
                </ul>
				<?php endif;?>

                <?php if($this->session->userdata('is_paid')===FALSE) :?>
                <div class="btnArea wtwalBtn">
                    <a href="/<?=WT?>_member/withdrawal_process" class="btn btn_ssin">회원탈퇴</a>
                </div>
				<?php endif;?>
            </div>
            <!-- //withdrawal_com -->
