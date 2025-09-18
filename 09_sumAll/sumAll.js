const sumAll = function (num1, num2) {
    let array = []
    if (
        typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        !Number.isInteger(num1) ||
        !Number.isInteger(num2) ||
        num1 < 0 ||
        num2 < 0
    ) return 'ERROR';

    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            array.push(i)
        }
    } else {
        for (let i = num2; i <= num1; i++) {
            array.push(i)
        }
    }
    return array.reduce((sum, num) => sum + num, 0)
};

// Do not edit below this line
module.exports = sumAll;
