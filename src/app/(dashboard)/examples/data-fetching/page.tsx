"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { RefreshCw, AlertCircle, CheckCircle } from "lucide-react";

// 가짜 API 함수
const fakeApi = {
  getUsers: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return [
      { id: 1, name: "김철수", email: "kim@example.com" },
      { id: 2, name: "이영희", email: "lee@example.com" },
      { id: 3, name: "박민수", email: "park@example.com" },
    ];
  },
  getPosts: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
    return [
      { id: 1, title: "첫 번째 포스트", views: 100 },
      { id: 2, title: "두 번째 포스트", views: 250 },
      { id: 3, title: "세 번째 포스트", views: 180 },
    ];
  },
};

interface User {
  id: number;
  name: string;
  email: string;
}

interface Post {
  id: number;
  title: string;
  views: number;
}

// 커스텀 훅: useFetch
function useFetch<T>(fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const refetch = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchFn();
      setData(result);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  }, [fetchFn]);

  useEffect(() => {
    refetch();
  }, [refetch]);

  return { data, loading, error, refetch };
}

export default function DataFetchingExamplePage() {
  const users = useFetch<User[]>(fakeApi.getUsers);
  const posts = useFetch<Post[]>(fakeApi.getPosts);

  return (
    <div className="space-y-8 pt-4">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">데이터 페칭</h1>
        <p className="text-muted-foreground">
          React에서 데이터를 가져오는 다양한 패턴을 보여줍니다.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6 md:grid-cols-2">
        {/* 사용자 목록 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>사용자 목록</CardTitle>
                <CardDescription>커스텀 useFetch 훅 사용</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={users.refetch}
                disabled={users.loading}
              >
                <RefreshCw
                  className={`h-4 w-4 ${users.loading ? "animate-spin" : ""}`}
                />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {users.loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-1">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-32" />
                    </div>
                  </div>
                ))}
              </div>
            ) : users.error ? (
              <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span>에러가 발생했습니다</span>
              </div>
            ) : (
              <div className="space-y-3">
                {users.data?.map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center gap-3 rounded-lg border p-3"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                      {user.name[0]}
                    </div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* 포스트 목록 */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>포스트 목록</CardTitle>
                <CardDescription>로딩 상태 및 에러 처리</CardDescription>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={posts.refetch}
                disabled={posts.loading}
              >
                <RefreshCw
                  className={`h-4 w-4 ${posts.loading ? "animate-spin" : ""}`}
                />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            {posts.loading ? (
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="h-16 w-full" />
                ))}
              </div>
            ) : posts.error ? (
              <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span>에러가 발생했습니다</span>
              </div>
            ) : (
              <div className="space-y-3">
                {posts.data?.map((post) => (
                  <div
                    key={post.id}
                    className="flex items-center justify-between rounded-lg border p-3"
                  >
                    <p className="font-medium">{post.title}</p>
                    <Badge variant="secondary">{post.views} views</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* 상태 표시 */}
      <Card>
        <CardHeader>
          <CardTitle>페칭 상태</CardTitle>
          <CardDescription>현재 데이터 페칭 상태</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              {users.loading ? (
                <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              <span className="text-sm">사용자</span>
            </div>
            <div className="flex items-center gap-2">
              {posts.loading ? (
                <RefreshCw className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : (
                <CheckCircle className="h-4 w-4 text-green-500" />
              )}
              <span className="text-sm">포스트</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 코드 예시 */}
      <Card>
        <CardHeader>
          <CardTitle>코드 예시</CardTitle>
          <CardDescription>커스텀 useFetch 훅 구현</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-muted p-4">
            <pre className="text-sm">
{`// 커스텀 useFetch 훅
function useFetch<T>(fetchFn: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const refetch = async () => {
    setLoading(true)
    setError(null)
    try {
      const result = await fetchFn()
      setData(result)
    } catch (err) {
      setError(err as Error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { refetch() }, [])

  return { data, loading, error, refetch }
}

// 사용법
function Component() {
  const { data, loading, error, refetch } = useFetch(api.getUsers)

  if (loading) return <Skeleton />
  if (error) return <Error />
  return <List data={data} />
}`}
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
