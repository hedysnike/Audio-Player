import Head from "next/head";
import { Layout } from "../components/Layout";
import Playlists from "../components/playlists";
import React from "react";

export function DesktopHome() {
  return (
    <>
      <Head>
        <title>τὰ φίλτατα Nike</title>
        <meta name="description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] min-h-screen h-auto">
        <div className="flex">
          <div className="h-full w-1/6"></div>
          <div className="w-5/6 mt-10">
            <div className="flex mb-8 justify-center w-full">
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

DesktopHome.Layout = Layout;
