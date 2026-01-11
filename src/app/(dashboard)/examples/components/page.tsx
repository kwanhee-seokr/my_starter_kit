"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { Info, AlertCircle, CheckCircle } from "lucide-react";

export default function ComponentsExamplePage() {
  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">컴포넌트 쇼케이스</h1>
        <p className="text-muted-foreground">
          스타터킷에 포함된 UI 컴포넌트들의 실제 사용 예시입니다.
        </p>
      </div>

      <Separator />

      {/* 버튼 */}
      <Card>
        <CardHeader>
          <CardTitle>Button</CardTitle>
          <CardDescription>다양한 스타일의 버튼 컴포넌트</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </CardContent>
      </Card>

      {/* 배지 */}
      <Card>
        <CardHeader>
          <CardTitle>Badge</CardTitle>
          <CardDescription>상태나 카테고리를 표시하는 배지</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </CardContent>
      </Card>

      {/* 아바타 */}
      <Card>
        <CardHeader>
          <CardTitle>Avatar</CardTitle>
          <CardDescription>사용자 프로필 이미지</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-lg">AB</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>

      {/* 툴팁 */}
      <Card>
        <CardHeader>
          <CardTitle>Tooltip</CardTitle>
          <CardDescription>호버시 표시되는 툴팁</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline">마우스를 올려보세요</Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>툴팁 내용입니다</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Info className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>도움말 정보</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </CardContent>
      </Card>

      {/* 다이얼로그 */}
      <Card>
        <CardHeader>
          <CardTitle>Dialog</CardTitle>
          <CardDescription>모달 다이얼로그</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>다이얼로그 열기</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>다이얼로그 제목</DialogTitle>
                <DialogDescription>
                  이것은 다이얼로그 설명입니다. 필요한 내용을 여기에 작성하세요.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <p className="text-sm text-muted-foreground">
                  다이얼로그 본문 내용입니다.
                </p>
              </div>
              <DialogFooter>
                <Button variant="outline">취소</Button>
                <Button>확인</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </CardContent>
      </Card>

      {/* 토스트 */}
      <Card>
        <CardHeader>
          <CardTitle>Toast (Sonner)</CardTitle>
          <CardDescription>토스트 알림</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button
            variant="outline"
            onClick={() => toast("기본 토스트 메시지입니다.")}
          >
            기본 토스트
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.success("성공적으로 완료되었습니다!")}
          >
            <CheckCircle className="mr-2 h-4 w-4" />
            성공 토스트
          </Button>
          <Button
            variant="outline"
            onClick={() => toast.error("오류가 발생했습니다.")}
          >
            <AlertCircle className="mr-2 h-4 w-4" />
            에러 토스트
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast("이벤트가 생성되었습니다", {
                description: "2024년 1월 1일 오전 9시",
                action: {
                  label: "실행 취소",
                  onClick: () => console.log("실행 취소"),
                },
              })
            }
          >
            액션 토스트
          </Button>
        </CardContent>
      </Card>

      {/* 카드 */}
      <Card>
        <CardHeader>
          <CardTitle>Card</CardTitle>
          <CardDescription>다양한 카드 레이아웃</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">카드 제목</CardTitle>
                <CardDescription>카드 설명</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">카드 내용이 들어갑니다.</p>
              </CardContent>
            </Card>
            <Card className="border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">프로 플랜</CardTitle>
                  <Badge>인기</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold">₩29,000/월</p>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
