            <!-- 주요 콘텐츠 -->
            <div class="withdrawal_com">
                <h2 class="h2_title">회원탈퇴</h2>
                <p class="txt"><strong>회원탈퇴</strong>가 완료되면 가입시 입력했던 회원정보가 모두 삭제됩니다.</p>

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
							<li class="td"><?=date('y.m/d', strtotime($ko_paydata['ss_start_date']))?>~<?=date('y.m/d', strtotime($ko_paydata['ss_end_date']))?> <span	class="method"><?=($ko_paydata['ss_type']=='A') ? '월자동':'기간'?></span></li>
						</ul>
						<?php endif;?>
						<?php if(isset($ko_paydata) && $ko_paydata['vl_pay'] != '') :?>
						<ul>
							<li class="th">밸류라인 프리미엄</li>
							<li class="td"><?=date('y.m/d', strtotime($ko_paydata['vl_start_date']))?>~<?=date('y.m/d', strtotime($ko_paydata['vl_end_date']))?> <span	class="method"><?=($ko_paydata['vl_type']=='A') ? '월자동':'기간'?></span></li>
						</ul>
						<?php endif;?>
					</div>
					<!-- //use_service -->
				</div>
				<!-- //inUse_box -->

                <ul class="withdrawal_freetxt">
                    <h3 class="service_title"><strong>회원탈퇴 전에 꼭! 확인해주세요.</strong></h3>
                    <li class="title">회원탈퇴와 동시에 회원 서비스를 이용할 수 없습니다.</li>
                    <li class="title">유료서비스를 이용 중이라면, 서비스해지 후 회원탈퇴를 진행해주세요.</li>
                    <li class="title">작성한 게시글은 회원탈퇴 후 수정/삭제 할 수 없습니다.</li>
                    <li class="title"><strong>회원탈퇴 후 6개월 간 재가입이 불가합니다.</strong></li>
                    <li class="title">회원자격이 운영자에 의해 정지된 경우에는 회원탈퇴 후 재가입이 제한됩니다.</li>
                </ul>
                <!-- //withdrawal_freetxt -->
                <div class="btnArea wtwalBtn">
                    <a href="<?=(isset($cs_paydata) || isset($ko_paydata))? 'javascript:alert(\'유료서비스 이용 중입니다. 서비스해지 후 회원탈퇴를 진행해주세요.\');':'javascript:fnWithdrawal();'?>" class="btn btn_ssin">회원탈퇴</a>
                </div>
            </div>
            <!-- //withdrawal_com -->