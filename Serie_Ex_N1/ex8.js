const tab=[6,0,8,2,4,0,0,3];
const x =tab.length;
let n=0;
let o=0;
while (n < tab.length) {
    if (tab[n]===0) {
        tab.splice(n,1);
        o++;
    }else {
        n++;

    }
}

for( let i=0;i<o;i++){
    tab.push(0)
}
console.log(tab);
