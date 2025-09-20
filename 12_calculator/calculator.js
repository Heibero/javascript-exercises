const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const sum = function (array) {
    let sum = 0;
    array.forEach((item) => {
        sum += item;
    })
    return sum;
};

const multiply = function (array) {
    let product = 1;
    array.forEach((item) => {
        product *= item;
    })
    return product;
};

const power = function (a, b) {
    return Math.pow(a, b);
};

const factorial = function (a) {
    return factorialCalc(a);
};

function factorialCalc(a) {
    let factorial = 1;
    for (let i = a; i > 0; i--) {
        factorial *= i
    }
    return factorial;
}

// Do not edit below this line
module.exports = {
    add,
    subtract,
    sum,
    multiply,
    power,
    factorial
};
