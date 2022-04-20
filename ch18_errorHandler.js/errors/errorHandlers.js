class ErrorHandler {

    constructor(status, message){
        this.status = status,
        this.message = message
    }

    static ValidationError(message="validation Error") {
        return new ErrorHandler(422, message)
    }

    static PageNotFoundError(message="page not found") {
        return new ErrorHandler(400, message)
    }

}
export default ErrorHandler