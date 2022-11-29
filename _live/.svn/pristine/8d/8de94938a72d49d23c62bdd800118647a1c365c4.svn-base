			<?php if(is_array($recommend) && sizeof($recommend) > 0) : ?>

<?php if($is_open === true):?>
<script type="text/javascript">
<!--
<?php $i=0; foreach($recommend as $val) :?>
	var re_pre<?=$i?> = <?=$val['ticker']['tkr_close']?>;
<?php $re_tickers .= $val['ticker']['tkr_ticker'].'|';?>
<?php $i++; endforeach;?>
function ajax_wtsise_recommend() {
	$.ajax({
        url: '/wt_main/getWtMarketPrice/<?=$re_tickers;?>',
		type : 'post',
		dataType : 'json',
		async: false,
		cache : false,
		success : function(data) {
		<?php for($i=0; $i<sizeof($recommend); $i++) :?>
			if(data[<?=$i?>]['status'] == '0' && data[<?=$i?>]['last_price'] != re_pre<?=$i?>) {
				var updown = 'decrease';

				$('#re_price<?=$i?>').html(formatNumber(data[<?=$i?>]['last_price']).replace('.', '.<b>')+'</b>');
				$('#re_price<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);

				if(data[<?=$i?>]['diff_price']>0) { 
					updown = 'increase';
				}
				$('#re_diff<?=$i?>').attr("class", updown);
				$('#re_diff<?=$i?>').html(data[<?=$i?>]['diff_rate']+'<b>%</b>');
				$('#re_diff<?=$i?>').animate({'background-color':'#fbceb1'}, 500).animate({'background-color':'transparent'}, 500);
		
				re_pre<?=$i?> = data[<?=$i?>]['last_price'];
			}
		<?php endfor;?>
  		}
	});
};
 
var timer = window.setInterval(function () { ajax_wtsise_recommend(); }, 5000);
//-->
</script> 
<?php endif;?>			
			
			<div class="main_mid game_area">
                <h3 class="title"><a href="/<?=WT?>_stock/recommend">오늘의 종목 Pick​</a></h3>
                <a href="/<?=WT?>_stock/recommend" class="more">더보기<img src="/img/more_blue.png" alt="더보기"></a>

                <div class="list_area">
                    <div class="swiper-container maingameSwiper">
                        <div class="swiper-wrapper">
						<?php
						$rcnt=0;
						foreach($recommend as $key => $val) :
							if($rcnt>2) break;
							$class = 'decrease';
							if($val['ticker']['tkr_rate'] > 0) {
								$class = 'increase';
							}
						?>	
							<div class="swiper-slide">
                                <div class="area">
                                    <ul class="list">
										<li class="title">
			                            <?php if($this->session->userdata('is_paid')===FALSE) :?>
			                            <a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=iconv_substr($val['ticker']['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span>
										<?php else :?>
										<a href="/<?=WT?>_stock/recommend_view/<?=$val['rc_id']?>"><?=$val['ticker']['tkr_name']?>
										<?php endif;?>
										</a></li>
										<li class="sum"><?=($rcnt>0 && $this->session->userdata('is_paid')===FALSE) ? '<span class="remark"><div class="txt_filter size_S"><i></i><i></i><i></i><i></i></div></span>':$val['ticker']['tkr_ticker']?></li>
                                        <li class="detail">

											<?php
											$is_wowinfo = false;
											if($is_open === true) {
												$wval = $this->common->get_wowtv_info($val['ticker']['tkr_ticker']);
												if(is_array($wval) && sizeof($wval)) {
													$is_wowinfo = true;
												}
											}
											?>

											<?php if($is_wowinfo === true) :?>
											<div class="num"><span id='re_price<?=$rcnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'],2 ), '1')?></span></div>
                                            <div class="per"><span class="<?=$wval['diff_rate'] > 0 ? 'increase' : 'decrease'?>" id='re_diff<?=$rcnt?>'><?=($wval['diff_rate']>0) ? '':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span></div>
                                            </td>
											<?php else :?>  
											<div class="num"><span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1')?></span></div>
											<div class="per"><span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate'], '2')?><b>%</b></span></div>
											<?php endif;?>

                                        </li>
                                        <li class="num">
                                            <div>
                                                <span class="th">목표가</span>
												<?php if($this->session->userdata('is_paid')===TRUE) :?>
												<span class="td"><?=(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0)? $this->common->set_pricepoint($val['rc_adjust_price'], '1'):$this->common->set_pricepoint($val['rc_goal_price'], '1')?></span>
												<?php else :?>
												<span class="td prm_lock"><a href="#" data-modal="modal-3" class="btn_free md-trigger"><img src="/img/prm_lockW.png" alt="잠김"></a></span>
												<?php endif;?>

                                            </div>
                                            <div>
                                                <span class="th">수익률</span>
												<?php if($val['rc_endtype'] == 'SUCCESS') :?>
													<?php if(in_array($val['rc_adjust'], array('U', 'D')) && $val['rc_adjust_price'] > 0) :?>
													<span class="<?=((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['rc_adjust_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
													<?php else :?>
													<span class="<?=((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['rc_goal_price']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
													<?php endif;?>
												<?php else :?>
												<span class="<?=((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100>0) ? 'increase':'decrease'?> dod"><?=number_format((($val['ticker']['tkr_close']/$val['rc_recom_price'])-1)*100,2)?><b>%</b></span>
												<?php endif;?>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
			            <?php $rcnt++; endforeach;?>

                        </div>
                    </div>
                </div>
                <!-- //list_area -->
            </div>    
			<?php endif;?>