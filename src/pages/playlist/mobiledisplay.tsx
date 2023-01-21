import Head from "next/head";
import { MobileLayout } from "../../components/mobilecomponents/defaultcomponents/MobileLayout";
import { playlists } from "../../lists";

export default function MobileDisplay() {
  return (
    <>
      <Head>
        <title>τὰ φίλτατα Nike</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-[#000000] to-[#252525] min-h-screen h-auto">
        <div className="grid grid-cols-2 pt-28">
          {playlists.map((i) => (
            <div key={i.id} className="text-white p-5 pb-4 flex-col flex items-center">
              <img  src={`/${i.Image}`} alt="" className="w-20 h-20" />
              <div className="text-sm my-2">{i.name}</div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

MobileDisplay.Layout = MobileLayout;
