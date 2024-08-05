function solution(sides) {
    const [a, b] = sides;
    const min = Math.abs(a - b) + 1;
    const max = a + b - 1;

    return max - min + 1;
}