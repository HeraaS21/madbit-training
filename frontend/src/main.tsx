import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./store/store";
import { ThemeProvider } from "@fattureincloud/fic-design-system";
import { theme } from "./config/theme";

const rootElement = document.getElementById("root");

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>

      <Provider store={store}>
        <BrowserRouter>
        <ThemeProvider theme = {theme}>
          <App />
          </ThemeProvider>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
