function solution(tickets) {
    tickets.sort();
    // console.log(tickets);
    let visited = Array(tickets.length).fill(false);
    var answer = [];
    function dfs(now, index) {
        let flag = true;
        answer.push(now);
        if (index != -1 ) visited[index] = true;
        for (let i = 0; i < tickets.length; i++) {
            if (tickets[i][0] != now) continue;
            if (i == index || visited[i]) continue;
            // console.log(i);
            flag = false;
            if (dfs(tickets[i][1], i)) flag = true;
        }
        if (flag && (answer.length != tickets.length)) {
            visited[index] = false;
            console.log(visited);
            answer.pop();
            return true;
        }
    }
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[i][0] == "ICN") {
            dfs("ICN", -1);
            break;
        }
    }
    for (let i = 0; i < tickets.length; i++) {
        if (!visited[i]) answer.push(tickets[i][1]);
    }
    return answer;
}