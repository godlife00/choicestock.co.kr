            <?php include_once KW_INC_PATH.'/find_submenu.php'; ?>
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
                                <a href="javascript:fnSinChung();">
                                <?php else :?>
                                <a href="/<?=KW?>_stock/research_view/<?=$val['e_id']?>">
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
                    <a href="/<?=KW?>_stock/research" class="">종목톡톡</a>                    
                    <a href="/<?=KW?>_stock/vod" class="active">동영상</a>                    
                </div>
                
                <div  id="analysis_list" class="lst_type video_list">
                    <?php $vmcnt=0; foreach($vod_mjm_list as $key=>$val) :?>
					<?php if($val['vm_display_date'] > date('Y-m-d H:i:s') || ($val['vm_view_srv'] !='' && $val['vm_view_srv'] !='M')) continue;?>
                    <?php if($vmcnt > 14) break;?>
                    <div class="video_box">
						<?php if($this->session->userdata('is_paid')===FALSE) :?>
						<a href="javascript:fnSinChung();">
						<?php else :?>
                        <a href="/<?=KW?>_stock/vod_view/<?=$val['vm_id']?>">
						<?php endif;?>
                            <img class="video_thumbnail" src="https://hero.datahero.co.kr/webdata/attach_data/vod_mjm/<?=$val['vm_main_thumbnail']?>">
                            <p class="video_title"><span><?=$val['vm_title']?></span></p>
                        </a>
                    </div>
                    <?php $vmcnt++; endforeach;?>
                </div>
                
                <?php //if(count($vod_mjm_list)>15) :?>
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기...</a>
                </div>
                <?php //endif;?>
                <!-- //btn_more -->
            </div>
            <!-- //sub_mid -->

            <?php //if(count($vod_mjm_list)>15) :?>
            <script>
            var page = 1;
            var is_loading = false;
            function view_more() {
                if(is_loading) {
                    return;
                }
                is_loading = true;
                
                page += 1;
                $.post('/kw_stock/ajax_get_vod_list', {'page': page}, function(res) {
                    if($.trim(res).length) {
                        $('#analysis_list').append(res);
                    } else {
                        $('.btn_more').hide();
                    }
                    is_loading = false;
                });
            }
            </script>
            <?php //endif;?>