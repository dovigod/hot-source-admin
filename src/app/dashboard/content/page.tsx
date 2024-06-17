import { FloatingButton } from "@/component/Common/FloatingButton";
import { MeaningFul } from "@/component/Common/Meaningful";
import { Pagnation } from "@/component/Common/Pagnation";
import { Content } from "@/component/Content";
import { uniform } from "@/styles";
import { layout, layoutStyle } from "@/styles/common";
import { contentPageStyle, itemStyle } from "@/styles/contentPage";
import { Suspense } from "react";

const generateDummyContent = (index: number) => {
  const coverImg =
    "https://t4.ftcdn.net/jpg/07/39/45/67/360_F_739456755_cN2rQC9mmKTpwrZHENYcMS2EQ4XNKFaU.webp";
  const id = `rand_id_${index}`;
  const name = `hot-source-content-${index}`;
  const version = Math.round(Math.random()) % 2 === 1 ? "1.0.0" : "0.0.0";
  const lastModified = new Date().toUTCString();
  return {
    id,
    name,
    coverImg,
    index,
    lastModified,
    version,
  };
};

export default function ContentPage() {
  // getContentList
  const CNT = 5;
  const dummy = new Array(CNT)
    .fill(0)
    .map((_, idx) => generateDummyContent(idx));

  return (
    <div
      {...uniform(layoutStyle.flex, layoutStyle.column, layoutStyle.acenter)}
    >
      <MeaningFul>
        <div {...uniform(layout.flex13, contentPageStyle.header)}>
          <div {...uniform(contentPageStyle.indexItem("40%"))}>커버 이미지</div>
          <div {...uniform(contentPageStyle.indexItem("100%"))}>이름</div>
          <div {...uniform(contentPageStyle.indexItem("100%"))}>현재 버전</div>
          <div {...uniform(contentPageStyle.indexItem("100%"))}>
            마지막 수정
          </div>
        </div>
        <div {...uniform(contentPageStyle.reciept)}>
          <span {...uniform(contentPageStyle.recieptText)}>
            {" "}
            총 32개 중 6개
          </span>
        </div>
        <ul {...uniform(contentPageStyle.contentsField)}>
          {dummy
            .sort((a, b) => b.index - a.index)
            .map((content) => (
              <Content key={`content-${content.id}`} {...content} />
            ))}
        </ul>
      </MeaningFul>
      <Suspense fallback={null}>
        <Pagnation length={5} />
      </Suspense>
      <FloatingButton />
    </div>
  );
}

// version
//last modification
// content name
// cover image (maybe logo?)
//
