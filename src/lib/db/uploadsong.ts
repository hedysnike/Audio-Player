import { createFilething, type FileRouter } from "uploadthing/server";
const f = createFilething<"pages">();
 
const auth = (req: Request) => ({ id: "fakeId" });
 
export const ourSongRouter = {
  songUploader: f
    .fileTypes(["audio"])
    .maxSize("32MB")
    .onUploadComplete(async ({ metadata }) => {
      console.log("Upload complete for userId:");
    }),
} as FileRouter;
 
export type OurSongRouter = typeof ourSongRouter;
