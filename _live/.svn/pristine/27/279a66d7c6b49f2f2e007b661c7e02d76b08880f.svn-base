            <!-- 주요 콘텐츠 -->
            <div class="box_01">
                <img src="/img/wowtv/wowbox_01.png" alt="미국주식창">
            </div>
            <div class="box_02">
                <img src="/img/wowtv/wowbox_02.png" alt="5분만에 끝내는 종목진단">
            </div>
            <div class="box_03">
                <img src="/img/wowtv/wowbox_03.png" alt="미국주식 인사이트 동영상, 나만의 맞춤 종목진단! 원스톱 진단 & 종목캐치!">
            </div>
            <div class="box_04">
                <img src="/img/wowtv/wowbox_04.png" alt="5분만에 끝내는 종목진단">
            </div>
			<?php 
			//안드로이드 인앱 결제 후 삭제
			//if($this->session->userdata('user_ostype') != 'A') :
			?>
			<form name="pay_form" id="pay_form" method="post" action="https://stockwin.wowtv.co.kr/payment/information.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="tab_no" value="28">
				<input type="hidden" name="apptype" value="<?=WT_APP_TYPE?>">
			</form>
			<div class="wowtv_applybtn">
				<?php if($this->session->userdata('user_ostype') == 'I') :?>
				<a href="/<?=WT?>_member/ios_pay" class="btn btn_apply">미국주식창 신청하기<i></i></a>
				<?php else :?>
				<a href="/<?=WT?>_member/and_pay" class="btn btn_apply">미국주식창 신청하기<i></i></a>
				<!--<a href="javascript:fnSinChung();" class="btn btn_apply">미국주식창 신청하기<i></i></a>-->
				<?php endif;?>
			</div>
			<?php //endif;?>