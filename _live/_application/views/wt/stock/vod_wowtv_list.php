<?php foreach($wowtv_vod_list as $val) : ?>
					<li>
						<dl class="lst_type2 lst_lock">
							<dt class="tit"><a href="/<?=WT?>_stock/news_view/<?=$val['vw_id']?>"><strong><?=$val['vw_title']?></strong></a></dt>
							<dd class="photo"><a href="/<?=WT?>_stock/news_view/<?=$val['vw_id']?>"><img class="video_thumbnail" src="<?=$val['vw_thumbnail']?>"></a>
							</dd>
						</dl>
					</li>
<?php endforeach; ?>
