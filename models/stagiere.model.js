const mongoose= require("mongoose");

const stagiereSchema=mongoose.Schema({
    cin:{
        type: Number,
        required:true,
    },
    nom:{
        type: String,
        required:true,
    },
    prenom:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    encadreur:{
        type: String,
        required: true,
    }

});

module.exports =Stagiere = mongoose.model("stagiere ", stagiereSchema);
