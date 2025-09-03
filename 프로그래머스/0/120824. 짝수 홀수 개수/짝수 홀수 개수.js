function solution(num_list) {
    var answer = [0, 0];
    for (var i=0; i<num_list.length; i++) {
        answer[num_list[i] % 2]++;
    }
    return answer;
}