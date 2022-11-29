                                <?php if($type == 'earnings') :?>
                                    <?php foreach($list['recent_report'] as $key => $val) : ?>

                                        <div class="area">
                                            <ul class="list">
                                                <li class="title"><a href="/<?=HN?>_search/invest_charm/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?></a></li>
                                                <li class="sum"><?=$val['tkr_ticker']?><span class="update"><?=date('m/d', strtotime($val['sf1_lastupdated']))?></span></li>
                                                <li class="num">
                                                    <span><?=$this->common->set_pricepoint($val['tkr_close'], '1')?></span>
                                                    <span class="<?=($val['tkr_rate'] > 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
                                                </li>
                                            </ul>

                                            <div class="analysis_score">
                                                <!-- 실적발표 -->
                                                <div class="result_score">
                                                    <span class="num"><?=number_format($val['sf1_netinccmnusd']/1000000)?> <span class="hit">백만</span></span>                                
                                                </div>
                                                <!-- //실적발표 -->
                                                <span class="rank <?=($list['recent_report_rates_pm'][$val['tkr_ticker']] > 0) ? 'increase' : 'decrease'?>"><?=$list['recent_report_rates'][$val['tkr_ticker']]?></span>
                                            </div>
                                            <!-- //analysis_score -->
                                        </div>
                                    <?php endforeach;?>
                                <?php else :?>
                                    <?php foreach($list as $key => $val) : ?>
                                    <div class="area">
                                        <ul class="list">
                                            <li class="title"><a href="/<?=HN?>_search/invest_charm/<?=$val['m_ticker']?>"><?=$val['m_korname']?></a></li>
                                            <li class="sum"><?=$val['m_ticker']?></li>
                                            <li class="num">
                                                <span><?=$this->common->set_pricepoint(number_format($val['tkr_close'], 2), '1')?></span>
                                                <span class="<?=$val['tkr_diff'] > 0 ? 'in' : 'de'?>crease"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
                                            </li>
                                        </ul>
                                        <div class="analysis_score">
                                            <div class="star_area">
                                                <div class="starRev">
                                                <?php 
                                                    $stars = 0;
                                                    $price = 0;
                                                    if($type == 'dividend') {
                                                        $stars = $val['m_biz_dividend_stars'];
                                                        $price = number_format($val['sf1_divyield']*100, 2);
                                                        $sign = '<b>%</b>';

                                                    } else if($type == 'growth') {
                                                        $stars = $val['m_biz_growth_stars'];
                                                        $price = number_format($val['m_g_epsgr'], 2);
                                                        $sign = '<b>%</b>';

                                                    } else if($type == 'moat') {
                                                        $stars = $val['m_biz_moat_stars'];
                                                        $price = number_format($val['sf1_opmargin'], 2);
                                                        $sign = '<b>%</b>';

                                                    } else if($type == 'total_score') {
                                                        $stars = $val['m_biz_total_score'] / 20;
                                                        $price = number_format($val['m_g_roe'], 2);
                                                        $sign = '<b>%</b>';
                                                    }

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
                                            </div>
                                            <!--<span class="rank">DY 상위 1.2%</span>-->
                                            <span class="rank"><?=$price?><b>%</b></span>
                                        </div>
                                        <!-- //analysis_score -->
                                    </div>
                                    <?php endforeach; ?>
                                <?php endif;?>
