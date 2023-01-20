import { createContext, useContext, useEffect, useState } from "react";

const AudioContext = createContext<any>(null);

export const useAudio = () => useContext(AudioContext);

export const useAudioProvider = () => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [currentlySongPlaying, setCurrentlySongPlaying] = useState(false);

  useEffect(() => {
    if (audio) {
      audio.play();
      setCurrentlySongPlaying(true);
    }
  }, [audio]);

  function PlaySong(url:string){
    if (currentlySongPlaying) {
      audio?.pause();
      setCurrentlySongPlaying(false);
    }

    setAudio(new Audio(url));
  }

  function PauseSong() {
    audio?.pause();
    setCurrentlySongPlaying(false);
  }

  return { audio, PlaySong, currentlySongPlaying, PauseSong };
};

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
  const { audio, PlaySong, currentlySongPlaying, PauseSong } = useAudioProvider();

  return <AudioContext.Provider value={{ audio, PlaySong, currentlySongPlaying, PauseSong }}>{children}</AudioContext.Provider>;
};
