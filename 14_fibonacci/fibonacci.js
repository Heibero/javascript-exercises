const fibonacci = function (num) {
    num = Number(num);

    if (num < 0) return 'OOPS'
    if (num === 1) return 1

    let firstNumber = 0
    let secondNumber = 1
    let thirdNumber = 0

    for (let i = 1; i < num; i++) {
        thirdNumber = firstNumber + secondNumber
        firstNumber = secondNumber
        secondNumber = thirdNumber
    }

    return thirdNumber
};

// Do not edit below this line
module.exports = fibonacci;
