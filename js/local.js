$(document).ready(function () {

    $(document).ready(function () {
        var setpay_edt01 = $('.pay_edt_01');
        var setpay_edt02 = $('.pay_edt_02');
        var setpay_edt02_1 = $('.pay_edt_02_1');
        var setpay_edt02_2 = $('.pay_edt_02_2');
        var setcatch_edt01 = $('.catch_edt_01');
        var setcatch_edt02 = $('.catch_edt_02');
        var setcatch_edt03 = $('.catch_edt_03');
        var setcatch_edt03_2 = $('.catch_edt_03_2');
        var setcatch_edt03_3 = $('.catch_edt_03_3');
        var setterms_01 = $('.pay_terms_01');
        var setterms_02 = $('.pay_terms_02');
        var setterms_03 = $('.pay_terms_03');

        // Show Hide
        $('.clse_trigger').click(function () {
            setWindow.addClass('open');
            $('html, body').css("overflow", "hidden");
        });
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
    })

    // 기존결제가 있는 경우 : 월 정기결제(첫달 1,000원) 구독에 가입되어 있습니다.
    $('.v_signalStreng.globalStock .sub_payment .serviceStep .step_box .subscribe .dup_pay').on('click', function () {        
        $('body').css('overflow', 'hidden');
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.payment_cacl03').show().addClass('slideUp');        
    });
    // 기존결제가 있는 경우 : 기간결제(6개월) 구독에 가입되어 있습니다.
    $('.v_signalStreng.globalStock .sub_payment .serviceStep .step_box .subscribe .dup_pay2').on('click', function () {        
        $('body').css('overflow', 'hidden');
        $('.modal').hide().removeClass('slideUp');
        $('.blocker').show();
        $('.payment_cacl04').show().addClass('slideUp');        
    });

    // 관심종목 등록 팝업
    $('.attention_pop').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_reg_popup').show().addClass('slideUp'); // 원하는 모달 표시                        
        $('html, body').css("overflow", "hidden");
    });    
    // 관심종목 그룹 등록 2차 팝업
    $('.group_add_btn').on('click', function () {                          
        $('.modal').hide().removeClass('slideUp');                      
        $('.fav_group_reg_popup').show().addClass('slideUp'); // 그룹 추가 펍옵 표시
    });
    // fav_group_reg_popup 닫기 버튼 클릭 시
    $('.fav_group_reg_popup .clse, .fav_group_reg_popup .btn_save').on('click', function () {      
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('html, body').css("overflow", "hidden");        
        $('.fav_reg_popup').show().addClass('slideUp'); // 원하는 모달 표시                                  
    });

    
    // 관심종목 그룹 관리 툴팁 팝업
    $('.btn_manage_group').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_group_manage_popup').show().addClass('slideUp'); // 원하는 모달 표시        
        $('html, body').css("overflow", "hidden");
    });
    // 관심종목 그룹 수정 삭제 2차 팝업
    $('.group_reg_btn').on('click', function () {                          
        $('.modal').hide().removeClass('slideUp');                      
        $('.fav_group_del_popup').show().addClass('slideUp'); // 그룹 추가 펍옵 표시
    });
    // 관심그룹 수정,삭제
    $('fav_item_del_popup .btn_save').on('click', function () {      
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('html, body').css("overflow", "hidden");        
        $('.fav_group_manage_popup').show().addClass('slideUp'); // 원하는 모달 표시                                  
    });

    // 관심종목 그룹 관리 팝업
    // $('.btn_sort').on('click', function () {
    //     $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
    //     $('.blocker').show(); // 배경 블러 처리
    //     $('.fav_group_edit_popup').show().addClass('slideUp'); // 원하는 모달 표시        
    //     $('body').addClass('modal-open'); // 모달이 열릴 때 body에 클래스를 추가하여 스크롤을 방지
    // });
    // 관심종목 정렬 이동 팝업
    $('.att_wrap .btm_move').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_group_move_popup').show().addClass('slideUp'); // 원하는 모달 표시        
        $('html, body').css("overflow", "hidden");
    });
    $('.fav_group_del_popup .btn_del').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_group_com_popup').show().addClass('slideUp'); // 원하는 모달 표시        
        $('html, body').css("overflow", "hidden");
    });
    // 관심종목 그룹 이름 수정/삭제
    $('.fav_group_manage_popup .edit_btn').on('click', function () {
        $('.modal').hide().removeClass('slideUp'); // 다른 모달 숨기기
        $('.blocker').show(); // 배경 블러 처리
        $('.fav_group_del_popup').show().addClass('slideUp'); // 원하는 모달 표시        
        $('html, body').css("overflow", "hidden");
    });
    
    // 모달이 닫힐 때 body에서 'modal-open' 클래스를 제거하는 코드 추가
    $('.modal.att_pop .pop_header .clse, .blocker').on('click', function() {                
        $('html, body').css("overflow", "");
    });
    
    
});
