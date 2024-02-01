function solution(nl) {
    const nleng = nl.length
    if (nl[nleng - 1] > nl[nleng - 2]) {
        nl.push(nl[nleng - 1] - nl[nleng - 2])
    } else {
        nl.push(nl[nleng - 1] * 2)
    }
    return nl;
}