document.addEventListener('alpine:init', () => {
  Alpine.data('marketScore', () => ({
    score: 0,
    statusClass: '',
    statusTitle: '',
    statusDescription: '',
    
    init() {
      // 초기 점수 설정 (API에서 가져오거나 기본값 설정)
      this.fetchScore();
    },
    
    fetchScore() {
      // 실제 구현에서는 API에서 점수를 가져오는 코드로 대체
      // 예시 데이터
      const dummyScore = 22; // 샘플 점수
      this.setScore(dummyScore);
    },
    
    setScore(value) {
      this.score = value;
      this.updateStatus();
    },
    
    updateStatus() {
      if (this.score <= 25) {
        this.statusClass = 'fear';
        this.statusTitle = '시장이 과도한 공포에 휩싸였습니다.';
        this.statusDescription = '저평가된 우량자산을 적극 매수할 기회 입니다.';
      } else if (this.score <= 44) {
        this.statusClass = 'anxiety';
        this.statusTitle = '불안감이 시장에 퍼져있는 상태입니다.';
        this.statusDescription = '우량 종목을 중심으로 신중하게 선별하여 매수하는 전략이 효과적입니다.';
      } else if (this.score <= 56) {
        this.statusClass = 'normal';
        this.statusTitle = '시장이 균형상태를 유지하고 있습니다.';
        this.statusDescription = '리스크와 수익의 밸런스를 고려한 분산투자가 적합합니다.';
      } else if (this.score <= 75) {
        this.statusClass = 'greed';
        this.statusTitle = '낙관론이 우세한 시장 분위기입니다.';
        this.statusDescription = '고평가된 자신의 점진적 이익실현을 검토할 시점입니다.';
      } else {
        this.statusClass = 'extreme';
        this.statusTitle = '시장이 매우 과열된 상태입니다.';
        this.statusDescription = '고평가된 주식의 점진적 이익실현을 검토할 시점입니다.';
      }
    }
  }));
}); 