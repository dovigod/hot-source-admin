import * as stylex from "@stylexjs/stylex";
import { border } from "./constants.stylex";

export const layoutStyle = stylex.create({
  flex: {
    display: 'flex',
  },
  jcenter: {
    justifyContent: 'center'
  },
  jspaceBetween: {
    justifyContent: 'space-between'
  },
  jflexStart: {
    justifyContent: 'flex-start'
  },
  jflexEnd: {
    justifyContent: 'flex-end'
  },
  acenter: {
    alignItems: 'center'
  },
  aspaceBetween: {
    alignItems: 'space-between'
  },
  aflexStart: {
    alignItems: 'flex-start'
  },
  aflexEnd: {
    alignItems: 'flex-end'
  },
  column: {
    flexDirection: 'column'
  },
  relative: {
    position: 'relative'
  }
})

export const layout = stylex.create({

  flex11: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  flex22: {
    display: 'flex',
    justifyContent: 'center'
  },
  flex33: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  flex44: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  flex55: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  flex66: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  flex77: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  flex88: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  flex99: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  flex13: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  flex36: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  flex79: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between'
  },


  cflex11: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  cflex22: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  cflex33: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-end'
  },
  cflex44: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  cflex55: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cflex66: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  cflex77: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },
  cflex88: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cflex99: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
  cflex17: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  cflex28: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  cflex39: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },

})


export const breadcrumbStyle = stylex.create({
  division: {
    height: '0px',
    width: '100%',
    borderTop: border.basic
  }
})