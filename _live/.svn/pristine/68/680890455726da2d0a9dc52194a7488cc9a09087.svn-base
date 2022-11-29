<?php if($type == '3'):?>
        </div>
        <!-- //sub_login -->
        <!-- //container -->
        <div id="footer" class="type2">            
            <div class="notice">
                <ul class="terms_list">
					<li><a href="/member/terms">이용약관</a></li>
					<li><a href="/member/policy">개인정보처리방침</a></li>
					<li><a href="https://www.datahero.co.kr" target="_blank">회사소개</a></li>
                </ul>
                <a href="https://www.datahero.co.kr" target="_blank">ⓒ (주)데이터히어로</a>
            </div>
            <!-- //notice -->			
<?php else :?>			
		</div>
        <!-- //container -->
        <div id="footer"<?=($is_main===FALSE && $type != '4') ? ' class="type_sub"':''?>>

			<?php if($type == '4') :?>
				<div class="f_menu">
					<ul class="set">                    
						<li><a href="<?=($this->session->userdata('is_login')===TRUE) ? '/member/notice':'/member/login?ru='.urlencode('member/notice')?>">설정</a></li>
						<li><a href="/stock/alarm">공지/알림</a></li>
						<?php if($this->session->userdata('is_login')===TRUE):?>
						<li><a href="/member/logout">로그아웃</a></li>
						<?php else :?>
						<li><a href="/member/login?ru=<?=urlencode($_SERVER['REQUEST_URI'])?>">로그인</a></li>
						<?php endif;?>
						<li><a href="https://www.datahero.co.kr" target="_blank">회사소개</a></li>
					</ul>
					<ul class="terms">
						<li><a href="/member/terms">이용약관</a></li>
						<li><a href="/member/policy">개인정보처리방침</a></li>
						<li class="sns_link">
							<a href="https://www.instagram.com/_usstock" target="_blank" class="sns_instagram"><img src="/img/icon_instagram_Mm.png" alt="인스타그램"></a>                
							<a href="https://post.naver.com/dataheros" target="_blank" class="sns_naver"><img src="/img/icon_naver_Mm.png" alt="네이버포스트"></a>                                            
						</li>
					</ul>
				</div>
				<!-- //f_menu -->
			<?php else :?>
            <!-- 인증 -->
            <div class="certification">
                <ul>
                    <li><span>과학기술정보통신부</span><a href="http://www.datahero.co.kr/%eb%8d%b0%ec%9d%b4%ed%84%b0%ed%9e%88%ec%96%b4%eb%a1%9c-%ea%b3%bc%ea%b8%b0%ec%a0%95%ed%86%b5%eb%b6%80-2020-%eb%8d%b0%ec%9d%b4%ed%84%b0%ec%8a%a4%ed%83%80%ec%a6%88-%ec%84%a0%ec%a0%95/" title="데이터스타즈" target="_black"><img src="/img/datastars.png" alt="데이터스타즈"></a></li>
                    <li><span>벤처기업인증</span><a href="http://www.datahero.co.kr/%eb%8d%b0%ec%9d%b4%ed%84%b0%ed%9e%88%ec%96%b4%eb%a1%9c-%ea%b8%b0%ec%88%a0%eb%b3%b4%ec%a6%9d%ea%b8%b0%ea%b8%88-%eb%b2%a4%ec%b2%98%ea%b8%b0%ec%97%85-%ec%9d%b8%ec%a6%9d-%ed%9a%8d%eb%93%9d/" title="벤처인증" target="_black"><img src="/img/kobo_logo.png" alt="벤처인증"></a></li>
                </ul>
            </div>
            <!-- //인증 -->

            <div class="notice">
                <ul class="terms_list">
                    <li><a href="/member/terms">이용약관</a></li>
                    <li><a href="/member/policy">개인정보처리방침</a></li>
                    <li><a href="https://www.datahero.co.kr" target="_blank">회사소개</a></li>
                </ul>
				<?php if($is_main===TRUE) :?>
                <ul class="sns_list">
                    <li><a href="https://www.instagram.com/_usstock" target="_blank" class="sns_instagram"><img src="/img/icon_instagram_Mm.png" alt="인스타그램"> 인스타그램</a></li>
                    <li><a href="https://post.naver.com/dataheros" target="_blank" class="sns_naver"><img src="/img/icon_naver_Mm.png" alt="네이버포스트">네이버포스트</a></li>
                </ul>
				<?php endif;?>

                <div class="foot_info">
                    <div class="info_tel_box">
                        <p>
                            <span class="tel_num"><i></i>02-6225-2300</span>
                            <span class="sns_kakao"><a href="http://pf.kakao.com/_QDLHxb/chat" target="_blank"><img src="/img/sns_kakao_l.png" alt="카카오톡 문의하기"></a></span>
                        </p>
						<?php if($is_main===TRUE) :?>
						<span class="cs">평일 9:00~17:00(주말/공휴일 제외), 점심시간 11:20~12:20</span>
						<?php endif;?>
                    </div>
                    <!-- //info_tel_box -->
                    <p class="copyright"><a href="https://www.datahero.co.kr" target="_blank">ⓒ (주)데이터히어로</a><i></i>
                        <strong>대표자</strong> 김인중 <i></i> <strong>사업자등록번호 291-88-01393</strong> <i></i> 서울특별시 서초구 강남대로 311, 1021호</p>
                    <div class="service_info">
                        <p>본 서비스는 투자판단에 참고용으로만 사용하실 수 있으며, 모든 투자판단은 투자자 본인의 책임으로 당사는 그 결과에 대해 법적인 일체의 책임을 지지 않습니다.</p>
                        <p class="dataLink">data from <a href="https://www.quandl.com/" target="_blank">Quandl and Sharadar</a>
                        </p>
                    </div>
                </div>
                <!-- //foot_info -->
            </div>
            <!-- //notice -->
			<?php endif;?>
<?php endif;?>
        </div>
        <!-- //footer -->
    </div>
    <!-- //wrap -->
</body>

<!-- Modal popup -->
<div class="first_month_3300 md-modal md-effect-3" id="modal-3">
    <div class="md-content">
        <div id="setting" class="setting_area">
            <div class="pop_header">
                <a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse_w.png" alt="팝업닫기"></a>
                <div class="sub_top">
                    <h2 class="h2_title">초이스스탁US 프리미엄<span><strong>첫 달 3,000원</strong></span></h2>
                    <p class="period">하루 100원으로 투자의 즐거움을 경험하세요.</p>
                </div>
            </div>
            <!-- //pop_header -->
            <div class="pop_con">
                <table cellspacing="0" border="0" class="tableRanking type_compare">
                    <tbody>
                        <tr>
                            <th class="top_th"><span>초이스스탁US 프리미엄</span></th>
                            <th class="top_th"><span>무료</span></th>
                            <th class="top_th"><span>프리미엄</span></th>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>한글로 쉽고 편리한 <b>종목검색</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력&#47;적정주가 <b>종목진단</b></span></td>
                            <td><span>항목제한</span></td>
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
                            <td class="mid_td"><span>취향저격 종목추천 <b>종목캐치</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>나만의 <b>관심종목&#47;원스톱진단</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>종목발굴 <b>투자레시피&#47;탐구생활</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>관심&#47;추천&#47;업데이트 <b>알림</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
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
                            <th class="top_th"><span>무료</span></th>
                            <th class="top_th"><span>프리미엄</span></th>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>한글로 쉽고 편리한 <b>종목검색</b></span></td>
                            <td class="com_select"><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>투자매력&#47;적정주가 <b>종목진단</b></span></td>
                            <td><span>항목제한</span></td>
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
                            <td class="mid_td"><span>취향저격 종목추천 <b>종목캐치</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>나만의 <b>관심종목&#47;원스톱진단</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>종목발굴 <b>투자레시피&#47;탐구생활</b></span></td>
                            <td><span>항목제한</span></td>
                            <td class="com_select"><span></span></td>
                        </tr>
                        <tr>
                            <td class="mid_td"><span>관심&#47;추천&#47;업데이트 <b>알림</b></span></td>
                            <td><span></span></td>
                            <td class="com_select"><span></span></td>
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

<script>
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
                var prev_price = last_price[ticker] == null ? 0 : last_price[ticker];;
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
                                var price = info.last_price;

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    price = renderer(n.target, price, info);
                                }

                                // 깜빡이는 색깔 ff47474
                                n.target.stop().animate({'background-color':'#ddd'}, 500).html(price).animate({'background-color':'transparent'}, 500);
                            }
                            break;

                        case 'diff_rate' :
                            if(callback_resp[ticker] != null) {
                                var rate = info.diff_rate;

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    rate = renderer(n.target, rate, info);
                                }
                                n.target.html(rate);
                            }
                            break;

                        case 'diff_price' :
                            if(callback_resp[ticker] != null) {
                                var diff_price= info.diff_price;

                                if(n.target.data('render') != null) {
                                    eval('var renderer = '+n.target.data('render'));
                                    diff_price = renderer(n.target, diff_price, info);
                                }
                                n.target.html(diff_price);
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

</html>
