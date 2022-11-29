            <!-- 주요 콘텐츠 -->
			<?php include_once INC_PATH.'/find_submenu.php'; ?>

			<div class="sub_top">
                <div class="">
                    <div class="txt_box">
                        <p class="txt">
                            미국주식 6,000여개 기업에 대한 투자매력도 순위를 제공합니다. 종목진단 점수가 높을 수록 우량 기업입니다.
                        </p>
                    </div>
                    <!-- //txt_box -->
                </div> <!-- //best_research -->
            </div>
            <!-- //sub_top -->

            <div class="sub_mid attract_sub">
                <div class="set">
                    <ul>
                        <li class=""><strong>시가총액</strong><?=$marketcap_map[$marketcap]?></li>
                        <li class=""><?=$netincome_map[$netincome]?></li>
                    </ul>
					<a href="#setting" data-modal="modal-3" class="md-trigger btn_schSet button" ><i></i>정렬</a>
               </div>

                <p class="table_guide">*항목 점수/시가총액 순 정렬</p>
                <table cellspacing="0" border="1" class="tableRanking attract_table">
                    <colgroup>
                        <col width="80px">
                        <col width="">
                        <col width="">
                        <col width="">
                        <col width="">
                        <col width="">
                        <col width="">
                    </colgroup>
                    <tbody id="attractive_list">
                        <tr>
                            <th class="">
                                <span class="txt_guide"><img src="/img/txt_guide.png" alt="가이드보기"></span>
                                <!-- 투자의견, 투자매력 가이드 레이어 -->
                                 <div class="guide_box _hide">
                                    <span class="clse">닫기</span>                          
                                    <p class="txt"><strong>종목진단 점수</strong>는 해당 종목의 우량주 여부를 판단하는데 도움을 드립니다.</p>
                                    <p class="txt">10년 이상의 금융 빅데이터에서 우량주 발굴을 위해 22개 요인(Factor)을 종목별로 분석하고, 동종업종내 경쟁사와 비교합니다.</p>
                                    <ul>
                                        <li class="list_txt">종목진단 점수는 높을수록 매력적인 기업이며, 65점(상위 20%) 이상이면 우량 기업으로 판단합니다.</li>
                                        <li class="list_txt">종목진단 세부 항목인 독점력, 수익성, 안전성, 현금창출력, 미래성장성으로 별점(★) 5점 만점에 3점 이상이면 각 항목을 통과한 것으로 판단합니다.</li>
                                        <li class="list_txt">세부 항목 평가에서 별점 0~1점을 받았다면 위험 요인으로, 투자 판단시 유의해서 봐야 합니다.</li>                                        
                                        <li class="list_txt">우량주 여부를 판단한 후에는 적정주가로 저평가 여부를 확인하세요.</li>
                                    </ul>
                                </div>
                                <!-- //guide_box -->
                            </th>
                            <th class="">종합<?=($sort == 'total') ? '<i></i>' : ''?></th>
                            <th class="">미래<br>성장성<?=($sort == 'future') ? '<i></i>' : ''?></th>
                            <th class="">사업<br>독점력<?=($sort == 'moat') ? '<i></i>' : ''?></th>
                            <th class="">재무<br>안전성<?=($sort == 'safety') ? '<i></i>' : ''?></th>
                            <th class="">수익성<?=($sort == 'growth') ? '<i></i>' : ''?></th>
                            <th class="">현금<br>창출력<?=($sort == 'cashflow') ? '<i></i>' : ''?></th>
                        </tr>
                        <?=$content_html?>
                    </tbody>
                </table>

				<?php if($this->session->userdata('is_paid')===TRUE) :?>
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>
                <!-- //btn_more -->

                <script>
                var page = 1;
                var is_loading = false;
                function view_more() {
                    if(is_loading) {
                        return;
                    }
                    is_loading = true;
                    
                    page += 1;

                    var url = '/attractiveness/ajax_get_attractive_list';
                    if(window.location.search.length > 0) { 
                        url += window.location.search + '&page=' + page;
                    } else {
                        url += '?page=' + page;
                    }
                    $.get(url, {}, function(res) {
                        if($.trim(res).length) {
                            $('#attractive_list').append(res);
                        } else {
                            $('.btn_more').hide();
                        }
                        is_loading = false;
                    });
                }
                </script>
				<?php else :?>
                <?php $move='Y'; include_once INC_PATH.'/premium_banner.php'; ?>
				<?php endif;?>
            </div> <!-- //sub_mid -->

			<?php if($this->session->userdata('is_paid')===FALSE) :?>
				<?php if(!strstr($_SERVER['HTTP_USER_AGENT'], 'choicestock')) :?>
					<!-- 구글 에드센스 표 하단 -->
					<div style="margin:15px 15px 0; text-align: center;">                
						<!-- 디스플레이(사각) -->
						<ins class="adsbygoogle"
							style="display:block"
							data-ad-client="ca-pub-6864430327621783"
							data-ad-slot="3945317009"
							data-ad-format="auto"
							data-full-width-responsive="true"></ins>
						<script>
							(adsbygoogle = window.adsbygoogle || []).push({});
						</script>
					</div>
					<!-- //구글 에드센스 -->
				<?php endif;?>
			<?php endif;?>

            <!-- Modal popup -->
            <!-- 전종목 투자매력도 -->
			<div class="md-modal md-effect-3" id="modal-3">
				<div class="md-content">

                <div id="setting" class="setting_area">
                    <div class="pop_header">
                        <a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
                        <h1 class="pop_title">정렬</h1>
                    </div>
                    <!-- //pop_header -->                    

                    <div class="pop_con">

                        <form id="search_form" action="/attractiveness/attractive" method="GET">
                            <input type="hidden" name="sort" value="<?=$sort?>" />
                            <table cellspacing="0" border="1" class="tableRanking attract_table">
                                <colgroup>
                                    <col width="65%">
                                    <col width="">
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th><span>시가총액</span></th>
                                        <th><span>순이익(연환산)</span></th>
                                    </tr>
                                    <?php 
                                        $idx = 0;
                                        foreach($marketcap_map as $mk => $mv) : 
                                            $netincome_data = array_slice($netincome_map, $idx, 1);
                                    ?>
                                    <tr>
                                        <td>
                                            <input name="marketcap" type="radio" id="amount<?=$idx?>" value="<?=$mk?>" class="input_radio" <?=($mk == $marketcap) ? 'checked' : ''?>>
                                            <label for="amount<?=$idx?>"><?=$mv?></label>
                                        </td>
                                        <?php foreach($netincome_data as $nk => $nv) : ?>
                                        <td>
                                            <input name="netincome" type="radio" id="profit<?=$idx?>" value="<?=$nk?>" class="input_radio" <?=($nk == $netincome) ? 'checked' : ''?>>
                                            <label for="profit<?=$idx?>"><?=$nv?></label>
                                        </td>
                                        <?php endforeach; ?>
                                    </tr>
                                    <?php $idx++; endforeach; ?>
                                </tbody>
                            </table>

                            <div class="pop_footer">
                            <span class="title">정렬</span>
                                <ul class="sort">
                                    <?php foreach($sort_map as $key => $val) : ?>
                                    <li class="<?=($key == $sort) ? 'active' : ''?>" data-id="<?=$key?>"><a href="javascript:;"><?=$val?></a></li>
                                    <?php endforeach; ?>
                                </ul>
                                <div class="btnArea edtBtn">
                                    <a href="javascript:;" class="btn btn_save">확인</a>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
                </div>
            </div>
            <!-- //setting_pop -->
		    <div class="md-overlay"></div><!-- the overlay element -->
<script>
$(function() {
    $('ul.sort li').on('click', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        $('#search_form').find('[name="sort"]').val($(this).data('id'));
    });
    $('.btn_save').on('click', function() {
        $('#search_form').submit();
    });
});
</script>           