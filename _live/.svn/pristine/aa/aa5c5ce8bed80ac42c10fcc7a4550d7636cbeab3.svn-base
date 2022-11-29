            <div class="main_mid event_recipe">
                <div class="tabsArea">
                    <ul class="tabs recipe_tabs">
                        <li class="active" rel="tab1"><span>급등주</span></li>
                        <li rel="tab2"><span>최근실적</span></li>
                        <li rel="tab3"><span>관심TOP50</span></li>
                        <li rel="tab4"><span>배당주</span></li>
                        <!--<li rel="tab5"><span>성장주</span></li>
                        <li rel="tab6"><span>슈퍼스톡</span></li>
                        <li rel="tab7"><span>독점주</span></li>-->
                    </ul>

                    <div class="tab_container">
                        <!-- 급등주 -->
                        <div id="tab1" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li>1개월간 상승률</li>
                                    <li>주가추이</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
										<?php foreach($soaring as $val):?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=MR?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
											<td class="num">
                                                <span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1');?></span>
                                            </td>
                                            <td class="num dod">
                                                <span class="<?=$val['diff'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['diff'], '2')?>%</span>
                                            </td>
											<?php
											if($val['winner']['win_short'] == 'W') {
												$win_class = 'down';
												$win_title = '약세';
											}
											else if($val['winner']['win_short'] == 'N') {
												$win_class = 'trans';
												$win_title = '중립';
											}
											else {
												$win_class = 'up';
												$win_title = '강세';
											}											
											?>
                                            <td class="trans <?=$win_class?>"><i></i><span><?=$win_title?></span></td>
                                        </tr>
										<?php endforeach;?>
                                    </tbody>
                                </table>
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                <div class="table_btmarea">
                                    <a href="/<?=MR?>_stock/recipe/soaring" class="more">더보기<i></i></a>
                                </div>
								<?php endif;?>
                                <!-- //table_btmarea -->
                            </div>
                        </div>

                        <!-- 최근실적 -->
                        <div id="tab2" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">전년대비</li>
                                    <li class="ths_2">발표순이익</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
		                            <?php $rc=0; foreach($recent_report as $val) : ?>
									<?php if($rc>3) break;?>

                                        <tr>
                                            <td class="title t_short"><a href="/<?=MR?>_search/summary/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['tkr_ticker']?></span></a></td>
                                            <td class="num">
												<span><?=$this->common->set_pricepoint($val['tkr_close'], '1')?></span>
                                            </td>
                                            <td class="num dod">
                                                <span class="<?=($recent_report_rates_pm[$val['tkr_ticker']] > 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($recent_report_rates[$val['tkr_ticker']], '2')?></span>
                                            </td>
                                            <td class="num profit">
                                                <span><?=($val['tkr_sf1_currency']=='USD')?number_format($val['sf1_netinc']/1000000):number_format($val['sf1_netinccmnusd']/1000000)?></span>
                                                <span class="hit">백만달러</span>
                                            </td>
                                        </tr>
		                            <?php $rc++; endforeach; ?>
                                    </tbody>
                                </table>
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                <div class="table_btmarea">
                                    <a href="/<?=MR?>_stock/recipe/earnings" class="more">더보기<i></i></a>
                                </div>
								<?php endif;?>
                                <!-- //table_btmarea -->
                            </div>
                        </div>

                        <!-- 관심TOP50 -->
                        <div id="tab3" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">전일상승률</li>
                                    <li class="ths_2">관심수</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
										<?php foreach($interest as $val):?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=MR?>_search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a></td>
											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['ticker']['tkr_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>

											<?php if($is_wowinfo === true) :?>
											<td class="num">
												<span><?=$this->common->set_pricepoint(number_format($wval['last_price'],2 ), '1')?></span>
											</td>
											<td class="num dod">
												<span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>"><?=($wval['diff_rate']>0) ? '+':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
											</td>
											<?php else :?>  
											<td class="num">
                                                <span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1');?></span>
                                            </td>
                                            <td class="num dod">
												<span class="<?=$val['ticker']['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
                                            </td>
											<?php endif;?>											
                                            <td class="num profit td_attention">
												<p class="attention on"><i></i><?=number_format($val['cnt'])?></p>
                                            </td>
                                        </tr>
										<?php endforeach;?>
                                    </tbody>
                                </table>
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                <div class="table_btmarea">
                                    <a href="/<?=MR?>_stock/recipe/interest" class="more">더보기<i></i></a>
                                </div>
								<?php endif;?>
                                <!-- //table_btmarea -->
                            </div>
                        </div>

                        <!-- 배당주 -->
                        <div id="tab4" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">배당수익률</li>
                                    <li class="ths_2">주당배당금</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
                                        <?php foreach($dividend as $row) : ?>
                                        <tr>
                                            <td class="title t_short">
											<?php if($this->session->userdata('is_paid')===FALSE) :?>
												<a href="javascript:fnSinChung();">
                                                    <?=iconv_substr($row['m_korname'], 0, 1, 'utf-8')?><span class="remark">
                                                        <div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div>
                                                    </span>
                                                    <span class="ticker">
                                                        <span class="remark">
                                                            <div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div>
                                                        </span>
                                                    </span>
                                                </a>
												<?php else :?>
												<a href="/<?=MR?>_search/summary/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
												<?php endif;?>
											</td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                            </td>
                                            <td class="num dod">
                                                <span class="increase"><?=number_format($row['sf1_divyield']*100, 2)?> <b>%</b></span>
                                                <!-- increase 증가, decrease 감소 -->
                                            </td>
                                            <td class="num profit">
                                                <span><?=$this->common->set_pricepoint(sprintf('%.2f', $row['sf1_dps']), '1')?></span>
                                            </td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
								<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                <div class="table_btmarea">
                                    <a href="/<?=MR?>_stock/recipe/dividend" class="more">더보기<i></i></a>
                                </div>
								<?php endif;?>
                                <!-- //table_btmarea -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>