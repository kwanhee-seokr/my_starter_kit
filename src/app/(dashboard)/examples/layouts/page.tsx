import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function LayoutsExamplePage() {
  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">레이아웃 예제</h1>
        <p className="text-muted-foreground">
          다양한 레이아웃 패턴과 그리드 시스템 예제입니다.
        </p>
      </div>

      <Separator />

      {/* 그리드 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>반응형 그리드</CardTitle>
          <CardDescription>
            Tailwind의 그리드 시스템 (md:grid-cols-2 lg:grid-cols-4)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center rounded-lg border bg-muted"
              >
                <span className="text-lg font-medium">Item {i}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Flex 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>Flexbox 레이아웃</CardTitle>
          <CardDescription>flex와 gap을 활용한 레이아웃</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Badge className="mb-2">justify-between</Badge>
            <div className="flex items-center justify-between rounded-lg border p-4">
              <span>왼쪽</span>
              <span>오른쪽</span>
            </div>
          </div>
          <div>
            <Badge className="mb-2">gap-4</Badge>
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex h-16 w-16 items-center justify-center rounded-lg bg-muted"
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
          <div>
            <Badge className="mb-2">flex-wrap</Badge>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: 10 }, (_, i) => (
                <Badge key={i} variant="secondary">
                  Tag {i + 1}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 사이드바 레이아웃 */}
      <Card>
        <CardHeader>
          <CardTitle>사이드바 + 콘텐츠</CardTitle>
          <CardDescription>일반적인 대시보드 레이아웃</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex rounded-lg border">
            <div className="w-48 border-r bg-muted p-4">
              <div className="space-y-2">
                <div className="h-8 rounded bg-muted-foreground/20" />
                <div className="h-8 rounded bg-muted-foreground/20" />
                <div className="h-8 rounded bg-muted-foreground/20" />
              </div>
            </div>
            <div className="flex-1 p-4">
              <div className="space-y-4">
                <div className="h-8 w-1/3 rounded bg-muted" />
                <div className="h-32 rounded bg-muted" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 카드 그리드 */}
      <Card>
        <CardHeader>
          <CardTitle>카드 그리드</CardTitle>
          <CardDescription>대시보드 통계 카드 레이아웃</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["총 방문자", "페이지뷰", "이탈률", "세션 시간"].map((title) => (
              <Card key={title}>
                <CardHeader className="pb-2">
                  <CardDescription>{title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">1,234</div>
                  <p className="text-xs text-green-600">+12.5%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 비대칭 그리드 */}
      <Card>
        <CardHeader>
          <CardTitle>비대칭 그리드</CardTitle>
          <CardDescription>col-span을 활용한 비대칭 레이아웃</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="col-span-2 h-40 rounded-lg bg-muted p-4">
              <span className="text-sm text-muted-foreground">col-span-2</span>
            </div>
            <div className="h-40 rounded-lg bg-muted p-4">
              <span className="text-sm text-muted-foreground">col-span-1</span>
            </div>
            <div className="h-40 rounded-lg bg-muted p-4">
              <span className="text-sm text-muted-foreground">col-span-1</span>
            </div>
            <div className="col-span-2 h-40 rounded-lg bg-muted p-4">
              <span className="text-sm text-muted-foreground">col-span-2</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 코드 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>코드 예시</CardTitle>
          <CardDescription>반응형 그리드 코드</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm">
{`{/* 반응형 그리드 */}
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
  {items.map((item) => (
    <Card key={item.id}>
      <CardContent>{item.title}</CardContent>
    </Card>
  ))}
</div>

{/* Flexbox 레이아웃 */}
<div className="flex items-center justify-between">
  <span>왼쪽</span>
  <span>오른쪽</span>
</div>

{/* 비대칭 그리드 */}
<div className="grid gap-4 md:grid-cols-3">
  <div className="col-span-2">넓은 영역</div>
  <div>좁은 영역</div>
</div>`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
