Express Basics :-

1. Express js is fast and minimalist web framework for node js.
    
    - helps in create static, dynamic and hybrid web app.
    - fast and easy.
    - routing.
    - middlewares.
    - rest api.
    - very popular.
    
2. ch2 

    - contains basic introduction
    - 
        - use of express()
            It is a top-level function exported by the express module.
            const app = express()
                app returned by the function is in fact a js function, designed to be passed 
                to Node's http servers as a callback to handle request.

        - defining port and host
            const port = process.env.PORT || "3000"
            const host = "localhost"
        
        - listening on server : listen()
            it binds and listens for connections on the specified host and port.

            If port is ommitted or is 0, then the os will assign an arbitrary unused port 
            which is useful for cases like automated tasks.
            
        - get method

3. ch3_babel

    - Babel 
        It is a Transpiler which converts the ecmascript feature of js into compatible old
        javascript code.
    
    - Set Up for project.
        - install @babel/core, @babel/cli, @babel/preset-env
            npm install -D @babel/core @babel/cli @babel/preset-env
        
        - @babel/core - main package to run any babel setup or configuration.
        - @ babel/cli - bable comes with a built in cli which can be use to compile files
                        from the command line. (compile the file.)
        - @babel/preset-env :- this enable us to use new and upcoming features which node js
                             is yet to understand.

    - compile files 

        npx babel index.js
            - compiles index.js file

        npx babel index.js --out-file index.compiled.js 
            - compiles index.js and save o/p to index-compiled.js.
            - can use -o instead of --out-file
        
        npx babel index.js --watch --out-file index-compiled.js
            -compiles index.js every time we make changes and o/p to index-compiled.js

    - compile directory

        npx babel src --out-dir prd 
            -compiles whole dir src and o/p to prd
            - can use -d inplace of --out-dir
        
        npx babel src --out-file index-compiled.js
            - compiles whole src directory and o/p in a single file index-compiled.js

    - after installation :
        
        - create a file called .babelrc at the root directory of Project and write
            { 
                "presets" : ["@babel/preset-env"]
            }
        
        - open package.json file

            "script" : {
                "build" : "babel index.js --out-file prd",
                "start" : "npm run build && nodemon prd/index.js",
                "serve" : "node prd/index.js"
            }

            for directory :
                "build" : "babel src --out-dir prd",

4. ch4_exp_app_generator

    Express Aplication Generator 
        
        - use for quickly create an application skeleton or structure.
    
        - folder structure 
            - bin : contains the executable file that start your app. (contains www)
            - public : contains folders like javascript, css, images and other assets.
            - routes : contains route files. 
            - views : contains files related to template engine.
            - app.js : creates an express application object, set up the application
                     with various settings and middlewares, and then exports the app from the module.


    Install

        - npx express-generator --view=ejs myapp


        - npm install -g express-generator
        - express --view=ejs myapp

    - install all required dependency.

        - npm install
    
    - to run :

        SET DEBUG=project_folder_name:* & npm start
    
5. ch5_routing

    - Routing :

        It refers to determining how an application responds to a client request to a 
        particular endpoint, which is a URi (OR PATH) and  a specific HTTP rquest method (get,post...)

        syntax :
            - app.method(path, callback)
            - app.method(path, [callback1, callback2, callback3, ... ])
            - app.method(path, [callback1, callback2, ...], callback)
        

                - app : instance of express
                - method : http request method, written in lowercase.
                    
                    get : retrieve data
                    post : create/ insert data
                    put : completely update data
                    patch : partially update data
                    delete : delete data
                    all : any http request method
                        all method is useful for mapping "global logic" for specific path prefixes.
                            
                            - app.all("/prev_all", (req, res, next) => {
                                console.log("accessing the secret section ");
                                next();  // calling next callback.
                              })
                            - app.all("/api/*", requireAuthentication);

                - path : path on the server.

                    it can be strigns, string patterns or regular expression. query strings are 
                    not part of route path.

                    chars like ? + * and () are subsets of their reg exp.
                    hypen(-) and dot(.) are interpreted by string based path.
                    for using dollar sign in path. enclose it like([\$])

                        app.get("/data/([\$])book, callback)
                    
                - callback : function executed when the route is matched.
                    function (req, res, next) {}
                
                - chained route callbacks 
                    app.route(path) :- it returns an instance of a single route which you can
                                         use to handle http verbs with optional middlewares. This
                                        method is used to avoid duplicate route names for different methods.
                                    
                                eg :
                                    app.route("/student").get(
                                        (req, res) => {
                                            res.send("get method")
                                        }
                                    ).post(
                                        (req, res) => {
                                            res.send("post method")
                                        }
                                    ).put(
                                        (req, res) => {
                                            res.send("update method")
                                        }
                                    )
                
6. ch6_router_route_parameters
    
    Router 

        It is used to create modulear, mountable route handlers.
        A Router instance is a complete middleware and routing system.
        
    steps:

        create router Module :
            routes/student.js
        
        create router instance 
            const router = express.Router()
        
        define routes using router object.
            router.get("/", (req, res) => {
                res.send("home Page");
            })
        
        export router
            export default router;
            or 
            module.exports = router;
        
        open app.js

        import router module
            import router from "routes/router.js"
            or 
            const router = require("./routes/student.js");
        
        load router module.
            app.use(router)
                move to the router and execute on the basis of valid path.

            app.use('url', router)
                new path will be "url/..." 
                ... denotes routes defined in router.
    
    improved_router
        improved version of previous ch6_router'

    route parameters
        these are named url segments that are used to capture the values specified
        at their position in the URL.
        
        these values are populated in the req.params object, with the name 
        of the route parameter specified in the path.

            eg. 
                /student/:id 
                /student/:category/:id
                /product/order/:year/and/:month
                /train/:from-:to
            
        route parameter with regex
            we can append a regular expression in parenthesis (())
                /student/:id([0-9]{2}) // www.examle.com/student/12  i.e only 2 digit number.
                /student/:name([a-z]) // www.example.com/student/anamika
            - choices.. 
                /:type(post|article)/:id   //  /post/12   /article/22
        
        route parameter 

            app.param() :- 

                - This function is used to add the callback triggers to route parameters. 
                  It is commonly used to check for the existence of the data requested 
                    related to the route parameter.
                
                - all param callbacks will be called before any handler of any route
                     in which the param occurs.
                    
                - syntax :
                    app.param(name, callback)
                    app.param([name1, name2, name3, ....], callback)

                    if name is an array, then callback trigger is registered for each parameters in the order,  
                    that they are declared.

                - example :
                    app.param("id", (req, res, next, id) => {
                        console.log(`id : ${id}`);
                    })
        
    query string
        /student?id=12&name=shiva&age=12

        to get query
            req.query

7. Controllers

    This is used for grouping and handling similar kinds of requests logics.

    Instead of defining all of your request handling logic as callback in route or route files,
    you may wish to organize this behavior using controller modules.

    Example :

        Instead of using

            - app.get('/student/all', (req, res) => {
                res.send('All Student')
            })
        
        or in routes/student.js

            - router.get('/all', (req, res) => {
                res.send('All Student')
            })
        
        Use :- 

            create a separate directory :- Controllers

            - in homeController.js

                const homeController = (req, res) => {
                    res.send("All student");
                }    

                export {homeController};    
            
            - in app or routes/student.js (use it inplace of callback)

                app.get("/student/all", homeController)

                router.get("/all", homeController)

8. ch8_views  

    It contains the html, served by your application.
    It seperate application logic from your presentation logic.
    views are stored in the views directory.

    creating view

        - views/index.html
            <html>
                <body>
                    <h1> Home Page </h1>
                </body>
            </html>
        
    Create route for view

        - app.get("/", (req, res) => {
            res.sendFile(path.join(process.cwd(), 'views', 'index.html'))
        });

        process.cwd() : process is node's global object and .cwd() returns path where 
                        node is running.
        
        sendFile() : 
            used to tranfers file at the given path.
            sets the Content-Type  based on filename's extension.
        
9. ch9_static

    css, js, image, video etc files are considered as static files in express js.
    To serve these, use express.static middleware function in express

    syntax :
        
        express.static(root, [options])
    
    Example :

        app.use(express.static('public'))
        http.//localhost:3000/css/styles
    
    To create a virtual path prefix (where path doesnot actually exist in the file system).

        app.use("/static", express.static("public"))
        http.localhost:3000/static/css/style.css
    
    The path that we provide to the express.static() is realative to the directory from where 
    you launch your node process.
    If you run the app from another directory, then it is better to use the absolute path of the 
    directory that you want to serve.

        app.use('/static', express.static(join(process.cwd(), 'public')))

10. ch10_template_engine
    
    Template engine

        Enable us to use static template files in our application.
        At runtime, the template engine replaces variables in a template file with acutal values, 
        and transforms the template into an html fiel sent to the client.

        eg: ejs, pug, mustachce, nunjucks, dust..
    
    setup template engine

        INSTALL 
            npm install ejs
        
        app.js
        set up directory where template files are located.
            app.set('views', './views')  - BY DEFAULT.. path "./views"
        
        set up the template engine to use.
            app.set('view engine', 'ejs')

        if view engine property is not set, you must specify the extension of the view file.

            res.render("index.ejs")

        views/
            index.ejs
            about.ejs
            student.ejs
        
        creating routes for template files.
        app.get('/', (req, res) => {
            res.render('index')
        })

        render() :

            - renders a view and send the rendered html string to the client.

            syntax :
                res.render(view, locals, callback)

                view :
                    it is a string that is the file path to template files.
                locals:
                    it is an object whose properties define local variables for the view.
                callback() :
                    if provided, it returns both the error and rendered string. but doesnot perform an automated response.
                    when an error occurs, the method invokes next(err) internally.
                
            
            - send rendered view to the client
                res.render("index")
            
            - pass a local variable to the view
                res.render("index", {name: "sonam"})
            
            - rendered html string has to be sent explicitly
                res.render('index', function(err, html) {
                    res.send(html)
                })

            - res.render('index',{name : 'shiva'}, (err, html) => {
                ....
            })

11. ejs_template_engine

    stands for embedded javascript.

    a simple templating language the lets you generate html with plain js.

    fast compilation and rendering.
    simple template tags : <% %>
    sub templates includes
    both server js and browser support

    displaying data :

        data passed to your views can be displayed by wrapping var in <%= %>

            <%= name %>
        
    comment :

        ejs comments are not included in the html returned by your application.

            <%# comment %>
    
    simple js code 

        variable declaration 

            <% var i = 10; %>
    
    if condition

        <% if (cond) { %> 
            ...
        <%}%>
    
    if - else 
        <% if (cond) { %> 
            ...
        <%} else {%>
            ...
        <% } %> 

    if - else if - else
        <% if (cond) { %> 
            ...
        <%} else if {%>
            ...
        <% } else { %> 
            ...
        <% } %> 

    
    loops 

        for

            <% for(initial; condition; incr/decr) { %> 
                ...
            <% } %>
        
        for in loop

            <% for(const key in data) { %> 
                ...
            <% } %>
        
        while

            <% while (condition) { %>
                ...
            <% } %>

        forEach

            <%data.forEach((item) => { %>
                ...
            <% }) %>
        
    include 

        include are relative to the template.

        syntax :

            <%- include(filename, object) %>
            <%- include(folder/filename, object)
        
        example :

            <%- include('header', {'name': 'homepage'}) %>
            <%- include('./partials/header', {name : 'homepage'}) %>
    
12.ch11_middleware

    middleware :
        These are functions that have access to the request object, 
            response object and next() in the application's req-res cycle.
    
        next is a function in the Express router which, when invoked, executes teh middleware
         succedding the current middleware.
        
        . can execute any code.

        . can make changes to the request and response object.

        . can end the request-response cycle.

        . call the next middleware in the stack.
    

    Application level middle ware
    -------------------------------

    creating middleware

        app.use(function(req,res, next) {
            console.log("logged')
            next()
        })

        -- efficient way ..
        in middleware/logger-middleware.js

        var myLogger = function(req, res, next) {
            console.log("logged")
            next()
        }

        in app.js

            import --- mylogger first

            app.use(myLogger)
        
    A middleware with no mount path, executed every time the app receives a request.
    above is an example of no mounted path.

    A middleware funcitn mounted on the path, executed for any of http request on that path.

    eg. 

        app.use('/about', (req, res, next) => {
            console.log('logged');
            next()
        })

        - this middleware will execure for any type of http request on /about path.
    
    multiple callback

        app.use('/about', (req, res,next) => {
            console.log('logged')
            next()
        }, (req, res, next) => {
            console.log('logged 2')
            next()
        })
    
    Router level middleware
    ------------------------

    It works in the same way as application-level middleware, except it is bound to 
    an instance of express.Router()

        router.use((req, res, next) => {
            console.log('logged')
            next()
        })
    
13.ch12_mongoose_connect

    mongoose provides a straight forward, schema based solution to model your application data.

    helps in modeling db using mongodb.

    It includes built-in type casting, validation, query building, business-logics and more..

    Installation :

        - npm i mongoose
    
    connect() :

        helps in establishing a connection to the mongodb database.

        returns a promise.
    
        syntax :

            mongoose.connect(uri, options, callback)

            uri :- it is a string used as connection uri.
            options : It is an object passed down to the mongodb driver's connect().
            callback : function
        
        Example :

            - mongoose.connect("mongodb://localhost:27017/schooldb")
            - mongoose.connect("mongodb://localhost:27017/schooldb", {
                useNewUrlParser : true,
                useUnifiedTopology : true
            })

        options also includes:

            user : string
            pass : string
            dbName : string
            authSource : string
            autoIndex : boolean
            
        Example :

            const options = {
                useNewUrlParser : true,
                useUnifiedTopology : true,
                user : "shiva",
                pass : "123456",
                dbName : "schooldb",
                authSource : "schooldb"
            }
            mongoose.connect("mongodb://localhost:27017", options)
        
    connect returns a promise..
        
            in db/connectdb.js

                - const connectDB =  mongoose.connect("mongodb://localhost:27017//schooldb")
                .then( () => {
                    console.log("connected successfully")
                }).catch(err) => {
                    console.log(err)
                })

            in app.js

                import connectDB from './db/connectdb.js'
                connectDB()

        --- more nicer way to write..

            in app.js

                const DATABASE_URL = 'mongodb://localhost:27017'

                connectDB(DATABASE_URL)

                // if DATABASE_URL defined in process.env then we can also write.
                // const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017/schooldb'

            
            in db/connectdb.js

                const connectDB = (DATABASE_URL) => {

                    return mongoose.connect(DATABASE_URL)
                    .then(() => {
                        console.log("connected successfully")
                    })
                    .catch(err => {
                        console.log(err)
                    })

                }

        way of defining DATABASE_URL if user is created.

            in mongodb : mongosh

                schooldb > db.createUser({
                                user : "shiva", 
                                pwd : "123456", 
                                roles : [{role : "read", db : "schooldb"}]
                            })
            in app.js

                    const DATABASE_URL = process.env.DATABASE_URL || 
                            'mongodb://shiva:123456@localhost:27017/schooldb?authSource=schooldb'
                    connectDB(DATABASE_URL)

                here shiva :--> username
                    123456 :--> password of user.
            
        another way of handling this using options.

            in app.js 

                - const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017'
                - connectDB(DATABASE_URL)
            
            in db/connectdb.js

                // here instead of promise we are using async await.. 

                - const connectDB = async (DATABASE_URL) => {

                    try{
                        const DB_options = {
                            user : "shiva",
                            pass : "123456",
                            dbName : "schooldb",
                            authSource : "schooldb"
                        }

                        await mongoose.connect(DATABASE_URL, DB_options);
                        console.log("connected successfully");
                    }
                    catch(err) {
                        console.log(err)
                    }

                }

14.ch13_mongoose_schema

    schema :

        A document schema is an json object that allows you to define the structure and content
        of the documents and embedded documents in a collection.
    
    defining schema

        Everything in a mongoose starts with a schema.

        Each schema maps to a mongodb collection and defines the shape or structure of the document
        within that collection.

    Syntax :

        one way :

            import mongoose from 'mongoose'

            const nameSchema = new mongoose.Schema({
                key1 : String,
                key2 : Number,
                key3 : mongoose.Decimal128,
                key4 : [String],
                key5 : Boolean,
                key6 : [{key1 : String, key : Date}],
                key7 : Date
            })
        
        second way :

            const nameSchema = mongoose.Schema({
                key1 : {type : String},
                key2 : {type : Number},
                key3 : {type : mongoose.Decimal128},
                key4 : {type : Array},
                key5 : {type : Boolean},
                key6 : [{key1 : {type : String}, key2 : {type : Date}}],
                key7 : {type : Date}
            })
    
    _id property 

        When you create a new document with the automatically added _id property,
         mongoose creates a new _id of type ObjectId to your document.
        
        Objectid encode the local time at which they were created. That means you can 
        usually pull the time that a document was created from its _id.

        You can also overwrite mongoose's default _id with your own _id.

    Type in Schema :

        - String
        - Number
        - Date
        - Buffer
        - Boolean
        - Mixed
        - ObjectId
        - Array
        - Decimal128
        - Map 
        - Schema

        when mongoose finds a nested property named type in your schema, mongoose assumes
        that it needs to define a Schema({
            name : {type : String, required : true}, 
            age  : {type : Number, min : 18, max : 55},
            fees : {type : mongoose.Decimal128, validate : v => v >= 1000.50},
            hobbies : {type : Array},
            inactive : {type : Boolean},
            comments : [{vallue : {type : String}}]
        }) Type with the given type.

        eg:
            -- problem
            const clothSchema = new mongoose.Schema({
                bottomwear : {
                    type : String,
                    price : Number
                }
            })
            -- correct way for this.
            const clothSchema = new mongoose.Schema({
                bottomwear : {
                    type : { type : String},
                    price : Number
                }
            })
        
    String Type properties 

        lowercase : boolean, whether to always call .toLowerCase() on the value or not.
        uppercase : boolean, whether to always call .toUpperCase() on the value or not.
        trim : boolean, -------------- .trim() -----------------------
        match : RegExp, creates a validator that checks if the value matches the given re.
        enum : Array, creates a validator that checks if the value is in the given array.
        minLength : Number, creates a validator that checks if the value length is not less than
                    the given number.
        maxLength : 
        populate : Object, sets default populate options.
    
    Number Type properties 

        min : Number, validator -- checks value should be >= min
        max : Number
        enum : Array, checks that value is strictly equal to one of the values in the given array.
        populate : Object, sets default populate options.
    
    Boolean 
        
        true : true, 'true', 1, '1', 'yes'
        false : false, 'false', 0, '0', 'no'
    
    All schema types :

        required    : boolean or function, if true adds a required validator for the property.
        default     : any or functiton, sets a default value for the path, if value is function, 
                        then the return value of the function is used as the default.
        validate    : function, adds a validator function for this property.
        get         : define a custom getter for this property using Object.defineProperty()
        set         : define a custom setter for this property using Object.defineProperty()
        alias       : string, mongoose >= 4.10.0 only.
        immutable   : booleans, defines path as immutable.
        transform   : function, mongoose calls this function when you call Document.toJson() 
                        including wehn you Json stringify() a document.
    
    Example :

        -
        import mongoose from 'mongoose'
        const studentSchema = new mongoose.Schema({
            name : {type : String, required : true}, 
            age  : {type : Number, min : 18, max : 55},
            fees : {type : mongoose.Decimal128, validate : v => v >= 1000.50},
            hobbies : {type : Array},
            inactive : {type : Boolean},
            comments : [{value : {type : String}, publish : {type : Date}}],
            join : {type : Date, default : Date.now}
        })

    schema.path()

        returns the instantiated schema type for a given path.

        studentSchema.path('age')

    Create Document using Model

        in models/Student.js

        // defining schema or shape of the document.
        const studentSchema = mongoose.Schema({name : String})

        // compiling schema  or creating a model.
        const Student = mongoose.model('Student', studentSchema)

        // creating document
        const stu = new Student({
            name : 'Sonam'
        })

        // saving document.
        await stu.save()
    
    save() 

        It is used to save document by inserting a new document into the database if 
         document.isNew is true, or sends an updateOne operation only with the modifications to 
         the database, it does not replace the whole document in the latter case.
        
        returns undefined if used with callback, otherwise it returns a promise.

        i.e 
            stu.save((err, result) => {
                if (err) console.log(err);
                else console.log(result);
            })

            or 

            const result = await stu.save()
            console.log(result)

        mongoose validates modified paths before saving. if you set a field to an invalid value,
        it will throw an error when you try to save() that document.
        
        const result = await stu.save({validateBeforeSave : false})
    
15.Mongoose_methods

    find 
        - applied on the model to get all the documents inside that model(collection).
        - returns all occurrences in the selection.

        - syntax:
            find(filter_object, projection_object, options_object, callback)

        - Example :
            await StudentModel.find({name : "shiva"}, {name : 1, age : 1}, {skip : 5})
        
        - modelName.find() returns the whole documents inside the collection.

    count total no. of docs in a colletion.

        modelName.find().countDocuments()
    
    select() :

        - used for including and excluding specific keys from the document.

        - retrive all docs with specifc fields
            - modelName.find().select('name age')
            - modelName.find().select(["name", "age"])
            - modelName.find().select({name : 1, age : 1})
            - modelName.find({}, 'name age')
        
        - retrive all docs without or excluding specifc fields
            - modelName.find().select('-name -age')
            - modelName.find().select(["-name", "-age"])
            - modelName.find().select({name : 0, age : 0})
            - modelName.find({}, '-name -age')  

    - findById

        - used to get doc based on id.

        - modelName.findById("id") 
    
    - change id to time stamp
        
        - const result = modelName.findById("id")
        - console.log(result._id.getTimestamp())
    
    - retrive skip document

        - modelName.find({name : "shiva"}, null, {skip : 1})
        - modelName.find({name: "shiva"}).skip(1)
    
    - limit 

        - for getting specific number of docs.
        - modelName.find().limit(4)
        
    - sort 

        - modelName.find().sort()           
        - modelName.find().sort({name:1}) // sort based on name
    
    - comparison query operator

        - modelName.find({age : {$gt : 25}})  // find doc whose age greater than 25
        - modelName.find({age : {$gte : 25}}) 
        - modelName.find({age : {$lt : 25}})
        - modelName.find({age : {$lte : 25}})
        - modelName.find({age : {$ne : 25}})
        - modelName.find({age : {$in : [21,25]}})
        - modelName.find({age : {$nin : [21, 25]}})
    
    - Logical query operator 

        // select those whose age is 25 and fees 3000.23
        - modelName.find({$and : [{age : 25}, {fees : 3000.23}]}) 

        - modelName.find({$or : [{age : {$gt : 18}}, {fees : {$gte : 2000 }}]})


    Update Document

        : use for update the document.

        - findByIdAndUpdate 
            - It finds a matching doc, updates it according to the update arg, passing any options
            and returns the found document (if any) to the callback.
        
            - syntax
                findByIdAndUpdate(id, update, options, callback)
            
            - Example :
                // it updates and returns the new record
                findByIdAndUpdate("id", {name : "shiva"}, {returnDocument : after})
                // it updates and returns the previous record
                findByIdAndUpdate("id", {name : "shiva"}, {returnDocument : before})
        
        - updateOne() : 
            used to update a single document.

            syntax :
                updateONe(filter, update, options, callback)
            
            Example : 
                updateOne({name : "shiva"}, {name : "ragav"}, {upsert : true})

                upsert : if it is true, and no document is found then insert a new document.

        - updateMany() :
            
            - used to update all matching documents.
        
    
    Delete Document

        - used to delete the document
    
        findByIdAndDelete(id, options, callback)

            : id can be object, number or string.
        
            Example :
                findByIdAndDelete("id")
                findByIdAndDelete({_id : "id})
        
        deleteOne()

            used to delete first matching doc.
        
            Example :
                deleteOne({_id : "id"})
                deleteOne({_id : "id", name : "shiva"})

        deleteMany()

            used to delete all matching documents.

            Example :

                deleteMany({_id : "id"})

    urlencoded()

        - built-in middleware function in express.
        - it parses incoming requests with urlencoded payloads and is based on body-parser.
        - A new body object containing the parsed data is populated on teh request object 
            after teh middleware (i.e req.body) or an empty object({}) if there was no 
            body to parse, the Content-Type was not matched, or an error occured.
         
        - This object will contain key-value pairs, where the value can be a string 
         or array (when extended is false) or any type (when extended is true.)

        syntax :
            express.urlencoded([options])

    redirect([status], path) :
        It redirects to the Url derived from the specified path, with specified status. 
        If not specified, status defaults to "302"  Found.

        Example :
            res.redirect("/student/success")
            res.redirect("http://example.com")
            res.redirect(301, "http://example.com")
            res.redirect("./login")
        
16.ch14_Cookies

    A cookie is a small piece of text data, set by web server that resided on client's machine. 
     Once it's been set, the client automatically returns the cookie to the web server
      with each request that it makes. This allows the server to place value it wishes to
       'remember' in the cookie and have access to them when creating a response.

    cookie-parser
    
        : It is a middleware which parses cookies attached to the client request object.

        Install and register a middleware

            - npm i cookie-parser
        
            - in app.js
            import CookieParser from 'cookie-parser'
            app.use(CookieParser)
        
        
        res.cookie() :

            - used to set cookie name to value. The value parameter may be a string
             or object converted to JSON.
            
            Syntax :
                res.cookie(name, value[,options])
            
            Example :

                res.cookie("username", "shivanand")

                res.cookie("cart", 5)
                res.cookie("cart", {items : [1,2,3]})

                res.cookie("username", "shiva", {maxAge : 5000})
                res.cooke("username", "shiva", {expires : new Date(Date.now()+9000000), httpOnly : true})
                res.cookie("username", "shiva", {path : '/admin'})

            options :
                property : type : description
                domain : string  : Doman name for the cookie. Defaults to the domain name of the app.
                encode  : function : asynchronous function used for cookie value encoding, Defaults to encoded URIComponent
                expires : Date : Expiry date of the cookie in GMT. Defaults to 0, creates a session cookie
                httpOnly : Boolean : flags the cookie to be accessible only by the web server.
                maxAge : Number : convenient option for setting the expiry time relative to current time in milliseconds.
                path : String : path for the cookie. defauts to '/'
                secure : Boolean : marks the cookie to be used with HTTPS only.
                signed : Boolean : indicates if the cooke should be signed.
            
            req.cookies:

                : used to get cookies

                when using cookie-parser middleware, this property is an object that contains cookes sent by the request.
                If there is no cookie, then it defaults to {}

                Example :

                    req.cookies 
                    req.cookies.username
                
            res.clearCookie :

                : used to clears teh cookie specified by name.
                : web browser only clears the cookie using this method, 
                    if expires and maxAge properties are not given to res.cookies.

                Syntax :
                    res.clearCookie(name [,options])

                Example :
                    res.clearCookie("username")
                    
                    res.cookie("username", "shiva", {path : '/admin'})
                    res.clearCookie("username", {path : '/admin'})
        
17.ch15_dotenv 

    dotenv is used for security purposes. 

    Install 

        npm i dotenv
    
        in app.js
        import dotenv from "dotenv"
        dotenv.config()
    
18.ch16_session 

    session :

        cookie is used for storing data on the client's side.
        session is used to store it on the server side.
        It allows to store maximum amount of data.
    
    Install :

        npm i express-session
    
    Use in app.js

        import session from 'express-session'
        app.use(session({
            name : 'sessionName',
            secret : "fjlakfdaiojewfvoiflaoij"
            resave : false,
            saveUninitialized :: true,
            cookie : {path : '/',httpOnly : true, secure : false, maxAge : 60000}
        }))
    

        secret :

            used to sign the session id cookie. This can be either a string fro a single secret, 
            or an array of multiple secrets. If an array of secretes is provided, only the first
            element willbe used to sign the session id cookie, while all teh elements will be considered
            when verifying the signature in requests. The secret itself whould be not easily parsed by a 
            human and would best be a random set of characters.

        resave :

            If forces teh session to be saved back to teh session store, evens if the session was never 
            modified during the request. True if it doesnot implement the touch method and your store
            sets an expiration date on stored sessions. False If it implements the touch method.

        saveUninitialized :

            It forces a session that is 'uninitialized' to be saved to the store. A session is uninitialized
            when it is a new but not modified. choosing false is useful for implementing login sessions, reducing
            server storage, ,or complying with laws that require permission before setting a cookie.
        
        cookie :

            settings object for the session ID cookie.
        
        name :

            name of the session id coookie to set int eh response. default sets to 'connect.sid'.
        
        proxy :

            trust the reverse proxy when setting secure cookies.

            true : 
                the x-forwarded-proto'header will be used.
            false : 
                all headers are ignored and the onnection is considered secure only if there is a direct. TLS, 
                SSL connection.
            
        store :

            the session store instance, defaults to a new MemoryStore Instance.
        

        req.session :

            to store or access session data, simpy use the request property req.session. which is (generally) serialized
            as JSON by the store, so nested objects are typically fine.

            example :

                req.session.count = 1       // defining the session data
                req.session.count           // access the session data
            
        req.session.regenerate(callback) : 

            To regenerate the session simply invoke the method. Once completed, a new SID and Session instance 
            will be initialized at req.session and the callback will be invoked.
        
        req.session.destroy(callback) : 

            To destroy sthe session and will unset teh req.session property. 
            Once completed, callback will be invoked.
        
        req.session.reload(callback) :

            To reload the session data from the store and re-populate teh req. session object.
             Once completed, callback will be invoked.
            
        req.session.id :

            each session has a unique id associated with it.
            It is an alias of req.sessionID and can't be modified.
        
        req.session.cookie :

            each session has a unique cooked object. 
            This allows you to alter the session cookie per visitor.

            example : we can set req.session.cookie expires to false to enable the cookie 
                        to remain for only the duratioon of the user-agent.
                    
        req.session.maxAge :
        
        req.session.OriginalMaxAge :

        req.sessionID

        creating variable in session

            use req.session.* 
                i.e 
                    req.session.cart = 1        // defining data inside the session.
                    req.session.mobile = "poco m2 pro"

                    req.session.cart            // access
                    req.session.mobile

19.ch17_error_handler

    use error handler middleware in express

    app.use((err, req, res, next) => {
        console.log(err)
        next()
    })
