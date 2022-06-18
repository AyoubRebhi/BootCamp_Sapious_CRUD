//import section
const express= require("express");
const { default: mongoose } = require("mongoose");
const app=express();
const mongoose =require("mongoose");

const Stagiere = require("./models/stagiere.model")

app.get('/stagieres',(req,res)=>{
    
    try {
        await Stagiere.find({ })
        .then( resultat => {
            res.send(resultat)
        })
        
    } catch (error) {
        console.log(err)
    }
   
});


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


//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
//middleware rootes

//listening server
const port=8000;

app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});
