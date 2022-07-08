$(document).ready(function () {

    // ***************************** //
    // **********  종목추천 ********* //
    // ***************************** //    
    // 서브 - 종목추천 투자포인트, 종목진단 line 차트    
    if ($('#containerArea_1').length) {
        Highcharts.stockChart('containerArea_1', {

            chart: {
                type: 'line',
                renderTo: 'containerArea_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            legend: {
                enabled: false
            },

            xAxis: [{
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: '#333',
                gridLineDashStyle: 'Dot',
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
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
                },
            },
        });
    }
    // 서브 - 종목추천 투자포인트, 종목진단 spider 차트    
    if ($('#containerSpider_1').length) {

        Highcharts.stockChart('containerSpider_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerSpider_1',
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
                marginBottom: 0,
                marginLeft: 30,
                marginRight: 30,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    var s = '<b>' + this.x + '</b>';
                    $.each(this.points, function (i, point) {
                        if (point.y == '5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgOne + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4.5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgHalf + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4') {
                            s += imgOne + imgOne + imgOne + imgOne + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3.5') {
                            s += imgOne + imgOne + imgOne + imgHalf + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3') {
                            s += imgOne + imgOne + imgOne + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2.5') {
                            s += imgOne + imgOne + imgHalf + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2') {
                            s += imgOne + imgOne + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1.5') {
                            s += imgOne + imgHalf + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1') {
                            s += imgOne + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '0.5') {
                            s += imgHalf + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else {
                            s += imgZero + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                    });
                    return s;
                },
            },

            legend: {
                enabled: false,                
            },

            pane: {
                size: '80%',
                center: ['50%', '50%'],
            },

            xAxis: {
                categories: ['배당매력', '사업<br>독점력', '현금창출력', '수익성장성', '재무<br>안전성'],
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
                tickInterval: 2,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '투자매력도',
                data: [4, 2.5, 5, 0, 3],
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

    // ***************************** //
    // **********  종목분석 ********* //
    // ***************************** //
    // 서브 - 종목분석 메인 line 차트    
    if ($('#containerArea1_1').length) {
        Highcharts.stockChart('containerArea1_1', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                // height: 88,          
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false
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

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
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
    if ($('#containerArea1_2').length) {
        Highcharts.stockChart('containerArea1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                // height: 88,          
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false
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

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
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
    if ($('#containerArea1_3').length) {
        Highcharts.stockChart('containerArea1_3', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false
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

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
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
    if ($('#containerArea1_4').length) {
        Highcharts.stockChart('containerArea1_4', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false
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

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
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
    if ($('#containerArea1_5').length) {
        Highcharts.stockChart('containerArea1_5', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_5',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 88,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false
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

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
            }],

            plotOptions: {
                series: {
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

    // ***************************** //
    // **********  검색 ********* //
    // ***************************** //
    // 검색 - 종목진단 - 투자매력 spider 차트    
    if ($('#containercharm1_1').length) {

        Highcharts.stockChart('containercharm1_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containercharm1_1',
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
                marginTop: 30,
                marginBottom: 30,
                marginLeft: 30,
                marginRight: 30,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    var s = '<b>' + this.x + '</b>';
                    $.each(this.points, function (i, point) {
                        if (point.y == '5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgOne + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4.5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgHalf + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4') {
                            s += imgOne + imgOne + imgOne + imgOne + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3.5') {
                            s += imgOne + imgOne + imgOne + imgHalf + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3') {
                            s += imgOne + imgOne + imgOne + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2.5') {
                            s += imgOne + imgOne + imgHalf + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2') {
                            s += imgOne + imgOne + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1.5') {
                            s += imgOne + imgHalf + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1') {
                            s += imgOne + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '0.5') {
                            s += imgHalf + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else {
                            s += imgZero + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                    });
                    return s;
                },                
            },

            legend: {
                enabled: false
            },

            pane: {
                size: '80%',
                center: ['50%', '50%'],
            },

            xAxis: {
                categories: ['미래성장성', '사업<br>독점력', '현금창출력', '수익성', '재무<br>안전성'],
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

            series: [{
                name: '투자매력도',
                data: [5, 5, 5, 5, 5],
                pointPlacement: 'on',

            }],

            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                }
            },
        });
    }

    // 검색 - 종목진단 - 투자매력탭 column 차트
    if ($('#containeralloca_star1_1').length) {
        Highcharts.stockChart('containeralloca_star1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1',
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
                marginBottom: 100,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },            

            xAxis: [{
                categories: ['예상 매출액 성장률(%)'],
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

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_1_2').length) {
        Highcharts.stockChart('containeralloca_star1_1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            xAxis: [{
                categories: ['예상 영업익 성장률(%)'],
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

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    if ($('#containeralloca_star1_2').length) {
        Highcharts.stockChart('containeralloca_star1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['잉여현금흐름비율(%)'],
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

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_2_1').length) {
        Highcharts.stockChart('containeralloca_star1_2_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_2_1',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['주가현금흐름배수(배)'],
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

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca_star1_2_2').length) {
        Highcharts.stockChart('containeralloca_star1_2_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_2_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            xAxis: [{
                categories: ['영업활동현금(백만달러)/정수'],
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

            series: [{
                name: '종목',
                data: [10]
            }, {
                name: '업종평균',
                data: [30]
            }, {
                name: '전체평균',
                data: [20]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    // 검색 - 종목진단 - 투자매력탭 경쟁사 투자매력도 spider 차트
    if ($('#chart_spider_mini_01').length) {

        Highcharts.stockChart('chart_spider_mini_01', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_01',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

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

        })
    }
    if ($('#chart_spider_mini_02').length) {

        Highcharts.stockChart('chart_spider_mini_02', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_02',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

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

        })
    }
    if ($('#chart_spider_mini_03').length) {

        Highcharts.stockChart('chart_spider_mini_03', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'chart_spider_mini_03',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                style: {
                    fontSize: '0',
                },
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                style: {
                    fontSize: '0',
                },
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5,
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '',
                data: [1.5, 1.5, 2, 3, 5],
                pointPlacement: 'on',

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

        })
    }

    if ($('#containersummary1').length) {
        Highcharts.stockChart('containersummary1', {

            chart: {
                type: 'line',
                renderTo: 'containersummary1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#877edf"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                labels: {
                    enabled: false
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                lineColor: '#333',
                gridLineDashStyle: 'Dot',
                labels: {
                    enabled: false
                }
            },

            series: [{
                name: '',
                data: [
                    3.7, 3.3, 3.9, 5.1, 3.5, 3.8, 4.0, 5.0, 6.1, 3.7, 3.3, 6.4,
                    6.9, 6.0, 6.8, 4.4, 4.0, 3.8, 5.0, 4.9, 9.2, 9.6, 9.5, 6.3,
                    9.5, 10.8, 14.0, 11.5, 10.0, 10.2, 10.3, 9.4, 8.9, 10.6, 10.5, 11.1,
                    10.4, 10.7, 11.3, 10.2, 9.6, 10.2, 11.1, 10.8, 13.0, 12.5, 12.5, 11.3,
                    10.1
                ]
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
                },
            },
        });
    }

    // 검색 - 종목진단 - 기업개요탭 재무제표 column 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.stockChart('containerfinancials1_1', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_1',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.stockChart('containerfinancials1_2', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.stockChart('containerfinancials1_3', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials1_3',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_1').length) {
        Highcharts.stockChart('containerfinancials2_1', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_1',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_2').length) {
        Highcharts.stockChart('containerfinancials2_2', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containerfinancials2_3').length) {
        Highcharts.stockChart('containerfinancials2_3', {
            chart: {
                type: 'column',
                renderTo: 'containerfinancials2_3',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,                
            },

            xAxis: [{
                categories: ['2017', '2018', '2019'],
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

            series: [{
                name: '매출액',
                data: [97, 45, 75]
            }, {
                name: '영업이익',
                data: [85, 24, 42]
            }, {
                name: '순이익',
                data: [64, 34, 24]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    // 검색 - 종목진단 - 재무차트탭 11개 BIC차트
    /* 매출과이익 */
    if ($('#chart_BICchart011').length) {
        Highcharts.stockChart('chart_BICchart011', {
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

            legend: {
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#C4C4C4 ", "#404fc3", "#5CAC00"],

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true,
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    // format: '{value}</b><br/>백만달러',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    // format: '{value}</b><br/>백만달러(USD)',
                    style: {
                        color: ["#623FA8"],
                    }
                },
                opposite: false
            }],

            series: [{
                style: {
                    fontSize: '0',
                },
                name: '매출액',
                type: 'column',
                data: [150, 126, 129, 234, 228, 121, 150, 126, 129, 234, 228, 121],

            }, {
                name: '영업이익',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0, 49, 71.5, 20.4, 92, 44.0, 76.0],

            }, {
                name: '지배지분순이익',
                type: 'line',
                yAxis: 1,
                data: [19.9, 71.5, 106.4, 29.2, 14.0, 76.0, 19.9, 71.5, 106.4, 29.2, 14.0, 76.0],

            }],

            lang: {
                noData: "해당 데이터가 없습니다.<br> 데이터 선택 기간을 변경해 보세요.",
            },

            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                    align: 'left'
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
    //D012. 이익률
    if ($('#chart_BICchart012').length) {
        Highcharts.stockChart('chart_BICchart012', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart012',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#5CAC00"],
                    },
                },
                title: {
                    text: null,
                }
            },

            series: [{
                type: 'line',
                data: [294, 71, 106, 429, 144.456, 656],
                name: '영업이익률',
            }, {
                type: 'line',
                data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
                name: '순이익률',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D015. 부채비율과 유동비율    
    if ($('#chart_BICchart015').length) {
        Highcharts.stockChart('chart_BICchart015', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart015',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/> %',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: true
            }],

            series: [{
                name: '부채비율',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '유동비율',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D022. 주당배당금과 배당률
    if ($('#chart_BICchart022').length) {
        Highcharts.stockChart('chart_BICchart022', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'chart_BICchart022',
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
                marginBottom: 90,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}달러',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
                opposite: true
            }],


            series: [{
                name: '주당배당금',
                type: 'column',
                data: [117.0, 126.9, 129.5, 234.5, 228.2, 121.5],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
                },

            }, {
                name: '배당수익률',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D024. ROE 와 PBR
    if ($('#chart_BICchart024').length) {
        Highcharts.stockChart('chart_BICchart024', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart024',
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

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#404fc3"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 배',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: true
            }],

            series: [{
                name: '자기자본이익률',
                data: [42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '주가순자산배수',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D027. 운전자본 회전일수
    if ($('#chart_BICchart027').length) {
        Highcharts.stockChart('chart_BICchart027', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart027',
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
                marginBottom: 100,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#959393"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#FF9700"],
                    }
                },
                opposite: true
            }],

            series: [{
                type: 'line',
                data: [42, 52, 57, 69, 97, 11],
                name: '매출채권 회전일수',
            }, {
                type: 'line',
                data: [14.1, 9.6, 5.4, 9.9, 1.5, 06],
                name: '재고자산 회전일수',
            }, {
                type: 'line',
                data: [194.1, 95.6, 54.4, 29.9, 71.5, 106.4],
                name: '매입채무 회전일수',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D029. 현금흐름표
    if ($('#chart_BICchart029').length) {
        Highcharts.stockChart('chart_BICchart029', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart029',
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

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#C4C4C4", "#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f}</b><br/>백만달러</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    // format: '{value}</b><br/>백만달러',
                    style: {
                        color: ["#959393"],
                    },
                },
                title: {
                    text: null,
                }
            },

            series: [{
                type: 'line',
                data: [345, 71, 106, 129, 144, 176],
                name: '영업활동 현금흐름'
            }, {
                type: 'line',
                data: [16, 64, 42, 51, 30, 82],
                name: '투자활동 현금흐름',
            }, {
                type: 'line',
                data: [23, 63, 52, 31, 13, 34],
                name: '재무활동 현금흐름',
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D032. 주가수익배수
    if ($('#chart_BICchart032').length) {
        Highcharts.stockChart('chart_BICchart032', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart032',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
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

            series: [{
                name: '주가수익배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D033. 주가와 주당순이익
    if ($('#chart_BICchart033').length) {
        Highcharts.stockChart('chart_BICchart033', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart033',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#5CAC00"],
                    },
                },
                title: {
                    text: null,
                }
            },

            series: [{
                name: '주당순이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '주가',
                type: 'line',
                data: [72, 32, 37, 69, 27, 31]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D034. 주가순자산배수
    if ($('#chart_BICchart034').length) {
        Highcharts.stockChart('chart_BICchart034', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart034',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
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

            series: [{
                name: '주가순자산배수',
                data: [42, 52, 57, 69, 97, 11]
            }],

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
    //D035. 주가와 주당순자산
    if ($('#chart_BICchart035').length) {
        Highcharts.stockChart('chart_BICchart035', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart035',
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

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#5CAC00"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
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

            series: [{
                type: 'line',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                name: '주당순자산'
            }, {
                name: '주가',
                type: 'line',
                yAxis: 1,
                data: [62, 53, 35, 34, 23, 12]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    //D036. 주가순자산배수(PSR)
    if ($('#chart_BICchart036').length) {
        Highcharts.stockChart('chart_BICchart036', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart036',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
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

            series: [{
                name: '주가순자산배수(PSR)',
                data: [42, 52, 57, 69, 97, 11]
            }],

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
    //D037. 주가주당매출액
    if ($('#chart_BICchart037').length) {
        Highcharts.stockChart('chart_BICchart037', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'chart_BICchart037',
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
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
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

            series: [{
                name: '주가주당매출액',
                data: [42, 52, 57, 69, 97, 11]
            }],

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

    // 검색 - 배당탭 column 차트
    if ($('#containeralloca1_1').length) {
        Highcharts.stockChart('containeralloca1_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_1',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
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

            series: [{
                name: '배당수익률',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca1_2').length) {
        Highcharts.stockChart('containeralloca1_2', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_2',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            colors: ["#545872"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
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

            series: [{
                name: '주당배당금',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }
    if ($('#containeralloca1_3').length) {
        Highcharts.stockChart('containeralloca1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca1_3',
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            // colors: ["#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2015', '2016', '2017', '2018', '2019', '2019', '2019', '2019', '2020', '2021'],
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

            series: [{
                name: '배당성향',
                data: [22.88, 31.23, 35.23, 97.23, 35.23, 9.23, 7.23, 35.23, 34.23, 23.23]
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
                        format: '{point.y:,.2f}',
                    }
                }
            },
        });
    }

    // 원스톱 진단
    if ($('#onestep_chart1_1').length) {
        Highcharts.stockChart('onestep_chart1_1', {

            chart: {
                type: 'bubble',
                plotBorderWidth: 2,
                zoomType: 'x',
                backgroundColor: '#f2faff',
                borderColor: '#877edf',
                height: 280,
                plotBorderColor: '#1d4a88',
                plotShadow: false,
                marginLeft: 0,
                marginTop: -1,
                marginRight: -1,
                marginBottom: 0,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            title: {
                text: null
            },

            accessibility: {
                point: {
                    valueDescriptionFormat: '{index}. {point.name}, fat: {point.x}g, sugar: {point.y}g, obesity: {point.z}%.'
                }
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
                    rangeDescription: 'Range: 60 to 160 grams.'
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
            series: [{
                data: [
                    { x: 95, y: 95, name: 'TSLA' },
                    { x: 8.5, y: 12.9, name: 'AAPL' },
                    { x: 12.3, y: 86.1, name: 'DIS' },
                    { x: 13.3, y: 87.1, name: 'AAPL' },
                    { x: 53.4, y: 61.8, name: 'QCOM' },
                    { x: 48.4, y: 63.8, name: 'QCOM' },
                    { x: 63.4, y: 51.8, name: 'QCOM' },
                    { x: 63.4, y: 51.8, name: 'QCOM' },
                    { x: 68, y: 82.9, name: 'MSFT' },
                ]
            }]
        });
    }

    // 밴드 차트
    if ($('#sum_topchart_band').length) {
        // 검색 - 적정가밴드 주가비교
        Highcharts.stockChart('sum_topchart_band', {
            chart: {
                zoomType: 'xy',
                // scrollablePlotArea: {
                //     minWidth: 860,
                //     scrollPositionX: 1,
                //     opacity: 0.5
                // },
                renderTo: 'sum_topchart_band',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                marginTop: 20,
                marginBottom: 100,
                height: 420,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
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
                enabled: true,
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom',
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            title: {
                text: null
            },

            legend: {
                itemDistance: 6,
            },

            colors: ["#f2333a", "#bec3ed", "#e4e6fc", "#c6c6c6", "#737edd"],

            tooltip: {
                crosshairs: true,
                shared: true,
                valueDecimals: 2,
                style: {
                    fontfamily: 'Spoqa Han Sans Neo',
                    fontWeight: 'nomal',
                    fontSize: '11px',
                    color: '#8380A0',
                }
            },

            xAxis: {
                type: 'year',
                categories: ['20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.06', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.07', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.08', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.09', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.10', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.11', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '20.12', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.01', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.02', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.03', '21.01', '21.02', '21.03', '21.04', '21.05', '21.06', '21.07', '21.08', '21.09', '21.10', '21.11', '21.12', '21.01', '21.02', '21.03', '21.04'],
                crosshair: true,
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#333333"],
                    },
                    step: 23,
                },
                showLastLabel: true,
                crosshair: {
                    color: 'rgba(204,214,235,1)',
                    zIndex: 3
                }
            },
            yAxis: {
                // type: 'logarithmic',
                title: {
                    text: null
                },
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                maxPadding: 0,
                minPadding: 0.15,
                minorTickInterval: 'auto',
                // tickInterval: 'auto',
                showFirstLabel: true,
                opposite: true,
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
                data:
                    [182.830, 184.910, 185.360, 182.920, 187.200, 188.360, 189.800, 196.840, 186.270, 187.740, 188.940, 193.570, 194.240, 196.320, 195.150, 200.570, 201.910, 197.840, 200.340, 196.330, 198.440, 203.510, 204.700, 206.260, 210.700, 208.250, 212.830, 214.320, 213.670, 207.070, 208.350, 208.040, 203.920, 202.880, 211.600, 208.750, 211.750, 202.540, 201.300, 203.850, 202.020, 204.060, 203.900, 205.010, 216.540, 213.290, 212.940, 216.350, 212.480, 208.250, 203.380, 209.190, 208.700, 208.900, 210.280, 211.490, 209.700, 214.580, 213.020, 213.690, 216.470, 221.150, 226.580, 228.910, 225.530, 227.270, 231.650, 217.300, 214.250, 202.660, 211.290, 205.370, 204.030, 205.410, 208.780, 205.050, 202.910, 200.390, 202.540, 207.420, 200.590, 203.190, 207.820, 209.440, 207.260, 210.330, 212.460, 206.190, 210.380, 205.910, 209.830, 210.580, 215.810, 221.400, 222.860, 220.860, 219.660, 219.660, 214.220, 214.650, 214.800, 214.890, 216.230, 210.080, 213.250, 202.680, 204.720, 202.470, 202.330, 206.430, 216.390, 223.290, 223.720, 218.390, 211.010, 216.550, 215.440, 216.510, 217.230, 214.460, 211.080, 212.420, 210.390, 210.110, 213.860, 213.870, 215.230, 214.070, 216.210, 215.370, 214.240, 214.360, 214.290, 216.010, 211.800, 210.520, 213.260, 214.200, 214.130, 219.280, 219.420, 218.590, 222.590, 223.940, 221.020, 222.750, 224.960, 224.150, 221.680, 222.420, 217.690, 217.900, 212.250, 218.290, 219.620, 217.490, 214.930, 216.340, 213.020, 212.650, 216.440, 224.340, 224.970, 225.950, 229.530, 232.330, 232.900, 238.930, 231.960, 239.650, 239.510, 243.000, 242.010, 242.200, 242.470, 243.770, 242.820, 244.490, 244.990, 243.700, 244.200, 243.790, 240.970, 234.510, 233.270, 234.550, 228.990, 232.380, 236.940, 233.870, 227.560, 226.730, 231.600, 227.390, 233.780, 232.420, 237.130, 235.750, 234.810, 237.710, 237.040, 230.720, 230.350, 235.990, 237.580, 235.460, 232.340, 236.480, 235.240, 231.850, 235.770, 242.350, 249.070, 247.860, 249.900, 253.250, 255.850, 255.910, 258.490, 255.590, 259.500, 260.740, 258.740, 258.260,],
                zIndex: 2,
                lineWidth: 2,
                marker: {
                    enabled: false
                }
            }, {
                name: '적정가',
                data:
                    [239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 239.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 193.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 203.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00, 233.00,],
                marker: {
                    enabled: false
                },
                zIndex: 1,
                lineWidth: 2,
            }, {
                name: '저평가-고평가',
                data: [
                    [null, null], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [null, null], [null, null], [null, null], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [63.06, 106.60], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30], [54.60, 92.30],
                ],
                type: 'arearange',
                lineWidth: 0,
                opacity: 1,
                className: 'label_none',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우저평가',
                data:
                    [141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 141.25, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 114.06, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 119.97, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70, 137.70,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우고평가',
                data:
                    [403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 403.91, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 326.17, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 343.07, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77, 393.77,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }],
            plotOptions: {
                series: {
                    // connectNulls: true,
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions(),
                    }
                }
            },
        });
    }
});