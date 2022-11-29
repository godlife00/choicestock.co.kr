				<?=$ticker_header?>
            <div class="sub_mid research_board">
                <ul id="analysis_list" class="lst_type">
                    <?php $cnt=0; foreach($news_list as $news) : ?>
					<?php if($news['ni_display_date'] > date('Y-m-d H:i:s') || ($news['ni_view_srv'] !='' && $val['ni_view_srv'] !='C')) continue;?>
					<?php if($cnt > 14) break;?>
                    <li>
                        <dl class="lst_type2<?=($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) ? ' lst_lock':''?>">
                            <dt class="tit">
							<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
                            <a href="#" data-modal="modal-3" class="btn_free md-trigger">
							<?php else :?>
							<a href="/<?=WT?>_search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
							<?php endif;?>                                
                                <strong><?=$news['ni_title']?></strong></a>
                            </dt>
                            <dd class="photo">
								<?php if(strlen($news['ni_thumbnail']) > 0) : ?>
									<?php if($news['ni_pay']=='Y' && $this->session->userdata('is_paid')===FALSE) :?>
									<a href="#" data-modal="modal-3" class="btn_free md-trigger">
									<?php else :?>
									<a href="/<?=WT?>_search/news_view/<?=$ticker_code?>/<?=$news['ni_id']?>">
									<?php endif;?>                                
								<img src="<?=(strstr($news['ni_thumbnail'], 'http')) ? '':'https://hero.datahero.co.kr'?><?=$news['ni_thumbnail']?>" alt=""></a>
								<?php endif;?>
                            </dd>
                        </dl>
                    </li>
                    <?php $cnt++; endforeach; ?>
					<?php if($cnt==0):?>
                    <li>
						<!-- 뉴스 없는 경우 -->
						<div class="news_no_data">
							<p class="txt">해당 종목의 뉴스가 존재하지 않습니다.</p>
						</div>
						<!-- 뉴스 없는 경우 -->
                    </li>
					<?php endif;?>
                </ul>
				<?php if(count($news_list)>14) :?>
                <div class="btn_more">
                    <a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
                </div>
                <!-- //btn_more -->
				<?php endif;?>
            </div>
        </div>
        <!-- //sub_mid -->

		<script>
		var page = 1;
		var ticker = <?=$ticker_code?>;
		var is_loading = false;
		function view_more() {
			if(is_loading) {
				return;
			}
			is_loading = true;
			
			page += 1;
			$.post('/<?=WT?>_search/ajax_get_news_list', {'page': page, 'ticker': ticker}, function(res) {
				if($.trim(res).length) {
					$('#analysis_list').append(res);
				} else {
					$('.btn_more').hide();
				}
				is_loading = false;
			});
		}
		</script>