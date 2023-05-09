import { NextApiRequest, NextApiResponse } from "next";

export default async function logout(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Set-Cookie", "token=; path=/; expires=Thu ");
  res.status(200).json({ message: "Logged out successfully" });
}
