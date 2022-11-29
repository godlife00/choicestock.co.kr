<?php foreach($wowtv_vod_list as $val) :?>
					<li>
						<dl class="lst_type2">
							<dt class="tit"><a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>"><strong><?=$val['vw_title']?></strong></a><span class="reg_day"><?=date('y.m/d H:i', strtotime($val['vw_display_date']))?></span></dt>
							<dd class="photo"><a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>"><img class="video_thumbnail" src="<?=$val['vw_thumbnail']?>"></a>
							</dd>
						</dl>
					</li>
<?php endforeach; ?>