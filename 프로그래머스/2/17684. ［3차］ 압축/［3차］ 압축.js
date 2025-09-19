function solution(msg) {
    const dir = new Map();
    let result = [];
    
    for (let i = 0; i < 26; i++) {
        dir.set(String.fromCharCode(65 + i), i + 1);
    }
    let index = 27;
    
    let check = "";
    for (let i = 0; i < msg.length; i++) {
        check += msg[i];
        if (dir.has(check)) {
            if (i == msg.length - 1) result.push(dir.get(check));
            continue;
        }
        else {
            dir.set(check, index);
            index++;
            i--;
            check = check.slice(0, -1);
            result.push(dir.get(check));
            check = "";
        }
    }
    
    return result;
}