function solution(n) {
    let i = 1;
    let factorial = 1;

    while (true) {
        if (factorial > n) {
            return i - 1;
        }
        i++;
        factorial *= i;
    }
}