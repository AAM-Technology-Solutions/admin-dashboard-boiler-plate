import React from "react";
import { createTheme, CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";

const paper = "#FFFFFF";
const borderRadius = "10px";

export const GloablThemeProvider = (props: PropsWithChildren): JSX.Element => {
  const theme = createTheme({
    components: {
      MuiInputBase: {
        styleOverrides: {
          root: {
            "& fieldset": {
              borderRadius: `6px`,
            },
            "&.Mui-disabled": {
              cursor: "not-allowed",
              backgroundColor: "#F8F9FD",
            },
          },
        },
      },

      MuiButton: {
        defaultProps: {
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            borderRadius: 6,
            overflowX: "hidden",
            whiteSpace: "nowrap",
          },
        },
      },
      MuiTableHead: {
        styleOverrides: {
          root: {
            textTransform: "uppercase",
            fontWeight: "Medium",
            boxShadow: "none"
          },
        },
      },
      MuiTableContainer: {
        styleOverrides: {
          root: {
            borderRadius,
          },
        },
      },

      MuiDialogContent: {
        styleOverrides: {
          root: {
            paddingTop: "5px!important",
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          root: {
            "&.Mui-completed": {
              color: "#2e7d32",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {},
        },
      },
      MuiAccordion: {
        styleOverrides: {
          root: {
            overflowX: "hidden",
          },
        },
      },
    },

    palette: {
      mode: "light",
      primary: {
        main: "#37A048",
        light: "#92E3A9",
        dark: "#92E3A9",
      },
      secondary: {
        main: "#eaf3ec",
        dark: "#8F4D00",
        light: "#D78B33",
      },
      grey: {
        200: "rgba(0, 0, 0, 0.6)",
      },
      background: {
        paper,
        default: "#F8F9FD",
      },
      text: {
        primary: "rgba(0,0,0,1)",
        secondary: "rgba(0,0,0,0.6)",
      },
      error: {
        main: "#D32F2F",
        light: "#EF5350",
        dark: "#C62828",
      },
      success: {
        main: "#2e7d32",
        light: "#4caf50",
        dark: "#1b5e20",
      },
    },
    typography: {
      fontFamily: "'Inter', 'Helvetica', 'Arial', sans-serif",
      h6: {
        fontWeight: "bolder",
      },
      caption:{
        color: "rgba(0,0,0,0.6)",
      }
    },
    shape: {
      borderRadius: 10,
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};
