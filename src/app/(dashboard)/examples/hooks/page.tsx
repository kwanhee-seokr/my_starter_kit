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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  useLocalStorage,
  useDebounceValue,
  useToggle,
  useCounter,
  useCopyToClipboard,
  useMediaQuery,
  useWindowSize,
} from "usehooks-ts";
import { Copy, Plus, Minus, RotateCcw } from "lucide-react";
import { toast } from "sonner";

export default function HooksExamplePage() {
  // useLocalStorage
  const [storedValue, setStoredValue] = useLocalStorage("demo-key", "기본값");

  // useDebounceValue
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue] = useDebounceValue(inputValue, 500);

  // useToggle
  const [isOn, toggle, setToggle] = useToggle(false);

  // useCounter
  const { count, increment, decrement, reset } = useCounter(0);

  // useCopyToClipboard
  const [copiedText, copy] = useCopyToClipboard();

  // useMediaQuery
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  // useWindowSize
  const { width, height } = useWindowSize();

  const handleCopy = async (text: string) => {
    const success = await copy(text);
    if (success) {
      toast.success("클립보드에 복사되었습니다!");
    }
  };

  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">usehooks-ts 예제</h1>
        <p className="text-muted-foreground">
          usehooks-ts 라이브러리의 훅들을 실제로 사용해보세요.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {/* useLocalStorage */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">useLocalStorage</CardTitle>
            <CardDescription>
              로컬 스토리지와 동기화되는 상태 관리
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={storedValue}
                onChange={(e) => setStoredValue(e.target.value)}
                placeholder="값을 입력하세요"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              저장된 값: <Badge variant="secondary">{storedValue}</Badge>
            </p>
            <p className="text-xs text-muted-foreground">
              * 페이지를 새로고침해도 값이 유지됩니다
            </p>
          </CardContent>
        </Card>

        {/* useDebounceValue */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">useDebounceValue</CardTitle>
            <CardDescription>입력값의 디바운스 처리 (500ms)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="타이핑해보세요..."
            />
            <div className="space-y-1">
              <p className="text-sm">
                입력값: <Badge variant="outline">{inputValue || "없음"}</Badge>
              </p>
              <p className="text-sm">
                디바운스: <Badge variant="secondary">{debouncedValue || "없음"}</Badge>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* useToggle */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">useToggle</CardTitle>
            <CardDescription>불리언 값 토글</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Badge variant={isOn ? "default" : "secondary"}>
                {isOn ? "ON" : "OFF"}
              </Badge>
              <Button onClick={toggle}>토글</Button>
              <Button variant="outline" onClick={() => setToggle(true)}>
                켜기
              </Button>
              <Button variant="outline" onClick={() => setToggle(false)}>
                끄기
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* useCounter */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">useCounter</CardTitle>
            <CardDescription>카운터 상태 관리</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" onClick={decrement}>
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-16 text-center text-2xl font-bold">{count}</span>
              <Button variant="outline" size="icon" onClick={increment}>
                <Plus className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={reset}>
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* useCopyToClipboard */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">useCopyToClipboard</CardTitle>
            <CardDescription>클립보드에 텍스트 복사</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => handleCopy("안녕하세요!")}
              >
                <Copy className="mr-2 h-4 w-4" />
                &quot;안녕하세요!&quot; 복사
              </Button>
              <Button
                variant="outline"
                onClick={() => handleCopy("npm install usehooks-ts")}
              >
                <Copy className="mr-2 h-4 w-4" />
                명령어 복사
              </Button>
            </div>
            {copiedText && (
              <p className="text-sm text-muted-foreground">
                복사됨: <Badge variant="secondary">{copiedText}</Badge>
              </p>
            )}
          </CardContent>
        </Card>

        {/* useMediaQuery & useWindowSize */}
        <Card>
          <CardHeader>
            <CardTitle className="font-mono text-lg">
              useMediaQuery & useWindowSize
            </CardTitle>
            <CardDescription>미디어 쿼리 및 윈도우 크기 감지</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm">
                모바일 (≤768px):{" "}
                <Badge variant={isMobile ? "default" : "secondary"}>
                  {isMobile ? "Yes" : "No"}
                </Badge>
              </p>
              <p className="text-sm">
                다크 모드 선호:{" "}
                <Badge variant={isDarkMode ? "default" : "secondary"}>
                  {isDarkMode ? "Yes" : "No"}
                </Badge>
              </p>
              <p className="text-sm">
                윈도우 크기:{" "}
                <Badge variant="outline">
                  {width} x {height}
                </Badge>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 코드 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>코드 예시</CardTitle>
          <CardDescription>usehooks-ts 사용법</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm">
{`import {
  useLocalStorage,
  useDebounceValue,
  useToggle,
  useCounter,
} from 'usehooks-ts'

function Component() {
  // 로컬 스토리지
  const [value, setValue] = useLocalStorage('key', 'default')

  // 디바운스
  const [input, setInput] = useState('')
  const [debouncedInput] = useDebounceValue(input, 500)

  // 토글
  const [isOn, toggle] = useToggle(false)

  // 카운터
  const { count, increment, decrement } = useCounter(0)

  return (...)
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
