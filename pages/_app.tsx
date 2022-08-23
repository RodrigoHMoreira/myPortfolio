import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MenuMobile from "../components/MenuMobile";
import { AppProps } from "../node_modules/next/app";
import GlobalStyled from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Rodrigo Moreira</title>
        <link rel="icon" href="/static/favicon.ico" type="image/x-icon" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <GlobalStyled />
      {/* <MenuMobile /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
