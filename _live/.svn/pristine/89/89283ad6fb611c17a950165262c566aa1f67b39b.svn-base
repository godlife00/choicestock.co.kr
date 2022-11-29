			<div class="ptfo_recom">
				<h4 class="ptfo_title">추천포트폴리오</h4>
				<dl class="revenue">
					<dt>수익률</dt>
					<dd class="increase"><?=$pf_profit?><b>%</b></dd>
					<!-- increase 증가, decrease 감소 -->
				</dl>
				<a href="/stock/recommend/portfolio" class="more">종목 <span><?=$pf_count?>개</span><img src="/img/more_Black.png" alt="더보기"></a>
			</div>
			<?php if(is_array($portfolio_list) && sizeof($portfolio_list) > 0) :?>
			<div class="ptfo_datatable">
				<table cellspacing="0" border="1" class="tableRanking ptfo_table">
					<tbody>
						<?php foreach($portfolio_list as $portfolio) :
							$class = 'decrease';
							if($portfolio['rc_rate_str'] > 0) {
								$class = 'increase';
							}
						?>
						<tr>
							<td class="name">
							<!--<a href="#" data-modal="<?=($is_event === true) ? 'modal-4':'modal-3'?>" class="btn_free md-trigger"><?=iconv_substr($portfolio['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a>-->
								<a href="/stock/recommend_view/<?=$portfolio['rc_id']?>"><?=$portfolio['tkr_name']?></a>
							</td>
							<td class="num">
								<span class=""><?=$this->common->set_pricepoint($portfolio['rc_close'], '1')?></span>
								<span class="<?=$class?> pp"><?=$this->common->set_pricepoint($portfolio['rc_rate_str'], '2')?></span>
							</td>
							<td class="num">
								<span class="yield">수익률</span>
								<span class="<?=($portfolio['rc_profit_rate']>0) ? 'increase':'decrease'?>"><?=$this->common->set_pricepoint($portfolio['rc_profit_rate'], '1')?><b>%</b></span>
							</td>
						</tr>
						<?php endforeach;?>

					</tbody>
				</table>
			</div>
			<?php endif;?>