import studentModel from "../model/Student.js"

class StudentController{

    // create a document in a collection of student inside school db.
    static createDoc =  async (req, res) => {

        try{

            // new object of studentmodel
            // req.body is of type json
            // so use middleware express.json()
        
            const doc = new studentModel(req.body)

            //  saving a doc.
            const result = await doc.save()

            // sending the response
            res.status(201).json(result);

        }catch(err){
            console.log(err)
            res.json({"message" : "Error in posted data"})
        }
    }

    // get all doc inside a collection
    static getAllDoc = async (req, res) => {

        try{
            
            // query for finding all the docs inside the model.
            const result = await studentModel.find()

            // sending the response as json.
            res.json(result)

        }catch(err){
            console.log(err)
            res.json({"message" : "No Doc Found to Display"})
        }
    }

    // get single doc by id inside a collection
    static getSingleDocById = async (req, res) => {
        try{

            // query for finding doc based on id.
            const result = await studentModel.findById(req.params.id)

            // sending the response.
            res.json(result)
        }
        catch(err){
            console.log(err)
            res.json({"message" : "No Doc Found to Display"})
        }
    }

    // update doc by id inside a collection.
    static updateDocById = async (req, res) => {
        
        try {
            
            // update query
            const result = await studentModel.findByIdAndUpdate(req.params.id, req.body, {returnDocument : "after"})

            // sending the response.
            res.json(result)

        } catch (err) {
            console.log(err) 
            res.json({"message" : "No Doc Found to Update"})  
        }
    }

    // delete doc by id inside a collection.
    static deleteDocById = async (req, res) => {

        try{
            const result = await studentModel.findByIdAndDelete(req.params.id)

            // sending the response
            res.status(204).json(result)

        }
        catch(err){
            console.log(err)
            res.json({"message" : "No Doc Found to Delete"})
        }
    }

}

export default StudentController