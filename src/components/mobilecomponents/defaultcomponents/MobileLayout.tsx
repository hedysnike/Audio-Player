import { PropsWithChildren } from "react";
import { MobilePlayer } from "../mobilemusicplayer/MobilePlayer";
import { MobileMenu } from "./MobileMenu";

export function MobileLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <main>{children}</main>
      <MobileMenu />
      <MobilePlayer />
    </div>
  );
}
