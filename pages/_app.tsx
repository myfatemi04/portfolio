import { AppProps } from "next/app";
import "../public/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
