const solution = (num1, num2) => {
    return checkRange(num1, 0, 10000) === checkRange(num2, 0, 10000) ? 1 : -1
}

const checkRange = (num, min, max) => {
    return (num >= min && num <= max) ? num : -1;
}