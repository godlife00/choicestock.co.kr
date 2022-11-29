                <!-- 동영상 -->
                <div class="main_mid youtube_mijumi">
					<?php if($this->session->userdata('is_paid')===TRUE) :?>
                    <h3 class="title"><a href="/<?=KW?>_stock/vod">동영상</a></h3>
                    <a href="/<?=KW?>_stock/vod" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
					<?php else :?>
                    <h3 class="title">동영상</h3>
					<?php endif;?>

                    <div class="swiper-container mijumiSwiper">
                        <div class="swiper-wrapper">
                            <?php $vmcnt=0; foreach($vod_mjm_list as $key=>$val) :?>
							<?php if($val['vm_display_date'] > date('Y-m-d H:i:s') || ($val['vm_view_srv'] != 'M' && $val['vm_view_srv'] != '')) continue;?>
                            <?php if($vmcnt > 3) break;?>
                            <div class="swiper-slide">
                                <div class="video_box">
									<?php if($this->session->userdata('is_paid')===TRUE) :?>
                                    <a href="/<?=KW?>_stock/vod_view/<?=$val['vm_id']?>">
									<?php else :?>
                                    <a href="javascript:fnSinChung();">
									<?php endif;?>
                                        <img class="video_thumbnail" src="https://hero.datahero.co.kr/webdata/attach_data/vod_mjm/<?=$val['vm_main_thumbnail']?>">
                                        <p class="video_title"><span><?=$val['vm_title']?></span></p>
                                    </a>
                                </div>
                            </div>
                            <?php $vmcnt++; endforeach;?>
                        </div>
                    </div>
                    <!-- mijumiSwiper -->
                </div>
                <!-- //youtube_mijumi -->