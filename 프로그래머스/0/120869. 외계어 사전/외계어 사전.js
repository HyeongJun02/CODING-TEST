function solution(spell, dic) {
    let check = spell.sort().join("");
    let words = dic.map(word => word.split("").sort().join("")).sort();
    return 2 - words.includes(check);
}