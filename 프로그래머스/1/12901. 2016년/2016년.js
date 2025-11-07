function solution(a, b) {
    let result = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let day = 5;
    for (let i = 0; i < a - 1; i++) {
        day += days[i];
    }
    day += (b - 1);
    day %= 7;
    return result[day];
}