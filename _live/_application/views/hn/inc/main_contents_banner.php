			<!-- 모닝브리핑, 종목추천 3개 -->
            <div class="main_mid briefing_recom">
                <div class="<?=($is_morning===true) ? '':'swiper-container '?>mainbriefingSwiper">
                    <?php if($is_morning===false) :?><div class="swiper-wrapper"><?php endif;?>
                        <?php foreach($cont_banner as $ban):
							$ban['url'] = str_replace('/stock/','/'.HN.'_stock/',$ban['url']);
							$ban['url'] = str_replace('/search/','/'.HN.'_search/',$ban['url']);
							if($is_morning===true) {
								if($ban['type']=='2') continue;
							}
							else {
								if($ban['type']=='1') continue;
							}
						?>
						<?php if($is_morning===false) :?><div class="swiper-slide"><?php endif;?>
                            <ul>
                                <li class="txt">
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
								<a href="<?=$ban['url']?>">
								<?php else :?>
								<a href="javascript:fnSinChung();">
								<?php endif;?>
								<span class="<?=($ban['type']=='1')?'note_issue':'note_recom'?>"><?=($ban['type']=='1')?'이슈':'추천'?></span><?=$ban['title']?></a></li>
                            </ul>
                        <?php if($is_morning===false) :?></div><?php endif;?>
						<?php endforeach;?>
                    <?php if($is_morning===false) :?></div><?php endif;?>
                </div>
            </div>
            <!-- //모닝브리핑, 종목노트 -->