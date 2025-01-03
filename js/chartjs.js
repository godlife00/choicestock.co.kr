$(document).ready(function () {

    Highcharts.setOptions({
        chart: {
            style: {
                fontFamily: 'Pretendard Variable, Pretendard'
            }
        }
    });


    // ***************************** //
    // **********  종목추천 ********* //
    // ***************************** //
    // 서브 - 종목추천 메인 line 작은 차트
    if ($('#containerS1_1').length) {
        Highcharts.chart('containerS1_1', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
    if ($('#containerS1_2').length) {
        Highcharts.chart('containerS1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
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
    if ($('#containerS1_3').length) {
        Highcharts.chart('containerS1_3', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175, 43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
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
    // 서브 - 종목추천 투자포인트, 종목진단 line 차트    
    if ($('#containerArea_1').length) {
        Highcharts.chart('containerArea_1', {

            chart: {
                type: 'line',
                renderTo: 'containerArea_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
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

        Highcharts.chart('containerSpider_1', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginTop: 0,
                marginBottom: 0,
                marginLeft: 30,
                marginRight: 30,
            },

            title: {
                text: ''
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
                shared: true
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
        Highcharts.chart('containerArea1_1', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                // height: 88,          
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
        Highcharts.chart('containerArea1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                // height: 88,          
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
        Highcharts.chart('containerArea1_3', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
        Highcharts.chart('containerArea1_4', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
        Highcharts.chart('containerArea1_5', {
            chart: {
                type: 'line',
                renderTo: 'containerArea1_5',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
                height: 88,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
    // 서브 - 종목분석 뷰 line 차트    
    if ($('#chart_subanalysis1').length) {
        Highcharts.chart('chart_subanalysis1', {

            chart: {
                type: 'line',
                renderTo: 'chart_subanalysis1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
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

    // ***************************** //
    // **********  검색 ********* //
    // ***************************** //
    // 검색 - 종목진단 - 투자매력 spider 차트    
    if ($('#containercharm1_1').length) {

        Highcharts.chart('containercharm1_1', {
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
                        alignCenterElements(this);
                    },
                    redraw: function () {
                        alignCenterElements(this);
                    }
                }
            },

            title: {
                text: ''
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
                categories: ['미래 성장성<br><strong>100</strong> ', '사업 독점력<br><strong>50</strong>', '현금창출력<br><strong>100</strong>', '수익성<br><strong>45</strong>', '재무 안전성<br><strong>75</strong>'],                
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
                data: [10, 100, 90, 90, 90],
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
        // 차트 리사이즈 계산
        function alignCenterElements(chart) {            
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
            chart.bgImage = chart.renderer.image('../img/bg_spider.svg', centerX - radius, centerY - radius, size, size)
                .attr({
                    zIndex: -1
                })
                .add()
                .translate(0, 14);
        
            // 중앙의 값 텍스트 추가
            chart.centerText = chart.renderer.text('23', centerX, centerY)
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
    }
    
    function createSpiderChart(containerId, seriesData, chartTitle) {
        Highcharts.chart(containerId, {
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
                        
                        chart.renderer.image('../img/bg_spider.svg', centerX - radius, centerY - radius, size, size)
                        .attr({
                            zIndex: -1
                        })
                        .add();
                    }
                }
            },
            colors: ["rgba(131, 145, 246, 1)"],
            title: {
                useHTML: true,
                text: chartTitle,
                align: 'center',
                verticalAlign: 'bottom',                                                                 
            },
            tooltip: {
                enabled: false
            },
            pane: {
                size: '50%',
                center: ['50%', '50%'],                
            },
            xAxis: {
                categories: ['미래성장성<br><strong>50</strong> ', '사업 독점력<br><strong>35</strong>', '현금창출력<br><strong>100</strong>', '수익성<br><strong>0</strong>', '재무안전성<br><strong>75</strong>'],                
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
                data: seriesData,
                pointPlacement: 'on',  
                color: '#7983d5', // 시리즈 선의 색상을 설정
                lineWidth: 1, // 시리즈 선의 너비를 설정
                marker: {
                    enabled: true,
                    fillColor: '#404fc3',
                    lineColor: '#ff0000', // 마커 테두리 색상을 설정
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

    // 차트 생성 예시
    if ($('#MRIchart_analy01_small').length) {
        createSpiderChart('MRIchart_analy01_small', [100, 50, 100, 45, 75], '<a href="">피프스 써드 뱅코프</a>');
    }
    if ($('#MRIchart_analy02_small').length) {
        createSpiderChart('MRIchart_analy02_small', [40, 50, 80, 70, 50], '<a href="">마이크로소프트</a>');
    }
    if ($('#MRIchart_analy03_small').length) {
        createSpiderChart('MRIchart_analy03_small', [70, 30, 40, 50, 60], '<a href="">애플</a>');
    }
    if ($('#MRIchart_analy04_small').length) {
        createSpiderChart('MRIchart_analy04_small', [90, 30, 40, 50, 40], '<a href="">마이크로소프트</a>');
    }

    // 검색 - 종목진단 - 투자매력탭 column 차트
    if ($('#containeralloca_star1_1').length) {
        Highcharts.chart('containeralloca_star1_1', {
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

                },
                marginBottom: 100,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],


            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
        Highcharts.chart('containeralloca_star1_1_2', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
    if ($('#containeralloca_star1_1_3').length) {
        Highcharts.chart('containeralloca_star1_1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_3',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['순이익성장률(%))'],
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
                enabled: false,
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
    if ($('#containeralloca_star1_1_4').length) {
        Highcharts.chart('containeralloca_star1_1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_4',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['잉여현금성장률(%))'],
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
                enabled: false,
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
        Highcharts.chart('containeralloca_star1_2', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
        Highcharts.chart('containeralloca_star1_2_1', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#a1a1a1"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
        Highcharts.chart('containeralloca_star1_2_2', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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


    // 레시피 - 골든크로스 이평선 차트
    function createCrossChart(containerId, data20Days, data60Days, data120Days) {
        Highcharts.chart(containerId, {
            chart: {
                type: 'spline',
                panning: {
                    enabled: true,
                    type: 'x'
                },
                followTouchMove: true,
                // width: 126,
                height: 122,
                margin: [0, 0, 0, 0],
            },

            title: {
                text: '',
                align: 'left'
            },

            subtitle: {
                text: '',
                align: 'left'
            },

            navigator: {
                enabled: false,
            },

            scrollbar: {
                enabled: false,
            },

            rangeSelector: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            yAxis: {
                title: {
                    text: ''
                },
                visible: false,
                labels: {
                    enabled: false
                }
            },

            xAxis: {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true,
                endOnTick: false,
                dateTimeLabelFormats: {
                    month: '%Y.%m'
                },
                labels: {
                    enabled: false
                }
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    marker: {
                        enabled: false,
                        symbol: "circle",
                    },
                    groupPadding: 0.3
                }
            },

            tooltip: {
                enabled: false,
            },

            colors: ['rgb(92, 172, 0) ', 'rgb(196, 196, 196)'],

            series: [{
                name: '20일',
                type: 'spline',
                zIndex : 2,
                data: data20Days,
            }, {
                name: '60일',
                type: 'spline',
                zIndex : 1,
                data: data60Days
            }],

        });
    }
    if ($('#cross_chart1_1').length) {
        createCrossChart('cross_chart1_1', [10, 18, 22, 28, 32, 36, 40], [12, 28, 32, 38, 22, 26, 50],);
    }
    if ($('#cross_chart1_2').length) {
        createCrossChart('cross_chart1_2', [12, 28, 32, 38, 22, 26, 30], [10, 18, 22, 28, 32, 36, 40],);
    }
    if ($('#cross_chart1_3').length) {
        createCrossChart('cross_chart1_3', [12, 28, 32, 38, 22, 26, 30], [10, 18, 22, 28, 32, 36, 40],);
    }
    if ($('#cross_chart1_4').length) {
        createCrossChart('cross_chart1_4', [12, 28, 32, 38, 22, 26, 30], [10, 18, 22, 28, 32, 36, 40],);
    }

    // 레시피 - 스파이더 차트
    function createGrowthChart(containerId, seriesData, centerScore) {
        Highcharts.chart(containerId, {
            chart: {
                polar: true,
                type: 'area',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                width : 126,
                height: 122,
                margin: [10, 0, 0, 0],
                events: {
                    load: function () {
                        alignCenterElements(this, centerScore);
                    },
                    redraw: function () {
                        alignCenterElements(this, centerScore);
                    }
                }
            },
            title: {
                text: ''
            },
            colors: ["rgba(131, 145, 246, 1)"],
            tooltip: {
                enabled: false,
            },
            pane: {
                size: '96%',
                center: ['50%', '50%'],
            },
            xAxis: {
                categories: ['미래 성장성<br><strong>100</strong> ', '사업 독점력<br><strong>50</strong>', '현금창출력<br><strong>100</strong>', '수익성<br><strong>45</strong>', '재무 안전성<br><strong>75</strong>'],
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
                name: '투자매력도',
                data: seriesData,
                pointPlacement: 'on',
                color: '#7983d5',
                lineWidth: 1,
                marker: {
                    enabled: true,
                    fillColor: '#404fc3',
                    lineColor: '#f7f8f9',
                    lineWidth: 1,
                    radius: 2.7
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillColor: '#e3e7f8',
                    states: {
                        hover: {
                            enabled: false
                        },
                    }
                }
            },
        });
    }
    function alignCenterElements(chart, centerScore) {
        var paneSize = chart.pane[0].options.size,
            paneCenter = chart.pane[0].center,
            centerX = paneCenter[0],
            centerY = paneCenter[1] - 12,
            size = Math.min(chart.plotWidth, chart.plotHeight) * (parseInt(paneSize) / 100),
            radius = size / 2;

        if (chart.bgImage) {
            chart.bgImage.destroy();
        }
        if (chart.centerText) {
            chart.centerText.destroy();
        }

        chart.bgImage = chart.renderer.image('../img/bg_spider.svg', centerX - radius, centerY - radius, size, size)
            .attr({
                zIndex: -1
            })
            .add()
            .translate(0, 14);

        chart.centerText = chart.renderer.text(centerScore, centerX, centerY)
            .css({
                color: '#404fc3',
                fontSize: '30px',
                textAlign: 'center',
                fontWeight: 'bold',
                fontFamily: "Pretendard Variable, Pretendard",
            })
            .attr({
                zIndex: 5,
                align: 'center'
            })
            .add()
            .translate(0, 25);
    }

    if ($('#growth_chart1_1').length) {
        createGrowthChart('growth_chart1_1', [10, 100, 90, 90, 90], '23');
    }
    if ($('#growth_chart1_2').length) {
        createGrowthChart('growth_chart1_2', [100, 100, 100, 100, 100], '100');
    }
    if ($('#growth_chart1_3').length) {
        createGrowthChart('growth_chart1_3', [100, 40, 100, 100, 40], '75');
    }
    if ($('#growth_chart1_4').length) {
        createGrowthChart('growth_chart1_4', [50, 50, 50, 50, 50], '50');
    }


    // 검색 - 종목진단 - 투자매력탭 경쟁사 투자매력도 spider 차트
    if ($('#chart_spider_mini_01').length) {

        Highcharts.chart('chart_spider_mini_01', {
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

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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

        Highcharts.chart('chart_spider_mini_02', {
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

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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

        Highcharts.chart('chart_spider_mini_03', {
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

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
        Highcharts.chart('containersummary1', {

            chart: {
                type: 'line',
                renderTo: 'containersummary1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {

                },
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
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
    // if ($('#containerfinancials1_1').length) {
    //     Highcharts.chart('containerfinancials1_1', {
    //         chart: {
    //             type: 'column',
    //             renderTo: 'containerfinancials1_1',
    //             backgroundColor: {
    //                 // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
    //                 stops: [
    //                     [0, '#ffffff'],
    //                     [1, '#ffffff']
    //                 ]
    //             },
    //             margin: [15, 10, 50, 10],
    //             style: {

    //             },
    //             plotBorderColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false
    //         },

    //         colors: ["#404fc3", "#545872", "#d3d3d3"],

    //         tooltip: {
    //             shared: true,
    //             crosshairs: true,
    //             pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    //         },

    //         xAxis: [{
    //             categories: ['2017', '2018', '2019'],
    //             crosshair: true,
    //             labels: {
    //                 style: {
    //                     color: '#939393',
    //                     fontSize: '0.85rem'
    //                 }
    //             }
    //         }],

    //         yAxis: {
    //             title: {
    //                 text: null
    //             },
    //             lineColor: null,
    //             minorGridLineWidth: 1,
    //             gridLineWidth: 0,
    //             lineWidth: 1,
    //             plotLines: [{
    //                 color: '#c8c8c8',
    //                 width: 1,
    //                 value: 0
    //             }],
    //             alternateGridColor: null,
    //             showFirstLabel: false,
    //             breaks: [{
    //                 from: 0,
    //                 to: 100
    //             }],
    //             labels: {
    //                 enabled: false
    //             }
    //         },

    //         title: {
    //             style: {
    //                 'font-weight': "bold",
    //                 color: '#E0E0E3',
    //                 textTransform: 'uppercase',
    //                 fontSize: '0',
    //             },
    //             text: ''
    //         },

    //         credits: {
    //             enabled: false
    //         },

    //         exporting: {
    //             enabled: false
    //         },

    //         legend: {
    //             enabled: false,
    //         },

    //         series: [{
    //             name: '매출액',
    //             data: [97, 45, 75]
    //         }, {
    //             name: '영업이익',
    //             data: [85, 24, 42]
    //         }, {
    //             name: '순이익',
    //             data: [64, 34, 24]
    //         }],

    //         plotOptions: {
    //             series: {
    //                 marker: {
    //                     enabled: false,
    //                 }
    //             },
    //             column: {
    //                 minPointLength: 5,
    //                 dataLabels: {
    //                     enabled: true,
    //                     crop: false,
    //                     color: '#939393',
    //                     overflow: 'none',
    //                     format: '{point.y:,.2f}',
    //                 }
    //             }
    //         },
    //     });
    // }
    // if ($('#containerfinancials1_2').length) {
    //     Highcharts.chart('containerfinancials1_2', {
    //         chart: {
    //             type: 'column',
    //             renderTo: 'containerfinancials1_2',
    //             backgroundColor: {
    //                 // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
    //                 stops: [
    //                     [0, '#ffffff'],
    //                     [1, '#ffffff']
    //                 ]
    //             },
    //             style: {

    //             },
    //             plotBorderColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false
    //         },

    //         colors: ["#404fc3", "#545872", "#d3d3d3"],

    //         tooltip: {
    //             shared: true,
    //             crosshairs: true,
    //             pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    //         },

    //         xAxis: [{
    //             categories: ['2017', '2018', '2019'],
    //             crosshair: true,
    //             labels: {
    //                 style: {
    //                     color: '#939393',
    //                     fontSize: '0.85rem'
    //                 }
    //             }
    //         }],

    //         yAxis: {
    //             title: {
    //                 text: null
    //             },
    //             lineColor: null,
    //             minorGridLineWidth: 1,
    //             gridLineWidth: 0,
    //             lineWidth: 1,
    //             plotLines: [{
    //                 color: '#c8c8c8',
    //                 width: 1,
    //                 value: 0
    //             }],
    //             alternateGridColor: null,
    //             showFirstLabel: false,
    //             breaks: [{
    //                 from: 0,
    //                 to: 100
    //             }],
    //             labels: {
    //                 enabled: false
    //             }
    //         },

    //         title: {
    //             style: {
    //                 'font-weight': "bold",
    //                 color: '#E0E0E3',
    //                 textTransform: 'uppercase',
    //                 fontSize: '0',
    //             },
    //             text: ''
    //         },

    //         credits: {
    //             enabled: false
    //         },

    //         exporting: {
    //             enabled: false
    //         },

    //         legend: {
    //             enabled: false,
    //         },

    //         series: [{
    //             name: '매출액',
    //             data: [97, 45, 75]
    //         }, {
    //             name: '영업이익',
    //             data: [85, 24, 42]
    //         }, {
    //             name: '순이익',
    //             data: [64, 34, 24]
    //         }],

    //         plotOptions: {
    //             series: {
    //                 marker: {
    //                     enabled: false,
    //                 }
    //             },
    //             column: {
    //                 minPointLength: 5,
    //                 dataLabels: {
    //                     enabled: true,
    //                     crop: false,
    //                     color: '#939393',
    //                     overflow: 'none',
    //                     format: '{point.y:,.2f}',
    //                 }
    //             }
    //         },
    //     });
    // }
    // if ($('#containerfinancials1_3').length) {
    //     Highcharts.chart('containerfinancials1_3', {
    //         chart: {
    //             type: 'column',
    //             renderTo: 'containerfinancials1_3',
    //             backgroundColor: {
    //                 // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
    //                 stops: [
    //                     [0, '#ffffff'],
    //                     [1, '#ffffff']
    //                 ]
    //             },
    //             style: {

    //             },
    //             plotBorderColor: null,
    //             plotBorderWidth: null,
    //             plotShadow: false
    //         },

    //         colors: ["#404fc3", "#545872", "#d3d3d3"],

    //         tooltip: {
    //             shared: true,
    //             crosshairs: true,
    //             pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
    //         },

    //         xAxis: [{
    //             categories: ['2017', '2018', '2019'],
    //             crosshair: true,
    //             labels: {
    //                 style: {
    //                     color: '#939393',
    //                     fontSize: '0.85rem'
    //                 }
    //             }
    //         }],

    //         yAxis: {
    //             title: {
    //                 text: null
    //             },
    //             lineColor: null,
    //             minorGridLineWidth: 1,
    //             gridLineWidth: 0,
    //             lineWidth: 1,
    //             plotLines: [{
    //                 color: '#c8c8c8',
    //                 width: 1,
    //                 value: 0
    //             }],
    //             alternateGridColor: null,
    //             showFirstLabel: false,
    //             breaks: [{
    //                 from: 0,
    //                 to: 100
    //             }],
    //             labels: {
    //                 enabled: false
    //             }
    //         },

    //         title: {
    //             style: {
    //                 'font-weight': "bold",
    //                 color: '#E0E0E3',
    //                 textTransform: 'uppercase',
    //                 fontSize: '0',
    //             },
    //             text: ''
    //         },

    //         credits: {
    //             enabled: false
    //         },

    //         exporting: {
    //             enabled: false
    //         },

    //         legend: {
    //             enabled: false,
    //         },

    //         series: [{
    //             name: '매출액',
    //             data: [97, 45, 75]
    //         }, {
    //             name: '영업이익',
    //             data: [85, 24, 42]
    //         }, {
    //             name: '순이익',
    //             data: [64, 34, 24]
    //         }],

    //         plotOptions: {
    //             series: {
    //                 marker: {
    //                     enabled: false,
    //                 }
    //             },
    //             column: {
    //                 minPointLength: 5,
    //                 dataLabels: {
    //                     enabled: true,
    //                     crop: false,
    //                     color: '#939393',
    //                     overflow: 'none',
    //                     format: '{point.y:,.2f}',
    //                 }
    //             }
    //         },
    //     });
    // }
    if ($('#containerfinancials2_2').length) {
        Highcharts.chart('containerfinancials2_2', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
        Highcharts.chart('containerfinancials2_3', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
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
                enabled: false,
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
        Highcharts.chart('chart_BICchart011', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'chart_BICchart011',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {

                },
                marginTop: 30,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#C4C4C4 ", "#404fc3", "#5CAC00"],
            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '{series.name}: <b>{point.y}</b><br/>',
            },

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
        Highcharts.chart('chart_BICchart012', {
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

                },
                marginTop: 20,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#404fc3", "#5CAC00"],

            title: {
                text: null
            },

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart015', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

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
        Highcharts.chart('chart_BICchart022', {
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

                },
                marginTop: 30,
                marginBottom: 90,

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
        Highcharts.chart('chart_BICchart024', {
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

                },
                marginTop: 20,
                marginBottom: 90,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

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
        Highcharts.chart('chart_BICchart027', {
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

                },
                marginTop: 20,
                marginBottom: 100,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'line',
                data: [42, 52, 57, 69, 97, 11],
                name: '매출채권 회전일수',
            }, {
                type: 'line',
                data: [14.1, 9.6, 5.4, 9.9, 1.5, 106],
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
        Highcharts.chart('chart_BICchart029', {
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

                },
                marginTop: 30,
                marginBottom: 100,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart032', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart033', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart034', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart035', {
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

                },
                marginTop: 20,
                marginBottom: 80,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

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
        Highcharts.chart('chart_BICchart036', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('chart_BICchart037', {
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

                },
                marginTop: 20,
                marginBottom: 70,

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

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
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
        Highcharts.chart('containeralloca1_1', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#404fc3", "#545872", "#d3d3d3"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;                            
        
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${point.y}</b>`;
                }
            },
        

            xAxis: [{
                categories: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
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
                // breaks: [{
                //     from: 0,
                //     to: 100
                // }],
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
                enabled: false,
            },

            series: [{
                name: '시가배당률',
                data: [{
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.20,
                    date: '2024',
                },
                {
                    y: 1.70,
                    date: '2024',
                },
                {
                    y: 1.30,
                    date: '2024',
                },
                {
                    y: 1.00,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.90,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.70,
                    date: '2024',
                    className: 'point_color'
                }]
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
        Highcharts.chart('containeralloca1_2', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#545872"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;                            
        
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${point.y}</b>`;
                }
            },

            xAxis: [{
                categories: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
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
                // breaks: [{
                //     from: 0,
                //     to: 100
                // }],
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
                enabled: false,
            },

            series: [{
                name: '주당배당금',
                data: [{
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.20,
                    date: '2024',
                },
                {
                    y: 1.70,
                    date: '2024',
                },
                {
                    y: 1.30,
                    date: '2024',
                },
                {
                    y: 1.00,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.90,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.70,
                    date: '2024',
                    className: 'point_color'
                }]
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
        Highcharts.chart('containeralloca1_3', {
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

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            // colors: ["#d3d3d3"],

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;                            
        
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${point.y}</b>`;
                }
            },

            xAxis: [{
                categories: ['2015','2016','2017','2018','2019','2020','2021','2022','2023','2024'],
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
                // breaks: [{
                //     from: 0,
                //     to: 100
                // }],
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
                enabled: false,
            },

            series: [{
                name: '배당성향',
                data: [{
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.70,
                    date: '2024',
                }, {
                    y: 2.20,
                    date: '2024',
                },
                {
                    y: 1.70,
                    date: '2024',
                },
                {
                    y: 1.30,
                    date: '2024',
                },
                {
                    y: 1.00,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.90,
                    date: '2024',
                },
                {
                    y: 0.80,
                    date: '2024',
                },
                {
                    y: 0.70,
                    date: '2024',                    
                }]
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
        Highcharts.chart('onestep_chart1_1', {

            chart: {
                type: 'bubble',
                plotBorderWidth: 2,
                zoomType: 'x',
                backgroundColor: '#f2faff',
                borderColor: '#877edf',
                // height: 280,
                plotBorderColor: '#1d4a88',
                plotShadow: false,
                marginLeft: 0,
                marginTop: -1,
                marginRight: -1,
                marginBottom: 0,
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
        Highcharts.chart('sum_topchart_band', {
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
            legend: {
                itemDistance: 6,
            },
            title: {
                text: null
            },
            colors: ["#f2333a", "#bec3ed", "#e4e6fc", "#c6c6c6", "#737edd"],
            tooltip: {
                crosshairs: true,
                shared: true,
                valueDecimals: 2,
                style: {
                    fontWeight: 'nomal',
                    fontSize: '11px',
                    color: '#8380A0',
                }
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


    //이 아래부터 차트 테스트 영역
    if ($('#chart_BICchart011_test2').length) {
        Highcharts.stockChart('chart_BICchart011_test2', {
            // 하단 네비게이션 제거
            // navigator: {
            //     enabled: false
            // },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                // enabled: false,
                allButtonsEnabled: true,
                selected: 0,
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                type: 'hollowcandlestick',
                data: [[1574692200000, 65.68, 66.61, 65.63, 66.59, 84020400], [1574778600000, 66.74, 66.79, 65.63, 66.07, 105207600], [1574865000000, 66.39, 67, 66.33, 66.96, 65235600], [1575037800000, 66.65, 67, 66.47, 66.81, 46617600], [1575297000000, 66.82, 67.06, 65.86, 66.04, 94487200], [1575383400000, 64.58, 64.88, 64.07, 64.86, 114430400], [1575469800000, 65.27, 65.83, 65.17, 65.43, 67181600], [1575556200000, 65.95, 66.47, 65.68, 66.39, 74424400], [1575642600000, 66.87, 67.75, 66.82, 67.68, 106075600], [1575901800000, 67.5, 67.7, 66.23, 66.73, 128042400], [1575988200000, 67.15, 67.52, 66.46, 67.12, 90420400], [1576074600000, 67.2, 67.78, 67.13, 67.69, 78756800], [1576161000000, 66.94, 68.14, 66.83, 67.86, 137310400], [1576247400000, 67.86, 68.82, 67.73, 68.79, 133587600], [1576506600000, 69.25, 70.2, 69.25, 69.96, 128186000], [1576593000000, 69.89, 70.44, 69.7, 70.1, 114158400], [1576679400000, 69.95, 70.47, 69.78, 69.93, 116028400], [1576765800000, 69.88, 70.29, 69.74, 70, 98369200], [1576852200000, 70.56, 70.66, 69.64, 69.86, 275978000], [1577111400000, 70.13, 71.06, 70.09, 71, 98572000], [1577197800000, 71.17, 71.22, 70.73, 71.07, 48478800], [1577370600000, 71.21, 72.5, 71.18, 72.48, 93121200], [1577457000000, 72.78, 73.49, 72.03, 72.45, 146266000], [1577716200000, 72.36, 73.17, 71.31, 72.88, 144114400], [1577802600000, 72.48, 73.42, 72.38, 73.41, 100805600], [1577975400000, 74.06, 75.15, 73.8, 75.09, 135480400], [1578061800000, 74.29, 75.14, 74.13, 74.36, 146322800], [1578321000000, 73.45, 74.99, 73.19, 74.95, 118387200], [1578407400000, 74.96, 75.22, 74.37, 74.6, 108872000]],
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


    if ($('#chart_BICchart011_test').length) {
        Highcharts.stockChart('chart_BICchart011_test', {
            chart: {
                type: 'area',
                zoomType: 'xy',
                renderTo: 'chart_BICchart011_test',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {

                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },
            // 하단 네비게이션 제거
            // navigator: {
            //     enabled: false
            // },
            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },
            // 기간범위선택 제거
            rangeSelector: {
                enabled: false
            },

            colors: ["#C4C4C4 ", "#404fc3", "#5CAC00"],
            title: {
                text: null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 백만달러</b><br/>',
            },

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

    //검색결과 상세 매매신호 일봉 차트    
    if ($('#containeroutline1_1').length) {
        var value = [[1644796800000, 219.31, 221, 214.78, 217.7], [1644883200000, 220.47, 221.15, 215.06, 221], [1644969600000, 212.41, 217.46, 212.36, 216.54], [1645056000000, 214.02, 217.5, 207.16, 207.71], [1645142400000, 209.39, 210.75, 205.18, 206.16], [1645488000000, 202.34, 207.48, 200.06, 202.08], [1645574400000, 204.16, 206.94, 198.05, 198.45], [1645660800000, 191.06, 208.35, 190.22, 207.6], [1645747200000, 204.94, 211.32, 203.18, 210.48], [1646006400000, 207.675, 213.151, 206.83, 211.03], [1646092800000, 209.87, 211.752, 202.22, 203.49], [1646179200000, 204.775, 209.15, 202.02, 208.11], [1646265600000, 209.015, 209.08, 201.42, 202.97], [1646352000000, 202.37, 205.89, 198.79, 200.06], [1646611200000, 200.79, 200.89, 187.28, 187.47], [1646697600000, 187.85, 196.7, 186.11, 190.29], [1646784000000, 195.74, 199.1, 193.92, 198.5], [1646870400000, 194.84, 196.28, 191.068, 195.21], [1646956800000, 192.635, 193.56, 186.67, 187.61], [1647216000000, 187.03, 192.29, 185.82, 186.63], [1647302400000, 190.8, 192.28, 185.911, 192.03], [1647388800000, 194.7, 203.73, 194.52, 203.63], [1647475200000, 201.7, 208.04, 201.11, 207.84], [1647561600000, 206.7, 216.8, 206, 216.49], [1647820800000, 214.5, 214.71, 207.63, 211.49], [1647907200000, 211.37, 219.46, 210.18, 216.65], [1647993600000, 213.33, 216.799, 212.16, 213.46], [1648080000000, 215, 220.67, 214.79, 219.57], [1648166400000, 220.51, 225.5, 218.89, 221.82], [1648425600000, 222.13, 224.04, 219.54, 223.59]];
        Highcharts.chart('containeroutline1_1', {
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

            series: [{
                type: 'candlestick',
                name: '주가',
                data: value,
                id: 'dataseries',
                crisp: false,
            }],

            plotOptions: {
                series: {
                    groupPadding: 0.2
                }
            },
        });
    }


    // 상세 매매신호 막대 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {

            chart: {
                chart: {
                    type: 'column'
                },
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

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;
                    let changeText;
            
                    if (changeValue !== 'N/A') {
                        const changeNum = parseFloat(changeValue);
                        let changeColor = '#969EA7'; // 기본은 회색 (0인 경우)
            
                        if (changeNum > 0) {
                            changeColor = '#f94040'; // 전년대비 상승
                        } else if (changeNum < 0) {
                            changeColor = '#1093f3'; // 전년대비 하락
                        }
            
                        changeText = `전년대비 <b style="color:${changeColor}">${changeValue}</b>`;
                    } else {
                        changeText = "전년대비 데이터 없음";
                    }
            
                    // 소수점 여부에 따라 포맷 다르게 처리
                    let formattedValue;
                    if (point.y % 1 === 0) {
                        // 소수점 없는 경우
                        formattedValue = new Intl.NumberFormat('en-US', {
                            maximumFractionDigits: 0
                        }).format(point.y);
                    } else {
                        // 소수점 있는 경우
                        formattedValue = new Intl.NumberFormat('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(point.y);
                    }
            
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${formattedValue}</b> 백만달러<br/>${changeText}`;
                },
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

            xAxis: [{
                categories: ['2022.12', '2023.12', '2024.12 <br> <span style="font-size:10px">(예상)</span>', '2025.12 <br> <span style="font-size:10px">(예상)</span>', '2026.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                name: '매출액',
                data: [{
                    y: 97,
                    date: '2022.10', // 툴팁에 년.월 표시
                    change: '0.00%' // 상승률 표시
                },
                {
                    y: 45,
                    date: '2023.10',
                    change: '-53.07%'
                },
                {
                    y: 75,
                    date: '2024.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 85,
                    date: '2025.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 95.988,
                    date: '2026.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }
    if ($('#containerfinancials1_1_temp').length) {
        Highcharts.chart('containerfinancials1_1_temp', {

            chart: {
                chart: {
                    type: 'column'
                },
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

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;
                    let changeText;
            
                    if (changeValue !== 'N/A') {
                        const changeNum = parseFloat(changeValue);
                        let changeColor = '#969EA7'; // 기본은 회색 (0인 경우)
            
                        if (changeNum > 0) {
                            changeColor = '#f94040'; // 전년대비 상승
                        } else if (changeNum < 0) {
                            changeColor = '#1093f3'; // 전년대비 하락
                        }
            
                        changeText = `전년대비 <b style="color:${changeColor}">${changeValue}</b>`;
                    } else {
                        changeText = "전년대비 데이터 없음";
                    }
            
                    // 소수점 여부에 따라 포맷 다르게 처리
                    let formattedValue;
                    if (point.y % 1 === 0) {
                        // 소수점 없는 경우
                        formattedValue = new Intl.NumberFormat('en-US', {
                            maximumFractionDigits: 0
                        }).format(point.y);
                    } else {
                        // 소수점 있는 경우
                        formattedValue = new Intl.NumberFormat('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2
                        }).format(point.y);
                    }
            
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${formattedValue}</b> 백만달러<br/>${changeText}`;
                },
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

            xAxis: [{
                categories: ['2022.12', '2023.12', '2024.12 <br> <span style="font-size:10px">(예상)</span>', '2025.12 <br> <span style="font-size:10px">(예상)</span>', '2026.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                name: '매출액',
                data: [{
                    y: 97,
                    date: '2022.10', // 툴팁에 년.월 표시
                    change: '0.00%' // 상승률 표시
                },
                {
                    y: 45,
                    date: '2023.10',
                    change: '-53.07%'
                },
                {
                    y: 75,
                    date: '2024.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 85,
                    date: '2025.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {

            chart: {
                chart: {
                    type: 'column'
                },
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

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;
                    let changeText;
        
                    if (changeValue !== 'N/A') {
                        const changeNum = parseFloat(changeValue);
                        let changeColor = '#969EA7'; // 기본은 회색 (0인 경우)
        
                        if (changeNum > 0) {
                            changeColor = '#E1305A'; // 전년대비 상승
                        } else if (changeNum < 0) {
                            changeColor = '#303FAF'; // 전년대비 하락
                        }
        
                        changeText = `전년대비 <b style="color:${changeColor}">${changeValue}</b>`;
                    } else {
                        changeText = "전년대비 데이터 없음";
                    }
        
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${point.y}</b> 달러<br/>${changeText}`;
                }
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

            xAxis: [{
                categories: ['2022.12', '2023.12', '2024.12 <br> <span style="font-size:10px">(예상)</span>', '2025.12 <br> <span style="font-size:10px">(예상)</span>', '2026.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                name: '매출액',
                data: [{
                    y: 97,
                    date: '2022.10', // 툴팁에 년.월 표시
                    change: '0.00%' // 상승률 표시
                },
                {
                    y: 45,
                    date: '2023.10',
                    change: '-53.07%'
                },
                {
                    y: 75,
                    date: '2024.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 85,
                    date: '2025.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 95.988,
                    date: '2026.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {

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

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    const point = this.points[0].point;
                    const changeValue = point.change;
                    let changeText;
        
                    if (changeValue !== 'N/A') {
                        const changeNum = parseFloat(changeValue);
                        let changeColor = '#969EA7'; // 기본은 회색 (0인 경우)
        
                        if (changeNum > 0) {
                            changeColor = '#E1305A'; // 전년대비 상승
                        } else if (changeNum < 0) {
                            changeColor = '#303FAF'; // 전년대비 하락
                        }
        
                        changeText = `전년대비 <b style="color:${changeColor}">${changeValue}</b>`;
                    } else {
                        changeText = "전년대비 데이터 없음";
                    }
        
                    return `${point.date}<br/>${this.points[0].series.name}: <b>${point.y}</b> %<br/>${changeText}`;
                }
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

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2022.12', '2023.12', '2024.12 <br> <span style="font-size:10px">(예상)</span>', '2025.12 <br> <span style="font-size:10px">(예상)</span>', '2026.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                name: '매출액',
                data: [{
                    y: 97,
                    date: '2022.10', // 툴팁에 년.월 표시
                    change: '0.00%' // 상승률 표시
                },
                {
                    y: 45,
                    date: '2023.10',
                    change: '-53.07%'
                },
                {
                    y: 75,
                    date: '2024.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 85,
                    date: '2025.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                },
                {
                    y: 95.988,
                    date: '2026.12(예상)',
                    change: '+65.20%',
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28                    
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
    if ($('#containerfinancials1_4').length) {
        Highcharts.chart('containerfinancials1_4', {

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

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018.12', '2019.12', '2020.12', '2021.12', '2022.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                }
            },

            series: [{
                type: 'column',
                name: '주당배당금',
                data: [{
                    y: 97.988,
                },
                {
                    y: 45.988,                    
                },
                {
                    y: 75.988,                    
                },
                {
                    y: 85.988,
                },
                {
                    y: 95.988,                    
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28                    
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
    if ($('#containerfinancials1_5').length) {
        Highcharts.chart('containerfinancials1_5', {

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

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018.12', '2019.12', '2020.12', '2021.12', '2022.12 <br> <span style="font-size:10px">(예상)</span>'],
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
                }
            },

            series: [{
                type: 'column',
                name: '시가배당률',
                data: [{
                    y: 97.988,
                },
                {
                    y: 45.988,                    
                },
                {
                    y: 75.988,                    
                },
                {
                    y: 85.988,
                },
                {
                    y: 95.988,                    
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    // pointWidth: 28                    
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

    if ($('#ma_chart_container').length) {
        Highcharts.chart('ma_chart_container', {
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                followTouchMove: true,
                events: {
                    load: function () {}
                }
            },

            title: {
                text: '',
                align: 'left'
            },

            subtitle: {
                text: '',
                align: 'left'
            },

            navigator: {
                enabled: false,
            },

            scrollbar: {
                enabled: false,
            },

            rangeSelector: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false,
            },

            yAxis: {
                title: {
                    text: ''
                },
                opposite: true, // 두 번째 Y축을 차트의 반대편에 배치
                gridLineWidth: 1,
                showFirstLabel: false,
                showFirstLabel: false,
                showLastLabel: true,
                labels: window.innerWidth <= 768 ? {
                    formatter: function () {
                        return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },
                    align: 'left',
                    style: {
                        fontSize: 10
                    }
                } : {
                    formatter: function () {
                        return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },
                    align: 'left',
                    style: {
                        fontSize: 10
                    }
                },                
            },

            xAxis: {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true,
                endOnTick: false,
                dateTimeLabelFormats: {
                    month: '%Y.%m'
                },
                tickWidth: 0,
                tickInterval: function() {
                    // 현재 선택된 기간이 3Y인지 확인
                    var period = $('.ma_period_btn.active').data('period');
                    return period === '3Y' ? 
                        6 * 30 * 24 * 3600 * 1000 : // 6개월 간격 (3년 데이터)
                        2 * 30 * 24 * 3600 * 1000;  // 2개월 간격 (1년 데이터)
                }(),
                gridLineWidth: 0,
                labels: {
                    align: 'left', 
                    x: -20,
                    y: 20,
                    formatter: function() {
                        return Highcharts.dateFormat('%Y.%m', this.value);
                    }
                },
                crosshair: {
                    width: 1,
                    color: '#126fbe',
                    dashStyle: 'dot'
                }
            },

            legend: {
                layout: 'horizontal',
                align: 'center',
                verticalAlign: 'bottom'
            },

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    marker: {
                        enabled: false,
                        symbol: "circle",
                    },
                    groupPadding: 0.3
                }
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                useHTML: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y.%m/%d',
                formatter: function() {
                    var date = new Date(this.x);
                    date.setHours(date.getHours() + 9); // KST로 변환
                    var formattedDate = Highcharts.dateFormat('%Y, %m/%d', date);
                    var s = '<span style="display: block;margin-bottom: 2px;"><b>' + formattedDate + '</b></span>';
                    this.points.forEach(function(point) {
                        s += '<p style="margin-top: 3px;"><b>' + point.series.name + ': ' + point.y + ' USD</b></p>';
                    });
                    return s;
                }
            },

            colors: ['#5cac00', '#c4c4c4', '#404fc3', '#ccddee'],

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

        });        
    }

    if ($('#containerfinancials2_1').length) {

        var priceData = [[1633046400000, 112.920],[1633305600000, 111.460],[1633392000000, 110.850],[1633478400000, 111.640],[1633564800000, 112.210],[1633651200000, 111.220],[1633910400000, 110.940],[1633996800000, 111.000],[1634083200000, 110.760],[1634169600000, 111.870],[1634256000000, 111.450],[1634515200000, 113.370],[1634601600000, 113.490],[1634688000000, 113.860],[1634774400000, 114.440],[1634860800000, 114.550],[1635120000000, 114.710],[1635206400000, 114.920],[1635292800000, 113.510],[1635379200000, 113.200],[1635465600000, 106.070],[1635724800000, 109.800],[1635811200000, 111.450],[1635897600000, 112.610],[1635984000000, 112.160],[1636070400000, 116.910],[1636329600000, 115.160],[1636416000000, 114.130],[1636502400000, 113.250],[1636588800000, 111.440],[1636675200000, 111.720],[1636934400000, 111.870],[1637020800000, 112.230],[1637107200000, 112.520],[1637193600000, 112.900],[1637280000000, 110.780],[1637539200000, 111.450],[1637625600000, 113.580],[1637712000000, 113.970],[1637884800000, 110.660],[1638144000000, 110.730],[1638230400000, 109.640],[1638316800000, 108.660],[1638403200000, 111.420],[1638489600000, 111.240],[1638748800000, 113.360],[1638835200000, 116.260],[1638921600000, 116.250],[1639008000000, 115.350],[1639094400000, 116.730],[1639353600000, 115.560],[1639440000000, 114.710],[1639526400000, 114.680],[1639612800000, 113.590],[1639699200000, 108.630],[1639958400000, 108.090],[1640044800000, 110.370],[1640131200000, 111.740],[1640217600000, 112.370],[1640563200000, 114.220],[1640649600000, 115.570],[1640736000000, 116.380],[1640822400000, 116.240],[1640908800000, 116.970],[1641168000000, 116.680],[1641254400000, 114.240],[1641340800000, 110.440],[1641427200000, 111.140],[1641513600000, 107.570],[1641772800000, 106.030],[1641859200000, 104.040],[1641945600000, 103.870],[1642032000000, 102.400],[1642118400000, 100.120],[1642464000000, 97.730],[1642550400000, 96.870],[1642636800000, 95.720],[1642723200000, 96.310],[1642982400000, 98.100],[1643068800000, 97.010],[1643155200000, 95.580],[1643241600000, 95.320],[1643328000000, 97.210],[1643587200000, 98.320],[1643673600000, 98.760],[1643760000000, 97.730],[1643846400000, 95.940],[1643932800000, 95.000],[1644192000000, 95.190],[1644278400000, 94.920],[1644364800000, 97.130],[1644451200000, 95.310],[1644537600000, 93.730],[1644796800000, 93.650],[1644883200000, 94.510],[1644969600000, 95.180],[1645056000000, 93.050],[1645142400000, 93.340],[1645488000000, 93.110],[1645574400000, 89.650],[1645660800000, 91.010],[1645747200000, 92.580],[1646006400000, 91.790],[1646092800000, 90.140],[1646179200000, 92.770],[1646265600000, 91.530],[1646352000000, 90.030],[1646611200000, 84.460],[1646697600000, 84.000],[1646784000000, 87.600],[1646870400000, 87.160],[1646956800000, 82.730],[1647216000000, 79.290],[1647302400000, 83.120],[1647388800000, 87.410],[1647475200000, 87.660],[1647561600000, 89.600],[1647820800000, 86.860],[1647907200000, 87.890],[1647993600000, 86.220],[1648080000000, 87.120],[1648166400000, 87.450],[1648425600000, 88.380],[1648512000000, 91.230],[1648598400000, 91.030],[1648684800000, 90.970],[1648771200000, 91.490],[1649030400000, 88.090],[1649116800000, 84.120],[1649203200000, 83.360],[1649289600000, 83.120],[1649376000000, 81.520],[1649635200000, 80.680],[1649721600000, 79.790],[1649808000000, 80.920],[1649894400000, 79.500],[1650240000000, 79.600],[1650326400000, 81.220],[1650412800000, 80.170],[1650499200000, 78.960],[1650585600000, 77.920],[1650844800000, 77.980],[1650931200000, 75.630],[1651017600000, 74.740],[1651104000000, 76.580],[1651190400000, 74.640],[1651449600000, 75.370],[1651536000000, 74.330],[1651622400000, 81.640],[1651708800000, 77.480],[1651795200000, 76.520],[1652054400000, 73.490],[1652140800000, 71.860],[1652227200000, 70.060],[1652313600000, 69.900],[1652400000000, 75.600],[1652659200000, 72.420],[1652745600000, 73.720],[1652832000000, 71.280],[1652918400000, 71.930],[1653004800000, 73.390],[1653264000000, 73.420],[1653350400000, 72.720],[1653436800000, 72.480],[1653523200000, 74.490],[1653609600000, 76.710],[1653955200000, 78.500],[1654041600000, 76.280],[1654128000000, 79.420],[1654214400000, 79.050],[1654473600000, 78.980],[1654560000000, 79.470],[1654646400000, 78.470],[1654732800000, 78.910],[1654819200000, 75.670],[1655078400000, 72.360],[1655164800000, 72.310],[1655251200000, 74.190],[1655337600000, 70.950],[1655424000000, 71.870],[1655769600000, 72.960],[1655856000000, 73.300],[1655942400000, 75.200],[1656028800000, 78.110],[1656288000000, 77.680],[1656374400000, 76.340],[1656460800000, 76.430],[1656547200000, 76.390],[1656633600000, 79.260],[1656979200000, 79.520],[1657065600000, 78.860],[1657152000000, 79.240],[1657238400000, 79.280],[1657497600000, 77.900],[1657584000000, 77.760],[1657670400000, 77.920],[1657756800000, 78.200],[1657843200000, 79.620],[1658102400000, 80.230],[1658188800000, 82.550],[1658275200000, 83.270],[1658361600000, 83.540],[1658448000000, 83.590],[1658707200000, 81.500],[1658793600000, 80.310],[1658880000000, 82.960],[1658966400000, 84.670],[1659052800000, 84.780],[1659312000000, 84.910],[1659398400000, 83.710],[1659484800000, 87.270],[1659571200000, 86.880],[1659657600000, 85.730],[1659916800000, 85.720],[1660003200000, 84.840],[1660089600000, 86.490],[1660176000000, 87.270],[1660262400000, 88.310],[1660521600000, 89.160],[1660608000000, 89.400],[1660694400000, 88.350],[1660780800000, 88.550],[1660867200000, 86.920],[1661126400000, 84.950],[1661212800000, 84.690],[1661299200000, 86.050],[1661385600000, 87.390],[1661472000000, 84.060],[1661731200000, 84.120],[1661817600000, 83.410],[1661904000000, 84.070],[1661990400000, 85.400],[1662076800000, 82.940],[1662422400000, 84.520],[1662508800000, 88.310],[1662595200000, 89.460],[1662681600000, 88.690],[1662940800000, 89.070],[1663027200000, 87.840],[1663113600000, 92.700],[1663200000000, 92.220],[1663286400000, 91.310],[1663545600000, 92.140],[1663632000000, 90.790],[1663718400000, 88.600],[1663804800000, 84.700],[1663891200000, 84.170],[1664150400000, 84.810],[1664236800000, 84.280],[1664323200000, 87.110],[1664409600000, 86.570],[1664496000000, 84.260],[1664755200000, 85.620],[1664841600000, 88.510],[1664928000000, 90.120],[1665014400000, 89.350],[1665100800000, 87.030],[1665360000000, 87.060],[1665446400000, 86.210],[1665532800000, 86.870],[1665619200000, 89.370],[1665705600000, 86.370],[1665964800000, 88.900],[1666051200000, 88.960],[1666137600000, 87.520],[1666224000000, 86.790],[1666310400000, 88.610],[1666569600000, 83.760],[1666656000000, 85.210],[1666742400000, 85.890],[1666828800000, 85.280],[1666915200000, 87.100],[1667174400000, 86.590],[1667260800000, 87.100],[1667347200000, 84.580],[1667433600000, 84.680],[1667520000000, 91.860],[1667779200000, 90.450],[1667865600000, 92.750],[1667952000000, 91.630],[1668038400000, 96.260],[1668124800000, 97.380],[1668384000000, 97.420],[1668470400000, 97.830],[1668556800000, 97.070],[1668643200000, 96.970],[1668729600000, 97.950],[1668988800000, 98.320],[1669075200000, 98.430],[1669161600000, 99.520],[1669334400000, 99.560],[1669593600000, 98.660],[1669680000000, 98.660],[1669766400000, 102.200],[1669852800000, 103.370],[1669939200000, 105.050],[1670198400000, 103.550],[1670284800000, 102.080],[1670371200000, 101.870],[1670457600000, 103.740],[1670544000000, 101.790],[1670803200000, 102.700],[1670889600000, 102.110],[1670976000000, 102.190],[1671062400000, 99.990],[1671148800000, 98.830],[1671408000000, 98.300],[1671494400000, 98.000],[1671580800000, 98.670],[1671667200000, 97.760],[1671753600000, 98.270],[1672099200000, 99.200],[1672185600000, 98.600],[1672272000000, 99.770],[1672358400000, 99.200],[1672704000000, 100.830],[1672790400000, 104.460],[1672876800000, 104.430],[1672963200000, 106.690],[1673222400000, 104.740],[1673308800000, 106.000],[1673395200000, 106.300],[1673481600000, 105.850],[1673568000000, 107.230],[1673913600000, 106.750],[1674000000000, 105.000],[1674086400000, 104.260],[1674172800000, 105.040],[1674432000000, 106.210],[1674518400000, 106.640],[1674604800000, 106.980],[1674691200000, 108.760],[1674777600000, 109.020],[1675036800000, 108.400],[1675123200000, 109.140],[1675209600000, 109.990],[1675296000000, 109.150],[1675382400000, 104.300],[1675641600000, 105.020],[1675728000000, 106.825],[1675814400000, 106.300],[1675900800000, 106.050],[1675987200000, 107.090],[1676246400000, 108.520],[1676332800000, 107.980],[1676419200000, 109.000],[1676505600000, 107.540],[1676592000000, 107.100],[1676937600000, 104.780],[1677024000000, 104.770],[1677110400000, 103.510],[1677196800000, 101.600],[1677456000000, 102.440],[1677542400000, 102.090],[1677628800000, 101.430],[1677715200000, 103.010],[1677801600000, 104.550],[1678060800000, 104.990],[1678147200000, 103.340],[1678233600000, 102.500],[1678320000000, 100.300],[1678406400000, 99.380],[1678665600000, 99.080],[1678752000000, 99.460],[1678838400000, 99.340],[1678924800000, 100.430],[1679011200000, 98.700],[1679270400000, 99.850],[1679356800000, 100.540],[1679443200000, 99.120],[1679529600000, 98.420],[1679616000000, 98.340],[1679875200000, 98.660],[1679961600000, 98.720],[1680048000000, 100.620],[1680134400000, 101.320],[1680220800000, 104.130],[1680480000000, 104.850],[1680566400000, 104.000],[1680652800000, 104.900],[1680739200000, 104.680],[1681084800000, 104.740],[1681171200000, 105.740],[1681257600000, 105.600],[1681344000000, 106.990],[1681430400000, 107.470],[1681689600000, 108.310],[1681776000000, 107.910],[1681862400000, 107.160],[1681948800000, 107.050],[1682035200000, 108.190],[1682294400000, 109.290],[1682380800000, 109.340],[1682467200000, 111.470],[1682553600000, 112.750],[1682640000000, 114.290],[1682899200000, 114.560],[1682985600000, 114.460],[1683072000000, 103.960],[1683158400000, 104.720],[1683244800000, 107.210],[1683504000000, 107.170],[1683590400000, 106.710],[1683676800000, 106.970],[1683763200000, 105.630],[1683849600000, 106.120],[1684108800000, 106.640],[1684195200000, 105.280],[1684281600000, 105.690],[1684368000000, 107.090],[1684454400000, 105.510],[1684713600000, 102.900],[1684800000000, 100.340],[1684886400000, 99.610],[1684972800000, 98.440],[1685059200000, 98.530],[1685404800000, 97.750],[1685491200000, 97.640],[1685577600000, 97.520],[1685664000000, 99.500],[1685923200000, 99.930],[1686009600000, 98.220],[1686096000000, 97.920],[1686182400000, 99.150],[1686268800000, 97.960],[1686528000000, 98.460],[1686614400000, 99.260],[1686700800000, 100.660],[1686787200000, 101.380],[1686873600000, 101.870],[1687219200000, 101.270],[1687305600000, 101.870],[1687392000000, 100.850],[1687478400000, 98.340],[1687737600000, 98.230],[1687824000000, 98.720],[1687910400000, 98.610],[1687996800000, 98.680],[1688083200000, 99.060],[1688342400000, 99.150],[1688515200000, 98.460],[1688601600000, 96.200],[1688688000000, 96.050],[1688947200000, 99.130],[1689033600000, 100.090],[1689120000000, 101.140],[1689206400000, 101.600],[1689292800000, 101.610],[1689552000000, 100.930],[1689638400000, 100.760],[1689724800000, 101.830],[1689811200000, 100.880],[1689897600000, 102.820],[1690156800000, 102.780],[1690243200000, 102.920],[1690329600000, 101.730],[1690416000000, 100.780],[1690502400000, 101.250],[1690761600000, 101.570],[1690848000000, 101.260],[1690934400000, 102.130],[1691020800000, 102.330],[1691107200000, 100.680],[1691366400000, 101.740],[1691452800000, 100.695],[1691539200000, 99.920],[1691625600000, 101.660],[1691712000000, 100.990],[1691971200000, 101.010],[1692057600000, 100.040],[1692144000000, 98.980],[1692230400000, 96.570],[1692316800000, 97.230],[1692576000000, 96.460],[1692662400000, 96.070],[1692748800000, 95.180],[1692835200000, 94.830],[1692921600000, 95.480],[1693180800000, 97.040],[1693267200000, 99.150],[1693353600000, 99.240],[1693440000000, 97.440],[1693526400000, 98.000],[1693872000000, 96.840],[1693958400000, 95.950],[1694044800000, 95.100],[1694131200000, 95.280],[1694390400000, 95.670],[1694476800000, 96.240],[1694563200000, 96.930],[1694649600000, 97.160],[1694736000000, 96.230],[1694995200000, 96.760],[1695081600000, 95.290],[1695168000000, 95.160],[1695254400000, 93.100],[1695340800000, 93.680],[1695600000000, 92.740],[1695686400000, 92.000],[1695772800000, 91.170],[1695859200000, 91.080],[1695945600000, 91.270],[1696204800000, 91.130],[1696291200000, 89.480],[1696377600000, 91.150],[1696464000000, 92.370],[1696550400000, 92.850],[1696809600000, 92.680],[1696896000000, 93.180],[1696982400000, 91.950],[1697068800000, 91.420],[1697155200000, 91.480],[1697414400000, 93.650],[1697500800000, 94.180],[1697587200000, 93.750],[1697673600000, 94.420],[1697760000000, 94.190],[1698019200000, 94.200],[1698105600000, 94.620],[1698192000000, 94.000],[1698278400000, 92.670],[1698364800000, 92.020],[1698624000000, 93.150],[1698710400000, 92.240],[1698796800000, 91.350],[1698883200000, 100.010],[1698969600000, 102.650],[1699228800000, 104.030],[1699315200000, 103.680],[1699401600000, 104.300],[1699488000000, 102.230],[1699574400000, 104.330],[1699833600000, 103.510],[1699920000000, 105.600],[1700006400000, 106.030],[1700092800000, 107.210],[1700179200000, 105.570],[1700438400000, 104.300],[1700524800000, 103.690],[1700611200000, 103.440],[1700784000000, 102.780],[1701043200000, 102.360],[1701129600000, 101.180],[1701216000000, 99.850],[1701302400000, 99.300],[1701388800000, 99.200],[1701648000000, 97.600],[1701734400000, 95.540],[1701820800000, 97.020],[1701907200000, 96.440],[1701993600000, 96.610],[1702252800000, 98.120],[1702339200000, 98.150],[1702425600000, 98.110],[1702512000000, 97.840],[1702598400000, 96.750],[1702857600000, 96.560],[1702944000000, 97.720],[1703030400000, 94.710],[1703116800000, 95.330],[1703203200000, 95.280],[1703548800000, 95.670],[1703635200000, 95.290],[1703721600000, 95.930],[1703808000000, 96.010],[1704153600000, 93.670],[1704240000000, 93.230],[1704326400000, 93.550],[1704412800000, 92.990],[1704672000000, 94.190],[1704758400000, 93.090],[1704844800000, 93.500],[1704931200000, 92.940],[1705017600000, 91.980],[1705363200000, 92.700],[1705449600000, 91.770],[1705536000000, 93.340],[1705622400000, 93.860],[1705881600000, 93.070],[1705968000000, 91.970],[1706054400000, 92.040],[1706140800000, 92.610],[1706227200000, 92.800],[1706486400000, 93.800],[1706572800000, 94.080],[1706659200000, 93.030],[1706745600000, 93.370],[1706832000000, 92.990],[1707091200000, 92.510],[1707177600000, 95.670],[1707264000000, 95.310],[1707350400000, 96.590],[1707436800000, 97.300],[1707696000000, 95.470],[1707782400000, 93.870],[1707868800000, 94.070],[1707955200000, 93.220],[1708041600000, 93.220],[1708387200000, 93.460],[1708473600000, 95.020],[1708560000000, 95.780],[1708646400000, 95.620],[1708905600000, 94.280],[1708992000000, 94.130],[1709078400000, 93.000],[1709164800000, 94.900],[1709251200000, 93.160],[1709510400000, 92.460],[1709596800000, 91.220],[1709683200000, 91.650],[1709769600000, 90.950],[1709856000000, 91.060],[1710115200000, 92.070],[1710201600000, 92.400],[1710288000000, 91.610],[1710374400000, 91.660],[1710460800000, 90.120],[1710720000000, 91.010],[1710806400000, 91.590],[1710892800000, 92.600],[1710979200000, 91.660],[1711065600000, 90.710],[1711324800000, 90.670],[1711411200000, 90.36],];
        var eps1 = [2024,2025,];
        var eps2 = [[1633219200000, 3.54],[1664668800000, 2.83],[1696118400000, 3.58],];
        var eps3 = [[1696118400000, 3.58],[1727740800000, 4.07],[1759276800000, 4.75],];
        var categories = { 2021: '2021.09', 2022: '2022.09', 2023: '2023.09', 2024: '2024.09<br> <span style="font-size:10px">(예상)</span>', 2025: '2025.09<br> <span style="font-size:10px">(예상)</span>', };

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

        Highcharts.chart('containerfinancials2_1', {
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

            title: {
                text: null,
            },
            colors: ["#4d6ee4", "#F0CC09"],

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
                            // '주당순이익(예상)'의 경우 날짜 포맷을 변경
                            if (point.series.name === '주당순이익(예상)') {
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
                        tooltipHtml += `<br/><strong style="color: #c6c6c6;">주당순이익(예상)</strong>: ${closestEpsEstimate[1]}`;
                    }
                    return tooltipHtml;
                }
            },            

            xAxis: [{                
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                alternateGridColor: null,
                startOnTick: true, // 시작 지점에 틱 표시
                endOnTick: true,   // 끝 지점에 틱 표시
                showFirstLabel: true, // 처음 레이블 표시
                showLastLabel: true,   // 마지막 레이블 표시      
                tickColor: null,
                type: 'datetime',
                tickPositioner: function () {
                    // 특정 날짜(년도)만을 위한 timestamp 배열 생성
                    var positions = [
                        // Date.UTC(표시할 연도, 표시할 월 (ex. 1월이면 0, 9월이라면 8)),                        
                        Date.UTC(2021, 11), Date.UTC(2022, 11), Date.UTC(2023, 11), Date.UTC(2024, 11), Date.UTC(2025, 11, 31)
                    ];
                    return positions;
                },
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '12px'
                    },
                    formatter: function () {
                        const year = new Date(this.value).getFullYear();
                        const categories = {2021: '2021.12' ,2022: '2022.12' ,2023: '2023.12' ,2024: '2024.12<br> <span style="font-size:10px">(예상)</span>' ,2025: '2025.12<br> <span style="font-size:10px">(예상)</span>' ,};
                        return categories[year];
                    }
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
            series: [
                {
                    name: '주가',
                    data: priceData,
                    color: '#404fc3',
                    yAxis: 0, // 두 번째 Y축에 연결
                    zIndex: 1, // 다른 차트보다 위에 표시                
                },
                {
                    type: 'line',
                    name: '주당순이익',
                    data: eps2,
                    step: 'right', // 계단식 선을 오른쪽으로 그리도록 설정
                    color: '#5CAC00',
                    yAxis: 1, // 첫 번째 Y축에 연결
                    zIndex: 2, // 다른 차트보다 위에 표시                
                    events: {
                        legendItemClick: function () {
                            var visibility = !this.visible;
                            // 'EPS(예상)' 시리즈 찾기
                            var chart = this.chart;
                            var predictedSeries = chart.series.find(function (s) {
                                return s.name === '주당순이익(예상)';
                            });
                            if (predictedSeries) {
                                // 'EPS(예상)' 시리즈의 가시성 변경
                                predictedSeries.setVisible(visibility, false);
                            }
                            return true; // 기본 동작 실행 (시리즈 가시성 토글)
                        }
                    },
                },
                {
                    type: 'line',
                    name: '주당순이익(예상)',
                    data: eps3,
                    step: 'right', // 계단식 선을 오른쪽으로 그리도록 설정
                    dashStyle: 'dash',
                    color: '#c6c6c6',
                    yAxis: 1, // 첫 번째 Y축에 연결
                    zIndex: 2, // 다른 차트보다 위에 표시
                    showInLegend: false, // 범례 숨기기    
                }
            ],
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


    //종목검색 개요 탭 캔들 차트    
    if ($('#containeroutline1_2_M3').length) {
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
                noData: "해당 데이터가 없습니다",
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
                // valueSuffix: '',                    
            },

            colors: ["#4d6ee4"],

            xAxis: [{
                showFirstLabel: true, // 첫 번째 눈금의 레이블을 보여줌
			    showLastLabel: true, // 마지막 눈금의 레이블을 보여줌
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
                    name: '일봉',
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
                        pointFormat: '<b>open : {point.open}<br/>high : {point.high}<br/>low : {point.low}<br/>close: {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: 'Price',
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.0f} 원</b></span>',
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
        var chart_value = [[1685491200000, 199.78, 203.95, 195.12, 203.93],[1685577600000, 202.59, 209.8, 199.37, 207.52],[1685664000000, 210.15, 217.25, 209.752, 213.97],[1685923200000, 217.8, 221.29, 214.52, 217.61],[1686009600000, 216.14, 221.91, 212.53, 221.31],[1686096000000, 228, 230.83, 223.2, 224.57],[1686182400000, 224.22, 235.23, 223.01, 234.86],[1686268800000, 249.07, 252.42, 242.02, 244.4],[1686528000000, 247.94, 250.97, 244.59, 249.83],[1686614400000, 253.51, 259.68, 251.34, 258.71],[1686700800000, 260.17, 261.57, 250.5, 256.79],[1686787200000, 248.4, 258.95, 247.29, 255.9],[1686873600000, 258.92, 263.6, 257.209, 260.54],[1687219200000, 261.5, 274.75, 261.12, 274.45],[1687305600000, 275.13, 276.99, 257.78, 259.46],[1687392000000, 250.77, 265, 248.25, 264.61],[1687478400000, 259.29, 262.45, 252.8, 256.6],[1687737600000, 250.065, 258.37, 240.7, 241.05],[1687824000000, 243.24, 250.39, 240.85, 250.21],[1687910400000, 249.7, 259.88, 248.89, 256.24],[1687996800000, 258.03, 260.74, 253.61, 257.5],[1688083200000, 260.6, 264.45, 259.89, 261.77],[1688342400000, 276.49, 284.25, 275.11, 279.82],[1688515200000, 278.82, 283.85, 277.6, 282.48],[1688601600000, 278.09, 279.97, 272.88, 276.54],[1688688000000, 278.43, 280.78, 273.77, 274.43],[1688947200000, 276.47, 277.52, 265.1, 269.61],[1689033600000, 268.65, 270.9, 266.37, 269.79],[1689120000000, 276.325, 276.52, 271.46, 271.99],[1689206400000, 274.59, 279.45, 270.6, 277.9],[1689292800000, 277.01, 285.3, 276.31, 281.38],[1689552000000, 286.625, 292.23, 283.57, 290.38],[1689638400000, 290.15, 295.26, 286.01, 293.34],[1689724800000, 296.04, 299.29, 289.52, 291.26],[1689811200000, 279.56, 280.93, 261.2, 262.9],[1689897600000, 268, 268, 255.8, 260.02],[1690156800000, 255.85, 269.85, 254.12, 269.06],[1690243200000, 272.38, 272.9, 265, 265.28],[1690329600000, 263.25, 268.04, 261.75, 264.35],[1690416000000, 268.31, 269.13, 255.3, 255.71],[1690502400000, 259.86, 267.25, 258.231, 266.44],[1690761600000, 267.48, 269.08, 263.78, 267.43],[1690848000000, 266.26, 266.47, 260.25, 261.07],[1690934400000, 255.57, 259.52, 250.49, 254.11],[1691020800000, 252.04, 260.49, 252, 259.32],[1691107200000, 260.97, 264.77, 253.11, 253.86],[1691366400000, 251.45, 253.651, 242.76, 251.45],[1691452800000, 247.45, 250.92, 245.01, 249.7],[1691539200000, 250.87, 251.1, 241.9, 242.19],[1691625600000, 245.4, 251.8, 243, 245.34],[1691712000000, 241.77, 243.79, 238.02, 242.65],[1691971200000, 235.7, 240.66, 233.75, 239.76],[1692057600000, 238.73, 240.5, 232.61, 232.96],[1692144000000, 228.02, 233.97, 225.38, 225.6],[1692230400000, 226.06, 226.74, 218.83, 219.22],[1692316800000, 214.12, 217.58, 212.36, 215.49],[1692576000000, 221.551, 232.134, 220.58, 231.28],[1692662400000, 240.25, 240.82, 229.55, 233.19],[1692748800000, 229.34, 238.98, 229.29, 236.86],[1692835200000, 238.66, 238.92, 228.18, 230.04],[1692921600000, 231.31, 239, 230.35, 238.59],[1693180800000, 242.58, 244.38, 235.35, 238.82],[1693267200000, 238.58, 257.48, 237.77, 257.18],[1693353600000, 254.2, 260.51, 250.59, 256.9],[1693440000000, 255.98, 261.18, 255.05, 258.08],[1693526400000, 257.26, 259.079, 242.01, 245.01],[1693872000000, 245, 258, 244.86, 256.49],[1693958400000, 255.135, 255.39, 245.06, 251.92],[1694044800000, 245.07, 252.81, 243.265, 251.49],[1694131200000, 251.22, 256.52, 246.67, 248.5],[1694390400000, 264.27, 274.85, 260.61, 273.58],[1694476800000, 270.76, 278.39, 266.6, 267.48],[1694563200000, 270.07, 274.98, 268.1, 271.3],[1694649600000, 271.32, 276.709, 270.42, 276.04],[1694736000000, 277.55, 278.98, 271, 274.39],[1694995200000, 271.16, 271.44, 263.76, 265.28],[1695081600000, 264.35, 267.85, 261.2, 266.5],[1695168000000, 267.04, 273.93, 262.461, 262.59],[1695254400000, 257.85, 260.86, 254.21, 255.7],[1695340800000, 257.4, 257.789, 244.48, 244.88],[1695600000000, 243.38, 247.1, 238.31, 246.99],[1695686400000, 242.98, 249.55, 241.66, 244.12],[1695772800000, 244.262, 245.33, 234.58, 240.5],[1695859200000, 240.02, 247.55, 238.65, 246.38],[1695945600000, 250, 254.77, 246.35, 250.22],[1696204800000, 244.81, 254.28, 242.62, 251.6],[1696291200000, 248.61, 250.02, 244.45, 246.53],[1696377600000, 248.14, 261.86, 247.6, 261.16],[1696464000000, 260, 263.6, 256.25, 260.05],[1696550400000, 253.98, 261.65, 250.65, 260.53],[1696809600000, 255.31, 261.36, 252.05, 259.67],[1696896000000, 257.75, 268.94, 257.65, 263.62],[1696982400000, 266.2, 268.6, 260.9, 262.99],[1697068800000, 262.92, 265.41, 256.631, 258.87],[1697155200000, 258.9, 259.6, 250.22, 251.12],[1697414400000, 250.05, 255.4, 248.48, 253.92],[1697500800000, 250.1, 257.183, 247.08, 254.85],[1697587200000, 252.7, 254.63, 242.08, 242.68],[1697673600000, 225.95, 230.61, 216.78, 220.11],[1697760000000, 217.01, 218.861, 210.42, 211.99],[1698019200000, 210, 216.98, 202.51, 212.08],[1698105600000, 216.5, 222.05, 214.11, 216.52],[1698192000000, 215.88, 220.1, 212.2, 212.42],[1698278400000, 211.32, 214.8, 204.88, 205.76],[1698364800000, 210.6, 214.64, 203.39, 207.3],[1698624000000, 209.28, 210.88, 194.67, 197.36],[1698710400000, 196.12, 202.8, 194.07, 200.84],[1698796800000, 204.04, 205.99, 197.85, 205.66],[1698883200000, 212.97, 219.2, 211.45, 218.51],[1698969600000, 221.15, 226.37, 218.4, 219.96],[1699228800000, 223.98, 226.32, 215, 219.27],[1699315200000, 219.98, 223.12, 215.72, 222.18],[1699401600000, 223.15, 224.15, 217.64, 222.11],[1699488000000, 219.75, 220.8, 206.68, 209.98],[1699574400000, 210.03, 215.38, 205.69, 214.65],[1699833600000, 215.6, 225.4, 211.61, 223.71],[1699920000000, 235.03, 238.135, 230.72, 237.41],[1700006400000, 239.29, 246.7, 236.45, 242.84],[1700092800000, 239.49, 240.88, 230.96, 233.59],[1700179200000, 232, 237.39, 226.54, 234.3],[1700438400000, 234.04, 237.1, 231.02, 235.6],[1700524800000, 235.04, 243.62, 233.34, 241.2],[1700611200000, 242.04, 244.01, 231.4, 234.21],[1700784000000, 233.75, 238.75, 232.33, 235.45],[1701043200000, 236.89, 238.33, 232.1, 236.08],[1701129600000, 236.68, 247, 234.01, 246.72],[1701216000000, 249.21, 252.75, 242.76, 244.14],[1701302400000, 245.14, 245.22, 236.91, 240.08],[1701388800000, 233.14, 240.19, 231.9, 238.83],[1701648000000, 235.75, 239.373, 233.29, 235.58],[1701734400000, 233.87, 246.66, 233.7, 238.72],[1701820800000, 242.92, 246.57, 239.171, 239.37],[1701907200000, 241.55, 244.08, 236.98, 242.64],[1701993600000, 240.27, 245.27, 239.27, 243.84],[1702252800000, 242.74, 243.441, 237.45, 239.74],[1702339200000, 238.55, 238.99, 233.87, 237.01],[1702425600000, 234.19, 240.3, 228.2, 239.29],[1702512000000, 241.22, 253.88, 240.79, 251.05],[1702598400000, 251.21, 254.13, 248.3, 253.5],[1702857600000, 253.78, 258.74, 251.36, 252.08],[1702944000000, 253.48, 258.34, 253.01, 257.22],[1703030400000, 256.41, 259.84, 247, 247.14],[1703116800000, 251.9, 254.8, 248.55, 254.5],[1703203200000, 256.76, 258.22, 251.37, 252.54],[1703548800000, 254.49, 257.97, 252.91, 256.61],[1703635200000, 258.35, 263.34, 257.52, 261.44],[1703721600000, 263.66, 265.13, 252.71, 253.18],[1703808000000, 255.1, 255.19, 247.43, 248.48],[1704153600000, 250.08, 251.25, 244.41, 248.42],[1704240000000, 244.98, 245.68, 236.32, 238.45],[1704326400000, 239.25, 242.7, 237.73, 237.93],[1704412800000, 236.86, 240.12, 234.9, 237.49],[1704672000000, 236.14, 241.25, 235.3, 240.45],[1704758400000, 238.11, 238.965, 232.04, 234.96],[1704844800000, 235.1, 235.5, 231.29, 233.94],[1704931200000, 230.57, 230.93, 225.37, 227.22],[1705017600000, 220.08, 225.34, 217.15, 218.89],[1705363200000, 215.1, 223.49, 212.18, 219.91],[1705449600000, 214.86, 215.67, 212.01, 215.55],[1705536000000, 216.88, 217.45, 208.74, 211.88],[1705622400000, 209.99, 213.19, 207.56, 212.19],[1705881600000, 212.26, 217.8, 206.27, 208.8],[1705968000000, 211.3, 215.65, 207.752, 209.14],[1706054400000, 211.88, 212.73, 206.77, 207.83],[1706140800000, 189.7, 193, 180.06, 182.63],[1706227200000, 185.5, 186.78, 182.1, 183.25],[1706486400000, 185.63, 191.48, 183.67, 190.93],[1706572800000, 195.33, 196.359, 190.61, 191.59],[1706659200000, 186.995, 193.97, 185.846, 187.29],[1706745600000, 188.5, 189.88, 184.28, 188.86],[1706832000000, 185.04, 188.69, 182, 187.91],[1707091200000, 184.26, 184.68, 175.01, 181.06],[1707177600000, 177.21, 186.49, 177.11, 185.1],[1707264000000, 188.18, 189.79, 182.68, 187.58],[1707350400000, 189, 191.617, 185.58, 189.56],[1707436800000, 190.18, 194.12, 189.48, 193.57],[1707696000000, 192.11, 194.73, 187.28, 188.13],[1707782400000, 183.99, 187.26, 182.109, 184.02],[1707868800000, 185.3, 188.89, 183.35, 188.71],[1707955200000, 189.16, 200.88, 188.859, 200.45],[1708041600000, 202.06, 203.17, 197.4, 199.95],[1708387200000, 196.13, 198.6, 189.13, 193.76],[1708473600000, 193.36, 199.44, 191.95, 194.77],[1708560000000, 194, 198.32, 191.36, 197.41],[1708646400000, 195.31, 197.57, 191.5, 191.97],[1708905600000, 192.29, 201.78, 192, 199.4],[1708992000000, 204.04, 205.6, 198.26, 199.73],[1709078400000, 200.42, 205.3, 198.44, 202.04],[1709164800000, 204.18, 205.28, 198.446, 201.88],[1709251200000, 200.52, 204.52, 198.5, 202.64],[1709510400000, 198.73, 199.75, 186.72, 188.14],[1709596800000, 183.05, 184.59, 177.57, 180.74],[1709683200000, 179.99, 181.576, 173.7, 176.54],[1709769600000, 174.35, 180.04, 173.7, 178.65],[1709856000000, 181.5, 182.73, 174.7, 175.34],[1710115200000, 175.445, 182.87, 174.8, 177.77],[1710201600000, 177.77, 179.43, 172.41, 177.54],[1710288000000, 173.05, 176.05, 169.15, 169.48],[1710374400000, 167.77, 171.17, 160.51, 162.5],[1710460800000, 163.16, 165.185, 160.76, 163.57],[1710720000000, 170.02, 174.72, 165.9, 173.8],[1710806400000, 172.36, 172.82, 167.42, 171.32],[1710892800000, 173, 176.25, 170.82, 175.66],[1710979200000, 176.39, 178.18, 171.8, 172.82],[1711065600000, 166.69, 171.2, 166.3, 170.83],[1711324800000, 168.76, 175.24, 168.73, 172.63],[1711411200000, 178.58, 184.25, 177.38, 177.67],[1711497600000, 181.41, 181.91, 176, 179.83],[1711584000000, 177.45, 179.57, 175.3, 175.79],[1711929600000, 176.17, 176.75, 170.21, 175.22],[1712016000000, 164.75, 167.69, 163.43, 166.63],[1712102400000, 164.02, 168.82, 163.28, 168.38],[1712188800000, 170.07, 177.19, 168.01, 171.11],[1712275200000, 169.08, 170.86, 160.51, 164.9],[1712534400000, 169.34, 174.5, 167.79, 172.98],[1712620800000, 172.91, 179.22, 171.92, 176.88],[1712707200000, 173.04, 174.93, 170.01, 171.76],[1712793600000, 172.55, 175.88, 168.51, 174.6],[1712880000000, 172.34, 173.81, 170.364, 171.05],[1713139200000, 170.24, 170.69, 161.38, 161.48],[1713225600000, 156.742, 158.19, 153.75, 157.11],[1713312000000, 157.64, 158.33, 153.78, 155.45],[1713398400000, 151.25, 152.2, 148.7, 149.93],[1713484800000, 148.97, 150.94, 146.22, 147.05],[1713744000000, 140.56, 144.44, 138.803, 142.05],[1713830400000, 143.33, 147.26, 141.11, 144.68],[1713916800000, 162.84, 167.97, 157.51, 162.13],[1714003200000, 158.96, 170.88, 158.36, 170.18],[1714089600000, 168.85, 172.12, 166.37, 168.29],[1714348800000, 188.42, 198.87, 184.54, 194.05],[1714435200000, 186.98, 190.95, 182.84, 183.28],[1714521600000, 182, 185.86, 179.01, 179.99],[1714608000000, 182.86, 184.6, 176.02, 180.01],[1714694400000, 182.1, 184.78, 178.42, 181.19],[1714953600000, 183.8, 187.56, 182.2, 184.76],[1715040000000, 182.4, 183.26, 177.4, 177.81],[1715126400000, 171.59, 176.06, 170.15, 174.72],[1715212800000, 175.01, 175.62, 171.37, 171.97],[1715299200000, 173.05, 173.06, 167.75, 168.47],[1715558400000, 170, 175.4, 169, 171.89],[1715644800000, 174.496, 179.49, 174.07, 177.55],[1715731200000, 179.9, 180, 173.11, 173.99],[1715817600000, 174.1, 175.79, 171.43, 174.84],[1715904000000, 173.55, 179.63, 172.75, 177.46],[1716163200000, 177.56, 177.754, 173.52, 174.95],[1716249600000, 175.51, 186.875, 174.71, 186.6],[1716336000000, 182.85, 183.8, 178.12, 180.11],[1716422400000, 181.8, 181.9, 173.26, 173.74],[1716508800000, 174.835, 180.08, 173.73, 179.24],[1716854400000, 176.4, 178.25, 173.16, 176.75],];
        var chart_value5 = [[1685491200000, 203.93],[1685577600000, 207.52],[1685664000000, 213.97],[1685923200000, 217.61],[1686009600000, 221.31],[1686096000000, 224.57],[1686182400000, 234.86],[1686268800000, 244.4],[1686528000000, 249.83],[1686614400000, 258.71],[1686700800000, 256.79],[1686787200000, 255.9],[1686873600000, 260.54],[1687219200000, 274.45],[1687305600000, 259.46],[1687392000000, 264.61],[1687478400000, 256.6],[1687737600000, 241.05],[1687824000000, 250.21],[1687910400000, 256.24],[1687996800000, 257.5],[1688083200000, 261.77],[1688342400000, 279.82],[1688515200000, 282.48],[1688601600000, 276.54],[1688688000000, 274.43],[1688947200000, 269.61],[1689033600000, 269.79],[1689120000000, 271.99],[1689206400000, 277.9],[1689292800000, 281.38],[1689552000000, 290.38],[1689638400000, 293.34],[1689724800000, 291.26],[1689811200000, 262.9],[1689897600000, 260.02],[1690156800000, 269.06],[1690243200000, 265.28],[1690329600000, 264.35],[1690416000000, 255.71],[1690502400000, 266.44],[1690761600000, 267.43],[1690848000000, 261.07],[1690934400000, 254.11],[1691020800000, 259.32],[1691107200000, 253.86],[1691366400000, 251.45],[1691452800000, 249.7],[1691539200000, 242.19],[1691625600000, 245.34],[1691712000000, 242.65],[1691971200000, 239.76],[1692057600000, 232.96],[1692144000000, 225.6],[1692230400000, 219.22],[1692316800000, 215.49],[1692576000000, 231.28],[1692662400000, 233.19],[1692748800000, 236.86],[1692835200000, 230.04],[1692921600000, 238.59],[1693180800000, 238.82],[1693267200000, 257.18],[1693353600000, 256.9],[1693440000000, 258.08],[1693526400000, 245.01],[1693872000000, 256.49],[1693958400000, 251.92],[1694044800000, 251.49],[1694131200000, 248.5],[1694390400000, 273.58],[1694476800000, 267.48],[1694563200000, 271.3],[1694649600000, 276.04],[1694736000000, 274.39],[1694995200000, 265.28],[1695081600000, 266.5],[1695168000000, 262.59],[1695254400000, 255.7],[1695340800000, 244.88],[1695600000000, 246.99],[1695686400000, 244.12],[1695772800000, 240.5],[1695859200000, 246.38],[1695945600000, 250.22],[1696204800000, 251.6],[1696291200000, 246.53],[1696377600000, 261.16],[1696464000000, 260.05],[1696550400000, 260.53],[1696809600000, 259.67],[1696896000000, 263.62],[1696982400000, 262.99],[1697068800000, 258.87],[1697155200000, 251.12],[1697414400000, 253.92],[1697500800000, 254.85],[1697587200000, 242.68],[1697673600000, 220.11],[1697760000000, 211.99],[1698019200000, 212.08],[1698105600000, 216.52],[1698192000000, 212.42],[1698278400000, 205.76],[1698364800000, 207.3],[1698624000000, 197.36],[1698710400000, 200.84],[1698796800000, 205.66],[1698883200000, 218.51],[1698969600000, 219.96],[1699228800000, 219.27],[1699315200000, 222.18],[1699401600000, 222.11],[1699488000000, 209.98],[1699574400000, 214.65],[1699833600000, 223.71],[1699920000000, 237.41],[1700006400000, 242.84],[1700092800000, 233.59],[1700179200000, 234.3],[1700438400000, 235.6],[1700524800000, 241.2],[1700611200000, 234.21],[1700784000000, 235.45],[1701043200000, 236.08],[1701129600000, 246.72],[1701216000000, 244.14],[1701302400000, 240.08],[1701388800000, 238.83],[1701648000000, 235.58],[1701734400000, 238.72],[1701820800000, 239.37],[1701907200000, 242.64],[1701993600000, 243.84],[1702252800000, 239.74],[1702339200000, 237.01],[1702425600000, 239.29],[1702512000000, 251.05],[1702598400000, 253.5],[1702857600000, 252.08],[1702944000000, 257.22],[1703030400000, 247.14],[1703116800000, 254.5],[1703203200000, 252.54],[1703548800000, 256.61],[1703635200000, 261.44],[1703721600000, 253.18],[1703808000000, 248.48],[1704153600000, 248.42],[1704240000000, 238.45],[1704326400000, 237.93],[1704412800000, 237.49],[1704672000000, 240.45],[1704758400000, 234.96],[1704844800000, 233.94],[1704931200000, 227.22],[1705017600000, 218.89],[1705363200000, 219.91],[1705449600000, 215.55],[1705536000000, 211.88],[1705622400000, 212.19],[1705881600000, 208.8],[1705968000000, 209.14],[1706054400000, 207.83],[1706140800000, 182.63],[1706227200000, 183.25],[1706486400000, 190.93],[1706572800000, 191.59],[1706659200000, 187.29],[1706745600000, 188.86],[1706832000000, 187.91],[1707091200000, 181.06],[1707177600000, 185.1],[1707264000000, 187.58],[1707350400000, 189.56],[1707436800000, 193.57],[1707696000000, 188.13],[1707782400000, 184.02],[1707868800000, 188.71],[1707955200000, 200.45],[1708041600000, 199.95],[1708387200000, 193.76],[1708473600000, 194.77],[1708560000000, 197.41],[1708646400000, 191.97],[1708905600000, 199.4],[1708992000000, 199.73],[1709078400000, 202.04],[1709164800000, 201.88],[1709251200000, 202.64],[1709510400000, 188.14],[1709596800000, 180.74],[1709683200000, 176.54],[1709769600000, 178.65],[1709856000000, 175.34],[1710115200000, 177.77],[1710201600000, 177.54],[1710288000000, 169.48],[1710374400000, 162.5],[1710460800000, 163.57],[1710720000000, 173.8],[1710806400000, 171.32],[1710892800000, 175.66],[1710979200000, 172.82],[1711065600000, 170.83],[1711324800000, 172.63],[1711411200000, 177.67],[1711497600000, 179.83],[1711584000000, 175.79],[1711929600000, 175.22],[1712016000000, 166.63],[1712102400000, 168.38],[1712188800000, 171.11],[1712275200000, 164.9],[1712534400000, 172.98],[1712620800000, 176.88],[1712707200000, 171.76],[1712793600000, 174.6],[1712880000000, 171.05],[1713139200000, 161.48],[1713225600000, 157.11],[1713312000000, 155.45],[1713398400000, 149.93],[1713484800000, 147.05],[1713744000000, 142.05],[1713830400000, 144.68],[1713916800000, 162.13],[1714003200000, 170.18],[1714089600000, 168.29],[1714348800000, 194.05],[1714435200000, 183.28],[1714521600000, 179.99],[1714608000000, 180.01],[1714694400000, 181.19],[1714953600000, 184.76],[1715040000000, 177.81],[1715126400000, 174.72],[1715212800000, 171.97],[1715299200000, 168.47],[1715558400000, 171.89],[1715644800000, 177.55],[1715731200000, 173.99],[1715817600000, 174.84],[1715904000000, 177.46],[1716163200000, 174.95],[1716249600000, 186.6],[1716336000000, 180.11],[1716422400000, 173.74],[1716508800000, 179.24],[1716854400000, 176.75],];

        // 현재 날짜 기준 데이터 필터링
        var currentDate = new Date();
        var threeMonthsAgo_M3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
        var threeMonthsAgo_M6 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
        var threeMonthsAgo_Y1 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 12, currentDate.getDate());
        var threeMonthsAgo_Y3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 36, currentDate.getDate());
        var threeMonthsAgo_Y10 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 120, currentDate.getDate());

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
            min: threeMonthsAgo_M3.getTime()
        });
        var xAxisOptions_M6 = Object.assign({}, getCommonXAxisOptions(), {            
            min: threeMonthsAgo_M6.getTime()
        });
        var xAxisOptions_Y1 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y1.getTime()
        });
        var xAxisOptions_Y3 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y3.getTime()
        });
        var xAxisOptions_Y10 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y', this.value);
                }
            },
            min: threeMonthsAgo_Y10.getTime()
        });

        // 캔들 + 선 차트 생성 (3개월)
        var chart_M3 = Highcharts.stockChart('containeroutline1_2_M3', Object.assign({}, chartOptions, {
            xAxis: xAxisOptions_M3,
            series: [
                {
                    type: 'candlestick',
                    name: '일봉',
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
                        pointFormat: '<b>open : {point.open}<br/>high : {point.high}<br/>low : {point.low}<br/>close: {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: 'Price',
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.0f} 원</b></span>',
                    },
                },
                {
                    type: 'flags',
                    name: '매수',
                    data: [{
                        x: 1712102400000,
                        title: '<img src="../img/flags_buydot.png" width="6" height="6" /> <span style="display: block; height: 0;"></span>매수',                        
                        useHTML: true,
                        style: {
                            textAlign: 'center'
                        }
                    },{
                        x: 1703721600000,
                        title: '<img src="../img/flags_buydot.png" width="6" height="6" /> <span style="display: block; height: 0;"></span>매수',                     
                        useHTML: true,
                        style: {
                            textAlign: 'center'
                        }
                    }],
                    width: 16,
                    height: 16,
                    useHTML: true, // HTML 기반의 깃발 사용
                    y: 30, // 깃발의 위치 조정         
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
                        fontWeight: 'nomal' // 폰트 굵기를 bold로 설정
                    },
                    onSeries: 'dataseries',
                    shape: 'circlepin',
                    color: 'transparent',    
                    fillColor: 'transparent',                    
                },
                {
                    type: 'flags',
                    name: '매도 ',
                    data: [{
                        x: 1712707200000,
                        title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                        useHTML: true,
                        style: {
                            textAlign: 'center'
                        }
                    },{
                        x: 1700784000000,
                        title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                        useHTML: true,
                        style: {
                            textAlign: 'center'
                        }
                    },{
                        x: 1701907200000,
                        title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                        useHTML: true,
                        style: {
                            textAlign: 'center'
                        }
                    },],
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
                        textAlign: 'center'
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
        chart_M3.series[1].name = '종가'; // 라벨 변경

        // 캔들 + 선 차트 생성 (6개월) 
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_M6 = Highcharts.stockChart('containeroutline1_2_M6', Object.assign({}, chartOptions, {
                    xAxis: xAxisOptions_M6,
                    series: [
                        {
                            type: 'candlestick',
                            name: '일봉',
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
                                pointFormat: '<b>open : {point.open}<br/>high : {point.high}<br/>low : {point.low}<br/>close: {point.close}<br/></b>',
                            },
                            zIndex: 1
                        },
                        {
                            type: 'line',
                            name: 'Price',
                            data: chart_value5,
                            showInLegend: false,
                            dataGrouping: {
                                enabled: false
                            },
                            tooltip: {
                                useHTML: true,
                                headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                                pointFormat: '</br><b>{series.name} : {point.y:,.0f} 원</b></span>',
                            },
                        },
                        {
                            type: 'flags',
                            name: '매수',
                            data: [{
                                x: 1703548800000,
                                title: '<img src="../img/flags_buydot.png" width="6" height="6" /> <span style="display: block; height: 0;"></span>매수',                        
                                useHTML: true,
                                style: {
                                    textAlign: 'center'
                                }
                            },{
                                x: 1703721600000,
                                title: '<img src="../img/flags_buydot.png" width="6" height="6" /> <span style="display: block; height: 0;"></span>매수',                     
                                useHTML: true,
                                style: {
                                    textAlign: 'center'
                                }
                            }],
                            width: 16,
                            height: 16,
                            useHTML: true, // HTML 기반의 깃발 사용
                            y: 30, // 깃발의 위치 조정         
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
                                fontWeight: 'nomal' // 폰트 굵기를 bold로 설정
                            },
                            onSeries: 'dataseries',
                            shape: 'circlepin',
                            color: 'transparent',    
                            fillColor: 'transparent',                    
                        },
                        {
                            type: 'flags',
                            name: '매도 ',
                            data: [{
                                x: 1700611200000,
                                title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                                useHTML: true,
                                style: {
                                    textAlign: 'center'
                                }
                            },{
                                x: 1700784000000,
                                title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                                useHTML: true,
                                style: {
                                    textAlign: 'center'
                                }
                            },{
                                x: 1701907200000,
                                title: '매도 <span style="display: block; height: 7px;"></span> <img src="../img/flags_selldot.png" width="6" height="6" />',                        
                                useHTML: true,
                                style: {
                                    textAlign: 'center'
                                }
                            },],
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
                                textAlign: 'center'
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
                chart_M6.series[1].name = '종가'; // 라벨 변경
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

        // 선 차트 생성 (3년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y3 = Highcharts.stockChart('containeroutline1_2_Y3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y3 }));
                chart_Y3.series[0].setData([]); // 캔들 차트
                chart_Y3.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (10년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y10 = Highcharts.stockChart('containeroutline1_2_Y10', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y10 }));
                chart_Y10.series[0].setData([]); // 캔들 차트
                chart_Y10.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });
    }

    // 매매신호 목록 - 공포 탐욕 지수 (마켓스코어)    
    function CustomChart_Score(renderTo, data) {        
        const easeOutBounce = function (pos) {
            if ((pos) < (1 / 2.75)) {
                return (7.5625 * pos * pos);
            }
            if (pos < (2 / 2.75)) {
                return (7.5625 * (pos -= (1.5 / 2.75)) * pos + 0.75);
            }
            if (pos < (2.5 / 2.75)) {
                return (7.5625 * (pos -= (2.25 / 2.75)) * pos + 0.9375);
            }
            return (7.5625 * (pos -= (2.625 / 2.75)) * pos + 0.984375);
        };        
        Math.easeOutBounce = easeOutBounce;
        
        Highcharts.chart(renderTo, {
            chart: {
                type: 'gauge',
                plotBackgroundColor: null,
                plotBackgroundImage: null,
                plotBorderWidth: 0,
                plotShadow: false, 
                backgroundColor: 'transparent',
                margin: [-200, 20, 0, 20],
                width: 340,
                height: 280,
                events: {
                    load: function () {
                        var chart = this;
                        var value = chart.series[0].points[0].y;
                        chart.yAxis[0].update({
                            plotBands: [{
                                from: 0,
                                to: 24,
                                color: value <= 24 ? '#D43F5D' : '#EEF2F5',
                                thickness: '40%',
                            }, {
                                from: 25,
                                to: 43,
                                color: value > 24 && value <= 43 ? '#E9835B' : '#EEF2F5',
                                thickness: '40%',
                            }, {
                                from: 44,
                                to: 55,
                                color: value > 43 && value <= 55 ? '#F4A931' : '#EEF2F5',
                                thickness: '40%',
                            }, {
                                from: 56,
                                to: 74,
                                color: value > 55 && value <= 74 ? '#F8D54E' : '#EEF2F5',
                                thickness: '40%',
                            }, {
                                from: 75,
                                to: 100,
                                color: value > 74 ? '#5AA86B' : '#EEF2F5',
                                thickness: '40%',
                            }]
                        });
        
                        // 활성 라벨 설정
                        chart.yAxis[0].tickPositions.forEach(function (pos) {
                            var label = chart.yAxis[0].ticks[pos] && chart.yAxis[0].ticks[pos].label;
                            if (label) {
                                if (value <= 24 && pos === 12) {
                                    label.addClass('active-label');
                                } else if (value > 24 && value <= 43 && pos === 34) {
                                    label.addClass('active-label');
                                } else if (value > 43 && value <= 55 && pos === 49) {
                                    label.addClass('active-label');
                                } else if (value > 55 && value <= 74 && pos === 65) {
                                    label.addClass('active-label');
                                } else if (value > 74 && pos === 87) {
                                    label.addClass('active-label');
                                } else {
                                    label.removeClass('active-label');
                                }
                            }
                        });
                    }
                }
            },
        
            title: {
                text: ''
            },
        
            pane: {
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '75%'],
                size: '100%'
            },
        
            exporting: {
                enabled: false
            },
        
            credits: {
                enabled: false,
            },
        
            tooltip: {
                enabled: false
            },
        
            yAxis: {
                lineColor: null,
                minorGridLineWidth: 0,
                gridLineWidth: 0,
                min: 0,
                max: 100,
                tickPositions: [12, 34, 49, 65, 87],
                tickLength: 0,
                minorTickLength: 0,
                labels: {
                    formatter: function () {
                        var labels = ['공포', '불안', '보통', '과욕', '탐욕'];
                        var positions = [12, 34, 49, 65, 87];
                        return labels[positions.indexOf(this.value)];
                    },                    
                    style: {
                        fontSize: '14px',
                        color: '#fff',
                        'font-weight': "bold",
                    }
                },
                plotBands: []
            },
        
            plotOptions: {
                gauge: {
                    dataLabels: {
                        className: 'gauge-value',
                        format: '{y}',
                        useHTML: true,
                        y: -18
                    },
                    dial: {
                        radius: '80%',
                        backgroundColor: '#6A727B',
                        baseWidth: 12,
                        baseLength: '0%',
                        rearLength: '0%',
                        zIndex: 999,
                    },
                    pivot: {                        
                        backgroundColor: 'transparent',
                        radius: 33,               
                    },
                    animation: {
                        duration: 2000,
                        easing: 'easeOutBounce',
                    }
                }
            },
        
            series: data,
        });
    }    
    
    const CustomScoreData1_1 = [{
        name: '탐욕 (75점 초과) :',
        data: [85],                
        color: Highcharts.getOptions().colors[0]
    }];    
    const CustomScoreData1_2 = [{
        name: '과욕 (56점 초과) :',
        data: [61]                
    }];
    const CustomScoreData1_3 = [{
        name: '보통 (44점 초과) :',
        data: [49]                
    }];    
    const CustomScoreData1_4 = [{
        name: '불안 (25점 초과) :',
        data: [42]                
    }];    
    const CustomScoreData1_5 = [{
        name: '공포 (25점 이하) :',
        data: [20]                
    }];   
    if ($('#CustomChart_score1_0').length) {        
        CustomChart_Score('CustomChart_score1_0', CustomScoreData1_0);
    }
    if ($('#CustomChart_score1_1').length) {        
        CustomChart_Score('CustomChart_score1_1', CustomScoreData1_1);
    }
    if ($('#CustomChart_score1_2').length) {
        CustomChart_Score('CustomChart_score1_2', CustomScoreData1_2);
    }
    if ($('#CustomChart_score1_3').length) {
        CustomChart_Score('CustomChart_score1_3', CustomScoreData1_3);
    }
    if ($('#CustomChart_score1_4').length) {
        CustomChart_Score('CustomChart_score1_4', CustomScoreData1_4);
    }
    if ($('#CustomChart_score1_5').length) {
        CustomChart_Score('CustomChart_score1_5', CustomScoreData1_5);
    }
    
});