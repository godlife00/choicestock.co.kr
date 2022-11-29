
<?php foreach($morning as $exp) : ?>
                    <li>
                        <dl class="lst_type2 none_img<?=($this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
                            <dt class="tit">
                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
                            <a href="#" data-modal="modal-3" class="btn_free md-trigger">
                            <?php else :?>
                            <a href="/<?=WT?>_stock/morning_view/<?=$exp['e_id']?>">
                            <?php endif;?>
                            <strong><?=$exp['e_title']?></strong></a><p class="day"><?=date('y.m/d',strtotime($exp['e_display_date']))?></p></dt>
                        </dl>
                    </li>
<?php endforeach; ?>


