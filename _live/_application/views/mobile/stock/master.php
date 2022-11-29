            <div class="sub_mid master_area">
                <?php foreach($master as $mas) : ?>
                <div class="layer_box">
                    <dl class="master">
                        <dt class="name"><a href="/stock/master_view/<?=$mas['ms_id']?>"><?=$mas['ms_korguru']?> <span>(<?=$mas['ms_guru']?>)</span></a></dt>
                        <dd class="sum"><?=$mas['ms_introduce']?></dd>
                        <dd class="img">
                            <?php if(strlen($mas['ms_image']) > 0 && file_exists(ATTACH_DATA.'/master/'.$mas['ms_image'])) : ?>
                            <img src="/webdata/attach_data/master/<?=$mas['ms_image']?>" alt="<?=$mas['ms_korguru']?>" />
                            <?php else : ?>
                            <img src="/img/warrent_Buffett_ra.png" alt="<?=$mas['ms_korguru']?>">
                            <?php endif; ?>
                        </dd>
                    </dl>
                    <div class="spec_table">
                        <dl>
                            <dt class="th">편입종목</dt>
                            <dd class="td"><?=number_format($mas['ms_stocks'])?>개</dd>
                        </dl>
                        <dl>
                            <dt class="th">신규 매수 종목</dt>
                            <dd class="td"><?=number_format($mas['ms_newstocks'])?>개</dd>
                        </dl>
                        <dl>
                            <dt class="th">10년 연평균 수익률</dt>
                            <dd class="td"><?=$mas['ms_10yavgreturn']?>%</dd>
                        </dl>
                    </div>
                    <!-- //spec_table -->
                    <div class="tag">
                        <h3 class="title">대표종목</h3>
                        <?php foreach($mas['rp_ticker'] as $key => $val) : ?>
                        <span><a href="/search/invest_charm/<?=$key?>"><?=$val['name']?></a></span>
                        <?php endforeach; ?>
                    </div>
                    <!-- //tag -->
                </div>
                <!-- //layer_box -->
                <?php endforeach; ?>
   
            </div>
            <!-- //sub_mid -->
