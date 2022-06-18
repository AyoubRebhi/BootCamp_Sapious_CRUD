const num=[2,4,8,16,1,5];
const target=50;
let n=num.length
let b=false;
for (let i=0; i < n; i++) {
    let x=target-num[i];
    let j=-1;
    
    do{
        j=j+1;
        if(j!=i && num[j]==x){
            console.log("Pair found ( "+num[i]+", "+x+" )");
            b=true;
        }

    }while(j<n ||b==true);
    
}
if(b==false){
    console.log("Pair not found");
}