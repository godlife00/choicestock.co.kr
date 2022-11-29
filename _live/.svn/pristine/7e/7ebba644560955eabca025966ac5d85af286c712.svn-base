            <!-- 주요 콘텐츠 -->
            <div class="search_top searching">
                <!-- 종목명 검색창 -->
                <div class="searchArea">
                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/search/invest_charm/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
                            <span class="sch_title">진단</span>
                            <input type="text" name='keyword' autocomplete="off" placeholder="종목명 또는 심볼을 입력하세요." class="searchInput searchInput_fixed">
                            <input type="image" src="/img/icon_search.png" alt="검색" class="searchBtn">
                        </fieldset>
                    </form>
                </div>
                <!-- //종목명 검색창 -->

                <!-- 검색어 입력시 자동완성 -->
                <div class="sch_autocomplete">
                    <!-- //자동완성 결과 노출 class : _show -->
                    <!-- 검색결과 있을경우 -->
                    <ul id='autocomplete_list'>
                    </ul>

                    <!-- 검색결과 없을경우 -->
                    <div class="no_result" >
                        <p>"<strong></strong>"에 대한 검색결과가 없습니다.</p>
                    </div>
                    <!-- //no_result -->
                </div>
                <!-- //sch_autocomplete -->
            </div>
            <!-- //sub_top -->

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
								<a href="/main/onestop" class="more"><span>원스톱 진단</span><img src="/img/more_yel.png" alt="더보기"></a>
							</div>
							<!-- //one_step -->
							
							<?php if($this->session->userdata('is_paid')===TRUE) :?>

							<?php if(is_array($tab_stock_data) && sizeof($tab_stock_data)>0) :?>
                            <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                <colgroup>
                                    <col width="100px">
                                    <col width="">
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                <?php 
                                    foreach($tab_stock_data as $val) : 
                                        $class = 'decrease';
                                        if($val['ticker']['tkr_rate'] > 0) {
                                            $class = 'increase';
                                        }
                                ?>
                                    <tr>
                                        <td class="title"><a href="/search/invest_charm/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
                                        <td class="num">
                                            <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
                                        </td>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>점</b></span></td>
                                        <td class="num">
											<?php if($val['m_v_fairvalue3']>0) :?>
                                            <span><?=$this->common->set_pricepoint($val['m_v_fairvalue3'], '1');?></span>
                                            <span class="hit">적정주가</span>
											<?php else :?>
                                            <span class="na">N/A</span>
											<?php endif;?>
										</td>
                                    </tr>
                                <?php endforeach; ?>
                                </tbody>
                            </table>
                            <?php else:?>
							<div class="no_data">
                                <p>관심종목의 투자매력 점수와<br>밸류에이션을 쉽게 확인할 수 있습니다.<br><br>
                                    종목을 검색하여 종목명 옆의 하트(♥)를<br>
                                    누르면 관심종목으로 등록됩니다.</p>
                            </div>
                            <?php endif;?>

							<?php endif;?>

                            <?php if($this->session->userdata('is_paid')===TRUE && $myticker===TRUE):?>
                            <div class="btn_list">
                                <a href="/main/myticker">관심종목 관리</a>
                            </div> 
							<?php endif;?>
                            <div class="att_service">
                                <?php /*
								<h3 class="service_title"><?=($this->session->userdata('is_paid')===TRUE) ? '<a href="/member/notice">':''?><strong>관심종목</strong> 알림 서비스를 받아보세요<?=($this->session->userdata('is_paid')===TRUE)?'</a>':''?></h3>
								*/?>
								<h3 class="service_title"><strong>관심종목</strong> 알림 서비스를 받아보세요</h3>
                                <ul class="guide_txt">
                                    <li class="title">ㆍ매일 오전, 관심종목의 새로운 소식이 배달됩니다.</li>
                                    <li class="txt">- 제공서비스 : 관심종목 주가/실적발표/배당, 종목추천/분석 알림 등<br><span style="padding: 0 3px;"></span> (*관심종목 알림은 최대 10개 종목으로 제한됩니다.)</li>
                                    <li class="title">ㆍ초이스스탁US 프리미엄 회원 서비스 입니다. 
									<?php if($this->session->userdata('is_paid')===FALSE) :?><a href="/payment/choice" class="go_mam">[가입하기]</a><?php endif;?>
									</li>
                                    <li class="title">ㆍ알림은 '카카오 알림톡'으로 제공되며, '카카오톡'앱이 필요합니다.</li>
                                </ul>
                                <!-- //guide_txt -->
                            </div>
                            <!-- //att_service -->
						<?php if($this->session->userdata('is_login')===FALSE) : ?>
		                <?php include_once INC_PATH.'/premium_banner.php'; ?>
						<?php endif;?>
                        </div>


                        <!-- 인기종목 -->
                        <div id="tab2" class="tab_content">
                            <div class="">
                                <div class="txt_box">
                                    <p class="txt">투자자가 가장 많이 매매하고 있는 인기종목의 투자매력점수 및 적정주가를 제공합니다.</p>
                                </div>
                                <!-- //txt_box -->
                            </div>

                            <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                <colgroup>
                                    <col width="100px">
                                    <col width="">
                                    <col width="">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                <?php 
                                    foreach($popular_stock_data as $val) : 
                                        $class = 'decrease';
                                        if($val['ticker']['tkr_rate'] > 0) {
                                            $class = 'increase';
                                        }
                                ?>
                                    <tr>
                                        <td class="title"><a href="/search/invest_charm/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
                                        <td class="num">
                                            <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
                                        </td>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>점</b></span></td>
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
                                            <span><a href="/main/service_prm"><img src="/img/prm_lock.png" alt="잠김"></a></span>
                                        </td>
										<?php endif;?>
                                    </tr>
                                <?php endforeach; ?>
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
                                        if($val['ticker']['tkr_rate'] > 0) {
                                            $class = 'increase';
                                        }
                                ?>
                                    <tr>
                                        <td class="title"><a href="/search/invest_charm/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
                                        <td class="num">
                                            <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2');?></span>
                                        </td>
                                        <td class="score"><span><?=$val['m_biz_total_score']?><b>점</b></span></td>
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
                                            <span><a href="/main/service_prm"><img src="/img/prm_lock.png" alt="잠김"></a></span>
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
