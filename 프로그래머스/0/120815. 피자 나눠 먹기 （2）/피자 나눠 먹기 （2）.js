function solution(n) {
    let num = 1;
    while(num < 100) {
        if(6 * num % n === 0) break;
        num++;
    }
    return num;
}