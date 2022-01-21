import { AppProps } from "next/app";
import Head from "next/head";
import "../public/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Michael Fatemi</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
