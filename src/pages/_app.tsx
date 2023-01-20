import "../styles/globals.css";
import type { AppProps } from "next/app";
import { AudioProvider } from "../components/hooks/useAudio";

export default function App({ Component, pageProps }: any) {
  return (
    <AudioProvider>
      {Component.Layout ? (
        <Component.Layout>
          <Component {...pageProps} />
        </Component.Layout>
      ) : (
        <Component {...pageProps} />
      )}
    </AudioProvider>
  );
}
