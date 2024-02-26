function solution(nums) {
    let answer = 0;
    let num = [];
    for (let i = 0; i < nums.length; i++) {
        if (!num.includes(nums[i]) && num.length < nums.length / 2) {
            num.push(nums[i]);
            answer++;
        }
    }
    return answer;
}