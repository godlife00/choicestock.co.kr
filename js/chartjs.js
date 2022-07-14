$(document).ready(function () {

    // ***************************** //
    // **********  종목추천 ********* //
    // ***************************** //    
    // 서브 - 종목추천 투자포인트, 종목진단 line 차트    
    if ($('#containerArea_1').length) {
        Highcharts.stockChart('containerArea_1', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginRight: 40,
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
                title: {
                    text: null
                },  
                gridLineWidth: 0,                                                
                lineWidth: 0,
                tickWidth: 0,
                labels: {
                    enabled: false
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
                data :[[1147651200000, 23.15],[1147737600000, 23.01],[1147824000000, 22.73],[1147910400000, 22.83],[1147996800000, 22.56],[1148256000000, 22.88],[1148342400000, 22.79],[1148428800000, 23.50],[1148515200000, 23.74],[1148601600000, 23.72],[1148947200000, 23.15],[1149033600000, 22.65],[1149120000000, 22.82],[1149206400000, 22.76],[1149465600000, 22.50],[1149552000000, 22.13],[1149638400000, 22.04],[1149724800000, 22.11],[1149811200000, 21.92],[1150070400000, 21.71],[1150156800000, 21.51],[1150243200000, 21.88],[1150329600000, 22.07],[1150416000000, 22.10],[1150675200000, 22.55],[1150761600000, 22.56],[1150848000000, 23.08],[1150934400000, 22.88],[1151020800000, 22.50],[1151280000000, 22.82],[1151366400000, 22.86],[1151452800000, 23.16],[1151539200000, 23.47],[1151625600000, 23.30],[1151884800000, 23.70],[1152057600000, 23.35],[1152144000000, 23.48],[1152230400000, 23.30],[1152489600000, 23.50],[1152576000000, 23.10],[1152662400000, 22.64],[1152748800000, 22.26],[1152835200000, 22.29],[1153094400000, 22.48],[1153180800000, 22.74],[1153267200000, 23.40],[1153353600000, 22.85],[1153440000000, 23.87],[1153699200000, 24.00],[1153785600000, 24.22],[1153872000000, 24.37],[1153958400000, 23.87],[1154044800000, 24.25],[1154304000000, 24.06],[1154390400000, 23.99],[1154476800000, 24.30],[1154563200000, 24.21],[1154649600000, 24.29],[1154908800000, 24.22],[1154995200000, 24.34],[1155081600000, 24.44],[1155168000000, 24.46],[1155254400000, 24.43],[1155513600000, 24.53],[1155600000000, 24.62],[1155686400000, 24.70],[1155772800000, 24.70],[1155859200000, 25.79],[1156118400000, 26.12],[1156204800000, 25.62],[1156291200000, 25.67],[1156377600000, 25.74],[1156464000000, 25.85],[1156723200000, 25.95],[1156809600000, 25.84],[1156896000000, 25.80],[1156982400000, 25.70],[1157068800000, 25.84],[1157414400000, 25.61],[1157500800000, 25.61],[1157587200000, 25.43],[1157673600000, 25.60],[1157932800000, 25.91],[1158019200000, 25.93],[1158105600000, 25.98],[1158192000000, 26.33],[1158278400000, 26.85],[1158537600000, 26.79],[1158624000000, 26.86],[1158710400000, 27.18],[1158796800000, 26.90],[1158883200000, 26.66],[1159142400000, 26.95],[1159228800000, 27.20],[1159315200000, 27.44],[1159401600000, 27.40],[1159488000000, 27.35],[1159747200000, 27.36],[1159833600000, 27.37],[1159920000000, 27.94],[1160006400000, 27.92],[1160092800000, 27.87],[1160352000000, 27.72],[1160438400000, 27.69],[1160524800000, 27.54],[1160611200000, 28.22],[1160697600000, 28.37],[1160956800000, 28.45],[1161043200000, 28.44],[1161129600000, 28.52],[1161216000000, 28.29],[1161302400000, 28.43],[1161561600000, 28.45],[1161648000000, 28.28],[1161734400000, 28.31],[1161820800000, 28.35],[1161907200000, 28.34],[1162166400000, 28.53],[1162252800000, 28.71],[1162339200000, 28.81],[1162425600000, 28.77],[1162512000000, 28.73],[1162771200000, 28.84],[1162857600000, 28.95],[1162944000000, 28.98],[1163030400000, 29.26],[1163116800000, 29.24],[1163376000000, 29.35],[1163462400000, 29.23],[1163548800000, 29.12],[1163635200000, 29.47],[1163721600000, 29.40],[1163980800000, 29.89],[1164067200000, 29.92],[1164153600000, 29.92],[1164326400000, 29.76],[1164585600000, 29.48],[1164672000000, 29.39],[1164758400000, 29.57],[1164844800000, 29.36],[1164931200000, 29.12],[1165190400000, 29.33],[1165276800000, 29.13],[1165363200000, 28.99],[1165449600000, 28.85],[1165536000000, 29.40],[1165795200000, 29.54],[1165881600000, 29.43],[1165968000000, 29.55],[1166054400000, 30.07],[1166140800000, 30.19],[1166400000000, 29.89],[1166486400000, 29.99],[1166572800000, 30.09],[1166659200000, 29.98],[1166745600000, 29.64],[1167091200000, 29.99],[1167177600000, 30.02],[1167264000000, 29.98],[1167350400000, 29.86],[1167782400000, 29.86],[1167868800000, 29.81],[1167955200000, 29.64],[1168214400000, 29.93],[1168300800000, 29.96],[1168387200000, 29.66],[1168473600000, 30.70],[1168560000000, 31.21],[1168905600000, 31.16],[1168992000000, 31.10],[1169078400000, 31.00],[1169164800000, 31.11],[1169424000000, 30.72],[1169510400000, 30.74],[1169596800000, 31.09],[1169683200000, 30.45],[1169769600000, 30.60],[1170028800000, 30.53],[1170115200000, 30.48],[1170201600000, 30.86],[1170288000000, 30.56],[1170374400000, 30.19],[1170633600000, 29.61],[1170720000000, 29.51],[1170806400000, 29.37],[1170892800000, 29.26],[1170979200000, 28.98],[1171238400000, 28.94],[1171324800000, 29.03],[1171411200000, 29.40],[1171497600000, 29.46],[1171584000000, 28.74],[1171929600000, 28.83],[1172016000000, 29.35],[1172102400000, 29.39],[1172188800000, 28.90],[1172448000000, 29.07],[1172534400000, 27.87],[1172620800000, 28.17],[1172707200000, 28.09],[1172793600000, 27.76],[1173052800000, 27.55],[1173139200000, 27.83],[1173225600000, 27.61],[1173312000000, 27.32],[1173398400000, 27.29],[1173657600000, 27.44],[1173744000000, 26.72],[1173830400000, 27.40],[1173916800000, 27.28],[1174003200000, 27.33],[1174262400000, 27.83],[1174348800000, 27.84],[1174435200000, 28.52],[1174521600000, 28.27],[1174608000000, 28.02],[1174867200000, 28.22],[1174953600000, 27.72],[1175040000000, 27.64],[1175126400000, 27.75],[1175212800000, 27.87],[1175472000000, 27.74],[1175558400000, 27.87],[1175644800000, 28.50],[1175731200000, 28.55],[1176076800000, 28.57],[1176163200000, 28.40],[1176249600000, 28.11],[1176336000000, 28.54],[1176422400000, 28.61],[1176681600000, 28.73],[1176768000000, 28.85],[1176854400000, 28.60],[1176940800000, 28.69],[1177027200000, 29.02],[1177286400000, 28.78],[1177372800000, 28.79],[1177459200000, 28.99],[1177545600000, 29.10],[1177632000000, 30.12],[1177891200000, 29.94],[1177977600000, 30.40],[1178064000000, 30.61],[1178150400000, 30.97],[1178236800000, 30.56],[1178496000000, 30.71],[1178582400000, 30.75],[1178668800000, 30.78],[1178755200000, 30.58],[1178841600000, 30.89],[1179100800000, 30.97],[1179187200000, 30.90],[1179273600000, 31.07],[1179360000000, 30.98],[1179446400000, 30.83],[1179705600000, 31.05],[1179792000000, 30.69],[1179878400000, 30.58],[1179964800000, 30.17],[1180051200000, 30.48],[1180396800000, 30.79],[1180483200000, 31.11],[1180569600000, 30.69],[1180656000000, 30.59],[1180915200000, 30.72],[1181001600000, 30.58],[1181088000000, 30.29],[1181174400000, 29.62],[1181260800000, 30.05],[1181520000000, 30.02],[1181606400000, 29.85],[1181692800000, 30.39],[1181779200000, 30.52],[1181865600000, 30.49],[1182124800000, 30.51],[1182211200000, 30.46],[1182297600000, 30.01],[1182384000000, 30.22],[1182470400000, 29.49],[1182729600000, 29.49],[1182816000000, 29.52],[1182902400000, 29.87],[1182988800000, 29.83],[1183075200000, 29.47],[1183334400000, 29.74],[1183420800000, 30.02],[1183593600000, 29.99],[1183680000000, 29.97],[1183939200000, 29.87],[1184025600000, 29.33],[1184112000000, 29.49],[1184198400000, 30.07],[1184284800000, 29.82],[1184544000000, 30.03],[1184630400000, 30.78],[1184716800000, 30.92],[1184803200000, 31.51],[1184889600000, 31.16],[1185148800000, 31.19],[1185235200000, 30.80],[1185321600000, 30.71],[1185408000000, 29.98],[1185494400000, 29.39],[1185753600000, 29.40],[1185840000000, 28.99],[1185926400000, 29.30],[1186012800000, 29.52],[1186099200000, 28.96],[1186358400000, 29.54],[1186444800000, 29.55],[1186531200000, 30.00],[1186617600000, 29.30],[1186704000000, 28.71],[1186963200000, 28.63],[1187049600000, 28.27],[1187136000000, 28.10],[1187222400000, 27.81],[1187308800000, 28.25],[1187568000000, 28.26],[1187654400000, 28.07],[1187740800000, 28.22],[1187827200000, 28.30],[1187913600000, 28.81],[1188172800000, 28.49],[1188259200000, 27.93],[1188345600000, 28.59],[1188432000000, 28.45],[1188518400000, 28.73],[1188864000000, 28.81],[1188950400000, 28.48],[1189036800000, 28.91],[1189123200000, 28.44],[1189382400000, 28.48],[1189468800000, 28.93],[1189555200000, 28.93],[1189641600000, 29.16],[1189728000000, 29.04],[1189987200000, 28.72],[1190073600000, 28.93],[1190160000000, 28.67],[1190246400000, 28.42],[1190332800000, 28.65],[1190592000000, 29.08],[1190678400000, 29.56],[1190764800000, 29.50],[1190851200000, 29.49],[1190937600000, 29.46],[1191196800000, 29.77],[1191283200000, 29.70],[1191369600000, 29.45],[1191456000000, 29.71],[1191542400000, 29.84],[1191801600000, 29.84],[1191888000000, 30.10],[1191974400000, 30.23],[1192060800000, 29.91],[1192147200000, 30.17],[1192406400000, 30.04],[1192492800000, 30.32],[1192579200000, 31.08],[1192665600000, 31.16],[1192752000000, 30.17],[1193011200000, 30.51],[1193097600000, 30.90],[1193184000000, 31.25],[1193270400000, 31.99],[1193356800000, 35.03],[1193616000000, 34.57],[1193702400000, 35.57],[1193788800000, 36.81],[1193875200000, 37.06],[1193961600000, 37.06],[1194220800000, 36.73],[1194307200000, 36.41],[1194393600000, 35.52],[1194480000000, 34.74],[1194566400000, 33.73],[1194825600000, 33.38],[1194912000000, 34.46],[1194998400000, 33.93],[1195084800000, 33.76],[1195171200000, 34.09],[1195430400000, 33.96],[1195516800000, 34.58],[1195603200000, 34.23],[1195776000000, 34.11],[1196035200000, 32.97],[1196121600000, 33.06],[1196208000000, 33.70],[1196294400000, 33.59],[1196380800000, 33.60],[1196640000000, 32.92],[1196726400000, 32.77],[1196812800000, 34.15],[1196899200000, 34.55],[1196985600000, 34.53],[1197244800000, 34.76],[1197331200000, 34.10],[1197417600000, 34.47],[1197504000000, 35.22],[1197590400000, 35.31],[1197849600000, 34.39],[1197936000000, 34.74],[1198022400000, 34.79],[1198108800000, 35.52],[1198195200000, 36.06],[1198454400000, 36.58],[1198627200000, 36.61],[1198713600000, 35.97],[1198800000000, 36.12],[1199059200000, 35.60],[1199232000000, 35.22],[1199318400000, 35.37],[1199404800000, 34.38],[1199664000000, 34.61],[1199750400000, 33.45],[1199836800000, 34.44],[1199923200000, 34.33],[1200009600000, 33.91],[1200268800000, 34.39],[1200355200000, 34.00],[1200441600000, 33.23],[1200528000000, 33.11],[1200614400000, 33.01],[1200960000000, 31.99],[1201046400000, 31.93],[1201132800000, 33.25],[1201219200000, 32.94],[1201478400000, 32.72],[1201564800000, 32.60],[1201651200000, 32.20],[1201737600000, 32.60],[1201824000000, 30.45]],
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
                marginRight: 40,
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
                labels: {
                    formatter: function() {
                        return Highcharts.dateFormat('%Y', this.value);
                    },                    
                },                
                crosshair: true        
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    // format: '{value}</b><br/>백만달러',
                    style: {
                        color: ["#959393"],
                    },
                    x: 30
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    // format: '{value}</b><br/>백만달러(USD)',
                    style: {
                        color: ["#623FA8"],
                    },
                },
                opposite: false
            }],

            series: [{
                style: {
                    fontSize: '0',
                },
                name: '매출액',
                type: 'column',
                data :[[1147651200000, 23.15],[1147737600000, 23.01],[1147824000000, 22.73],[1147910400000, 22.83],[1147996800000, 22.56],[1148256000000, 22.88],[1148342400000, 22.79],[1148428800000, 23.50],[1148515200000, 23.74],[1148601600000, 23.72],[1148947200000, 23.15],[1149033600000, 22.65],[1149120000000, 22.82],[1149206400000, 22.76],[1149465600000, 22.50],[1149552000000, 22.13],[1149638400000, 22.04],[1149724800000, 22.11],[1149811200000, 21.92],[1150070400000, 21.71],[1150156800000, 21.51],[1150243200000, 21.88],[1150329600000, 22.07],[1150416000000, 22.10],[1150675200000, 22.55],[1150761600000, 22.56],[1150848000000, 23.08],[1150934400000, 22.88],[1151020800000, 22.50],[1151280000000, 22.82],[1151366400000, 22.86],[1151452800000, 23.16],[1151539200000, 23.47],[1151625600000, 23.30],[1151884800000, 23.70],[1152057600000, 23.35],[1152144000000, 23.48],[1152230400000, 23.30],[1152489600000, 23.50],[1152576000000, 23.10],[1152662400000, 22.64],[1152748800000, 22.26],[1152835200000, 22.29],[1153094400000, 22.48],[1153180800000, 22.74],[1153267200000, 23.40],[1153353600000, 22.85],[1153440000000, 23.87],[1153699200000, 24.00],[1153785600000, 24.22],[1153872000000, 24.37],[1153958400000, 23.87],[1154044800000, 24.25],[1154304000000, 24.06],[1154390400000, 23.99],[1154476800000, 24.30],[1154563200000, 24.21],[1154649600000, 24.29],[1154908800000, 24.22],[1154995200000, 24.34],[1155081600000, 24.44],[1155168000000, 24.46],[1155254400000, 24.43],[1155513600000, 24.53],[1155600000000, 24.62],[1155686400000, 24.70],[1155772800000, 24.70],[1155859200000, 25.79],[1156118400000, 26.12],[1156204800000, 25.62],[1156291200000, 25.67],[1156377600000, 25.74],[1156464000000, 25.85],[1156723200000, 25.95],[1156809600000, 25.84],[1156896000000, 25.80],[1156982400000, 25.70],[1157068800000, 25.84],[1157414400000, 25.61],[1157500800000, 25.61],[1157587200000, 25.43],[1157673600000, 25.60],[1157932800000, 25.91],[1158019200000, 25.93],[1158105600000, 25.98],[1158192000000, 26.33],[1158278400000, 26.85],[1158537600000, 26.79],[1158624000000, 26.86],[1158710400000, 27.18],[1158796800000, 26.90],[1158883200000, 26.66],[1159142400000, 26.95],[1159228800000, 27.20],[1159315200000, 27.44],[1159401600000, 27.40],[1159488000000, 27.35],[1159747200000, 27.36],[1159833600000, 27.37],[1159920000000, 27.94],[1160006400000, 27.92],[1160092800000, 27.87],[1160352000000, 27.72],[1160438400000, 27.69],[1160524800000, 27.54],[1160611200000, 28.22],[1160697600000, 28.37],[1160956800000, 28.45],[1161043200000, 28.44],[1161129600000, 28.52],[1161216000000, 28.29],[1161302400000, 28.43],[1161561600000, 28.45],[1161648000000, 28.28],[1161734400000, 28.31],[1161820800000, 28.35],[1161907200000, 28.34],[1162166400000, 28.53],[1162252800000, 28.71],[1162339200000, 28.81],[1162425600000, 28.77],[1162512000000, 28.73],[1162771200000, 28.84],[1162857600000, 28.95],[1162944000000, 28.98],[1163030400000, 29.26],[1163116800000, 29.24],[1163376000000, 29.35],[1163462400000, 29.23],[1163548800000, 29.12],[1163635200000, 29.47],[1163721600000, 29.40],[1163980800000, 29.89],[1164067200000, 29.92],[1164153600000, 29.92],[1164326400000, 29.76],[1164585600000, 29.48],[1164672000000, 29.39],[1164758400000, 29.57],[1164844800000, 29.36],[1164931200000, 29.12],[1165190400000, 29.33],[1165276800000, 29.13],[1165363200000, 28.99],[1165449600000, 28.85],[1165536000000, 29.40],[1165795200000, 29.54],[1165881600000, 29.43],[1165968000000, 29.55],[1166054400000, 30.07],[1166140800000, 30.19],[1166400000000, 29.89],[1166486400000, 29.99],[1166572800000, 30.09],[1166659200000, 29.98],[1166745600000, 29.64],[1167091200000, 29.99],[1167177600000, 30.02],[1167264000000, 29.98],[1167350400000, 29.86],[1167782400000, 29.86],[1167868800000, 29.81],[1167955200000, 29.64],[1168214400000, 29.93],[1168300800000, 29.96],[1168387200000, 29.66],[1168473600000, 30.70],[1168560000000, 31.21],[1168905600000, 31.16],[1168992000000, 31.10],[1169078400000, 31.00],[1169164800000, 31.11],[1169424000000, 30.72],[1169510400000, 30.74],[1169596800000, 31.09],[1169683200000, 30.45],[1169769600000, 30.60],[1170028800000, 30.53],[1170115200000, 30.48],[1170201600000, 30.86],[1170288000000, 30.56],[1170374400000, 30.19],[1170633600000, 29.61],[1170720000000, 29.51],[1170806400000, 29.37],[1170892800000, 29.26],[1170979200000, 28.98],[1171238400000, 28.94],[1171324800000, 29.03],[1171411200000, 29.40],[1171497600000, 29.46],[1171584000000, 28.74],[1171929600000, 28.83],[1172016000000, 29.35],[1172102400000, 29.39],[1172188800000, 28.90],[1172448000000, 29.07],[1172534400000, 27.87],[1172620800000, 28.17],[1172707200000, 28.09],[1172793600000, 27.76],[1173052800000, 27.55],[1173139200000, 27.83],[1173225600000, 27.61],[1173312000000, 27.32],[1173398400000, 27.29],[1173657600000, 27.44],[1173744000000, 26.72],[1173830400000, 27.40],[1173916800000, 27.28],[1174003200000, 27.33],[1174262400000, 27.83],[1174348800000, 27.84],[1174435200000, 28.52],[1174521600000, 28.27],[1174608000000, 28.02],[1174867200000, 28.22],[1174953600000, 27.72],[1175040000000, 27.64],[1175126400000, 27.75],[1175212800000, 27.87],[1175472000000, 27.74],[1175558400000, 27.87],[1175644800000, 28.50],[1175731200000, 28.55],[1176076800000, 28.57],[1176163200000, 28.40],[1176249600000, 28.11],[1176336000000, 28.54],[1176422400000, 28.61],[1176681600000, 28.73],[1176768000000, 28.85],[1176854400000, 28.60],[1176940800000, 28.69],[1177027200000, 29.02],[1177286400000, 28.78],[1177372800000, 28.79],[1177459200000, 28.99],[1177545600000, 29.10],[1177632000000, 30.12],[1177891200000, 29.94],[1177977600000, 30.40],[1178064000000, 30.61],[1178150400000, 30.97],[1178236800000, 30.56],[1178496000000, 30.71],[1178582400000, 30.75],[1178668800000, 30.78],[1178755200000, 30.58],[1178841600000, 30.89],[1179100800000, 30.97],[1179187200000, 30.90],[1179273600000, 31.07],[1179360000000, 30.98],[1179446400000, 30.83],[1179705600000, 31.05],[1179792000000, 30.69],[1179878400000, 30.58],[1179964800000, 30.17],[1180051200000, 30.48],[1180396800000, 30.79],[1180483200000, 31.11],[1180569600000, 30.69],[1180656000000, 30.59],[1180915200000, 30.72],[1181001600000, 30.58],[1181088000000, 30.29],[1181174400000, 29.62],[1181260800000, 30.05],[1181520000000, 30.02],[1181606400000, 29.85],[1181692800000, 30.39],[1181779200000, 30.52],[1181865600000, 30.49],[1182124800000, 30.51],[1182211200000, 30.46],[1182297600000, 30.01],[1182384000000, 30.22],[1182470400000, 29.49],[1182729600000, 29.49],[1182816000000, 29.52],[1182902400000, 29.87],[1182988800000, 29.83],[1183075200000, 29.47],[1183334400000, 29.74],[1183420800000, 30.02],[1183593600000, 29.99],[1183680000000, 29.97],[1183939200000, 29.87],[1184025600000, 29.33],[1184112000000, 29.49],[1184198400000, 30.07],[1184284800000, 29.82],[1184544000000, 30.03],[1184630400000, 30.78],[1184716800000, 30.92],[1184803200000, 31.51],[1184889600000, 31.16],[1185148800000, 31.19],[1185235200000, 30.80],[1185321600000, 30.71],[1185408000000, 29.98],[1185494400000, 29.39],[1185753600000, 29.40],[1185840000000, 28.99],[1185926400000, 29.30],[1186012800000, 29.52],[1186099200000, 28.96],[1186358400000, 29.54],[1186444800000, 29.55],[1186531200000, 30.00],[1186617600000, 29.30],[1186704000000, 28.71],[1186963200000, 28.63],[1187049600000, 28.27],[1187136000000, 28.10],[1187222400000, 27.81],[1187308800000, 28.25],[1187568000000, 28.26],[1187654400000, 28.07],[1187740800000, 28.22],[1187827200000, 28.30],[1187913600000, 28.81],[1188172800000, 28.49],[1188259200000, 27.93],[1188345600000, 28.59],[1188432000000, 28.45],[1188518400000, 28.73],[1188864000000, 28.81],[1188950400000, 28.48],[1189036800000, 28.91],[1189123200000, 28.44],[1189382400000, 28.48],[1189468800000, 28.93],[1189555200000, 28.93],[1189641600000, 29.16],[1189728000000, 29.04],[1189987200000, 28.72],[1190073600000, 28.93],[1190160000000, 28.67],[1190246400000, 28.42],[1190332800000, 28.65],[1190592000000, 29.08],[1190678400000, 29.56],[1190764800000, 29.50],[1190851200000, 29.49],[1190937600000, 29.46],[1191196800000, 29.77],[1191283200000, 29.70],[1191369600000, 29.45],[1191456000000, 29.71],[1191542400000, 29.84],[1191801600000, 29.84],[1191888000000, 30.10],[1191974400000, 30.23],[1192060800000, 29.91],[1192147200000, 30.17],[1192406400000, 30.04],[1192492800000, 30.32],[1192579200000, 31.08],[1192665600000, 31.16],[1192752000000, 30.17],[1193011200000, 30.51],[1193097600000, 30.90],[1193184000000, 31.25],[1193270400000, 31.99],[1193356800000, 35.03],[1193616000000, 34.57],[1193702400000, 35.57],[1193788800000, 36.81],[1193875200000, 37.06],[1193961600000, 37.06],[1194220800000, 36.73],[1194307200000, 36.41],[1194393600000, 35.52],[1194480000000, 34.74],[1194566400000, 33.73],[1194825600000, 33.38],[1194912000000, 34.46],[1194998400000, 33.93],[1195084800000, 33.76],[1195171200000, 34.09],[1195430400000, 33.96],[1195516800000, 34.58],[1195603200000, 34.23],[1195776000000, 34.11],[1196035200000, 32.97],[1196121600000, 33.06],[1196208000000, 33.70],[1196294400000, 33.59],[1196380800000, 33.60],[1196640000000, 32.92],[1196726400000, 32.77],[1196812800000, 34.15],[1196899200000, 34.55],[1196985600000, 34.53],[1197244800000, 34.76],[1197331200000, 34.10],[1197417600000, 34.47],[1197504000000, 35.22],[1197590400000, 35.31],[1197849600000, 34.39],[1197936000000, 34.74],[1198022400000, 34.79],[1198108800000, 35.52],[1198195200000, 36.06],[1198454400000, 36.58],[1198627200000, 36.61],[1198713600000, 35.97],[1198800000000, 36.12],[1199059200000, 35.60],[1199232000000, 35.22],[1199318400000, 35.37],[1199404800000, 34.38],[1199664000000, 34.61],[1199750400000, 33.45],[1199836800000, 34.44],[1199923200000, 34.33],[1200009600000, 33.91],[1200268800000, 34.39],[1200355200000, 34.00],[1200441600000, 33.23],[1200528000000, 33.11],[1200614400000, 33.01],[1200960000000, 31.99],[1201046400000, 31.93],[1201132800000, 33.25],[1201219200000, 32.94],[1201478400000, 32.72],[1201564800000, 32.60],[1201651200000, 32.20],[1201737600000, 32.60],[1201824000000, 30.45]],
            }, {
                name: '영업이익',
                type: 'line',
                yAxis: 1,
                data : [[1147651200000, 67.79],[1147737600000, 64.98],[1147824000000, 65.26],[1147910400000, 63.18],[1147996800000, 64.51],[1148256000000, 63.38],[1148342400000, 63.15],[1148428800000, 63.34],[1148515200000, 64.33],[1148601600000, 63.55],[1148947200000, 61.22],[1149033600000, 59.77],[1149120000000, 62.17],[1149206400000, 61.66],[1149465600000, 60.00],[1149552000000, 59.72],[1149638400000, 58.56],[1149724800000, 60.76],[1149811200000, 59.24],[1150070400000, 57.00],[1150156800000, 58.33],[1150243200000, 57.61],[1150329600000, 59.38],[1150416000000, 57.56],[1150675200000, 57.20],[1150761600000, 57.47],[1150848000000, 57.86],[1150934400000, 59.58],[1151020800000, 58.83],[1151280000000, 58.99],[1151366400000, 57.43],[1151452800000, 56.02],[1151539200000, 58.97],[1151625600000, 57.27],[1151884800000, 57.95],[1152057600000, 57.00],[1152144000000, 55.77],[1152230400000, 55.40],[1152489600000, 55.00],[1152576000000, 55.65],[1152662400000, 52.96],[1152748800000, 52.25],[1152835200000, 50.67],[1153094400000, 52.37],[1153180800000, 52.90],[1153267200000, 54.10],[1153353600000, 60.50],[1153440000000, 60.72],[1153699200000, 61.42],[1153785600000, 61.93],[1153872000000, 63.87],[1153958400000, 63.40],[1154044800000, 65.59],[1154304000000, 67.96],[1154390400000, 67.18],[1154476800000, 68.16],[1154563200000, 69.59],[1154649600000, 68.30],[1154908800000, 67.21],[1154995200000, 64.78],[1155081600000, 63.59],[1155168000000, 64.07],[1155254400000, 63.65],[1155513600000, 63.94],[1155600000000, 66.45],[1155686400000, 67.98],[1155772800000, 67.59],[1155859200000, 67.91],[1156118400000, 66.56],[1156204800000, 67.62],[1156291200000, 67.31],[1156377600000, 67.81],[1156464000000, 68.75],[1156723200000, 66.98],[1156809600000, 66.48],[1156896000000, 66.96],[1156982400000, 67.85],[1157068800000, 68.38],[1157414400000, 71.48],[1157500800000, 70.03],[1157587200000, 72.80],[1157673600000, 72.52],[1157932800000, 72.50],[1158019200000, 72.63],[1158105600000, 74.20],[1158192000000, 74.17],[1158278400000, 74.10],[1158537600000, 73.89],[1158624000000, 73.77],[1158710400000, 75.26],[1158796800000, 74.65],[1158883200000, 73.00],[1159142400000, 75.75],[1159228800000, 77.61],[1159315200000, 76.41],[1159401600000, 77.01],[1159488000000, 76.98],[1159747200000, 74.86],[1159833600000, 74.08],[1159920000000, 75.38],[1160006400000, 74.83],[1160092800000, 74.22],[1160352000000, 74.63],[1160438400000, 73.81],[1160524800000, 73.23],[1160611200000, 75.26],[1160697600000, 75.02],[1160956800000, 75.40],[1161043200000, 74.29],[1161129600000, 74.53],[1161216000000, 78.99],[1161302400000, 79.95],[1161561600000, 81.46],[1161648000000, 81.05],[1161734400000, 81.68],[1161820800000, 82.19],[1161907200000, 80.41],[1162166400000, 80.42],[1162252800000, 81.08],[1162339200000, 79.16],[1162425600000, 78.98],[1162512000000, 78.29],[1162771200000, 79.71],[1162857600000, 80.51],[1162944000000, 82.45],[1163030400000, 83.34],[1163116800000, 83.12],[1163376000000, 84.35],[1163462400000, 85.00],[1163548800000, 84.05],[1163635200000, 85.61],[1163721600000, 85.85],[1163980800000, 86.47],[1164067200000, 88.60],[1164153600000, 90.31],[1164326400000, 91.63],[1164585600000, 89.54],[1164672000000, 91.81],[1164758400000, 91.80],[1164844800000, 91.66],[1164931200000, 91.32],[1165190400000, 91.12],[1165276800000, 91.27],[1165363200000, 89.83],[1165449600000, 87.04],[1165536000000, 88.26],[1165795200000, 88.75],[1165881600000, 86.14],[1165968000000, 89.05],[1166054400000, 88.55],[1166140800000, 87.72],[1166400000000, 85.47],[1166486400000, 86.31],[1166572800000, 84.76],[1166659200000, 82.90],[1166745600000, 82.20],[1167091200000, 81.51],[1167177600000, 81.52],[1167264000000, 80.87],[1167350400000, 84.84],[1167782400000, 83.80],[1167868800000, 85.66],[1167955200000, 85.05],[1168214400000, 85.47],[1168300800000, 92.57],[1168387200000, 97.00],[1168473600000, 95.80],[1168560000000, 94.62],[1168905600000, 97.10],[1168992000000, 94.95],[1169078400000, 89.07],[1169164800000, 88.50],[1169424000000, 86.79],[1169510400000, 85.70],[1169596800000, 86.70],[1169683200000, 86.25],[1169769600000, 85.38],[1170028800000, 85.94],[1170115200000, 85.55],[1170201600000, 85.73],[1170288000000, 84.74],[1170374400000, 84.75],[1170633600000, 83.94],[1170720000000, 84.15],[1170806400000, 86.15],[1170892800000, 86.18],[1170979200000, 83.27],[1171238400000, 84.88],[1171324800000, 84.63],[1171411200000, 85.30],[1171497600000, 85.21],[1171584000000, 84.83],[1171929600000, 85.90],[1172016000000, 89.20],[1172102400000, 89.51],[1172188800000, 89.07],[1172448000000, 88.65],[1172534400000, 83.93],[1172620800000, 84.61],[1172707200000, 87.06],[1172793600000, 85.41],[1173052800000, 86.32],[1173139200000, 88.19],[1173225600000, 87.72],[1173312000000, 88.00],[1173398400000, 87.97],[1173657600000, 89.87],[1173744000000, 88.40],[1173830400000, 90.00],[1173916800000, 89.57],[1174003200000, 89.59],[1174262400000, 91.13],[1174348800000, 91.48],[1174435200000, 93.87],[1174521600000, 93.96],[1174608000000, 93.52],[1174867200000, 95.85],[1174953600000, 95.46],[1175040000000, 93.24],[1175126400000, 93.75],[1175212800000, 92.91],[1175472000000, 93.65],[1175558400000, 94.50],[1175644800000, 94.27],[1175731200000, 94.68],[1176076800000, 93.65],[1176163200000, 94.25],[1176249600000, 92.59],[1176336000000, 92.19],[1176422400000, 90.24],[1176681600000, 91.43],[1176768000000, 90.35],[1176854400000, 90.40],[1176940800000, 90.27],[1177027200000, 90.97],[1177286400000, 93.51],[1177372800000, 93.24],[1177459200000, 95.35],[1177545600000, 98.84],[1177632000000, 99.92],[1177891200000, 99.80],[1177977600000, 99.47],[1178064000000, 100.39],[1178150400000, 100.40],[1178236800000, 100.81],[1178496000000, 103.92],[1178582400000, 105.06],[1178668800000, 106.88],[1178755200000, 107.34],[1178841600000, 108.74],[1179100800000, 109.36],[1179187200000, 107.52],[1179273600000, 107.34],[1179360000000, 109.44],[1179446400000, 110.02],[1179705600000, 111.98],[1179792000000, 113.54],[1179878400000, 112.89],[1179964800000, 110.69],[1180051200000, 113.62],[1180396800000, 114.35],[1180483200000, 118.77],[1180569600000, 121.19],[1180656000000, 118.40],[1180915200000, 121.33],[1181001600000, 122.67],[1181088000000, 123.64],[1181174400000, 124.07],[1181260800000, 124.49],[1181520000000, 120.19],[1181606400000, 120.38],[1181692800000, 117.50],[1181779200000, 118.75],[1181865600000, 120.50],[1182124800000, 125.09],[1182211200000, 123.66],[1182297600000, 121.55],[1182384000000, 123.90],[1182470400000, 123.00],[1182729600000, 122.34],[1182816000000, 119.65],[1182902400000, 121.89],[1182988800000, 120.56],[1183075200000, 122.04],[1183334400000, 121.26],[1183420800000, 127.17],[1183593600000, 132.75],[1183680000000, 132.30],[1183939200000, 130.33],[1184025600000, 132.35],[1184112000000, 132.39],[1184198400000, 134.07],[1184284800000, 137.73],[1184544000000, 138.10],[1184630400000, 138.91],[1184716800000, 138.12],[1184803200000, 140.00],[1184889600000, 143.75],[1185148800000, 143.70],[1185235200000, 134.89],[1185321600000, 137.26],[1185408000000, 146.00],[1185494400000, 143.85],[1185753600000, 141.43],[1185840000000, 131.76],[1185926400000, 135.00],[1186012800000, 136.49],[1186099200000, 131.85],[1186358400000, 135.25],[1186444800000, 135.03],[1186531200000, 134.01],[1186617600000, 126.39],[1186704000000, 125.00],[1186963200000, 127.79],[1187049600000, 124.03],[1187136000000, 119.90],[1187222400000, 117.05],[1187308800000, 122.06],[1187568000000, 122.22],[1187654400000, 127.57],[1187740800000, 132.51],[1187827200000, 131.07],[1187913600000, 135.30],[1188172800000, 132.25],[1188259200000, 126.82],[1188345600000, 134.08],[1188432000000, 136.25],[1188518400000, 138.48],[1188864000000, 144.16],[1188950400000, 136.76],[1189036800000, 135.01],[1189123200000, 131.77],[1189382400000, 136.71],[1189468800000, 135.49],[1189555200000, 136.85],[1189641600000, 137.20],[1189728000000, 138.81],[1189987200000, 138.41],[1190073600000, 140.92],[1190160000000, 140.77],[1190246400000, 140.31],[1190332800000, 144.15],[1190592000000, 148.28],[1190678400000, 153.18],[1190764800000, 152.77],[1190851200000, 154.50],[1190937600000, 153.47],[1191196800000, 156.34],[1191283200000, 158.45],[1191369600000, 157.92],[1191456000000, 156.24],[1191542400000, 161.45],[1191801600000, 167.91],[1191888000000, 167.86],[1191974400000, 166.79],[1192060800000, 162.23],[1192147200000, 167.25],[1192406400000, 166.98],[1192492800000, 169.58],[1192579200000, 172.75],[1192665600000, 173.50],[1192752000000, 170.42],[1193011200000, 174.36],[1193097600000, 186.16],[1193184000000, 185.93],[1193270400000, 182.78],[1193356800000, 184.70],[1193616000000, 185.09],[1193702400000, 187.00],[1193788800000, 189.95],[1193875200000, 187.44],[1193961600000, 187.87],[1194220800000, 186.18],[1194307200000, 191.79],[1194393600000, 186.30],[1194480000000, 175.47],[1194566400000, 165.37],[1194825600000, 153.76],[1194912000000, 169.96],[1194998400000, 166.11],[1195084800000, 164.30],[1195171200000, 166.39],[1195430400000, 163.95],[1195516800000, 168.85],[1195603200000, 168.46],[1195776000000, 171.54],[1196035200000, 172.54],[1196121600000, 174.81],[1196208000000, 180.22],[1196294400000, 184.29],[1196380800000, 182.22],[1196640000000, 178.86],[1196726400000, 179.81],[1196812800000, 185.50],[1196899200000, 189.95],[1196985600000, 194.30],[1197244800000, 194.21],[1197331200000, 188.54],[1197417600000, 190.86],[1197504000000, 191.83],[1197590400000, 190.39],[1197849600000, 184.40],[1197936000000, 182.98],[1198022400000, 183.12],[1198108800000, 187.21],[1198195200000, 193.91],[1198454400000, 198.80],[1198627200000, 198.95],[1198713600000, 198.57],[1198800000000, 199.83],[1199059200000, 198.08],[1199232000000, 194.84],[1199318400000, 194.93],[1199404800000, 180.05],[1199664000000, 177.64],[1199750400000, 171.25],[1199836800000, 179.40],[1199923200000, 178.02],[1200009600000, 172.69],[1200268800000, 178.78],[1200355200000, 169.04],[1200441600000, 159.64],[1200528000000, 160.89],[1200614400000, 161.36],[1200960000000, 155.64]],                
            }, {
                name: '지배지분순이익',
                type: 'line',
                yAxis: 1,
                data : [[1147651200000, 376.20],[1147737600000, 371.30],[1147824000000, 374.50],[1147910400000, 370.99],[1147996800000, 370.02],[1148256000000, 370.95],[1148342400000, 375.58],[1148428800000, 381.25],[1148515200000, 382.99],[1148601600000, 381.35],[1148947200000, 371.94],[1149033600000, 371.82],[1149120000000, 382.62],[1149206400000, 379.44],[1149465600000, 374.44],[1149552000000, 389.99],[1149638400000, 386.51],[1149724800000, 393.30],[1149811200000, 386.57],[1150070400000, 381.54],[1150156800000, 386.52],[1150243200000, 384.39],[1150329600000, 391.00],[1150416000000, 390.70],[1150675200000, 388.14],[1150761600000, 387.17],[1150848000000, 402.13],[1150934400000, 399.95],[1151020800000, 404.86],[1151280000000, 404.22],[1151366400000, 402.32],[1151452800000, 406.11],[1151539200000, 417.81],[1151625600000, 419.33],[1151884800000, 423.20],[1152057600000, 421.46],[1152144000000, 423.19],[1152230400000, 420.45],[1152489600000, 418.20],[1152576000000, 424.56],[1152662400000, 417.25],[1152748800000, 408.83],[1152835200000, 403.50],[1153094400000, 407.89],[1153180800000, 403.05],[1153267200000, 399.00],[1153353600000, 387.12],[1153440000000, 390.11],[1153699200000, 390.90],[1153785600000, 389.36],[1153872000000, 385.50],[1153958400000, 382.40],[1154044800000, 388.12],[1154304000000, 386.60],[1154390400000, 375.51],[1154476800000, 367.23],[1154563200000, 375.39],[1154649600000, 373.85],[1154908800000, 377.95],[1154995200000, 381.00],[1155081600000, 376.94],[1155168000000, 374.20],[1155254400000, 368.50],[1155513600000, 369.43],[1155600000000, 380.97],[1155686400000, 387.72],[1155772800000, 385.80],[1155859200000, 383.36],[1156118400000, 377.30],[1156204800000, 378.29],[1156291200000, 373.43],[1156377600000, 373.73],[1156464000000, 373.26],[1156723200000, 380.95],[1156809600000, 378.95],[1156896000000, 380.75],[1156982400000, 378.53],[1157068800000, 378.60],[1157414400000, 384.36],[1157500800000, 380.14],[1157587200000, 378.49],[1157673600000, 377.85],[1157932800000, 384.09],[1158019200000, 391.90],[1158105600000, 406.57],[1158192000000, 403.98],[1158278400000, 409.88],[1158537600000, 414.69],[1158624000000, 403.81],[1158710400000, 397.00],[1158796800000, 406.85],[1158883200000, 403.78],[1159142400000, 403.98],[1159228800000, 406.87],[1159315200000, 402.92],[1159401600000, 403.58],[1159488000000, 401.90],[1159747200000, 401.44],[1159833600000, 404.04],[1159920000000, 415.70],[1160006400000, 411.81],[1160092800000, 420.50],[1160352000000, 429.00],[1160438400000, 426.65],[1160524800000, 426.50],[1160611200000, 427.44],[1160697600000, 427.30],[1160956800000, 421.75],[1161043200000, 420.64],[1161129600000, 419.31],[1161216000000, 426.06],[1161302400000, 459.67],[1161561600000, 480.78],[1161648000000, 473.31],[1161734400000, 486.60],[1161820800000, 485.10],[1161907200000, 475.20],[1162166400000, 476.57],[1162252800000, 476.39],[1162339200000, 467.50],[1162425600000, 469.91],[1162512000000, 471.80],[1162771200000, 476.95],[1162857600000, 472.57],[1162944000000, 475.00],[1163030400000, 472.63],[1163116800000, 473.55],[1163376000000, 481.03],[1163462400000, 489.30],[1163548800000, 491.93],[1163635200000, 495.90],[1163721600000, 498.79],[1163980800000, 495.05],[1164067200000, 509.65],[1164153600000, 508.01],[1164326400000, 505.00],[1164585600000, 484.75],[1164672000000, 489.50],[1164758400000, 484.65],[1164844800000, 484.81],[1164931200000, 480.80],[1165190400000, 484.85],[1165276800000, 487.00],[1165363200000, 488.71],[1165449600000, 482.64],[1165536000000, 484.11],[1165795200000, 483.93],[1165881600000, 481.78],[1165968000000, 478.99],[1166054400000, 482.12],[1166140800000, 480.30],[1166400000000, 462.80],[1166486400000, 468.63],[1166572800000, 462.90],[1166659200000, 456.20],[1166745600000, 455.58],[1167091200000, 457.53],[1167177600000, 468.03],[1167264000000, 462.56],[1167350400000, 460.48],[1167782400000, 467.59],[1167868800000, 483.26],[1167955200000, 487.19],[1168214400000, 483.58],[1168300800000, 485.50],[1168387200000, 489.46],[1168473600000, 499.72],[1168560000000, 505.00],[1168905600000, 504.28],[1168992000000, 497.28],[1169078400000, 487.83],[1169164800000, 489.75],[1169424000000, 480.84],[1169510400000, 479.05],[1169596800000, 499.07],[1169683200000, 488.09],[1169769600000, 495.84],[1170028800000, 492.47],[1170115200000, 494.32],[1170201600000, 501.50],[1170288000000, 481.75],[1170374400000, 481.50],[1170633600000, 467.16],[1170720000000, 471.48],[1170806400000, 470.01],[1170892800000, 471.03],[1170979200000, 461.89],[1171238400000, 458.29],[1171324800000, 459.10],[1171411200000, 465.93],[1171497600000, 461.47],[1171584000000, 469.94],[1171929600000, 472.10],[1172016000000, 475.86],[1172102400000, 475.85],[1172188800000, 470.62],[1172448000000, 464.93],[1172534400000, 448.77],[1172620800000, 449.45],[1172707200000, 448.23],[1172793600000, 438.68],[1173052800000, 440.94],[1173139200000, 457.55],[1173225600000, 455.64],[1173312000000, 454.72],[1173398400000, 452.96],[1173657600000, 454.75],[1173744000000, 443.03],[1173830400000, 448.00],[1173916800000, 446.19],[1174003200000, 440.85],[1174262400000, 447.23],[1174348800000, 445.28],[1174435200000, 456.55],[1174521600000, 462.04],[1174608000000, 461.83],[1174867200000, 465.00],[1174953600000, 463.62],[1175040000000, 461.88],[1175126400000, 460.92],[1175212800000, 458.16],[1175472000000, 458.53],[1175558400000, 472.60],[1175644800000, 471.02],[1175731200000, 471.51],[1176076800000, 468.21],[1176163200000, 466.50],[1176249600000, 464.53],[1176336000000, 467.39],[1176422400000, 466.29],[1176681600000, 474.27],[1176768000000, 472.80],[1176854400000, 476.01],[1176940800000, 471.65],[1177027200000, 482.48],[1177286400000, 479.08],[1177372800000, 477.53],[1177459200000, 477.99],[1177545600000, 481.18],[1177632000000, 479.01],[1177891200000, 471.38],[1177977600000, 469.00],[1178064000000, 465.78],[1178150400000, 473.23],[1178236800000, 471.12],[1178496000000, 467.27],[1178582400000, 466.81],[1178668800000, 469.25],[1178755200000, 461.47],[1178841600000, 466.74],[1179100800000, 461.78],[1179187200000, 458.00],[1179273600000, 472.61],[1179360000000, 470.96],[1179446400000, 470.32],[1179705600000, 470.60],[1179792000000, 475.86],[1179878400000, 473.97],[1179964800000, 474.33],[1180051200000, 483.52],[1180396800000, 487.11],[1180483200000, 498.60],[1180569600000, 497.91],[1180656000000, 500.40],[1180915200000, 507.07],[1181001600000, 518.84],[1181088000000, 518.25],[1181174400000, 515.06],[1181260800000, 515.49],[1181520000000, 511.34],[1181606400000, 504.77],[1181692800000, 505.24],[1181779200000, 502.84],[1181865600000, 505.89],[1182124800000, 515.20],[1182211200000, 514.31],[1182297600000, 509.97],[1182384000000, 514.11],[1182470400000, 524.98],[1182729600000, 527.42],[1182816000000, 530.26],[1182902400000, 526.29],[1182988800000, 525.01],[1183075200000, 522.70],[1183334400000, 530.38],[1183420800000, 534.34],[1183593600000, 541.63],[1183680000000, 539.40],[1183939200000, 542.56],[1184025600000, 543.34],[1184112000000, 544.47],[1184198400000, 545.33],[1184284800000, 552.16],[1184544000000, 552.99],[1184630400000, 555.00],[1184716800000, 549.50],[1184803200000, 548.59],[1184889600000, 520.12],[1185148800000, 512.51],[1185235200000, 514.00],[1185321600000, 509.76],[1185408000000, 508.00],[1185494400000, 511.89],[1185753600000, 516.11],[1185840000000, 510.00],[1185926400000, 512.94],[1186012800000, 511.01],[1186099200000, 503.00],[1186358400000, 510.00],[1186444800000, 516.02],[1186531200000, 525.78],[1186617600000, 514.73],[1186704000000, 515.75],[1186963200000, 515.50],[1187049600000, 508.60],[1187136000000, 497.55],[1187222400000, 491.52],[1187308800000, 500.04],[1187568000000, 497.92],[1187654400000, 506.61],[1187740800000, 512.75],[1187827200000, 512.19],[1187913600000, 515.00],[1188172800000, 513.26],[1188259200000, 506.40],[1188345600000, 512.88],[1188432000000, 511.40],[1188518400000, 515.25],[1188864000000, 525.15],[1188950400000, 527.80],[1189036800000, 523.52],[1189123200000, 519.35],[1189382400000, 514.48],[1189468800000, 521.33],[1189555200000, 522.65],[1189641600000, 524.78],[1189728000000, 528.75],[1189987200000, 525.30],[1190073600000, 535.27],[1190160000000, 546.85],[1190246400000, 552.83],[1190332800000, 560.10],[1190592000000, 568.02],[1190678400000, 569.00],[1190764800000, 568.16],[1190851200000, 567.50],[1190937600000, 567.27],[1191196800000, 582.55],[1191283200000, 584.39],[1191369600000, 584.02],[1191456000000, 579.03],[1191542400000, 594.05],[1191801600000, 609.62],[1191888000000, 615.18],[1191974400000, 625.39],[1192060800000, 622.00],[1192147200000, 637.39],[1192406400000, 620.11],[1192492800000, 616.00],[1192579200000, 633.48],[1192665600000, 639.62],[1192752000000, 644.71],[1193011200000, 650.75],[1193097600000, 675.77],[1193184000000, 675.82],[1193270400000, 668.51],[1193356800000, 674.60],[1193616000000, 679.23],[1193702400000, 694.77],[1193788800000, 707.00],[1193875200000, 703.21],[1193961600000, 711.25],[1194220800000, 725.65],[1194307200000, 741.79],[1194393600000, 732.94],[1194480000000, 693.84],[1194566400000, 663.97],[1194825600000, 632.07],[1194912000000, 660.55],[1194998400000, 641.68],[1195084800000, 629.65],[1195171200000, 633.63],[1195430400000, 625.85],[1195516800000, 648.54],[1195603200000, 660.52],[1195776000000, 676.70],[1196035200000, 666.00],[1196121600000, 673.57],[1196208000000, 692.26],[1196294400000, 697.00],[1196380800000, 693.00],[1196640000000, 681.53],[1196726400000, 684.16],[1196812800000, 698.51],[1196899200000, 715.26],[1196985600000, 714.87],[1197244800000, 718.42],[1197331200000, 699.20],[1197417600000, 699.35],[1197504000000, 694.05],[1197590400000, 689.96],[1197849600000, 669.23],[1197936000000, 673.35],[1198022400000, 677.37],[1198108800000, 689.69],[1198195200000, 696.69],[1198454400000, 700.73],[1198627200000, 710.84],[1198713600000, 700.74],[1198800000000, 702.53],[1199059200000, 691.48],[1199232000000, 685.19],[1199318400000, 685.33],[1199404800000, 657.00],[1199664000000, 649.25]],                
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
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginRight: 40,
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
                // categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} %',
                    style: {
                        color: ["#5CAC00"],
                    },
                    x: 30
                },
                title: {
                    text: null,
                }
            },

            series: [{
                type: 'line',
                data :[[1147651200000, 23.15],[1147737600000, 23.01],[1147824000000, 22.73],[1147910400000, 22.83],[1147996800000, 22.56],[1148256000000, 22.88],[1148342400000, 22.79],[1148428800000, 23.50],[1148515200000, 23.74],[1148601600000, 23.72],[1148947200000, 23.15],[1149033600000, 22.65],[1149120000000, 22.82],[1149206400000, 22.76],[1149465600000, 22.50],[1149552000000, 22.13],[1149638400000, 22.04],[1149724800000, 22.11],[1149811200000, 21.92],[1150070400000, 21.71],[1150156800000, 21.51],[1150243200000, 21.88],[1150329600000, 22.07],[1150416000000, 22.10],[1150675200000, 22.55],[1150761600000, 22.56],[1150848000000, 23.08],[1150934400000, 22.88],[1151020800000, 22.50],[1151280000000, 22.82],[1151366400000, 22.86],[1151452800000, 23.16],[1151539200000, 23.47],[1151625600000, 23.30],[1151884800000, 23.70],[1152057600000, 23.35],[1152144000000, 23.48],[1152230400000, 23.30],[1152489600000, 23.50],[1152576000000, 23.10],[1152662400000, 22.64],[1152748800000, 22.26],[1152835200000, 22.29],[1153094400000, 22.48],[1153180800000, 22.74],[1153267200000, 23.40],[1153353600000, 22.85],[1153440000000, 23.87],[1153699200000, 24.00],[1153785600000, 24.22],[1153872000000, 24.37],[1153958400000, 23.87],[1154044800000, 24.25],[1154304000000, 24.06],[1154390400000, 23.99],[1154476800000, 24.30],[1154563200000, 24.21],[1154649600000, 24.29],[1154908800000, 24.22],[1154995200000, 24.34],[1155081600000, 24.44],[1155168000000, 24.46],[1155254400000, 24.43],[1155513600000, 24.53],[1155600000000, 24.62],[1155686400000, 24.70],[1155772800000, 24.70],[1155859200000, 25.79],[1156118400000, 26.12],[1156204800000, 25.62],[1156291200000, 25.67],[1156377600000, 25.74],[1156464000000, 25.85],[1156723200000, 25.95],[1156809600000, 25.84],[1156896000000, 25.80],[1156982400000, 25.70],[1157068800000, 25.84],[1157414400000, 25.61],[1157500800000, 25.61],[1157587200000, 25.43],[1157673600000, 25.60],[1157932800000, 25.91],[1158019200000, 25.93],[1158105600000, 25.98],[1158192000000, 26.33],[1158278400000, 26.85],[1158537600000, 26.79],[1158624000000, 26.86],[1158710400000, 27.18],[1158796800000, 26.90],[1158883200000, 26.66],[1159142400000, 26.95],[1159228800000, 27.20],[1159315200000, 27.44],[1159401600000, 27.40],[1159488000000, 27.35],[1159747200000, 27.36],[1159833600000, 27.37],[1159920000000, 27.94],[1160006400000, 27.92],[1160092800000, 27.87],[1160352000000, 27.72],[1160438400000, 27.69],[1160524800000, 27.54],[1160611200000, 28.22],[1160697600000, 28.37],[1160956800000, 28.45],[1161043200000, 28.44],[1161129600000, 28.52],[1161216000000, 28.29],[1161302400000, 28.43],[1161561600000, 28.45],[1161648000000, 28.28],[1161734400000, 28.31],[1161820800000, 28.35],[1161907200000, 28.34],[1162166400000, 28.53],[1162252800000, 28.71],[1162339200000, 28.81],[1162425600000, 28.77],[1162512000000, 28.73],[1162771200000, 28.84],[1162857600000, 28.95],[1162944000000, 28.98],[1163030400000, 29.26],[1163116800000, 29.24],[1163376000000, 29.35],[1163462400000, 29.23],[1163548800000, 29.12],[1163635200000, 29.47],[1163721600000, 29.40],[1163980800000, 29.89],[1164067200000, 29.92],[1164153600000, 29.92],[1164326400000, 29.76],[1164585600000, 29.48],[1164672000000, 29.39],[1164758400000, 29.57],[1164844800000, 29.36],[1164931200000, 29.12],[1165190400000, 29.33],[1165276800000, 29.13],[1165363200000, 28.99],[1165449600000, 28.85],[1165536000000, 29.40],[1165795200000, 29.54],[1165881600000, 29.43],[1165968000000, 29.55],[1166054400000, 30.07],[1166140800000, 30.19],[1166400000000, 29.89],[1166486400000, 29.99],[1166572800000, 30.09],[1166659200000, 29.98],[1166745600000, 29.64],[1167091200000, 29.99],[1167177600000, 30.02],[1167264000000, 29.98],[1167350400000, 29.86],[1167782400000, 29.86],[1167868800000, 29.81],[1167955200000, 29.64],[1168214400000, 29.93],[1168300800000, 29.96],[1168387200000, 29.66],[1168473600000, 30.70],[1168560000000, 31.21],[1168905600000, 31.16],[1168992000000, 31.10],[1169078400000, 31.00],[1169164800000, 31.11],[1169424000000, 30.72],[1169510400000, 30.74],[1169596800000, 31.09],[1169683200000, 30.45],[1169769600000, 30.60],[1170028800000, 30.53],[1170115200000, 30.48],[1170201600000, 30.86],[1170288000000, 30.56],[1170374400000, 30.19],[1170633600000, 29.61],[1170720000000, 29.51],[1170806400000, 29.37],[1170892800000, 29.26],[1170979200000, 28.98],[1171238400000, 28.94],[1171324800000, 29.03],[1171411200000, 29.40],[1171497600000, 29.46],[1171584000000, 28.74],[1171929600000, 28.83],[1172016000000, 29.35],[1172102400000, 29.39],[1172188800000, 28.90],[1172448000000, 29.07],[1172534400000, 27.87],[1172620800000, 28.17],[1172707200000, 28.09],[1172793600000, 27.76],[1173052800000, 27.55],[1173139200000, 27.83],[1173225600000, 27.61],[1173312000000, 27.32],[1173398400000, 27.29],[1173657600000, 27.44],[1173744000000, 26.72],[1173830400000, 27.40],[1173916800000, 27.28],[1174003200000, 27.33],[1174262400000, 27.83],[1174348800000, 27.84],[1174435200000, 28.52],[1174521600000, 28.27],[1174608000000, 28.02],[1174867200000, 28.22],[1174953600000, 27.72],[1175040000000, 27.64],[1175126400000, 27.75],[1175212800000, 27.87],[1175472000000, 27.74],[1175558400000, 27.87],[1175644800000, 28.50],[1175731200000, 28.55],[1176076800000, 28.57],[1176163200000, 28.40],[1176249600000, 28.11],[1176336000000, 28.54],[1176422400000, 28.61],[1176681600000, 28.73],[1176768000000, 28.85],[1176854400000, 28.60],[1176940800000, 28.69],[1177027200000, 29.02],[1177286400000, 28.78],[1177372800000, 28.79],[1177459200000, 28.99],[1177545600000, 29.10],[1177632000000, 30.12],[1177891200000, 29.94],[1177977600000, 30.40],[1178064000000, 30.61],[1178150400000, 30.97],[1178236800000, 30.56],[1178496000000, 30.71],[1178582400000, 30.75],[1178668800000, 30.78],[1178755200000, 30.58],[1178841600000, 30.89],[1179100800000, 30.97],[1179187200000, 30.90],[1179273600000, 31.07],[1179360000000, 30.98],[1179446400000, 30.83],[1179705600000, 31.05],[1179792000000, 30.69],[1179878400000, 30.58],[1179964800000, 30.17],[1180051200000, 30.48],[1180396800000, 30.79],[1180483200000, 31.11],[1180569600000, 30.69],[1180656000000, 30.59],[1180915200000, 30.72],[1181001600000, 30.58],[1181088000000, 30.29],[1181174400000, 29.62],[1181260800000, 30.05],[1181520000000, 30.02],[1181606400000, 29.85],[1181692800000, 30.39],[1181779200000, 30.52],[1181865600000, 30.49],[1182124800000, 30.51],[1182211200000, 30.46],[1182297600000, 30.01],[1182384000000, 30.22],[1182470400000, 29.49],[1182729600000, 29.49],[1182816000000, 29.52],[1182902400000, 29.87],[1182988800000, 29.83],[1183075200000, 29.47],[1183334400000, 29.74],[1183420800000, 30.02],[1183593600000, 29.99],[1183680000000, 29.97],[1183939200000, 29.87],[1184025600000, 29.33],[1184112000000, 29.49],[1184198400000, 30.07],[1184284800000, 29.82],[1184544000000, 30.03],[1184630400000, 30.78],[1184716800000, 30.92],[1184803200000, 31.51],[1184889600000, 31.16],[1185148800000, 31.19],[1185235200000, 30.80],[1185321600000, 30.71],[1185408000000, 29.98],[1185494400000, 29.39],[1185753600000, 29.40],[1185840000000, 28.99],[1185926400000, 29.30],[1186012800000, 29.52],[1186099200000, 28.96],[1186358400000, 29.54],[1186444800000, 29.55],[1186531200000, 30.00],[1186617600000, 29.30],[1186704000000, 28.71],[1186963200000, 28.63],[1187049600000, 28.27],[1187136000000, 28.10],[1187222400000, 27.81],[1187308800000, 28.25],[1187568000000, 28.26],[1187654400000, 28.07],[1187740800000, 28.22],[1187827200000, 28.30],[1187913600000, 28.81],[1188172800000, 28.49],[1188259200000, 27.93],[1188345600000, 28.59],[1188432000000, 28.45],[1188518400000, 28.73],[1188864000000, 28.81],[1188950400000, 28.48],[1189036800000, 28.91],[1189123200000, 28.44],[1189382400000, 28.48],[1189468800000, 28.93],[1189555200000, 28.93],[1189641600000, 29.16],[1189728000000, 29.04],[1189987200000, 28.72],[1190073600000, 28.93],[1190160000000, 28.67],[1190246400000, 28.42],[1190332800000, 28.65],[1190592000000, 29.08],[1190678400000, 29.56],[1190764800000, 29.50],[1190851200000, 29.49],[1190937600000, 29.46],[1191196800000, 29.77],[1191283200000, 29.70],[1191369600000, 29.45],[1191456000000, 29.71],[1191542400000, 29.84],[1191801600000, 29.84],[1191888000000, 30.10],[1191974400000, 30.23],[1192060800000, 29.91],[1192147200000, 30.17],[1192406400000, 30.04],[1192492800000, 30.32],[1192579200000, 31.08],[1192665600000, 31.16],[1192752000000, 30.17],[1193011200000, 30.51],[1193097600000, 30.90],[1193184000000, 31.25],[1193270400000, 31.99],[1193356800000, 35.03],[1193616000000, 34.57],[1193702400000, 35.57],[1193788800000, 36.81],[1193875200000, 37.06],[1193961600000, 37.06],[1194220800000, 36.73],[1194307200000, 36.41],[1194393600000, 35.52],[1194480000000, 34.74],[1194566400000, 33.73],[1194825600000, 33.38],[1194912000000, 34.46],[1194998400000, 33.93],[1195084800000, 33.76],[1195171200000, 34.09],[1195430400000, 33.96],[1195516800000, 34.58],[1195603200000, 34.23],[1195776000000, 34.11],[1196035200000, 32.97],[1196121600000, 33.06],[1196208000000, 33.70],[1196294400000, 33.59],[1196380800000, 33.60],[1196640000000, 32.92],[1196726400000, 32.77],[1196812800000, 34.15],[1196899200000, 34.55],[1196985600000, 34.53],[1197244800000, 34.76],[1197331200000, 34.10],[1197417600000, 34.47],[1197504000000, 35.22],[1197590400000, 35.31],[1197849600000, 34.39],[1197936000000, 34.74],[1198022400000, 34.79],[1198108800000, 35.52],[1198195200000, 36.06],[1198454400000, 36.58],[1198627200000, 36.61],[1198713600000, 35.97],[1198800000000, 36.12],[1199059200000, 35.60],[1199232000000, 35.22],[1199318400000, 35.37],[1199404800000, 34.38],[1199664000000, 34.61],[1199750400000, 33.45],[1199836800000, 34.44],[1199923200000, 34.33],[1200009600000, 33.91],[1200268800000, 34.39],[1200355200000, 34.00],[1200441600000, 33.23],[1200528000000, 33.11],[1200614400000, 33.01],[1200960000000, 31.99],[1201046400000, 31.93],[1201132800000, 33.25],[1201219200000, 32.94],[1201478400000, 32.72],[1201564800000, 32.60],[1201651200000, 32.20],[1201737600000, 32.60],[1201824000000, 30.45]],
                name: '영업이익률',
            }, {
                type: 'line',
                data : [[1147651200000, 67.79],[1147737600000, 64.98],[1147824000000, 65.26],[1147910400000, 63.18],[1147996800000, 64.51],[1148256000000, 63.38],[1148342400000, 63.15],[1148428800000, 63.34],[1148515200000, 64.33],[1148601600000, 63.55],[1148947200000, 61.22],[1149033600000, 59.77],[1149120000000, 62.17],[1149206400000, 61.66],[1149465600000, 60.00],[1149552000000, 59.72],[1149638400000, 58.56],[1149724800000, 60.76],[1149811200000, 59.24],[1150070400000, 57.00],[1150156800000, 58.33],[1150243200000, 57.61],[1150329600000, 59.38],[1150416000000, 57.56],[1150675200000, 57.20],[1150761600000, 57.47],[1150848000000, 57.86],[1150934400000, 59.58],[1151020800000, 58.83],[1151280000000, 58.99],[1151366400000, 57.43],[1151452800000, 56.02],[1151539200000, 58.97],[1151625600000, 57.27],[1151884800000, 57.95],[1152057600000, 57.00],[1152144000000, 55.77],[1152230400000, 55.40],[1152489600000, 55.00],[1152576000000, 55.65],[1152662400000, 52.96],[1152748800000, 52.25],[1152835200000, 50.67],[1153094400000, 52.37],[1153180800000, 52.90],[1153267200000, 54.10],[1153353600000, 60.50],[1153440000000, 60.72],[1153699200000, 61.42],[1153785600000, 61.93],[1153872000000, 63.87],[1153958400000, 63.40],[1154044800000, 65.59],[1154304000000, 67.96],[1154390400000, 67.18],[1154476800000, 68.16],[1154563200000, 69.59],[1154649600000, 68.30],[1154908800000, 67.21],[1154995200000, 64.78],[1155081600000, 63.59],[1155168000000, 64.07],[1155254400000, 63.65],[1155513600000, 63.94],[1155600000000, 66.45],[1155686400000, 67.98],[1155772800000, 67.59],[1155859200000, 67.91],[1156118400000, 66.56],[1156204800000, 67.62],[1156291200000, 67.31],[1156377600000, 67.81],[1156464000000, 68.75],[1156723200000, 66.98],[1156809600000, 66.48],[1156896000000, 66.96],[1156982400000, 67.85],[1157068800000, 68.38],[1157414400000, 71.48],[1157500800000, 70.03],[1157587200000, 72.80],[1157673600000, 72.52],[1157932800000, 72.50],[1158019200000, 72.63],[1158105600000, 74.20],[1158192000000, 74.17],[1158278400000, 74.10],[1158537600000, 73.89],[1158624000000, 73.77],[1158710400000, 75.26],[1158796800000, 74.65],[1158883200000, 73.00],[1159142400000, 75.75],[1159228800000, 77.61],[1159315200000, 76.41],[1159401600000, 77.01],[1159488000000, 76.98],[1159747200000, 74.86],[1159833600000, 74.08],[1159920000000, 75.38],[1160006400000, 74.83],[1160092800000, 74.22],[1160352000000, 74.63],[1160438400000, 73.81],[1160524800000, 73.23],[1160611200000, 75.26],[1160697600000, 75.02],[1160956800000, 75.40],[1161043200000, 74.29],[1161129600000, 74.53],[1161216000000, 78.99],[1161302400000, 79.95],[1161561600000, 81.46],[1161648000000, 81.05],[1161734400000, 81.68],[1161820800000, 82.19],[1161907200000, 80.41],[1162166400000, 80.42],[1162252800000, 81.08],[1162339200000, 79.16],[1162425600000, 78.98],[1162512000000, 78.29],[1162771200000, 79.71],[1162857600000, 80.51],[1162944000000, 82.45],[1163030400000, 83.34],[1163116800000, 83.12],[1163376000000, 84.35],[1163462400000, 85.00],[1163548800000, 84.05],[1163635200000, 85.61],[1163721600000, 85.85],[1163980800000, 86.47],[1164067200000, 88.60],[1164153600000, 90.31],[1164326400000, 91.63],[1164585600000, 89.54],[1164672000000, 91.81],[1164758400000, 91.80],[1164844800000, 91.66],[1164931200000, 91.32],[1165190400000, 91.12],[1165276800000, 91.27],[1165363200000, 89.83],[1165449600000, 87.04],[1165536000000, 88.26],[1165795200000, 88.75],[1165881600000, 86.14],[1165968000000, 89.05],[1166054400000, 88.55],[1166140800000, 87.72],[1166400000000, 85.47],[1166486400000, 86.31],[1166572800000, 84.76],[1166659200000, 82.90],[1166745600000, 82.20],[1167091200000, 81.51],[1167177600000, 81.52],[1167264000000, 80.87],[1167350400000, 84.84],[1167782400000, 83.80],[1167868800000, 85.66],[1167955200000, 85.05],[1168214400000, 85.47],[1168300800000, 92.57],[1168387200000, 97.00],[1168473600000, 95.80],[1168560000000, 94.62],[1168905600000, 97.10],[1168992000000, 94.95],[1169078400000, 89.07],[1169164800000, 88.50],[1169424000000, 86.79],[1169510400000, 85.70],[1169596800000, 86.70],[1169683200000, 86.25],[1169769600000, 85.38],[1170028800000, 85.94],[1170115200000, 85.55],[1170201600000, 85.73],[1170288000000, 84.74],[1170374400000, 84.75],[1170633600000, 83.94],[1170720000000, 84.15],[1170806400000, 86.15],[1170892800000, 86.18],[1170979200000, 83.27],[1171238400000, 84.88],[1171324800000, 84.63],[1171411200000, 85.30],[1171497600000, 85.21],[1171584000000, 84.83],[1171929600000, 85.90],[1172016000000, 89.20],[1172102400000, 89.51],[1172188800000, 89.07],[1172448000000, 88.65],[1172534400000, 83.93],[1172620800000, 84.61],[1172707200000, 87.06],[1172793600000, 85.41],[1173052800000, 86.32],[1173139200000, 88.19],[1173225600000, 87.72],[1173312000000, 88.00],[1173398400000, 87.97],[1173657600000, 89.87],[1173744000000, 88.40],[1173830400000, 90.00],[1173916800000, 89.57],[1174003200000, 89.59],[1174262400000, 91.13],[1174348800000, 91.48],[1174435200000, 93.87],[1174521600000, 93.96],[1174608000000, 93.52],[1174867200000, 95.85],[1174953600000, 95.46],[1175040000000, 93.24],[1175126400000, 93.75],[1175212800000, 92.91],[1175472000000, 93.65],[1175558400000, 94.50],[1175644800000, 94.27],[1175731200000, 94.68],[1176076800000, 93.65],[1176163200000, 94.25],[1176249600000, 92.59],[1176336000000, 92.19],[1176422400000, 90.24],[1176681600000, 91.43],[1176768000000, 90.35],[1176854400000, 90.40],[1176940800000, 90.27],[1177027200000, 90.97],[1177286400000, 93.51],[1177372800000, 93.24],[1177459200000, 95.35],[1177545600000, 98.84],[1177632000000, 99.92],[1177891200000, 99.80],[1177977600000, 99.47],[1178064000000, 100.39],[1178150400000, 100.40],[1178236800000, 100.81],[1178496000000, 103.92],[1178582400000, 105.06],[1178668800000, 106.88],[1178755200000, 107.34],[1178841600000, 108.74],[1179100800000, 109.36],[1179187200000, 107.52],[1179273600000, 107.34],[1179360000000, 109.44],[1179446400000, 110.02],[1179705600000, 111.98],[1179792000000, 113.54],[1179878400000, 112.89],[1179964800000, 110.69],[1180051200000, 113.62],[1180396800000, 114.35],[1180483200000, 118.77],[1180569600000, 121.19],[1180656000000, 118.40],[1180915200000, 121.33],[1181001600000, 122.67],[1181088000000, 123.64],[1181174400000, 124.07],[1181260800000, 124.49],[1181520000000, 120.19],[1181606400000, 120.38],[1181692800000, 117.50],[1181779200000, 118.75],[1181865600000, 120.50],[1182124800000, 125.09],[1182211200000, 123.66],[1182297600000, 121.55],[1182384000000, 123.90],[1182470400000, 123.00],[1182729600000, 122.34],[1182816000000, 119.65],[1182902400000, 121.89],[1182988800000, 120.56],[1183075200000, 122.04],[1183334400000, 121.26],[1183420800000, 127.17],[1183593600000, 132.75],[1183680000000, 132.30],[1183939200000, 130.33],[1184025600000, 132.35],[1184112000000, 132.39],[1184198400000, 134.07],[1184284800000, 137.73],[1184544000000, 138.10],[1184630400000, 138.91],[1184716800000, 138.12],[1184803200000, 140.00],[1184889600000, 143.75],[1185148800000, 143.70],[1185235200000, 134.89],[1185321600000, 137.26],[1185408000000, 146.00],[1185494400000, 143.85],[1185753600000, 141.43],[1185840000000, 131.76],[1185926400000, 135.00],[1186012800000, 136.49],[1186099200000, 131.85],[1186358400000, 135.25],[1186444800000, 135.03],[1186531200000, 134.01],[1186617600000, 126.39],[1186704000000, 125.00],[1186963200000, 127.79],[1187049600000, 124.03],[1187136000000, 119.90],[1187222400000, 117.05],[1187308800000, 122.06],[1187568000000, 122.22],[1187654400000, 127.57],[1187740800000, 132.51],[1187827200000, 131.07],[1187913600000, 135.30],[1188172800000, 132.25],[1188259200000, 126.82],[1188345600000, 134.08],[1188432000000, 136.25],[1188518400000, 138.48],[1188864000000, 144.16],[1188950400000, 136.76],[1189036800000, 135.01],[1189123200000, 131.77],[1189382400000, 136.71],[1189468800000, 135.49],[1189555200000, 136.85],[1189641600000, 137.20],[1189728000000, 138.81],[1189987200000, 138.41],[1190073600000, 140.92],[1190160000000, 140.77],[1190246400000, 140.31],[1190332800000, 144.15],[1190592000000, 148.28],[1190678400000, 153.18],[1190764800000, 152.77],[1190851200000, 154.50],[1190937600000, 153.47],[1191196800000, 156.34],[1191283200000, 158.45],[1191369600000, 157.92],[1191456000000, 156.24],[1191542400000, 161.45],[1191801600000, 167.91],[1191888000000, 167.86],[1191974400000, 166.79],[1192060800000, 162.23],[1192147200000, 167.25],[1192406400000, 166.98],[1192492800000, 169.58],[1192579200000, 172.75],[1192665600000, 173.50],[1192752000000, 170.42],[1193011200000, 174.36],[1193097600000, 186.16],[1193184000000, 185.93],[1193270400000, 182.78],[1193356800000, 184.70],[1193616000000, 185.09],[1193702400000, 187.00],[1193788800000, 189.95],[1193875200000, 187.44],[1193961600000, 187.87],[1194220800000, 186.18],[1194307200000, 191.79],[1194393600000, 186.30],[1194480000000, 175.47],[1194566400000, 165.37],[1194825600000, 153.76],[1194912000000, 169.96],[1194998400000, 166.11],[1195084800000, 164.30],[1195171200000, 166.39],[1195430400000, 163.95],[1195516800000, 168.85],[1195603200000, 168.46],[1195776000000, 171.54],[1196035200000, 172.54],[1196121600000, 174.81],[1196208000000, 180.22],[1196294400000, 184.29],[1196380800000, 182.22],[1196640000000, 178.86],[1196726400000, 179.81],[1196812800000, 185.50],[1196899200000, 189.95],[1196985600000, 194.30],[1197244800000, 194.21],[1197331200000, 188.54],[1197417600000, 190.86],[1197504000000, 191.83],[1197590400000, 190.39],[1197849600000, 184.40],[1197936000000, 182.98],[1198022400000, 183.12],[1198108800000, 187.21],[1198195200000, 193.91],[1198454400000, 198.80],[1198627200000, 198.95],[1198713600000, 198.57],[1198800000000, 199.83],[1199059200000, 198.08],[1199232000000, 194.84],[1199318400000, 194.93],[1199404800000, 180.05],[1199664000000, 177.64],[1199750400000, 171.25],[1199836800000, 179.40],[1199923200000, 178.02],[1200009600000, 172.69],[1200268800000, 178.78],[1200355200000, 169.04],[1200441600000, 159.64],[1200528000000, 160.89],[1200614400000, 161.36],[1200960000000, 155.64]],                
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
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginRight: 40,
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
                // categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: [{ // Primary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/>%',
                    style: {
                        color: ["#404fc3"],
                    },
                    x: 30                    
                },
            }, { // Secondary yAxis
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}</b><br/>%',
                    style: {
                        color: ["#5CAC00"],
                    }
                },
                opposite: false
            }],

            series: [{
                name: '부채비율',
                data :[[1147651200000, 23.15],[1147737600000, 23.01],[1147824000000, 22.73],[1147910400000, 22.83],[1147996800000, 22.56],[1148256000000, 22.88],[1148342400000, 22.79],[1148428800000, 23.50],[1148515200000, 23.74],[1148601600000, 23.72],[1148947200000, 23.15],[1149033600000, 22.65],[1149120000000, 22.82],[1149206400000, 22.76],[1149465600000, 22.50],[1149552000000, 22.13],[1149638400000, 22.04],[1149724800000, 22.11],[1149811200000, 21.92],[1150070400000, 21.71],[1150156800000, 21.51],[1150243200000, 21.88],[1150329600000, 22.07],[1150416000000, 22.10],[1150675200000, 22.55],[1150761600000, 22.56],[1150848000000, 23.08],[1150934400000, 22.88],[1151020800000, 22.50],[1151280000000, 22.82],[1151366400000, 22.86],[1151452800000, 23.16],[1151539200000, 23.47],[1151625600000, 23.30],[1151884800000, 23.70],[1152057600000, 23.35],[1152144000000, 23.48],[1152230400000, 23.30],[1152489600000, 23.50],[1152576000000, 23.10],[1152662400000, 22.64],[1152748800000, 22.26],[1152835200000, 22.29],[1153094400000, 22.48],[1153180800000, 22.74],[1153267200000, 23.40],[1153353600000, 22.85],[1153440000000, 23.87],[1153699200000, 24.00],[1153785600000, 24.22],[1153872000000, 24.37],[1153958400000, 23.87],[1154044800000, 24.25],[1154304000000, 24.06],[1154390400000, 23.99],[1154476800000, 24.30],[1154563200000, 24.21],[1154649600000, 24.29],[1154908800000, 24.22],[1154995200000, 24.34],[1155081600000, 24.44],[1155168000000, 24.46],[1155254400000, 24.43],[1155513600000, 24.53],[1155600000000, 24.62],[1155686400000, 24.70],[1155772800000, 24.70],[1155859200000, 25.79],[1156118400000, 26.12],[1156204800000, 25.62],[1156291200000, 25.67],[1156377600000, 25.74],[1156464000000, 25.85],[1156723200000, 25.95],[1156809600000, 25.84],[1156896000000, 25.80],[1156982400000, 25.70],[1157068800000, 25.84],[1157414400000, 25.61],[1157500800000, 25.61],[1157587200000, 25.43],[1157673600000, 25.60],[1157932800000, 25.91],[1158019200000, 25.93],[1158105600000, 25.98],[1158192000000, 26.33],[1158278400000, 26.85],[1158537600000, 26.79],[1158624000000, 26.86],[1158710400000, 27.18],[1158796800000, 26.90],[1158883200000, 26.66],[1159142400000, 26.95],[1159228800000, 27.20],[1159315200000, 27.44],[1159401600000, 27.40],[1159488000000, 27.35],[1159747200000, 27.36],[1159833600000, 27.37],[1159920000000, 27.94],[1160006400000, 27.92],[1160092800000, 27.87],[1160352000000, 27.72],[1160438400000, 27.69],[1160524800000, 27.54],[1160611200000, 28.22],[1160697600000, 28.37],[1160956800000, 28.45],[1161043200000, 28.44],[1161129600000, 28.52],[1161216000000, 28.29],[1161302400000, 28.43],[1161561600000, 28.45],[1161648000000, 28.28],[1161734400000, 28.31],[1161820800000, 28.35],[1161907200000, 28.34],[1162166400000, 28.53],[1162252800000, 28.71],[1162339200000, 28.81],[1162425600000, 28.77],[1162512000000, 28.73],[1162771200000, 28.84],[1162857600000, 28.95],[1162944000000, 28.98],[1163030400000, 29.26],[1163116800000, 29.24],[1163376000000, 29.35],[1163462400000, 29.23],[1163548800000, 29.12],[1163635200000, 29.47],[1163721600000, 29.40],[1163980800000, 29.89],[1164067200000, 29.92],[1164153600000, 29.92],[1164326400000, 29.76],[1164585600000, 29.48],[1164672000000, 29.39],[1164758400000, 29.57],[1164844800000, 29.36],[1164931200000, 29.12],[1165190400000, 29.33],[1165276800000, 29.13],[1165363200000, 28.99],[1165449600000, 28.85],[1165536000000, 29.40],[1165795200000, 29.54],[1165881600000, 29.43],[1165968000000, 29.55],[1166054400000, 30.07],[1166140800000, 30.19],[1166400000000, 29.89],[1166486400000, 29.99],[1166572800000, 30.09],[1166659200000, 29.98],[1166745600000, 29.64],[1167091200000, 29.99],[1167177600000, 30.02],[1167264000000, 29.98],[1167350400000, 29.86],[1167782400000, 29.86],[1167868800000, 29.81],[1167955200000, 29.64],[1168214400000, 29.93],[1168300800000, 29.96],[1168387200000, 29.66],[1168473600000, 30.70],[1168560000000, 31.21],[1168905600000, 31.16],[1168992000000, 31.10],[1169078400000, 31.00],[1169164800000, 31.11],[1169424000000, 30.72],[1169510400000, 30.74],[1169596800000, 31.09],[1169683200000, 30.45],[1169769600000, 30.60],[1170028800000, 30.53],[1170115200000, 30.48],[1170201600000, 30.86],[1170288000000, 30.56],[1170374400000, 30.19],[1170633600000, 29.61],[1170720000000, 29.51],[1170806400000, 29.37],[1170892800000, 29.26],[1170979200000, 28.98],[1171238400000, 28.94],[1171324800000, 29.03],[1171411200000, 29.40],[1171497600000, 29.46],[1171584000000, 28.74],[1171929600000, 28.83],[1172016000000, 29.35],[1172102400000, 29.39],[1172188800000, 28.90],[1172448000000, 29.07],[1172534400000, 27.87],[1172620800000, 28.17],[1172707200000, 28.09],[1172793600000, 27.76],[1173052800000, 27.55],[1173139200000, 27.83],[1173225600000, 27.61],[1173312000000, 27.32],[1173398400000, 27.29],[1173657600000, 27.44],[1173744000000, 26.72],[1173830400000, 27.40],[1173916800000, 27.28],[1174003200000, 27.33],[1174262400000, 27.83],[1174348800000, 27.84],[1174435200000, 28.52],[1174521600000, 28.27],[1174608000000, 28.02],[1174867200000, 28.22],[1174953600000, 27.72],[1175040000000, 27.64],[1175126400000, 27.75],[1175212800000, 27.87],[1175472000000, 27.74],[1175558400000, 27.87],[1175644800000, 28.50],[1175731200000, 28.55],[1176076800000, 28.57],[1176163200000, 28.40],[1176249600000, 28.11],[1176336000000, 28.54],[1176422400000, 28.61],[1176681600000, 28.73],[1176768000000, 28.85],[1176854400000, 28.60],[1176940800000, 28.69],[1177027200000, 29.02],[1177286400000, 28.78],[1177372800000, 28.79],[1177459200000, 28.99],[1177545600000, 29.10],[1177632000000, 30.12],[1177891200000, 29.94],[1177977600000, 30.40],[1178064000000, 30.61],[1178150400000, 30.97],[1178236800000, 30.56],[1178496000000, 30.71],[1178582400000, 30.75],[1178668800000, 30.78],[1178755200000, 30.58],[1178841600000, 30.89],[1179100800000, 30.97],[1179187200000, 30.90],[1179273600000, 31.07],[1179360000000, 30.98],[1179446400000, 30.83],[1179705600000, 31.05],[1179792000000, 30.69],[1179878400000, 30.58],[1179964800000, 30.17],[1180051200000, 30.48],[1180396800000, 30.79],[1180483200000, 31.11],[1180569600000, 30.69],[1180656000000, 30.59],[1180915200000, 30.72],[1181001600000, 30.58],[1181088000000, 30.29],[1181174400000, 29.62],[1181260800000, 30.05],[1181520000000, 30.02],[1181606400000, 29.85],[1181692800000, 30.39],[1181779200000, 30.52],[1181865600000, 30.49],[1182124800000, 30.51],[1182211200000, 30.46],[1182297600000, 30.01],[1182384000000, 30.22],[1182470400000, 29.49],[1182729600000, 29.49],[1182816000000, 29.52],[1182902400000, 29.87],[1182988800000, 29.83],[1183075200000, 29.47],[1183334400000, 29.74],[1183420800000, 30.02],[1183593600000, 29.99],[1183680000000, 29.97],[1183939200000, 29.87],[1184025600000, 29.33],[1184112000000, 29.49],[1184198400000, 30.07],[1184284800000, 29.82],[1184544000000, 30.03],[1184630400000, 30.78],[1184716800000, 30.92],[1184803200000, 31.51],[1184889600000, 31.16],[1185148800000, 31.19],[1185235200000, 30.80],[1185321600000, 30.71],[1185408000000, 29.98],[1185494400000, 29.39],[1185753600000, 29.40],[1185840000000, 28.99],[1185926400000, 29.30],[1186012800000, 29.52],[1186099200000, 28.96],[1186358400000, 29.54],[1186444800000, 29.55],[1186531200000, 30.00],[1186617600000, 29.30],[1186704000000, 28.71],[1186963200000, 28.63],[1187049600000, 28.27],[1187136000000, 28.10],[1187222400000, 27.81],[1187308800000, 28.25],[1187568000000, 28.26],[1187654400000, 28.07],[1187740800000, 28.22],[1187827200000, 28.30],[1187913600000, 28.81],[1188172800000, 28.49],[1188259200000, 27.93],[1188345600000, 28.59],[1188432000000, 28.45],[1188518400000, 28.73],[1188864000000, 28.81],[1188950400000, 28.48],[1189036800000, 28.91],[1189123200000, 28.44],[1189382400000, 28.48],[1189468800000, 28.93],[1189555200000, 28.93],[1189641600000, 29.16],[1189728000000, 29.04],[1189987200000, 28.72],[1190073600000, 28.93],[1190160000000, 28.67],[1190246400000, 28.42],[1190332800000, 28.65],[1190592000000, 29.08],[1190678400000, 29.56],[1190764800000, 29.50],[1190851200000, 29.49],[1190937600000, 29.46],[1191196800000, 29.77],[1191283200000, 29.70],[1191369600000, 29.45],[1191456000000, 29.71],[1191542400000, 29.84],[1191801600000, 29.84],[1191888000000, 30.10],[1191974400000, 30.23],[1192060800000, 29.91],[1192147200000, 30.17],[1192406400000, 30.04],[1192492800000, 30.32],[1192579200000, 31.08],[1192665600000, 31.16],[1192752000000, 30.17],[1193011200000, 30.51],[1193097600000, 30.90],[1193184000000, 31.25],[1193270400000, 31.99],[1193356800000, 35.03],[1193616000000, 34.57],[1193702400000, 35.57],[1193788800000, 36.81],[1193875200000, 37.06],[1193961600000, 37.06],[1194220800000, 36.73],[1194307200000, 36.41],[1194393600000, 35.52],[1194480000000, 34.74],[1194566400000, 33.73],[1194825600000, 33.38],[1194912000000, 34.46],[1194998400000, 33.93],[1195084800000, 33.76],[1195171200000, 34.09],[1195430400000, 33.96],[1195516800000, 34.58],[1195603200000, 34.23],[1195776000000, 34.11],[1196035200000, 32.97],[1196121600000, 33.06],[1196208000000, 33.70],[1196294400000, 33.59],[1196380800000, 33.60],[1196640000000, 32.92],[1196726400000, 32.77],[1196812800000, 34.15],[1196899200000, 34.55],[1196985600000, 34.53],[1197244800000, 34.76],[1197331200000, 34.10],[1197417600000, 34.47],[1197504000000, 35.22],[1197590400000, 35.31],[1197849600000, 34.39],[1197936000000, 34.74],[1198022400000, 34.79],[1198108800000, 35.52],[1198195200000, 36.06],[1198454400000, 36.58],[1198627200000, 36.61],[1198713600000, 35.97],[1198800000000, 36.12],[1199059200000, 35.60],[1199232000000, 35.22],[1199318400000, 35.37],[1199404800000, 34.38],[1199664000000, 34.61],[1199750400000, 33.45],[1199836800000, 34.44],[1199923200000, 34.33],[1200009600000, 33.91],[1200268800000, 34.39],[1200355200000, 34.00],[1200441600000, 33.23],[1200528000000, 33.11],[1200614400000, 33.01],[1200960000000, 31.99],[1201046400000, 31.93],[1201132800000, 33.25],[1201219200000, 32.94],[1201478400000, 32.72],[1201564800000, 32.60],[1201651200000, 32.20],[1201737600000, 32.60],[1201824000000, 30.45]],
            }, {
                name: '유동비율',
                yAxis: 1,
                data : [[1147651200000, 67.79],[1147737600000, 64.98],[1147824000000, 65.26],[1147910400000, 63.18],[1147996800000, 64.51],[1148256000000, 63.38],[1148342400000, 63.15],[1148428800000, 63.34],[1148515200000, 64.33],[1148601600000, 63.55],[1148947200000, 61.22],[1149033600000, 59.77],[1149120000000, 62.17],[1149206400000, 61.66],[1149465600000, 60.00],[1149552000000, 59.72],[1149638400000, 58.56],[1149724800000, 60.76],[1149811200000, 59.24],[1150070400000, 57.00],[1150156800000, 58.33],[1150243200000, 57.61],[1150329600000, 59.38],[1150416000000, 57.56],[1150675200000, 57.20],[1150761600000, 57.47],[1150848000000, 57.86],[1150934400000, 59.58],[1151020800000, 58.83],[1151280000000, 58.99],[1151366400000, 57.43],[1151452800000, 56.02],[1151539200000, 58.97],[1151625600000, 57.27],[1151884800000, 57.95],[1152057600000, 57.00],[1152144000000, 55.77],[1152230400000, 55.40],[1152489600000, 55.00],[1152576000000, 55.65],[1152662400000, 52.96],[1152748800000, 52.25],[1152835200000, 50.67],[1153094400000, 52.37],[1153180800000, 52.90],[1153267200000, 54.10],[1153353600000, 60.50],[1153440000000, 60.72],[1153699200000, 61.42],[1153785600000, 61.93],[1153872000000, 63.87],[1153958400000, 63.40],[1154044800000, 65.59],[1154304000000, 67.96],[1154390400000, 67.18],[1154476800000, 68.16],[1154563200000, 69.59],[1154649600000, 68.30],[1154908800000, 67.21],[1154995200000, 64.78],[1155081600000, 63.59],[1155168000000, 64.07],[1155254400000, 63.65],[1155513600000, 63.94],[1155600000000, 66.45],[1155686400000, 67.98],[1155772800000, 67.59],[1155859200000, 67.91],[1156118400000, 66.56],[1156204800000, 67.62],[1156291200000, 67.31],[1156377600000, 67.81],[1156464000000, 68.75],[1156723200000, 66.98],[1156809600000, 66.48],[1156896000000, 66.96],[1156982400000, 67.85],[1157068800000, 68.38],[1157414400000, 71.48],[1157500800000, 70.03],[1157587200000, 72.80],[1157673600000, 72.52],[1157932800000, 72.50],[1158019200000, 72.63],[1158105600000, 74.20],[1158192000000, 74.17],[1158278400000, 74.10],[1158537600000, 73.89],[1158624000000, 73.77],[1158710400000, 75.26],[1158796800000, 74.65],[1158883200000, 73.00],[1159142400000, 75.75],[1159228800000, 77.61],[1159315200000, 76.41],[1159401600000, 77.01],[1159488000000, 76.98],[1159747200000, 74.86],[1159833600000, 74.08],[1159920000000, 75.38],[1160006400000, 74.83],[1160092800000, 74.22],[1160352000000, 74.63],[1160438400000, 73.81],[1160524800000, 73.23],[1160611200000, 75.26],[1160697600000, 75.02],[1160956800000, 75.40],[1161043200000, 74.29],[1161129600000, 74.53],[1161216000000, 78.99],[1161302400000, 79.95],[1161561600000, 81.46],[1161648000000, 81.05],[1161734400000, 81.68],[1161820800000, 82.19],[1161907200000, 80.41],[1162166400000, 80.42],[1162252800000, 81.08],[1162339200000, 79.16],[1162425600000, 78.98],[1162512000000, 78.29],[1162771200000, 79.71],[1162857600000, 80.51],[1162944000000, 82.45],[1163030400000, 83.34],[1163116800000, 83.12],[1163376000000, 84.35],[1163462400000, 85.00],[1163548800000, 84.05],[1163635200000, 85.61],[1163721600000, 85.85],[1163980800000, 86.47],[1164067200000, 88.60],[1164153600000, 90.31],[1164326400000, 91.63],[1164585600000, 89.54],[1164672000000, 91.81],[1164758400000, 91.80],[1164844800000, 91.66],[1164931200000, 91.32],[1165190400000, 91.12],[1165276800000, 91.27],[1165363200000, 89.83],[1165449600000, 87.04],[1165536000000, 88.26],[1165795200000, 88.75],[1165881600000, 86.14],[1165968000000, 89.05],[1166054400000, 88.55],[1166140800000, 87.72],[1166400000000, 85.47],[1166486400000, 86.31],[1166572800000, 84.76],[1166659200000, 82.90],[1166745600000, 82.20],[1167091200000, 81.51],[1167177600000, 81.52],[1167264000000, 80.87],[1167350400000, 84.84],[1167782400000, 83.80],[1167868800000, 85.66],[1167955200000, 85.05],[1168214400000, 85.47],[1168300800000, 92.57],[1168387200000, 97.00],[1168473600000, 95.80],[1168560000000, 94.62],[1168905600000, 97.10],[1168992000000, 94.95],[1169078400000, 89.07],[1169164800000, 88.50],[1169424000000, 86.79],[1169510400000, 85.70],[1169596800000, 86.70],[1169683200000, 86.25],[1169769600000, 85.38],[1170028800000, 85.94],[1170115200000, 85.55],[1170201600000, 85.73],[1170288000000, 84.74],[1170374400000, 84.75],[1170633600000, 83.94],[1170720000000, 84.15],[1170806400000, 86.15],[1170892800000, 86.18],[1170979200000, 83.27],[1171238400000, 84.88],[1171324800000, 84.63],[1171411200000, 85.30],[1171497600000, 85.21],[1171584000000, 84.83],[1171929600000, 85.90],[1172016000000, 89.20],[1172102400000, 89.51],[1172188800000, 89.07],[1172448000000, 88.65],[1172534400000, 83.93],[1172620800000, 84.61],[1172707200000, 87.06],[1172793600000, 85.41],[1173052800000, 86.32],[1173139200000, 88.19],[1173225600000, 87.72],[1173312000000, 88.00],[1173398400000, 87.97],[1173657600000, 89.87],[1173744000000, 88.40],[1173830400000, 90.00],[1173916800000, 89.57],[1174003200000, 89.59],[1174262400000, 91.13],[1174348800000, 91.48],[1174435200000, 93.87],[1174521600000, 93.96],[1174608000000, 93.52],[1174867200000, 95.85],[1174953600000, 95.46],[1175040000000, 93.24],[1175126400000, 93.75],[1175212800000, 92.91],[1175472000000, 93.65],[1175558400000, 94.50],[1175644800000, 94.27],[1175731200000, 94.68],[1176076800000, 93.65],[1176163200000, 94.25],[1176249600000, 92.59],[1176336000000, 92.19],[1176422400000, 90.24],[1176681600000, 91.43],[1176768000000, 90.35],[1176854400000, 90.40],[1176940800000, 90.27],[1177027200000, 90.97],[1177286400000, 93.51],[1177372800000, 93.24],[1177459200000, 95.35],[1177545600000, 98.84],[1177632000000, 99.92],[1177891200000, 99.80],[1177977600000, 99.47],[1178064000000, 100.39],[1178150400000, 100.40],[1178236800000, 100.81],[1178496000000, 103.92],[1178582400000, 105.06],[1178668800000, 106.88],[1178755200000, 107.34],[1178841600000, 108.74],[1179100800000, 109.36],[1179187200000, 107.52],[1179273600000, 107.34],[1179360000000, 109.44],[1179446400000, 110.02],[1179705600000, 111.98],[1179792000000, 113.54],[1179878400000, 112.89],[1179964800000, 110.69],[1180051200000, 113.62],[1180396800000, 114.35],[1180483200000, 118.77],[1180569600000, 121.19],[1180656000000, 118.40],[1180915200000, 121.33],[1181001600000, 122.67],[1181088000000, 123.64],[1181174400000, 124.07],[1181260800000, 124.49],[1181520000000, 120.19],[1181606400000, 120.38],[1181692800000, 117.50],[1181779200000, 118.75],[1181865600000, 120.50],[1182124800000, 125.09],[1182211200000, 123.66],[1182297600000, 121.55],[1182384000000, 123.90],[1182470400000, 123.00],[1182729600000, 122.34],[1182816000000, 119.65],[1182902400000, 121.89],[1182988800000, 120.56],[1183075200000, 122.04],[1183334400000, 121.26],[1183420800000, 127.17],[1183593600000, 132.75],[1183680000000, 132.30],[1183939200000, 130.33],[1184025600000, 132.35],[1184112000000, 132.39],[1184198400000, 134.07],[1184284800000, 137.73],[1184544000000, 138.10],[1184630400000, 138.91],[1184716800000, 138.12],[1184803200000, 140.00],[1184889600000, 143.75],[1185148800000, 143.70],[1185235200000, 134.89],[1185321600000, 137.26],[1185408000000, 146.00],[1185494400000, 143.85],[1185753600000, 141.43],[1185840000000, 131.76],[1185926400000, 135.00],[1186012800000, 136.49],[1186099200000, 131.85],[1186358400000, 135.25],[1186444800000, 135.03],[1186531200000, 134.01],[1186617600000, 126.39],[1186704000000, 125.00],[1186963200000, 127.79],[1187049600000, 124.03],[1187136000000, 119.90],[1187222400000, 117.05],[1187308800000, 122.06],[1187568000000, 122.22],[1187654400000, 127.57],[1187740800000, 132.51],[1187827200000, 131.07],[1187913600000, 135.30],[1188172800000, 132.25],[1188259200000, 126.82],[1188345600000, 134.08],[1188432000000, 136.25],[1188518400000, 138.48],[1188864000000, 144.16],[1188950400000, 136.76],[1189036800000, 135.01],[1189123200000, 131.77],[1189382400000, 136.71],[1189468800000, 135.49],[1189555200000, 136.85],[1189641600000, 137.20],[1189728000000, 138.81],[1189987200000, 138.41],[1190073600000, 140.92],[1190160000000, 140.77],[1190246400000, 140.31],[1190332800000, 144.15],[1190592000000, 148.28],[1190678400000, 153.18],[1190764800000, 152.77],[1190851200000, 154.50],[1190937600000, 153.47],[1191196800000, 156.34],[1191283200000, 158.45],[1191369600000, 157.92],[1191456000000, 156.24],[1191542400000, 161.45],[1191801600000, 167.91],[1191888000000, 167.86],[1191974400000, 166.79],[1192060800000, 162.23],[1192147200000, 167.25],[1192406400000, 166.98],[1192492800000, 169.58],[1192579200000, 172.75],[1192665600000, 173.50],[1192752000000, 170.42],[1193011200000, 174.36],[1193097600000, 186.16],[1193184000000, 185.93],[1193270400000, 182.78],[1193356800000, 184.70],[1193616000000, 185.09],[1193702400000, 187.00],[1193788800000, 189.95],[1193875200000, 187.44],[1193961600000, 187.87],[1194220800000, 186.18],[1194307200000, 191.79],[1194393600000, 186.30],[1194480000000, 175.47],[1194566400000, 165.37],[1194825600000, 153.76],[1194912000000, 169.96],[1194998400000, 166.11],[1195084800000, 164.30],[1195171200000, 166.39],[1195430400000, 163.95],[1195516800000, 168.85],[1195603200000, 168.46],[1195776000000, 171.54],[1196035200000, 172.54],[1196121600000, 174.81],[1196208000000, 180.22],[1196294400000, 184.29],[1196380800000, 182.22],[1196640000000, 178.86],[1196726400000, 179.81],[1196812800000, 185.50],[1196899200000, 189.95],[1196985600000, 194.30],[1197244800000, 194.21],[1197331200000, 188.54],[1197417600000, 190.86],[1197504000000, 191.83],[1197590400000, 190.39],[1197849600000, 184.40],[1197936000000, 182.98],[1198022400000, 183.12],[1198108800000, 187.21],[1198195200000, 193.91],[1198454400000, 198.80],[1198627200000, 198.95],[1198713600000, 198.57],[1198800000000, 199.83],[1199059200000, 198.08],[1199232000000, 194.84],[1199318400000, 194.93],[1199404800000, 180.05],[1199664000000, 177.64],[1199750400000, 171.25],[1199836800000, 179.40],[1199923200000, 178.02],[1200009600000, 172.69],[1200268800000, 178.78],[1200355200000, 169.04],[1200441600000, 159.64],[1200528000000, 160.89],[1200614400000, 161.36],[1200960000000, 155.64]],                
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
                opposite: false
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
                opposite: false
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
                opposite: false
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
                opposite: false
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
                enabled: true,
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