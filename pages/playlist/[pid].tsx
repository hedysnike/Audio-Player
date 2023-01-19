import Router, { useRouter } from "next/router";
import { Playlists } from "../../playlists";
import { Layout } from "../components/Layout";

export default function Playlist() {
  const router = useRouter();
  const { pid } = router.query;

  const selectPlaylist = Playlists.find((p) => p.id === pid);

  if (!selectPlaylist) {
    return <div>Playlist not found</div>;
  }

  return (
    <>
      <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
        <div className="flex">
          <div className="h-full w-1/6"></div>
          <div className="w-5/6 mt-10">
            <div className="text-white text-4xl p-2 text-center">{selectPlaylist.name}</div>
            <div className="text-white pt-10 px-20">Start Playing</div>
            <div className="p-20 pt-10 justify-center w-full text-white">
              {selectPlaylist.songlist.map((s) => (
                <div
                  key={s.number}
                  className="flex items-center border border-solid border-transparent px-5 w-full justify-start h-[56px] hover:bg-[#242424]"
                >
                  <div className="">{s.number}</div>
                  <div className="px-4 ">
                    {" "}
                    <img src="https://i.imgur.com/3SgsMxh.jpg" className="w-10 h-10 py-1" alt="pac" />{" "}
                  </div>
                  <div className="">{s.name}</div>
                  <div className="ml-auto">3.15</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Playlist.Layout = Layout;