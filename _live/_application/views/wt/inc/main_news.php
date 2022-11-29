			<!-- 주요뉴스 -->
            <div class="main_mid note_area new_list">
                <h3 class="title"><a href="/<?=WT?>_stock/news/news#news_list">주요뉴스</a></h3>
                <a href="/<?=WT?>_stock/news/news#news_list" class="more">더보기<img src="/img/more_blue.png" alt="더보기"></a>
                <ul class="lst_type">
					<?php foreach($news_list as $news) :?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit">
                                <a href="/<?=WT?>_stock/news_view/<?=$news['newsno']?>?pg=news"><strong><?=$news['title']?></strong></a>
								<?php 
									$display_time = $news['makedt'];
									$display_time = preg_replace('/[^0-9]*/s', '', $display_time);
									if(strlen($display_time) == 13) $display_time = substr($display_time, 0, 8).'0'.substr($display_time, 8);
								?>
                                <span class="reg_day"><?=date('y.m/d H:i', strtotime($display_time))?></span>
                            </dt>
                            <dd class="photo">
                                <a href="/<?=WT?>_stock/news_view/<?=$news['newsno']?>?pg=news"><img class="video_thumbnail" src="<?=$news['thumbnail']?>"></a>
                            </dd>
                        </dl>
                    </li>
					<?php endforeach;?>
                </ul>
                <!-- //lst_type -->
            </div>
            <!-- //note_area -->        