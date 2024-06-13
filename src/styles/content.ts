import * as stylex from "@stylexjs/stylex";



export const contentStyle = stylex.create({
  container: {
    display: "flex",
    border: "1px solid black",
    padding: "10px",
    alignItems: "center",
    gap: "20px",
    cursor: "pointer",
    borderRadius: "10px",
    backgroundColor: 'tomato',
    marginBottom: '10px',
  },
  cover: {
    width: "100px",
    height: "100px",
    borderRadius: "10px",
    userSelect: 'none',
  },
  name: {
    fontSize: "16px",
    fontWeight: 500,
    userSelect: 'none',
  }
})
