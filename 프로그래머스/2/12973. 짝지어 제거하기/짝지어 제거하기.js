function solution(s)
{
    const stack = [];
    
    for (const ch of s) {
        if (stack.length && stack[stack.length - 1] == ch) {
            stack.pop();
        } else {
            stack.push(ch);
        }
    }
    return stack.length?0:1;
}