			<!-- 주요 콘텐츠 -->
            <div class="sub_top">
				<?php if($this->session->userdata('is_login')===TRUE):?>
                <div class="login">
                    <p><span class="user_name"><?=$this->session->userdata('user_name')?></span>님 <a href="/member/logout" class="btn_logout">[로그아웃]</a></p>
				<?php else :?>
				<div class="logout"><p><a href="/member/login">로그인</a> 해주세요.</p>
				<?php endif;?>
				</div>
                <a href="<?=($this->session->userdata('is_login')===TRUE) ? '/member/notice':'/member/login?ru='.urlencode('member/notice')?>" class="settings_more"><span>설정</span></a>
				
				<?php if($this->session->userdata('is_login')===FALSE):?>
                <div class="btnArea payBtn">
                    <a href="/payment/choice" class="btn btn_save"><strong>초이스스탁US 프리미엄</strong> 가입/결제</a>
                </div>
				<?php endif;?>
				
				<ul class="menu_list">
                    <li<?=($this->session->userdata('is_login')===TRUE) ? '':' class="inactive"'?>><a href="<?=($this->session->userdata('is_login')===TRUE) ? '/member/info':'/member/login?ru='.urlencode($_SERVER['REQUEST_URI'])?>">내 정보</a></li>
                    <li<?=($this->session->userdata('is_login')===TRUE) ? '':' class="inactive"'?>><a href="/member/paylist">가입내역</a></li>
                    <li><a href="/stock/alarm">알림</a></li>
                    <li><a href="/main/service_guide">FAQ</a></li>

                </ul>
                <!-- //menu_list -->
                    <!--<li><a href="/main/search">관심종목</a></li>
                    <li><a href="/main/service_guide">가이드</a></li>-->
				<?php //if($this->session->userdata('is_login')===FALSE):?>
                <!--<div class="btnArea payBtn">                        
                    <a href="/member/paylist" class="btn btn_save">가입/결제 내역 확인</a>
                </div>-->
				<?php //endif;?>
            </div>

            <div class="sub_mid">
                <dl class="menu_link">
                    <dt class="sum">종목</dt>
                    <dd class="txt"><a href="/stock/recommend">종목추천</a></dd>
                    <dd class="txt"><a href="/stock/recommend/portfolio">포트폴리오</a></dd>
                    <dd class="txt"><a href="/stock/winner">승부주</a></dd>
                </dl>
                <dl class="menu_link">
                    <dt class="sum">진단</dt>
                    <dd class="txt"><a href="/main/onestop">종목 원스탑 진단</a></dd>
                    <dd class="txt"><a href="/main/search">관심종목</a></dd>
                </dl>
                <dl class="menu_link">
                    <dt class="sum">발굴</dt>
                    <dd class="txt"><a href="/attractiveness/attractive?sort=total&netincome=all&marketcap=over100billion">투자매력도순위</a></dd>
                    <dd class="txt"><a href="/stock/recipe_intro">투자레시피</a></dd>
                    <dd class="txt"><a href="/stock/catch_info">종목캐치</a></dd>
                    <dd class="txt"><a href="/stock/research">미국주식 탐구생활</a></dd>
                </dl>
				<dl class="menu_link">       
                    <dt class="sum">기타</dt>             
                    <dd class="txt"><a href="/main/service">서비스소개</a></dd>
                    <dd class="txt"><a href="/stock/morning">모닝브리핑</a></dd>
                </dl>
            </div>
