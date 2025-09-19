function solution(priorities, location) {
  let queue = priorities.map((p, i) => [p, i]);
  let order = 0;

  while (queue.length) {
    const [priority, idx] = queue.shift();
    if (queue.some(([p]) => p > priority)) {
      queue.push([priority, idx]);
    } else {
      order++;
      if (idx === location) return order;
    }
  }
}
