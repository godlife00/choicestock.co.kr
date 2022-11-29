                <div class="sub_top view <?=$bmimg?>">
                    <div class="box_tabs">
                        <strong><?=$title?></strong>
                        <?=$content?>
						<!--초보도 벌 수 있는 투자의 정석<br>‘고배당주에 투자하라’-->
                    </div>
                    <!-- //box_tabs -->
                </div>
                <!-- //sub_top -->

				<?php if($this->session->userdata('is_paid')===FALSE) :?>
				<!-- 구글 에드센스 리스트 상단 -->
				<div style="margin:20px 15px 0; text-align: center;">                
					<!-- 디스플레이(수평) -->
					<ins class="adsbygoogle resize_width_AD"
						style="display:inline-block"
						data-ad-client="ca-pub-6864430327621783"
						data-ad-slot="9421426429"></ins>
					<script>
					window.onload = function() {
						(adsbygoogle = window.adsbygoogle || []).push({});
					}                    
					</script>
				</div>
				<!-- //구글 에드센스 -->
				<?php endif;?>

                <div class="sub_mid recipe_view">
                    <p class="update_info">업데이트 <?=date('y.m/d', strtotime($up_date))?>, <?=$subtitle?></p>
                    <div class="recipe_area"  id="total_score_list">
						<?=$score_content_html?>
                    </div>
                    
                    <div class="btn_more">
                        <a href="javascript:;" onclick="view_more('<?=$type?>', this)"><i></i>더보기</a>
                    </div>

					<?php if($this->session->userdata('is_paid')===FALSE || $this->session->userdata('free_notice') != '') :?>
					<div class="banner_prm">
						<span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
						<a href="/main/service_free" class="weeks_free">[ 첫 달 3,000원!]</a>
					</div>
					<?php endif;?>
                </div>
                <!-- //sub_mid -->


<script>
var is_loading = false;
var type_page_map = {
    'dividend': 1,
    'growth': 1,
    'moat': 1,
    'total_score': 1,
    'earnings': 1,
};
function view_more(type, obj) {
    if(is_loading) {
        return;
    }
    is_loading = true;
    type_page_map[type] += 1;

    $.get('/stock/ajax_get_recipe_list', {'type': type, 'page': type_page_map[type]}, function(res) {
        if($.trim(res).length) {
            $('#total_score_list').append(res);
        } else {
            $(obj).parent().hide();
        }
        is_loading = false;
    });
}
</script>
