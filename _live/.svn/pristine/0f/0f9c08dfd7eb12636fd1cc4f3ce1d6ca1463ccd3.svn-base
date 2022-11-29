            <div class="alarmArea">                
                <div class="alarmList">
                    <ul>
						<?php foreach($header_data['noti_list'] as $noti_item) : ?>
						<li>
							<a href="<?=(strlen($noti_item['nt_url']) > 3 ) ? $noti_item['nt_url'] : '#'?>">
								<span class="title"><?=$header_data['noti_table_map'][$noti_item['nt_table']]?></span>
								<span class="day"><?=date('m/d', strtotime($noti_item['nt_display_date']))?></span>
								<span class="sum">
								<?php if($noti_item['nt_table']=='recommend_tb') :?>
									<?php if($this->session->userdata('is_paid')===TRUE) :?>
										<?=$noti_item['nt_title']?><?=($noti_item['nt_ticker_name'] !='' && $noti_item['nt_ticker'] !='') ? ' - '.$noti_item['nt_ticker_name'].'('.$noti_item['nt_ticker'].')':''?>
									<?php else :?>
										<?=$noti_item['nt_title']?><?=($noti_item['nt_ticker_name'] !='' && $noti_item['nt_ticker'] !='') ? ' '.iconv_substr($noti_item['nt_ticker_name'], 0, 1, 'utf-8').'<span class="remark">* * * *</span>':''?>
									<?php endif;?>
								<?php else :?>
								<?=$noti_item['nt_title']?>
								<?php endif;?>
								</span>
							</a>
						</li>
						<?php endforeach; ?>
                    </ul>
                </div>
                <!-- //alarmList -->
            </div>