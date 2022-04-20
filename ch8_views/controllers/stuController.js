import path from "path"

const stuController = (req, res) => {
    res.sendFile(path.join(process.cwd(), "views", "student.html"));
}

export default stuController
