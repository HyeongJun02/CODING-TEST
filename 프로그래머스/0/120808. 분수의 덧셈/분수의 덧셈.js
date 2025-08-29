function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    var tmp = denom1;
    numer1 *= denom2;
    denom1 *= denom2;
    numer2 *= tmp;
    denom2 *= tmp;
    var res_numer = numer1 + numer2;
    var res_denom = denom1;
    for (var i=2; i<=res_denom; i++) {
        while (res_denom % i == 0 && res_numer % i == 0) {
          res_denom /= i;
          res_numer /= i;
        }
    }
    answer.push(res_numer);
    answer.push(res_denom);
    return answer;
}