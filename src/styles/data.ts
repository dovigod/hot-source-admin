import * as stylex from '@stylexjs/stylex';
import { border, color, fontSize, transition } from './constants.stylex';

export const dataStyle = stylex.create({
  container: {
    gap: '1.5rem',
    width: '100%'
  },
  label: {
    fontWeight: 'bold',
    fontSize: fontSize.medium,
    textTransform: 'capitalize',
    color: color.secondary,
    display: 'flex',
    gap: '8px'
  },
  textInput: {
    padding: '8px 36px 8px 16px',
    outline: 'none',
    letterSpacing: '1px',
    lineHeight: '130%',
    border: {
      default: border.basic,
      ':focus': border.secondary,
      ':hover': border.blackS
    },
    fontSize: '16px',
    borderRadius: '8px',
    transition: transition.t_1,
    width: '100%',
    color: color.secondary,
    position: 'relative'
  },
  disabled: {
    border: border.basic,
  },
  commentButton: {
    width: '20px',
    height: '20px',
    backgroundColor: color.secondary,
    borderRadius: '50%',
    padding: '4px',
    color: color.white,
    cursor: 'help',
    position: 'relative'
  },
  comment: {
    position: 'absolute',
    bottom: 'calc(100% + 8px)',
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '6px',
    backgroundColor: color.secondary,
    padding: '8px',
    maxWidth: '300px',
    width: 'max-content',
    textAlign: 'center',
    wordBreak: 'break-word'
  },
  saveButton: {
    padding: '12px 24px',
    borderRadius: '6px',
    fontWeight: 'bold',
    border: 'none',
    color: {
      default: color.white
    },
    backgroundColor: {
      default: color.secondary,
      ':hover': color.primary
    },
    transition: transition.t_2,
    fontSize: fontSize.medium,
    cursor: 'pointer'
  }
})

export const dropdownInputStyle = stylex.create({
  container: {
    position: 'relative'
  },
  dropdownContainer: {
    position: 'absolute',
    top: 'calc(100% + 6px)',
    left: '0px',
    width: '100%',
    height: 'fit-content',
    maxHeight: '0px',
    overflow: 'hidden',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: color.white,
    boxSizing: 'border-box',
    zIndex: 1000
  },

  button: {
    // borderRadius: '8px',
    transition: transition.t_2,
    backgroundColor: {
      default: 'white',
      ':hover': color.primary
    },
    padding: '8px 12px',
    width: '100%',
    fontSize: fontSize.smallu4,
    textAlign: 'center',
    color: {
      default: color.secondary,
      ':hover': color.white
    },
    fontWeight: {
      default: 'default',
      ':hover': 'bold'
    },
    cursor: 'pointer',
    border: 'none'
  },

  disabled: {
    color: color.secondary,
    opacity: 0.7,
    pointerEvents: 'none'
  },
  pseudoShow: {
    maxHeight: '400px',
    border: border.basicW2,
  },
  icon: {
    position: 'absolute',
    top: '50%',
    right: '8px',
    transform: 'translate(0%,-50%)',
    transformOrigin: 'center center'
  },
  iconClicked: {
    transform: 'translate(0%,-50%) rotateX(180deg)',
  }
})

export const keywordInputStyle = stylex.create({
  container: {
    position: 'relative',
    width: '100%'
  },
  keywordContainer: {
    width: '100%',
    height: 'fit-content',
    maxHeight: '400px',
    overflow: 'scroll',
    border: border.basic,
    borderRadius: '12px',
    backgroundColor: color.white,
    padding: '20px',
    flexWrap: 'wrap',
    display: 'flex',
    gap: '8px'
  },
  containerDisabled: {
    backgroundColor: '#FAFAFA'
  },

  button: {
    borderRadius: '24px',
    backgroundColor: {
      default: color.tail,
      ':hover': color.supporting
    },
    color: {
      default: color.secondary,
      ':hover': color.white
    },
    transition: transition.t_2,
    padding: '12px 16px',
    width: 'fit-content',
    fontSize: fontSize.smallu4,
    textAlign: 'center',
    cursor: 'pointer',
    border: 'none',
    fontWeight: 'thin'
  },
  buttonSelected: {
    backgroundColor: color.primary,
    color: color.white,
  },
  unSelectable: {
    cursor: 'default',
    pointerEvents: 'none'
  }
})

export const orderedListInputStyle = stylex.create({
  container: {
    width: 'fit-content',
    gap: '24px'
  },
  listContainer: {
    listStyle: 'none',
    gap: '4px',
    padding: '0',
    margin: '0',
  },
  list: {
    fontSize: fontSize.mediumd4,
    color: color.secondary,
    gap: '8px'
  },
  listIndex: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    fontWeight: 'light',
    color: color.white,
    backgroundColor: color.secondary
  },
  listIndexText: {
    position: 'relative',
    top: '1px',
    fontSize: fontSize.mediumd5,
  },
  listContent: {
    lineHeight: '150%',
    fontWeight: 'thin',
    outline: 'none',
    border: 'none',
    borderBottom: border.basic,
    textAlign: 'center'
  },
  addButton: {
    width: '32px',
    height: '32px',
    backgroundColor: {
      default: color.secondary,
      ':hover': color.primary
    },
    borderRadius: '50%',
    color: color.white,
    fontWeight: 'bold',
    fontStyle: fontSize.mediumu4,
    cursor: 'pointer',
    transition: transition.t_2,
    border: 'none'
  },

  appendButton: {
    backgroundColor: {
      default: color.secondary,
      ':hover': color.primary
    },
    color: color.white,
    cursor: 'pointer',
    border: 'none',
    padding: '5px 12px',
    borderRadius: '4px',
    textAlign: 'center',
    fontWeight: 'thin',
    transition: transition.t_2,
    position: 'absolute',
    bottom: '0px',
    left: 'calc(100% + 12px)',
    width: 'max-content'
  },
  newRow: {
    position: 'relative'
  }

})