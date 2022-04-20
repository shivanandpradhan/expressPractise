
import express from "express"

const app = express()

// defining port and host
const PORT = process.env.PORT || "3000"
const HOST = "localhost"

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1>");
})

// route parameters

// req.params.
app.get("/student/info/:id/:name", (req, res) => {
    console.log(req.params);
    res.send(`<h1> Student name : ${req.params.name} Student id : ${req.params.id}</h1>`)
})

app.get("/train/:from-:to", (req, res) => {
    res.send(`<h1> Train : ${req.params.from.toUpperCase()} to ${req.params.to.toUpperCase()} </h1>`)
})

// use of regex in params.
app.get("/student/delete/:id([0-9]{2})", (req, res) => {
    res.send("<h3>only id of length 2 is allowed.</h3>")
})


app.get("/:title(student|teacher)/info/:id([0-9]{3})", (req, res) => {
    res.send(`<h2>${req.params.title} with allowed 3-digit id : ${req.params.id}</h2>`)
})

// param()

// single name....
app.param('product', (req, res, next, product) => {
    console.log(`Product : ${product}`);
    next();
})

app.get("/buy/:product/", (req, res) => {
    res.send(`<h3> Product : ${req.params.product}</h3>`)
})

// multiple names....
app.param(["item", "price"], (req, res, next, data) => {
    console.log(`Data : ${data}`)
    next()
})

app.get("/buy/:item/:price", (req, res) => {
    res.send(`<h3> Product : ${req.params.item} Price : $${req.params.price}</h3>`)
})

// query string
app.get("/teacher", (req, res) => {
    console.log(req.query)
    res.send(req.query)
})



//  listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on the Port : ${PORT}`);
})

