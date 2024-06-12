function solution(sides) {
    const _array = sides.sort((a, b) => b-a);
    return _array[0] < _array[1] + _array[2] ? 1 : 2;
}