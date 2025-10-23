function solution(babbling) {
  const words = ["aya", "ye", "woo", "ma"];
  let count = 0;

  for (let word of babbling) {
    let tmp = word;

    if (/(aya|ye|woo|ma)\1/.test(tmp)) continue;

    for (let w of words) {
      tmp = tmp.replaceAll(w, " ");
    }

    if (tmp.trim().length === 0) count++;
  }

  return count;
}
