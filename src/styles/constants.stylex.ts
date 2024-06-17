import * as stylex from '@stylexjs/stylex';

export const styleConstant = stylex.defineVars({
  maxWidth: '1600px',
});


export const color = stylex.defineVars({
  primary: '#C70136',
  secondary: '#0C1844',
  supporting: '#FF6969',
  tail: '#FFF5E1',
  white: '#ffffff',
  topLayer: '#e3e7e8',
  shadedWhite: '#FBFBFB',
  shadedWhiteF2: '#F9F9F9',
  textColor: 'rgba(12,24,68, 0.5)'

})

export const shadow = stylex.defineVars({
  black05: 'rgba(0,0,0,0.05)'
})

export const fontSize = stylex.defineVars({
  mediumu4: '2.4rem',
  medium: '2rem',
  mediumd1: '1.9rem',
  mediumd2: '1.8rem',
  mediumd3: '1.7rem',
  mediumd4: '1.6rem',
  mediumd5: '1.5rem',
  smallu4: '1.4rem',
  smallu3: '1.3rem',
  smallu2: '1.2rem',
  smallu1: '1.1rem',
  small: '1rem'
})

export const transition = stylex.defineVars({
  t_3: "all 0.3s ease",
  t_2: "all 0.2s ease",
  t_1: "all 0.1s ease",
  t_3_d_1: "all 0.3s 0.1s ease",
  t_2_d_1: "all 0.2s 0.1s ease",
  t_1_d_1: "all 0.1s 0.1s ease",
})

export const border = stylex.defineVars({

  basic: '1px solid rgba(12,24,68, 0.2)',
  basicW2: '2px solid rgba(12,24,68, 0.2)',
  basicW3: '3px solid rgba(12,24,68, 0.2)',
  basicW4: '4px solid rgba(12,24,68, 0.2)',
  black: '1px solid rgba(0,0,0, 0.05)',
  blackW2: '2px solid rgba(0,0,0, 0.05)',
  blackW3: '3px solid rgba(0,0,0, 0.05)',
  blackS: '1px solid rgba(0,0,0, 0.3)',
  blackSW2: '2px solid rgba(0,0,0, 0.3)',
  blackSW3: '3px solid rgba(0,0,0, 0.3)',
  secondary: `1px solid rgba(12,24,68, 1)`,
  secondaryW2: `2px solid rgba(12,24,68, 1)`,
  secondaryW3: `3px solid rgba(12,24,68, 1)`,
  supporting: `1px solid #FF6969`,
  supportingW2: `2px solid #FF6969`,
  supportingW3: `3px solid #FF6969`,
})

export const pseudo = stylex.defineVars({
  contentItemTransform: 'translateX(0px)'
})