import { Icon } from "@iconify/react";
import { useState } from "react";
import { useAudio } from "./hooks/useAudio";

export function SongListDisplay(props: any) {
  const { audio, PlaySong, currentlySongPlaying, PauseSong } = useAudio();
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div
        key={props.key}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-center border border-solid border-transparent px-5 w-full justify-start h-[56px] hover:bg-[#242424]"
      >
        <div className={`${hovered ? "invisible w-0 h-0" : "visible"} `}>{props.number}</div>
        <div>
          <div className={`${currentlySongPlaying ? "hidden" : "visible"}`} >
          <Icon
            icon="ic:baseline-play-arrow"
            color="white"
            width="25"
            height="20"
            onClick={() => PlaySong(props.URL)}
            className={`${hovered ? "" : "hidden"}`}
          />
          </div>
          <Icon
            icon="ic:baseline-pause"
            color="white"
            width="25"
            height="20"
            className={`${currentlySongPlaying ? "visible" : "hidden"}`}
            onClick={() => PauseSong(props.URL)}
          />
        </div>
        <div className="px-4 ">
          <img src="https://i.imgur.com/3SgsMxh.jpg" className="w-10 h-10 py-1" alt="pac" />
        </div>
        <div>{props.name}</div>
        <div className="ml-auto">3.15</div>
      </div>
    </>
  );
}
