import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { ReactSimplifiedPlayer } from "react-simplified-player";
import { Player } from "./MusicPlayer/player";

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
      <Sidebar />
      <main>{children}</main>
      <Player />
    </div>
  );
}
