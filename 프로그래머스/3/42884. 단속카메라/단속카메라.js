function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let lastCamera = -30001;
    let result = 0;
    
    for (let route of routes) {
        if (lastCamera >= route[0]) continue;
        lastCamera = route[1];
        result++;
    }
    
    return result;
}