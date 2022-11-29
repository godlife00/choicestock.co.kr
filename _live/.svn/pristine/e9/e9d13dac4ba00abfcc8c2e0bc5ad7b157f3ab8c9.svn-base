<script type="text/javascript">
<!--
var pre_price0 = <?=$wtsise_list[0]['last_price']?>;
var pre_price1 = <?=$wtsise_list[1]['last_price']?>;
var pre_price2 = <?=$wtsise_list[2]['last_price']?>;
var pre_price3 = <?=$wtsise_list[3]['last_price']?>;

function ajax_wtsise() {
	$.ajax({
        url: '/wt_main/getMarketPrice',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
			if(data[0]['status'] == '0' && data[0]['last_price'] != pre_price0) {
				var updown = 'decrease';
				$('#last_price0').html(formatNumber(data[0]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price0').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				if(data[0]['diff_price']>0) updown = 'increase';
				$('#diff0').attr("class", updown);
				var diff_price = data[0]['diff_price'].split('.');
				$('#diff0').html(diff_price[0]+'.<b>'+diff_price[1]+'</b><span>'+data[0]['diff_rate']+'<b>%</b></span>');
				$('#diff0').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				pre_price0 = data[0]['last_price'];
			}
			if(data[1]['status'] == '0' && data[1]['last_price'] != pre_price1) {
				var updown = 'decrease';
				$('#last_price1').html(formatNumber(data[1]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price1').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				if(data[1]['diff_price']>0) updown = 'increase';
				$('#diff1').attr("class", updown);
				var diff_price = data[1]['diff_price'].split('.');
				$('#diff1').html(diff_price[0]+'.<b>'+diff_price[1]+'</b><span>'+data[1]['diff_rate']+'<b>%</b></span>');
				$('#diff1').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				pre_price1 = data[1]['last_price'];
			}
			if(data[2]['status'] == '0' && data[2]['last_price'] != pre_price2) {
				var updown = 'decrease';
				$('#last_price2').html(formatNumber(data[2]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price2').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				if(data[2]['diff_price']>0) updown = 'increase';
				$('#diff2').attr("class", updown);
				var diff_price = data[2]['diff_price'].split('.');
				$('#diff2').html(diff_price[0]+'.<b>'+diff_price[1]+'</b><span>'+data[2]['diff_rate']+'<b>%</b></span>');
				$('#diff2').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				pre_price2 = data[2]['last_price'];
			}
			if(data[3]['status'] == '0' && data[3]['last_price'] != pre_price3) {
				var updown = 'decrease';
				$('#last_price3').html(formatNumber(data[3]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price3').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				if(data[3]['diff_price']>0) updown = 'increase';
				$('#diff3').attr("class", updown);
				var diff_price = data[3]['diff_price'].split('.');
				$('#diff3').html(diff_price[0]+'.<b>'+diff_price[1]+'</b><span>'+data[3]['diff_rate']+'<b>%</b></span>');
				$('#diff3').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				pre_price3 = data[3]['last_price'];
			}
		}
    });
};
 
var timer = window.setInterval(function () { ajax_wtsise(); }, 5000);
//-->
</script>            
			<div class="main_mid miju_nasdaq">
				<?php foreach($wtsise_list as $key=>$wtsise):?>
                <ul class="list">
                    <li class="title"><?=$wtsise_namelist[$key]?></li>
                    <ul class="detail">
                        <li class="num" id='last_price<?=$key?>'><?=$this->common->set_pricepoint($wtsise['last_price'], '1');?></li>
                        <li class="per">
                            <span class="<?=($wtsise['diff_price']>0) ? 'increase':'decrease'?>" id='diff<?=$key?>'> <?=$this->common->set_pricepoint($wtsise['diff_price'], '1');?> <span><?=$wtsise['diff_rate']?><b>%</b></span></span>
                        </li>
                    </ul>
                </ul>
				<?php endforeach;?>
            </div>

            <div class="main_mid briefing_note">
                <div class="swiper-container mainbriefingSwiper">
                    <div class="swiper-wrapper">
						<?php if($this->session->userdata('is_paid')===TRUE ) :?>
                        <div class="swiper-slide">
                            <ul>
                                <li class="txt"><a href="/<?=WT?>_stock/research_view/<?=$bn1_id?>" class="title"><?=$bn1_txt?></a></li>
                                <li class="txt"><a href="/<?=WT?>_stock/research_view/<?=$note_list[0]['e_id']?>" class="title"><?=$note_list[0]['e_title']?></a>
                            </ul>
                        </div>
                        <div class="swiper-slide">
                            <ul>
                                <li class="txt"><a href="/<?=WT?>_stock/research_view/<?=$note_list[1]['e_id']?>" class="title"><?=$note_list[1]['e_title']?></a>
                                <li class="txt"><a href="/<?=WT?>_stock/research_view/<?=$note_list[2]['e_id']?>" class="title"><?=$note_list[2]['e_title']?></a>
                            </ul>
                        </div>
						<?php else :?>
                        <div class="swiper-slide">
                            <ul>
                                <li class="txt"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=$bn1_txt?></a></li>
                                <li class="txt"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=$note_list[0]['e_title']?></a>
                            </ul>
                        </div>
                        <div class="swiper-slide">
                            <ul>
                                <li class="txt"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=$note_list[1]['e_title']?></a>
                                <li class="txt"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=$note_list[2]['e_title']?></a>
                            </ul>
                        </div>
						<?php endif;?>
                    </div>
                </div>
            </div>