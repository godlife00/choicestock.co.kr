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
            }, {
                name: '투자매력도',
                data: [50, 50, 50, 50, 50],
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
                margin: [0, 10, 0, 10],
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
                shared: true,
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

        var priceData = [[1656547200000, 256.830],[1656633600000, 259.580],[1656979200000, 262.850],[1657065600000, 266.210],[1657152000000, 268.400],[1657238400000, 267.660],[1657497600000, 264.510],[1657584000000, 253.670],[1657670400000, 252.720],[1657756800000, 254.080],[1657843200000, 256.720],[1658102400000, 254.250],[1658188800000, 259.530],[1658275200000, 262.270],[1658361600000, 264.840],[1658448000000, 260.360],[1658707200000, 258.830],[1658793600000, 251.900],[1658880000000, 268.740],[1658966400000, 276.410],[1659052800000, 280.740],[1659312000000, 278.010],[1659398400000, 274.820],[1659484800000, 282.470],[1659571200000, 283.650],[1659657600000, 282.910],[1659916800000, 280.320],[1660003200000, 282.300],[1660089600000, 289.160],[1660176000000, 287.020],[1660262400000, 291.910],[1660521600000, 293.470],[1660608000000, 292.710],[1660694400000, 291.320],[1660780800000, 290.170],[1660867200000, 286.150],[1661126400000, 277.750],[1661212800000, 276.440],[1661299200000, 275.790],[1661385600000, 278.850],[1661472000000, 268.090],[1661731200000, 265.230],[1661817600000, 262.970],[1661904000000, 261.470],[1661990400000, 260.400],[1662076800000, 256.060],[1662422400000, 253.250],[1662508800000, 258.090],[1662595200000, 258.520],[1662681600000, 264.460],[1662940800000, 266.650],[1663027200000, 251.990],[1663113600000, 252.220],[1663200000000, 245.380],[1663286400000, 244.740],[1663545600000, 244.520],[1663632000000, 242.450],[1663718400000, 238.950],[1663804800000, 240.980],[1663891200000, 237.920],[1664150400000, 237.450],[1664236800000, 236.410],[1664323200000, 241.070],[1664409600000, 237.500],[1664496000000, 232.900],[1664755200000, 240.740],[1664841600000, 248.880],[1664928000000, 249.200],[1665014400000, 246.790],[1665100800000, 234.240],[1665360000000, 229.250],[1665446400000, 225.410],[1665532800000, 225.750],[1665619200000, 234.240],[1665705600000, 228.560],[1665964800000, 237.530],[1666051200000, 238.500],[1666137600000, 236.480],[1666224000000, 236.150],[1666310400000, 242.120],[1666569600000, 247.250],[1666656000000, 250.660],[1666742400000, 231.320],[1666828800000, 226.750],[1666915200000, 235.870],[1667174400000, 232.130],[1667260800000, 228.170],[1667347200000, 220.100],[1667433600000, 214.250],[1667520000000, 221.390],[1667779200000, 227.870],[1667865600000, 228.870],[1667952000000, 224.510],[1668038400000, 242.980],[1668124800000, 247.110],[1668384000000, 241.550],[1668470400000, 241.970],[1668556800000, 241.730],[1668643200000, 241.680],[1668729600000, 241.220],[1668988800000, 242.050],[1669075200000, 245.030],[1669161600000, 247.580],[1669334400000, 247.490],[1669593600000, 241.760],[1669680000000, 240.330],[1669766400000, 255.140],[1669852800000, 254.690],[1669939200000, 255.020],[1670198400000, 250.200],[1670284800000, 245.120],[1670371200000, 244.370],[1670457600000, 247.400],[1670544000000, 245.420],[1670803200000, 252.510],[1670889600000, 256.920],[1670976000000, 257.220],[1671062400000, 249.010],[1671148800000, 244.690],[1671408000000, 240.450],[1671494400000, 241.800],[1671580800000, 244.430],[1671667200000, 238.190],[1671753600000, 238.730],[1672099200000, 236.960],[1672185600000, 234.530],[1672272000000, 241.010],[1672358400000, 239.820],[1672704000000, 239.580],[1672790400000, 229.100],[1672876800000, 222.310],[1672963200000, 224.930],[1673222400000, 227.120],[1673308800000, 228.850],[1673395200000, 235.770],[1673481600000, 238.510],[1673568000000, 239.230],[1673913600000, 240.350],[1674000000000, 235.810],[1674086400000, 231.930],[1674172800000, 240.220],[1674432000000, 242.580],[1674518400000, 242.040],[1674604800000, 240.610],[1674691200000, 248.000],[1674777600000, 248.160],[1675036800000, 242.710],[1675123200000, 247.810],[1675209600000, 252.750],[1675296000000, 264.600],[1675382400000, 258.350],[1675641600000, 256.770],[1675728000000, 267.560],[1675814400000, 266.730],[1675900800000, 263.620],[1675987200000, 263.100],[1676246400000, 271.320],[1676332800000, 272.170],[1676419200000, 269.320],[1676505600000, 262.150],[1676592000000, 258.060],[1676937600000, 252.670],[1677024000000, 251.510],[1677110400000, 254.770],[1677196800000, 249.220],[1677456000000, 250.160],[1677542400000, 249.420],[1677628800000, 246.270],[1677715200000, 251.110],[1677801600000, 255.290],[1678060800000, 256.870],[1678147200000, 254.150],[1678233600000, 253.700],[1678320000000, 252.320],[1678406400000, 248.590],[1678665600000, 253.920],[1678752000000, 260.790],[1678838400000, 265.440],[1678924800000, 276.200],[1679011200000, 279.430],[1679270400000, 272.230],[1679356800000, 273.780],[1679443200000, 272.290],[1679529600000, 277.660],[1679616000000, 280.570],[1679875200000, 276.380],[1679961600000, 275.230],[1680048000000, 280.510],[1680134400000, 284.050],[1680220800000, 288.300],[1680480000000, 287.230],[1680566400000, 287.180],[1680652800000, 284.340],[1680739200000, 291.600],[1681084800000, 289.390],[1681171200000, 282.830],[1681257600000, 283.490],[1681344000000, 289.840],[1681430400000, 286.140],[1681689600000, 288.800],[1681776000000, 288.370],[1681862400000, 288.450],[1681948800000, 286.110],[1682035200000, 285.760],[1682294400000, 281.770],[1682380800000, 275.420],[1682467200000, 295.370],[1682553600000, 304.830],[1682640000000, 307.260],[1682899200000, 305.560],[1682985600000, 305.410],[1683072000000, 304.400],[1683158400000, 305.410],[1683244800000, 310.650],[1683504000000, 308.650],[1683590400000, 307.000],[1683676800000, 312.310],[1683763200000, 310.110],[1683849600000, 308.970],[1684108800000, 309.460],[1684195200000, 311.740],[1684281600000, 314.000],[1684368000000, 318.520],[1684454400000, 318.340],[1684713600000, 321.180],[1684800000000, 315.260],[1684886400000, 313.850],[1684972800000, 325.920],[1685059200000, 332.890],[1685404800000, 331.210],[1685491200000, 328.390],[1685577600000, 332.580],[1685664000000, 335.400],[1685923200000, 335.940],[1686009600000, 333.680],[1686096000000, 323.380],[1686182400000, 325.260],[1686268800000, 326.790],[1686528000000, 331.850],[1686614400000, 334.290],[1686700800000, 337.340],[1686787200000, 348.100],[1686873600000, 342.330],[1687219200000, 338.050],[1687305600000, 333.560],[1687392000000, 339.710],[1687478400000, 335.020],[1687737600000, 328.600],[1687824000000, 334.570],[1687910400000, 335.850],[1687996800000, 335.050],[1688083200000, 340.540],[1688342400000, 337.990],[1688515200000, 338.150],[1688601600000, 341.270],[1688688000000, 337.220],[1688947200000, 331.830],[1689033600000, 332.470],[1689120000000, 337.200],[1689206400000, 342.660],[1689292800000, 345.240],[1689552000000, 345.730],[1689638400000, 359.490],[1689724800000, 355.080],[1689811200000, 346.870],[1689897600000, 343.770],[1690156800000, 345.110],[1690243200000, 350.980],[1690329600000, 337.770],[1690416000000, 330.720],[1690502400000, 338.370],[1690761600000, 335.920],[1690848000000, 336.340],[1690934400000, 327.500],[1691020800000, 326.660],[1691107200000, 327.780],[1691366400000, 330.110],[1691452800000, 326.050],[1691539200000, 322.230],[1691625600000, 322.930],[1691712000000, 321.010],[1691971200000, 324.040],[1692057600000, 321.860],[1692144000000, 320.400],[1692230400000, 316.880],[1692316800000, 316.480],[1692576000000, 321.880],[1692662400000, 322.460],[1692748800000, 327.000],[1692835200000, 319.970],[1692921600000, 322.980],[1693180800000, 323.700],[1693267200000, 328.410],[1693353600000, 328.790],[1693440000000, 327.760],[1693526400000, 328.660],[1693872000000, 333.550],[1693958400000, 332.880],[1694044800000, 329.910],[1694131200000, 334.270],[1694390400000, 337.940],[1694476800000, 331.770],[1694563200000, 336.060],[1694649600000, 338.700],[1694736000000, 330.220],[1694995200000, 329.060],[1695081600000, 328.650],[1695168000000, 320.770],[1695254400000, 319.530],[1695340800000, 317.010],[1695600000000, 317.540],[1695686400000, 312.140],[1695772800000, 312.790],[1695859200000, 313.640],[1695945600000, 315.750],[1696204800000, 321.800],[1696291200000, 313.390],[1696377600000, 318.955],[1696464000000, 319.360],[1696550400000, 327.260],[1696809600000, 329.820],[1696896000000, 328.390],[1696982400000, 332.420],[1697068800000, 331.160],[1697155200000, 327.730],[1697414400000, 332.640],[1697500800000, 332.060],[1697587200000, 330.110],[1697673600000, 331.320],[1697760000000, 326.670],[1698019200000, 329.320],[1698105600000, 330.530],[1698192000000, 340.670],[1698278400000, 327.890],[1698364800000, 329.810],[1698624000000, 337.310],[1698710400000, 338.110],[1698796800000, 346.070],[1698883200000, 348.320],[1698969600000, 352.800],[1699228800000, 356.530],[1699315200000, 360.530],[1699401600000, 363.200],[1699488000000, 360.690],[1699574400000, 369.670],[1699833600000, 366.680],[1699920000000, 370.270],[1700006400000, 369.670],[1700092800000, 376.170],[1700179200000, 369.850],[1700438400000, 377.440],[1700524800000, 373.070],[1700611200000, 377.850],[1700784000000, 377.430],[1701043200000, 378.610],[1701129600000, 382.700],[1701216000000, 378.850],[1701302400000, 378.910],[1701388800000, 374.510],[1701648000000, 369.140],[1701734400000, 372.520],[1701820800000, 368.800],[1701907200000, 370.950],[1701993600000, 374.230],[1702252800000, 371.300],[1702339200000, 374.380],[1702425600000, 374.370],[1702512000000, 365.930],[1702598400000, 370.730],[1702857600000, 372.650],[1702944000000, 373.260],[1703030400000, 370.620],[1703116800000, 373.540],[1703203200000, 374.580],[1703548800000, 374.660],[1703635200000, 374.070],[1703721600000, 375.280],[1703808000000, 376.040],[1704153600000, 370.870],[1704240000000, 370.600],[1704326400000, 367.940],[1704412800000, 367.750],[1704672000000, 374.690],[1704758400000, 375.790],[1704844800000, 382.770],[1704931200000, 384.630],[1705017600000, 388.470],[1705363200000, 390.270],[1705449600000, 389.470],[1705536000000, 393.870],[1705622400000, 398.670],[1705881600000, 396.510],[1705968000000, 398.900],[1706054400000, 402.560],[1706140800000, 404.870],[1706227200000, 403.930],[1706486400000, 409.720],[1706572800000, 408.590],[1706659200000, 397.580],[1706745600000, 403.780],[1706832000000, 411.220],[1707091200000, 405.650],[1707177600000, 405.490],[1707264000000, 414.050],[1707350400000, 414.110],[1707436800000, 420.550],[1707696000000, 415.260],[1707782400000, 406.320],[1707868800000, 409.490],[1707955200000, 406.560],[1708041600000, 404.060],[1708387200000, 402.790],[1708473600000, 402.180],[1708560000000, 411.650],[1708646400000, 410.340],[1708905600000, 407.540],[1708992000000, 407.480],[1709078400000, 407.720],[1709164800000, 413.640],[1709251200000, 415.500],[1709510400000, 414.920],[1709596800000, 402.650],[1709683200000, 402.090],[1709769600000, 409.140],[1709856000000, 406.220],[1710115200000, 404.520],[1710201600000, 415.280],[1710288000000, 415.100],[1710374400000, 425.220],[1710460800000, 416.420],[1710720000000, 417.320],[1710806400000, 421.410],[1710892800000, 425.230],[1710979200000, 429.370],[1711065600000, 428.740],[1711324800000, 422.860],[1711411200000, 421.650],[1711497600000, 421.430],[1711584000000, 420.720],[1711929600000, 424.570],[1712016000000, 421.440],[1712102400000, 420.450],[1712188800000, 417.880],[1712275200000, 425.520],[1712534400000, 424.590],[1712620800000, 426.280],[1712707200000, 423.260],[1712793600000, 427.930],[1712880000000, 421.900],[1713139200000, 413.640],[1713225600000, 414.580],[1713312000000, 411.840],[1713398400000, 404.270],[1713484800000, 399.120],[1713744000000, 400.960],[1713830400000, 407.570],[1713916800000, 409.060],[1714003200000, 399.040],[1714089600000, 406.320],[1714348800000, 402.250],[1714435200000, 389.330],[1714521600000, 394.940],[1714608000000, 397.840],[1714694400000, 406.660],[1714953600000, 413.540],[1715040000000, 409.340],[1715126400000, 410.540],[1715212800000, 412.320],[1715299200000, 414.740],[1715558400000, 413.720],[1715644800000, 416.560],[1715731200000, 423.080],[1715817600000, 420.990],[1715904000000, 420.210],[1716163200000, 425.340],[1716249600000, 429.040],[1716336000000, 430.520],[1716422400000, 427.000],[1716508800000, 430.160],[1716854400000, 430.320],[1716940800000, 429.170],[1717027200000, 414.670],[1717113600000, 415.130],[1717372800000, 413.520],[1717459200000, 416.070],[1717545600000, 424.010],[1717632000000, 424.520],[1717718400000, 423.850],[1717977600000, 427.870],[1718064000000, 432.680],[1718150400000, 441.060],[1718236800000, 441.580],[1718323200000, 442.570],[1718582400000, 448.370],[1718668800000, 446.340],[1718841600000, 445.700],[1718928000000, 449.780],[1719187200000, 447.670],[1719273600000, 450.950],[1719360000000, 452.160],[1719446400000, 452.850],[1719532800000, 446.950],[1719792000000, 456.730],[1719878400000, 459.280],[1719964800000, 460.770],[1720137600000, 467.560],[1720396800000, 466.240],[1720483200000, 459.540],[1720569600000, 466.250],[1720656000000, 454.700],[1720742400000, 453.550],[1721001600000, 453.960],[1721088000000, 449.520],[1721174400000, 443.520],[1721260800000, 440.370],[1721347200000, 437.110],[1721606400000, 442.940],[1721692800000, 444.850],[1721779200000, 428.900],[1721865600000, 418.400],[1721952000000, 425.270],[1722211200000, 426.730],[1722297600000, 422.920],[1722384000000, 418.350],[1722470400000, 417.110],[1722556800000, 408.490],[1722816000000, 395.150],[1722902400000, 399.610],[1722988800000, 398.430],[1723075200000, 402.690],[1723161600000, 406.020],[1723420800000, 406.810],[1723507200000, 414.010],[1723593600000, 416.860],[1723680000000, 421.030],[1723766400000, 418.470],[1724025600000, 421.530],[1724112000000, 424.800],[1724198400000, 424.140],[1724284800000, 415.550],[1724371200000, 416.790],[1724630400000, 413.490],[1724716800000, 413.840],[1724803200000, 410.600],[1724889600000, 413.120],[1724976000000, 417.140],[1725321600000, 409.440],[1725408000000, 408.900],[1725494400000, 408.390],[1725580800000, 401.700],[1725840000000, 405.720],[1725926400000, 414.200],[1726012800000, 423.040],[1726099200000, 427.000],[1726185600000, 430.590],[1726444800000, 431.340],[1726531200000, 435.150],[1726617600000, 430.810],[1726704000000, 438.690],[1726790400000, 435.270],[1727049600000, 433.510],[1727136000000, 429.170],[1727222400000, 432.110],[1727308800000, 431.310],[1727395200000, 428.020],[1727654400000, 430.300],[1727740800000, 420.690],[1727827200000, 417.130],[1727913600000, 416.540],[1728000000000, 416.060],[1728259200000, 409.540],[1728345600000, 414.710],[1728432000000, 417.460],[1728518400000, 415.840],[1728604800000, 416.320],[1728864000000, 419.140],[1728950400000, 418.740],[1729036800000, 416.120],[1729123200000, 416.720],[1729209600000, 418.160],[1729468800000, 418.780],[1729555200000, 427.510],[1729641600000, 424.600],[1729728000000, 424.730],[1729814400000, 428.150],[1730073600000, 426.590],[1730160000000, 431.950],[1730246400000, 432.530],[1730332800000, 406.350],[1730419200000, 410.370],[1730678400000, 408.460],[1730764800000, 411.460],[1730851200000, 420.180],[1730937600000, 425.430],[1731024000000, 422.540],[1731283200000, 418.010],[1731369600000, 423.030],[1731456000000, 425.200],[1731542400000, 426.890],[1731628800000, 415.000],[1731888000000, 415.760],[1731974400000, 417.790],[1732060800000, 415.490],[1732147200000, 412.870],[1732233600000, 417.000],[1732492800000, 418.790],[1732579200000, 427.990],[1732665600000, 422.990],[1732838400000, 423.460],[1733097600000, 430.980],[1733184000000, 431.200],[1733270400000, 437.420],[1733356800000, 442.620],[1733443200000, 443.570],[1733702400000, 446.020],[1733788800000, 443.330],[1733875200000, 448.990],[1733961600000, 449.560],[1734048000000, 447.270],[1734307200000, 451.590],[1734393600000, 454.460],[1734480000000, 437.390],[1734566400000, 437.030],[1734652800000, 436.600],[1734912000000, 435.250],[1734998400000, 439.330],[1735171200000, 438.110],[1735257600000, 430.530],[1735516800000, 424.830],[1735603200000, 421.500],[1735776000000, 418.580],[1735862400000, 423.350],[1736121600000, 427.850],[1736208000000, 422.370],[1736294400000, 424.56],];
        var eps1 = [2025,2026,2027,];
        var eps2 = [[1688083200000, 9.68],[1719705600000, 11.80],];
        var eps3 = [[1719705600000, 11.80],[1751241600000, 13.04],[1782777600000, 15.08],[1814313600000, 17.86],];
        var categories = {'2023.06': '2023.06' ,'2024.06': '2024.06' ,'2025.06': '2025.06<br> <span style="font-size:10px">(예상)</span>' ,'2026.06': '2026.06<br> <span style="font-size:10px">(예상)</span>' ,'2027.06': '2027.06<br> <span style="font-size:10px">(예상)</span>' ,};
        var positions = [Date.UTC(2023, 5),Date.UTC(2024, 5),Date.UTC(2025, 5),Date.UTC(2026, 5),Date.UTC(2027, 5),];

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

        const renderChart = () => {
            Highcharts.chart('containerfinancials2_1', {            
                chart: {
                    backgroundColor: null,
                    scrollablePlotArea: {
                        minWidth: 480,
                        scrollPositionX: 0.5,
                    }
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
                    minPadding: 1, // 왼쪽 패딩 (0 = 없음, 1 = 최대)
                    maxPadding: 1,  // 오른쪽 패딩 (0 = 없음, 1 = 최대)
                    type: 'datetime',
                    tickPositioner: function () {				                  
                        // 특정 날짜(년도)만을 위한 timestamp 배열 생성
                        // var positions = [
                        //     // Date.UTC(표시할 연도, 표시할 월 (ex. 1월이면 0, 9월이라면 8)),                                                                        
                        //     Date.UTC(2023, 2),Date.UTC(2024, 2),Date.UTC(2025, 2),Date.UTC(2026, 2),Date.UTC(2027, 2)
                        // ];                    
                        let initialPositions = positions.slice(); // positions 배열 복사                    
                        
                        // 툴팁 표시를 위해 마지막 날짜의 월을 +1 시킴
                        const lastDate = new Date(initialPositions[initialPositions.length - 1]);
                        lastDate.setMonth(lastDate.getMonth() + 1);
                        initialPositions[initialPositions.length - 1] = Date.UTC(lastDate.getFullYear(), lastDate.getMonth());                        
                        return initialPositions;                    
                    },

                    labels: {
                        style: {
                            color: '#939393',
                            fontSize: '12px'
                        },
                        formatter: function () {                            
                            const categoriesCopy = { ...categories }; // categories 배열을 복사해서 가져오는 변수 추가

                            // 마지막 값의 날짜를 변경하는 스크립트 추가
                            const lastKey = Object.keys(categoriesCopy).pop();
                            if (lastKey) {
                                const newKey = lastKey.replace(/(\d{4})\.(\d{2})/, (match, year, month) => {
                                    if (month === '12') {
                                        return `${String(Number(year) + 1)}.01`;
                                    }
                                    return `${year}.${String(Number(month) + 1).padStart(2, '0')}`;
                                });
                                categoriesCopy[newKey] = categoriesCopy[lastKey];
                                delete categoriesCopy[lastKey];
                            }
                            const formattedDate = Highcharts.dateFormat('%Y.%m', this.value);
                            const label = categoriesCopy[formattedDate] || formattedDate;                        
                            return `<div style="text-align: center; line-height: 1.2; color:#666;">${label}</div>`;
                        },
                        useHTML: true, // HTML 태그를 포함하여 출력                    
                    },
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
        };

        let resizeTimeout;
        $(window).on('resize', function() {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(renderChart, 200); // 200ms 딜레이 후 차트 다시 그리기
        });

        renderChart(); // 초기 차트 렌더링
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
        console.time('CustomChart_Score Execution Time');  
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
        
        function renderChart() {

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
                                    to: 25,
                                    color: value <= 25 ? '#D43F5D' : '#EEF2F5',
                                    thickness: '40%',
                                }, {
                                    from: 26,
                                    to: 44,
                                    color: value > 25 && value <= 44 ? '#E9835B' : '#EEF2F5',
                                    thickness: '40%',
                                }, {
                                    from: 45,
                                    to: 56,
                                    color: value > 44 && value <= 56 ? '#F4A931' : '#EEF2F5',
                                    thickness: '40%',
                                }, {
                                    from: 57,
                                    to: 75,
                                    color: value > 56 && value <= 75 ? '#F8D54E' : '#EEF2F5',
                                    thickness: '40%',
                                }, {
                                    from: 76,
                                    to: 100,
                                    color: value > 75 ? '#5AA86B' : '#EEF2F5',
                                    thickness: '40%',
                                }]
                            });
            
                            // 활성 라벨 설정
                            chart.yAxis[0].tickPositions.forEach(function (pos) {
                                var label = chart.yAxis[0].ticks[pos] && chart.yAxis[0].ticks[pos].label;
                                if (label) {
                                    if (value <= 25 && pos === 12) {
                                        label.addClass('active-label');
                                    } else if (value > 25 && value <= 44 && pos === 34) {
                                        label.addClass('active-label');
                                    } else if (value > 44 && value <= 56 && pos === 50.5) {
                                        label.addClass('active-label');
                                    } else if (value > 56 && value <= 75 && pos === 65) {
                                        label.addClass('active-label');
                                    } else if (value > 75 && pos === 87) {
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
                    tickPositions: [12, 34, 50.5, 65, 87],
                    tickLength: 0,
                    minorTickLength: 0,
                    labels: {
                        formatter: function () {
                            var labels = ['공포', '불안', '보통', '과욕', '탐욕'];
                            var positions = [12, 34, 50.5, 65, 87];
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
                series: [{                    
                    data: [45],                
                    // color: Highcharts.getOptions().colors[0]
                }]
            });            
        }
        // requestAnimationFrame을 사용하여 비동기적으로 차트 렌더링
        requestAnimationFrame(renderChart);
        
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
        data: [44]                
    }];    
    const CustomScoreData1_4 = [{
        name: '불안 (25점 초과) :',
        data: [42]                
    }];    
    const CustomScoreData1_5 = [{
        name: '공포 (25점 이하) :',
        data: [20]                
    }];   
    const CustomScoreData1_6 = [{
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
    if ($('#CustomChart_score1_2_clone').length) {
        CustomChart_Score('CustomChart_score1_2_clone', CustomScoreData1_6);
    }
    
    if ($('#chart-container').length) {        
        const lineChartData = {
            chart: {
                type: 'line'
            },
            title: {
                text: 'Sample Line Chart'
            },
            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            },
            yAxis: {
                title: {
                    text: 'Value'
                }
            },
            series: [{
                name: 'Sample Data',
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
            }]
        };

        if ($('#lineChartContainer').length) {
            Highcharts.chart('lineChartContainer', lineChartData);
        }
    }

    // 마켓스코어 6개월 스마트스코어 선차트 스타일 설정
    const getScoreChartOptions = () => {
        return {
            chart: {                
                backgroundColor: 'transparent',
                plotBackgroundColor: '#F7F8FA',
                spacingLeft: 10,
                spacingRight: 10,                
                marginRight: 28 // 오른쪽 여백 확보                

            },
    
            title: {
                text: '',                
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
    
            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                useHTML: true,
                backgroundColor: '#fff',
                borderWidth: 1,
                borderRadius: 32,
                borderColor: '#608CFA',
                padding: 14,                
                xDateFormat: '%Y.%m/%d',
                formatter: function() {
                    var date = new Date(this.x);
                    date.setHours(date.getHours() + 9); // KST로 변환
                    var formattedDate = Highcharts.dateFormat('%Y.%m/%d', date);
                    var s = '<span style="display: block;margin-bottom: 4px; font-size:12px; color:#4E5866; font-weight:500;">' + formattedDate + '</span>';
                    this.points.forEach(function(point) {
                        s += '<p style="font-size:12px; color:#4E5866; font-weight:500;">' + point.series.name + ': ' + point.y + '</p>';
                    });
                    return s;
                }
            },

            colors: ['#608CFA'],
    
            xAxis: {
                type: 'datetime',
                showFirstLabel: true,
                showLastLabel: true,             
                startOnTick: true,   // 시작 라벨 강제 표시
                endOnTick: true,     // 끝 라벨 강제 표시   
                tickWidth: 0,                
                gridLineWidth: 0,      
                minPadding: 0.1,
                maxPadding: 0.1,                
                labels: {                    
                    x: 6,                    
                    style: {
                        color: '#8C98A7',
                        fontSize: '13px'
                    },
                    formatter: function () {
                        return Highcharts.dateFormat('%y.%m/%d', this.value);
                    }
                },
                tickPositioner: function () {
                    const dataMin = this.dataMin;
                    const dataMax = this.dataMax;
                    const tickCount = 4; // 표시할 라벨 수
                    const step = (dataMax - dataMin) / (tickCount - 1);
                    const positions = [];
            
                    for (let i = 0; i < tickCount; i++) {
                        positions.push(dataMin + i * step);
                    }
            
                    return positions;
                }
            },
    
            yAxis: {
                title: {
                    text: ''
                },
                gridLineWidth: 1,
                gridLineDashStyle: 'Dash',
                showFirstLabel: false,
                showLastLabel: true,                
                opposite: true,
                minPadding: 0.1,
                maxPadding: 0.1,
                labels: {
                    useHTML: true,              
                    x: 10,
                    y: 20,
                    formatter: function() {
                        let icon = '';
                        let label = '';
                        let color = '';
                    
                        if (this.value > 80) {
                            icon = '<img src="../img/icon_extreme.svg" width="16" height="16" />';
                            label = '탐욕';
                            color = '#00A469';
                        } else if (this.value > 60) {
                            icon = '<img src="../img/icon_greed.svg" width="16" height="16" />';
                            label = '과욕';
                            color = '#EFC31A';
                        } else if (this.value > 40) {
                            icon = '<img src="../img/icon_normal.svg" width="16" height="16" />';
                            label = '보통';
                            color = '#F4A031';
                        } else if (this.value > 20) {
                            icon = '<img src="../img/icon_anxiety.svg" width="16" height="16" />';
                            label = '불안';
                            color = '#E9835B';
                        } else {
                            icon = '<img src="../img/icon_fear.svg" width="16" height="16" />';
                            label = '공포';
                            color = '#F03E4C';
                        }
                    
                        return `
                            <div style="display: flex; align-items: center; flex-direction: column; gap: 3px;">
                                ${icon}
                                 <span style="font-size: 10px; color: ${color};">${label}</span>
                            </div>
                        `;
                    }                    
                },
                tickPositions: [0, 20, 40, 60, 80, 100], 
                min: 0,
                max: 100
            },
    
            plotOptions: {
                series: {
                    lineWidth: 2, // 선의 굵기
                    marker: {
                        enabled: false,      // 기본 비활성화                   
                        states: {
                            hover: {
                                enabled: true // hover 시에만 활성화
                            }
                        },
                        symbol: 'circle',
                        radius: 4, // 지름이 8px이므로 반지름은 4
                        lineWidth: 2, // 외곽선 두께
                        lineColor: '#FFFFFF', // 외곽선 색 (예: 흰색 테두리)
                        fillColor: '#6C63FF' // 안쪽 색 (예시로 보라색 계열)
                    }
                }
            },
        };
    };

    // 마켓스코어 6개월 마켓스코어 선차트 데이터
    const scoreChartData = [
        [1644796800000, 45], [1644883200000, 42], [1644969600000, 38], [1645056000000, 25], 
        [1645142400000, 18], [1645228800000, 15], [1645315200000, 22], [1645401600000, 35],
        [1645488000000, 48], [1645574400000, 52], [1645660800000, 58], [1645747200000, 65],
        [1645833600000, 72], [1645920000000, 78], [1646006400000, 85], [1646092800000, 92],
        [1646179200000, 88], [1646265600000, 82], [1646352000000, 75], [1646438400000, 68],
        [1646524800000, 62], [1646611200000, 55], [1646697600000, 48], [1646784000000, 42],
        [1646870400000, 38], [1646956800000, 32], [1647043200000, 28], [1647129600000, 25],
        [1647216000000, 22], [1647302400000, 18], [1647388800000, 15], [1647475200000, 22],
        [1647561600000, 28], [1647648000000, 35], [1647734400000, 42], [1647820800000, 48],
        [1647907200000, 55], [1647993600000, 62], [1648080000000, 68], [1648166400000, 72],
        [1648252800000, 78], [1648339200000, 82], [1648425600000, 85], [1648512000000, 88],
        [1648598400000, 92], [1648684800000, 88], [1648771200000, 82], [1648857600000, 75],
        [1648944000000, 68]
    ];

    // 마켓스코어 6개월 마켓스코어 선차트 렌더링 함수
    const renderScoreChart = () => {
        if ($('#score_chart').length) {
            const options = getScoreChartOptions();
            options.series = [{
                name: '마켓스코어',
                data: scoreChartData
            }];
            Highcharts.chart('score_chart', options);
        }
    };

    renderScoreChart();


    // 스코어 박스 차트
    Highcharts.chart('score_box_chart', {
        chart: {            
            type: 'area',
            margin: [0, 10, 30, 10],
            backgroundColor: 'transparent'
        },
        title: {
            text: '',                
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

        tooltip: {            
            enabled: false,
        },
        
        xAxis: {
            type: 'datetime',
            showFirstLabel: true,
            showLastLabel: true,             
            startOnTick: true,   
            endOnTick: false,     
            tickWidth: 0,                
            gridLineWidth: 0,      
            minPadding: 0,
            maxPadding: 0,     
            lineColor: '#E0E3E7',
            // tickInterval: 30 * 24 * 3600 * 1000, // 약 한 달 간격
            labels: {                                    
                style: {
                    color: '#8C98A7',
                    fontSize: '12px',
                },
                formatter: function () {
                    return Highcharts.dateFormat('%y.%m', this.value);
                }
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Dash',
            showFirstLabel: false,
            showLastLabel: true,                
            opposite: true,
            minPadding: 0.1,
            maxPadding: 0.1,
            labels: {
                enabled: false
            }
        },
        
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.color('#4168F6').setOpacity(0.2).get('rgba')],
                        [1, Highcharts.color('#4168F6').setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#4168F6',
                    lineWidth: 2,
                    lineColor: '#FFFFFF'
                },
                lineWidth: 2,
                lineColor: '#4168F6',
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                threshold: null,
                dataLabels: {
                    enabled: true,
                    color: '#4168F6',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        textOutline: 'none'
                    },
                    y: -5
                }
            }
        },
        series: [{
            data:  [
                [1644969600000, 38], [1645056000000, 25], 
                [1645142400000, 18], [1645228800000, 15], [1645315200000, 22], [1645401600000, 35],
            ],
        }]
    });

    // 스코어 박스 차트
    Highcharts.chart('score_box_chart2', {
        chart: {            
            type: 'area',
            margin: [0, 10, 30, 10],
            backgroundColor: 'transparent'
        },
        title: {
            text: '',                
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

        tooltip: {            
            enabled: false,
        },
        
        xAxis: {
            type: 'datetime',
            showFirstLabel: true,
            showLastLabel: true,             
            startOnTick: true,   
            endOnTick: false,     
            tickWidth: 0,                
            gridLineWidth: 0,      
            minPadding: 0,
            maxPadding: 0,     
            lineColor: '#E0E3E7',
            // tickInterval: 30 * 24 * 3600 * 1000, // 약 한 달 간격
            labels: {                                    
                style: {
                    color: '#8C98A7',
                    fontSize: '12px',
                },
                formatter: function () {
                    return Highcharts.dateFormat('%y.%m', this.value);
                }
            },
        },
        yAxis: {
            title: {
                text: ''
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Dash',
            showFirstLabel: false,
            showLastLabel: true,                
            opposite: true,
            minPadding: 0.1,
            maxPadding: 0.1,
            labels: {
                enabled: false
            }
        },
        
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                    stops: [
                        [0, Highcharts.color('#4168F6').setOpacity(0.2).get('rgba')],
                        [1, Highcharts.color('#4168F6').setOpacity(0).get('rgba')]
                    ]
                },
                marker: {
                    enabled: true,
                    radius: 4,
                    fillColor: '#4168F6',
                    lineWidth: 2,
                    lineColor: '#FFFFFF'
                },
                lineWidth: 2,
                lineColor: '#4168F6',
                states: {
                    hover: {
                        lineWidth: 2
                    }
                },
                threshold: null,
                dataLabels: {
                    enabled: true,
                    color: '#4168F6',
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        textOutline: 'none'
                    },
                    y: -5
                }
            }
        },
        series: [{
            data:  [
                [1644969600000, 38], [1645056000000, 25], 
                [1645142400000, 18], [1645228800000, 15], [1645315200000, 22], [1645401600000, 35],
            ],
        }]
    });
});

