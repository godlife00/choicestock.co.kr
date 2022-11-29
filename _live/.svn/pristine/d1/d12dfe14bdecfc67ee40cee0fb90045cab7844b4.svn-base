			<?php
			//안드로이드 인앱 결제 후 삭제
			//if($this->session->userdata('user_ostype') != 'A') :?>
            <div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">전일 미국증시 주요지수와 포트폴리오 주요소식, 시황을 매일 아침 미국주식창 프리미엄 회원들께 발송합니다.</p>
                    </div>
                    <!-- //txt_box -->
                </div>
            </div>
            <!-- //sub_top -->
			<?php //endif;?>
            <div class="sub_mid research_board">
                <ul id="analysis_list" class="lst_type">
                    <?php $cnt=0; foreach($morning as $exp) : ?>
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
                    <?php $cnt++; endforeach; ?>
                </ul>
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
                $.post('/<?=WT?>_stock/ajax_get_morning_list', {'page': page}, function(res) {
                    if($.trim(res).length) {
                        $('#analysis_list').append(res);
                    } else {
                        $('.btn_more').hide();
                    }
                    is_loading = false;
                });
            }
            </script>