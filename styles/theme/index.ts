import { extendTheme, withDefaultProps } from "@chakra-ui/react";

const theme = extendTheme(
  {
    styles: {
      "html, body": {
        height: "100%",
      },
    },
    breakpoints: {
      "2md": "43.75em",
      "3xl": "96.25em",
      "4xl": "120em",
      "5xl": "140em",
    },
    fonts: {
      heading: "Clash Display, sans-serif",
      "dm-sans": "DM Sans, sans-serif",
      "clash-display": "Clash Display, sans-serif",
      "clash-grotesk": "Clash Grotesk, sans-serif",
    },
    components: {
      CircularProgress: {
        baseStyle: () => ({
          track: {
            bg: "gray.100",
          },
          filledTrack: {
            bg: "transparent",
            position: "relative",
            _before: {
              content: '""',
              display: "block",
              position: "absolute",
              top: "0",
              right: "0",
              bottom: "0",
              left: "0",
              background: "linear-gradient(to right, red, yellow)",
              borderRadius: "50%",
            },
          },
        }),
      },

      Text: {
        baseStyle: {
          color: "white",
        },
      },
    },
  },
  // withDefaultColorScheme({
  //   colorScheme: "green",
  //   components: ["CloseButton"],
  // }),
  withDefaultProps({
    defaultProps: {
      color: "white",
      fontWeight: "light",
    },
    components: ["Text"],
  })
);

export { theme };
