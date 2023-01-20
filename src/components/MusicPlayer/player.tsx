import { Icon } from "@iconify/react";
import { VolumeSlider } from "./volumeslider";
import { Slider } from "./slider";
import { useState } from "react";
import { useAudio } from "../hooks/useAudio";

export function Player() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const {audio, PlaySong} = useAudio();
  

  return (
    <div className="absolute bottom-0 w-full h-[91px] bg-[#181818] border-t border-solid opacity-[99%] border-white border-opacity-20">
      <div className="h-full justify-center flex items-center">
        <div className="w-[550px] h-[57px] items-center flex">
          <img src="https://i.imgur.com/gZBUHR6.jpeg" alt="cat" className="w-14 h-14 ml-4" />
          <div className="text-white ml-4">
            {" "}
            <div className="text-sm"> Don`t go to Sleep</div>
            <div className="text-xs opacity-60 ">2Pac</div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center h-[57px]">
          <div className="flex flex-row h-[60%] items-center gap-4">
            <div className="opacity-60 hover:opacity-100">
              <Icon icon="ic:sharp-skip-previous" color="white" width="30" height="27" />
            </div>
            <Icon icon="material-symbols:play-circle" color="white" width="37" height="37" onClick={() => PlaySong()} />
            <Icon icon="material-symbols:pause-circle" color="white" width="37" height="37" className={``}/>
            <div className="opacity-60 hover:opacity-100">
              <Icon icon="ic:sharp-skip-next" color="white" width="30" height="27" />
            </div>
          </div>
          <div className="h-[40%] flex items-center font-thin  text-xs text-white text-opacity-60 mt-[6px] gap-2">
            0.00 <Slider /> 2.21{" "}
          </div>
        </div>
        <div className="w-[550px] h-[57px] items-center justify-end flex text-white gap-3">
          {" "}
          <div>
            <Icon icon="material-symbols:lyrics" color="white" width="16" height="16" />
          </div>
          <div>
            <Icon icon="radix-icons:speaker-loud" color="white" width="15" height="15" />
          </div>
          <div className="mr-5">
            <VolumeSlider />
          </div>
        </div>
      </div>
    </div>
  );
}
