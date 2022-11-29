                <?=$ticker_header?>

<?php if($sec_ticker=='' && $pri_ticker=='') {?>
            <?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
                <div class="alloca_wrap">
                    <div class="alloca_star">
                        <h2 class="title">배당주 투자매력도</h2>
                        <div class="star_area">
                            <div class="starRev">
                            <?php 
                            for($i = 1 ; $i <= 5 ; $i++) { 
                                if($mri_data['m_biz_dividend_stars'] >= $i) {
                                    echo '<span class="starR on">별1</span>';
                                }
                                else {
                                    if($i-$mri_data['m_biz_dividend_stars'] <= 0.5) {
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
                        <div class="star_ranking">
                            <a href="/<?=HT?>_stock/recipe" class="">상위 <strong><?=$dividend_rank_rate?></strong>% <img src="/img/more_Black.png" alt="더보기"></a>
                        </div>

                    </div>
                    <!-- //alloca_star -->

                    <div class="alloca_info">
                        <?php if(isset($dividend)&&$dividend):?>
                        <div class="info"><p><?=$dividend;?></p></div>
                        <?php endif;?>

                        <?php if($mri_data['m_biz_dividend_stars']<=0) :?>
                        <div class="term">
                            이 종목은 <strong>배당금 정보가 없습니다.</strong>
                        </div>
                        <?php endif;?>

                        <?php if($dy_count>0):?>
                        <div class="term">
                            이 종목은 주당배당금이 <strong>최근 <?=$dy_count;?>년 연속 상승</strong>하고 있습니다. (연간 기준)
                        </div>
                        <?php endif;?>
                        <div class="table_area">
                            <table cellspacing="0" border="1" class="tableRanking table_alloca">
                                <colgroup>
                                    <col width="60px">
                                    <col width="">
                                    <col width="60px">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th class="title">배당수익률</th>
                                        <td class="num"><?=$this->common->set_pricepoint($last_mry['sf1_divyield'], '2');?></td>                                        
                                    </tr>
                                    <tr>
                                        <th class="title">주당배당금</th>
                                        <td class="num"><?=$last_mry['sf1_dps']?><b>달러</b></td>                                        
                                    </tr>
                                    <tr>
                                        <th class="title">잉여현금성장률</th>
                                        <td class="num"><?=$mri_data['m_d_fcfgr']?><b>%</b></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table cellspacing="0" border="1" class="tableRanking table_alloca">
                                <colgroup>
                                    <col width="60px">
                                    <col width="">
                                    <col width="60px">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                    <tr>                                        
                                        <th class="title">배당성향</th>
                                        <td class="num"><?=$this->common->set_pricepoint($last_mry['sf1_payoutratio'], '2')?></td>
                                    </tr>
                                    <tr>
                                        <th class="title">순이익성장률</th>
                                        <td class="num"><?=$mri_data['m_d_epsgr2']?><b>%</b></td>
                                    </tr>                                    
                                </tbody>
                            </table>
                        </div>

                        <?php if($mri_data['m_biz_dividend_stars'] > 0) : ?>
                        <div class="allocachart_area">
                            <h3 class="title">배당수익률</h3>
                            <div id="alloc_line_chart1" class="containeralloca1"></div>
                            <script>
                            var params = [<?php foreach($chart_divyield_key as $val) echo "'".substr($val,0,4)."',";?>];
                            var value = [{
                                name: '배당수익률',
                                tooltip: {                    
                                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f} %</b><br/>'                    
                                },
                                data: [<?=implode(',', $chart_divyield)?>]
                            }];
                            SubSearchAllocLineChart('alloc_line_chart1', value, params)
                            </script>
                            <!-- 종목검색 - 배당 id = containeralloca1 -->

                            <h3 class="title">주당배당금</h3>
                            <div id="alloc_line_chart2" class="containeralloca1"></div>
                            <script>
                            var params = [<?php foreach($chart_dps_key as $val) echo "'".substr($val,0,4)."',";?>];
                            var value = [{
                                name: '주당배당금',
                                tooltip: {                    
                                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f} 달러</b><br/>'                    
                                },
                                data: [<?=implode(',', $chart_dps)?>]
                            }];
                            SubSearchAllocLineChart('alloc_line_chart2', value, params, '달러')
                            </script>
                            <!-- 종목검색 - 배당 id = containeralloca1 -->

                            <h3 class="title">배당성향</h3>
                            <div id="alloc_line_chart3" class="containeralloca1"></div>
                            <script>
                            var params = [<?php foreach($chart_payoutratio_key as $val) echo "'".substr($val,0,4)."',";?>];
                            var value = [{
                                name: '배당성향',
                                tooltip: {                    
                                    pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} %</b><br/>'                    
                                },
                                data: [<?=implode(',', $chart_payoutratio)?>]
                            }];
                            SubSearchAllocLineChart('alloc_line_chart3', value, params)
                            </script>
                            <!-- 종목검색 - 배당 id = containeralloca1 -->

                        </div>
                        <!-- //allocachart_area -->
                        <?php endif; ?>
                    </div>
                </div>
<?php /*
                <!-- 배당주 투자매력도 없는 경우 -->
                <div class="alloca_wrap na_box">
                    <div class="alloca_star">
                        <h2 class="title">배당주 투자매력도</h2>
                        <span class="na">N/A</span>
                    </div>
                    <!-- //alloca_star -->

                    <div class="alloca_info">
                        <div class="info">
                            <p>배당주 투자 대상으로는 매력이 없습니다. 과거 배당금 지급이 제
                                한적이고, 미래 배당 지급 여력도 낮은 편입니다. 순이익 증가로 주
                                가 상승을 기대할 수 있는 요인이 있는지 함께 검토하는 것이 좋습
                                니다.
                                배당 매력은 과거의 배당 지급 내역, 시가배당률, 배당성향은 물론,
                                향후 배당 성장 가능성과 지급 여력을 판단하는 순이익과 잉여현금
                                성장성 등을 종합해 평가합니다.
                            </p>
                        </div>
                        <!-- //info -->

                        <div class="term">
                            이 종목은 배당금이 <strong>배당금 정보가 없습니다.</strong>
                        </div>
                        
                    </div>
                </div>
                <!-- //na_box -->
                <!-- //배당주 투자매력도 없는 경우 -->
*/?>
                <!--<p class="dataLink">data from <a href="https://www.quandl.com/" target="_blank">Quandl and
                        Sharadar</a>
                </p>-->
            </div>
            <!-- //sub_mid -->
            <?php else :?>
            <?php //include_once HT_INC_PATH.'/premium_banner.php'; ?>
            <?php endif;?>
<?php }else{?>
        <!-- 주요 콘텐츠 -->
        <div class="sub_mid nondata">
            <p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><a href="/<?=HT?>_search/invest_charm/<?=$pri_ticker?>"><?=$pri_ticker?></a></strong> 종목에서 확인할 수 있습니다.</p>
        </div>
        <!-- //sub_mid nondata -->
<?php }?>

