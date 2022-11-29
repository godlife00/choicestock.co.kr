			<div class="main_mid game_scr">
                <h4 class="game_title"><a href="/<?=WT?>_stock/winner">승부주</a></h4>

                <div class="swiper-container lately_swiper">
                    <div class="swiper-wrapper">

						<?php $win=0; foreach($winner_list as $winner) :?>
						<div class="swiper-slide">
                            <ul class="list">
								<?php if($this->session->userdata('is_paid')===TRUE || $win<1) :?>
									<li class="title"><a href="/<?=WT?>_search/summary/<?=$winner['win_ticker']?>"><?=$winner['tkr_name']?></a></li>
									<li class="detail">
										<span class="th">추천가</span>
										<span class="stock"><?=$this->common->set_pricepoint(number_format($winner['win_close'], 2), '1')?></span>
									</li>
	                                <li class="num">
										<?php
										if(isset($winner['win_fairvalue']) && $winner['win_fairvalue']>0 && round((($winner['win_fairvalue']/$winner['win_close'])-1)*100) >= 30) {
											$win_goal_price = $winner['win_fairvalue'];
										}
										else {
											$win_goal_price = $winner['win_rc_price'];
										}
										$win_goal_rate = sprintf('%.2f', (($win_goal_price - $winner['win_close'])/$winner['win_close'])*100);
										?>
										<span class="th">목표수익률</span>
										<span class="<?=($win_goal_rate>0) ? 'increase':'decrease'?> dod"><?=($win_goal_rate>0) ? '':''?><?=$win_goal_rate?><b>%</b></span>
									</li>
								<?php else :?>
									<li class="title"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=iconv_substr($winner['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a></li>
									
									<li class="detail">
										<a href="#" data-modal="modal-3" class="btn_free md-trigger"><span class="th">추천가</span></a>
										<a href="#" data-modal="modal-3" class="btn_free md-trigger"><span class="stock prm_lock"><img src="img/prm_lockwowtv.svg" alt="잠김"></span></a>
									</li>
									<li class="num">
										<a href="#" data-modal="modal-3" class="btn_free md-trigger"><span class="th">목표수익률</span></a>
										<a href="#" data-modal="modal-3" class="btn_free md-trigger"><span class="<?=($win_goal_rate>0) ? 'increase':'decrease'?> dod"><?=($win_goal_rate>0) ? '':''?><?=$win_goal_rate?><b>%</b></span></a>
									</li>
								<?php endif;?>
                            </ul>
                        </div>

						
						<?php $win++; endforeach;?>
                    </div>
                </div>
            </div>