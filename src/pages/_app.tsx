import "../styles/globals.css";
import { AudioProvider } from "../components/hooks/useAudio";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps, isMobile }: any) {
  return (
    <PlausibleProvider domain="analytics.sunney.dev">
      <AudioProvider>
        {Component.Layout ? (
          <Component.Layout>
            <Component {...pageProps} />
          </Component.Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </AudioProvider>
    </PlausibleProvider>
  );
}
