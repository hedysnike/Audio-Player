import { playlists } from "../lists";
import { MobileLayout } from "@/components/mobilecomponents/defaultcomponents/MobileLayout";
import { SongsMobileDisplay } from "@/components/mobilecomponents/defaultcomponents/SongsMobileDisplay";

export default function Msongs() {

  return (
    <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
    <div className="flex flex-col pb-10 text-white">
        <div className="my-20">Songs From All Playlists</div>
      <div className="flex flex-row mx-2 border-b border-white border-solid border-opacity-80">
        <div>Title:</div>
      </div>
      {playlists.map((p) => (
            <div key={p.id}>
              {p.songlist.map((s) => (
                <SongsMobileDisplay key={s.id} song={s} />
              ))}
            </div>
          ))}
        </div>
      </div>
  );
}

Msongs.Layout = MobileLayout;