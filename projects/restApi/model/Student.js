import mongoose from "mongoose"

// defining a schema
const studentSchema = mongoose.Schema({
    name : {type : String, required : true, trim : true },
    age : {type : Number, required : true},
    fees : {type : mongoose.Decimal128, required : true, validate : v => v >= 2000.5}
})

//  creating a model
const studentModel = mongoose.model('student', studentSchema)

export default studentModel
