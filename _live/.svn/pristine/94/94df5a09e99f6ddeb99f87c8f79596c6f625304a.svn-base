<?php /*
 [MakeDt] => 2021-06-14 오전 11:11:07
    [MakeNM] => 권예림
    [Title] => "테이퍼링 공식화는 9월 FOMC"..."파월 연임 가능성 74%"
    [Body] 

*/?>
			<div class="view_con">
				<div class="top">
                    <h5 class="title"><?=$row['Title']?></h5>
					<span class="wtr_rep">한국경제TV</span>
                    <span class="wtr_name"><?=$row['MakeNM']?></span>
					<?php 
						$display_time = $row['MakeDt'];
						$display_time = preg_replace('/[^0-9]*/s', '', $display_time);
						if(strlen($display_time) == 13) $display_time = substr($display_time, 0, 8).'0'.substr($display_time, 8);
					?>
                    <span class="day"><?=date('y.m/d H:i', strtotime($display_time))?></span>
                    <a href="javascript:history.back(-1);" class="go_list">목록보기</a>
                </div>
                <div class="mid">
					<?=str_replace('<br /><br /><br /><br />', '<br /><br />', $row['Body'])?>
                </div>
                <a href="javascript:history.back(-1);" class="go_list">목록보기</a>
            </div>