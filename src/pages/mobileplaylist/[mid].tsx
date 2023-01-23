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
        <div className="flex flex-col  text-white pb-10">
          <div className="justify-center mt-10 flex "><img src={`/${selecttPlaylist.Image}`} alt="" className="w-[50%] h-[50%]" /></div>
          <div className="text-2xl my-10 text-center">{selecttPlaylist.name}</div>
          <div className="flex-row flex border-b border-solid border-white border-opacity-80 mx-2">
            <div>#</div>
            <div>TITLE</div>
            <div>Duration</div>
          </div>
          {selecttPlaylist.songlist.map((s) => (
            <SongsMobileDisplay key={s.id} song={s} />
          ))}
        </div>
      </div>
    </>
  );
}

MobilePlaylist.Layout = MobileLayout;
