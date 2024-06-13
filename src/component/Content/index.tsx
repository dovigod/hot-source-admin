/* eslint-disable react/display-name */
"use client";
/* eslint-disable @next/next/no-img-element */
import { ForwardedRef, forwardRef } from "react";
import { withDragNDrop } from "@/HOC/withDragNDrop";
import { uniform, contentStyle } from "@/styles/index";
import { ContentViewableItem } from "./Viewable";
interface Props {
  id: string;
  name: string;
  coverImg: string;
  index: number;
  draggable?: boolean;
  version: string;
  lastModified: string;
}

const Draggable = withDragNDrop(ContentViewableItem);

export const Content = forwardRef((props: Props, ref) => {
  if (props.draggable) {
    return <Draggable {...props} ref={ref} />;
  } else {
    return <ContentViewableItem {...props} ref={ref} />;
  }
});
