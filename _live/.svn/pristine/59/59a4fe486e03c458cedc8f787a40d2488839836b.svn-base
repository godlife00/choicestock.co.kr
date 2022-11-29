				<?=$ticker_header?>

<?php if($this->session->userdata('is_paid')===FALSE && $open_ticker===FALSE) :?>
                <div class="prm_div weeks_free">
                    <div class="box">
                        <div class="left">
                            <p class="title"><i></i>초이스스탁US 프리미엄</p>
                            <p class="txt">모든 서비스를 제한없이 이용하실 수 있습니다.</p>
                        </div>
                        <div class="right">
                            <p>
                                <a href="javascript:fnSinChung();" class="btn_free">초이스스탁US 신청하기<i></i></a>
                            </p>
                            <p><a href="/<?=HN?>_main/service" class="go_link">[서비스 안내]</a></p>
                        </div>
                    </div>
                </div>
<?php else :?>

<?php if($sec_ticker=='' && $pri_ticker=='') {?>
			<?php if($fairvalue_rate >= -5) :?>
                <div class="adequate_stock">
                    <div class="box">
                        <p class="title"><a href="javascript:;">AI적정주가</a></p>
                        <div class="con">
                            <div class="value_chart">
                                <div class="line">
									<?php
									foreach($band_list as $key=>$sl) :
										if($sl['m_v_fairvalue1'] == '0.00') $band_list[$key]['m_v_fairvalue1'] = 'null';
										if($sl['m_v_fairvalue2'] == '0.00') $band_list[$key]['m_v_fairvalue2'] = 'null';
										if($sl['m_v_fairvalue3'] == '0.00') $band_list[$key]['m_v_fairvalue3'] = 'null';
										if($sl['m_v_fairvalue4'] == '0.00') $band_list[$key]['m_v_fairvalue4'] = 'null';
										if($sl['m_v_fairvalue5'] == '0.00') $band_list[$key]['m_v_fairvalue5'] = 'null';

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
									+ 적극매수 : 현재가 < 저평가
									+ 매수 : 저평가 <= 현재가 < 적정가
									+ 보유 : 적정가 <= 현재가 < 고평가
									+ 비중축소 : 고평가 <= 현재가 < 매우고평가
									+ 매도 : 매우고평가 <= 현재가
									
									$domain5 = '';
									$domain4 = '';
									$domain3 = '';
									$domain2 = '';
									$domain1 = '';
									$ticker_close5 = '';
									$ticker_close4 = '';
									$ticker_close3 = '';
									$ticker_close2 = '';
									$ticker_close1 = '';
									if($ticker['tkr_close'] < $mri_data['m_v_fairvalue4']) {
										$domain5 = ' active'; 
										$ticker_close5 = '<span class="sync_price" id="last_price_fv">'.$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1').'</span>';
									}
									else if($mri_data['m_v_fairvalue4'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue3']) {
										$domain4 = ' active'; 
										$ticker_close4 = '<span class="sync_price" id="last_price_fv">'.$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1').'</span>';
									}
									else if($mri_data['m_v_fairvalue3'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue2']) {
										$domain3 = ' active'; 
										$ticker_close3 = '<span class="sync_price" id="last_price_fv">'.$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1').'</span>';
									}
									else if($mri_data['m_v_fairvalue2'] <= $ticker['tkr_close'] && $ticker['tkr_close'] < $mri_data['m_v_fairvalue1']) {
										$domain2 = ' active'; 
										$ticker_close2 = '<span class="sync_price" id="last_price_fv">'.$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1').'</span>';
									}
									else {
										$domain1 = ' active'; 
										$ticker_close1 = '<span class="sync_price" id="last_price_fv">'.$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1').'</span>';
									}
									*/

									$value_percent = $this->common->view_fairrate($ticker['tkr_close'], $mri_data);
									?>
									<?php if($value_percent<0):?>
                                    <div class="situation under"style="left: -10px;">
									<?php elseif($value_percent>100):?>
                                    <div class="situation over"style="right: -10px;">
									<?php else:?>
                                    <div class="situation"style="left: <?=$value_percent?>%;">
									<?php endif;?>
                                        <span>현재가</span>
                                        <span class="sync_price"><?=$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1')?></span>
                                    </div>
                                    <span class="g_action g_buying"></span><!-- 매우저평가 -->
                                    <span class="g_action" style="left: 50%;"></span><!-- 적정가 -->
                                    <span class="g_action g_sell"></span><!-- 매우고평가 -->                                    
                                </div>
                                <div class="adequate">									
                                    <strong><span>적정가</span><?=$this->common->set_pricepoint($mri_data['m_v_fairvalue3'], '1');?></strong>
                                </div>
                            </div>
                            <!-- //adequate_price -->
                        </div>

                        <div class="evaluation_data">
                            <span class="txt_guide"></span>
                            <table cellspacing="0" border="1" class="tableRanking evaluation_table">
                                <colgroup>
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
								<tr>
									<th class="title">
										<span>저평가</span>
									</th>
									<td>
										<span>&lt; <?=$this->common->set_pricepoint($mri_data['m_v_fairvalue4'], '1');?></span>
									</td>
								</tr>
								<tr>
									<th class="title">
										<span>매우저평가</span>
									</th>
									<td>
										<span>&lt; <?=$this->common->set_pricepoint($mri_data['m_v_fairvalue5'], '1');?></span>
									</td>
								</tr>
                                </tbody>
                            </table>

                            <table cellspacing="0" border="1" class="tableRanking evaluation_table">
                                <colgroup>
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
								<tr>
									<th class="title">
										<span>고평가</span>
									</th>
									<td>
										<span>&gt; <?=$this->common->set_pricepoint($mri_data['m_v_fairvalue2'], '1');?></span>
									</td>
								</tr>
								<tr>
									<th class="title">
										<span>매우고평가</span>
									</th>
									<td>
										<span>&gt; <?=$this->common->set_pricepoint($mri_data['m_v_fairvalue1'], '1');?></span>
									</td>
								</tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- //adequate_stock -->
			<?php else :?>
                <div class="adequate_stock">
                    <div class="box">
                        <p class="title"><a href="javascript:;">AI적정주가</a></p>
                        <div class="con">
                            <div class="adequate_price">
                                <div class="nodata_area">
                                    <div class="no_data">밸류에이션 데이터부족</div>                                    

                                    <div class="line">                                        
                                        <div class="domain">                                            
                                            <div class="price_line">                                                                                        
                                                <span>적극매수</span>
                                            </div>                                        
                                        </div>                                    
                                        <div class="domain">                                            
                                            <div class="price_line">                                                                                        
                                                <span>매수</span>
                                            </div>                                        
                                        </div>                                    
                                        <div class="domain">                                            
                                            <div class="price_line">                                                                                        
                                                <span>보유</span>
                                                <span class="g_action" style="left: 50%;"></span>
                                            </div>                                                                                
                                        </div>                                    
                                        <div class="domain">                                            
                                            <div class="price_line">
                                                <span>비중축소</span>
                                            </div>                                        
                                        </div>     
                                        <div class="domain">                                            
                                            <div class="price_line">
                                                <span>매도</span>
                                            </div>                                        
                                        </div>                                    
                                    </div> 
                                    <div class="adequate">                                    
                                        <span class="remark">
                                            <div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div>
                                        </span>
                                    </div>

                                </div>
                                <!-- //nodata_area -->
                            </div>
                            <!-- //adequate_price -->
                        </div>
                    </div>
                </div>
                <!-- //adequate_stock -->
			<?php endif;?>
                <div class="bandchart_more">
                    <p><i></i>‘AI적정주가 밴드차트’는 적정주가 추세를 시계열로 제공하여, 매매전략을 세우는데 도움을 드리는 서비스입니다.</p>
                    <a href="#more" class="more">자세히</a>
                </div>
                <!-- //bandchart_more -->
                <div class="eventsum_area">
					<div class="chart_bg">
                        <div id="sum_topchart_band" class="chart_layout"></div>
						<script>
						<?php if($fairvalue_rate >= -5) :?>
						var dates = [<?php foreach($band_list as $sl) echo "'".date('y.m/d', strtotime($sl['m_sep_date']))."',";?>];
						var close = [<?php foreach($band_list as $sl) echo $sl['sep_close'].",";?>];
						var fairvalue5 = [<?php foreach($band_list as $sl) echo $sl['m_v_fairvalue5'].",";?>];
						var fairvalue4 = [<?php foreach($band_list as $sl) echo '['.$sl['m_v_fairvalue4'].",".$sl['m_v_fairvalue2']."],";?>];
						var fairvalue3 = [<?php foreach($band_list as $sl) echo $sl['m_v_fairvalue3'].",";?>];
						var fairvalue2 = [<?php foreach($band_list as $sl) echo $sl['m_v_fairvalue2'].",";?>];
						var fairvalue1 = [<?php foreach($band_list as $sl) echo $sl['m_v_fairvalue1'].",";?>];
						var is_null = false;
						<?php else :?>
						var min = '';
						var max = '';
						var dates = [];
						var close = [];
						var fairvalue5 = [];
						var fairvalue4 = [];
						var fairvalue3 = [];
						var fairvalue2 = [];
						var fairvalue1 = [];
						var is_null = true;
						<?php endif;?>
					$(document).ready(function() {
						FairValueBandChart('sum_topchart_band', dates, close, fairvalue5, fairvalue4, fairvalue3, fairvalue2, fairvalue1, is_null);
					});
                        </script>
                    </div>

                    <div class="tableData">
                        <table cellspacing="0" border="1" class="tableRanking sum_table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>주가</th>
                                    <th>적정가</th>
                                    <th>저평가</th>
                                    <th>고평가</th>
                                </tr>
                            </thead>
                            <tbody>
								<?php $cnt=0; foreach(array_reverse($band_list) as $val):?>
								<?php
									if($cnt>0) {
										if($pre_month == substr($val['m_sep_date'], 0, 6)) continue;
									}	
									$pre_month = substr($val['m_sep_date'], 0, 6);
								?>
                                <tr>
                                    <td class="name"><?=date('y.m/d', strtotime($val['m_sep_date']))?></td>
                                    <td><b><?=$val['sep_close']?></b></td>
                                    <td><?=($val['m_v_fairvalue3']==0) ? 'N/A':$val['m_v_fairvalue3']?></td>
                                    <td><?=($val['m_v_fairvalue4']==0) ? 'N/A':$val['m_v_fairvalue4']?></td>
                                    <td><?=($val['m_v_fairvalue2']==0) ? 'N/A':$val['m_v_fairvalue2']?></td>
                                </tr>
								<?php $cnt++; endforeach;?>
                            </tbody>
                        </table>

                    </div>
                    <!-- //tableData -->
                </div>
                <!-- //eventsum_area -->
				<div class="bandchart_sume" id="more">
                    <p class="txt"><i></i>‘AI적정주가 밴드차트’는 적정주가 추세를 시계열로 제공하여, 매매전략을 세우는데 도움을 드리는 서비스입니다. </p>
                    <p class="txt">‘적정주가(intrinsic value)’란 기업의 미래 창출 이익 또는 현금 흐름을 현재 기준으로 평가한 가격입니다.</p>

                    <div class="box">
                        <p class="title">초이스스탁US의 AI적정주가 밴드차트는</p>
                        <ul>
                            <li><i>1.</i>초보자도 알기 쉽게 주가의 매수/보유/매도 상태를 명확히 표시합니다.</li>
                            <li><i>2.</i>어느 지점이 저평가/고평가 영역인지 알기 쉽게 표시합니다.</li>
                            <li><i>3.</i>밴드차트의 주가 상승 비율을 로그스케일(Logarithmic Scale)로 표시하여 차트의 왜곡(괴리율)을 없앴습니다.</li>
                            <li><i>4.</i>종목진단점수가 낮은 기업은 리스크가 발생시 주가 급락 가능성이 높아, 투자자 보호를 위해 적정주가를 제공하지 않습니다.</li>
                            <li><i>5.</i>적정주가는 데이터히어로가 빅 데이터 분석과 알고리즘 기술을 활용해 자체 개발한 로직에 따라 계산합니다.<br>
                                증권사의 목표가 컨센서스(평균)와 달리, 국내에서 유일하게 미국기업의 적정주가를 직접 계산해 제공하고 있습니다.</li>
                        </ul>
                    </div>
                    <p class="guide">초이스스탁US에서 제공하는 종목진단 점수가 우량 기업이고, 저평가 상태에 있는 종목에 투자하는 것이 좋습니다.</p>                    
                    <a href="/<?=HN?>_stock/vod_view/93" class="youtube_link"><i></i>매매 타이밍을 쉽게 잡을 수 있는 적정주가 매매전략</a>
                </div>
                <!-- //bandchart_sume -->
            </div>
            <!-- //sub_mid -->
<?php }else{?>
		<!-- 주요 콘텐츠 -->
		<div class="sub_mid nondata">
			<p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><?php if($part_page == ''){?><a href="/<?=HN?>_search/summary/<?=$pri_ticker?>?pn=<?=$part_name;?>&pg=<?=$part_page;?>"><?php }?><?=$pri_ticker?><?php if($part_page == ''){?></a><?php }?></strong> 종목에서 확인할 수 있습니다.</p>
		</div>
		<!-- //sub_mid nondata -->
<?php }?>

<?php endif;?>