import Head from "next/head";
import { MobileLayout } from "./mobilecomponents/defaultcomponents/MobileLayout";
import user from "@/lib/hooks/user";
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
      <main className="bg-gradient-to-b from-[#000000] to-[#2c2c2c] min-h-[84vh] h-auto">
        <div className="gap-2 flex items-center justify-center text-2xl text-white h-96">
          <div>Welcome</div>
        <div className="text-[#5416d0]">{user?.username}
          </div>
           </div>
      </main>
    </>
  );
}

MobileHome.Layout = MobileLayout;
