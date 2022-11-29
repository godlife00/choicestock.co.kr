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

	<?php if(($type == 'A' || $type == 'B') && $this->session->userdata('user_ostype') == 'I') :?>
	function movePage() {
		var formid = $("#move_form");
		formid.target="post_frame";
		formid.submit();
		window.parent.location.href = "https://wowtv.choicestock.co.kr";
		return;
	}
	<?php else :?>
	function movePage() {
		var formid = $("#move_form");
		formid.submit();
		return;
	}
	<?php endif;?>
	</script>
</head>
<body>
	<?php if($type == 'A') :?>
	<?php if($this->session->userdata('user_ostype') == 'I') :?>
	<iframe name="post_frame" id="post_frmae" style="display:none" frameborder="0"></iframe>
	<?php endif;?>
	<form name="move_form" id="move_form" method="post" action="http://stockwin.wowtv.co.kr/vitamin/view.asp?devk=<?=$this->session->userdata('user_key')?>&phno=<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>&seq=<?=$seq?>" <?=($this->session->userdata('user_ostype') == 'I') ? ' target="post_frame"':''?>>
		<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
		<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
		<input type="hidden" name="seq" value="<?=$seq?>">
	</form>
	<?php elseif($type == 'B') :?>
	<?php if($this->session->userdata('user_ostype') == 'I') :?>
	<iframe name="post_frame" id="post_frmae" style="display:none" frameborder="0"></iframe>
	<?php endif;?>
	<form name="move_form" id="move_form" method="post" action="http://stockwin.wowtv.co.kr/vitamin/list.asp?devk=<?=$this->session->userdata('user_key')?>&phno=<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>&hidden=27&ver=2" <?=($this->session->userdata('user_ostype') == 'I') ? ' target="post_frame"':''?>>
		<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
		<input type="hidden" name="phno" value="<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY)?>">
		<input type="hidden" name="hidden" value="27">
		<input type="hidden" name="ver" value="2">
	</form>
	<?php else :?>
	<form name="move_form" id="move_form" method="post" action="https://wowtv.choicestock.co.kr" target="_self">
	</form>
	<?php endif;?>

	<script>
	movePage(); 
	</script>
</body>
</html>