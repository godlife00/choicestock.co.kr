<?php if($is_open === true):
if($type == 'earnings') {
	$open_list = $list['recent_report'];
}
else {
	$open_list = $list;
}
?>
<script>
	$(document).ready(function(){
	<?php for($i=0; $i<sizeof($open_list); $i++) :?>
		  $('#in_price<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		  $('#in_diff<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
	<?php endfor;?>
	});

</script>			
<?php endif;?>
								<?php if($type == 'earnings') :?>
                                    <?php $in_cnt=0; foreach($list['recent_report'] as $key => $val) : ?>
										<div class="area">
											<ul class="list">
												<li class="title"><a href="/<?=SK?>_search/summary/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?></a></li>
												<li class="num">
													<span><?=($val['tkr_sf1_currency']=='USD')?number_format($val['sf1_netinc']/1000000):number_format($val['sf1_netinccmnusd']/1000000)?><span class="hit">백만달러</span></span>                                                                
												</li>
												<li class="upAnddown">                                
													<span><?=$this->common->set_pricepoint($list['recent_report_rates'][$val['tkr_ticker']], '2')?></span>
												</li>
											</ul>
											<ul class="analysis_score">
												<?php
												$is_wowinfo = false;
												if($is_open === true) {
													$wval = $this->common->get_wowtv_info($val['tkr_ticker']);
													if(is_array($wval) && sizeof($wval)) {
														$is_wowinfo = true;
													}
												}
												?>

					                            <?php if($is_wowinfo === true) :?>
												<li class="num">
													<span id='in_price<?=$in_cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
													<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='in_diff<?=$in_cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
												</li>
												<?php else :?>
												<li class="num">
													<span><?=$this->common->set_pricepoint(number_format($val['tkr_close'], 2), '1')?></span>
													<span class="<?=($val['tkr_rate'] >= 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
												</li>
												<?php endif;?>
											</ul>
											<!-- //analysis_score -->
											<div class="trans_list">
												<ul class="">
													<li class="trans">
													<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
													<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
													<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
													</li>
													<!-- //trans -->
												</ul>
												<span class="update"><?=date('m/d', strtotime($val['sf1_lastupdated']))?></span>
											</div>
										</div>
										<!-- //area -->										
                                    <?php $in_cnt++; endforeach;?>
								<?php elseif($type == 'interest') :?>
									<?php $in_cnt=0; foreach($list as $val) :?>
									<div class="area">
										<ul class="list">
											<li class="title">
												<a href="/<?=SK?>_search/summary/<?=$val['m_ticker']?>"><?=$val['ticker']['tkr_name']?></a>
												<span class="sum"><?=$val['m_ticker']?></span>
											</li>
											<li class="attention_box">
												<p class="attention on"><i></i><?=number_format($val['cnt'])?></p>
											</li>
											<li class="attention_box">
												<span class="attention_score"><?=$val['m_biz_total_score']?>점</span>
											</li>
										</ul>
										<ul class="analysis_score">
											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['m_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>
											<?php if($is_wowinfo === true) :?>
											<li class="num">
												<span id='in_price<?=$in_cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
												<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='in_diff<?=$in_cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
											</li>
											<?php else :?>
											<li class="num">
												<span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1');?></span>
												<span class="<?=$val['ticker']['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
											</li>
											<?php endif;?>
										</ul>
										<!-- //analysis_score -->
										<div class="trans_list">
											<ul class="">
												<li class="trans">
												<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
												<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
												<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
												</li>
												<!-- //trans -->
											</ul>
										</div>
									</div>
									<!-- //area -->
									<?php $in_cnt++; endforeach;?>
								<?php elseif($type == 'soaring') :?>
								<div class="tabsArea">
									<ul class="tabs recipe_tabs">
										<li class="active" rel="tab1"><span>어제</span></li>
										<li rel="tab2"><span>1개월간</span></li>
										<li rel="tab3"><span>3개월간</span></li>
									</ul>
									<div class="tab_container recipejump_tabs">
										<!-- 어제 -->
										<div id="tab1" class="tab_content">
											<p class="update_info">업데이트 <?=$list['update']?>, <?=$list['subtitle'];?></p>
											<div class="recipe_area">
												<?php foreach($list['one'] as $val) :?>
												<div class="area">
													<ul class="list">
														<li class="title">
															<a href="/<?=SK?>_search/summary/<?=$val['m_ticker']?>"><?=$val['ticker']['tkr_name']?></a>
															<span class="sum"><?=$val['m_ticker']?></span>
														</li>
														<li class="num">
															<span class="<?=$val['ticker']['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?><span class="hit txt_r">어제</span></span>
															<!-- increase 증가, decrease 감소 -->
														</li>
														<li class="trans_box">
															<!-- trans up : 강세, trans down : 약세, trans : 중립 -->
															<i class="trans_icn <?=($val['winner']['win_short']!='') ? $list['win_trend'][$val['winner']['win_short']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_medium']!='') ? $list['win_trend'][$val['winner']['win_medium']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_long']!='') ? $list['win_trend'][$val['winner']['win_long']]:''?>"></i>
														</li>
													</ul>
													<ul class="analysis_score">
														<li class="num">
															<span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
															<span class="<?=$val['ticker']['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
														</li>
													</ul>
													<!-- //analysis_score -->
													<div class="trans_list">
														<ul class="">
															<li class="trans">
															<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
															<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
															<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
															</li>
															<!-- //trans -->
														</ul>
													</div>
												</div>
												<!-- //area -->
												<?php endforeach;?>
											</div>
										</div>
										<!-- 1개월간 -->
										<div id="tab2" class="tab_content">
											<p class="update_info">업데이트 <?=$list['update']?>, <?=$list['subtitle'];?></p>
											<div class="recipe_area">
												<?php foreach($list['twenty'] as $val) :?>
												<div class="area">
													<ul class="list">
														<li class="title">
															<a href="/<?=SK?>_search/summary/<?=$val['m_ticker']?>"><?=$val['ticker']['tkr_name']?></a>
															<span class="sum"><?=$val['m_ticker']?></span>
														</li>
														<li class="num">

															<span class="<?=$val['diff'] > 0 ? 'increase' : 'decrease'?>"><?=($val['diff'] > 0) ? '+':''?><?=$val['diff']?><b>%</b><span class="hit txt_r">1개월간</span></span>
															<!-- increase 증가, decrease 감소 -->
														</li>
														<li class="trans_box">
															<!-- trans up : 강세, trans down : 약세, trans : 중립 -->
															<i class="trans_icn <?=($val['winner']['win_short']!='') ? $list['win_trend'][$val['winner']['win_short']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_medium']!='') ? $list['win_trend'][$val['winner']['win_medium']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_long']!='') ? $list['win_trend'][$val['winner']['win_long']]:''?>"></i>
														</li>
													</ul>
													<ul class="analysis_score">
														<li class="num">
															<span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
															<span class="<?=$val['ticker']['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
														</li>
													</ul>
													<!-- //analysis_score -->
													<div class="trans_list">
														<ul class="">
															<li class="trans">
															<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
															<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
															<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
															</li>
															<!-- //trans -->
														</ul>
													</div>
												</div>
												<!-- //area -->
												<?php endforeach;?>
											</div>
										</div>
										<!-- 3개월간 -->
										<div id="tab3" class="tab_content">
											<p class="update_info">업데이트 <?=$list['update']?>, <?=$list['subtitle'];?></p>
											<div class="recipe_area">
												<?php foreach($list['sixty'] as $val) :?>
												<div class="area">
													<ul class="list">
														<li class="title">
															<a href="/<?=SK?>_search/summary/<?=$val['m_ticker']?>"><?=$val['ticker']['tkr_name']?></a>
															<span class="sum"><?=$val['m_ticker']?></span>
														</li>
														<li class="num">

															<span class="<?=$val['diff'] > 0 ? 'increase' : 'decrease'?>"><?=($val['diff'] > 0) ? '+':''?><?=$val['diff']?><b>%</b><span class="hit txt_r">3개월간</span></span>
															<!-- increase 증가, decrease 감소 -->
														</li>
														<li class="trans_box">
															<!-- trans up : 강세, trans down : 약세, trans : 중립 -->
															<i class="trans_icn <?=($val['winner']['win_short']!='') ? $list['win_trend'][$val['winner']['win_short']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_medium']!='') ? $list['win_trend'][$val['winner']['win_medium']]:''?>"></i>
															<i class="trans_icn <?=($val['winner']['win_long']!='') ? $list['win_trend'][$val['winner']['win_long']]:''?>"></i>
														</li>
													</ul>
													<ul class="analysis_score">
														<li class="num">
															<span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
															<span class="<?=$val['ticker']['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
														</li>
													</ul>
													<!-- //analysis_score -->
													<div class="trans_list">
														<ul class="">
															<li class="trans">
															<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
															<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
															<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
															</li>
															<!-- //trans -->
														</ul>
													</div>
												</div>
												<!-- //area -->
												<?php endforeach;?>
											</div>
										</div>
									</div>
								</div>
								<?php elseif($type == 'sale') :?>
									<?php $in_cnt=0; foreach($list as $val) :?>
									<div class="area">
										<ul class="list">
											<li class="title">
											<?php if($this->session->userdata('is_paid')===TRUE) :?>
												<a href="/<?=SK?>_search/summary/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?></a>
												<span class="sum"><?=$val['tkr_ticker']?></span>
											<?php else :?>										
												<a href="javascript:fnSinChung();"><?=iconv_substr($val['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a>
												<span class="sum">
													<span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span>
												</span>
											<?php endif;?>
											</li>
											<li class="sale_deal">
												<span><i></i><?=$val['status']?></span>
											</li>
											<li class="attention_box">
												<span class="attention_score"><?=$val['m_biz_total_score']?>점</span>
											</li>
										</ul>
										<ul class="analysis_score">
											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['tkr_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>
											<?php if($is_wowinfo === true) :?>
											<li class="num">
												<span id='in_price<?=$in_cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
												<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='in_diff<?=$in_cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
											</li>
											<?php else :?>
											<li class="num">
												<span><?=$this->common->set_pricepoint(number_format($val['tkr_close'], 2), '1');?></span>
												<span class="<?=$val['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
											</li>
											<?php endif;?>
										</ul>
										<!-- //analysis_score -->
										<div class="trans_list">
											<ul class="">
												<li class="trans">
												<?=($val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
												<?=($val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
												<?=($val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
												</li>
												<!-- //trans -->
											</ul>
										</div>
									</div>
									<!-- //area -->
									<?php $in_cnt++; endforeach;?>
                                <?php else :?>
                                    <?php $in_cnt=0; foreach($list as $key => $val) : ?>
									<?php 
										$stars = 0;
										$price = 0;
										if($type == 'dividend') {
											$stars = $val['m_biz_dividend_stars'];
											$price = number_format($val['sf1_divyield']*100, 2);
											$sign = '<b>%</b>';

										} else if($type == 'growth') {
											$stars = $val['m_future_stars'];
											$price = $val['m_future_profit'];
											if(is_numeric($price)) {
												$sign = '<b>%</b>';
											}
											else {
												$sign = '';
											}
										} else if($type == 'moat') {
											$stars = $val['m_biz_moat_stars'];
											$price = number_format($val['sf1_opmargin'], 2);
											$sign = '<b>%</b>';

										} else if($type == 'total_score') {
											$stars = $val['m_biz_total_score'] / 20;
											$price = number_format($val['m_g_roe'], 2);
											$sign = '<b>%</b>';
										}
									?>
									<div class="area">
										<ul class="list">
											<?php if($this->session->userdata('is_paid')===FALSE && $type == 'dividend') :?>
												<li class="title">
													<a href="javascript:fnSinChung();">
														<?=iconv_substr($val['m_korname'], 0, 1, 'utf-8')?><span class="remark">
															<div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div>
														</span>
													</a>    
													<span class="sum">
														<span class="remark">
															<div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div>
														</span>
													</span>
												</li>
											<?php else :?>										
												<li class="title"><a href="/<?=SK?>_search/summary/<?=$val['m_ticker']?>"><?=$val['m_korname']?></a></li>
											<?php endif;?>
											<li class="num">
												<span><?=$price?><b>%</b></span>
											</li>
											<li class="star_area">                                                                
												<div class="starRev">
												<?php
													for($i = 1 ; $i <= 5 ; $i++) { 
														if($stars >= $i) {
															echo '<span class="starR on">별1</span>';
														}
														else {
															if($i-$stars <= 0.5) {
																echo '<span class="starR on half">별1</span>';
															}
															else {
																echo '<span class="starR">별1</span>';
															}
														}
													}
												?>
												</div>
											</li>
										</ul>
										<ul class="analysis_score">
											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['m_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>
											<?php if($is_wowinfo === true) :?>
											<li class="num">
												<span id='in_price<?=$in_cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
												<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='in_diff<?=$in_cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
											</li>
											<?php else :?>
											<li class="num">
												<span><?=$this->common->set_pricepoint(number_format($val['tkr_close'], 2), '1')?></span>
												<span class="<?=$val['tkr_diff'] > 0 ? 'in' : 'de'?>crease"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
											</li>
											<?php endif;?>
										</ul>
										<!-- //analysis_score -->
										<div class="trans_list">
											<ul class="">
												<li class="trans">
												<?=($type != 'dividend' && $val['m_biz_dividend_score'] >= 16) ? '<span class="allo">배당주</span>':''?>
												<?=($type != 'growth' && $val['m_future_score'] >= 16) ? '<span class="gro">성장주</span>':''?>
												<?=($type != 'moat' && $val['m_biz_moat_score'] >= 16) ? '<span class="mono">독점주</span>':''?>
												</li>
												<!-- //trans -->
											</ul>                            
										</div>
									</div>
									<!-- //area -->
                                    <?php $in_cnt++; endforeach; ?>
                                <?php endif;?>
