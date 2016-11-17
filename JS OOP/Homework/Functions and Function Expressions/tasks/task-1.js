function sum(arr) {
    'use strict';
    //arr = arr || [];

    var i, result = 0,
        len;
    if (arr === undefined) {
        throw new Error('The parameter is not passed');
    }
    if (arr.length === 0) {
        return null;
    }
    for (i = 0, len = arr.length; i < len; i += 1) {

        if (isNaN(arr[i])) {
            throw new Error(arr[i] + ' is not a number');
        }
        result += parseInt(arr[i]);

    }
    return result;
}

module.exports = sum;