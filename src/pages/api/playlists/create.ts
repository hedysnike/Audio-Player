import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";

export default async function createPlaylist(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, image, userId } = req.body;

  if (!name) {
    res.status(400).json({ message: "Playlist name is required" });
    return;
  }

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  if (!user) {
    res.status(404).json({ message: "User not found" });
    return;
  }


  try {
    await prisma.playlist.create({
      data: {
        name: name,
        image: image,
        user: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    res.status(200).json({
      message: "Playlist created successfully!",
      name,
    });
  } catch (error: any) {
    res
      .status(400)
      .json({ message: error?.message || "Unknown error occured" });
  }
}
