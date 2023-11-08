function solution(money) {
    var answer = [];
    const result = parseInt(money/5500)
    const change = money%5500
    answer.push(result)
    answer.push(change)
    return answer;
}