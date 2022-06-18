function maxArea(tab, leng){
    let area = 0;
    for (let i = 0; i < leng; i++) {
        for (let j = i + 1; j < leng; j++){
            area = Math.max(area, Math.min(tab[j], tab[i]) * (j - i));
        }
    }
    return area;
}
 
let height = [1,8,6,2,5,4,8,3,7];  
let l = height.length;
console.log(maxArea(height, l));

