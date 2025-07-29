/**
 * 사용자에게 메시지를 표시하는 커스텀 alert 함수입니다.
 * 
 * @param {string} message - 사용자에게 표시할 메시지입니다.
 * @param {string} [bottomPosition='55px'] - alert 창의 하단 위치를 지정하는 선택적 매개변수입니다. 기본값은 '55px'입니다.
 */
window.alert = function(message, bottomPosition = '55px') {
    // alertWin 요소 찾기
    var alertWin = document.getElementById('alertWin');
    var hideTimeout;

    // alertWin이 없으면 생성
    if (!alertWin) {
        alertWin = document.createElement('div');
        alertWin.id = 'alertWin';
        alertWin.style.position = 'fixed';
        alertWin.style.left = '50%';
        alertWin.style.bottom = bottomPosition; // 파라미터로 받은 값 사용
        alertWin.style.transform = 'translate(-50%, -50%)';
        alertWin.style.display = 'none';
        alertWin.style.zIndex = '10001';
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
window.confirmAlert = function(message, callback, btnText, bottomPosition = '55px') {
    var confirmWin = document.getElementById('confirmWin');
    var overlay = document.getElementById('overlay'); // 오버레이 요소
    var txtP, spanMsg, confirmBtn;
    btnText = btnText || '확인';

    // 오버레이가 없으면 생성
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlay';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';        
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        overlay.style.zIndex = '98'; // confirmWin보다 낮은 z-index
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
    }

    // confirmWin이 없으면 생성
    if (!confirmWin) {
        confirmWin = document.createElement('div');
        confirmWin.id = 'confirmWin';
        confirmWin.className = 'toast_popup_btn btn_type';
        // 스타일 적용
        confirmWin.style.position = 'fixed';
        confirmWin.style.left = '50%';
        confirmWin.style.bottom = bottomPosition; // 파라미터로 받은 값 사용
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

        // <span>메시지</span>
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
        spanMsg.textContent = message; // 메시지 설정

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
        txtP.appendChild(spanMsg);
        txtP.appendChild(confirmBtn);
        confirmWin.appendChild(txtP);
        document.body.appendChild(confirmWin);
    } else {
        txtP = confirmWin.querySelector('.txt');
        spanMsg = txtP.querySelector('span');
        confirmBtn = txtP.querySelector('.toast_btn');
        spanMsg.textContent = message; // 메시지 설정
    }

    // 오버레이와 confirmWin 표시
    overlay.style.display = 'block';
    confirmWin.style.display = 'flex';
    confirmWin.style.animation = 'fadeIn 0.8s, slideIn50 0.4s linear';
    confirmWin.addEventListener('animationend', function clearAnim(e) {
        confirmWin.style.animation = '';
        confirmWin.removeEventListener('animationend', clearAnim);
    });

    // 확인 버튼 클릭 시 오버레이와 confirmWin 숨기기
    confirmBtn.onclick = function() {
        overlay.style.display = 'none';
        confirmWin.style.display = 'none';
        if (callback) callback();
    };
};

// 확인 버튼이 포함된 alert 창 (버튼 타입 디자인 팝업)
window.confirmWithCancel = function(message, confirmCallback, cancelCallback, confirmText = '확인', cancelText = '취소') {
    var confirmWin = document.getElementById('confirmWinWithCancel');
    var overlay = document.getElementById('overlayWithCancel');
    var txtP, spanMsg, confirmBtn, cancelBtn;

    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'overlayWithCancel';
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100%';
        overlay.style.height = '100%';        
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
        overlay.style.zIndex = '98';
        overlay.style.display = 'none';
        document.body.appendChild(overlay);
    }

    if (!confirmWin) {
        confirmWin = document.createElement('div');
        confirmWin.id = 'confirmWinWithCancel';
        confirmWin.className = 'modal modal_popup alert_popup';
        confirmWin.style.position = 'fixed';
        confirmWin.style.left = '50%';
        confirmWin.style.top = '50%';
        confirmWin.style.transform = 'translate(-50%, -50%)';
        confirmWin.style.display = 'none';
        confirmWin.style.zIndex = '99';
        confirmWin.style.maxWidth = '340px';
        confirmWin.style.margin = '0 auto';
        confirmWin.style.background = '#FFF';
        confirmWin.style.borderRadius = '12px';
        confirmWin.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';

        // var header = document.createElement('div');
        // header.className = 'pop_header';
        // var title = document.createElement('h1');
        // title.className = 'pop_title txt_c';
        // title.textContent = '시스템 타입';
        // header.appendChild(title);

        var content = document.createElement('div');
        content.className = 'pop_con';
        txtP = document.createElement('p');
        txtP.className = 'txt align_c';
        txtP.innerHTML = message;
        content.appendChild(txtP);

        var footer = document.createElement('div');
        footer.className = 'pop_footer';
        var btnArea = document.createElement('div');
        btnArea.className = 'btnArea payBtn';

        confirmBtn = document.createElement('a');
        confirmBtn.href = '#';
        confirmBtn.className = 'btn btn_save';
        confirmBtn.textContent = confirmText;
        confirmBtn.onclick = function(e) {
            e.preventDefault();
            overlay.style.display = 'none';
            confirmWin.style.display = 'none';
            if (confirmCallback) confirmCallback();
        };

        cancelBtn = document.createElement('a');
        cancelBtn.href = '#';
        cancelBtn.className = 'btn btn_cncl';
        cancelBtn.textContent = cancelText;
        cancelBtn.onclick = function(e) {
            e.preventDefault();
            overlay.style.display = 'none';
            confirmWin.style.display = 'none';
            if (cancelCallback) cancelCallback();
        };

        btnArea.appendChild(cancelBtn);
        btnArea.appendChild(confirmBtn);
        footer.appendChild(btnArea);

        // confirmWin.appendChild(header);
        confirmWin.appendChild(content);
        confirmWin.appendChild(footer);
        document.body.appendChild(confirmWin);
    }

    overlay.style.display = 'block';
    confirmWin.style.display = 'block';
};