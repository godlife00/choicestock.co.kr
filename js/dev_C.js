Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Pretendard Variable, Pretendard'
            }
        }
    });
// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무차트탭 line 차트
/* 매출과 이익 */
function SubSearchCharmFiChart1(obj_id, value, params, moneyunit) {
    moneyunit = moneyunit || '백만달러';

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 30,
            marginBottom: 100,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#C4C4C4 ", "#404fc3", "#5CAC00"],

        title: {
            text : null,
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.1f} '+moneyunit+'</b><br/>',
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: [{ // Primary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value}</br><br/>',
                style: {
                    color: ["#959393"],
                }
            },
        }, { // Secondary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value}</b><br/>',
                style: {
                    color: ["#623FA8"],
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 name 변경됨. 매출액, 영업이익, 지배지분순이익

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        dataLabels: {
            enabled: false,
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 이익률 */
function SubSearchCharmFiChart2(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3", "#5CAC00"],

        title: {
            text: null
        },

        xAxis: [{
            categories:  params,
            crosshair: true,

        }],

        yAxis: {
            labels: {
                format: '{value} %',
                style: {
                    color: ["#404fc3"],
                },
            },
            title: {
                text: null,
            }
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} %</b><br/>'
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200203 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 부채비율과 유동비율 */
function SubSearchCharmFiChart3(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        //tooltip: {
        //    shared: true,
        //    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} %</b><br/>'
        //},

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var s = this.x+'<br>';
                $.each(this.points, function(i, point) {
                    if(point.y == 0) {
                        //s += point.series.name+'<b>N/A</b><br>';
                        s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>N/A</b><br/>'
                    }
                    else {
                        s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>'+point.y.toFixed(2)+' %</b><br/>'
                    }

                });
                return s;
            },
            shared: true
        },

        xAxis: [{
            categories: params,
            crosshair: true,
        }],

        yAxis: [{ // Primary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value}</b><br/> %',
                style: {
                    color: ["#404fc3"],
                },
            },
        }, { // Secondary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value}</b><br/> %',
                style: {
                    color: ["#5CAC00"],
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 name 변경됨. 부채비율, 유동비율

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 주당배당금과 배당률 */
function SubSearchCharmFiChart4(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 30,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: [{ // Primary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value}</b><br/>달러',
                style: {
                    color: ["#959393"],
                }
            },
        }, { // Secondary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value} %',
                style: {
                    color: ["#404fc3"],
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200203 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* ROE 과 PBR */
function SubSearchCharmFiChart5(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 80,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var s = this.x+'<br>';
                var d = '';
                $.each(this.points, function(i, point) {
                    if(point.series.name=='자기자본이익률') d='%'; else d='배';
                    if(point.y == 0) {
                        //s += point.series.name+'<b>N/A</b><br>';
                        s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>N/A</b><br/>'
                    }
                    else {
                        s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>'+point.y.toFixed(2)+' '+d+'</b><br/>'
                    }

                });
                return s;
            },
            shared: true
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: [{ // Primary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value} %',
                style: {
                    color: ["#404fc3"],
                }
            },
        }, { // Secondary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value} 배',
                style: {
                    color: ["#5CAC00"],
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 운전자본 회전일수 */
function SubSearchCharmFiChart6(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 110,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
        },

        xAxis: [{
            categories:  params,
            crosshair: true,

        }],

        yAxis: [{ // Primary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value} 일',
                style: {
                    color: ["#959393"],
                }
            },
        }, { // Secondary yAxis
            title: {
                text : null,
            },
            labels: {
                format: '{value} 일',
                style: {
                    color: ["#FF9700"],
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 현금흐름표 */
function SubSearchCharmFiChart7(obj_id, value, params, moneyunit) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 30,
            marginBottom: 110,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f}</b>'+moneyunit+'</b><br/>',
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: {
            labels: {
                format: '{value}</b><br/>',
                style: {
                    color: ["#959393"],
                },
            },
            title: {
                text: null,
            }
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200203 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}


// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 주가수익배수(PER) */
function SubSearchCharmFiChart8(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 배</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: {
            labels: {
                format: '{value} 배',
                style: {
                    color: ["#404fc3"],
                },
            },
            title: {
                text: null,
            }
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200203 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 주가와 주당순이익 */
function SubSearchCharmFiChart9(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 달러</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: [{
            labels: {
                format: '{value} 달러',
                style: {
                    color: ["#404fc3"],
                },
            },
            title: {
                text: null,
            },
        }, {
            labels: {
                format: '{value} 달러',
                style: {
                    color: ["#5CAC00"],
                }
            },
            title: {
                text: null,
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}


// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 주가순자산배수(PBR) */
function SubSearchCharmFiChart10(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'line',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 90,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3"],

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 배</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: {
            labels: {
                format: '{value} 배',
                style: {
                    color: ["#959393"],
                },
            },
            title: {
                text: null,
            }
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        series: value, //200204 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 재무 차트 line 차트
/* 주가와 주당순자산 */
function SubSearchCharmFiChart11(obj_id, value, params) {
    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: 20,
            marginBottom: 86,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: ["#404fc3", "#5CAC00"],

        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.2f} 달러</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,

        }],

        yAxis: [{
            labels: {
                format: '{value} 달러',
                style: {
                    color: ["#404fc3"],
                }
            },
            title: {
                text: null,
            },
        }, {
            labels: {
                format: '{value} 달러',
                style: {
                    color: ["#5CAC00"],
                }
            },
            title: {
                text: null,
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value, //200204 변경됨 chartjs.js 참고

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검사 > 기업개요탭 재무제표 line 차트
function SubSearchSummaryLineChart(obj_id, value, params) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 180,
            marginLeft:20,
            marginRight:20,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        colors: ["#877edf"],

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}<b>{point.y:,.2f} 달러</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,
            labels: {
                enabled: true,
                step: 28
            }
        }],

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false,
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                },
                fillOpacity: 0.1
            },
        },
    });
}

// 초이스스탁_서브 - 종목검색 - 종목진단 - 경쟁사 투자매력도 spider 차트
function SubSearchCharmCompSpiderChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            type: 'area',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            // width: 160,
            // height: 160,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        colors: ["#404fc3"],

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var imgOne = '<img src = "/img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                var imgZero = '<img src = "/img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                var imgHalf = '<img src = "/img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                var s = '<b>'+ this.x +'</b>';
                $.each(this.points, function(i, point) {
                    if(point.y == '5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgOne+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4.5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgHalf+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4') {
                        s += imgOne+imgOne+imgOne+imgOne+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3.5') {
                        s += imgOne+imgOne+imgOne+imgHalf+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3') {
                        s += imgOne+imgOne+imgOne+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2.5') {
                        s += imgOne+imgOne+imgHalf+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2') {
                        s += imgOne+imgOne+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1.5') {
                        s += imgOne+imgHalf+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1') {
                        s += imgOne+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '0.5') {
                        s += imgHalf+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else {
                        s += imgZero+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                });
                return s;
            },
            shared: true
        },

        pane: {
            size: '100%'
        },

        xAxis: {
            categories: ['미래 성장성', '사업 독점력', '현금 창출력', '수익성', '재무 안전성'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            minorGridLineColor: '#E0E0E0',
            tickInterval: 20,
            min: 0,
            max: 100,
            labels: {
                enabled: false
            }
        },

        exporting: {
            enabled: false
        },

        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        series: [{
            name: '',
            data: value,
            pointPlacement: 'on'
        }],

        plotOptions: {
            series: {
                enableMouseTracking: false,
                lineWidth: 1,
                fillOpacity: 0.3,
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검사 > 기업개요탭 재무제표 column 차트
function SubSearchSummaryColumnChart(obj_id, value, title, tooltip) {
    tooltip = tooltip || '';
    var p=2;
    var pt;
    if(obj_id=='containeralloca_star5_3' || obj_id.substring(0, 15) == 'summary_column_') p=0;
    if(obj_id.substr(0, 4) == 'summ') { p=0; pt=1; }

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 180,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        colors: ["#404fc3", "#545872", "#a1a1a1"],

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var s = this.x+'<br>';
                $.each(this.points, function(i, point) {
                    if(point.y == 0 && tooltip != '') {
                        //s += point.series.name+'<b>N/A</b><br>';
                        s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>'+tooltip+'</b><br/>'
                    }
                    else {
                        if(pt==1) {
                            s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>'+point.y+'</b><br/>'
                        }
                        else {
                            s += '<span style="color:'+point.series.color+'">'+point.series.name+' : <b>'+point.y.toFixed(2)+'</b><br/>'
                        }
                    }

                });
                return s;
            },
            shared: true
        },

        xAxis: [{
            categories: title,
            crosshair: true,
            labels: {
                style: {
                    color: '#939393',
                    fontSize: '0.85rem'
                }
            }
        }],

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 1,
            gridLineWidth: 0,
            lineWidth:1,
            plotLines: [{
                color: '#c8c8c8',
                width: 1,
                value: 0
            }],
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: ''
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            enabled: false
        },

        series: value,

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            },
            column: {
                minPointLength: 5,
                dataLabels: {
                    enabled: true,
                    crop: false,
                    color: '#939393',
                    overflow: 'none',
                    format: '{point.y:,.'+p+'f}',
                }
            }
        },
    });
}

// 초이스스탁_서브 - 종목검사 >  배당탭 column 차트
function SubSearchAllocLineChart(obj_id, value, params, moneyunit) {
    moneyunit = moneyunit || '%';
    moneyunit = '';
    var chart_colors = '';
    chart_colors = ["#404fc3", "#545872", "#d3d3d3"];
    if(obj_id=='alloc_line_chart2') {
        chart_colors = ["#545872"];
    }
    Highcharts.chart(obj_id, {
        chart: {
            type: 'column',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        colors: chart_colors,
        tooltip: {
            shared: true,
        },

        xAxis: [{
            categories: params,
            crosshair: true,
            labels: {
                style: {
                    color: '#939393',
                    fontSize: '0.7rem'
                }
            }
        }],

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 1,
            gridLineWidth: 0,
            lineWidth: 1,
            plotLines: [{
                color: '#c8c8c8',
                width: 1,
                value: 0
            }],
            alternateGridColor: null,
            showFirstLabel: false,
            breaks: [{
                from: 0,
                to: 100
            }],
            labels: {
                enabled: false
            }
        },

        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: ''
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            enabled: false
        },

        series: value,

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            },
            column: {
                minPointLength: 5,
                dataLabels: {
                    enabled: true,
                    crop: false,
                    color: '#939393',
                    overflow: 'none',
                    format: '{point.y:,.2f} '+moneyunit,
                }
            }
        },
    });
}
// 초이스스탁_종목추천 TOP 차트
function SubRecomTopChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 120,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        colors: ["#877edf"],
        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: null
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}<b>{point.y:,.2f} 달러</b><br/>'
        },
        //tooltip: {
        //   enabled: false,
        //},

        xAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            tickColor: null,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                enableMouseTracking: false,
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                }
            }
        },
    });
}


// 초이스스탁_서브 종목추천 상세 차트
function SubRecomViewChart(obj_id, value, params) {
    Highcharts.chart(obj_id, {

        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 180,
            marginLeft: 20,
            marginRight: 20,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        colors: ["#877edf"],
        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: null
        },

        tooltip: {
            shared: true,
            //pointFormat: '<span style="color:{series.color}">{series.name}<b>{point.y:,.2f} 달러</b><br/>'
            pointFormat: '<span style="color:{series.color}"><b>{point.y:,.2f} 달러</b><br/>'
        },

        xAxis: [{
            categories: params,
            crosshair: true,
            labels: {
                enabled: true,
                step: 28
            }
        }],

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                },
                fillOpacity: 0.1
            },
        },
    });
}

// 초이스스탁_서브 종목추천 스파이더 차트
function chgRecomSpiderChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            type: 'area',
            renderTo: 'containercharm1_1',
            backgroundColor: {
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            margin:[55, 0, 45, 0],
            events: {
                load: function () {
                    alignCenterElements(this, score);
                },
                redraw: function () {
                    alignCenterElements(this, score);
                }
            }
        },

        title: {
            text: null
        },

        colors: ["rgba(131, 145, 246, 1)"],

        tooltip: {
                enabled: false,
            },

        pane: {
            size: '100%',
            center: ['50%', '50%'],
        },

        xAxis: {
            categories: spider_title,
            tickmarkPlacement: 'on',
            lineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                style: {
                    color: '#6a727b',
                    fontSize: '13px',
                    textAlign: 'center',
                    fontWeight: '400'
                },
                formatter: function () {
                    // Y 좌표와 X 좌표의 보정값을 미리 정의된 배열로 설정
                    var labelYPositions = [-12, -7, 23, 23, -7]; // 각 인덱스별 Y 좌표 보정값
                    var labelXPositions = [0, 0, -12, 12, 0]; // 각 인덱스별 X 좌표 보정값, 예시값

                    // 현재 카테고리 인덱스에 해당하는 보정값을 가져옴
                    var labelYPosition = labelYPositions[this.pos] || 0; // 기본값 0
                    var labelXPosition = labelXPositions[this.pos] || 0; // 기본값 0

                    // 'y' 속성을 사용해 레이블의 y 좌표를 조정합니다.
                    return '<span style="position:relative; top:' + labelYPosition + 'px; left:' + labelXPosition + 'px;">' + this.value + '</span>';
                },
                useHTML: true,
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            gridLineColor: 'transparent',
            min: 0,
            max: 100,
            labels: {
                enabled: false
            }
        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: false,
        },

        series: [{
            name: '투자매력도',
            data: value,
            pointPlacement: 'on',
            color: '#7983d5', // 시리즈 선의 색상을 설정
            lineWidth: 1, // 시리즈 선의 너비를 설정
            marker: {
                enabled: true,
                fillColor: '#404fc3',
                lineColor: '#f7f8f9', // 마커 테두리 색상을 설정
                lineWidth: 1, // 마커 테두리 두께
                radius: 2.7 // 마커의 반지름
            }
        }],

        plotOptions: {
            series: {
                lineWidth: 1,
                fillColor: '#e3e7f8',
                states: {
                    hover: {
                        enabled: false // 시리즈 hover 상태 비활성화
                    },
                }
            }
        },
    });
}

// 초이스스탁_서브 종목추천 스파이더 차트
function SubRecomSpiderChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            type: 'area',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            marginTop: 0,
            marginBottom : 30,
            marginLeft: 30,
            marginRight: 30,
            // width: 350,
            // height : 320,
        },

        title: {
            text: null
        },

        colors: ["#404fc3"],

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var imgOne = '<img src = "/img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                var imgZero = '<img src = "/img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                var imgHalf = '<img src = "/img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                var s = '<b>'+ this.x +'</b>';
                $.each(this.points, function(i, point) {
                    if(point.y == '100') {
                        s += imgOne+imgOne+imgOne+imgOne+imgOne+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '90') {
                        s += imgOne+imgOne+imgOne+imgOne+imgHalf+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '80') {
                        s += imgOne+imgOne+imgOne+imgOne+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '70') {
                        s += imgOne+imgOne+imgOne+imgHalf+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '60') {
                        s += imgOne+imgOne+imgOne+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '50') {
                        s += imgOne+imgOne+imgHalf+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '40') {
                        s += imgOne+imgOne+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '30') {
                        s += imgOne+imgHalf+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '20') {
                        s += imgOne+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '10') {
                        s += imgHalf+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else {
                        s += imgZero+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                });
                return s;
            },
            shared: true
        },

        pane: {
            size: '80%',
            center: ['50%', '50%'],
        },

        xAxis: {
            categories: ['미래 성장성', '사업<br>독점력', '현금 창출력', '수익성', '재무<br>안전성'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                style: {
                    color: '#939393',
                    fontSize: '13px'
                }
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            minorGridLineColor: '#E0E0E0',
            tickInterval: 20.07,
            min: 0,
            max: 100,
            labels: {
                enabled: false
            }

        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: false,
        },

        series: [{
            name: '투자매력도',
            data: value,
            pointPlacement: 'on'
        }],

        plotOptions: {
            series: {
                lineWidth: 1,
                fillOpacity: 0.3
            }
        },

    });
}

// 차트 리사이즈 계산
function alignCenterElements(chart, score) {
    score = score || '';
    var paneSize = chart.pane[0].options.size,
        paneCenter = chart.pane[0].center,
        centerX = paneCenter[0],
        centerY = paneCenter[1] + 34, // centerY 조정
        size = Math.min(chart.plotWidth, chart.plotHeight) * (parseInt(paneSize) / 100),
        radius = size / 2;

    // 기존에 추가된 배경 이미지와 텍스트가 있다면 제거
    if (chart.bgImage) {
        chart.bgImage.destroy();
    }
    if (chart.centerText) {
        chart.centerText.destroy();
    }

    // 배경 이미지 추가
    chart.bgImage = chart.renderer.image('/img/bg_spider.svg', centerX - radius, centerY - radius, size, size)
        .attr({
            zIndex: -1
        })
        .add()
        .translate(0, 14);

    // 중앙의 값 텍스트 추가
    chart.centerText = chart.renderer.text(score, centerX, centerY)
        .css({
            color: '#404fc3',
            fontSize: '30px',
            textAlign: 'center',
            fontWeight: 'bold',
            fontFamily: "Pretendard Variable, Pretendard",
            // textOutline: '1px contrast',
            // textShadow: '0px 0px 4px rgba(255, 255, 255, 1)'
        })
        .attr({
            zIndex: 5,
            align: 'center'
        })
        .add()
        .translate(0, 25);
}

// 초이스스탁_서브 종목분석 TOP 차트
function SubAnalyTopChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            //height: 108,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        colors: ["#877edf"],

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.2f}</b><br/>'
        },

        xAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            tickColor: null,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                enableMouseTracking: false,
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                }
            }
        },
    });
}

// 메인 종목추천 차트
function MainLineChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 70,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        colors: ["#877edf"],
        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: null
        },

        tooltip: {
            enabled: false,
        },

        xAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            tickColor: null,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                enableMouseTracking: false,
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                }
            }
        },
    });
}


// 메인 종목분석 차트
function MainGaugeChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'gauge',
            plotBackgroundColor: {
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            width: 80,
            height: 55
        },

        title: {
            text: null
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['50%', '100%'],
            size: 34
        }],

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false,
            // text: 'datahero',
            // href: 'http://datahero.cafe24.com/'
        },

        tooltip: {
            enabled: false
        },

        yAxis: [{
            min: 0,
            max: 6,
            // minorTickPosition: 'outside',
            // tickPosition: 'outside',
            labels: {
                enabled: false,
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#B6E8CF',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 2,
                to: 4,
                color: '#00CCBD',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 4,
                to: 6,
                color: '#476E8B',
                innerRadius: '100%',
                outerRadius: '150%'
            }],
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '180%',
                    backgroundColor: '#FFD090',
                    baseWidth: 6,
                    topWidth: 6,
                    rearLength: '0'
                }
            }
        },
        series: [{
            name: '',
            data: value, //값은 1 저평가, 3 중평가, 5 1 고평가
            yAxis: 0
        }]
    });
}


// 메인 - 전종목 투자매력도
function MainSpiderChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            type: 'area',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            width: 100,
            height: 100,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var imgOne = '<img src = "/img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                var imgZero = '<img src = "/img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                var imgHalf = '<img src = "/img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                var s = '<b>'+ this.x +'</b>';
                $.each(this.points, function(i, point) {
                    if(point.y == '5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgOne+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4.5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgHalf+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4') {
                        s += imgOne+imgOne+imgOne+imgOne+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3.5') {
                        s += imgOne+imgOne+imgOne+imgHalf+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3') {
                        s += imgOne+imgOne+imgOne+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2.5') {
                        s += imgOne+imgOne+imgHalf+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2') {
                        s += imgOne+imgOne+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1.5') {
                        s += imgOne+imgHalf+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1') {
                        s += imgOne+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '0.5') {
                        s += imgHalf+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else {
                        s += imgZero+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                });
                return s;
            },
            shared: true
        },

        pane: {
            size: '100%'
        },

        xAxis: {
            style: {
                fontSize: '0',
            },
            categories: ['배당매력', '수익성', '사업 독점력', '재무 안전성', '현금 창출력'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            minorGridLineColor: '#E0E0E0',
            tickInterval: 1,
            min: 0,
            max: 5,
            labels: {
                enabled: false
            }
        },

        exporting: {
            enabled: false
        },

        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        series: [{
            name: '',
            data: value,
            pointPlacement: 'on',
        }],

        plotOptions: {
            series: {
                lineWidth: 1,
                fillOpacity: 0.3
            }
        },
    });
}




// 서브 종목추천 리스트 차트
function SubRecomListChart(obj_id, value) {
    Highcharts.chart(obj_id, {

        chart: {
            type: 'line',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            height: 70,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false
        },
        colors: ["#877edf"],
        title: {
            text: null
        },

        tooltip: {
            enabled: false,
        },

        xAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            tickColor: null,
            labels: {
                enabled: false
            }
        },

        yAxis: {
            title: {
                text: null
            },
            lineColor: null,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            alternateGridColor: null,
            showFirstLabel: false,
            labels: {
                enabled: false
            }
        },

        credits: {
            enabled: false,
        },

        legend: {
            enabled: false,
        },

        exporting: {
            enabled: false
        },

        series: [{
            name: '',
            data: value
        }],

        plotOptions: {
            series: {
                enableMouseTracking: false,
                label: {
                    connectorAllowed: false
                },
                pointStart: null,
                marker: {
                    enabled: false,
                }
            }
        },
    });
}






function SubAnalyGaugeChart3(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'gauge',
            backgroundColor: '#F4F4F5',
            width: 50,
            height: 42
        },

        title: {
            text: ''
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['50%', '100%'],
            size: 34
        }],

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false,
            // text: 'datahero',
            // href: 'http://datahero.cafe24.com/'
        },

        tooltip: {
            enabled: false,
        },

        yAxis: [{
            min: 0,
            max: 6,

            // minorTickPosition: 'outside',
            // tickPosition: 'outside',
            labels: {
                enabled: false,
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#B6E8CF',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 2,
                to: 4,
                color: '#00CCBD',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 4,
                to: 6,
                color: '#476E8B',
                innerRadius: '100%',
                outerRadius: '150%'
            }],
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '180%',
                    backgroundColor: '#FFD090',
                    baseWidth: 6,
                    topWidth: 6,
                    rearLength: '0'
                }
            }
        },
        series: [{
            name: '',
            data: value,
            yAxis: 0
        }]
    });
}

function SubAnalyGaugeChart2(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'gauge',
            plotBackgroundColor: {
                stops: [
                    [0, '#FFF4C6'],
                    [0.3, '#FFFFFF'],
                    [1, '#FFF4C6']
                ]
            },
            plotBackgroundImage: null,
            width: 80,
            height: 55
        },

        title: {
            text: ''
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['50%', '100%'],
            size: 34
        }],

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false,
            // text: 'datahero',
            // href: 'http://datahero.cafe24.com/'
        },

        tooltip: {
            enabled: false,
        },

        yAxis: [{
            min: 0,
            max: 6,

            // minorTickPosition: 'outside',
            // tickPosition: 'outside',
            labels: {
                enabled: false,
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#B6E8CF',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 2,
                to: 4,
                color: '#00CCBD',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 4,
                to: 6,
                color: '#476E8B',
                innerRadius: '100%',
                outerRadius: '150%'
            }],
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '180%',
                    backgroundColor: '#FFD090',
                    baseWidth: 6,
                    topWidth: 6,
                    rearLength: '0'
                }
            }
        },
        series: [{
            name: '',
            data: value,
            yAxis: 0
        }]
    });
}


// 서브 종목분석 차트
function SubAnalyGaugeChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            type: 'gauge',
                backgroundColor: '#2C255D',
                width: 80,
                height: 55

        },

        title: {
            text: null
        },

        pane: [{
            startAngle: -90,
            endAngle: 90,
            background: null,
            center: ['50%', '100%'],
            size: 40
        }],

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false,
            // text: 'datahero',
            // href: 'http://datahero.cafe24.com/'
        },

        tooltip: {
            enabled: false,
        },

        yAxis: [{
            min: 0,
            max: 6,

            // minorTickPosition: 'outside',
            // tickPosition: 'outside',
            labels: {
                enabled: false,
            },
            plotBands: [{
                from: 0,
                to: 2,
                color: '#B6E8CF',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 2,
                to: 4,
                color: '#00CCBD',
                innerRadius: '100%',
                outerRadius: '150%'
            }, {
                from: 4,
                to: 6,
                color: '#476E8B',
                innerRadius: '100%',
                outerRadius: '150%'
            }],
        }],

        plotOptions: {
            gauge: {
                dataLabels: {
                    enabled: false
                },
                dial: {
                    radius: '180%',
                    backgroundColor: '#FFD090',
                    baseWidth: 6,
                    topWidth: 6,
                    rearLength: '0'
                }
            }
        },
        series: [{
            name: '',
            data: value,
            yAxis: 0
        }]
    });
}


// 서브 - 종목검색 - 종목진단 > 투자매력탭 spider 차트
function SubSearchCharmSpiderChart(obj_id, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            type: 'area',
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            marginTop: 0,
            marginBottom : 10,
            marginLeft: 30,
            marginRight: 30,
            // width: 350,
            // height : 320,
        },

        // colors: ["#FF9500"],

        title: {
            text: null
        },

        tooltip: {
            shared: true,
            useHTML: true,
            formatter: function() {
                var imgOne = '<img src = "/img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                var imgZero = '<img src = "/img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                var imgHalf = '<img src = "/img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                var s = '<b>'+ this.x +'</b>';
                $.each(this.points, function(i, point) {
                    if(point.y == '5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgOne+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4.5') {
                        s += imgOne+imgOne+imgOne+imgOne+imgHalf+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '4') {
                        s += imgOne+imgOne+imgOne+imgOne+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3.5') {
                        s += imgOne+imgOne+imgOne+imgHalf+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '3') {
                        s += imgOne+imgOne+imgOne+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2.5') {
                        s += imgOne+imgOne+imgHalf+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '2') {
                        s += imgOne+imgOne+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1.5') {
                        s += imgOne+imgHalf+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '1') {
                        s += imgOne+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else if(point.y >= '0.5') {
                        s += imgHalf+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                    else {
                        s += imgZero+imgZero+imgZero+imgZero+imgZero+'&nbsp;'+point.y;
                    }
                });
                return s;
            },
            shared: true
        },

        pane: {
            size: '80%',
            center: ['50%', '50%'],
        },

        xAxis: {
            categories: ['미래 성장성', '사업<br>독점력', '현금 창출력', '수익성', '재무<br>안전성'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
        },

        yAxis: {
            gridLineInterpolation: 'polygon',
            minorGridLineColor: '#E0E0E0',
            tickInterval: 1,
            min: 0,
            max: 5,
            labels: {
                enabled: false
            }
        },

        exporting: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        legend: {
            enabled: false,
        },

        series: [{
            name: '투자매력도',
            data: value,
            pointPlacement: 'on'
        }],

        plotOptions: {
            series: {
                lineWidth: 1,
                fillOpacity: 0.3
            }
        },
    });
}
//BIC차트 - 원가율
function BicChart(obj_id, type, value, params) {

    var top = 20;
    var bottom = 70;
    var colors = ["#623FA8", "#FF9700"];
    var y_unit = '%';
    var y_color = ["#623FA8"];
    if(obj_id == 'chart_BICchart014') {
        top = 30;
        bottom = 90;
        colors = ["#00CCBD", "#623FA8", "#FF9700"];
        y_unit = '백만달러';
        y_color = ["#00CCBD"];
    }

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    Highcharts.chart(obj_id, {
        chart: {
            type: type,
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            style: {
                fontFamily: "'Lato', 'Noto Sans KR'"
            },
            marginTop: top,
            marginBottom: bottom,
            height: 300,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },

        colors: colors,

        title: {
            text: null,
        },

        tooltip: {
            shared: true,
        },
/*
        title: {
            style: {
                fontSize: '0',
            },
        },

        tooltip: {
            shared: true,
            pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
        },
*/

        xAxis: [{
            categories: params,
            //categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            crosshair: true
        }],

        yAxis: [{ //Primary yAxis
            title: {
                text: null,
            },
            labels: {
                format: '{value}</b><br/> %',
                style: {
                    color: ["#623FA8"],
                }
            },
        }, { // Secondary yAxis
            title: {
                text: null,
            },
            labels: {
                format: '{value}</b><br/> '+y_unit,
                style: {
                    color: y_color,
                }
            },
            opposite: true
        }],

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            layout: 'horizontal',
            align: 'center',
            verticalAlign: 'bottom',
            floating: true,
            backgroundColor:
                Highcharts.defaultOptions.legend.backgroundColor || // theme
                'rgba(255,255,255,0.25)'
        },

        series: value,
        /*
        series: [{
            name: '매출원가율',
            data: [42, 52, 57, 69, 97, 11]
        }, {
            name: '영업비용비율',
            yAxis: 1,
            data: [16, 64, 42, 51, 30, 82]
         }],
        */

        lang: {
            noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align : 'left'
            }
        },

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            }
        },

    });
}

// 원스톱 진단 차트
function OneStopChart(obj_id, value) {
    Highcharts.chart(obj_id, {

        chart: {
            type: 'bubble',
            plotBorderWidth: 2,
            zoomType: 'x',
            backgroundColor: '#F7F7FF',
            borderColor: '#404FC3',
            height: 220,
            plotBorderColor: '#404FC3',
            plotShadow: false,
            marginLeft: 0,
            marginTop: -1,
            marginRight: -1,
            marginBottom : 0,
        },

        title: {
            text: null
        },

        accessibility: {
            point: {
                valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
            }
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        legend: {
            enabled: false,
        },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: null,
            },
            min: 0,
            max: 100,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            tickColor: null,
            labels: {
                enabled: false
            },
            plotLines: [{
                color: '#C7CBE9',
                dashStyle: 'ShortDash',
                width: 1.5,
                value: 50,
                label: {
                    enabled: false
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 60 to 100 grams.'
            }
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: null,
            },
            min: 0,
            max: 100,
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            tickColor: null,
            labels: {
                enabled: false
            },
            plotLines: [{
                color: '#C7CBE9',
                dashStyle: 'ShortDash',
                width: 1.5,
                value: 50,
                label: {
                    enabled: false
                },
                zIndex: 3
            }],
            accessibility: {
                rangeDescription: 'Range: 0 to 160 grams.'
            }
        },

        tooltip: {
            enabled: false
        },

        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },

        series: value,
    });
}

/* 적정주가밴드차트 */
//function FairValueBandChart(obj_id, min, max, dates, close, fairvalue5, fairvalue4, fairvalue3, fairvalue2, fairvalue1, is_null) {
function FairValueBandChart(obj_id, dates, close, fairvalue5, fairvalue4, fairvalue3, fairvalue2, fairvalue1, is_null) {
    if(is_null == true) {
        var logarithmic = 'null';
    }
    else {
        var logarithmic = 'logarithmic';
    }
    Highcharts.chart(obj_id, {
        chart: {
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            marginTop: 20,
            marginBottom: 120,
            marginLeft: 20,
            height: 420,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        xAxis: {
            type: 'year',
            categories: dates,
            labels: {
                formatter: function () {
                   return (this.value.substring(0, 5));
                },
                style: {
                    color: ["#333333"],
                },
                step: 55,
            },
            crosshair: {
                color: 'rgba(204,214,235,1)',
                zIndex: 3
            },
            offset: 10,
        },
        yAxis: {
            //min: min,
            //max: max,
            type: logarithmic,
            title: {
                text: null
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            maxPadding: 0,
            minPadding: 0.15,
            minorTickInterval: 'auto',
            tickInterval: 'auto',
            opposite: true,
        },
        legend: {
            itemDistance: 6,
        },
        title: {
            text: null
        },
        colors: ["#F2333A", "#BEC3ED", "#E4E6FC", "#C6C6C6", "#737EDD"],
        tooltip: {
            crosshairs: true,
            shared: true,
            valueDecimals: 2,
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false
        },
        lang: {
            noData: "밸류에이션에 필요한 데이터가 충분하지 않아<br>적정주가를 제시하지 않습니다..",
        },
        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align: 'left'
            }
        },
        series: [{
            name: '주가',
            data: close,
            zIndex: 2,
            lineWidth: 2,
            marker: {
                enabled: false
            },
        }, {
            name: '적정가',
            data:  fairvalue3,
            marker: {
                enabled: false
            },
            zIndex: 1,
            lineWidth: 2,
        }, {
            name: '저평가 ~ 고평가',
            data:  fairvalue4,
            type: 'arearange',
            lineWidth: 0,
            opacity: 1,
            className: 'label_none',
            marker: {
                enabled: false
            }
        }, {
            name: '매우저평가',
            data: fairvalue5,
            zIndex: 1,
            lineWidth: 1,
            dashStyle: 'Dash',
            marker: {
                enabled: false
            }
        }, {
            name: '매우고평가',
            data: fairvalue1,
            zIndex: 1,
            lineWidth: 1,
            dashStyle: 'Dash',
            marker: {
                enabled: false
            }
        }],
        plotOptions: {
            series: {
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }
        },
    });
}

/* 적정주가밴드차트 */
//function FairValueBandChart(obj_id, min, max, dates, close, fairvalue5, fairvalue4, fairvalue3, fairvalue2, fairvalue1, is_null) {
function FairValueBandChart_kw(obj_id, dates, close, fairvalue5, fairvalue4, fairvalue3, fairvalue2, fairvalue1, is_null) {
    if(is_null == true) {
        var logarithmic = 'null';
    }
    else {
        var logarithmic = 'logarithmic';
    }
    Highcharts.chart(obj_id, {
        chart: {
            zoomType: 'xy',
            renderTo: obj_id,
            backgroundColor: {
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            marginTop: 20,
            marginBottom: 120,
            marginLeft: 20,
            height: 420,
            plotBorderColor: null,
            plotBorderWidth: null,
            plotShadow: false,
        },
        xAxis: {
            type: 'year',
            categories: dates,
            labels: {
                formatter: function () {
                   return (this.value.substring(0, 5));
                },
                style: {
                    color: ["#333333"],
                },
                step: 55,
            },
            crosshair: {
                color: 'rgba(204,214,235,1)',
                zIndex: 3
            },
            offset: 10,
        },
        yAxis: {
            //min: min,
            //max: max,
            //type: logarithmic,
            title: {
                text: null
            },
            minorGridLineWidth: 0,
            gridLineWidth: 0,
            maxPadding: 0,
            minPadding: 0.15,
            minorTickInterval: 'auto',
            //tickInterval: 'auto',
            opposite: true,
        },
        legend: {
            itemDistance: 6,
        },
        title: {
            text: null
        },
        colors: ["#F2333A", "#BEC3ED", "#E4E6FC", "#C6C6C6", "#737EDD"],
        tooltip: {
            crosshairs: true,
            shared: true,
            valueDecimals: 2,
        },
        credits: {
            enabled: false,
        },
        exporting: {
            enabled: false
        },
        lang: {
            noData: "밸류에이션에 필요한 데이터가 충분하지 않아<br>적정주가를 제시하지 않습니다..",
        },
        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align: 'left'
            }
        },
        series: [{
            name: '주가',
            data: close,
            zIndex: 2,
            lineWidth: 2,
            marker: {
                enabled: false
            },
        }, {
            name: '적정가',
            data:  fairvalue3,
            marker: {
                enabled: false
            },
            zIndex: 1,
            lineWidth: 2,
        }, {
            name: '저평가 ~ 고평가',
            data:  fairvalue4,
            type: 'arearange',
            lineWidth: 0,
            opacity: 1,
            className: 'label_none',
            marker: {
                enabled: false
            }
        }, {
            name: '매우저평가',
            data: fairvalue5,
            zIndex: 1,
            lineWidth: 1,
            dashStyle: 'Dash',
            marker: {
                enabled: false
            }
        }, {
            name: '매우고평가',
            data: fairvalue1,
            zIndex: 1,
            lineWidth: 1,
            dashStyle: 'Dash',
            marker: {
                enabled: false
            }
        }],
        plotOptions: {
            series: {
                marker: {
                    fillColor: 'white',
                    lineWidth: 2,
                    lineColor: Highcharts.getOptions().colors[0]
                }
            }
        },
    });
}
/*
function viewDetailStockChart(obj_id, value) {

    //var sellParams = params.sell || [];
    //var buyParams = params.buy || [];

    Highcharts.chart(obj_id, {
         chart: {
            events: {
                load: function () {
                    this.setSize(undefined, 240);
                }
            },
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            margin: [0, 16, 0, 0],
        },

        legend: {
            enabled: false,
        },

        credits: {
            enabled: false
        },

        lang: {
            noData: "해당 데이터가 없습니다",
        },

        exporting: {
            enabled: false
        },

        rangeSelector: {
            selected: 1
        },

        lang: {
            noData: "해당 데이터가 없습니다",
        },

        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: ''
        },

        lang: {
            noData: "해당 데이터가 없습니다",
        },


        tooltip: {
            positioner: function () {
                return { x: 15, y: 20 };
            },
            // followTouchMove: false,
            useHTML: true,
            backgroundColor: '#F4F4F5',
            borderWidth: 0,
            borderRadius: 10,
            style: {
                fontWeight: 'bold',
                fontSize: '13px',
                color: '#363F4B',

            },
            shadow: false,
            split: false,
            shared: true,
            rosshairs: true,
            xDateFormat: '%Y.%m.%d',

            formatter: function () {
                var s = '<b>' + Highcharts.dateFormat('%Y/%m/%d', this.x) + '</b>' // 일자 포맷
                $.each(this.points, function (i, point) {
                    for (i = 0; i < value.length; i++) {
                        if (value[i][0] == point.x) {
                            s += (
                                '<br/><strong style="color: #363F4B;">시가 </strong><span>' + value[i][1] + '</span>'
                                + '<strong style="color:#363F4B; padding-left:7px">고가 </strong><span>' + value[i][2] + '</span>'
                                + '<strong style="color:#363F4B; padding-left:7px">저가 </strong><span>' + value[i][3] + '</span>'
                                + '<strong style="color:#363F4B; padding-left:7px">종가 </strong><span>' + value[i][4] + '</span>'
                            );
                            break;
                        };
                    }
                });
                return s;
            }
        },

        xAxis: [{
            title: {
                text: null
            },
            type: 'datetime',
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            labels: {
                enabled: false
            },
            crosshair: {
                width: 1,
                color: '#107070',
                dashStyle: 'Dot'
            },
            ordinal: true,
            maxPadding: 0.1,
        }],

        yAxis: {
            visible: false,
        },

        series: [
            {
                type: 'candlestick',
                name: '주가',
                data: value,
                crisp: false,
            }
        ],

        plotOptions: {
            series: {
                groupPadding: 0.2
            }
        },
    });
}
*/
/* 매출액 */
function viewDetailChart1(obj_id, value, params, title) {

    Highcharts.setOptions({
        lang: {
            thousandsSep: ','
        }
    });

    var point_view = '{point.y:,.2f}';
    if (obj_id == 'containerfinancials1_1') {
        point_view = '{point.y:,.0f}';

		// value 배열을 반복하면서 1보다 작은 값이 있는지 확인
		for (var i = 0; i < value.length; i++) {
			console.log(value[i]);
			if (value[i].y < 1) {
				point_view = '{point.y:,.2f}';
				break;
			}
		}
	}


    Highcharts.chart(obj_id, {
        chart: {
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
            margin: [15, 10, 50, 10],
        },
        // 하단 네비게이션 제거
        navigator: {
            enabled: false
        },

        // 스크롤바 제거
        scrollbar: {
            enabled: false
        },

        // 기간범위선택
        rangeSelector: {
            enabled: false,
            // allButtonsEnabled: true,
            // selected: 0,
        },

        legend: {
            enabled: false,
        },

        credits: {
            enabled: false
        },

        exporting: {
            enabled: false
        },

        lang: {
            noData: "해당 데이터가 없습니다",
        },

        noData: {
            style: {
                fontWeight: 'nomal',
                fontSize: '1rem',
                color: '#8380A0',
                align: 'center'
            }
        },

        tooltip: {
            enabled: false
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: ''
        },

        credits: {
            enabled: false
        },

        xAxis: [{
            categories: params,
            crosshair: true,
            labels: {
                style: {
                    color: '#939393',
                    fontSize: '0.85rem'
                }
            }
        }],

        yAxis: {
            title: {
                text: null
            },
            gridLineWidth: 0,
            labels: {
                enabled: false
            },
            plotLines: [{
                color: '#edeeef',
                width: 1,
                value: 0
            }],
        },

        series: [{
            type: 'column',
            name: title,
            data: value
        }],

        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            },
            column: {
                minPointLength: 5,
                dataLabels: {
                    enabled: true,
                    crop: false,
                    color: '#939393',
                    overflow: 'none',
                    format: point_view,
                }
            }
        },

    });
}

function viewDetailChart2(obj_id, value, params, title) {
    Highcharts.chart(obj_id, {

        chart: {
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
            },
        },
        // 하단 네비게이션 제거
        navigator: {
            enabled: false
        },

        // 스크롤바 제거
        scrollbar: {
            enabled: false
        },

        // 기간범위선택
        rangeSelector: {
            enabled: false,
            // allButtonsEnabled: true,
            // selected: 0,
        },

        // legend: {
        //     enabled: false,
        // },

        credits: {
            enabled: false
        },

        lang: {
            noData: "해당 데이터가 없습니다",
        },
        exporting: {
            enabled: false
        },

        tooltip: {
            useHTML: true,
            backgroundColor: '#F4F4F5',
            borderWidth: 0,
            borderRadius: 10,
            style: {
                fontWeight: 'bold',
                fontSize: '13px',
                color: '#363F4B',
            },
            shadow: false,
            split: false,
            shared: true,
            rosshairs: true,
            xDateFormat: '%Y.%m.%d',
            formatter: function () {
                return ['<b style="color:#363F4B">' + this.x + '</b>'].concat(
                    this.points ?
                        this.points.map(function (point) {
                            return '<br>' + point.series.name + ' : ' + point.y.toFixed(2) + '달러';
                        }) : []
                );
            },
        },

        rangeSelector: {
            selected: 1
        },

        title: {
            style: {
                'font-weight': "bold",
                color: '#E0E0E3',
                textTransform: 'uppercase',
                fontSize: '0',
            },
            text: ''
        },

        credits: {
            enabled: false,
        },

        colors: ["#126fbe", "#F0CC09"],

        xAxis: [{
            categories: params,
            crosshair: true,
            tickInterval: 1,
            labels: {
                style: {
                    color: '#7f8ca3',
                    fontSize: '10px'
                },
            }
        }],

        yAxis: [{// 1
            title: {
                text: null
            },
            gridLineWidth: 0,
            labels: {
                format: '{value}달러',
                style: {
                    color: '#126fbe',
                    fontSize: '10px'
                }
            },
        }, {// 2
            title: {
                text: null
            },
            gridLineWidth: 0,
            labels: {
                format: '{value}달러',
                style: {
                    color: '#F0CC09',
                    fontSize: '10px'
                }
            },
            opposite: true
        }],

        series: value,
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                }
            },
        },

    });
}

// spider small 차트
function SpiderSmallChart(obj_id, cmp_nm, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            renderTo: obj_id,
            backgroundColor: {
                // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            margin: [0, 0, 30, 0],
        },

        colors: ["#3c55ce"],

        title: {
            useHTML: true, // HTML 태그 사용 활성화
            text: cmp_nm,
            align: 'center', // 가로 위치를 가운데로 설정
            verticalAlign: 'bottom' // 세로 위치를 하단으로 설정
        },

        tooltip: {
            enabled: false
        },
        pane: {
            startAngle: 0,
            endAngle: 360
        },
        xAxis: {
            categories: ['밸류에이션', '미래<br>성장성', '사업<br>독점력', '재무<br>안전성', '현금<br>창출력'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            max: 5,
            labels: {
                enabled: false
            }
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            minorGridLineColor: '#E0E0E0',
            tickInterval: 19.9,
            min: 0,
            max: 100,
            labels: {
                enabled: false
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false,
        },

        series: [{
            type: 'area',
            name: '',
            data: value,
            pointPlacement: 'on',
            marker: {
                enabled: true,
            }
        }],
        plotOptions: {
            series: {
                lineWidth: 1,
                fillOpacity: 0.3,
                marker: {
                    enabled: false,
                }
            },
        },
    });
}

// spider small 차트
function chgSmallChart(obj_id, cmp_nm, value) {
    Highcharts.chart(obj_id, {
        chart: {
            polar: true,
            backgroundColor: {
                stops: [
                    [0, '#ffffff'],
                    [1, '#ffffff']
                ]
            },
            margin:[0, 0, 0, 0],
            events: {
                load: function () {
                    var chart = this,
                        paneSize = chart.pane[0].options.size,
                        paneCenter = chart.pane[0].center,
                        centerX = paneCenter[0],
                        centerY = paneCenter[1] - 5,
                        size = Math.min(chart.plotWidth, chart.plotHeight) * (parseInt(paneSize) / 90),
                        radius = size / 2;

                    chart.renderer.image('/img/bg_spider.svg', centerX - radius, centerY - radius, size, size)
                    .attr({
                        zIndex: -1
                    })
                    .add();
                }
            }
        },

        colors: ["rgba(131, 145, 246, 1)"],

        title: {
            useHTML: true, // HTML 태그 사용 활성화
            text: cmp_nm,
            align: 'center', // 가로 위치를 가운데로 설정
            verticalAlign: 'bottom' // 세로 위치를 하단으로 설정
        },

        tooltip: {
            enabled: false
        },
            pane: {
                size: '50%',
                center: ['50%', '50%'],
            },
        xAxis: {
            categories: ['밸류에이션', '미래<br>성장성', '사업<br>독점력', '재무<br>안전성', '현금<br>창출력'],
            tickmarkPlacement: 'on',
            lineWidth: 0,
            gridLineColor: 'transparent',
            labels: {
                enabled: false
            }
        },
        yAxis: {
            gridLineInterpolation: 'polygon',
            gridLineColor: 'transparent',
            min: 0,
            max: 100,
            labels: {
                enabled: false
            }
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false,
        },

        series: [{
            type: 'area',
            name: '투자매력도',
            data: value,
            pointPlacement: 'on',
            color: '#7983d5', // 시리즈 선의 색상을 설정
            lineWidth: 1, // 시리즈 선의 너비를 설정
            marker: {
                enabled: true,
                fillColor: '#404fc3',
                lineWidth: 0, // 마커 테두리 두께
                radius: 1.5 // 마커의 반지름
            }
        }],
        plotOptions: {
            series: {
                lineWidth: 1,
                fillColor: '#e3e7f8',
                marker: {
                    enabled: false,
                },
                states: {
                    hover: {
                        enabled: false // 시리즈 hover 상태 비활성화
                    },
                }
            },
        },
    });
}

function viewDetailChart3(obj_id, priceData) {

    // 주가 데이터 포인트의 날짜에 가장 가까운 주당순이익 데이터를 찾는 함수
    const findClosestEpsData = (epsData, targetDate) => {
        // 주가 데이터 포인트보다 이후이면서 가장 가까운 날짜의 주당순이익 데이터를 찾습니다.
        return epsData.reduce((closest, current) => {
            if (current[0] >= targetDate && (!closest || current[0] < closest[0])) {
                return current;
            }
            return closest;
        }, null);
    };

    Highcharts.chart(obj_id, {

        chart: {
            backgroundColor: null,
        },
        credits: {
            enabled: false,
        },
        lang: {
            noData: "해당 데이터가 없습니다",
        },
        exporting: {
            enabled: false,
        },

        tooltip: {
            useHTML: true,
            shadow: false,
            split: false,
            shared: true,
            formatter: function () {
                let tooltipHtml = Highcharts.dateFormat('%Y.%m/%d', this.x) + '<br/>'; // 기본 날짜 포맷
                // 주가 데이터와 주당순이익 데이터를 모두 포함하기 위한 플래그 초기화
                let priceIncluded = false;
                let epsIncluded = false;
                const targetDate = this.x; // 현재 주가 데이터 포인트의 날짜

                // 주가 데이터의 날짜를 기준으로 사용
                const priceDate = this.x;

                // EPS 데이터 탐색 및 업데이트 로직
                const findEpsData = (epsData, checkDate) => {
                    return epsData.slice().reverse().find(eps => eps[0] <= checkDate);
                };

                this.points.forEach(point => {
                    // 주가 데이터를 포함하는 조건
                    if (point.series.name === '주가' && !priceIncluded) {
                        tooltipHtml += `<strong style="color: ${point.series.color};">${point.series.name}</strong>: ${point.y}`;
                        priceIncluded = true;
                    }
                    // 주당순이익 데이터를 포함하는 조건
                    else if (point.series.name.includes('주당순이익') && !epsIncluded) {
                        // '주당순이익(추정)'의 경우 날짜 포맷을 변경
                        if (point.series.name === '주당순이익(추정)') {
                            tooltipHtml = Highcharts.dateFormat('%Y', this.x);
                        }
                        epsIncluded = true;
                    }
                });

                // 주가 데이터 포인트에 대한 툴팁 내용 추가 및 중복 표시 방지 로직
                this.points.forEach(point => {
                    if (point.series.name === '주가' && !epsIncluded) {
                        epsIncluded = true; // 주가 정보 추가 후 플래그 변경
                    }
                });


                // eps2와 eps3 배열에서 주가 데이터 포인트의 날짜보다 이후이면서 가장 가까운 데이터를 찾음
                const closestEpsData = findClosestEpsData(eps2, targetDate);
                const closestEpsEstimate = findClosestEpsData(eps3, targetDate);

                // 찾은 데이터를 툴팁에 추가
                if (closestEpsData) {
                    tooltipHtml += `<br/><strong style="color: #5CAC00;">주당순이익</strong>: ${closestEpsData[1]}`;
                }
                if (closestEpsEstimate && (!closestEpsData || closestEpsEstimate[0] < closestEpsData[0])) {
                    tooltipHtml += `<br/><strong style="color: #c6c6c6;">주당순이익(추정)</strong>: ${closestEpsEstimate[1]}`;
                }
                return tooltipHtml;
            }
        },

        title: {
            text: null,
        },
        colors: ["#4d6ee4", "#F0CC09"],
        xAxis: [{
            title: {
                text: null,
            },
            type: 'datetime',
            gridLineWidth: 0,
            lineWidth: 0,
            tickWidth: 0,
            showFirstLabel: true, // 첫 번째 눈금의 레이블을 보여줌
            showLastLabel: true, // 마지막 눈금의 레이블을 보여줌
            startOnTick: true, // 처음 레이블 보여주기
            endOnTick: true,   // 마지막 레이블 보여주기

            tickPositioner: function () {
                    // 특정 날짜(년도)만을 위한 timestamp 배열 생성
                    return positions;
            },

            //tickInterval: 365 * 24 * 3600 * 1000, // 매년 간격으로 표시(윤년은 고려하지 않음)
            labels: {
                formatter: function() {
                    const year = new Date(this.value).getFullYear();
                    return categories[year];
                },
                style: {
                    color: '#939393',
                    fontSize: '12px'
                },
            }
        }],
        yAxis: [{ // 첫 번째 Y축
            title: {
                text: null
            },
            showFirstLabel: false,
            labels: {
                style: {
                    color: '#404fc3',
                    fontSize: '12px'
                }
            },
        }, { // 두 번째 Y축
            opposite: true, // 두 번째 Y축을 차트의 반대편에 배치
            title: {
                text: null
            },
            gridLineWidth: 0,
            showFirstLabel: false,
            labels: {
                style: {
                    color: '#5CAC00',
                    fontSize: '12px'
                }
            },
        }],

        series: [{
            name: '주가',
            data: priceData,
            color: '#404fc3',
            yAxis: 0, // 두 번째 Y축에 연결
            zIndex: 1, // 다른 차트보다 위에 표시
        }, {
            type: 'line',
            name: '주당순이익',
            data: eps2,
            step: 'right',
            color: '#5CAC00',
            yAxis: 1, // 첫 번째 Y축에 연결
            zIndex: 2, // 다른 차트보다 위에 표시

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y',
                valueSuffix: ' 달러',
                useHTML: true,
            },

            events: {
                legendItemClick: function() {
                    var visibility = !this.visible;
                    // '예측 주가(추정)' 시리즈 찾기
                    var chart = this.chart;
                    var predictedSeries = chart.series.find(function(s) {
                        return s.name === '주당순이익(추정)';
                    });
                    if (predictedSeries) {
                        // '예측 주가(추정)' 시리즈의 가시성 변경
                        predictedSeries.setVisible(visibility, false);
                    }
                    return true; // 기본 동작 실행 (시리즈 가시성 토글)
                }
            }
        }, {
            type: 'line',
            name: '주당순이익(추정)',
            data: eps3,
            step: 'right', // 계단식 선을 오른쪽으로 그리도록 설정
            dashStyle: 'dash',
            color: '#c6c6c6',
            yAxis: 1, // 첫 번째 Y축에 연결
            zIndex: 2, // 다른 차트보다 위에 표시
            showInLegend: false, // 범례 숨기기

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y',
                valueSuffix: ' 달러',
                useHTML: true,
            },
        }],
        plotOptions: {
            series: {
                marker: {
                    enabled: false,
                },
                states: {
                    hover: {
                        enabled: false // 시리즈 hover 상태 비활성화
                    },
                    inactive: {
                        opacity: 1 // 비활성화된 시리즈의 투명도를 1로 설정하여 흐려지지 않도록 함
                    }
                }
            },
        },
    });
}



$(document).ready(function () {
    //재무분석 개요 탭 캔들 차트
    if ($('#containeroutline1_2_M3').length) {

        if(pg=='en') {
            var unit = 'USD';
            var close = 'close';
            var price = 'price';
            var daily = 'daily';
            var open = 'open';
            var high = 'high';
            var low = 'low';
            var buy = 'BUY';
            var sell = 'SELL';
            var nodata = 'No such data is available';
        }
        else {
            var unit = 'USD';
            var close = '종가';
            var price = '주가';
            var daily = '일봉';
            var open = '시가';
            var high = '고가';
            var low = '저가';
            var buy = '매수';
            var sell = '매도';
            var nodata = '해당 데이터가 없습니다';
        }

        // 현재 화면 너비를 가져옵니다.
        var screenWidth = window.innerWidth;
        // Highcharts yAxis 레이블 공통 설정
        var commonLabels = {
            formatter: function () {
                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            align: 'left'
        };

        // 모바일 디바이스 설정
        var mobileLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 0,
            }
        });
        // PC 웹 디바이스 설정
        var pcLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 10,
            }
        });

        var mobileLineWidth = 0;
        var pcLineWidth = 1;

        // 미디어 쿼리 조건을 확인하여 해당 Highcharts 설정을 선택합니다.
        var yAxisLabels;
        if (screenWidth >= 320 && screenWidth <= 768) {
            // 모바일 디바이스인 경우
            yAxisLabels = mobileLabels;
            mobileLineWidth = 0;
        } else {
            // PC 웹 디바이스인 경우
            yAxisLabels = pcLabels;
            pcLineWidth = 1;
        }

        // Highcharts 차트 설정
        var chartOptions = {
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                followTouchMove: true,
                events: {
                    load: function () {
                        // 차트가 로드될 때 실행할 작업
                    }
                },
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false,
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false,
            },

            // 기간범위선택
            rangeSelector: {
                enabled: false,
            },

            legend: {
                enabled: true
            },

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: nodata,
            },

            exporting: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y.%m.%d',
                valueSuffix: ' '+unit,
            },

            colors: ["#126fbe"],

            xAxis: [{
                // 아래 함수로 정의
            }],
            yAxis: {
                // visible: false,
                title: null,
                lineColor: '#98ACD0',
                lineWidth: screenWidth <= 768 ? mobileLineWidth : pcLineWidth, // 모바일 및 PC에 따라 lineWidth 조절
                labels: yAxisLabels,
                showFirstLabel: false,
                showLastLabel: true,
            },

            series: [
                {
                    type: 'candlestick',
                    name: daily,
                    id: 'dataseries',
                    crisp: false,
                    data: chart_value,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                        pointFormat: '<b>'+open+' : {point.open}<br/>'+high+' : {point.high}<br/>'+low+' : {point.low}<br/>'+close+': {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: price,
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.2f} '+unit+'</b></span>',
                    },
                },
            ],
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                        symbol: "circle",
                    },
                    groupPadding: 0.3
                },
            },
        };

        // 현재 날짜 기준 데이터 필터링
        var currentDate = new Date();
        var threeMonthsAgo_M3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
        var threeMonthsAgo_M6 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
        var threeMonthsAgo_Y1 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 12, currentDate.getDate());
        //var threeMonthsAgo_Y3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 36, currentDate.getDate());
        //var threeMonthsAgo_Y10 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 120, currentDate.getDate());

        function getCommonXAxisOptions() {
            return {
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                lineColor: '#98ACD0',
                lineWidth: 1,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%m.%d', this.value);
                    },
                },
                crosshair: {
                    width: 1,
                    color: '#107070',
                    dashStyle: 'Dot'
                }
            }
        }
        var xAxisOptions_M3 = Object.assign({}, getCommonXAxisOptions(), {
            type: 'datetime',
            showFirstLabel: true, // 첫 번째 눈금의 레이블을 보여줌
            showLastLabel: true, // 마지막 눈금의 레이블을 보여줌
            endOnTick: false,
            labels: {
                formatter: function() {
                    // 모든 날짜를 '%Y.%m.%d' 포맷으로 표시
                    return Highcharts.dateFormat('%m.%d', this.value);
                }
            },
            min: threeMonthsAgo_M3.getTime(),
        });
        var xAxisOptions_M6 = Object.assign({}, getCommonXAxisOptions(), {
            type: 'datetime',
            showFirstLabel: true, // 첫 번째 눈금의 레이블을 보여줌
            showLastLabel: true, // 마지막 눈금의 레이블을 보여줌
            endOnTick: false,
            labels: {
                formatter: function() {
                    // 모든 날짜를 '%Y.%m.%d' 포맷으로 표시
                    return Highcharts.dateFormat('%m.%d', this.value);
                }
            },
            min: threeMonthsAgo_M6.getTime()
        });
        var xAxisOptions_Y1 = Object.assign({}, getCommonXAxisOptions(), {
            type: 'datetime',
            showFirstLabel: true, // 첫 번째 눈금의 레이블을 보여줌
            showLastLabel: true, // 마지막 눈금의 레이블을 보여줌
            endOnTick: false,
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y1.getTime()
        });

        // 캔들 + 선 차트 생성 (3개월)
        var chart_M3 = Highcharts.stockChart('containeroutline1_2_M3', Object.assign({}, chartOptions, {
            xAxis: xAxisOptions_M3,
            series: [
                {
                    type: 'candlestick',
                    name: daily,
                    id: 'dataseries',
                    crisp: false,
                    data: chart_value,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                        pointFormat: '<b>'+open+' : {point.open}<br/>'+high+' : {point.high}<br/>'+low+' : {point.low}<br/>'+close+': {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: price,
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.2f} '+unit+'</b></span>',
                    },
                },
                {
                    type: 'flags',
                    name: buy,
                    data: buyParams,
                    width: 16,
                    height: 16,
                    useHTML: true, // HTML 기반의 깃발 사용
                    y: 20, // 깃발의 위치 조정
                    allowOverlapX: true, // false 로 설정하면 깃발이 서로 겹치치 않음
                    states: {
                        hover: {
                            fillColor: 'transparent' // 호버 상태의 색상도 투명하게 설정
                        }
                    },
                    style: { // 텍스트 스타일
                        fontSize : '11px',
                        color: '#E1305A',
                        textAlign: 'center',
                    },
                    onSeries: 'dataseries',
                    shape: 'circlepin',
                    color: 'transparent',
                    fillColor: 'transparent',

                },
                {
                    type: 'flags',
                    name: sell,
                    data: sellParams,
                    width: 16,
                    height: 16,
                    useHTML: true, // HTML 기반의 깃발 사용
                    y: -60, // 깃발의 위치 조정
                    allowOverlapX: true, // false 로 설정하면 깃발이 서로 겹치치 않음
                    states: {
                        hover: {
                            fillColor: 'transparent' // 호버 상태의 색상도 투명하게 설정
                        }
                    },
                    style: { // 텍스트 스타일
                        fontSize : '12px',
                        color: '#303FAF',
                        textAlign: 'center',
                    },
                    onSeries: 'dataseries',
                    shape: 'circlepin',
                    color: 'transparent',
                    fillColor: 'transparent',
                },
            ],
        }));
        chart_M3.series[0].setData(chart_value); // 캔들 차트
        chart_M3.series[1].setData([]); // 주가 선차트
        chart_M3.series[1].name = close; // 라벨 변경

        // 캔들 + 선 차트 생성 (6개월)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_M6 = Highcharts.stockChart('containeroutline1_2_M6', Object.assign({}, chartOptions, {
                    xAxis: xAxisOptions_M6,
                    series: [
                        {
                            type: 'candlestick',
                            name: daily,
                            id: 'dataseries',
                            crisp: false,
                            data: chart_value,
                            showInLegend: false,
                            dataGrouping: {
                                enabled: false
                            },
                            tooltip: {
                                useHTML: true,
                                headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                                pointFormat: '<b>'+open+' : {point.open}<br/>'+high+' : {point.high}<br/>'+low+' : {point.low}<br/>'+close+': {point.close}<br/></b>',
                            },
                            zIndex: 1
                        },
                        {
                            type: 'line',
                            name: price,
                            data: chart_value5,
                            showInLegend: false,
                            dataGrouping: {
                                enabled: false
                            },
                            tooltip: {
                                useHTML: true,
                                headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                                pointFormat: '</br><b>{series.name} : {point.y:,.2f} '+unit+'</b></span>',
                            },
                        },
                        {
                            type: 'flags',
                            name: buy,
                            data: buyParams,
                            width: 16,
                            height: 16,
                            useHTML: true, // HTML 기반의 깃발 사용
                            y: 20, // 깃발의 위치 조정
                            allowOverlapX: true, // false 로 설정하면 깃발이 서로 겹치치 않음
                            states: {
                                hover: {
                                    fillColor: 'transparent' // 호버 상태의 색상도 투명하게 설정
                                }
                            },
                            style: { // 텍스트 스타일
                                fontSize : '11px',
                                color: '#E1305A',
                                textAlign: 'center',
                            },
                            onSeries: 'dataseries',
                            shape: 'circlepin',
                            color: 'transparent',
                            fillColor: 'transparent',

                        },
                        {
                            type: 'flags',
                            name: sell,
                             data: sellParams,
                            width: 16,
                            height: 16,
                            useHTML: true, // HTML 기반의 깃발 사용
                            y: -60, // 깃발의 위치 조정
                            allowOverlapX: true, // false 로 설정하면 깃발이 서로 겹치치 않음
                            states: {
                                hover: {
                                    fillColor: 'transparent' // 호버 상태의 색상도 투명하게 설정
                                }
                            },
                            style: { // 텍스트 스타일
                                fontSize : '12px',
                                color: '#303FAF',
                                textAlign: 'center',
                            },
                            onSeries: 'dataseries',
                            shape: 'circlepin',
                            color: 'transparent',
                            fillColor: 'transparent',
                        },
                    ],
                }));
                chart_M6.series[0].setData(chart_value); // 캔들 차트
                chart_M6.series[1].setData([]); // 주가 선차트
                chart_M6.series[1].name = close; // 라벨 변경
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (1년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y1 = Highcharts.stockChart('containeroutline1_2_Y1', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y1 }));
                chart_Y1.series[0].setData([]); // 캔들 차트
                chart_Y1.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });
    }
});