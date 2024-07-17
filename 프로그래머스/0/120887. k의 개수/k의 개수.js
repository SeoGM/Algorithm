function solution(i, j, k) {
    let count = 0;
    const target = k.toString();
    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        for (let char of numStr) {
            if (char === target) {
                count++;
            }
        }
    }
    return count;
}