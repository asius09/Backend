// require("dotenv").config({ path: "./env" }); //it's still working but its worsen the code consistency
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 8000;

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is running at port: ${port}`);
    });
  })
  .catch((error) => {
    console.log("MongoDB Connection Failed!!", error);
  });
/*
import express from "express";
const app = express();
(async () => {
  try {
    mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is lestentning on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR:", error);
  }
})();
*/
