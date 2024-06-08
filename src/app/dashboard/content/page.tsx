import * as stylex from "@stylexjs/stylex";

const styles = stylex.create({
  base: {
    fontSize: "100px",
    color: "Blue",
  },

  fons: {
    fontSize: 100,
    color: "red",
  },
});
export default function ContentPage() {
  // getContentList
  return <div {...stylex.props(styles.fons)}>dawd</div>;
}
