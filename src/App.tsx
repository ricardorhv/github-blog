import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaultTheme";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { PostContextProvider } from "./context/PostContext";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PostContextProvider>
        <BrowserRouter>
          <Router/>
        </BrowserRouter>
      </PostContextProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}