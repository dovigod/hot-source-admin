"use client";

import { useContext, type PropsWithChildren } from "react";
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
  additionalProps?: Record<string, any>;
}

export function DragNDrop({
  dataId,
  data,
  render,
  additionalProps,
  ...props
}: DragNDropContainerProps) {
  return (
    // <div className="dragNdrop-container" {...props}>
    <DragNDropProvider dataId={dataId} data={data}>
      <View Component={render} additionalProps={additionalProps} />
    </DragNDropProvider>
    // </div>
  );
}

function View({
  Component,
  additionalProps,
}: {
  Component: any;
  additionalProps: any;
}) {
  const context = useContext(DragNDropContext);

  if (!context) {
    throw new Error("Context not defined");
  }
  const { data } = context;

  return (
    data &&
    data
      .sort((a, b) => b.index - a.index)
      .map((d) => (
        <Component
          editable
          key={`Drag-n-drop-${d.id}`}
          {...d}
          {...additionalProps}
        />
      ))
  );
}
