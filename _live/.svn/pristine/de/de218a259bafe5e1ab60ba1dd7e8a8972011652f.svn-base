			<?php if(isset($winner_list) && is_array($winner_list)) :?>
			<div class="main_mid game_area">
				<h3 class="title"><a href="/<?=HT?>_stock/winner">승부주</a> <span class="remark">스탁히어로 알고리즘 종목추천</span></h3>
				<a href="/<?=HT?>_stock/winner" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
				<div class="list_area">
					<div class="swiper-container  maingameSwiper">                            
						<div class="swiper-wrapper">
						<?php $win=0; foreach($winner_list as $winner) :?>
							<div class="swiper-slide">
								<div class="area">
									<ul class="list">
										
									<?php if($this->session->userdata('is_paid')===TRUE || $win<1) :?>
										<li class="title"><a href="/<?=HT?>_search/summary/<?=$winner['win_ticker']?>"><?=$winner['tkr_name']?></a></li>
										<li class="sum"><?=$winner['win_ticker']?></li>
										<li class="num">
											<div>
												<span class="th">추천가</span>
												<span class="td"><?=$this->common->set_pricepoint(number_format($winner['win_close'], 2), '1')?></span>
											</div>

											<?php
											if(isset($winner['win_fairvalue']) && $winner['win_fairvalue']>0 && round((($winner['win_fairvalue']/$winner['win_close'])-1)*100) >= 30) {
												$win_goal_price = $winner['win_fairvalue'];
											}
											else {
												$win_goal_price = $winner['win_rc_price'];
											}
											$win_goal_rate = sprintf('%.2f', (($win_goal_price - $winner['win_close'])/$winner['win_close'])*100);
											?>

											<div>
												<span class="th">목표수익률</span>
												<span class="<?=($win_goal_rate>0) ? 'increase':'decrease'?> dod"><?=($win_goal_rate>0) ? '':''?><?=$win_goal_rate?><b>%</b></span>
											</div>
										</li>
									<?php else :?>
										<li class="title"><a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><?=iconv_substr($winner['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a></li>
										<li class="sum"><span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></li>
										<li class="num">
											<div>
												<span class="th">추천가</span>
												<span class="td"><?=$this->common->set_pricepoint(number_format($winner['win_close'], 2), '1')?></span>
											</div>
											<div>
												<span class="th">목표수익률</span>
												<span class="increase dod prm_lock"><a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><img src="/img/prm_lock.png" alt="잠김"></a></span>

											</div>
										</li>
									<?php endif;?>
									</ul>
									<div class="analysis_score">                                
										<div class="game_tip">
											<h3 class="game_title">주가추세</h3>
											<i class="trans_icn <?=$win_trend[$winner['win_short']]?>"></i>
											<i class="trans_icn <?=$win_trend[$winner['win_medium']]?>"></i>
											<i class="trans_icn <?=$win_trend[$winner['win_long']]?>"></i>
										</div>
									</div>
									<!-- //analysis_score -->
								</div>
							</div>
						<?php $win++; endforeach;?>
						</div>
					</div>
				</div>
				<!-- //list_area -->
			</div>
			<?php endif;?>