import mongoose from 'mongoose'

// define the schema for the employee..
const employeeSchema = mongoose.Schema({
    _id : Number, 
    name : {type : String, uppercase : true, required : true},
    age : {type : Number, min : 18, max : 55, required : true},
    salary : {type : mongoose.Decimal128, validate : v => v >= 5000.50},
    hobbies : {type : Array},
    inactive : {type : Boolean, default : true},
    comments : [{value : {type : String}, publish : {type : Date, default : Date.now}}],
    join : {type : Date, default : Date.now}
})

// compiling or creating a model.
const Employee = mongoose.model('Employee', employeeSchema);

// createDoc function...
// const createDoc = async () => {

//     try{
//         // creating a document.
//         const employeeDocument = new Employee({
//             _id : 123, 
//             name : "shivanand pradhan",
//             age : 23,
//             salary : 10000.55,
//             hobbies : ['cricket', 'badmintion', 'gardening', 'watch movie'],
//             comments : [{value : "He is a nice person."}]
//         })

//         // saving a document returns a promise.
//         await employeeDocument.save()
//         console.log("document created")

//     }
//     catch(err) {
//         console.log(err)
//     }
// }

// optimized way of writing createDoc function..
const createDoc = async (id, _name, _age, _salary, hobbiesArr, commentsArr) => {
    try{
        const employeeDocument = 
        new Employee({
            _id : id, 
            name : _name,
            age : _age,
            salary : _salary,
            hobbies : hobbiesArr,
            comments : commentsArr
        })

        await employeeDocument.save()
        console.log("new document created.")
    }
    catch(err) {
        console.log(err)
    }
}

export default createDoc


