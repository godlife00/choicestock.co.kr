//신청/해지
function fnSinChung() {
	alert('신청페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//sinchungpage";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("sinchungpage");
    } else {
        window.SuperStock.activityGoTo("sinchungpage");
    }
}
//알림정보
function fnNotiInfo() {
	alert('알림정보페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//notifyInfo";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("notifyInfo");
    } else {
        window.SuperStock.activityGoTo("notifyInfo");
    }
}
//알림신청
function fnNotiRegister() {
	alert('알림신청페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//notifyregister";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("notifyregister");
    } else {
        window.SuperStock.activityGoTo("notifyregister");
    }
}
//서비스소개
function fnService() {
	alert('서비스소개페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//service";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("service");
    } else {
        window.SuperStock.activityGoTo("service");
    }
}
//홈
function fnHome() {
	alert('홈페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//home";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("home");
    } else {
        window.SuperStock.activityGoTo("home");
    }
}
//추천
function fnRecommend() {
	alert('추천페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//recommend";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("recommend");
    } else {
        window.SuperStock.activityGoTo("recommend");
    }
}
//진단
function fnSearch() {
	alert('진단페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//search";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("search");
    } else {
        window.SuperStock.activityGoTo("search");
    }
}
//발굴
function fnAttractive() {
	alert('발굴페이지 이동');
	return;
    var agt = navigator.userAgent.toLowerCase();
    if (agt.indexOf("iphone") != -1) {
        window.location = "SuperStock://activityGoTo//attractive";
    } else if (agt.indexOf("android") != -1) {
        window.SuperStock.activityGoTo("attractive");
    } else {
        window.SuperStock.activityGoTo("attractive");
    }
}

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
    
    href = '/hn_stock/set_catch';

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
                location.href='/hn_stock/catch_info?catch_list='+data.catch_list+'&sector_list='+data.sector_list;
            }
            else {
                alert(data.msg);
                location.href='/hn_stock/catch_info';
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

    location.href= '/hn_main/saveTicker?ticker='+ticker;
}

function fnTickerDel(no) {
//    alert(no);
    $('div').remove('#tkrId'+no);
}

function fnMyitem(ticker, page, count, id) {

    count = count || '';

    if (ticker == '') {
        alert('선택한 종목이 없습니다.');
        return;
    }

    var href = '/hn_search/setTicker/'+ticker+'/'+count;

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
                    //location.href='/member/login?ru='+page;
                }
                return;
            }
            else if (data.success) {
                if(data.res == 'Y') {
                    $('#catch_icon_'+id).attr('class', 'attention on');
                    //if(id=='one') {
                    //    $('#catch_icon_'+id+'_sub').attr('class', 'attention on');
                    //}
                }
                else {
                    $('#catch_icon_'+id).attr('class', 'attention');
                    //if(id=='one') {
                    //    $('#catch_icon_'+id+'_sub').attr('class', 'attention');
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

function moveToSearch(div) {
    //var div = $('.globalStock #header .searchArea .AutoComplete');

    if ($('li a._on', div).length > 0) {
        var keyword = $('li a._on:first span.schCode', div).html();
        //setSearchHistory(keyword);
        location.href = '/hn_search/invest_charm/' + keyword;
    } else {

        if ($('li.show', div).length > 0) {
            var keyword = $('li.show:first a', div).data('id');
            //setSearchHistory(keyword);
            location.href = '/hn_search/invest_charm/' + keyword;
        }
    }
}

function onSearchTicker(ticker) {
    if(ticker=='') { alert('선택된 종목코드가 없습니다.'); return; }
    setSearchHistory(ticker);
    location.href = '/hn_search/invest_charm/' + ticker;
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
    if(sticker == keyword) return;
    sticker = keyword;

    $.ajax({
        url: '/hn_main/ajax_save_search_history',
        type: 'GET',
        data: { 'ticker': keyword },
        async: false,
        success: function () {
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

