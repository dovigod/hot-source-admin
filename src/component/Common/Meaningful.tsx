import { PropsWithChildren } from "react";
import { uniform } from "@/styles";
import { dashboardStyle } from "@/styles/dashboard";
export function MeaningFul({ children }: PropsWithChildren) {
  return <div {...uniform(dashboardStyle.contentLayout)}>{children}</div>;
}
