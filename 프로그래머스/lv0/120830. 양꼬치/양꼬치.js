function solution(n, k) {
    var answer = 0;
    var nprice = 0;
    var kprice = 0;
    for (var i = 1; i <= n; i++) {
        nprice += 12000;
        if (i % 10 === 0) {
            kprice -= 2000;
        }
    }
    for (var j = 0; j < k; j++) {
        kprice += 2000;
    }
    answer = nprice + kprice;
    return answer;
}