import Head from "next/head";
import Link from "next/link";
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
      <main className="bg-gradient-to-br from-[#000000] to-[#252525] min-h-[92vh] h-auto">
        <div className="grid grid-cols-2 pt-10">
          {playlists.map((i) => (
            <div key={i.id} className="flex flex-col items-center p-5 pb-4 text-white">
              <Link href="/mobileplaylist/[mid]" as={`/mobileplaylist/${i.id}`}>
                <img src={`/${i.Image}`} alt="" className="w-full h-full aspect-square" />
                <div className="my-2 text-sm">{i.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

MobileDisplay.Layout = MobileLayout;