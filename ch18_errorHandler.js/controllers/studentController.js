import ErrorHandler from "../errors/errorHandlers.js"


export default class studentController
{

    static getDetails = (req, res, next) => {
        
        if (req.params.name != "shiva") {
            throw next(ErrorHandler.ValidationError())
        }
        res.send(`All details of ${req.params.name}`)
    }
}