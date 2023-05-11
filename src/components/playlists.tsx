import Link from "next/link";
import { playlists } from "../lists";

export default function PlaylistDisplay() {
  return (
    <>
      <div>
        <div className="mx-20 pt-8 w-auto flex items-center flex-col lg:items-stretch lg:grid lg:grid-cols-3 gap-10 text-white">
          {playlists.map((i) => (
            <div key={i.id} className="p-5 pb-4 bg-[#181818] hover:bg-[#232323]">
              <Link href="/playlist/[pid]" as={`/playlist/${i.id}`}>
                <div className="justify-center flex">
                  <img src={i.Image} className="rounded-xl w-52 h-52 xl:w-72 xl:h-72 2xl:w-80 2xl:h-w-80" />
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
