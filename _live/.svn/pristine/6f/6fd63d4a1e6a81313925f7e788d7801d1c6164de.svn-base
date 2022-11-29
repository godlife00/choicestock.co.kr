            <div class="sub_mid latest_results">
                <div class="tabsArea">
                    <ul class="tabs tabs_two">
                        <li class="active" rel="tab1">관심종목</li>
                        <li rel="tab2">인기종목</li>
                    </ul>
                    <div class="tab_container">
                        <!-- 관심종목 -->
                        <div id="tab1" class="tab_content">
                            <div class="one_step no_bg">
                                <span class="txt">나의 관심종목은 얼마나 매력적일까?</span>
                                <a href="/<?=WT?>_main/onestop" class="more"><span>원스톱 진단</span><img src="/img/more_yel.png" alt="더보기"></a>
	                            <p class="guide_txt">※ 종목은 (주)데이터히어로의 빅데이터 분석과 알고리즘에 의해 제공됩니다.</p>
                            </div>
                            <!-- //one_step -->
                            
                            <?php if($this->session->userdata('is_login')===TRUE) :?>

								<?php if(is_array($tab_stock_data) && sizeof($tab_stock_data)>0) :?>
<?php if($is_open === true):?>
<script type="text/javascript">
<!--
<?php $i=0; foreach($tab_stock_data as $val) :?>
	var mi_pre<?=$i?> = <?=$val['ticker']['tkr_close']?>;
<?php $mi_tickers .= $val['ticker']['tkr_ticker'].'|';?>
<?php $i++; endforeach;?>
function ajax_wtsise_myitem() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$mi_tickers;?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
		<?php for($i=0; $i<sizeof($tab_stock_data); $i++) :?>
			if(data[<?=$i?>]['status'] == '0' && data[<?=$i?>]['last_price'] != mi_pre<?=$i?>) {
				var updown = 'decrease';
				var sign = '';

				$('#mi_price<?=$i?>').html(formatNumber(data[<?=$i?>]['last_price']).replace('.', '.<b>')+'</b>');
				$('#mi_price<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
		
				if(data[<?=$i?>]['diff_price']>0) { 
					updown = 'increase';
					sign = '+';
				}
				$('#mi_diff<?=$i?>').attr("class", updown);
				$('#mi_diff<?=$i?>').html(sign+data[<?=$i?>]['diff_rate']+'<b>%</b>');
				//$('#mi_diff<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);

				mi_pre<?=$i?> = data[<?=$i?>]['last_price'];
			}
		<?php endfor;?>
  		}
	});
};
 
var timer = window.setInterval(function () { ajax_wtsise_myitem(); }, 5000);
//-->
</script> 
<?php endif;?>
								<table cellspacing="0" border="0" class="tableRanking type_2Line">
								    <colgroup>
								        <col width="100px">
								        <col width="">
								        <col width="">
								        <col width="">
								    </colgroup>
								    <tbody>
								    <?php 
										$cnt=0;
								        foreach($tab_stock_data as $val) : 
								            $class = 'decrease';
								            if($val['ticker']['tkr_rate'] >= 0) {
								                $class = 'increase';
								            }
								    ?>
								        <tr>
								            <td class="title"><a href="/<?=WT?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>

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
											<td class="num">
												<span id='mi_price<?=$cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
												<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='mi_diff<?=$cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
											</td>
											<?php else :?>  
								            <td class="num">
								                <span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1');?></span>
								                <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
								            </td>
											<?php endif;?>

											<?php if($cnt==0) :?>
											<td class="score"><span><?=$val['m_biz_total_score']?><b>P</b> <span class="txt_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span> </span>                                            
												<div class="guide_box">
													<span class="clse">닫기</span>
													<p class="txt"><strong>투자매력 포인트</strong>는 해당 종목의 우량주 여부를 판단하는데 도움을 드립니다.</p>
													<p class="txt">10년 이상의 금융 빅데이터에서 우량주 발굴을 위해 22개 요인(Factor)을 종목별로 분석하고, 동종업종내 경쟁사와 비교합니다.</p>
													<ul>
														<li class="list_txt">투자매력 점수는 높을수록 매력적인 기업이며, 65P(상위 20%) 이상이면 우량 기업으로 판단합니다.</li>
														<li class="list_txt">투자매력 세부 항목인 독점력, 수익성, 안전성, 성장성, 현금창출력, 미래성장성으로 별점(★) 5점 만점에 3점 이상이면 각 항목을 통과한 것으로 판단합니다.</li>
														<li class="list_txt">세부 항목 평가에서 별점 0~1점을 받았다면 위험 요인으로, 투자 판단시 유의해서 봐야 합니다.</li>                                        
														<li class="list_txt">우량주 여부를 판단한 후에는 적정주가로 저평가 여부를 확인하세요.</li>
													</ul>
												</div>
											</td>
											<?php else:?>
											<td class="score"><span><?=$val['m_biz_total_score']?><b>P</b></span></td>
											<?php endif;?>



		                                    <?php if($this->session->userdata('is_paid')===TRUE) :?>
								            <td class="num">
								                <?php if($val['m_v_fairvalue3']>0) :?>
								                <span><?=$this->common->set_pricepoint($val['m_v_fairvalue3'], '1');?></span>
								                <span class="hit">적정주가</span>
								                <?php else :?>
								                <span class="na">N/A</span>
								                <?php endif;?>
								            </td>
											<?php else :?>
											<td class="prm_lock">
												<span><a href="#" data-modal="modal-3" class="btn_free md-trigger"><img src="/img/prm_lock.png" alt="잠김"></a></span>
											</td>
											<?php endif;?>

								        </tr>
								    <?php $cnt++; endforeach; ?>
								    </tbody>
								</table>
								<?php else:?>
								<div class="no_data">
								    <p>관심종목의 투자매력 포인트와<br>밸류에이션을 쉽게 확인할 수 있습니다.<br><br>
								        종목을 검색하여 종목명 옆의 하트(♥)를<br>
								        누르면 관심종목으로 등록됩니다.</p>
								</div>
								<?php endif;?>
							<?php else :?>
								<div class="no_data">
								    <p>관심종목의 투자매력 포인트와<br>밸류에이션을 쉽게 확인할 수 있습니다.<br><br>
								        종목을 검색하여 종목명 옆의 하트(♥)를<br>
								        누르면 관심종목으로 등록됩니다.</p>
								</div>
                            <?php endif;?>

                            <?php if($this->session->userdata('is_login')===TRUE && $myticker===TRUE):?>
                            <div class="btn_list">
                                <a href="/<?=WT?>_main/myticker">관심종목 관리</a>
                            </div> 
                            <?php endif;?>
                            
                            <?php //if($this->session->userdata('is_login')===FALSE) : ?>
                            <?php //include_once WT_INC_PATH.'/premium_banner.php'; ?>
                            <?php //endif;?>
                        </div>

                        <!-- 인기종목 -->
                        <div id="tab2" class="tab_content">
                            <div class="">
                                <div class="txt_box">
                                    <p class="txt">투자자가 가장 많이 매매하고 있는 인기종목의 투자매력 포인트 및 적정주가를 제공합니다.
		                            <span class="guide_cho">※ 종목은 (주)데이터히어로의 빅데이터 분석과 알고리즘에 의해 제공됩니다.</span></p>
                                </div>
                                <!-- //txt_box -->
                            </div>


<?php if($is_open === true):?>
<script type="text/javascript">
<!--
<?php $i=0; foreach($popular_stock_data as $val) :?>
	var pp_pre<?=$i?> = <?=$val['ticker']['tkr_close']?>;
<?php $pp_tickers .= $val['ticker']['tkr_ticker'].'|';?>
<?php $i++; endforeach;?>
function ajax_wtsise_popular() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$pp_tickers;?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
		<?php for($i=0; $i<sizeof($popular_stock_data); $i++) :?>
			if(data[<?=$i?>]['status'] == '0' && data[<?=$i?>]['last_price'] != pp_pre<?=$i?>) {
				var updown = 'decrease';
				var sign = '';

				$('#pp_price<?=$i?>').html(formatNumber(data[<?=$i?>]['last_price']).replace('.', '.<b>')+'</b>');
				$('#pp_price<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
		
				if(data[<?=$i?>]['diff_price']>0) { 
					updown = 'increase';
					sign = '+';
				}
				$('#pp_diff<?=$i?>').attr("class", updown);
				$('#pp_diff<?=$i?>').html(sign+data[<?=$i?>]['diff_rate']+'<b>%</b>');
				//$('#pp_diff<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);

				pp_pre<?=$i?> = data[<?=$i?>]['last_price'];
			}
		<?php endfor;?>
  		}
	});
};
 
var timer = window.setInterval(function () { ajax_wtsise_popular(); }, 5000);
//-->
</script> 
<?php endif;?>

                            <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                <colgroup>
                                    <col width="100px">
                                    <col width="">
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                <?php 
									$cnt=0;
                                    foreach($popular_stock_data as $val) : 
                                        $class = 'decrease';
                                        if($val['ticker']['tkr_rate'] >= 0) {
                                            $class = 'increase';
                                        }
                                ?>
                                    <tr>
                                        <td class="title"><a href="/<?=WT?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>

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
										<td class="num">
											<span id='pp_price<?=$cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
											<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>" id='pp_diff<?=$cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
										</td>
										<?php else :?>  
                                        <td class="num">
                                            <span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1');?></span>
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
                                        </td>
										<?php endif;?>

										<?php if($cnt==0) :?>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>P</b> <span class="txt_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span> </span>                                            
                                            <div class="guide_box">
                                                <span class="clse">닫기</span>
                                                <p class="txt"><strong>투자매력 포인트</strong>는 해당 종목의 우량주 여부를 판단하는데 도움을 드립니다.</p>
                                                <p class="txt">10년 이상의 금융 빅데이터에서 우량주 발굴을 위해 22개 요인(Factor)을 종목별로 분석하고, 동종업종내 경쟁사와 비교합니다.</p>
                                                <ul>
													<li class="list_txt">투자매력 점수는 높을수록 매력적인 기업이며, 65P(상위 20%) 이상이면 우량 기업으로 판단합니다.</li>
													<li class="list_txt">투자매력 세부 항목인 독점력, 수익성, 안전성, 성장성, 현금창출력, 미래성장성으로 별점(★) 5점 만점에 3점 이상이면 각 항목을 통과한 것으로 판단합니다.</li>
													<li class="list_txt">세부 항목 평가에서 별점 0~1점을 받았다면 위험 요인으로, 투자 판단시 유의해서 봐야 합니다.</li>                                        
													<li class="list_txt">우량주 여부를 판단한 후에는 적정주가로 저평가 여부를 확인하세요.</li>
                                                </ul>
                                            </div>
                                        </td>
										<?php else:?>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>P</b></span></td>
										<?php endif;?>

                                        <?php if($this->session->userdata('is_paid')===TRUE) :?>
                                        <td class="recom"><span>
                                        <?php
                                            $value_score_txt = 'N/A';
                                            if($val['expected_star']=='1') $value_score_txt = '저평가';
                                            else if($val['expected_star']=='3') $value_score_txt = '적정가';
                                            else if($val['expected_star']=='5') $value_score_txt = '고평가';                                        
                                        ?>
                                        <?=$value_score_txt?></span></td>
                                        <?php else :?>
                                        <td class="prm_lock">
                                            <span><a href="#" data-modal="modal-3" class="btn_free md-trigger"><img src="/img/prm_lockW.png" alt="잠김"></a></span>
                                        </td>
                                        <?php endif;?>
                                    </tr>
                                <?php $cnt++; endforeach; ?>
                                </tbody>
                            </table>

                            <h2 class="tab_title">급등주</h2>
                            <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                <colgroup>
                                    <col width="100px">
                                    <col width="">
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                <?php 
                                    foreach($soaring_stock_data as $val) : 
                                        $class = 'decrease';
                                        if($val['ticker']['tkr_rate'] >= 0) {
                                            $class = 'increase';
                                        }
                                ?>
                                    <tr>
                                        <td class="title"><a href="/<?=WT?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
                                        <td class="num">
                                            <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
                                        </td>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>P</b></span></td>
                                        <?php if($this->session->userdata('is_paid')===TRUE) :?>
                                        <td class="recom"><span>
                                        <?php
                                            $value_score_txt = 'N/A';
                                            if($val['expected_star']=='1') $value_score_txt = '저평가';
                                            else if($val['expected_star']=='3') $value_score_txt = '적정가';
                                            else if($val['expected_star']=='5') $value_score_txt = '고평가';                                        
                                        ?>
                                        <?=$value_score_txt?></span></td>
                                        <?php else :?>
                                        <td class="prm_lock">
                                            <span><a href="#" data-modal="modal-3" class="btn_free md-trigger"><img src="/img/prm_lockW.png" alt="잠김"></a></span>
                                        </td>
                                        <?php endif;?>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <!-- //tab_container -->
                </div>
                <!-- //tabsArea -->

            </div>
            <!-- //sub_mid -->