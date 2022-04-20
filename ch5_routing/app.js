import express from "express" 

const app = express();

// defining port and host
const PORT = process.env.PORT || "3000";
const HOST = "localhost";

// request method

app.all("/", (req, res, next) => {
    console.log("all method called");
    next();
})

app.get("/", (req, res) => {
    res.send("<h1> Home Page </h1>");
})
// app.post("/about", (req, res) => {
//     res.send("post data method");
// })
// app.put("/about", (req, res) => {
//     res.send("complete update data method")
// })


// // path ...

// // string pattern path
// app.get("/ab?cd", (req,res) => {
//     res.send(req.url + " : url of this page.")
// })

// regex
// app.get(/a/, (req, res) => {
//     res.send("one or more a's in a url.")
// })

// callbacks.....

// one callback
app.get("/home", (req, res) => {
    res.send("<h1> Home Page </h1>")
})

// more than one callback
app.get("/about", (req, res, next) => {
    console.log("about callback1")
    next();
    }, (req, res, next) => {
        console.log("about callback2")
        next();
    }, (req, res) => {
        res.send("about Page");
    }
);

// array of callback
const c1 = (req, res, next) => {
    console.log("call back 1");
    next()
}

const c2 = (req, res, next) => {
    console.log("call back 2")
    next()
}

const c3 = (req, res,next) => {
    res.send("callback 3 called....")
}

app.get("/callback", [c1, c2, c3])


// making independent callback in a list, and final callback at the seperate parameter.
app.get("/callback/independents", [c1, c2], (req, res) => {
    res.send("callback is called this time.")
})


//  chained rule callback
app.route("/student").all(
    (req, res, next) => {
        console.log("all method called");
        next()
    }
).get(
    (req, res) => {
        res.send("get student information");
    }   
).post(
    (req, res) => {
        res.send("post student information.");
    }
).put(
    (req, res) => {
        res.send("update data of student.");
    }
)

// listening on port
app.listen(PORT, HOST, () => {
    console.log(`Listening on port : ${PORT}`);
})

