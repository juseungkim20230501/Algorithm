function solution(array, height) {
    var answer = 0;
    const result = array.filter((number) => number > height )
    answer = result.length
    return answer;
}