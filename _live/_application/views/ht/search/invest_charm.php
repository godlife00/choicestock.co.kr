                <?=$ticker_header?>
<?php if($sec_ticker=='' && $pri_ticker=='') {?>
                <div class="chart_area diagnosis">
                    <div class="chartData">
                        <dl>
                            <dt class="charm">종목진단
                                <span class="txt_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span>
                                <div class="guide_box _hide">
                                    <span class="clse">닫기</span>                          
                                    <p class="txt"><strong>종목진단 점수</strong>는 해당 종목의 우량주 여부를 판단하는데 도움을 드립니다.</p>
                                    <p class="txt">10년 이상의 금융 빅데이터에서 우량주 발굴을 위해 22개 요인(Factor)을 종목별로 분석하고, 동종업종내 경쟁사와 비교합니다.</p>
                                    <ul>
                                        <li class="list_txt">종목진단 점수는 높을수록 매력적인 기업이며, 65점(상위 20%) 이상이면 우량 기업으로 판단합니다.</li>
                                        <li class="list_txt">종목진단 세부 항목인 독점력, 수익성, 안전성, 현금창출력, 미래성장성으로 별점(★) 5점 만점에 3점 이상이면 각 항목을 통과한 것으로 판단합니다.</li>
                                        <li class="list_txt">세부 항목 평가에서 별점 0~1점을 받았다면 위험 요인으로, 투자 판단시 유의해서 봐야 합니다.</li>                                        
                                        <li class="list_txt">우량주 여부를 판단한 후에는 적정주가로 저평가 여부를 확인하세요.</li>
                                    </ul>
                                </div>
                            </dt>
                            </dt>
                            <dd class="charm_num"><?=$mri_data['m_biz_total_score']?></dd>
                            <?php if($pre_mriscore>0) :?>
                            <?php $score_diff = $mri_data['m_biz_total_score']-$pre_mriscore;?>
                            <dd class="charm">전월대비 <strong><?=($score_diff>0) ? '+'.$score_diff : $score_diff?></strong></dd>
                            <?php endif;?>
                        </dl>
                    </div>
                    <!-- //chartData -->
                    <div class="difference">
                        <p class="dt">전체 <strong><?=number_format($high_count+1);?></strong>위, 상위 <strong><?=$total_rank_rate;?></strong>%</p>
                        <span class="dd">(<?=number_format($sp_totalcount);?>개 평가기업 중)</span>
                        <p class="dt">동일업종 <?=$industry_high_count+1?>위, 상위 <?=$industry_rank_rate;?>%</p>
                        <span class="dd">(업종 <?=$ticker['tkr_industry']?>)</span>
                    </div>
                    <!-- //difference -->
                    <div class="data_attainment">
                        <ul>
                            <li>PER<span><?=number_format($daily_data['dly_pe'], 2)?><b>배</b></span></li>
                            <li>PSR<span><?=$this->common->set_pricepoint(number_format($daily_data['dly_ps'], 2), '2')?><b>배</b></span></li>
                            <li>ROE<span><?=$this->common->set_pricepoint($mrt_data['sf1_roe'], '2')?></span></li>
                            <li>DY<span><?=$this->common->set_pricepoint($mry_data['sf1_divyield'], '2')?></span></li>
                        </ul>                                                
                    </div>
                </div>

                <div class="investCharm_area">

                    <div class="tab_diagnosis_area">
                        <div id="charm_top_spider_chart" class="containercharm1"></div>
                        <script>
					$(document).ready(function() {
						SubRecomSpiderChart('charm_top_spider_chart', [<?=$mri_data['m_future_stars']?>, <?=$mri_data['m_biz_moat_stars']?>, <?=$mri_data['m_biz_cashflow_stars']?>, <?=$mri_data['m_biz_growth_stars']?>, <?=$mri_data['m_biz_safety_stars']?>])
					});
						</script>

                        <table cellspacing="0" border="1" class="tableRanking table_alloca">
                            <colgroup>
                                <col width="100px">
                                <col width="">
                                <col width="">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td class="title">
                                        <span>미래성장성</span>
                                    </td>
                                    <td>
                                        <div class="star_area">
                                            <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($mri_data['m_future_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$mri_data['m_future_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </td>
                                    <td class="num">
                                        <?php if($part_page!='et') :?><a href="/<?=HT?>_attractiveness/attractive?sort=future&netincome=all&marketcap=over100billion"><?php endif;?><span>상위 <?=$future_rank_rate?>%</span><?php if($part_page!='et') :?></a><?php endif;?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">
                                        <span>사업독점력</span>
                                    </td>
                                    <td>
                                        <div class="star_area">
                                            <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($mri_data['m_biz_moat_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$mri_data['m_biz_moat_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </td>
                                    <td class="num">
                                        <?php if($part_page!='et') :?><a href="/<?=HT?>_attractiveness/attractive?sort=moat&netincome=all&marketcap=over100billion"><?php endif;?><span>상위 <?=$moat_rank_rate?>%</span><?php if($part_page!='et') :?></a><?php endif;?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">
                                        <span>재무안전성</span>
                                    </td>
                                    <td>
                                        <div class="star_area">
                                            <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($mri_data['m_biz_safety_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$mri_data['m_biz_safety_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </td>
                                    <td class="num">
                                <?php if($part_page!='et') :?><a href="/<?=HT?>_attractiveness/attractive?sort=safety&netincome=all&marketcap=over100billion"><?php endif;?><span>상위 <?=$safety_rank_rate?>%</span><?php if($part_page!='et') :?></a><?php endif;?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">
                                        <span>수익성</span>
                                    </td>
                                    <td>
                                        <div class="star_area">
                                            <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($mri_data['m_biz_growth_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$mri_data['m_biz_growth_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </td>
                                    <td class="num">
                                        <?php if($part_page!='et') :?><a href="/<?=HT?>_attractiveness/attractive?sort=growth&netincome=all&marketcap=over100billion"><?php endif;?><span>상위 <?=$growth_rank_rate?>%</span><?php if($part_page!='et') :?></a><?php endif;?>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="title">
                                        <span>현금창출력</span>
                                    </td>
                                    <td>
                                        <div class="star_area">
                                            <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($mri_data['m_biz_cashflow_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$mri_data['m_biz_cashflow_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </td>
                                    <td class="num">
                                        <?php if($part_page!='et') :?><a href="/<?=HT?>_attractiveness/attractive?sort=cashflow&netincome=all&marketcap=over100billion"><?php endif;?><span>상위 <?=$cashflow_rank_rate?>%</span><?php if($part_page!='et') :?></a><?php endif;?>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

						<?php if($this->session->userdata('is_paid')===FALSE && $part_page == 'et') :?>
                        <!-- 추천포트폴리오 -->
                        <div class="search_ptfo">
                            <div class="ptfo_recom_th">
                                <h3 class="ptfo_title">추천<br>포트폴리오</h3>
                                <p class="transfer">
                                    <span class="event">편입종목</span>
									<span class="num"><?=$pf_count?><b>개</b>
                                 </p>
                                 <p class="revenue">
                                    <span class="yield">수익률</span>
									<span class="<?=($pf_profit>0) ? 'increase':'decrease'?> pp"><?=$pf_profit?><b>%</b></span>
                                    <!-- increase 증가, decrease 감소 -->
                                 </p>
                            </div>
							<?php if(is_array($portfolio_list) && sizeof($portfolio_list) > 0) :?>
								<div class="ptfo_datatable">
									<table cellspacing="0" border="1" class="tableRanking ptfo_table">
										<tbody>
										<?php $cnt=0; foreach($portfolio_list as $portfolio) :
											$class = 'decrease';
											if($portfolio['rc_rate_str'] > 0) {
												$class = 'increase';
											}
										?>
										<tr>
											<td class="name">
											<?php if($cnt<1):?>
											<?=$portfolio['tkr_name']?>
											<?php else :?>
											<?=iconv_substr($portfolio['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
											<?php endif;?>
											</td>
											<td class="num">
												<span class=""><?=$this->common->set_pricepoint($portfolio['rc_close'], '1')?></span>
											</td>
											<td class="num">
												<span class="yield">수익률</span>
												<span class="<?=($portfolio['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($portfolio['rc_profit_rate'], '1')?><b>%</b></span>
											</td>
										</tr>
										<?php $cnt++; endforeach;?>
										</tbody>
									</table>
								</div>
								<div class="free_choicestock">
									<p><a href="javascript:fnSinChung();">종목 확인하기</a> - 초이스스탁US 무료체험 <i></i></p>                            
								</div>
							<?php endif;?>
							<!-- //ptfo_recom -->
						</div>
						<?php endif;?>

					<?php if($part_page != 'et') :?>

						<?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
                        <div class="hiding_box">
                            <div class="alloca_star">
                                <div class="alloca_box">
                                    <div class="small_star">
                                        <h2 class="title">미래성장성</h2>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($mri_data['m_future_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$mri_data['m_future_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">동일업종 평균</span>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($indavg_scores['m_future_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$indavg_scores['m_future_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </div>
                                    <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">전체기업 평균</span>
                                        <span>
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($avg_scores['m_future_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$avg_scores['m_future_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                                </div>
                                            </div>
                                            <!-- //star_area -->
                                        </span>
                                    </div> <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <p class="txt"><?=$mri_data['future'];?></p>

								<div class="chart_box">
									<?php
										/* 2021.08.26 미래성장성으로 변경
										//시가배당률
										if($mri_data['m_d_divyield']=='') $mri_data['m_d_divyield']=0; else $mri_data['m_d_divyield'] = round($mri_data['m_d_divyield']*100, 3);
										if($indavg_scores['m_d_divyield']=='') $indavg_scores['m_d_divyield']=0; else $indavg_scores['m_d_divyield'] = round($indavg_scores['m_d_divyield']*100, 3);
										if($avg_scores['m_d_divyield']=='') $avg_scores['m_d_divyield']=0; else $avg_scores['m_d_divyield'] = round($avg_scores['m_d_divyield']*100, 2);
										
										//배당성향
										if($mri_data['m_d_poratio']=='') $mri_data['m_d_poratio']=0; 
										if($indavg_scores['m_d_poratio']=='') $indavg_scores['m_d_poratio']=0;
										if($avg_scores['m_d_poratio']=='') $avg_scores['m_d_poratio']=0; 
								
										//순이익성장률(%)
										if($mri_data['m_d_epsgr2']=='') $mri_data['m_d_epsgr2']=0; 
										if($indavg_scores['m_d_epsgr2']=='') $indavg_scores['m_d_epsgr2']=0;
										if($avg_scores['m_d_epsgr2']=='') $avg_scores['m_d_epsgr2']=0;
									
										//잉여현금성장률(%)
										if($mri_data['m_d_fcfgr']=='') $mri_data['m_d_fcfgr']=0;
										if($indavg_scores['m_d_fcfgr']=='') $indavg_scores['m_d_fcfgr']=0;
										if($avg_scores['m_d_fcfgr']=='') $avg_scores['m_d_fcfgr']=0;

										//최근5년 배당금(달러)
										if($mri_data['m_d_dps1']=='') $mri_data['m_d_dps1']=0; 
										if($mri_data['m_d_dps2']=='') $mri_data['m_d_dps2']=0; 
										if($mri_data['m_d_dps3']=='') $mri_data['m_d_dps3']=0; 
										if($mri_data['m_d_dps4']=='') $mri_data['m_d_dps4']=0; 
										if($mri_data['m_d_dps5']=='') $mri_data['m_d_dps5']=0; 

										//2020.08.26 변경 if(strtoupper($ticker['tkr_category'])=='ADR' || strtoupper($ticker['tkr_category'])=='ADR PRIMARY' || strtoupper($ticker['tkr_category'])=='CANADIAN' || strtoupper($ticker['tkr_category'])=='CANADIAN PRIMARY') {
										if( strstr(strtoupper($ticker['tkr_category']), 'ADR') || strstr(strtoupper($ticker['tkr_category']), 'CANADIAN') ) {
										
											$last_mry_list_do = array();
											$last_mry_list_do = array_slice($last_mry_list, 0, 2);
											$curr = array_shift($last_mry_list_do);
											$before = array_pop($last_mry_list_do);
											$sf1_netinc = 'sf1_netinc';
										}
										else {
											$last_mry_list_do = array();
											$last_mry_list_do = $last_mrt_list;
											if(sizeof($last_mry_list_do)>5) {
												$last_mry_list_do = array_slice($last_mry_list_do, 0, 5);
											}
											$curr = array_shift($last_mry_list_do);
											$before = array_pop($last_mry_list_do);
											$sf1_netinc = 'sf1_netinccmnusd';
										}
										
										$epsgr = 0;
										if( $curr[$sf1_netinc] > 0 && $before[$sf1_netinc] < 0 ) {
											$epsgr = 1;
											$str_netinc = '흑자전환';
										}
										else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] < 0 ) {
											$epsgr = 1;
											$str_netinc = '적자지속';
										}
										else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] > 0 ) {
											$epsgr = 1;
											$str_netinc = '적자전환';
										}

										if($epsgr) {
											$mri_data['m_d_epsgr2']=0;
											//$indavg_scores['m_g_epsgr']=0;
											//$avg_scores['m_g_epsgr']=0;
										}
										*/

										if(!is_numeric($mri_data['m_future_sales'])) $mri_data['m_future_sales'] = 0;
										if(!is_numeric($mri_data['f_sales_indu'])) $mri_data['f_sales_indu'] = 0;
										if(!is_numeric($mri_data['f_sales_all'])) $mri_data['f_sales_all'] = 0;
										$profit_tooltip = '';
										if(!is_numeric($mri_data['m_future_profit'])) {
											$profit_tooltip = str_replace('흑전', '흑자전환', $mri_data['m_future_profit']);
											$mri_data['m_future_profit'] = 0;
										}
										if(!is_numeric($mri_data['f_profit_indu'])) $mri_data['f_profit_indu'] = 0;
										if(!is_numeric($mri_data['f_profit_all'])) $mri_data['f_profit_all'] = 0;

										if($ticker['tkr_industry'] == 'Banks - Regional' || $ticker['tkr_industry'] == 'Banks - Diversified') {
											$f_rifht_text = '순이익';
										}
										else {
											$f_rifht_text = '영업이익';
										}

									?>
                                    <div id="containeralloca_star1_1" class="containeralloca_star1 wd3"></div>
									<script>
									var chart_title = ['예상 매출액 성장률(%)'];
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_future_sales']?>]},
										{'name': '업종평균', 'data': [<?=$mri_data['f_sales_indu']?>]},
										{'name': '전체평균', 'data': [<?=$mri_data['f_sales_all']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star1_1', chart_value, chart_title);
									</script>

                                    <!-- 종목검사 종목진단 class = containeralloca_star1  -->
                                    <div id="containeralloca_star1_2" class="containeralloca_star1 wd3"></div>
									<script>
									var chart_title = ['예상 <?=$f_rifht_text?> 성장률(%)'];
									var ex_title = '<?=$profit_tooltip;?>';
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_future_profit']?>]},
										{'name': '업종평균', 'data': [<?=$mri_data['f_profit_indu']?>]},
										{'name': '전체평균', 'data': [<?=$mri_data['f_profit_all']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star1_2', chart_value, chart_title, ex_title);
									</script>
									
                                    <ul class="chart_legend">
                                        <li><span><i></i>종목</span></li>
                                        <li><span><i></i>업종평균</span></li>
                                        <li><span><i></i>전체평균</span></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- //alloca_star -->

                            <?php if($this->session->userdata('is_paid')===FALSE && $open_ticker===FALSE) :?>
                            <?php //include_once HT_INC_PATH.'/premium_banner.php'; ?>
                            <?php endif;?>
                            
                            <?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
                            <div class="alloca_star">
                                <div class="alloca_box">
                                    <div class="small_star">
                                        <h2 class="title">사업독점력</h2>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($mri_data['m_biz_moat_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$mri_data['m_biz_moat_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">동일업종 평균</span>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($indavg_scores['m_biz_moat_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$indavg_scores['m_biz_moat_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </div>
                                    <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">전체기업 평균</span>
                                        <span>
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($avg_scores['m_biz_moat_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$avg_scores['m_biz_moat_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                                </div>
                                            </div>
                                            <!-- //star_area -->
                                        </span>
                                    </div> <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <p class="txt"><?=$mri_data['moat'];?></p>

                                <?php
                                    //5년평균 ROE(%)
                                    if($mri_data['m_m_roe']=='') $mri_data['m_m_roe']=0; //else $mri_data['m_m_roe'] = round($mri_data['m_m_roe']*100, 2);
                                    if($indavg_scores['m_m_roe']=='') $indavg_scores['m_m_roe']=0; //else $indavg_scores['m_m_roe'] = round($indavg_scores['m_m_roe']*100, 2);
                                    if($avg_scores['m_m_roe']=='') $avg_scores['m_m_roe']=0; //else $avg_scores['m_m_roe'] = round($avg_scores['m_m_roe']*100, 2);

                                    //5년평균 영업이익률(%)
                                    if($mri_data['m_m_opmargin']=='') $mri_data['m_m_opmargin']=0; //else $mri_data['m_m_opmargin'] = round($mri_data['m_m_opmargin']*100, 2);
                                    if($indavg_scores['m_m_opmargin']=='') $indavg_scores['m_m_opmargin']=0; //else $indavg_scores['m_m_opmargin'] = round($indavg_scores['m_m_opmargin']*100, 2);
                                    if($avg_scores['m_m_opmargin']=='') $avg_scores['m_m_opmargin']=0; //else $avg_scores['m_m_opmargin'] = round($avg_scores['m_m_opmargin']*100, 2);

                                    if($is_financial) {
                                        //5년 평균 자산 성장률(%)
                                        if($mri_data['m_m_assetsgr']=='') $mri_data['m_m_assetsgr']=0; 
                                        if($indavg_scores['m_m_assetsgr']=='') $indavg_scores['m_m_assetsgr']=0; 
                                        if($avg_scores['m_m_assetsgr']=='') $avg_scores['m_m_assetsgr']=0; 
                                    }
                                    else {
                                        //5년평균 매출액성장률(%)
                                        if($mri_data['m_m_revenuegr']=='') $mri_data['m_m_revenuegr']=0; //else $mri_data['m_m_revenuegr'] = round($mri_data['m_m_revenuegr']*100, 2);
                                        if($indavg_scores['m_m_revenuegr']=='') $indavg_scores['m_m_revenuegr']=0; //else $indavg_scores['m_m_revenuegr'] = round($indavg_scores['m_m_revenuegr']*100, 2);
                                        if($avg_scores['m_m_revenuegr']=='') $avg_scores['m_m_revenuegr']=0; //else $avg_scores['m_m_revenuegr'] = round($avg_scores['m_m_revenuegr']*100, 2);
                                    }
                                ?>
                                <div class="chart_box">
                                    <?php if($is_financial){?>
                                    <div id="containeralloca_star2_1" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년평균 ROE(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_roe']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_roe']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_roe']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_1', chart_value, chart_title);</script>

                                    <div id="containeralloca_star2_2" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년평균 영업이익률(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_opmargin']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_opmargin']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_opmargin']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_2', chart_value, chart_title);</script>

                                    <div id="containeralloca_star2_3" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년 평균 자산 성장률(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_assetsgr']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_assetsgr']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_assetsgr']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_3', chart_value, chart_title);</script>

                                    <?php }else{?>
                                    <div id="containeralloca_star2_1" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년평균 ROE(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_roe']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_roe']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_roe']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_1', chart_value, chart_title);</script>

                                    <div id="containeralloca_star2_2" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년평균 영업이익률(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_opmargin']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_opmargin']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_opmargin']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_2', chart_value, chart_title);</script>

                                    <div id="containeralloca_star2_3" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['5년평균 매출액성장률(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_m_revenuegr']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_m_revenuegr']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_m_revenuegr']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star2_3', chart_value, chart_title);</script>
                                    <?php }?>
                                    <ul class="chart_legend">
                                        <li><span><i></i>종목</span></li>
                                        <li><span><i></i>업종평균</span></li>
                                        <li><span><i></i>전체평균</span></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="alloca_star">
                                <div class="alloca_box">
                                    <div class="small_star">
                                        <h2 class="title">재무안전성</h2>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($mri_data['m_biz_safety_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$mri_data['m_biz_safety_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">동일업종 평균</span>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($indavg_scores['m_biz_safety_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$indavg_scores['m_biz_safety_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </div>
                                    <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">전체기업 평균</span>
                                        <span>
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($avg_scores['m_biz_safety_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$avg_scores['m_biz_safety_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                                </div>
                                            </div>
                                            <!-- //star_area -->
                                        </span>
                                    </div> <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->
                                <p class="txt"><?=$mri_data['safety'];?><?php if(!$is_financial) echo ' 재무안전성은 부채비율, 유동비율, 이자보상배수, 금융비용 등을 종합해 평가합니다.';?></p>
                                <?php
                                    //부채비율(%)
                                    if($mri_data['m_s_debtratio']=='') $mri_data['m_s_debtratio']=0; else $mri_data['m_s_debtratio'] = round($mri_data['m_s_debtratio']*100, 2);
                                    if($indavg_scores['m_s_debtratio']=='') $indavg_scores['m_s_debtratio']=0; else $indavg_scores['m_s_debtratio'] = round($indavg_scores['m_s_debtratio']*100, 2);
                                    if($avg_scores['m_s_debtratio']=='') $avg_scores['m_s_debtratio']=0; else $avg_scores['m_s_debtratio'] = round($avg_scores['m_s_debtratio']*100, 2);

                                    //유동비율(%)
                                    if($mri_data['m_s_crratio']=='') $mri_data['m_s_crratio']=0; else $mri_data['m_s_crratio'] = round($mri_data['m_s_crratio']*100, 2);
                                    if($indavg_scores['m_s_crratio']=='') $indavg_scores['m_s_crratio']=0; else $indavg_scores['m_s_crratio'] = round($indavg_scores['m_s_crratio']*100, 2);
                                    if($avg_scores['m_s_crratio']=='') $avg_scores['m_s_crratio']=0; else $avg_scores['m_s_crratio'] = round($avg_scores['m_s_crratio']*100, 2);

                                    //이자보상배수(배)
                                    if($mri_data['m_s_intcoverage']=='') $mri_data['m_s_intcoverage']=0; else $mri_data['m_s_intcoverage'] = round($mri_data['m_s_intcoverage']);
                                    if($indavg_scores['m_s_intcoverage']=='') $indavg_scores['m_s_intcoverage']=0; else $indavg_scores['m_s_intcoverage'] = round($indavg_scores['m_s_intcoverage']);
                                    if($avg_scores['m_s_intcoverage']=='') $avg_scores['m_s_intcoverage']=0; else $avg_scores['m_s_intcoverage'] = round($avg_scores['m_s_intcoverage']);

                                    //차입금비중(%)
                                    if($mri_data['m_s_boingratio']=='') $mri_data['m_s_boingratio']=0; else $mri_data['m_s_boingratio'] = round($mri_data['m_s_boingratio']*100, 2);
                                    if($indavg_scores['m_s_boingratio']=='') $indavg_scores['m_s_boingratio']=0; else $indavg_scores['m_s_boingratio'] = round($indavg_scores['m_s_boingratio']*100, 2);
                                    if($avg_scores['m_s_boingratio']=='') $avg_scores['m_s_boingratio']=0; else $avg_scores['m_s_boingratio'] = round($avg_scores['m_s_boingratio']*100, 2);

                                    //금융비용(%)
                                    if($mri_data['m_s_fincost']=='') $mri_data['m_s_fincost']=0; else $mri_data['m_s_fincost'] = round($mri_data['m_s_fincost']*100, 2);
                                    if($indavg_scores['m_s_fincost']=='') $indavg_scores['m_s_fincost']=0; else $indavg_scores['m_s_fincost'] = round($indavg_scores['m_s_fincost']*100, 2);
                                    if($avg_scores['m_s_fincost']=='') $avg_scores['m_s_fincost']=0; else $avg_scores['m_s_fincost'] = round($avg_scores['m_s_fincost']*100, 2);

                                    if($is_financial) {
                                        //자기자본비율(%)
                                        if($mri_data['m_s_bis']=='') $mri_data['m_s_bis']=0; //else $mri_data['m_s_bis'] = round($mri_data['m_s_bis']*100, 2);
                                        if($indavg_scores['m_s_bis']=='') $indavg_scores['m_s_bis']=0; //else $indavg_scores['m_s_bis'] = round($indavg_scores['m_s_bis']*100, 2);
                                        if($avg_scores['m_s_bis']=='') $avg_scores['m_s_bis']=0; //else $avg_scores['m_s_bis'] = round($avg_scores['m_s_bis']*100, 2);
                                    }
                                ?>
                                <div class="chart_box">
                                    <?php if($is_financial){?>
                                    <div id="containeralloca_star3_1" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['자기자본비율(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_bis']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_bis']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_bis']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_1', chart_value, chart_title);</script>

                                    <?php }else {?>                            
                                    <div id="containeralloca_star3_1" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['부채비율(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_debtratio']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_debtratio']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_debtratio']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_1', chart_value, chart_title);</script>

                                    <div id="containeralloca_star3_2" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['유동비율(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_crratio']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_crratio']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_crratio']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_2', chart_value, chart_title);</script>

                                    <div id="containeralloca_star3_3" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['이자보상배수(배)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_intcoverage']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_intcoverage']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_intcoverage']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_3', chart_value, chart_title);</script>

                                    <div id="containeralloca_star3_4" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['차입금비중(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_boingratio']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_boingratio']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_boingratio']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_4', chart_value, chart_title);</script>
                                
                                    <div id="containeralloca_star3_5" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['금융비용(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_s_fincost']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_s_fincost']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_s_fincost']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star3_5', chart_value, chart_title);</script>
                                <?php }?>                            
                                    <ul class="chart_legend">
                                        <li><span><i></i>종목</span></li>
                                        <li><span><i></i>업종평균</span></li>
                                        <li><span><i></i>전체평균</span></li>
                                    </ul>
                                </div>
                            </div>
                            <!-- //alloca_star -->
                            <div class="alloca_star">
                                <div class="alloca_box">
                                    <div class="small_star">
                                        <h2 class="title">수익성</h2>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($mri_data['m_biz_growth_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$mri_data['m_biz_growth_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">동일업종 평균</span>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($indavg_scores['m_biz_growth_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$indavg_scores['m_biz_growth_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </div>
                                    <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">전체기업 평균</span>
                                        <span>
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($avg_scores['m_biz_growth_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$avg_scores['m_biz_growth_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                                </div>
                                            </div>
                                            <!-- //star_area -->
                                        </span>
                                    </div> <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <p class="txt"><?=$mri_data['growth'];?></p>

                                <?php
								/* 21.10.07 주석처리
                                    //5년평균 ROE(%)
                                    if($mri_data['m_g_roe']=='') $mri_data['m_g_roe']=0; 
                                    if($indavg_scores['m_g_roe']=='') $indavg_scores['m_g_roe']=0;
                                    if($avg_scores['m_g_roe']=='') $avg_scores['m_g_roe']=0; 

                                    //이익성장률(%)
                                    if($mri_data['m_g_epsgr']=='') $mri_data['m_g_epsgr']=0;
                                    if($indavg_scores['m_g_epsgr']=='') $indavg_scores['m_g_epsgr']=0;
                                    if($avg_scores['m_g_epsgr']=='') $avg_scores['m_g_epsgr']=0;

                                    //2020.08.26 변경 if(strtoupper($ticker['tkr_category'])=='ADR' || strtoupper($ticker['tkr_category'])=='ADR PRIMARY' || strtoupper($ticker['tkr_category'])=='CANADIAN' || strtoupper($ticker['tkr_category'])=='CANADIAN PRIMARY') {
                                    if( strstr(strtoupper($ticker['tkr_category']), 'ADR') || strstr(strtoupper($ticker['tkr_category']), 'CANADIAN') ) {
                                
                                        $last_mry_list_do = array();
                                        $last_mry_list_do = array_slice($last_mry_list, 0, 2);
                                        $curr = array_shift($last_mry_list_do);
                                        $before = array_pop($last_mry_list_do);
                                        $sf1_netinc = 'sf1_netinc';
                                    }
                                    else {
                                        $last_mry_list_do = array();
                                        $last_mry_list_do = $last_mrt_list;
                                        if(sizeof($last_mry_list_do)>5) {
                                            $last_mry_list_do = array_slice($last_mry_list_do, 0, 5);
                                        }
                                        $curr = array_shift($last_mry_list_do);
                                        $before = array_pop($last_mry_list_do);
                                        $sf1_netinc = 'sf1_netinccmnusd';
                                    }
            
                                    $epsgr = 0;
                                    if( $curr[$sf1_netinc] > 0 && $before[$sf1_netinc] < 0 ) {
                                        $epsgr = 1;
                                        $str_netinc = '흑자전환';
                                    }
                                    else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] < 0 ) {
                                        $epsgr = 1;
                                        $str_netinc = '적자지속';
                                    }
                                    else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] > 0 ) {
                                        $epsgr = 1;
                                        $str_netinc = '적자전환';
                                    }

                                    if($epsgr) {
                                        $mri_data['m_g_epsgr']=0;
                                        //$indavg_scores['m_g_epsgr']=0;
                                        //$avg_scores['m_g_epsgr']=0;
                                    }
								21.10.07 주석처리 */
                                ?>

								<div class="chart_box">
									<div id="containeralloca_star4_1" class="containeralloca_star1"></div>
									<script>
									var chart_title = ['영업이익률(%)'];
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_g_epsgr']?>]},
										{'name': '업종평균', 'data': [<?=$indavg_scores['m_g_epsgr']?>]},
										{'name': '전체평균', 'data': [<?=$avg_scores['m_g_epsgr']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star4_1', chart_value, chart_title);</script>

									<div id="containeralloca_star4_2" class="containeralloca_star1"></div>
									<script>
									var chart_title = ['순이익률(%)'];
									//var ex_title = '<?=$str_netinc;?>';
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_g_netmargin']?>]},
										{'name': '업종평균', 'data': [<?=$indavg_scores['m_g_netmargin']?>]},
										{'name': '전체평균', 'data': [<?=$avg_scores['m_g_netmargin']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star4_2', chart_value, chart_title);</script>

									<div id="containeralloca_star4_3" class="containeralloca_star1"></div>
									<script>
									var chart_title = ['ROE(%)'];
									//var ex_title = '<?=$str_netinc;?>';
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_g_roe']?>]},
										{'name': '업종평균', 'data': [<?=$indavg_scores['m_g_roe']?>]},
										{'name': '전체평균', 'data': [<?=$avg_scores['m_g_roe']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star4_3', chart_value, chart_title);</script>


									<div id="containeralloca_star4_4" class="containeralloca_star1"></div>
									<script>
									var chart_title = ['ROA(%)'];
									//var ex_title = '<?=$str_netinc;?>';
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_g_roa']?>]},
										{'name': '업종평균', 'data': [<?=$indavg_scores['m_g_roa']?>]},
										{'name': '전체평균', 'data': [<?=$avg_scores['m_g_roa']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star4_4', chart_value, chart_title);</script>


									<div id="containeralloca_star4_5" class="containeralloca_star1"></div>
									<script>
									var chart_title = ['ROIC(%)'];
									//var ex_title = '<?=$str_netinc;?>';
									var chart_value = [
										{'name': '종목', 'data': [<?=$mri_data['m_g_roic']?>]},
										{'name': '업종평균', 'data': [<?=$indavg_scores['m_g_roic']?>]},
										{'name': '전체평균', 'data': [<?=$avg_scores['m_g_roic']?>]}
									];
									SubSearchSummaryColumnChart('containeralloca_star4_5', chart_value, chart_title);</script>
									<ul class="chart_legend">
										<li><span><i></i>종목</span></li>
										<li><span><i></i>업종평균</span></li>
										<li><span><i></i>전체평균</span></li>
									</ul>
								</div>
                            </div>
                            <div class="alloca_star">
                                <div class="alloca_box">
                                    <div class="small_star">
                                        <h2 class="title">현금창출력</h2>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($mri_data['m_biz_cashflow_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$mri_data['m_biz_cashflow_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">동일업종 평균</span>
                                        <div class="star_area">
                                            <div class="starRev">
                                            <?php 
                                            for($i = 1 ; $i <= 5 ; $i++) { 
                                                if($indavg_scores['m_biz_cashflow_stars'] >= $i) {
                                                    echo '<span class="starR on">별1</span>';
                                                }
                                                else {
                                                    if($i-$indavg_scores['m_biz_cashflow_stars'] <= 0.5) {
                                                        echo '<span class="starR on half">별1</span>';
                                                    }
                                                    else {
                                                        echo '<span class="starR">별1</span>';
                                                    }
                                                }
                                            }
                                            ?>
                                            </div>
                                        </div>
                                        <!-- //star_area -->
                                    </div>
                                    <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <div class="alloca_box">
                                    <div class="small_star">
                                        <span class="title">전체기업 평균</span>
                                        <span>
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                for($i = 1 ; $i <= 5 ; $i++) { 
                                                    if($avg_scores['m_biz_cashflow_stars'] >= $i) {
                                                        echo '<span class="starR on">별1</span>';
                                                    }
                                                    else {
                                                        if($i-$avg_scores['m_biz_cashflow_stars'] <= 0.5) {
                                                            echo '<span class="starR on half">별1</span>';
                                                        }
                                                        else {
                                                            echo '<span class="starR">별1</span>';
                                                        }
                                                    }
                                                }
                                                ?>
                                                </div>
                                            </div>
                                            <!-- //star_area -->
                                        </span>
                                    </div> <!-- //small_star -->
                                </div>
                                <!-- //alloca_box -->

                                <p class="txt"><?=$mri_data['cashflow'];?></p>

                                <?php
                                    //잉여현금흐름비율(%)
                                    if($mri_data['m_c_ffrevenue']=='') $mri_data['m_c_ffrevenue']=0; else $mri_data['m_c_ffrevenue'] = round($mri_data['m_c_ffrevenue']*100, 2);
                                    if($indavg_scores['m_c_ffrevenue']=='') $indavg_scores['m_c_ffrevenue']=0; else $indavg_scores['m_c_ffrevenue'] = round($indavg_scores['m_c_ffrevenue']*100, 2);
                                    if($avg_scores['m_c_ffrevenue']=='') $avg_scores['m_c_ffrevenue']=0; else $avg_scores['m_c_ffrevenue'] = round($avg_scores['m_c_ffrevenue']*100, 2);

                                    //주가현금흐름배수(배)
                                    if($mri_data['m_c_pcr']=='') $mri_data['m_c_pcr']=0; else $mri_data['m_c_pcr'] = round($mri_data['m_c_pcr']);
                                    if($indavg_scores_p['m_c_pcr']=='') $indavg_scores_p['m_c_pcr']=0; else $indavg_scores_p['m_c_pcr'] = round($indavg_scores_p['m_c_pcr']);
                                    if($avg_scores_p['m_c_pcr']=='') $avg_scores_p['m_c_pcr']=0; else $avg_scores_p['m_c_pcr'] = round($avg_scores_p['m_c_pcr']);

                                    //영업활동현금흐름(%)
                                    if($mri_data['m_c_cashflow']=='') $mri_data['m_c_cashflow']=0; else $mri_data['m_c_cashflow'] = round($mri_data['m_c_cashflow']);
                                    if($indavg_scores['m_c_cashflow']=='') $indavg_scores['m_c_cashflow']=0; else $indavg_scores['m_c_cashflow'] = round($indavg_scores['m_c_cashflow']);
                                    if($avg_scores['m_c_cashflow']=='') $avg_scores['m_c_cashflow']=0; else $avg_scores['m_c_cashflow'] = round($avg_scores['m_c_cashflow']);
                                ?>

                                <div class="chart_box">
                                    <?php if($is_financial){?>
                                    <div id="containeralloca_star5_3" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['영업활동현금(백만달러)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_c_cashflow']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_c_cashflow']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_c_cashflow']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star5_3', chart_value, chart_title);</script>
                                    <?php }else{?>
                                    <div id="containeralloca_star5_1" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['잉여현금흐름비율(%)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_c_ffrevenue']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_c_ffrevenue']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_c_ffrevenue']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star5_1', chart_value, chart_title);</script>

                                    <div id="containeralloca_star5_2" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['주가현금흐름배수(배)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_c_pcr']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores_p['m_c_pcr']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores_p['m_c_pcr']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star5_2', chart_value, chart_title);</script>

                                    <div id="containeralloca_star5_3" class="containeralloca_star1"></div>
                                    <script>
                                    var chart_title = ['영업활동현금(백만달러)'];
                                    var chart_value = [
                                        {'name': '종목', 'data': [<?=$mri_data['m_c_cashflow']?>]},
                                        {'name': '업종평균', 'data': [<?=$indavg_scores['m_c_cashflow']?>]},
                                        {'name': '전체평균', 'data': [<?=$avg_scores['m_c_cashflow']?>]}
                                    ];
                                    SubSearchSummaryColumnChart('containeralloca_star5_3', chart_value, chart_title);</script>
                                    <!-- 종목검사 종목진단 class = containeralloca_star1  -->                                    
                                    <?php }?>
                                    <ul class="chart_legend">
                                        <li><span><i></i>종목</span></li>
                                        <li><span><i></i>업종평균</span></li>
                                        <li><span><i></i>전체평균</span></li>
                                    </ul>
                                </div>
                            </div>
                            <?php endif;?>
                        </div>
                        <!-- //hiding_box -->
						<?php endif;?>

                        <?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
                        <div class="compet_chart">
                            <h3 class="title">경쟁사 투자매력도</h3>
                            <div class="swiper-container swiper_competChar">
                                <div class="swiper-wrapper">
                                    <?php foreach($competitor_data as $key => $row) : ?>
                                    <div class="swiper-slide">
                                        <div class="chart_area">
                                            <div class="chartData">
                                                <div id="charm_comp_spider_chart<?=$key?>" class="containercompet1"></div>
                                                <script>SubSearchCharmCompSpiderChart('charm_comp_spider_chart<?=$key?>', [<?=$row['m_future_stars']?>, <?=$row['m_biz_moat_stars']?>, <?=$row['m_biz_cashflow_stars']?>, <?=$row['m_biz_growth_stars']?>, <?=$row['m_biz_safety_stars']?>])</script>
                                                <!-- 종목검색 - 종목진단 - 경쟁사투자매력도 id = containercompet1 -->
                                                <span class="chart_name"><?php if($part_page == ''){?><a href="/<?=HT?>_search/summary/<?=$row['m_ticker'];?>"><?php }?><?=$row['m_korname']?> (<?=$row['m_ticker']?>)<?php if($part_page == ''){?></a><?php }?></span>
                                                
                                                <div class="chart_star">
                                                    <div class="star_area">
                                                        <span class="title">미래성장성</span>
                                                        <div class="starRev">
                                                        <?php 
                                                        for($i = 1 ; $i <= 5 ; $i++) { 
                                                            if($row['m_future_stars'] >= $i) {
                                                                echo '<span class="starR on">별1</span>';
                                                            }
                                                            else {
                                                                if($i-$row['m_future_stars'] <= 0.5) {
                                                                    echo '<span class="starR on half">별1</span>';
                                                                }
                                                                else {
                                                                    echo '<span class="starR">별1</span>';
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                        </div>
                                                    </div>
                                                    <!-- //star_area -->
                                                    <div class="star_area">
                                                        <span class="title">사업</span>
                                                        <div class="starRev">
                                                        <?php 
                                                        for($i = 1 ; $i <= 5 ; $i++) { 
                                                            if($row['m_biz_moat_stars'] >= $i) {
                                                                echo '<span class="starR on">별1</span>';
                                                            }
                                                            else {
                                                                if($i-$row['m_biz_moat_stars'] <= 0.5) {
                                                                    echo '<span class="starR on half">별1</span>';
                                                                }
                                                                else {
                                                                    echo '<span class="starR">별1</span>';
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                        </div>
                                                    </div>
                                                    <!-- //star_area -->
                                                    <div class="star_area">
                                                        <span class="title">재무</span>
                                                        <div class="starRev">
                                                        <?php 
                                                        for($i = 1 ; $i <= 5 ; $i++) { 
                                                            if($row['m_biz_safety_stars'] >= $i) {
                                                                echo '<span class="starR on">별1</span>';
                                                            }
                                                            else {
                                                                if($i-$row['m_biz_safety_stars'] <= 0.5) {
                                                                    echo '<span class="starR on half">별1</span>';
                                                                }
                                                                else {
                                                                    echo '<span class="starR">별1</span>';
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                        </div>
                                                    </div>
                                                    <!-- //star_area -->
                                                    <div class="star_area">
                                                        <span class="title">수익</span>
                                                        <div class="starRev">
                                                        <?php 
                                                        for($i = 1 ; $i <= 5 ; $i++) { 
                                                            if($row['m_biz_growth_stars'] >= $i) {
                                                                echo '<span class="starR on">별1</span>';
                                                            }
                                                            else {
                                                                if($i-$row['m_biz_growth_stars'] <= 0.5) {
                                                                    echo '<span class="starR on half">별1</span>';
                                                                }
                                                                else {
                                                                    echo '<span class="starR">별1</span>';
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                        </div>
                                                    </div>
                                                    <!-- //star_area -->
                                                    <div class="star_area">
                                                        <span class="title">현금</span>
                                                        <div class="starRev">
                                                        <?php 
                                                        for($i = 1 ; $i <= 5 ; $i++) { 
                                                            if($row['m_biz_cashflow_stars'] >= $i) {
                                                                echo '<span class="starR on">별1</span>';
                                                            }
                                                            else {
                                                                if($i-$row['m_biz_cashflow_stars'] <= 0.5) {
                                                                    echo '<span class="starR on half">별1</span>';
                                                                }
                                                                else {
                                                                    echo '<span class="starR">별1</span>';
                                                                }
                                                            }
                                                        }
                                                        ?>
                                                        </div>
                                                    </div>
                                                    <!-- //star_area -->
                                                    <?php if($part_page == ''){?><a href="/<?=HT?>_search/summary/<?=$row['m_ticker']?>" class="more">자세히 <i>>></i> </a><?php }?>
                                                </div>
                                                <!-- //chart_star -->
                                            </div>
                                        </div>
                                        <!-- //chart_area -->
                                    </div>
                                    <!-- //swiper-slide -->
                                    <?php endforeach; ?>
                                </div>
                                <!-- //swiper-wrapper -->
                            </div>
                        </div>
                        <?php endif;?>
					<?php endif;?>
                    </div>
                    <!-- //tab_diagnosis_area -->
                </div>
                <!-- //investCharm_area -->
            </div>
            <!-- //sub_mid -->
<?php }else{?>
        <!-- 주요 콘텐츠 --> 
        <div class="sub_mid nondata">
            <p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><?php if($part_page == ''){?><a href="/<?=HT?>_search/summary/<?=$pri_ticker?>"><?php }?><?=$pri_ticker?><?php if($part_page == ''){?></a><?php }?></strong> 종목에서 확인할 수 있습니다.</p>
        </div>
        <!-- //sub_mid nondata -->
<?php }?>
