"use client";
import { Data, DataHandler } from "@/component/Common/Data";
import { Division } from "@/component/Common/Division";
import { FloatingButton } from "@/component/Common/FloatingButton";
import { MeaningFul } from "@/component/Common/Meaningful";
import { uniform } from "@/styles";
import { layout } from "@/styles/common";
import { contentSpecificPageStyle } from "@/styles/contentSpecificPage";
import { dataStyle } from "@/styles/data";
import { useRef } from "react";
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
    dimension: "2:1",
    index: 1,
  },
  {
    value: "landing",
    dimension: "1:1",
    index: 2,
  },
  {
    value: "login",
    dimension: "2:3",
    index: 3,
  },
];

const mockValue = ["orange", "coconut"];
export default function ContentSpecificEditPage() {
  const flowRef = useRef<DataHandler>(null);
  const nameRef = useRef<DataHandler>(null);
  const tagsRef = useRef<DataHandler>(null);

  function onSubmit(e: SubmitEvent) {
    e.preventDefault();
    const data: Record<string, any> = {};
    if (flowRef.current && nameRef.current && tagsRef.current) {
      data["flow"] = flowRef.current.getData();
      data["name"] = nameRef.current.getData();
      data["tags"] = tagsRef.current.getData();
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit as any}>
        <MeaningFul>
          <div {...uniform(layout.cflex11, contentSpecificPageStyle.container)}>
            <Data
              ref={nameRef}
              dataId="name"
              type="text"
              label="컨텐츠 이름"
              value="Sample content name"
              comment="화면에 보여질 컨텐츠의 이름이에요, 컨텐츠 이름은 한번 정하면 바꿀 수 없어요"
              editable
            />
            <Division />
            <Data
              ref={flowRef}
              dataId="flowList"
              type="orderedList"
              label="시나리오 리스트"
              comment="실제 화면에는 아래 정렬된 순서대로 나타나요, 순서를 바꾸고 싶은 사나리오들의 앞에 있는 버튼을 클릭해서 서로 순서를 바꿀 수 있어요"
              value={flowMock}
              editable
            />
            <Division />
            <Data
              ref={tagsRef}
              dataId="tags"
              type="keyword"
              label="태그"
              value={mockValue}
              options={mock}
              comment="컨텐츠의 태그를 나타내요, 현재로썬 아무런 기능이 없어요"
              editable
            />
            <Division />
            <Data
              dataId="lastUpdate"
              type="text"
              label="마지막 업데이트"
              value="2024/06/17 - 09:00:00"
            />

            <input
              type="submit"
              {...uniform(dataStyle.saveButton)}
              value="저장하기"
            />
          </div>
        </MeaningFul>
      </form>
      <FloatingButton />
    </div>
  );
}
