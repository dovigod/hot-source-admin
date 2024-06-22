/* eslint-disable react/display-name */
/* eslint-disable @next/next/no-img-element */
"use client";

import { FloatingButton } from "@/component/Common/FloatingButton";
import { MeaningFul } from "@/component/Common/Meaningful";
import { DragNDrop } from "@/component/DragNDrop";
import {
  InspectorContext,
  InspectorProvider,
} from "@/context/InspectorContext";
import { withDragNDrop } from "@/HOC/withDragNDrop";
import { uniform } from "@/styles";
import { cardContainerStyle, cardGridStyle, cardStyle } from "@/styles/card";
import { breadcrumbStyle, layout } from "@/styles/common";
import { ForwardedRef, forwardRef, useContext, useState } from "react";

interface Flow {
  id: string;
  url: string;
  label: string;
  index: number;
}
interface Senario {
  name: string;
  dimension: string;
  flows: Flow[];
  hidden: boolean;
}
// flow object
const mock = [
  {
    name: "Home",
    dimension: "2/1",
    hidden: false,
    flows: [
      {
        id: "{Home}-{version}-1",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 1,
      },
      {
        id: "{Home}-{version}-2",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 2,
      },
      {
        id: "{Home}-{version}-3",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 3,
      },
      {
        id: "{Home}-{version}-4",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 4,
      },
    ],
  },
  {
    name: "Home2",
    dimension: "2/2",
    hidden: false,
    flows: [],
  },
  {
    name: "Landing",
    dimension: "1/2",
    hidden: true,
    flows: [
      {
        id: "{Landing}-{version}-1",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 1,
      },
      {
        id: "{Landing}-{version}-2",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?1",
        index: 2,
      },
      {
        id: "{Landing}-{version}-3",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?2",
        index: 3,
      },
      {
        id: "{Landing}-{version}-4",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?3",
        index: 4,
      },
      {
        id: "{Landing}-{version}-28",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?5",
        index: 5,
      },
      {
        id: "{Landing}-{version}-39",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?4",
        index: 6,
      },
      {
        id: "{Landing}-{version}-47",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 7,
      },
    ],
  },
];
export default function ContentSpecificVersionEditPage() {
  return (
    <div>
      <MeaningFul>
        <div {...uniform(breadcrumbStyle.commonLayoutPadding)}>
          <InspectorProvider>
            {mock.map((mockData) => (
              <Senario key={mockData.name} {...mockData} />
            ))}
          </InspectorProvider>
        </div>
      </MeaningFul>
      <FloatingButton />
    </div>
  );
}

const Senario = ({ name, flows, dimension, hidden }: Senario) => {
  const [open, setOpen] = useState<boolean>(false);
  const isEmpty = flows.length === 0;
  function toggleFolding() {
    setOpen((current) => !current);
  }

  return (
    <div key={name} {...uniform(layout.cflex11, cardContainerStyle.container)}>
      <div {...uniform(cardContainerStyle.flowLabelWrapper)}>
        <div {...uniform(cardContainerStyle.flowDecorLeft)} />
        <span
          {...uniform(
            cardContainerStyle.flowLabel,
            hidden ? cardContainerStyle.hidden : null
          )}
          onClick={toggleFolding}
        >
          {name}
          {hidden && <div {...uniform(cardContainerStyle.cross)} />}
        </span>
        <div {...uniform(cardContainerStyle.flowDecorRight)} />
      </div>
      {/* {!open ? <div {...uniform(cardContainerStyle.shadow)}></div> : null} */}

      <div
        {...uniform(
          cardGridStyle.container,
          open ? cardGridStyle.open : cardGridStyle.close
        )}
      >
        <DragNDrop
          dataId={`flows-${name}`}
          data={flows}
          render={Flow}
          additionalProps={{ dimension }}
        ></DragNDrop>
      </div>
    </div>
  );
};

interface FlowProps {
  url: string;
  label?: string;
  dimension: string;
  hidden: boolean;
  editable?: boolean;
}

const Flow = withDragNDrop(
  forwardRef(
    (
      { url, label, dimension, hidden, editable }: FlowProps,
      ref: ForwardedRef<HTMLLIElement>
    ) => {
      const { openInspector } = useContext(InspectorContext)!;
      return (
        <li
          {...uniform(
            layout.cflex11,
            cardStyle.container,
            hidden ? cardStyle.hidden : null
          )}
          ref={ref}
          draggable={editable}
        >
          <img
            src={url}
            alt={`reference-image-${label}`}
            {...uniform(cardStyle.image(dimension))}
            onClick={() => openInspector(url, dimension)}
          />
          <span {...uniform(cardStyle.label)}>{label}</span>
        </li>
      );
    }
  )
);
