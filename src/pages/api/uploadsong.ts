import { ourSongRouter } from "@/lib/db/uploadsong";
import { createNextPageApiHandler } from "uploadthing/server";
 
const handler = createNextPageApiHandler({
router: ourSongRouter,
});
 
export default handler;


