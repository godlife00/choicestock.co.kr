<?php
//if(strstr($_SERVER['REMOTE_ADDR'], '61.74.181')) :
//	include_once '/home/hoon/html/choicestock/_application/views/wt/main/appopen1.php';
//	exit;
//endif;
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="format-detection" content="telephone=no" />
    <title>미국주식투자자를 위한 서비스 - 미국주식창</title>
    <meta name="robots" content="미국주식창 - 미국주식 쉽고 편리하게'">
    <meta name="description" content="투자를 쉽고 편리하게, 미국주식가이드, 종목분석, 종목토론, 데이터히어로">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="theme-color" content="#2C295D">
    <!-- jquery-1.12 -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script type="text/javascript" src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-T9XN9KD');</script>
    <!-- End Google Tag Manager -->

<script type="text/javascript">
	var deviceKey;
	var token;
	var appVersion;
	var deviceType;

// App Version
	function getAppVersion() {
		//IHK.getAppVersion();
		webkit.messageHandlers.IHK.postMessage("getAppVersion");
	}

	function setAppVersion(text) {
		appVersion = text;
	}

// Token
	function getPushToken() {
		//IHK.getPushToken();
		webkit.messageHandlers.IHK.postMessage("getPushToken");
	}

	function setPushToken(text) {
		token = text;
	}

//디바이스 유형
	function checkDevice() {
		//IHK.checkDevice();
		webkit.messageHandlers.IHK.postMessage("checkDevice");
	}

	function setDevice(text) {
		deviceType = text;
		location.href = '/<?=WT?>_member/ios_auth?deviceKey='+deviceKey+'&token='+token+'&appVersion='+appVersion+'&deviceType='+deviceType+'&return_url=<?=$return_url?>';
	}

// Device Key
	function getDeviceKey() {
		//IHK.getDeviceKey();
		webkit.messageHandlers.IHK.postMessage("getDeviceKey");
	}

	function resultGetDeviceKey(text) {
		deviceKey = text;
	}

	function setDeviceKey(text) {
		//IHK.setDeviceKey(text);
		webkit.messageHandlers.IHK.postMessage("setDeviceKey");
	}

	function resultSetDeviceKey(Boolean) {
		alert(Boolean);
	}

	function resultApp() {
		alert(app_info);
	}
</script>

</head>
<body class="globalStock wowtv">
	<script>
	getPushToken(); 
	getAppVersion(); 
	getDeviceKey(); 
	checkDevice();
	</script>
</body>
</html>