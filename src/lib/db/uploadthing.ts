/** server/uploadthing.ts */
import { createFilething, type FileRouter } from "uploadthing/server";
const f = createFilething<"pages">(); // <-- set this flag
 
const auth = (req: Request) => ({ id: "fakeId" });
 
export const ourFileRouter = {
  songUploader: f
    .fileTypes(["image"])
    .maxSize("8MB")
    .onUploadComplete(async ({ metadata }) => {
      console.log("Upload complete for userId:");
    }),
} satisfies FileRouter;
 
export type OurFileRouter = typeof ourFileRouter;