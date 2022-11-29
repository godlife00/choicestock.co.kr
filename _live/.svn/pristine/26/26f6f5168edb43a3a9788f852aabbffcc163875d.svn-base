<?php foreach($vod_mjm_list as $val) : ?>
					<div class="video_box<?=($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
						<?php if($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
						<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
						<?php else :?>
						<a href="/stock/vod_view/<?=$val['vm_id']?>">
						<?php endif;?>
							<img class="video_thumbnail" src="https://hero.datahero.co.kr/webdata/attach_data/vod_mjm/<?=$val['vm_main_thumbnail']?>">
							<p class="video_title"><span><?=$val['vm_title']?></span></p>
						</a>
					</div>
<?php endforeach; ?>
