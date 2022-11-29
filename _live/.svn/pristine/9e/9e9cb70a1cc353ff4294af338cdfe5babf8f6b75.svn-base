            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['e_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['e_display_date']))?></span>
                    <a href="/<?=HN?>_stock/research" class="go_list">목록보기</a>
                </div>
                <div class="mid">
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$row['e_content'])?>
                </div>
                <a href="/<?=HN?>_stock/research" class="go_list">목록보기</a>
            </div>

            <?php if(sizeof($explore) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php foreach($explore as $exp) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/<?=HN?>_stock/research_view/<?=$exp['e_id']?>"><strong><?=nl2br($exp['e_title'])?></strong></a></dt>
                            <?php if(strlen($exp['e_thumbnail']) > 0) : ?>
                            <dd class="photo"><a href="/<?=HN?>_stock/research_view/<?=$exp['e_id']?>"><img src="https://hero.datahero.co.kr<?=$exp['e_thumbnail']?>" alt=""></a></dd>
                            <?php endif; ?>
                        </dl>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>

        </div>
        <!-- //container -->
        
