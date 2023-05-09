import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { Player } from "./MusicPlayer/player";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: PropsWithChildren) {
  return (
    <div className="inter">
      <Sidebar />
      <main>{children}</main>
      <Player />
    </div>
  );
}
