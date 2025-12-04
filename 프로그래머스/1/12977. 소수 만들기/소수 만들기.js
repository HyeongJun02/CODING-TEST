function solution(nums) {
    let length = nums.length;
    let count = 0;
    
    const num = 3000;
    const isPrime = new Array(num + 1).fill(true);
    if (num >= 0) isPrime[0] = false;
    if (num >= 1) isPrime[1] = false;
    for (let i = 2; i * i <= num; i++) {
        if (isPrime[i]) {
            for (let j = i * i; j <= num; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    function dfs(index, hap, depth) {
        if (depth === 3) {
            // console.log('depth is 3');
            // console.log('hap:', hap);
            if (isPrime[hap]) {
                count++;
            }
            return;
        }
        for (let i = index + 1; i <= length - 3 + depth; i++) {
            dfs (i, hap + nums[i], depth + 1)
        }
    }
    
    for (let i = 0; i <= length - 3; i++) {
        dfs (i, nums[i], 1);
    }
    
    return count;
}