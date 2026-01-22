function solution(people, limit) {
    people.sort((a, b) => a - b);
    let left = 0, right = people.length - 1;
    let result = 0;
    while (left <= right) {
        if (people[left] + people[right] <= limit) {
            left++;
        }
        right--;
        result++;
    }
    return result;
}