import Head from "next/head";
import { MobileLayout } from "./mobilecomponents/defaultcomponents/MobileLayout";
import { useUser } from "@/lib/hooks/useUser";

export default function MobileHome() {
const { user } = useUser();

  return (
    <>
      <Head>
        <title>τὰ φίλτατα Nike</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-b from-[#000000] to-[#5716694f] bg-black min-h-[83vh] h-auto">
        <div className="flex items-center justify-center h-96">
          <div className="text-2xl text-center text-white gap-2">
          Welcome <span className="text-[#5416d0]">{user?.username}</span>
          </div>
           </div>
      </main>
    </>
  );
}

MobileHome.Layout = MobileLayout;
