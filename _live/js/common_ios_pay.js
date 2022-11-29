// debug
function logWrite(from, data) {

    var param = {
        'from' : from, 
        'request' : data
    };

    var url = '/wt_member/logtest';
    $.post(url, param, function(res) { }, 'json');
}

// 상품정보 가져오기 > 앱 시작시, 로그인 후, 상품페이지 열 때 호출
function requestProductsInfo(){
    console.log("setProducts");
    var products = "US220001"+","+"US550002"
    var message = {
        'action': 'requestProductsInfo',
        'data': products
    };

    //logWrite('requestProductsInfo', message);

    //var message = "setProducts("+products+")"
    console.log("setProducts message : "+message);
    webkit.messageHandlers.IHK.postMessage(message);
}

// 상품정보 가져오기 응답 
function responseProductsInfo(message){
    var decodedData = atou(message);
    console.log("getProductsInfo : "+decodedData );

    const obj = JSON.parse(decodedData);
    //logWrite('responseProductsInfo', obj);
}

// 상품 정보 구매 
function requestBuyProduct(packageid){
    console.log("requestBuyProduct");
    var message = {
        'action': 'requestBuyProduct',
        'data': packageid
    };

    logWrite('requestBuyProduct', message);

    webkit.messageHandlers.IHK.postMessage(message);
}

// 상품 정보 구매 > 응답
// 상품 구매 복원 > 응답
function responseBuyProduct(message){ 
    var decodedData = atou(message);
    const obj = JSON.parse(decodedData);
    
    logWrite('responseBuyProduct', obj);

    // 영수증 검증 요청 > 페이레터
    var url = '/wt_member/ios_apisend';
    $.post(url, obj, function(res) {
        if( ! res.is_success) {
            sendVerifyReceiptResult(res.transactionId, 'FALSE');
            return;
        }
        
        // 성공적으로 응답한 경우에만 보냄
        sendVerifyReceiptResult(res.transactionId);
    }, 'json');

    console.log("responseBuyProduct : "+decodedData);
    console.log("responseBuyProduct : "+obj.transactionId);
}

// 영수증 검증 결과 
function sendVerifyReceiptResult(strid, isSuccess){
    isSuccess = (isSuccess == 'FALSE') ? 'FALSE' : 'TRUE';
    var resultData = isSuccess+","+strid
    var message = {
        'action': 'verifyReceiptResult',
        'data': resultData
    };

    logWrite('sendVerifyReceiptResult', message);

    console.log("sendVerifyReceiptResult result : "+resultData);
    console.log("sendVerifyReceiptResult : "+message);
    webkit.messageHandlers.IHK.postMessage(message);
}

// 상품 복원기능 
function restorePurchases(){
    var message = {
        'action': 'restorePurchases',
        'data': ''
      };

    logWrite('restorePurchases', message);

    console.log("restorePurchases : ", message);
    webkit.messageHandlers.IHK.postMessage(message);
}

// 상품 복원 응답
// 현재 호출안되고 있음.
//function responseRestoredPurchases(message){ 
function responseRestoredProduct(message){ 
    var decodedData = atou(message);
    const obj = JSON.parse(decodedData);
    
    //logWrite('responseRestoredPurchases', obj);
    logWrite('responseRestoredProduct', obj);

    // 영수증 검증 요청 > 페이레터
    var url = '/wt_member/ios_apisend';
    $.post(url, obj, function(res) {
        if( ! res.is_success) {
            sendVerifyReceiptResult(res.transactionId, 'FALSE');
            console.log(res.error_message);
            return;
        }

        // 성공적으로 응답한 경우에만 보냄
        sendVerifyReceiptResult(res.transactionId);
    }, 'json');

    console.log("responseBuyProduct : "+decodedData);
    console.log("responseBuyProduct : "+obj.transactionId);
}

function atou(str) { 
    return decodeURIComponent(escape(window.atob(str))); 
}
requestProductsInfo();
