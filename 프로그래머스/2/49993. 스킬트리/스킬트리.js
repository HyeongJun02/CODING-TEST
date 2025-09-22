function solution(skill, skill_trees) {
    let answer = 0;
    for (let tree of skill_trees) {
        let filtered = tree.split("").filter(ch => skill.includes(ch)).join("");
        if (skill.startsWith(filtered)) answer++;
    }
    return answer;
}
