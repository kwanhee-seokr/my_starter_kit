import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function GettingStartedPage() {
  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">시작하기</h1>
        <p className="text-muted-foreground">
          스타터킷을 사용하여 새 프로젝트를 시작하는 방법을 알아봅니다.
        </p>
      </div>

      <Separator />

      <div className="space-y-6">
        {/* 요구사항 */}
        <Card>
          <CardHeader>
            <CardTitle>요구사항</CardTitle>
            <CardDescription>프로젝트를 시작하기 전 필요한 환경</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex items-center gap-2">
              <Badge variant="outline">Node.js</Badge>
              <span className="text-sm text-muted-foreground">18.17 이상</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline">npm</Badge>
              <span className="text-sm text-muted-foreground">9.0 이상</span>
            </div>
          </CardContent>
        </Card>

        {/* 설치 */}
        <Card>
          <CardHeader>
            <CardTitle>설치</CardTitle>
            <CardDescription>프로젝트 설정 및 의존성 설치</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="mb-2 text-sm font-medium">1. 의존성 설치</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">npm install</code>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">2. 개발 서버 실행</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">npm run dev</code>
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">3. 브라우저에서 확인</p>
              <div className="rounded-lg bg-muted p-4">
                <code className="text-sm">http://localhost:3000</code>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 프로젝트 구조 */}
        <Card>
          <CardHeader>
            <CardTitle>프로젝트 구조</CardTitle>
            <CardDescription>주요 디렉토리 및 파일 설명</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-muted p-4 font-mono text-sm">
              <pre>
{`src/
├── app/                    # Next.js App Router
│   ├── (dashboard)/       # 대시보드 라우트 그룹
│   │   ├── layout.tsx     # 사이드바 레이아웃
│   │   ├── page.tsx       # 메인 페이지
│   │   ├── docs/          # 문서 페이지
│   │   └── examples/      # 예제 페이지
│   ├── layout.tsx         # 루트 레이아웃
│   └── globals.css        # 글로벌 스타일
│
├── components/
│   ├── ui/                # shadcn/ui 컴포넌트
│   ├── layout/            # 레이아웃 컴포넌트
│   ├── navigation/        # 네비게이션 컴포넌트
│   └── providers/         # Provider 컴포넌트
│
├── hooks/                 # 커스텀 훅
├── lib/                   # 유틸리티 함수
└── types/                 # TypeScript 타입`}
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* 스크립트 */}
        <Card>
          <CardHeader>
            <CardTitle>npm 스크립트</CardTitle>
            <CardDescription>사용 가능한 명령어</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <code className="text-sm">npm run dev</code>
                <span className="text-sm text-muted-foreground">개발 서버 실행</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <code className="text-sm">npm run build</code>
                <span className="text-sm text-muted-foreground">프로덕션 빌드</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <code className="text-sm">npm start</code>
                <span className="text-sm text-muted-foreground">프로덕션 실행</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <code className="text-sm">npm run lint</code>
                <span className="text-sm text-muted-foreground">코드 린팅</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
