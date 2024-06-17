"use client";
import { uniform } from "@/styles";
import { LayoutProps } from "../../../../../.next/types/app/layout";
import { contentSpecificLayoutStyle } from "@/styles/contentSpecificPage";
import { DropdownInput } from "@/component/Common/input/DropdownInput";
import { useParams, usePathname, useRouter } from "next/navigation";

const mockData = [
  {
    label: "1.0.0",
    value: "1.0.0",
  },
  {
    label: "2.0.0",
    value: "2.0.0",
  },
  {
    label: "3.0.0",
    value: "3.0.0",
  },
  {
    label: "0.0.0",
    value: "0.0.0",
  },
];
export default function ContentSpecificLayout({
  children,
  params,
}: LayoutProps) {
  // get version lists with params (name)

  const router = useRouter();
  const pathname = usePathname();
  const pathSegments = pathname.split("/");
  const pathParams = useParams();
  const currentVersion = pathParams["version"] as string | undefined;
  const version = "";

  //@TODO if currentVersion not in actual options list , -> redirect to home
  function onVersionSelect(version: string | number) {
    const lastIdx = pathSegments.length - 1;

    if (pathSegments[lastIdx] === "edit") {
      const editSegment = pathSegments.pop();
      if ("version" in pathParams) {
        pathSegments.pop();
      }
      pathSegments.push(version as string);
      pathSegments.push(editSegment!);
    } else {
      if ("version" in pathParams) {
        pathSegments.pop();
      }
      pathSegments.push(version as string);
    }
    router.push(pathSegments.join("/"));
  }
  return (
    <div {...uniform(contentSpecificLayoutStyle.container)}>
      <div {...uniform(contentSpecificLayoutStyle.versionSelector)}>
        <DropdownInput
          dataId="$versionSelector"
          placeholder="특정 버전을 선택해 주세요"
          options={mockData}
          value={currentVersion}
          onSelection={onVersionSelect}
        />
      </div>
      {children}
    </div>
  );
}
