function solution(my_string, num1, num2) {
    let array = my_string.split("");
    let temp = array[num1];
    array[num1] = array[num2];
    array[num2] = temp;
    return array.join("");
}