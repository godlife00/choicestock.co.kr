var acc_no = "0123456789-";
var timer;
var isRunning = false;

function fnChangePhone() {
	$('#new_phone_area').css("display", "table-row");
}

function fnSendAuthNo(op) {

	$('#phone_noti').css("display", "none");
	$('#auth_result').css("display", "none");
	$("input[name=time_check]").val('');
	$("input[name=auth_check]").val('');

	if($('input[name=new_phone_number]').val() =='') {
		$('#phone_noti').css("display", "block");
		$('#phone_noti').html('<i></i>핸드폰 번호를 입력해 주세요.');

		$('input[name=new_phone_number]').focus();
		return;
	}
	else {
		if(op=='auto') {
			var f = document.autoPayForm;
		}
		else if(op=='term') {
			var f = document.payForm;
		}
		else {
			var f = document.infoForm;
		}
		for(i=0; i<f.new_phone_number.value.length; ++i){
			temp = f.new_phone_number.value.substring(i, i+1);
			if(acc_no.indexOf(temp) == '-1'){
				$('#phone_noti').css("display", "block");
				$('#phone_noti').html('<i></i>핸드폰번호는 숫자와 - 만 사용하실 수 있습니다.');
				f.new_phone_number.value = '';
				f.new_phone_number.focus();
				return;
			}
		}
	}

	if(op=='info') {
		var phone = $('#phone_number').text().replace(/-/gi,"");
		var new_phone = $('input[name=new_phone_number]').val().replace(/-/gi,"");

		if(phone == new_phone) {
			$('#phone_noti').css("display", "block");
			$('#phone_noti').html('<i></i>현재 사용중인 휴대폰번호 입니다.');
			return;
		}
		else {
			$('#phone_noti').css("display", "none");
		}
	}
	else {
		$('#phone_noti').css("display", "none");
	}

	// 남은 시간
	var leftSec = 180;
	display = document.querySelector('#timer');
	// 이미 타이머가 작동중이면 중지
	if (isRunning){
		return;
		//clearInterval(timer);
	}
	startTimer(leftSec, display);

	href = '/member/send_authno?no='+$("input[name=new_phone_number]").val();

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.error) {
				if(data.msg=='dup') {
					alert('기존 무료체험 신청 번호입니다.\n2주 무료체험은 동일번호로 중복 신청할 수 없습니다.');
				}
				else {
					$('#phone_noti').css("display", "block");
					$('#phone_noti').html('<i></i>'+data.msg);
				}
				return;
			}
			else if (data.success) {
				$('#new_auth_area').css("display", "table-row");
			}
		}
	});
}

function startTimer(count, display) {
	var minutes, seconds;
	isRunning = true;
	timer = setInterval(function () {
		minutes = parseInt(count / 60, 10);
		seconds = parseInt(count % 60, 10);
		minutes = minutes < 10 ? "0" + minutes : minutes;
		seconds = seconds < 10 ? "0" + seconds : seconds;
		display.textContent = minutes + ":" + seconds;
		// 타이머 끝
	if (--count < 0) {
		clearInterval(timer);
		display.textContent = "시간초과";
		if($("input[name=auth_check]").val() != '1') {
			$("input[name=time_check]").val('1');
		}
		isRunning = false;
		}
	}, 1000);
}

function fnAuthConfirm() {
	var time_check = $("input[name=time_check]").val();

	if(time_check=='1') {
		$('#auth_result').css("display", "block");
		$('#auth_result').text('입력 시간이 초과 되었습니다. 다시 시도해 주세요.');
		return;
	}

	if($('input[name=auth_no]').val() =='') {
		$('#auth_result').css("display", "block");
		$('#auth_result').text('인증번호를 입력해 주세요.');
		$('input[name=auth_no]').focus();
		return;
	}

	href = '/member/check_authno?no='+$("input[name=auth_no]").val();

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.error) {
				$('#auth_result').css("display", "block");
				$('#auth_result').text(data.msg);
				return;
			}
			else if (data.success) {
				$('#time_zone').css("display", "none");
				$('#phone_noti').css("display", "none");
				$('#auth_result').css("display", "block");
				$('#auth_result').text(data.msg);
				$("#new_phone_number").attr("readonly",true);
				$("input[name=time_check]").val('');
				$("input[name=auth_check]").val('1');
			}
		}
	});
}

function fnInfoSave() {
	if($('input[name=new_phone_number]').val() != '') {
		if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {
		}
		else {

			alert('핸드폰 인증이 완료되지 않았습니다.');
			return;
		}
	}

	if( $('#marketing_tab').hasClass('active') == true ) {
		document.infoForm.m_push_check.value = 'Y';
	}
	else {
		document.infoForm.m_push_check.value = '';
	}
	document.infoForm.submit();
}

//function showPayCancel(no, type, price, cno='', day='', refund='', atday='') {
function showPayCancel(no, type, price, cno, day, refund, atday) {

	cno = cno || '';
	day = day || '';
	refund = refund || '';
	atday = atday || '';

	var now = new Date(); 
	$('#now_time').text(now.getFullYear()+'.'+(now.getMonth()+1)+'/'+now.getDate()+' '+now.getHours()+':'+now.getMinutes());
	$('#requestCancel').removeClass('active');
	$('.pay_edt_01').addClass('open');
	$('html, body').css("overflow", "hidden");
	if(type=='A') {
		$('#pay_srv_name').text($('input[name=srv_name]').val()+' (월자동)');
	}
	else {
		$('#pay_srv_name').text($('input[name=srv_name]').val());
	}

	$('#pay_srv_price').text(comma(price)+'원');

	if(cno!='') {
		$('#pay_card_no').text('신용카드(****'+cno+')');
	}

	if(day!='') {
		$('#pay_use_day').text(day+'일');
	}

	if(refund!='') {
		$('#pay_refund_price').text(comma(refund)+'원');
	}

	if(refund==0 && atday!='') {
		$('#pay_free_price').html(atday.substring(4,6)+'월 '+atday.substring(6,8)+'일 \'결제 예정\' 중으로,<br>환불금이 0원으로 표시됩니다.');
	}

	$('input[name=cs_ano]').val(no);
}

function fnPayCanCel() {
	//if( !confirm('자동결제 취소/환불 신청하시겠습니까?') ) return; 
	if( $('#requestCancel').hasClass('active') == false ) {
		alert('\'위 내용을 확인했으며, 결제취소를 신청합니다.\'를 체크해 주세요.');
		return;
	}
	document.payForm.submit();
}

function showRefund(no, price, day, refund) {

	$('#requestRefund').removeClass('active');
	$('.pay_edt_02').addClass('open');
	$('html, body').css("overflow", "hidden");
	$("#select option:eq(0)").prop("selected", true);
	$('#rf_bank_name').text($("#select option:selected").text());
	$('input[name=account_number]').val('');
	$('#vbank_srv_price').text(comma(price)+'원');
	$('#vbank_use_day').text(day+'일');
	$('#vbank_refund_price').text(comma(refund)+'원');
	$('input[name=cs_rfno]').val(no);
}

function fnRefund() {

	if($('input[name=account_number]').val() == '') {
		alert("계좌번호를 입력해 주세요.");
		$('input[name=account_number]').focus();
		return;
	}
	else {
		var f = document.rfForm;
		for(i=0; i<f.account_number.value.length; ++i){
			temp = f.account_number.value.substring(i, i+1);
			if(acc_no.indexOf(temp) == '-1'){
				alert('계좌번호는 숫자와 - 만 사용하실 수 있습니다.');
				f.account_number.value = '';
				f.account_number.focus();
				return;
			}
		}		
	}

	if( $('#requestRefund').hasClass('active') == false ) {
		alert('\'위 내용을 확인했으며, 결제취소를 신청합니다.\'를 체크해 주세요.');
		return;
	}

	document.rfForm.submit();
}
/*
function fnInfoSave() {
	if($('input[name=user_phone]').val() == '') {
		alert('핸드폰 번호를 입력해 주세요');
		$('input[name=user_phone]').focus()
		return;
	}
	document.infoForm.submit();
}
*/
function fnCatchType(obj) {
	$("#catchType div").removeClass("active"); 
	$(this).addClass('active');              
}

function fnSetCatch() {
	$('.setting_pop').removeClass('open');
	$('.catch_edt_01').addClass('open');
	$('html, body').css("overflow", "hidden");

	var catch_type = $('input[name=catchType]').val().split('|');

	for ( var i = 0 in catch_type ) {
		if(catch_type[i] == '1') {
			$('#catchType_div_'+i).addClass('active');
		}
		else {
			$('#catchType_div_'+i).removeClass('active');
		}
	}
	var catch_size = $('input[name=catchSize]').val().split('|');

	for ( var i = 0 in catch_size ) {
		if(catch_size[i] == '1') {
			console.log('checked==>'+catch_size[i]);
			$('#catchSize_div_'+i).addClass('active');
		}
		else {
			console.log('no==>'+catch_size[i]);
			$('#catchSize_div_'+i).removeClass('active');
		}
	}

	var catch_sec = $('input[name=catchSector]').val().split('|');
	for ( var i = 0 in catch_sec ) {
		if(catch_sec[i] == '1') {
			$('#catchSec_div_'+i).addClass('active');
		}
		else {
			$('#catchSec_div_'+i).removeClass('active');
		}
	}
}

function fnCatchSave() {

	var catchType = '';
	var catchSize = '';
	var catchSec1 = '';
	var catchSec2 = '';
	var catchSec3 = '';
	var catchSec = ''

	$('#catchType').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchType += $(this).attr('value')+'|';
		}
		else {
			catchType += '0|';
		}
	});

	$('#catchSize').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSize += $(this).attr('value')+'|';
		}
		else {
			catchSize += '0|';
		}
	});

	$('#catchSector1').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec1 += $(this).attr('value')+'|';
		}
		else {
			catchSec1 += '0|';
		}
	});

	$('#catchSector2').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec2 += $(this).attr('value')+'|';
		}
		else {
			catchSec2 += '0|';
		}
	});

	$('#catchSector3').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec3 += $(this).attr('value')+'|';
		}
		else {
			catchSec3 += '0|';
		}
	});

	catchSec = catchSec1+catchSec2+catchSec3;
	
	if(!catchSec.match('1')) {
		alert('관심있는 종목을 선택해주세요.');
		return;
	}

	//if( !confirm('선택하신 정보로 캐치를 생성하시겠습니까?') ) return; 

	$('input[name=catchType]').val(catchType);
	$('input[name=catchSize]').val(catchSize);
	$('input[name=catchSector]').val(catchSec);
	
	href = '/stock/set_catch';

	var param = {
		"catchType":catchType
		,"catchSize":catchSize
		,"catchSector":catchSec
	}

	$.ajax({
		url : href,
		type : 'post',
		data : param,
		dataType : 'json',
        async: false,
		cache : false,
		success : function(data) {
			if(data.success) {
				$('#loading').css("display", "block");
				location.href='/stock/catch_info?catch_list='+data.catch_list+'&sector_list='+data.sector_list;
			}
			else {
				alert(data.msg);
				location.href='/stock/catch_info';
			}
		}
	});
}
/*
function fnCatchSave() {

	var catchType = '';
	var catchSize = '';
	var catchSec1 = '';
	var catchSec2 = '';
	var catchSec3 = '';
	var catchSec = ''

	$('#catchType').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchType += $(this).attr('value')+'|';
		}
		else {
			catchType += '0|';
		}
	});

	$('#catchSize').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSize += $(this).attr('value')+'|';
		}
		else {
			catchSize += '0|';
		}
	});

	$('#catchSector1').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec1 += $(this).attr('value')+'|';
		}
		else {
			catchSec1 += '0|';
		}
	});

	$('#catchSector2').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec2 += $(this).attr('value')+'|';
		}
		else {
			catchSec2 += '0|';
		}
	});

	$('#catchSector3').children().each(function(index) {
		if( $(this).hasClass('active') == true ) {
			catchSec3 += $(this).attr('value')+'|';
		}
		else {
			catchSec3 += '0|';
		}
	});

	catchSec = catchSec1+catchSec2+catchSec3;
	
	if(!catchSec.match('1')) {
		alert('관심있는 종목을 선택해주세요.');
		return;
	}

	//if( !confirm('선택하신 정보로 캐치를 생성하시겠습니까?') ) return; 

	$('input[name=catchType]').val(catchType);
	$('input[name=catchSize]').val(catchSize);
	$('input[name=catchSector]').val(catchSec);

	document.catchForm.submit();
}
*/

function fnPreStep(no) {
	if(no=='1') {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_01').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
	else if(no=='2') {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_02').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
	else if(no=='3') {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_03').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
	else {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_03_2').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
}
function fnNextStep(no) {

	if(no=='1') {
		if( $('#catchType').children().hasClass('active') == false ) {
			alert('선호하는 종목의 유형을 선택해주세요.');
			return;
		}
		else {
			$('.setting_pop').removeClass('open');
			$('.catch_edt_02').addClass('open');
			$('html, body').css("overflow", "hidden");
		}
	}
	else if(no=='2') {
		if( $('#catchSize').children().hasClass('active') == false ) {
			alert('선호하는 종목의 규모를 선택해주세요.');
			return;
		}
		else{
			$('.setting_pop').removeClass('open');
			$('.catch_edt_03').addClass('open');
			$('html, body').css("overflow", "hidden");
		}
	}
	else if(no=='3') {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_03_2').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
	else {
		$('.setting_pop').removeClass('open');
		$('.catch_edt_03_3').addClass('open');
		$('html, body').css("overflow", "hidden");
	}
}

function fnMyTickerSave() {

	var ticker = '';
	var msg = '저장 하시겠습니까?';
	$('.ui-state-default').each(function(index) {
		ticker += $(this).attr('value')+'|';
	});

	if(ticker == '') {
		msg = '관심 종목이 모두 삭제 됩니다. 저장 하시겠습니까?';
	}
	//if( !confirm(msg) ) return; 

	location.href= '/main/saveTicker?ticker='+ticker;
}

function fnTickerDel(no) {
//	alert(no);
	$('div').remove('#tkrId'+no);
}
function fnMyitem(ticker, page, count, id) {

	count = count || '';

	if (ticker == '') {
		alert('선택한 종목이 없습니다.');
		return;
	}

	var href = '/search/setTicker/'+ticker+'/'+count;

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.error) {
				alert(data.error);
				$('#catch_'+ticker).attr('class', 'attention');
				if(data.res == '1') {
					location.href='/member/login?ru='+page;
				}
				return;
			}
			else if (data.success) {
				if(data.res == 'Y') {
					$('#catch_icon_'+id).attr('class', 'attention on');
					//if(id=='one') {
					//	$('#catch_icon_'+id+'_sub').attr('class', 'attention on');
					//}
				}
				else {
					$('#catch_icon_'+id).attr('class', 'attention');
					//if(id=='one') {
					//	$('#catch_icon_'+id+'_sub').attr('class', 'attention');
					//}
				}

				if(data.count!='') {
					if(id=='one') {
						$('#catch_count_'+id).text(data.count);
					}
					else {
						$('#catch_count_'+id).text('('+data.count+')');
					}
				}
				return;
			}

		}
	});
}
function fnNoticeSet(obj) {
	var val;
	if(obj.checked==true) {
		val = 'Y';
	}
	else {
		val = 'N';
	}
	href = '/member/notice_setup/'+obj.name+'/'+val;

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.error) {
				alert(data.error);
				if(data.res == '1') {
					location.href='/member/login';
				}
				return;
			}
			else if (data.success) {
				$('#push_date').text('- 알림 서비스가 설정되었습니다. '+data.res);
			}
		}
	});
}
function fnAgreeChk() {
	var push_marketing = '';
	if( $('#terms_tab').hasClass('active') == false ) {
		alert('\'초이스스탁 서비스 약관에 동의합니다.\'를 체크해 주세요.');
		return;
	}
	if( $('#policy_tab').hasClass('active') == false ) {
		alert('\'개인정보 수집 및 이용에 동의합니다.\'를 체크해 주세요.');
		return;
	}
	if( $('#marketing_tab').hasClass('active') == true ) {
		var push_marketing = 'Y';
	}

	var user_path = $('input[name=user_path]').val();
	location.href= '/member/login_complete?up='+user_path+'&push_marketing='+push_marketing;
}

function fnCardRegist() {
	if( $('#cardno_1').val() == "" || $('#cardno_2').val() == "" || $('#cardno_3').val() == "" || $('#cardno_4').val() == "") {
		alert("카드번호를 입력해 주세요.");
		return;
	}

	if( $('#cardpw').val() == "") {
		alert("비밀번호 앞2자리를 입력해 주세요.");
		$('#cardpw').focus();
		return;
	}

	if( $('#auth_no').val() == "") {
		if( $('.bns_num').hasClass('active') == true ) {
			alert("사업자등록번호를 입력해 주세요.");
		}
		else {
			alert("생년월일을 입력해 주세요.");
		}
		$('#auth_no').focus();
		return;
	}
	else {
		var no = $('#auth_no').val();
		
		if( $('.bns_num').hasClass('active') == true ) {
			if(no.length != 10) {
				alert('사업자등록번호 10자리를 입력해 주세요.');
				return;	
			}
		}
		else {
			if(no.length != 6) {
				alert('생년월일 6자리를 입력해 주세요.');
				return;	
			}
		}	
	}

	if( $('#agree_chk1').hasClass('active') == false || $('#agree_chk2').hasClass('active') == false || $('#agree_chk3').hasClass('active') == false ) {
		alert('이용약관에 동의해 주십시오.');
		return;
	}
	if( $('#confirmed').hasClass('active') == false ) {
		alert('상기 결제 내용 확인을 선택해 주십시오.');
		return;
	}

	$('#autopay_confirm').css("display", "block");
}

function niceAutoPay(){
	document.requestForm.submit();
}

function numberCheck(num, msg) {

	if(window.event.keyCode == 9 || window.event.keyCode == 8) return false;

	if(msg=='authno') {
		if( $('.bns_num').hasClass('active') == true ) {
			msg = '사업자번호는';
		}
		else {
			msg = '생년월일은';
		}		
	}
	if(!$.isNumeric(num.value)) {
		alert(msg+" 숫자만 입력할 수 있습니다.");
		num.value = "";
		num.focus();
		return;
	} 
}

function authNoCheck() {
	$('#auth_no').val('');
	$('#auth_no').focus();
	if( $('.bns_num').hasClass('active') == true ) {
		$('#auth_no').attr("maxlength",6);
		$('#auth_no_length').text('(6자리)');
	}
	else {
		$('#auth_no').attr("maxlength",10);
		$('#auth_no_length').text('(10자리)');
	}
}
function selPayMethod() {
	var method = $("select[name=PayMethod]").val();
	var pay = $("input[name=pay]").val();

	//href = '/payment/re_hashcode/'+method+'?pay=<?=$pay?>';
	href = '/payment/re_hashcode/'+method+'?pay='+pay;

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.error) {
				return;
			}
			else if (data.success) {
				$('input[name=Amt]').val(data.price);
				$('input[name=EdiDate]').val(data.ediDate);
				$('input[name=SignData]').val(data.hash);

				$('#payPrice_1').html('<strong>'+comma(data.price)+'</strong><b>원</b>');
				$('#payPrice_2').html('<strong>'+comma(data.price)+'</strong>원 <span>(부가세포함)</span>');
			}
		}
	});
}

function clearCpmsg() {
	if($('input[name=coupon_nm]').val().trim()=='') {
		$('#coupon_input_msg').css("display", "none");
		$('#coupon_input_msg').html('');
	}
}

function chkCoupon() {
	if( $('#coupon_nm').val()=="" ) {
		$('#coupon_input_msg').css("display", "block");
		$('#coupon_input_msg').html('<i></i>쿠폰코드를 입력해주세요.');
	}
	else {
		var pay = $("input[name=pay]").val();
		href = '/payment/coupon/'+$("input[name=coupon_nm]").val()+'/'+$("input[name=p_code]").val()+'?pay='+pay;

		$.ajax({
			url : href,
			type : 'get',
			dataType : 'json',
			cache : false,
			success : function(data) {
				if (data.error) {
					$('#coupon_input_msg').css("display", "none");
					$('#coupon_input_msg').css("display", "block");
					$('#coupon_input_msg').html('<i></i>'+data.msg);
					$('input[name=cp_done]').val('');
					return;
				}
				else if (data.success) {
					$('#coupon_input_msg').css("display", "none");
					$("#coupon_nm").attr("readonly",true);

					$('input[name=Amt]').val(data.price);
					$('input[name=EdiDate]').val(data.ediDate);
					$('input[name=SignData]').val(data.hash);
					$('input[name=dc_rate]').val(data.dc_rate);
					$('input[name=cp_done]').val('1');

					if(pay=='1') {
						$('#payPrice_1').html('<strong>'+comma(data.price)+'</strong>원 <span>(부가세포함)</span>');
						var dc_price = Math.round(($('input[name=Amt_st]').val()/1.1)*(data.dc_rate/100));
						$('#coupon_view').html('<span>쿠폰할인</span> <strong><i></i>'+comma(dc_price)+'</strong>원 (-'+data.dc_rate+'%)');
						$('#auto_coupon_msg').css("display", "block");
						$('#coupon_input_msg').css("display", "block");
						$('#coupon_input_msg').html('쿠폰코드 확인. 결제금액 할인이 적용됩니다. [확인]');
					}
					else {
						$('#payPrice_1').html('<strong>'+comma(data.price)+'</strong><b>원</b>');
						$('#payPrice_2').html('<strong>'+comma(data.price)+'</strong>원 <span>(부가세포함)</span>');
						$('#coupon_input_msg').css("display", "block");
						$('#coupon_input_msg').html('쿠폰코드 확인. 결제금액 할인이 적용됩니다. [확인]');
					}
				}
			}
		});
	}
}
function comma(str) {
	str = String(str);
	return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}
//결제창 최초 요청시 실행됩니다.
function nicepayStart(){

	if($('#coupon_nm').val() != '' && $('input[name=cp_done]').val() != '1') {
		alert('쿠폰코드를 확인해 주세요.');
		return;
	}

	if($("input[name=phone_check]").val()=='N') { 
		if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {
		}
		else {
			$('#phone_noti').css("display", "block");
			$('#phone_noti').html('<i></i>프리미엄 서비스 신청을 진행하시려면 휴대폰번호 인증을 완료해주세요.');

			$('input[name=new_phone_number]').focus();
			return;
		}
	}

	if( $('.note_chk .txt').hasClass('active') == false ) {
		alert('결제금액과 결제유의사항 확인에 체크 후 결제를 진행해주세요.');
		return;
	}

	if($('input[name=Amt]').val()==0 && $('#coupon_nm').val() != '' && $('input[name=cp_done]').val() == '1') {
		document.payForm.action = "/payment/advance";
		document.payForm.submit();
		return;
	}

	document.payForm.ReqReserved.value = document.payForm.pay.value+'|'+document.payForm.coupon_nm.value+'|'+document.payForm.dc_rate.value+'|'+document.payForm.cp_done.value+'|'+document.payForm.new_phone_number.value;

	if(checkPlatform(window.navigator.userAgent) == "mobile"){//모바일 결제창 진입
		document.payForm.action = "https://web.nicepay.co.kr/v3/v3Payment.jsp";
		document.payForm.submit();
	}else{//PC 결제창 진입
		goPay(document.payForm);
	}
}

//[PC 결제창 전용]결제 최종 요청시 실행됩니다. <<'nicepaySubmit()' 이름 수정 불가능>>
function nicepaySubmit(){
	document.payForm.submit();
}

//[PC 결제창 전용]결제창 종료 함수 <<'nicepayClose()' 이름 수정 불가능>>
function nicepayClose(){
	alert("결제가 취소 되었습니다");
}

//pc, mobile 구분
function checkPlatform(ua) {
	if(ua === undefined) {
		ua = window.navigator.userAgent;
	}
	
	ua = ua.toLowerCase();
	var platform = {};
	var matched = {};
	var userPlatform = "pc";
	var platform_match = /(ipad)/.exec(ua) || /(ipod)/.exec(ua) 
		|| /(windows phone)/.exec(ua) || /(iphone)/.exec(ua) 
		|| /(kindle)/.exec(ua) || /(silk)/.exec(ua) || /(android)/.exec(ua) 
		|| /(win)/.exec(ua) || /(mac)/.exec(ua) || /(linux)/.exec(ua)
		|| /(cros)/.exec(ua) || /(playbook)/.exec(ua)
		|| /(bb)/.exec(ua) || /(blackberry)/.exec(ua)
		|| [];
	
	matched.platform = platform_match[0] || "";
	
	if(matched.platform) {
		platform[matched.platform] = true;
	}
	
	if(platform.android || platform.bb || platform.blackberry
			|| platform.ipad || platform.iphone 
			|| platform.ipod || platform.kindle 
			|| platform.playbook || platform.silk
			|| platform["windows phone"]) {
		userPlatform = "mobile";
	}
	
	if(platform.cros || platform.mac || platform.linux || platform.win) {
		userPlatform = "pc";
	}
	
	return userPlatform;
}

/*
function fnFreePay() {
	if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {

		if( $('#noti_check').hasClass('active') == false ) {
			alert('알림 정보 수신을 체크해 주세요.');
			return;
		}
		else {
			document.infoForm.action = "/member/request_free";
			document.infoForm.submit();
			return;
		}
	}
	else {
		$('#phone_noti').css("display", "block");
		$('#phone_noti').html('<i></i>3일 무료체험을 신청하시려면 휴대폰번호 인증을 완료해주세요.');

		$('input[name=new_phone_number]').focus();
		return;
	}
}

function fnPayment(pay) {
	if($("input[name=phone_check]").val()=='N') { 
		if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {
			if(pay=='1') {
				document.infoForm.action = "/payment/auto_process";
			}
			else {
				document.infoForm.action = "/payment/process";
			}
			document.infoForm.submit();
			return;
		}
		else {
			$('#phone_noti').css("display", "block");
			$('#phone_noti').html('<i></i>결제를 진행하시려면 휴대폰번호 인증을 완료해주세요.');

			$('input[name=new_phone_number]').focus();
			return;
		}
	}
	else {
		if(pay=='1') {
			document.infoForm.action = "/payment/auto_process";
		}
		else {
			document.infoForm.action = "/payment/process";
		}
		document.infoForm.submit();
		return;
	}
}
*/
function fnPayment() {
	
	//월자동 결제(혹은 기간결제) 서비스를 사용중입니다. 결제 방식 변경을 원하실 경우 기존 결제 취소 후 다시 결제를 시도해주세요

	if( $('#payment_choice1').hasClass('active') == true ) {

		if($("input[name=pay_type]").val() == 'G' && $("input[name=pay_date]").val() !='') {
			//if( !confirm('현재 프리미엄 서비스 기간은 '+$("input[name=pay_date]").val()+' 까지입니다.\n월자동 결제 진행 시 \'기간 결제 만료 후 월자동 결제로 자동 전환\' 됩니다.') ) return;
			alert('기간결제 서비스를 사용중입니다. 결제 방식 변경을 원하실 경우 기존 결제 취소 후 다시 결제를 시도해주세요.');
			return;
		}
		else if($("input[name=pay_type]").val() == 'A' && $("input[name=pay_date]").val() !='') {
			alert('이미 월자동 서비스를 이용 중 입니다.');
			return;
		}

		location.href= '/payment/auto_process?pay=1';
		//location.href= '/payment/pay_auth?pay=1';
	}
	else {
		if($("input[name=pay_type]").val() == 'A' && $("input[name=pay_date]").val() !='') {
			//alert('기간 결제로의 전환을 원하시면 \'마이페이지에서 월자동 결제 해제\' 후 진행해주세요.');
	 	    alert('월자동 서비스를 사용중입니다. 결제 방식 변경을 원하실 경우 기존 결제 취소 후 다시 결제를 시도해주세요.');
			return;
		}
		else if($("input[name=pay_type]").val() == 'G' && $("input[name=pay_date]").val() !='') {
			alert('기간결제 서비스를 사용중입니다. 결제 방식 변경을 원하실 경우 기존 결제 취소 후 다시 결제를 시도해주세요.');
			return;
			//if( !confirm('현재 프리미엄 서비스 기간은 '+$("input[name=pay_date]").val()+' 까지입니다.\n추가 기간 결제 시, 서비스 기간이 자동 연장됩니다.') ) return;
		}

		if( $('#payment_choice2').hasClass('active') == true ) {
			location.href= '/payment/process?pay=2';
			//location.href= '/payment/pay_auth?pay=2';
		}
		else {
			location.href= '/payment/process?pay=3';
			//location.href= '/payment/pay_auth?pay=3';
		}
	}
}

function autoPayStart() {

	if($("input[name=phone_check]").val()=='N') { 
		if($("input[name=time_check]").val() == '' && $("input[name=auth_check]").val() == '1') {
		}
		else {
			$('#phone_noti').css("display", "block");
			$('#phone_noti').html('<i></i>프리미엄 서비스 신청을 진행하시려면 휴대폰번호 인증을 완료해주세요.');

			$('input[name=new_phone_number]').focus();
			return;
		}
	}

	if( $('.note_chk .txt').hasClass('active') == false ) {
		alert('결제금액과 결제유의사항 확인에 체크 후 결제를 진행해주세요.');
		return;
	}

	document.autoPayForm.action = "/payment/card_regist";
	document.autoPayForm.submit();
}

function moveToSearch(div) {
    //var div = $('.globalStock #header .searchArea .AutoComplete');

    if ($('li a._on', div).length > 0) {
        var keyword = $('li a._on:first span.schCode', div).html();
        location.href = '/search/invest_charm/' + keyword;
    } else {

        if ($('li.show', div).length > 0) {
            var keyword = $('li.show:first a', div).data('id');
            location.href = '/search/invest_charm/' + keyword;
        }
    }
}

function onSearchTicker(ticker) {
	if(ticker=='') { alert('선택된 종목코드가 없습니다.'); return; }
	setSearchHistory(ticker);
	location.href = '/search/invest_charm/' + ticker;
}

// 검색어 저장
var sticker = '';
function setSearchHistory(keyword) {
    /*
    var save_history = '';
    var search_history = getCookie('search_history');
    var max = 10;

    if(search_history == null) {
        save_history = keyword;
    } else {
        search_history = search_history.split(',');

        if($.inArray(keyword, search_history) > -1) {
            search_history.splice($.inArray(keyword, search_history), 1);
        }
        search_history.unshift(keyword);
        if(search_history.length > max) {
            search_history = search_history.slice(0, 10);
        }
        save_history = search_history.join(',');
    }
    setCookie('search_history', save_history, 365);
    */
	//alert(keyword);
	if(sticker == keyword) return;
	sticker = keyword;
    $.ajax({
        url: '/main/ajax_save_search_history',
        type: 'GET',
        data: { 'ticker': keyword },
        async: false,
        success: function () {
			//sticker = '';
        }
    });
}

function setCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}



/*****
// 검색어 자동완성    
$(function () {
    var top_search_action = false;
    var lis = [];
    $(".globalStock .searchArea .searchInput").on("keyup", function (e) {
        var key = e.keyCode;
        switch (key) {
            case 13:
                e.preventDefault();
                moveToSearch($('.globalStock #header .searchArea .AutoComplete'));
                break;

            case 9:
            case 16:
            case 37:
            case 38:
            case 39:
            case 40:
            case 27:
                break;

            default:
                var search_input = this;
                if (top_search_action) { clearTimeout(top_search_action); }
                top_search_action = setTimeout(function () {
                    doSearch(search_input);
                }, 400);
        }
    });

    function doSearch(obj) {
        var div = $('.globalStock .searchArea .AutoComplete');

        for (var i in lis) {
            $('a._on', lis[i]).removeClass('_on');
        }
        lis = [];
        div.removeClass('_show');
        if (obj.value.length <= 0) {
            return;
        }

        var search = obj.value.toUpperCase();
        var ul = $('ul:first', div);
        ul.html('');
        var match_li = null;
        var find_lis = [];
        for (var tic in search_ticker_list) {
            var ticker = tic.toUpperCase();
            if (ticker == search) {
                // ticker 일치
                match_li = $('<li><a href="javascript:;" class="_on" data-id="' + tic + '"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name + '</span></a></li>');
                continue;
            }
            if ((ticker + search_ticker_list[tic].name).toUpperCase().indexOf(search) >= 0) {
                find_lis.push($('<li><a href="javascript:;" data-id="' + tic + '"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name + '</span></a></li>'));
            }
        }
        if (match_li !== null) {
            ul.append(match_li);
        }
        if (find_lis.length > 0) {
            ul.append(find_lis);
        }
        if (find_lis.length > 0 || match_li !== null) {
            $('li:first a', ul).addClass('_on');
            $('li a', ul).on('mouseover', function () {
                $(this).addClass("_on");
            });
            $('li a', ul).on('mouseleave', function () {
                $(this).removeClass("_on");
            });
            $('li a', ul).on('mousedown', function () {
                var keyword = $(this).data('id');
                setSearchHistory(keyword);
                location.href = '/search/invest_charm/' + keyword;
            });
            div.addClass('_show');
        }
    }

    $(".globalStock .searchArea .searchInput").on("focusin", function () {
        if (this.value.length) {
            if (top_search_action) { clearTimeout(top_search_action); }
            var search_input = this;
            top_search_action = setTimeout(function () {
                doSearch(search_input);
            }, 300);
        }
    });
    $(".globalStock .searchArea .searchInput").on("focusout", function () {
        setTimeout(function () { $('.globalStock .searchArea .AutoComplete').removeClass('_show'); }, 300);
    });

});
*****/

// fixed 검색어 자동
$(function () {
    var top_search_action = false;
    var lis = [];
    $(".globalStock .searchArea .searchInput_fixed").on("keyup", function (e) {
        var key = e.keyCode;
        switch (key) {
            case 13:
                e.preventDefault();
                moveToSearch($('.globalStock .sch_autocomplete'));
                break;

            case 9:
            case 16:
            case 37:
            case 38:
            case 39:
            case 40:
            case 27:
                break;

            default:
                var search_input = this;
                if (top_search_action) { clearTimeout(top_search_action); }
                top_search_action = setTimeout(function () {
                    doSearch(search_input);
                }, 400);
        }
    });

    function doSearch(obj) {
        console.log(obj);

        var div = $('.globalStock .sch_autocomplete');

        for (var i in lis) {
            $('a._on', lis[i]).removeClass('_on');
        }
        lis = [];
        div.removeClass('_show');
        if (obj.value.length <= 0) {
            return;
        }

        var search_obj = obj.value;
        var search = obj.value.toUpperCase();
        var ul = $('ul:first', div);
        ul.html('');
        var match_li = null;
        var find_lis = [];
		//alert(search_ticker_list);
        //console.log(search_ticker_list);
        for (var tic in search_ticker_list) {
            var ticker = tic.toUpperCase();
            if (ticker == search) {
                // ticker 일치
                match_li = $('<li><a href="javascript:onSearchTicker(\'' + tic + '\')"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name.replace(search_obj,'<strong>'+search_obj+'</strong>') + '</span></a></li>');
                continue;
            }
            if ((ticker + search_ticker_list[tic].name).toUpperCase().indexOf(search) >= 0) {
                find_lis.push($('<li><a href="javascript:onSearchTicker(\'' + tic + '\')"><span class="schCode">' + tic + '</span><span class="schList">' + search_ticker_list[tic].name.replace(search_obj,'<strong>'+search_obj+'</strong>') + '</span></a></li>'));
            }
        }
        if (match_li !== null) {
            ul.append(match_li);
        }
        if (find_lis.length > 0) {
            ul.append(find_lis);
        }
        if (find_lis.length > 0 || match_li !== null) {
            $('li:first a', ul).addClass('_on');
            $('li a', ul).on('mouseover', function () {
                $('li a', ul).removeClass('_on');
                $(this).addClass("_on");
            });
            $('li a', ul).on('mousedown', function () {
                location.href = this.href;
            });

            $('.globalStock .sch_autocomplete .no_result').hide();

            div.addClass('_show');
        } else {
            var no_result = '<p>"<strong>' + search + '</strong>"에 대한 검색결과가 없습니다.</p>';
            $('.globalStock .sch_autocomplete .no_result').html(no_result).show();
        }
    }


    $(".globalStock .searchArea .searchInput_fixed").on("focusin", function () {
        if (this.value.length) {
            if (top_search_action) { clearTimeout(top_search_action); }
            var search_input = this;
            top_search_action = setTimeout(function () {
                doSearch(search_input);
            }, 300);
        }
    });
    $(".globalStock .searchArea .searchInput_fixed").on("focusout", function () {
        setTimeout(function () { $('.globalStock .sch_autocomplete').removeClass('_show'); }, 100);
    });
    $(".globalStock .searchArea .sch_autocomplete li a").on("mouseleave", function () {
        $(".globalStock .sch_autocomplete li a").removeClass("_on");
    });
    $(".globalStock .sch_autocomplete li a").on("mouseover", function () {
        $(this).addClass('_on');
    });
});


$(document).ready(function () {
    $(".globalStock .schArea .searchArea .schBack").on("click", function () {
        $('#container').css('overflow', 'auto').height('');
        $('#footer').css('overflow', 'auto').height('');
    });

    //알람
    if ($('.panelAlarmMenu').length) {

        $(".globalStock #header .panelAlarmMenu").on("click", function () {
            $('.globalStock .alarmArea').addClass('schFocus');
            $('#container').css('overflow', 'hidden').height(0);
        });
    }

	$('.globalStock .catch_edt #catch_cncl .catch_from .label').on("click", function () {
		if ($(this).hasClass("active")) {                        
			$(this).removeClass('active');                  
		} else {                                    
			$(this).addClass('active');              
		}        
	});
});

// override publish

