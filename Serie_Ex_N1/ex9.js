const tab=[1,2,3,4,5];
const n=3;
let i=0;

while (i<n) {
    tab.push(tab[0]);
    tab.splice( 0 , 1 );
    i++;
}
console.log(tab);
