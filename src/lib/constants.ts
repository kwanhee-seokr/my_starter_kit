import {
  LayoutDashboard,
  Settings,
  Layers,
  FormInput,
  LayoutTemplate,
  Webhook,
  Database,
  Wrench,
  Rocket,
  Component,
  Library,
} from "lucide-react";
import { NavGroup } from "@/types/nav";

export const sidebarNavItems: NavGroup[] = [
  {
    title: "메인",
    items: [
      {
        title: "대시보드",
        url: "/",
        icon: LayoutDashboard,
        isActive: true,
      },
    ],
  },
  {
    title: "문서",
    items: [
      {
        title: "시작하기",
        url: "/docs/getting-started",
        icon: Rocket,
      },
      {
        title: "UI 컴포넌트",
        url: "/docs/components",
        icon: Component,
      },
      {
        title: "훅 라이브러리",
        url: "/docs/hooks",
        icon: Library,
      },
    ],
  },
  {
    title: "예제",
    items: [
      {
        title: "컴포넌트 쇼케이스",
        url: "/examples/components",
        icon: Layers,
      },
      {
        title: "폼 예제",
        url: "/examples/forms",
        icon: FormInput,
      },
      {
        title: "레이아웃 예제",
        url: "/examples/layouts",
        icon: LayoutTemplate,
      },
      {
        title: "usehooks-ts 예제",
        url: "/examples/hooks",
        icon: Webhook,
      },
      {
        title: "데이터 페칭",
        url: "/examples/data-fetching",
        icon: Database,
      },
      {
        title: "설정 및 최적화",
        url: "/examples/optimization",
        icon: Wrench,
      },
    ],
  },
  {
    title: "기타",
    items: [
      {
        title: "설정",
        url: "/settings",
        icon: Settings,
      },
    ],
  },
];

export const siteConfig = {
  name: "Starter Kit",
  description: "모던 웹 개발을 위한 Next.js + shadcn/ui 스타터킷",
};
