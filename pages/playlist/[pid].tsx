import Router, { useRouter } from "next/router";
import { Playlists } from "../../playlists";
import { Layout } from "../../components/Layout";
import { Icon } from "@iconify/react";
import { useState } from "react";
import { SongListDisplay } from "../../components/songlistdisplay";

export default function Playlist() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [audioRef, setAudioRef] = useState<HTMLAudioElement>();
  const router = useRouter();
  const { pid } = router.query;

  const selectPlaylist = Playlists.find((p) => p.id === pid);

  if (!selectPlaylist) {
    return <div>Playlist not found</div>;
  }

  const playAudio = (song: any) => {
    if (audioRef) {
      audioRef.pause();
      audioRef.currentTime = 0;
    }
    setCurrentlyPlaying(song);
    const newAudioRef = new Audio(song.URL);
    setAudioRef(newAudioRef);
    newAudioRef.play();
  };

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
                <SongListDisplay
                  {...s}
                  name={s.name}
                  artist={s.artist}
                  key={s.id}
                  number={s.number}
                  URL={s.URL}
                  Image={s.Image}
                  onIconClick={() => playAudio(s)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Playlist.Layout = Layout;
