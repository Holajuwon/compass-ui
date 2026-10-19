import { theme, extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  ...theme,
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "Fraunces, Georgia, serif",
    body: "DM Sans, sans-serif",
  },
  colors: {
    ...theme.colors,
    brand: {
      50: "#f4f9df",
      100: "#e8f2bd",
      200: "#d9eb97",
      300: "#c9e46f",
      400: "#bce34e",
      500: "#a6c834",
      600: "#829f27",
      700: "#61771f",
      800: "#43531a",
      900: "#2d3914",
    },
    ink: "#17231f",
    paper: "#f4f5ef",
    signal: "#d8fb55",
    coral: {
      50: "#fff1ec",
      100: "#fbd8ce",
      200: "#f5b8a8",
      300: "#ed9884",
      400: "#df755f",
      500: "#c85e49",
      600: "#a64837",
      700: "#81382c",
      800: "#5e2b23",
      900: "#3e201a",
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontFamily: "Fraunces, Georgia, serif",
        fontWeight: 500,
      },
    },
    Divider: {
      baseStyle: {
        colorScheme: "black",
        fontWeight: "bold",
      },
    },
  },
});
