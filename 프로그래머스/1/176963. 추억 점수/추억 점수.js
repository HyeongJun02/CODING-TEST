function solution(name, yearning, photo) {
    let result = [];
    for (let i = 0; i < photo.length; i++) {
        let yearns = 0;
        for (let j = 0; j < photo[i].length; j++) {
            let index = name.indexOf(photo[i][j]);
            if (index === -1) continue;
            yearns += yearning[index];
        }
        result.push(yearns);
    }
    return result;
}