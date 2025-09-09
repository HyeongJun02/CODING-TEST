function solution(nums) {
    let can = [...new Set(nums)].length;
    return (can >= (nums.length / 2)) ? nums.length / 2 : can;
}