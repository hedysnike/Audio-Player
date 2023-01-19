import Link from "next/link";
import { Playlists } from "../../playlists";

export default function PlaylistDisplay() {
  return (
    <>
      <div>
        <div className="mx-32 w-auto grid grid-cols-4 gap-10 text-white">
          {Playlists.map((i) => (
            <div key={i.id} className="p-5 pb-4 bg-[#181818] hover:bg-[#232323]">
              <Link href="/playlist/[pid]" as={`/playlist/${i.id}`}>
                <div className="justify-center">
                  <img src={i.Image} className="rounded-xl w-52 h-52" />
                </div>
                <div className="text-center mt-2">{i.name}</div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
