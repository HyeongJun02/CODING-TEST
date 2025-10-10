function solution(str1, str2) {
    const weight = 65536;
    const pattern = /^[a-z]+$/;

    // 소문자 변환
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // 두 글자씩 끊어서 다중집합 생성
    const makeList = (str) => {
        const list = [];
        for (let i = 0; i < str.length - 1; i++) {
            const a = str[i];
            const b = str[i + 1];
            if (pattern.test(a) && pattern.test(b)) list.push(a + b);
        }
        return list;
    };

    const list1 = makeList(str1);
    const list2 = makeList(str2);

    // 각 다중집합을 Map 형태로 카운팅
    const countMap = (list) => {
        const map = new Map();
        for (const s of list) map.set(s, (map.get(s) || 0) + 1);
        return map;
    };

    const map1 = countMap(list1);
    const map2 = countMap(list2);

    // 교집합 합집합 계산
    let inter = 0;
    let union = 0;
    const allKeys = new Set([...map1.keys(), ...map2.keys()]);
    for (const key of allKeys) {
        const c1 = map1.get(key) || 0;
        const c2 = map2.get(key) || 0;
        inter += Math.min(c1, c2);
        union += Math.max(c1, c2);
    }

    // 둘 다 공집합일 경우
    if (union === 0) return weight;

    // 자카드 유사도 계산
    return Math.floor((inter / union) * weight);
}
