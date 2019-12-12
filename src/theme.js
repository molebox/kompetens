export default {
  // this enables the color modes feature
  // and is used as the name for the top-level colors object
  initialColorMode: "light",
  // optionally enable custom properties
  // to help avoid a flash of colors on page load
  useCustomProperties: true,
  colors: {
    // these are the default colors
    // https://coolors.co/00171f-003459-124e78-7fb7be-ead637
    white: "#FFFFFF",
    black: "#000000",
    richBlack: "#00171F",
    darkBlue: "#003459",
    softBlue: "#124E78",
    lightBlue: "#7FB7BE",
    sand: "#202020"
  },
  fonts: {
    roboto: "Roboto",
    heading: "Inconsolata"
  },
  fontWeights: {
    body: 300,
    heading: 400,
    bold: 700
  },
  lineHeights: {
    body: "110%",
    heading: 1.125,
    logo: "82px"
  },
  letterSpacing: {
    body: "2px",
    text: "5px"
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72]
};
