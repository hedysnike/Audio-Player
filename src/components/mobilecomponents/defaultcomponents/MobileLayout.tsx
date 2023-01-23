import { PropsWithChildren } from "react";
import { MobilePlayer } from "../mobilemusicplayer/MobilePlayer";
import { MobileMenu } from "./MobileMenu";

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main className="relative">{children}</main>
      <div className="absolute bottom-0 w-full"><MobilePlayer /></div>
      <MobileMenu />
    </div>
  );
}
