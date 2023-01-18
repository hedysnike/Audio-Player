import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

export default function Playlists() {
  const Playlists = [
    {
      name: "Sorry )) It'$ too Late",
      id: "1",
      Image: "2pac.jpg",
    },
    { 
      name: "Diamond on The  Streets",
      id: "2",
      Image: "playboicarti.jpg",
    },
    {
      name: "Seconds",
      id: "3",
      Image: "techno.jpg",
    },
    {
      name: "black",
      id: "4",
      Image: "heart.jpg",
    },
    {
      name: "The Coming of Age",
      id: "5",
      Image: "blacktbilisi.jfif",
    },
  ];

  return (
    <>
      <div>
        <div className="mx-32 w-auto grid grid-cols-4 gap-10 text-white">
          {Playlists.map((i) => (
            <div key={i.id} className="p-5 pb-4 bg-[#181818] hover:bg-[#232323]">
              <Link href="/playlist/[pid]" as={`/playlist/${i.name}`}>
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
