require('dotenv').config();
const express = require('express');
const path = require("path");
const hbs = require("hbs");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');


const port = process.env.Port || 8001;
const app = express();
require('./database/db');
const Register = require('./models/register');

const staticPath = path.join(__dirname, "../public");
const templatePath = path.join(__dirname, "../template/views");
const partialsPath = path.join(__dirname, "../template/partials");

app.use(express.static(staticPath));
app.use(cookieParser());
app.set("view engine", "hbs");
app.set("views" , templatePath);
hbs.registerPartials(partialsPath);

//app.use(express.json()); // get data through postman
app.use(express.urlencoded({extended : false}))

//console.log(process.env.SECRET_KEY);

app.get("/", async(req,res) =>{
        //res.send("hello")
        res.render("index");

})

app.get("/register", async(req,res) =>{
    res.render("register");

})

app.get("/login", async(req,res) =>{
    res.render("login");

})

app.post('/register', async(req,res) =>{
    try {
        const password = req.body.password;
        const cpassword =req.body.confirmpassword;
        if(password === cpassword ){
            const registerEmp = new Register({
                firstname: req.body.firstname,
                email: req.body.email,
                password: password,
                confirmpassword: cpassword,
                phone: req.body.phone,
                gender: req.body.gender,
                age: req.body.age
            })
            console.log("the success part is" , registerEmp);

            const token =await registerEmp.generateAuthToken();
            console.log(token);

            // res.cookie("jwt", token, {
            //     expires: new Date(Date.now() + 30000),
            //     httpOnly : true
            // });
            // console.log(cookie);

            const registered= await registerEmp.save();
            console.log(registered);
            res.render("index");
            //console.log(password);
    
        }else{
            res.send("Password is not matching");
        }
        //console.log(req.body.firstname);
       
    } catch (error) {
       res.send(error) 
    }
})

//check login
app.post('/login', async(req,res) =>{
    try {
        const email = req.body.email;
        const password = req.body.password;

        const useremail = await Register.findOne({email : email});
        const isMatch = bcrypt.compare(password , useremail.password)

        const token =await useremail.generateAuthToken();
            console.log(token);

        // res.cookie("jwt", token, {
        //     expires: new Date(Date.now() + 50000),
        //     httpOnly : true
        //     });
        // console.log(`this is the cookies awesome ${req.cookies.jwt}`);    

        if(isMatch){
            res.status(201).render("index");
        }else{
            res.send("Invalid Login details");
        }
        //  res.send(useremail); 
        //  console.log(useremail);
        // console.log(`${email} and password is ${password}`);
    } catch (error) {
        res.send("Invalid Login details")
    }
})

// const securefunction= async(password) =>{
//     const passwordHash = await bcrypt.hash(password, 10);
//     console.log(passwordHash);

//     const passwordMatch = await bcrypt.compare(password, passwordHash);
//     console.log(passwordMatch);
// }

// securefunction("thapa123")

//create token
// const createToken = async() =>{
//   const token = await jwt.sign({_id: "640e9d5309304454d23d56e4"}, "mynameissukhchainkaurfromsangrurandpunjab",{
//     expiresIn : "2 seconds"
//   });
//   console.log(token);

//   const tokenverify = await jwt.verify(token, "mynameissukhchainkaurfromsangrurandpunjab");
//   console.log(tokenverify);
  
// }

// createToken();

app.listen( port , () =>{
    console.log(`server is running at ${port}`);
})