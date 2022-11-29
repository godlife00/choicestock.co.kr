<?php if($is_open === true && $ticker['tkr_status'] == '0'):?>
<script>
	$(document).ready(function(){
		$('#last_price').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		$('#diff').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		$('#price_date').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);

		<?php if(isset($is_fairvalue) && $is_fairvalue === true) :?>
		$('#last_price_fv').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		<?php endif;?>
	});
</script>			
<?php endif;?>
			<!-- 주요 콘텐츠 -->
            <div class="search_top">
                <div class="data_area">
                    <h2 class="title"><a href="/search/summary/<?=$ticker['tkr_ticker']?>"><?=($sec_ticker != '' && $pri_ticker != '') ? $pri_ticker_name:$ticker['tkr_name']?></a></h2>
                    <ul class="info">
                        <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                    </ul>

					<ul class="info_icon">
						<li><?=$ticker['tkr_exchange']?></li>
						<?php if($is_snp500 === true) : ?>
						<li><a href="javascript:;">S&P500</a></li>
						<?php endif; ?>
					</ul>
					<!-- //info_icon -->
                    <ul class="detail">
                        <li class="num">
                            <span id='last_price'><?=$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1');?></span>
                        </li>
                        <li class="per">
                            <span class="<?=$ticker['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>" id='diff'><?=$ticker['tkr_diff_str']?> <span>(<?=$this->common->set_pricepoint($ticker['tkr_rate_str'], '2')?>)</span></span>
                        </li>
						<?php if($is_open === true):?>
						<li class="day" id='price_date'><?=($ticker['tkr_status'] == '0') ? date('y.m/d H:i', strtotime($ticker['tkr_lastpricedate'])) : date('y.m/d', strtotime($ticker['tkr_lastpricedate']))?>, USD</li>
						<?php else :?>
	                    <li class="day" id='price_date'><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo date('y.m/d', strtotime($ticker['tkr_lastpricedate'])).', ';?> USD</li>
						<?php endif;?>
                    </ul>

                    <div class="go_page<?=($is_recom_ticker) ? '':' only'?>">
					<i class="attention<?=($myitem['mi_like']=='Y') ? ' on':''?>" id="catch_icon_one" onClick="javascript:fnMyitem('<?=$ticker['tkr_ticker']?>', '<?=urlencode(str_replace('/index.php/', '', $_SERVER["PHP_SELF"]));?>', 'Y', 'one');"></i>
                    <?php if($is_recom_ticker) : ?>
                        <a href="<?=$recom_link?>"><span class="quarter recom">추천</span></a>
                        <a href="<?=$recom_link?>" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
                    <?php endif ; ?>
                    </div>
				</div>
                <!-- //data_area -->
                <div class="attention_box">
                    <ul>
                        <li class="attention" id="catch_icon_one_sub"><i></i><strong id='catch_count_one'><?=number_format($myitem['total_count'])?></strong>명의 관심</li>
                    </ul>
					<?php 
					$slide = '';
					if(isset($exdate) && $exdate != '' && isset($report_date['sf1_lastupdated']) && $report_date['sf1_lastupdated'] != '') :
						$slide = ' class="swiper-slide"';
					endif;
					?>
					<div class="lately_update">
                        <div class="swiper-container lately_swiper">
                            <div class="swiper-wrapper">
                                <?php if(isset($exdate) && $exdate != '') :?>
								<div<?=$slide?>>
                                    <p class="game_allo">최근 배당락일 <span><?=date('y. m/d', strtotime($exdate))?></span></p>
                                </div>
								<?php endif;?>
                                <?php if(isset($report_date['sf1_lastupdated']) && $report_date['sf1_lastupdated'] != '') :?>
                                <div<?=$slide?>>
                                    <p class="game_allo">최근 실적발표 <span><?=date('y. m/d', strtotime($report_date['sf1_lastupdated']))?></span></p>
                                </div>
								<?php endif;?>
                            </div>
                        </div>
                    </div>
                    <!-- //lately_update -->
                </div>
            </div>
            <!-- //sub_top -->
<?php if($sec_ticker=='' && $pri_ticker=='') :?>
            <div class="sub_mid tabs_area">
                <ul class="tabs_5<?=($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE)? '':' prm_tabs'?>">
                    <?php
                    $search_tabs = array(
                        'summary'    => '개요',
                        'invest_charm' => '종목진단',
                        'financials' => '재무',
                        'news'     => '뉴스',
                        'dividend'     => '배당',
                        'competitor' => '경쟁사',
                    );
                    foreach($search_tabs as $seg => $tab_tit) : 
                        $tab_active = ($current_tab == $seg) ? 'active' : '';
                    ?>
                    <li class="<?=$tab_active?>"><a href="/search/<?=$seg?>/<?=$ticker_code?>"><?=$tab_tit?></a></li>
                    <?php endforeach; ?>
                </ul>
                <!-- //tabs_5 -->

		<?php if($current_tab == 'invest_charm') : // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>
				<ul class="tabs_3 tabs_depth2<?=($this->session->userdata('is_paid')===TRUE) ? '':' prm_tabs'?>">
                    <li class="<?=$current_subtab=='invest_charm' ? 'active' : ''?>"><a href="/search/invest_charm/<?=$ticker_code?>">투자매력</a></li>
                    <li class="<?=$current_subtab=='fairvalue' ? 'active' : ''?>"><a href="/search/fairvalue/<?=$ticker_code?>">적정주가</a></li>
				</ul>
		<?php elseif($current_tab == 'financials') :?>
                <ul class="tabs_3 tabs_depth2">
                    <li class="<?=$current_subtab=='financials' ? 'active' : ''?>"><a href="/search/financials/<?=$ticker_code?>">재무제표</a></li>
					<li class="<?=$current_subtab=='finance_chart' ? 'active' : ''?>"><a href="/search/finance_chart/<?=$ticker_code?>">재무차트</a></li>
                    <li class="<?=$current_subtab=='invest' ? 'active' : ''?>"><a href="/search/invest/<?=$ticker_code?>">투자지표</a></li>
                </ul>
			<!--check</div>-->
		<?php endif; // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>
<?php endif; ?>

<?php if($this->session->userdata('user_level') == '9' || $this->session->userdata('user_id') == 'naver_48023249' || $this->session->userdata('user_id') == 'naver_56119424' || $this->session->userdata('user_id') == 'naver_4880366') :?>
<?php 
	$eugene_code = '';
	if($ticker['tkr_exchange'] == 'NYSE') $eugene_code = '0321'.$ticker_code;
	else if($ticker['tkr_exchange'] == 'NASDAQ') $eugene_code = '0537'.$ticker_code;
	else if($ticker['tkr_exchange'] == 'NYSEMKT') $eugene_code = '0066'.$ticker_code;
?>
	<?php if($eugene_code != '') :?>
	<div class="purchase_area">
        <a href="http://test.eugenefn.com:8089/app/tr/stockOvrssDetail.do?app_cd=P01&code=<?=$eugene_code;?>" class="btn_purchase" target="_blank"><i></i>주문<span>하기</span></a>
    </div>
    <!-- //purchase_area -->
	<!--<div class="sub_mid outline_box"><a href="http://test.eugenefn.com:8089/app/tr/stockOvrssDetail.do?app_cd=P01&code=<?=$eugene_code;?>" target="_blank">구매하기</a></div>-->
	<?php endif;?>
<?php endif;?>
