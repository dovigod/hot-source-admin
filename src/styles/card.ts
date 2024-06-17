import * as stylex from '@stylexjs/stylex';
import { color } from './constants.stylex';

export const cardStyle = stylex.create({
  container: {
    borderRadius: '8px',
    width: '12rem',
    aspectRatio: '3 / 4',
    backgroundColor: color.primary
  }
})