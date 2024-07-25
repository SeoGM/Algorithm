function solution(array) {
    let count = 0;
    array.map(n => {
        [...String(n)].map(x => x === '7' && count++)
    })
    return count;
}