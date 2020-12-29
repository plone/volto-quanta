export default {
  fonts: {
    body: 'Metropolis, sans-serif',
    heading: 'Metropolis, sans-serif',
    monospace: 'Menlo, monospace',
    cmsui: 'Metropolis, sans-serif',
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#33e',
    redBallet: '#FEE9E7',
    redCandy: '#D0220B',
    redFlamingo: '#FCD0CA',
    redRose: '#F54E38',
    greySnow: '#F3F5F7',
    greyDolphin: '#8296A6',
    greyPidgeon: '#617789',
    greySmoke: '#E4E8EC',
    greySilver: '#C3CDD5',
    cobalt: '#2597F4',
    saphire: '#0B78D0',
  },
  forms: {
    label: {
      color: 'saphire',
      filled: {
        color: 'greyPidgeon',
      },
    },
    input: {
      fontFamily: 'cmsui',
      border: 'none',
      borderRadius: '6px',
      backgroundColor: 'greySnow',
      padding: '11px 8px',
      lineHeight: '24px',
    },
    disabled: {
      variant: 'forms.input',
      borderColor: 'greySmoke',
      backgroundColor: '#fff',
      color: 'greySilver',
    },
    errored: {
      variant: 'forms.input',
      color: 'redCandy',
      backgroundColor: 'redBallet',
      hoverColor: 'redFlamingo',
      focusBorderColor: 'redRose',
    },
  },
  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    input: {
      fontFamily: 'body',

      help: {
        color: 'greyPidgeon',
      },
      hovered: {
        variant: 'forms.input',
        backgroundColor: 'greySmoke',
      },
      focused: {
        variant: 'forms.input',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderColor: 'cobalt',
        backgroundColor: 'transparent',
      },
    },
    label: {
      fontFamily: 'body',
    },
  },
};
