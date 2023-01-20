import { createContext, useContext, useEffect, useState } from "react";
import { Song } from "./types";

const AudioContext = createContext<{
  audio: HTMLAudioElement | null;
  PlaySong: (song: Song) => void;
  isPlaying: boolean;
  PauseSong: () => void;
  currentSong: Song | undefined;
}>({
  audio: null,
  PlaySong: () => {},
  isPlaying: false,
  PauseSong: () => {},
  currentSong: undefined,
});

export const useAudio = () => useContext(AudioContext);

export const useAudioProvider = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentSong, setCurrentSong] = useState<Song>();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  }, [audio]);

  function PlaySong(song: Song) {
    if (isPlaying) {
      audio?.pause();
      setIsPlaying(false);
    }

    setCurrentSong(song);
    setAudio(new Audio(song.URL));
  }

  function PauseSong() {
    audio?.pause();
    setIsPlaying(false);
  }

  return { audio, PlaySong, isPlaying, PauseSong, currentSong };
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudioProvider();

  return (
    <AudioContext.Provider value={{ audio, PlaySong, isPlaying, PauseSong, currentSong }}>
      {children}
    </AudioContext.Provider>
  );
};
