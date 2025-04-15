import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadCloudinary = async (loaclFilePath) => {
  try {
    if (!loaclFilePath) return null;
    //upload the file on cloudarniry
    const response = await cloudinary.uploader.upload(loaclFilePath, {
      resource_type: "auto",
    });
    //file has been uploaded sucessfully
    console.log("File has been uploaded on cloudinary", response.url);
    const url = await response.url;
    return response;
  } catch (error) {
    fs.unlinkSync(loaclFilePath); //remove the locally saved temporray file as the upload failed.
    return null;
  }
};

export { uploadCloudinary };
