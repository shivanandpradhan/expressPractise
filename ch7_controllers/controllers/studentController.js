
const studentController = (req, res) => {
    res.send("<h1> Student Page </h1>");
}

const studentControllerId = (req, res) => {
    res.send(`<h1> student with id : ${req.params.id}</h1>`)
}

const studentControllerIdName = (req, res) => {
    res.send(`<h1> Student with id : ${req.params.id} and name : ${req.params.name}</h1>`)
}

export default studentController;

export {studentControllerId, studentControllerIdName};