function solution(s){
    let cnt = 0;
    
    for (const e of s) {
        if (e == '(') cnt++;
        else cnt--;
        
        if (cnt < 0) return false;
    }
    return cnt == 0;
}