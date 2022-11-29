                <?=$ticker_header?>
<?php if($sec_ticker=='' && $pri_ticker=='') {?>
            <?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE) :?>
            <div class="sub_mid competitors_table">
                <h4 class="tltle">경쟁사</h4>
                <span class="sum"><?=$api_ticker['tkr_industry']?></span>

                <span class="title_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span>
                <div class="guide_box hide" style="display: none;">
                    <span class="clse">닫기</span>
                    <ul>
                        <li>경쟁사는 동일 업종 내 기업을 시가총액 규모로 그룹을 나누어(Mega, Large, Mid, Small, Micro, Nano) 동일 그룹에 속한 기업을
                            표시하고 있습니다. </li>
                    </ul>
                </div>

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
                            <th>*매출액 <span>(백만달러)</span></th>
                            <th>PER<span>(배)</span></th>
                            <th>PBR<span>(배)</span></th>
                            <th>ROE<span>(%)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php $cnt=0; foreach(is_array($competitor) ? $competitor : array() as $cp) : ?>
                        <?php 
                            $comp_adr = false;
                            //2020.08.26 변경 if(strtoupper($cp['tkr_category'])=='ADR' || strtoupper($cp['tkr_category']) =='ADR PRIMARY' || strtoupper($cp['tkr_category'])=='CANADIAN' || strtoupper($cp['tkr_category'])=='CANADIAN PRIMARY') {
                            if( strstr(strtoupper($cp['tkr_category']), 'ADR') || strstr(strtoupper($cp['tkr_category']), 'CANADIAN') ) {
                                $comp_adr = true; 
                                $cnt++;
                            }
                        ?>
                        <tr>
                            <td class="name"><a href="/<?=KW?>_search/invest_charm/<?=$cp['tkr_ticker']?>"><?=$ticker_info_map[$cp['tkr_ticker']]?>
                                <span class="ticker"><?=$cp['tkr_ticker']?></span></a></td>
                            <td><?=($comp_adr === true) ? '*':''?><?=$cp['sf1_revenueusd']?></td>
                            <td><?=$cp['dly_pe']?></td>
                            <td><?=$cp['dly_pb']?></td>
                            <!--<td><?=$this->common->set_pricepoint($cp['sf1_roe'], '2')?></td>-->
                            <td><?=$cp['sf1_roe']?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
                <p class="table_guide">* 매출액 : 연환산 기준</p>
                <?php if($cnt>0) :?>
                <p class="table_guide">* 최근 경쟁사 비교를 위해 USD값으로 일괄조정</p>
                <?php endif;?>
            </div>
            <!-- //sub_mid -->    
            <?php else :?>
            <?php //include_once KW_INC_PATH.'/premium_banner.php'; ?>
            <?php endif;?>
<?php }else{?>
        <!-- 주요 콘텐츠 -->
        <div class="sub_mid nondata">
            <p class="nodata_guide"><strong><?=$sec_ticker;?></strong>의 상세 기업정보는 <strong><a href="/<?=KW?>_search/invest_charm/<?=$pri_ticker?>"><?=$pri_ticker?></a></strong> 종목에서 확인할 수 있습니다.</p>
        </div>
        <!-- //sub_mid nondata -->
<?php }?>

