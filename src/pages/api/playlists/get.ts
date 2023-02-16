import prisma from "@/lib/db";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getPlaylists(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const playlists = await prisma.playlist.findMany();

    res.status(200).json(playlists);
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error?.message || "Unknown error occured" });
  }
}
