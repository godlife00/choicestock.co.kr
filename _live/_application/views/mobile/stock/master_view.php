            <div class="sub_top view">
                <div class="layer_box">
                    <dl class="master">
                        <dt class="name"><?=$master['ms_korguru']?> <span>(<?=$master['ms_guru']?>)</span></dt>
                        <dd class="sum"><?=$master['ms_introduce']?></dd>
                        <dd class="img">
                            <?php if(strlen($master['ms_image']) > 0 && file_exists(ATTACH_DATA.'/master/'.$master['ms_image'])) : ?>
                            <img src="/webdata/attach_data/master/<?=$master['ms_image']?>" alt="<?=$master['ms_korguru']?>" />
                            <?php else : ?>
                            <img src="/img/warrent_Buffett_ra.png" alt="<?=$master['ms_korguru']?>">
                            <?php endif; ?>
                        </dd>
                    </dl>
                    <div class="spec_table">
                        <dl>
                            <dt class="th">편입종목</dt>
                            <dd class="td"><?=number_format($master['ms_stocks'])?>개</dd>
                        </dl>
                        <dl>
                            <dt class="th">신규 매수 종목</dt>
                            <dd class="td"><?=number_format($master['ms_newstocks'])?>개</dd>
                        </dl>
                        <dl>
                            <dt class="th">10년 연평균 수익률</dt>
                            <dd class="td"><?=$master['ms_10yavgreturn']?>%</dd>
                        </dl>
                    </div>
                    <!-- //spec_table -->
                    <div class="tag">
                        <h3 class="title">대표종목</h3>
                        <?php foreach($master['rp_ticker'] as $key => $val) : ?>
                        <span><a href="/search/invest_charm/<?=$key?>"><?=$val['name']?></a></span>
                        <?php endforeach; ?>
                    </div>
                    <!-- //tag -->
                </div>
                <!-- //layer_box -->
            </div>

            <div class="sub_mid master_area view">
                <div class="bg_box">
                    <?php if(strlen($master_items['updated_at']) > 0) : ?>
                    <p class="updata">최근 포트폴리오 기준일 <?=substr($master['ms_portfoliodate'],2,2);?>.<?=substr($master['ms_portfoliodate'],5,2);?>/<?=substr($master['ms_portfoliodate'],8,2);?></p>
                    <?php endif; ?>
                    <p class="updata">ETF는 표시되지 않습니다.</p>
                    <table cellspacing="0" border="1" class="tableRanking master_table fix_table">
                        <colgroup>
                            <col width="80px">
                            <col width="">
                            <col width="">
                            <col width="">
                            <col width="">
                        </colgroup>
                        <tbody>
                            <tr>
                                <th colspan="2">매수가<br>(평균)</th>
                                <th>수익률<br>(%)</th>
                                <th>포트비중<br>(%)</th>
                                <th>최근매매</th>
                            </tr>
                            
                            <?php foreach($master_items['items'] as $val) : ?>
                            <tr>
                                <td class="title"><a href="/search/invest_charm/<?=$val['ticker']?>"><?=$val['ticker_name']?><span class="ticker"><?=$val['ticker']?></span></a></td>
                                <td class="num">
                                    <span><?=$val['avgprice']?></span>
                                </td>
                                <td class="per"><span class="<?=($val['returnrate'] > 0) ? 'increase' : 'decrease'?>"><?=$val['returnrate']?>%</span></td>
                                <!-- increase 증가, decrease 감소 -->
                                <td class="score"><span><?=$val['weighting']?></span></td>
                                <td class="recom"><span><?=$val['action']?></span></td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                    <!--<p class="dataLink">data from <a href="https://www.quandl.com/" target="_blank">Quandl and
                            Sharadar</a>
                    </p>-->

                </div>

            </div>
            <!-- //sub_mid -->

