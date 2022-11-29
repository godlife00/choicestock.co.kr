			<div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['e_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['e_display_date']))?></span>
                    <a href="<?=$back_url?>" class="go_list">목록보기</a>
                </div>
                <div class="mid">
				<?php if(strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
				<?php $row['e_content'] = str_replace('_blank','_self',$row['e_content']);?>
				<?php endif;?>
				<?php if($row['e_class'] == '3') :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',nl2br($row['e_content']))?>
				<?php else :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$row['e_content'])?>
				<?php endif;?>

				<?php if($row['e_id'] == '846' && $is_mobile === false) :?>
				<a href="https://play.google.com/store/apps/details?id=us.wowtv.app" target="_blank">☞ 미국 주식창 다운로드 받기</a>
				<?php endif;?>
                </div>
                <a href="<?=$back_url?>" class="go_list">목록보기</a>
            </div>

			<?php if($this->session->userdata('is_paid')===FALSE) :?>
				<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
					<!-- 구글 에드센스 표 하단 -->
					<div style="margin:15px 15px 0; text-align: center;">                
						<!-- 디스플레이(사각) -->
						<ins class="adsbygoogle"
							style="display:block"
							data-ad-client="ca-pub-6864430327621783"
							data-ad-slot="3945317009"
							data-ad-format="auto"
							data-full-width-responsive="true"></ins>
						<script>
							(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
					</div>
					<!-- //구글 에드센스 -->
				<?php endif;?>
			<?php endif;?>

            <?php if(sizeof($explore) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php $cnt=0; foreach($explore as $exp) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/stock/research_view/<?=$exp['e_id']?>"><strong><?=nl2br($exp['e_title'])?></strong></a></dt>
                            <?php if(strlen($exp['e_thumbnail']) > 0) : ?>
                            <dd class="photo"><a href="/stock/research_view/<?=$exp['e_id']?>"><img src="https://hero.datahero.co.kr<?=$exp['e_thumbnail']?>" alt=""></a></dd>
                            <?php endif; ?>
                        </dl>
                    </li>
						<?php if($cnt==1) :?>
							<?php if($this->session->userdata('is_paid')===FALSE) :?>
								<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
									<!-- 구글 에드센스 본문 하단 > 인기글 -->
									<div style="margin:20px 15px 20px; text-align: center;">                
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
								<?php endif;?>
							<?php endif;?>
						<?php endif;?>
                    <?php $cnt++; endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>     
