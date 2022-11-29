<?php
/*
$wow_tikcer = $this->common->get_wowtv_info('TSLA');
echo '<pre>'; print_r($wow_tikcer);
Array
(
    [ticker] => TSLA
    [last_price] => 644.65
    [diff_rate] => -2.26
    [diff_price] => -14.93
    [updated_at] => 1625616000
    [status] => 1
)


전일 종가 적용 화면 
메인 > 종목추천
메인 > 추천 포트폴리오

메인 > 추천 > 추천 리스트
메인 > 추천 > 포트폴리오 리스트
메인 > 추천 > 승부주 리스트

발굴 > 레시피 > 급등주


./main/search.php (0)
./search/ticker_header.php
./search/invest_charm.php
./search/fairvalue.php
./inc/main_recommend.php

./inc/main_interest.php (0)
./stock/recipe_list.php
./stock/recommend_view.php
./stock/catch.php

15분 지연 적용
메인 > 진단 > 관심종목
메인 > 진단 > 인기종목

진단 > 관심종목
진단 > 인기종목
진단 > 종목검색결과

발굴 > 캐치

발굴 > 레시피 > 관심TOP50
발굴 > 레시피 > 실적발표
발굴 > 레시피 > 지금 세일중!
발굴 > 레시피 > 배당매력주
발굴 > 레시피 > 이익성장주
발굴 > 레시피 > 소비자독점
발굴 > 레시피 > 슈퍼스톡
*/
?>
	

<?php if($is_open === true):?>
<script>
	$(document).ready(function(){
	<?php for($i=0; $i<sizeof($tab_stock_data); $i++) :?>
		  $('#in_price<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
		  //$('#in_diff<?=$i?>').animate({'background-color':'#dddddd'}, 500).animate({'background-color':'transparent'}, 500);
	<?php endfor;?>
	});
</script>			
<?php endif;?>
			
			<div class="main_mid attention_area">
                <h3 class="title"><a href="/main/search">관심종목</a></h3>
                <a href="/main/search" class="more"><img src="/img/more_Black.png" alt="더보기"></a>
                <!-- Swiper -->
                <div class="swiper-container attentionSwiper">
                    <div class="swiper-wrapper">
                    <?php
                    $cnt=0;
					$in_cnt=0;
                    foreach($tab_stock_data as $val) :
                        $class = 'decrease';
                        if($val['ticker']['tkr_rate'] > 0) {
                            $class = 'increase';
                        }
                        $value_score_txt = 'N/A';
                        if($val['expected_star']=='1') $value_score_txt = '저평가';
                        else if($val['expected_star']=='3') $value_score_txt = '적정가';
                        else if($val['expected_star']=='5') $value_score_txt = '고평가';
                        $cnt++;
                    ?>
                    <?php if(($cnt%4)==1) :?>
                    <div class="swiper-slide">
                        <table cellspacing="0" border="0" class="tableRanking type_2Line">
                            <colgroup>
                                <col width="100px">
                                <col width="">
                                <col width="">
                                <col width="">
                            </colgroup>
                            <tbody>
                    <?php endif;?>
                                        
                        <tr>
                            <td class="title"><a href="/search/summary/<?=$val['ticker']['tkr_ticker']?>"><?=$val['ticker']['tkr_name']?><span class="ticker"><?=$val['ticker']['tkr_ticker']?></span></a>
                            </td>

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
                            <td class="num">
								<span id='in_price<?=$in_cnt?>'><?=$this->common->set_pricepoint(number_format($wval['last_price'], 2), '1')?></span>
                            </td>
                            <td class="num dod">
                                <span class="<?=($wval['diff_rate']>0) ? 'increase':'decrease'?>"><?=($wval['diff_rate']>0) ? '':''?><?=$this->common->set_pricepoint($wval['diff_rate'], '2')?><b>%</b></span>
                            </td>
                            <?php else :?>                            
                            <td class="num">
                                <span><?=$this->common->set_pricepoint(number_format($val['ticker']['tkr_close'], 2), '1')?></span>
                            </td>
                            <td class="num dod">
                                <span class="<?=$class?>"><?=$this->common->set_pricepoint($val['ticker']['tkr_rate'], '2')?><b>%</b></span>
                            </td>
                            <?php endif;?>

                            <!-- 프리미엄 서비스 부분 -->
                            <?php if($this->session->userdata('is_paid')===TRUE) :?>
                            <td class="score"><span><?=$val['m_biz_total_score']?><b>점</b></span></td>
                            <?php else :?>
                            <td class="prm_lock"><span><img src="img/prm_lock.png" alt="잠김"></span>
                            <?php endif;?>
                            </td>
                            <!-- //프리미엄 서비스 부분 -->
                        </tr>                                        
                    <?php if(($cnt%4)==0):?>
                            </tbody>
                        </table>
                    </div>
                    <?php endif;?>
                    <!-- //swiper-slide -->

                <?php $in_cnt++; endforeach;?>
                <?php if(($cnt%4)!=0):?>
                            </tbody>
                        </table>
                    </div>
                <?php endif;?>

                <?php if($this->session->userdata('is_login')===TRUE) :?>
                    <div class="swiper-slide">
                        <div class="attention_all">
                            <a href="/main/search">관심종목 전체보기 <i></i></a>
                        </div>                            
                    </div>
                    <!-- //swiper-slide -->    
                <?php endif;?>

                </div>
                <!-- Add Pagination -->
                <div class="swiper-pagination"></div>
            </div>
            <!-- //attentionSwiper -->
            <div class="one_step">
                <span class="txt">나의 관심종목은 얼마나 매력적일까?</span>
                <a href="/main/onestop" class="more"><span>원스톱 진단</span><img src="/img/more_yel.png"
                        alt="더보기"></a>
            </div>
            <!-- //one_step -->
        </div>
