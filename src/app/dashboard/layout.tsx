import type { Metadata } from "next";
import { uniform } from "@/styles/index";
import { dashboardStyle } from "@/styles/dashboard";
import { Navigator } from "@/component/Dashboard/Navigator";
import { Roof } from "@/component/Dashboard/Roof";

export const metadata: Metadata = {
  title: "Dashboard | HS",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div {...uniform(dashboardStyle.container)}>
      <Roof />
      <Navigator />
      {children}
    </div>
  );
}
