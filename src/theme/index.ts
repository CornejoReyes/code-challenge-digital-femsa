import { extendTheme } from 'native-base';

const customTheme = {
  colors: {
    main: '#334FFA',
    secondary: '#CFD6FF',
  },
  components: {
    Button: {
      baseStyle: {
        _text: {
          fontWeight: 'bold',
        },
        rounded: 'lg',
        shadow: '4',
      },
      variants: {
        main() {
          return {
            bg: 'main',
            _text: {
              color: 'white',
            },
            _pressed: {
              bg: 'blue.700',
            },
          };
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

type CustomTheme = typeof theme;

declare module 'native-base' {
  interface ICustomTheme extends CustomTheme {}
}

export default theme;
