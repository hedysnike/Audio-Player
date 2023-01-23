import { Icon } from "@iconify/react";
import { MobileSlider } from "./mobileslider";
import { useEffect, useState } from "react";
import { useAudio } from "../../hooks/useAudio";

export function MobilePlayer() {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    if (audio) {
      const intervalId = setInterval(() => {
        const Time = audio?.currentTime ? new Date(audio?.currentTime * 1000) : null;
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
    <div className=" w-full h-[91px] bg-[#1c1c1c] border-t border-solid opacity-[99%] border-white border-opacity-20">
      <div className="h-full flex flex-col">
        <div className="flex-raw flex">
          <div className="items-center flex w-full">
            <div className="text-white ml-4 w-auto">
              {" "}
              <div className="text-sm"> {currentSong?.name}</div>
              <div className="text-xs opacity-60 ">{currentSong?.artist}</div>
            </div>
          </div>
          <div className="items-right justify-right mr-5">
            {isPlaying ? (
              <Icon icon="material-symbols:pause-circle" color="white" width="37" height="37" onClick={PauseSong} />
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
          </div>
        </div>
        <div>
          <div className="mt-4 w-[80%] mr-auto ml-auto flex items-center font-thin  text-xs text-white text-opacity-60 ">
            {currentTime}
            <MobileSlider /> 
            {durationFormatted}
          </div>
        </div>
      </div>
    </div>
  );
}
