const removeFromArray = function(arr) {
    let filteredArr = [...arr];
    for (let i = 1; i < arguments.length; i++) {
        filteredArr = filteredArr.filter(ele => ele !== arguments[i]);
    }
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
