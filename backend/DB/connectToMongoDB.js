import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URL);
        console.log("connected to mongoDB");
        
    } catch (error) {
        console.log("error connecting mangodb",error.message);
        
    }
}

export default connectToMongoDB;