function solution(phone_number) {
    let length = phone_number.length;
    let answer = '*'.repeat(length - 4) + phone_number[length - 4] + phone_number[length - 3] + phone_number[length - 2] + phone_number[length - 1];
    return answer;
}