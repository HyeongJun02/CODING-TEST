function isOneDiff(a, b) {
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) diff++;
    if (diff > 1) return false;
  }

  return diff === 1;
}

function solution(begin, target, words) {
    const visited = Array(words.length).fill(false);
    var answer = 55;
    var count = 0;
    words.unshift(begin);
    
    function dfs(now, target, words) {
        if (visited[now] == true) return;
        console.log("in: ", now);
        if (words[now] == target) {
            console.log("<correct>");
            answer = (count < answer) ? count : answer;
            console.log("answer: ", answer);
            console.log("out: ", now);
            return;
        }
        // if (!isOneDiff(words[now], begin)) return;
        visited[now] = true;
        count++;
        for (let i = 1; i < words.length; i++) {
            if (!isOneDiff(words[i], words[now])) continue;
            dfs(i, target, words);
        }
        visited[now] = false;
        count--;
        console.log("out: ", now);
    }
    
    dfs(0, target, words);
    
    return (answer == 55) ? 0 : answer;
}