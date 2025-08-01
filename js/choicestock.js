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

    // 모달 팝업 관련 모듈
    const ModalPopup = {
        // 모달 열기
        open: function(popupId) {
            if (!popupId) {
                console.warn('data-popup 속성이 없습니다.');
                return;
            }

            const $targetPopup = $('.' + popupId);
            if ($targetPopup.length === 0) {
                console.warn('팝업을 찾을 수 없습니다: ' + popupId);
                return;
            }

            // balloon_popup, toast_popup, toast_popup_btn일 때는 blocker를 보여주지 않음
            if (popupId !== 'balloon_popup' && popupId !== 'toast_popup' && popupId !== 'toast_popup_btn') {
                $('html, body').css("overflow", "hidden");
                $('.modal').hide();
                $('.blocker').show();
            }

            // balloon_popup일 때는 slideUp, slideUp50 클래스를 적용하지 않음
            if (popupId === 'balloon_popup') {
                $targetPopup.show();
            }
            
            // toast_popup_btn 또는 toast_popup일 때 자동으로 닫힘
            else if (popupId === 'toast_popup_btn' || popupId === 'toast_popup') {
                $targetPopup.show().addClass('slideUp50');
                // toast_popup_btn은 3초, toast_popup은 2초 후 자동 닫기
                var closeDelay = (popupId === 'toast_popup_btn') ? 3000 : 2000;
                setTimeout(function() {
                    $targetPopup.fadeOut(function() {
                        $targetPopup.removeClass('slideUp slideUp50');
                    });
                }, closeDelay);

                // toast_popup_btn 또는 toast_popup 이외의 영역 클릭 시 닫히도록 처리
                // 이미 바인딩된 핸들러가 있으면 중복 방지 위해 먼저 off
                var eventNamespace = (popupId === 'toast_popup_btn') ? '.toast_popup_btn' : '.toast_popup';
                $(document).off('mousedown' + eventNamespace + ' touchstart' + eventNamespace)
                    .on('mousedown' + eventNamespace + ' touchstart' + eventNamespace, function(e) {
                    // 해당 팝업 내부 클릭 시 무시
                    var popupClass = (popupId === 'toast_popup_btn') ? '.toast_popup_btn' : '.toast_popup';
                    if ($(e.target).closest(popupClass).length === 0) {
                        $targetPopup.fadeOut(function() {
                            $targetPopup.removeClass('slideUp slideUp50');
                        });
                        // 이벤트 핸들러 해제
                        $(document).off('mousedown' + eventNamespace + ' touchstart' + eventNamespace);
                    }
                });
            }
            
            // bottom_popup, fav_group_move_popup 일때는 slideUp 적용
            else if ($targetPopup.hasClass('bottom_popup') || $targetPopup.hasClass('fav_group_move_popup')) {                
                $targetPopup.show().addClass('slideUp');
            } else {
                $targetPopup.show().addClass('slideUp50');
            }
        },

        // 모달 닫기
        close: function() {
            $('html, body').css("overflow", "");
            $('.modal').hide();
            $('.blocker').hide();
            $('.modal').removeClass('slideUp50');
        }
    };

    // 모달 열기/닫기 이벤트 바인딩 (여러 개의 data-popup 처리)
    $('[data-popup]').on('click', function(e) {
        if ($(this).is('a')) {
            e.preventDefault(); // a 태그의 기본 동작 방지
        }
        // data-popup 속성 값이 여러 개일 수 있으므로 공백 기준으로 분리
        const popupIds = ($(this).data('popup') + '').split(' ');

        // pop_clse(모달 닫기)가 포함되어 있으면 먼저 닫기
        if (popupIds.includes('pop_clse')) {
            ModalPopup.close();
        }

        // pop_clse를 제외한 나머지 팝업 오픈
        popupIds.forEach(function(popupId) {
            if (popupId && popupId !== 'pop_clse') {
                ModalPopup.open(popupId);
            }
        });
    });

    // data-popup="balloon_popup" 버튼을 눌렀을 때 <div class="balloon_popup">가 보이도록 처리
    $('[data-popup="balloon_popup"]').on('click', function(e) {
        e.stopPropagation();
        // .balloon_popup_box 하위의 .balloon_popup을 찾아서 보여줌
        $(this).find('.balloon_popup').show();
    });
    // .balloon_popup .clse를 클릭했을 때 balloon_popup을 닫아줌
    $('.balloon_popup .clse').on('click', function(e) {        
        e.stopPropagation();
        $(this).closest('.balloon_popup').fadeOut();
    });

    // .balloon_popup 바깥을 클릭했을 때 balloon_popup을 닫아줌
    $(document).on('mousedown touchstart', function(e) {
        // 열린 balloon_popup이 있는지 확인
        var $openPopup = $('.balloon_popup:visible');
        if ($openPopup.length) {
            // 클릭한 요소가 balloon_popup 내부가 아니면 닫기
            if ($(e.target).closest('.balloon_popup').length === 0 && 
                $(e.target).data('popup') !== 'balloon_popup') {
                $openPopup.fadeOut();
            }
        }
    });

    
    // ? 버튼 클릭 시    
    $('[data-popup="balloon_popup"]').on('click', function(e) {        
        var $btn = $(this);
        var $popup = $btn.siblings('.balloon_popup');
    
        var rect = $btn[0].getBoundingClientRect();
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
        var top = rect.bottom + scrollTop + 8; // 8px 아래
        var margin = 20;
        var left = rect.left + scrollLeft + (rect.width / 2) - ($popup.outerWidth() / 2);
    
        // 화면 벗어남 방지 (좌우 20px 여백)
        var winWidth = $(window).width();
        var popupWidth = $popup.outerWidth();
        if (left < margin) left = margin;
        if (left + popupWidth > winWidth - margin) left = winWidth - popupWidth - margin;
    
        $popup.css({
            display: 'block',
            top: top + 'px',
            left: left + 'px'
        });
    });
    
    
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
    function initScrollFixElements() {
        var search_height = $('.globalStock .sub_search .search_top').height();

        $(window).scroll(function () {
            if ($(this).scrollTop() > 210) {
                $('.globalStock .sub_search .search_top .data_area').addClass('fix_data');
                $('.globalStock .sub_search .search_top').css('height', search_height);
            } else {
                $('.globalStock .sub_search .search_top .data_area').removeClass('fix_data'); 
                $('.globalStock .sub_search .search_top').css('height', 'auto');
            }
        });        
    }
    initScrollFixElements();

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
        
        // originalCompanyName 요소 복사하여 맨 앞에 추가
        var originalElement = document.getElementById("originalCompanyName");
        if (originalElement) {
            var clonedCompanyName = originalElement.cloneNode(true);
            copy_recom.prepend(clonedCompanyName);
        }
        
        $('body').append(copy_recom);
    }
    customizeAndAppendList();  // 종목검색 개요탭 등 상단 고정 종목명 함수 실행

    
    if ($('#header').length && !$('#header').hasClass('m_hdr')) {
        // 스크롤시 헤더 상단 고정 스크립트    
        var headerHeight = $('#header').innerHeight();
        var headerOffset = $('#header .headerTop').offset().top;    
        window.addEventListener('scroll', function () {
            var header = document.getElementById('header');
            if (window.scrollY >= 160 && !$('.gdn_typeWrap').length && !$('.service_wrap').length) {            
                $('.list.recom').addClass('fix_data'); 
            } else {            
                $('.list.recom').removeClass('fix_data'); 
            }
        });

        window.addEventListener('scroll', function () {
            var header = $('#header');        
            if (window.scrollY > headerOffset && !$('.gdn_typeWrap').length && !$('.service_wrap').length) {            
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
    var gnbHeight = $gnb.outerHeight();
    var windowHeight = $(window).height();

    $(window).on('resize', function() {
        gnbHeight = $gnb.outerHeight();
        windowHeight = $(window).height();
    });

    $(window).on('scroll', function(){
        // GNB가 없는 경우 예외 처리 및 #footer에 padding-bottom: 0 추가
        if ($gnb.length === 0) {
            $('#footer').css('padding-bottom', '0');
            return;
        }
        
        var st = $(this).scrollTop();
        var docHeight = $(document).height();
        // 상단 10% 이내 또는 GNB 높이 이내
        var isAtTop = st <= Math.max(windowHeight * 0.1, gnbHeight);
        // 하단 10% 이내 또는 GNB 높이 이내
        var isAtBottom = st + windowHeight > docHeight - Math.max(windowHeight * 0.1, gnbHeight);

        if (isAtTop || isAtBottom) {
            if (!$gnb.is(':visible')) $gnb.show();
        } else if (st > lastScrollTop) {
            if ($gnb.is(':visible')) $gnb.hide();
        } else {
            if (!$gnb.is(':visible')) $gnb.show();
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
            // $(btnSelector).css('top', '11px');
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
    if ($('.attentionSwiper').length) {
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
                    slidesPerView: 1.8,                    
                },  
                424: {
                    slidesPerView: 1.8,                    
                },               
                425: {
                    slidesPerView: 2.1,                    
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

    // 원스톱진단 관심종목 매트릭스 분석 리스트
    if ($('.analyze_Swiper').length) {
        var analyze_Swiper = new Swiper('.analyze_Swiper', {
            slidesPerView: "auto",
            spaceBetween: 16,
            observer: true, // DOM 변화를 감지하여 Swiper를 업데이트
            observeParents: true, // 부모 요소의 DOM 변화를 감지
            on: {
                init: function () {
                    let maxHeight = 0;
                    const slides = this.slides ? Array.from(this.slides) : [];
                    slides.forEach(slide => {
                        if (slide.offsetHeight > maxHeight) {
                            maxHeight = slide.offsetHeight;
                        }
                    });
                    slides.forEach(slide => {
                        slide.style.height = maxHeight + 'px';
                    });
                    this.update(); // 초기화 시 높이 업데이트
                }
            }
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

    // GDN 페이지 투자레시피 슬라이드
    var swiper = new Swiper('.recipeSwiper', {
        loop: true,              
        spaceBetween: 8,
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        loopAdditionalSlides: 1, // 슬라이드 복제를 위한 추가 슬라이드 수
        autoplay: {            
            delay: 0,
            disableOnInteraction: false,
        },            
        speed: 1300,
        grabCursor: true,
        mousewheelControl: true,
        keyboardControl: true,   
        // allowTouchMove: false,       
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
        slidesPerView: '3.3',                
        // 화면 너비에 따른 설정 조정
        breakpoints: {
            // 화면 너비가 640px 이하일 때
            640: {
            slidesPerView: 3.5,  // 슬라이드 1개 표시
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
    if ($('.swiper-research').length) {  
        var slideCount = document.querySelectorAll('.swiper-research .swiper-slide').length;
        var swiper = new Swiper(".swiper-research", {
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
    // 콘솔 에러 방지: .swiper-pagination이 없을 때 style 접근하지 않도록 수정
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

        // 슬라이드가 1개일 때 pagination 요소를 숨김 (존재할 때만)
        if (slideCount <= 1) {
            var paginationEl = document.querySelector('.swiper-pagination');
            if (paginationEl) {
                paginationEl.style.display = 'none';
            }
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

    if ($('.swipe_banner_btm').length) {  
        var slideCount = document.querySelectorAll('.swipe_banner_btm .swiper-slide').length;
        var swiper = new Swiper(".swipe_banner_btm", {
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

    // 뉴스 티커 종목 스와이프
    var newsSwiper = new Swiper('.tickerlist-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 8,
        freeMode: true,
    });

    // 필터 스와이퍼 초기화
    const filterSwiper = new Swiper('.filter-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 0,
        freeMode: true,        
    });

    // 필터 버튼 클릭 이벤트
    $('.filter_btn').on('click', function(e) {
        e.preventDefault();
        const $this = $(this);
        const index = $this.parent().index();
        const speed = 150; // 이동 속도 설정 (밀리초 단위)

        // 이미 활성화된 버튼을 다시 클릭했을 때는 아무 작업도 하지 않음
        if ($this.hasClass('active')) {
            return;
        }

        $('.filter_btn').removeClass('active');
        $this.addClass('active');
        
        // 클릭한 버튼을 화면 좌측으로 이동
        filterSwiper.slideTo(index, speed);

        // 두번째 필터 버튼을 선택했을때 스크롤을 제일 좌측으로 이동
        if (index === 1) {
            filterSwiper.slideTo(0, speed);
        }
    });


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
    // var heightArray = $(".globalStock .sub_search .latest_results .tabsArea .onestep_chart .dgtic_results > div").map(function () {
    //     return $(this).height();
    // }).get();
    // var maxHeight = Math.max.apply(Math, heightArray);
    // $(".globalStock .sub_search .latest_results .tabsArea .onestep_chart .dgtic_results > div").height(maxHeight);

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
        // $('.globalStock .schfix_inc .searching .searchArea .searchBtn').css('top', '15px');
        $('.globalStock .schfix_inc .searching .searchArea .sch_title').addClass('keydown');
        $('.globalStock .schfix_inc .searching .sch_autocomplete').addClass('focus_on').show();
        $('.globalStock.kiwoom .schfix_inc .top_btn').hide();
        $('.globalStock.kiwoom .schfix_inc .searching .top_btn + .searchArea').css('width', 'calc(100% - 40px)');
        // $('.globalStock.wowtv .schfix_inc .searching .searchArea .searchBtn').css('top', '11px');
    });
    $('.globalStock .schfix_inc .searching .searchArea .searchInput').on("focusout", function () {
        $('.globalStock .schfix_inc .searching .searchArea .sch_title').removeClass('keydown');
        $(this).removeClass('keydown');
        // $('.globalStock .schfix_inc .searching .searchArea .searchBtn').css('top', '11px');
        $('.globalStock .schfix_inc .searching .sch_autocomplete').hide();
        $('.globalStock.kiwoom .schfix_inc .top_btn').show();
        $('.globalStock.kiwoom .schfix_inc .searching .searchArea').css('width', '100%');
        $('.globalStock.kiwoom .schfix_inc .searching .top_btn + .searchArea').css('width', 'calc(100% - 70px)');
        // $('.globalStock.wowtv .header_wowtv + .search_top.searching .searchArea .searchBtn').css('top', '11px');
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
        $('html, body').css('overflow', '');
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
	
    // 관심종목 등록 팝업
    // $('.attention_pop').on('click', function () {
    //     $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
    //     $('.blocker').show(); // 배경 블러 처리
    //     $('.fav_reg_popup').show().addClass('slideUp'); // 원하는 모달 표시                        
    //     $('html, body').css("overflow", "hidden");
    // });    
    // 관심종목 그룹 등록 2차 팝업
    $('.group_add_btn').on('click', function () {                          
        // 등록 팝업 초기화
		$('.fav_group_reg_popup .name_input').val('');
        $('.fav_group_del_popup .input_count').html('<b>0</b>/15');
        
        $('.modal').hide().removeClass('slideUp');                      
		$('.fav_group_reg_popup .input_cunt').text('0/15');
        $('.blocker').show();
		$('.fav_group_reg_popup').show().addClass('slideUp'); // 그룹 추가 펍옵 표시
        $('html, body').css("overflow", "hidden");		
    });
	
    $('.group_reg_btn').on('click', function () {                          
        $('.modal').hide().removeClass('slideUp');                      
        $('.fav_group_del_popup').show().addClass('slideUp'); 
    });	

    // fav_group_reg_popup 닫기 버튼 클릭 시
    $('.fav_group_reg_popup .clse').on('click', function () {      
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('html, body').css("overflow", "hidden");   

	    const currentPage = $("#current_page").val() || $("body").data("current_page");
		
		if(currentPage=="interest") {
			$('.fav_group_manage_popup').show().addClass('slideUp');
		}
		else {
	        $('.fav_reg_popup').show().addClass('slideUp'); // 원하는 모달 표시                                  
		}
    });
	
    // 관심종목 그룹 관리 툴팁 팝업
    $('.btn_manage_group').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_group_manage_popup').show().addClass('slideUp'); // 원하는 모달 표시        
        $('html, body').css("overflow", "hidden");
    });	
	
	// 그룹 관리 팝업의 확인 버튼 클릭 이벤트
	$(document).on('click', '.fav_group_manage_popup .btn_save', function() {
		// 모달 창 닫기
		$('.modal').hide().removeClass('slideUp');
		$('.blocker').hide();
		$('html, body').css("overflow", "");
	});	
		
	$(document).on('click', '.fav_group_del_popup .clse', function() {
		// 현재 팝업 닫기
		$('.fav_group_del_popup').hide().removeClass('slideUp');
		
		// 그룹 관리 팝업 다시 표시
		$('.fav_group_manage_popup').show().addClass('slideUp');
		
	});	

	$(document).on('click', '.blocker', function() {
		// 열려있는 모달 확인
		const openedModal = $('.modal.slideUp');
		
		// 그룹 이름 수정/삭제 창이 열려있는 경우
		if (openedModal.hasClass('fav_group_del_popup')) {
			// 수정/삭제 창 닫기
			$('.fav_group_del_popup').hide().removeClass('slideUp');
			
			// 그룹 관리 창 열기
			$('.fav_group_manage_popup').show().addClass('slideUp');
			
			// 이벤트 전파 방지 (blocker가 완전히 닫히는 것 방지)
			return false;
		}
	});

    // 관심그룹 수정,삭제
    $('.fav_group_com_popup .clse').on('click', function () {      
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('html, body').css("overflow", "hidden");        
        $('.fav_group_manage_popup').show().addClass('slideUp'); // 원하는 모달 표시                                  
    });

    $('.fav_item_del_popup2 .btn_save, .fav_item_del_popup2 .clse').on('click', function() {
        $('.fav_item_del_popup2').hide().removeClass('slideUp');
        $('.blocker').hide();
        $('html, body').css("overflow", "");
    });
	
	// 관심종목 이동 -> 닫기
	$('.fav_item_move_popup .btn.btn_save').on('click', function () {        
		$('body').css('overflow', '');                        
		$('.blocker').hide();
		$('.modal').hide().removeClass('slideUp');        
	});
    // 모달이 닫힐 때 body에서 'modal-open' 클래스를 제거하는 코드 추가
    $('.modal.att_pop .pop_header .clse, .blocker').on('click', function() {                
        $('html, body').css("overflow", "");
    });

    // 매매신호 플로팅 배너 열기, 닫기 스크립트    
    // 스크롤 이벤트를 감지하여 처리    
    function scrollsignalpop() {
        const signalPop = $('.v_signalStreng.globalStock .signalpop .box');        
        signalPop.slideDown(1200, function() {
            $(this).css({
                'display': 'block',
                'height': 'auto',
                'opacity': '1'
            });
        });
    }
    // 스크롤 이벤트 리스너 추가
    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        
        // sub_search 또는 signalpop 클래스가 존재하는 경우에만 실행
        // if ($('.sub_search').length || $('.signalpop').length) {
        //     // 스크롤이 페이지의 30% 이상 내려갔을 때 실행
        //     if (scrollPosition > (documentHeight * 0.3)) {
        //         console.log('scrollsignalpop 실행');
        //         scrollsignalpop();
        //     }
        // }
    });

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
            // 모든 탭에서 'active' 클래스 제거
            tabList.forEach(function(t) {
                t.classList.remove('active');
            });
            // 클릭한 탭에 'active' 클래스 추가
            this.classList.add('active');

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
        // 모든 탭 버튼에서 'active' 클래스 제거
        $(this).siblings().removeClass('active');
        // 선택한 탭 버튼에 'active' 클래스 추가
        $(this).addClass('active');
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
        $('.service_wrap .box').each(function() {
            $(this).addClass('scrolled');
        });
    }
    function checkVisibility() {
        const windowHeight = $(window).height();
        const windowScrollTop = $(window).scrollTop();

        $('.service_wrap .box').each(function() {
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
    
    
    
    // premium_gdnbtn 버튼 위치에 따른 클래스 추가/제거
    function checkPremiumBtnPosition() {
        const $premiumBtn = $('.premium_gdnbtn');
        if ($premiumBtn.length) {
            const windowHeight = $(window).height();
            const windowScrollTop = $(window).scrollTop();
            const documentHeight = $(document).height();
            const $footer = $('#footer');
            const footerHeight = $footer.length ? $footer.outerHeight() : 0;
            
            // 스크롤이 페이지 하단(푸터 영역 제외) 근처에 도달했는지 확인
            if (windowScrollTop + windowHeight > documentHeight - footerHeight - 65) {
                $premiumBtn.addClass('is-bottom');
            } else {
                $premiumBtn.removeClass('is-bottom');
            }
        }
    }
    
    $(window).on('scroll', checkPremiumBtnPosition);
    $(window).on('resize', checkPremiumBtnPosition);

    checkVisibility(); // 페이지 로드 시에도 실행
    applyScrollEffect(); // 서비스소개 페이드인 효과 함수 실행
    checkPremiumBtnPosition(); // 페이지 로드 시 버튼 위치 확인
    applyClassInSequence(premiumBenefits, 0); // 서비스소개 상단 3개 박스 순차 슬라이드 함수 실행


    // EPS 툴팁 팝업 높이 조절 스크립트 시작           
    if ($('.eps_pop01 .pop_con').length) {
        function adjustHeight() {
            var screenWidth = window.innerWidth; // 현재 화면 너비를 가져옵니다.
            var element = document.querySelector('.eps_pop01 .pop_con');
    
            if (screenWidth >= 425) { // PC 화면으로 가정한 너비입니다.
                element.style.maxHeight = 'none'; // PC에서는 maxHeight 제한을 없앱니다.
            } else {
                var viewportHeight = window.innerHeight;
                var calculatedHeight = viewportHeight * 0.8 - 60; // 모바일에서의 계산 로직
                element.style.maxHeight = calculatedHeight + 'px'; // 모바일에서는 계산된 maxHeight를 적용합니다.
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
        var animation = lottie.loadAnimation({
            container: document.getElementById('lottie-container'), // 애니메이션을 넣을 컨테이너
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/js/payment_loading.json' // 사용하고자 하는 Lottie JSON 파일 경로
        });

        // 파일을 못 찾거나 로딩 실패 시 예외 처리
        animation.addEventListener('data_failed', function() {
            var lottieEl = document.getElementById('lottie-container');
            if (lottieEl) {
                lottieEl.innerHTML = '<span style="color:#888;font-size:16px;">로딩 애니메이션을 불러올 수 없습니다.</span>';
            }
        });

        const loadingText = document.getElementById('loadingText');
        const loadingTextCancel = document.getElementById('loadingTextCancel');
        const loadingTextCardChange = document.getElementById('loadingTextCardChange');

        let dotCount = 0;
        setInterval(function() {
            dotCount = (dotCount + 1) % 6;
            const dots = '.'.repeat(dotCount);
            
            // 결제 처리중 텍스트 업데이트 (존재할 때만)
            if (loadingText) {
                loadingText.innerHTML = `<b>결제 처리중 입니다${dots}</b>`;
            }
            // 구독취소 처리중 텍스트 업데이트 (존재할 때만)
            if (loadingTextCancel) {
                loadingTextCancel.innerHTML = `<b>구독취소 처리중 입니다${dots}</b>`;
            }
            // 카드변경 처리중 텍스트 업데이트 (존재할 때만)
            if (loadingTextCardChange) {
                loadingTextCardChange.innerHTML = `<b>카드변경 처리중 입니다${dots}</b>`;
            }
        }, 500); // 500ms마다 업데이트 (0.5초)

    }          

    // 마켓스코어 공포 지수 툴팁 + 차트    
    $('.globalStock .sub_recom.sub_recipe .sub_mid.recipe_view .tradeSignal_status .market_alert').on('click', function () {
        if ($(this).hasClass('no_signal')) {            
            return;
        } else {
            $('body').css('overflow', 'hidden');
            $('.modal').hide().removeClass('slideUp');
            $('.blocker').show();
            $('.score_pop02').show().addClass('slideUp');
            history.pushState(null, null, location.href); // 히스토리에 현재 상태 추가
        }        
    });

    // score_pop02 닫기 이벤트
    $('.score_pop02 .clse').click(function() {
        history.back(); // 이전 상태로 돌아가기
    });
    // 히스토리 변경 감지
    // window.addEventListener('popstate', function() {
    //     $('.score_pop02').hide().removeClass('slideUp');
    //     $('.blocker').hide();
    //     $('html, body').css("overflow", "");
    // });
        
    // spider_year_item 클릭 이벤트
    $('.spider_year_item span').click(function() {
        if ($(this).hasClass('no_pop')) {            
            return;
        } else {
            $('.past_score_pop').show().addClass('slideUp');
            $('.blocker').show();
            $('html, body').css("overflow", "hidden");
            history.pushState(null, null, location.href); // 히스토리에 현재 상태 추가        
        }
        $('.list.recom').addClass('fix_data');        
    });

    // past_score_pop 닫기 이벤트
    $('.past_score_pop .clse').click(function() {
        history.back(); // 이전 상태로 돌아가기        
    });

    // 히스토리 변경 감지
    // window.addEventListener('popstate', function() {
    //     $('.past_score_pop').hide().removeClass('slideUp');
    //     $('.blocker').hide();
    //     $('html, body').css("overflow", "");
    // });

    // ==========================
    // [테이블 width 동적 조정 스크립트 시작]
    function adjustTableWidth() {
        var $tables = $('.scroll_table_wrap .scroll_table > table');
        if ($tables.length === 0) return; // scroll_table이 없으면 함수 종료
        $tables.each(function() {
            var $table = $(this);
            var $scrollArea = $table.closest('.scroll_table');
            if ($table.length === 0 || $scrollArea.length === 0) return;
            var parentWidth = $scrollArea.width();
            $table.css('width', 'max-content');
            var tableScrollWidth = $table[0].scrollWidth;
            if (tableScrollWidth < parentWidth) {
                $table.css('width', '100%');
            } else {
                $table.css('width', 'max-content');
            }
            // width 조정 후 opacity를 1로 변경
            $table.css('opacity', '1'); 
        });
    }
    $(window).on('load resize', adjustTableWidth);
    // [테이블 width 동적 조정 스크립트 끝]

});

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


// recommend_item 클릭 이벤트 처리
document.addEventListener('DOMContentLoaded', function() {
    try {
        const recommendItems = document.querySelectorAll('.recommend_item');
        
        if (!recommendItems || recommendItems.length === 0) {
            return; // recommend_item이 없는 경우 early return
        }

        recommendItems.forEach(item => {
            item.addEventListener('click', function() {
                const showItemTxt = this.querySelector('.show_item_txt');
                if (!showItemTxt) return;
                
                const isActive = showItemTxt.classList.contains('active');
                
                // 클릭한 항목만 토글
                if (isActive) {
                    showItemTxt.classList.remove('active');
                    this.classList.remove('active');
                } else {
                    showItemTxt.classList.add('active'); 
                    this.classList.add('active');
                }
            });
        });
    } catch (error) {
        console.log('recommend_item 이벤트 처리 중 오류 발생:', error);
    }
});


// premium_gdnbtn 스크롤 이벤트 처리
function handlePremiumButtonScroll() {
    const premiumBtn = document.querySelector('.premium_gdnbtn');
    const footer = document.querySelector('#footer');
    if (!premiumBtn || !footer) return;

    try {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const footerHeight = footer.offsetHeight;

        // 버튼이 화면 하단에 고정되어야 하는 위치 계산 (푸터 영역 제외)
        const fixedPosition = documentHeight - windowHeight - premiumBtn.offsetHeight - footerHeight;

        if (scrollPosition >= fixedPosition) {
            premiumBtn.classList.remove('is-bottom');            
        } else {            
            premiumBtn.classList.add('is-bottom');
        }
    } catch (error) {
        console.log('premium_gdnbtn 스크롤 이벤트 처리 중 오류 발생:', error);
    }
}

// GDN_Ctype 페이지의 event_footer 스타일 처리
document.addEventListener('DOMContentLoaded', function() {
    const gdnTypeWrap = document.querySelector('.gdn_typeWrap.type_c');
    const eventFooter = document.querySelector('.event_footer');
    const eventContainer = document.querySelector('#container');

    if (gdnTypeWrap && eventFooter) {        
        eventFooter.style.borderTop = 'none';
    }
    if (gdnTypeWrap && eventContainer) {
        eventContainer.style.paddingBottom = '0';
    }
});

// 컨텐츠 필터링을 위한 클래스 정의
class ContentFilter {
    constructor(options = {}) {        
        this.options = {
            // 각 페이지 타입별 기본 필터값 정의 (나중에 필터 추가 되면 여기에 추가)
            pageTypes: {
                'sub_recipe': 'recommend',     // 레시피 페이지: 추천 필터
                'sub_research': 'all_note',    // 리서치 페이지: 전체 노트 필터
                'sub_briefing': 'all_briefing',// 브리핑 페이지: 전체 브리핑 필터
                'sub_alarm': 'all_briefing',  // 알람 리스트 페이지: 전체 브리핑 필터
                'default': 'growth',            // 기본 페이지: 성장주 필터
                'onestop_view': 'detail',          // 원스톱진단 페이지: 간단히,자세히 필터
                'research_board': 'news_allnews',   // 검색 뉴스 탭 : 뉴스, 투자노트 필터
                'latest_results': 'interest_all_news'   // 관심 페이지 : 뉴스, 투자노트, 커뮤니티 필터
            },
            filterButtonClass: '.filter_btn',   // 필터 버튼 클래스
            sortButtonClass: '.sort_btn',       // 정렬 버튼 클래스
            interestButtonClass: '.interest_btn',  // 관심 버튼 클래스
            contentClass: '.filter_box_inner',  // 컨텐츠 박스 클래스
            ...options
        };
        
        this.init();
        this.bindEvents();
    }

    // 필터 초기화 메서드
    init() {
        // 현재 페이지 타입에 맞는 기본 필터 적용
        const pageType = this.getCurrentPageType();
        const defaultFilter = this.options.pageTypes[pageType];
        
        // 모든 컨텐츠를 숨기고 기본 필터에 해당하는 컨텐츠만 표시
        $(this.options.contentClass).hide();
        $(`[data-filter="${defaultFilter}"]`).show();
    }

    // 현재 페이지 타입을 확인하는 메서드
    getCurrentPageType() {
        // pageTypes에 정의된 각 타입을 확인하여 현재 페이지 타입 반환
        for(let type in this.options.pageTypes) {
            if($(`.${type}`).length > 0) return type;
        }
        return 'default'; // 일치하는 타입이 없으면 기본값 반환
    }

    // 이벤트 리스너 설정 메서드
    bindEvents() {
        const self = this;
        
        // 필터 버튼과 정렬 버튼 클릭 이벤트 처리
        $(`${this.options.filterButtonClass}, ${this.options.sortButtonClass}, ${this.options.interestButtonClass}`).on('click', function(e) {
            const isFilterBtn = $(this).hasClass('filter_btn');
            const isInterestBtn = $(this).hasClass('interest_btn');
            // 버튼 타입에 따른 active 클래스 처리
            if(isFilterBtn) {
                // 필터 버튼인 경우
                $(self.options.filterButtonClass).removeClass('active');
                $(this).addClass('active');
            } else if(isInterestBtn) {
                // 원스톱진단 버튼인 경우
                $(self.options.interestButtonClass).removeClass('active');
                $(this).addClass('active');
            } else {
                // 정렬 버튼인 경우
                $('.sort li').removeClass('active');
                $(this).parent('li').addClass('active');
            }
            
            // 선택된 필터값에 따라 컨텐츠 표시/숨김 처리
            const filterValue = $(this).data('filter');
            $(self.options.contentClass).hide();
            $(`${self.options.contentClass}[data-filter="${filterValue}"]`).show();
        });
    }
}

// DOM이 로드된 후 필터 초기화
$(document).ready(function() {
    // 기본 필터 인스턴스 생성
    const contentFilter = new ContentFilter();
    
    // 커스텀 옵션 사용 예시 (주석 처리)
    /*
    const customFilter = new ContentFilter({
        pageTypes: {
            'custom_page': 'custom_filter',  // 커스텀 페이지 타입
            'default': 'all'                 // 커스텀 기본 필터
        },
        filterButtonClass: '.custom_filter_btn',  // 커스텀 필터 버튼
        contentClass: '.custom_content'           // 커스텀 컨텐츠 클래스
    });
    */
});

// 뉴스,투자노트 종목티커 갯수에 따라 폰트수 제한하는 함수 (뉴스,투자노트 리스트 페이지에서 사용중)
function updateTagListWidths() {
    try {
        const tagLists = document.querySelectorAll('.tag_list');
        if (!tagLists || tagLists.length === 0) {
            console.log('tag_list 요소를 찾을 수 없습니다.');
            return;
        }
        
        tagLists.forEach(tagList => {
            const tags = tagList.querySelectorAll('.tag');
            if (tags && tags.length > 0) {
                tagList.dataset.count = tags.length;
            } else {
                tagList.dataset.count = '0';
            }
        });
    } catch (error) {
        console.log('updateTagListWidths 함수 실행 중 오류 발생:', error);
    }
}

// CSS에서 초기 상태를 숨김으로 설정하고, JavaScript로 표시하는 방식
function initializeTagListDisplay() {
    try {
        // 초기 상태에서 모든 tag_list를 숨김
        const tagLists = document.querySelectorAll('.tag_list');
        if (!tagLists || tagLists.length === 0) {
            //tag_list 가 없는 경우
            return;
        }
        
        tagLists.forEach(tagList => {
            if (tagList && tagList.style) {
                tagList.style.opacity = '0';
                tagList.style.visibility = 'hidden';
            }
        });
        
        // DOM이 완전히 로드된 후 실행
        requestAnimationFrame(() => {
            updateTagListWidths();
            
            // 애니메이션과 함께 표시
            tagLists.forEach((tagList) => {
                if (tagList && tagList.style) {
                    setTimeout(() => {
                        tagList.style.transition = 'opacity 0.2s ease-in-out, visibility 0.2s ease-in-out';
                        tagList.style.opacity = '1';
                        tagList.style.visibility = 'visible';
                    });
                }
            });
        });
    } catch (error) {
        // console.log('initializeTagListDisplay 함수 실행 중 오류 발생:', error);
    }
}

// DOMContentLoaded 대신 더 빠른 실행을 위해 즉시 실행
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeTagListDisplay);
} else {
    initializeTagListDisplay();
}   
