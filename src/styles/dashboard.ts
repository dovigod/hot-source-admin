import * as stylex from "@stylexjs/stylex";
import { styleConstant, shadow, color, fontSize, transition, border } from "./constants.stylex";



export const roofStyle = stylex.create({
  layout: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
  },
  container: {
    width: '100%',
    maxWidth: styleConstant.maxWidth,
    display: 'flex',
    height: '110px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: color.primary,
    padding: '10px 30px',
    borderBottomLeftRadius: '16px',
    borderBottomRightRadius: '16px'

  },
  logo: {
    color: color.white,
    fontSize: fontSize.medium
  },
  auth: {
    color: color.white,
    fontSize: fontSize.medium
  }
})

export const navigationStyle = stylex.create({

  container: {
    maxWidth: "300px",
    width: "100%",
    transition: transition.t_2,
    marginBottom: '24px',

  },
  urlComponentWrapper: {
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    marginBottom: '2px'
  },
  urlComponent: {
    color: color.secondary,
    lineHeight: '150%',
    letterSpacing: '0.5px',
    fontSize: fontSize.mediumd5,
    textTransform: 'capitalize',
    fontWeight: 'bold',
    textDecoration: {
      default: 'none',
      ':hover': 'underline'
    },
    maxWidth: '180px',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'elipsis'
  },
  description: {
    color: color.secondary,
    fontSize: fontSize.smallu2,
    whiteSpace: 'nowrap'
  },
  comment: {
    color: color.secondary,
    opacity: '0.8',
    fontSize: fontSize.small,
    marginTop: '4px',
    whiteSpace: 'nowrap'
  },
  floating: {
    position: 'fixed',
    zIndex: 1000,
    borderRadius: '50%',
    width: '120px',
    height: '120px',
    bottom: '50px',
    right: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    transition: transition.t_3,
    backgroundColor: {
      'default': color.primary,
      ':hover': color.supporting
    },
  },
  floatingButtonText: {
    color: 'white',
    fontSize: fontSize.mediumu4,
    letterSpacing: '2px',
  },
})

export const dashboardStyle = stylex.create({
  container: {
    display: "flex",
    flexDirection: 'column',
    padding: '16px 32px',
    paddingTop: '146px',
    maxWidth: styleConstant.maxWidth,
    width: '100%',
    minHeight: '100vh'
  },

  contentLayout: {
    width: '100%',
    backgroundColor: 'white',
    // padding: '32px 32px',
    borderRadius: '8px',
    boxShadow: `2px 2px 6px ${shadow.black05}, -2px -2px 6px ${shadow.black05}`,
    border: border.basicW2
  }
})
