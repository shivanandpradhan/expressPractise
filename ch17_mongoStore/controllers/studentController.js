export default class studentController{

    static getsession = (req, res) => {
        console.log(req.session)
        console.log(req.session.id)
        console.log(req.session.cookie)
        console.log(req.session.cookie.maxAge)
        console.log(req.session.cookie.originalMaxAge)
        console.log(req.sessionID)
        console.log("--------------")
        res.send("get session")
    }

    static regn_session = (req, res) => {
        req.session.regenerate(() => {
            console.log("session regenerated..")
        })
        res.send("session Regenerated.")
    }

    static delete_session = (req, res) => {
        req.session.destroy( () => {
            console.log("session destroyed or deleted....")
        })
        res.send("session destroyed....")
    }

    static set_session = (req, res) => {
        if (req.session.cart)
            req.session.cart++
        else 
            req.session.cart = 1
        
        res.send(`session setted : cart : ${req.session.cart}....`)
    }

}