            <div class="main_mid youtube_mijumi">
                <h3 class="title"><a href="/<?=WT?>_stock/wowtv">글로벌 한경</a></h3>
                <a href="/<?=WT?>_stock/wowtv" class="more">더보기<img src="/img/more_blue.png" alt="더보기"></a>
                <div class="swiper-container mijumiSwiper">
                    <div class="swiper-wrapper">
						<?php foreach($wowtv_vod_list as $key=>$val) :?>
						<div class="swiper-slide">
							<div class="video_box">
								<a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>">
									<img class="video_thumbnail" src="<?=$val['vw_main_thumbnail']?>">
									<p class="video_title"><span><?=$val['vw_title']?></span></p>
								</a>
							</div>
						</div>
						<?php endforeach;?>
                    </div>
                </div>
                <!-- mijumiSwiper -->
            </div>