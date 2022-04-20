import studentModel from "../model/studentModel.js";
import bcrypt from "bcrypt"

class studentController {
  static studentHomePage = (req, res) => {
    res.render("index");
  };

  static studentRegistration = (req, res) => {
    res.render("register");
  };

  // create doc function for storing a new student in the db.
  static createDoc = async (req, res) => {
    const stu_name = req.body.name;
    const stu_email = req.body.email;
    
    // if length of password is less than 6.
    if (stu_password.length < 6) 
      res.send("<h1> password length less than 6 </h1>")

    // without hash password
    // const stu_password = req.body.password;

    // hash password to store in db
    const stu_password = await bcrypt.hash(req.body.password, 10);

    // console.log(stu_name, stu_email, stu_password);

    try {
      const doc = new studentModel({
        name: stu_name,
        email: stu_email,
        password: stu_password,
      });

      await doc.save();
      res.redirect("/login");
    } catch (err) {
      console.log(err);
    }
  };

  static studentLogin = (req, res) => {
    res.render("login");
  };

  static authenticateStudent = async (req, res) => {

    const stu_email = req.body.email
    const stu_password = req.body.password

    try{

        const student = await studentModel.findOne({email : stu_email});

        if (student != null){

            // // without hash password checking condition.
            // if (student.password == stu_password){
            //     res.send(`<h1> Student : <p>${student}</p> </h1>`)
            // }

            // hashed password to check
            const valid_stu = await bcrypt.compare(stu_password, student.password)
            
            if (valid_stu) {
              res.send(`<h1> Student : <p>${student}</p> </h1>`)
            }
            else{
              res.send("<h1> Email or Password is wrong </h1>")
            }
        }
        else {
          res.send("<h1> Email or password is Wrong </h1>")
        }

    }
    catch(err){
        console.log(err)
    }
  }
}

export default studentController;
