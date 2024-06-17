import * as stylex from "@stylexjs/stylex";
import { border, color, fontSize, shadow, transition, pseudo } from "./constants.stylex";

export const contentSpecificPageStyle = stylex.create({
  container: {
    padding: '32px',
    width: '100%',
    gap: '3rem'
  },

})

export const contentSpecificLayoutStyle = stylex.create({
  container: {
    position: 'relative'
  },
  versionSelector: {
    position: "absolute",
    bottom: "calc(100% + 24px)",
    right: "0px",
  }
})