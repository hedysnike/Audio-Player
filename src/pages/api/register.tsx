import { type NextApiRequest, type NextApiResponse } from "next";
import crypto from "crypto";
import { prisma } from "@/lib/db";


function generateRandomString() {
  return crypto.randomBytes(64).toString("hex");
}

export default async function register(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { password, username, } = req.body;
  console.log(req.body)
  const token = generateRandomString();

  const user = await prisma.user.create({
    data: {
      username: username,
      password: password,
      token: token,
    },
  });

  res.setHeader("Set-Cookie", `token=${user.token}; path=/; HttpOnly`);

  res.status(200).json({ user });
}