<?php foreach($news_list as $news) : ?>
                    <li>
                        <dl class="lst_type2<?=($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
                            <dt class="tit">
							<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
                            <a href="javascript:fnSinChung();">
							<?php else :?>
							<a href="/<?=MR?>_search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
							<?php endif;?>                                
                                <strong><?=$news['ni_title']?></strong></a>
                            </dt>
                            <dd class="photo">
								<?php if(strlen($news['ni_thumbnail']) > 0) : ?>
									<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
									<a href="javascript:fnSinChung();">
									<?php else :?>
									<a href="/<?=MR?>_search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
									<?php endif;?>
								<img src="<?=(strstr($news['ni_thumbnail'], 'http')) ? '':'https://hero.datahero.co.kr'?><?=$news['ni_thumbnail']?>" alt=""></a>
								<?php endif;?>
                            </dd>
                        </dl>
                    </li>
<?php endforeach; ?>


