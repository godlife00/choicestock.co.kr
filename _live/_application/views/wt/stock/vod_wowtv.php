			<?php include_once WT_INC_PATH.'/find_submenu.php'; ?>
            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">실적 및 배당 발표 기업과 시장에서 관심있는 테마에 대한 종목 리스트를 제공합니다.</p>
                    </div>
                    <!-- //txt_box -->
                </div>
                <div class="swiper-container swiper-research">
                    <div class="swiper-wrapper">
                        <?php foreach($top_research as $key => $val) : ?>
                        <div class="swiper-slide">
                            <div class="best_research">
								<?php if($val['e_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
								<a href="#" data-modal="modal-3" class="btn_free md-trigger">
								<?php else :?>
								<a href="/<?=WT?>_stock/research_view/<?=$val['e_id']?>">
								<?php endif;?>												
								<h4 class="title"><?=nl2br($val['e_title'])?></h4></a>
                            </div>
                            <!-- //best_research -->
                        </div>
                        <!-- //swiper-slide -->
                        <?php endforeach; ?>
                    </div>
                    <!-- //swiper-wrapper -->
                    <div class="swiper-pagination"></div>
                </div>
                <!-- //swiper-container -->
            </div>
            <!-- //sub_top -->

            <div class="sub_mid research_board">
                <div class="video_tabs">
                    <a href="/<?=WT?>_stock/wowtv"<?=($this_page == 'wowtv') ? ' class="active"':''?>>한국경제TV</a>
					<a href="/<?=WT?>_stock/note" class="">종목노트</a>                    
					<a href="/<?=WT?>_stock/research" class="">탐구생활</a>                    
					<a href="/<?=WT?>_stock/vod" class="">동영상==</a>                    
                </div>
                
                <div  id="analysis_list" class="lst_type video_list">
					<?php foreach($wowtv_vod_list as $key=>$val) :?>
					<div class="video_box">
						<a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>">
							<img class="video_thumbnail" src="<?=$val['vw_thumbnail']?>">
							<p class="video_title"><span><?=$val['vw_title']?></span></p>
						</a>
					</div>
					<?php endforeach;?>
                </div>
                
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>
                <!-- //btn_more -->
            </div>
            <!-- //sub_mid -->

            <script>
            var page = 1;
            var is_loading = false;
            function view_more() {
                if(is_loading) {
                    return;
                }
                is_loading = true;
                
                page += 1;
                $.post('/<?=WT?>_stock/ajax_get_wowtv_list', {'page': page}, function(res) {
                    if($.trim(res).length) {
                        $('#analysis_list').append(res);
                    } else {
                        $('.btn_more').hide();
                    }
                    is_loading = false;
                });
            }
            </script>