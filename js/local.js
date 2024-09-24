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
    
 
});
