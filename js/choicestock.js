$(document).ready(function () {
    // scrollsignalpop() 함수가 너무 자주 호출되는 것을 방지하기 위한 debouncing 함수 정의
    function debounce(func, wait) {
        let timeout;
        return function(...args) {
            const context = this;
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(context, args), wait);
        };
    }

    // var mouse_touch = ".globalStock a, .globalStock .tabs li, .globalStock .set span, .globalStock .tabs_menu span, .globalStock i.attention, .globalStock .prm_div .box, .globalStock .sub_search .sub_mid.research_board .lst_type2, .globalStock .sub_research .popularity .lst_type2, .globalStock #footer .certification ul li, .globalStock .main_mid.note_area .lst_type2, .globalStock .sub_research .sub_mid.research_board .lst_type2, .globalStock .sub_briefing .popularity .lst_type2, .globalStock .searchArea .searchInput, .globalStock .main_mid.event_recipe .recipe_tabs li span, .globalStock .sub_login .mapage_area .mapage_form .form_table td .mod_btn, .globalStock .sub_login .mapage_area .mapage_form .form_table .phonePin_form .pinInput, .globalStock .sub_login .mapage_area .mapage_form .form_table .phonePin_form .pinInput_out, .globalStock .sub_payment .serviceStep .step_box, .globalStock #header .his_back img, .globalStock .main_top.recommend_area .recomlist_area .area, .globalStock .main_mid.game_area .list_area .area, .globalStock .banner_prm, .globalStock .main_mid.attention_area .one_step .more, .globalStock #header .headerTop .hm .btn_login, .globalStock #header .headerTop .hm .go_briefing"    
    // $(mouse_touch).on("mousedown touchstart", function () {
    //     $(this).addClass("mouse_touch");
    // }).on("mousemove touchmove mouseup touchend", function () {
    //     $(this).removeClass("mouse_touch");
    // });

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
    // $('.age_pop01').click(function () {
    //     setterms_01.addClass('open');
    //     $('html, body').css("overflow", "hidden");
    // });
    // $('.age_pop02').click(function () {
    //     setterms_02.addClass('open');
    //     $('html, body').css("overflow", "hidden");
    // });
    // $('.age_pop03').click(function () {
    //     setterms_03.addClass('open');
    //     $('html, body').css("overflow", "hidden");
    // });

    $('#setting .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "auto");
    });
    $('#pay_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "auto");
    });
    $('#pay_cncl_tr .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "auto");
    });
    $('#catch_cncl .close').click(function () {
        setWindow.removeClass('open');
        $('html, body').css("overflow", "auto");
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
        } else {
            $('.globalStock .sub_recom .sub_top.view .chart_area .chartData').removeClass('fix_data');
            $('.globalStock .sub_recom .search_top').css('height', 'auto');
        }
    });

    // 종목검색 상단 고정 종목명,
    if ($('.company_nm').length) {
        function makeSticky() {        
            var sticky = $('.company_nm'), // 고정시키고 싶은 요소의 클래스 이름
                stickyOffset = sticky.offset().top; // 요소의 초기 상단 위치

            $(window).scroll(function () {            
                var scroll = $(window).scrollTop();

                // 스크롤 위치가 요소의 상단 위치보다 크면 고정 클래스 추가
                if (scroll >= stickyOffset) {                
                    sticky.addClass('fix_data');
                } else {                
                    sticky.removeClass('fix_data');
                }
            });
        }    
        makeSticky(); // 종목검색 상단 고정 종목명 함수 실행
    }    

    // 종목검색 개요탭 등 상단 고정 함수
    function customizeAndAppendList() {        
        var copy_recom = $('.globalStock #wrap #container .recom_company .list').clone();        
        copy_recom.addClass('recom');            
        copy_recom.find('.ticker').remove(); // 'ticker' 클래스를 가진 요소 제거
        copy_recom.find('.stock_index').remove(); // 'stock_index' 클래스를 가진 요소 제거
        copy_recom.find('.per span').first().remove(); // 첫 번째 'increase' 클래스를 가진 요소 제거
        copy_recom.find('.per .day').remove(); // 'day' 클래스를 가진 요소 제거
        $('body').append(copy_recom);
    }
    customizeAndAppendList();  // 종목검색 개요탭 등 상단 고정 종목명 함수 실행

    
    if ($('#header').length) {
        // 스크롤시 헤더 상단 고정 스크립트    
        var headerHeight = $('#header').innerHeight();
        var headerOffset = $('#header .headerTop').offset().top;    
        window.addEventListener('scroll', function () {
            var header = document.getElementById('header');
            if (window.scrollY >= 160) {            
                $('.list.recom').addClass('fix_data'); 
            } else {            
                $('.list.recom').removeClass('fix_data'); 
            }
        });

        window.addEventListener('scroll', function () {
            var header = $('#header');        
            if (window.scrollY > headerOffset) {            
                header.addClass('fix_header');            
                $('#container').css('padding-top', headerHeight);
            } else {
                header.removeClass('fix_header');          
                $('#container').css('padding-top','0');  
            }
        });
    };
    

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

    /* GNB 기능 */
    //add active
    $('.globalStock .gnb li').on("click", function () {
        $('.globalStock .gnb li').removeClass("active");
        $(this).addClass("active");
    });
    // #footer padding-bottom 계산    
    if ($('.gnb').length === 0) {
        $('#footer.chous_footer .notice').css('padding-bottom', '35px');
    }
    // 스크롤시 gnb 보이기, 숨기기
    var lastScrollTop = 0;
    var $gnb = $(".globalStock .gnb");

    $(window).scroll(function(event){
        var st = $(this).scrollTop();
        
        // 스크롤 내릴 때 gnb 숨기기
        if (st <= 100){
            //console.log("최상단");
            $gnb.show();            
        } else if (st > lastScrollTop) {
            $gnb.hide();
        } else {
            // 스크롤 올릴 때 gnb 보이기
            $gnb.show();
        }

        // 스크롤이 페이지 최하단에 도착하면 gnb 보이기
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            $gnb.show();
        }

        lastScrollTop = st;
    });


    
    if ($('.service_wrap').length === 1) {        
        $('#container').css('padding-top','0');
    }
   
    //검색    
    function initSearchInput(inputSelector, btnSelector, titleSelector, autocompleteSelector) {        
    
        $(inputSelector).on("keydown", function() {            
            $(this).addClass('keydown');
            $(titleSelector).addClass('keydown');
            $(autocompleteSelector).addClass('focus_on').show();
        });
    
        $(inputSelector).on("change", function() {
            const inputValue = $(this).val();
            const trimmedValue = inputValue.trim();            
            
            if (!trimmedValue || trimmedValue.length === 0) {                
                $(this).val('').removeClass('keydown');
                $(autocompleteSelector).removeClass('focus_on').hide();
            } else if (trimmedValue.length === 0) {
                // console.log("인풋 값이 비어있음:", inputSelector);
            }
            
        });
    
        $(inputSelector).on("focusout", function() {            
            $(titleSelector).removeClass('keydown');
            $(this).removeClass('keydown');
            $(btnSelector).css('top', '11px');
            $(autocompleteSelector).hide();
        });
    }

    if ($('.sub_search').length) {
        $('.searchInput').focus().click();
    }

    initSearchInput(
        '.globalStock .sub_search .searching .searchArea .searchInput',
        '.globalStock .sub_search .searching .searchArea .searchBtn',
        '.globalStock .sub_search .searching .searchArea .sch_title',
        '.globalStock .sub_search .searching .sch_autocomplete'
    );

    initSearchInput(
        '.globalStock .main_searching .searchArea .searchInput',
        '.globalStock .main_searching .searchArea .searchBtn',
        '.globalStock .main_searching .searchArea .sch_title',
        '.globalStock .main_searching .sch_autocomplete'
    );

    $(window).on('pageshow', function(event) {
        if (event.originalEvent.persisted) {            
            $('.globalStock .main_searching .searchArea .searchInput').val('').removeClass('keydown');
            $('.globalStock .main_searching .sch_autocomplete').removeClass('focus_on _show');
        }
    });

    //탭메뉴
    $(".tabsArea").each(function() {
        var $thisTabsArea = $(this);
        $thisTabsArea.find(".tab_content").hide();
        $thisTabsArea.find(".tab_content:first").show();
    
        $thisTabsArea.find("ul.tabs li").click(function() {
            var $thisTab = $(this);
            $thisTab.siblings().removeClass("active");
            $thisTab.addClass("active");
            $thisTabsArea.find(".tab_content").hide();
    
            var activeTab = $thisTab.attr("rel");
            $thisTabsArea.find("#" + activeTab).fadeIn();
        });
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
    // 발굴 종목노트, 레시피, 투자노트 탭 버튼 클릭 이벤트 핸들러
    $('.tab_span').click(function () {        
        // 선택한 탭 버튼에 'active' 클래스 추가
        $(this).addClass('active');
        
        // 다른 탭 버튼에서 'active' 클래스 제거
        $('.tab_span').not(this).removeClass('active');
        
        // 탭 내용 숨기기
        $('.tab').hide();
        
        // 선택한 탭 내용 보이기
        var tabId = $(this).attr('data-tab');
        $('#' + tabId).fadeIn();
    });
    $('.modal .pop_con .signal_filter span').click(function () {
        // 선택한 탭 버튼에 'active' 클래스 추가
        $(this).addClass('active');
        
        // 다른 탭 버튼에서 'active' 클래스 제거
        $('.modal .pop_con .signal_filter span').not(this).removeClass('active');
    });
    //포트폴리오 제외종목 마이나스 보여주기    
    $('.globalStock .sub_mid .btn_more.show_table').on('click', function () {
        if ($(this).hasClass("show")) {
            $('.globalStock .sub_recom .sub_mid.eventPicks_area .recom_chartList.hide_line').removeClass('hide_line').addClass('show_line');
            $(this).removeClass('show').addClass('hide');
            $('.globalStock .sub_mid .btn_more.show_table span').text("숨기기");

        } else {
            $('html, body').animate({
                scrollTop: 300
            }, 300);

            $('.globalStock .sub_recom .sub_mid.eventPicks_area .recom_chartList.show_line').addClass('hide_line');
            $(this).removeClass('hide').addClass('show');
            $('.globalStock .sub_mid .btn_more.show_table span').text("더보기");

        }
    });

    // 수익률, 최근편입, 편입제외 탭 스크립트
    if ($('.ptfo_area, .sub_recom.sub_recipe .recipe_area').length) {              
        function openTab(tabId) {
            // 모든 탭 숨기기
            var tabs = document.getElementsByClassName('tab');
            for (var i = 0; i < tabs.length; i++) {
                tabs[i].style.display = 'none';
            }

            // 선택한 탭 보이기
            document.getElementById(tabId).style.display = 'block';
        }

        // 초기에 첫 번째 탭을 열도록 설정
        openTab('tab1');

    }


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
    $('.globalStock .sub_search .sub_mid.adequateArea .listWrap .mid .charm_num .txt_guide').on("click", function () {
        $('.guide_layer').css({ 'z-index': 9997 });
        $('.globalStock .sub_search .sub_mid.adequateArea .listWrap .mid .charm_num .guide_box').show();
    });
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
        //console.log("test");
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
        //console.log("test");
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

    //메인 상단 관심종목
    if ($('.maingdowSwiper').length) {
        var attentionSwiper = new Swiper('.attentionSwiper', {
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: false,
            // },        
            speed: 300,
            spaceBetween: 15,
            loop: true,      
            pagination: {
                el: '.swiper-pagination',
            },  
        });
    }   

    //메인 다우선물,다우지수
    if ($('.maingdowSwiper').length) {
        var swiper = new Swiper('.maingdowSwiper', {                    
            loop: true,              
            spaceBetween: 15,
            slidesPerView: 4.5,
            slidesPerGroup: 1,
            loopAdditionalSlides: 1, // 슬라이드 복제를 위한 추가 슬라이드 수
            autoplay: {            
                delay: 0,
                disableOnInteraction: false,
            },            
            speed: 3000,
            grabCursor: true,
            mousewheelControl: true,
            keyboardControl: true,   
            // allowTouchMove: false,        
            
            breakpoints: {                
                359: {
                    slidesPerView: 1.5,
                },                
                360: {
                    slidesPerView: 2.3,                    
                },                
                425: {
                    slidesPerView: 2.3,                    
                },                
                680: {
                    slidesPerView: 2.3,                    
                },                
                1024: {
                    slidesPerView: 3.3,                    
                },                
                1440: {
                    slidesPerView: 4.3,                    
                }
            },            
        });
        
    }

    //메인 상단
    // 0 또는 1 중에서 랜덤하게 선택
    var randomStartSlide = Math.floor(Math.random() * 2);
    var slideCountbaner = document.querySelectorAll('.banner_event_swiper .swiper-slide').length;
    var banner_event_swiper = new Swiper('.banner_event_swiper', {
        slidesPerView: 1, // 한 번에 보이는 슬라이드 수를 1로 설정
        // 슬라이드가 두 개 이상일 때만 자동재생
        autoplay: slideCountbaner > 1 ? {
            delay: 3000,
            disableOnInteraction: false,
        } : false,
        loop: true,
        initialSlide: randomStartSlide // 랜덤하게 시작 슬라이드 설정
    });

    //메인 주식에 미치다
    if ($('.mijumiSwiper').length) {
        var mijumiSwiper = new Swiper('.mijumiSwiper', {
            slidesPerView: 2,
            slidesPerGroup: 2,
            loopAdditionalSlides: 1,
            spaceBetween: 10,
        });        
    }
    if ($('.event_anaySwiper').length) {
        var event_anaySwiper = new Swiper('.event_anaySwiper', {
            slidesPerView: 1.4,
            slidesPerGroup: 1,
            loopAdditionalSlides: 1,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true,
            loopFillGroupWithBlank: true,
        });
    }
    

    //메인 승부주
    if ($('.maingameSwiper').length) {
        var maingameSwiper = new Swiper('.maingameSwiper', {
            slidesPerView: "auto",
            spaceBetween: 8,
        });
    }
    

    var catchSwiper = new Swiper('.catchSwiper, .catchSwiper2', {
        slidesPerView: 2.2,
        spaceBetween: 0,
        freeMode: true,
    });

    //메인 상단 나스닥코스닥
    var mainnasdaqSwiper = new Swiper('.mainnasdaqSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        spaceBetween: 10,
        loop: true,
    });
    
    // 메인 상단 모닝브리핑
    if (document.querySelector('.mainbriefingSwiper')) {
        var mainbriefingSwiper = new Swiper('.swiper-container.mainbriefingSwiper', {
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            direction: 'vertical',
            loop: true,
            allowTouchMove: false, // 이 줄을 추가하여 터치 이동을 방지
        });
    }
    

    //메인 투자레시피 슬라이드
    function shuffleSlides(containerSelector) {
        const container = document.querySelector(containerSelector);
        if(container !== null) {
            const slides = Array.from(container.children);
            for (let i = slides.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                container.appendChild(slides[j]);
            }
        }
    }

    // 슬라이드 요소를 섞기
    shuffleSlides('.mainrecipeSwiper .swiper-wrapper');

    var mainrecipeSwiper = new Swiper('.mainrecipeSwiper', {
        slidesPerView: "auto",
        spaceBetween: 10,
    });


    //미국주식창 메인 이벤트 배너 3개 롤링
    var event_bannerSwiper = new Swiper('.event_bannerSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        spaceBetween: 30,
        loop: true,
    });

    //서브 종목 추천
    var recomSwiper = new Swiper('.recomSwiper', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    //서브 검색 - 종목진단 - 투자매력
    var swiper_competChar = new Swiper('.swiper_competChar', {
        slidesPerView: '3',                
        // 화면 너비에 따른 설정 조정
        breakpoints: {
            // 화면 너비가 640px 이하일 때
            640: {
            slidesPerView: 3,  // 슬라이드 1개 표시
            },
            // 화면 너비가 768px 이하일 때
            768: {
            slidesPerView: 6,  // 슬라이드 2개 표시            
            },
            // 화면 너비가 1024px 이하일 때
            1024: {
            slidesPerView: 8,  // 슬라이드 3개 표시            
            },            
        }
    });

    //서브 발굴 - 미국주식 탐구생활 
    var swiper_research = new Swiper('.swiper-research', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    //서브 발굴 - 뉴스
    var newsSwiper = new Swiper('.newsSwiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        loop: true,
        spaceBetween: 10,
    });

    //서비스소개
    var swiper_service = new Swiper('.swiper_service', {
        autoHeight: true, //enable auto height
        spaceBetween: 20,
        pagination: {
            el: '.swiper-pagination',
        },
    });

    //서브 발굴 - 승부주 
    var gameSwiper = new Swiper('.gameSwiper', {
        autoHeight: true, // 높이 자동 조정 활성화
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
    var lately_swiper = new Swiper('.lately_swiper', {
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        direction: 'vertical',
        loop: true,
    });

    // 종목검색 - 개요 보유 신호
    if ($('.upData_Swiper').length) {        
        var slideCount = document.querySelectorAll('.upData_Swiper .swiper-slide').length;
        var swiper = new Swiper(".upData_Swiper", {
            slidesPerView: 1, // 한 번에 보이는 슬라이드 수를 1로 설정
            // 슬라이드가 두 개 이상일 때만 자동재생
            autoplay: slideCount > 1 ? {
                delay: 4000,
                disableOnInteraction: false,
            } : false,
            direction: 'vertical',
            loop: true,
        });
    }   

    // 메인 하단 - 패밀리 사이트 링크 배너
    if ($('.bannerSwiper').length) {        
        var slideCount = document.querySelectorAll('.bannerSwiper .swiper-slide').length;
        var swiper = new Swiper(".bannerSwiper", {
            slidesPerView: 1, // 한 번에 보이는 슬라이드 수를 1로 설정
            loop: slideCount > 1, // 슬라이드가 2개 이상일 때만 loop 설정
            spaceBetween: 30,
            centeredSlides: true,
            // 슬라이드가 두 개 이상일 때만 자동재생
            autoplay: slideCount > 1 ? {
                delay: 3500,
                disableOnInteraction: false,
            } : false,
            pagination: slideCount > 1 ? { // 슬라이드가 두 개 이상일 때만 pagination 활성화
                el: ".swiper-pagination",
            } : false,
        });

        // 슬라이드가 1개일 때 pagination 요소를 숨김
        if (slideCount <= 1) {
            document.querySelector('.swiper-pagination').style.display = 'none';
        }
    }

    // 메인 하단, 관심 종목 상단 스와이프 배너
    if ($('.swipe_banner').length) {  
        var slideCount = document.querySelectorAll('.swipe_banner .swiper-slide').length;
        var swiper = new Swiper(".swipe_banner", {
            slidesPerView: 1, // 한 번에 보이는 슬라이드 수를 1로 설정
            spaceBetween: 16,
            // 슬라이드가 두 개 이상일 때만 자동재생
            loop: slideCount > 1, // 슬라이드가 2개 이상일 때만 loop 설정
            autoplay: slideCount > 1 ? {
                delay: 3000,
                disableOnInteraction: false,
            } : false,
            pagination: slideCount > 1 ? {
                el: ".swiper-pagination",
                type: "fraction",
            } : false,
        });
    };


    /************************/
    /****  add active  *****/
    /************************/    
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
    $('.globalStock .sub_login .agree_area .agree_from .label .label_chk').on("click", function () {
        if ($(this).closest('.label').hasClass("active")) {            
            $(this).closest('.label').removeClass('active');
        } else {            
            $(this).closest('.label').addClass('active');
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
            //console.log("있음");
        } else {
            //console.log("없음");
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
        // $('html, body').css("overflow", "scroll");
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
        $('.globalStock .sub_research .sub_mid.research_board .lst_type, .globalStock .sub_mid .tab_container .tab_content, .globalStock .sub_briefing .lst_type, .globalStock .sub_research .sub_mid.research_board .lst_type, .recipe_area').on('click', '.md-trigger', function () {
            $('.globalStock .first_month_3300#modal-3').addClass('md-show');
        });
    };

    //재무제표 좌측 고정 테이블


    // 키움초이스스탁 스크립트
    if ($('.schfix_inc').length) {
        // 상단 검색 GNB 고정
        var searchingElement = $('.globalStock .schfix_inc .searching');
        if (searchingElement.length) {
            var jbOffset = searchingElement.offset();
            $(window).scroll(function () {
                if ($(document).scrollTop() > jbOffset.top) {
                    $('.globalStock.kiwoom .schfix_inc').addClass('fix_sch');
                    $('.globalStock.wowtv .schfix_inc .search_top .event_banner').slideUp();
                } else {
                    $('.globalStock.kiwoom .schfix_inc').removeClass('fix_sch');
                    $('.globalStock.wowtv .schfix_inc .search_top .event_banner').slideDown();
                }
            });
    
            $(window).scroll(function () {
                if ($(document).scrollTop() > jbOffset.top) {
                    $('.globalStock.wowtv .schfix_inc').addClass('fix_sch');
                } else {
                    $('.globalStock.wowtv .schfix_inc').removeClass('fix_sch');
                }
            });
        } else {
            console.error("'.globalStock .schfix_inc .searching' 요소가 존재하지 않습니다.");
        }
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
        $('.globalStock .schfix_inc .searching .searchArea .searchBtn').css('top', '11px');
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

    // // 주문하기 버튼            
    // // Hide Header on on scroll down
    // var didScroll;
    // var lastScrollTop = 0;
    // var delta = 5;
    // var navbarHeight = $('header').outerHeight();

    // $(window).scroll(function (event) {
    //     didScroll = true;
    // });
    // setInterval(function () { if (didScroll) { hasScrolled(); didScroll = false; } }, 0);
    // function hasScrolled() {
    //     clearTimeout($.data(this, 'scrollTimer'));
    //     var st = $(this).scrollTop();
    //     if (Math.abs(lastScrollTop - st) <= delta) return; if (st > lastScrollTop && st > navbarHeight) {
    //         //스크롤  내릴때 
    //         $('.globalStock .purchase_area').css({
    //             'padding': '0 10px',
    //             'bottom': '30px'
    //         }, 300);
    //         $('.globalStock.wowtv .purchase_area').css({
    //             'bottom': '80px'
    //         }, 300);
    //         $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').hide(150);

    //         if ($('.gnb_hide').length) {
    //             // 본문에서 GNB 메뉴 숨김
    //             $('.globalStock .gnb').slideUp(150);
    //             $('#footer .notice .foot_info').css('padding-bottom', '0');
    //         }
    //     } else {
    //         //스크롤 올릴때                         
    //         $('.globalStock .purchase_area').css({
    //             'padding': '0 17px',
    //             'bottom': '80px'
    //         }, 300);
    //         $('.globalStock .purchase_area .btn_purchase span, .globalStock .purchase_area .btn_purchase i').show(150);

    //         $('.globalStock .gnb').show();
    //     } lastScrollTop = st;
    // }


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

    // 비로그인, 무료회원 서비스 
    setTimeout(function () {
        $('.premiumLock_cunt').addClass('on');
    }, 400);

    var hideTimer;

    $(window).on('scroll', function () {
        // 스크롤 동작 중인 경우
        $('.premiumLock_cunt').removeClass('on');

        // 스크롤 동작이 멈춘 경우
        clearTimeout(hideTimer);
        hideTimer = setTimeout(function () {
            $('.premiumLock_cunt').addClass('on');
        }, 400); // 250ms 동안 스크롤 동작이 없으면 보여줌
    });

    // 모달팝업 - 환불정책 자세히보기 팝업
    $('.refund_guide').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.refund_pop01').show().addClass('slideUp');
    });
    $('.age_pop01').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.agreePopBox.box_01').show().addClass('slideUp');
    });
    $('.age_pop02').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.agreePopBox.box_02').show().addClass('slideUp');
    });
    $('.age_pop03').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.agreePopBox.box_03').show().addClass('slideUp');
    });
    $('.age_pop04').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.agreePopBox.box_04').show().addClass('slideUp');
    });
    $('.v_signalStreng.globalStock .sub_payment span.card_overseas').on('click', function () {        
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.cardBox.card_overseas_01').css('display', 'flex');
    });
    // 미국주식창 사용안함 팝업
    $('.pop_secession').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.wow_secession').show().addClass('md-show slideUp');
    });
    // 미국주식창 서비스 회원탈퇴 팝업
    $('.btn_ssin').on('click', function () {
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.wow_secession2').show().addClass('md-show slideUp');
    });
    // 모달 팝업 누르면 바디스크롤 막기
    $('.v_signalStreng.globalStock .sub_payment span.card_overseas, .v_signalStreng.globalStock .sub_payment .payment_note .age_link, .v_signalStreng.globalStock .sub_payment .payment_guide .pay_guideTxt').on('click', function () {
        $('body').css('overflow', 'hidden');
    });
    // 모달팝업 - 닫기
    $('.modal .pop_header .clse, .blocker, .payment_cacl02 .btn.btn_save').on('click', function () {        
        $('body').css('overflow', '');                        
        $('.blocker').hide();
        $('.modal').hide().removeClass('slideUp');        
    });


    // 개요 리뉴얼에서만 쓰는 스크립트 230905
    // 툴팁
    $(".v_signalStreng.globalStock .txt_guide").click(function (e) {
        e.stopPropagation();
        $(this).siblings(".tooltip").toggle();
    });
    $(".v_signalStreng.globalStock .clse_tooltip").click(function () {
        $(".tooltip").hide();
    });
    $(document).click(function (e) {
        if (!$(e.target).closest('.tooltip').length) {
            $(".tooltip").hide();
        }
    });
    // 지수이동평균선(EMA) 모달 팝업
    $('.v_signalStreng.globalStock #wrap #container .mainBox.financials .chart_box .sum_title.ema_guide, .v_signalStreng.globalStock #wrap #container .mainBox.financials .chart_box .sum_title.ema_guide .signal_guide').on('click', function () {    
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('body').css('overflow', 'hidden');
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.ema_pop01').show().addClass('slideUp');
        }        
    });
    // 주가&EPS 모달 팝업
    $('.v_signalStreng.globalStock #wrap #container .mainBox.financials .chart_box .sum_title.EPS_guide, .v_signalStreng.globalStock #wrap #container .mainBox.financials .chart_box .sum_title.EPS_guide .signal_guid').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('body').css('overflow', 'hidden');
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.eps_pop01').show().addClass('slideUp');
        }        
    });
    // 매수신호 모달 팝업        
    $('.v_signalStreng.globalStock .mainBox.attr .adequateArea .listWrap .mid .latest_signal').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('body').css('overflow', 'hidden');
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.signal_pop01').show().addClass('slideUp');
        }        
    });
    // 미주은-스폐셜 할인 이벤트 결제 취소
    $('.v_signalStreng.globalStock .sub_login .mapage_service .service_table .system .latest_signal02').on('click', function () {        
        $('body').css('overflow', 'hidden');
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.payment_cacl02').show().addClass('slideUp');        
    });
    // 마켓스코어 공포 지수 툴팁
    $('.main_mid.tradeSignal_status .title .signal_guide, .globalStock .sub_recom.sub_recipe .sub_mid.recipe_view .tradeSignal_status .title, .globalStock .sub_recom.sub_recipe .sub_mid.recipe_view .tradeSignal_status .title .signal_guide').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.score_pop01').show().addClass('slideUp');
        }        
    });
    // 주가&EPS 모달 팝업
    $('.v_signalStreng.globalStock #wrap #container .btn_schRecipeSet').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('body').css('overflow', 'hidden');
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.setting_pop02').show().addClass('slideUp');
        }        
    });

    // 결제 이용약관 모달 팝업        
    $('.v_signalStreng.globalStock .refund_terms').on('click', function () {        
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.refundTerms_pop01').show().addClass('slideUp');
        }        
    });
    $('.v_signalStreng.globalStock .modal.cardBox .refund_terms').on('click', function () {        
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.blocker').show().addClass('clse_secondPop');
            $('.cardBox.card_overseas_01').hide();
            $('.refundTerms_pop01').show().addClass('slideUp secondPop');
        }        
    });
    $(document).on('click', '.secondPop.refundTerms_pop01 .pop_header .clse, .blocker.clse_secondPop', function () {                        
        $('.blocker').show().removeClass('clse_secondPop');
        $('.cardBox.card_overseas_01').show();        
    });    

    // 툴팁 - 지금살까?
    $('#container .mainBox.attr .adequateArea .listWrap .mid .charm_num .signal_guide').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.tooltip_pop01').show().addClass('slideUp');
        }        
    });
    // 툴팁 - 종목검색 경쟁사
    $('.globalStock .sub_search .sub_mid.competitors_table .title_guide').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.tooltip_pop02').show().addClass('slideUp');
        }        
    });
    // 툴팁 - 종목검색 경쟁사
    $('.globalStock .sub_attract .sub_mid.attract_sub .attract_table .txt_guide').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.tooltip_pop03').show().addClass('slideUp');
        }        
    });
    // 종목검색 - 진단
    $('.globalStock .sub_search .sub_mid.tabs_area .chart_area.diagnosis .chartData .charm .txt_guide').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.tooltip_pop04').show().addClass('slideUp');
        }        
    });

    // 툴팁 - 탑픽 프리미엄 팝업
    $('.service_wrap.mijooeun_toppick .box.toppick_list .tooltip_premium01').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.premium_login_guide').show().addClass('slideUp');
        }        
    });
    // 툴팁 - 2025년 새해 이벤트 프리미엄 팝업
    $('.service_wrap.event2025 .logo_list.tooltip_premium01').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.premium_login_guide').show().addClass('slideUp');
        }        
    });
    

    // 매매신호 플로팅 배너 열기, 닫기 스크립트
    // 스크롤 이벤트를 감지하여 처리    
    function scrollsignalpop() {        
        $('.v_signalStreng.globalStock .signalpop .box').slideDown(1200);
    }
    // 종목검색 탭 상태 체크 및 함수 실행
    function checkTabsAndApplyFunction() {
        // 모든 탭 요소들을 가져옴
        const tabs = document.querySelectorAll('.tabs_5 li');

        // 각 탭에 대해 반복
        tabs.forEach(tab => {
            if (tab.classList.contains('active')) {
                // data-* 속성을 기반으로 탭 식별
                const tabId = tab.querySelector('a').dataset.tab;
        
                switch (tabId) {
                    case 'overview':
                        onOverviewActive();
                        break;
                    case 'diagnosis':
                        onDiagnosisActive();
                        break;                    
                    case 'value':
                        onValueisActive();
                        break;                    
                    case 'finance':
                        onFinanceisActive();
                        break;                    
                    case 'news':
                        onNewsisActive();
                        break;                    
                    case 'alloca':
                        onAllocaisActive();
                        break;                    
                    case 'compete':
                        onCompeteisActive();
                        break;                    
                }
            }
        });        
    }
    checkTabsAndApplyFunction(); //탭 상태 체크 및 함수 실행

    // 함수 정의: 탭이 활성화될 때 실행할 함수들
    function onOverviewActive() {        
        // 개요 탭이 활성화될 때 실행할 코드
        $(window).scroll(function () {            
            function scrollsignalpop() {
                var mainBox = $('.mainBox.outline');
                var mainBoxOffset = mainBox.offset() ? mainBox.offset().top : 0;
                var windowHeight = $(window).height();
                var scroll = $(window).scrollTop();            
                if (scroll + windowHeight > mainBoxOffset) {
                    $('.v_signalStreng.globalStock .signalpop .box').slideDown(1200);
                }        
            }
            scrollsignalpop(); // 종목검색 개요 탭 플로팅 배너
        });
    }
    function onDiagnosisActive() {
        // 진단 탭이 활성화될 때 실행할 코드
        $(window).scroll(function () {
            function scrollsignalpop() {
                var mainBox = $('.sub_mid .tab_diagnosis_area .hiding_box');
                var mainBoxOffset = mainBox.offset() ? mainBox.offset().top : 0;
                var windowHeight = $(window).height();
                var scroll = $(window).scrollTop();            
                if (scroll + windowHeight > mainBoxOffset) {
                    $('.v_signalStreng.globalStock .signalpop .box').slideDown(1200);
                }        
            }
            scrollsignalpop(); // 종목검색 진단 탭 플로팅 배너
        });
    }   
    function onValueisActive() {
        // 밸류 탭이 활성화될 때 실행할 코드        
        $(window).scroll(function () {
            function scrollsignalpop() {
                var mainBox = $('.sub_mid .eventsum_area .tableData');
                var mainBoxOffset = mainBox.offset() ? mainBox.offset().top : 0;
                var windowHeight = $(window).height();
                var scroll = $(window).scrollTop();            
                if (scroll + windowHeight > mainBoxOffset) {
                    $('.v_signalStreng.globalStock .signalpop .box').slideDown(1200);
                }        
            }
            scrollsignalpop(); // 종목검색 진단 탭 플로팅 배너
        });
    }   
    function onFinanceisActive() {
        // 재무 탭이 활성화될 때 실행할 코드        
        $(window).scroll(function () {
            function scrollsignalpop() {
                // var mainBox = 300;
                // var mainBoxOffset = mainBox.offset() ? mainBox.offset().top : 0;
                var windowHeight = $(window).height();
                var scroll = $(window).scrollTop();            
                if (scroll + windowHeight > 1000) {
                    $('.v_signalStreng.globalStock .signalpop .box').slideDown(1200);
                }        
            }
            scrollsignalpop(); // 종목검색 진단 탭 플로팅 배너
        });
    }   
    function onNewsisActive() {
        // 뉴스 탭이 활성화될 때 실행할 코드
        scrollsignalpop();
        $(window).scroll(function () {
            scrollsignalpop();
        });
    }   
    function onAllocaisActive() {
        // 배당 탭이 활성화될 때 실행할 코드        
        scrollsignalpop();
        $(window).scroll(function () {
            scrollsignalpop();
        });
    }   
    function onCompeteisActive() {
        // 경쟁사 탭이 활성화될 때 실행할 코드        
        scrollsignalpop();
        $(window).scroll(function () {
            scrollsignalpop();
        });
    }           

    $('.v_signalStreng.globalStock .signalpop.monthly_payment .ftr, .signalpop .bg_gray').on('click', function () {
        $('.signalpop').removeClass('open');
        $('.signalpop .box').animate({
            'opacity': 0,
            'height': 0
        });
        // return false;
    });

    // 개요 캔들차트 3개월 6개월 1년 3년 10년 탭 선택 스크립트
    var tabList = document.querySelectorAll('.period_tabs > li');
    var chartList = document.querySelectorAll('.BICchart_style');
    for (let i = 0; i < tabList.length; i++) {
        var tab = tabList[i];
        var chart = chartList[i];

        tab.addEventListener('click', function () {
            // 모든 차트 숨기기
            for (var c of chartList) {
                c.style.display = 'none';
            }

            // 클릭한 탭과 연관된 차트 보이기
            var target = this.getAttribute('data-target');
            var targetChart = document.querySelector(target);
            targetChart.style.display = 'block';

            // 차트 다시 그리기
            var chartObj = Highcharts.charts.find(chart => chart.renderTo.id === targetChart.id);
            chartObj.reflow();
        });
    }
    $('.mainBox.outline .chart_box .period_tabs li').click(function () {
        // 선택한 탭 버튼에 'active' 클래스 추가
        $(this).addClass('active');
        
        // 다른 탭 버튼에서 'active' 클래스 제거
        $('.mainBox.outline .chart_box .period_tabs li').not(this).removeClass('active');
    });

    // 메인페이지 2024 신년이벤트 배너
    if ($('#header.m_hdr').length) {
        function debouncedScroll() {            
            const debouncedScrollSignalPop = debounce(scrollsignalpop, 30);
            setTimeout(debouncedScrollSignalPop, 30); // 30 밀리초 후에 debouncedScrollSignalPop 함수 실행            
        }
        requestAnimationFrame(debouncedScroll);
    }

    $('.v_signalStreng.globalStock .signalpop.event2024_payment .ftr, .signalpop .bg_gray').on('click', function () {
        $('.signalpop').removeClass('open');
        $('.signalpop .box').animate({
            'opacity': 0,
            'height': 0
        }, 100);
        // return false;
    }); 
    // 메인페이지 2024 신년이벤트 배너

    // 페이지에 class="sub_payment"가 있는지 체크해서 결제 화면 헤더에 파란색 추가
    if (document.querySelector('.sub_payment')) {
        //console.log("결제화면");

        // 결제 화면 헤더에 파란색 추가        
        var header = document.getElementById('header');
        // header가 존재하면 bg_blue 클래스 추가
        if (header) {
            header.classList.add('bg_blue');
        }
        // 결제 화면 푸터에 패딩 변경
        $('#footer').css('margin-top','0');
        $('#footer .notice').css('padding-bottom','85px');

    }

    // "닫기" 버튼 클릭 시 #ticker-container 열고 닫기
    $('.show-more-btn').on('click', function () {        
        var $tickerContainer = $('#ticker-container');
        var $arrow = $(this).find('::after');

        $tickerContainer.toggleClass('expanded');

        if ($tickerContainer.hasClass('expanded')) {
            $(this).text('닫기');
            $arrow.css('transform', 'rotate(135deg)'); // 화살표 위로
        } else {
            $(this).text('더보기');
            $arrow.css('transform', 'rotate(-45deg)'); // 화살표 아래로
        }
    });

    // 서비스소개 페이드인 효과    
    function applyScrollEffect() {
        $('.box').each(function() {
            $(this).addClass('scrolled');
        });
    }
    function checkVisibility() {
        const windowHeight = $(window).height();
        const windowScrollTop = $(window).scrollTop();

        $('.box').each(function() {
            const boxTop = $(this).offset().top;

            // 화면 뷰포트에 .box 요소가 보이기 시작하는 지점 확인
            if (boxTop < windowScrollTop + windowHeight) {
                $(this).addClass('visible');
            } else {
                $(this).removeClass('visible');
            }
        });
    }
    // 서비스소개 상단 박스 순차 슬라이드
    const premiumBenefits = document.querySelectorAll('.premium_box .benefits_guide');
    const userReviewBenefits = document.querySelectorAll('.user_review .benefits_guide');
    
    function applyClassInSequence(elements, index, delay = 300) {
        if (index < elements.length) {
            elements[index].classList.add('visible');
            setTimeout(() => {
                applyClassInSequence(elements, index + 1, delay);
            }, delay);
        }
    }

    function checkUserReviewVisibility() {
        const windowHeight = $(window).height();
        const windowScrollTop = $(window).scrollTop();

        $('.user_review').each(function() {
            const boxTop = $(this).offset().top;

            if (boxTop < windowScrollTop + windowHeight) {
                applyClassInSequence(userReviewBenefits, 0, 150);
                $(window).off('scroll', checkUserReviewVisibility); // Once executed, remove the scroll event
            }
        });
    }

    $(window).on('scroll', checkVisibility);
    $(window).on('scroll', applyScrollEffect);
    $(window).on('scroll', checkUserReviewVisibility);
    checkVisibility(); // 페이지 로드 시에도 실행
    applyScrollEffect(); // 서비스소개 페이드인 효과 함수 실행
    applyClassInSequence(premiumBenefits, 0); // 서비스소개 상단 3개 박스 순차 슬라이드 함수 실행

    // EPS 툴팁 팝업 높이 조절 스크립트 시작           
    if ($('.eps_pop01 .pop_con').length) {
        function adjustHeight() {
            var screenWidth = window.innerWidth; // 현재 화면 너비를 가져옵니다.
            var element = document.querySelector('.eps_pop01 .pop_con');
    
            if (screenWidth >= 425) { // PC 화면으로 가정한 너비입니다.
                element.style.height = 'auto'; // PC에서는 높이를 auto로 설정합니다.
            } else {
                var viewportHeight = window.innerHeight;
                var calculatedHeight = viewportHeight * 0.8 - 60; // 모바일에서의 계산 로직
                element.style.height = calculatedHeight + 'px'; // 모바일에서는 계산된 높이를 적용합니다.
            }
        }
    
        // 초기 로드 및 창 크기 변경 시 높이 조정
        adjustHeight();
        window.onresize = adjustHeight;
        // EPS 툴팁 팝업 높이 조절 스크립트 종료
    }
    
    // 매매신호 수익,전체 탭 보여주는 스크립트
    if ($('.signal_filter').length) {        
        const profitTab = document.getElementById("profit-tab");
        const allTab = document.getElementById("all-tab");
        const profitSignal = document.getElementById("profit-signal");
        const allSignal = document.getElementById("all-signal");

        profitTab.addEventListener("click", function() {
            profitTab.classList.add("active");
            allTab.classList.remove("active");
            profitSignal.style.display = "flex";
            allSignal.style.display = "none";
        });

        allTab.addEventListener("click", function() {
            allTab.classList.add("active");
            profitTab.classList.remove("active");
            allSignal.style.display = "flex";
            profitSignal.style.display = "none";
        });
    }    
    
    // 알림 리스트 읽은 글 회색 표시 스크립트
    if ($('.alarmList').length) {        
        let readItems = JSON.parse(localStorage.getItem('readItems')) || [];

        // 읽은 글에 read 클래스를 추가 (조건: .interest 클래스가 없는 경우)
        readItems.forEach(id => {
            const li = document.querySelector(`li[data-id="${id}"]`);
            if (li && !li.querySelector('.interest')) {
                //console.log(`Adding 'read' class to li with data-id: ${id}`); // Debugging line
                li.classList.add('read');
            } else {
                // console.log(`No element found with data-id: ${id}`); // Debugging line
            }
        });
    
        // 글을 클릭했을 때 read 클래스를 추가하고 로컬 스토리지에 저장
        document.querySelectorAll('.alarmList a').forEach(link => {
            link.addEventListener('click', function() {
                const li = this.parentElement;
                const id = li.getAttribute('data-id');                
                if (!readItems.includes(id)) {
                    readItems.push(id);
                    localStorage.setItem('readItems', JSON.stringify(readItems));
                    li.classList.add('read');
                }
            });
        });
        $('.alarmArea .alarmList li  span.sum').css('visibility','visible');        
    }

    // 결제 취소, Lottie 애니메이션 로드 및 재생
    if ($('.lottie-container').length) {        
        lottie.loadAnimation({
            container: document.getElementById('lottie-container'), // 애니메이션을 넣을 컨테이너
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/js/payment_loading.json' // 사용하고자 하는 Lottie JSON 파일 경로
        });
        const loadingText = document.getElementById('loadingText');
        const loadingTextCancel = document.getElementById('loadingTextCancel');
        const loadingTextCardChange = document.getElementById('loadingTextCardChange');

        let dotCount = 0;
        setInterval(function() {
            dotCount = (dotCount + 1) % 6;
            const dots = '.'.repeat(dotCount);
            
            // 결제 처리중 텍스트 업데이트
            loadingText.innerHTML = `<b>결제 처리중 입니다${dots}</b>`;
            
            // 구독취소 처리중 텍스트 업데이트
            loadingTextCancel.innerHTML = `<b>구독취소 처리중 입니다${dots}</b>`;

            // 카드변경 처리중 텍스트 업데이트
            loadingTextCardChange.innerHTML = `<b>카드변경 처리중 입니다${dots}</b>`;
        }, 500); // 500ms마다 업데이트 (0.5초)

    }          
});

// 레시피 리스트 벽돌쌓기 레이아웃, Masonry js 
// function debounce(func, wait) {
//     let timeout;
//     return function () {
//         clearTimeout(timeout);
//         timeout = setTimeout(func, wait);
//     };
// }

// document.addEventListener("DOMContentLoaded", function () {
//     const masonryContainers = document.querySelectorAll('.list_masonry');

//     masonryContainers.forEach(function (container) {
//         const masonryInstance = new Masonry(container, {
//             itemSelector: '.figure', // 각 항목의 셀렉터
//             columnWidth: '.figure', // 컬럼 너비            
//             percentPosition: true, // 반응형 비율 계산
//             gutter: 14, // 항목 간격 (픽셀 단위)
//             horizontalOrder: true, // 좌우 간격 추가            
//             fitWidth: true, // 상하 간격 추가
//             transitionDuration: '0.4s' // 부드러운 전환을 위한 애니메이션 지속 시간
//         });

//         // 초기 설정 시 list_masonry의 너비를 100%로 설정
//         container.style.width = '100%';

//         window.addEventListener('resize', debounce(() => {
//             // 리사이즈 시 list_masonry의 너비를 100%로 유지
//             container.style.width = '100%';
//             masonryInstance.layout();
//         }, 100));
//     });
// });

// 검색 이력 더보기, 닫기 스크립트
document.addEventListener("DOMContentLoaded", function() {
    const tickerContainer = document.getElementById('ticker-container');
    const showMoreBtn = document.querySelector('.show-more-btn');

    if (tickerContainer && showMoreBtn) {
        function checkScroll() {
            const isScrollable = tickerContainer.scrollHeight > tickerContainer.clientHeight;
            showMoreBtn.style.display = isScrollable ? 'block' : 'none';
        }

        function updateVisibility() {
            if (!tickerContainer.classList.contains('expanded')) {
                tickerContainer.style.overflow = 'hidden';
                tickerContainer.style.height = null; // 초기 높이로 설정
                showMoreBtn.classList.remove('expanded');
                showMoreBtn.textContent = '더보기';
            } else {
                tickerContainer.style.height = `${tickerContainer.scrollHeight}px`;
                tickerContainer.style.overflow = 'visible';
                showMoreBtn.classList.add('expanded');
                showMoreBtn.textContent = '닫기';
            }
        }

        showMoreBtn.addEventListener('click', function() {
            tickerContainer.classList.toggle('expanded');
            updateVisibility();
        });

        // 스크롤 가능 여부 확인 및 초기 UI 업데이트
        checkScroll();
        updateVisibility();

        // 창 크기 변경 시 스크롤 가능 여부 재확인
        window.addEventListener('resize', function() {
            checkScroll();
            updateVisibility();
        });
    } 
});
