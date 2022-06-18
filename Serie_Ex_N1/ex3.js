const ch="03:00 pM";
let a=ch.charAt(6);
if(a=="P" || a=="p"){
    console.log(Number(ch.charAt(1))+12 +"H");
}else if(a=="A"||a=="a") {
    console.log(Number(ch.charAt(1))+"H");
}else{
    console.log("heure invalide");
}