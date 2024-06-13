"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { uniform } from "@/styles/index";
import { navigationStyle } from "@/styles/dashboard";
import { PAGE_INFO } from "@/constant";
import { layout } from "@/styles/common";

export function Navigator() {
  const path = usePathname();
  const pathname = path.split("/");
  const router = useRouter();
  const pageDescription = PAGE_INFO[path as keyof typeof PAGE_INFO];

  function togglePageType() {
    const lastIdx = pathname.length - 1;

    if (pathname[lastIdx] === "edit") {
      pathname.pop();
      router.push(pathname.join("/"));
    } else {
      pathname.push("edit");
      router.push(pathname.join("/"));
    }
  }

  return (
    <>
      <nav {...uniform(navigationStyle.container)}>
        <div {...uniform(navigationStyle.urlComponentWrapper)}>
          {pathname.map((path: string, idx) => {
            const href = pathname.slice(0, idx + 1).join("/");

            if (path === "") {
              return (
                // <span
                //   key={`nav-props-${path}`}
                //   {...uniform(dashboardStyle.urlComponentWrapper)}
                // >
                //   <Link href={href} {...uniform(dashboardStyle.urlComponent)}>
                //     Dashboard
                //   </Link>
                //   {pathname.length - 1 !== idx ? <span>&gt;</span> : null}
                // </span>
                null
              );
            } else {
              return (
                <span
                  key={`nav-props-${path}`}
                  {...uniform(navigationStyle.urlComponentWrapper)}
                >
                  <Link href={href} {...uniform(navigationStyle.urlComponent)}>
                    {path}
                  </Link>
                  {pathname.length - 1 !== idx ? <span>&gt;</span> : null}
                </span>
              );
            }
          })}
        </div>
        <div {...uniform(layout.cflex11)}>
          <span {...uniform(navigationStyle.description)}>
            {pageDescription.major}
          </span>

          <span {...uniform(navigationStyle.comment)}>
            {pageDescription.comment}
          </span>
        </div>
      </nav>

      <button {...uniform(navigationStyle.floating)} onClick={togglePageType}>
        <span {...uniform(navigationStyle.floatingButtonText)}>Edit</span>
      </button>
    </>
  );
}
