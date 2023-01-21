import Router, { useRouter } from "next/router";
import { playlists } from "../../lists";
import { MobileLayout } from "../../components/mobilecomponents/defaultcomponents/MobileLayout";
import { SongsMobileDisplay } from "../../components/mobilecomponents/defaultcomponents/SongsMobileDisplay";

export default function MobilePlaylist() {
  const router = useRouter();
  const { mid } = router.query;

  const selecttPlaylist = playlists.find((m) => m.id === Number(mid));

  if (!selecttPlaylist) {
    return <div>Playlist not found</div>;
  }

  return (
    <>
      <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
        <div className="flex">
          <div className="h-full w-1/6"></div>
          <div className="w-5/6 mt-10">
            <div className="text-white text-4xl p-2 text-center">{selecttPlaylist.name}</div>
            <div className="text-white pt-10 px-20">Start Playing</div>
              {selecttPlaylist.songlist.map((s) => (
                <SongsMobileDisplay key={s.id} song={s} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

MobilePlaylist.Layout = MobileLayout;
