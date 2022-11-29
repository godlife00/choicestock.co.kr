<?php if($type == '3'):?>
        </div>
        <!-- //sub_login -->
        <!-- //container -->
        <div id="footer" class="chous_footer typeMini_f">
            <ul class="terms_list">
                <li><a href="/member/terms">이용약관</a></li>
                <li><a href="/member/policy"><strong>개인정보처리방침</strong></a></li>
                <li><a href="https://www.datahero.co.kr" target="_blank">회사소개</a></li>
            </ul>
            <a href="https://www.datahero.co.kr" target="_blank">ⓒ (주)데이터히어로</a>
<?php else :?>			
		</div>
        <!-- //container -->
		<div id="footer" class="chous_footer<?=($is_main===TRUE || $type == '5') ? '':' typeSub_f'?>"> 
			<?php if($is_main===TRUE || $type == '5') :?>
            <div class="certification">
                <div onclick="location.href='https://www.datahero.co.kr/about/'" style="cursor:pointer;">
                    <ul>
                        <li class="cer_logo"><img src="/img/logo_kiwoom.svg" alt="키움증권"></li>
                        <li class="cer_logo"><img src="/img/logo_eugene.svg" alt="유진투자증권"></li>
                        <li class="cer_logo"><img src="/img/logo_truefriend.svg" alt="한국투자증권"></li>
                        <li class="cer_logo"><img src="/img/logo_sk.png" alt="SK증권"></li>
                        <li class="cer_logo"><img src="/img/logo_hana.svg" alt="하나증권"></li>
                        <li class="cer_logo"><img src="/img/logo_mirae.svg" alt="미래에셋증권"></li>
                    </ul>
                </div>
            </div>
            <!-- //인증 -->
			<?php endif;?>

            <div class="notice">
                <div class="service_info">
                    <p>본 서비스는 투자판단에 참고용으로만 사용하실 수 있으며, 모든 투자판단은 투자자 본인의 책임으로 당사는 그 결과에 대해 법적인 일체의 책임을 지지 않습니다.</p>
                    <p class="dataLink">data from <a href="https://www.quandl.com/" target="_blank">Quandl and Sharadar</a>
                    </p>
                </div>

                <ul class="terms_list">
                    <li><a href="/member/terms">이용약관</a></li>
                    <li><a href="https://www.datahero.co.kr/choicestockus-faq/" target="_blank">서비스 FAQ</a></li>
                    <li><a href="/member/policy"><strong>개인정보처리방침</strong></a></li>
                    <li><a href="https://www.datahero.co.kr/choicestockus-update/" target="_black">업데이트 소식</a>
                    <li><a href="https://www.datahero.co.kr" target="_blank">회사소개</a></li>
                </ul>

                <div class="foot_info">
                    <div class="info_tel_box">
						<span class="cs"><a href="https://kq64o.channel.io/" target="blank">온라인 1:1 문의하기</a> (평일 9:00~17:00, 점심 11:20~12:20/ 주말 및 공휴일 휴무) </span>
                        <!--<p><span class="sns_kakao"><a href="http://pf.kakao.com/_QDLHxb/chat" target="_blank"><img src="/img/sns_kakao.svg" alt="카카오톡 문의하기"></a></span></p>
                        <span class="cs">평일 9:00 ~ 17:00 (주말/공휴일 제외)<br>점심시간 11:20 ~ 12:20</span>-->
                    </div>
                    <!-- //info_tel_box -->
                    <?php /* 2022.3.10 주석(추후 원복)
					<p class="copyright"><a href="https://www.datahero.co.kr" target="_blank">ⓒ (주)데이터히어로</a><?=($is_main===TRUE || $type == '5') ? '<i></i>':''?>
						<?php if($is_main===TRUE || $type == '5') :?>
                        <strong>대표자</strong> 김인중 <br>서울특별시 서초구 강남대로 311 <i></i> 사업자등록번호 291-88-01393 <i></i> <strong>대표번호 <a href="tel:02-6225-2300"><strong>02-6225-2300</strong></a></strong>
					<?php endif;?>
					*/?>
					<p class="copyright"><a href="https://www.datahero.co.kr" target="_blank">ⓒ (주)데이터히어로</a><i></i>
                        <strong>대표자</strong> 김인중 <br>서울특별시 서초구 강남대로 311 <i></i> 사업자등록번호 291-88-01393 <i></i> <strong>대표번호 <a href="tel:02-6225-2300"><strong>02-6225-2300</strong></a></strong>
                    </p>                    
                </div>
                <!-- //foot_info -->
                <div class="family_site">
                    <strong>Family</strong>&nbsp;&nbsp;&nbsp;>&nbsp;&nbsp;&nbsp;<a href="<?=SUPER_HOME?>" target="blank">슈퍼스톡스</a> <i></i> <a
                        href="<?=VALUE_HOME?>" target="blank">밸류라인</a> <i></i>
                    <a href="https://bigfinance.co.kr/" target="blank">빅파이낸스</a>
                </div>
                <!-- //family_site -->

            </div>
            <!-- //notice -->
<?php endif;?>
        </div>
        <!-- //footer -->
    </div>
    <!-- //wrap -->

<?php if($is_event_popup === TRUE) :?>
<!-- 신규서비스 2주 안내 팝업 -->
<div class="free_2weeks valueChart open" id="layer_pop">
	<!-- 보여줘야 하는 경우 class open -->
	<div class="bg_gray"></div>
	<div class="box">        
		<div class="content">                
			<div class="info_txt">
				<p class="txt01"><strong>AI적정주가 차트</strong>가 개선되었습니다.</p>
				<br>
				<p class="txt02">종목의 적정주가와 매매타이밍을 보다 쉽게 확인할 수 있습니다.</p>
			</div>                                
			<div class="info_tip">
				<p class="tip">TIP.</p>
				<p class="tip">'진단점수'로 우량주를 확인하고, 'AI적정주가'로 매매타이밍을 잡아보세요~</p>
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
	if (cookiedata.indexOf("2weekspop=done") < 0) {
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
		setCookie("2weekspop", "done", 24);            
		document.getElementById('layer_pop').style.display = "none";
	});
</script>
<?php endif;?>

<?php if($is_main===TRUE) :?>
<!-- Channel Plugin Scripts -->
<script>
  (function() {
    var w = window;
    if (w.ChannelIO) {
      return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
    }
    var ch = function() {
      ch.c(arguments);
    };
    ch.q = [];
    ch.c = function(args) {
      ch.q.push(args);
    };
    w.ChannelIO = ch;
    function l() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      var s = document.createElement('script');
      s.type = 'text/javascript';
      s.async = true;
      s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
      s.charset = 'UTF-8';
      var x = document.getElementsByTagName('script')[0];
      x.parentNode.insertBefore(s, x);
    }
    if (document.readyState === 'complete') {
      l();
    } else if (window.attachEvent) {
      window.attachEvent('onload', l);
    } else {
      window.addEventListener('DOMContentLoaded', l, false);
      window.addEventListener('load', l, false);
    }
  })();
  ChannelIO('boot', {
    "pluginKey": "09196b5e-03b3-46d7-b58b-572697149e0f"
  });
</script>
<!-- End Channel Plugin -->
<?php endif;?>

</body>

<!-- Modal popup -->
<div class="first_month_3300 md-modal md-effect-3" id="modal-3">
    <div class="md-content">
        <div id="setting" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse_w.png" alt="팝업닫기"></a>                
				<?php if($this->session->userdata('is_login') === TRUE):?>
				<div class="sub_top">
                    <h2 class="h2_title">초이스스탁US 프리미엄<span><strong>첫 달 3,000원</strong></span></h2>
                    <p class="period">하루 100원으로 투자의 즐거움을 경험하세요.</p>
                </div>
				<?php else :?>
				<div class="sub_top">
	                <h2 class="h2_title">초이스스탁US 프리미엄<span><strong>로그인만하면 2주 무료!</strong></span></h2>
                    <p class="period">무료로 미국주식 추천주와 포트폴리오 서비스를 받아보세요.</p>
                </div>
				<?php endif;?>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <table cellspacing="0" border="0" class="tableRanking type_compare">
                    <tbody>
                        <tr>
                            <th class="top_th"><span>초이스스탁US 프리미엄</span></th>
                            <th class="top_th"><span>프리미엄</span></th>
                            <th class="top_th"><span>무료</span></th>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>한글로 쉽고 편리한 <b>종목검색</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력/적정주가 <b>종목진단</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>엄선된 <b>종목추천/포트폴리오</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력+저평가+수급 <b>승부주</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>취향저격 종목추천 <b>종목캐치</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>나만의 <b>관심종목/원스톱진단</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>종목발굴 <b>투자레시피/종목노트</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>관심/추천/업데이트 <b>알림</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <div class="pop_btm">
                <div class="btnArea payBtn">
					<?php if($this->session->userdata('is_login') === TRUE):?>
                    <a href="/payment/choice" class="btn btn_save"><b>프리미엄</b> 가입하기<i></i></a>
					<?php else:?>
                    <a href="/member/login" class="btn btn_save"><b>프리미엄 2주 무료체험</b><i></i></a>
					<?php endif;?>
                </div>
                <ul class="link_menu">
                    <li><a href="/main/service_prm">[프리미엄자세히보기]</a></li>
                    <li><a href="/member/login">[로그인]</a></li>

                </ul>
            </div>
        </div>
    </div>
</div>

<?php if($is_event === true) :?>
<!-- [1주년 이벤트] 초이스스탁US 프리미엄 첫달 900원 -->
<div class="event_1year md-modal md-effect-3" id="modal-4">
    <!-- class : md-show 가 없는 경우 팝업 숨김, md-show 있는 경우 팝업 노출  -->
    <div class="md-content">
        <div id="setting" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse_w.png" alt="팝업닫기"></a>
                <div class="sub_top">
                    <h2 class="h2_title">초이스스탁US 프리미엄<span><strong>첫 달 900원!</strong></span></h2>
                    <p class="period">이벤트 ~ 10/18(일) 까지</p>
                </div>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <table cellspacing="0" border="0" class="tableRanking type_compare">
                    <tbody>
                        <tr>
                            <th class="top_th"><span>초이스스탁US 프리미엄</span></th>
                            <th class="top_th"><span>프리미엄</span></th>
                            <th class="top_th"><span>무료</span></th>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>한글로 쉽고 편리한 <b>종목검색</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력/적정주가 <b>종목진단</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>엄선된 <b>종목추천/포트폴리오</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력+저평가+수급 <b>승부주</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>취향저격 종목추천 <b>종목캐치</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>나만의 <b>관심종목/원스톱진단</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>
                        <tr>
                            <td class="mid_td"><span>종목발굴 <b>투자레시피/종목노트</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td><span>항목제한</span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>관심/추천/업데이트 <b>알림</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="not_select"><span></span></td>                            
                        </tr>                        
                    </tbody>
                </table>
            </div>
            <div class="pop_btm">
                <div class="btnArea payBtn">
                    <a href="/payment/choice" class="btn btn_save"><b>프리미엄</b> 가입하기<i></i></a>
                </div>
                <ul class="link_menu">
                    <li><a href="/main/service_prm">[프리미엄자세히보기]</a></li>
                    <li><a href="/member/login">[로그인]</a></li>

                </ul>
            </div>
        </div>
    </div>
</div>
<?php endif;?>

<div class="md-overlay"></div><!-- the overlay element -->
</html>