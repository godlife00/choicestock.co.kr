            <div class="main_mid note_area">
                <h3 class="title"><a href="/<?=WT?>_stock/note">종목노트</a></h3>
                <a href="/<?=WT?>_stock/note" class="more">더보기<img src="/img/more_blue.png" alt="더보기"></a>
                <ul class="lst_type">
					<?php $cnt=0; foreach($note_list as $note) :?>
					<?php if($note['e_display_date'] > date('Y-m-d H:i:s') || $note['e_view_wt'] != 'Y') continue;?>
					<?php if($cnt>1) break;?>
					<li>
						<dl class="lst_type2<?=($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
							<dt class="tit">
								<?php if($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
								<a href="#" data-modal="modal-3" class="btn_free md-trigger">
								<?php else :?>
								<a href="/<?=WT?>_stock/research_view/<?=$note['e_id']?>">
								<?php endif;?>
								<strong><?=$note['e_title']?></strong></a>
							</dt>
							<dd class="photo">
								<?php if($note['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
								<a href="#" data-modal="modal-3" class="btn_free md-trigger">
								<?php else :?>
								<a href="/<?=WT?>_stock/research_view/<?=$note['e_id']?>">
								<?php endif;?>
								<?php if($note['e_thumbnail']!='') :?>
								<img src="<?=(strstr($note['e_thumbnail'], 'http')) ? '':'https://hero.datahero.co.kr'?><?=$note['e_thumbnail']?>"></a>
								<?php endif;?>
								</a>
							</dd>
						</dl>
					</li>
					<?php $cnt++; endforeach;?>
                </ul>
                <!-- //lst_type -->
            </div>

