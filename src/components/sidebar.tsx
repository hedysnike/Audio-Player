import Link from "next/link";
import { useUser } from "@/lib/hooks/useUser";


export default function Sidebar() {
  const { user } = useUser();

  return (
    <>
      <div className="fixed w-1/6 bg-[#19181A] min-h-screen h-full text-white">
        <div className="flex justify-center mt-2 text-3xl">τὰ φίλτατα </div>
        <div className="text-center mt-20">
          <div className="my-9 text-5xl text-[#f0a83b]">
            {user?.username}
          </div>
          <Link href="/">
          <div className="my-3">Home</div>
          </Link>
          <Link href="/songs">
            <div className="my-3">Songs</div>
            </Link>
        </div>
      </div>
    </>
  );
}
