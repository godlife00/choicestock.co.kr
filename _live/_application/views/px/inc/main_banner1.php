				<?php if($this->session->userdata('is_paid')===TRUE) :?>
                <!-- 프리미엄 서비스 사용자인 경우 -->
                <div class="banner_prm">                        
                    <span class="cho_prm">팍스초이스 프리미엄</span>
                    <a href="/<?=PX?>_main/service" class="weeks_free">[주요 서비스 안내]</a>
                </div>
				<?php else :?>
				<div class="banner_prm">
					<?php if(date('Ymd')<'20210118') :?>
					<span class="cho_prm">신용카드 정기결제 1/18 오픈 예정</span>
					<?php else :?>
                    <span class="cho_prm"><i></i>팍스초이스 프리미엄</span>
                    <a href="javascript:fnPay();" class="weeks_free">[ 첫 달 3,000원!]</a>
					<?php endif;?>
                </div>
                <!-- //banner_prm -->
				<?php endif;?>