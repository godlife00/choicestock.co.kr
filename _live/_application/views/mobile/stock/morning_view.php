            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['e_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['e_display_date']))?></span>
                    <a href="/stock/morning" class="go_list">목록보기</a>
                </div>
                <div class="mid">
				<?php if(strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
				<?php $row['e_content'] = str_replace('_blank','_self',$row['e_content']);?>
				<?php endif;?>
                <?=nl2br($row['e_content'])?>
                </div>
                <a href="/stock/morning" class="go_list">목록보기</a>
            </div>