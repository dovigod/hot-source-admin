import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { inspectorStyle } from "@/styles/inspector";
import { useEffect, useRef, useState } from "react";

interface InspectorProps {
  imageUrl: string;
  dimension: string;
}

const BASIC_SCALE_FACTOR = 2;

export function Inspector({ imageUrl, dimension }: InspectorProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState<number>(1);
  const [size, setSize] = useState<any>(null);
  const [inspectionMode, setInspectionMode] = useState<boolean>(false);

  useEffect(() => {
    if (imgRef.current && stageRef.current) {
      const img = imgRef.current;
      const stage = stageRef.current;
      // resize img

      img.style.aspectRatio = dimension;

      const [wr, hr] = dimension.split("/").map((v) => Number(v));

      if (wr < hr) {
        const imgDefaultWidth = Math.max(
          600,
          Math.min(window.innerWidth * 0.7, window.innerHeight * 0.8)
        );

        const estimateHeight = (imgDefaultWidth / wr) * hr;
        if (estimateHeight > window.innerHeight * 0.7) {
          img.style.height = window.innerHeight * 0.7 + "px";
          img.style.width = ((window.innerHeight * 0.7) / hr) * wr + "px";
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
    if (inspectionMode) {
    } else {
    }
  }, [inspectionMode]);

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
          <img ref={imgRef} src={imageUrl} {...uniform(inspectorStyle.image)} />
        </div>
        <div onClick={() => setInspectionMode((cur) => !cur)}>
          inspection mode
        </div>
        <div onClick={() => setScale((cur) => cur * 2)}>options!!!!</div>
      </section>
    </div>
  );
}
