function solution(n) {
    const array = [];
    let x = 2;
    while (n >= 2) {
        while(n % x === 0) {
            if(!array.includes(x)) array.push(x);
            n = n / x;
        }
        x++;
    }
    
    return array;
}