export const theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fonts: {
    main: 'Montserrat',
    heading: 'Montserrat',
  },
  fontSizes: [12, 14, 16, 24, 32],
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
    black: '#000',
    bombay: '#ACAFB4',
    mercury: '#E3E3E3',
    white: '#fff',
    teal: '#008080',
    confetti: '#EDE861',
    crimson: '#E61614',
    lightCrimson: '#F83836',
    christi: '#35BC15',
    lightChristi: '#57DE37',
    turbo: '#FAF100',
    lightTurbo: '#FCF322',
    scoripion: '#616161',
  },
  headings: {
    secondary: {
      fontSize: 24,
      paddingBottom: 10,
      color: 'black',
      borderBottom: '2px solid #222',
      marginBottom: 12,
    },
  },
  forms: {
    input: {
      border: '2px solid #008080',
    },
    textarea: {
      height: 200,
      border: '2px solid #008080',
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    navLink: {
      textTransform: 'uppercase',
      color: 'black',
      fontSize: 18,
    },
  },
  styles: {
    root: {
      fontFamily: 'main',
      fontWeight: 'body',
      color: 'black',
      bg: 'mercury',
    },
  },
};
