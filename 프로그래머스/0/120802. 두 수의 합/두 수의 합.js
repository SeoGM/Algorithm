function solution(num1, num2) {
    if ((num1 >= -50000 && num1 <= 50000) && (num2 >= -50000 && num2 <= 50000)) {
        return num1 + num2;
    }
    return 0;
}