            <div class="sub_top news_top">
				<?php if($is_google === FALSE ):?>
				<div class="tabsArea_live">
					<ul class="tabs_live recipe_tabs">
						<li class="active" rel="tab1"><span>한국경제TV Live</span></li>
						<li rel="tab2"><span>한경글로벌마켓 Live</span></li>                        
					</ul>
					<div class="tab_container">
						<div id="tab1" class="tab_content">                            
							<div class="iframe_video">                                
								<iframe width="100%" height="100%" src="https://www.youtube.com/embed/MfZSI1QqdUc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>                    
							</div>
						</div>

						<div id="tab2" class="tab_content">
							<?php if($is_live === TRUE && $wowtv_vods['vw_vod_id'] != '') :?>
							<div class="iframe_video">                                
								<iframe width="100%" height="100%" src="https://www.youtube.com/embed/<?=$wowtv_vods['vw_vod_id']?>" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
							</div>
							<?php else :?>
							<div class="iframe_lounge">
								<img src="/img/wowtv/wowtv_temp_new_<?=(date('Ymd') < '20221107') ? '221102':'221107'?>.png">
							</div>
							<?php endif;?>
						</div>
					</div>
				</div>
				<?php endif;?>
				<!-- 배너 -->
				<?php include_once WT_INC_PATH.'/news_banner.php';?>
				<!-- //배너 -->                
			</div>
			<!-- //sub_top -->
            <!-- 발굴 - HOT클립, 뉴스 -->
            <div class="sub_mid research_board news_mid">
                <div class="tabsArea">
					<ul class="news_video_tabs">
						<?php if($is_google === FALSE ):?>
                        <li class="active"><a href="/<?=WT?>_stock/wowtv">HOT클립</a></li>
						<?php endif;?>
                        <li><a href="/<?=WT?>_stock/news">주요뉴스</a></li>
                    </ul>
                    <div class="tab_container">
                        <!-- HOT클립 -->
                        <div id="tab1" class="tab_content">
							<ul id="wowtv_list" class="lst_type news_list">
								<?php $cnt=0; foreach($wowtv_vod_list as $key=>$val) :?>
								<?php if($cnt>4) break;?>
                                <li>
                                    <dl class="lst_type2">
                                        <dt class="tit"><a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>"><strong><?=$val['vw_title']?></strong></a><span class="reg_day"><?=date('y.m/d H:i', strtotime($val['vw_display_date']))?></span></dt>
                                        <dd class="photo"><a href="/<?=WT?>_stock/wowtv_view/<?=$val['vw_id']?>"><img class="video_thumbnail" src="<?=$val['vw_thumbnail']?>"></a>
                                        </dd>
                                    </dl>
                                </li>
								<?php $cnt++; endforeach;?>
                            </ul>    

							<div class="btn_more">
								<a href="javascript:;" onclick="view_more()"><i></i>더보기</a>
							</div>
                            <!-- //btn_more -->

                            <div class="wowtv_sitelink">
                                <h2><img src="/img/wowtv/news_flink.png" alt="한경 글로벌마켓"></h2>                                
                                <ul>
                                    <li><a href="https://www.hankyung.com/globalmarket/news/market-economy" target="_blank">뉴스</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/news/hot-stock" target="_blank">핫스톡</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/news/wallstreet-now" target="_blank">월스트리트 나우</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/news/best-stock" target="_blank">유망주식 30선</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/global-tv" target="_blank">글로벌마켓TV</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/equities/nyse/top-market-capitalization" target="_blank">미국종목시세</a></li>
                                    <li><a href="https://www.hankyung.com/globalmarket/marketmap" target="_blank">마켓MAP</a></li>                                    
                                    <li><a href="https://www.hankyung.com/globalmarket/screener" target="_blank">스크리너</a></li>                                    
                                </ul>                                
                            </div>
							<?php
							//안드로이드 인앱 결제 후 삭제
							//if($this->session->userdata('user_ostype') != 'A') :?>
                            <div class="new_fsitelink">
                                <a href="https://kr.investing.com/" target="_blank"><img src="/img/wowtv/news_ivsting.png" alt="인베스팅닷컴 바로가기"></a>
                                <a href="https://www.cnbc.com/" target="_blank"><img src="/img/wowtv/news_cnbc.png" alt="CNBC 바로가기"></a>
                                <a href="https://www.bloomberg.com/asia" target="_blank"><img src="/img/wowtv/news_Bberg.png" alt="Bloomberg 바로가기"></a>
                            </div>
							<?php //endif;?>
                        </div>
                        <!-- //HOT클립 -->
						<script>
						var page = 1;
						var is_loading = false;
						var total_list = "";
						function view_more() {
							if(is_loading) {
								return;
							}
							is_loading = true;
							
							page += 1;
							$.post('/<?=WT?>_stock/ajax_get_wowtv_list', {'page': page}, function(res) {
								if($.trim(res).length) {
									$('#wowtv_list').append(res);
									
									total_list += res; 
									history.replaceState({list:total_list, page:page},'', '/<?=WT?>_stock/wowtv##');
								} else {
									$('.btn_more').hide();
								}
								is_loading = false;
							});
						}

						if(location.hash) { 
							var data = history.state; 
							if(data){ 
								$('#wowtv_list').append(data.list);
								page = data.page;
							}
						}
						</script>
                    </div>
                    <!-- .tab_container -->
                </div>
                <!-- //tabsArea -->
            </div>
            <!-- //sub_mid -->