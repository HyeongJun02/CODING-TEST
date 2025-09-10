function solution(my_string) {
    return my_string
        .split('')
        .map(ch => {
            return ch === ch.toUpperCase()
                ? ch.toLowerCase()
                : ch.toUpperCase();
        })
        .join('');
}