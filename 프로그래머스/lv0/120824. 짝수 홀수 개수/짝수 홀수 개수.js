function solution(num_list) {
    let evenNum = 0;
    let oddNum = 0;
    let answer = [];
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 == 0) {
            evenNum += 1;
        } else {
            oddNum += 1;
        }
    }
    answer.push(evenNum);
    answer.push(oddNum);
    return answer;
}