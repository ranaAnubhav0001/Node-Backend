import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConfig = async () => {
    const DB_URL = `${process.env.MONGO_URI}/${DB_NAME}`
    try {
        const databaseConnection = await mongoose.connect(DB_URL);
        console.log(`Database Connected !! DB HOST: ${databaseConnection.connection.host}`);
    } catch (error) {
        console.log("ERROR:---- ", error);
        process.exit(1);
    }
}
export default dbConfig;

