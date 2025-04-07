import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB Connected! DB HOST ${connectionInstance.connection.host}`
    ); //learn this... (connectionInstance.connection.host to check weather we are on right port or not)
    console.log(
      `\n Models Registered: ${Object.keys(connectionInstance.models)}`
    );
  } catch (error) {
    console.log("MONGODB CONNECTION FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
