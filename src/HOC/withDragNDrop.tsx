/* eslint-disable react/display-name */
"use client";
import {
  useEffect,
  useRef,
  useContext,
  PropsWithChildren,
  ForwardRefExoticComponent,
} from "react";
import { DragNDropContext } from "@/context/DragNDropContext";

interface Props extends PropsWithChildren {
  id: string;
  [T: string]: any;
}

export function withDragNDrop(Origin: ForwardRefExoticComponent<any>) {
  return (props: Props) => {
    const context = useContext(DragNDropContext);
    if (!context) {
      throw new Error("DragNDropContext not defined");
    }

    const { data, dataId, currentItemId, setData } = context;
    const ref = useRef<HTMLElement>(null);
    const itemId = props.id;

    function swap(id1: string, id2: string) {
      const id1Idx = data!.findIndex((val) => val.id === id1);
      const id2Idx = data!.findIndex((val) => val.id === id2);

      setData((current) => {
        if (!current) {
          return current;
        }
        const dup = [...current];
        dup[id1Idx].index = id2Idx;
        dup[id2Idx].index = id1Idx;
        return dup;
      });
    }
    function onDragStart() {
      currentItemId.current = props.id;
    }
    function onDragEnd() {
      if (currentItemId.current) {
        swap(currentItemId.current, itemId);
      }
    }
    function onDragOver() {
      currentItemId.current = itemId;
    }

    useEffect(() => {
      if (ref.current) {
        ref.current.removeEventListener("dragstart", onDragStart);
        ref.current.removeEventListener("dragover", onDragOver);
        ref.current.removeEventListener("dragend", onDragEnd);
        ref.current.addEventListener("dragstart", onDragStart);
        ref.current.addEventListener("dragover", onDragOver);
        ref.current.addEventListener("dragend", onDragEnd);
      }

      return () => {
        if (ref.current) {
          ref.current.removeEventListener("dragstart", onDragStart);
          ref.current.removeEventListener("dragover", onDragOver);
          ref.current.removeEventListener("dragend", onDragEnd);
        }
      };
    }, [ref]);

    return <Origin ref={ref} {...props} />;
  };
}
