			<!-- 로그인 체크 -->
            <div class="log_chk">
                <div class="login">
                    <p><span class="user_name">초이스스탁US</span>미국주식 쉽고 편리하게!</p>
                </div>
            </div>
            <!-- //log_chk -->

            <div class="main_searching">
                <!-- 종목명 검색창 -->
                <div class="searchArea">

                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/search/summary/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
                            <input type="text" name='keyword' autocomplete="off" placeholder="종목명 또는 심볼을 입력하세요." class="searchInput searchInput_fixed">
                            <input type="image" src="/img/icon_search.svg" alt="검색" class="searchBtn">
                        </fieldset>
                    </form>
                </div>
                <!-- //종목명 검색창 -->

                <!-- 검색어 입력시 자동완성 -->
                <div class="sch_autocomplete">
                    <!-- //자동완성 결과 노출 class : _show -->
                    <!-- 검색결과 있을경우 -->
                    <ul id='autocomplete_list'>
                    </ul>

                    <!-- 검색결과 없을경우 -->
                    <div class="no_result" >
                        <p>"<strong></strong>"에 대한 검색결과가 없습니다.</p>
                    </div>
                    <!-- //no_result -->
                </div>
                <!-- //sch_autocomplete -->
            </div>
            <!-- //sub_top -->

		<!-- 종목노트 -->
		<?php $is_morning=true; include INC_PATH.'/main_contents_banner.php';?>
		<!-- //종목노트 -->

		<!-- 관심종목 -->
		<?php if($this->session->userdata('is_login')===TRUE):?>
			<?php include_once INC_PATH.'/main_interest.php';?>
		<?php endif;?>
		<!-- //관심종목 -->

		<?php if($this->session->userdata('is_paid')===TRUE):?>
				<!-- 급등/투자레시피 -->
				<?php include_once INC_PATH.'/main_recipe.php';?>
				<!-- //급등/투자레시피 -->

				<!-- 종목노트 -->
				<?php include_once INC_PATH.'/main_contents_banner.php';?>
				<!-- //종목노트 -->

				<!-- 종목추천 -->
				<?php include_once INC_PATH.'/main_recommend.php';?>
				<!-- //종목추천 -->

				<!-- 포트폴리오 -->
				<?php include_once INC_PATH.'/main_portfolio.php';?>
				<!-- //포트폴리오 -->

				<!-- 종목노트 -->
				<?php $is_morning=false; include INC_PATH.'/main_contents_banner.php';?>
				<!-- //종목노트 -->

		<?php else :?>
			<!-- 급등/투자레시피 -->
			<?php include_once INC_PATH.'/main_recipe.php';?>
			<!-- //급등/투자레시피 -->

			<!-- 구글 AD -->
            <?php $banner='up'; include_once INC_PATH.'/main_google.php';?>
            <!-- //구글 AD -->

			<!-- 종목추천 -->
			<?php include_once INC_PATH.'/main_recommend.php';?>
			<!-- //종목추천 -->

			<!-- 포트폴리오 -->
			<?php include_once INC_PATH.'/main_portfolio.php';?>
			<!-- //포트폴리오 -->

			<!-- 종목노트 -->
			<?php $is_morning=false; include INC_PATH.'/main_contents_banner.php';?>
			<!-- //종목노트 -->

            <!-- 구글 AD -->
            <?php $banner='down'; include_once INC_PATH.'/main_google.php';?>
            <!-- //구글 AD -->
		<?php endif;?>

			<!-- main_banner -->
			<?php include_once INC_PATH.'/main_banner1.php';?>
			<!-- //main_banner -->

			<!-- 승부주 -->
			<?php include_once INC_PATH.'/main_winner.php';?>
			<!-- //승부주 -->

			<?php if($is_google === false) :?>
			<!-- 미주미 동영상 -->
			<?php include_once INC_PATH.'/main_vod.php';?>
			<!-- //미주미 동영상 -->
			<?php endif;?>

			<!-- 종목노트 -->
			<?php include_once INC_PATH.'/main_note.php';?>
			<!-- //종목노트 -->

			<!-- 서비스 바로가기 퀵메뉴 -->
			<?php include_once INC_PATH.'/main_quick.php';?>
			<!-- //서비스 바로가기 퀵메뉴 -->

            <div class="main_btm banner_area">
				<?php if($is_event===true) :?>

				<div class="main_btm banner_area">
					<!-- //banner -->
					<div class="banner_1yearevent">
						<span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
						<span class="y_box"><img src="/img/banner/img_y_box.png" alt="이벤트"></span>
						<a href="/payment/choice" class="weeks_free">[첫달 900원!]</a>
					</div>
					<!-- //banner_prm -->                
				</div>
				<?php else :?>
				
				<?php if($this->session->userdata('is_paid')===TRUE  && $this->session->userdata('free_notice') == '') :?>
                <!-- 프리미엄 서비스 사용자인 경우 -->
                <div class="banner_prm">                        
                    <span class="cho_prm">초이스스탁US 프리미엄</span>
                    <a href="/main/service_prm" class="weeks_free">[주요 서비스 안내]</a>
                </div>
				<?php else :?>
				<div class="banner_prm">
                    <span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
					<?php if($this->session->userdata('is_login') === TRUE):?>
                    <a href="/main/service_free" class="weeks_free">[ 첫 달 3,000원!]</a>
					<?php else:?>
                    <a href="/member/login" class="weeks_free">[ 2주 무료보기]</a>
					<?php endif;?>
                </div>
                <!-- //banner_prm -->
				<?php endif;?>

				<?php endif;?>
            </div>

			<!-- 하단 서비스 노출 배너 -->
            <script>
                $(document).ready(function () {
                    var swiper = new Swiper('.bannerSwiper', {
                        loop: true,
                        spaceBetween: 30,
                        centeredSlides: true,
                        autoplay: {
                            delay: 3500,
                        },
                        pagination: {
                            el: ".swiper-pagination",
                        },
                    });
                });
            </script>
            <style>
                .family_banner {
                    padding: 35px 15px 0;
                }

                .family_banner .bannerSwiper {
                    padding-bottom: 30px;
                }

                .family_banner .bannerSwiper img {
                    display: inline-block;
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="family_banner">
                <div class="swiper-container bannerSwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <a href="https://value.choicestock.co.kr/" target="_blank"><img src="/img/banner/family_vl.png" alt="밸류라인"></a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://super.choicestock.co.kr/" target="_blank"><img src="/img/banner/family_sst.png" alt="슈퍼스톡스"></a>
                        </div>
                        <div class="swiper-slide">
                            <a href="https://bigfinance.co.kr/home" target="_blank"><img src="/img/banner/family_vp.png" alt="빅파이낸스"></a>
                        </div>
                    </div>
                    <!-- //swiper-wrapper -->
                    <div class="swiper-pagination"></div>
                </div>
                <!-- //swiper-container -->
            </div>
            <!-- //family_banner -->