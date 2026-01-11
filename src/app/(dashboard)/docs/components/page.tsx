import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const components = [
  {
    name: "Button",
    description: "클릭 가능한 버튼 컴포넌트",
    variants: ["default", "destructive", "outline", "secondary", "ghost", "link"],
  },
  {
    name: "Card",
    description: "콘텐츠를 그룹화하는 카드 컴포넌트",
    variants: ["CardHeader", "CardTitle", "CardDescription", "CardContent", "CardFooter"],
  },
  {
    name: "Badge",
    description: "상태나 카테고리를 표시하는 배지",
    variants: ["default", "secondary", "destructive", "outline"],
  },
  {
    name: "Avatar",
    description: "사용자 프로필 이미지",
    variants: ["AvatarImage", "AvatarFallback"],
  },
  {
    name: "Dialog",
    description: "모달 다이얼로그",
    variants: ["DialogTrigger", "DialogContent", "DialogHeader", "DialogFooter"],
  },
  {
    name: "DropdownMenu",
    description: "드롭다운 메뉴",
    variants: ["DropdownMenuTrigger", "DropdownMenuContent", "DropdownMenuItem"],
  },
  {
    name: "Sheet",
    description: "사이드 패널 (모바일 사이드바)",
    variants: ["SheetTrigger", "SheetContent", "SheetHeader"],
  },
  {
    name: "Sidebar",
    description: "반응형 사이드바 네비게이션",
    variants: ["SidebarProvider", "SidebarTrigger", "SidebarContent"],
  },
  {
    name: "Tooltip",
    description: "호버시 표시되는 툴팁",
    variants: ["TooltipProvider", "TooltipTrigger", "TooltipContent"],
  },
  {
    name: "Breadcrumb",
    description: "현재 위치를 표시하는 브레드크럼",
    variants: ["BreadcrumbList", "BreadcrumbItem", "BreadcrumbLink"],
  },
  {
    name: "Separator",
    description: "시각적 구분선",
    variants: ["horizontal", "vertical"],
  },
  {
    name: "Sonner",
    description: "토스트 알림",
    variants: ["toast.success", "toast.error", "toast.info"],
  },
];

export default function ComponentsDocPage() {
  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">UI 컴포넌트</h1>
        <p className="text-muted-foreground">
          스타터킷에 포함된 shadcn/ui 컴포넌트 목록입니다.
        </p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" asChild>
          <a
            href="https://ui.shadcn.com/docs/components"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            shadcn/ui 공식 문서
          </a>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/examples/components">
            컴포넌트 쇼케이스 보기
          </Link>
        </Button>
      </div>

      <Separator />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {components.map((component) => (
          <Card key={component.name}>
            <CardHeader>
              <CardTitle className="text-lg">{component.name}</CardTitle>
              <CardDescription>{component.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-1">
                {component.variants.map((variant) => (
                  <Badge key={variant} variant="secondary" className="text-xs">
                    {variant}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>컴포넌트 추가하기</CardTitle>
          <CardDescription>
            shadcn/ui에서 새 컴포넌트를 추가하는 방법
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg bg-muted p-4">
            <code className="text-sm">
              npx shadcn@latest add [component-name]
            </code>
          </div>
          <p className="text-sm text-muted-foreground">
            예: <code className="rounded bg-muted px-1">npx shadcn@latest add table</code>
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
