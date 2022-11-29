<!DOCTYPE html>
<html lang="en">

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no" />
    <title> 미국주식창</title>
    <meta name="robots" content="미국주식투자자를 위한 서비스 - 미국주식창">
    <meta name="description" content="미국주식, 종목분석, 추천포트폴리오, 뉴스, 한국경제TV, 미국주식창">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#2C295D">
    <!-- 오픈 그래프 -->
    <meta property="og:title" content="미국주식투자자를 위한 서비스 - 미국주식창" />
    <meta property="og:type" content="website">
    <meta property="og:description" content="미국주식, 종목분석, 추천포트폴리오, 뉴스, 한국경제TV, 미국주식창">    

    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
	<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/jqueryui-touch-punch/0.2.3/jquery.ui.touch-punch.min.js"></script>
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>
<style>
/*** Mobile Reset -----------------------------------------------------------------------------*/
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
	display:block
}
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video {
	margin:0;
	padding:0;
	border:0;
	line-height:100%;
	font-family:'Spoqa Han Sans Neo',"Malgun gothic","Helvetica Neue",Helvetica,Arial,sans-serif;		
	letter-spacing:-0.015rem;
	color:#444;
	vertical-align:baseline;
	word-break:keep-all;
	white-space:-moz-pre-wrap;
	white-space:-pre-wrap;
	white-space:-o-pre-wrap;
	word-wrap:break-word;
	-webkit-tap-highlight-color:transparent;
}
body {
	word-break:break-all;
	margin:0;
	padding:0;
	position:relative;
}
audio,canvas,progress,video {
	display:inline-block;
	vertical-align:baseline
}
audio:not([controls]) {
	display:none;
	height:0
}
ul,ol,li {
	list-style:none
}
fieldset,img {
	border:0
}
hr {
	height:0;
	box-sizing:content-box
}
sub,sup {
	position:relative;
	line-height:0;
	vertical-align:baseline
}
sup {
	top:-.5em
}
sub {
	bottom:-.25em
}
address,caption,em,var {
	font-style:normal;
	font-weight:normal
}
a {
	text-decoration:none
}
a[href^=tel] {
	font-style:normal
}
a:hover,a:active,a:focus {
	text-decoration:none;
	outline:0
}
b,strong {
	font-weight:bold
}
dfn {
	font-style:italic
}
img {
	border:0;
	vertical-align:top
}
pre {
	overflow:auto
}
table {
	border-collapse:collapse;
	border-spacing:0
}
td,th {
	padding:0
}
legend {
	padding:0;
	border:0
}
input {
	vertical-align:middle
}
input[type=text],input[type=password],input[type=email],input[type=number],input[type=tel] {
	border-radius:0;
	-webkit-appearance:none;
	border:none;
}
input:checked[type=checkbox] {
	-webkit-appearance:checkbox
}
input:checked[type=radio] {
	-webkit-appearance:checkbox
}
button,input[type=button],input[type=submit],input[type=reset],input[type=file] {
	border-radius:0;
	-webkit-appearance:button
}
button,input,optgroup,select,textarea {
	margin:0;
	font:inherit;
	color:inherit
}
button {
	overflow:visible
}
button,select {
	text-transform:none
}
optgroup {
	font-weight:bold
}
textarea {
	overflow:auto;
	border:1px solid #bcbcbc;
	-webkit-appearance:none
}
select {
	-webkit-appearance:none
}
.btn_back {
    position: absolute;
    width: 12px;
    height: 12px;
    border-top: 2px solid #939393;
    border-right: 2px solid #939393;
    display: inline-block;    
	left: 15px;    
    top: 20px;
	transform: rotate(-135deg);
}
.btn_back::after {		
	content: '뒤로가기';
    position: absolute;
    left: -50px;
    top: 21px;
    font-size: 14px;
    color: #939393;
    width: 60px;
    height: 18px;
    display: inline-block;
    transform: rotate(135deg);
}
/*popup*/
.popup_layer {position:fixed;top:0;left:0;z-index: 10000; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.4); }
/*팝업 박스*/
.popup_box{position: relative;top:25%;left:50%; overflow: auto; height: 205px; width:300px;transform:translate(-50%, -50%);z-index:1002;box-sizing:border-box;background:#fff;box-shadow: 2px 5px 10px 0px rgba(0,0,0,0.35);-webkit-box-shadow: 2px 5px 10px 0px rgba(0,0,0,0.35);-moz-box-shadow: 2px 5px 10px 0px rgba(0,0,0,0.35);}
/*컨텐츠 영역*/
.popup_box .popup_cont {padding:10px;line-height:1.4rem;font-size:14px; }
.popup_box .popup_cont h2 {padding:15px 0;color:#333;margin:0;}
.popup_box .popup_cont p{ border-top: 1px solid #666;padding-top: 30px;}
/*버튼영역*/
.popup_box .popup_btn {display:table;table-layout: fixed;width:100%;height:30px;background:#ECECEC;word-break: break-word;}
.popup_box .popup_btn a {position: relative; display: table-cell; height:70px;  font-size:17px;text-align:center;vertical-align:middle;text-decoration:none; background:#ECECEC;}
/*
.popup_box .popup_btn a:before{content:'';display:block;position:absolute;top:26px;right:29px;width:1px;height:21px;background:#fff;-moz-transform: rotate(-45deg); -webkit-transform: rotate(-45deg); -ms-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg);}
.popup_box .popup_btn a:after{content:'';display:block;position:absolute;top:26px;right:29px;width:1px;height:21px;background:#fff;-moz-transform: rotate(45deg); -webkit-transform: rotate(45deg); -ms-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg);}
*/
.popup_box .popup_btn a.close_day {background:#5d5d5d;}
.popup_box .popup_btn a.close_day:before, .popup_box .popup_btn a.close_day:after{display:none;}
/*오버레이 뒷배경*/
.popup_overlay{position:fixed;top:0px;right:0;left:0;bottom:0;z-index:1001;;background:rgba(0,0,0,0.5);}
/*popup*/
</style>

<script type="text/javascript">
<!--
//팝업 띄우기
function openPop() {
    document.getElementById("popup_layer").style.display = "block";
}

//팝업 닫기
function closePop() {
    document.getElementById("popup_layer").style.display = "none";
}
//-->
</script>
<script type="text/javascript" src="/js/common_ios_pay.js?v=<?=filemtime(APP_PATH.'/js/common_ios_pay.js')?>"></script>

<!-- 한국경제, 주식창 class="wowtv" -->
<body class="globalStock wowtv">
    <div id="wrap">
		<a href="javascript:history.back(-1);" class="btn_back"><!-- 이전페이지 --></a>
        <!-- 미국주식창 로그인, 결제하기-->
        <div id="container">
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220816_us_01.jpg" width="100%" border="0">
            <a href="javascript:openPop()"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220816_us_02.jpg" width="100%" border="0"></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220816_us_03.jpg" width="100%" border="0">
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220817_us_01.jpg" width="100%" border="0">
            <a href="javascript:requestBuyProduct('US550002');" style="width: 100%"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_04.jpg" width="100%" border="0" alt="1개월 결제하기" /></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_05.jpg" width="100%" border="0">
			<a href="javascript:restorePurchases();" style="width: 100%"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_06.jpg" width="100%" border="0" alt="구매복원" /></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_07.jpg" width="100%" border="0">
			<?php /*
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_01.jpg" width="100%" border="0">
            <a href="javascript:requestBuyProduct('US220001')" style="width: 100%"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_02.jpg" width="100%" border="0" alt="월 정기 정기 결제 할인"></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_03.jpg" width="100%" border="0">
            <a href="javascript:requestBuyProduct('US550002');" style="width: 100%"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_04.jpg" width="100%" border="0" alt="1개월 결제하기" /></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_05.jpg" width="100%" border="0">
			<a href="javascript:restorePurchases();" style="width: 100%"><img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_06.jpg" width="100%" border="0" alt="구매복원" /></a>
            <img src="https://swimg.wowtv.co.kr/static/images/event_img/2022/220311_us_07.jpg" width="100%" border="0">
			*/
			?>
        </div>
        <!-- //container -->
    </div>
    <!-- //wrap -->

	<div class="popup_layer" id="popup_layer" style="display: none;">
	  <div class="popup_box">
		  <!--팝업 컨텐츠 영역-->
		  <div class="popup_cont">
			  <p><strong>본 서비스 구매는 ARS 1668-3962 전화로만 가능합니다. <br><br>가입문의 고객센터 전화상담 요청은 확인을 눌러주세요</strong></p><br>
		  </div>
		  <div class="popup_btn" style="float: bottom; margin-top:5px;">
			  <a href="tel:02-6676-0403"><strong>확인</strong></a><a href="javascript:closePop();"><strong>취소</strong></a>
		  </div>
	  </div>
	</div>
</body>
</html>
