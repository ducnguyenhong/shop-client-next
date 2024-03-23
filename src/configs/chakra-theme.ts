import { extendTheme } from '@chakra-ui/react';

const BreakpointConfig = {
  breakpoints: {
    xs: '320px', // mobile
    sm: '480px',
    md: '768px', // tablet
    lg: '992px',
    xl: '1280px', // desktop
    '2xl': '1600px'
  }
};

const ComponentsTheme = {
  components: {
    Text: {
      baseStyle: {
        fontSize: '14px',
        color: '#1d2128'
      }
    }
  }
};

const ColorConfig = {
  colors: {
    main: { 1: '#0B5052' },
    sub: { 1: '#FF9E20', 2: '#ff9100' }
  }
};

const FontConfig = {
  fonts: {
    heading: `'Quicksand', sans-serif`
  }
};

export const chakraTheme = extendTheme({
  ...ComponentsTheme,
  ...FontConfig,
  ...ColorConfig,
  ...BreakpointConfig
  // ...MiscConfig,
  // ...GlobalConfig
});
