function solution(operations) {
    var answer = [];
    var arr = [];
    operations.forEach((e, i) => {
        var command = e.split(" ");
        if (command[0] == "I") {
            arr.push(parseInt(command[1]));
            arr.sort(function(a, b) {
                return b - a;
            });
        } else if (command[0] == "D") {
            if (arr.length == 0) return;
            if (command[1] == "1") arr.shift();
            else if (command[1] == "-1") arr.pop();
        }
    })
    if (arr.length == 0) {
        answer = [0, 0];
    } else {
        answer.push(arr[0]);
        answer.push(arr[arr.length - 1]);
    }
    return answer;
}