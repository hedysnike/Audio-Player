import * as SliderPrimitive from "@radix-ui/react-slider";
import cx from "classnames";
import { useAudio } from "../hooks/useAudio";
import { useEffect } from "react";

interface Props {}

export function VolumeSlider(props: Props) {
  const { audio } = useAudio();

  const handleChange = (value: any) => {
    if (audio) {
      audio.volume = value / 100;
    }
  };

  return (
    <SliderPrimitive.Root
      defaultValue={[90]}
      max={100}
      step={1}
      aria-label="value"
      className="relative flex h-2 w-[90px] touch-none items-center"
      onValueChange={(value) => handleChange(value) }
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
