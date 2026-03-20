// function solution(numbers) {
//     return numbers.map(v => {
//         if (v % 2 === 0) return v + 1;
//         let lastZero = ~v & (v + 1);
//         return v + lastZero - (lastZero >> 1);
//     });
// }

function solution(numbers) {
    let result = [];
    for (let i = 0; i < numbers.length; i++) {
        // 짝수의 경우
        if (numbers[i] % 2 === 0) {
            result.push(numbers[i] + 1);
            continue;
        }
        // 홀수의 경우
        let number = numbers[i].toString(2).split("");
        number.unshift("0");
        let saveIndex;
        for (let j = number.length - 1; j >= 0; j--) {
            if (number[j] === "0") {
                number[j] = "1";
                saveIndex = j + 1;
                break;
            }
        }
        for (let k = saveIndex; k < number.length; k++) {
            if (number[k] === "1") {
                number[k] = "0";
                break;
            }
        }
        result.push(parseInt(number.join(""), 2));
    }
    return result;
}