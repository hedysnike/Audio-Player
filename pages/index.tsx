import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Sidebar from "./components/sidebar";
import Playlists from "./components/playlists";
import Songslist from "./components/songslist";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nickolas MusiC</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
        <div className="flex">
          <Sidebar />
          <div className="h-full w-1/6"></div>
          <div className="w-5/6 mt-10">
            <div className="flex mb-8 justify-center w-full">
            <input
              className="bg-[#1A1A1A] p-2 md:w-96 rounded-xl pl-4 outline-none text-white"
              type="text"
              placeholder="Search music"
            />
            </div>
            <div>
              <Playlists />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
