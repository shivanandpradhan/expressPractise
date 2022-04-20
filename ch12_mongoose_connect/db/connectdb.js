import mongoose from "mongoose"


// using promise
// const connectDB = (DATABASE_URL) => {

//     mongoose.connect(DATABASE_URL)
//     .then(()=> {
//         console.log("DB connected Successfully.")
//     })
//     .catch(err => console.log(err))

// }

// using async - await
// const connectDB = async (DATABASE_URL) => {

//     try{
//         await mongoose.connect(DATABASE_URL);
//         console.log("connected successfully")
//     }
//     catch(err) {
//         console.log(err)
//     }
// }

// connect using options.
const connectDB = async (DATABASE_URL) => {

    try{
        const DB_options = {
            user : "shiva",
            pass : "123456",
            dbName : "schooldb",
            authSource : "schooldb"
        }

        await mongoose.connect(DATABASE_URL, DB_options)
        console.log("Connected to Database successfully.")
    }
    catch(err){
        console.log(err)
    }
}

export default connectDB