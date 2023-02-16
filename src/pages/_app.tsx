import "../styles/globals.css";
import { AudioProvider } from "@/lib/hooks/useAudio";
import { ApiProvider } from "@/lib/hooks/useApi";

export default function App({ Component, pageProps, isMobile }: any) {
  return (
    <ApiProvider>
      <AudioProvider>
        {Component.Layout ? (
          <Component.Layout>
            <Component {...pageProps} />
          </Component.Layout>
        ) : (
          <Component {...pageProps} />
        )}
      </AudioProvider>
    </ApiProvider>
  );
}
