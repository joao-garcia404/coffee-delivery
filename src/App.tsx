import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";
import { CartContextProvider } from "./contexts/CartContext";

import { Router } from "./routes/Router";

import { GlobalStyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <ToastContainer />
      <CartContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
