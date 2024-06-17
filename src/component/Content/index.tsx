/* eslint-disable react/display-name */
"use client";
/* eslint-disable @next/next/no-img-element */
import { forwardRef } from "react";
import { withDragNDrop } from "@/HOC/withDragNDrop";
import { ContentViewableItem } from "./Viewable";
interface Props {
  id: string;
  name: string;
  coverImg: string;
  index: number;
  editable?: boolean;
  version: string;
  lastModified: string;
}

const Draggable = withDragNDrop(ContentViewableItem);

export const Content = forwardRef((props: Props, ref) => {
  if (props.editable) {
    return <Draggable {...props} ref={ref} />;
  } else {
    return <ContentViewableItem {...props} ref={ref} />;
  }
});
