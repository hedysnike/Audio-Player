import "../styles/globals.css";
import { AudioProvider } from "../components/hooks/useAudio";

export default function App({ Component, pageProps, isMobile }: any) {
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
