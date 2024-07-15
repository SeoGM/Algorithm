function solution(my_string) {
    const _string = new Set(my_string);
    return [..._string].join('');
}