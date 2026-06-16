function solution(n, stations, w) {
    const size = 2 * w + 1;
    let cur = 1;
    let answer = 0;
    
    for (const station of stations) {
        const station_start = station - w
        if (cur < station_start) {
            const length = station_start - cur;
            answer += Math.ceil(length / size);
        }
        cur = station + w + 1;
    }
    if (cur <= n) {
        const length = n - cur + 1;
        answer += Math.ceil(length / size);
    }
    
    return answer;
}