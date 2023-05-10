import { Layout } from "@/components/Layout";
import { useAudio } from "@/lib/hooks/useAudio";
import { useUser } from "@/lib/hooks/useUser";
import { Avatar } from "@mantine/core";
import Link from "next/link";

export default function Dashboard() {
    const { audio, PlaySong, isPlaying, PauseSong, currentSong } = useAudio();
    const { user } = useUser();
  return (
    <Layout>
      <div className="bg-black min-h-[84vh] h-auto">
        <div className="text-white flex flex-col items-center justify-center">
            <div className="pt-12 pb-10 text-center">
                <Avatar className="w-32 h-32"/>
                <h1 className="text-lg py-1">
                     {user?.username}
                    </h1>
            </div>
    
            <div>
                <div>
                    <img src={currentSong?.Image} alt="" className="max-w-36 max-h-36" />
                </div>
                <div className="text-sm text-center py-4">
                    {currentSong?.name}
                    {currentSong?.artist}
                </div>
            </div>

            <Link href="/createplaylist" >
              Create Playlist
            </Link>
      
        
        </div>
      </div>
    </Layout>
  );
}
