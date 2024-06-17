"use client";
import { uniform } from "@/styles";
import { navigationStyle } from "@/styles/dashboard";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  options?: any[];
}
export function FloatingButton({}: Props) {
  const router = useRouter();
  const pathname = usePathname().split("/");
  const lastIdx = pathname.length - 1;
  const pageType = pathname[lastIdx] === "edit" ? "edit" : "view";

  function togglePageType() {
    if (pageType === "edit") {
      pathname.pop();
      router.push(pathname.join("/"));
    } else {
      pathname.push("edit");
      router.push(pathname.join("/"));
    }
  }

  return (
    <button {...uniform(navigationStyle.floating)} onClick={togglePageType}>
      <span {...uniform(navigationStyle.floatingButtonText)}>
        {pageType === "edit" ? "View" : "Edit"}
      </span>
    </button>
  );
}
