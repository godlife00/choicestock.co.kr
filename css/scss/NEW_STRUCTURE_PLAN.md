# SCSS 리팩토링 구조 설계 📁

## 🎯 목표
- 현재 40,000줄 → 예상 20,000줄 (50% 감소)
- 파일 크기 1.4MB → 700KB
- 유지보수성 대폭 향상

## 📂 새로운 폴더 구조

```
scss/
├── abstracts/              # 변수, 함수, mixins
│   ├── _variables.scss     # 색상, 사이즈, 폰트 변수 통합
│   ├── _mixins.scss        # 공통 mixins 정리
│   └── _functions.scss     # SCSS 함수들
│
├── base/                   # 기본 스타일
│   ├── _reset.scss         # 브라우저 초기화
│   ├── _typography.scss    # 폰트 관련
│   └── _base.scss          # 기본 HTML 요소
│
├── components/             # 재사용 가능한 컴포넌트
│   ├── _buttons.scss       # 모든 버튼 스타일
│   ├── _forms.scss         # 폼 요소들 (input, select 등)
│   ├── _banners.scss       # 배너 관련 통합
│   ├── _modals.scss        # 팝업/모달
│   ├── _tables.scss        # 테이블 스타일
│   ├── _cards.scss         # 카드형 컴포넌트
│   ├── _tabs.scss          # 탭 메뉴
│   └── _search.scss        # 검색 관련
│
├── layout/                 # 레이아웃 구조
│   ├── _header.scss        # 헤더 (기존 유지)
│   ├── _footer.scss        # 푸터 (기존 유지)
│   ├── _navigation.scss    # 네비게이션
│   └── _grid.scss          # 그리드 시스템
│
├── pages/                  # 페이지별 특화 스타일
│   ├── _main.scss          # 메인 페이지
│   ├── _login.scss         # 로그인/회원가입
│   ├── _search.scss        # 종목검색
│   ├── _stock.scss         # 종목 관련 (추천, 분석)
│   ├── _recipe.scss        # 투자레시피
│   ├── _catch.scss         # 종목캐치
│   └── _partnership.scss   # 제휴사 스타일
│
└── main.scss               # 메인 import 파일
```

## 🎨 변수 체계 정리

### 1. 색상 변수 통합
```scss
// 기존 중복 색상들을 체계화
:root {
  // Primary Colors
  --color-primary: #4168F6;        // 메인 블루 (기존 #404fc3 통합)
  --color-primary-dark: #24282C;   // 다크 블루
  
  // Status Colors  
  --color-success: #08BDAF;        // 상승/성공
  --color-danger: #F03E4C;         // 하락/위험 (#ff2929 통합)
  --color-warning: #FFDA4D;        // 경고
  --color-info: #097DF3;           // 정보 (#0094FF 통합)
  
  // Gray Scale
  --color-text-primary: #24282C;   // 주 텍스트 (#333 통합)
  --color-text-secondary: #6B7684; // 서브 텍스트 (#939393 통합)
  --color-text-disabled: #B0B8C1;  // 비활성
  
  // Background
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F7F8FA;
  --color-bg-tertiary: #F1F4F6;
}
```

### 2. 투자레시피 색상 변수 통합
```scss
// 기존 20개 지역 변수를 글로벌로 이동
:root {
  --recipe-jump: #646FCD;           // 급등주
  --recipe-top50: #F8D95F;          // 관심 TOP50
  --recipe-sale: #76BCE7;           // 지금 세일중
  // ... 나머지 17개 색상
}
```

## 🧩 컴포넌트 분리 계획

### 1. 배너 컴포넌트 통합
현재 6개의 배너 mixins를 2-3개로 통합:
```scss
// _banners.scss
.banner {
  &--primary { } // 메인 배너
  &--cta { }     // CTA 배너  
  &--promo { }   // 프로모션 배너
}
```

### 2. 버튼 컴포넌트 체계화
```scss
// _buttons.scss
.btn {
  &--primary { }   // 주 버튼
  &--secondary { } // 보조 버튼
  &--danger { }    // 위험 버튼
  &--ghost { }     // 아웃라인 버튼
}
```

## 📄 페이지별 분리 계획

### 대용량 파일 분리:
- **_styles.scss** (10,200줄) → 5개 파일로 분리
- **_styles2.scss** (13,222줄) → 6개 파일로 분리  
- **_styles3.scss** (16,750줄) → 7개 파일로 분리

### 예상 파일 크기:
- 각 컴포넌트 파일: 50-200줄
- 각 페이지 파일: 200-500줄
- 총 18개 파일로 분산

## 🔄 마이그레이션 순서

1. **Day 1**:
   - 변수 파일 생성 및 정리
   - 기본 스타일 분리 (reset, typography)
   - 폴더 구조 생성

2. **Day 2**:
   - 컴포넌트 분리 (banners, buttons, modals)
   - 페이지별 스타일 분리
   - 테스트 및 최적화

## 💡 추가 개선사항

1. **BEM 방법론 도입 검토**
2. **불필요한 `!important` 제거**
3. **미디어 쿼리 정리 및 통합**
4. **CSS Grid 활용 검토**