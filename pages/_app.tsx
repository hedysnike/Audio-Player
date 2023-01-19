import "../styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: any) {
  return Component.Layout ? (
    <Component.Layout>
      <Component {...pageProps} />
    </Component.Layout>
  ) : (
    <Component {...pageProps} />
  );
}
