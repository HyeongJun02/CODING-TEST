function solution(cacheSize, cities) {
    let cache = [];
    let cnt = 0;
    if (cacheSize == 0) return cities.length * 5;
    for (let i = 0; i < cities.length; i++) {
        cities[i] = cities[i].toLowerCase();
    }
    for (let city of cities) {
        let find = cache.indexOf(city);
        if (find == -1) {
            if (cache.length == cacheSize) cache.shift();
            cache.push(city);
            // console.log('cache miss');
            cnt += 5;
        }
        else {
            cache.splice(find, 1);
            cache.push(city);
            // console.log('cache hit');
            cnt++;
        }
    }
    return cnt;
}