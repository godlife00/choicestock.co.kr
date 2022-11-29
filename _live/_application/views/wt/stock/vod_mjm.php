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
				<?php
				//안드로이드 인앱 결제 후 삭제
				//if($this->session->userdata('user_ostype') != 'A') :
				?>
                <div class="expert_corner">
                    <h5 class="title">전문가 코너</h5>                    
                    <ul class="list">
                        <li><a href="javascript:fnFormSubmit('expert_form2');"><img src="/img/wowtv/expert_corner_banner01_new.png" alt="전문가 김종철"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form1');"><img src="/img/wowtv/expert_corner_banner02_new.png" alt="전문가 이헌상"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form9');"><img src="/img/wowtv/expert_corner_banner09.jpg" alt="전문가 한동훈"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form3');"><img src="/img/wowtv/expert_corner_banner03.png" alt="전문가 강동진"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form4');"><img src="/img/wowtv/expert_corner_banner04.jpg" alt="전문가 심재용"></a></li>
                        <?php 
						/* 
						<li><a href="javascript:fnFormSubmit('expert_form7');"><img src="/img/wowtv/expert_corner_banner07.jpg" alt="전문가 박한샘"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form8');"><img src="/img/wowtv/expert_corner_banner08.jpg" alt="전문가 송관종"></a></li>
                        <li><a href="javascript:fnFormSubmit('expert_form5');"><img src="/img/wowtv/expert_corner_banner05.jpg" alt="전문가 최성민"></a></li>
						*/
						?>
                        <li><a href="javascript:fnFormSubmit('expert_form6');"><img src="/img/wowtv/expert_corner_banner06.jpg" alt="전문가 게시판"></a></li>
                        <li><!-- 공백 --></li>
                    </ul>
                </div>
                <!-- //expert_corner -->
				<?php //endif;?>
                <div class="video_tabs">
					<a href="/<?=WT?>_stock/note" class="">종목노트</a>                    
					<a href="/<?=WT?>_stock/research" class="">탐구생활</a>                    
					<?php if($is_google === FALSE ):?>
					<a href="/<?=WT?>_stock/vod"<?=($this_page == 'vod') ? ' class="active"':''?>>VIP 전략</a>
					<a href="/<?=WT?>_stock/vod/edu"<?=($this_page == 'edu') ? ' class="active"':''?>>길잡이</a>
					<?php endif;?>
                </div>
                
                <div  id="analysis_list" class="lst_type video_list">
					<?php $vmcnt=0; foreach($vod_mjm_list as $key=>$val) :?>
					<?php if($val['vm_display_date'] > date('Y-m-d H:i:s') || $val['vm_view_wt'] !='Y' || ($this_page == 'vod' && $val['vm_view_srv'] == '1')) continue;?>
					<?php if($vmcnt > 14) break;?>
					<div class="video_box<?=($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
						<?php if($val['vm_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
						<a href="#" data-modal="modal-3" class="btn_free md-trigger">
						<?php else :?>
						<a href="/<?=WT?>_stock/vod_view/<?=$val['vm_id']?>">
						<?php endif;?>
							<?php if($val['vm_main_thumbnail']) :?>
							<img class="video_thumbnail" src="https://hero.datahero.co.kr<?=$val['vm_main_thumbnail']?>">
							<?php else :?>
							<img class="video_thumbnail" src="/img/wowtv/bg_wow_video.jpg">
							<?php endif;?>
							<p class="video_title"><span><?=$val['vm_title']?></span>
							<?php if($this_page == 'vod') :?>
							<i class="reg_day"><?=date('y.m/d', strtotime($val['vm_display_date']))?></i>
							<?php endif;?>							
							</p>
						</a>
					</div>
					<?php $vmcnt++; endforeach;?>
                </div>
                
				<?php if($vmcnt>0 && count($vod_mjm_list)>15) :?>
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>
				<?php endif;?>
                <!-- //btn_more -->
            </div>
            <!-- //sub_mid -->
			<?php
			//안드로이드 인앱 결제 후 삭제
			//if($this->session->userdata('user_ostype') != 'A') :
			?>
			<form name="expert_form1" id="expert_form1" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="31">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form2" id="expert_form2" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="32">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form3" id="expert_form3" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="33">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form4" id="expert_form4" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="36">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form6" id="expert_form6" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="28">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form9" id="expert_form9" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="61">
				<input type="hidden" name="ver" value="2">
			</form>
			<?php 
			/*
			<form name="expert_form5" id="expert_form5" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="37">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form7" id="expert_form7" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="39">
				<input type="hidden" name="ver" value="2">
			</form>
			<form name="expert_form8" id="expert_form8" method="post" action="https://stockwin.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
				<input type="hidden" name="hidden" value="40">
				<input type="hidden" name="ver" value="2">
			</form>
			*/?>
			<?php //endif;?>
			<?php if($vmcnt>0 && count($vod_mjm_list)>15) :?>
            <script>
            var page = 1;
            var is_loading = false;
            function view_more() {
                if(is_loading) {
                    return;
                }
                is_loading = true;
                
                page += 1;
                $.post('/<?=WT?>_stock/ajax_get_vod_list/<?=$this_page?>', {'page': page}, function(res) {
                    if($.trim(res).length) {
                        $('#analysis_list').append(res);
                    } else {
                        $('.btn_more').hide();
                    }
                    is_loading = false;
                });
            }
            </script>
			<?php endif;?>