// window.alert 재정의
window.alert = function(message) {
    // alertWin 요소 찾기
    var alertWin = document.getElementById('alertWin');
    var hideTimeout;

    // alertWin이 없으면 생성
    if (!alertWin) {
        alertWin = document.createElement('div');
        alertWin.id = 'alertWin';
        alertWin.style.position = 'fixed';
        alertWin.style.left = '50%';
        alertWin.style.bottom = '55px';
        alertWin.style.transform = 'translate(-50%, -50%)';
        alertWin.style.display = 'none';
        alertWin.style.zIndex = '99';
        alertWin.style.maxWidth = '84%';
        alertWin.style.boxSizing = 'border-box';
        alertWin.style.margin = '0 auto';
        alertWin.style.padding = '16px 30px';
        alertWin.style.borderRadius = '100px';
        alertWin.style.background = 'rgba(49, 59, 72, 0.90)';

        alertWin.style.color = '#FFF';
        alertWin.style.fontFamily = 'Pretendard, sans-serif';
        alertWin.style.fontSize = '15px';
        alertWin.style.fontWeight = '400';
        alertWin.style.lineHeight = '24px';
        alertWin.style.letterSpacing = '-0.3px';

        alertWin.style.whiteSpace = 'nowrap';
        alertWin.style.pointerEvents = 'none';
        alertWin.style.display = 'flex';
        alertWin.style.flexDirection = 'column';
        alertWin.style.justifyContent = 'center';
        alertWin.style.alignItems = 'center';
        alertWin.style.gap = '8px 8px';

        document.body.appendChild(alertWin);
    }

    // keyframes가 없으면 동적으로 추가
    if (!document.getElementById('alertToastKeyframes')) {
        var style = document.createElement('style');
        style.id = 'alertToastKeyframes';
        style.innerHTML = `
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideIn50 {
            0% { transform: translate(-50%, calc(-50% + 400px)); animation-timing-function: ease-out; }
            60% { transform: translate(-50%, calc(-50% - 30px)); animation-timing-function: ease-in; }
            80% { transform: translate(-50%, calc(-50% + 10px)); animation-timing-function: ease-out; }
            100% { transform: translate(-50%, -50%); animation-timing-function: ease-in; }
        }
        `;
        document.head.appendChild(style);
    }

    // 메시지 세팅
    alertWin.innerText = message;

    // 표시
    alertWin.style.display = 'flex';
    alertWin.style.animation = 'fadeIn 0.8s, slideIn50 0.4s linear';
    // 애니메이션 끝나면 animation 속성 제거(재사용 위해)
    alertWin.addEventListener('animationend', function clearAnim(e) {
        alertWin.style.animation = '';
        alertWin.removeEventListener('animationend', clearAnim);
    });

    // 기존 타임아웃 제거
    if (alertWin.hideTimeout) {
        clearTimeout(alertWin.hideTimeout);
    }

    // 닫기 함수
    function hideAlert() {
        alertWin.style.display = 'none';
        if (alertWin.hideTimeout) {
            clearTimeout(alertWin.hideTimeout);
            alertWin.hideTimeout = null;
        }
    }

    // 2.5초 후 자동 닫힘
    alertWin.hideTimeout = setTimeout(hideAlert, 2500);
};

// 확인 버튼이 포함된 alert 창 (버튼 타입 토스트 스타일)
window.confirmAlert = function(message, callback, btnText) {
    var confirmWin = document.getElementById('confirmWin');
    var txtP, spanMsg, strongGroup, confirmBtn;
    btnText = btnText || '확인';

    // confirmWin이 없으면 생성
    if (!confirmWin) {
        confirmWin = document.createElement('div');
        confirmWin.id = 'confirmWin';
        confirmWin.className = 'toast_popup_btn btn_type';
        // 스타일 적용
        confirmWin.style.position = 'fixed';
        confirmWin.style.left = '50%';
        confirmWin.style.bottom = '55px';
        confirmWin.style.transform = 'translate(-50%, -50%)';
        confirmWin.style.display = 'none';
        confirmWin.style.zIndex = '99';
        confirmWin.style.maxWidth = '84%';
        confirmWin.style.boxSizing = 'border-box';
        confirmWin.style.margin = '0 auto';
        confirmWin.style.padding = '10px 24px';
        confirmWin.style.borderRadius = '100px';
        confirmWin.style.background = 'rgba(49, 59, 72, 0.90)';
        confirmWin.style.color = '#FFF';
        confirmWin.style.fontFamily = 'Pretendard, sans-serif';
        confirmWin.style.fontSize = '15px';
        confirmWin.style.fontWeight = '400';
        confirmWin.style.lineHeight = '24px';
        confirmWin.style.letterSpacing = '-0.3px';
        confirmWin.style.flexDirection = 'column';
        confirmWin.style.justifyContent = 'center';
        confirmWin.style.alignItems = 'center';
        confirmWin.style.gap = '8px 16px';
        confirmWin.style.boxShadow = 'none';

        // <p class="txt">
        txtP = document.createElement('p');
        txtP.className = 'txt';
        txtP.style.display = 'flex';
        txtP.style.alignItems = 'center';
        txtP.style.justifyContent = 'flex-start';
        txtP.style.gap = '8px 16px';
        txtP.style.width = '100%';
        txtP.style.color = '#FFF';
        txtP.style.fontFamily = 'Pretendard, sans-serif';
        txtP.style.fontSize = '15px';
        txtP.style.fontWeight = '400';
        txtP.style.lineHeight = '24px';
        txtP.style.letterSpacing = '-0.3px';
        txtP.style.margin = '0';

        // <span><strong class="group_name">...</strong>에 등록되었습니다.</span>
        spanMsg = document.createElement('span');
        spanMsg.style.flex = '1 1 0';
        spanMsg.style.overflow = 'hidden';
        spanMsg.style.textOverflow = 'ellipsis';
        spanMsg.style.whiteSpace = 'nowrap';
        spanMsg.style.minWidth = '0';
        spanMsg.style.display = 'flex';
        spanMsg.style.gap = '4px 4px';
        spanMsg.style.color = '#FFF';
        spanMsg.style.fontFamily = 'Pretendard, sans-serif';
        spanMsg.style.fontSize = '15px';
        spanMsg.style.fontWeight = '400';
        spanMsg.style.lineHeight = '24px';
        spanMsg.style.letterSpacing = '-0.3px';

        strongGroup = document.createElement('strong');
        strongGroup.className = 'group_name';
        strongGroup.style.display = 'inline-block';
        strongGroup.style.overflow = 'hidden';
        strongGroup.style.textOverflow = 'ellipsis';
        strongGroup.style.whiteSpace = 'nowrap';
        strongGroup.style.verticalAlign = 'middle';
        strongGroup.style.maxWidth = '40ch';
        strongGroup.style.color = '#FFF';
        strongGroup.style.fontFamily = 'Pretendard, sans-serif';
        strongGroup.style.fontSize = '15px';
        strongGroup.style.fontWeight = '600';
        strongGroup.style.lineHeight = '24px';
        strongGroup.style.letterSpacing = '-0.3px';

        // <button class="toast_btn">변경</button>
        confirmBtn = document.createElement('button');
        confirmBtn.className = 'toast_btn';
        confirmBtn.innerText = btnText;
        confirmBtn.style.display = 'flex';
        confirmBtn.style.alignItems = 'center';
        confirmBtn.style.justifyContent = 'center';
        confirmBtn.style.border = 'none';
        confirmBtn.style.background = '#24282C';
        confirmBtn.style.padding = '10px 12px';
        confirmBtn.style.margin = '0';
        confirmBtn.style.boxShadow = 'none';
        confirmBtn.style.outline = 'none';
        confirmBtn.style.cursor = 'pointer';
        confirmBtn.style.appearance = 'none';
        confirmBtn.style.borderRadius = '8px';
        confirmBtn.style.boxSizing = 'border-box';
        confirmBtn.style.color = '#FFF';
        confirmBtn.style.fontFamily = 'Pretendard, sans-serif';
        confirmBtn.style.fontSize = '13px';
        confirmBtn.style.fontStyle = 'normal';
        confirmBtn.style.fontWeight = '600';
        confirmBtn.style.lineHeight = '16px';
        confirmBtn.style.letterSpacing = '-0.3px';

        // 구조 조립
        spanMsg.appendChild(strongGroup);
        txtP.appendChild(spanMsg);
        txtP.appendChild(confirmBtn);
        confirmWin.appendChild(txtP);
        document.body.appendChild(confirmWin);
    } else {
        txtP = confirmWin.querySelector('.txt');
        spanMsg = txtP.querySelector('span');
        strongGroup = spanMsg.querySelector('.group_name');
        confirmBtn = txtP.querySelector('.toast_btn');
    }

    // 메시지 세팅: message가 "그룹명+메시지" 형태일 때 그룹명 강조
    // 예: "사고싶다사고... 에 등록되었습니다." → 그룹명: 사고싶다사고..., 나머지: 에 등록되었습니다.
    var groupMatch = message.match(/^([\S]+)(.*)$/);
    if (groupMatch) {
        strongGroup.textContent = groupMatch[1];
        spanMsg.childNodes.length > 1 && spanMsg.removeChild(spanMsg.childNodes[1]);
        var restText = document.createTextNode(groupMatch[2]);
        spanMsg.appendChild(restText);
    } else {
        strongGroup.textContent = message;
        spanMsg.childNodes.length > 1 && spanMsg.removeChild(spanMsg.childNodes[1]);
    }

    // 표시
    confirmWin.style.display = 'flex';
    confirmWin.style.animation = 'fadeIn 0.8s, slideIn50 0.4s linear';
    confirmWin.addEventListener('animationend', function clearAnim(e) {
        confirmWin.style.animation = '';
        confirmWin.removeEventListener('animationend', clearAnim);
    });

    // 버튼 클릭 시 닫기 및 콜백 실행
    confirmBtn.onclick = function() {
        confirmWin.style.display = 'none';
        if (typeof callback === 'function') callback();
    };
};
