const express = require("express");
const users = require("./user.json");
const cors = require("cors")
const app = express();
app.use(cors())
const port = 5000;

app.get('/', (req, res)=>{
    res.send("Hello This is Sumon's Server")
})
app.get("/about", (req, res)=>{
    res.send("My about page route with nodemon............")
})
app.get("/user", (req,res)=>{
    res.send(users)
})
app.get("/user/:id", (req, res)=>{
    const id = parseInt(req.params.id);
    const user = users.find(ids => ids.id === id)
    console.log(user)
    res.send(user)
})

app.listen(port, ()=>{
    console.log(`I am running from my own serve ${port}`)
})