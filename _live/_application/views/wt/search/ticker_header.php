<?php if($part_page != 'et') :?>

<?php if($is_open === true):?>
<script type="text/javascript">
<!--
var pre_price = <?=$ticker['tkr_close']?>;
function ajax_wtsise() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$ticker['tkr_ticker']?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
			if(data[0]['status'] == '0' && data[0]['last_price'] != pre_price) {
				var updown = 'decrease';
				var sign1 = '';
				var sign2 = '';

				var price_date = data[0]['updated_at'];
				price_date = price_date.substring(2, 4)+'.'+price_date.substring(4, 6)+'/'+price_date.substring(6, 8)+' '+price_date.substring(8, 10)+':'+price_date.substring(10, 12);
				$('#last_price').html(formatNumber(data[0]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				<?php if(isset($is_fairvalue) && $is_fairvalue === true) :?>
				$('#last_price_fv').html(formatNumber(data[0]['last_price']).replace('.', '.<b>')+'</b>');
				$('#last_price_fv').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				<?php endif;?>
				if(data[0]['diff_price']>0) { 
					updown = 'increase';
					sign1 = '+ ';
					sign2 = '+';
				}
				$('#diff').attr("class", updown);
				var diff_price = data[0]['diff_price'].split('.');

				$('#diff').html(sign1+diff_price[0]+'.<b>'+diff_price[1]+'</b> <span>('+sign2+data[0]['diff_rate']+'<b>%</b>)</span>');
				$('#diff').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				
				$('#price_date').html(price_date+' USD (​15분 지연시세)');				
				$('#price_date').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
				
				pre_price = data[0]['last_price'];
			}
		}
    });
};
 
var timer = window.setInterval(function () { ajax_wtsise(); }, 5000);
//-->
</script> 
<?php endif;?>

            <!-- 주요 콘텐츠 -->
            <div class="search_top">
                <div class="data_area">
                    <h2 class="title"><a href="/<?=WT?>_search/summary/<?=$ticker['tkr_ticker']?>"><?=($sec_ticker != '' && $pri_ticker != '') ? $pri_ticker_name:$ticker['tkr_name']?></a></h2>
                    <ul class="info">
                        <li class="sum"><span class="eng"><?=$ticker['tkr_ticker']?></span> </li>
                    </ul>
					<ul class="info_icon">
						<li><?=$ticker['tkr_exchange']?></li>
						<?php if($is_snp500 === true) : ?>
						<li><a href="javascript:;">S&P500</a></li>
						<?php endif; ?>
					</ul>
					<!-- //info_icon -->

					<ul class="detail">
                        <li class="num" id='last_price'>
                            <span><?=$this->common->set_pricepoint(number_format($ticker['tkr_close'], 2), '1');?></span>
                        </li>
                        <li class="per">
                            <span class="<?=$ticker['tkr_rate'] >= 0 ? 'increase' : 'decrease'?>" id='diff'><?=$ticker['tkr_diff_str']?> <span>(<?=$this->common->set_pricepoint($ticker['tkr_rate_str'], '2')?>)</span></span>
                        </li>

						<?php if($is_open === true):?>
						<li class="day" id='price_date'><?=($ticker['tkr_status'] == '0') ? date('y.m/d H:i', strtotime($ticker['tkr_lastpricedate'])) : date('y.m/d', strtotime($ticker['tkr_lastpricedate']))?>, USD<?=($ticker['tkr_status'] == '0') ? ' (​15분 지연시세)':''?></li>
						<?php else :?>
	                    <li class="day" id='price_date'><?php if(isset($ticker['tkr_lastpricedate'])&&$ticker['tkr_lastpricedate']) echo date('y.m/d', strtotime($ticker['tkr_lastpricedate'])).', ';?> USD</li>
						<?php endif;?>
                    </ul>

                    <div class="go_page<?=($is_recom_ticker) ? '':' only'?>">
					<i class="attention<?=($myitem['mi_like']=='Y') ? ' on':''?>" id="catch_icon_one" onClick="javascript:fnMyitem('<?=$ticker['tkr_ticker']?>', '<?=urlencode(str_replace('/index.php/', '', $_SERVER["PHP_SELF"]));?>', 'Y', 'one');"></i>
                    <?php if($is_recom_ticker) : ?>
                        <a href="<?=$recom_link?>"><span class="quarter recom">추천</span></a>
                        <a href="<?=$recom_link?>" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
                    <?php endif ; ?>
                    </div>

                </div>
                <!-- //data_area -->
                <div class="attention_box">
                    <ul>
                        <li class="attention" id="catch_icon_one_sub"><i></i><strong id='catch_count_one'><?=number_format($myitem['total_count'])?></strong>명의 관심</li>
                    </ul>
					<?php 
					$slide = '';
					if(isset($exdate) && $exdate != '' && isset($report_date['sf1_lastupdated']) && $report_date['sf1_lastupdated'] != '') :
						$slide = ' class="swiper-slide"';
					endif;
					?>
					<div class="lately_update">
                        <div class="swiper-container lately_swiper">
                            <div class="swiper-wrapper">
                                <?php if(isset($exdate) && $exdate != '') :?>
								<div<?=$slide?>>
                                    <p class="game_allo">최근 배당락일 <span><?=date('y. m/d', strtotime($exdate))?></span></p>
                                </div>
								<?php endif;?>
                                <?php if(isset($report_date['sf1_lastupdated']) && $report_date['sf1_lastupdated'] != '') :?>
                                <div<?=$slide?>>
                                    <p class="game_allo">최근 실적발표 <span><?=date('y. m/d', strtotime($report_date['sf1_lastupdated']))?></span></p>
                                </div>
								<?php endif;?>
                            </div>
                        </div>
                    </div>
                    <!-- //lately_update -->
                </div>
            </div>
            <!-- //sub_top -->
<?php endif;?>
<?php if($sec_ticker=='' && $pri_ticker=='') :?>
            <div class="sub_mid tabs_area">
				<?php if($part_page == 'et') :?>
				<?php else :?>
                <ul class="tabs_5<?=($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE)? '':' prm_tabs'?>">
                    <?php
                    $search_tabs = array(
                        'summary'    => '개요',
                        'invest_charm' => '종목진단',
                        'financials' => '재무',
                        //'news'     => '뉴스',
                        'dividend'     => '배당',
                        'competitor' => '경쟁사',
                    );
                    foreach($search_tabs as $seg => $tab_tit) : 
                        $tab_active = ($current_tab == $seg) ? 'active' : '';
                    ?>
						<?php if($this->session->userdata('is_paid')===FALSE && $open_ticker===false && ($seg == 'news' || $seg == 'dividend' || $seg == 'competitor')) : ?>
						<li class="<?=$tab_active?>"><a href="#" data-modal="modal-3" class="box btn_free md-trigger"><!--<a href="javascript:alert('서비스 신청 후 이용하실 수 있습니다.');">--><?=$tab_tit?></a></li>
						<?php else :?>
						<li class="<?=$tab_active?>"><a href="/<?=WT?>_search/<?=$seg?>/<?=$ticker_code?>"><?=$tab_tit?></a></li>
						<?php endif;?>					
					<?php endforeach; ?>
                </ul>
                <!-- //tabs_5 -->
				<?php endif;?>
			</div>

			<div class="sub_mid tabs_area bg_fff">
        <?php if($current_tab == 'invest_charm') : // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>
				<?php if($part_page == 'et') :?>
				<?php else :?>
				<ul class="tabs_3 tabs_depth2<?=($this->session->userdata('is_paid')===TRUE) ? '':' prm_tabs'?>">
                    <li class="<?=$current_subtab=='invest_charm' ? 'active' : ''?>"><a href="/<?=WT?>_search/invest_charm/<?=$ticker_code?>">투자매력</a></li>
                    <li class="<?=$current_subtab=='fairvalue' ? 'active' : ''?>">
					<?php if($this->session->userdata('is_paid')===TRUE || $open_ticker===TRUE):?>
					<a href="/<?=WT?>_search/fairvalue/<?=$ticker_code?>">
					<?php else :?>
					<a href="#" data-modal="modal-3" class="box btn_free md-trigger">
					<?php endif;?>
					적정주가</a></li>
				</ul>
				<?php endif;?>

		<?php elseif($current_tab == 'financials') :?>
                <ul class="tabs_3 tabs_depth2">
                    <li class="<?=$current_subtab=='financials' ? 'active' : ''?>"><a href="/<?=WT?>_search/financials/<?=$ticker_code?>">재무제표</a></li>
					<li class="<?=$current_subtab=='finance_chart' ? 'active' : ''?>"><a href="/<?=WT?>_search/finance_chart/<?=$ticker_code?>">재무차트</a></li>
                    <li class="<?=$current_subtab=='invest' ? 'active' : ''?>"><a href="/<?=WT?>_search/invest/<?=$ticker_code?>">투자지표</a></li>
                </ul>
        <?php endif; // 종목진단은 내부 텝 3개 공통 상단을 여기서 그려줌 ?>

<?php endif; ?>

<?php 
	$eugene_code = '';
	if($ticker['tkr_exchange'] == 'NYSE') $eugene_code = '0321'.$ticker_code;
	else if($ticker['tkr_exchange'] == 'NASDAQ') $eugene_code = '0537'.$ticker_code;
	else if($ticker['tkr_exchange'] == 'NYSEMKT') $eugene_code = '0066'.$ticker_code;
?>
<?php //if($eugene_code != '') :?>
	<div class="purchase_area">
        <a href="javascript:;" class="btn_purchase"><i></i>주문<span>하기</span></a>
    </div>
    <!-- //purchase_area -->
<?php /*
	<div class="purchase_wrapper">
        <div class="box">
            <div class="head">
                <h1 class="logo">주문 증권사 연결</h1>
                <a class="btn-close" href="javascript:;"><img src="/img/purchase_clse.svg" alt="닫기"></a>
            </div>
            <div class="content">                
                <ul>
                    <li>
						<!--<a class="btn-close" href="https://play.google.com/store/apps/details?id=com.miraeasset.global" target="_blank">-->
						<a class="btn-close" href="intent://content?menuId=wld.stock.quote#Intent;scheme=miraeassetGlobal;package=com.miraeasset.global;end" target="_blank">
                            <span><img src="/img/wowtv/purchase_logo_01.svg" alt="미래에셋증권"></span>
                            <span class="name">미래에셋증권</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
*/?>

<?php
/*
안녕하세요. 유진투자증권 이유리입니다.

아래 문의주신 사항과 관련하여 스키마 전달드립니다.

안드로이드(해외주식주문)
Intent://eugenesmartchampion2?openscreen=1611opendata=0537MSFT^1#Intent;scheme=com.eugenefn.smartchampion2;package=com.eugenefn.smartchampion2;end

*주문화면구분은 아래와 같습니다
매수주문 : 1, 매도주문 : 2

*거래소코드는 다음과 같습니다
0104 : 홍콩
0215 : 중국(상해)
0214 : 중국(심천)
0321 : 미국(뉴욕)
0537 : 미국(나스닥)
0066 : 미국(아멕스)

*심볼ID - 당사는 연합인포맥스의 종목정보를 사용하고 있습니다 (ex> 애플 : AAPL)

안드로이드(해외주식현재가)

Intent://eugenesmartchampion2?openscreen=1611opendata=0537MSFT^1#Intent;scheme=com.eugenefn.smartchampion2;package=com.eugenefn.smartchampion2;end
Intent://eugenesmartchampion2?openscreen=1601opendata=0537MSFT^1#Intent;scheme=com.eugenefn.smartchampion2;package=com.eugenefn.smartchampion2;end
*/
?>
	<!--<div class="purchase_wrapper open_temp" style="display: none;">-->
	<div class="purchase_wrapper">
        <div class="bg_gray"></div>
        <div class="box">
            <div class="head">
                <h1 class="logo">주문 증권사 연결</h1>
                <a class="btn-close" href="javascript:;"><img src="/img/purchase_clse.svg" alt="닫기"></a>
            </div>
            <div class="content">
                <ul id='stock_list'>
					<?php if($this->session->userdata('user_stock') > 0) :?>
                    <li class="active">
                        <a href="javascript:fnGlobalAppOpen('<?=$this->session->userdata('user_stock');?>', '<?=$applist[$this->session->userdata('user_stock')]['url']?>');">
                            <span><img src="/img/wowtv/logo_<?=$applist[$this->session->userdata('user_stock')]['img']?>.svg"></span>
                        </a>
                    </li>
					<?php endif;?>

					<?php foreach($applist as $key=>$app) :?>
					<?php if($key==0 || $key == $this->session->userdata('user_stock')) continue;?>
					<?php if($key==9) $app['url'] = str_replace('#CODE#', $eugene_code, $app['url']);?>
                    <li>
                        <a href="javascript:fnGlobalAppOpen('<?=$key?>', '<?=$app['url']?>');">
                            <span><img src="/img/wowtv/logo_<?=$app['img']?>.svg"></span>
                        </a>
                    </li>
					<?php endforeach;?>
                </ul>
            </div>
        </div>
    </div>
<?php //endif;?>
<?php //javascript:fn_appExcute('https://play.google.com/store/apps/details?id=com.miraeasset.global','wld.stock.quote','gbl','com.miraeasset.global','miraeassetGlobal'); appCancelPopup();?>
<script type="text/javascript">
<!--
function fnGlobalAppOpen(comp, url) {
	url = url || '';
	href = '/<?=WT?>_member/setStock?comp='+comp;
	var arr = Array(); 
	<?php foreach($applist as $key=>$app):?>
	<?php if($key==9) $app['url'] = str_replace('#CODE#', $eugene_code, $app['url']);?>
		arr[<?=$key?>] = "<li><a href=\"javascript:fnGlobalAppOpen('<?=$key?>', '<?=$app['url']?>');\"><span><img src=\"/img/wowtv/logo_<?=$app['img']?>.svg\"></span></a></li>";
	<?php endforeach;?> 

	$.ajax({
		url : href,
		type : 'get',
		dataType : 'json',
		cache : false,
		success : function(data) {
			if (data.success) {
				if(url!='') {
					location.href= url;
				}
			}
			else {
				alert(data.msg);
			}

			$('#stock_list').empty();
			var html = arr[comp];
			html = html.replace('<li>', '<li class="active">');
			for (var i=0; i<arr.length; i++) {
				if(i==0 || i == comp) continue;
			    html = html+arr[i];
			}  
			$('#stock_list').append(html);
			
			$('.purchase_wrapper').removeClass('open');          
			$('.purchase_wrapper .box').animate({
				'opacity' : 0,
				'height' : 0
			});

			return;
		}
	});
}
//-->
</script>


