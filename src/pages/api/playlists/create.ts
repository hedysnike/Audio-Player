import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";

export default async function createPlaylist(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { playlistName, imageUrl } = req.body;

  if (!playlistName) {
    res.status(400).json({ message: "Playlist name is required" });
    return;
  }

  try {
    await prisma.playlist.create({
      data: { name: playlistName, image: imageUrl },
    });

    res.status(200).json({
      message: "Playlist created successfully!",
      playlistName,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error?.message || "Unknown error occured" });
  }
}
