"use client";

import { FloatingButton } from "@/component/Common/FloatingButton";
import { MeaningFul } from "@/component/Common/Meaningful";
import {
  InspectorContext,
  InspectorProvider,
} from "@/context/InspectorContext";
import { uniform } from "@/styles";
import { cardContainerStyle, cardGridStyle, cardStyle } from "@/styles/card";
import { breadcrumbStyle, layout } from "@/styles/common";
import { useContext, useState } from "react";

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
    name: "Home",
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
        label: "something?",
        index: 2,
      },
      {
        id: "{Landing}-{version}-3",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 3,
      },
      {
        id: "{Landing}-{version}-4",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 4,
      },
      {
        id: "{Landing}-{version}-2",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 5,
      },
      {
        id: "{Landing}-{version}-3",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 6,
      },
      {
        id: "{Landing}-{version}-4",
        url: "https://inspgr.id/app/uploads/2024/06/art-santiago-oddis-feature.jpg",
        label: "something?",
        index: 7,
      },
    ],
  },
];
export default function ContentSpecificVersionPage() {
  // get all the data assiociated to current version
  return (
    <div>
      <MeaningFul>
        <div {...uniform(breadcrumbStyle.commonLayoutPadding)}>
          <InspectorProvider>
            {mock.map((flow) => {
              return <Senario key={flow.name} {...flow} />;
            })}
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
            hidden ? cardContainerStyle.hidden : null,
            isEmpty ? cardContainerStyle.empty : null
          )}
          onClick={toggleFolding}
        >
          {name}
          {hidden && <div {...uniform(cardContainerStyle.cross)} />}
        </span>
        <div {...uniform(cardContainerStyle.flowDecorRight)} />
      </div>

      <div
        {...uniform(
          cardGridStyle.container,
          open ? cardGridStyle.open : cardGridStyle.close
        )}
      >
        {flows.map((flow) => {
          return (
            <Flow
              key={flow.id}
              dimension={dimension}
              hidden={hidden}
              {...flow}
            />
          );
        })}
      </div>
    </div>
  );
};

interface FlowProps {
  url: string;
  label?: string;
  dimension: string;
  hidden: boolean;
}

const Flow = ({ url, label, dimension, hidden }: FlowProps) => {
  const { openInspector } = useContext(InspectorContext)!;
  return (
    <div
      {...uniform(
        layout.cflex11,
        cardStyle.container,
        hidden ? cardStyle.hidden : null
      )}
    >
      <img
        src={url}
        alt={`reference-image-${label}`}
        {...uniform(cardStyle.image(dimension))}
        onClick={() => openInspector(url, dimension)}
      />
      <span {...uniform(cardStyle.label)}>{label}</span>
    </div>
  );
};
