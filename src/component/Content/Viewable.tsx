/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
import { ForwardedRef, forwardRef } from "react";
import { layout } from "@/styles/common";
import { uniform } from "@/styles";
import { itemEditableStyle, itemStyle } from "@/styles/contentPage";
import { EditIcon } from "../icon/EditIcon";
import { usePathname, useRouter } from "next/navigation";

interface Props {
  id: string;
  name: string;
  coverImg: string;
  lastModified: string; // maybe date,
  version: string;
  index: number;
  editable?: boolean;
}

export const ContentViewableItem = forwardRef(
  ({ id, name, coverImg, version, lastModified, editable }: Props, ref) => {
    const pathname = usePathname();
    const router = useRouter();

    function move() {
      let nextStop = pathname;
      if (pathname.includes("edit")) {
        const sliced = pathname.split("/");
        sliced.pop();
        sliced.push(name);
        sliced.push("edit");
        nextStop = sliced.join("/");
        router.push(nextStop);
      } else {
        nextStop += `/${name}`;
        router.push(nextStop);
      }
    }

    return (
      <li
        {...uniform(
          layout.flex13,
          editable ? itemEditableStyle.container : itemStyle.container
        )}
        ref={ref as ForwardedRef<HTMLLIElement>}
        draggable={editable}
        onClick={move}
      >
        {editable ? (
          <div {...uniform(itemEditableStyle.actionIndicator)}>
            <EditIcon color="white" size={1.35} />
          </div>
        ) : null}

        <div {...uniform(itemStyle.index("40%"))}>
          <div {...uniform(itemStyle.coverWrapper)}>
            <img
              {...uniform(layout.flex55, itemStyle.cover)}
              src={coverImg}
              alt={`content-cover-image-${id}`}
            />
          </div>
        </div>
        <div {...uniform(layout.flex44, itemStyle.index("100%"))}>
          <span {...uniform(itemStyle.text)}>{name}</span>
        </div>
        <div {...uniform(layout.flex44, itemStyle.index("100%"))}>
          {" "}
          <span {...uniform(itemStyle.text)}>{version}</span>
        </div>
        <div {...uniform(layout.flex44, itemStyle.index("100%"))}>
          {" "}
          <span {...uniform(itemStyle.text)}>{lastModified}</span>
        </div>
      </li>
    );
  }
);
