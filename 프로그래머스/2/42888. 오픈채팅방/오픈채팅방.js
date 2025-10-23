function solution(record) {
    let log = [];
    let user = new Map();
    
    for (let str of record) {
        // 문자열 분리
        str = str.split(" ");
        
        // command, id, name 분리
        let [command, id, name] = [str[0], str[1], str[2]];
        // console.log("String: ", command, id, name ? name : " ");
        
        // Enter, Leave인 경우 log에 추가
        if (command !== "Change") log.push([command, id]);
        
        // Enter, Change인 경우 닉네임 설정
        if (command !== "Leave") {
            user[id] = name;
            // console.log("user[", id, "]: ", user[id]);
        }
    }
    
    // console.log("log: ", log);
    
    let result = [];
    // log 기반 메시지 생성
    for (let l of log) {
        if (l[0] === "Enter") {
            result.push(user[l[1]] + "님이 들어왔습니다.");
        } else {
            result.push(user[l[1]] + "님이 나갔습니다.");
        }
    }
    return result;
}