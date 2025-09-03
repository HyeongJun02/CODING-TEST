function solution(n, works) {
    works.sort((a, b) => b - a);
    var it = 0;
    var max = works[0];
    while (n--) {
        if (max != works[it]) {
            it = 0;
            n++;
            max = works[it];
            if (max == 0) break;
            continue;
        }
        works[it]--;
        it++;
    }
    return works.reduce((answer, work) => (answer + work ** 2), 0);
}