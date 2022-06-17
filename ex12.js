const l1=[2,3,4];
const l2=[5,6,8,1];
let a="";
let b="";
for (let i = l1.length-1; i > -1; i--) {
    a=a+l1[i];
}
a=parseInt(a);
for (let i = l2.length-1; i > -1; i--) {
    b=b+l2[i];
}
b=parseInt(b);
let somme=a+b;
somme=somme.toString();
l=somme.length;
let s=[];
for (let i =l-1; i > -1 ; i--) {
    s.push(somme[i]);
    
}
console.log(s);
