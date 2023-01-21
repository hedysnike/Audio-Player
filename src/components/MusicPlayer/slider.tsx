import * as SliderPrimitive from "@radix-ui/react-slider";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { useAudio } from "../hooks/useAudio";

interface Props {}

export function Slider(props: Props) {
  const [currentAudioTime, setCurrentAudioTime] = useState([0]);
  const { audio } = useAudio();

  useEffect(() => {
    if (audio) {
      audio.addEventListener("timeupdate", () => {
        setCurrentAudioTime([(audio.currentTime / audio.duration) * 100]);
      });
    }
  }, [audio]);

  function handlePlayBack(value: any) {
    if (audio) {
      audio.currentTime = (value / 100) * audio.duration;
    }
  }

  return (
    <SliderPrimitive.Root
      value={currentAudioTime}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex h-2 w-[500px] touch-none items-center"
      onValueChange={(value) => handlePlayBack(value)}
    >
      <SliderPrimitive.Track className="relative h-1 w-full grow rounded-full bg-white dark:bg-gray-800 bg-opacity-25 ">
        <SliderPrimitive.Range className="absolute h-full rounded-full bg-white dark:bg-white" />
        {/* bg-[#1DB954] */}
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb
        className={cx(
          "block h-3 w-3 rounded-full bg-white dark:bg-white opacity-0",
          "hover:opacity-100",
          "focus:outline-none focus-visible:opacity-100"
        )}
      />
    </SliderPrimitive.Root>
  );
}
