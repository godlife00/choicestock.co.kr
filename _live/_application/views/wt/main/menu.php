			<!-- 주요 콘텐츠 -->
            <div class="sub_top">
                <div class="login">
                    <p><span class="user_name"><?=$this->session->userdata('user_name');?></span><span class="mem_rank">님 <?=($this->session->userdata('is_paid')===FALSE) ? '(일반회원)':''?></span></p>
                </div>                
                <a href="/<?=WT?>_member/info" class="settings_more"><span>정보 설정</span></a>
				<?php
				//안드로이드 인앱 결제 후 삭제
				//if($this->session->userdata('user_ostype') != 'A') :
				?>
                <div class="btnArea payBtn">
                    <a href="/<?=WT?>_main/service" class="btn btn_save"><strong>미국주식창 프리미엄</strong> 가입</a>
                </div>
				<?php //endif;?>

				<?php
				//안드로이드 인앱 결제 후 삭제
				//if($this->session->userdata('user_ostype') != 'A') :?>
                <ul class="menu_list">
                    <!-- class inactive 인 경우 비활성화 -->
                    <li><a href="/<?=WT?>_main/search">관심종목</a></li>
					<?php $return_url = 'https://wowtv.choicestock.co.kr/'.WT.'_main/menu'; ?>
                    <li><a href="https://swbilluser.wowtv.co.kr/MyPage/Main?sitecode=1&uuid=<?=$this->session->userdata('user_key');?>&phno=<?=$this->common->csAesDecryptSSL($this->session->userdata('user_phone'), WT_ENC_KEY);?>&swReturnUrl=<?=$return_url;?>">가입내역</a></li>
                    <li><a href="/<?=WT?>_stock/alarm">알림</a></li>
                    <li><a href="/<?=WT?>_main/service">서비스안내</a></li>
                </ul>
                <!-- //menu_list -->
				<?php //endif;?>
            </div>
            <div class="sub_mid">
                <dl class="menu_link">
                    <dt class="sum">한국경제TV 뉴스</dt>
                    <dd class="txt"><a href="/<?=WT?>_stock/wowtv">HOT클립</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_stock/news">주요뉴스</a></dd>
                </dl>			
                <dl class="menu_link">
                    <dt class="sum">추천</dt>
                    <dd class="txt"><a href="/<?=WT?>_stock/recommend">종목추천</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_stock/recommend/portfolio">포트폴리오</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_stock/winner">승부주</a></dd>                    
                </dl>
                <dl class="menu_link">
                    <dt class="sum">진단</dt>                    
                    <dd class="txt"><a href="/<?=WT?>_main/onestop">원스톱 진단</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_main/search">인기종목</a></dd>
                </dl>
                <dl class="menu_link">
                    <dt class="sum">탐색</dt>
                    <dd class="txt"><a href="/<?=WT?>_stock/recipe_intro">투자레시피</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_attractiveness/attractive?sort=total&netincome=all&marketcap=over100billion">전종목 투자매력도</a></dd>
                    <dd class="txt"><a href="/<?=WT?>_stock/catch_info">종목캐치</a></dd>                    
                    <dd class="txt"><a href="/<?=WT?>_stock/note">종목노트</a></dd>                    
                </dl>
                <dl class="menu_link">
                    <dt class="sum">한국경제TV 패밀리 앱</dt>
                    <dd class="family_app">
                        <a href="http://sw.wowtv.co.kr/appdown.asp" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_01.png" alt="주식창"></span>
                            <span>주식창</span>
                        </a>
                    </dd>
					<?php
					//안드로이드 인앱 결제 후 삭제
					//if($this->session->userdata('user_ostype') != 'A') :
					?>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.supplybox&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_02.png" alt="이현상 수급박스">
                            </span><span>이현상 수급박스</span>
                        </a>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.aichart&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_03.png" alt="김종철 증권알파고">
                            </span><span>김종철 증권알파고</span>
                        </a>
                    </dd>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.stockpoint&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_04.png" alt="류태형 로켓축">
                            </span><span>류태형 로켓축</span>
                        </a>
                    </dd>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.stocksignal&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_05.png" alt="장동우 시그널">
                            </span><span>장동우 시그널</span>
                        </a>
                    <!--<dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=winix.wow.threetempo&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_06.png" alt="최승욱 종목점수">
                            </span><span>최승욱 종목점수</span>
                        </a>
                    </dd>-->
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.victorystock&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_07.png" alt="권태민 오늘승부주">
                            </span><span>권태민 오늘승부주</span>
                        </a>
                    </dd>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.dantatrading&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_08.png" alt="박영호 수급왕">
                            </span><span>박영호 수급왕</span>
                        </a>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.tradingroom&hl=ko&gl=US">
                            <span class="app_logo"><img src="/img/wowtv/family_app_09.png" alt="강동진 트레이딩룸">
                            </span><span>강동진 트레이딩룸</span>
                        </a>
                    </dd>
                    <dd class="family_app">
                        <a href="https://play.google.com/store/apps/details?id=kr.co.wowtv.StockPredictor&hl=ko&gl=US" target="_blank">
                            <span class="app_logo"><img src="/img/wowtv/family_app_10.png" alt="김문석 미래주가">
                            </span><span>김문석 미래주가</span>
                        </a>
                    </dd>
					<?php //endif;?>
                </dl>
            </div>