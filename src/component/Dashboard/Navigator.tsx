"use client";

import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { uniform } from "@/styles/index";
import { navigationStyle } from "@/styles/dashboard";
import { PAGE_INFO } from "@/constant";
import { layout } from "@/styles/common";

export function Navigator() {
  const pathname = usePathname();
  const pageParams = useParams();
  const pathSegments = pathname.split("/");
  const orginalPathSegements = pathname.split("/");

  // hack to get dynamic route informations to get page description
  for (const key of Object.keys(pageParams)) {
    if (typeof pageParams[key] === "string") {
      if (pathname.includes(pageParams[key] as string)) {
        const targetIdx = pathSegments.indexOf(pageParams[key] as string);
        pathSegments[targetIdx] = key;
      }
    }
  }

  const pathKey = pathSegments.join("/");
  const pageDescription = PAGE_INFO[pathKey as keyof typeof PAGE_INFO];
  // assuming page params to have only one segment
  const major =
    typeof pageDescription.major === "function"
      ? pageDescription.major(pageParams)
      : pageDescription.major;
  const comment = pageDescription.comment;

  return (
    <>
      <nav {...uniform(navigationStyle.container)}>
        <div {...uniform(navigationStyle.urlComponentWrapper)}>
          {orginalPathSegements.map((path: string, idx) => {
            let href = orginalPathSegements.slice(0, idx + 1).join("/");

            // currently not exist
            if (path === "dashboard") {
              href = "/dashboard/content";
            }
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
                  {orginalPathSegements.length - 1 !== idx ? (
                    <span>&gt;</span>
                  ) : null}
                </span>
              );
            }
          })}
        </div>
        <div {...uniform(layout.cflex11)}>
          <span {...uniform(navigationStyle.description)}>{major}</span>

          <span {...uniform(navigationStyle.comment)}>{comment}</span>
        </div>
      </nav>
    </>
  );
}
