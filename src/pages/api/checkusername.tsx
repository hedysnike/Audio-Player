import { prisma } from "@/lib/db";

export default async function handler(req: { query: { username: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message: string; }): void; new(): any; }; }; }) {
  const { username } = req.query;

  const user = await prisma.user.findUnique({ where: { username } });

  if (user) {
    res.status(200).json({ success: false, message: 'This username already exists.' });
  } else {
    res.status(200).json({ success: true, message: 'This username is available.' });
  }
}
