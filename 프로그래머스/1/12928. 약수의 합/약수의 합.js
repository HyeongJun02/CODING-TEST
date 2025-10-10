function solution(n) {
    let result = 0;
    let index = 1;
    while (index <= Math.sqrt(n)) {
        if (n % index === 0) {
            result += index;
            if (n / index !== index) result += (n / index);
        }
        index++;
    }
    return result;
}