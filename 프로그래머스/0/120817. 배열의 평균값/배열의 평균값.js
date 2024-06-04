function solution(numbers) {
    let sum = 0;
    numbers.map(number => sum += number);
    answer = (sum / numbers.length)
    return answer;
}