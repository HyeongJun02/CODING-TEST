function solution(my_string) {
    let arr = my_string.split(' ');
    let res = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
        if (arr[i] == '+') res += Number(arr[i + 1]);
        if (arr[i] == '-') res -= Number(arr[i + 1]);
    }
    return res;
}