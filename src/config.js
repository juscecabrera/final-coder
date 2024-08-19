import dotenv from "dotenv";

dotenv.config();

export default {
    clientId: process.env.CLIENT_ID,
    secretId: process.env.SECRET_ID,
    mongoUri: process.env.MONGO_URI,
    baseUrl: process.env.BASE_URL
}