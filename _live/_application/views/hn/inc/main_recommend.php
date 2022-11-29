			<?php if(is_array($recommend) && sizeof($recommend) > 0) : ?>
<?php if($is_open === true):?>
<script>
	$(document).ready(function(){
	<?php for($i=0; $i<sizeof($recommend); $i++) :?>
		  $('#re_price<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		  $('#re_diff<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
	<?php endfor;?>
	});
</script>			
<?php endif;?>			
            <div class="main_top recommend_area">
                <h3 class="title"><a href="/<?=HN?>_stock/recommend">종목추천</a></h3>
				<?php if($this->session->userdata('is_paid')===TRUE) :?>
				<a href="/<?=HN?>_stock/recommend" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
				<?php endif;?>
                <div class="recomlist_area">
                    <div class="swiper-container  maingameSwiper">
                        <div class="swiper-wrapper">
						<?php
						$rcnt=0;
						foreach($recommend as $key => $val) :
							if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;
							if($rcnt>2) break;
							$class = 'decrease';
							if($val['ticker']['tkr_rate'] > 0) {
								$class = 'increase';
							}
						?>
                            <div class="swiper-slide">
                                <div class="area">
                                    <ul class="list">
										<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                        <li class="title"><a href="/<?=HN?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['ticker']['tkr_name']?></a></li>
                                        <li class="sum"><?=$val['ticker']['tkr_ticker']?></li>
										<?php else:?>
                                        <li class="title"><a href="javascript:fnSinChung();"><?=iconv_substr($val['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a></li>
                                        <li class="sum"><span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></li>
										<?php endif;?>
                                        <li class="detail">
											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['ticker']['tkr_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>
											<?php if($is_wowinfo === true) :?>
											<div class="num"><span id='re_price<?=$rcnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span></div>
											<div class="per"><span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='re_diff<?=$rcnt?>'><?=($wval['diff_rate']>0) ? '':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span></div>
											<?php else :?>                            
											<div class="num"><span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1')?></span></div>
											<div class="per"><span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate'], '2')?><b>%</b></span></div>
											<?php endif;?>                                        </li>
                                        <li class="num">
                                            <div>
                                                <span class="th">목표가</span>
												<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                                <span class="td"><?=(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0)? $this->common->set_pricepoint($val['rc_adjust_price'], '1'):$this->common->set_pricepoint($val['rc_goal_price'], '1')?></span>
												<?php else :?>
                                                <span class="td prm_lock"><a href="javascript:fnSinChung();"><img src="/img/prm_lockW.png" alt="잠김"></a></span>
												<?php endif;?>
                                            </div>
                                            <div>
                                                <span class="th">수익률</span>
												<?php //if($this->session->userdata('is_paid')===TRUE) :?>
													<?php if($val['rc_endtype'] == 'SUCCESS') :?>
														<?php if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :?>
														<span class="<?=((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
														<?php else :?>
														<span class="<?=((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
														<?php endif;?>
													<?php else :?>
													<span class="<?=((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
													<?php endif;?>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
						<?php $rcnt++; endforeach;?>
                        </div>
                    </div>
                </div>
                <!-- //recomlist_area -->            
				<?php endif;?>