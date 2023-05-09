import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/db";

export default async function login(req: NextApiRequest, res: NextApiResponse) {
  const { username, password } = req.body;

  const user = await prisma.user.findFirst({
    where: { username: username },
  });

  if (!user) {
    res.status(404).json({ message: "userNotFound" });
    return;
  }

  if (user.password !== password) {
    res.status(401).json({ message: "passwordincorrect" });
    return;
  }

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}
