import * as stylex from '@stylexjs/stylex';

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
    alignItems: 'center'
  },
  stage: {
    width: '100%',
    height: 'fit-content',
    overflow: 'scroll',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: '8px'


  },
  image: {
    borderRadius: '8px',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    // overflow: 'visible'
  }
})