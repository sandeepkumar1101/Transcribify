import dotenv from "dotenv";

import fs from "fs";
import path from "path";

import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

export const audioProcessing = async (req, res) => {
  try {
    const { file_name, username, file_url, language, speaker_identification } =
      req.body;
    const audioPath = path.join(__dirname, `../public/assets/${file_name}`);

    console.log(
      file_name,
      username,
      file_url,
      language,
      speaker_identification
    );
    setTimeout(() => {
      fs.unlink(audioPath, (err) => {
        if (err) {
          console.error(err);
          return;
        }
      });
      res.status(200).json({
        message: "Audio file uploaded successfully",
      });
    }, 1000);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
};
