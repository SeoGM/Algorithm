function solution(balls, share) {
    return factorial(balls) / (factorial(share) * factorial(balls - share));
}

const factorial = (n) => {
    if (n === 0 || n === 1) return 1n;
    return BigInt(n) * factorial(n - 1);
};