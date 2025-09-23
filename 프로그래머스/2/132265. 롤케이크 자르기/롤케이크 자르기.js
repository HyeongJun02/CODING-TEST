function solution(topping) {
    let cnt = 0;
    let n = topping.length;
    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);
    let leftSet = new Set();
    let rightSet = new Set();
    
    for (let i = 0; i < n; i++) {
        leftSet.add(topping[i]);
        left[i] = leftSet.size;
        rightSet.add(topping[n - i - 1]);
        right[n - i - 1] = rightSet.size;
    }
    
    for (let i = 0; i < n - 1; i++) {
        if (left[i] === right[i + 1]) cnt++;
    }
    
    return cnt;
}