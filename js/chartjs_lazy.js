// 하이차트 Lazy Loading 및 성능 최적화 유틸리티
console.log('chartjs_lazy.js');

// 전역 차트 기본 설정 최적화
Highcharts.setOptions({
    global: {
        useUTC: false
    },
    credits: {
        enabled: false
    },
    chart: {
        animation: false,
        backgroundColor: null,
        style: {
            fontFamily: 'Noto Sans KR'
        }
    },
    plotOptions: {
        series: {
            animation: false,
            enableMouseTracking: true,
            states: {
                hover: {
                    enabled: true
                }
            }
        }
    },
    boost: {
        enabled: true,
        useGPUTranslations: true,
        usePreallocated: true
    }
});

// 차트 매니저 클래스
class ChartManager {
    constructor() {
        this.charts = new Map(); // 차트 인스턴스 저장
        this.observers = new Map(); // IntersectionObserver 인스턴스 저장
        this.init();
    }

    init() {
        // 페이지 언로드 시 메모리 정리
        window.addEventListener('unload', () => this.destroyAllCharts());
    }

    // Lazy Loading 구현
    lazyLoadChart(container, options) {
        if (!container) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.createChart(container, options);
                        observer.unobserve(container);
                        this.observers.delete(container);
                    }
                });
            },
            {
                rootMargin: '50px',
                threshold: 0.1
            }
        );

        this.observers.set(container, observer);
        observer.observe(container);
    }

    // 차트 생성
    createChart(container, options) {
        try {
            // 기존 차트가 있다면 제거
            this.destroyChart(container);

            // 차트 생성 전 컨테이너가 보이는지 확인
            if (container.offsetParent === null) return;

            // 데이터 크기에 따른 boost 모듈 활성화 설정
            const dataSize = options.series?.[0]?.data?.length || 0;
            const useBoost = dataSize > 1000;

            const defaultOptions = {
                boost: {
                    enabled: useBoost
                },
                plotOptions: {
                    series: {
                        turboThreshold: useBoost ? 0 : 1000
                    }
                }
            };

            // 옵션 병합
            const mergedOptions = this.mergeOptions(defaultOptions, options);
            
            // 차트 생성
            const chart = Highcharts.chart(container, mergedOptions);
            this.charts.set(container, chart);

            return chart;
        } catch (error) {
            console.error('차트 생성 중 오류 발생:', error);
        }
    }

    // 차트 업데이트
    updateChart(container, newData, redraw = true) {
        const chart = this.charts.get(container);
        if (!chart) return;

        try {
            chart.update({
                series: [{
                    data: newData
                }]
            }, redraw);
        } catch (error) {
            console.error('차트 업데이트 중 오류 발생:', error);
        }
    }

    // 차트 제거
    destroyChart(container) {
        const chart = this.charts.get(container);
        if (chart && chart.destroy) {
            chart.destroy();
            this.charts.delete(container);
        }
    }

    // 모든 차트 제거
    destroyAllCharts() {
        this.charts.forEach(chart => {
            if (chart && chart.destroy) {
                chart.destroy();
            }
        });
        this.charts.clear();
        this.observers.forEach(observer => observer.disconnect());
        this.observers.clear();
    }

    // 옵션 병합
    mergeOptions(defaultOptions, customOptions) {
        return Highcharts.merge(defaultOptions, customOptions);
    }
}

// 차트 매니저 인스턴스 생성
const chartManager = new ChartManager();

// 사용 예시:
/*
// 차트 생성
const chartOptions = {
    chart: {
        type: 'line'
    },
    title: {
        text: '차트 제목'
    },
    series: [{
        name: '시리즈1',
        data: [1, 2, 3, 4, 5]
    }]
};

// Lazy Loading으로 차트 생성
chartManager.lazyLoadChart(
    document.getElementById('chart-container'),
    chartOptions
);

// 차트 직접 생성
const chart = chartManager.createChart(
    document.getElementById('chart-container'),
    chartOptions
);

// 차트 업데이트
chartManager.updateChart(
    document.getElementById('chart-container'),
    [5, 4, 3, 2, 1]
);

// 차트 제거
chartManager.destroyChart(document.getElementById('chart-container'));
*/
