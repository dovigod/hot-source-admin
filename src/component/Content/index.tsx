/* eslint-disable react/display-name */
"use client";
/* eslint-disable @next/next/no-img-element */
import { ForwardedRef, forwardRef } from "react";
import { withDragNDrop } from "@/HOC/withDragNDrop";
import { uniform, contentStyle } from "@/styles/index";

interface Props {
  id: string;
  name: string;
  coverImg: string;
  index: number;
  draggable?: boolean;
}

const Base = forwardRef(
  ({ id, name, coverImg, index, draggable }: Props, ref) => {
    return (
      <div
        {...uniform(contentStyle.container)}
        ref={ref as ForwardedRef<HTMLDivElement>}
        draggable={draggable}
      >
        <img
          src={coverImg}
          alt={`content-cover-image-${name}`}
          {...uniform(contentStyle.cover)}
        />
        <span {...uniform(contentStyle.name)}>{name}</span>
      </div>
    );
  }
);

const Draggable = withDragNDrop(Base);

export const Content = forwardRef((props: Props, ref) => {
  if (props.draggable) {
    return <Draggable {...props} ref={ref} />;
  } else {
    return <Base {...props} ref={ref} />;
  }
});
