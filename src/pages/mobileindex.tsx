import Head from "next/head";
import { MobileLayout } from "../components/mobilecomponents/defaultcomponents/MobileLayout";

export default function MobileHome() {
  return (
    <>
      <Head>
        <title>τὰ φίλτατα Nike</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#000000] to-[#2c2c2c] min-h-screen h-auto">
        <div className="text-2xl text-white flex items-center justify-center h-96" >My Audio Web Player</div>
      </main>
    </>
  );
}

MobileHome.Layout = MobileLayout;