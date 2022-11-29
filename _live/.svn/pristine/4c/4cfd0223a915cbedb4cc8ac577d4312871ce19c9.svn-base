                <div class="sub_top view <?=$bmimg?>">
                    <div class="box_tabs">
                        <strong><?=$title?></strong>
                        <?=$content?>
						<!--초보도 벌 수 있는 투자의 정석<br>‘고배당주에 투자하라’-->
                    </div>
                    <!-- //box_tabs -->
                </div>
                <!-- //sub_top -->

                <div class="sub_mid recipe_view">
                    <p class="update_info">업데이트 <?=date('y.m/d', strtotime($up_date))?>, <?=$subtitle?></p>
                    <div class="recipe_area"  id="total_score_list">
						<?=$score_content_html?>
                    </div>
                    
                    <div class="btn_more">
                        <a href="javascript:;" onclick="view_more('<?=$type?>', this)"><i></i>더보기</a>
                    </div>

					<?php if($this->session->userdata('is_paid')===FALSE) :?>
					<div class="banner_prm">
						<span class="cho_prm"><i></i>초이스스탁US 프리미엄</span>
						<a href="javascript:fnLogin();" class="weeks_free">[ 첫 달 1,000원!]</a>
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

    $.get('/<?=X1?>_stock/ajax_get_recipe_list', {'type': type, 'page': type_page_map[type]}, function(res) {
        if($.trim(res).length) {
            $('#total_score_list').append(res);
        } else {
            $(obj).parent().hide();
        }
        is_loading = false;
    });
}
</script>
