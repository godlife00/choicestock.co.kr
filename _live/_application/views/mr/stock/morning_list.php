
<?php foreach($morning as $exp) : ?>
                    <li>
                        <dl class="lst_type2 none_img<?=($this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
                            <dt class="tit">
							<p class="day"><?=date('m/d',strtotime($exp['e_display_date']))?></p>
                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
                            <a href="javascript:fnSinChung();">
                            <?php else :?>
                            <a href="/<?=MR?>_stock/morning_view/<?=$exp['e_id']?>">
                            <?php endif;?>
                            <strong><?=$exp['e_title']?></strong></a></dt>
                        </dl>
                    </li>
<?php endforeach; ?>


