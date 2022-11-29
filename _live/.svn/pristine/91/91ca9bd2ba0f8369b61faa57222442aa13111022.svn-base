			<?php include_once INC_PATH.'/ticker_submenu.php'; ?>

            <!-- //tab_area -->
            <div class="sub_top">
                <!-- Swiper -->
                <div class="swiper-container recomSwiper">
                    <div class="swiper-wrapper">
                    <?php 
                        foreach($top_analy as $idx => $ta) : 
                            $class = 'decrease';
                            if($ta['ticker']['tkr_rate'] > 0) {
                                $class = 'increase';
                            }
                    ?>
                        <div class="swiper-slide">
                            <div class="chart_area" data-id="<?=$ta['an_id']?>">
                                <div class="chartData left_area">
                                    <h2 class="title" title="<?=$ta['ticker']['tkr_name_en']?>"><a href="/stock/analysis_view/<?=$ta['an_id']?>"><?=$ta['ticker']['tkr_name']?></a></h2>
                                    <ul class="info">
                                        <li class="sum"><span class="eng"><?=$ta['an_ticker']?></span> </li>
                                    </ul>
                                    <!-- //info -->
                                    <ul class="detail">
                                        <li class="num"><?=$this->common->set_pricepoint($ta['ticker']['tkr_close'], '1');?></li>
                                        <li class="per">
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($ta['ticker']['tkr_rate_str'], '2');?></span>
                                            <!-- increase 증가, decrease 감소 -->
                                        </li>
                                    </ul>
                                    <!-- //detail -->
                                    <!--<div id="containerArea1_1" class="containerS1"></div>-->
                                    <div id="top_analy<?=$idx?>" class="containerS1"></div><!-- 종목추천 id = containerS1 -->
                                    <script>SubAnalyTopChart('top_analy<?=$idx?>', [<?=$ta['chart_value']?>]);</script>

                                </div>
                                <!-- //chartData -->

                                <div class="right_area">
                                    <dl class="charm_score">
                                        <dt class="charm">투자매력점수</dt>
                                        <dd class="charm_num"><?=$ta['m_biz_total_score']?><b>점</b></dd>
                                    </dl>
                                    <!-- //charm_score -->
                                    <dl class="value_score">
                                        <dt class="value">밸류에이션</dt>
                                        <dd class="just">
                                            <div class="chart_analysis">
                                                <div class="line">
													<?php if($ta['fairvalue_rate'] >= -5) :?>
													<span class="i_graph">
														<span class="g_bar"><span class="g_action" style="left: <?=$ta['fairvalue_rate']?>%;"></span></span>
													</span>
													<?php else :?>
													<span class="i_graph no_value">
														<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>
													</span>
													<?php endif;?>
                                                    <ul class="evaluation">
                                                        <li>저</li>
                                                        <li>적정가</li>
                                                        <li>고</li>
                                                    </ul>
                                                    <!-- //evaluation -->
                                                </div>
                                            </div>
                                            <!-- //chart_analysis -->
                                        </dd>
                                    </dl>
                                </div>
                            </div>
                            <!-- //chart_area -->
                        </div>
                        <?php endforeach; ?>
						
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                </div>
                <!-- //swiper-container -->
            </div>
            <!-- //sub_top -->

            <div class="sub_mid eventPicks_area">

				<?php if($this->session->userdata('is_paid')===FALSE) :?>
                <div class="banner_prm">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                    <a href="/main/service_free" class="weeks_free">[e주 무료 이용]</a>
                </div>
				<?php endif;?>

                <div id="analysis_list">
                    <?=$content_html?>
                </div>
				<?php if($this->session->userdata('is_paid')===TRUE) :?>
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>

				<script>
				var page = 1;
				var is_loading = false;
				function view_more() {
					if(is_loading) {
						return;
					}
					is_loading = true;
					
					page += 1;
					$.post('/stock/ajax_get_analysis_list', {'page': page}, function(res) {
						if($.trim(res).length) {
							$('#analysis_list').append(res);
						} else {
							$('.btn_more').hide();
						}
						is_loading = false;
					});
				}

				$(function() {
					$('.chart_area').on('click', function() {
						location.href = '/stock/analysis_view/' + $(this).data('id');
					});
				});
				</script>

				<?php else :?>
                <div class="banner_prm">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                    <a href="/main/service_free" class="weeks_free">[e주 무료 이용]</a>
                </div>
				<?php endif;?>

                <!-- //btn_more -->
            </div> <!-- //sub_mid -->