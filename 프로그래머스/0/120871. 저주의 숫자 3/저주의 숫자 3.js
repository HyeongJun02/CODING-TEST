function solution(n) {
    function isCorrect(num) {
        if (num % 3 == 0) return false;
        if (String(num).split("").includes("3")) return false;
        return true;
    }
    
    let answer = 0;
    while (n) {
        answer++;
        if (isCorrect(answer)) n--;
    }
    return answer;
}