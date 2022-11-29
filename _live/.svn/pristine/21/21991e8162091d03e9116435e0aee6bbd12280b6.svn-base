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
                    color: ["#5CAC00"],
                },
            },
            title: {
                text: null,
            },
        }, {
            labels: {
                format: '{value} 달러',      
                style: {
                    color: ["#404fc3"],
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
            categories: ['배당 매력', '사업 독점력', '현금 창출력', '수익 성장성', '재무 안전성'],
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
            categories: ['배당매력', '사업<br>독점력', '현금 창출력', '수익 성장성', '재무<br>안전성'],
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
            tickInterval: 1.07,                
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
            categories: ['배당매력', '수익 성장성', '사업 독점력', '재무 안전성', '현금 창출력'],
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
            categories: ['배당 매력', '사업<br>독점력', '현금 창출력', '수익 성장성', '재무<br>안전성'],
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