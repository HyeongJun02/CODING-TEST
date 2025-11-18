function solution(n) {
    const answer = Array.from({ length: n }, () => Array(n).fill(0));

    let num = 1;
    let top = 0,
        bottom = n - 1,
        left = 0,
        right = n - 1;

    while (num <= n * n) {
        // 오른쪽 이동
        for (let i = left; i <= right; i++) answer[top][i] = num++;
        top++;

        // 아래로 이동
        for (let i = top; i <= bottom; i++) answer[i][right] = num++;
        right--;
        
        // 왼쪽 이동
            for (let i = right; i >= left; i--) answer[bottom][i] = num++;
            bottom--;

        // 위로 이동
            for (let i = bottom; i >= top; i--) answer[i][left] = num++;
            left++;
    }

    return answer;
}
