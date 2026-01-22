function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]);
    let lastCamera = -30001;
    // let lastCamera = routes[0][1];
    let result = 0;
    
    for (let route of routes) {
        if (lastCamera >= route[0]) continue;
        else {
            lastCamera = route[1];
            result++;
        }
    }
    
    return result;
}