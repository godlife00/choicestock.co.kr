            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['vm_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['vm_display_date']))?></span>
                    <a href="/stock/vod" class="go_list">목록보기</a>
                </div>
                <div class="mid">
				<?php $row['vm_content'] = str_replace('<iframe allowfullscreen','<div class="iframe_video"><iframe allowfullscreen',$row['vm_content']);?>
				<?php $row['vm_content'] = str_replace('width="100%"></iframe>','width="100%"></iframe></div>',$row['vm_content']);?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$row['vm_content'])?>
                </div>
                <a href="/stock/vod" class="go_list">목록보기</a>
            </div>

            <?php if(sizeof($vod_mjm) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php $cnt=0; foreach($vod_mjm as $mjm) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/stock/vod_view/<?=$mjm['vm_id']?>"><strong><?=nl2br($mjm['vm_title'])?></strong></a></dt>
                            <?php if(strlen($mjm['vm_main_thumbnail']) > 0) : ?>
                            <dd class="photo"><a href="/stock/vod_view/<?=$mjm['vm_id']?>"><img src="https://hero.datahero.co.kr/webdata/attach_data/vod_mjm/<?=$mjm['vm_main_thumbnail']?>" alt=""></a></dd>
                            <?php endif; ?>
                        </dl>
                    </li>
						<?php if($cnt==1) :?>
							<?php if($this->session->userdata('is_paid')===FALSE) :?>
							<!-- 구글 에드센스 본문 하단 > 인기글 -->                                                            
							<ins class="adsbygoogle"
								style="display:block"
								data-ad-format="fluid"
								data-ad-layout-key="-gy+4-8-1l+3n"
								data-ad-client="ca-pub-6864430327621783"
								data-ad-slot="4860094807"></ins>
							<script>
								(adsbygoogle = window.adsbygoogle || []).push({});
							</script>
							<!-- //구글 에드센스 -->							
							<?php endif;?>
						<?php endif;?>
                    <?php $cnt++; endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>

        </div>
        <!-- //container -->