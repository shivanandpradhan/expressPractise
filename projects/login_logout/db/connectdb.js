import mongoose from "mongoose"

const connectDB = async (DATABASE_URL) => {

    try{

        const DB_options = {
            dbName : "studentdb"
        }

        await mongoose.connect(DATABASE_URL, DB_options)
        console.log("Connected to DB successfully.")
    }
    catch(err) {
        console.log(err)
    }
}

export default connectDB;