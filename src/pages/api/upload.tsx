// import type { NextApiRequest, NextApiResponse } from "next";
// import AWS from "aws-sdk";

// const S3 = new AWS.S3({
//   accessKeyId: "ACCESS_KEY",
//   secretAccessKey: "SECRET_KEY",
//   region: "REGION",
//   params: { Bucket: "BUCKET_NAME" },
// });

// export default async function Upload(req: NextApiRequest, res: NextApiResponse) {
//   const playlistName = req.body.playlistName;

//   try {
//     const { file } = req.body;
//     const { name } = file;

//     const buffer = new Buffer(file.data, "base64");

//     const response = await S3.upload({
//       Bucket: "audioplayernikkodev",
//       Body: buffer,
//       Key: `songs/${folderName}/${name}`,
//     }).promise();
//     res.status(200).json({
//       message: "File uploaded successfully!",
//       response,
//     });
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// }
