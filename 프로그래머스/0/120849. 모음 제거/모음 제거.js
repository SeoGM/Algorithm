function solution(my_string) {
    const _ = ['a', 'e', 'i', 'o', 'u'];
    let s = my_string
    _.map(v=>s = s.replaceAll(v,''))
    return s;
}