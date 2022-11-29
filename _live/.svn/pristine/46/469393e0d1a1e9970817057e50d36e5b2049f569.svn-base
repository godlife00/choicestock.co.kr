			<h2 class="h2_title">알림 서비스</h2>
            <div class="alarm_note">
                <h3 class="h3_title">관심종목 알림 서비스를 받아보세요</h3>
				<ul class="list">
                    <li class="sum">매일 오전, 관심종목의 주가정보가 배달됩니다.</li>
                    <li class="txt">- 제공서비스 : 관심종목의 전일종가/ 실적발표-배당정보, 신규 종목추천/종목분석 알림 등</li>
                </ul>
                <ul class="list">
                    <li class="sum">알림서비스를 받기 위해서는 ‘카카오톡 계정'이 필요합니다.</li>
					<?php if(isset($m_push_date)) :?>
                    <li class="txt" id="push_date">- 알림 서비스가 설정되었습니다. <?=date('Y. m/d', strtotime($m_push_date))?></li>
					<?php endif;?>
                </ul>
            </div>
            <!-- //alarm_note -->

            <div class="alarm_from">
                <div class="label active">
                    <p class="label_chk">관심종목 알림
                        <div class="toggleWrap">
                            <input type="checkbox" id="toggle_alarm" name="m_push_ticker" onClick='javascript:fnNoticeSet(this)' value="Y" <?=($m_push_ticker=='Y') ? 'checked':''?> />
                            <!-- checked = 비활성 -->
                            <div>
                                <label for="toggle_alarm">
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </p>
                </div>
                <div class="label">
                    <p class="label_chk">서비스 알림(종목추천/분석)
                        <div class="toggleWrap">
                            <input type="checkbox" id="toggle_alarm2" name="m_push_service" onClick='javascript:fnNoticeSet(this)' value="Y" <?=($m_push_service=='Y') ? 'checked':''?> />
                            <!-- checked = 비활성 -->
                            <div>
                                <label for="toggle_alarm2">
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </p>
                </div>

            </div>
            <!-- //alarm_from -->

            <h2 class="h2_title">정보수신</h2>
            <div class="alarm_from">
                <div class="label active">
                    <p class="label_chk">뉴스레터, 특별 프로모션 정보를 수신합니다.
                        <div class="toggleWrap">
                            <input type="checkbox" id="toggle_alarm3" name="m_push_marketing" onClick='javascript:fnNoticeSet(this)' value="Y" <?=($m_push_marketing=='Y') ? 'checked':''?> />
                            <!-- checked = 비활성, checked 없는경우 활성화 -->
                            <div>
                                <label for="toggle_alarm3">
                                    <span></span>
                                </label>
                            </div>
                        </div>
                    </p>
                </div>
            </div>
            <!-- //alarm_from -->