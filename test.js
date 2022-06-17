//import section
const express= require("express");
const { default: mongoose } = require("mongoose");
const app=express();
const mongoose =require("mongoose");
//db connection


mongoose.connect(
    "mongodb+srv://youbi2012M:123456789Bestfriend@cluster0.4yv5m.mongodb.net/?retryWrites=true&w=majority"
);
//ki yabda connecté ykharrej msg li howa connecté 
mongoose.connection.on("connected", ()=>{
    console.log("DB connected");
});
// ki tabda famma error ykharrajlek 
mongoose.connection.on("error", (err)=>{
    console.log("mongodb failed with ", err);
});
/*app.get("/", (req,res)=>{

    res.send("Hello Guys ");
});

app.get("/name", (req,res)=>{

    res.send("Ayoub Rebhi");
});

app.get("/age", (req,res)=>{

    res.send("20");
});

app.get("/localisation", (req,res)=>{

    res.send("Kairouan, Tunisia");
});

app.post("/mul", (req,res)=>{
    res.send(`${req.body.a} times ${req.body.b} = ${req.body.a * req.body.b}`);
});

app.post("/sum", (req,res)=>{
    res.send(`${req.body.a} times ${req.body.b} = ${req.body.a + req.body.b}`);
});
app.post("/div", (req,res)=>{
    res.send(`${req.body.a} times ${req.body.b} = ${req.body.a / req.body.b}`);
});
app.post("/min", (req,res)=>{
    res.send(`${req.body.a} times ${req.body.b} = ${req.body.a - req.body.b}`);
});
*/

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//middleware rootes

//listening server
const port=8000;

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});
