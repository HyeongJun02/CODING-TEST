function solution(keymap, targets) {
    const alpha = new Array(26).fill(500);
    
    for (let i = 0; i < 26; i++) {
        for (let key of keymap) {
            let index = key.indexOf(String.fromCharCode(65 + i));
            if (index == -1) continue;
            alpha[i] = alpha[i] < (index + 1) ? alpha[i] : (index + 1);
        }
    }
    
    let result = [];
    
    for (let target of targets) {
        let count = 0;
        for (let ch of target.split("")) {
            let code = ch.charCodeAt(0);
            if (alpha[code - 65] === 500) {
                count = -1;
                break;
            }
            count += alpha[code - 65];
        }
        result.push(count);
    }
    
    return result;
}