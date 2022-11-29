<?php foreach($wowtv_news_list as $val) : ?>
					<li>
						<dl class="lst_type2">
							<dt class="tit">
								<a href="/<?=WT?>_stock/news_view/<?=$val['newsno']?>?pg=news"><strong><?=$val['title']?></strong></a>
								<span class="wtr_rep">한국경제TV</span>
								<span class="writer"><?=$val['makenm']?></span>
								<?php 
									$display_time = $val['makedt'];
									$display_time = preg_replace('/[^0-9]*/s', '', $display_time);
									if(strlen($display_time) == 13) $display_time = substr($display_time, 0, 8).'0'.substr($display_time, 8);
								?>
								<span class="reg_day"><?=date('y.m/d H:i', strtotime($display_time))?></span>
							</dt>                                        
							<dd class="photo"><a href="/<?=WT?>_stock/news_view/<?=$val['newsno']?>?pg=news"><img class="video_thumbnail" src="<?=$val['thumbnail']?>"></a>
							</dd>
						</dl>
					</li>
<?php endforeach; ?>