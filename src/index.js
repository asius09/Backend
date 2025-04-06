// require("dotenv").config({ path: "./env" }); //it's still working but its worsen the code consistency
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
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

connectDB();
