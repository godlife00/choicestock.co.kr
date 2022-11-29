<?php foreach($vod_mjm_list as $val) : ?>
					<div class="video_box<?=($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
						<?php if($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
						<a href="javascript:fnSinChung();">
						<?php else :?>
						<a href="/<?=EG?>_stock/vod_view/<?=$val['vm_id']?>">
						<?php endif;?>
							<img class="video_thumbnail" src="https://hero.datahero.co.kr<?=$val['vm_main_thumbnail']?>">
							<p class="video_title"><span><?=$val['vm_title']?></span></p>
						</a>
					</div>
<?php endforeach; ?>
