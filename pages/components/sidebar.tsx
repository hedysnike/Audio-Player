import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Sidebar() {
  return (
    <>
      <div className="fixed w-1/6 bg-[#19181A] min-h-screen h-full text-white">
        <div className="flex justify-center mt-2 text-3xl">τὰ φίλτατα </div>
        <div className="text-center mt-20">
          <div className="my-9">
          </div>
          <Link href="/">
          <div className="my-3">Home</div>
          </Link>
            <div className="my-3">Songs</div>
        </div>
      </div>
    </>
  );
}
