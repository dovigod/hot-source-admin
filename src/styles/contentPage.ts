import * as stylex from "@stylexjs/stylex";
import { border, color, fontSize, shadow, transition, pseudo } from "./constants.stylex";

export const contentPageStyle = stylex.create({
  header: {
    width: '100%',
    padding: '32px 32px',
    borderBottom: border.basic
  },
  contentsField: {
    padding: '0px 0px 32px 0px',
    overflowX: 'hidden',
    height: '500px',
    listStyle: 'none',
    margin: '0px'
  },
  indexItem: (width) => ({
    width,
    fontSize: fontSize.mediumd5,
    fontWeight: 'bold'
  }),
  reciept: {
    padding: '16px 32px',
    backgroundColor: color.shadedWhite,
    borderBottom: border.blackW2
  },
  recieptText: {
    color: color.secondary,
    fontSize: fontSize.mediumd5,
    opacity: '0.7',
  },

})


export const itemEditableStyle = stylex.create({
  container: {
    width: '100%',
    backgroundColor: {
      default: color.white,
      ':hover': color.shadedWhiteF2
    },
    // [pseudo.contentItemTransform]: {
    //   default: 'translateX(0px)',
    //   ':hover': 'translateX(100px)'
    // },
    transform: {
      default: 'translateX(0px)',
      ':hover': 'translateX(100px)'
    },
    transition: transition.t_2,
    position: 'relative',
    padding: '18px 32px',
    borderBottom: border.basic,
    cursor: 'pointer',
  },
  actionIndicator: {
    position: 'absolute',
    top: '0px',
    width: '100px',
    left: '-100px',
    height: '100%',
    color: 'black',
    backgroundColor: color.primary,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
})
export const itemStyle = stylex.create({
  container: {
    width: '100%',
    backgroundColor: {
      default: color.white,
      ':hover': color.shadedWhiteF2
    },
    transition: transition.t_2,
    position: 'relative',
    padding: '18px 32px',
    borderBottom: border.basic,
    cursor: 'pointer',
  },
  text: {
    fontSize: fontSize.mediumd2,
    userSelect: 'none'
  },
  index: (width) => ({
    width,

  }),
  coverWrapper: {
    borderRadius: '4px',
    width: '60px',
    height: '60px',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    boxShadow: '1px 1px 6px rgba(0, 0, 0, 0.07), -1px -1px 6px rgba(0, 0, 0, 0.07)'
  },
  cover: {
    width: '100%',
    height: '100%',
    borderRadius: '4px',
    userSelect: 'none'
  }
})