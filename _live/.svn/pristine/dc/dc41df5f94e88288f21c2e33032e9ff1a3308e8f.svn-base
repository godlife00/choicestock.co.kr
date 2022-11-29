            <?php include_once HN_INC_PATH.'/ticker_submenu.php'; ?>

            <?php if($tab == '1') :?>
            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">
                            <strong>투자포인트, 추천가, 목표가, 매도가</strong>를 포함한 종목 리포트를 제공합니다.<br>
                            실시간 리딩은 따로 제공하지 않으니, 종목 리포트를 참고하여 목표가, 손절가를 꼭 지켜주시기
                            바랍니다.
                        </p>
                    </div>
                    <!-- //txt_box -->
                </div>
            </div>
            <!-- //sub_top -->
            <?php else :?>
            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">
                            종목추천 및 실시간 리딩 서비스를 제공합니다.<br>
                            매수부터 매도까지 포트폴리오에 필요한 모든 서비스를 제공합니다.
                            <span class="port_time">(*포트 시작 : 2020. 03/01)</span>
                        </p>
                    </div>
                    <!-- //txt_box -->
                </div>
            </div>
            <!-- //sub_top -->
            <?php endif;?>

            <div class="sub_mid eventPicks_area">

                <?php if($tab == '1') : ?>
                    
                    <?php if($is_event === true) : ?>
                    <!--mjm <div class="banner_1yearevent">
                        <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                        <span class="y_box"><img src="/img/banner/img_y_box.png" alt="이벤트"></span>
                        <a href="javascript:fnSinChung();" class="weeks_free">[첫달 900원!]</a>
                    </div>-->
                    <?php else :?>
                    <?php if($this->session->userdata('is_paid')===FALSE && $is_soft === false) :?>
                    <!--mjm <div class="banner_prm">
                        <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                        <a href="/<?=HN?>_main/service_free" class="weeks_free">[첫달 3,000원!]</a>
                    </div>-->
                    <?php endif;?>
                    <?php endif;?>
                <?php endif;?>

                <!-- 포트폴리오 -->
                <div class="ptfo_area">
                    <?php if($tab=='portfolio') :?>
                    <div class="detail_data">
                        <div class="line">
                            <span class="th">편입종목</span>
                            <span class="td"><?=$pf_count?> <i>개</i></span>
                        </div>
                        <div class="line">
                            <span class="th">수익률</span>
                            <span class="td <?=($pf_profit>0)? 'increase':'decrease'?>"><?=$pf_profit;?><b>%</b></span>
                        </div>
                    </div>
                    <?php endif;?>
                    <div class="tabsArea">

                        <?php if($tab=='1') :?>
                        <span class="day"><?=date('y.m/d', strtotime(date('Ymd')))?> 기준</span>
                        <div class="tab_container">
                            <!-- 종목추천 -->
                            <div id="recomm_tab" class="tab_content">
                            <?=$content_html?>
                            </div>
                        </div>
                        <?php else :?>
                        <ul class="tabs recom_tabs">
                            <li class="new_recom active" rel="tab1"><span>편입종목</span></li>
                            <li class="ptfo" rel="tab2"><span>제외종목</li>
                        </ul>
                        <span class="day"><?=date('y.m/d', strtotime(date('Ymd')))?> 기준</span>
                        <div class="tab_container">
                            <!-- 편입종목 -->
                            <div id="tab1" class="tab_content">
                                <!-- 포트폴리오 테이블 -->
                                <table cellspacing="0" border="1" class="tableRanking sum_table">
                                    <colgroup>
                                        <col width="16px">
                                        <col width="">
                                        <col width="">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>주가</th>
                                            <th>목표가</th>
                                            <th>수익률</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php foreach($portfolio_list as $key=>$val) :
                                        if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;
                                        $class = 'decrease';
                                        if($val['rc_rate'] > 0) {
                                            $class = 'increase';
                                        }

                                        if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                                            $val['rc_goal_price'] = $val['rc_adjust_price'];
                                        endif;
                                    ?>
                                        <tr>
                                            <td class="name">
                                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
                                            <a href="javascript:fnSinChung();" class="btn_free md-trigger"><?=iconv_substr($val['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span><span class="ticker"><span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></span></a></td>
                                            <?php else :?>
                                            <a href="/<?=HN?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['rc_ticker']?></span></a></td>
                                            <?php endif;?>
                                            <td class="num">
                                                <span class=""><?=$this->common->set_pricepoint($val['rc_close'], '1')?></span>
                                                <span class="<?=$class?> pp"><?=$this->common->set_pricepoint($val['rc_rate_str'], '2')?></span>
                                            </td>                                            
                                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
                                            <td class="prm_lock"><span><img src="/img/prm_lock.png" alt="잠김"></span></td>
                                            <?php else :?>
                                            <td class="goal"><?=$this->common->set_pricepoint($val['rc_goal_price'], '1')?></td>
                                            <?php endif;?>
                                            
                                            <td class="num">
                                                <span class="<?=($val['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($val['rc_profit_rate'], '1')?><b>%</b></span>
                                            </td>
                                        </tr>
                                    <?php endforeach;?>
                                    </tbody>
                                </table>
                            </div>

                            <!-- 제외종목 -->
                            <div id="tab2" class="tab_content">
                                <!-- 포트폴리오 테이블 -->
                                <table cellspacing="0" border="1" class="tableRanking sum_table">
                                    <colgroup>
                                        <col width="16px">
                                        <col width="">
                                        <col width="">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>추천가</th>
                                            <th>매도가</th>
                                            <th>수익률</th>
                                        </tr>
                                    </thead>
                                    <?php foreach($exclude_list as $key=>$val) :
                                        if($val['rc_display_date'] > date('Y-m-d H:i:s') || in_array($val['rc_ticker'], $pf_ticker_list)) continue;
                                        $class = 'decrease';
                                        if($val['rc_rate'] > 0) {
                                            $class = 'increase';
                                        }

                                        if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                                            $val['rc_goal_price'] = $val['rc_adjust_price'];
                                        endif;
                                    ?>
                                        <tr>
                                            <td class="name">
                                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
                                            <a href="javascript:fnSinChung();" class="btn_free md-trigger"><?=$val['tkr_name']?><span class="ticker"><?=$val['rc_ticker']?></span></a></td>
                                            <?php else :?>
                                            <a href="/<?=HN?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['rc_ticker']?></span></a></td>
                                            <?php endif;?>
                                            <td class="goal"><?=$this->common->set_pricepoint($val['rc_recom_price'], '1')?></td>
                                            <td class="num"><span class="">
                                                <?php if($val['rc_endtype'] == 'SELL') :?>    
                                                <?=$this->common->set_pricepoint($val['rc_mid_price'], '1')?>
                                                <?php elseif($val['rc_endtype'] == 'FAIL') :?>
                                                <?=$this->common->set_pricepoint($val['rc_giveup_price'], '1')?>
                                                <?php else :?>
                                                <?=$this->common->set_pricepoint($val['rc_goal_price'], '1')?>
                                                <?php endif;?>
                                                </span><span class="decrease pp"><?=date('y.m/d', strtotime($val['rc_enddate']))?></span>
                                            </td>
                                            <td class="num">
                                                <span class="<?=($val['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($val['rc_profit_rate'], '1')?><b>%</b></span>
                                            </td>
                                        </tr>
                                    <?php endforeach;?>
                                </table>
                            </div>
                        </div>
                        <?php endif;?>
                    </div>                
                </div>                
                <?php if($tab == '1') :?>
                <div class="btn_more" id="recommend_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>

                <script>
                
                var page = 1;
                var is_loading = false;
                function view_more() {
                    if(is_loading) {
                        return;
                    }
                    is_loading = true;
                    
                    page += 1;
                    $.post('/<?=HN?>_stock/ajax_get_recommend_list', {'page': page}, function(res) {
                        if($.trim(res).length) {
                            $('#recomm_tab').append(res);
                        } else {
                            $('.btn_more').hide();
                        }
                        is_loading = false;
                    });
                }
                
                $(function() {
                    $('.sub_top .chart_area').on('click', function() {
                        location.href = '/<?=HN?>_stock/recommend_view/' + $(this).data('id');
                    });
                });
                </script>
                <?php endif;?>

                <?php if($is_event === true) :?>
                <!--mjm <div class="banner_1yearevent">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                    <span class="y_box"><img src="/img/banner/img_y_box.png" alt="이벤트"></span>
                    <a href="javascript:fnSinChung();" class="weeks_free">[첫달 900원!]</a>
                </div>-->
                <?php else :?>
                    <?php if($is_soft === false) :?>
                    <!--mjm <div class="banner_prm">
                        <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
                        <a href="/<?=HN?>_main/service_free" class="weeks_free">[첫달 3,000원!]</a>
                    </div>-->
                    <?php endif;?>
                <?php endif;?>

                <!-- //btn_more -->
            </div> <!-- //sub_mid -->