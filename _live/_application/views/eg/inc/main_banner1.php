                <?php if($this->session->userdata('is_paid')===TRUE) :?>
                <!-- 프리미엄 서비스 사용자인 경우 -->
                <!--<div class="banner_prm">                        
                    <span class="cho_prm">초이스스탁US 프리미엄</span>
                    <a href="javascript:fnService();" class="weeks_free">[주요 서비스 안내]</a>
                </div>-->
                <?php else :?>
                <!--<div class="banner_prm">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                    <a href="/<?=EG?>_main/service_free" class="weeks_free">[2주 무료 이용]</a>
                </div>-->
                <!-- //banner_prm -->
                <?php endif;?>