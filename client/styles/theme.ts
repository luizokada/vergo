import { createTheme, NextUIProvider, Text } from "@nextui-org/react";

const theme = createTheme({
  type: "light",
  theme: {
    colors: {
      // brand colors
      yellowLight: "#F3D775",
      yellow: "#F1C010",
      greenLight: "#A1DA74",
      green: "#448114",
      brownLight: "#39270C",
      brown: "#7B633F",
      gradient:
        "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
      linkPrimary: "#FFFFFF",
      // ...  more colors
    },
    space: {},
    fonts: {
      title: "'Fairplay Display', 'sans-serif';",
      text: "Roboto",
      smallerText: "Roboto",
    },
  },
});

export default theme;
