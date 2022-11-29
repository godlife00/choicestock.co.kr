				<?=$ticker_header?>
<?php if($sec_ticker=='' && $pri_ticker=='') {?>
				<div class="sub_mid outline_box">
					<a href="/search/invest_charm/<?=$ticker_code?>" class="box">
						<p class="title"><span>진단점수</span></p>
						<div class="con">
							<div class="charmNum_box">
								<strong class="charm_num"><?=$mri_data['m_biz_total_score']?></strong>
								<p class="charm_average">업종평균 <b><?=round($indavg_scores['m_biz_total_score'])?></b></p>
							</div>
							<!-- //charmNum_box -->
							<p class="charm_ranking">전체상위 <span><?=$total_rank_rate;?>%</span></p>
						</div>
					</a>

					<?php if($fairvalue_rate >= -5) :?>
						<?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
						<a href="/search/fairvalue/<?=$ticker_code?>" class="box">
							<p class="title"><span>AI적정주가</span></p>
							<div class="con">
								<div class="value_chart">
									<div class="line">
										<?php
										foreach($band_list as $key=>$sl) :
											if($sl['m_v_fairvalue1'] == '0.00') $band_list[$key]['m_v_fairvalue1'] = 'N/A';
											if($sl['m_v_fairvalue2'] == '0.00') $band_list[$key]['m_v_fairvalue2'] = 'N/A';
											if($sl['m_v_fairvalue3'] == '0.00') $band_list[$key]['m_v_fairvalue3'] = 'N/A';
											if($sl['m_v_fairvalue4'] == '0.00') $band_list[$key]['m_v_fairvalue4'] = 'N/A';
											if($sl['m_v_fairvalue5'] == '0.00') $band_list[$key]['m_v_fairvalue5'] = 'N/A';

											if($key == 0) {
												$pre_fairvalue5 = $sl['m_v_fairvalue5'];
												$pre_fairvalue4 = $sl['m_v_fairvalue4'];
												$pre_fairvalue3 = $sl['m_v_fairvalue3'];
												$pre_fairvalue2 = $sl['m_v_fairvalue2'];
												$pre_fairvalue1 = $sl['m_v_fairvalue1'];
											}
											else {
												if($pre_performance == 'Y') {

													if($key == count($band_list)-1 && $sl['m_disparate'] == 'N') {
													
													}
													else {
														$band_list[$key]['m_v_fairvalue5'] = $pre_fairvalue5;
														$band_list[$key]['m_v_fairvalue4'] = $pre_fairvalue4;
														$band_list[$key]['m_v_fairvalue3'] = $pre_fairvalue3;
														$band_list[$key]['m_v_fairvalue2'] = $pre_fairvalue2;
														$band_list[$key]['m_v_fairvalue1'] = $pre_fairvalue1;
													}

													if($pre_month != substr($sl['m_sep_date'], 0, 6)) {
														$pre_fairvalue5 = $sl['m_v_fairvalue5'];
														$pre_fairvalue4 = $sl['m_v_fairvalue4'];
														$pre_fairvalue3 = $sl['m_v_fairvalue3'];
														$pre_fairvalue2 = $sl['m_v_fairvalue2'];
														$pre_fairvalue1 = $sl['m_v_fairvalue1'];
													}
												}
												else {
													$pre_fairvalue5 = $sl['m_v_fairvalue5'];
													$pre_fairvalue4 = $sl['m_v_fairvalue4'];
													$pre_fairvalue3 = $sl['m_v_fairvalue3'];
													$pre_fairvalue2 = $sl['m_v_fairvalue2'];
													$pre_fairvalue1 = $sl['m_v_fairvalue1'];
												}
											}
											$pre_performance = $sl['m_disparate'];
											$pre_month = substr($sl['m_sep_date'], 0, 6);
										endforeach;
										
										$band_cnt = count($band_list);
										if($band_cnt>0 && isset($band_list[$band_cnt-2]['m_disparate']) && $band_list[$band_cnt-2]['m_disparate'] == 'Y' && $mri_data['m_disparate'] != 'N') {
											$mri_data['m_v_fairvalue1'] = $band_list[$band_cnt-1]['m_v_fairvalue1']; 
											$mri_data['m_v_fairvalue2'] = $band_list[$band_cnt-1]['m_v_fairvalue2']; 
											$mri_data['m_v_fairvalue3'] = $band_list[$band_cnt-1]['m_v_fairvalue3']; 
											$mri_data['m_v_fairvalue4'] = $band_list[$band_cnt-1]['m_v_fairvalue4']; 
											$mri_data['m_v_fairvalue5'] = $band_list[$band_cnt-1]['m_v_fairvalue5']; 
										}
										/*
										if($ticker['tkr_close'] < $mri_data['m_v_fairvalue4']) {
											$fair_tit = '현재가'; 
											$fair_cls = 'St_buying'; 
										}
										else if($mri_data['m_v_fairvalue4'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue3']) {
											$fair_tit = '현재가'; 
											$fair_cls = 'buying'; 
										}
										else if($mri_data['m_v_fairvalue3'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue2']) {
											$fair_tit = '현재가'; 
											$fair_cls = 'propriety'; 
										}
										else if($mri_data['m_v_fairvalue2'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue1']) {
											$fair_tit = '현재가'; 
											$fair_cls = 'sell'; 
										}
										else {
											$fair_tit = '현재가'; 
											$fair_cls = 'St_sell'; 
										}
										*/
										
										$value_percent = $this->common->view_fairrate($ticker['tkr_close'], $mri_data);
										?>
										<?php if($value_percent<0):?>
										<div class="situation under"style="left: -10px;">
										<?php elseif($value_percent>100):?>
										<div class="situation over"style="right: -10px;">
										<?php else:?>
										<div class="situation" style="left: <?=$value_percent?>%;">
										<?php endif;?>
											<span>현재가</span>
										</div>
										<span class="g_action" style="left: 50%;"></span>                                
									</div>
									<div class="adequate">
										<span>적정가</span>										
										<strong><?=$this->common->set_pricepoint($mri_data['m_v_fairvalue3'], '1');?></strong>
									</div>
								</div>
							</div>
						</a>
						<?php else :?>
						<a href="#" data-modal="modal-3" class="btn_free md-trigger box">
							<p class="title"><span>AI적정주가</span></p>
							<div class="con">
								<div class="value_chart">
									<div class="prm_lock"><span><i></i><?=($this->session->userdata('is_login') === TRUE) ? '첫 달 3,000원':'2주 무료보기'?></span></div>
									<div class="line">                  
										<span class="g_action" style="left: 50%;"></span>                                              
									</div>
									<div class="adequate">
										<span>적정가</span>
										<span class="remark">
											<div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div>
										</span>
									</div>
								</div>
							</div>
						</a>
						<?php endif;?>
				<?php else :?>
					<?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
						<a href="/search/fairvalue/<?=$ticker_code?>" class="box">
							<p class="title"><span>AI적정주가</span></p>
							<div class="con">
								<div class="value_chart">                                                    
									<div class="no_data">밸류에이션 데이터부족</div>
									<div class="line">                  
										<span class="g_action" style="left: 50%;"></span>                                              
									</div>
									<div class="adequate">
										<span>적정가</span>
										<span class="remark">
											<div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div>
										</span>
									</div>
								</div>
							</div>
						</a>
					<?php else :?>
						<a href="#" data-modal="modal-3" class="btn_free md-trigger box">
							<p class="title"><span>AI적정주가</span></p>
							<div class="con">
								<div class="value_chart">                                                    
									<div class="prm_lock"><span><i></i><?=($this->session->userdata('is_login') === TRUE) ? '첫 달 3,000원':'2주 무료보기'?></span></div>
									<div class="line">                  
										<span class="g_action" style="left: 50%;"></span>                                              
									</div>
									<div class="adequate">
										<span>적정가</span>
										<span class="remark">
											<div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div>
										</span>
									</div>
								</div>
							</div>
						</a>
					<?php endif;?>
				<?php endif;?>

					<a href="/search/invest/<?=$ticker_code?>" class="box">
						<p class="title"><span>투자지표</span></p>
						<div class="con">
							<div class="data_attainment">
								<ul>
									<li>PER(배)
										<span><?=$this->common->set_pricepoint(number_format($daily_data['dly_pe'], 2), '1')?></span>
									</li>
									<li>PSR(배)
										<span><?=$this->common->set_pricepoint(number_format($daily_data['dly_ps'], 2), '1')?></span>
									</li>
									<li>ROE(%)
										<span><?=$this->common->set_pricepoint(str_replace('%','',$mrt_data['sf1_roe']), '1')?></span>
									</li>
									<li>DY(%)
										<span><?=$this->common->set_pricepoint(str_replace('%','',$mry_data['sf1_divyield']), '1')?></span>
									</li>
								</ul>
							</div>
						</div>
					</a>

					<div class="box">
						<div class="attention_box">
							<p class="title">주가추세</p>
							<div class="con">
								<?php if(is_array($winner)) :?>
								<div class="game_tip">
									<!-- trans up : 강세, trans down : 약세, trans : 중립, 없는 경우 N/A -->
									<ul>
										<li><i class="trans_icn <?=($winner['winner']['win_short']!='') ? $winner['win_trend'][$winner['winner']['win_short']]:''?>"></i><span>단기</span></li>
										<li><i class="trans_icn <?=($winner['winner']['win_medium']!='') ? $winner['win_trend'][$winner['winner']['win_medium']]:''?>"></i><span>중기</span></li>
										<li><i class="trans_icn <?=($winner['winner']['win_long']!='') ? $winner['win_trend'][$winner['winner']['win_long']]:''?>"></i><span>장기</span></li>
									</ul>
								</div>
								<!-- //game_tip -->
								<?php endif;?>

								<?php if(isset($rate_of_rise) && !is_infinite($rate_of_rise)) :?>
								<p class="charm_ranking">최근 1개월 <span class="<?=($rate_of_rise>0)?'increase':'decrease'?>"> <?=($rate_of_rise>0)?'+':''?><?=$rate_of_rise?>%</span></p>
								<?php endif;?>
							</div>
						</div>
					</div>

					<div class="box">
						<p class="title"><a href="/stock/recipe_intro">투자레시피</a></p>
						<div class="con">
							<div class="event_attractiveness">
								<ul>
									<?php $at_count = 0; if($mri_data['m_biz_dividend_score'] >= 16) : ?>
									<li class="att_on"><a href="/stock/recipe/dividend">배당매력주</a></li>
									<?php $at_count++; endif; ?>

									<?php if($mri_data['m_future_score'] >= 16) : ?>
									<li class="att_on"><a href="/stock/recipe/growth">이익성장주</a></li>
									<?php $at_count++; endif; ?>

									<?php if($mri_data['m_biz_moat_score'] >= 16) : ?>
									<li class="att_on"><a href="/stock/recipe/moat">소비자독점주</a></li>
									<?php $at_count++; endif; ?>

									<?php if($at_count==0):?>
									<li class="att">레시피 항목 없음 😕</li>
									<?php endif;?>
								</ul>
							</div>
						</div>
					</div>
					<a href="/search/competitor/<?=$ticker_code?>" class="box">
						<p class="title"><span>경쟁사</span></p>
						<div class="con">
							<div class="competitors">
								<span class="list"><?=$ticker['tkr_industry']?></span>
								<ul>
									<?php $cnt=0; foreach($competitor_data as $tkr=>$comp) :?>
										<?php if($tkr==$ticker_code) continue;?>
										<?php if($cnt>2) break;?>
									<li><span><?=$comp['cp_korname'];?></span></li>
									<?php $cnt++; endforeach;?>
								</ul>
							</div>
						</div>
					</a>
				</div>
				<!-- //outline_box -->
				
				<!--investCharm_area(차트 이하) -->
				<div class="sub_mid outline_investCharm">
					<div id="containersummary1" class="containersummary1"></div>
					<script>
					var params = [<?php foreach($close_chart_key as $val) echo "'".substr($val,5,5)."',";?>]
					SubSearchSummaryLineChart('containersummary1', [<?=$close_chart_value?>], params);
					</script>

					<div class="summary small">
						<!-- div 사이즈는 big, small  -->
						<div class="view_box">
							<p><?=nl2br($ticker['tkr_description'])?></p>
							<ul class="etc">
								<li class="industry"> <span>산업</span><?=$ticker['tkr_industry']?></li>
								<?php
									$tkr_companysite = str_replace('http://','',$ticker['tkr_companysite']);
									$tkr_companysite = str_replace('https://','',$tkr_companysite);
								?>
								<li class="home"></span><span>홈</span><a href="<?=$ticker['tkr_companysite']?>" target="_blank"><?=$tkr_companysite?></a></li>
								<li class="link"><span>sec전자공시</span> <a href="<?=$api_ticker['tkr_secfilings']?>" target="_blank">바로가기</a></li>
							</ul>
						</div>
						<!-- <span class="close show">펼치기 <i></i></span> -->
					</div>

					<div class="table_box">
			            <strong class="unit"><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo '* 기준 : '.date('y.m/d', strtotime($ticker['tkr_lastpricedate']));?></strong>
	                    <div>
							<table cellspacing="0" border="1" class="tableRanking left guide_table">
							    <tbody>
							        <tr>
							            <th scope="col" class="th_guide txt01"><span>시가총액</span></th>
							            <td><?=number_format($daily_data['dly_marketcap'])?><span class="unit">백만달러</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt01"><span>기업가치 EV</span></th>
							            <td><?=number_format($daily_data['dly_ev'])?><span class="unit">백만달러</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt01"><span>주식수</span></th>
										<td>
										<?php if(substr($ticker['tkr_category'], 0, 8)=='Domestic'){?>
										<?php	if($mrq_data['sf1_shareswadil']) echo $mrq_data['sf1_shareswadil']; else echo $mrq_data['sf1_shareswa'];?>
										<?php } else {?>
										<?=$mry_data['sf1_shareswadil']?>
										<?php }?>
										<span class="unit">주</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt01"><span>주당배당금</span></th>
							            <td><?=$mry_data['sf1_dps']?><span class="unit">달러</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt01"><span>배당수익률</span></th>
							            <td><?=str_replace('%','',$mry_data['sf1_divyield'])?><span class="unit">%</span></td>
							        </tr>
							    </tbody>
							</table>
							<!-- 테이블 안내 툴팁 -->
							<div class="th_guide_hide txt01 sum">
							    <div class="guide_box"><ul><li>기본주식수x전일 종가</li></ul></div><!-- 시가총액 -->
							    <div class="guide_box"><ul><li>전일 시가총액+차입금-현금및현금성자산</li></ul></div><!-- 기업가치 EV -->
							    <div class="guide_box"><ul><li>가중평균희석주식수(미발표 기업은 가중평균주식수)</li></ul></div><!-- 주식수 -->
							    <div class="guide_box"><ul><li>최근년도 주당배당금</li></ul></div><!-- 주당배당금 -->
							    <div class="guide_box"><ul><li>최근년도 주당배당금/기말 주가</li></ul></div><!-- 배당수익률 -->                
							</div>
							<!-- //th_guide_hide -->
							<table cellspacing="0" border="1" class="tableRanking right guide_table">
							    <tbody>
							        <tr>
							            <th scope="col" class="th_guide txt02"><span>주가수익배수 PER</span></th>
							            <td><?=number_format($daily_data['dly_pe'], 2)?><span class="unit">배</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt02"><span>주가순자산배수 PBR</span></th>
							            <td><?=$mrt_data['sf1_equity'] > 0 ? number_format($daily_data['dly_pb'], 2).'<span class="unit">배</span>' : 'N/A'?></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt02"><span>자기자본이익률 ROE</span></th>
							            <td><?=($mrt_data['sf1_roe'])?></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt02"><span>주당순이익 EPS</span></th>
							            <td><?=($mrt_data['sf1_epsdil'])?><span class="unit">달러</span></td>
							        </tr>
							        <tr>
							            <th scope="col" class="th_guide txt02"><span>주당순자산 BPS</span></th>
							            <td><?php if(substr($ticker['tkr_category'], 0, 8)=='Domestic') echo $mrq_data['sf1_bvps']; else echo $mry_data['sf1_bvps'];?><span class="unit">달러</span></td>
							        </tr>
							    </tbody>
							</table>

							<!-- 테이블 안내 툴팁 -->
							<div class="th_guide_hide txt02 sum">                            
							    <div class="guide_box"><ul><li>전일 시가총액/최근 4분기 합산 보통주순이익</li></ul></div><!-- 주가수익배수 PER -->
							    <div class="guide_box"><ul><li>전일 시가총액/최근 분기 자본총계</li></ul></div><!-- 주가순자산배수 PBR -->
							    <div class="guide_box"><ul><li>최근 4분기 합산 보통주순이익/최근 4분기 평균자본</li></ul></div><!-- 자기자본이익률 ROE -->
							    <div class="guide_box"><ul><li>보통주순이익/가중평균희석주식수</li></ul></div><!-- 주당순이익 EPS -->
							    <div class="guide_box"><ul><li>자본총계/가중평균주식수</li></ul></div><!-- 주당순자산 BPS -->
							</div>
							<!-- //th_guide_hide -->
		                </div>
					</div>
					<!-- //table_box -->
				</div>
				<!-- //investCharm_area -->

				<?php if($this->session->userdata('is_paid')===FALSE) :?>
					<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
					<!-- 구글 에드센스 투자레시피 상단 -->
					<div style="margin:15px 0 0; text-align: center;">
						<!-- 디스플레이(사각) -->
						<ins class="adsbygoogle"
							style="display:block"
							data-ad-client="ca-pub-6864430327621783"
							data-ad-slot="3945317009"
							data-ad-format="auto"
							data-full-width-responsive="true"></ins>
						<script>
							(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
					</div>
					<!-- //구글 에드센스 -->
					<?php endif;?>
				<?php endif;?>

                <div class="sub_mid financials_chart">
                    <div class="bdr_title">
                        <h4 class="title">재무제표</h4>
                        <div class="tabs_menu">
                            <span class="active">연간</span>
                            <span>분기</span>
		                    <strong class="unit"><?php if(isset($ticker_currency) && $ticker_currency) echo '* 기준 : '.$ticker_currency;?></strong>
						</div>
                        <!-- //tabs_menu -->
                    </div>
                    <div class="tableetabs_wrap">

						<?php 
							// @ 연간 차트 
							$rev_year = explode(',',$mry_chart_key['sf1_revenue']);
							$ass_year = explode(',',$mry_chart_key['sf1_assets']);
							$ncf_year = explode(',',$mry_chart_key['sf1_ncfo']);

							//2020.08.26 변경 if(strtoupper($ticker['tkr_category'])=='ADR' || strtoupper($ticker['tkr_category']) =='ADR PRIMARY' || strtoupper($ticker['tkr_category'])=='CANADIAN' || strtoupper($ticker['tkr_category'])=='CANADIAN PRIMARY') {
							if( strstr(strtoupper($ticker['tkr_category']), 'ADR') || strstr(strtoupper($ticker['tkr_category']), 'CANADIAN') ) {
								$sf1_opinc = 'sf1_opinc_ori';
								$sf1_netinc = 'sf1_netinc_ori';
							}
							else {
								$sf1_opinc = 'sf1_opinc';
								$sf1_netinc = 'sf1_netinc';
							}
						?>

                        <!-- 재무제표 > 연간 -->
                        <div class="tabletabs_content tabs_01">
                            <div class="chart_box">
				                <div id="summfinancials1_1" class="containerfinancials1"></div>
								<script>
								var tooltip = 'na';
								var chart_title = [<?php foreach($rev_year as $val) echo "'".substr($val,0,4)."',";?>];
								var chart_value = [
									{'name': '매출액', 'data': [<?=$mry_chart_value['sf1_revenue']?>]},
									{'name': '영업이익', 'data': [<?=$mry_chart_value[$sf1_opinc]?>]},
									{'name': '순이익', 'data': [<?=$mry_chart_value[$sf1_netinc]?>]}
								];
								SubSearchSummaryColumnChart('summfinancials1_1', chart_value, chart_title, tooltip);
								</script>
                                <ul class="chart_legend">
                                    <li><span><i></i>매출액</span></li>
                                    <li><span><i></i>영업이익</span></li>
                                    <li><span><i></i>순이익</span></li>
                                </ul>
                            </div>
                            <div class="chart_box">
                                <div id="summfinancials1_2" class="containerfinancials1"></div>
								<script>
								var chart_title = [<?php foreach($ass_year as $val) echo "'".substr($val,0,4)."',";?>];
								var chart_value = [
									{'name': '자산총계', 'data': [<?=$mry_chart_value['sf1_assets']?>]},
									{'name': '부채총계', 'data': [<?=$mry_chart_value['sf1_liabilities']?>]},
									{'name': '자본총계', 'data': [<?=$mry_chart_value['sf1_equity']?>]}
								];
								SubSearchSummaryColumnChart('summfinancials1_2', chart_value, chart_title, tooltip);
								</script>
								<ul class="chart_legend">
									<li><span><i></i>자산총계</span></li>
									<li><span><i></i>부채총계</span></li>
									<li><span><i></i>자본총계</span></li>
								</ul>
                            </div>
                            <div class="chart_box">
                                <div id="summfinancials1_3" class="containerfinancials1"></div>
								<script>
								var chart_title = [<?php foreach($ncf_year as $val) echo "'".substr($val,0,4)."',";?>];
								var chart_value = [
									{'name': '영업활동', 'data': [<?=$mry_chart_value['sf1_ncfo']?>]},
									{'name': '투자활동', 'data': [<?=$mry_chart_value['sf1_ncfi']?>]},
									{'name': '재무활동', 'data': [<?=$mry_chart_value['sf1_ncff']?>]}
								];
								SubSearchSummaryColumnChart('summfinancials1_3', chart_value, chart_title, tooltip);
								</script>
                                <ul class="chart_legend">
									<li><span><i></i>영업활동</span></li>
									<li><span><i></i>투자활동</span></li>
									<li><span><i></i>재무활동</span></li>
                                </ul>
                            </div>
                        </div>
                        <!-- //tabletabs_content -->
						<?php 
							// @ 분기 차트 
							$rev_qrt = explode(',',$mrq_chart_key['sf1_revenue']);
							$ass_qrt = explode(',',$mrq_chart_key['sf1_assets']);
							$ncf_qrt = explode(',',$mrq_chart_key['sf1_ncfo']);
						?>
                        <!-- 재무제표 > 분기 -->
                        <div class="tabletabs_content tabs_02">
                            <div class="chart_box">
                                <div id="summfinancials2_1" class="containerfinancials1"></div>
								<script>
								var chart_title = ['<?=substr($rev_qrt[0], 0, 7);?>', '<?=substr($rev_qrt[1], 0, 7);?>', '<?=substr($rev_qrt[2], 0, 7);?>'];
								var chart_value = [
									{'name': '매출액', 'data': [<?=$mrq_chart_value['sf1_revenue']?>]},
									{'name': '영업이익', 'data': [<?=$mrq_chart_value[$sf1_opinc]?>]},
									{'name': '순이익', 'data': [<?=$mrq_chart_value[$sf1_netinc]?>]}
								];
								SubSearchSummaryColumnChart('summfinancials2_1', chart_value, chart_title, tooltip);</script>
								<!-- 종목검사 재무제표 class = containerfinancials1  -->
								<ul class="chart_legend">
									<li><span><i></i>매출액</span></li>
									<li><span><i></i>영업이익</span></li>
									<li><span><i></i>순이익</span></li>
								</ul>
                            </div>
                            <div class="chart_box">
                                <div id="summfinancials2_2" class="containerfinancials1"></div>
								<script>
								var chart_title = ['<?=substr($ass_qrt[0], 0, 7);?>', '<?=substr($ass_qrt[1], 0, 7);?>', '<?=substr($ass_qrt[2], 0, 7);?>'];
								var chart_value = [
									{'name': '자산총계', 'data': [<?=$mrq_chart_value['sf1_assets']?>]},
									{'name': '부채총계', 'data': [<?=$mrq_chart_value['sf1_liabilities']?>]},
									{'name': '자본총계', 'data': [<?=$mrq_chart_value['sf1_equity']?>]}
								];
								SubSearchSummaryColumnChart('summfinancials2_2', chart_value, chart_title, tooltip);</script>
								<!-- 종목검사 재무제표 class = containerfinancials1  -->
								<ul class="chart_legend">
									<li><span><i></i>자산총계</span></li>
									<li><span><i></i>부채총계</span></li>
									<li><span><i></i>자본총계</span></li>
								</ul>
                            </div>
                            <div class="chart_box">
                                <div id="summfinancials2_3" class="containerfinancials1"></div>
								<script>
								var chart_title = ['<?=substr($ncf_qrt[0], 0, 7);?>', '<?=substr($ncf_qrt[1], 0, 7);?>', '<?=substr($ncf_qrt[2], 0, 7);?>'];
								var chart_value = [
									{'name': '영업활동', 'data': [<?=$mrq_chart_value['sf1_ncfo']?>]},
									{'name': '투자활동', 'data': [<?=$mrq_chart_value['sf1_ncfi']?>]},
									{'name': '재무활동', 'data': [<?=$mrq_chart_value['sf1_ncff']?>]}
								];
								SubSearchSummaryColumnChart('summfinancials2_3', chart_value, chart_title, tooltip);</script>
								<!-- 종목검사 재무제표 class = containerfinancials1  -->
								<ul class="chart_legend">
									<li><span><i></i>영업활동</span></li>
									<li><span><i></i>투자활동</span></li>
									<li><span><i></i>재무활동</span></li>
								</ul>
                            </div>
                        </div>

                    </div>
                    <!-- //tabletabs_wrap -->
                </div>
	        </div>
			<!-- //sub_mid -->
<?php }else{?>
		<!-- 주요 콘텐츠 -->
		<div class="sub_mid nondata">
			<p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><?php if($part_page == ''){?><a href="/search/summary/<?=$pri_ticker?>?pn=<?=$part_name;?>&pg=<?=$part_page;?>"><?php }?><?=$pri_ticker?><?php if($part_page == ''){?></a><?php }?></strong> 종목에서 확인할 수 있습니다.</p>
		</div>
		<!-- //sub_mid nondata -->
<?php }?>