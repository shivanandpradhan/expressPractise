import path from "path"

const homeController = (req, res) => {
    res.render("index", {title : "Home Page"})
}

export default homeController