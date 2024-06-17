import * as stylex from '@stylexjs/stylex';
import { border, color, fontSize } from './constants.stylex';

export const pagnationStyle = stylex.create({
  container: {
    gap: '8px',
    marginTop: '20px'
  },
  button: {
    backgroundColor: color.white,
    borderRadius: '4px',
    padding: '6px',
    width: '45px',
    height: '45px',
    outline: 'none',
    border: border.basic,
    cursor: 'pointer',
    fontSize: fontSize.mediumd3,
    fontWeight: 'bold',
    color: color.secondary
  },
  active: {
    // backgroundColor: color.shadedWhiteF2,
    backgroundColor: color.primary,
    border: border.blackW2,
    // color: 'rgba(0,0,0,0.5)',
    color: color.white
    // boxShadow: 'inset 2px 2px 5px rgba(0,0,0,0.1), inset -2px -2px 5px rgba(0,0,0,0.1)'
  }
})