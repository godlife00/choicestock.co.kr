<?php if(date('Ymd') < '20221209') :?>
		<?php if($this->session->userdata('is_paid')===FALSE):?>
			<!-- 초이스스탁US 프리미엄, 첫 달 3,000원! -->
			<div class="banner_event">
				<?php if($this->session->userdata('is_login') === TRUE):?>
					<?php if(rand(0, 1)) :?>
					<a href="/payment/choice" class="link_banner"><img src="/img/banner/banner_prm3000.png" alt="초이스스탁US 프리미엄, 첫 달 3,000원!"></a>
					<?php else:?>
					<a href="https://super.choicestock.co.kr/main/event" target="_blank" class="link_banner"><img src="img/banner/event_topbanner_zero_221115.png" alt="슈퍼스톡스 리턴즈 첫달 0원"></a>
					<?php endif;?>
				<?php else:?>
					<?php if(rand(0, 1)) :?>
					<a href="/member/login" class="link_banner"><img src="/img/banner/banner_prm3000.png" alt="초이스스탁US 프리미엄, 2주 무료체험"></a>
					<?php else:?>
					<a href="https://super.choicestock.co.kr/main/event" target="_blank" class="link_banner"><img src="img/banner/event_topbanner_zero_221115.png" alt="슈퍼스톡스 리턴즈 첫달 0원"></a>
					<?php endif;?>
				<?php endif;?>
			</div>
			<!-- //초이스스탁US 프리미엄, 첫 달 3,000원! -->  
		<?php else:?>
			<div class="banner_event">                    
				<?php $rand = rand(0, 2);?>
				<?php if($rand == '1') :?>
				<a href="/stock/recipe_intro" class="link_banner"><img src="/img/banner/Choicestock_BN_2.png" alt="초이스스탁US 익스텐션 추가하기"></a>
				<?php elseif($rand == '2') :?>
				<a href="/stock/vod_view/13" class="link_banner"><img src="/img/banner/Choicestock_BN_1.png" alt="초이스스탁US 100% 활용하기"></a>
				<?php else :?>
				<a href="https://super.choicestock.co.kr/main/event" target="_blank" class="link_banner"><img src="img/banner/event_topbanner_zero_221115.png" alt="슈퍼스톡스 리턴즈 첫달 0원"></a>
				<?php endif;?>
			</div>
		<?php endif;?>
<?php else :?>		
		<?php if($this->session->userdata('is_paid')===FALSE):?>
			<!-- 초이스스탁US 프리미엄, 첫 달 3,000원! -->
			<div class="banner_event">
				<?php if($this->session->userdata('is_login') === TRUE):?>
				<a href="/payment/choice" class="link_banner"><img src="/img/banner/banner_prm3000.png" alt="초이스스탁US 프리미엄, 첫 달 3,000원!"></a>
				<?php else:?>
				<a href="/member/login" class="link_banner"><img src="/img/banner/banner_prm3000.png" alt="초이스스탁US 프리미엄, 2주 무료체험"></a>
				<?php endif;?>
			</div>
			<!-- //초이스스탁US 프리미엄, 첫 달 3,000원! -->  
		<?php else:?>
			<div class="banner_event">                    
			<?php if(rand(0, 1)) :?>
				<a href="/stock/recipe_intro" class="link_banner"><img src="/img/banner/Choicestock_BN_2.png" alt="초이스스탁US 익스텐션 추가하기"></a>
			<?php else:?>
				<a href="/stock/vod_view/13" class="link_banner"><img src="/img/banner/Choicestock_BN_1.png" alt="초이스스탁US 100% 활용하기"></a>
			<?php endif;?>
			</div>
		<?php endif;?>
<?php endif;?>