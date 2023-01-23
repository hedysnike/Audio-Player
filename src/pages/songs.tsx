import { useAudio } from "../components/hooks/useAudio";
import { playlists } from "../lists";
import { Playlist } from "../components/hooks/types";
import { SongListDisplay } from "../components/songlistdisplay";
import { Layout } from "../components/Layout";

export default function Songs() {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();

  return (
    <div className="bg-black min-h-screen h-auto w-full right-0">
                <div className="flex">
          <div className="h-full w-1/6"></div>
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