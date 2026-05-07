const removeFromArray = function(arr, ...args) {
    const result = arr.filter(item => !args.includes(item));
    return result;
};

console.log(removeFromArray([1, 2, 3, 4], 7, tacos));

// Do not edit below this line
module.exports = removeFromArray;
