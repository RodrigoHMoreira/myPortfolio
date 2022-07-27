import Head from "next/head";
import React from "react";
import { createGlobalStyle } from "styled-components";
import Header from "../components/Header";
import MenuResponsive from "../components/MenuResponsive";
import MenuResponsiveContextProvider from "../context/MenuResponsiveContext";
import { AppProps } from "../node_modules/next/app";

const GlobalStyle = createGlobalStyle`    
    * {
        margin: 0;
        padding: 0;
    }
    body {
    background: #000000;
    font-family: 'Montserrat', sans-serif;    }
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Moreira</title>
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyle />
      <MenuResponsiveContextProvider>
        <MenuResponsive />
        <Header />
        <Component {...pageProps} />
      </MenuResponsiveContextProvider>
    </>
  );
}

export default MyApp;
