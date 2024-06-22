import * as stylex from '@stylexjs/stylex';
import { color, fontSize } from './constants.stylex';

export const inspectorStyle = stylex.create({
  background: {
    position: 'fixed',
    zIndex: '10000',
    width: '100vw',
    height: '100vh',
    top: '0',
    left: '0',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },

  section: {
    width: 'min(70vw, 80vh)',
    minWidth: '600px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '24px'
  },
  stage: {
    width: '100%',
    maxWidth: '40vw',
    minWidth: ' 400px',
    height: '60vh',
    maxHeight: '800px',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px'
  },
  image: (aspectRatio: string) => ({
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    aspectRatio,
    boxShadow: '2px 2px 6px rgba(0,0,0,0.2), -2px -2px 6px rgba(0,0,0,0.2)'
  }),
  infoStage: {
    width: '100%',
    maxWidth: '40vw',
    minWidth: ' 400px',
    height: '60vh',
    maxHeight: '800px',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '8px',
    padding: '24px',
    gap: '8px',
    position: 'relative'
  },
  info: {
    gap: '12px',
    width: '100%'
  },
  label: {
    fontSize: fontSize.mediumd3,
    color: color.secondary
  },

  value: {
    fontSize: fontSize.mediumd3,
    fontWeight: 'bold',
    color: color.secondary
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
    backgroundColor: color.white,
    border: 'none',
    fontWeight: 'bold',
    color: color.secondary,
    cursor: 'pointer'
  }
})