			<div class="main_mid note_area">
				<h3 class="title"><a href="/stock/note">종목노트</a></h3>
				<a href="/stock/note" class="more"><img src="/img/more_Black.png" alt="더보기"></a>                    
				<ul class="lst_type">
					<?php $cnt=0; foreach($note_list as $note) :?>
					<?php if($note['e_display_date'] > date('Y-m-d H:i:s') || $note['e_view_cs'] != 'Y') continue;?>
					<?php if($cnt>2) break;?>
					<li>
						<dl class="lst_type2<?=($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
							<dt class="tit">
								<?php if($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
								<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
								<?php else :?>
								<a href="/stock/research_view/<?=$note['e_id']?>">
								<?php endif;?>
								<strong><?=$note['e_title']?></strong></a>
							</dt>
							<dd class="photo">
								<?php if($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
								<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
								<?php else :?>
								<a href="/stock/research_view/<?=$note['e_id']?>">
								<?php endif;?>
								<?php if($note['e_thumbnail']!='') :?>
								<img src="https://hero.datahero.co.kr<?=$note['e_thumbnail']?>">
								<?php endif;?>
								</a>
							</dd>
						</dl>
					</li>
					<?php $cnt++; endforeach;?>
				</ul>
				<!-- //lst_type -->
			</div>