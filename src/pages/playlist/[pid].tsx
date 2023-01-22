import Router, { useRouter } from "next/router";
import { playlists } from "../../lists";
import { Layout } from "../../components/Layout";
import { useState } from "react";
import { SongListDisplay } from "../../components/songlistdisplay";

export default function Playlist() {
  const router = useRouter();
  const { pid } = router.query;

  const selectPlaylist = playlists.find((p) => p.id === Number(pid));

  if (!selectPlaylist) {
    return <div>Playlist not found</div>;
  }

  const handlePaart = () => {
    if (selectPlaylist.songlist2) {
      return (
        <div className="text-white text-lg mt-20 mb-2">Part 1</div>
      )
    }
  }
  const handlePart = () => {
    if (selectPlaylist.songlist2) {
      return (
        <div className="text-white text-lg mb-2">Part 2</div>
      )
    }
  }


  const handleSubtitle = () => {
    if (selectPlaylist.subtitle) {
      return (
        <div className="text-white text-2xl p-2 text-center">{selectPlaylist.subtitle}</div>
      )
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
        <div className="flex">
          <div className="h-full w-1/6"></div>
          <div className="w-5/6 mt-10">
            <div className="text-white text-4xl p-2 text-center">{selectPlaylist.name}</div>
            <div>{handleSubtitle()}</div>
            <div className="text-white pt-10 px-20">Start Playing</div>
            <div className="p-20 pt-10 justify-center w-full text-white">
              <div>{handlePart()}</div>
              {selectPlaylist.songlist.map((s) => (
                <SongListDisplay key={s.id} song={s} />
              ))}
               <div>{handlePaart()}</div>
              {selectPlaylist.songlist2?.map((s) => (
                <SongListDisplay key={s.id} song={s} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  
  );
}

Playlist.Layout = Layout;
