import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Rocket,
  Layers,
  BookOpen,
  Code,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const quickLinks = [
  {
    title: "시작하기",
    description: "프로젝트 설정 및 기본 구조를 알아보세요.",
    href: "/docs/getting-started",
    icon: Rocket,
  },
  {
    title: "컴포넌트 쇼케이스",
    description: "사용 가능한 UI 컴포넌트를 확인하세요.",
    href: "/examples/components",
    icon: Layers,
  },
  {
    title: "문서",
    description: "상세한 가이드와 API 문서를 확인하세요.",
    href: "/docs/components",
    icon: BookOpen,
  },
  {
    title: "예제 코드",
    description: "실제 사용 예제를 통해 학습하세요.",
    href: "/examples/forms",
    icon: Code,
  },
];

const features = [
  "Next.js 16 App Router",
  "TypeScript",
  "TailwindCSS v4",
  "shadcn/ui",
  "다크 모드",
  "반응형 사이드바",
  "usehooks-ts",
  "Sonner 토스트",
];

export default function DashboardPage() {
  return (
    <div className="space-y-6 pt-4">
      {/* 헤더 섹션 */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h1 className="text-3xl font-bold tracking-tight">
            모던 웹 개발 Starter Kit
          </h1>
          <Badge>v1.0</Badge>
        </div>
        <p className="text-muted-foreground">
          Next.js + shadcn/ui 기반의 빠른 웹 개발을 위한 스타터킷입니다.
          문서와 예제를 통해 빠르게 시작하세요.
        </p>
      </div>

      {/* 기능 배지들 */}
      <div className="flex flex-wrap gap-2">
        {features.map((feature) => (
          <Badge key={feature} variant="secondary">
            {feature}
          </Badge>
        ))}
      </div>

      {/* 빠른 링크 카드들 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {quickLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            <Card className="h-full transition-colors hover:bg-muted/50">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <link.icon className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{link.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{link.description}</CardDescription>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* 메인 콘텐츠 그리드 */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* 시작하기 가이드 */}
        <Card>
          <CardHeader>
            <CardTitle>빠른 시작</CardTitle>
            <CardDescription>
              스타터킷을 사용하여 새 프로젝트를 시작하는 방법
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">
                <span className="text-muted-foreground"># 의존성 설치</span>
                <br />
                npm install
                <br />
                <br />
                <span className="text-muted-foreground"># 개발 서버 실행</span>
                <br />
                npm run dev
              </code>
            </div>
            <Button asChild>
              <Link href="/docs/getting-started">
                자세히 보기
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* 프로젝트 구조 */}
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 구조</CardTitle>
            <CardDescription>주요 디렉토리 및 파일 구조</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
              <pre className="text-muted-foreground">
{`src/
├── app/          # App Router 페이지
├── components/   # React 컴포넌트
│   ├── ui/       # shadcn/ui
│   ├── layout/   # 레이아웃
│   └── ...
├── hooks/        # 커스텀 훅
├── lib/          # 유틸리티
└── types/        # 타입 정의`}
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 리소스 링크 */}
      <Card>
        <CardHeader>
          <CardTitle>유용한 리소스</CardTitle>
          <CardDescription>개발에 도움이 되는 외부 리소스</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            <Button variant="outline" className="justify-start" asChild>
              <a
                href="https://nextjs.org/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                Next.js 문서
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                shadcn/ui
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a
                href="https://usehooks-ts.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                usehooks-ts
              </a>
            </Button>
            <Button variant="outline" className="justify-start" asChild>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                TailwindCSS
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
