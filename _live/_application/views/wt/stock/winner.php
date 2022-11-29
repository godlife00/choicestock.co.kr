            <?php include_once WT_INC_PATH.'/ticker_submenu.php'; ?>

            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">알고리즘에 따라 투자 로봇이 매일 5종목을 추천합니다. 종목탐색의 용도로 활용하실 수 있습니다. 실시간 리딩은 제공하지 않습니다. <span class="guide">(*추천가 대비 10% 하락시 손절매도)</span><br>
                        <span class="guide_cho">※ 종목은 (주)데이터히어로의 빅데이터 분석과 알고리즘에 의해 제공됩니다.</span>
						</p>
                        <span class="dh_patent">*승부주 특허 출원 (10-2020-0125384)</span>
                    </div>
                    <!-- //txt_box -->
                </div>
            </div>
            <!-- //sub_top -->

            <div class="sub_mid gamePicks_area">

                <div class="swiper-container gameSwiper">
                    <div class="swiper-wrapper">
                        <?php $win=0; foreach($winner_list as $key=>$val) :?>
                        <div class="swiper-slide">
                            <p class="selt_calendar"><?=date('Y. m월 d일', strtotime($key))?> (<?=$yoil[date("w",strtotime($key))]?>)</p>
                            <div class="game_list">
                                <ul class="guide">
                                    <li>*주가추세 - 단기/중기/장기</li>
                                </ul>
                                <?php $cnt=0; foreach($val as $winner) :?>
                                <?php //if($this->session->userdata('user_level') != '9') :?>
                                <?php     if($cnt>4) break; ?>
                                <?php //endif; ?>
                                <div class="list">
                                    <div class="game_event">

                                        <div class="title">
                                        <?php if($this->session->userdata('is_paid')===TRUE || ($win==0 && $cnt==0)) :?>
                                        <a href="/<?=WT?>_search/summary/<?=$winner['win_ticker']?>"><?=$winner['tkr_name']?>
                                        <?php else :?>
                                        <a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=iconv_substr($winner['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
                                        <?php endif;?>
                                        </a></div>
                                        <div class="num">
                                            <span><?=$this->common->set_pricepoint(number_format($winner['win_close'], 2), '1')?></span>
                                            <span class="recom">추천가</span>
                                        </div>
                                    </div>

                                    <div class="game_data">
                                        <ul class="score">
                                            <li class="th">투자매력<?=($cnt==0) ? ' <span class="txt_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span>':''?></li>
                                            <li class="td"><span><?=$winner['win_biz_score']?><b>P</b></li>
                                        </ul>
                                        <ul class="num">
                                            <li class="th">목표가</li>
                                            <li class="td"><span>
                                            <?php if($this->session->userdata('is_paid')===TRUE || ($win==0 && $cnt==0)) :?>
                                            <?php if(isset($winner['win_fairvalue']) && $winner['win_fairvalue']>0 && round((($winner['win_fairvalue']/$winner['win_close'])-1)*100) >= 30) :?>
                                            <?=$this->common->set_pricepoint(number_format($winner['win_fairvalue'], 2), '1')?>
                                            <?php else :?>
                                            <?=$this->common->set_pricepoint(number_format($winner['win_rc_price'], 2), '1')?>
                                            <?php endif;?>
                                            <?php else :?>
                                            <dd class="prm_lock"><img src="/img/prm_lockwowtv.svg" alt="잠김"></dd>
                                            <?php endif;?>
                                            </span></li>
                                        </ul>
                                        <ul class="trans">
                                            <li class="th">주가추세</li>
                                            <li class="td">
                                                <!-- up : 강세, down : 약세, trans : 중립 -->
                                                <div>
                                                    <i class="trans_icn <?=$win_trend[$winner['win_short']]?>"></i>
                                                </div>
                                                <div>
                                                    <i class="trans_icn <?=$win_trend[$winner['win_medium']]?>"></i>
                                                </div>
                                                <div>
                                                    <i class="trans_icn <?=$win_trend[$winner['win_long']]?>"></i>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <?php $cnt++; endforeach;?>
                            </div>
                            <!-- //game_list -->
                        </div>
                        <?php $win++; endforeach;?>
                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination"></div>
                    <!-- Add Arrows -->
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <div class="guide_box">
                    <span class="clse">닫기</span>
                    <p class="txt"><strong>투자매력 포인트</strong>는 해당 종목의 우량주 여부를 판단하는데 도움을 드립니다.</p>
                    <p class="txt">10년 이상의 금융 빅데이터에서 우량주 발굴을 위해 22개 요인(Factor)을 종목별로 분석하고, 동종업종내 경쟁사와 비교합니다.</p>
                    <ul>
						<li class="list_txt">투자매력 점수는 높을수록 매력적인 기업이며, 65P(상위 20%) 이상이면 우량 기업으로 판단합니다.</li>
						<li class="list_txt">투자매력 세부 항목인 독점력, 수익성, 안전성, 성장성, 현금창출력, 미래성장성으로 별점(★) 5점 만점에 3점 이상이면 각 항목을 통과한 것으로 판단합니다.</li>
						<li class="list_txt">세부 항목 평가에서 별점 0~1점을 받았다면 위험 요인으로, 투자 판단시 유의해서 봐야 합니다.</li>                                        
						<li class="list_txt">우량주 여부를 판단한 후에는 적정주가로 저평가 여부를 확인하세요.</li>
                    </ul>
                </div>
            </div> <!-- //sub_mid -->