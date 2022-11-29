$(document).ready(function () {

    if ($('#containerM1').length) {
        // 종목추천 차트 
        Highcharts.chart('containerM1', {

            chart: {
                type: 'line',
                renderTo: 'containerM1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 80,
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

    // 종목분석
    if ($('#containerM2_1').length) {
        Highcharts.chart('containerM2_1', {
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
                width: 90,
                height: 70
            },

            title: {
                text: null
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                name: '애플',
                data: [5],
                yAxis: 0
            }]
        });
    }
    if ($('#containerM2_2').length) {
        Highcharts.chart('containerM2_2', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [100],
                yAxis: 0
            }]
        });
    }

    if ($('#containerM2_3').length) {
        Highcharts.chart('containerM2_3', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [10],
                yAxis: 0
            }]
        });
    }
    if ($('#containerM2_4').length) {
        Highcharts.chart('containerM2_4', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [90],
                yAxis: 0
            }]
        });
    }

    if ($('#containerM2_5').length) {
        Highcharts.chart('containerM2_5', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [20],
                yAxis: 0
            }]
        });
    }

    // 메인 - 전종목 투자매력도
    if ($('#containerM3_1').length) {
        Highcharts.chart('containerM3_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_1',
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    if ($('#containerM3_2').length) {
        Highcharts.chart('containerM3_2', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_2',
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
                width: 110,
                height: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    if ($('#containerM3_3').length) {
        Highcharts.chart('containerM3_3', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_3',
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
                width: 110,
                height: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    if ($('#containerM3_4').length) {
        Highcharts.chart('containerM3_4', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_4',
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
                width: 110,
                height: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    if ($('#containerM3_5').length) {
        Highcharts.chart('containerM3_5', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_5',
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
                width: 110,
                height: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    if ($('#containerM3_6').length) {
        Highcharts.chart('containerM3_6', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerM3_6',
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
                width: 110,
                height: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
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
                max: 5
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
                    lineWidth: 1,
                    fillOpacity: 0.3
                }
            },

        });
    }
    //******************************************************************************************
    //                                          메인차트 끝
    //******************************************************************************************

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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 120,
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
    if ($('#containerS1_2').length) {
        Highcharts.chart('containerS1_2', {
            chart: {
                type: 'line',
                renderTo: 'containerS1_2',
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
    if ($('#containerS2_1').length) {
        Highcharts.chart('containerS2_1', {

            chart: {
                type: 'line',
                renderTo: 'containerS2_1',
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
    if ($('#containerS2_2').length) {
        Highcharts.chart('containerS2_2', {

            chart: {
                type: 'line',
                renderTo: 'containerS2_2',
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
    if ($('#containerS2_3').length) {
        Highcharts.chart('containerS2_3', {

            chart: {
                type: 'line',
                renderTo: 'containerS2_3',
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
    if ($('#containerS2_4').length) {
        Highcharts.chart('containerS2_4', {

            chart: {
                type: 'line',
                renderTo: 'containerS2_4',
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
    if ($('#containerS2_5').length) {
        Highcharts.chart('containerS2_5', {

            chart: {
                type: 'line',
                renderTo: 'containerS2_5',
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

    // 서브 - 종목추천 투자포인트, 종목진단 area 차트    
    if ($('#containerArea_1').length) {
        Highcharts.chart('containerArea_1', {

            chart: {
                type: 'area',
                renderTo: 'containerArea_1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 200,
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
                categories: ['20.01/23','20.02/23','20.03/23','20.04/23','20.05/23', ],
                crosshair: true
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
                data: [69658, 97031, 119931, 137133, 154175]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                marginTop: 30,    
                marginBottom: 70,
                marginLeft: 60,
                marginRight: 60,
                width: 320,
                height : 320,
            },
            
            title: {
                text: ''
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '80%'
            },

            xAxis: {
                categories: ['벨류에이션', '수익 성장성', '사업 독점력', '재무 안전성', '현금 창출력'],
                tickmarkPlacement: 'on',
                lineWidth: 0
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 0,
                max: 5,
            },

            exporting: {
                enabled: false
            },

            credits: {
                enabled: false
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

    // 서브 - 종목분석 메인 gauge 차트    
    if ($('#contaanalysis1_1').length) {
        Highcharts.chart('contaanalysis1_1', {
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
                enabled: false
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [90],
                yAxis: 0
            }]
        });
    }
    if ($('#contaanalysis1_2').length) {
        Highcharts.chart('contaanalysis1_2', {
            chart: {
                type: 'gauge',
                backgroundColor: '#2C255D',
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
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [90],
                yAxis: 0
            }]
        });
    }
    if ($('#contaanalysis1_3').length) {
        Highcharts.chart('contaanalysis1_3', {
            chart: {
                type: 'gauge',
                backgroundColor: '#2C255D',
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
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [90],
                yAxis: 0
            }]
        });
    }

    // 서브 - 종목분석 메인 gauge 차트   
    if ($('#contaanalysis2_1').length) {
        Highcharts.chart('contaanalysis2_1', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [60],
                yAxis: 0
            }]
        });
    }
    if ($('#contaanalysis2_2').length) {
        Highcharts.chart('contaanalysis2_2', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [60],
                yAxis: 0
            }]
        });
    }
    if ($('#contaanalysis2_3').length) {
        Highcharts.chart('contaanalysis2_3', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [60],
                yAxis: 0
            }]
        });
    }

    // 서브 - 종목분석 view gauge 차트   
    if ($('#contaanalysisview1_1').length) {
        Highcharts.chart('contaanalysisview1_1', {
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
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>${point.y:,.0f}</b><br/>'
            },

            yAxis: [{
                min: 0,
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                        radius: '100%',
                        backgroundColor: '#FFD090',
                        baseWidth: 6,
                        topWidth: 6,
                        rearLength: '0'
                    }
                }
            },
            series: [{
                name: '애플',
                data: [90],
                yAxis: 0
            }]
        });
    }
    if ($('#contaanalysisview1_2').length) {
        Highcharts.chart('contaanalysisview1_2', {
            chart: {
                type: 'area',
                renderTo: 'contaanalysisview1_2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 200,
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
                categories: ['20.01/23','20.02/23','20.03/23','20.04/23','20.05/23', ],
                crosshair: true
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
                data: [43934, 52503, 57177, 69658, 97031]
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

    // 서브 - 종목검사 재무제표 line 차트   
    if ($('#containersummary1').length) {
        Highcharts.chart('containersummary1', {
            chart: {
                type: 'area',
                renderTo: 'containersummary1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 200,
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
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['20.01/23','20.02/23','20.03/23','20.04/23','20.05/23', ],
                crosshair: true
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
                data: [43934, 52503, 57177, 69658, 97031]
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

    // 서브 - 종목검사 > 기업개요탭 재무제표 column 차트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {
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
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['19.09/30','19.010/30','19.11/30','19.12/30','20.01/30',],
                crosshair: true
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

            title: {
                text: null
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
                data: [87, 45, 75]
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
                }
            },
        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {
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
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],


            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2017 ','2018 ','2019 ','2020 ','2021 ',],
                crosshair: true
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
                data: [87, 45, 75]
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
                }
            },
        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {
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
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],


            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['2017 ','2018 ','2019 ','2020 ','2021 ',],
                crosshair: true
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
                data: [87, 45, 75]
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
                }
            },
        });
    }

    // 서브 - 종목검사 >  배당탭 column 차트   
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2013','2014','2015','2016','2017','2018','2019','2020'],
                crosshair: true
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

            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출액',
                data: [287, 598, 834, 287, 598, 834, 442]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달</b><br/>'
            },

            xAxis: [{
                categories: ['2013','2014','2015','2016','2017','2018','2019','2020'],
                crosshair: true
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

            series: [{
                name: '매출액',
                data: [287, 598, 834,287, 598, 834, 233]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#6C63FF"],


            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} %</b><br/>'
            },

            xAxis: [{
                categories: ['2013','2014','2015','2016','2017','2018','2019','2020'],
                crosshair: true
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

            series: [{
                name: '매출액',
                data: [187, 427, 874, 127,187, 427, 874, 127]
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

    // 서브 - 종목검색 - 종목진단 > 투자매력탭 spider 차트
    if ($('#containercharm1_1').length) {

        Highcharts.chart('containercharm1_1', {
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
                marginBottom: 70,
                marginLeft: 60,
                marginRight: 60,
                width: 320,
                height : 320,
            },           

            // colors: ["#6247A8"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function() {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    return this.x + '&nbsp;&nbsp;' + imgOne + imgOne + imgOne + imgHalf + imgZero;
                }
            },

            pane: {
                size: '100%',
                center: ['50%', '50%'],
            },

            xAxis: {
                categories: ['배당매력점수', '사업독점력점수', '재무안전성점수', '수익성장성점수', '현금창출력점수'],
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
                data: [2, 3.5, 5, 0, 1],
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

    // 서브 - 종목검사 종목진단 > 투자매력탭 column 차트   
    if ($('#containeralloca_star1_1').length) {
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                crosshairs: true,                
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['시가배당률(%))'],
                crosshair: true,                
                labels: {
                    style: {
                        color: '#8380A0',
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
                data: [40]
            }, {
                name: '업종평균',
                data: [-100]
            }, {
                name: '전체평균',
                data: [-800]
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
                        color: '#8380A0',
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,                
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['배당성향(%)'],
                crosshair: true,                
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                tickInterval: 1,
                breaks: [{
                    from: 50,
                    to: 70,
                    breakSize: 10
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
                data: [87]
            }, {
                name: '업종평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [64]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['순이익 성장률(%)'],
                crosshair: true,                
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [87]
            }, {
                name: '업종평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [64]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['잉여현금 성장률(%)'],
                crosshair: true,                
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [87]
            }, {
                name: '업종평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [64]
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
    if ($('#containeralloca_star1_1_5').length) {
        Highcharts.chart('containeralloca_star1_1_5', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_1_5',
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

            colors: ["#00CCBD"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['5년평균 매출액성장률(%)'],
                crosshair: true,                
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [87]
            }, {
                name: '업종평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [64]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['5년평균 ROE(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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

            legend: {
                // enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '종목',
                data: [23]
            }, {
                name: '업종평균',
                data: [34]
            }, {
                name: '전체평균',
                data: [48]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            xAxis: [{
                categories: ['5년평균 영업이익률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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

            series: [{
                name: '종목',
                data: [23]
            }, {
                name: '업종평균',
                data: [34]
            }, {
                name: '전체평균',
                data: [48]
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
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                height: 180,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            legend: {
                enabled: false,
            },

            xAxis: [{
                categories: ['5년 평균 자산 성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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

            series: [{
                name: '종목',
                data: [23]
            }, {
                name: '업종평균',
                data: [34]
            }, {
                name: '전체평균',
                data: [48]
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

    if ($('#containeralloca_star1_3').length) {
        Highcharts.chart('containeralloca_star1_3', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_3',
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

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['자기자본비율(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [337]
            }, {
                name: '업종평균',
                data: [82]
            }, {
                name: '전체평균',
                data: [64]
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
    if ($('#containeralloca_star1_4').length) {
        Highcharts.chart('containeralloca_star1_4', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_4',
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

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['순이익 성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [45]
            }, {
                name: '업종평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        })
    }
    if ($('#containeralloca_star1_4_1').length) {
        Highcharts.chart('containeralloca_star1_4_1', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_4_1',
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

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['5년 평균 ROE(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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
                data: [45]
            }, {
                name: '업종평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
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

    if ($('#containeralloca_star1_5').length) {
        Highcharts.chart('containeralloca_star1_5', {
            chart: {
                type: 'column',
                renderTo: 'containeralloca_star1_5',
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

            colors: ["#00CCBD", "#2C235D", "#6C63FF"],

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            xAxis: [{
                categories: ['영업활동현금흐름'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#444',
                        fontSize: '0.9rem'
                    }
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

            title: {
                text: null
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
                data: [46],
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

    // 서브 - 종목검색 - 종목진단 - 경쟁사 투자매력도 spider 차트
    if ($('#charm_comp_spider_chart0').length) {
        Highcharts.chart('charm_comp_spider_chart0', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart0',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

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
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart1').length) {
        Highcharts.chart('charm_comp_spider_chart1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart1',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart2').length) {
        Highcharts.chart('charm_comp_spider_chart2', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart2',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart3').length) {
        Highcharts.chart('charm_comp_spider_chart3', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart3',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart4').length) {
        Highcharts.chart('charm_comp_spider_chart4', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart4',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart5').length) {
        Highcharts.chart('charm_comp_spider_chart5', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart5',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart6').length) {
        Highcharts.chart('charm_comp_spider_chart6', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart6',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart7').length) {
        Highcharts.chart('charm_comp_spider_chart7', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart7',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart8').length) {
        Highcharts.chart('charm_comp_spider_chart8', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart8',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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
    if ($('#charm_comp_spider_chart9').length) {
        Highcharts.chart('charm_comp_spider_chart9', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'charm_comp_spider_chart9',
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
                width: 160,
                height: 160,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            pane: {
                size: '100%'
            },

            xAxis: {
                categories: ['', '', '', '', ''],
                tickmarkPlacement: 'on',
                lineWidth: 0,
            },

            yAxis: {
                gridLineInterpolation: 'polygon',
                lineWidth: 0,
                min: 1,
                max: 5
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
                data: [3, 1, 0, 3.5, 5],
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

    // 서브 - 종목검색 - 종목진단 - 재무차트탭 line 차트
    /* 매출과 이익 */
    if ($('#containerfinance1_1').length) {
        Highcharts.chart('containerfinance1_1', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'containerfinance1_1',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#00CCBD", "#623FA8", "#FF9700"],
            title: {
                text : null,
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 백만달러</b><br/>',
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019', '2020'],
                crosshair: true,                
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value}</b><br/>백만달러',                    
                    style: {
                        color: ["#00CCBD"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value}</b><br/>백만달러',                    
                    style: {
                        color: ["#623FA8"],
                    }
                },
                opposite: true
            }],

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false
            },

            credits: {
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
                data: [150, 126, 129, 234, 228, 121,150, 126, 129, 234, 228, 121],

            }, {
                name: '영업이익',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0],

            }, {
                name: '지배지분순이익',
                type: 'line',
                yAxis: 1,
                data: [19.9, 71.5, 106.4, 29.2, 14.0, 76.0],

            }],

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
    /* 이익률 */
    if ($('#containerfinance1_2').length) {
        Highcharts.chart('containerfinance1_2', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_2',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'                
            },
            
            xAxis: [{
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} %',                    
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
                data: [29.934634, 71.53434, 106.456452, 123423429.245345, 144.3456, 176.05656],
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
    /* 부채비율과 유동비율 */
    if ($('#containerfinance1_3').length) {
        Highcharts.chart('containerfinance1_3', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_3',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],

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
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value}</b><br/> %',                    
                    style: {
                        color: ["#623FA8"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value}</b><br/> %',                    
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
    /* 주당배당금과 배당률 */
    if ($('#containerfinance1_4').length) {
        Highcharts.chart('containerfinance1_4', {
            chart: {
                type: 'column',
                zoomType: 'xy',
                renderTo: 'containerfinance1_4',
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
                marginBottom: 70,
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#00CCBD", "#623FA8"],

            title: {
                style: {
                    fontSize: '0',
                },
            },            

            xAxis: [{
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value}달러',                    
                    style: {
                        color: ["#00CCBD"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value} %',                    
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
                name: '주당배당금',
                type: 'column',
                data: [117.0, 126.9, 129.5, 234.5, 228.2, 121.5],
                tooltip: {
                    shared: true,
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'                    
                },

            }, {
                name: '배당수익률',
                type: 'line',
                yAxis: 1,
                data: [49, 71.5, 20.4, 92, 44.0, 76.0],
                tooltip: {                    
                    shared: true,
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
    /* ROE 과 PBR */
    if ($('#containerfinance1_5').length) {
        Highcharts.chart('containerfinance1_5', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_5',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],

            title: {
                style: {
                    fontSize: '0',
                },
            },
            
            xAxis: [{
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value} %',                    
                    style: {
                        color: ["#623FA8"],
                    }
                },
            }, { // Secondary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value} 배',
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
                name: '자기자본이익률',
                data: [42, 52, 57, 69, 97, 11],                
                tooltip: {              
                    shared: true,      
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'                    
                },
            }, {
                name: '주가순자산배수',
                yAxis: 1,
                data: [16, 64, 42, 51, 30, 82],
                tooltip: {
                    shared: true,    
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
    /* 운전자본 회전일수 */
    if ($('#containerfinance1_6').length) {
        Highcharts.chart('containerfinance1_6', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_6',
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

            colors: ["#00CCBD", "#623FA8", "#FF9700"],

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
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text : null,
                },
                labels: {
                    format: '{value} 일',
                    style: {
                        color: ["#623FA8"],
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
    /* 현금흐름표 */
    if ($('#containerfinance1_7').length) {
        Highcharts.chart('containerfinance1_7', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_7',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#00CCBD", "#623FA8", "#FF9700"],

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
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value}</b><br/>백만달러',                
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
                data: [34565467757.8234254, 71.5000000000, 106.4000000000, 129.2000000000, 144.0000000000, 176.0000000000],
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
    /* 주가수익배수(PER) */
    if ($('#containerfinance1_8').length) {
        Highcharts.chart('containerfinance1_8', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_8',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],
            
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
                categories: ['15.23','16','17','18','19','20'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 배',                              
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
    /* 주가와 주당순이익 */
    if ($('#containerfinance1_9').length) {
        Highcharts.chart('containerfinance1_9', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_9',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],

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
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],
    
            yAxis: {
                labels: {
                    format: '{value} 달러',                            
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
    /* 주가순자산배수(PBR) */
    if ($('#containerfinance1_10').length) {
        Highcharts.chart('containerfinance1_10', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_10',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'                
            },
            
            xAxis: [{
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],
    
            yAxis: {
                labels: {
                    format: '{value} 배',                              
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
                data: []
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
    /* 주가와 주당순자산 */
    if ($('#containerfinance1_11').length) {
        Highcharts.chart('containerfinance1_11', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containerfinance1_11',
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
                height: 300,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#623FA8", "#FF9700"],

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
                categories: ['15','16','17','18','19','20'],
                crosshair: true
            }],
    
            yAxis: {
                labels: {
                    format: '{value} 달러',                                 
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
                data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0],
                name: '주당순자산'
            }, {
                name: '주가',
                type: 'line',
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

    // 서브 - 서비스 소개 종목추천 line 차트
    if ($('#containerservice1').length) {
        Highcharts.chart('containerservice1', {
            chart: {
                type: 'line',
                renderTo: 'containerservice1',
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
            colors: ["#877edf"],
            title: {                
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 백만달러</b><br/>',            
            },

            xAxis: {
                title: {
                    text: null
                },
                categories: ['2005', '2006', '2007', '2008', '2009','2010','2011', '2012', '2013', '2014', '2015','2016', '2017', '2018', '2019', '2020'],
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
                data: [434, 523, 571, 658, 971, 119, 113, 175, 934, 503, 577, 658, 931, 1191, 1333, 1575]
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
    // 서브 - 서비스 소개 종목분석 gauge 차트
    if ($('#containerservice2').length) {
        Highcharts.chart('containerservice2', {
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
                width: 90,
                height: 70
            },

            title: {
                text: ''
            },

            pane: [{
                startAngle: -90,
                endAngle: 90,
                background: null,
                center: ['50%', '100%'],
                size: 50
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
                max: 100,
                // minorTickPosition: 'outside',
                // tickPosition: 'outside',
                labels: {
                    enabled: false,
                },
                plotBands: [{
                    from: 0,
                    to: 20,
                    color: '#B6E8CF',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 20,
                    to: 80,
                    color: '#00CCBD',
                    innerRadius: '100%',
                    outerRadius: '150%'
                }, {
                    from: 80,
                    to: 100,
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
                name: '애플',
                data: [60],
                yAxis: 0
            }]
        });
    }
    // 서브 - 서비스 소개 투자매력도 line 차트
    if ($('#containerservice3_1').length) {
        Highcharts.chart('containerservice3_1', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerservice3_1',
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
                width: 120,
                height: 120,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            
            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function() {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    return this.x + '&nbsp;&nbsp;' + imgOne + imgOne + imgOne + imgOne + imgZero;
                }
            },

            pane: {
                size: '100%',
                center: ['60%', '50%'],
            },

            xAxis: {
                categories: ['', '', '', '', ''],
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

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '',
                data: [4, 4, 4, 4, 5],
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
    if ($('#containerservice3_2').length) {
        Highcharts.chart('containerservice3_2', {
            chart: {
                polar: true,
                type: 'area',
                renderTo: 'containerservice3_2',
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
                width: 120,
                height: 120,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: '',
                y: 0,
            },

            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function() {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    return this.x + '&nbsp;&nbsp;' + imgOne + imgOne + imgOne + imgOne + imgOne;
                }
            },

            pane: {
                size: '100%',
                center: ['60%', '50%'],
            },

            xAxis: {
                categories: ['', '', '', '', ''],
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

            legend: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '',
                data: [5, 5, 5, 5, 5],
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

    // 서브 - 서비스 소개 가이드  line 차트
    if ($('#containerservice4_1').length) {
        Highcharts.chart('containerservice4_1', {
            chart: {
                type: 'line',
                renderTo: 'containerservice4_1',
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
                marginTop: 40,                    
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#77a1e5", "#1aadce", "#910000"],

            title: {
                text: null
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 백만달러</b><br/>',            
            },

            xAxis: {
                categories: ['2013', '2014', '2015','2016', '2017', '2018', '2019', '2020'],
                min: 1,                                        
            },

            yAxis: {
                title: {
                    text: null
                },
                labels: {
                    format: '{value}</b><br/>백만달러',                                    
                },
            },

            exporting: {
                enabled: false
            },

            credits: {
                enabled: false
            },

            series: [{
                name: '매출액',
                data: [443, 532, 527, 619, 971, 119, 133, 155]
            }, {
                name: '영업이익',
                data: [234, 242, 292, 251, 130, 302, 381, 40]
            }, {
                name: '순이익',
                data: [143, 217, 165, 197, 201, 243, 347, 387]
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
});
// 0219 17:00