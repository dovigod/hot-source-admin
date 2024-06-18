"use client";
import { Data } from "@/component/Common/Data";
import { Division } from "@/component/Common/Division";
import { FloatingButton } from "@/component/Common/FloatingButton";
import { MeaningFul } from "@/component/Common/Meaningful";
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { contentSpecificPageStyle } from "@/styles/contentSpecificPage";

const mock = [
  {
    label: "orange",
    value: "orange",
  },
  {
    label: "hot-source",
    value: "hot-sauce",
  },
  {
    label: "coconut",
    value: "coconut",
  },
];

const flowMock = [
  {
    value: "home",
    index: 1,
  },
  {
    value: "landing",
    index: 2,
  },
  {
    value: "login",
    index: 3,
  },
];

const mockValue = ["orange", "hot-source", "coconut"];
export default function ContentSpecificPage() {
  return (
    <div>
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          console.dir(e);
        }}
      >
        <MeaningFul>
          <div {...uniform(layout.cflex11, contentSpecificPageStyle.container)}>
            <Data
              dataId="name"
              type="text"
              label="컨텐츠 이름"
              value="Sample content name"
              comment="화면에 보여질 컨텐츠의 이름이에요, 컨텐츠 이름은 한번 정하면 바꿀 수 없어요"
            />
            <Division />
            <Data
              dataId="flowList"
              type="orderedList"
              label="보유중인 플로우"
              comment="각 컨텐츠가 가지고 있는 흐름들을 모아놨어요, 실제 화면에는 아래 정렬된 순서대로 나타나요"
              value={flowMock}
            />
            <Division />
            <Data
              dataId="tags"
              type="keyword"
              label="태그"
              value={mockValue}
              options={mock}
              comment="컨텐츠의 태그를 나타내요, 현재로썬 아무런 기능이 없어요"
            />
            <Division />
            <Data
              dataId="lastUpdate"
              type="text"
              label="마지막 업데이트"
              value="2024/06/17 - 09:00:00"
            />
          </div>
        </MeaningFul>
      </form>
      <FloatingButton />
    </div>
  );
}
