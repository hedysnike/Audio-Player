import { useUser } from "@/lib/hooks/useUser";
import { Icon } from "@iconify/react";
import Link from "next/link";

export function MobileMenu() {
  const { user, isLoggedIn } = useUser();
  return (
    <div className="w-full h-auto bg-[#1c1c1c] mb-[90px]">
      <div className="grid grid-cols-4 py-2 mx-1 text-xs text-center text-white">
        <div>
          <Link href="/" className="flex flex-col items-center w-auto h-auto">
            <Icon icon="ic:baseline-home" color="white" width="25" height="25" /> <span>Home</span>
          </Link>
        </div>
        <Link href="/playlist/mobiledisplay" className="flex flex-col items-center w-auto h-auto">
          <Icon icon="mdi:playlist-music" color="white" width="25" height="25" />
          My Playlists
        </Link>
        <Link href="/users">
          {user?.username}
        </Link>
        {isLoggedIn ? (
                  <Link href="/dashboard" className="flex flex-col items-center">
                  <Icon icon="ic:baseline-music-note" color="white" width="25" height="25" /> Dashboard
                </Link>        
          ) : (
            <Link href="/login" className="flex flex-col items-center w-auto h-auto">
              <Icon icon="ic:baseline-login" color="white" width="25" height="25" />
              Login
              </Link>
              )}
      </div>
    </div>
  );
}
