import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Script defer data-domain="music-nikkodev.vercel.app" src="https://analytics.sunney.dev/js/script.js" />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
