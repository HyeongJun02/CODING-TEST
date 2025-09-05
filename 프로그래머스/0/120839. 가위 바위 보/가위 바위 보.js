let win = [ 5, -1, 0, -1, -1, 2 ];
const solution = (rsp) => rsp.split('').reduce((res, e) => (res + win[e]), '');