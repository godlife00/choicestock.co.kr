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
    <meta property="og:description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로">
    <meta property="og:image" content="/img/choicestockus_mijumi_thumb.png">
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
    <script src="/js/<?=($is_soft === true) ? 'hn_':''?>globalstock.js?v=<?=filemtime(APP_PATH.'/js/globalstock.js')?>"></script>
    <script src="/js/<?=HN?>_globalstock.dev.js?v=<?=filemtime(APP_PATH.'/js/'.HN.'_globalstock.dev.js')?>"></script>
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
    <script type="text/javascript">
    // 서비스신청
    function goApply() { 
        var agt = navigator.userAgent.toLowerCase();
        if (agt.indexOf("iphone") != -1) {
            window.location = "SuperStock://activityGoTo//sinchungpage// ";
        } else if (agt.indexOf("android") != -1) {
            window.SuperStock["activityGoTo"]("sinchungpage", "");
        } else {
            window.SuperStock["activityGoTo"]("sinchungpage", "");
        }
    }
    // 추천종목
    function goRecmStk() {
        var agt = navigator.userAgent.toLowerCase();
        if (agt.indexOf("iphone") != -1) {
            window.location = "SuperStock://activityGoTo//recommend// ";
        } else if (agt.indexOf("android") != -1) {
            window.SuperStock["activityGoTo"]("recommend", "");
        } else {
            window.SuperStock["activityGoTo"]("recommend", "");
        }
    }
    // 알림정보
    function goAlimInfo() {
        var agt = navigator.userAgent.toLowerCase();
        if (agt.indexOf("iphone") != -1) {
            window.location = "SuperStock://activityGoTo//notifyInfo// ";
        } else if (agt.indexOf("android") != -1) {
            window.SuperStock["activityGoTo"]("notifyInfo", "");
        } else {
            window.SuperStock["activityGoTo"]("notifyInfo", "");
        }
    }
    // 알림신청
    function goAlimReg() { 
        var agt = navigator.userAgent.toLowerCase();
        if (agt.indexOf("iphone") != -1) {
            window.location = "SuperStock://activityGoTo//notifyregister// ";
        } else if (agt.indexOf("android") != -1) {
            window.SuperStock["activityGoTo"]("notifyregister", "");
        } else {
            window.SuperStock["activityGoTo"]("notifyregister", "");
        }
    }
    </script>
</head>
<body class="globalStock kiwoom">
    <div id="wrap">
        <?php if($is_main === true) :?>
        <div id="header" class="header main_hdr">
            <!-- 메인화면 헤더 class = main_hdr -->
            <div class="headerTop">
                <h1 class="headerLogo"><span>초이스스탁US</span></h1>
                <?php if($this->session->userdata('is_paid')===TRUE) :?>
                <div class="top_btn">
                    <a href="/<?=HN?>_main/menu" class="btn_memu"><img src="/img/icon_menu2.png" alt="메뉴"></a>
                </div>
                <?php endif;?>
                <!-- //top_btn -->
				<!-- //hm -->
                <div class="hm">
                    <a href="/<?=HN?>_stock/morning" class="alarm_briefing"><img src="/img/alarm_briefing.svg"></a>
                </div>
                <!-- //hm -->
            </div>
            <!-- //headerTop -->

            <div class="main_searching">
                <!-- 종목명 검색창 -->
                <div class="searchArea">
                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/<?=HN?>_search/invest_charm/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
                            <input type="text" name='keyword' autocomplete="off" placeholder="종목명 또는 심볼을 입력하세요." class="searchInput searchInput_fixed">
                            <input type="image" src="/img/icon_search.png" alt="검색" class="searchBtn">
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
        </div>
        <?php endif;?>

        <?php if($is_headtop === true) :?>
        
        <div id="header" class="header">
            <div class="headerTop">
                <h1 class="headerLogo"><span><?=$headtop_title?></span></h1>
                <?php if($this->session->userdata('is_paid')===TRUE) :?>
					<?php if($back_url=='menu') :?>
					<a href="/<?=HN?>_main/menu" class="his_back"><img src="/img/icon_back.png" alt="뒤로가기"></a>
					<?php elseif($back_url=='recommend') :?>
					<a href="/<?=HN?>_stock/recommend" class="his_back"><img src="/img/icon_back.png" alt="뒤로가기"></a>
					<?php elseif($back_url=='none') :?>
					<?php else :?>
					<a href="javascript:history.back(-1);" class="his_back"><img src="/img/icon_back.png" alt="뒤로가기"></a>
					<?php endif;?>
				<?php else :?>
					<a href="/<?=HN?>_main" class="his_back"><img src="/img/icon_back.png" alt="뒤로가기"></a>
				<?php endif;?>

                <?php if($is_sicon === true):?>
                <div class="hm">
                    <?php if($is_soft === true) :?>
                        <a href="#" class="go_sch"><img src="/img/icon_search.png" alt="검색하기"></a>
                    <?php else :?>
                        <a href="/<?=HN?>_main/search" class="go_sch"><img src="/img/icon_search.png" alt="검색하기"></a>
                    <?php endif;?>
                </div>
                <?php endif;?>
                <?php if($is_morning === true):?>
                <a href="/<?=HN?>_stock/morning" class="go_briefing"><img src="/img/btn_briefing.png" alt="모닝브리핑 바로가기"></a>
                <?php endif;?>

                <!-- //hm -->
            </div>
            <!-- //headerTop -->
        </div>
        
        <?php endif;?>

        <div id="container" class="<?=$container_class?>">
        <!-- 주요 콘텐츠 -->

        <?php if($soft_searching === true) :?>
            <!-- 주요 콘텐츠 -->
            <div class="search_top searching searching_mijumi">                
                <!-- 종목명 검색창 -->
                <div class="searchArea">
                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/<?=HN?>_search/invest_charm/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
                            <input type="text" name='keyword' autocomplete="off" placeholder="종목명 또는 심볼을 입력하세요." class="searchInput searchInput_fixed">
                            <input type="image" src="/img/clse_b.png" alt="검색" class="searchBtn">
                        </fieldset>
                    </form>
                </div>
                <!-- //종목명 검색창 -->
​
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
        <?php endif;?>

        <?php if($is_searching === true) :?>
            <div class="search_top searching">
                <?php if($this->session->userdata('is_paid')===TRUE) :?>
                <div class="top_btn">
                    <a href="/<?=HN?>_main/menu" class="btn_memu"><img src="/img/icon_menu2.png" alt="메뉴"></a>
                </div>
				<?php endif;?>
                <!-- //top_btn -->
                <!-- 종목명 검색창 -->
                <div class="searchArea">
                    <form action=""  name="topsearch" onsubmit="var v = $('#autocomplete_list li a._on span.schCode').html(); if(v.length > 0 && $('#autocomplete_list').get(0).children.length > 0) { this.action='/<?=HN?>_search/invest_charm/'+v; setSearchHistory(v); return true; }; return false;">
                        <fieldset>
                            <span class="sch_title"><?=$searching_title?></span>
                            <input type="text" name='keyword' autocomplete="off" placeholder="종목명 또는 심볼을 입력하세요." class="searchInput searchInput_fixed">
                            <input type="image" src="/img/icon_search.png" alt="검색" class="searchBtn">
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
        <?php endif;?>

