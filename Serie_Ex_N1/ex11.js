const a=[8,7,10];
const b=[13,2,4];
let scorea=0;
let scoreb=0
for (let i = 0; i < a.length; i++) {
    if (a[i]>b[i]) {
        scorea=scorea+1;
    } else if(a[i]<b[i]){
        scoreb=scoreb+1;
    };
    
}

console.log("[ "+scorea+" , "+scoreb+" ]");