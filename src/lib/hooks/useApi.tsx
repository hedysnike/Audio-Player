import { Playlist } from "@prisma/client";
import { createContext, useEffect, useState } from "react";

interface ApiContext {
  playlists: Playlist[];
  createPlaylist: (playlistName: string, imageUrl?: string) => Promise<void>;
  addSong: (
    playlistName: string,
    songName: string,
    file: Buffer
  ) => Promise<void>;
  refresh: () => Promise<void>;
}

const apiContext = createContext<ApiContext>({
  playlists: [],
  createPlaylist: async function (
    playlistName: string,
    imageUrl?: string | undefined
  ): Promise<void> {},
  addSong: async function (
    playlistName: string,
    songName: string,
    file: Buffer
  ): Promise<void> {},
  refresh: async function (): Promise<void> {},
});

export function useAudioProvider() {
  const [playlists, setPlaylists] = useState<Playlist[]>([]);

  const createPlaylist = async (
    playlistName: string,
    imageUrl?: string
  ): Promise<void> => {
    const res = await fetch("/api/playlists/create", {
      method: "POST",
      body: JSON.stringify({ name: playlistName, imageUrl }),
    });

    const data = await res.json();
    setPlaylists((prev) => [...prev, data]);
  };

  const addSong = async (
    playlistName: string,
    songName: string,
    file: Buffer
  ): Promise<void> => {
    const res = await fetch("/api/playlist/song", {
      method: "POST",
      body: JSON.stringify({ playlistName, songName, file }),
    });

    const data = await res.json();
    setPlaylists((prev) => [...prev, data]);
  };

  const refresh = async (): Promise<void> => {
    const res = await fetch("/api/playlists/get");
    const data = await res.json();
    setPlaylists(data);
  };

  useEffect(() => {
    refresh();
  }, []);

  return {
    playlists,
    createPlaylist,
    addSong,
    refresh,
  };
}

export function ApiProvider({ children }: { children: React.ReactNode }) {
  const api = useAudioProvider();

  return <apiContext.Provider value={api}>{children}</apiContext.Provider>;
}
