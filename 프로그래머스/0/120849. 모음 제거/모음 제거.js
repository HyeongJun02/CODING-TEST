const A = ['a', 'e', 'i', 'o', 'u'];
const solution = (my_string) => my_string.split('').map(ch => (A.includes(ch) ? '' : ch)).join('');