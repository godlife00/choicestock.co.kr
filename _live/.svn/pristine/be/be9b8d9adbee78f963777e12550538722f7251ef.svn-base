<script>
var search_ticker_list = <?=json_encode($search_ticker_list)?>;
</script>      
	  <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mt-2 mt-lg-0">
            <li class="nav-item<?=($active_menu == 'main') ? ' active' : ''?>">
              <a class="nav-link" href="/cms/main/index/<?=(isset($ticker['tkr_ticker']) && $ticker['tkr_ticker']) ? $ticker['tkr_ticker'] : ''?>">데이터 / 테이블</span></a>
            </li>
            <li class="nav-item<?=($active_menu == 'chart') ? ' active' : ''?>">
              <a class="nav-link" href="/cms/main/chart/<?=(isset($ticker['tkr_ticker']) && $ticker['tkr_ticker']) ? $ticker['tkr_ticker'] : ''?>">차트(C)</a>
            </li>
            <li class="nav-item<?=($active_menu == 'common') ? ' active' : ''?>">
              <a class="nav-link" href="/cms/main/common/<?=(isset($ticker['tkr_ticker']) && $ticker['tkr_ticker']) ? $ticker['tkr_ticker'] : ''?>">공통서비스(U)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">업데이트현황(예정)</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://docs.google.com/spreadsheets/d/1pYGZYB1i4RDTrm5fNPNyzYRwShfSMFjEEAZq1wo5uNc/edit#gid=1041177586" target="_blank">문서</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="search_top searching">

        <!-- 종목명 검색창 -->
		<div id="header">
			<div class="searchArea" <?=($active_menu=='chart') ? 'id=\'pageIdxChart\'' : '' ?>>

				<form action="#" onsubmit="return false">
					<fieldset>
						<input type="text" placeholder="종목명을 입력하세요." class="searchInput">
						<input type="image" src="/cms/img/icon_searchB@2x.png" alt="검색" class="searchBtn" onclick="moveToSearch($('.globalStock #header .searchArea .AutoComplete'))">
					</fieldset>                    
				</form>                               

				<div class="AutoComplete"><!-- //자동완성 결과 노출 class : _show -->
					<ul>
					</ul>
				</div>

			</div>
		</div>
        <!-- //종목명 검색창 -->
      </div>