function solution(n, m, section) {
    let count = 0;
    while (section.length) {
        let now = section[section.length - 1] - m;
        if (now <= 0) {
            count++;
            break;
        }
        while (section[section.length - 1] > now) {
            section.pop();
        }
        count++;
    }
    return count;
}