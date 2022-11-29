  <div class="d-flex" id="wrapper">
    <!-- Sidebar -->
    <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading sctop_00">종목티커 <strong><?=$ticker['tkr_ticker']?></strong></div>
      <div class="list-group list-group-flush">
        <a href="#" class="sctop_01 list-group-item list-group-item-action bg-light">D01. 일일주가</a>
        <a href="#" class="sctop_02 list-group-item list-group-item-action bg-light">D02. 일일투자지표</a>
        <a href="#" class="sctop_03 list-group-item list-group-item-action bg-light">D03. 재무제표</a>
        <!--<a href="#" class="sctop_03_01 list-group-item list-group-item-action bg-light">03-A.재무상태표2</a>-->
        <a href="#" class="sctop_04 list-group-item list-group-item-action bg-light">D04. 투자지표</a>
        <a href="#" class="sctop_04_01 list-group-item list-group-item-action bg-light">04-A. 종목추천/분석<br> <span
            style="padding: 0 15px;"></span> > 투자지표</a>
        <a href="#" class="sctop_05 list-group-item list-group-item-action bg-light">D05. 경쟁사</a>
        <a href="#" class="sctop_06 list-group-item list-group-item-action bg-light">D06. 검색목록</a>
        <a href="#" class="sctop_07 list-group-item list-group-item-action bg-light">D07. 최근실적발표</a>
        <a href="#" class="sctop_08 list-group-item list-group-item-action bg-light">D08. 전종목투자매력도</a>
        <a href="#" class="sctop_09 list-group-item list-group-item-action bg-light">D09. 투자레시피</a>
      </div>
    </div>
    <!-- /#sidebar-wrapper -->

    <!-- Page Content -->
    <div id="page-content-wrapper">
	
	  <?php
	  $active_menu = 'main';
	  include_once dirname(__FILE__).'/inc/topmenu.php';
	  ?>

      <div class="container-fluid">
        <div id="container" class="sub_search sub_recom">
          <!-- D01. 일일주가 -->
          <h1 class="mt-4 offset_01">D01. 일일주가</h1>
          <div class="search_top">
            <div class="div_left">

              <div class="data_area">
                <i class="indicator">korname</i><!-- indicator 값 -->
                <h2 class="title"><a href="#"><?=$ticker['tkr_name']?></a></h2>
                <ul class="info">
                  <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                </ul>
                <i class="indicator">ticker</i>
                <ul class="detail">
                  <li class="num">
                    <span class="<?=$ticker['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$ticker['tkr_close']?></span> <!-- increase 증가, decrease 감소 -->
                    <i class="indicator">close</i>
                  </li>
				  <li class="per">
					<span class="<?=$ticker['tkr_rate'] > 0 ? 'increase' : 'decrease'?>"><?=$ticker['tkr_diff_str']?> <span>(<?=$ticker['tkr_rate_str']?>)</span></span> <!-- increase 증가, decrease 감소 -->
                    <i class="indicator">Diff Str, (Rate Str)</i>
                  </li>
                  <li class="day"><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo date('y.m/d', strtotime($ticker['tkr_lastpricedate'])).', ';?> USD <i class="indicator">Lastpricedate</i></li>

                </ul>

				<?php if($is_recom_ticker) : ?>
                <div class="go_page">
                    <a href="<?=$analysis_link?>"><span class="quarter analysis">분석</span></a>
                    <!-- 추천 class = recom, 분석 class = analysis -->
                    <a class="menu-trigger" href="<?=$recom_link?>">
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <?php elseif($is_analysis_ticker) : ?>
				<div class="go_page">
					<a href="<?=$analysis_link?>"><span class="quarter analysis">분석</span></a>
					<!-- 추천 class = recom, 분석 class = analysis -->
					<a class="menu-trigger" href="<?=$analysis_link?>">
				    <span></span>
					<span></span>
			      </a>
				</div>
                <?php endif ; ?>
              </div>
              <!-- //data_area -->
              <ul class="info_icon">
                <li><?=$ticker['tkr_exchange']?></li>
				<?php if($mri_data['m_biz_dividend_score'] >= 16) : ?>
				<li>배당매력주</li>
				<?php endif; ?>

				<?php if($mri_data['m_biz_growth_score'] >= 16) : ?>
				<li>이익성장</li>
				<?php endif; ?>

				<?php if($mri_data['m_biz_moat_score'] >= 16) : ?>
				<li>소비자독점주</li>
				<?php endif; ?>
                <i class="indicator">exchange</i>
              </ul>
              <!-- //info_icon -->
            </div>

			<div class="div_right">
              <div class="table_info">
                <form action="" method="post">
                  <fieldset>                    
                    <div class="form_table">                      
                        <div class="item">
                          <textarea name="" cols="50" rows="5" title="" class="i_text"></textarea>
                        </div>
                    </div>
                  </fieldset>
                </form>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->
            </div>

          </div>
          <!-- //sub_top -->

          <!-- D02. 일일투자지표 -->
          <h1 class="mt-4 offset_02">D02. 일일투자지표</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid tabs_area">
                <div class="investCharm_area">
                  <div class="tab_diagnosis_area">
                    <table cellspacing="0" border="1" class="tableRanking left guide_table">
                      <colgroup>
                        <col width="50%">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="col" class="th_guide txt01"><span>시가총액</span> <i class="indicator">marketcap</i>
                          </th>
                          <td><?=number_format($daily_data['dly_marketcap'])?><span class="unit">백만달러</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt01"><span>기업가치 EV</span> <i class="indicator">ev</i></th>
                          <td><?=number_format($daily_data['dly_ev'])?><span class="unit">백만달러</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt01"><span>주식수</span> <i class="indicator">shareswadil</i>
                          </th>
                          <td>
							<?php if(substr($ticker['tkr_category'], 0, 8)=='Domestic'){?>
							<?php	if($mrq_data['sf1_shareswadil']) echo $mrq_data['sf1_shareswadil']; else echo $mrq_data['sf1_shareswa'];?>
							<?php } else {?>
							<?=$mry_data['sf1_shareswadil']?>
							<?php }?>					
                            <span class="unit">주</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt01"><span>주당배당금</span> <i class="indicator">dps</i></th>
                          <td><?=$mry_data['sf1_dps']?><span class="unit">달러</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt01"><span>배당수익률</span> <i class="indicator">divyield</i>
                          </th>
                          <td><?=$mry_data['sf1_divyield']?></td>
                        </tr>
                      </tbody>
                    </table>
                    <table cellspacing="0" border="1" class="tableRanking right guide_table">
                      <colgroup>
                        <col width="50%">
                        <col>
                      </colgroup>
                      <tbody>
                        <tr>
                          <th scope="col" class="th_guide txt02"><span>주가수익배수 PER</span> <i class="indicator">pe</i></th>
                          <td><?=number_format($daily_data['dly_pe'], 2)?><span class="unit">배</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt02"><span>주가순자산배수 PBR</span> <i class="indicator">pb</i>
                          </th>
                          <td><?=$last_mrt['sf1_equity'] > 0 ? number_format($daily_data['dly_pb'], 2).'<span class="unit">배</span>' : 'N/A'?></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt02"><span>자기자본이익률 ROE</span> <i class="indicator">roe</i>
                          </th>
                          <td><?=($mrt_data['sf1_roe'])?></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt02"><span>주당순이익 EPS</span> <i class="indicator">epsdil</i>
                          </th>
                          <td><?=($mrt_data['sf1_epsdil'])?><span class="unit">달러</span></td>
                        </tr>
                        <tr>
                          <th scope="col" class="th_guide txt02"><span>주당순자산 BPS</span> <i class="indicator">bvps</i>
                          </th>
                          <td><?php if(substr($ticker['tkr_category'], 0, 8)=='Domestic') echo $mrq_data['sf1_bvps']; else echo $mry_data['sf1_bvps'];?><span class="unit">달러</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <!-- //tab_diagnosis_area -->
                </div>
                <!-- //sub_mid -->
              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

		  <?php 
	      //[ assetsc ], [ assetsnc ], [ liabilitiesc ], [ liabilitiesnc ]가 모두 빈값( 0 )일 때 [재무상태표2] 사용
		  $check_financial = array_values($history_mry);
		  ?>
          <!-- D03. 재무제표 -->
          <h1 class="mt-4 offset_03">D03. 재무제표</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid tabs_area">
                <div class="search_financials_area">
                  <ul class="tabs">
                    <li class="active" rel="tab1">연환산</li>
                    <li rel="tab2">연간</li>
                    <li rel="tab3">분기</li>
                  </ul>
                  <strong class="unit"><?php if(isset($ticker_currency) && $ticker_currency) echo '* 단위 : '.$ticker_currency;?></strong>

                  <div class="tab_container">
                    <!-- 연환산 -->
                    <div id="tab1" class="tab_content">

                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">손익계산서</h4>
                            </th>
							<?php
							$dates = array_keys($history_mrt);
							foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));
							?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_income as $key=>$val) :?>
                          <tr<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>>
                            <td<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php
							  if($is_adr === true) {
								  if($key == 'sf1_opinc') $key = 'sf1_opinc_ori';
								  if($key == 'sf1_ebitda') $key = 'sf1_ebitda_ori';
								  if($key == 'sf1_netinc') $key = 'sf1_netinc_ori';
							  }
							?>
							<?php foreach($history_mrt as $tVal) :?>
							<?php if(strstr($key,'_ori')) $tVal[$key] = number_format($tVal[$key]/1000000);?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="160px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">재무상태표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php if( $check_financial[0]['sf1_assetsc'] == 0 && $check_financial[0]['sf1_assetsnc'] == 0 && $check_financial[0]['sf1_liabilitiesc'] == 0 && $check_financial[0]['sf1_liabilitiesnc'] == 0 ) : ?>
						<?php $cnt=0; foreach($financial_status_adr as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==10) $tClass=' class="depth01"';
						  else if($cnt==9||$cnt==17||$cnt==18) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrt as $tVal) :?>
                            <td><?=$tVal[$key]?></td>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php else :?>
						<?php $cnt=0; foreach($financial_status as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==14||$cnt==24) $tClass=' class="depth01"';
						  else if($cnt>=2&&$cnt<=4) $tClass=' class="depth02"';
						  else if(($cnt>=11&&$cnt<=13)||($cnt>=21&&$cnt<=23)||$cnt==25) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrt as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php endif;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">현금흐름표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_cash as $key=>$val) :?>
                          <tr>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrt as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                    </div>
                    <!-- //tab_content -->
                    <!-- 연간 -->
                    <div id="tab2" class="tab_content">
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">손익계산서</h4>
                            </th>
							<?php
							$dates = array_keys($history_mry);
							foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));
							?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_income as $key=>$val) :?>
                          <tr<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>>
                            <td<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php
							  if($is_adr === true) {
								  if($key == 'sf1_opinc') $key = 'sf1_opinc_ori';
								  if($key == 'sf1_ebitda') $key = 'sf1_ebitda_ori';
								  if($key == 'sf1_netinc') $key = 'sf1_netinc_ori';
							  }
							?>
							<?php foreach($history_mry as $tVal) :?>
							<?php if(strstr($key,'_ori')) $tVal[$key] = number_format($tVal[$key]/1000000);?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="160px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">재무상태표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php if( $check_financial[0]['sf1_assetsc'] == 0 && $check_financial[0]['sf1_assetsnc'] == 0 && $check_financial[0]['sf1_liabilitiesc'] == 0 && $check_financial[0]['sf1_liabilitiesnc'] == 0 ) : ?>
						<?php $cnt=0; foreach($financial_status_adr as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==10) $tClass=' class="depth01"';
						  else if($cnt==9||$cnt==17||$cnt==18) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mry as $tVal) :?>
                            <td><?=$tVal[$key]?></td>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php else :?>
						<?php $cnt=0; foreach($financial_status as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==14||$cnt==24) $tClass=' class="depth01"';
						  else if($cnt>=2&&$cnt<=4) $tClass=' class="depth02"';
						  else if(($cnt>=11&&$cnt<=13)||($cnt>=21&&$cnt<=23)||$cnt==25) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mry as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php endif;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">현금흐름표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_cash as $key=>$val) :?>
                          <tr>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mry as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                    </div>
                    <!-- //tab_content -->
                    <!-- 분기 -->
                    <div id="tab3" class="tab_content">
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">손익계산서</h4>
                            </th>
							<?php
							$dates = array_keys($history_mrq);
							foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));
							?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_income as $key=>$val) :?>
                          <tr<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>>
                            <td<?=(($cnt>=4 && $cnt<=6) || $cnt>=14)?' class="depth02"':''?>><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php
							  if($is_adr === true) {
								  if($key == 'sf1_opinc') $key = 'sf1_opinc_ori';
								  if($key == 'sf1_ebitda') $key = 'sf1_ebitda_ori';
								  if($key == 'sf1_netinc') $key = 'sf1_netinc_ori';
							  }
							?>
							<?php foreach($history_mrq as $tVal) :?>
							<?php if(strstr($key,'_ori')) $tVal[$key] = number_format($tVal[$key]/1000000);?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="160px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">재무상태표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php if( $check_financial[0]['sf1_assetsc'] == 0 && $check_financial[0]['sf1_assetsnc'] == 0 && $check_financial[0]['sf1_liabilitiesc'] == 0 && $check_financial[0]['sf1_liabilitiesnc'] == 0 ) : ?>
						<?php $cnt=0; foreach($financial_status_adr as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==10) $tClass=' class="depth01"';
						  else if($cnt==9||$cnt==17||$cnt==18) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrq as $tVal) :?>
                            <td><?=$tVal[$key]?></td>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php else :?>
						<?php $cnt=0; foreach($financial_status as $key=>$val) :?>
						  <?php 
						  $tClass=''; 
						  if($cnt==0||$cnt==14||$cnt==24) $tClass=' class="depth01"';
						  else if($cnt>=2&&$cnt<=4) $tClass=' class="depth02"';
						  else if(($cnt>=11&&$cnt<=13)||($cnt>=21&&$cnt<=23)||$cnt==25) $tClass=' class="depth03"';
						  ?>
                          <tr<?=$tClass;?>>
							<?php if(strstr($key, 'sf1_null')) :?>
                            <td><span><strong><?=$val;?></strong></span></td>
                            <td colspan="5" class="tdLength"></td>
							<?php else :?>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrq as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
							<?php endif;?>
                          </tr>
						<?php $cnt++; endforeach;?>
						<?php endif;?>
                        </tbody>
                      </table>
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th>
                              <h4 class="tltle">현금흐름표</h4>
                            </th>
                            <?php foreach($dates as $d) : $d = date('y.m/d', strtotime(str_replace('.','-',$d)));?>
                            <th><span><?=$d?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; foreach($financial_cash as $key=>$val) :?>
                          <tr>
                            <td><?=$val;?> <i class="indicator"><?=str_replace('sf1_', '', $key);?></i></td>
							<?php foreach($history_mrq as $tVal) :?>
							<?php if($ticker_unit>0) :?>
                            <td><?=number_format(str_replace(',','',$tVal[$key])/$ticker_unit);?></td>
							<?php else :?>
                            <td><?=$tVal[$key]?></td>
                            <?php endif;?>
							<?php endforeach;?>
                          </tr>
						 <?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                    </div>
                    <!-- //tab_content -->
                  </div>
                  <!-- //tab_container -->
                </div>
                <!-- //search_financials_area -->
              </div>
            </div>
            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->
            </div>
          </div>
          <!-- //sub_top -->

          <!-- D04. 투자지표 -->
          <h1 class="mt-4 offset_04">D04. 투자지표</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid tabs_area">
                <div class="search_financials_area">
                  <ul class="tabs">
                    <li class="active" rel="tab7">연환산</li>
                    <li rel="tab8">연간</li>
                    <li rel="tab9">분기</li>
                  </ul>
                  <!--<strong class="unit">* 단위 : 백만달러</strong>-->

                  <div class="tab_container">
                    <!-- 연환산 -->
                    <div id="tab7" class="tab_content">
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
							<?php foreach(array_keys($invest_mrt['data']) as $yyyymm) : ?>
                            <th><span><?=date('y.m/d', strtotime(str_replace('.','-',$yyyymm)))?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
						<tbody>
						<?php $cnt=0; $st=0; foreach($invest_mrt['fininvestindi_fields'] as $val) :?>
						<?php if($cnt==0 || $cnt==6 || $cnt==12 || $cnt==20 || $cnt==25) :?>
						  <tr class="depth01">
                            <td colspan="7"><span><strong><?=$invest_subtitle[$st]?></strong></span></td>
                          </tr>
						<?php $st++; endif;?>
                          <tr>
                            <td><span><strong><?=$invest_mrt['fininvestindi_titles'][$val]?></strong></span> <i class="indicator"><?=str_replace('sf1_','',$val);?></i></td>
							<?php foreach($invest_mrt['data'] as $row) : ?>

							<?php
							    $dpval = isset($row[$val]) ? $row[$val] : 'N/A';

								if(in_array($val, array('sf1_grossmargin', 'sf1_netmargin', 'sf1_ebitdamargin', 'sf1_receiveturnoverdays', 'sf1_inventoryturnoverdays', 'sf1_roic'))) {
									switch($val) {
										case 'sf1_grossmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_gp'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_netmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_netinc'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_ebitdamargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_ebitda'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_receiveturnoverdays' :
											$dpval = ( !$row['sf1_receivables'] || $row['sf1_receivables'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_revenue']))/floatval(str_replace(',','',$row['sf1_receivables']))));
											break;
										case 'sf1_inventoryturnoverdays' : 
											$dpval = ( !$row['sf1_inventory'] || $row['sf1_inventory'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_cor']))/floatval(str_replace(',','',$row['sf1_inventory']))));
											break;
										case 'sf1_roic' : 
											$dpval = ( $row['sf1_invcapavg'] < 0 ) ? 'N/A' : $row['sf1_roic'];
											break;
									}
								}
							?>
                            <td><?=$dpval;?> </td>
							<?php endforeach;?>
                          </tr>
						<?php $cnt++; endforeach;?>

                        </tbody>
                      </table>
                    </div>
                    <!-- 연간 -->
                    <div id="tab8" class="tab_content">
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
							<?php foreach(array_keys($invest_mry['data']) as $yyyymm) : ?>
                            <th><span><?=date('y.m/d', strtotime(str_replace('.','-',$yyyymm)))?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; $st=0; foreach($invest_mry['fininvestindi_fields'] as $val) :?>
						<?php if($cnt==0 || $cnt==6 || $cnt==12 || $cnt==20 || $cnt==25) :?>
						  <tr class="depth01">
                            <td colspan="7"><span><strong><?=$invest_subtitle[$st]?></strong></span></td>
                          </tr>
						<?php $st++; endif;?>
                          <tr>
                            <td><span><strong><?=$invest_mry['fininvestindi_titles'][$val]?></strong></span> <i class="indicator"><?=str_replace('sf1_','',$val);?></i></td>
							<?php foreach($invest_mry['data'] as $row) : ?>

							<?php
							    $dpval = isset($row[$val]) ? $row[$val] : 'N/A';

								if(in_array($val, array('sf1_grossmargin', 'sf1_netmargin', 'sf1_ebitdamargin', 'sf1_receiveturnoverdays', 'sf1_inventoryturnoverdays', 'sf1_roic'))) {
									switch($val) {
										case 'sf1_grossmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_gp'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_netmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_netinc'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_ebitdamargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_ebitda'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_receiveturnoverdays' :
											$dpval = ( !$row['sf1_receivables'] || $row['sf1_receivables'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_revenue']))/floatval(str_replace(',','',$row['sf1_receivables']))));
											break;
										case 'sf1_inventoryturnoverdays' : 
											$dpval = ( !$row['sf1_inventory'] || $row['sf1_inventory'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_cor']))/floatval(str_replace(',','',$row['sf1_inventory']))));
											break;
										case 'sf1_roic' : 
											$dpval = ( $row['sf1_invcapavg'] < 0 ) ? 'N/A' : $row['sf1_roic'];
											break;
									}
								}
							?>
                            <td><?=$dpval;?> </td>
							<?php endforeach;?>
                          </tr>
						<?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                    </div>
                    <!-- 분기 -->
                    <div id="tab9" class="tab_content">
                      <table cellspacing="0" border="1" class="tableRanking">
                        <colgroup>
                          <col width="140px">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                          <col width="">
                        </colgroup>
                        <thead>
                          <tr>
                            <th></th>
							<?php foreach(array_keys($invest_mrq['data']) as $yyyymm) : ?>
                            <th><span><?=date('y.m/d', strtotime(str_replace('.','-',$yyyymm)))?></span></th>
							<?php endforeach;?>
                          </tr>
                        </thead>
                        <tbody>
						<?php $cnt=0; $st=0; foreach($invest_mrq['fininvestindi_fields'] as $val) :?>
						<?php if($cnt==0 || $cnt==6 || $cnt==12 || $cnt==20 || $cnt==25) :?>
						  <tr class="depth01">
                            <td colspan="7"><span><strong><?=$invest_subtitle[$st]?></strong></span></td>
                          </tr>
						<?php $st++; endif;?>
                          <tr>
                            <td><span><strong><?=$invest_mrq['fininvestindi_titles'][$val]?></strong></span> <i class="indicator"><?=str_replace('sf1_','',$val);?></i></td>
							<?php foreach($invest_mrq['data'] as $row) : ?>

							<?php
							    $dpval = isset($row[$val]) ? $row[$val] : 'N/A';

								if(in_array($val, array('sf1_grossmargin', 'sf1_netmargin', 'sf1_ebitdamargin', 'sf1_receiveturnoverdays', 'sf1_inventoryturnoverdays', 'sf1_roic'))) {
									switch($val) {
										case 'sf1_grossmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_gp'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_netmargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_netinc'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_ebitdamargin' :
											$dpval = number_format(floatval(str_replace(',','',$row['sf1_ebitda'])) / floatval(str_replace(',','',$row['sf1_revenue']))*100, 2).'%';
											break;
										case 'sf1_receiveturnoverdays' :
											$dpval = ( !$row['sf1_receivables'] || $row['sf1_receivables'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_revenue']))/floatval(str_replace(',','',$row['sf1_receivables']))));
											break;
										case 'sf1_inventoryturnoverdays' : 
											$dpval = ( !$row['sf1_inventory'] || $row['sf1_inventory'] == 0 ) ? 'N/A' : number_format(365/(floatval(str_replace(',','',$row['sf1_cor']))/floatval(str_replace(',','',$row['sf1_inventory']))));
											break;
										case 'sf1_roic' : 
											$dpval = ( $row['sf1_invcapavg'] < 0 ) ? 'N/A' : $row['sf1_roic'];
											break;
									}
								}
							?>
                            <td><?=$dpval;?> </td>
							<?php endforeach;?>
                          </tr>
						<?php $cnt++; endforeach;?>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <!-- //search_financials_area -->
              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->
            </div>
          </div>
          <!-- //sub_top -->

          <!-- D04-A. 종목추천,분석 > 투자지표 -->
          <h1 class="mt-4 offset_04_01">D04-A. 종목추천,분석 > 투자지표</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid">
                <div class="tabsArea">
                  <div class="tab_container">
                    <!-- 종목진단 -->
                    <div id="tab2" class="tab_content">

                      <div class="data_table">
                        <div>
                          <!-- 수익성(연환산) -->
                          <table cellspacing="0" border="1" class="tableRanking">
                            <colgroup>
                              <col width="100%">
                              <col width="70">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="2" class="th_ft"><span>수익성(연환산)</span><span class="day"><?=date('y.m/d', strtotime($mrt_data['sf1_reportperiod']))?></span></th>                                                                        
                                </tr>
                                <tr>
                                    <th class="th"><span>영업이익률</span> <i class="indicator">opmargin</i></th>
                                    <td class="num"><span><?=$mrt_data['sf1_opmargin']?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>ROA</span> <i class="indicator">roa</i></th>
                                    <td class="num"><span><?=$mrt_data['sf1_roa']?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>ROE</span> <i class="indicator">roe</i></th>
                                    <td class="num"><span><?=$mrt_data['sf1_roe']?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>ROIC</span> <i class="indicator">roic</i></th>
                                    <td class="num"><span><?=$mrt_data['sf1_roic']?></span></td>
                                </tr>
                            </tbody>
                          </table>
<?php
							if(strtoupper($ticker['tkr_category'])=='ADR' || strtoupper($ticker['tkr_category'])=='ADR PRIMARY' || strtoupper($ticker['tkr_category'])=='CANADIAN' || strtoupper($ticker['tkr_category'])=='CANADIAN PRIMARY') {
						
								$mry_list = array_slice($mry_list, 0, 2);
								$curr = array_shift($mry_list);
								$before = array_pop($mry_list);
								$sf1_netinc = 'sf1_netinc';
							}
							else {
								if(sizeof($mrt_list)>5) {
									$mrt_list = array_slice($mrt_list, 0, 5);
								}
								$curr = array_shift($mrt_list);
								$before = array_pop($mrt_list);
								$sf1_netinc = 'sf1_netinccmnusd';
							}

							$rate = 0;
							if( $curr[$sf1_netinc] > 0 && $before[$sf1_netinc] < 0 ) {
								$rate = 1;
								$str_netinc = '흑자전환';
							}
							else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] < 0 ) {
								$str_netinc = '적자지속';
							}
							else if( $curr[$sf1_netinc] < 0 && $before[$sf1_netinc] > 0 ) {
								$str_netinc = '적자전환';
							}
							else {
								$rate = sprintf('%.2f', ($curr[$sf1_netinc] / $before[$sf1_netinc] -1) * 100);
								$str_netinc = $rate.'%';
							}

							$curr['sf1_rnd'] = str_replace(',','',$curr['sf1_rnd']);
							$curr['sf1_revenue'] = str_replace(',','',$curr['sf1_revenue']);
							$before['sf1_revenue'] = str_replace(',','',$before['sf1_revenue']);
							$mrt_revenue = sprintf('%.2f', ($curr['sf1_revenue'] / $before['sf1_revenue'] -1) * 100);
							//$mrt_netinc = sprintf('%.2f', ($curr['sf1_netinc'] / $before['sf1_netinc'] -1) * 100);
							$mrt_rndratio = sprintf('%.2f', $curr['sf1_rnd'] / $curr['sf1_revenue'] * 100);
?>
                          <!-- 안전성(최근분기) -->
                          <table cellspacing="0" border="1" class="tableRanking">
                            <colgroup>
                              <col width="100%">
                              <col width="70">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="2" class="th_ft"><span>안전성(최근분기)</span><span class="day"><?=date('y.m/d', strtotime($mrq_data['sf1_reportperiod']))?></span></th>                                               
                                </tr>
                                <tr>
                                    <th class="th"><span>유동비율</span> <i class="indicator">currentratio</i></th>
                                    <td class="num"><span><?=$mrq_data['sf1_currentratio']?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>차입금 비중</span> <i class="indicator">borrowtoassets</i></th>
                                    <td class="num"><span><?=$mrq_data['sf1_borrowtoassets']?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>매출채권회전일수</span> <i class="indicator">receiveturnoverdays</i></th>
                                    <td class="num"><span><?=$mrt_data['sf1_receiveturnoverdays']?>일</span></td>
                                </tr>
                            </tbody>
                          </table>


                          <!-- 성장성(전년대비) -->
                          <table cellspacing="0" border="1" class="tableRanking">
                            <colgroup>
                              <col width="100%">
                              <col width="70">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="2" class="th_ft"><span>성장성(전년대비)</span><span class="day"><?=date('y.m/d', strtotime($orig_mrq_data['sf1_reportperiod']))?></span></th>                                      
                                </tr>
                                <tr>
                                    <th class="th"><span>매출액 성장률</span> <i class="indicator">revenue</i></th>
                                    <!--<td class="num"><span><?=$orig_mrq_data['sf1_revenueusd'] == 'N/A' ?: number_format($orig_mrq_data['sf1_revenueusd']/1000000, 2)?>%</span></td>-->
                                    <td class="num"><span><?=$mrt_revenue;?>%</span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>순이익 성장률</span> <i class="indicator">netinc</i></th>
                                    <!--<td class="num"><span><?=$orig_mrq_data['sf1_netinc'] == 'N/A' ?: number_format($orig_mrq_data['sf1_netinc']/1000000, 2)?>%</span></td>-->
                                    <td class="num"><span><?=$str_netinc;?></span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>R&D/매출액</span> <i class="indicator">(rnd/revenue) * 100</i></th>
                                    <!--<td class="num"><span><?=number_format($orig_mrq_data['sf1_rndratio']*100, 2)?>%</span></td>-->
                                    <td class="num"><span><?=$mrt_rndratio?>%</span></td>
                                </tr>

                            </tbody>
                          </table>

                          <!-- 가치평가 -->
                          <table cellspacing="0" border="1" class="tableRanking">
                            <colgroup>
                              <col width="100%">
                              <col width="70">
                            </colgroup>
                            <tbody>
                                <tr>
                                    <th colspan="2" class="th_ft"><span>가치평가</span><span class="day"><?=date('y.m/d', strtotime($mrt_data['sf1_reportperiod']))?></span></th>                                                  
                                </tr>
                                <tr>
                                    <th class="th"><span>PER</span> <i class="indicator">pe</i></th>
                                    <td class="num"><span><?=number_format($mrt_data['sf1_pe'], 2)?>배</span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>PBR</span> <i class="indicator">pb</i></th>
                                    <td class="num"><span><?=number_format($mrt_data['sf1_pb'], 2)?>배</span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>PSR</span> <i class="indicator">ps</i></th>
                                    <td class="num"><span><?=number_format($mrt_data['sf1_ps'], 2)?>배</span></td>
                                </tr>
                                <tr>
                                    <th class="th"><span>EV/EBIDTA</span> <i class="indicator">evebitda</i></th>
                                    <td class="num"><span><?=number_format($mrt_data['sf1_evebitda'], 2)?>배</span></td>
                                </tr>

                            </tbody>
                          </table>
                        </div>

                      </div>
                    </div>
                    <!-- //종목진단 -->

                  </div>
                  <!-- .tab_container -->
                </div>
                <!-- //tabsArea -->
              </div>

            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->
            </div>
          </div>
          <!-- //sub_top -->

          <!-- D05. 경쟁사 -->
          <h1 class="mt-4 offset_05">D05. 경쟁사</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid">
                <table cellspacing="0" border="1" class="tableRanking sum_table">
                  <colgroup>
                    <col width="100px">
                    <col width="90px">
                    <col width="70px">
                    <col width="60px">
                    <col width="">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">종목명</th>
                      <th scope="col">시가총액<br>(백만달러)</th>
                      <th scope="col">매출액<br>(백만달러)</th>
                      <th scope="col">영업이익</th>
                      <th scope="col">순이익</th>
                      <th scope="col">PER<br>(배)</th>
                      <th scope="col">PBR<br>(배)</th>
                      <th scope="col">PSR<br>(배)</th>
                      <th scope="col">ROE<br>(%)</th>
                      <th scope="col">ROA<br>(%)</th>
                      <th scope="col">ROIC<br>(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php
					$cnt=0;
					foreach(is_array($competitor) ? $competitor : array() as $cp) : 
					if($cnt>4) break;

					if($is_adr) $sf1_ipinc = $cp['sf1_opinc_ori']/1000000;
					else $sf1_ipinc = $cp['sf1_opinc'];
					?>

                    <tr>
                      <td class="name"><a href="/cms/main/index/<?=$cp['tkr_ticker']?>"><?=$ticker_info_map[$cp['tkr_ticker']]?> <span class="ticker"><?=$cp['tkr_ticker']?></span></a><?=($cnt==0) ? ' <i class="indicator">korname</i>':''?></td>
                      <td><?=$cp['dly_marketcap']?><?=($cnt==0) ? ' <i class="indicator">marketcap</i>':''?></td>
                      <td><?=$cp['sf1_revenueusd']?><?=($cnt==0) ? ' <i class="indicator">revenueusd</i>':''?></td>
                      <td><?=number_format(str_replace(',','',$sf1_ipinc)/$cp['sf1_fxusd']);?><?=($cnt==0) ? ' <i class="indicator">opinc/fxusd</i>':''?></td>
                      <td><?=number_format($cp['sf1_netinccmnusd']/1000000);?><?=($cnt==0) ? ' <i class="indicator">netinccmnusd</i>':''?></td>
                      <td><?=$cp['dly_pe']?><?=($cnt==0) ? ' <i class="indicator">pe</i>':''?></td>
                      <td><?=$cp['dly_pb']?><?=($cnt==0) ? ' <i class="indicator">pb</i>':''?></td>
                      <td><?=$cp['dly_ps']?><?=($cnt==0) ? ' <i class="indicator">ps</i>':''?></td>
                      <td><?=$cp['sf1_roe']?><?=($cnt==0) ? ' <i class="indicator">roe</i>':''?></td>
                      <td><?=$cp['sf1_roa']?><?=($cnt==0) ? ' <i class="indicator">roa</i>':''?></td>
                      <td><?=$cp['sf1_roic']?><?=($cnt==0) ? ' <i class="indicator">roic</i>':''?></td>
                    </tr>
                    <?php 
					$cnt++;
					endforeach; 
					?>
                  </tbody>
                </table>

              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

          <!-- D06. 검색목록 -->
          <h1 class="mt-4 offset_06">D06. 검색목록</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid tabs_area">
                <ul class="tabs">
                  <li class="active" rel="tab10">최신검색</li>
                  <li rel="tab11">인기검색</li>
                </ul>

                <div class="tab_container">
                  <!-- 최신검색 -->
                  <div id="tab10" class="tab_content">

					<table cellspacing="0" border="1" class="tableRanking sum_table">
					  <colgroup>
					    <col width="160px">
					    <col width="">
					    <col width="">
					    <col width="">
					    <col width="430px">
					  </colgroup>
					  <thead>
					    <tr>
					      <th scope="col">종목명</th>
					      <th scope="col">전일종가</th>
					      <th scope="col">등락률 (%)</th>
					      <th scope="col">투자매력</th>
					      <th scope="col">증권사의견</th>
					    </tr>
					  </thead>
					  <tbody>
					  <?php 
							$cnt=0;
							foreach($search_recent_data as $val) :	
								if($cnt>4) break;
								$class = 'decrease';
								if($val['ticker']['tkr_rate'] > 0) {
									$class = 'increase';
								}
					  ?>
					    <tr>
					      <td class="name"><a href="/cms/main/index/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?> <span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a> <?=($cnt==0) ? ' <i class="indicator">korname</i>':''?></td>
					      <td><?=$val['ticker']['tkr_close']?> <?=($cnt==0) ? ' <i class="indicator">close</i>':''?></td>
					      <td class="<?=$class?>"><?=$val['ticker']['tkr_rate_str']?><?=($cnt==0) ? ' <i class="indicator">Rate Str</i>':''?></td>
					      <td><?=$val['m_biz_total_score']?> <?=($cnt==0) ? ' <i class="indicator">biztotalscore</i>':''?></td>
					      <td style="text-align: left; padding-left: 10px;"><?=$this->mri_tb_model->getInvestOpinionByStar($val['an_opinion'])?>
					        <!--1) 강력매수 : 4.0 <= analystscore 2) 매수 : 3.0 <=analystscore < 4.0 3) 보유 : 2.0 <=analystscore < 3.0
					          4) 매도 : 1.0 <=analystscore < 2.0 5) 강력매도: 0 <=analystscore < 1.0 6) 없음 : analystscore=N/A
					          (참고용) QW 사용 계정 E610100.M--> <?=($cnt==0) ? ' <i class="indicator">analystscore</i>':''?></td>
					    </tr>
					  <?php $cnt++; endforeach;?>

					  </tbody>
					</table>
                  </div>
                  <!-- 인기검색 -->
                  <div id="tab11" class="tab_content">

					<table cellspacing="0" border="1" class="tableRanking sum_table">
					  <colgroup>
						<col width="160px">
						<col width="">
						<col width="">
						<col width="">
						<col width="430px">
					  </colgroup>
					  <thead>
						<tr>
						  <th scope="col">종목명</th>
						  <th scope="col">전일종가</th>
						  <th scope="col">등락률 (%)</th>
						  <th scope="col">투자매력</th>
						  <th scope="col">증권사의견</th>
						</tr>
					  </thead>
					  <tbody>
					  <?php 
							$cnt=0;
							foreach($search_popular_data as $val) :							
								$class = 'decrease';
								if($val['ticker']['tkr_rate'] > 0) {
									$class = 'increase';
								}
					  ?>
						<tr>
						  <td class="name"><a href="/cms/main/index/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?> <span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a> <?=($cnt==0) ? ' <i class="indicator">korname</i>':''?></td>
						  <td><?=$val['ticker']['tkr_close']?> <?=($cnt==0) ? ' <i class="indicator">close</i>':''?></td>
						  <td class="<?=$class?>"><?=$val['ticker']['tkr_rate_str']?><?=($cnt==0) ? ' <i class="indicator">Rate Str</i>':''?></td>
						  <td><?=$val['m_biz_total_score']?> <?=($cnt==0) ? ' <i class="indicator">biztotalscore</i>':''?></td>
						  <td style="text-align: left; padding-left: 10px;"><?=$this->mri_tb_model->getInvestOpinionByStar($val['an_opinion'])?>
							<!--1) 강력매수 : 4.0 <= analystscore 2) 매수 : 3.0 <=analystscore < 4.0 3) 보유 : 2.0 <=analystscore < 3.0
							  4) 매도 : 1.0 <=analystscore < 2.0 5) 강력매도: 0 <=analystscore < 1.0 6) 없음 : analystscore=N/A
							  (참고용) QW 사용 계정 E610100.M--> <?=($cnt==0) ? ' <i class="indicator">analystscore</i>':''?></td>
						</tr>
					  <?php $cnt++; endforeach;?>

					  </tbody>
					</table>
                  </div>
                </div>
              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

          <!-- D07. 최근실적발표-->
          <h1 class="mt-4 offset_07">D07. 최근실적발표</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid">
                <table cellspacing="0" border="1" class="tableRanking sum_table">
                  <colgroup>
                    <col width="100px">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">종목명</th>
                      <th scope="col">주가(달러)</th>
                      <th scope="col">등락률(%)</th>
                      <th scope="col">발표순이익(백만달러)</th>
                      <th scope="col">전년대비성장률(%)</th>
                    </tr>
                  </thead>
                  <tbody>
                  <?php $cnt=0; foreach($recent_report as $val) : ?>


                    <tr>
                      <td class="name"><a href="/cms/main/index/<?=$val['tkr_ticker']?>"><?=$val['tkr_name']?> <span class="ticker"><?=$val['tkr_ticker']?></span></a> <?=($cnt==0) ? ' <i class="indicator">korname</i>':''?></td>
                      <td><?=$val['tkr_close']?> <?=($cnt==0) ? ' <i class="indicator">close</i>':''?></td>
                      <td class="<?=($val['tkr_rate'] > 0) ? 'increase' : 'decrease'?>"><?=$val['tkr_rate_str']?><?=($cnt==0) ? ' <i class="indicator">Rate St</i>':''?></td>
                      <td><?=number_format($val['sf1_netinccmnusd']/1000000)?> <span class="dollar">백만달러</span><?=($cnt==0) ? ' <i class="indicator">netinc(sf1_netinccmnusd)</i>':''?></td>
                      <td><?=$recent_report_rates[$val['tkr_ticker']]?> <?=($cnt==0) ? ' <i class="indicator"></i>':''?></td>
                    </tr>
                    <?php $cnt++; endforeach; ?>
                  </tbody>
                </table>

              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

          <!-- D08. 전종목투자매력도-->
          <h1 class="mt-4 offset_08">D08. 전종목투자매력도</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid">
                <table cellspacing="0" border="1" class="tableRanking sum_table">
                  <colgroup>
                    <col width="100px">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                    <col width="">
                  </colgroup>
                  <thead>
                    <tr>
                      <th scope="col">종목명</th>
                      <th scope="col">종합점수</th>
                      <th scope="col">배당매력</th>
                      <th scope="col">사업독점력</th>
                      <th scope="col">재무안전성</th>
                      <th scope="col">수익성장성</th>
                      <th scope="col">현금창출력</th>
                    </tr>
                  </thead>
                  <tbody>
                    <?php $cnt=0; foreach($attractive_data as $val) : ?>
                    <tr>
                      <td class="name"><a href="/cms/main/index/<?=$val['m_ticker']?>"><?=$val['m_korname']?> <span class="ticker"><?=$val['m_ticker']?></span></a> <?=($cnt==0) ? '<i class="indicator">korname</i>':''?></td>
                      <td><?=$val['m_biz_total_score']?> <?=($cnt==0) ? '<br><i class="indicator">biztotalscore</i>':''?></td>
                      <td><?=$val['m_biz_dividend_score']?> <?=($cnt==0) ? '<br><i class="indicator">bizdividendscore</i>':''?></td>
                      <td><?=$val['m_biz_moat_score']?> <?=($cnt==0) ? '<br><i class="indicator">bizmoatscore</i>':''?></td>
                      <td><?=$val['m_biz_safety_score']?> <?=($cnt==0) ? '<br><i class="indicator">bizsafetyscore</i>':''?></td>
                      <td><?=$val['m_biz_growth_score']?> <?=($cnt==0) ? '<br><i class="indicator">bizgrowthscore</i>':''?></td>
                      <td><?=$val['m_biz_cashflow_score']?> <?=($cnt==0) ? '<br><i class="indicator">bizcashflowscore</i>':''?></td>
                    </tr>  
                    <?php $cnt++; endforeach; ?>
                  </tbody>
                </table>

              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

          <!-- D09. 투자레시피-->
          <h1 class="mt-4 offset_09">D09. 투자레시피</h1>
          <div class="search_top view">
            <div class="div_left">
              <div class="sub_mid">
                <table cellspacing="0" border="1" class="tableRanking sum_table">
                  <colgroup>
                    <col width="100px">
                    <col width="80">
                    <col width="80">
                    <col width="">
                    <!--<col width="">
                    <col width="">
                    <col width="">-->
                  </colgroup>
                  <thead>
                    <tr>
                      <th rowspan="2" scope="col">종목명</th>
                      <th rowspan="2" scope="col">주가(달러)</th>
                      <th rowspan="2" scope="col">등락률(%)</th>
                      <th colspan="2" scope="col">배당<br>매력주</th>                      
                    </th>
                    <tr>                                            
                      <th scope="col">배당매력</th>
                      <th scope="col">배당<br>수익률(%)	</th>

                    </tr>
                  </thead>
                  <tbody>
                    <?php $cnt=0; foreach($dividend_list as $val) : ?>

                    <tr>
                      <td class="name"><a href="/cms/main/index/<?=$val['m_ticker']?>"><?=$val['m_korname']?> <span class="ticker"><?=$val['m_ticker']?></span></a><?=($cnt==0) ? '<i class="indicator">korname</i>':''?></td>
                      <td><?=number_format($val['tkr_close'], 2)?><?=($cnt==0) ? '<br><i class="indicator">close</i>':''?></td>
                      <td class="<?=$val['tkr_diff'] > 0 ? 'in' : 'de'?>crease"><?=$val['tkr_rate_str']?><?=($cnt==0) ? '<br><i class="indicator">Rate Str</i>':''?></td>
                      <td><?=$val['m_biz_dividend_score']?><?=($cnt==0) ? '<br><i class="indicator">bizdividendscore</i>':''?></td>
                      <td><?=number_format($val['sf1_divyield']*100, 2);?> %<?=($cnt==0) ? '<br><i class="indicator">divyield</i>':''?></td>
                    </tr>
                    <?php $cnt++; endforeach; ?>
                  </tbody>
                </table>

              </div>
            </div>

            <div class="div_right">
              <div class="table_info">
                <ul></ul>
                <li>SEP 테이블</li>
                <li>DB업데이트 12:30 (주1회)</li>
                <a href="" class="byn_save">저장</a>
              </div>
              <!-- //table_info -->

            </div>
          </div>
          <!-- //sub_top -->

        </div>
        <!-- //container -->
      </div>
    </div>
    <!-- /#page-content-wrapper -->
  </div>
  <!-- /#wrapper -->