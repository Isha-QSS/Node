import mongoose from "mongoose";
import dotenv from "dotenv/config";

const dbConnect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected...");
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
};

export default dbConnect;