//* Styles
import "react-toastify/dist/ReactToastify.css";
import { AppStyle } from "./AppStyle";
import GlobalStyle from "./globals";
import { light, dark } from "./components/theme";
import { ThemeProvider } from "styled-components";

//* Hooks
import { useState, useEffect } from "react";

//* Components
import { Outlet } from "react-router-dom";
import { Navbar } from "./components/Navbar/Navbar";
import { ToastContainer } from "react-toastify";

function App() {
  const [theme, setTheme] = useState("light");

  const themeToggler = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  }, []);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <>
        <GlobalStyle />
        <ToastContainer />
        <Navbar themeToggler={themeToggler} />
        <AppStyle>
          <Outlet />
        </AppStyle>
      </>
    </ThemeProvider>
  );
}

export default App;
