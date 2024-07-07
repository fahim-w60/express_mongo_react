import mongoose from "mongoose";

const connectDB = async() => {
    try{
        const conn = mongoose.connect(`mongodb+srv://fahimmahmud:fahim2468@cluster0.vyygxw6.mongodb.net/proshop`);
        console.log('mongodb connected');
    }
    catch(error){
        console.log('error from mongodb');
        process.exit(1);
    }
}

export default connectDB;