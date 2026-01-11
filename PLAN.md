# 모던 웹 스타터킷 개발 계획

> **구현 완료** - 2026-01-11

## 개요
Next.js 16 + TypeScript + TailwindCSS v4 + ShadcnUI 기반의 대시보드 스타터킷 개발

## 사용자 요구사항
- **폴더 구조**: src/ 폴더 사용 (src/app/)
- **인증 페이지**: 제외
- **레이아웃**: Sidebar + Main (대시보드 스타일)

---

## Phase 1: 패키지 설치

### 1.1 필수 라이브러리 설치
```bash
npm install next-themes usehooks-ts sonner
```

### 1.2 ShadcnUI 컴포넌트 설치 (한 번에)
```bash
npx shadcn@latest add button badge avatar card separator tooltip dialog dropdown-menu sheet sidebar collapsible breadcrumb sonner
```

---

## Phase 2: src/ 폴더 마이그레이션

### 2.1 폴더 이동
- `app/` → `src/app/`
- `lib/` → `src/lib/`

### 2.2 설정 파일 수정

**tsconfig.json** - 경로 별칭 수정:
```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "src/**/*.ts", "src/**/*.tsx", ".next/types/**/*.ts"]
}
```

**components.json** - CSS 경로 수정:
```json
{
  "tailwind": {
    "css": "src/app/globals.css"
  }
}
```

---

## Phase 3: 프로젝트 구조 생성

```
src/
├── app/
│   ├── globals.css              # 기존 유지
│   ├── layout.tsx               # Provider 추가
│   ├── page.tsx                 # 리다이렉트 또는 랜딩
│   └── (dashboard)/
│       ├── layout.tsx           # 사이드바 레이아웃
│       ├── page.tsx             # 대시보드 홈
│       ├── analytics/page.tsx   # 예시 페이지
│       └── settings/page.tsx    # 예시 페이지
├── components/
│   ├── ui/                      # shadcn 컴포넌트 (자동 생성)
│   ├── layout/
│   │   ├── app-sidebar.tsx      # 앱 사이드바
│   │   ├── sidebar-header.tsx   # 로고/브랜드
│   │   ├── sidebar-footer.tsx   # 유저 메뉴
│   │   └── header.tsx           # 메인 영역 헤더
│   ├── navigation/
│   │   ├── nav-main.tsx         # 메인 네비게이션
│   │   └── breadcrumbs.tsx      # 브레드크럼
│   ├── providers/
│   │   ├── theme-provider.tsx   # next-themes 래퍼
│   │   └── app-provider.tsx     # 통합 Provider
│   └── theme-toggle.tsx         # 다크모드 토글
├── hooks/                       # shadcn sidebar 훅 자동 생성
├── lib/
│   ├── utils.ts                 # 기존 cn 함수
│   └── constants.ts             # 메뉴 아이템 정의
└── types/
    └── nav.ts                   # 네비게이션 타입
```

---

## Phase 4: 핵심 컴포넌트 구현

### 4.1 Providers (src/components/providers/)
1. **theme-provider.tsx**: next-themes 래퍼
2. **app-provider.tsx**: ThemeProvider + Toaster 통합

### 4.2 Layout 컴포넌트 (src/components/layout/)
1. **app-sidebar.tsx**: shadcn Sidebar 래핑, 메뉴 구성
2. **sidebar-header.tsx**: 로고, 앱 이름
3. **sidebar-footer.tsx**: 유저 아바타, 드롭다운 메뉴
4. **header.tsx**: SidebarTrigger, Breadcrumbs, ThemeToggle

### 4.3 Navigation 컴포넌트 (src/components/navigation/)
1. **nav-main.tsx**: Collapsible 메뉴 그룹
2. **breadcrumbs.tsx**: 현재 경로 표시

### 4.4 기타
1. **theme-toggle.tsx**: 라이트/다크/시스템 전환
2. **lib/constants.ts**: sidebarNavItems 정의
3. **types/nav.ts**: NavItem, NavGroup 타입

---

## Phase 5: 레이아웃 연결

### 5.1 루트 레이아웃 (src/app/layout.tsx)
- AppProvider로 children 감싸기
- Geist 폰트 유지

### 5.2 대시보드 레이아웃 (src/app/(dashboard)/layout.tsx)
- SidebarProvider + AppSidebar + SidebarInset
- 쿠키 기반 사이드바 상태 저장

### 5.3 대시보드 페이지들
- page.tsx: 통계 카드 대시보드
- analytics/page.tsx: 분석 페이지 예시
- settings/page.tsx: 설정 페이지 예시

---

## 수정할 파일 목록

### 기존 파일 수정
| 파일 | 작업 |
|------|------|
| `tsconfig.json` | paths를 `./src/*`로 변경 |
| `components.json` | css 경로를 `src/app/globals.css`로 변경 |
| `src/app/layout.tsx` | AppProvider 추가 |
| `src/app/page.tsx` | 대시보드로 리다이렉트 또는 새 내용 |

### 새로 생성할 파일
| 파일 | 설명 |
|------|------|
| `src/components/providers/theme-provider.tsx` | 테마 Provider |
| `src/components/providers/app-provider.tsx` | 통합 Provider |
| `src/components/layout/app-sidebar.tsx` | 앱 사이드바 |
| `src/components/layout/sidebar-header.tsx` | 사이드바 헤더 |
| `src/components/layout/sidebar-footer.tsx` | 사이드바 푸터 |
| `src/components/layout/header.tsx` | 메인 헤더 |
| `src/components/navigation/nav-main.tsx` | 네비게이션 |
| `src/components/navigation/breadcrumbs.tsx` | 브레드크럼 |
| `src/components/theme-toggle.tsx` | 테마 토글 |
| `src/lib/constants.ts` | 메뉴 상수 |
| `src/types/nav.ts` | 타입 정의 |
| `src/app/(dashboard)/layout.tsx` | 대시보드 레이아웃 |
| `src/app/(dashboard)/page.tsx` | 대시보드 홈 |
| `src/app/(dashboard)/analytics/page.tsx` | 분석 페이지 |
| `src/app/(dashboard)/settings/page.tsx` | 설정 페이지 |

---

## 컴포넌트 계층 구조

```
RootLayout
└── AppProvider
    ├── ThemeProvider
    └── Toaster

DashboardLayout
└── SidebarProvider
    ├── AppSidebar
    │   ├── SidebarHeader → SidebarHeaderContent
    │   ├── SidebarContent → NavMain (메뉴 그룹들)
    │   ├── SidebarFooter → SidebarFooterContent (유저 드롭다운)
    │   └── SidebarRail
    └── SidebarInset
        ├── Header (SidebarTrigger + Breadcrumbs + ThemeToggle)
        └── main → {children}
```

---

## 사용 라이브러리

| 라이브러리 | 용도 |
|-----------|------|
| next-themes | 다크모드 |
| usehooks-ts | 커스텀 훅 (useMediaQuery, useLocalStorage 등) |
| sonner | 토스트 알림 |
| lucide-react | 아이콘 (이미 설치됨) |

---

## 실행 순서 요약

1. `npm install next-themes usehooks-ts sonner`
2. src/ 폴더 생성 및 파일 이동
3. tsconfig.json, components.json 수정
4. `npx shadcn@latest add ...` 컴포넌트 설치
5. providers/ 컴포넌트 생성
6. layout/ 컴포넌트 생성
7. navigation/ 컴포넌트 생성
8. types/, lib/constants.ts 생성
9. 대시보드 레이아웃 및 페이지 생성
10. 루트 레이아웃 수정
11. 테스트 실행 (`npm run dev`)

---

## 실행 방법

```bash
# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 실행
npm start
```

접속: http://localhost:3000

---

## 생성된 파일 목록 (32개)

### 앱 라우트
- `src/app/layout.tsx` - 루트 레이아웃 (AppProvider 포함)
- `src/app/globals.css` - 글로벌 스타일
- `src/app/(dashboard)/layout.tsx` - 대시보드 레이아웃 (Sidebar)
- `src/app/(dashboard)/page.tsx` - 대시보드 홈
- `src/app/(dashboard)/analytics/page.tsx` - 분석 페이지
- `src/app/(dashboard)/settings/page.tsx` - 설정 페이지

### 컴포넌트
- `src/components/providers/theme-provider.tsx`
- `src/components/providers/app-provider.tsx`
- `src/components/layout/app-sidebar.tsx`
- `src/components/layout/header.tsx`
- `src/components/layout/sidebar-header.tsx`
- `src/components/layout/sidebar-footer.tsx`
- `src/components/navigation/nav-main.tsx`
- `src/components/navigation/breadcrumbs.tsx`
- `src/components/theme-toggle.tsx`

### ShadcnUI 컴포넌트 (16개)
- button, badge, avatar, card, separator, tooltip
- dialog, dropdown-menu, sheet, collapsible
- breadcrumb, sonner, input, skeleton, sidebar

### 유틸리티
- `src/lib/utils.ts` - cn 함수
- `src/lib/constants.ts` - 사이드바 메뉴 상수
- `src/hooks/use-mobile.ts` - 모바일 감지 훅
- `src/types/nav.ts` - 네비게이션 타입
