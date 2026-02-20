function solution(n, lost, reserve) {
    let realReserve = reserve
        .filter(r => !lost.includes(r))
        .sort((a, b) => a - b);
        
    let realLost = lost
        .filter(l => !reserve.includes(l))
        .sort((a, b) => a - b);

    for (let i = 0; i < realReserve.length; i++) {
        const r = realReserve[i];
        
        let lostIndex = realLost.indexOf(r - 1);
        if (lostIndex === -1) {
            lostIndex = realLost.indexOf(r + 1);
        }
        
        if (lostIndex !== -1) {
            realLost.splice(lostIndex, 1);
        }
    }

    return n - realLost.length;
}