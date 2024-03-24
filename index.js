
const cloudinary = require("cloudinary").v2;

export  async function UploadImageToCloudinary (file, folder = "image-data", height = "100", quality = "100", cloud_name, api_key, api_secret){

  try {
    // const { file, folder, height, quality, cloud_name, api_key, api_secret } = req.body;

    if (!cloud_name || !api_key || !api_secret || !file) {

      throw new Error("All parameters are not fulfilled");


    }

    await cloudinary.config({
      cloud_name,
      api_key,
      api_secret,

    });

    const options = { folder, height, quality, resource_type: "auto" };

    const result = await cloudinary.uploader.upload(file.tempFilePath, options);

    console.log("result is ",result);

    return result;

  } catch (error) {
    console.log("Cloudinary upload failed");
    console.error(error);
    throw new Error(error);
  }

};


// module.exports = UploadImageToCloudinary;





