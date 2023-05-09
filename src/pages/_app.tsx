import "../styles/globals.css";
import { AudioProvider } from "@/lib/hooks/useAudio";
import { ApiProvider } from "@/lib/hooks/useApi";
import { UserProvider } from "@/lib/hooks/useUser";

export default function App({ Component, pageProps, isMobile }: any) {
  return (
    <ApiProvider>
      <UserProvider>
      <AudioProvider>
        {Component.Layout ? (
          <Component.Layout>
            <Component {...pageProps} />
          </Component.Layout>
        ) : (
          <Component {...pageProps} />
          )}
      </AudioProvider>
          </UserProvider>
    </ApiProvider>
  );
}
