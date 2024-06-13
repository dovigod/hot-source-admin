import { uniform } from "@/styles";
import { layoutStyle } from "@/styles/common";
import { roofStyle } from "@/styles/dashboard";
export function Roof() {
  return (
    <div {...uniform(layoutStyle.flex, layoutStyle.jcenter, roofStyle.layout)}>
      <div {...uniform(roofStyle.container)}>
        <span {...uniform(roofStyle.logo)}>Hot source Logo</span>
        <span {...uniform(roofStyle.auth)}>Maybe some logout stuffs..?</span>
      </div>
    </div>
  );
}
