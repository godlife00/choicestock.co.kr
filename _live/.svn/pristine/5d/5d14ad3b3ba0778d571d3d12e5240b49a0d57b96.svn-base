<?php 
class Menu
{
    public function get_header_contents($template='1', $data=array()) {
        
		// ================ [ hamburger_html ] ================
        /*
		$hamburger_html = '
            <div class="ninja-btn navToggle" title="menu">
                <a class="menu-trigger btn_hamburger" href="#">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>';
		*/

        // ================ [ back_html ] ================
        //$back_html = '<div class="history_back" title="이전페이지">';
        
		$back_html = '<img src="/img/icon_back.png" alt="뒤로가기">';
        
		/*
		if($template == '4') {
            $back_html = '<div class="history_back back_sch" title="이전페이지">';
        }
		*/

		if(isset($data['header_data']['back_url']) && $data['header_data']['back_url']) {
			if( $data['header_data']['back_url'] == '-1' ) {
				$back_url = 'onclick="history.back(1); return false;"';
			}
			else {
				$back_url = 'onclick="location.href=\''.$data['header_data']['back_url'].'\';"';
			}
		}

        $back_html = '<a href="#" '.$back_url.' class="his_back">'.$back_html.'</a>';

        // ================ [ header_top_html ] ================
        $header_top_html = '<div class="headerTop">';
        //if($template == '2') {
        //    $header_top_html .= '
        //        <a href="/" class="home"><img src="/img/icon_home@2x.png" alt="홈으로 가기"></a>';
        //}

        $header_top_html .= '
            <h1 class="headerLogo">
                <span>';
        //if($template == '1') {
            //$header_top_html .= '<img src="/img/icon_home@2x.png" alt="홈으로 가기" class="home">';
        //}
		if($data['header_data']['head_url']) $header_top_html .= '<a href="'.$data['header_data']['head_url'].'">';

        $header_top_html .= $data['header_data']['head_title'];
		if($data['header_data']['head_url']) $header_top_html .= '</a>';
        $header_top_html .= '
                </span>
            </h1>';

		if($data['header_data']['back_url']) $header_top_html .= $back_html;

//$this->header_data['header_template'] = '16
//echo '<pre>'; print_r($data['header_data']);
		$check_time = date("YmdHis",time()-60*60*36);
		$noti_time = date('YmdHis', strtotime($data['header_data']['noti_list'][0]['nt_display_date']));
		
		$login_view = '';
		//echo 'header_class====>'.$data['header_class'];
		if($data['is_login'] == FALSE && ( $data['header_class'] == ' h_sub' ||  $data['container_class'] == 'sub_service')) {
			$login_view = '<a href="/member/login" class="btn_login">로그인</a>';
		}

		$header_top_html .= '<div class="hm">'.$login_view;

        if($data['header_data']['show_alarm']) {

			$header_top_html .= '
                <!-- 확인안한 알림이 있는 경우 class = alarm 보여짐 -->
                <a href="/stock/alarm" class="alarm">
                    <img src="/img/icon_alarm.png" alt="알림">';

            if(sizeof($data['header_data']['noti_list']) > 0 && $check_time <= $noti_time) {
                $header_top_html .= '
                    <i>확인안함</i>';
            }
            $header_top_html .= '
                </a></span>';
        }
		
		/*
        $search_img_name = 'icon_search.png';
        if(in_array($template, array('10','14'))) {
            $search_img_name = 'icon_search.png';
        }
		*/
        //if($template != '5') {
        if(!in_array($template, array('1','5','10','11','13','16'))) {
	        $header_top_html .= '<a href="/main/search" class="go_sch"><img src="/img/icon_search.png" alt="검색하기"></a>';
		}

		if($template == '10') {
	        $header_top_html .= '<a href="/stock/morning" class="go_briefing"><img src="/img/btn_briefing.png" alt="모닝브리핑 바로가기"></a>';
		}

        $header_top_html .= '            
            </div>
            <!-- //hm -->
        </div>';
/*
        // ================ [ search_area_html ] ================
        $search_area_html = '
            <div class="searchArea">
                <form action="">
                    <fieldset>
                        <a href="/main/search" style="display: block;">
                            <input type="text" placeholder="종목명 또는 심볼을 입력하세요.." class="searchInput">
                            <input type="image" src="/img/icon_searchB@2x.png" alt="검색" class="searchBtn">
                        </a>
                    </fieldset>
                </form>
            </div>';


        // ================ [ tag_top_html ] ================
        $tag_top_html = '
            <div class="tagTop">
                <ul>';

        foreach($data['top_popular_ticker'] as $val) {
            $tag_top_html .= '<li><a href="/search/invest_charm/'.$val['ticker'].'">'.$val['name'].'</a></li>';
        }
        $tag_top_html .= '
                </ul>
            </div>';


        // ================ [ sch_summary_html ] ================
        $sch_summary_html = '
            <div class="schSummary navFixed">
                <!--  //검색창 상단고정 class = navFixed -->
                <h2 class="headerLogo"><a href="/">'.SERVICE_NAME.'</a></h2>
                <span>Alphabet</span>
                <a href=""><span>검색</span></a>
            </div>';

*/

/*
        // ================ [ panel_left_html ] ================
        $panel_left_html = '
            <div class="panel left">
                <a href="/"><h3 class="panel_title">월가히어로</h3></a>
                <!-- 메뉴의 내용부분 -->
                <ul class="menu">
                    <li><a href="/stock/recommend">종목추천</a></li>
                    <li><a href="/stock/analysis">종목분석</a></li>
                    <li><a href="/attractiveness/attractive?sort=total&netincome=all&marketcap=over100billion">전종목 투자매력도</a></li>
                    <li><a href="/stock/recipe">투자레시피</a></li>
                    <li><a href="/stock/master">대가의 종목</a></li>
                    <li><a href="/stock/research">미국주식 탐구생활</a></li>
                </ul>
                <div class="btm">
                    <ul>
                        <li>
                            <a href="#"><i class="panel_alarm"><img src="/img/icon_alarm@2x.png" alt="">';
       
		
        if(sizeof($data['header_data']['noti_list']) > 0 && $check_time <= $noti_time) {
            $panel_left_html .= '
                            <strong class="alarm_dot">확인안함</strong>';
        }
*/
/*		
		if(sizeof($data['header_data']['noti_list']) > 0) {
            $panel_left_html .= '
                            <strong class="alarm_dot">확인안함</strong>';
        }
*/		
/*
		$panel_left_html .= '
                        </i> 알림</a>
                        </li>
                        <li><a href="/main/service"><i class="panel_home"><img src="/img/icon_info@2x.png" alt=""></i> 서비스소개</a></li>';
        //if($template == '1') {
            $panel_left_html .= '
                        <li class=""><a href="/"><i class="panel_home"><img src="/img/icon_home@2x.png" alt=""></i> 메인페이지로 가기</a></li>';
        //}
        $panel_left_html .= '
                    </ul>
                </div>
            </div>';
*/
/*
        // ================ [ panel_overlay_html ] ================
        $panel_overlay_html = '
            <div class="panel-overlay"></div>';
*/

        $return_html = '<div id="header" class="header'.$data['header_class'].'">';
        //$return_html = '<div id="header" class="header '.$data['header_data']['header_type'].'">';

        switch($template) {
            case '1':
                //$return_html .= $hamburger_html;
                $return_html .= $header_top_html;
                //$return_html .= $search_area_html;
                //$return_html .= $tag_top_html;
                //$return_html .= $sch_summary_html;
                //$return_html .= $panel_left_html;
                //$return_html .= $panel_overlay_html;
                break;

            case '2':
                //$return_html .= $hamburger_html;
                $return_html .= $header_top_html;
                //$return_html .= $panel_left_html;
                //$return_html .= $panel_overlay_html;
                break;

            case '3':
                //$return_html .= $back_html;
                $return_html .= $header_top_html;
                break;

            case '4':
                $return_html .= $hamburger_html;
                $return_html .= $back_html;
                $return_html .= $header_top_html;
                $return_html .= $panel_left_html;
                $return_html .= $panel_overlay_html;
                break;

            case '5': 
                //$return_html .= $back_html;
                //$return_html .= $header_top_html;
                $return_html = '';
                break;
            case '16': // 메뉴
            case '6': // 레시피
            case '7': // 투자매력도
            case '8': // 탐구생활
            case '9': // 탐구생활
                $return_html .= $header_top_html;
                break;
            case '10': // 알림
                $return_html .= $header_top_html;
                break;
            case '11': // 검색
                $return_html .= $header_top_html;
                //$return_html .= $back_html;
                break;
            case '12': // 검색
                $return_html .= $header_top_html;
                break;
            case '13': // 2주무료결제
                $return_html .= $header_top_html;
                break;
			default : 
				break;
        }
		if($return_html != '') {
	        $return_html .= '</div>';
		}
        return $return_html;
    }

}
       
