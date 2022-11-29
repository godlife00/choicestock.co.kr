				<?php if($is_event===true) :?>

				<div class="main_btm banner_area">
					<!-- //banner -->
					<div class="banner_1yearevent">
						<span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
						<span class="y_box"><img src="/img/banner/img_y_box.png" alt="이벤트"></span>
						<a href="/payment/choice" class="weeks_free">[첫달 900원!]</a>
					</div>
					<!-- //banner_prm -->                
				</div>
				<?php else :?>
				
				<?php if($this->session->userdata('is_paid')===TRUE  && $this->session->userdata('free_notice') == '') :?>
                <!-- 프리미엄 서비스 사용자인 경우 -->
                <div class="banner_prm">                        
                    <span class="cho_prm">초이스스탁US 프리미엄</span>
                    <a href="/main/service_prm" class="weeks_free">[주요 서비스 안내]</a>
                </div>
				<?php else :?>
				<div class="banner_prm">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                    <a href="/main/service_free" class="weeks_free">[ 첫 달 3,000원!]</a>
                </div>
                <!-- //banner_prm -->
				<?php endif;?>

				<?php endif;?>

				<?php //if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
				<!-- 초이스스탁US 홈 화면에 추가하기 -->
                <div class="banner_event">                    
                    <!--<a href="http://naver.me/G9bEnpic" class="link_banner" target="_black"><img src="img/banner_home.png" alt="초이스스탁US 홈 화면에 추가하기"></a>-->
                    <a href="/stock/research_view/118" class="link_banner"><img src="/img/banner/cs_ex-banner.png" alt="초이스스탁US 익스텐션 추가하기"></a>
                </div>
                <!-- //초이스스탁US 홈 화면에 추가하기 -->
				<?php //endif;?>