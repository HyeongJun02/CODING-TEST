function solution(num_list) {
    let [odd, even] = ['', ''];
    num_list.forEach((n, i) => (n % 2) ? (odd += n) : (even += n));
    return (+odd) + (+even);
}