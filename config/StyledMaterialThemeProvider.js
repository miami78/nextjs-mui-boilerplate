import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { StylesProvider } from "@mui/styles";
import CssBaseline from "@mui/material/CssBaseline";

const MyThemeProvider = ({ theme, children }) => (
  <StylesProvider injectFirst>
    <CssBaseline />
    <StyledThemeProvider theme={theme}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </StyledThemeProvider>
  </StylesProvider>
);

export default MyThemeProvider;
