                <?=$ticker_header?>
<?php if($sec_ticker=='' && $pri_ticker=='') {?>
<?php 
    $moneyvalue = 1000000;
    if($ticker_unit>0) $moneyvalue = $moneyvalue * $ticker_unit;
?>
        <div class="investCharm_area">
            <div class="tab_diagnosis_area">
                <div class="financecachart_area">
                    <div class="tabs_menu">
                        <span onclick="location.href='/<?=HN?>_search/finance_chart/<?=$ticker_code?>/MRT?pn=<?=$part_name;?>&pg=<?=$part_page;?>&pm=m'" class="<?=$dimension == 'MRT' ? 'active' : ''?>">연환산</span>
                        <span onclick="location.href='/<?=HN?>_search/finance_chart/<?=$ticker_code?>/MRY?pn=<?=$part_name;?>&pg=<?=$part_page;?>&pm=m'" class="<?=$dimension == 'MRY' ? 'active' : ''?>">연간</span>
                        <span onclick="location.href='/<?=HN?>_search/finance_chart/<?=$ticker_code?>/MRQ?pn=<?=$part_name;?>&pg=<?=$part_page;?>&pm=m'" class="<?=$dimension == 'MRQ' ? 'active' : ''?>">분기</span>
                    </div>                    

                    <div class="chart_area">
                        <div class="box">
                            <h3 class="title">매출과 이익 <span><?=$ticker_currency?></span></h3>
                            <div id="containerfinance1_1" class="containerfinance1"></div>
                            <?php
                            if($dimension=='MRT' || $dimension=='MRQ') $dp_year = '7'; else $dp_year = '4';
                            $rev_key = array_keys(array_reverse($vchart_data['salesincome']['data']['L1_column_revenue']));
                            $arr_l1 = array_values(array_reverse($vchart_data['salesincome']['data']['L1_column_revenue']));
                            $arr_l1_cnt = count($arr_l1);
                            $arr_l1_new = array();
                            foreach($arr_l1 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_l1_cnt--;
                                $arr_l1_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_l1_cnt==0) $arr_l1_new = array();

                            $arr_r1 = array_values(array_reverse($vchart_data['salesincome']['data']['R1_line_opinc']));
                            $arr_r1_cnt = count($arr_r1);
                            $arr_r1_new = array();
                            foreach($arr_r1 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_r1_cnt--;
                                $arr_r1_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_r1_cnt==0) $arr_r1_new = array();

                            $arr_r2 = array_values(array_reverse($vchart_data['salesincome']['data']['R2_line_netinc']));
                            $arr_r2_cnt = count($arr_r2);
                            $arr_r2_new = array();
                            foreach($arr_r2 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_r2_cnt--;
                                $arr_r2_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_r2_cnt==0) $arr_r2_new = array();
                            
                            ?>
                            <script>
                            var params = [<?php foreach($rev_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '매출액',
                                    type: 'column',
                                    data: [<?=implode(',',array_values($arr_l1_new))?>],
                                    tooltip: {
                                        // shared: true,
                                        pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} <?=str_replace('(USD)','',$ticker_currency);?></b><br/>'
                                    },
                                }, {
                                    name: '영업이익',
                                    type: 'line',
                                    yAxis: 1,
                                    data: [<?=implode(',',array_values($arr_r1_new))?>],
                                    tooltip: {
                                        shared: true,
                                        pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} <?=str_replace('(USD)','',$ticker_currency);?></b><br/>'
                                    },
                                }, {
                                    name: '지배지분순이익',
                                    type: 'line',
                                    yAxis: 1,
                                    data: [<?=implode(',',array_values($arr_r2_new))?>],
                                    tooltip: {
                                        shared: true,
                                        pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} <?=str_replace('(USD)','',$ticker_currency);?></b><br/>'
                                    },
                                }];
                            SubSearchCharmFiChart1('containerfinance1_1', value, params, '<?=str_replace('(USD)','',$ticker_currency);?>');
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                        <!-- div 사이즈는 big, small  -->
                                <p class="guide">매출액은 기업 성장의 출발점입니다. 매출액 성장률이 물가인상률을 초과하는 기업이 좋습니다. 일반적으로 매출액이 늘면 영업이익과 순이익은 더 큰 폭으로 증가합니다. 장기적인 이익 추세의 고점과 저점의 차이가 작을수록 경기 변동 영향을 받지 않는 우량 기업입니다.
                                <br/><br/>    
                                반면, 경기에 민감한 철강, 화학, 조선, 자동차 산업은 경기 변동에 따라 이익의 변동 폭이 매우 클뿐 아니라 수년간 매출액 감소가 이어지기도 합니다. 심할 경우 경기 변동에 따라 순이익이 흑자와 적자를 반복하는 경우도 있습니다. 
                                <br/><br/>
                                매출액, 영업이익, 순이익 모두 우상향 하는 기업은 주가도 꾸준히 상승합니다. 주가 상승의 출발점이 꾸준한 매출액 증가에서 시작한다는 점을 기억해야 합니다.</p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">이익률</h3>
                            <div id="containerfinance1_2" class="containerfinance1"></div>

                            <?php
                            //echo '<pre>'; print_r($vchart_data['margin']['data']['L1_line_opmargin']);
                            $arr_opkey = array_keys(array_reverse($vchart_data['margin']['data']['L1_line_opmargin']));
                            $arr_l1 = array_values(array_reverse($vchart_data['margin']['data']['L1_line_opmargin']));
                            $arr_l1_cnt = count($arr_l1);
                            $arr_l1_new = array();
                            foreach($arr_l1 as $eVal) {
                                if(is_nan($eVal) || is_infinite($eVal)) $eVal = 0;
                                if($eVal*100 == 0 ) $arr_l1_cnt--;
                                $arr_l1_new[] = $eVal*100;
                            }
                            if($arr_l1_cnt==0) $arr_l1_new = array();

                            $arr_l2 = array();
                            $arr_l2 = array_values(array_reverse($vchart_data['margin']['data']['L2_line_netmargin']));
                            $arr_l2_cnt = count($arr_l2);
                            $arr_l2_new = array();
                            foreach($arr_l2 as $eVal) {
                                if($eVal*100 == 0 ) $arr_l2_cnt--;
                                $arr_l2_new[] = $eVal*100;
                            }
                            if($arr_l2_cnt==0) $arr_l2_new = array();

                            ?>
                            <script>
                            var params = [<?php foreach($arr_opkey as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '영업이익률',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($arr_l1_new))?>],
                                }, {
                                    name: '순이익률',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($arr_l2_new))?>],
                                }];
                            SubSearchCharmFiChart2('containerfinance1_2', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                        <!-- div 사이즈는 big, small  -->
                                <p class="guide">이익률은 기업의 마진을 뜻합니다. 이익률이 높을수록 수익성이 좋은 기업입니다. 고마진 기업은 제품(서비스)을 만드는 데 들어가는 비용(원가율)이 낮습니다. 경쟁사 대비 낮은 원가율과 높은 이익률 덕분에 기업이 성장을 지속할 수 있는 충분한 자금을 확보할 수 있습니다. 
                                <br/><br/>
                                기업의 이익률을 볼 때는 동종 산업내 경쟁사와 비교, 분석하는 게 좋습니다. 경쟁사 대비 높은 이익률을 올리고 있다면, 그 기업은 타사 대비 제품(서비스)의 경쟁력이 높은 것으로 판단할 수 있습니다.</p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">부채비율과 유동비율</h3>
                            <div id="containerfinance1_3" class="containerfinance1"></div>

                            <?php
                            $arr_l1 = array();

                            if($dimension == 'MRT' && isset($vchart_data_mry) && $is_adr) {
                                $de_key = array_keys(array_reverse($vchart_data_mry['debtcr']['data']['L1_line_de']));
                                $arr_l1 = array_values(array_reverse($vchart_data_mry['debtcr']['data']['L1_line_de']));
                            }
                            else {
                                $de_key = array_keys(array_reverse($vchart_data['debtcr']['data']['L1_line_de']));
                                $arr_l1 = array_values(array_reverse($vchart_data['debtcr']['data']['L1_line_de']));
                            }
                            $arr_l1_cnt = count($arr_l1);
                            $arr_l1_new = array();
                            foreach($arr_l1 as $eVal) {
                                if($eVal*100 == 0 ) $arr_l1_cnt--;
                                $arr_l1_new[] = $eVal*100;
                            }
                            if($arr_l1_cnt==0) $arr_l1_new = array();

                            $arr_r1 = array();
                            if($dimension == 'MRT' && isset($vchart_data_mry) && $is_adr) {
                                $arr_r1 = array_values(array_reverse($vchart_data_mry['debtcr']['data']['R1_line_currentratio']));
                            }
                            else {
                                $arr_r1 = array_values(array_reverse($vchart_data['debtcr']['data']['R1_line_currentratio']));
                            }
                            $arr_r1_cnt = count($arr_r1);
                            $arr_r1_new = array();
                            foreach($arr_r1 as $eVal) {
                                if($eVal*100 == 0 ) $arr_r1_cnt--;
                                $arr_r1_new[] = $eVal*100;
                            }
                            if($arr_r1_cnt==0) $arr_r1_new = array();
                            ?>
                            <script>
                            var params = [<?php foreach($de_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '부채비율',
                                    type: 'line',                               
                                    data: [<?=implode(',',array_values($arr_l1_new))?>],
                                }, {
                                    name: '유동비율',
                                    type: 'line',                                    
                                    yAxis: 1,     
                                    data: [<?=implode(',',array_values($arr_r1_new))?>],
                                }];
                            SubSearchCharmFiChart3('containerfinance1_3', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">대부분의 부채는 금융기관에서 빌린 차입금입니다. 제품(서비스)을 팔고 받지 못한 외상(매출채권)도 부채에 포함되지만, 일반적으로 큰 문제가 되지 않습니다. 금융기관 차입금은 기업이 이자를 지급해야 하기 때문에 규모가 적정한지를 꼭 확인해야 합니다. 
                                <br/><br/>
                                부채비율과 유동비율은 기업의 단기적인 재무 안전성을 나타냅니다. 부채비율은 낮을수록, 유동비율은 높을수록 재무 안전성이 높은 기업입니다. 이 비율도 동종 산업내 경쟁사와 비교해서 보는 것이 좋습니다. 그외 이자보상배율과 현금흐름표를 함께 체크하면, 부도 위험이 있는 기업을 쉽게 걸러낼 수 있습니다.
                            </p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">주당배당금과 배당률</h3>
                            <div id="containerfinance1_4" class="containerfinance1"></div>
                            <?php
                            $dy_key = array_keys(array_reverse($vchart_data['dividend']['data']['R1_line_divyield']));
                            $r1_dy = array_values(array_reverse($vchart_data['dividend']['data']['R1_line_divyield']));
                            $ri_dy_cnt = count($r1_dy);
                            $r1_dy_new = array();
                            foreach($r1_dy as $eVal) {
                                if($eVal*100 == 0 ) $ri_dy_cnt--;
                                $r1_dy_new[] = $eVal*100;
                            }
                            if($ri_dy_cnt==0) $r1_dy_new = array();

                            $l1_dps = array_values(array_reverse($vchart_data['dividend']['data']['L1_column_dps']));
                            $l1_dps_cnt = count($l1_dps);
                            $l1_dps_new = array();
                            foreach($l1_dps as $eVal) {
                                if($eVal == 0 ) $l1_dps_cnt--;
                                $l1_dps_new[] = $eVal;
                            }
                            if($l1_dps_cnt==0) $l1_dps_new = array();

                            ?>
                            <script>
                            var params = [<?php foreach($dy_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '주당배당금',
                                    type: 'column',
                                    tooltip: {
                                        shared: true,
                                        pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 달러</b><br/>'                                        
                                    },
                                    data: [<?=implode(',',array_values($l1_dps_new))?>],
                                }, {
                                    name: '배당수익률',
                                    type: 'line',
                                    yAxis: 1,
                                    tooltip: {
                                        shared: true,
                                        pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} %</b><br/>'                                        
                                    },
                                    data: [<?=implode(',',array_values($r1_dy_new))?>],
                                }];
                            SubSearchCharmFiChart4('containerfinance1_4', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">투자자의 연간 수익률은 주가 상승률과 배당 수익률을 더한 값입니다. 미국 주식에 투자하면 투자자의 연간 수익률 중 배당이 차지하는 비율은 20~30% 입니다. 배당 수익률은 투자자의 장기 수익률 달성에 도움을 줍니다. 
                                <br/><br/>
                                배당은 기업의 순이익 중 일부를 주주에게 현금 또는 주식으로 나눠주는 것입니다. 우량 기업은 배당금을 매년 꾸준히 늘려 지급합니다. 시가배당률은 주식 매수가 대비 주당배당금의 비율입니다. 예를 들어 A 주식을 주당 100 달러에 매수하고 주당배당금으로 5 달러를 받았다면, 시가배당률은 5%(=5달러/100달러*100%)가 됩니다. 시가배당률이 정기 예금금리의 1.5 배 이상이면 매력적인 배당주로 볼 수 있습니다. 정기 예금금리가 1% 라고 하면, 시가배당률은 1.5% 이상이면 배당 매력이 있는 기업이고 배당수익률은 높을수록 좋습니다. 
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">ROE 와 PBR</h3>
                            <div id="containerfinance1_5" class="containerfinance1"></div>
                            <?php
                            $roe_key = array_keys(array_reverse($vchart_data['roepbr']['data']['L1_line_roe']));
                            $l1_roe = array_values(array_reverse($vchart_data['roepbr']['data']['L1_line_roe']));
                            $l1_roe_cnt = count($l1_roe);
                            $l1_roe_new = array();
                            foreach($l1_roe as $eVal) {
                                if($eVal*100 == 0 ) $l1_roe_cnt--;
                                $l1_roe_new[] = $eVal*100;
                            }
                            if($l1_roe_cnt==0) $l1_roe_new = array();

                            $r1_pb = array_values(array_reverse($vchart_data['roepbr']['data']['R1_line_pb']));
                            $r1_pb_cnt = count($r1_pb);
                            $r1_pb_new = array();
                            foreach($r1_pb as $eVal) {
                                if($eVal == 0 ) $r1_pb_cnt--;
                                $r1_pb_new[] = $eVal;
                            }
                            if($r1_pb_cnt==0) $r1_pb_new = array();

                            ?>
                            <script>
                            var params = [<?php foreach($roe_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '자기자본이익률',
                                    type: 'line',
                                    //tooltip: {                    
                                    //    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} %</b><br/>'                                        
                                    //},
                                    data: [<?=implode(',',array_values($l1_roe_new))?>],
                                }, {
                                    name: '주가순자산배수',
                                    type: 'line',
                                    yAxis: 1,
                                    //tooltip: {
                                    //    shared: true,
                                    //    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 배</b><br/>'
                                    //},    
                                    data: [<?=implode(',',array_values($r1_pb_new))?>],
                                }];
                            SubSearchCharmFiChart5('containerfinance1_5', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">저평가 우량주를 찾고 싶다면 ROE&PBR 차트를 보면 좋습니다. ROE는 높고, PBR은 낮은 기업이 저평가 우량주입니다. ROE는 주주의 수익률이고, PBR은 주식을 살 때 지불하는 가격을 말합니다. 따라서, 수익률(ROE)은 높고 가격(PBR)은 싼 게 좋습니다.
                                <br/><br/>
                                일반적으로는 ROE가 높으면 PBR도 높습니다. 그러나, 개별 기업의 이익과 관계없이 시장 급락이나 외부 충격 등으로 가격(PBR)이 하락하면 좋은 매수 기회가 됩니다. 
                                <br/><br/>
                                ROE는 자기자본이익률이라고 하며 (순이익/자본총계)*100% 로 계산합니다. PBR은 주가순자산배수라고 하며 (시가총액/자본총계)로 계산합니다. 동종 산업 내 경쟁사와 ROE&PBR을 비교해서 보면 더 유용합니다.
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">운전자본 회전일수</h3>
                            <div id="containerfinance1_6" class="containerfinance1"></div>
                            <?php
                            $turn_key = array_keys(array_reverse($vchart_data['turnoverdays']['data']['L1_line_receiveturnoverdays']));
                            $l1_rt = array_values(array_reverse($vchart_data['turnoverdays']['data']['L1_line_receiveturnoverdays']));
                            $l1_rt_cnt = count($l1_rt);
                            $l1_rt_new = array();
                            foreach($l1_rt as $eVal) {
                                if($eVal == 0 ) $l1_rt_cnt--;
                                $l1_rt_new[] = $eVal;
                            }
                            if($l1_rt_cnt==0) $l1_rt_new = array();

                            $l2_it = array_values(array_reverse($vchart_data['turnoverdays']['data']['L2_line_inventoryturnoverdays']));
                            $l2_it_cnt = count($l2_it);
                            $l2_it_new = array();
                            foreach($l2_it as $eVal) {
                                if(is_nan($eVal) || is_infinite($eVal)) $eVal = 0;
                                if($eVal == 0 ) $l2_it_cnt--;
                                $l2_it_new[] = $eVal;
                            }
                            if($l2_it_cnt==0) $l2_it_new = array();

                            $l3_pt = array_values(array_reverse($vchart_data['turnoverdays']['data']['L3_line_payableturnoverdays']));
                            $l3_pt_cnt = count($l3_pt);
                            $l3_pt_new = array();
                            foreach($l3_pt as $eVal) {
                                if($eVal == 0 ) $l3_pt_cnt--;
                                $l3_pt_new[] = $eVal;
                            }
                            if($l3_pt_cnt==0) $l3_pt_new = array();
                            ?>
                            <script>
                            var params = [<?php foreach($turn_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '매출채권 회전일수',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($l1_rt_new))?>],
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['turnoverdays']['data']['L1_line_receiveturnoverdays'])))?>],
                                }, {
                                    name: '재고자산 회전일수',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['turnoverdays']['data']['L2_line_inventoryturnoverdays'])))?>],
                                    data: [<?=implode(',',array_values($l2_it_new))?>],
                                }, {
                                    name: '매입채무 회전일수',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['turnoverdays']['data']['L3_line_payableturnoverdays'])))?>],
                                    data: [<?=implode(',',array_values($l3_pt_new))?>],
                                }];
                            SubSearchCharmFiChart6('containerfinance1_6', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">운전자본(Working Capital)은 기업이 제품(서비스)를 만들고 파는데 투입되는 자본을 말합니다. 원재료 구입비는 물론 재고도 포함되며, 제품 판매 후 받지 못한 돈(매출채권)이나 원재료 매입 후 지급하지 않은 돈(매입채무) 등을 모두 포함합니다.
                                <br/><br/>
                                제조업의 운전자본 규모는 기업의 매출액 규모와 연동됩니다. 매출액이 많으면 제품생산을 위해 투입할 원재료 비용이나 매출채권도 더 많이 필요하기 때문에 운전자본 규모도 높습니다. 따라서 운전자본 규모 보다는 현금이 잘 돌고 있는지를 확인할 수 있는 운전자본 회전일수를 확인하는 것이 좋습니다.
                                <br/><br/>
                                운전자본 회전일수는 낮을 수록 좋습니다. 운전자본 회전일수가 낮으면 회사의 현금 회전이 빠릅니다. 현금 → 원재료 → 제품 → 매출채권 → 현금으로 회수되는 기간이 짧아 회사의 자금 운영에 유리합니다.
                                <br/><br/>
                                운전자본 회전일수는 매출채권 회전일수 + 재고자산 회전일수 - 매입채무 회전일수로 계산합니다. 매출채권 회전일수는 제품 판매 후 거래처로부터 현금으로 회수하는데 걸리는 일수를 말하며 낮을수록 좋습니다. 재고자산 회전일수는 원재료를 매입해 생산, 판매할 때까지 걸리는 일수를 말하며 낮을수록 좋습니다. 매입채무 회전일수는 원재료 매입 후 거래처에 대금을 지급할때까지 걸리는 일수를 말하며 높을수록 기업에는 좋지만, 거래처에는 대금을 늦게 지급한다는 의미라 상생이란 측면에선 고려해야할 부분도 있습니다.</p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">현금흐름표 <span><?=$ticker_currency?></span></h3>
                            <div id="containerfinance1_7" class="containerfinance1"></div>

                            <?php
                            $ncfo_key = array_keys(array_reverse($vchart_data['cashflow']['data']['L1_line_ncfo']));
                            $arr_li = array();
                            $arr_l1 = array_values(array_reverse($vchart_data['cashflow']['data']['L1_line_ncfo']));
                            $arr_l1_cnt = count($arr_l1);
                            $arr_l1_new = array();
                            foreach($arr_l1 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_l1_cnt--;
                                $arr_l1_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_l1_cnt==0) $arr_l1_new = array();

                            $arr_l2 = array();
                            $arr_l2 = array_values(array_reverse($vchart_data['cashflow']['data']['L2_line_ncfi']));
                            $arr_l2_cnt = count($arr_l2);
                            $arr_l2_new = array();
                            foreach($arr_l2 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_l2_cnt--;
                                $arr_l2_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_l2_cnt==0) $arr_l2_new = array();

                            $arr_l3 = array();
                            $arr_l3 = array_values(array_reverse($vchart_data['cashflow']['data']['L3_line_ncff']));
                            $arr_l3_cnt = count($arr_l3);
                            $arr_l3_new = array();
                            foreach($arr_l3 as $eVal) {
                                if($eVal/$moneyvalue == 0 ) $arr_l3_cnt--;
                                $arr_l3_new[] = $eVal/$moneyvalue;
                            }
                            if($arr_l3_cnt==0) $arr_l3_new = array();

                            ?>

                            <script>
                            var params = [<?php foreach($ncfo_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '영업활동',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($arr_l1_new))?>],
                                }, {
                                    name: '투자활동',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($arr_l2_new))?>],
                                }, {
                                    name: '재무활동',
                                    type: 'line',
                                    data: [<?=implode(',',array_values($arr_l3_new))?>],
                                }];
                            SubSearchCharmFiChart7('containerfinance1_7', value, params, '<?=str_replace('(USD)','',$ticker_currency);?>');
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">현금흐름표는 일종의 현금출납장입니다. 기업의 활동을 영업, 투자, 재무 활동으로 나누고 각 활동별로 현금의 유출입을 기록한 것입니다. 현금흐름표에선 현금이 들어오면 플러스(+), 나가면 마이너스(-)로 표시합니다.
                                <br/><br/>
                                영업활동 현금흐름은 순이익을 기본으로 영업활동에서 생긴 현금유출입을 말합니다. 우량 기업의 영업활동 현금흐름은 플러스(+)를 꾸준히 유지합니다.
                                <br/><br/>
                                투자활동 현금흐름은 기업의 기계 및 공장증설이나 금융자산 거래에서 발생하는 현금유출입을 말합니다. 일반적으로 성장을 위한 투자 집행으로 현금이 유출되기 때문에 마이너스(-)로 나타납니다.
                                <br/><br/>
                                재무활동 현금흐름은 증자, 차입, 배당을 통해 발생하는 현금유출입을 뜻합니다. 영업활동으로 충분한 현금을 벌고 있는 기업은 금융기관의 차입금을 갚고, 배당을 지급하는 등 현금이 유출되기 때문에 마이너스(-)를 기록합니다.
                                <br/><br/>
                                특별한 활동이 있는 일시적인 기간을 제외하고 현금흐름표의 장기적인 구성은 영업활동 현금흐름 플러스(+), 투자활동 현금흐름 마이너스(-), 재무활동 현금흐름이 마이너스(-)가 가장 좋습니다.
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">주가수익배수(PER)</h3>
                            <div id="containerfinance1_8" class="containerfinance1"></div>
                            <?php
                            $per_key = array_keys(array_reverse($vchart_data['per']['data']['L1_line_pe']));
                            $l1_pe = array_values(array_reverse($vchart_data['per']['data']['L1_line_pe']));
                            $l1_pe_cnt = count($l1_pe);
                            $l1_pe_new = array();
                            foreach($l1_pe as $eVal) {
                                if($eVal == 0 ) $l1_pe_cnt--;
                                $l1_pe_new[] = $eVal;
                            }
                            if($l1_pe_cnt==0) $l1_pe_new = array();
                            ?>
                            <script>
                            var params = [<?php foreach($per_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '주가수익배수',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['per']['data']['L1_line_pe'])))?>],
                                    data: [<?=implode(',',array_values($l1_pe_new))?>],
                                }];
                            SubSearchCharmFiChart8('containerfinance1_8', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">주가수익배수는 적정주가 대비 현재 주가가 싼지 비싼지를 알려줍니다. 주가수익배수는 시가총액이  연간 순이익의 몇 배에 거래되는지 나타냅니다. 주가수익배수가 낮을수록 주가가 저평가된 상태입니다.
                                <br/><br/>
                                주가수익배수는 상대가치평가 지표로 동종 산업내 경쟁사나 비슷한 수준의 매출과 이익규모의 기업과 비교하는 것이 좋습니다. 경쟁사 대비 주가수익배수가 낮으면, 상대적으로 싸게 거래된다고 판단합니다.
                                <br/><br/>
                                또한, 기업의 10년 정도의 장기적인 주가수익배수 추이를 함께 보는 것이 좋습니다. 순이익이 성장할때와 감소할때 주가수익배수는 다르게 평가받습니다. 순이익 성장률이 높으면 주가수익배수도 높게 평가 받습니다. 이는 순이익 성장률이 높으면 주가도 크게 상승한다는 뜻입니다.
                                <br/><br/>
                                10년 간 장기적인 주가수익배수의 움직임과 최고, 최저점을 확인한 후, 현재 시점 주가수익배수와 비교해 주가가 싼지 비싼지를 평가하는게 좋습니다. 일반적으로 장기적인 주가수익배수의 평균 정도에 있으면 매수를 검토하고, 역사적인 최고점 수준에 있다면 이익이 더 성장할 수 있을지 더 꼼꼼히 살피고 유의해야 합니다.
                                </p>
                            </div>
                        </div>
                        <div class="box">
                            <h3 class="title">주가와 주당순이익</h3>
                            <div id="containerfinance1_9" class="containerfinance1"></div>
                            <?php
                            $eps_key = array_keys(array_reverse($vchart_data['priceeps']['data']['L1_line_epsdil']));
                            $l1_eps = array_values(array_reverse($vchart_data['priceeps']['data']['L1_line_epsdil']));
                            $l1_eps_cnt = count($l1_eps);
                            $l1_eps_new = array();
                            foreach($l1_eps as $eVal) {
                                if($eVal == 0 ) $l1_eps_cnt--;
                                $l1_eps_new[] = $eVal;
                            }
                            if($l1_eps_cnt==0) $l1_eps_new = array();

                            $r1_cl = array_values(array_reverse($vchart_data['priceeps']['data']['R1_line_close']));
                            $r1_cl_cnt = count($r1_cl);
                            $r1_cl_new = array();
                            foreach($r1_cl as $eVal) {
                                if($eVal == 0 ) $r1_cl_cnt--;
                                $r1_cl_new[] = $eVal;
                            }
                            if($r1_cl_cnt==0) $r1_cl_new = array();

                            ?>
                            <script>
                            var params = [<?php foreach($eps_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '주당순이익',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['priceeps']['data']['L1_line_epsdil'])))?>],
                                    data: [<?=implode(',',array_values($l1_eps_new))?>],
                                }, {
                                    name: '주가',
                                    type: 'line',
                                    yAxis: 1,
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['priceeps']['data']['R1_line_close'])))?>],
                                    data: [<?=implode(',',array_values($r1_cl_new))?>],
                                }];
                            SubSearchCharmFiChart9('containerfinance1_9', value, params); 
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">주가와 주당순이익은 같은 방향으로 걷는 친구와도 같습니다. 주당순이익(EPS)이 증가하면 주가도 오릅니다. 주가&주당순이익 차트는 주가수익배수(=주가/주당순이익)를 구성하는 2가지  요인을 분석해 현재 주가수익배수가 적절한지를 판단하는데 사용합니다.
                                <br/><br/>
                                일반적으로 아래 4가지 유형으로 분석할 수 있습니다.<br/>
                                - 강력매수 검토 : 주당순이익 증가, 주가 하락 또는 횡보<br/>
                                - 매수 검토 : 주당순이익 증가, 주가 상승 <br/>
                                - 매도 검토 : 주당순이익 감소, 주가 횡보 또는 하락 <br/>
                                - 강력매도 검토 : 주당순이익 감소, 주가 상승
                                <br/><br/>
                                주당순이익이 증가해도 시장 전체적인 악재로 주가가 급락하면 좋은 매수 기회가 됩니다. 주가수익배수(PER) 차트와 함께 분석하면 더 유용합니다.
                                </p>
                            </div>
                        </div>

                        <div class="box">
                            <h3 class="title">주가순자산배수(PBR)</h3>
                            <div id="containerfinance1_10" class="containerfinance1"></div>
                            <?php

                            if($dimension == 'MRT' && isset($vchart_data_mry) && $is_adr) {
                                $pbr_key = array_keys(array_reverse($vchart_data_mry['pbr']['data']['L1_line_pb']));
                                $l1_pb = array_values(array_reverse($vchart_data_mry['pbr']['data']['L1_line_pb']));
                            }
                            else {
                                $pbr_key = array_keys(array_reverse($vchart_data['pbr']['data']['L1_line_pb']));
                                $l1_pb = array_values(array_reverse($vchart_data['pbr']['data']['L1_line_pb']));
                            }

                            $l1_pb_cnt = count($l1_pb);
                            $l1_pb_new = array();
                            foreach($l1_pb as $eVal) {
                                if($eVal == 0 ) $l1_pb_cnt--;
                                $l1_pb_new[] = $eVal;
                            }
                            if($l1_pb_cnt==0) $l1_pb_new = array();
                            ?>
                            <script>
                            var params = [<?php foreach($pbr_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '주가순자산배수',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['pbr']['data']['L1_line_pb'])))?>],
                                    data: [<?=implode(',',array_values($l1_pb_new))?>],
                                }];
                            SubSearchCharmFiChart10('containerfinance1_10', value, params);
                            </script>
                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">주가순자산배수는 시가총액이 최근 자본총계의 몇 배에 거래되는지 나타냅니다. 주가순자산배수가 낮을수록 주가가 저평가됐다고 판단합니다. 다만, 주가순자산배수는 자기자본이익률(ROE)의 높고 낮음에 따라 결정되는 만큼, ROE의 현재 수치와 향후 유지 가능성에 대한 분석이 필요합니다.                                    
                                <br/><br/>
                                일반적으로 ROE가 높으면 PBR도 높습니다. ROE가 높지만 다른 기업에 비해 PBR이 낮게 거래되면 주가가 저평가된 것으로 판단합니다. ROE&PBR 차트를 함께 보고 분석하는 것을 추천합니다.
                                <br/><br/>
                                기업의 10년 정도의 장기적인 주가순자산배수 추이를 확인하는 것이 좋습니다. 주가순자산배수는  자기자본이익률이 높을때와 낮을때에 따라 다르게 평가받습니다. 현재 ROE와 비슷한 ROE를 기록한 과거년도를 찾고, 그 당시 시장에서 평가 받은 주가순자산배수(PBR)를 확인해 현재 주가의 저평가 여부를 판단하는 것이 좋습니다.
                                </p>
                            </div>
                        </div>
                        
                        <div class="box">
                            <h3 class="title">주가와 주당순자산</h3>
                            <div id="containerfinance1_11" class="containerfinance1"></div>
                            <?php

                            if($dimension == 'MRT' && isset($vchart_data_mry) && $is_adr) {
                                $bvps_key = array_keys(array_reverse($vchart_data_mry['pricebps']['data']['L1_line_bvps']));
                                $l1_bv = array_values(array_reverse($vchart_data_mry['pricebps']['data']['L1_line_bvps']));
                            }
                            else {
                                $bvps_key = array_keys(array_reverse($vchart_data['pricebps']['data']['L1_line_bvps']));
                                $l1_bv = array_values(array_reverse($vchart_data['pricebps']['data']['L1_line_bvps']));
                            }

                            $l1_bv_cnt = count($l1_bv);
                            $l1_bv_new = array();
                            foreach($l1_bv as $eVal) {
                                if($eVal == 0 ) $l1_bv_cnt--;
                                $l1_bv_new[] = $eVal;
                            }
                            if($l1_bv_cnt==0) $l1_bv_new = array();

                            if($dimension == 'MRT' && isset($vchart_data_mry) && $is_adr) {
                                $l2_cl = array_values(array_reverse($vchart_data_mry['pricebps']['data']['L2_line_close']));
                            }
                            else {
                                $l2_cl = array_values(array_reverse($vchart_data['pricebps']['data']['L2_line_close']));
                            }
                            
                            $l2_cl_cnt = count($l2_cl);
                            $l2_cl_new = array();
                            foreach($l2_cl as $eVal) {
                                if($eVal == 0 ) $l2_cl_cnt--;
                                $l2_cl_new[] = $eVal;
                            }
                            if($l2_cl_cnt==0) $l2_cl_new = array();
                            ?>
                            <script>
                            var params = [<?php foreach($bvps_key as $val) echo "'".substr($val,0,$dp_year)."',";?>];
                            var value = [{
                                    name: '주당순자산',
                                    type: 'line',
                                    //data: [<?=implode(',',array_values(array_reverse($vchart_data['pricebps']['data']['L1_line_bvps'])))?>],
                                    data: [<?=implode(',',array_values($l1_bv_new))?>],
                                }, {
                                    name: '주가',
                                    type: 'line',
                                    yAxis: 1,
                                   // data: [<?=implode(',',array_values(array_reverse($vchart_data['pricebps']['data']['L2_line_close'])))?>],
                                    data: [<?=implode(',',array_values($l2_cl_new))?>],
                            }];
                            SubSearchCharmFiChart11('containerfinance1_11', value, params);
                            </script>

                            <!-- 종목검색 - 종목진단 - 재무 차트 id = containerfinance1 -->
                            <div class="summary_guide small">
                                <!-- div 사이즈는 big, small  -->
                                <p class="guide">주당순자산은 기업의 장기적인 주가를 이끄는 원동력입니다. 주당순자산(BPS)은 자본총계를 주식수로 나눈 값입니다. 한 주당 주주의 몫이 얼마인지를 나타냅니다.
                                <br/><br/>
                                자본총계는 기본적으로 주주의 몫입니다. 자본총계는 주주가 증자에 참여해 돈을 내는 자본금과 자본잉여금, 순이익을 매년 쌓아 적립한 이익잉여금, 금융상품이나 환율변동 등으로 번 기타포괄이익 등으로 구성됩니다. 기본적으로 사업을 잘해 순이익을 많이 낼수록 자본총계가 빠른 속도로 증가합니다. 이에따라 주가도 오르게 됩니다.
                                <br/><br/>
                                그러나, 미국 기업은 한국 기업에 비해 많은 배당금 지급과 자사주 매입 및 소각을 통해 자본을 크게 늘리지 않는 경우가 많습니다. 이에따라 부채비율(=부채/자본*100%)이나 자기자본이익률(순이익/자본총계*100%)처럼 분모에 자본총계를 넣어 계산하는 투자지표는 한국 기업에 비해 상대적으로 높게 나옵니다. 이런 부분을 감안해 미국 기업의 부채비율, 차입금 비중, 주가순자산배수 등을 판단하는 것이 좋습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                    <!-- //chart_area -->
                </div>
                <!-- //financecachart_area -->
            </div>
            <!-- // tab_diagnosis_area-->
        </div>
        <!-- //sub_mid -->
<?php }else{?>
        <!-- 주요 콘텐츠 -->
        <div class="sub_mid nondata">
            <p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><a href="/<?=HN?>_search/invest_charm/<?=$pri_ticker?>?pn=<?=$part_name;?>&pg=<?=$part_page;?>"><?=$pri_ticker?></a></strong> 종목에서 확인할 수 있습니다.</p>
        </div>
        <!-- //sub_mid nondata -->
<?php }?>