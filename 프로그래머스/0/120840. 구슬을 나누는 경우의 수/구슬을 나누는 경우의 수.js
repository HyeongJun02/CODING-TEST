function nCr(n, r) {
    let up = 1, down = 1;
    r = (n / 2 < r) ? n - r : r;
    for (let i = 0; i < r; i++) {
        up *= n - i;
        down *= r - i;
    }
    return up / down;
}

const solution = (balls, share) => nCr(balls, share);