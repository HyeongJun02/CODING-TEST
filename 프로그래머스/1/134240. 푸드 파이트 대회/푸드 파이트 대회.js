function solution(food) {
    let result = "";
    food = food.map(n => Math.floor(n / 2));
    for (let i = 1; i < food.length; i++) result += `${i}`.repeat(food[i]);
    return result + "0" + result.split("").reverse().join("");
}