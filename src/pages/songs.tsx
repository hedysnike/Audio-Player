import { useAudio } from "@/lib/hooks/useAudio";
import { playlists } from "../lists";
import { SongListDisplay } from "../components/songlistdisplay";
import { Layout } from "../components/Layout";

export default function Songs() {

  return (
    <div className="right-0 w-full h-auto min-h-screen bg-black">
      <div className="flex">
        <div className="w-1/6 h-full"></div>
        <div className="w-5/6 mt-10 text-white mb-28">
          {playlists.map((p) => (
            <div key={p.id}>
              {p.songlist.map((s) => (
                <SongListDisplay key={s.id} song={s} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

Songs.Layout = Layout;
