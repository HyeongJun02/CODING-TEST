function solution(progresses, speeds) {
    let completes = [];
    for (let i = 0; i < progresses.length; i++) {
        let day = Math.ceil((100 - progresses[i]) / speeds[i]);
        completes.push(day);
    }
    let n = completes[0];
    let result = [];
    let cnt = 1;
    for (let i = 1; i < completes.length; i++) {
        if (completes[i] <= n) {
            cnt++;
        } else {
            result.push(cnt);
            cnt = 1;
            n = completes[i];
        }
    }
    result.push(cnt);
    return result;
}