"use client";
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { pagnationStyle } from "@/styles/pagnation";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface Props {
  length: number;
}

const VIEW = 5;
const LONG_JUMP = 10;

const Button = ({ children, active }: { active: boolean; children: any }) => {
  return (
    <button
      {...uniform(pagnationStyle.button, active ? pagnationStyle.active : {})}
    >
      {children}
    </button>
  );
};
export function Pagnation({ length }: Props) {
  const search = useSearchParams();
  const pathname = usePathname();
  const currentPage = search.get("page");

  if (length <= VIEW) {
    const components = new Array(length).fill(0).map((_, idx) => {
      return (
        <Link
          key={`pagination-${idx}`}
          href={{
            pathname,
            query: { page: idx + 1 },
          }}
        >
          <Button active={idx + 1 === Number(currentPage)}>{idx + 1}</Button>
        </Link>
      );
    });
    return (
      <div {...uniform(layout.flex11, pagnationStyle.container)}>
        {components}
      </div>
    );
  }
  return (
    <div {...uniform(layout.flex11, pagnationStyle.container)}>
      {/* {length > VIEW && <Button>First</Button>}

      {length > VIEW ? <Button>mid</Button> : <Button>{currentPage}</Button>}

      {length > VIEW && <Button>Last</Button>} */}
    </div>
  );
}
