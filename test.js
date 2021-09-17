function multiplicationEven(a, b) {
    let result = a;

    for (let i = a; i <= b; i++) {
        if (i % 2 === 0) {
            result *= i;
        }
    }

    return result;
}
console.log(multiplicationEven(1, 20));
