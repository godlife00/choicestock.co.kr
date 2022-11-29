<?php if($tab == '1') {?>
				<?php 
				$cnt=0;
                foreach( (is_array($rc_list) && sizeof($rc_list)>0) ? $rc_list : array() as $r) : 
                    $class = 'decrease';
                    if($r['ticker']['tkr_rate'] >= 0) {
                        $class = 'increase';
                    }

					if(in_array($r['rc_adjust'], array('U', 'D')) && $r['rc_adjust_price'] > 0) :
						$r['rc_goal_price'] = $r['rc_adjust_price'];
					endif;
                ?>
								<?php if($cnt==3 || $cnt==7) :?>
									<?php if($this->session->userdata('is_paid')===FALSE) :?>
										<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
										<!-- 구글 에드센스 투자포인트 상단 -->
										<div style="margin:15px 15px 0; text-align: center;">                
											<!-- 디스플레이(수평) -->
											<ins class="adsbygoogle example_responsive_1"
												style="display:inline-block"
												data-ad-client="ca-pub-6864430327621783"
												data-ad-slot="9421426429"></ins>                                                    
											<script>
											(adsbygoogle = window.adsbygoogle || []).push({});
											</script>
										</div>
										<!-- //구글 에드센스 -->
										<?php endif;?>
									<?php endif;?>
								<?php endif;?>

								<div class="recom_chartList">
                                    <div class="chartData">
                                        <div class="left">
                                            <h4 class="event_name">
											<?php if($this->session->userdata('is_paid')===FALSE && $r['rc_endtype'] != 'SUCCESS') :?>
											<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><?=iconv_substr($r['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
											<?php else :?>
											<a href="/stock/recommend_view/<?=$r['rc_id']?>"><?=$r['ticker']['tkr_name']?>
											<?php endif;?>
                                            </a><?php if($r['rc_portfolio'] == 'Y') :?><span class="port">포트</span><?php endif;?></h4>
                                            <ul class="info">
                                                <li class="sum"><span class="eng">												
												<?php if($this->session->userdata('is_paid')===FALSE && $r['rc_endtype'] != 'SUCCESS') :?>
												<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
												<?php else :?>
												<a href="/stock/recommend_view/<?=$r['rc_id']?>">
												<?php endif;?>												
												<?=$r['rc_title']?></a></span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <!-- //chartData -->
                                    <div class="chartGoal">
                                        <div class="target">
                                            <span class="th">목표가</span>
											<?php if($this->session->userdata('is_paid')===FALSE && $r['rc_endtype'] != 'SUCCESS') :?>
                                            <span class="att dod prm_lock">
                                                <img src="/img/prm_lock.png" alt="잠김">
											<?php else :?>
                                            <span class="att dod">
												<?=$this->common->set_pricepoint($r['rc_goal_price'], '1')?>
											<?php endif;?>
                                            </span>                                                                                        
                                        </div>
										<?php if($r['rc_endtype'] == 'SUCCESS') : ?>
                                        <!-- 목표가 달성 attainment_com -->
                                        <div class="revenue attainment_com">
                                            <span class="th">목표가 달성</span>
                                            <span class="dod"><?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
                                        </div>
										<?php elseif($r['rc_endtype'] == 'FAIL') :?>
                                        <!-- 손절가매도 loss_cut -->
                                        <div class="revenue loss_cut">
                                            <span class="th">손절가매도</span>
                                            <span class="dod"><?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
                                        </div>
										<?php elseif($r['rc_endtype'] == 'SELL') :?>
                                        <!-- 교체매도 attainment -->
                                        <div class="revenue attainment">
                                            <span class="th">교체매도</span>
                                            <span class="<?=($r['rc_profit_rate']>0) ? 'increase':'decrease'?> dod"><?=($r['rc_profit_rate']>0) ? '':''?><?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
                                        </div>
										<?php else :?>
                                        <div class="revenue">
                                            <span class="th">수익률</span>
                                            <span class="<?=($r['rc_profit_rate']>0) ? 'increase':'decrease'?> dod"><?=($r['rc_profit_rate']>0) ? '':''?><?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
                                        </div>
										<?php endif; ?>  
                                    </div>
                                    <!-- //chartGoal -->                                    
                                </div>
                <?php $cnt++; endforeach; ?>
<?php }else{?>
									<?php
									foreach( (is_array($rc_list) && sizeof($rc_list)>0) ? $rc_list : array() as $r) : 
										$class = 'decrease';
										if($r['ticker']['tkr_rate'] >= 0) {
											$class = 'increase';
										}

										if(in_array($r['rc_adjust'], array('U', 'D')) && $r['rc_adjust_price'] > 0) :
											$r['rc_goal_price'] = $r['rc_adjust_price'];
										endif;
									?>

                                        <tr>
                                            <td class="name">
											<?php if($this->session->userdata('is_paid')===FALSE) :?>
											<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><?=iconv_substr($r['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
											<?php else :?>
											<a href="/stock/recommend_view/<?=$r['rc_id']?>"><?=$r['ticker']['tkr_name']?>
											<?php endif;?>													
											<span class="ticker"><?=($this->session->userdata('is_paid')===FALSE) ? '<span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></span>':$r['ticker']['tkr_ticker']?></a></td>
                                            <td class="num">
                                                <span class=""><?=$this->common->set_pricepoint($r['ticker']['tkr_close'], '1')?></span>
												<span class="<?=$class?> pp"><?=$this->common->set_pricepoint($r['ticker']['tkr_rate_str'], '2')?></span>
                                            </td>
											<?php if($this->session->userdata('is_paid')===TRUE || $r['rc_endtype'] == 'SUCCESS') :?>
                                            <td class="goal"><?=$this->common->set_pricepoint($r['rc_goal_price'], '1')?></td>
											<?php else :?>
											<td class="prm_lock"><span><img src="/img/prm_lock.png" alt="잠김"></span></td>
											<?php endif;?>                                            
											<td class="num">
                                                <span class="<?=($r['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($r['rc_profit_rate'], '1')?><b>%</b></span>
												<?php if($r['rc_endtype'] == 'SUCCESS') :?>
                                                <span class="attainment_com">목표가달성</span>
												<?php endif;?>
                                            </td>
                                        </tr>
									<?php endforeach?>

<?php }?>