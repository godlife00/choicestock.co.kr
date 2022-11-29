            <?php include_once HT_INC_PATH.'/ticker_submenu.php'; ?>

            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">알고리즘에 따라 투자 로봇이 매일 5종목을 추천합니다. 종목발굴의 용도로 활용하실 수 있습니다. 실시간 리딩은 제공하지 않습니다.</p>
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
                                <?php if($this->session->userdata('user_level') != '9') :?>
                                <?php     if($cnt>4) break; ?>
                                <?php endif; ?>
                                <div class="list">
                                    <div class="game_event">

                                        <div class="title">
                                        <?php if($this->session->userdata('is_paid')===TRUE || ($win==0 && $cnt==0)) :?>
                                        <a href="/<?=HT?>_search/invest_charm/<?=$winner['win_ticker']?>"><?=$winner['tkr_name']?>
                                        <?php else :?>
                                        <a href="javascript:fnSinChung();"><?=iconv_substr($winner['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
                                        <?php endif;?>
                                        </a></div>
                                        <div class="num">
                                            <span><?=$this->common->set_pricepoint(number_format($winner['win_close'], 2), '1')?></span>
                                            <span class="recom">추천가</span>
                                        </div>
                                    </div>

                                    <div class="game_data">
                                        <ul class="score">
                                            <li class="th">투자매력</li>
                                            <li class="td"><span><?=$winner['win_biz_score']?><b>점</b></li>
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
                                            <dd class="prm_lock"><img src="/img/prm_lockW.png" alt="잠김"></dd>
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
            </div> <!-- //sub_mid -->