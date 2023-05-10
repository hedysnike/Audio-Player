import { PropsWithChildren } from "react";
import Sidebar from "./sidebar";
import { Player } from "./MusicPlayer/player";
import { Inter } from "@next/font/google";
import { MobilePlayer } from "./mobilecomponents/mobilemusicplayer/MobilePlayer";
import { MobileMenu } from "./mobilecomponents/defaultcomponents/MobileMenu";

const inter = Inter({ subsets: ["latin"] });

export function Layout({ children }: PropsWithChildren) {
  return (
    <div>
    
    
      <div className="hidden lg:block">
      <Sidebar />
      </div>
    
    
      <main>{children}</main>
    
    
      <div className="hidden lg:block">
      <Player />
      </div>


      <div className="lg:hidden">
        <MobilePlayer />
      </div>

      <div className="lg:hidden">
      <MobileMenu />
      </div>
   
   
    </div>
  );
}
