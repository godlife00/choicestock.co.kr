			<!-- 주요 콘텐츠 -->
            <div class="mapage_form">
				<fieldset>
					<div class="form_table">
						<table border="0" class="">
							<tbody>
								<tr>
									<td>
										<?php
										//안드로이드 인앱 결제 후 삭제
										//if($this->session->userdata('user_ostype') == 'A') :?>
										<!--<h2 class="name_title">필명</h2>-->
										<?php //else :?>
										<h2 class="name_title">필명 설정</h2>
										<?php //endif;?>
										<div class="td_mod">
											<div class="d_mod">
												<p class="contxt_tit"><?=$this->session->userdata('user_name');?></p>
												<?php
												//안드로이드 인앱 결제 후 삭제
												//if($this->session->userdata('user_ostype') != 'A') :?>
												<?php $return_url = 'https://wowtv.choicestock.co.kr/'.WT.'_member/update_info';?>
												<a href="https://swbilluser.wowtv.co.kr/MyPage/Main?sitecode=1&uuid=<?=$this->session->userdata('user_key');?>&phno=<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY);?>&swReturnUrl=<?=$return_url;?>" class="btn">필명 변경</a>
												<?php //endif;?>
											</div>
										</div>
										<!-- //td_mod -->
									</td>
								</tr>
								<tr>
									<td>
										<h2 class="name_title">휴대폰 번호</h2>
										<div class="td_mod">
											<div class="d_mod bg_box">
												<p class="contxt_tit"><?=preg_replace("/([0-9]{3})([0-9]{3,4})([0-9]{4})$/","\\1-\\2-\\3", $this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY));?></p>
											</div>

											<div class="d_modNo">                                                    
												<p class="i_dsc contxt_alert">* 번호 변경은 ‘고객센터(02-6676-0403)’로 문의주세요</p>
											</div>
										</div>
										<!-- //td_mod -->
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</fieldset>

                <div class="alarm_from">
                    <h2 class="name_title">알림메시지 수신</h2>
                    <div class="label active">
                        <p class="label_chk<?=($this->session->userdata('user_push')=='Y') ? ' rcpt':''?>"><?=($this->session->userdata('user_push')=='Y') ? '수신':'미수신'?></p>
                        <div class="toggleWrap">
                            <input type="checkbox" id="toggle_alarm" name="wm_is_push" onClick='javascript:fnNoticeSet(this)' value="Y" <?=($this->session->userdata('user_push')=='Y') ? 'checked':''?>>
                            <!-- checked = 비활성 -->
                            <div>
                                <label for="toggle_alarm">
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </div>
					<?php 
					//안드로이드 인앱 결제 후 삭제
					//if($this->session->userdata('user_ostype') == 'A') : ?>
                    <!--<p class="txt_guide">미국주식에 대한 발빠른 소식을 알림으로 제공합니다.</p>-->
					<?php //else :?>
                    <p class="txt_guide">미국주식에 대한 발빠른 소식을 알림으로 제공합니다.<br>
                        - 프리미엄 회원은 종목추천/포트폴리오 알림이 제공됩니다.</p>
					<?php //endif;?>
                </div>
                <div class="withdrawal">
                    <a href="/<?=WT?>_member/withdrawal" class="btn_withdrawal">탈퇴하기<i></i></a>
                </div>
            </div>