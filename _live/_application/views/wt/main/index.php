			<!-- 미국시장 -->
			<?php include_once WT_INC_PATH.'/main_jisu.php';?>
            <!-- //miju_nasdaq -->

			<!-- 오늘의 종목  PICK -->
			<?php include_once WT_INC_PATH.'/main_recommend.php';?>
			<!-- 오늘의 종목  PICK -->

			<!-- 포트폴리오 -->
			<?php include_once WT_INC_PATH.'/main_portfolio.php';?>
			<!-- //포트폴리오 -->

            <!-- 모닝브리핑, 승부주 -->
			<?php include_once WT_INC_PATH.'/main_winner.php';?>
			<!-- //모닝브리핑, 승부주 -->

			<!-- 급등/투자레시피 -->
			<?php include_once WT_INC_PATH.'/main_recipe.php';?>
			<!-- //급등/투자레시피 -->

			<!-- 글로벌한경 -->
			<?php if($is_google === FALSE ):?>
			<?php include_once WT_INC_PATH.'/main_vod.php';?>
			<!-- //글로벌한경 -->
			<?php endif;?>

			<?php 
			$slide_banner = array();
			foreach($banner_list[2] as $key=>$banner):

				if($banner['b_view_wt'] == 'Y' && $banner['b_start'] <= date('Y-m-d H:i:s') && $banner['b_end'] > date('Y-m-d H:i:s')) {
					$slide_banner[$key]['b_image'] = $banner['b_image'];
					$slide_banner[$key]['b_link'] = $banner['b_link'];
					$slide_banner[$key]['b_target'] = $banner['b_target'];
				}

			endforeach;
			?>

			<?php if(sizeof($slide_banner)>0) :?>
			<div class="main_btm banner_area">
				<div class="swiper-container newsSwiper">
                    <div class="swiper-wrapper">
						<?php foreach($slide_banner as $banner) :?>
                        <div class="swiper-slide">
                            <div class="news_bannner">
								<?php if($banner['b_link'] == '') :?>
								<span><img src="https://hero.datahero.co.kr<?=$banner['b_image']?>"></span>
								<?php else :?>
								<span><a href="<?=$banner['b_link']?>" <?=($banner['b_target'] == 'Y') ? 'target="_blank"':''?>><img src="https://hero.datahero.co.kr<?=$banner['b_image']?>"></a></span>
								<?php endif;?>
                            </div>
                            <!-- //news_bannner -->
                        </div>
						<?php endforeach;?>
                    </div>
                </div>
                <!-- newsSwiper -->  
			</div>
			<?php endif;?>

			<!-- 종목노트 -->
			<?php include_once WT_INC_PATH.'/main_note.php';?>
			<!-- //종목노트 -->

			<!-- 주요뉴스 -->
			<?php include_once WT_INC_PATH.'/main_news.php';?>
			<!-- //주요뉴스 -->

            <div class="main_mid recipe_list">
                <div class="list_area">
                    <div class="swiper-container mainrecipeSwiper">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide">
                                <a href="/<?=WT?>_stock/recipe/soaring">
                                    <strong>급등주</strong>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="/<?=WT?>_stock/recipe/interest">
                                    <strong>인기 TOP50</strong>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="/<?=WT?>_stock/recipe/earnings">
                                    <strong>실적발표</strong>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="/<?=WT?>_stock/recipe/dividend">
                                    <strong>배당매력주</strong>
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="/<?=WT?>_stock/recipe/growth">
                                    <strong>이익성장주</strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //note_area -->

			<?php
			$is_pop = false;
			foreach($banner_list[1] as $banner):
				if($banner['b_view_wt'] == 'Y' && $banner['b_start'] <= date('Y-m-d H:i:s') && $banner['b_end'] > date('Y-m-d H:i:s')) {
					$b_image = $banner['b_image'];
					$b_link = $banner['b_link'];
					$b_target = $banner['b_target'];
					$is_pop = true;
					break;
				}
			endforeach;

			//안드로이드 인앱 결제 후 삭제
			//if($this->session->userdata('user_ostype') == 'A') {
			//	$is_pop = false;
			//}
			?>

			<?php if($is_pop===true) :?>
			<!-- 오늘 하루 열지 않기 -->    
			<div id="popup-cookie" class="layerPopup">
				<div class="layerBox">
					<div class="cont">
						<?php if($b_link == '') :?>
						<p><img src="https://hero.datahero.co.kr<?=$b_image?>"></p>
						<?php else :?>
						<p><a href="<?=$b_link?>" <?=($b_target == 'Y') ? 'target="_blank"':''?>><img src="https://hero.datahero.co.kr<?=$b_image?>"></a></p>
						<?php endif;?>
					</div>
					<div class="clfix c_btn">
						<a href="javascript:;" onclick="todaycloseWin();">오늘만 안보기</a>
						<a href="javascript:;" onclick="closeWin();">닫기</a>
					</div>
				</div>
			</div>
			<!-- //오늘 하루 열지 않기 -->
			<script language="Javascript">
				$(document).ready(function () {
					cookiedata = document.cookie;
					if (cookiedata.indexOf("ncookie=done") < 0) {
						document.getElementById('popup-cookie').style.display = "block";
						$("#wrap").prepend('<div id="dimm-cookie" onclick="dimm_close();" class="black" />');
					} else {
						document.getElementById('popup-cookie').style.display = "none";
					}
				});
				function setCookie(name, value, expiredays) {
					var todayDate = new Date();
					todayDate.setDate(todayDate.getDate() + expiredays);
					document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
				}
				function closeWin() {
					document.getElementById('popup-cookie').style.display = "none";
					$("#dimm-cookie").remove();
				}
				function todaycloseWin() {
					setCookie("ncookie", "done", 1);
					document.getElementById('popup-cookie').style.display = "none";
					$("#dimm-cookie").remove();
				}
				function dimm_close() {
					$("#dimm-cookie").remove();
					document.getElementById('popup-cookie').style.display = "none";
				}
			</script>
			<?php endif;?>






