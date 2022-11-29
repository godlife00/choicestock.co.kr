			<?php include_once INC_PATH.'/find_submenu.php'; ?>

			<form name="catchForm" method="post" action="/stock/set_catch">
				<input type="hidden" name="catchType" value="<?=$c_type_list?>">
				<input type="hidden" name="catchSize" value="<?=$c_size_list?>">
				<input type="hidden" name="catchSector" value="<?=$c_sector_list?>">
			</form>

            <div class="catch_wrap">
                <p class="catch_guide">나의 취향에 맞는 종목을 추천합니다. 
				<?php //if($this->session->userdata('is_paid')===TRUE) :?>
				<a href="#catch_cncl" class="terms_btn btn_payCan show_pop03" onClick='javascript:fnSetCatch();'>추천종목</a>
				<?php //elseif($this->session->userdata('is_login')===TRUE) :?>
				<!--<a href="#catch_cncl" class="terms_btn btn_payCan show_pop03" onClick="location.href='/main/service_prm'">추천종목</a>-->
				<?php //else :?>
				<!--<a href="#catch_cncl" class="terms_btn btn_payCan show_pop03" onClick="location.href='/member/login?ru=<?=urlencode($_SERVER['REQUEST_URI'])?>'">추천종목</a>-->
				<?php //endif;?>
				</p>
			
	             <div class="chart_catch_wrap" id="autoScroll">
			<?php if($this->session->userdata('is_paid')===TRUE) :?>

				<?php if(is_array($catch_list) && sizeof($catch_list)>0) :?>

				<?php $idx=0; foreach($catch_list as $ticker) :?>
                <div class="chart_catch">
                    <div class="data_area">
                        <h2 class="title"><a href="/search/invest_charm/<?=$ticker['tkr_ticker']?>"><?=$ticker['tkr_name']?></a></h2>
                        <ul class="info">
                            <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                        </ul>
                        <ul class="detail">
                            <li class="num">
                                <span><?=$this->common->set_pricepoint($ticker['tkr_close'], '1');?></span>
                            </li>
                            <li class="per">
		                        <span class="<?=$ticker['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$ticker['tkr_diff_str']?> 
								<span>(<?=$this->common->set_pricepoint($ticker['tkr_rate_str'], '2')?>)</span></span>
                            </li>
                            <li class="day"><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo date('y.m/d', strtotime($ticker['tkr_lastpricedate'])).', ';?> USD</li>
                        </ul>
					    <?php if($ticker['is_recom_ticker']) : ?>
                        <div class="go_page">
                            <a href="<?=$ticker['recom_link']?>"><span class="quarter recom">추천</span></a>
                            <a href="<?=$ticker['recom_link']?>" class="more"><img src="/img/more_white.png" alt="더보기"></a>
                        </div>
						<?php endif ; ?>

                        <div class="area">
                            <div id="top_analy_<?=$ticker['tkr_ticker'];?>" class="containerS1"></div>
							<script>SubAnalyTopChart('top_analy_<?=$ticker['tkr_ticker'];?>', [<?=$ticker['chart_value']?>]);</script>
                            <div class="analysis_score">
                                <span class="score"><strong><?=$ticker['mri']['m_biz_total_score']?></strong> 점</span>
                                <div class="chart_analysis">
                                    <div class="line">
										<?php if($ticker['fairvalue_rate'] >= -5) :?>
                                        <span class="i_graph">
                                            <span class="g_bar"><span class="g_action" style="left: <?=$ticker['fairvalue_rate']?>%;"></span></span>
                                        </span>
										<?php else :?>
										<span class="i_graph no_value">
                                            <span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>
                                        </span>
										<?php endif;?>
                                        <ul class="evaluation">
                                            <li>저</li>
                                            <li>적정가</li>
                                            <li>고</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- //analysis_score -->

                        </div>

                        <ul class="info_icon">
							<li><?=$ticker['tkr_exchange']?></li>
							<?php if($ticker['mri']['m_biz_dividend_score'] >= 16) : ?>
							<li><a href="/stock/recipe/dividend">배당주</a></li>
							<?php endif; ?>
							<?php if($ticker['mri']['m_biz_growth_score'] >= 16) : ?>
							<li><a href="/stock/recipe/growth">성장주</a></li>
							<?php endif; ?>
							<?php if($ticker['mri']['m_biz_moat_score'] >= 16) : ?>
							<li><a href="/stock/recipe/moat">가치주</a></li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('5 - Large','6 - Mega'))) : ?>
							<li>대형주</li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('4 - Mid'))) : ?>
							<li>중형주</li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('1 - Nano','2 - Micro','3 - Small'))) : ?>
							<li>소형주</li>
							<?php endif; ?>
						</ul>
                    </div>
                    <!-- //data_area -->
                    <p class="attention<?=($ticker['like']['mi_like']=='Y') ? ' on':''?>" id="catch_icon_<?=$idx?>" onClick="javascript:fnMyitem('<?=$ticker['tkr_ticker']?>', '<?=urlencode(str_replace('/index.php/', '', $_SERVER["PHP_SELF"]));?>', 'Y', '<?=$idx?>');"><i></i>관심 <span id='catch_count_<?=$idx?>'>(<?=number_format($ticker['like']['total_count'])?>)</span></p>
					<?php
						$tkr_industry = $ticker['tkr_industry'];
						$choice_ticker = '';
						$choice_name = '';
						foreach($ticker_rep as $ind_val) {
							if($tkr_industry==$ind_val['industry'] && $ticker['tkr_name'] != $ind_val['name'] ) {
								$choice_ticker = $ind_val['ticker'];
								$choice_name = $ind_val['name'];
								break;
							}
						}
					?>  
					<?php if($choice_ticker != '' && $choice_name != '') :?>
					<span class="same_selt"><a href="/search/invest_charm/<?=$choice_ticker?>"><?=$choice_name?></a>와(과) 같은 업종입니다</span>
					<?php endif;?>
                </div>
                <!-- //chart_catch -->
				<?php $idx++; endforeach;?>
					<?php if($is_next === true) :?>
					<div class="next"><a href="/stock/add_catch?mode=auto&idx=<?=$idx?>&page=1" class="nextPage">다음 페이지</a></div>
					<?php endif;?>
				<?php else :?>
                <div class="prm_div no_data">
                    <ul class="guide_txt bg_blue">
                        <h3 class="service_title"><strong>취향저격의 투자매력이 높은 종목을 ‘캐치’하세요! </strong></h3>
                        <li class="title">- 종목캐치는 내가 선호하는 종목을 파악하여 유사한 종목을 추천합니다.</li>
                        <li class="title">- 종목캐치의 낯선 종목을 그냥 지나처 버리지 마세요. 나도 몰랐던 취향저격의 종목일 수도 있습니다.</li>
                    </ul>

                    <div class="btnArea">
                        <a href="#catch_cncl" class="btn btn_save show_pop03" onClick='javascript:fnSetCatch();'>취향저격 추천종목<i></i></a>
                    </div>
                </div>
				<?php endif;?>
			<?php else :?>
				<?php if(is_array($catch_list) && sizeof($catch_list)>0) :?>

				<?php $idx=0; foreach($catch_list as $ticker) :?>
                <div class="chart_catch">
                    <div class="data_area">
                        <h2 class="title"><a href="/search/invest_charm/<?=$ticker['tkr_ticker']?>"><?=$ticker['tkr_name']?></a></h2>
                        <ul class="info">
                            <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                        </ul>
                        <ul class="detail">
                            <li class="num">
                                <span><?=$this->common->set_pricepoint($ticker['tkr_close'], '1');?></span>
                            </li>
                            <li class="per">
		                        <span class="<?=$ticker['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$ticker['tkr_diff_str']?> 
								<span>(<?=$this->common->set_pricepoint($ticker['tkr_rate_str'], '2')?>)</span></span>
                            </li>
                            <li class="day"><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo date('y.m/d', strtotime($ticker['tkr_lastpricedate'])).', ';?> USD</li>
                        </ul>
					    <?php if($ticker['is_recom_ticker']) : ?>
                        <div class="go_page">
                            <a href="<?=$ticker['recom_link']?>"><span class="quarter recom">추천</span></a>
                            <a href="<?=$ticker['recom_link']?>" class="more"><img src="/img/more_white.png" alt="더보기"></a>
                        </div>
						<?php endif ; ?>

                        <div class="area">
                            <div id="top_analy_<?=$ticker['tkr_ticker'];?>" class="containerS1"></div>
							<script>SubAnalyTopChart('top_analy_<?=$ticker['tkr_ticker'];?>', [<?=$ticker['chart_value']?>]);</script>
                            <div class="analysis_score">
                                <span class="score"><strong><?=$ticker['mri']['m_biz_total_score']?></strong> 점</span>
                                <div class="chart_analysis">
                                    <div class="line">
										<span class="i_graph graph_prm">
											<span class="g_bar"><span class="g_action" style="left: 50%;"></span></span>
										</span>
                                        <ul class="evaluation">
                                            <li>저</li>
                                            <li>적정가</li>
                                            <li>고</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <!-- //analysis_score -->

                        </div>

                        <ul class="info_icon">
							<li><?=$ticker['tkr_exchange']?></li>
							<?php if($ticker['mri']['m_biz_dividend_score'] >= 16) : ?>
							<li><a href="/stock/recipe/dividend">배당주</a></li>
							<?php endif; ?>
							<?php if($ticker['mri']['m_biz_growth_score'] >= 16) : ?>
							<li><a href="/stock/recipe/growth">성장주</a></li>
							<?php endif; ?>
							<?php if($ticker['mri']['m_biz_moat_score'] >= 16) : ?>
							<li><a href="/stock/recipe/moat">가치주</a></li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('5 - Large','6 - Mega'))) : ?>
							<li>대형주</li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('4 - Mid'))) : ?>
							<li>중형주</li>
							<?php endif; ?>
							<?php if(in_array($ticker['mri']['m_scalemarketcap'], array('1 - Nano','2 - Micro','3 - Small'))) : ?>
							<li>소형주</li>
							<?php endif; ?>
						</ul>
                    </div>
                    <!-- //data_area -->
                    <p class="attention<?=($ticker['like']['mi_like']=='Y') ? ' on':''?>" id="catch_icon_<?=$idx?>" onClick="javascript:fnMyitem('<?=$ticker['tkr_ticker']?>', '<?=urlencode(str_replace('/index.php/', '', $_SERVER["PHP_SELF"]));?>', 'Y', '<?=$idx?>');"><i></i>관심 <span id='catch_count_<?=$idx?>'>(<?=number_format($ticker['like']['total_count'])?>)</span></p>
					<?php
						$tkr_industry = $ticker['tkr_industry'];
						$choice_ticker = '';
						$choice_name = '';
						foreach($ticker_rep as $ind_val) {
							if($tkr_industry==$ind_val['industry'] && $ticker['tkr_name'] != $ind_val['name'] ) {
								$choice_ticker = $ind_val['ticker'];
								$choice_name = $ind_val['name'];
								break;
							}
						}
					?>  
					<?php if($choice_ticker != '' && $choice_name != '') :?>
					<span class="same_selt"><a href="/search/invest_charm/<?=$choice_ticker?>"><?=$choice_name?></a>와(과) 같은 업종입니다</span>
					<?php endif;?>
                </div>
                <!-- //chart_catch -->
				<?php $idx++; endforeach;?>
				<!-- 프리미엄 서비스 부분 -->
				<div class="prm_div weeks_free">
					<div class="box">
						<div class="left">
							<p class="title"><i></i>초이스탁US 프리미엄</p>
							<p class="txt">모든 서비스를 제한없이 이용하실 수 있습니다.</p>
						</div>
						<div class="right">
							<p><a href="/payment/choice" class="btn_free">첫달 3,000원<i></i></a></p>
						</div>
					</div>
				</div>
				<!-- //프리미엄 서비스 부분 -->
				<?php if($is_event === true) :?>
				<!-- 프리미엄 서비스 부분 1주년 이벤트 900원 -->
				<div class="prm_div weeks_free event_900">
					<div class="box">
						<div class="left">
							<p class="title"><i></i>초이스스탁US 프리미엄</p>
							<p class="txt">모든 서비스를 제한없이 이용하실 수 있습니다.</p>
						</div>
						<div class="right">
							<p><a href="/payment/choice" class="btn_900">첫달 900원<i></i></a></p>
						</div>
					</div>
				</div>
				<!-- //프리미엄 서비스 부분 1주년 이벤트 900원 -->			
				<?php endif;?>
				<?php else:?>
                <div class="prm_div no_data">
                    <ul class="guide_txt bg_blue">
                        <h3 class="service_title"><strong>취향저격의 투자매력이 높은 종목을 ‘캐치’하세요! </strong></h3>
                        <li class="title">- 종목캐치는 내가 선호하는 종목을 파악하여 유사한 종목을 추천합니다.</li>
                        <li class="title">- 종목캐치의 낯선 종목을 그냥 지나처 버리지 마세요. 나도 몰랐던 취향저격의 종목일 수도 있습니다.</li>
                    </ul>

                    <div class="btnArea">
                        <a href="#catch_cncl" class="btn btn_save show_pop03" onClick='javascript:fnSetCatch();'>취향저격 추천종목<i></i></a>
                    </div>
                </div>		
				<?php endif;?>
			<?php endif;?>
            </div>

			</div>
            <!-- //catch_wrap -->

	<?php //if($this->session->userdata('is_paid')===TRUE) :?>
    <!-- Modal popup -->
    <!-- 관심종목 찾아보기(유형선택) -->
    <div class="setting_pop catch_edt catch_edt_01">
        <div class="bg"></div>
        <div id="catch_cncl" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                <h1 class="pop_title">취향저격 종목캐치</h1>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <p class="guide">선호하는 종목의 유형을 선택해주세요.</p>
                <div class="catch_from" id="catchType">
                    <div class="label<?=(isset($c_type[0])&&$c_type[0]=='1')? ' active':''?>" value='1' id="catchType_div_0" onClick="javascript:fnCatchType(this);">
                        <p class="label_chk">월세처럼 안정적인 배당을 원해요. 배당주</p>
                    </div>
                    <div class="label<?=(isset($c_type[1])&&$c_type[1]=='1')? ' active':''?>" value='1' id="catchType_div_1" onClick="javascript:fnCatchType(this);">
                        <p class="label_chk">이익이 늘고 있는 기업에 관심있어요. 성장주</p>
                    </div>
                    <div class="label<?=(isset($c_type[2])&&$c_type[2]=='1')? ' active':''?>" value='1' id="catchType_div_2" onClick="javascript:fnCatchType(this);">
                        <p class="label_chk">분야 1등 기업에 투자하고 싶어요. 가치주</p>
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="#" class="btn btn_cncl"><i></i>이전</a>
                    <a href="#" class="btn btn_save terms_btn btn_payCan show_pop04" onClick="javascript:fnNextStep('1');">다음<i></i></a>
                </div>

            </div>
        </div>
    </div>
    <!-- //setting_pop pay_edt -->

    <!-- 관심종목 찾아보기(규모선택) -->
    <div class="setting_pop catch_edt catch_edt_02">
        <div class="bg"></div>
        <div id="catch_cncl" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                <h1 class="pop_title">관심종목 찾아보기</h1>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <p class="guide">선호하는 종목의 규모를 선택해주세요.(복수선택가능)</p>
                <div class="catch_from" id="catchSize">
                    <div class="label<?=(isset($c_size[0])&&$c_size[0]=='1')? ' active':''?>" value='1' id="catchSize_div_0">
                        <p class="label_chk">글로벌 기업 구글, 애플과 같은 대형주</p>
                    </div>
                    <div class="label<?=(isset($c_size[1])&&$c_size[1]=='1')? ' active':''?>" value='1' id="catchSize_div_1">
                        <p class="label_chk">제2의 넷플릭스와 같은 잠재력의 중형주</p>
                    </div>
                    <div class="label<?=(isset($c_size[2])&&$c_size[2]=='1')? ' active':''?>" value='1' id="catchSize_div_2">
                        <p class="label_chk">10배 성장을 꿈꾸는 우량 스몰캡 소형주</p>
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="#" class="btn btn_cncl show_pop03" onClick="javascript:fnPreStep('1');"><i></i>이전</a>
                    <a href="#" class="btn btn_save terms_btn btn_payCan show_pop05" onClick="javascript:fnNextStep('2');">다음<i></i></a>
                </div>

            </div>
        </div>
    </div>
    <!-- //setting_pop pay_edt -->

    <!-- 관심종목 찾아보기(종목선택) -->
    <div class="setting_pop catch_edt catch_edt_03">
        <div class="bg"></div>
        <div id="catch_cncl" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                <h1 class="pop_title">관심종목 찾아보기</h1>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <p class="guide">관심있는 종목을 선택해주세요(복수선택가능)</p>
                <!-- 종목선택의 경우 class = event_sct 추가 -->
                <div class="catch_from event_sct" id="catchSector1">
                    <div class="label<?=(isset($c_sector[0])&&$c_size[0]=='1')? ' active':''?>" value='1' id="catchSec_div_0">
                        <p class="label_chk">
                            <span class="catch_img AMZN" id='catch_AMZN' value='1'><img src="/img/catch/AMZN.png" alt="아마존"></span>
                            <span class="name">아마존</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[1])&&$c_size[1]=='1')? ' active':''?>" value='1' id="catchSec_div_1">
                        <p class="label_chk">
                            <span class="catch_img BA"><img src="/img/catch/BA.png" alt="보잉"></span>
                            <span class="name">보잉</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[2])&&$c_size[2]=='1')? ' active':''?>" value='1' id="catchSec_div_2">
                        <p class="label_chk">
                            <span class="catch_img NFLX"><img src="/img/catch/NFLX.png" alt="넷플릭스"></span>
                            <span class="name">넷플릭스</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[3])&&$c_size[3]=='1')? ' active':''?>" value='1' id="catchSec_div_3">
                        <p class="label_chk">
                            <span class="catch_img WMT"><img src="/img/catch/WMT.png" alt="월마트"></span>
                            <span class="name">월마트</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[4])&&$c_size[4]=='1')? ' active':''?>" value='1' id="catchSec_div_4">
                        <p class="label_chk">
                            <span class="catch_img KO"><img src="/img/catch/KO.png" alt="코카콜라"></span>
                            <span class="name">코카콜라</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[5])&&$c_size[5]=='1')? ' active':''?>" value='1' id="catchSec_div_5">
                        <p class="label_chk">
                            <span class="catch_img JNJ"><img src="/img/catch/JNJ.png" alt="존슨앤존슨"></span>
                            <span class="name">존슨앤존슨</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[6])&&$c_size[6]=='1')? ' active':''?>" value='1' id="catchSec_div_6">
                        <p class="label_chk">
                            <span class="catch_img XOM"><img src="/img/catch/XOM.png" alt="엑슨모빌"></span>
                            <span class="name">엑슨모빌</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[7])&&$c_size[7]=='1')? ' active':''?>" value='1' id="catchSec_div_7">
                        <p class="label_chk">
                            <span class="catch_img AMT"><img src="/img/catch/AMT.png" alt="아메리칸타워"></span>
                            <span class="name">아메리칸타워</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[8])&&$c_size[8]=='1')? ' active':''?>" value='1' id="catchSec_div_8">
                        <p class="label_chk">
                            <span class="catch_img NEE"><img src="/img/catch/NEE.png" alt="넥스트에라"></span>
                            <span class="name">넥스트에라</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[9])&&$c_size[9]=='1')? ' active':''?>" value='1' id="catchSec_div_9">
                        <p class="label_chk">
                            <span class="catch_img TSLA"><img src="/img/catch/TSLA.png" alt="테슬라"></span>
                            <span class="name">테슬라</span>
                        </p>
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="#" class="btn btn_cncl show_pop04" onClick="javascript:fnPreStep('2');"><i></i>이전</a>
                    <a href="#" class="btn btn_save terms_btn btn_payCan show_pop05_2" onClick="javascript:fnNextStep('3');">다음<i></i></a>
                </div>

            </div>
        </div>
    </div>
    <!-- //setting_pop pay_edt -->

    <!-- 관심종목 찾아보기(종목선택) -->
    <div class="setting_pop catch_edt catch_edt_03_2">
        <div class="bg"></div>
        <div id="catch_cncl" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                <h1 class="pop_title">관심종목 찾아보기</h1>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <p class="guide">관심있는 종목을 선택해주세요(복수선택가능)</p>
                <!-- 종목선택의 경우 class = event_sct 추가 -->
                <div class="catch_from event_sct" id="catchSector2">
                    <div class="label<?=(isset($c_sector[10])&&$c_size[10]=='1')? ' active':''?>" value='1' id="catchSec_div_10">
                        <p class="label_chk">
                            <span class="catch_img MSFT"><img src="/img/catch/MSFT.png" alt="마이크로소프트"></span>
                            <span class="name">마이크로소프트</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[11])&&$c_size[11]=='1')? ' active':''?>" value='1' id="catchSec_div_11">
                        <p class="label_chk">
                            <span class="catch_img PEP"><img src="/img/catch/PEP.png" alt="펩시코"></span>
                            <span class="name">펩시코</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[12])&&$c_size[12]=='1')? ' active':''?>" value='1' id="catchSec_div_12">
                        <p class="label_chk">
                            <span class="catch_img SBUX"><img src="/img/catch/SBUX.png" alt="스타벅스"></span>
                            <span class="name">스타벅스</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[13])&&$c_size[13]=='1')? ' active':''?>" value='1' id="catchSec_div_13">
                        <p class="label_chk">
                            <span class="catch_img T"><img src="/img/catch/T.png" alt="AT&T"></span>
                            <span class="name">AT&T</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[14])&&$c_size[14]=='1')? ' active':''?>" value='1' id="catchSec_div_14">
                        <p class="label_chk">
                            <span class="catch_img BRK"><img src="/img/catch/BRK.png" alt="버크셔해서웨이"></span>
                            <span class="name">버크셔해서웨이</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[15])&&$c_size[15]=='1')? ' active':''?>" value='1' id="catchSec_div_15">
                        <p class="label_chk">
                            <span class="catch_img NEM"><img src="/img/catch/NEM.png" alt="뉴몬트"></span>
                            <span class="name">뉴몬트</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[16])&&$c_size[16]=='1')? ' active':''?>" value='1' id="catchSec_div_16">
                        <p class="label_chk">
                            <span class="catch_img V"><img src="/img/catch/V.png" alt="비자"></span>
                            <span class="name">비자</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[17])&&$c_size[17]=='1')? ' active':''?>" value='1' id="catchSec_div_17">
                        <p class="label_chk">
                            <span class="catch_img MMM"><img src="/img/catch/MMM.png" alt="쓰리엠"></span>
                            <span class="name">쓰리엠</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[18])&&$c_size[18]=='1')? ' active':''?>" value='1' id="catchSec_div_18">
                        <p class="label_chk">
                            <span class="catch_img BAC"><img src="/img/catch/BAC.png" alt="뱅크오브아메리카"></span>
                            <span class="name">뱅크오브아메리카</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[19])&&$c_size[19]=='1')? ' active':''?>" value='1' id="catchSec_div_19">
                        <p class="label_chk">
                            <span class="catch_img CVX"><img src="/img/catch/CVX.png" alt="쉐브론"></span>
                            <span class="name">쉐브론</span>
                        </p>
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="#" class="btn btn_cncl show_pop05" onClick="javascript:fnPreStep('3');"><i></i>이전</a>
                    <a href="#" class="btn btn_save terms_btn btn_payCan show_pop05_3" onClick="javascript:fnNextStep('4');">다음<i></i></a>
                </div>

            </div>
        </div>
    </div>
    <!-- //setting_pop pay_edt -->

    <!-- 관심종목 찾아보기(종목선택) -->
    <div class="setting_pop catch_edt catch_edt_03_3">
        <div class="bg"></div>
        <div id="catch_cncl" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                <h1 class="pop_title">관심종목 찾아보기</h1>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <p class="guide">관심있는 종목을 선택해주세요(복수선택가능)</p>
                <!-- 종목선택의 경우 class = event_sct 추가 -->
                <div class="catch_from event_sct" id="catchSector3">
                    <div class="label<?=(isset($c_sector[20])&&$c_size[20]=='1')? ' active':''?>" value='1' id="catchSec_div_20">
                        <p class="label_chk">
                            <span class="catch_img AAPL"><img src="/img/catch/AAPL.png" alt="애플"></span>
                            <span class="name">애플</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[21])&&$c_size[21]=='1')? ' active':''?>" value='1' id="catchSec_div_21">
                        <p class="label_chk">
                            <span class="catch_img VZ"><img src="/img/catch/VZ.png" alt="버라이즌"></span>
                            <span class="name">버라이즌</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[22])&&$c_size[22]=='1')? ' active':''?>" value='1' id="catchSec_div_22">
                        <p class="label_chk">
                            <span class="catch_img UNH"><img src="/img/catch/UNH.png" alt="유나이티드헬스그룹"></span>
                            <span class="name">유나이티드헬스그룹</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[230])&&$c_size[23]=='1')? ' active':''?>" value='1' id="catchSec_div_23">
                        <p class="label_chk">
                            <span class="catch_img PKX"><img src="/img/catch/PKX.png" alt="포스코"></span>
                            <span class="name">포스코</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[24])&&$c_size[24]=='1')? ' active':''?>" value='1' id="catchSec_div_24">
                        <p class="label_chk">
                            <span class="catch_img RDS"><img src="/img/catch/RDS.png" alt="로열더치셀"></span>
                            <span class="name">로열더치셀</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[25])&&$c_size[25]=='1')? ' active':''?>" value='1' id="catchSec_div_25">
                        <p class="label_chk">
                            <span class="catch_img O"><img src="/img/catch/O.png" alt="리얼티인컴"></span>
                            <span class="name">리얼티인컴</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[26])&&$c_size[26]=='1')? ' active':''?>" value='1' id="catchSec_div_26">
                        <p class="label_chk">
                            <span class="catch_img HUM"><img src="/img/catch/HUM.png" alt="휴매나"></span>
                            <span class="name">휴매나</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[27])&&$c_size[27]=='1')? ' active':''?>" value='1' id="catchSec_div_27">
                        <p class="label_chk">
                            <span class="catch_img DUK"><img src="/img/catch/DUK.png" alt="듀크"></span>
                            <span class="name">듀크</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[28])&&$c_size[28]=='1')? ' active':''?>" value='1' id="catchSec_div_28">
                        <p class="label_chk">
                            <span class="catch_img CSGP"><img src="/img/catch/CSGP.png" alt="코스타"></span>
                            <span class="name">코스타</span>
                        </p>
                    </div>
                    <div class="label<?=(isset($c_sector[29])&&$c_size[29]=='1')? ' active':''?>" value='1' id="catchSec_div_29">
                        <p class="label_chk">
                            <span class="catch_img BKNG"><img src="/img/catch/BKNG.png" alt="부킹홀딩스"></span>
                            <span class="name">부킹홀딩스</span>
                        </p>
                    </div>
                </div>

                <div class="btnArea payBtn">
                    <a href="#" class="btn btn_cncl show_pop05_2" onClick="javascript:fnPreStep('4');"><i></i>이전</a>
                    <a href="#" class="btn btn_save terms_btn btn_payCan" onClick="javascript:fnCatchSave();">확인<i></i></a>
                </div>
				
				<div id="loading" style="display: none;"><img src="/img/loading.gif" alt="Loading"/></div>

            </div>
        </div>
    </div>
    <!-- //setting_pop pay_edt -->
	<?php //endif;?>

<script>
$(document).ready(function () {
	$('#autoScroll').jscroll({
		autoTrigger: true,
		loadingHtml: '<div class="next"><img src="/img/loading.gif" alt="Loading" /></div>',
		nextSelector: 'a.nextPage:last'
    });
});
</script>
<style>
.next {
    text-align: center;
    margin: 10px 0;
}
</style>