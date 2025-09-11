function solution(n, wires) {
  const g = Array.from({ length: n + 1 }, () => []);
  for (const [a, b] of wires) {
    g[a].push(b);
    g[b].push(a);
  }

  const parent = Array(n + 1).fill(0);
  const sub = Array(n + 1).fill(0);
    
  const dfs = (u, p) => {
    parent[u] = p;
    sub[u] = 1;
    for (const v of g[u]) {
      if (v === p) continue;
      dfs(v, u);
      sub[u] += sub[v];
    }
  };
  dfs(1, 0);

  let ans = Infinity;
  for (const [a, b] of wires) {
    const child = (parent[a] === b) ? a : (parent[b] === a) ? b : null;
    const smaller = sub[child];
    ans = Math.min(ans, Math.abs(n - 2 * smaller));
  }
  return ans;
}
