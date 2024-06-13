import { Content } from "@/component/Content";
import { DragNDrop } from "@/component/DragNDrop";

const generateDummyContent = (index: number) => {
  const coverImg =
    "https://t4.ftcdn.net/jpg/07/39/45/67/360_F_739456755_cN2rQC9mmKTpwrZHENYcMS2EQ4XNKFaU.webp";
  const id = `rand_id_${index}`;
  const name = `hot-source-content-${index}`;
  return {
    id,
    name,
    coverImg,
    index,
  };
};

export default function ContentEditPage() {
  // getContentList
  const CNT = 5;
  const dummy = new Array(CNT)
    .fill(0)
    .map((_, idx) => generateDummyContent(idx));
  return <DragNDrop dataId="Content" data={dummy} render={Content} />;
}

// version
//last modification
// content name
// cover image (maybe logo?)
//
