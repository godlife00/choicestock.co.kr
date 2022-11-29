            <?php if(is_array($myticker_list) && sizeof($myticker_list) > 0) : ?>
			<div class="att_wrap">
                <ul id="sortable" class="att_list">
					<?php $order=0; foreach($myticker_list as $myticker) : ?>
					<div class="list" id="tkrId<?=$order?>">
					<?php if($is_mobile===TRUE) :?>
					<i id="del" ontouchstart="javascript:fnTickerDel('<?=$order?>');">삭제</i>
					<?php else :?>
					<i id="del" onClick="javascript:fnTickerDel('<?=$order?>');">삭제</i>
					<?php endif;?>
					<li class="ui-state-default" id="myticker_<?=$order?>" value="<?=$myticker['mi_ticker']?>">
                        <a href="/search/invest_charm/<?=$myticker['mi_ticker']?>" class="title"><?=$myticker['tkr_name']?><span class="ticker"><?=$myticker['mi_ticker']?></span></a>
                        <span class="handle">드래그앤드랍</span>
                    </li>
					</div>
					<?php $order++; endforeach;?>
                </ul>
                <!-- //att_list -->
                <div class="btn_list">
                    <a href="javascript:fnMyTickerSave();">수정완료</a>
                </div>
            </div>
            <!-- //att_wrap -->
			<?php else:?>
			<div class="no_attdata">
                <p>관심종목을 먼저 등록해 주세요.<br><br>
                    종목을 검색하여 종목명 옆의 하트(♥)를 <br>
                    누르면 관심종목으로 등록됩니다.</p>
			</div>                    
			<?php endif;?>