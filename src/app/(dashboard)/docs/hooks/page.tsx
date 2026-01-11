import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const hooks = [
  {
    name: "useLocalStorage",
    description: "로컬 스토리지와 동기화되는 상태 관리",
    category: "Storage",
  },
  {
    name: "useSessionStorage",
    description: "세션 스토리지와 동기화되는 상태 관리",
    category: "Storage",
  },
  {
    name: "useMediaQuery",
    description: "미디어 쿼리 매칭 감지",
    category: "Browser",
  },
  {
    name: "useDebounce",
    description: "값의 디바운스 처리",
    category: "Utilities",
  },
  {
    name: "useThrottle",
    description: "값의 스로틀 처리",
    category: "Utilities",
  },
  {
    name: "useToggle",
    description: "불리언 값 토글",
    category: "State",
  },
  {
    name: "useCounter",
    description: "카운터 상태 관리",
    category: "State",
  },
  {
    name: "useCopyToClipboard",
    description: "클립보드에 텍스트 복사",
    category: "Browser",
  },
  {
    name: "useWindowSize",
    description: "윈도우 크기 감지",
    category: "Browser",
  },
  {
    name: "useOnClickOutside",
    description: "요소 외부 클릭 감지",
    category: "Events",
  },
  {
    name: "useHover",
    description: "호버 상태 감지",
    category: "Events",
  },
  {
    name: "useInterval",
    description: "setInterval 훅",
    category: "Timers",
  },
  {
    name: "useTimeout",
    description: "setTimeout 훅",
    category: "Timers",
  },
  {
    name: "useFetch",
    description: "데이터 페칭",
    category: "Network",
  },
];

const categories = [...new Set(hooks.map((h) => h.category))];

export default function HooksDocPage() {
  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">훅 라이브러리</h1>
        <p className="text-muted-foreground">
          usehooks-ts 라이브러리에서 제공하는 유용한 React 훅들입니다.
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <a
            href="https://usehooks-ts.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            usehooks-ts 공식 문서
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/examples/hooks">
            훅 예제 보기
          </Link>
        </Button>
      </div>

      <Separator />

      <Card>
        <CardHeader>
          <CardTitle>설치 및 사용법</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="mb-2 text-sm font-medium">이미 설치됨</p>
            <div className="rounded-lg bg-muted p-4">
              <code className="text-sm">npm install usehooks-ts</code>
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">사용 예시</p>
            <div className="rounded-lg bg-muted p-4">
              <pre className="text-sm">
{`import { useLocalStorage } from 'usehooks-ts'

function Component() {
  const [value, setValue] = useLocalStorage('key', 'default')
  return <div>{value}</div>
}`}
              </pre>
            </div>
          </div>
        </CardContent>
      </Card>

      {categories.map((category) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold">{category}</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {hooks
              .filter((h) => h.category === category)
              .map((hook) => (
                <Card key={hook.name}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base font-mono">
                      {hook.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {hook.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
