            <div class="mapage_area">
			<?php include_once INC_PATH.'/info_submenu.php'; ?>

				<?php if(is_array($autopay) && sizeof($autopay) > 0) : ?>

                <div class="<?=($autopay['p_at_count']==0 || $autopay['p_at_count']=='') ? 'mapage_service_free':'mapage_service'?>">

					<?php
					//결제금액 처리
					//if($autopay['p_coupon']!='' && $autopay['p_at_eventprice'] > 0 ) {
					if( $autopay['p_at_eventprice'] > 0 ) {
						if(($autopay['p_at_count'] == '' || $autopay['p_at_count'] == '0') && $autopay['p_at_eventuse'] == 'N') {
							$auto_price = $autopay['p_at_eventprice'];
						}
						else if($autopay['p_at_count'] == '1' && $autopay['p_at_eventuse'] == 'Y') {
							$auto_price = $autopay['p_at_eventprice'];
						}
						else {
							$auto_price = $autopay['p_price'];
						}
					}
					else {
						$auto_price = $autopay['p_price'];
					}
					$auto_s_date = strtotime(date('Ymd')); 
					//무료체험기간 일 경우
					if($autopay['p_authdate']=='' && ($autopay['p_at_count']=='' || $autopay['p_at_count']=='0')) {
						$auto_e_date = strtotime($autopay['p_start_date']); //결제일(서비스시작일)
						$auto_during =  ceil(($auto_s_date - $auto_e_date)/(60*60*24))+1; // 일차이
						$auto_refund_price = 0;
						$auto_at_day = $autopay['p_at_day'];
					}
					else {
						//실제 결제한 경우
						//$auto_e_date = strtotime($autopay['p_start_date']); //결제일(서비스시작일)
						$auto_e_date = strtotime($autopay['p_authdate']); //결제일(서비스시작일)

						$auto_during =  ceil(($auto_s_date - $auto_e_date)/(60*60*24))+1; // 일차이
						if($auto_during == 1) {
							$auto_refund_price = $auto_price;
						}
						else {
							$auto_refund_price = 0;
						}
					}
					?>

					<?php if($autopay['p_at_count']==0 || $autopay['p_at_count']=='') :?>
                    <div class="top">
                        <h2 class="h2_freetitle">프리미엄 서비스 <span>(2주 무료이용)</span></h2>
                        <p class="day"><?=date('Y.m/d', strtotime($autopay['p_start_date']))?> ~ <?=date('Y.m/d', strtotime($autopay['p_end_date']))?></p>
                        <a href="javascript:showPayCancel('<?=$autopay['p_id']?>', '<?=$autopay['p_type']?>', '<?=$auto_price?>', '<?=($autopay['p_method'] == 'CARD' && $autopay['p_card_no']!='') ? substr($autopay['p_card_no'], -2):''?>', '<?=($auto_during)?>', '<?=$auto_refund_price;?>', '<?=$auto_at_day;?>');" class="auto_cncl">무료 이용 해지</a>
                    </div>
                    <div class="mid">
                        <ul>
                            <li>무료 이용이 종료되기 전까지는 요금이 청구되지 않습니다.</li>
                            <li>무료 이용 종료 전에 서비스를 해지하시지 않으면 월 정기결제로 자동연장됩니다.</li>
                            <li>무료 이용 기간에 언제든지 해지하실 수 있습니다.</li>
                        </ul>
                        <ul>
                            <li>무료 이용 종료 후 월 정기결제 금액 <strong></strong><?=number_format($auto_price)?>원(부가세 포함)</li>
                            <li>월 정기결제일 : 매월 <?=substr($autopay['p_at_day'], -2)?>일</li>
                        </ul>
                    </div>
                    <div class="btm">
                        <h3 class="h3_freetitle">월자동 결제</h3>
                        <ul>
                            <li><span>ㆍ카드번호</span><strong>*********<?=substr($autopay['p_card_no'], -4)?></strong></li>
                            <li><span>ㆍ결제일</span><strong><?=substr($autopay['p_at_day'], -2)?></strong>일</li>
                        </ul>
                        <?php if($autopay['is_update']===TRUE) :?><a href="/payment/card_update/<?=$autopay['p_id']?>" class="card_ch">결제카드 변경</a><?php endif;?>
                    </div>
					<?php else:?>
                    <table border="1" class="service_table">
                        <tbody>
                            <tr>
                                <th class="service">프리미엄 서비스:</th>
                                <td class="day">
								<?php if($autopay['p_card_code'] == 'PA') :?>
								<?php
									$dd = substr($autopay['p_start_date'], -2);
									$start_ym =  date('Ym').$dd;
									$next_month = date('Ym').'01';
									$next_month = date("Ym", strtotime($next_month." +1 month"));
									$end_ym = $next_month.$dd;
								?>
								<?=date('Y.m/d', strtotime($start_ym))?> ~ <?=date('Y.m/d', strtotime($end_ym))?>
								<?php else :?>
								<?=date('Y.m/d', strtotime($autopay['p_start_date']))?> ~ <?=date('Y.m/d', strtotime($autopay['p_end_date']))?>
								<?php endif;?>								
								<?=($autopay['p_at_count']==0) ? ' (무료체험기간)':' (월 정기결제)'?></td>
                            </tr>
                            <tr>
                                <th rowspan="2" class="system"><span>월정기결제</span>
								<?php //if($autopay['p_status']=='P' && $autopay['p_at_count']>0 && $autopay['p_at_day'] != '') :?>
								<?php if($autopay['p_card_code'] != 'PA') :?>
									<a href="javascript:showPayCancel('<?=$autopay['p_id']?>', '<?=$autopay['p_type']?>', '<?=$auto_price?>', '<?=($autopay['p_method'] == 'CARD' && $autopay['p_card_no']!='') ? substr($autopay['p_card_no'], -2):''?>', '<?=($auto_during)?>', '<?=$auto_refund_price;?>', '<?=$auto_at_day;?>');" class="auto_cncl">정기결제취소</a>
								<?php endif;?>								
								</th>
                                <td class="num"><span>ㆍ카드번호</span> <strong>*********<?=substr($autopay['p_card_no'], -4)?></strong><?php if($autopay['is_update']===TRUE) :?><a href="/payment/card_update/<?=$autopay['p_id']?>" class="card_ch">결제카드 변경</a><?php endif;?></td>
                            </tr>
                            <tr>
                                <td class="num"><span>ㆍ결제일</span> <strong><?=($autopay['p_card_code'] != 'PA') ? substr($autopay['p_at_day'], -2):substr($autopay['p_start_date'], -2)?>일</strong></td>
                            </tr>
                        </tbody>
                    </table>
					<?php endif;?>
                </div>
				<?php elseif(is_array($freepay_data) && sizeof($freepay_data) > 0) :?>
                <div class="mapage_service">
                    <table border="1" class="service_table">
                        <tbody>
                            <tr>
                                <th class="service">프리미엄 서비스 : </th>
                                <td class="day"><?=date('Y.m/d', strtotime($freepay_data['fp_start_date']))?> ~ <?=date('Y.m/d', strtotime($freepay_data['fp_end_date']))?> (3일 무료체험)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
				<?php else :?>
					<?php if(is_array($paylist) && sizeof($paylist) > 0) : ?>
						<?php if($paylist[0]['p_type'] == 'G' && $paylist[0]['p_status'] == 'P' && $paylist[0]['p_end_date'] >= date('Ymd')) :?>
						<div class="mapage_service">
							<table border="1" class="service_table">
								<tbody>
									<tr>
										<th class="service"><?=$pay_name[$paylist[0]['p_code']]?> 서비스:</th>
										<td class="day"><?=date('Y.m/d', strtotime($paylist[0]['p_start_date']))?> ~ <?=date('Y.m/d', strtotime($paylist[0]['p_end_date']))?>  (<?=$pay_info[$paylist[0]['p_pay']]['month']?>개월)
										</td>
									</tr>
								</tbody>
							</table>
						</div>
						<?php endif;?>
					<?php endif;?>
				<?php endif;?>

                <div class="history_area">
                    <table cellspacing="0" border="1" class="history_table">
                        <thead>
                            <tr>
                                <th>결제일</th>
                                <th>결제금액</th>
                                <th>결제수단</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

			            <?php if(is_array($paylist) && sizeof($paylist) > 0) : ?>
						<?php //echo '<pre>'; print_r($paylist)?>
						<?php $s_date = strtotime(date('Ymd'));?>

							<?php foreach($paylist as $pay) : ?>

							<?php //무통장인데 결제예정일 벗어난 경우 continue;?>
							
								<tr>
									<?php if(($pay['p_method'] == 'VBANK' && in_array($pay['p_vb_status'], array('N','C'))) || ($pay['p_method'] == 'CARD' && $pay['p_authdate'] == '')) :?>
									<td><?=date('y.m/d', strtotime($pay['p_date']))?></td>
									<?php else:?>
									<td><?=date('y.m/d', strtotime($pay['p_authdate']))?></td>
									<?php endif;?>
									<?php
										//월자동 이벤트 price 처리
										//if($pay['p_type'] == 'A' && $pay['p_coupon'] != '' && $pay['p_at_eventprice'] > 0) {
										if($pay['p_type'] == 'A' && $pay['p_at_eventprice'] > 0) {
											$str_price = $pay['p_at_eventprice'];
										}
										else {
											$str_price = $pay['p_price'];
										}
									
									?>
									<td><?=number_format($str_price)?>원 <span class="in"><?php if($pay['p_type']=='A'):?>월자동 <?php else : ?><?=$pay_info[$pay['p_pay']]['month']?>개월<?php endif;?></span> </td>
									<td><?=$pay_method_name[$pay['p_method']]?> <span class="in">
									<?php if($pay['p_method'] == 'CARD') :?>
									(**<?=substr($pay['p_card_no'], -4)?>)
									<?php elseif($pay['p_method'] == 'VBANK' && $pay['p_vb_status'] == 'N') :?>
									(입금확인중)
									<?php else :?>
									(완료)
									<?php endif;?>									
									</span></td>


									<?php if($pay['p_status'] == 'P' && $pay['p_type'] == 'G' && $pay['p_end_date'] >= date('Ymd')) :?>
									<?php
									//환불금액 계산하기
									$e_date = strtotime($pay['p_authdate']); //서비스시작일(결제승인일)
									$during =  ceil(($s_date - $e_date)/(60*60*24))+1; // 일차이

									//카드결제
									//당일 취소 전액 환불
									//영업일 3일 이내 사용일 수 제외하고 환불
									//영업일 3일 이후 수수료 3.5% 차감 후 환불

									if($during == 1) {
										$refund_price = $pay['p_price'];
									}
									else {
										// 결제금액 : $pay['p_price']
										// 부여일수 : $pay_info[$pay['p_pay']]['period']
										// 사용일수 : $during
										// 환불수수료율 : 3.50%
										$srv_day = $pay_info[$pay['p_pay']]['period']+1; //부여일수

										$refund_rate = 0.035;

										if($during < 4) {
											//3일 전
											//결제금액((부여일수-남은일수)/부여일수)
											$refund_price = round($pay['p_price']*(($srv_day-$during)/$srv_day));
										}
										else {
											//3일 이후
											//결제금액((부여일수-남은일수)/부여일수)*(1-환불수수료율)
											$refund_price = round($pay['p_price']*(($srv_day-$during)/$srv_day)*(1-$refund_rate));
										}											
									}
									?>

										<?php if($pay['p_method'] == 'VBANK' && $pay['p_vb_status'] == 'Y') :?>
										<td><a href="javascript:showRefund('<?=$pay['p_id']?>', '<?=$pay['p_price']?>', '<?=$during?>', '<?=$refund_price?>');" class="btn_payCan show_pop02">결제취소</a></td>
										<?php elseif($pay['p_method'] != 'COUPON' || $pay['p_price'] > 0) :?>
										<td><a href="javascript:showPayCancel('<?=$pay['p_id']?>', '<?=$pay['p_type']?>', '<?=$pay['p_price']?>', '<?=($pay['p_method'] == 'CARD' && $pay['p_card_no']!='') ? substr($pay['p_card_no'], -2):''?>', '<?=($during)?>', '<?=$refund_price?>', '');" class="btn_payCan show_pop01">결제취소</a></td>
										<?php endif;?>									
									<?php elseif($pay['p_status'] == 'C') :?>
										<td>결제취소 <span class="in">(<?=date('Y.m/d', strtotime($pay['p_cancel_date']))?>)</span></td>
									<?php elseif($pay['p_status'] == 'R') :?>
										<td>환불완료 <span class="in">(<?=date('Y.m/d', strtotime($pay['p_rf_pcdate']))?>)</span></td>
									<?php else :?>
										<td><span class="in"></span></td>
									<?php endif;?>
								</tr>
							<?php endforeach;?>
						<?php else :?>
								<tr>
									<td colspan="4">결제내역이 없습니다.</td>
								</tr>
						<?php endif;?>
                        </tbody>
                    </table>
                </div>
                <!-- //history_area -->
				<div class="btnArea payBtn">
                    <a href="/payment/choice" class="btn btn_save"><strong>초이스스탁US 프리미엄</strong> 결제 상품 보기</a>
                </div>
            </div>
            <!-- //mapage_area -->

			<!-- Modal popup -->
			<!-- 결제취소(신용카드) -->
			<div class="setting_pop pay_edt pay_edt_01">
				<div class="bg"></div>
				<div id="pay_cncl" class="setting_area">
					<div class="pop_header">
						<a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
						<h1 class="pop_title">결제취소 <span id="now_time"><?=date('Y.m/d H:i', strtotime(date('YmdHi')))?></span> </h1>
					</div>
					<!-- //pop_header -->
					<div class="pop_con">
						<div class="mapage_form">
						<form name="payForm" method="post" action="/payment/pay_cancel"  onsubmit="return false;">
							<input type="hidden" name="cs_ano" value="">
							<input type="hidden" name="srv_name" value="<?=$srv_name?>">
							<fieldset>
								<div class="form_table">
									<table border="1" class="">
										<tbody>
											<tr>
												<th scope="row">서비스</th>
												<td>
													<div class="item">
														<p class="txt_info" id="pay_srv_name"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">결제금액</th>
												<td>
													<div class="item">
														<p class="txt_info" id="pay_srv_price"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">사용일수</th>
												<td>
													<div class="item">
														<p class="txt_info" id="pay_use_day"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">환불금액</th>
												<td>
													<div class="item">
														<p class="txt_info" id="pay_refund_price"></p>
														<p class="i_dsc phone" id="pay_free_price"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row"></th>
												<td>
													<div class="item">
														<p class="txt_info" id="pay_card_no"></p>
													</div>
													<div class="certification_area">
														<p class="txt">결제취소는 신청 즉시(또는 영업일 기준 D+2 이내) 처리되며, 가상계좌/계좌이체 결제금액은
															D+7 이내 등록하신 환불계좌로 입금처리됩니다.</p>
														<a href="/main/service_guide" class="go_link" target="_blank"><i></i>환불정책 바로가기</a>
													</div>
													<!-- //certification_area -->
												</td>
											</tr>
										</tbody>
									</table>
									<p class="label_chk" id="requestCancel"><i></i>위 내용을 확인했으며, 결제취소를 신청합니다.</p>
								</div>
								<!-- //form_table -->
								<div class="btnArea edtBtn">
									<a href="javascript:fnPayCanCel()" class="btn btn_save">결제취소</a>
								</div>
							</fieldset>
						</form>
						</div>
					</div>
				</div>
			</div>
			<!-- //setting_pop pay_edt -->


			<!-- 결제취소(가상계좌) -->
			<div class="setting_pop pay_edt pay_edt_02">  
				<div class="bg"></div>      
				<div id="pay_cncl_tr" class="setting_area">
					<div class="pop_header">
						<a href="#setting_anchor" title="로그인 레이어 닫기" class="close"><img src="/img/clse.png" alt="팝업닫기"></a>
						<h1 class="pop_title">결제취소 <span><?=date('Y.m/d H:i', strtotime(date('YmdHi')))?></span> </h1>
					</div>
					<!-- //pop_header -->
					<div class="pop_con">
						<div class="mapage_form">
						<form name="rfForm" method="post" action="/payment/pay_refund" onsubmit="return false;">
							<input type="hidden" name="cs_rfno" value="">						
							<fieldset>
								<div class="form_table">
									<table border="1" class="">
										<tbody>
											<tr>
												<th scope="row">서비스</th>
												<td>
													<div class="item">
														<p class="txt_info"><?=$srv_name?> </p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">결제금액</th>
												<td>
													<div class="item">
														<p class="txt_info" id="vbank_srv_price"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">사용일수</th>
												<td>
													<div class="item">
														<p class="txt_info" id="vbank_use_day"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">환불금액</th>
												<td>
													<div class="item">
														<p class="txt_info" id="vbank_refund_price"></p>
													</div>
												</td>
											</tr>
											<tr>
												<th scope="row">환불계좌</th>
												<td>
													<div class="selectbox">
														<label for="select" id="rf_bank_name"><?=$bank_list[0]['bc_name']?></label>
														<select name="select_bank" id="select">bank_list
														<?php for($i=0;$i<sizeof($bank_list);$i++) :?>
															<option value="<?=$bank_list[$i]['bc_code']?>"><?=$bank_list[$i]['bc_name']?></option>
														<?php endfor;?>
														</select>
													</div>                                                
													<input type="tel" name='account_number' placeholder="계좌번호 입력" id="" class="tr_num">

													<div class="certification_area">
														<p class="txt">결제취소는 신청 즉시(또는 영업일 기준 D+2 이내) 처리되며, 가상계좌/계좌이체 결제금액은
                                                        D+7 이내 등록하신 환불계좌로 입금처리됩니다.</p>
														<a href="/main/service_guide" class="go_link" target="_blank"><i></i>환불정책 바로가기</a>
													</div>
													<!-- //certification_area -->
												</td>
											</tr>
										</tbody>
									</table>
									<p class="label_chk" id="requestRefund"><i></i>위 내용을 확인했으며, 결제취소를 신청합니다.</p>
								</div>
								<!-- //form_table -->
								<div class="btnArea edtBtn">
									<a href="javascript:fnRefund()" class="btn btn_save">결제취소</a>
								</div>
							</fieldset>
						</form>
						</div>
					</div>
				</div>
			</div>
			<!-- //setting_pop pay_edt -->