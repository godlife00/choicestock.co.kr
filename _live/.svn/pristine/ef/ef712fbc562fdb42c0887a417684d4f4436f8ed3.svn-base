<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no" />
    <title><?=$meta_title?></title>
    <meta name="robots" content="투자를 쉽고 편리하게 - 팍스초이스">
    <meta name="description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#2C295D">
    <!-- 오픈 그래프 -->
    <meta property="og:title" content="<?=$meta_title?>" />
    <meta property="og:type" content="website">
    <meta property="og:description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로">
    <meta property="og:image" content="/img/choicestockus_thumb.png">
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
    <!-- Swiper -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/js/swiper.min.js"></script>
	<script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
	<link rel="canonical" href="https://www.choicestock.co.kr">
	<!-- css -->
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="/css/globalstock.css?v=<?=filemtime(APP_PATH.'/css/globalstock.css')?>" />
    <!-- js -->
    <script src="/js/globalstock.js?v=<?=filemtime(APP_PATH.'/js/globalstock.js')?>"></script>
    <script src="/js/<?=PX?>_globalstock.dev.js?v=<?=filemtime(APP_PATH.'/js/'.PX.'_globalstock.dev.js')?>"></script>
	<script src="/js/<?=PX?>_chartjs.dev.js?v=<?=filemtime(APP_PATH.'/js/'.PX.'_chartjs.dev.js')?>"></script>
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
</head>
<body class="globalStock red">
	<!-- Global site tag (gtag.js) - Google Analytics -->
	<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-154121923-4"></script>
	<script>
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){dataLayer.push(arguments);}
	  gtag('js', new Date());
	  gtag('config', 'UA-154121923-4');
	</script>-->
	<div id="wrap">
		<?php if($is_headtop === true) :?>
        <div id="header" class="header" style="display: block; height: 40px;">
            <div class="headerTop">
                <h1 class="headerLogo"><span><?=$headtop_title?></span></h1>
                <a href="javascript:history.back(-1)" class="his_back"><img src="/img/icon_back.png" alt="뒤로가기"></a>
                <div class="hm">
                    <a href="/<?=PX?>_main/search" class="go_sch"><img src="/img/icon_search.png" alt="검색하기"></a>
                </div>
                <!-- //hm -->
            </div>
            <!-- //headerTop -->
        </div>
		<?php endif;?>

         <div id="container" class="<?=$container_class?>">
            <!-- 주요 콘텐츠 -->