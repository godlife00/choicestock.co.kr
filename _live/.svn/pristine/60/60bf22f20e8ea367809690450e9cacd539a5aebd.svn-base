<?php if($tab == '1') {?>
				<?php 
                foreach( (is_array($rc_list) && sizeof($rc_list)>0) ? $rc_list : array() as $r) : 
                    $class = 'decrease';
                    if($r['ticker']['tkr_rate'] > 0) {
                        $class = 'increase';
                    }

					if(in_array($r['rc_adjust'], array('U', 'D')) && $r['rc_adjust_price'] > 0) :
						$r['rc_goal_price'] = $r['rc_adjust_price'];
					endif;
                ?>
                                <div class="chart_area">
                                    <div class="chartData">
                                        <div class="left">
                                            <h4 class="event_name">
											<?php if($this->session->userdata('is_paid')===FALSE) :?>
											<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><?=iconv_substr($r['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
											<?php else :?>
											<a href="/stock/recommend_view/<?=$r['rc_id']?>"><?=$r['ticker']['tkr_name']?>
											<?php endif;?>
											</a></h4>
                                            <ul class="info">
												<!--<li class="sum"><span class="eng"><?=($this->session->userdata('is_paid')===FALSE) ? '<span class="remark">* * * *</span>':$r['ticker']['tkr_ticker']?></span> </li>-->
                                                <li class="sum"><span class="eng">
												
												<?php if($this->session->userdata('is_paid')===FALSE) :?>
												<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
												<?php else :?>
												<a href="/stock/recommend_view/<?=$r['rc_id']?>">
												<?php endif;?>												
												
												<?=$r['rc_title']?></a></span> </li>
                                            </ul>
                                        </div>
                                        <div class="right">
                                            <ul class="detail">
												<li class="num"><span><?=$this->common->set_pricepoint($r['ticker']['tkr_close'], '1')?></span></li>
												<li class="per"><span class="<?=$class?>"><?=$this->common->set_pricepoint($r['ticker']['tkr_rate_str'], '2')?></span></li>
                                            </ul>
                                            <!-- //detail -->
                                        </div>
                                    </div>
                                    <!-- //chartData -->
                                    <div class="chartGoal">
                                        <dl>
                                            <dt>추천가</dt>
											<?php //if($this->session->userdata('is_paid')===TRUE || $r['rc_endtype'] == 'SUCCESS') :?>
											<dd><?=$this->common->set_pricepoint($r['rc_recom_price'], '1')?></dd>
											<?php //else :?>
											<!--<dd class="prm_lock"><img src="/img/prm_lock.png" alt="잠김"></dd>-->
											<?php //endif;?>
                                        </dl>
                                        <dl>
                                            <dt><?=($r['rc_endtype'] == 'SUCCESS' || $r['rc_endtype'] == 'SELL') ? '매도가':'목표가'?></dt>
											<?php if($this->session->userdata('is_paid')===TRUE || $r['rc_endtype'] == 'SUCCESS' || $r['rc_endtype'] == 'SELL') :?>
											<dd><?=($r['rc_endtype'] == 'SELL') ? $this->common->set_pricepoint($r['rc_mid_price'], '1'):$this->common->set_pricepoint($r['rc_goal_price'], '1')?></dd>
											<?php else :?>
											<dd class="prm_lock"><img src="/img/prm_lock.png" alt="잠김"></dd>
											<?php endif;?>
                                        </dl>
										<?php if($r['rc_endtype'] == 'SUCCESS') : ?>
										<span class="attainment attainment_com">달성 <?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
										<?php elseif($r['rc_endtype'] == 'SELL') :?>
										<span class="attainment attainment_com loss_cut">매도 <?=number_format($r['rc_profit_rate'],2)?><b>%</b></span>
										<?php else :?>
										<span class="attainment">수익률 <span class="<?=($r['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=($r['rc_profit_rate']>0) ? '+':''?><?=number_format($r['rc_profit_rate'],2)?><b>%</b></span></span>
										<?php endif; ?>                        
                                    </div>
                                    <!-- //chartGoal -->
                                </div>
                <?php endforeach; ?>
<?php }else{?>
									<?php
									foreach( (is_array($rc_list) && sizeof($rc_list)>0) ? $rc_list : array() as $r) : 
										$class = 'decrease';
										if($r['ticker']['tkr_rate'] > 0) {
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