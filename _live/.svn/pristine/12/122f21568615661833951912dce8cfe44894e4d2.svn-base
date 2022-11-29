<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no" />
    <title><?=$meta_title?></title>
    <meta name="robots" content="투자를 쉽고 편리하게 - 초이스스탁US">
    <meta name="description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#2C295D">
    <!-- 오픈 그래프 -->
    <meta property="og:title" content="<?=$meta_title?>" />
    <meta property="og:type" content="website">
    <meta property="og:description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로...">
    <meta property="og:image" content="<?=(isset($meta_img) && $meta_img != '') ? $meta_img:'/img/choicestockus_thumb.png'?>">
    <meta property="og:image:width" content="410" />
    <meta property="og:image:height" content="210" />
    <meta property="og:url" content="www.choicestock.co.kr">
	<!-- 파비콘 favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="192x192" href="/img/android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png">
    <!-- jquery-1.12 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
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
	<!-- css -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <!--<link rel="stylesheet" type="text/css" href="/css/<?=(!IS_REAL_SERVER)? 'dev_':''?>globalstock.css?v=<?=filemtime(APP_PATH.'/css/globalstock.css')?>" />-->
    <link rel="stylesheet" type="text/css" href="/css/globalstock.css?v=<?=filemtime(APP_PATH.'/css/globalstock.css')?>" />
	<?php if($is_canonical === TRUE) :?>
	<link rel="canonical" href="<?=$canonical?>" />
	<?php else :?>
	<link rel="canonical" href="<?=HOME_URL?>">
	<?php endif;?>
    <!-- js -->
    <script src="/js/globalstock.js?v=<?=filemtime(APP_PATH.'/js/globalstock.js')?>"></script>
    <script src="/js/globalstock.dev.js?v=<?=filemtime(APP_PATH.'/js/globalstock.dev.js')?>"></script>
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
	<?php if($this->session->userdata('is_paid')===FALSE) :?>
	<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6864430327621783"crossorigin="anonymous"></script><!--구글 애드센스 자동광고-->
	<?php endif;?>

	<?php if(IS_REAL_SERVER):?>
	<script type="text/javascript">
	$(document).ready(function(){
	    $(document).bind("contextmenu", function(e) {
	        return false;
	    });
	});
	</script>
	<?php endif;?>
</head>

	<body class="globalStock" <?=(IS_REAL_SERVER) ? 'oncontextmenu="return false;"':''?>>
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154121923-4"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-154121923-4');
	</script>-->
	
	<?php if($is_main === TRUE) :?>

		<?php if($this->session->userdata('is_login') === FALSE) :?>
		<!-- 정식 오픈 이후 버전 -->
		<div class="free_2weeks open" id="layer_pop" >
			<div class="bg_gray"></div>
			<div class="box">        
				<div class="content">                
					<div class="info_txt">
						<p class="txt01"><strong>지금 HOT한 미국주식</strong>이<br>궁금하다면?</p>
						<br>
						<p class="txt02">추천종목, 포트폴리오,<br>관심종목을 <span>알림으로 받아보세요</span></p>
					</div>                
					<div class="btn_area">
						<a href="/member/login" class="free">프리미엄 무료체험</a>
					</div>            
				</div>
				<div class="ftr">
					<label for="pop_today" class="btn_day">
					<input type="checkbox" name="pop_today" id="pop_today"/> 오늘 하루 열지 않기</label>
					<a href="javascript:closeWin();" class="btn_close">닫기</a>
				</div>        
			</div>        
		</div>
		<!-- 오늘 하루 열지 않기 -->
		<script language="Javascript" type="text/javascript">
			cookiedata = document.cookie;
			if (cookiedata.indexOf("mainpop=done") < 0) {
				document.getElementById('layer_pop').style.display = "inline";
			} else {
				document.getElementById('layer_pop').style.display = "none";
			}    
			function setCookie(name, value, expirehours) {
				var todayDate = new Date();
				todayDate.setHours(todayDate.getHours() + expirehours);
				document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
			}
			$('#pop_today').on('click', function() {            
				setCookie("mainpop", "done", 24);            
				document.getElementById('layer_pop').style.display = "none";
			});
		</script>
		<!-- //오늘 하루 열지 않기 -->
		<?php endif;?>

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

		<?php
		/*
		<div class="top_banner event" id="layer_pop">
			<a href="<?=HOME_URL?>/stock/research_view/846"><img src="/img/banner/wowtv_open.png" alt="미국주식창 전격 오픈" style="display: inline-block; width: 100%;"></a>        
			<label for="pop_today" class="btn_day" style="color: #000; opacity: 0.85; font-weight: 300;">
			<input type="checkbox" name="pop_today" id="pop_today" /> 오늘 하루 열지 않기</label>
			<a href="javascript:closeWin();" class="btn_close" style="color: #d4c9dd; border: 1px solid #d4c9dd; text-align: center;">X</a>
	    </div>

		<!-- 오늘 하루 열지 않기 -->
		<script language="Javascript" type="text/javascript">
			cookiedata = document.cookie;
			if (cookiedata.indexOf("ncookie=done") < 0) {
				document.getElementById('layer_pop').style.display = "inline";
			} else {
				document.getElementById('layer_pop').style.display = "none";
			}            
			function setCookie(name, value, expirehours) {
				var todayDate = new Date();
				todayDate.setHours(todayDate.getHours() + expirehours);
				document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
			}
			function closeWin() {
				if (document.getElementById("pop_today").checked) {
					setCookie("ncookie", "done", 24);
				}
				document.getElementById('layer_pop').style.display = "none";
			}
		</script>
		<!-- //오늘 하루 열지 않기 -->
		*/
		?>
		<?php if($is_event === true) :?>
		<div class="top_banner event" id="layer_pop">
			<a href="/main/first_event" class="event_btn"><img src="/img/banner/1year_event.png" alt="오픈이벤트 당첨자 발표"></a>
			<label for="pop_today" class="btn_day"><input type="checkbox" name="pop_today" id="pop_today" /> 오늘 하루 열지 않기</label>
			<a href="javascript:closeWin();" class="btn_close"><img src="/img/banner/btn_clse.png" alt="닫기"></a>
		</div>
		<?php endif;?>

		<?php if($this->session->userdata('free_notice') !=''):?>
		<!-- 무료체험 상단배너 -->
		<div class="weeks_free3">
			<p><?=$this->session->userdata('free_notice')?> <a href="#" class="btn_close">X</a></p>
		</div>
		<script language="Javascript" type="text/javascript">
			$('.globalStock .weeks_free3 p .btn_close').on("click", function () {
				$('.globalStock .weeks_free3').slideUp();
			})        
		</script>
		<!-- 무료체험 상단배너 -->
		<?php endif;?>

		<!-- 미주미 상단 협업프로모션
		<div class="mijumi_promotion top_banner">
			<h1 class="logo"><img src="/img/logo_mijumi.png" alt="미주미x데이터히어로"></h1>
			<p>미국주식투자를 위해 함께합니다.</p>
		</div>
		-->
	<?php endif;?>
	<div id="wrap">
		<?php if($show_menu === TRUE) :?>
        <!-- 하단 GNB -->
        <div class="gnb">
            <ul class="list">
                <li class="home<?=($header_template=='1'||$header_template=='20') ? ' active':''?>"><a href="/"><i></i> 홈</a></li>
                <li class="stock<?=($header_template>='2' && $header_template<='3') ? ' active':''?>"><a href="/stock/recommend">추천</a></li>
                <li class="analysis<?=($header_template>='4' && $header_template<='5') ? ' active':''?>"><a href="/main/search">진단</a></li>
                <li class="excavation<?=(($header_template>='6' && $header_template<='9') || $header_template=='12') ? ' active':''?>"><a href="/stock/recipe_intro">발굴</a></li>
                <li class="menu<?=$header_template=='16' ? ' active':''?>"><a href="/member/menu">메뉴</a></li>
            </ul>
        </div>
        <!-- //gnb -->
		<?php endif;?>
        <?=$header_contents_html?>
         <div id="container" class="<?=$container_class?>">
            <!-- 주요 콘텐츠 -->