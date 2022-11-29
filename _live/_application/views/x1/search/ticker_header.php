<?php if($is_open === true && $ticker['tkr_status'] == '0'):?>
<script>
	$(document).ready(function(){
		$('#last_price').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		$('#diff').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		$('#price_date').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
	});
</script>			
<?php endif;?>
			
			<!-- 주요 콘텐츠 -->
            <div class="search_top">
                <div class="data_area">
                    <h2 class="title"><i class="attention<?=($myitem['mi_like']=='Y') ? ' on':''?>" id="catch_icon_one" onClick="javascript:fnMyitem('<?=$ticker['tkr_ticker']?>', '<?=urlencode(str_replace('/index.php/', '', $_SERVER["PHP_SELF"]));?>', 'Y', 'one');"></i><a href="/<?=X1?>_search/invest_charm/<?=$ticker['tkr_ticker']?>"><?=($sec_ticker != '' && $pri_ticker != '') ? $pri_ticker_name:$ticker['tkr_name']?></a></h2>
                    <ul class="info">
                        <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                    </ul>

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

<?php //if($part_all == date('Ymd')) :?>
                    <?php if($is_recom_ticker) : ?>
                    <div class="go_page">
                        <a href="<?=$recom_link?>"><span class="quarter recom">추천</span></a>
                        <a href="<?=$recom_link?>" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
                    </div>
                    <?php endif ; ?>
<?php //endif;?>
                </div>
                <!-- //data_area -->
                <ul class="info_icon">
                    <li><?=$ticker['tkr_exchange']?></li>

                    <?php if($mri_data['m_biz_dividend_score'] >= 16) : ?>
                    <li><a href="/<?=X1?>_stock/recipe/dividend">배당매력주</a></li>
                    <?php endif; ?>

                    <?php if($mri_data['m_biz_growth_score'] >= 16) : ?>
                    <li><a href="/<?=X1?>_stock/recipe/growth">이익성장</a></li>
                    <?php endif; ?>

                    <?php if($mri_data['m_biz_moat_score'] >= 16) : ?>
                    <li><a href="/<?=X1?>_stock/recipe/moat">소비자독점주</a></li>
                    <?php endif; ?>

                </ul>
                <!-- //info_icon -->
                <div class="attention_box">
                    <ul>
                        <li class="attention" id="catch_icon_one_sub"><i></i><strong id='catch_count_one'><?=number_format($myitem['total_count'])?></strong>명의 관심</li>
                    </ul>

					<?php if(is_array($winner)) :?>
                    <div class="game_tip">
                        <h3 class="game_title">주가</h3>
                        <!-- trans up : 강세, trans down : 약세, trans : 중립 -->
                        <span>단기</span> <i class="trans_icn <?=($winner['winner']['win_short']!='') ? $winner['win_trend'][$winner['winner']['win_short']]:''?>"></i>
                        <span>중기</span> <i class="trans_icn <?=($winner['winner']['win_medium']!='') ? $winner['win_trend'][$winner['winner']['win_medium']]:''?>"></i>
                        <span>장기</span> <i class="trans_icn <?=($winner['winner']['win_long']!='') ? $winner['win_trend'][$winner['winner']['win_long']]:''?>"></i>
                    </div>
                    <!-- //game_tip -->
					<?php endif;?>
                </div>
            </div>
            <!-- //sub_top -->
<?php if($sec_ticker=='' && $pri_ticker=='') :?>
            <div class="sub_mid tabs_area">
                <ul class="tabs_5<?=($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE)? '':' prm_tabs'?>">
                    <?php
                    $search_tabs = array(
                        'summary'    => '종목진단',
                        'financials' => '재무제표',
                        'invest'     => '투자지표',
                        'alloca'     => '배당',
                        'competitor' => '경쟁사',
                    );
                    foreach($search_tabs as $seg => $tab_tit) : 
                        $tab_active = ($current_tab == $seg) ? 'active' : '';
                    ?>
                    <li class="<?=$tab_active?>"><a href="/<?=X1?>_search/<?=($seg=='summary')? 'invest_charm' : $seg?>/<?=$ticker_code?>"><?=$tab_tit?></a></li>
                    <?php endforeach; ?>
                </ul>
                <!-- //tabs_5 -->

		<?php if($current_tab == 'summary') : // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>
				<ul class="tabs_3 tabs_depth2">
					<li class="<?=$current_subtab=='invest_charm' ? 'active' : ''?>"><a href="/<?=X1?>_search/invest_charm/<?=$ticker_code?>">투자매력</a></li>
					<li class="<?=$current_subtab=='summary' ? 'active' : ''?>"><a href="/<?=X1?>_search/summary/<?=$ticker_code?>">기업개요</a></li>
					<li class="<?=$current_subtab=='finance_chart' ? 'active' : ''?>"><a href="/<?=X1?>_search/finance_chart/<?=$ticker_code?>">재무차트</a></li>
				</ul>
		<?php endif; // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>
<?php endif; ?>
