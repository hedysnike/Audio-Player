import { Layout } from "@/components/Layout";
import { Playlist, useUser } from "@/lib/hooks/useUser";
import { useEffect, useState } from "react";
import { getPlaylist } from "@/lib/api";

export default function CreatePlaylist() {
  const [playlist, setPlaylist] = useState<any>();
  const { user, retry } = useUser();

  useEffect(() => {
    getPlaylist()
      .then((r) => r.json())
      .then((res) => setPlaylist(res.playlists));
  }, []);

  console.log(playlist);

  return (
    <>
      <Layout>
        <div className="bg-black min-h-[84vh] h-auto">
          <h1 className="text-white text-2xl pt-20 text-center">Playlist</h1>
          <div className="flex flex-col pt-5">
            <div className="flex gap-5 py-7 items-center justify-center text-white"></div>
          </div>
          <div className="flex items-center justify-center w-full">
            <div>
              {playlist?.map((s: any) => {
                return (
                  <div className="text-white" key={s.id}>
                    <h2>Playlist Name</h2>
                    <div>{s.name}</div>
                    {s.image}
                    <img src={s.image} alt={s.image} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
