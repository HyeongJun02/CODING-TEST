function solution(files) {
    const regex = /^(\D+)(\d{1,5})(.*)$/;

    return files.sort((a, b) => {
        const [, headA, numA, tailA] = a.match(regex);
        const [, headB, numB, tailB] = b.match(regex);

        const lowerHeadA = headA.toLowerCase();
        const lowerHeadB = headB.toLowerCase();

        if (lowerHeadA < lowerHeadB) return -1;
        if (lowerHeadA > lowerHeadB) return 1;

        return Number(numA) - Number(numB);
    });
}