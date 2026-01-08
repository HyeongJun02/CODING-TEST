function solution(arr, k) {
    return k % 2 ? arr.map((n) => n * k) : arr.map((n) => n + k);
}