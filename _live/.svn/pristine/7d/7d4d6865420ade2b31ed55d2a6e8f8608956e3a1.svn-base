            <!-- //sub_top -->
            <?php if($is_recommend === true || $this->session->userdata('is_paid')===FALSE) :?>
            <?php if(is_array($recommend) && sizeof($recommend) > 0) : ?>
            <div class="main_top recommend_area">
				<h3 class="title">
				<?php if($this->session->userdata('is_paid')===TRUE) :?>
				<a href="/<?=EG?>_stock/recommend">종목추천</a></h3>
				<a href="/<?=EG?>_stock/recommend" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
				<?php else:?>
				종목추천</h3>
				<?php endif;?>
                <div class="recom_list">
                <?php
                $rcnt=0;
                foreach($recommend as $key => $val) :
                    $class = 'decrease';
                    if($val['ticker']['tkr_rate'] > 0) {
                        $class = 'increase';
                    }
                ?>
                    <div class="chart_area">
                        <div class="chartData">
                            <h4 class="event_name">
                            <?php if($rcnt>0 && $this->session->userdata('is_paid')===FALSE) :?>
                            <a href="javascript:fnSinChung();"><?=iconv_substr($val['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div></span>
                            <?php else :?>
                            <a href="/<?=EG?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['ticker']['tkr_name']?>
                            <?php endif;?>
                            </a></h4>
                            <ul class="info">
                                <li class="sum"><span class="eng"><?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? '<span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>':$val['ticker']['tkr_ticker']?></span> </li>
                            </ul>
                            <ul class="detail">
                                <?php if($is_open === true) :?>
                                <li class="num"><span <?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? '' : " class='sync_price' data-ticker='{$val['ticker']['tkr_ticker']}' data-render=\"((el, txt, info) => { var tmp = txt.split('.'); return tmp[0]+'.<b>'+tmp[1]+'</b>';})\""?> ><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1')?></span></li>
                                <li class="per"><span <?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? " class='{$class}'" : " class='{$class} sync_diff_rate' data-ticker='{$val['ticker']['tkr_ticker']}' data-render=\"((el, txt, info) => { el.removeClass('increase'); el.removeClass('decrease'); var c= 'decrease'; if(parseFloat(txt) > 0) { c='increase'; txt = '+'+txt;} el.addClass(c);  return txt + '<b>%</b>'; })\""?> ><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
                                </li>
                                <?php else :?>
                                <li class="num"><span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1')?></span></li>
                                <li class="per"><span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span></li>
                                <?php endif;?>
                            </ul>
                            <!-- //detail -->
                        </div>
                        <!-- //chartData -->
                        <div class="chartGoal">
                            <dl>
                                <dt>목표가</dt>
                                <?php if($this->session->userdata('is_paid')===TRUE || $rcnt==0) :?>
                                <dd><?=(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0)? $this->common->set_pricepoint($val['rc_adjust_price'], '1'):$this->common->set_pricepoint($val['rc_goal_price'], '1')?></dd>
                                <?php else :?>
                                <dd class="prm_lock"><a href="javascript:fnSinChung();"><img src="/img/prm_lockB.png" alt="잠김"></a></dd>
                                <?php endif;?>
                            </dl>
                            <dl>
                                <dt>수익률</dt>
                                <?php if($val['rc_endtype'] == 'SUCCESS') :?>
                                    <?php if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :?>
                                    <dd class="<?=((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                    <?php else :?>
                                    <dd class="<?=((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                    <?php endif;?>
                                <?php else :?>
                                <dd class="<?=((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                <?php endif;?>
                            </dl>
                        </div>
                        <!-- //chartGoal -->
                    </div>
                    <!-- //chart_area -->

                <?php $rcnt++; endforeach;?>
                </div>
                <!-- //recom_list -->

                <div class="ptfo_recom">
                    <h4 class="ptfo_title">추천포트폴리오</h4>
                    <dl class="revenue">
                        <dt>수익률</dt>
                        <dd class="increase"><?=$pf_profit?><b>%</b></dd>
                        <!-- increase 증가, decrease 감소 -->
                    </dl>

					<?php if($this->session->userdata('is_paid')===TRUE) :?>
					<a href="/<?=EG?>_stock/recommend/portfolio" class="more">종목 <span><?=$pf_count?>개</span><img src="/img/more_Black.png" alt="더보기"></a>
					<?php else :?>
					<span class="more">종목 <span><?=$pf_count?>개</span></span>
					<?php endif;?>
                </div>
                <?php if(is_array($portfolio_list) && sizeof($portfolio_list) > 0) :?>
                <div class="ptfo_datatable">
                    <table cellspacing="0" border="1" class="tableRanking ptfo_table">
                        <tbody>
                            <?php foreach($portfolio_list as $portfolio) :
                                $class = 'decrease';
                                if($portfolio['rc_rate_str'] > 0) {
                                    $class = 'increase';
                                }
                            ?>
                            <tr>
                                <td class="name">
                                <?php if($this->session->userdata('is_paid')===FALSE) :?>
                                <a href="javascript:fnSinChung();"><?=iconv_substr($portfolio['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a>
                                <?php else :?>
                                    <a href="/<?=EG?>_stock/recommend_view/<?=$portfolio['rc_id']?>"><?=$portfolio['tkr_name']?></a>
                                <?php endif;?>
                                </td>
                                <td class="num">
                                    <span class=""><?=$this->common->set_pricepoint($portfolio['rc_close'], '1')?></span>
                                    <span class="<?=$class?> pp"><?=$this->common->set_pricepoint($portfolio['rc_rate_str'], '2')?></span>
                                </td>
                                <td class="num">
                                    <span class="yield">수익률</span>
                                    <span class="<?=($portfolio['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($portfolio['rc_profit_rate'], '1')?><b>%</b></span>
                                </td>
                            </tr>
                            <?php endforeach;?>

                        </tbody>
                    </table>
                </div>
                <?php endif;?>
                <!-- //ptfo_recom -->

                <div class="one_step">
                    <span class="txt">나의 관심종목은 얼마나 매력적일까?</span>
                    <a href="/<?=EG?>_main/onestop" class="more"><span>원스톱 진단</span><img src="/img/more_yel.png" alt="더보기"></a>
                </div>
            </div>

            <!-- //main_top -->
            <?php endif;?>
            <?php endif;?>

            <div class="main_mid attention_area">
                <?php if($is_recommend === false && $this->session->userdata('is_paid')===TRUE) :?>
                <?php if(is_array($recommend) && sizeof($recommend) > 0) : ?>
                <div class="main_top recommend_area">
                    <h3 class="title">
					<?php if($this->session->userdata('is_paid')===TRUE) :?>
					<a href="/<?=EG?>_stock/recommend">종목추천</a></h3>
                    <a href="/<?=EG?>_stock/recommend" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
					<?php else:?>
					종목추천</h3>
					<?php endif;?>
                    <div class="recom_list">
                    <?php
                    $rcnt=0;
                    foreach($recommend as $key => $val) :
                        $class = 'decrease';
                        if($val['ticker']['tkr_rate'] > 0) {
                            $class = 'increase';
                        }
                    ?>
                        <div class="chart_area">
                            <div class="chartData">
                                <h4 class="event_name">
                                <?php if($rcnt>0 && $this->session->userdata('is_paid')===FALSE) :?>
                                <a href="javascript:fnSinChung();"><?=iconv_substr($val['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_B"><i></i><i></i><i></i><i></i></div></span>
                                <?php else :?>
                                <a href="/<?=EG?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['ticker']['tkr_name']?>
                                <?php endif;?>
                                </a></h4>
                                <ul class="info">
                                    <li class="sum"><span class="eng"><?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? '<span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>':$val['ticker']['tkr_ticker']?></span> </li>
                                </ul>
                                <ul class="detail">
                                    <?php if($is_open === true) :?>
                                    <li class="num"><span <?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? '' : " class='sync_price' data-ticker='{$val['ticker']['tkr_ticker']}' data-render=\"((el, txt, info) => { var tmp = txt.split('.'); return tmp[0]+'.<b>'+tmp[1]+'</b>';})\""?> ><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1')?></span></li>
                                    <li class="per"><span <?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? " class='{$class}'" : " class='{$class} sync_diff_rate' data-ticker='{$val['ticker']['tkr_ticker']}' data-render=\"((el, txt, info) => { el.removeClass('increase'); el.removeClass('decrease'); var c= 'decrease'; if(parseFloat(txt) > 0) { c='increase'; txt = '+'+txt;} el.addClass(c);  return txt + '<b>%</b>'; })\""?> ><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
                                    <?php else :?>
                                    <li class="num"><span><?=$this->common->set_pricepoint($val['ticker']['tkr_close'], '1')?></span></li>
                                    <li class="per"><span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate_str'], '2')?></span>
                                    <?php endif;?>
                                    </li>
                                </ul>
                                <!-- //detail -->
                            </div>
                            <!-- //chartData -->

                            <div class="chartGoal">
                                <dl>
                                    <dt>목표가</dt>
                                    <?php if($this->session->userdata('is_paid')===TRUE || $rcnt==0) :?>
                                    <dd><?=(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0)? $this->common->set_pricepoint($val['rc_adjust_price'], '1'):$this->common->set_pricepoint($val['rc_goal_price'], '1')?></dd>
                                    <?php else :?>
                                    <dd class="prm_lock"><a href="javascript:fnSinChung();"><img src="/img/prm_lockB.png" alt="잠김"></a></dd>
                                    <?php endif;?>
                                </dl>
                                <dl>
                                    <dt>수익률</dt>
                                    <?php if($val['rc_endtype'] == 'SUCCESS') :?>
                                        <?php if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :?>
                                        <dd class="<?=((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                        <?php else :?>
                                         <dd class="<?=((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                        <?php endif;?>
                                    <?php else :?>
                                    <dd class="<?=((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?>"><?=number_format((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></dd>
                                    <?php endif;?>
                                </dl>
                            </div>
                            <!-- //chartGoal -->
                        </div>
                        <!-- //chart_area -->
                    <?php $rcnt++; endforeach;?>
                    </div>
                    <!-- //recom_list -->

                    <div class="ptfo_recom">
                        <h4 class="ptfo_title">추천포트폴리오</h4>
                        <dl class="revenue">
                            <dt>수익률</dt>
                            <dd class="increase"><?=$pf_profit?><b>%</b></dd>
                            <!-- increase 증가, decrease 감소 -->
                        </dl>
						<?php if($this->session->userdata('is_paid')===TRUE) :?>
	                    <a href="/<?=EG?>_stock/recommend/portfolio" class="more">종목 <span><?=$pf_count?>개</span><img src="/img/more_Black.png" alt="더보기"></a>
						<?php else :?>
						<span class="more">종목 <span><?=$pf_count?>개</span></span>
						<?php endif;?>						
                    </div>
                    <?php if(is_array($portfolio_list) && sizeof($portfolio_list) > 0) :?>
                    <div class="ptfo_datatable">
                        <table cellspacing="0" border="1" class="tableRanking ptfo_table">
                            <tbody>
                                <?php foreach($portfolio_list as $portfolio) :
                                    $class = 'decrease';
                                    if($portfolio['rc_rate_str'] > 0) {
                                        $class = 'increase';
                                    }
                                ?>
                                <tr>
                                    <td class="name">
                                    <?php if($this->session->userdata('is_paid')===FALSE) :?>
                                    <a href="javascript:fnSinChung();"><?=iconv_substr($portfolio['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a>
                                    <?php else :?>
                                        <a href="/<?=EG?>_stock/recommend_view/<?=$portfolio['rc_id']?>"><?=$portfolio['tkr_name']?></a>
                                    <?php endif;?>
                                    </td>
                                    <td class="num">
                                        <span class=""><?=$this->common->set_pricepoint($portfolio['rc_close'], '1')?></span>
                                        <span class="<?=$class?> pp"><?=$this->common->set_pricepoint($portfolio['rc_rate_str'], '2')?></span>
                                    </td>
                                    <td class="num">
                                        <span class="yield">수익률</span>
                                        <span class="<?=($portfolio['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($portfolio['rc_profit_rate'], '1')?><b>%</b></span>
                                    </td>
                                </tr>
                                <?php endforeach;?>

                            </tbody>
                        </table>
                    </div>
                    <?php endif;?>
                    <!-- //ptfo_recom -->

					<div class="one_step">
						<span class="txt">나의 관심종목은 얼마나 매력적일까?</span>
						<a href="/<?=EG?>_main/onestop" class="more"><span>원스톱 진단</span><img src="/img/more_yel.png" alt="더보기"></a>
					</div>
                </div>
                <!-- //main_top -->
                <?php endif;?>
                <?php endif;?>
            </div>
            <!-- //eventPicks_area -->

            <div class="main_mid event_recipe">
				<?php if($this->session->userdata('is_paid')===TRUE) :?>
                <h3 class="title"><a href="/<?=EG?>_stock/recipe_intro">투자레시피</a></h3>
                <a href="/<?=EG?>_stock/recipe_intro" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
				<?php else :?>
                <h3 class="title">투자레시피</h3>
				<?php endif;?>

                <div class="tabsArea">
                    <span><!-- 화살표를 위한 span --></span>
                    <div class="tab_scr">
                        <ul class="tabs recipe_tabs">
                            <li class="active" rel="tab1"><span>최근실적</span></li>
                            <li rel="tab2"><span>투자매력</span></li>
                            <li rel="tab3"><span>배당주</span></li>
                            <li rel="tab4"><span>성장주</span></li>
                            <li rel="tab5"><span>슈퍼스톡</span></li>
                            <li rel="tab6"><span>소비자독점주</span></li>
                        </ul>
                    </div>
                    <!-- //tab_scr -->

                    <div class="tab_container">
                        <!-- 최근실적 -->
                        <div id="tab1" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li>발표순이익</li>
                                    <li>전년대비</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <tbody>
                                    <?php $rc=0; foreach($recent_report as $val) : ?>
                                    <?php if($rc>4) break;?>
                                        <tr>
                                            <td class="title t_short"><a href="/<?=EG?>_search/invest_charm/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?><span class="ticker"><?=$val['tkr_ticker']?></span></a></td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($val['tkr_close'], '1')?></span>
                                                <span class="<?=($val['tkr_rate'] > 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($val['tkr_rate_str'], '2')?></span>
                                                <!-- increase 증가, decrease 감소 -->
                                            </td>
                                            <td class="num profit">
                                                <span><?=number_format($val['sf1_netinccmnusd']/1000000)?></span>
                                                <span class="hit">백만달러</span>
                                            </td>
                                            <td class="num last_year">
                                                <span class="<?=($recent_report_rates_pm[$val['tkr_ticker']] > 0) ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($recent_report_rates[$val['tkr_ticker']], '2')?></span>
                                            </td>
                                        </tr>
                                    <?php $rc++; endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <!-- 투자매력 -->
                        <div id="tab2" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">투자매력점수</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
                                        <?php foreach($all_total_score as $row) : ?>
                                        <tr>
                                            <td class="title"><a href="/<?=EG?>_search/invest_charm/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
                                            </td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                                <span class="<?=$row['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($row['tkr_rate_str'], '2')?></span>
                                            </td>
                                            <td class="score"><span><?=$row['m_biz_total_score']?><b>점</b></span></td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 배당매력주 -->
                        <div id="tab3" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">배당수익률%</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
                                        <?php foreach($dividend as $row) : ?>
                                        <tr>
                                            <td class="title"><a href="/<?=EG?>_search/invest_charm/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
                                            </td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                                <span class="<?=$row['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($row['tkr_rate_str'], '2')?></span>
                                            </td>
                                            <td class="num last_year"><span class="increase"><?=number_format($row['sf1_divyield']*100, 2)?> <b>%</b></span></td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 이익성장주 -->
                        <div id="tab4" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">순이익성장률%</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
                                        <?php foreach($growth as $row) : ?>
                                        <tr>
                                            <td class="title"><a href="/<?=EG?>_search/invest_charm/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
                                            </td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                                <span class="<?=$row['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($row['tkr_rate_str'], '2')?></span>
                                            </td>
                                            <td class="num last_year"><span class="increase"><?=number_format($row['m_g_epsgr'], 2)?> <b>%</b></span></td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 슈퍼스톡 -->
                        <div id="tab5" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">5년 ROE%</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
                                        <?php foreach($total_score as $row) : ?>
                                        <tr>
                                            <td class="title"><a href="/<?=EG?>_search/invest_charm/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
                                            </td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                                <span class="<?=$row['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($row['tkr_rate_str'], '2')?></span>
                                            </td>
                                            <td class="num last_year"><span class="increase"><?=number_format($row['m_g_roe'], 2)?> <b>%</b></span></td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 소비자독점주 -->
                        <div id="tab6" class="tab_content">
                            <div class="tableth_box">
                                <ul class="game_th">
                                    <li class="ths_2">영업이익률%</li>
                                </ul>
                                <table cellspacing="0" border="0" class="tableRanking type_2Line">
                                    <colgroup>
                                        <col width="100px">
                                        <col width="">
                                        <col width="">
                                    </colgroup>
                                    <tbody>
                                        <?php foreach($moat as $row) : ?>
                                        <tr>
                                            <td class="title"><a href="/<?=EG?>_search/invest_charm/<?=$row['m_ticker']?>"><?=$row['m_korname']?><span class="ticker"><?=$row['m_ticker']?></span></a>
                                            </td>
                                            <td class="num">
                                                <span><?=$this->common->set_pricepoint($row['tkr_close'], '1')?></span>
                                                <span class="<?=$row['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$this->common->set_pricepoint($row['tkr_rate_str'], '2')?></span>
                                            </td>
                                            <td class="num last_year"><span class="increase"><?=number_format($row['sf1_opmargin'], 2)?> <b>%</b></span></td>
                                        </tr>
                                        <?php endforeach; ?>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //event_recipe -->