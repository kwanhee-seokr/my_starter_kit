"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function FormsExamplePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      toast.success("로그인 성공!", {
        description: `${email}로 로그인되었습니다.`,
      });
    } else {
      toast.error("이메일과 비밀번호를 입력해주세요.");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && password) {
      toast.success("회원가입 완료!", {
        description: "환영합니다!",
      });
    } else {
      toast.error("모든 필드를 입력해주세요.");
    }
  };

  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">폼 예제</h1>
        <p className="text-muted-foreground">
          다양한 폼 레이아웃과 입력 처리 예제입니다.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {/* 로그인 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>로그인</CardTitle>
            <CardDescription>계정에 로그인하세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="login-email" className="text-sm font-medium">
                  이메일
                </label>
                <Input
                  id="login-email"
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="login-password" className="text-sm font-medium">
                  비밀번호
                </label>
                <Input
                  id="login-password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full">
                로그인
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 회원가입 폼 */}
        <Card>
          <CardHeader>
            <CardTitle>회원가입</CardTitle>
            <CardDescription>새 계정을 만드세요</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleRegister} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="register-name" className="text-sm font-medium">
                  이름
                </label>
                <Input
                  id="register-name"
                  type="text"
                  placeholder="홍길동"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="register-email" className="text-sm font-medium">
                  이메일
                </label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="name@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="register-password" className="text-sm font-medium">
                  비밀번호
                </label>
                <Input
                  id="register-password"
                  type="password"
                  placeholder="••••••••"
                />
              </div>
              <Button type="submit" className="w-full">
                회원가입
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* 검색 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>검색</CardTitle>
          <CardDescription>인라인 검색 폼 예제</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            <Input placeholder="검색어를 입력하세요..." className="max-w-sm" />
            <Button>검색</Button>
          </div>
        </CardContent>
      </Card>

      {/* 설정 폼 */}
      <Card>
        <CardHeader>
          <CardTitle>설정</CardTitle>
          <CardDescription>폼 레이아웃 예제</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium">이름</label>
              <Input placeholder="이름" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">사용자명</label>
              <Input placeholder="@username" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">이메일</label>
            <Input type="email" placeholder="email@example.com" />
            <p className="text-xs text-muted-foreground">
              이메일은 공개되지 않습니다.
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">소개</label>
            <textarea
              className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="자기소개를 입력하세요..."
            />
          </div>
          <div className="flex justify-end gap-2">
            <Button variant="outline">취소</Button>
            <Button onClick={() => toast.success("설정이 저장되었습니다.")}>
              저장
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 코드 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>코드 예시</CardTitle>
          <CardDescription>Input 컴포넌트 사용법</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm">
{`import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function LoginForm() {
  return (
    <form className="space-y-4">
      <Input
        type="email"
        placeholder="이메일"
      />
      <Input
        type="password"
        placeholder="비밀번호"
      />
      <Button type="submit">
        로그인
      </Button>
    </form>
  )
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
