function solution(price) {
    let discount = 0;

    if (price >= 500000) {
        discount = 0.20;
    } else if (price >= 300000) {
        discount = 0.10;
    } else if (price >= 100000) {
        discount = 0.05;
    }

    const finalPrice = Math.floor(price * (1 - discount));
    return finalPrice;
}