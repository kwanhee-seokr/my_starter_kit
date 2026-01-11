# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

Next.js 16 + React 19 + shadcn/ui 기반의 대시보드 스타터킷입니다. Tailwind CSS v4와 Radix UI 프리미티브를 사용합니다.

## 개발 명령어

```bash
npm run dev      # 개발 서버 실행 (http://localhost:3000)
npm run build    # 프로덕션 빌드
npm run start    # 프로덕션 서버 실행
npm run lint     # ESLint 검사
```

## 아키텍처

### 라우팅 구조
- `src/app/layout.tsx` - 루트 레이아웃 (AppProvider로 전역 설정)
- `src/app/(dashboard)/layout.tsx` - 대시보드 레이아웃 (사이드바 + 헤더)
- `(dashboard)` 그룹 내 모든 페이지는 사이드바 레이아웃 공유

### Provider 계층
```
RootLayout
└── AppProvider (client)
    └── ThemeProvider (next-themes)
    └── Toaster (sonner)
```

### 네비게이션 설정
- `src/lib/constants.ts` - 사이드바 메뉴 정의 (`sidebarNavItems`)
- `src/types/nav.ts` - NavItem, NavGroup 타입 정의

### 주요 레이아웃 컴포넌트
- `src/components/layout/app-sidebar.tsx` - 메인 사이드바
- `src/components/layout/header.tsx` - 헤더 (브레드크럼 + 테마 토글)
- `src/components/ui/sidebar.tsx` - 사이드바 UI 시스템 (SidebarProvider, SidebarInset 등)

### UI 컴포넌트
- `src/components/ui/` - shadcn/ui 기반 컴포넌트들
- `src/lib/utils.ts` - `cn()` 함수 (클래스 병합 유틸리티)

## 코드 규칙

- 경로 별칭: `@/*` → `./src/*`
- 클래스 병합: `cn()` 함수 사용 (clsx + tailwind-merge)
- 토스트 알림: `sonner`의 `toast()` 함수 사용
- 테마: `next-themes` 기반, system/light/dark 지원
