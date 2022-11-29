            <div class="ptfo_recom">
                <h4 class="ptfo_title">추천포트폴리오</h4>
                <dl class="revenue">
                    <div class="more"><span><?=$pf_count?> 종목</span></div>
                    <dt>수익률</dt>
                    <dd class="increase"><?=$pf_profit?><b>%</b></dd>
                    <!-- increase 증가, decrease 감소 -->
                </dl>
            </div>
			<?php if(is_array($portfolio_list) && sizeof($portfolio_list) > 0) :?>
            <!-- //ptfo_recom -->
            <div class="ptfo_datatable">
				<?php foreach($portfolio_list as $portfolio) :
					$class = 'decrease';
					if($portfolio['rc_rate_str'] > 0) {
						$class = 'increase';
					}
				?>
                <ul>
                    <li class="name">
						<!--<a href="#" data-modal="modal-3" class="btn_free md-trigger"><?=iconv_substr($portfolio['tkr_name'], 0, 1, 'utf-8')?><span class="remark"><div class="txt_filter size_M"><i></i><i></i><i></i><i></i></div></span></a>-->
							<a href="/<?=WT?>_stock/recommend_view/<?=$portfolio['rc_id']?>"><?=$portfolio['tkr_name']?></a>
                    </li>
                    <li class="num">
                        <span class="yield">수익률</span>
						<span class="<?=($portfolio['rc_profit_rate']>0) ? 'increase':'decrease'?> pp"><?=$this->common->set_pricepoint($portfolio['rc_profit_rate'], '1')?><b>%</b></span>
                    </li>
                </ul>
				<?php endforeach;?>
            </div>
			<?php endif;?>
