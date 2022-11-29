            <div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['e_title']?></h5>
                    <span class="day"><?=date('y.m/d', strtotime($row['e_display_date']))?></span>
					<?php if($this->session->userdata('is_paid')===TRUE) :?> 
                    <a href="<?=$back_url?>" class="go_list">목록보기</a>
					<?php endif;?>
                </div>
                <div class="mid">
				<?php
					//https://swbilluser.wowtv.co.kr/Cash/FreeCharge?uuid=#UUID#&phno=#PHNO#&apptype=15&swReturnUrl=#RETURL#
					$uuid = $this->session->userdata('user_key');

					$phoneNumber = $this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY);

					$http_host = $_SERVER['HTTP_HOST'];
					$request_uri = $_SERVER['REQUEST_URI'];
					$return_url = 'https://' . $http_host . $request_uri;

					$row['e_content'] = str_replace('#UUID#', $uuid, $row['e_content']);
					$row['e_content'] = str_replace('#PHNO#', $phoneNumber, $row['e_content']);
					$row['e_content'] = str_replace('#RETURL#', $return_url, $row['e_content']);

					//안드로이드 인앱 결제 후 삭제
					/*
					if($this->session->userdata('user_ostype') == 'A') {
						$row['e_content'] = str_replace('<a href="https://wowtv.choicestock.co.kr/wt_main/service">☞ 지금 신청하기</a>', '', $row['e_content']);
						$row['e_content'] = str_replace('★ 미국주식창 서비스에 가입하면 <ins>추천/포트폴리오, 진단, 발굴 서비스</ins>를 모두 이용할 수 있습니다.', '', $row['e_content']);
						$row['e_content'] = str_replace('★ 미국주식창 서비스에 가입하면 추천/포트폴리오, 진단, 발굴 서비스를 모두 이용할 수 있습니다.', '', $row['e_content']);
					}
					*/
					
				?>
				<?php if($row['e_class'] == '3') :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',nl2br($row['e_content']))?>
				<?php else :?>
                <?=str_replace('/webdata/attach_data','https://hero.datahero.co.kr/webdata/attach_data',$row['e_content'])?>
				<?php endif;?>
				<p class="guide_alarm" style="display: block; color: #014b8d; padding-top: 5px; margin-top: 20px; font-size: 13px; line-height: 21px; margin-bottom: 0;">
				위 정보에 대한 실시간 푸시(알림)을 받으시려면 수신 설정을 확인하세요. <a href="/<?=WT?>_member/info" style="font-size: 13px;">☞ 알림 수신설정 확인</a>
                </p>
				<p class="guide_cho" style="display: block; color: #82929F; padding-top: 5px; margin-top: 10px; font-size: 13px; line-height: 21px;">※ 종목은 (주)데이터히어로의 빅데이터 분석과 알고리즘에 의해 제공됩니다.</p>
                </div>
				<?php if($this->session->userdata('is_paid')===TRUE) :?> 
                <a href="<?=$back_url?>" class="go_list">목록보기</a>
				<?php endif;?>
            </div>

            <?php if(sizeof($explore) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php foreach($explore as $exp) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/<?=WT?>_stock/research_view/<?=$exp['e_id']?>"><strong><?=nl2br($exp['e_title'])?></strong></a></dt>
                            <dd class="photo">
							<?php if(strlen($exp['e_thumbnail']) > 0) : ?>
                            <a href="/<?=WT?>_stock/research_view/<?=$exp['e_id']?>">
								<?php if(strstr($exp['e_thumbnail'], '://')) : ?>
								<img src="<?=$exp['e_thumbnail']?>" alt="">
								<?php else:?>
								<img src="https://hero.datahero.co.kr<?=$exp['e_thumbnail']?>" alt="">
								<?php endif;?>							
							</a>
                            <?php endif; ?>
							</dd>
                        </dl>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>