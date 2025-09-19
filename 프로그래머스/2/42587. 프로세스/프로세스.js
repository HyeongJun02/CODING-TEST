function solution(priorities, location) {
    
    let queue = priorities.map((p, i) => [p, i]);
    let order = 0;
    
    while (queue.length) {
        const [priority, index] = queue.shift();
        if (queue.some(([p]) => p > priority)) queue.push([priority, index]);
        else {
            order++;
            if (index == location) return order;
        }
    }
}
