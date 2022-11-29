            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['e_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['e_display_date']))?></span>
					<?php if($this->session->userdata('is_paid')===TRUE) :?> 
                    <a href="<?=$back_url?>" class="go_list">목록보기</a>
					<?php endif;?>
                </div>
                <div class="mid">
				<?php if($row['e_class'] == '3') :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',nl2br($row['e_content']))?>
				<?php else :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$row['e_content'])?>
				<?php endif;?>
                </div>
				<?php if($this->session->userdata('is_paid')===TRUE) :?> 
                <a href="<?=$back_url?>" class="go_list">목록보기</a>
				<?php endif;?>
            </div>

            <?php if(sizeof($explore) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php foreach($explore as $exp) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/<?=SK?>_stock/research_view/<?=$exp['e_id']?>"><strong><?=nl2br($exp['e_title'])?></strong></a></dt>
                            <?php if(strlen($exp['e_thumbnail']) > 0) : ?>
                            <dd class="photo"><a href="/<?=SK?>_stock/research_view/<?=$exp['e_id']?>"><img src="https://hero.datahero.co.kr<?=$exp['e_thumbnail']?>" alt=""></a></dd>
                            <?php endif; ?>
                        </dl>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>