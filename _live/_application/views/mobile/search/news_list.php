<?php $cnt=0; foreach($news_list as $news) : ?>
                    <li>
                        <dl class="lst_type2<?=($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
                            <dt class="tit">
							<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
							<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
							<?php else :?>
							<a href="/search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
							<?php endif;?>                                
                                <strong><?=$news['ni_title']?></strong></a>
                            </dt>
                            <dd class="photo">
								<?php if(strlen($news['ni_thumbnail']) > 0) : ?>
									<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
									<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger">
									<?php else :?>
									<a href="/search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
									<?php endif;?>
								<img src="<?=(strstr($news['ni_thumbnail'], 'http')) ? '':'https://hero.datahero.co.kr'?><?=$news['ni_thumbnail']?>" alt=""></a>
								<?php endif;?>
                            </dd>
                        </dl>
                    </li>
					<?php if($cnt==2 || $cnt==6) :?>
						<?php if($this->session->userdata('is_paid')===FALSE) :?>
							<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
							<li>
							<!-- 구글 에드센스 투자포인트 상단 -->
							<div style="margin:0 15px 0; text-align: center;">                
								<!-- 디스플레이(수평) -->
								<ins class="adsbygoogle example_responsive_1"
									style="display:inline-block"
									data-ad-client="ca-pub-6864430327621783"
									data-ad-slot="9421426429"></ins>                                                    
								<script>
								(adsbygoogle = window.adsbygoogle || []).push({});
								</script>
							</div>
							<!-- //구글 에드센스 -->
							</li>
							<?php endif;?>
						<?php endif;?>
					<?php endif;?>
<?php $cnt++; endforeach; ?>


