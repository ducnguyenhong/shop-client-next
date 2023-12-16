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
        fontSize: '14px'
      }
    }
  }
};

const ColorConfig = {
  colors: {
    // primary: { 1: '#40407a', 2: '#353564', 3: '#2c2c54' },
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
