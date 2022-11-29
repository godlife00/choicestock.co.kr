			<!-- 급등주, 인기종목, 관심종목 탭 -->
            <div class="main_mid event_recipe">
                <h3 class="title"><a href="/<?=WT?>_stock/recipe_intro">종목탐색</a></h3>
				<a href="/<?=WT?>_stock/recipe_intro" class="more">더보기<img src="img/more_blue.png" alt="더보기"></a>

                <div class="tabsArea">
                    <ul class="tabs recipe_tabs">
                        <li class="active" rel="tab1"><span>급등주</span></li>
                        <li rel="tab2"><span>최근실적</span></li>
                        <li rel="tab3"><span>인기 TOP50</span></li>
                        <li rel="tab4"><span>관심주</span></li>
                    </ul>

                    <div class="tab_container">
                        <!-- 급등주 -->
                        <div id="tab1" class="tab_content">
                            <div class="tableth_box">
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
										<?php foreach($soaring as $val):?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=WT?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
											<td class="num txt_ani">
                                                <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            </td>
                                            <td class="num dod txt_ani">
                                                <span class="<?=$val['ticker']['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate'], '2')?><b>%</b></span>
                                            </td>
                                        </tr>
										<?php endforeach;?>
                                    </tbody>
                                </table>
                                <div class="table_btmarea">
                                    <a href="/<?=WT?>_stock/recipe/soaring" class="more">더보기<i></i></a>
                                </div>
                                <!-- //table_btmarea -->
                            </div>
                        </div>

                        <!-- 최근실적 -->
                        <div id="tab2" class="tab_content">
                            <div class="tableth_box">
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
		                            <?php $rc=0; foreach($recent_report as $val) : ?>
									<?php if($rc>2) break;?>

                                        <tr>
                                            <td class="title t_short"><a href="/<?=WT?>_search/summary/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['tkr_ticker']?></span></a></td>
                                             <td class="num txt_ani">
												<span><?=$this->common->set_pricepoint($val['tkr_close'], '1')?></span>
                                            </td>
                                            <td class="num dod txt_ani">
                                                <span class="<?=($recent_report_rates_pm[$val['tkr_ticker']] > 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($recent_report_rates[$val['tkr_ticker']], '2')?></span>
                                            </td>
                                            <!--<td class="num profit">
                                                <span><?=($val['tkr_sf1_currency']=='USD')?number_format($val['sf1_netinc']/1000000):number_format($val['sf1_netinccmnusd']/1000000)?></span>
                                                <span class="hit">백만달러</span>
                                            </td>-->
                                        </tr>
		                            <?php $rc++; endforeach; ?>
                                    </tbody>
                                </table>
								<span class="table_compare">*전년대비</span>
                                <div class="table_btmarea">
                                    <a href="/<?=WT?>_stock/recipe/earnings" class="more">더보기<i></i></a>
                                </div>
                                <!-- //table_btmarea -->
                            </div>
                        </div>
<?php if($is_open === true):?>
<script type="text/javascript">
<!--
<?php $i=0; foreach($interest as $val) :?>
	var in_pre<?=$i?> = <?=$val['ticker']['tkr_close']?>;
<?php $in_tickers .= $val['ticker']['tkr_ticker'].'|';?>
<?php $i++; endforeach;?>
function ajax_wtsise_interest() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$in_tickers;?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
		<?php for($i=0; $i<sizeof($interest); $i++) :?>
			if(data[<?=$i?>]['status'] == '0' && data[<?=$i?>]['last_price'] != in_pre<?=$i?>) {
				$('#in_price<?=$i?>').html(formatNumber(data[<?=$i?>]['last_price']).replace('.', '.<b>')+'</b>');
				$('#in_price<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
		
				in_pre<?=$i?> = data[<?=$i?>]['last_price'];
			}
		<?php endfor;?>
  		}
	});
};
 
var timer = window.setInterval(function () { ajax_wtsise_interest(); }, 5000);
//-->
</script> 
<?php endif;?>
                        <!-- 관심 TOP50 -->
                        <div id="tab3" class="tab_content">
                            <div class="tableth_box">
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
										<?php $cnt=0; foreach($interest as $val):?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=WT?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>

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
												<span id='in_price<?=$cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'],2 ), '1')?></span>
											</td>
											<?php else :?>  
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1');?></span>
                                            </td>
											<?php endif;?>		
                                            <td class="num profit td_attention">
												<p class="attention on"><i></i><?=number_format($val['cnt'])?></p>
                                            </td>
                                        </tr>
										<?php $cnt++; endforeach;?>
                                    </tbody>
                                </table>
                                <div class="table_btmarea">
                                    <a href="/<?=WT?>_stock/recipe/interest" class="more">더보기<i></i></a>
                                </div>
                                <!-- //table_btmarea -->
                            </div>
                        </div>
                        <!-- 관심종목 -->
                        <div id="tab4" class="tab_content">
                            <div class="tableth_box">
								<?php if(is_array($myitem) && sizeof($myitem)>0) :?>
<?php if($is_open === true):?>
<script type="text/javascript">
<!--
<?php $i=0; foreach($myitem as $val) :?>
	var mi_pre<?=$i?> = <?=$val['tkr_close']?>;
<?php $mi_tickers .= $val['tkr_ticker'].'|';?>
<?php $i++; endforeach;?>
function ajax_wtsise_myitem() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$mi_tickers;?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
		<?php for($i=0; $i<sizeof($myitem); $i++) :?>
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
                                    <tbody>
										<?php $cnt=0; foreach($myitem as $val):?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=WT?>_search/summary/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['tkr_ticker']?></span></a></td>

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
											<td class="num txt_ani">
                                                <span id='mi_price<?=$cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1');?></span>
                                            </td>
                                            <td class="num dod txt_ani">
                                                <span class="<?=$wval['diff_rate'] > 0 ? 'increase' : 'decrease'?>" id='mi_diff<?=$cnt?>'><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
                                            </td>
											<?php else :?>
											<td class="num txt_ani">
                                                <span><?=$this->common->set_pricepoint(number_format($val['tkr_close'], 2), '1');?></span>
                                            </td>
                                            <td class="num dod txt_ani">
                                                <span class="<?=$val['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['tkr_rate'], '2')?><b>%</b></span>
                                            </td>
											<?php endif;?>
                                        </tr>
										<?php $cnt++; endforeach;?>
                                    </tbody>
                                </table>
                                <div class="table_btmarea">
                                    <a href="/<?=WT?>_main/search" class="more">더보기<i></i></a>
                                </div>
                                <!-- //table_btmarea -->
								<?php else :?>
								<!-- 관심종목없음 -->
								<div class="attention_all">
									<p>관심종목이 없습니다.</p>
								</div>
								<?php endif;?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //event_recipe -->

<?php
/*
$wow_tikcer = $this->common->get_wowtv_info('TSLA');
echo '<pre>'; print_r($wow_tikcer);
Array
(
    [ticker] => TSLA
    [last_price] => 644.65
    [diff_rate] => -2.26
    [diff_price] => -14.93
    [updated_at] => 1625616000
    [status] => 1
)


전일 종가 적용 화면 
메인 > 종목추천
메인 > 추천 포트폴리오

메인 > 추천 > 추천 리스트
메인 > 추천 > 포트폴리오 리스트
메인 > 추천 > 승부주 리스트

발굴 > 레시피 > 급등주

./main/search.php (0)
./search/ticker_header.php
./search/invest_charm.php
./search/fairvalue.php
./inc/main_recommend.php

./inc/main_interest.php (0)
./stock/recipe_list.php
./stock/recommend_view.php
./stock/catch.php
./stock/recommend_view.php

15분 지연 적용
메인 > 진단 > 관심종목
메인 > 진단 > 인기종목

진단 > 관심종목
진단 > 인기종목
진단 > 종목검색결과

발굴 > 캐치

발굴 > 레시피 > 관심TOP50
발굴 > 레시피 > 실적발표
발굴 > 레시피 > 지금 세일중!
발굴 > 레시피 > 배당매력주
발굴 > 레시피 > 이익성장주
발굴 > 레시피 > 소비자독점
발굴 > 레시피 > 슈퍼스톡
*/
?>