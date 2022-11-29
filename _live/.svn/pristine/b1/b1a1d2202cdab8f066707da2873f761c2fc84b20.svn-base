            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$title?></h5>
                    <?php if($writer_name !=''):?><span class="writer"><?=$writer_name?></span><?php endif;?><span class="day"><?=date('y.m/d', strtotime($display_date))?></span>
                    <a href="/<?=HN?>_search/news/<?=$ticker?>" class="go_list">목록보기</a>
                </div>
                <div class="mid">
				<?php $content = str_replace('<iframe allowfullscreen','<div class="iframe_video"><iframe allowfullscreen',$content);?>
				<?php $content = str_replace('width="100%"></iframe>','width="100%"></iframe></div>',$content);?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$content)?>
                </div>
                <a href="/<?=HN?>_search/news/<?=$ticker?>" class="go_list">목록보기</a>
            </div>
        </div>
        <!-- //container -->
        
