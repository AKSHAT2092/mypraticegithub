const express = require("express");
const bodyparser = require("body-parser");
const jwt = require("jsonwebtoken");

const app = express();
app.use(bodyparser.json());

const PORT = 4000;
const SECRET_KEY = "mysecret123";



const user = [
    { id:1, username : "Akshat", password:"1234"},
    {id:2, username:"arpit", passwprd: "5678"},
    {id:3, username:"arit", passwprd: "5698"}
];

app.post("/login",(req,res)=>{
   const{username, password}= req.body;
   
   const user = user.find(
    u=>u.username === username && u.pasword === password
   );

   if(!user){
    return res.status(401).json({message:"Invalid Credentials"});
   }

   const token = jwt.sign(
    {id: user.id, username: user.username},
    SECRET_KEY,
    {expiresIn: "1h" }
   );


   res.json({token});
});



//jwt middlewar
function verifytoken(req, res,next){
    const header = req.headers["Authorization"];

    if(!header){
        return res.status(403).json({message:"token missing"});
    }

    const token = header.split(" ")[1];

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if(err) return res.status(401).json({message: " Invalid token"});

        req.user = decoded;
        next();
    });
}


//protected 

app.get("/dasboard", verifytoken, (req, res)=>{
    res,json({
        message:"welcone daboard",
        user: req.user
    });
});



//start server

app.listen(PORT,()=>{
    console.log(`server security running on port ${PORT}`);
})
