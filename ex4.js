const tab=[1,2,3,3,4,5];
const nb=6;
function apparition(x,tab,n) {
    let ap=0;
    for (let i = 0; i < n; i++) {
        if (tab[i]==x) {
            ap=ap+1;
        }
    }
    return ap;
}
for (let i=0; i < nb; i++) {
    if(apparition(i,tab,nb)>1){
        console.log("the duplicate number is "+i);
    }
}