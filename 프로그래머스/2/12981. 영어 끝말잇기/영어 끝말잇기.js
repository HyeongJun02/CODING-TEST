function solution(n, words) {
  const used = new Set();
  let prev = null;

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const player = (i % n) + 1;
    const turn = Math.floor(i / n) + 1;

    if (used.has(w) || (prev && prev.at(-1) !== w[0]))
        return [player, turn];

    used.add(w);
    prev = w;
  }
  return [0, 0];
}
