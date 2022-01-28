$(document).ready(function () {
    // 페이지 로드 완료후 이미지 노출
    $('.globalStock .main_mid.youtube_mijumi .video_thumbnail').show();

    /************************/
    /****  Modal popup  *****/
    /************************/
    //로그인 팝업
    var setWindow = $('.setting_pop');

    /* 개발처리
    var setpay_edt01 = $('.pay_edt_01');
    var setpay_edt02 = $('.pay_edt_02');
    var setpay_edt02_1 = $('.pay_edt_02_1');
    var setpay_edt02_2 = $('.pay_edt_02_2');
    var setcatch_edt01 = $('.catch_edt_01');
    var setcatch_edt02 = $('.catch_edt_02');
    var setcatch_edt03 = $('.catch_edt_03');
    var setcatch_edt03_2 = $('.catch_edt_03_2');
    var setcatch_edt03_3 = $('.catch_edt_03_3');
    */
    var setterms_01 = $('.pay_terms_01');
    var setterms_02 = $('.pay_terms_02');
    var setterms_03 = $('.pay_terms_03');

    // Show Hide
    $('.clse_trigger').click(function () {
        setWindow.addClass('open');
        $('html, body').css("overflow", "hidden");
    });

    /* 개발처리
    $('.show_pop01').click(function () {
        setpay_edt01.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02').click(function () {
        setpay_edt02.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02_1').click(function () {
        setpay_edt02_1.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop02_2').click(function () {
        setpay_edt02_2.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop03').click(function () {
        setWindow.removeClass('open');
        setcatch_edt01.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop04').click(function () {
        setWindow.removeClass('open');
        setcatch_edt02.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05_2').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03_2.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.show_pop05_3').click(function () {
        setWindow.removeClass('open');
        setcatch_edt03_3.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    */
    $('.age_pop01').click(function () {
        setterms_01.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.age_pop02').click(function () {
        setterms_02.addClass('open');
        $('html, body').css("overflow", "hidden");
    });
    $('.age_pop03').click(function () {
        setterms_03.addClass('open');
        $('html, body').css("overflow", "hidden");
    });

    $('#setting .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#pay_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#pay_cncl_tr .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    $('#catch_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
    });
    // Hide Window
    setWindow.find('>.bg').mousedown(function (event) {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "scroll");
        return false;
    });

    //검색 상단 고정 종목명,
    var search_height = $('.globalStock .sub_search .search_top').height();
    var recom_height = $('.globalStock .sub_recom .search_top').height();
    var chartarea_height = $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').height();
    $(window).scroll(function () {

        if ($(this).scrollTop() > 210) {
            $('.globalStock .sub_search .search_top .data_area').addClass('fix_data');
            $('.globalStock .sub_search .search_top').css('height', search_height);
        } else {
            $('.globalStock .sub_search .search_top .data_area').removeClass('fix_data');
            $('.globalStock .sub_search .search_top').css('height', 'auto');
        };

        if ($(this).scrollTop() > 210) {
            $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').addClass('fix_data');
            $('.globalStock .sub_recom .search_top').css('height', recom_height);
            $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').css({
                'padding-top': '58px'
            });
        } else {
            $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').removeClass('fix_data');
            $('.globalStock .sub_recom .search_top').css('height', 'auto');
            $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').css({
                'padding-top': '30px'
            });
        }
    });
    // 미국주식창 검색바 하단 이벤트 배너 있는 경우 처리
    if ($('.search_top .event_banner').length) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 210) {
                $('.globalStock .sub_search .search_top').css('height', 'auto');
            }
            if ($(this).scrollTop() > 210) {
                $('.globalStock .sub_recom .search_top').css('height', 'auto');
            }
        });
    }

    // 검색결과 박스 위치 조정
    if ($('.arrow_box').length) {
        var arrowLEft = $(".arrow_box.btm").offset();
        if (arrowLEft.left < 100) {
            $(".arrow_box.btm").addClass('left_22');
        } else if (arrowLEft.left > 600) {
            $(".arrow_box.btm").addClass('left_65');
        }
    }

    //select
    $(function () {
        var selectTarget = $('.selectbox select');

        // focus 가 되었을 때와 focus 를 잃었을 때
        selectTarget.on({
            'focus': function () {
                $(this).parent().addClass('focus');
            },
            'blur': function () {
                $(this).parent().removeClass('focus');
            }
        });

        selectTarget.change(function () {
            var select_name = $(this).children('option:selected').text();
            $(this).siblings('label').text(select_name);
            $(this).parent().removeClass('focus');
        });
    });

    // 캐치 리스트 갯수 체크
    var catch_length = $('.globalStock .catch_wrap .chart_catch').length;
    if (catch_length == 5) {
        $('.globalStock .catch_wrap .chart_catch_wrap').css('padding-bottom', '94px');
    } else {
        $('.globalStock .catch_wrap .chart_catch_wrap').css('padding-bottom', '0');
    }

    /* 목록 드래그 드롭 */
    $(function () {
        $("#sortable").sortable({
            handle: 'span',
        });
        $("#sortable").disableSelection();
    });

    //푸터 하단 고정 search_top searching
    var winHeight = $(window).height();
    var footerHeight = $('#footer').height() - 66;
    var bodyHeight = $('html, body').height() - footerHeight;
    // if (winHeight >= bodyHeight) {
    //     $('#footer').addClass('fix_footer');
    //     console.log("add fix");
    // }

    // 마이페이지 footer 고정
    if ($('.globalStock .sub_login .mapage_service').length) {
        if (winHeight >= bodyHeight) {
            $('#footer').addClass('fix_footer');
        }
    }

    // #footer padding-bottom 계산
    if (!$('.globalStock .gnb').length) {
        $('#footer').css('padding-bottom', '0');
    }
    if ($('.sub_payment .fix_btn').length) {
        $('#footer').css('padding-bottom', '68px');
    }

    //검색
    if ($('.sub_search').length) {
        // $('#footer').removeClass('fix_footer');
        $('.searchInput').focus().click();
    }
    $('.globalStock .sub_search .searching .searchArea .searchInput').on("click", function () {
        // $('#footer').removeClass('fix_footer');        
    });
    $('.globalStock .sub_search .searching .searchArea .searchInput').on("keydown", function () {
        // $('#footer').removeClass('fix_footer');
        $(this).addClass('keydown');
        $('.globalStock .sub_search .searching .searchArea .searchBtn').css('top', '15px');
        $('.globalStock .sub_search .searching .searchArea .sch_title').addClass('keydown');
        $('.globalStock .sub_search .searching .sch_autocomplete').addClass('focus_on').show();
    });
    $('.globalStock .sub_search .searching .searchArea .searchInput').on("focusout", function () {
        $('.globalStock .sub_search .searching .searchArea .sch_title').removeClass('keydown');
        $(this).removeClass('keydown');
        $('.globalStock .sub_search .searching .searchArea .searchBtn').css('top', '6px');
        $('.globalStock .sub_search .searching .sch_autocomplete').hide();
        $('.globalStock.wowtv .header_wowtv + .search_top.searching .searchArea .searchBtn').css('top', '11px');
    });
    $('.globalStock .main_searching .searchArea .searchInput').on("keydown", function () {
        // $('#footer').removeClass('fix_footer');
        $(this).addClass('keydown');
        // $('.globalStock .main_searching .searchArea .searchBtn').css('top', '15px');
        $('.globalStock .main_searching .searchArea .sch_title').addClass('keydown');
        $('.globalStock .main_searching .sch_autocomplete').addClass('focus_on').show();
    });

    //탭메뉴
    $(".tabsArea .tab_content").hide();
    $(".tabsArea .tab_content:first").show();

    $("ul.tabs li").click(function () {
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    //메인 탭메뉴 종목노트, 탐구생활, 주요뉴스
    $(".tabsArea_note .tab_content").hide();
    $(".tabsArea_note .tab_content:first").show();

    $(".tabsArea_note ul.tabs_note li").click(function () {
        $(".tabsArea_note ul.tabs_note li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea_note .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    //탭메뉴 더글로벌라운지 라이브
    $(".tabsArea_live .tab_content").hide();
    $(".tabsArea_live .tab_content:first").show();

    $(".tabsArea_live ul.tabs_live li").click(function () {
        $(".tabsArea_live ul.tabs_live li").removeClass("active");
        $(this).addClass("active");
        $(".tabsArea_live .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });

    // 뉴스탭 링크시 해시태그 #news_list
    if (window.location.hash == '#news_list') {
        $("ul.tabs li").removeClass("active");
        $("ul.tabs li:nth-child(2)").addClass("active");
        $(".tabsArea .tab_content").hide();
        $(".tabsArea #tab2").show();
    }

    $("ul.tabs li").click(function () {
        $(".sub_mid.eventPicks_area .ptfo_area.ptfo_tabview").removeClass('ptfo_tabview');
        if ($('.recom_tabs li.ptfo').hasClass("active")) {
            // $('.globalStock .sub_mid .btn_more, .globalStock .main_btm.banner_area .notice').hide();
            $('.globalStock .main_btm').css('margin-top', '0')
        } else {
            // $('.globalStock .sub_mid .btn_more, .globalStock .main_btm.banner_area .notice').show();
            $('.globalStock .main_btm').css('margin-top', '20px')
        }
    });
    //포트폴리오 제외종목 마이나스 보여주기    
    $('.globalStock .sub_mid .btn_more.show_table').on('click', function () {
        if ($(this).hasClass("show")) {
            $('.globalStock .sub_recom .sub_mid.eventPicks_area .ptfo_area .tabsArea .tab_container .tab_content .tableRanking.sum_table tr.hide_line').show();
            $(this).removeClass('show').addClass('hide');
            $('.globalStock .sub_mid .btn_more.show_table span').text("숨기기");

        } else {
            $('html, body').animate({
                scrollTop: 300
            }, 300);

            $('.globalStock .sub_recom .sub_mid.eventPicks_area .ptfo_area .tabsArea .tab_container .tab_content .tableRanking.sum_table tr.hide_line').slideUp();
            $(this).removeClass('hide').addClass('show');
            $('.globalStock .sub_mid .btn_more.show_table span').text("더보기");

        }
    });



    // 종목추천 - 포트폴리오 탭 노출
    if ($('.globalStock .sub_recom .sub_mid.eventPicks_area .ptfo_area').hasClass('ptfo_tabview') == 1) {
        $('.globalStock .main_btm.banner_area .notice').hide();
        $('.globalStock .main_btm').css('margin-top', '0')
    } else {
        $('.globalStock .main_btm.banner_area .notice').show();
        // $('.globalStock .main_btm').css('margin-top','20px')
    }
    $('.ptfo_area.ptfo_tabview ul.tabs li.new_recom').removeClass("active");
    $('.ptfo_area.ptfo_tabview ul.tabs li.ptfo').addClass("active");
    $('.ptfo_area.ptfo_tabview .tabsArea .tab_container .tab_content').show();
    $('.ptfo_area.ptfo_tabview .tabsArea .tab_container .tab_content:first').hide();

    $(".tableetabs_wrap .tabletabs_content").hide();
    $(".tableetabs_wrap .tabletabs_content:first").show();
    $('.globalStock .tabs_menu span:nth-child(1)').on('click', function () {
        $(this).parent('div').children('span').removeClass("active");
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tableetabs_wrap .tabletabs_content").hide();
        $('.tabletabs_content.tabs_01').fadeIn();
    });

    $('.globalStock .tabs_menu span:nth-child(2)').on('click', function () {
        $(this).parent('div').children('span').removeClass("active");
        $("ul.tabs li").removeClass("active");
        $(this).addClass("active");
        $(".tableetabs_wrap .tabletabs_content").hide();
        $('.tabletabs_content.tabs_02').fadeIn();
    });

    //전종목 투자매력도
    $('.globalStock .sub_attract .sub_mid.attract_sub .attract_table .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_attract .sub_mid.attract_sub .guide_box').show();
    });

    //종목검색 상단
    $('.globalStock .sub_search .sub_mid.tabs_area .chart_area.diagnosis .chartData .charm .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.tabs_area .chart_area.diagnosis .chartData .charm .guide_box').show();
    });
    $('.globalStock .sub_search .sub_mid.tabs_area .evaluation_data .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.tabs_area .evaluation_data .guide_box').show();
    });
    $('.globalStock .sub_search .sub_mid.outline_box .box .attention_box .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.outline_box .box .attention_box .guide_box').show();
    });
    $('.globalStock .sub_search .sub_mid.tabs_area .chart_area.diagnosis .data_attainment .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.tabs_area .chart_area.diagnosis .data_attainment .guide_box').show();
    });


    //가이드 툴팁
    $('.globalStock .sub_search .sub_mid .investCharm_area .title_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .guide_wrap .guide_box').show();
    });
    //가이드 툴팁 clse
    $('.globalStock .guide_box .clse').on("click", function () {
        $('.guide_layer').css({ 'z-index': -1 });
        $('.globalStock .guide_wrap .guide_box').hide();
    });
    //투자매력 툴팁
    $('.globalStock .sub_search .sub_mid.outline_box .box .title .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.outline_box .box .guide_box').show();
    });
    //투자매력 툴팁 clse
    $('.globalStock .guide_box .clse').on("click", function () {
        $('.guide_layer').css({ 'z-index': -1 });
        $('.globalStock .sub_search .sub_mid.outline_box .box .guide_box').hide();
    });
    //승부주 툴팁
    $('.globalStock .sub_game .gamePicks_area .game_list .list .game_data li.th .txt_guide').on("click", function () {
        console.log("test");
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_game .gamePicks_area .guide_box').show();
    });
    //승부주 툴팁 clse
    $('.globalStock .guide_box .clse').on("click", function () {
        $('.guide_layer').css({ 'z-index': -1 });
        $('.globalStock .sub_game .gamePicks_area .guide_box').hide();
    });
    //진단 - 인기종목탭 툴팁
    $('.globalStock.wowtv .sub_search .latest_results .tabsArea table.tableRanking .score .txt_guide').on("click", function () {
        console.log("test");
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock.wowtv .sub_search .latest_results .tabsArea table.tableRanking .score .guide_box').show();
    });
    //진단 - 인기종목탭 툴팁 clse
    $('.globalStock .guide_box .clse').on("click", function () {
        $('.guide_layer').css({ 'z-index': -1 });
        $('.globalStock.wowtv .sub_search .latest_results .tabsArea table.tableRanking .score .guide_box').hide();
    });

    //투자지표 툴팁        
    // $('.globalStock .sub_search .sub_mid .search_financials_area .tableRanking .th_guide').on("click", function () {        
    //     $('.guide_box').hide();
    //     var posY = $(this).offset().top;        
    //     var thisIndex = $(this).parent().index();        
    //     $('.th_guide_hide .guide_box:eq(' + thisIndex + ')').fadeIn().css('top',posY + 15);
    // }); 
    //기업개요 툴팁    
    $('.globalStock .sub_search .sub_mid .title_guide').on("click", function () {
        $(this).next('.guide_box').show().addClass('hide');
    });
    $('.globalStock .sub_search .sub_mid .tableRanking .th_guide.txt01').on("click", function () {
        $('.guide_box').hide();
        var posY = $(this).position().top;
        var thisIndex = $(this).parent().index();
        $('.th_guide_hide.txt01 .guide_box:eq(' + thisIndex + ')').fadeIn().css('top', posY + 15);
    });
    $('.globalStock .sub_search .sub_mid .tableRanking .th_guide.txt02').on("click", function () {
        $('.guide_box').hide();
        var posY = $(this).position().top;
        var thisIndex = $(this).parent().index();
        $('.th_guide_hide.txt02 .guide_box:eq(' + thisIndex + ')').fadeIn().css('top', posY + 15);
    });
    $('.guide_layer, .guide_box').on("click", function () {
        $('.guide_layer').css({
            'z-index': -1,
        });
        $('.guide_box').hide();
    });
    $('html, body').click(function (e) {
        var etarget = $(e.target);
        if (!etarget.is('.th_guide, .th_guide span, .title_guide, .title_guide, .title_guide img, .txt_guide img, .highcharts-root, path')) {
            $('.guide_box').hide();            //툴팁숨김            
            $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .chart_star').hide().css('height', '0'); // 투자매력도 별점레이어 숨김
        } else {
            //
        }
    });

    // 박스 펼치기 
    $(".globalStock .sub_search .sub_mid .investCharm_area .summary").after().on("click", function () {
        // div 사이즈는 big, small        
        if ($(this).hasClass("big")) {
            $(this).children('div').animate({
                height: '80px'
            }, 300);
            $(this).removeClass('big').addClass('small');
        } else {
            $(this).children('div').animate({
                height: '100%'
            }, 300);
            $(this).removeClass('small').addClass('big');
        }
    });


    $(".globalStock .sub_search .sub_mid.outline_investCharm .summary").after().on("click", function () {
        // div 사이즈는 big, small        
        if ($(this).hasClass("big")) {
            $(this).children('div').animate({
                height: '80px'
            }, 300);
            $(this).removeClass('big').addClass('small');
            $('.globalStock .sub_search .sub_mid.outline_investCharm .summary .box_fold span').text("펼치기");

        } else {
            $(this).children('div').animate({
                height: '100%'
            }, 300);
            $(this).removeClass('small').addClass('big');
            $('.globalStock .sub_search .sub_mid.outline_investCharm .summary .box_fold span').text("접기");
        }
    });


    $(".globalStock .sub_search .sub_mid .investCharm_area .summary_guide").after().on("click", function () {
        // div 사이즈는 big, small        
        if ($(this).hasClass("big")) {
            $(this).children('p').animate({
                height: '75px'
            }, 300);
            $(this).removeClass('big').addClass('small');
            $('.globalStock .sub_search .sub_mid .investCharm_area .summary_guide .box_fold span').text("펼치기");

        } else {
            $(this).children('p').animate({
                height: '100%'
            }, 300);
            $(this).removeClass('small').addClass('big');
            $('.globalStock .sub_search .sub_mid .investCharm_area .summary_guide .box_fold span').text("접기");
        }
    });

    // //관심종목 수정 버튼
    // $(window).scroll(function () {        
    //     if ($('.globalStock .sub_search .att_wrap .btn_list.fix_btn').scrollTop() < 80) {              
    //         console.log("11");
    //         $('.globalStock .sub_search .att_wrap .btn_list.fix_btn').css('position','fixed')
    //     } else if ($('.globalStock .sub_search .att_wrap .btn_list.fix_btn').scrollTop() < 80) {    
    //         $('.globalStock .sub_search .att_wrap .btn_list.fix_btn').css('position','relative')
    //     }
    // }); 

    //경쟁사 투자매력도
    $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .containercompet1').on("click", function () {
        $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .chart_star').hide().css('height', '0');
        $('.globalStock .sub_search .sub_mid.tabs_area .compet_chart .chart_star .more ').hide();
        $(this).parent().children(".chart_star").show();
        $(this).parent().children(".chart_star").css('height', '179').animate({
            'height': 179,
        }, 'fast', function () {
            $(this).parent().children().children(".more").show();
        });
    });

    //swiper
    //메인 상단
    var swiper = new Swiper('.attentionSwiper', {
        // autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //메인 주식에 미치다
    var swiper = new Swiper('.mijumiSwiper', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        loopAdditionalSlides: 1,
        spaceBetween: 10,
    });
    var swiper = new Swiper('.event_anaySwiper', {
        slidesPerView: 1.4,
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 10,
        centeredSlides: true,
        loop: true,
        loopFillGroupWithBlank: true,
    });
    //메인 승부주
    var swiper = new Swiper('.maingameSwiper', {
        slidesPerView: "auto",
        spaceBetween: 8,
    });
    var swiper = new Swiper('.catchSwiper, .catchSwiper2', {
        slidesPerView: 2.2,
        spaceBetween: 0,
        freeMode: true,
    });
    //메인 상단 모닝브리핑
    var swiper = new Swiper('.mainbriefingSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        loop: true,
    });
    //메인 하단 레시피
    var swiper = new Swiper('.mainrecipeSwiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
    });
    //미국주식창 메인 이벤트 배너 3개 롤링
    var swiper = new Swiper('.event_bannerSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        loop: true,
    });

    //서브 종목 추천
    var swiper = new Swiper('.recomSwiper', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서브 검색 - 종목진단 - 투자매력
    var swiper = new Swiper('.swiper_competChar', {
        slidesPerView: 2,
        slidesPerGroup: 1,
        loopAdditionalSlides: 1,
        spaceBetween: 0,
        centeredSlides: true,
        loop: false,
        loopFillGroupWithBlank: false,
    });
    //서브 발굴 - 미국주식 탐구생활 
    var swiper = new Swiper('.swiper-research', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서브 발굴 - 뉴스
    var swiper = new Swiper('.newsSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 10,
    });
    //서비스소개
    var swiper = new Swiper('.swiper_service', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });
    //서브 발굴 - 승부주 
    var swiper = new Swiper('.gameSwiper', {
        setWrapperSize: true,
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
    // 최근 배당락일
    var swiper = new Swiper('.lately_swiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    /************************/
    /****  add active  *****/
    /************************/
    //gnb    
    $('.globalStock .gnb li').on("click", function () {
        $('.globalStock .gnb li').removeClass("active");
        $(this).addClass("active");
    });
    //메인 투자레시피
    $('.globalStock .main_mid.event_recipe .recipe_list li').on("click", function () {
        $('.globalStock .main_mid.event_recipe .recipe_list li').removeClass("active");
        $(this).addClass("active");
    });
    //결제
    $('.globalStock .sub_payment .serviceStep .step_box').on("click", function () {
        $('.globalStock .sub_payment .serviceStep .step_box').removeClass("active");
        $(this).addClass("active");
    });
    $('.globalStock .sub_login .agree_area .agree_from .label').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.globalStock .sub_payment.sub_freeguide .agree_area .agree_from .label').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.globalStock .sub_payment .payment_note .note_chk .txt').on("click", function () {
        $('.globalStock .sub_payment .payment_note .note_chk .txt').toggleClass("active");
    });
    $('.globalStock .sub_payment .card_info span.bns_num').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    $('.globalStock .sub_payment .payment_chk .txt').on("click", function () {
        $('.globalStock .sub_payment .payment_chk .txt').toggleClass("active");
    });
    $('.globalStock .sub_payment .payment_note .top .agree').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
            $('.globalStock .sub_payment .agree_chk .txt').removeClass('active');
        } else {
            $(this).addClass('active');
            $('.globalStock .sub_payment .agree_chk .txt').addClass('active');
        }
    });
    $('.globalStock .sub_payment .agree_chk .txt').on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });
    // 내정보 - 메뉴 비활성
    $('.globalStock .sub_menu .sub_top .menu_list li').on("click", function () {
        if ($(this).hasClass("inactive")) {
            $(this).removeClass('inactive');
        } else {
            $(this).addClass('inactive');
        }
    });

    //결제취소
    $('.globalStock .pay_edt .form_table .label_chk').on("click", function () {
        $(this).toggleClass("active");
    });
    //tabs
    $('.tab_area .tbas_lb li a').on("click", function () {
        if (text.indexOf("_blank") != -1) {
            console.log("있음");
        } else {
            console.log("없음");
            $('.tab_area .tbas_lb li a').removeClass("active");
            $(this).addClass("active");
        }

    });
    //전종목 투자매력도 Popup
    $('.globalStock .setting_pop .sort li').on("click", function () {
        $('.globalStock .setting_pop .sort li').removeClass("active");
        $(this).addClass("active");
    });
    $('.globalStock .md-modal .sort li').on("click", function () {
        $('.globalStock .md-modal .sort li').removeClass("active");
        $(this).addClass("active");
    });
    $('.globalStock .sub_research .sub_mid.research_board .set span').on("click", function () {
        $('.globalStock .sub_research .sub_mid.research_board .set span').removeClass("active");
        $(this).addClass("active");
    });

    /* 개발처리
        //관심종목 찾아보기
        $('.globalStock .catch_edt #catch_cncl .catch_from .label').on("click", function () {
            if ($(this).hasClass("active")) {                        
                $(this).removeClass('active');                  
            } else {                                    
                $(this).addClass('active');              
            }        
        });
    */
    //faq
    var article = $('.faq01 .faq .article');
    article.addClass('hide');
    article.find('.a').hide();
    var article2 = $('.faq02 .faq .article');
    article2.addClass('hide');
    article2.find('.a').hide();
    var article3 = $('.faq03 .faq .article');
    article3.addClass('hide');
    article3.find('.a').hide();
    var article4 = $('.faq04 .faq .article');
    article4.addClass('hide');
    article4.find('.a').hide();
    $('.faq01 .faq').find('.article:first .a').show();
    $('.faq01 .faq').find('.article:first').addClass('show').removeClass('hide');


    $('.faq01 .faq .article .trigger').click(function () {
        var myArticle = $(this).parents('.article:first');
        if (myArticle.hasClass('hide')) {
            article.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            article.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else {
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
    });

    $('.faq02 .faq .article .trigger').click(function () {
        var myArticle = $(this).parents('.article:first');
        if (myArticle.hasClass('hide')) {
            article2.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            article2.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else {
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
    });

    $('.faq03 .faq .article .trigger').click(function () {
        var myArticle = $(this).parents('.article:first');
        if (myArticle.hasClass('hide')) {
            article3.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            article3.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else {
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
    });

    $('.faq04 .faq .article .trigger').click(function () {
        var myArticle = $(this).parents('.article:first');
        if (myArticle.hasClass('hide')) {
            article4.addClass('hide').removeClass('show'); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            article4.find('.a').slideUp(100); // 아코디언 효과를 원치 않으면 이 라인을 지우세요
            myArticle.removeClass('hide').addClass('show');
            myArticle.find('.a').slideDown(100);
        } else {
            myArticle.removeClass('show').addClass('hide');
            myArticle.find('.a').slideUp(100);
        }
    });

    $('.attract_sub .btn_schSet').on("click", function () {
        $('html, body').css("overflow", "hidden");
    });
    $('.pop_header .close, .md-overlay').on("click", function () {
        $('.globalStock .md-modal').removeClass('md-show');
        $('html, body').css("overflow", "scroll");
    });

    // 원스톱 종목진단 div 높이 조절    
    var heightArray = $(".globalStock .sub_search .latest_results .tabsArea .onestep_chart .dgtic_results > div").map(function () {
        return $(this).height();
    }).get();
    var maxHeight = Math.max.apply(Math, heightArray);
    $(".globalStock .sub_search .latest_results .tabsArea .onestep_chart .dgtic_results > div").height(maxHeight);

    // 스크롤시 tab_scr bg 숨김
    var windowWidth = $('html, body').width();
    $('.globalStock .main_mid.event_recipe .tabsArea .tab_scr').css('width', windowWidth);
    $('.globalStock .main_mid.event_recipe .tabsArea > span').addClass('change');

    $('.tabsArea .tab_scr').on("touchmove", function (e) {
        $('.globalStock .main_mid.event_recipe .tabsArea > span').hide();
    });
    $('.tabsArea .tab_scr').on("touchend", function (e) {
        $('.globalStock .main_mid.event_recipe .tabsArea > span').show();
    });

    (function (window) {

        'use strict';

        // class helper functions from bonzo https://github.com/ded/bonzo

        function classReg(className) {
            return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
        }

        // classList support for class management
        // altho to be fair, the api sucks because it won't accept multiple classes at once
        var hasClass, addClass, removeClass;

        if ('classList' in document.documentElement) {
            hasClass = function (elem, c) {
                return elem.classList.contains(c);
            };
            addClass = function (elem, c) {
                elem.classList.add(c);
            };
            removeClass = function (elem, c) {
                elem.classList.remove(c);
            };
        }
        else {
            hasClass = function (elem, c) {
                return classReg(c).test(elem.className);
            };
            addClass = function (elem, c) {
                if (!hasClass(elem, c)) {
                    elem.className = elem.className + ' ' + c;
                }
            };
            removeClass = function (elem, c) {
                elem.className = elem.className.replace(classReg(c), ' ');
            };
        }

        function toggleClass(elem, c) {
            var fn = hasClass(elem, c) ? removeClass : addClass;
            fn(elem, c);
        }

        var classie = {
            // full names
            hasClass: hasClass,
            addClass: addClass,
            removeClass: removeClass,
            toggleClass: toggleClass,
            // short names
            has: hasClass,
            add: addClass,
            remove: removeClass,
            toggle: toggleClass
        };

        // transport
        if (typeof define === 'function' && define.amd) {
            // AMD
            define(classie);
        } else {
            // browser global
            window.classie = classie;
        }

    })(window);

    var ModalEffects = (function () {
        function init() {
            var overlay = document.querySelector('.md-overlay');
            [].slice.call(document.querySelectorAll('.md-trigger')).forEach(function (el, i) {
                var modal = document.querySelector('#' + el.getAttribute('data-modal'));
                el.addEventListener('click', function (ev) {
                    classie.add(modal, 'md-show');
                });
            });
        }
        init();
    })();

    if ($('#modal-3').length) {
        $('.globalStock .sub_research .sub_mid.research_board .lst_type, .globalStock .sub_mid .tab_container .tab_content, .globalStock .sub_briefing .lst_type, .globalStock .sub_research .sub_mid.research_board .lst_type').on('click', '.md-trigger', function () {
            $('.globalStock .first_month_3300#modal-3').addClass('md-show');
        });
    };

    //재무제표 좌측 고정 테이블


    // 키움초이스스탁 스크립트
    if ($('.schfix_inc').length) {
        // 상단 검색 GNB 고정
        var jbOffset = $('.globalStock .schfix_inc .searching').offset();
        $(window).scroll(function () {
            if ($(document).scrollTop() > jbOffset.top) {
                $('.globalStock.kiwoom .schfix_inc').addClass('fix_sch');
                $('.globalStock.wowtv .schfix_inc .search_top .event_banner').slideUp();
            }
            else {
                $('.globalStock.kiwoom .schfix_inc').removeClass('fix_sch');
                $('.globalStock.wowtv .schfix_inc .search_top .event_banner').slideDown();
            }
        });

        // 상단 검색 GNB 고정
        // var jbOffset = $('.globalStock .schfix_inc .searching').offset();
        $(window).scroll(function () {
            if ($(document).scrollTop() > jbOffset.top) {
                $('.globalStock.wowtv .schfix_inc').addClass('fix_sch');
            }
            else {
                $('.globalStock.wowtv .schfix_inc').removeClass('fix_sch');
            }
        });
    }
    //검색    
    $('.globalStock .schfix_inc .searching .searchArea .searchInput').on("keydown", function () {
        $(this).addClass('keydown');
        $('.globalStock .schfix_inc .searching .searchArea .searchBtn').css('top', '15px');
        $('.globalStock .schfix_inc .searching .searchArea .sch_title').addClass('keydown');
        $('.globalStock .schfix_inc .searching .sch_autocomplete').addClass('focus_on').show();
        $('.globalStock.kiwoom .schfix_inc .top_btn').hide();
        $('.globalStock.kiwoom .schfix_inc .searching .top_btn + .searchArea').css('width', 'calc(100% - 40px)');
        $('.globalStock.wowtv .schfix_inc .searching .searchArea .searchBtn').css('top', '11px');
    });
    $('.globalStock .schfix_inc .searching .searchArea .searchInput').on("focusout", function () {
        $('.globalStock .schfix_inc .searching .searchArea .sch_title').removeClass('keydown');
        $(this).removeClass('keydown');
        $('.globalStock .schfix_inc .searching .searchArea .searchBtn').css('top', '6px');
        $('.globalStock .schfix_inc .searching .sch_autocomplete').hide();
        $('.globalStock.kiwoom .schfix_inc .top_btn').show();
        $('.globalStock.kiwoom .schfix_inc .searching .searchArea').css('width', '100%');
        $('.globalStock.kiwoom .schfix_inc .searching .top_btn + .searchArea').css('width', 'calc(100% - 70px)');
        $('.globalStock.wowtv .header_wowtv + .search_top.searching .searchArea .searchBtn').css('top', '11px');

    });
    // 키움 따라다니는 서비스신청 버튼
    // #footer padding-bottom 계산
    if ($('.globalStock.kiwoom .cho_applybtn').length) {
        $('.globalStock.kiwoom #footer').css('padding-bottom', '50px');
        $('.globalStock.kiwoom .sub_service .alliance_wrap .f_nightalarm').css('margin-bottom', '67px')
    }
    // 알람 수신-미수신
    $(".globalStock.wowtv .sub_alarm .alarm_from .label label").on("click", function () {
        var labelTxT = $('.globalStock.wowtv .sub_alarm .mapage_form .alarm_from .label .label_chk');
        setTimeout(function () {
            if (labelTxT.hasClass("rcpt")) {
                labelTxT.removeClass("rcpt").text("미수신")
            } else {
                labelTxT.addClass("rcpt").text("수신")
            }
        }, 150);
    });

    // 주문하기 버튼            
    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function (event) {
        didScroll = true;
    });
    setInterval(function () { if (didScroll) { hasScrolled(); didScroll = false; } }, 0);
    function hasScrolled() {
        clearTimeout($.data(this, 'scrollTimer'));
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) return; if (st > lastScrollTop && st > navbarHeight) {
            //스크롤  내릴때 
            $('.globalStock .purchase_area').css({
                'padding': '0 10px',
                'bottom': '30px'
            }, 300);
            $('.globalStock.wowtv .purchase_area').css({
                'bottom': '80px'
            }, 300);
            $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').hide(150);

            if ($('.gnb_hide').length) {
                // 본문에서 GNB 메뉴 숨김
                $('.globalStock .gnb').slideUp(150);
                $('#footer .notice .foot_info').css('padding-bottom', '0');
            }
        } else {
            //스크롤 올릴때                         
            $('.globalStock .purchase_area').css({
                'padding': '0 17px',
                'bottom': '80px'
            }, 300);
            $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').show(150);

            $('.globalStock .gnb').show();
        } lastScrollTop = st;
    }


    $('.btn_purchase').on('click', function () {
        $('.purchase_wrapper').addClass('open');
        $('.purchase_wrapper .box').animate({
            'opacity': 1,
            'height': 272
        });
        // return false;
    });
    $('.btn-close, .purchase_wrapper .bg_gray').on('click', function () {
        $('.purchase_wrapper').removeClass('open');
        $('.purchase_wrapper .box').animate({
            'opacity': 0,
            'height': 0
        });
        // return false;
    });
    $('.btn_close, .free_2weeks .bg_gray').on('click', function () {
        $('.free_2weeks').removeClass('open');
        $('.free_2weeks .box').animate({
            'opacity': 0,
            'height': 0
        });
        // return false;
    });

    // 캐시 지우기    
    $('.noCache').attr('src', function () {
        return $(this).attr('src') + "?v=" + Math.random()
    });
    // 저용량 이미지 로드 후 src 반영    
    function lodSmallSrc() {        
        $('img.s_img').each(function () {
            var source = $(this).attr("data-src");        
            $(this).attr("src", source + "?v=" + Math.random()).removeAttr("data-src");            
        });        
    }
    lodSmallSrc();
    
    
    
});