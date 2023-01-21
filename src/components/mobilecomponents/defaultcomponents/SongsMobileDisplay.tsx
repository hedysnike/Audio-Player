import { Icon } from "@iconify/react";
import { useState } from "react";
import { Song } from "../../hooks/types";
import { useAudio } from "../../hooks/useAudio";

interface SongListDisplayProps {
  song: Song;
}

export function SongsMobileDisplay(props: SongListDisplayProps) {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();

  let icon: string = "ic:baseline-pause";
  let onclick: () => void = () => PlaySong(props.song);

  const isThisPlaying = currentSong && currentSong.id == props.song.id;
  if (isPlaying) {
    icon = "ic:baseline-pause";
    onclick = PauseSong;
  } else if (!isPlaying) {
    icon = "ic:baseline-play-arrow";
  }

  return (
    <>
      <div>
        <div className="flex flex-row my-2">
          {isThisPlaying ? (
            <div>
              <Icon className="mr-2" icon={icon} color="white" width="25" height="20" onClick={onclick} />
            </div>
          ) : (
            <div className="mr-2">
              <Icon
                icon="ic:baseline-play-arrow"
                color="white"
                width="25"
                height="20"
                onClick={() => PlaySong(props.song)}
              />
            </div>
          )}
          <div className="text-white text-sm">{props.song.name}</div>
        </div>
      </div>
    </>
  );
}
