import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, AlertTriangle } from "lucide-react";

const optimizationTips = [
  {
    category: "이미지 최적화",
    tips: [
      {
        title: "next/image 사용",
        description: "자동 이미지 최적화 및 lazy loading",
        code: `import Image from 'next/image'

<Image
  src="/hero.jpg"
  alt="Hero"
  width={800}
  height={600}
  priority // LCP 이미지에 사용
/>`,
      },
      {
        title: "적절한 이미지 포맷",
        description: "WebP, AVIF 포맷 자동 변환",
        good: "Next.js가 자동으로 최적의 포맷 제공",
      },
    ],
  },
  {
    category: "코드 분할",
    tips: [
      {
        title: "Dynamic Import",
        description: "필요할 때만 컴포넌트 로드",
        code: `import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(
  () => import('@/components/HeavyComponent'),
  {
    loading: () => <Skeleton />,
    ssr: false // 클라이언트만
  }
)`,
      },
      {
        title: "Route Groups",
        description: "라우트별 번들 분리",
        code: `app/
├── (marketing)/  # 별도 번들
│   └── page.tsx
└── (dashboard)/  # 별도 번들
    └── page.tsx`,
      },
    ],
  },
  {
    category: "캐싱 전략",
    tips: [
      {
        title: "정적 생성 (SSG)",
        description: "빌드 시 페이지 생성",
        code: `// 정적 페이지 (기본값)
export default async function Page() {
  const data = await fetch('...', {
    cache: 'force-cache' // 기본값
  })
  return <div>{data}</div>
}`,
      },
      {
        title: "ISR (증분 정적 재생성)",
        description: "주기적으로 페이지 재생성",
        code: `export const revalidate = 3600 // 1시간마다

export default async function Page() {
  const data = await fetch('...')
  return <div>{data}</div>
}`,
      },
    ],
  },
  {
    category: "번들 크기 최적화",
    tips: [
      {
        title: "Tree Shaking",
        description: "사용하지 않는 코드 제거",
        code: `// Bad
import * as icons from 'lucide-react'

// Good
import { Home, Settings } from 'lucide-react'`,
      },
      {
        title: "Server Components",
        description: "서버에서만 실행되는 컴포넌트",
        good: "클라이언트 번들에 포함되지 않음",
      },
    ],
  },
];

const performanceChecklist = [
  { item: "Lighthouse 성능 점수 90+", checked: true },
  { item: "Core Web Vitals 통과", checked: true },
  { item: "이미지 최적화 (next/image)", checked: true },
  { item: "폰트 최적화 (next/font)", checked: true },
  { item: "코드 분할 적용", checked: true },
  { item: "불필요한 리렌더링 방지", checked: false },
  { item: "메모이제이션 (useMemo, useCallback)", checked: false },
];

export default function OptimizationExamplePage() {
  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">설정 및 최적화</h1>
        <p className="text-muted-foreground">
          Next.js 앱의 성능을 최적화하는 방법과 모범 사례입니다.
        </p>
      </div>

      <Separator />

      {/* 성능 체크리스트 */}
      <Card>
        <CardHeader>
          <CardTitle>성능 체크리스트</CardTitle>
          <CardDescription>스타터킷에 적용된 최적화 항목</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-2 sm:grid-cols-2">
            {performanceChecklist.map((item) => (
              <div key={item.item} className="flex items-center gap-2">
                {item.checked ? (
                  <CheckCircle className="h-4 w-4 text-green-500" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-yellow-500" />
                )}
                <span className="text-sm">{item.item}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 최적화 팁들 */}
      {optimizationTips.map((section) => (
        <div key={section.category} className="space-y-4">
          <h2 className="text-xl font-semibold">{section.category}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {section.tips.map((tip) => (
              <Card key={tip.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{tip.title}</CardTitle>
                  <CardDescription>{tip.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  {tip.code && (
                    <div className="rounded-lg bg-muted p-3">
                      <pre className="text-xs">{tip.code}</pre>
                    </div>
                  )}
                  {tip.good && (
                    <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                      <CheckCircle className="h-4 w-4" />
                      {tip.good}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}

      {/* 환경 설정 */}
      <Card>
        <CardHeader>
          <CardTitle>환경 설정 파일</CardTitle>
          <CardDescription>주요 설정 파일 목록</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-mono text-sm">next.config.ts</p>
                <p className="text-xs text-muted-foreground">Next.js 설정</p>
              </div>
              <Badge variant="secondary">설정됨</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-mono text-sm">tsconfig.json</p>
                <p className="text-xs text-muted-foreground">TypeScript 설정</p>
              </div>
              <Badge variant="secondary">설정됨</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-mono text-sm">postcss.config.mjs</p>
                <p className="text-xs text-muted-foreground">PostCSS (Tailwind)</p>
              </div>
              <Badge variant="secondary">설정됨</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-mono text-sm">components.json</p>
                <p className="text-xs text-muted-foreground">shadcn/ui 설정</p>
              </div>
              <Badge variant="secondary">설정됨</Badge>
            </div>
            <div className="flex items-center justify-between rounded-lg border p-3">
              <div>
                <p className="font-mono text-sm">.env.local</p>
                <p className="text-xs text-muted-foreground">환경 변수</p>
              </div>
              <Badge variant="outline">선택사항</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 유용한 명령어 */}
      <Card>
        <CardHeader>
          <CardTitle>유용한 명령어</CardTitle>
          <CardDescription>개발 및 배포에 사용되는 명령어</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="rounded-lg bg-muted p-3">
              <code className="text-sm">npm run build && npm run start</code>
              <p className="mt-1 text-xs text-muted-foreground">
                프로덕션 빌드 및 실행
              </p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <code className="text-sm">npx next info</code>
              <p className="mt-1 text-xs text-muted-foreground">
                환경 정보 확인
              </p>
            </div>
            <div className="rounded-lg bg-muted p-3">
              <code className="text-sm">npx @next/bundle-analyzer</code>
              <p className="mt-1 text-xs text-muted-foreground">
                번들 크기 분석
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
