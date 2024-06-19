import * as stylex from '@stylexjs/stylex';
import { border, color, fontSize, pseudo, transition } from './constants.stylex';


export const cardContainerStyle = stylex.create({
  container: {
    padding: '20px 0px 40px 0px'
  },
  flowLabelWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    width: '100%',
    marginBottom: '20px'
  },
  flowLabel: {
    fontSize: fontSize.mediumu4,
    fontWeight: 'bold',
    fontColor: color.secondary,
    letterSpacing: '0.5px',
    cursor: 'pointer',
    transition: transition.t_1,
    transform: {
      default: 'scale(1)',
      ':hover': 'scale(1.05)'
    }
  },
  flowDecorLeft: {
    width: '30px',
    borderTop: border.secondaryW2
  },
  flowDecorRight: {
    width: '100%',
    borderTop: border.secondaryW2
  },
  empty: {
    opacity: 0.5
  },
  hidden: {
    opacity: 0.7
  },
  cross: {
    position: 'absolute',
    width: '100%',
    top: '50%',
    left: '0px',
    height: '0px',
    borderTop: border.secondaryW2,
    transform: 'translateY(-50%)'
  }
})


export const cardGridStyle = stylex.create({
  container: {
    display: 'grid',
    width: '100%',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridColumnGap: '16px',
    gridRowGap: '16px',
    transition: transition.t_5,
    overflow: 'hidden',
    maxHeight: '100%'

  },
  open: {
    maxHeight: '1000vh'
  },
  close: {
    maxHeight: '0'
  }
})
export const cardStyle = stylex.create({
  container: {
    width: '100%',
    maxWidth: '320px',
    minWidth: '120px',
    gap: '4px',
    cursor: 'pointer',
    transformOrigin: 'center center',

    [pseudo.contentItemTransform]: {
      default: 'brightness(0.7)',
      ':hover': 'brightness(1)'
    },
    filter: pseudo.contentItemTransform,
    transition: transition.t_1
  },
  hidden: {
    [pseudo.contentItemTransform]: {
      default: 'grayscale(100%)',
      ':hover': 'grayscale(0%)'
    },
  },
  image: (dimension: string) => ({
    borderRadius: '8px',
    width: '100%',
    aspectRatio: dimension,
    backgroundColor: color.primary,
    objectFit: 'cover'
  }),
  label: {
    fontSize: fontSize.smallu4,
    color: color.secondary,
    opacity: 1
  }
})