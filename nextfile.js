const express = require('express');
const app = express();


// In memeory array(Acts like DB)
let users = [
    {id: 1, name: "akshat", age:22},
    {id: 2, name: "akshat", age:22}
];

// read json
app.use(express.json());
// post //insertion
app.post("/users",(req,res) => {
    const newuser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age
    }

    users.push(newuser);
    res.send(newuser);
})



//GET
app.get("/users", (req, res) =>{
    res.send(users);
})

app.get("/users/:id", (req, res) =>{
    const user = users.find(u=>u.id == req.params.id);

    if(!user) return res.status(404).send("user not found");

    res.send(user);
});


//update

app.put("/users/:id", (req, res)=> {
    const user = users.find(u => u.id == req.params.id);

    if(!user) return res.status(404).send("user not found");

    user.name = req.body.name;
    user.age = req.body.age;
    res.send(user);
});

//delete
app.delete("/users/:id", (req, res)=> {
    users = users.filter(u=>u.id != req.params.id);
    res.send("user deleted");
});

app.listen(3000, ()=>{
    console.log("Server running on port 3000");
});
