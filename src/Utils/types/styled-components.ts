import 'styled-components';

declare module 'styled-components' {
  interface IColors {
    gold: string;
    black: string;
    white: string;
    grey: string;
  }

  interface IFontSize {
    link: string;
    normal: string;
    large: string;
  }

  interface ITheme {
    colors: IColors;
    fontSize: IFontSize;
  }

  interface IStyledComponentWithTheme {
    theme: ITheme;
  }
}
