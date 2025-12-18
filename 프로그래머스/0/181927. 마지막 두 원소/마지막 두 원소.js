function solution(num_list) {
    let [prev, last] = [num_list.at(-2), num_list.at(-1)];
    num_list.push((last > prev) ? (last - prev) : (last * 2));
    return num_list;
}