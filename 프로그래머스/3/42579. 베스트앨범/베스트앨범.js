function solution(genres, plays) {
    const length = genres.length;
    const sortedMap = {};
    const playSum = {};

    // 데이터 구성
    for (let i = 0; i < length; i++) {
        if (!sortedMap[genres[i]]) sortedMap[genres[i]] = [];
        sortedMap[genres[i]].push([i, plays[i]]);
        playSum[genres[i]] = (playSum[genres[i]] || 0) + plays[i];
    }
    
    // console.log('playSum: ', playSum);

    // 장르별 총 재생수 기준으로 정렬
    // playSum -> sortedPlays
    const sortedPlays = Object.entries(playSum).sort((a, b) => b[1] - a[1]);

    // console.log('sortedPlays: ', sortedPlays);
    
    // 각 장르 내에서 재생수 기준으로 정렬
    // sortedMap
    for (const key in sortedMap) {
        sortedMap[key].sort((a, b) => b[1] - a[1]);
    }
    
    // console.log('sortedMap:', sortedMap);

    // 정렬된 장르 순서대로 최대 2곡씩 뽑기
    const answer = [];

    for (const [genre] of sortedPlays) {
        const songs = sortedMap[genre];
        for (let i = 0; i < Math.min(2, songs.length); i++) {
            answer.push(songs[i][0]);
        }
    }

    return answer;
}
