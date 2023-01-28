import "../styles/globals.css";
import { AudioProvider } from "../components/hooks/useAudio";
import PlausibleProvider from "next-plausible";

export default function App({ Component, pageProps, isMobile }: any) {
  return (
    <PlausibleProvider
      domain="music-nikkodev.vercel.app"
      scriptProps={{
        defer: true,
        src: "analytics.sunney.dev/js/script.js",
      }}
    >
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
