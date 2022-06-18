
function minJumps(t, n){
	if (n == 1){
	    return 0;
    }
	
	let res = Number.MAX_VALUE;
	for (let i = n - 2; i >= 0; i--) {
		if (i + t[i] >= n - 1) {
			let b = minJumps(t, i + 1);
			if (b != Number.MAX_VALUE){
				res = Math.min(res, b + 1);
            }    
		}
	}

	return res;
}

let nums = [2,3,1,1,4];
let n = nums.length;
console.log("Minimum number of jumps is "+ minJumps(nums, n));



