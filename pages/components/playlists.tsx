import Image from "next/image";
import { Inter } from "@next/font/google";

export default function Playlists() {
  const Playlists = [
    {
      name: "Sorry )) it's too late",
      id: "1",
      Image: "2pac.jpg",
    },
    {
      name: "Diamond on The  Streets",
      id: "2",
      Image: "playboicarti.jpg",
    },
    {
      name: "Consciousness Trap",
      id: "3",
      Image: "techno.jpg",
    },
    {
        name: "",
        id: "4",
        Image: "heart.jpg",
    },
    {
        name: "The Coming of Age",
        id: "5",
        Image: "blacktbilisi.jfif",
    }
  ];

  return (
    <>
      <div>
        <div className="mx-32 w-auto grid grid-cols-4 gap-10 text-white">
          {Playlists.map((i) => (
            <div key={i.id}>
              <div className="justify-center">
                <img src={i.Image} className="w-fit rounded-xl" />
              </div>
              <div className="text-center mt-2">
              {i.name}
            </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
