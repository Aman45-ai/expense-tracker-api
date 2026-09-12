import { configDotenv } from "dotenv"

configDotenv()

const config = {
    MONGO_URI: process.env.MONGO_URI
}

export default config