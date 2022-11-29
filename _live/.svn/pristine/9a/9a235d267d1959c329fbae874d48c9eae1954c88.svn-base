           <?=$ticker_header?>
<?php if($sec_ticker=='' && $pri_ticker=='') {?>
                <div class="investCharm_area">
                    <div class="tab_diagnosis_area">

                        <div id="containersummary1" class="containersummary1"></div>
                        <script>
                        var params = [<?php foreach($close_chart_key as $val) echo "'".substr($val,5,5)."',";?>]
                        SubSearchSummaryLineChart('containersummary1', [<?=$close_chart_value?>], params);
                        </script>

                        <div>
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
                        </div> <!-- //chart_sum -->

                        <strong class="unit"><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo '* 기준 : '.date('y.m/d', strtotime($ticker['tkr_lastpricedate']));?></strong>
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
                                    <?php    if($mrq_data['sf1_shareswadil']) echo $mrq_data['sf1_shareswadil']; else echo $mrq_data['sf1_shareswa'];?>
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
                    <!-- //tab_diagnosis_area -->
                    <!--<div class="guide_wrap">
                        <span class="title_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span>
                        <div class="guide_box hide">
                            <span class="clse">닫기</span>
                            <strong class="title">타이틀</strong>
                            <ul>
                                <li>임시 문구 미국 증권사 애널리스트들이 제시한 투자의견 컨센서스(평균)를 표시합니다. 최소 10개 이상 증권사에서 투자의견을 제시한 종목만 제공합니다.
                                    투자의견 컨센서스는 강력매수, 매수, 보유, 매도, 강력매도 5단계로 제시합니다. </li>
                            </ul>
                        </div>
                    </div>-->
                    <!-- //guide_wrap -->
                </div>
                <!-- //sub_mid -->

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
                                    {'name': '부채종계', 'data': [<?=$mry_chart_value['sf1_liabilities']?>]},
                                    {'name': '자본총계', 'data': [<?=$mry_chart_value['sf1_equity']?>]}
                                ];
                                SubSearchSummaryColumnChart('summfinancials1_2', chart_value, chart_title, tooltip);
                                </script>
                                <ul class="chart_legend">
                                    <li><span><i></i>자산총계</span></li>
                                    <li><span><i></i>부채종계</span></li>
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
                                    {'name': '부채종계', 'data': [<?=$mrq_chart_value['sf1_liabilities']?>]},
                                    {'name': '자본총계', 'data': [<?=$mrq_chart_value['sf1_equity']?>]}
                                ];
                                SubSearchSummaryColumnChart('summfinancials2_2', chart_value, chart_title, tooltip);</script>
                                <!-- 종목검사 재무제표 class = containerfinancials1  -->
                                <ul class="chart_legend">
                                    <li><span><i></i>자산총계</span></li>
                                    <li><span><i></i>부채종계</span></li>
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
                <!-- //sub_mid -->
            </div>
            <!-- //sub_mid -->
<?php }else{?>
        <!-- 주요 콘텐츠 -->
        <div class="sub_mid nondata">
            <p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><a href="/<?=KW?>_search/invest_charm/<?=$pri_ticker?>"><?=$pri_ticker?></a></strong> 종목에서 확인할 수 있습니다.</p>
        </div>
        <!-- //sub_mid nondata -->
<?php }?>
