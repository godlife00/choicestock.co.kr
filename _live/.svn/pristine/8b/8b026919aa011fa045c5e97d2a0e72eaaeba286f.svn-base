<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no" />
    <title><?=$meta_title?></title>
    <meta name="robots" content="미국주식투자자를 위한 서비스 - 미국주식창">
    <meta name="description" content="미국주식, 종목분석, 추천포트폴리오, 뉴스, 한국경제TV, 미국주식창">
	<meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#2C295D">
    <!-- 오픈 그래프 -->
    <meta property="og:title" content="<?=$meta_title?>" />
    <meta property="og:type" content="website">
    <meta property="og:description" content="미국주식, 종목분석, 추천포트폴리오, 뉴스, 한국경제TV, 미국주식창">
	<meta property="og:image" content="/img/wowtv/choicewowtv_ogimg.png"> 
    <meta property="og:image:width" content="410" />
    <meta property="og:image:height" content="210" />
    <meta property="og:url" content="wowtv.choicestock.co.kr">
    <!-- 파비콘 favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="img/wowtv/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/wowtv/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/img/wowtv/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/wowtv/favicon-16x16.png">
    <!-- jquery-1.12 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <!-- highcharts -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
    <script src="https://code.highcharts.com/modules/series-label.js"></script>
    <script src="https://code.highcharts.com/highcharts-more.js"></script>
    <script src="https://code.highcharts.com/modules/solid-gauge.js"></script>
    <script src="https://code.highcharts.com/modules/exporting.js"></script>
    <script src="https://code.highcharts.com/modules/export-data.js"></script>
    <script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <script src="https://code.highcharts.com/modules/no-data-to-display.js"></script>
	<script src="https://code.highcharts.com/modules/debugger.js"></script>
    <!-- Swiper -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <link rel="canonical" href="https://wowtv.choicestock.co.kr">
    <!-- css -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="/css/globalstock.css?v=<?=filemtime(APP_PATH.'/css/globalstock.css')?>" />
    <link rel="stylesheet" type="text/css" href="/css/globalstock_wowtv.css?v=<?=filemtime(APP_PATH.'/css/globalstock_wowtv.css')?>" />
    <!-- js -->
    <script src="/js/globalstock.js?v=<?=filemtime(APP_PATH.'/js/globalstock.js')?>"></script>
    <script src="/js/<?=WT?>_globalstock.dev.js?v=<?=filemtime(APP_PATH.'/js/'.WT.'_globalstock.dev.js')?>"></script>
    <script src="/js/chartjs.dev.js?v=<?=filemtime(APP_PATH.'/js/chartjs.dev.js')?>"></script>
    <script src="/js/jquery.jscroll.js"></script>
    <script>
    var search_ticker_list = <?=json_encode($search_ticker_list)?>;
    </script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T9XN9KD');</script>
    <!-- End Google Tag Manager -->

	<!--<script type="text/javascript">
	$(document).ready(function(){
	    $(document).bind("contextmenu", function(e) {
	        return false;
	    });
	});
	</script>-->

	<!-- Set AdBrix Web SDK --> 
	<script>!function(e,r){if(void 0!==e&&!e.adbrix){var t={queue:[]},o=navigator.userAgent.toLowerCase(),n=r.createElement("script"),i="Netscape"===navigator.appName&&-1!==navigator.userAgent.search("Trident")||-1!==o.indexOf("msie")?"abx-web-sdk.ie.min.js":"abx-web-sdk.min.js";n.type="text/javascript",n.async=!0,n.src="//static.adbrix.io/web-sdk/latest/"+i,n.onload=function(){e.adbrix.runQueuedFunctions?e.adbrix.runQueuedFunctions():console.log("[adbrix] Error: could not load SDK")};var a=r.getElementsByTagName("script")[0];a.parentNode.insertBefore(n,a);["init","onInitialized","login","getUserId","logout","userProperty.get","userProperty.getAll","userProperty.addOrUpdate","userProperty.remove","userProperty.removes","common.signUp","common.invite","common.useCredit","common.purchase","event.send","debug.traceListener","commerceAttr.categories","commerceAttr.product"].forEach(function(e){var r=e.split("."),o=r.pop();r.reduce(function(e,r){return e[r]=e[r]||{}},t)[o]=function(){t.queue.push([e,arguments])}}),e.adbrix=t}}(window,document);</script>
	<!-- AdBrix Web SDK init -->
	<script>
		window.adbrix.init({
			appkey: 'c3POXzdEQUi0guBE3418BQ',
			webSecretkey: 'gxdtGwW2bkSBN5VHkdXZ7w'
		});
	</script>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2EE1P2VJ00"></script>
	<script>
	 window.dataLayer = window.dataLayer || [];
	 function gtag(){dataLayer.push(arguments);}
	 gtag('js', new Date());

	 gtag('config', 'G-2EE1P2VJ00');
	</script>
</head>
<body class="globalStock wowtv">
<!--<body class="globalStock wowtv" oncontextmenu="return false;">-->
    <?php if($is_main === true) :?>
		<?php if(date('YmdH') > '2021110413' && date('YmdH') < '2021110504') :?>
		<!-- 서비스장애 상단배너 -->
		<div class="limit_banner">
			<p>시스템정비로 <a href="#">서비스가 일시 중지</a> 됩니다. (11/5, 4시 ~ 최대10분) <a href="#" class="btn_close">X</a></p>
		</div>
		<script language="Javascript" type="text/javascript">
			$('.globalStock .limit_banner p .btn_close').on("click", function () {
				$('.globalStock .limit_banner').slideUp();
			})
		</script>
		<?php endif;?>
	<?php endif;?>
    <div id="wrap">
        <?php if($show_menu === TRUE) :?>
		<!-- 하단 GNB -->
        <div class="gnb">
            <ul class="list">
                <li class="home<?=$header_template=='1' ? ' active':''?>"><a href="/<?=WT?>_main">홈</a></li>
				<li class="news<?=($header_template>='13' && $header_template<='14') ? ' active':''?>"><a href="/<?=WT?>_stock/wowtv">뉴스</a></li>
                <li class="analysis<?=($header_template>='4' && $header_template<='5') ? ' active':''?>"><a href="/<?=WT?>_main/search">진단</a></li>
                <li class="stock<?=($header_template>='2' && $header_template<='3') ? ' active':''?>"><a href="/<?=WT?>_stock/recommend">추천</a></li>
                <li class="excavation<?=(($header_template>='6' && $header_template<='9') || $header_template=='12') ? ' active':''?>"><a href="/<?=WT?>_stock/recipe_intro">탐색</a></li>
                <li class="menu active<?=$header_template=='16' ? ' active':''?>"><a href="/<?=WT?>_main/menu">
                        <!--메뉴-->
                        <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
                    </a>
                </li>
            </ul>
        </div>
        <!-- //gnb -->
		<?php endif;?>
<?php //echo 'view=====>'.$view;?>
		<?php if($view=='/stock/alarm') :?>
        <div id="header" class="header"><div class="headerTop">
            <h1 class="headerLogo">
                <span>알림
                </span>
            </h1><a href="#" onclick="location.href='/<?=WT?>_main';" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a><div class="hm"><a href="/<?=WT?>_stock/morning" class="go_briefing"><img src="/img/wowtv/btn_briefing.png" alt="모닝브리핑 바로가기"></a>            
            </div>
            <!-- //hm -->
        </div></div>
		<?php elseif($view == '/member/withdrawal') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>탈퇴하기</span></h1>
                <a href="/<?=WT?>_main/menu" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/member/info') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>정보설정</span></h1>
                <a href="/<?=WT?>_main/menu" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/stock/recommend_view') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>종목추천</span></h1>
                <a href="/<?=WT?>_stock/recommend" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>                
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/stock/recipe') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>투자레시피</span></h1>
                <a href="/<?=WT?>_stock/recipe_intro" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
                <div class="hm">
                    <a href="/<?=WT?>_main/search" class="go_sch"><img src="/img/icon_search.svg" alt="검색하기"></a>
                </div>
                <!-- //hm -->
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/stock/news_view' || $view == '/stock/wowtv_view') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>뉴스</span></h1>
                <a href="<?=$header_back?>" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/stock/research_view' || $view == '/stock/vod_mjm_view') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>종목노트</span></h1>
                <a href="/<?=WT?>_stock/note" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif($view == '/stock/morning' || $view == '/stock/morning_view') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>모닝브리핑</span></h1>
                <a href="/<?=WT?>_stock/<?=($view == '/stock/morning_view') ? 'morning':'alarm'?>" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
                <div class="hm">
                    <a href="/<?=WT?>_main/search" class="go_sch"><img src="/img/icon_search.svg" alt="검색하기"></a>
                </div>
                <!-- //hm -->
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif(strstr($view,'/search') && $view != '/main/search') :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>종목검색</span></h1>
                <a href="<?=($view == '/search/outline') ? 'javascript:history.back(-1);':'/'.WT.'_search/summary/'.$search_ticker?>" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
                <div class="hm">
                    <a href="/<?=WT?>_main/search" class="go_sch"><img src="/img/icon_search.svg" alt="검색하기"></a>
                </div>
                <!-- //hm -->
            </div>
            <!-- //headerTop -->
        </div>
		<?php elseif(strstr($view,'/main/service')) :?>
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span>서비스소개</span></h1>
                <a href="/<?=WT?>_main" class="his_back"><img src="/img/icon_back.svg" alt="뒤로가기"></a>
            </div>
            <!-- //headerTop -->
        </div>
		<?php endif;?>

        <div id="container" class="<?=$container_class?>">
			<?php if($is_headtop === true) :?>
			<div class="header_wowtv">
                <h1 class="h1_logo"><a href="/<?=WT?>_main">미국주식창</a></h1>
                <a href="/<?=WT?>_stock/alarm" class="alarm">
                    <img src="/img/wow_iconalarm.svg" alt="알림">
					<?php if(isset($noti_list) && count($noti_list)>0):?>
                    <i>N</i>
					<?php endif;?>
                </a>
                <a href="javascript:fnSinChungList();" class="wowtv">주식창 <i></i></a>
                <!--<a href="https://sw.wowtv.co.kr/vitamin/list.asp?devk=<?=$this->session->userdata('user_key')?>&phno=<?=$this->session->userdata('user_phone')?>&ver=&hidden=27" class="wowtv" target="_blank">주식창 <i></i></a>-->
            </div>
            <!-- //header_wowtv -->
			<form name="paylist_form" id="paylist_form" method="post" action="https://sw.wowtv.co.kr/vitamin/list.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="hidden" value="28">
				<input type="hidden" name="apptype" value="<?=WT_APP_TYPE?>">
			</form>
			<?php endif;?>

			<?php if($is_searching === true) :?>
            <div class="<?=($is_main === true) ? 'main_searching':'search_top searching'?>">
                <!-- 종목명 검색창 -->
                <div class="searchArea">
                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/<?=WT?>_search/summary/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
							<?php if($is_main === false) :?>
                            <span class="sch_title"><?=$searching_title?></span>
							<?php endif;?>
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

				<!-- 이벤트배너(2022.5.27) -->
				<?php if(date('Ymd') < '20220711') :?>
				<div class="event_bannerSwiper">
                    <div class="event_banner">
                        <a href="https://www.wownet.co.kr/Event/EventInfo/PrizeEventView?searchWord=&page=2&pageSize=1" target="_blank"><img src="/img/wowtv/wow_eventbanner220706.jpg"></a>
                    </div>
                    <!-- //news_bannner -->
                </div>
				<?php endif;?>
<?php if($is_main === true && in_array($this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY), array('01076121487','01042396676','01064291476'))) :?>
                <!--<div align="center">
					<br><a href="/<?=WT?>_member/and_pay" class="btn btn_save"><b>[프리미엄 가입하기]</b></a>
				</div>-->
<?php endif;?>
				<?php 
				//안드로이드 인앱 결제 후 삭제
				//if($this->session->userdata('user_ostype') == 'A') {
				//	$wt_banner = FALSE;
				//}

				if($wt_banner === TRUE) :?>

					<?php if(isset($rolling_banner) && sizeof($rolling_banner)>0) :
					$rol_cnt=0;
					foreach($rolling_banner as $rol) :
						if($rol['b_view_wt'] == 'Y' && $rol['b_start'] <= date('Y-m-d H:i:s') && $rol['b_end'] > date('Y-m-d H:i:s')) $rol_cnt++;
					endforeach;
					?>
					<?php if($rol_cnt>0) :?>
						<!-- 상단 이벤트 배너 3 -->
						<div class="swiper-container<?=($rol_cnt>1) ? ' event_bannerSwiper':''?>">
							<div class="swiper-wrapper">
								<?php $cnt=0; 
									foreach($rolling_banner as $rol) :
										if($banner['b_view_wt'] == 'N' || $rol['b_start'] > date('Y-m-d H:i:s') || $rol['b_end'] < date('Y-m-d H:i:s')) continue;
									
										$url = explode('?', $rol['b_link']);
										$action = array_shift($url);
										$param = array_pop($url);
										$param = explode('&', $param);
								?>
								<div class="swiper-slide">
									<div class="event_banner">
										<a href="javascript:fnFormSubmit('rol_banner<?=$cnt?>');"><img src="https://<?=(IS_REAL_SERVER) ? 'hero':'usdev'?>.datahero.co.kr<?=$rol['b_image']?>"></a>
									</div>
									<!-- //news_bannner -->
								</div>
								<form name="rol_banner<?=$cnt?>" id="rol_banner<?=$cnt?>" method="post" action="<?=$action;?>">
									<?php foreach($param as $pa) :
										$hform = explode('=', $pa);
										$hnm = array_shift($hform);
										$hval = array_pop($hform);
										if($hnm == '' && $hval == '') continue;
									?>
									<?php if($hnm == 'devk') :?>
									<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
									<?php elseif($hnm == 'phno') :?>
									<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
									<?php else:?>
									<input type="hidden" name="<?=$hnm?>" value="<?=$hval?>">
									<?php endif;?>
									<?php endforeach;?>
								</form>
								<?php $cnt++; endforeach;?>
							</div>
						</div>
						<!-- event_bannerSwiper -->
						<?php endif;?>
					<?php endif;?>
				<?php endif;?>
			</div>
            <!-- //main_searching -->
			<?php endif;?>