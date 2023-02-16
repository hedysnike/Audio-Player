import { Icon } from "@iconify/react";
import { VolumeSlider } from "./volumeslider";
import { Slider } from "./slider";
import { useEffect, useState } from "react";
import { useAudio } from "@/lib/hooks/useAudio";

export function Player() {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (audio) {
      const intervalId = setInterval(() => {
        const Time = audio?.currentTime
          ? new Date(audio?.currentTime * 1000)
          : null;
        const currentTimeFormatted = Time
          ? Time.toLocaleTimeString("en-us", {
              minute: "2-digit",
              second: "2-digit",
            })
          : "";

        setCurrentTime(currentTimeFormatted);
      }, 50);
      return () => clearInterval(intervalId);
    }
  }, [audio]);

  const duration = audio?.duration ? new Date(audio?.duration * 1000) : null;
  const durationFormatted = duration
    ? duration.toLocaleTimeString("en-us", {
        minute: "2-digit",
        second: "2-digit",
      })
    : "";

  return (
    <div className="fixed bottom-0 w-full h-[91px] bg-[#181818] border-t border-solid opacity-[99%] border-white border-opacity-20">
      <div className="h-full justify-center flex items-center">
        <div className="w-[550px] h-[57px] items-center flex">
          <img
            src="https://i.imgur.com/gZBUHR6.jpeg"
            alt="cat"
            className="w-14 h-14 ml-4"
          />
          <div className="text-white ml-4">
            {" "}
            <div className="text-sm"> {currentSong?.name}</div>
            <div className="text-xs opacity-60 ">{currentSong?.artist}</div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center h-[57px]">
          <div className="flex flex-row h-[60%] items-center gap-4">
            <div className="opacity-60 hover:opacity-100">
              <Icon
                icon="ic:sharp-skip-previous"
                color="white"
                width="30"
                height="27"
              />
            </div>
            {isPlaying ? (
              <Icon
                icon="material-symbols:pause-circle"
                color="white"
                width="37"
                height="37"
                onClick={PauseSong}
              />
            ) : (
              currentSong !== undefined && (
                <Icon
                  icon="material-symbols:play-circle"
                  color="white"
                  width="37"
                  height="37"
                  onClick={() => PlaySong(currentSong)}
                />
              )
            )}
            <div className="opacity-60 hover:opacity-100">
              <Icon
                icon="ic:sharp-skip-next"
                color="white"
                width="30"
                height="27"
              />
            </div>
          </div>
          <div className="h-[40%] flex items-center font-thin  text-xs text-white text-opacity-60 mt-[6px] gap-2">
            {currentTime}
            <Slider /> {durationFormatted}
          </div>
        </div>
        <div className="w-[550px] h-[57px] items-center justify-end flex text-white gap-3">
          {" "}
          <div>
            <Icon
              icon="material-symbols:lyrics"
              color="white"
              width="16"
              height="16"
            />
          </div>
          <div>
            <Icon
              icon="radix-icons:speaker-loud"
              color="white"
              width="15"
              height="15"
            />
          </div>
          <div className="mr-5">
            <VolumeSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
