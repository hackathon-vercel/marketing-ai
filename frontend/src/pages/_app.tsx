import * as React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Toaster } from "react-hot-toast";
import theme from "../theme/theme";
import "@fontsource/poppins";
import "@fontsource/montserrat";

import Layout from "@/components/Layout";
import BuyerContextProvider from "@/context/BuyerContext";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BuyerContextProvider>
        <Layout>
          <Toaster position="top-center" />
          <Component {...pageProps} />
        </Layout>
      </BuyerContextProvider>
    </ThemeProvider>
  );
}
