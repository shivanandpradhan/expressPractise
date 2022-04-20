import mongoose from "mongoose"

// defining a schema.
const studentSchema = mongoose.Schema({
    name : {type : String, required : true, trim : true},
    email : {type : String, required : true, trim : true, unique : true},
    password : {type : String, required : true, trim : true},
    join : {type : Date, default : Date.now}
})


//  creating a model
const studentModel = mongoose.model("student", studentSchema)

export default studentModel