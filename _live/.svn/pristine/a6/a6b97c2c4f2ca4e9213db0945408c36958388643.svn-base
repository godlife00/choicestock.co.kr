            <?php include_once HN_INC_PATH.'/ticker_submenu.php'; ?>

            <?php if($tab == '1') :?>
            <div class="sub_top">
                <div class="">
					<div class="txt_box">
                        <p class="txt">                            
                            투자포인트, 추천가, 목표가, 매도가를 포함한 <strong>매매전략을 제공</strong>합니다. 종목추천 주기는 주 <strong>5회 (월~금)</strong>입니다.
                        </p>
                    </div>
                    <!-- //txt_box -->
                </div>
            </div>
            <!-- //sub_top -->

            <div class="sub_mid bandchart_more">
                <p><i></i>종목추천&포트폴리오 운영안내 <a href="/<?=HN?>_stock/recommend/portfolio#more" class="more">자세히</a></p>                
            </div>

            <?php else :?>
            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">                            
                            종목추천 및 실시간 리딩 서비스를 제공합니다.<br>
                            종목 당 투자 비중은 3% 입니다. 매수부터 매도까지 포트폴리오에 필요한 모든 서비스를 제공합니다.<br>
                            <span class="port_time">(*포트 시작 : 2020. 06/30)</span>
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

                    <div class="sub_mid bandchart_more">
                        <p><i></i>종목추천&포트폴리오 운영안내 <a
                                href="#more" class="more">자세히</a></p>
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
                            <li class="ptfo active" rel="tab1"><span>수익률</span></li>
                            <li class="ptfo" rel="tab2"><span>최근편입</li>
                            <li class="ptfo" rel="tab3"><span>제외종목</li>
                        </ul>
                        <span class="day"><?=date('y.m/d', strtotime(date('Ymd')))?> 기준</span>
                        <div class="tab_container">
                            <!-- 수익률 -->
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
                                    <?php $cnt=0; foreach($portfolio_list as $key=>$val) :
                                        if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;
                                        $class = 'decrease';
                                        if($val['rc_rate'] >= 0) {
                                            $class = 'increase';
                                        }

                                        if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                                            $val['rc_goal_price'] = $val['rc_adjust_price'];
                                        endif;
                                    ?>
                                        <tr>
                                            <td class="name">
                                            <?php if($this->session->userdata('is_paid')===FALSE && $cnt>1) :?>
                                            <a href="javascript:fnSinChung();" class="btn_free md-trigger"><?=iconv_substr($val['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span><span class="ticker"><span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></span></a></td>
                                            <?php else :?>
                                            <a href="/<?=HN?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['rc_ticker']?></span></a></td>
                                            <?php endif;?>
                                            <td class="num">
                                                <span class=""><?=$this->common->set_pricepoint($val['rc_close'], '1')?></span>
                                                <span class="<?=$class?> pp"><?=$this->common->set_pricepoint($val['rc_rate_str'], '2')?></span>
                                            </td>                                            
                                            <?php if($this->session->userdata('is_paid')===FALSE && $cnt>1) :?>
                                            <td class="prm_lock"><span><img src="/img/prm_lock.png" alt="잠김"></span></td>
                                            <?php else :?>
                                            <td class="goal"><?=$this->common->set_pricepoint($val['rc_goal_price'], '1')?></td>
                                            <?php endif;?>
                                            
                                            <td class="num">
                                                <span class="<?=($val['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($val['rc_profit_rate'], '1')?><b>%</b></span>
                                            </td>
                                        </tr>
                                    <?php $cnt++; endforeach;?>
                                    </tbody>
                                </table>
                            </div>

                            <!-- 최근편입 -->
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
                                            <th>주가</th>
                                            <th>목표가</th>
                                            <th>수익률</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    <?php $cnt=0; foreach($portfolio_recent as $key=>$val) :
                                        if($val['rc_display_date'] > date('Y-m-d H:i:s')) continue;
                                        $class = 'decrease';
                                        if($val['rc_rate'] >= 0) {
                                            $class = 'increase';
                                        }

                                        if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                                            $val['rc_goal_price'] = $val['rc_adjust_price'];
                                        endif;
                                    ?>
                                        <tr>
                                            <td class="name">
                                            <?php if($this->session->userdata('is_paid')===FALSE && $cnt>1) :?>
                                            <a href="javascript:fnSinChung();" class="btn_free md-trigger"><?=iconv_substr($val['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span><span class="ticker"><span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span></span></a></td>
                                            <?php else :?>
                                            <a href="/<?=HN?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['rc_ticker']?></span></a></td>
                                            <?php endif;?>
                                            <td class="num">
                                                <span class=""><?=$this->common->set_pricepoint($val['rc_close'], '1')?></span>
                                                <span class="<?=$class?> pp"><?=$this->common->set_pricepoint($val['rc_rate_str'], '2')?></span>
                                            </td>                                            
                                            <?php if($this->session->userdata('is_paid')===FALSE && $cnt>1) :?>
                                            <td class="prm_lock"><span><img src="/img/prm_lock.png" alt="잠김"></span></td>
                                            <?php else :?>
                                            <td class="goal"><?=$this->common->set_pricepoint($val['rc_goal_price'], '1')?></td>
                                            <?php endif;?>
                                            
                                            <td class="num">
                                                <span class="<?=($val['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($val['rc_profit_rate'], '1')?><b>%</b></span>
                                            </td>
                                        </tr>
                                    <?php $cnt++; endforeach;?>
                                    </tbody>
                                </table>
                            </div>

                            <!-- 제외종목 -->
                            <div id="tab3" class="tab_content">
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
									<?php $dup_check = array();?>
                                    <?php foreach($exclude_list as $key=>$val) :
										$exclude_dup = $val['rc_ticker'].'|'.$val['rc_profit_rate'];
										if($val['rc_display_date'] > date('Y-m-d H:i:s') || in_array($exclude_dup, $dup_check)) continue;
									    
										$dup_check[] = $val['rc_ticker'].'|'.$val['rc_profit_rate'];

										$class = 'decrease';
                                        if($val['rc_rate'] >= 0) {
                                            $class = 'increase';
                                        }

                                        if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :
                                            $val['rc_goal_price'] = $val['rc_adjust_price'];
                                        endif;
                                    ?>
                                        <tr<?=($val['rc_profit_rate']<0) ? ' class="hide_line"':''?>>
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
                                <div class="btn_more show_table show">
                                    <span>더보기</span>                                    
                                </div>
                                <!-- //btn_more -->
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

				<?php if($tab=='portfolio') :?>
				<!-- bandchart_sume -->
				<div class="bandchart_sume" id="more">

					<div class="box info">
						<p><i></i>‘종목추천&포트폴리오’는 금융 빅 데이터 분석과 알고리즘에 따라 저평가 우량주를 최적의 시점에 매매할 수 있도록 도움을 드리는 서비스입니다.</p>
					</div>
					<!-- //box -->

					<div class="box sum">
						<p class="title">종목추천&포트폴리오 서비스는</p>
						<p class="txt">매일 미국주식 5,700여개 종목에 대한 실적, 재무, 적정주가, 주가추세 분석을 통해 최고의 주식을 발굴합니다. </p>
						<ul>
							<li>기업의 수익성, 성장성, 안전성, 독점력 등을 평가하고 최고의 우량주를 발굴합니다.</li>
							<li>자체 개발한 적정주가 산정 알고리즘에 따라 최적의 적정주가를 계산합니다.</li>
							<li>주가가 빠르게 상승할 가능성이 있는지, 단기/중기/장기 주가 추세 분석을 통해 최적의 매매 시점을 알려 드립니다. </li>
						</ul>                        
					</div>
					<!-- //box -->

					<div class="box rule">
						<p class="title">[운영원칙]</p>
						<ul>
							<li>종목 추천은 주 5회(월~금) 진행합니다.</li>
							<li>포트폴리오 종목별 투자비중은 3%입니다.</li>
							<li>포트폴리오 최대 보유 종목수는 33종목입니다.(장기보유 9종목, 3개월 보유 24종목) 단, 목표가/손절가 도달시 일괄 매도를 원칙으로 합니다.</li>
							<li>CNN의 주식시장 탐욕, 공포 지수 등을 활용해 주식과 현금 비중을 조절합니다.</li>
						</ul>
					</div>
					<!-- //box -->
				</div>
				<!-- //bandchart_sume -->
				<?php endif; ?>

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