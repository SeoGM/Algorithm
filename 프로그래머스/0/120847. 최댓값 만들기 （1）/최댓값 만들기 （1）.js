function solution(numbers) {
    const _array = numbers.sort((a, b) => b-a);
    return _array[0] * _array[1];
}