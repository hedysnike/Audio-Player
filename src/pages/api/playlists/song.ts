import type { NextApiRequest, NextApiResponse } from "next";
import { parseForm } from "@/lib/utils/parseForm";
import prisma from "@/lib/db";
import s3 from "@/lib/s3";

export default async function addSong(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const form = (await parseForm(req)) as {
      playlistName: string;
      songName: string;
      file: Buffer;
    };

    const playlist = await prisma.playlist.findFirst({
      where: { name: form.playlistName },
    });

    if (!playlist) {
      res.status(400).json({ message: "Playlist not found" });
      return;
    }

    await s3
      .upload({
        Bucket: "audioplayernikkodev",
        Body: form.file,
        Key: `songs/${playlist.name}/${form.songName}`,
      })
      .promise();

    await prisma.song.create({
      data: {
        name: form.songName,
        playlist: { connect: { id: playlist.id } },
      },
    });

    res.status(200).json({ message: "File uploaded successfully!" });
  } catch (error: any) {
    res.status(400).json({ message: error.message || "Unknown error occured" });
  }
}
