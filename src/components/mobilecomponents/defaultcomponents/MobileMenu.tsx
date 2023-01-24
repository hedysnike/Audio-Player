import { Icon } from "@iconify/react";
import Link from "next/link";

export function MobileMenu() {
  return (
    <div className="w-full h-auto bg-[#1c1c1c] mb-[90px]">
      <div className="text-white text-xs text-center grid grid-cols-4 py-2 mx-1">
        <div>
          <Link href="/playlist/mobiledisplay" className="h-auto w-auto flex items-center flex-col">
            <Icon icon="ic:baseline-home" className="" color="white" width="25" height="25" /> <span>Playlists</span>
          </Link>
        </div>
        <div className="flex items-center flex-col">
          {" "}
          <Icon icon="ic:baseline-home" color="white" width="25" height="25" />
          Music
        </div>
        <div className="flex items-center flex-col">
          <Icon icon="ic:baseline-home" color="white" width="25" height="25" /> Lyrics
        </div>
        <div className="flex items-center flex-col">
          <Icon icon="ic:baseline-home" color="white" width="25" height="25" />{" "}
        </div>
      </div>
    </div>
  );
}
