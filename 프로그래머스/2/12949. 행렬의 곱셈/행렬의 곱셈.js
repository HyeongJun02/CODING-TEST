function solution(arr1, arr2) {
    let result = [];
    for (let arr1c = 0; arr1c < arr1.length; arr1c++) {
        let temp = [];
        for (let arr2r = 0; arr2r < arr2[0].length; arr2r++) {
            let p = 0;
            for (let arr2c = 0; arr2c < arr2.length; arr2c++) {
                p += arr1[arr1c][arr2c] * arr2[arr2c][arr2r];
            }
            temp.push(p);
        }
        result.push(temp);
    }
    return result;
}