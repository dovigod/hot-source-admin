"use client";

import {
  ReactNode,
  useContext,
  type Component,
  type PropsWithChildren,
} from "react";
import {
  DragNDropContext,
  DragNDropProvider,
} from "@/context/DragNDropContext";

// provides context of drag n drop for children elems.
// note) only direct decendants will be considered as drag n drop elems.

interface DragNDropContainerProps extends PropsWithChildren {
  dataId: string;
  data: any[];
  render: any;
}

export function DragNDrop({
  dataId,
  data,
  children,
  render,
  ...props
}: DragNDropContainerProps) {
  return (
    <div className="dragNdrop-container" {...props}>
      <DragNDropProvider dataId={dataId} data={data}>
        <View Component={render} />
      </DragNDropProvider>
    </div>
  );
}

function View({ Component }: { Component: any }) {
  const context = useContext(DragNDropContext);

  if (!context) {
    throw new Error("Context not defined");
  }
  const { data } = context;

  return (
    data &&
    data
      .sort((a, b) => a.index - b.index)
      .map((d) => <Component draggable key={`Drag-n-drop-${d.id}`} {...d} />)
  );
}
