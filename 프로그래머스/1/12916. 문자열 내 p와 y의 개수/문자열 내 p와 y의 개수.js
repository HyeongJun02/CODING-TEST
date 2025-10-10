function solution(s){
    let res = 0;
    s.toLowerCase().split("").forEach((c) => c == 'p' ? res++ : c == 'y' ? res-- : false);
    return res ? false : true;
}