        </div>
		<!-- //container -->
		<?php if($show_footer === true) :?>
        <div id="footer" class="f_main">
            <span class="f_title">미국주식창</span>
            <p class="f_terms">종목은 ㈜데이터히어로에서 제공되는 빅데이터 및 AI 시스템 기반으로 자동 추출됩니다. 본 서비스는 투자판단에 참고용으로만 사용하실 수 있으며, 모든 투자판단은 투자자 본인의 책임으로 당사는 그 결과에 대해 법적인 일체의 책임을 지지 않습니다.
            </p>
            <p class="dataLink">data from 데이터히어로 <a href="https://www.quandl.com/" target="_blank">Quandl and
                    Sharadar</a></p>
            <ul class="terms_list">
                <li><a href="http://sw.wowtv.co.kr/Policy/TermsOfService.html" target="_black">이용약관</a></li>
                <li><a href="http://sw.wowtv.co.kr/Policy/PrivacyPolicy.html" target="_black">개인정보처리방침</a></li>
            </ul>
            <p class="copyright">
                <strong>ⓒ (주)한국경제티브이</strong> <i></i> 대표이사 조주현 <i></i> 서울시 중구 청파로 463​ <i></i> 사업자등록번호 107-81-70183
                <i></i> 대표번호 02-6676-0000
            </p>
        </div>

        <!-- //footer -->
		<?php endif;?>     

    </div>
    <!-- //wrap -->
</body>
<?php if($show_footer === TRUE) :?>
<div class="first_month_3300 md-modal md-effect-3" id="modal-3">
<!--<div class="wowtv_55000 md-modal md-effect-3 md-show" id="modal-3">-->
    <div class="md-content">
        <div id="setting" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse_w.png" alt="팝업닫기"></a>
                <div class="sub_top">
                    <h2 class="h2_title">미국주식창 프리미엄<span><strong>첫 달 3,300원</strong></span></h2>
                    <p class="period">하루 100원으로 투자의 즐거움을 경험하세요.</p>
                </div>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <table cellspacing="0" border="0" class="tableRanking type_compare">
                    <tbody>
                        <tr>
                            <th class="top_th"><span>미국주식창 프리미엄</span></th>
                            <th class="top_th"><span>무료</span></th>
                            <th class="top_th"><span>프리미엄</span></th>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>한글로 쉽고 편리한 <b>종목검색</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>엄선된 <b>종목추천&#47;포트폴리오</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력+저평가+수급 <b>승부주</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력&#47;적정주가 <b>종목진단</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>                                                                                                
                        <tr>
                            <td class="mid_td"><span>핫이슈 <b>종목발굴 종목노트&#47;동영상</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>취향저격 종목추천 <b>투자레시피&#47;캐치</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>나만의 <b>관심종목&#47;원스톱진단</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>관심&#47;추천 실시간 종목리딩 <b>알림</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                    </tbody>
                </table>
            </div>
			<form name="pay_form" id="pay_form" method="post" action="https://stockwin.wowtv.co.kr/payment/information.asp">
				<input type="hidden" name="devk" value="<?=$this->session->userdata('user_key')?>">
				<input type="hidden" name="tab_no" value="28">
				<input type="hidden" name="apptype" value="<?=WT_APP_TYPE?>">
			</form>
            <div class="pop_btm">
                <div class="btnArea payBtn">
					<?php if($this->session->userdata('user_ostype') == 'I') :?>
                    <a href="/<?=WT?>_member/ios_pay" class="btn btn_save"><b>프리미엄</b> 가입하기<i></i></a>
					<?php else :?>
                    <a href="/<?=WT?>_member/and_pay" class="btn btn_save"><b>프리미엄</b> 가입하기<i></i></a>
                    <!--<a href="javascript:fnSinChung();" class="btn btn_save"><b>프리미엄</b> 가입하기<i></i></a>-->
					<?php endif;?>
                </div>
                <ul class="link_menu">
                    <li><a href="/<?=WT?>_main/service">프리미엄 자세히보기</a></li>                    
                </ul>
            </div>
        </div>
    </div>
</div>
<?php endif;?>
<div class="md-overlay"></div><!-- the overlay element -->

<script>
function formatNumber(num) {
	return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
</script>

<?php if($this->session->userdata('user_ostype') == 'I') :?>
<script type="text/javascript" src="/js/common_ios_pay.js?v=<?=filemtime(APP_PATH.'/js/common_ios_pay.js')?>"></script>
<?php endif;?>

<?php /*
<script>
function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

var CurrentPriceSyncer = function() {
    var sync_sets = {};
    var last_price = {};

    var tickers = [];
    var current_info_map = [];

    this.init = function() {
        $('.sync_price').each((idx, el) => {
            var node = $(el);
            if(node.data('ticker') == null) return;
            cps.add(node.data('ticker'), node, 'price');
        });
        $('.sync_diff_rate').each((idx, el) => {
            var node = $(el);
            if(node.data('ticker') == null) return;
            cps.add(node.data('ticker'), node, 'diff_rate');
        });
        $('.sync_diff_price').each((idx, el) => {
            var node = $(el);
            if(node.data('ticker') == null) return;
            cps.add(node.data('ticker'), node, 'diff_price');
        });
    }

    this.add = function(ticker, el, value_type, callback) {
        value_type = value_type.toLowerCase();
        if($.inArray(value_type, ['price', 'diff_rate', 'diff_price', 'custom']) < 0) {
            return false;
        }
        if(sync_sets[ticker] == null) {
            tickers.push(ticker);
            sync_sets[ticker] = [];
        }
        sync_sets[ticker].push({
            target: el,
            type: value_type,
            cb: callback
        });
    }

    this.run = function(callback) {
        if(tickers.length <= 0) return;


        $.post('/api/getTickerPrice/'+(tickers.join('_')), {}, function(resp) {
            //console.log(resp);
            var change_flag = false;
            var callback_resp = {}; // 이번 틱에 변경 내역 있는 티커들만 담는다.
            for(var ticker in resp) {
                var info = resp[ticker];
                var nodes = sync_sets[ticker];
                var prev_price = last_price[ticker] == null ? 0 : last_price[ticker];
				prev_price = prev_price;
                if(last_price[ticker] == null || last_price[ticker] != info.last_price) {
                    change_flag = true;
                    if(last_price[ticker] != null) {
                        prev_price = last_price[ticker];
                    }
                    last_price[ticker] = info.last_price;
                    callback_resp[ticker] = info;
                }
                for(var i in nodes) {
                    var n = nodes[i];
                    
                    switch(n.type) {
                        case 'price' :
                            if(last_price[ticker] != prev_price) {
                                var price = formatNumber(info.last_price);

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    price = renderer(n.target, price, info);
                                }

                                // 깜빡이는 색깔 ff47474
                                n.target.stop().animate({'background-color':'#fbceb1'}, 500).html(price).animate({'background-color':'transparent'}, 500);
                            }
                            break;

                        case 'diff_rate' :
                            if(callback_resp[ticker] != null) {
                                var rate = info.diff_rate;

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    rate = renderer(n.target, rate, info);
                                }
                                //n.target.html(rate);
                                n.target.stop().animate({'background-color':'#fbceb1'}, 500).html(rate).animate({'background-color':'transparent'}, 500);
                            }
                            break;

                        case 'diff_price' :
                            if(callback_resp[ticker] != null) {
                                var diff_price= info.diff_price;

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    diff_price = renderer(n.target, diff_price, info);
                                }
                                //n.target.html(diff_price);
                                n.target.stop().animate({'background-color':'#fbceb1'}, 500).html(diff_price).animate({'background-color':'transparent'}, 500);
                            }
                            break;

                        case 'custom' :
                            break;
                    }
                }
            }
            if(change_flag) {
                callback(callback_resp, sync_sets);
            }
        }, 'json');
    }

    // Getters
    this.getSyncSets = function() {
        // 실시간 정보 연동 설정한 태그 정보 리턴
        return sync_sets;
    }
    this.getTickers = function() {
        // 실시간 정보 연동 설정한 종목 티커코드 리스트 리턴
        return tickers;
    }
}
var cps = new CurrentPriceSyncer();
cps.init();

$(function() {
    // 실시간 정보 싱커가 1개 이상 존재하면 구동!
    if(cps.getTickers().length > 0) {
        var current_info_callback = (current_data, nodes) => {
            // 실시간 연동 부 렌터더링 모두 마친 후 변경 있는 종목 정보만 콜백으로 정보 줌.
            // 이곳을 클래스 안으로 넣고 셋터를 구현하여
            // 페이지별 별도 처리부를 구현 가능함.

            //console.log(current_data);
            //console.log(nodes);
        };
        cps.run(current_info_callback);
        setInterval(() => {cps.run(current_info_callback);}, 5000);
    }
});
</script>
*/?>
</html>