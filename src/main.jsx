// src/main.jsx

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "react-multi-carousel/lib/styles.css";
import GlobalStyles from "./styles/globalStyle.js";
import { ToastContainer } from "react-toastify";
import { AppRouter } from "./routes/index.jsx"; // Importa o componente de roteador

import { UserProvider } from "./hooks/UserContext.jsx";
import { CartProvider } from "./hooks/CartContext.jsx";
import { Elements } from "@stripe/react-stripe-js";
import stripePromise from "./config/stripeConfig.js";
import { ThemeProvider } from "styled-components";
import { standardTheme } from "./styles/themes/standard.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <UserProvider>
        <CartProvider>
        
          <Elements stripe={stripePromise}>
            
            <AppRouter />
          </Elements>
        </CartProvider>
      </UserProvider>
      <GlobalStyles />
      <ToastContainer autoClose={2000} theme="colored" />
    </ThemeProvider>
  </StrictMode>
);
