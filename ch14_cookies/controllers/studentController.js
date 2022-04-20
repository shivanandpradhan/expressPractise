

class StudentController {

    static setCookie = (req, res) => {
        res.cookie("username", "shiva")
        res.cookie("cart", "10", {maxAge : 200000})  // age of 2 sec.. deleted after two second.
        res.cookie("product", "television")

        res.send("<h1> Cookie is setted ..... </h1> ")
    }

    static getCookie = (req, res) => {  
        console.log(req.cookies)
        res.send(`cookie : username : ${req.cookies.username}, cart : ${req.cookies.cart}`)
    }

    static clearCookie = (req, res) => {
        res.clearCookie("username")
        res.send("<h1> Cookie cleared .... </h1>")
    }
}

export default StudentController;