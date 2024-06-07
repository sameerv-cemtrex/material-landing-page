"use client";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#111B47",
    },
    // secondary: {
    //   main: "#292929",
    // },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) =>
          theme.unstable_sx({
            px: 1.5,
            py: 0.4,
            borderRadius: 5,
            textTransform: "capitalize",
          }),

        outlined: ({ theme }) =>
          theme.unstable_sx({
            border: "1px solid",
          }),
      },
    },
  },
});

const Theme = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
