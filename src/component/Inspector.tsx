/* eslint-disable @next/next/no-img-element */
import { InspectorContext } from "@/context/InspectorContext";
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { inspectorStyle } from "@/styles/inspector";
import { useContext, useEffect, useRef, useState } from "react";

interface InspectorProps {
  imageUrl: string;
  dimension: string;
}

const BASIC_SCALE_FACTOR = 2;

export function Inspector({ imageUrl, dimension }: InspectorProps) {
  const { closeInspector } = useContext(InspectorContext)!;
  const imgRef = useRef<HTMLImageElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [size, setSize] = useState<any>(null);

  useEffect(() => {
    if (imgRef.current && stageRef.current) {
      const img = imgRef.current;
      const stage = stageRef.current;
      const ratioToStage = {
        width: 0.85,
        height: 0.9,
      };
      // resize img
      const [wr, hr] = dimension.split("/").map((v) => Number(v));
      const stageWidth = stage.clientWidth;
      const stageHeight = stage.clientHeight;
      if (wr < hr) {
        const imgDefaultWidth = Math.max(
          600,
          Math.min(
            stageWidth * ratioToStage.width,
            stageHeight * ratioToStage.height
          )
        );
        const estimateHeight = (imgDefaultWidth / wr) * hr;
        if (estimateHeight > stageHeight * ratioToStage.width) {
          img.style.height = stageHeight * ratioToStage.width + "px";
          img.style.width =
            ((stageHeight * ratioToStage.width) / hr) * wr + "px";
        }
      }
      stage.style.width = img.clientWidth + "px";
      stage.style.height = img.clientHeight + "px";
      setSize({
        width: img.clientWidth,
        height: img.clientHeight,
      });
    }
  }, [imgRef, stageRef, imageUrl]);

  useEffect(() => {
    if (size) {
      if (imgRef.current) {
        const img = imgRef.current;
        img.style.width = size.width * scale + "px";
        img.style.height = size.height * scale + "px";
      }
    }
  }, [scale, size]);

  return (
    <div {...uniform(layout.cflex55, inspectorStyle.background)}>
      <section {...uniform(inspectorStyle.section)}>
        <div ref={stageRef} {...uniform(inspectorStyle.stage)}>
          <img
            ref={imgRef}
            src={imageUrl}
            alt="inspector image"
            {...uniform(inspectorStyle.image(dimension))}
          />
        </div>
        <div {...uniform(inspectorStyle.infoStage, layout.cflex44)}>
          <div {...uniform(layout.cflex11, inspectorStyle.info)}>
            <span {...uniform(inspectorStyle.label)}> label </span>
            <span {...uniform(inspectorStyle.value)}> value </span>

            <button
              {...uniform(inspectorStyle.closeButton)}
              onClick={closeInspector}
            >
              x
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
