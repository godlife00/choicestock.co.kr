<?php foreach($vod_mjm_list as $val) : ?>
					<div class="video_box<?=($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
						<?php if($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
						<a href="#" data-modal="modal-3" class="btn_free md-trigger">
						<?php else :?>
						<a href="/<?=WT?>_stock/vod_view/<?=$val['vm_id']?>">
						<?php endif;?>
							<?php if($val['vm_main_thumbnail']) :?>
							<img class="video_thumbnail" src="https://hero.datahero.co.kr<?=$val['vm_main_thumbnail']?>">
							<?php else :?>
							<img class="video_thumbnail" src="/img/wowtv/bg_wow_video.jpg">
							<?php endif;?>
							<p class="video_title"><span><?=$val['vm_title']?></span>
							<?php if($this_page == 'vod') :?>
							<i class="reg_day"><?=date('y.m/d', strtotime($val['vm_display_date']))?></i>
							<?php endif;?>							
							</p>
						</a>
					</div>
<?php endforeach; ?>
