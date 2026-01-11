import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function SettingsPage() {
  return (
    <div className="space-y-6 pt-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">설정</h1>
        <p className="text-muted-foreground">
          앱 설정 및 환경 설정을 관리합니다.
        </p>
      </div>

      <Separator />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>프로필</CardTitle>
            <CardDescription>
              공개 프로필 정보를 관리합니다.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium">이름</label>
              <input
                type="text"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="홍길동"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">이메일</label>
              <input
                type="email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                placeholder="user@example.com"
              />
            </div>
            <Button>저장</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>알림</CardTitle>
            <CardDescription>알림 설정을 관리합니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">이메일 알림</p>
                <p className="text-sm text-muted-foreground">
                  중요 알림을 이메일로 받습니다.
                </p>
              </div>
              <Button variant="outline" size="sm">
                켜기
              </Button>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium">푸시 알림</p>
                <p className="text-sm text-muted-foreground">
                  브라우저 푸시 알림을 받습니다.
                </p>
              </div>
              <Button variant="outline" size="sm">
                켜기
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>위험 영역</CardTitle>
            <CardDescription>
              주의가 필요한 설정입니다.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <p className="text-sm font-medium text-destructive">
                  계정 삭제
                </p>
                <p className="text-sm text-muted-foreground">
                  모든 데이터가 영구적으로 삭제됩니다.
                </p>
              </div>
              <Button variant="destructive" size="sm">
                삭제
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
