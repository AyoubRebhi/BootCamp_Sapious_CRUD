//import section
const express= require("express");
const { default: mongoose } = require("mongoose");
const app=express();
const mongoose =require("mongoose");
//db connection


app.get("/", (req,res)=>{

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


