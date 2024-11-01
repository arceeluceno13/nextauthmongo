import mongoose from "mongoose";

mongoose.set('strictQuery', true); // or false, depending on your preference

const connection = {};

export default async function connectDatabase() {
  if (connection?.isConnected) return;

  return await mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database Connected!");
      connection.isConnected = true;
    })
    .catch((error) => {
      console.error("Database connection error:", error);
      throw new Error("Database connection error!");
    });
}