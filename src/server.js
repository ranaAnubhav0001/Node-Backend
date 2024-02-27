import dotenv from 'dotenv';
import app from "./app.js";
import cors from 'cors';

//DOT ENV CONFIG 
dotenv.config();

//CORS CONFIG
app.use(cors());

//PORT CONNECTION
const PORT = process.env.PORT || 9000;

//DB CONFIG
import dbConfig from './db/dbConfig.js';


//SERVER CONNECTIONS
const startServer = async () => {
    try {
        await dbConfig();
        app.on("error", (err) => {
            console.log("Error isme hai ", err);
        });
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (err) {
        console.log("Mongo DB Connection Error-->", err);
    }
};

startServer();
