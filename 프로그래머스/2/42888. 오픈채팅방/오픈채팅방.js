function solution(record) {
    const log = [];
    const user = new Map();
    const state = {
        'Enter': '님이 들어왔습니다.',
        'Leave': '님이 나갔습니다.'
    }
    
    let result = [];
    
    for (let str of record) {
        // 문자열 분리
        str = str.split(" ");
        let [command, id, name] = [str[0], str[1], str[2]];
        // Enter, Leave인 경우 log에 추가
        if (command !== "Change") log.push([command, id]);
        // Enter, Change인 경우 닉네임 설정
        if (command !== "Leave") user[id] = name;
    }
    
    // log 기반 메시지 생성
    for (let l of log) {
        result.push(user[l[1]] + state[l[0]]);
    }
    return result;
}