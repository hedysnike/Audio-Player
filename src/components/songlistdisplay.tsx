import { Icon } from "@iconify/react";
import { useState } from "react";
import { Song } from "./hooks/types";
import { useAudio } from "./hooks/useAudio";

interface SongListDisplayProps {
  song: Song;
}

export function SongListDisplay(props: SongListDisplayProps) {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();
  const [hovered, setHovered] = useState(false);
  let icon: string = "ic:baseline-pause";
  let onclick: () => void = () => PlaySong(props.song);

  const isThisPlaying = currentSong && currentSong.id == props.song.id;
  if (isPlaying) {
    icon = "ic:baseline-pause";
    onclick = PauseSong
  } else if (!isPlaying) {
    icon = "ic:baseline-play-arrow";
  }
    
  

  return (
    <>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center border border-solid border-transparent pl-4 pr-5 w-full justify-start h-[56px] hover:bg-[#242424]"
      >
        <div>
          {isThisPlaying ? (
            <Icon icon={icon} color="white" width="25" height="20" onClick={onclick} />
          ) : (
            <div className="w-[25px] items-center flex justify-center mr-3">
              <div className={`${hovered ? "invisible w-0 h-0" : "visible"} `}>{props.song.number}</div>
              <Icon
                icon="ic:baseline-play-arrow"
                color="white"
                width="25"
                height="20"
                onClick={() => PlaySong(props.song)}
                className={`${hovered ? "" : "hidden"}`}
              />
            </div>
          )}
        </div>
        <div className="pr-5" >
          <img src="https://i.imgur.com/3SgsMxh.jpg" className="w-10 h-10 py-1" alt="pac" />
        </div>
        <div>{props.song.name}</div>
        <div className="ml-auto">3.15</div>
      </div>
    </>
  );
}
