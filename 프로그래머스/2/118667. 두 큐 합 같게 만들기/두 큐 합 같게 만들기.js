function solution(queue1, queue2) {
    // 두 큐 합 계산
    let sum1 = queue1.reduce((sum, n) => sum + n, 0);
    let sum2 = queue2.reduce((sum, n) => sum + n, 0);
    const target = (sum1 + sum2) / 2;
    
    // 합이 홀수면 컷!
    if ((sum1 + sum2) % 2 !== 0) return -1;
    
    // 큐 합치기
    const totalQueue = [...queue1, ...queue2];
    
    // 포인터
    let pointer1 = 0;
    let pointer2 = queue1.length;
    
    // 최대 작업 횟수 제한 (한 바퀴 반 이상 돌면 절대 안 맞춰지는 구조임)
    const maxOperations = queue1.length * 3;
    let operations = 0;

    // 3. 투 포인터 루프 (O(N))
    while (operations <= maxOperations) {
        if (sum1 === target) {
            return operations; // 합이 같아지면 즉시 현재 연산 횟수 반환
        }

        if (sum1 > target) {
            // 현재 queue1의 합이 크면 맨 앞 원소를 내보냄 (pop)
            sum1 -= totalQueue[pointer1];
            pointer1++;
        } else {
            // 현재 queue1의 합이 작으면 맨 뒤에 원소를 가져옴 (insert)
            sum1 += totalQueue[pointer2];
            pointer2++;
        }
        
        operations++;
    }

    return -1;
}