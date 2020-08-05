import 'styled-components';

declare module 'styled-components' {
  interface IColors {
    black: string;
    green: string;
  }

  //   interface ILayout {
  //     headerHeight: string;
  //     footerHeight: string;
  //   }

  //   interface IZIndex {
  //     layout: number;
  //     modal: number;
  //   }

  interface IFontSize {
    // textRegular: string;
    // textButton: string;
    // textFormTitle: string;
    // formMessage: string;
    link: string;
  }

  interface ITheme {
    colors: IColors;
    fontSize: IFontSize;
    // layout: ILayout;
    // zIndex: IZIndex;
  }

  interface IStyledComponentWithTheme {
    theme: ITheme;
  }
}
