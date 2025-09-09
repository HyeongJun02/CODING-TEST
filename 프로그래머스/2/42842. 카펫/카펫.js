function solution(brown, yellow) {
    brown -= 4;
    let w, h;
    for (w = brown / 2; w > 0; w--) {
        h = brown / 2 - w;
        if (w * h == yellow) break;
    }
    return [w + 2, h + 2];
}