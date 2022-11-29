<?php 
	//날짜표기 수정 : 표출시간+10 > 현재시간 = 표출시간, 표출시간+10 < 현재시간 = 표출시간+10
	$now = date('Y-m-d H:i:s');
	if($now >= date("Y-m-d H:i:s", strtotime($row['vw_display_date'].'+10 hours'))) {
		$view_date = date("y.m/d", strtotime($row['vw_display_date'].'+10 hours')); 
	}
	else {
		$view_date = date('y.m/d', strtotime($row['vw_display_date']));
	}
?>
			<div class="view_con">
                <div class="top">
                    <h5 class="title"><?=$row['vw_title']?></h5>
                    <span class="day"><?=$view_date?></span>
                    <a href="javascript:history.back(-1);" class="go_list">목록보기</a>
                </div>
                <div class="mid">
					<div class="iframe_video"><iframe allowfullscreen="" frameborder="0" height="100%" src="//www.youtube.com/embed/<?=$row['vw_vod_id']?>?rel=0" width="100%"></iframe></div>
                </div>
                <a href="javascript:history.back(-1);" class="go_list">목록보기</a>
            </div>

            <?php if(sizeof($vod_wowtv) > 0) : ?>
            <!-- 인기글 -->
            <div class="popularity">
                <h5 class="title">인기글</h5>
                <ul class="lst_type">
                    <?php foreach($vod_wowtv as $wowtv) : ?>
                    <li>
                        <dl class="lst_type2">
                            <dt class="tit"><a href="/<?=WT?>_stock/wowtv_view/<?=$wowtv['vw_id']?>"><strong><?=nl2br($wowtv['vw_title'])?></strong></a></dt>
                            <?php if(strlen($wowtv['vw_thumbnail']) > 0) : ?>
                            <dd class="photo"><a href="/<?=WT?>_stock/wowtv_view/<?=$wowtv['vw_id']?>"><img src="<?=$wowtv['vw_thumbnail']?>" alt=""></a></dd>
                            <?php endif; ?>
                        </dl>
                    </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <!-- //popularity -->
            <?php endif; ?>