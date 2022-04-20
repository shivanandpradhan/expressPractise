import mongoose from "mongoose"


const connectDB = async (DATABASE_URL) => {

    try{
        const DB_options = {
            dbName : process.env.DB_NAME
        }

        await mongoose.connect(DATABASE_URL, DB_options)
        console.log("connected to db Successfully.") 
    }
    catch(err) {
        console.log(err)
    }

}

export default connectDB