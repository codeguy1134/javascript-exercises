
const sumAll = function (a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);
    let sum = 0;


    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    } else {
        for (let i = min; i <= max; i++) {
            sum += i;
        }
    return sum;
    }
};
ddfsdfs

console.log(sumAll(1, 4));

// Do not edit below this line
module.exports = sumAll;