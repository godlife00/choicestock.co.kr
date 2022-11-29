				
				
				<?php 
                foreach( (is_array($an_list) && sizeof($an_list)>0) ? $an_list : array() as $r) : 
                    $updown_class = 'decrease';
                    if($r['ticker']['tkr_rate'] > 0) {
                        $updown_class = 'increase';
                    }
                ?>

                <div class="area">
                    <ul class="list">
                        <li class="title">
						
						<?php if($this->session->userdata('is_paid')===TRUE) :?>
						<a href="/stock/analysis_view/<?=$r['an_id']?>">
						<?php else :?>
						<a href="#" data-modal="modal-3" class="btn_free md-trigger">
						<?php endif ;?>
						
						<?=$r['ticker']['tkr_name']?></a></li>
                        <li class="num">
                            <span><?=$this->common->set_pricepoint($r['ticker']['tkr_close'], '1');?></b></span>
                            <span class="<?=$updown_class?>"><?=$this->common->set_pricepoint($r['ticker']['tkr_rate_str'], '2');?></span><!-- increase 증가, decrease 감소 -->
                        </li>
                    </ul>
                    <div class="analysis_score">
                        <span class="score"><strong><?=$r['m_biz_total_score']?></strong> 점</span>
                        <div class="chart_analysis">
                            <div class="line">
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
									<?php if($r['fairvalue_rate'] >= -5) :?>
									<span class="i_graph">
										<span class="g_bar"><span class="g_action" style="left: <?=$r['fairvalue_rate']?>%;"></span></span>
									</span>
									<?php else :?>
									<span class="i_graph no_value">
										<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>
									</span>
									<?php endif;?>
								<?php else:?>
								<span class="i_graph graph_prm">
									<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>
								</span> 
								<?php endif;?>
                                <ul class="evaluation">
                                    <li>저</li>
                                    <li>적정가</li>
                                    <li>고</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- //analysis_score -->
                </div>
                <?php 
                endforeach;
                ?>
