import AWS from "aws-sdk";

const s3 = new AWS.S3({
  accessKeyId: "ACCESS_KEY",
  secretAccessKey: "SECRET_KEY",
  region: "REGION",
  params: { Bucket: "audioplayernikkodev" },
});

export default s3;
