const sumAll = function(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    const range = [num1, num2].sort((a, b) => a - b);
    let sum = 0;
    for (let i = range[0]; i <= range[1]; i++) {
        sum += i;  
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
