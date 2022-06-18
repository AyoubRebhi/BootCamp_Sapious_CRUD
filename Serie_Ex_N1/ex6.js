const tab=[8,7,5,12,14,0,3];
const target=5;
let b=false;
let i=-1;
do{
    i=i+1;
    if (tab[i]==target) {
        b=true;
        console.log("The target found in index "+ i);
    }
    
}while(i<tab.length || b==true);
console.log("the target is not found here ");

