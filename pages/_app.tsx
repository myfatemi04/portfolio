import { AppProps } from "next/app";
import "../public/main.scss";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
