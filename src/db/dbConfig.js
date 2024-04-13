import mongoose from "mongoose";


export const dbConect = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log('DB Conected');
        
    } catch (error) {
        console.log(error);
    }
}
