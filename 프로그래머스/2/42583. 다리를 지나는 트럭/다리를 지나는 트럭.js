function solution(bridge_length, weight, truck_weights) {
    let answer = 0, now = 0;
    let bridge = new Array(bridge_length).fill(0);
    while(truck_weights.length) {
        if (now + truck_weights[0] - bridge[bridge.length - 1] <= weight) {
            let truck = truck_weights.shift();
            now += truck;
            bridge.unshift(truck);
        } else bridge.unshift(0);
        now -= bridge.pop();
        answer++;
    }
    return answer + bridge_length;
}