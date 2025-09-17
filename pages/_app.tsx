import "../styles/globals.css";

import type { AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { lightTheme } from '../themes';
import Script from 'next/script'; // 👈 Importa el componente Script

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>

      {/* ✅ Botpress Chatbot Scripts con estrategia segura */}
      <Script
        src="https://cdn.botpress.cloud/webchat/v3.3/inject.js"
        strategy="afterInteractive"
      />
      <Script
        src="https://files.bpcontent.cloud/2025/09/16/21/20250916212909-33A4U5A7.js"
        strategy="afterInteractive"
      />
    </UserProvider>
  );
}