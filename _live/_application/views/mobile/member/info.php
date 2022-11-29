            <!-- 주요 콘텐츠 -->
            <div class="mapage_area">
            <?php include_once INC_PATH.'/info_submenu.php'; ?>
                <div class="mapage_form">
                    <form name="infoForm" method="post" action="/member/save_info"  onsubmit="return false;">
                    <input type="hidden" name="time_check" value="">
                    <input type="hidden" name="m_push_check" value="">
					<input type="hidden" name="m_push_before" value="<?=$user_marketing?>">
                    <input type="hidden" name="auth_check" value="">
                       <fieldset>
                            <div class="form_table">
                                <table border="1" class="">
                                    <tbody>
                                        <tr>
                                            <th scope="row">이름</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info"><?=$user_name?> (<?=$this->session->userdata('user_id')?>)</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">이메일</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info"><?=$user_email?></p>
                                                    <p class="i_dsc email"><i></i><?=$user_path=='N' ? '네이버' : '카카오'?>ID로 가입하셨습니다.</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">성별</th>
                                            <td>
                                                <div class="item">
                                                    <p class="txt_info">확인불가</p>
                                                </div>
                                            </td>
                                        </tr>

                                    <?php //if($this->session->userdata('is_paid')===TRUE) :?>
                                        <?php if(isset($user_phone) && $user_phone!='') :?>
                                            <?php
                                                if(strlen($user_phone) > 10) {
                                                    $phone_no =  substr($user_phone,0,3).'-'.substr($user_phone,3,4).'-'.substr($user_phone,7,4);
                                                }
                                                else {
                                                    $phone_no =  substr($user_phone,0,3).'-'.substr($user_phone,3,3).'-'.substr($user_phone,6,4);
                                                }
                                            ?>

                                        <tr>
                                            <th scope="row">휴대폰번호</th>
                                            <td>
                                                <div class="item mod_phone">
                                                    <p class="txt_info" id="phone_number"><?=$phone_no;?></p>
                                                    <span class="mod_btn"><a href="javascript:fnChangePhone();">휴대폰 번호 변경</a></span>
                                                    <p class="i_dsc phone_premium"><i></i>프리미엄회원에게는 서비스 편의를 위해 휴대폰 문자 또는 알림 메시지(Push) 등으로 종목추천/관심 종목 등 알림서비스가 제공됩니다. 단, 알림서비스는 통신사 또는 인터넷 업체 사정에 따라 지연/미수신 될 수 있습니다.</p>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr id="new_phone_area" style="display:none;">
                                            <th scope="row">휴대폰번호</th>
                                            <td class="phonePin_form" style="display:block;">
                                                <fieldset>
                                                    <div class="box">
                                                        <input type="tel" name="new_phone_number" id="new_phone_number" maxlength="13" class="pinInput" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                        <!-- 최초 인증 요청 -->
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendAuthNo('info');" value="인증 요청" class="pinBtn pin_req">
                                                        <!-- 다시 인증 요청 -->
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendInit();" value="다시 요청" class="pinBtn pin_reqAgain">
                                                        <p class="dsc_error" id="phone_noti" style="display:none;"></p>
                                                    </div>
                                                    <div class="box" id="new_auth_area">
                                                        <input type="number" class="pinInput_out" name="auth_no" id="timer" maxlength="4" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" placeholder="인증번호 입력 (03:00)">
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnAuthConfirm();" value="번호 확인" class="pin_completion">
                                                        <p class="dsc_error" id="auth_result" style="display:none;"></p>
                                                        <p class="txt_reject">휴대폰으로 전송된 인증번호 입력 후 '확인' 버튼을 눌러주세요.</p>
                                                    </div>
                                                </fieldset>
                                            </td>
                                            <!-- //phonePin_form -->
                                            <!-- //휴대폰 등록 -->
                                        </tr>
                                        <?php else :?>
                                        <tr id="new_phone_area" style="display:table-row;">
                                            <th scope="row">휴대폰번호</th>
                                            <td class="phonePin_form" style="display:block;">
                                                <fieldset>
                                                    <div class="box">
                                                        <input type="tel" name="new_phone_number" id="new_phone_number" maxlength="13" class="pinInput" <?=($is_iphone===TRUE) ? 'pattern="[0-9]*" inputmode="numeric" min="0"':'pattern="\d*"'?>>
                                                        <!-- 최초 인증 요청 -->
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendAuthNo('info');" value="인증 요청" class="pinBtn pin_req">
                                                        <!-- 다시 인증 요청 -->
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnSendInit();" value="다시 요청" class="pinBtn pin_reqAgain">
                                                        <p class="i_dsc phone_premium"><i></i>프리미엄회원에게는 서비스 편의를 위해 휴대폰 문자 또는 알림 메시지(Push) 등으로 종목추천/관심 종목 등 알림서비스가 제공됩니다. 단, 알림서비스는 통신사 또는 인터넷 업체 사정에 따라 지연/미수신 될 수 있습니다.</p>
                                                        <p class="dsc_error" id="phone_noti" style="display:none;"></p>
                                                    </div>
                                                    <div class="box" id="new_auth_area">
                                                        <input type="number" class="pinInput_out" name="auth_no" id="timer" maxlength="4" inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" placeholder="인증번호 입력 (03:00)">
                                                        <input type="button" src="/img/icon_search.svg" onClick="javascript:fnAuthConfirm();" value="번호 확인" class="pin_completion">
                                                        <p class="dsc_error" id="auth_result" style="display:none;"></p>
                                                        <p class="txt_reject">휴대폰으로 전송된 인증번호 입력 후 '확인' 버튼을 눌러주세요.</p>
                                                    </div>
                                                </fieldset>
                                            </td>
                                            <!-- //phonePin_form -->
                                            <!-- //휴대폰 등록 -->
                                        </tr>
                                        <?php endif;?>
                                    <?php //endif;?>
                                    </tbody>
                                </table>
                            </div>
                        </fieldset>

                        <!-- 사용중인 유료서비스 -->
                        <div class="inUse_box">
                            <h3 class="title">사용중인 유료서비스</h3>
                            <div class="use_service">
                                <?php if(isset($cs_paydata)) :?>
                                <ul>
                                    <li class="th">초이스스탁US 프리미엄</li>
                                    <li class="td"><?=date('y.m/d', strtotime($cs_paydata['p_start_date']))?>~<?=date('y.m/d', strtotime($cs_paydata['p_end_date']))?> <span class="method"><?=($cs_paydata['p_type']=='A') ? '월자동':'기간'?></span></li>
                                </ul>
                                <?php endif;?>
                                <?php if(isset($ko_paydata) && $ko_paydata['ss_pay'] != '') :?>
                                <ul>
                                    <li class="th">슈퍼스톡스 프리미엄</li>
                                    <li class="td"><?=date('y.m/d', strtotime($ko_paydata['ss_start_date']))?>~<?=date('y.m/d', strtotime($ko_paydata['ss_end_date']))?> <span  class="method"><?=($ko_paydata['ss_type']=='A') ? '월자동':'기간'?></span></li>
                                </ul>
                                <?php endif;?>
                                <?php if(isset($ko_paydata) && $ko_paydata['vl_pay'] != '') :?>
                                <ul>
                                    <li class="th">밸류라인 프리미엄</li>
                                    <li class="td"><?=date('y.m/d', strtotime($ko_paydata['vl_start_date']))?>~<?=date('y.m/d', strtotime($ko_paydata['vl_end_date']))?> <span  class="method"><?=($ko_paydata['vl_type']=='A') ? '월자동':'기간'?></span></li>
                                </ul>
                                <?php endif;?>
                            </div>
                            <!-- //use_service -->
                        </div>
                        <!-- //inUse_box -->

                        <?php //if($this->session->userdata('is_paid')===TRUE) :?>
                        <div class="agree_area">
                            <div class="agree_from">
                                <p class="free_sum">
                                    <div class="label<?=($user_marketing=='Y') ? ' active':''?>" id="marketing_tab">
                                        <p class="label_chk"><i></i>뉴스레터, 특별 프로모션 정보를 수신합니다.(선택)</p>
                                    </div>
                            </div>
                        </div>
                        <?php //endif;?>

                    </form>
                </div>
            </div>
            <!-- //mapage_area -->

        <?php //if($this->session->userdata('is_paid')===TRUE) :?>
            <?php //if(isset($user_phone)&&$user_phone!='') :?>

            <div class="btnArea modBtn">
                <a href="/" class="btn btn_cncl">취소</a>
                <a href="javascript:fnInfoSave();" class="btn btn_save">수정완료</a>
            </div>
            <?php //endif;?>
        <?php //endif;?>

        <div class="withdrawal">
            <a href="/member/withdrawal" class="btn_withdrawal">회원탈퇴<i></i></a>
        </div>