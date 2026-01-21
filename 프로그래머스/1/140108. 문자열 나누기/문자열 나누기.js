function solution(s) {
    
    let left = 0, right = 0, result = 0;
    let flag = true;
    let save;
    s.split("").forEach((ch, i) => {
        if (flag) { // [0] 초기화
            save = ch;
            flag = false;
        }
        
        if (ch === save) left++; // [1-1] 같은 문자일 경우 left로 보냄
        else right++; // [1-2] 다른 문자일 경우 right로 보냄
        
        if (left === right) { // [2-1] left === right
            result++;
            flag = true;
        } else { // [2-2] left !== right인데, 더 이상 읽을 글자가 없을 때
            if (i === s.length - 1) result++;
        }
    });
    return result;
}