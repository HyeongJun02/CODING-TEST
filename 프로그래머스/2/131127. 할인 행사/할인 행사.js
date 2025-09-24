function solution(want, number, discount) {
    let result = 0;
    let index;
    let length = number.length;
    let buy = [];
    for (let i = 0; i < length; i++) buy[want[i]] = number[i];
    for (index = 0; index < 10; index++) {
        if (buy[discount[index]] !== undefined) buy[discount[index]]--;
    }
    if (Object.values(buy).every(v => v <= 0)) result++;
    for (index = index; index < discount.length; index++) {
        if (buy[discount[index - 10]] !== undefined) buy[discount[index - 10]]++;
        if (buy[discount[index]] !== undefined) buy[discount[index]]--;
        if (Object.values(buy).every(v => v <= 0)) result++;
    }
    return result;
}