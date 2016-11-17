//Task 2.
//Write a function that finds all the prime numbers in a range
//It should return the prime numbers in an array
//It must throw an Error if any of the range params is not convertible to Number
//It must throw an Error if any of the range params is missing


function prime(start, end) {
    'use strict';
    var result = [],
        val, numbers = [];
    if (isNaN(start) || isNaN(end)) {
        throw new Error('Some element is not a number or missing');
    }
    for (let i = 0; i <= (parseInt(end) - parseInt(start)); i += 1) {
        var next = (parseInt(start) + i);
        numbers.push(next);
    }
    //console.log(numbers);
    for (let i = 0, len = numbers.length; i < len; i += 1) {
        var curr = numbers[i];
        if (curr <= 1) {
            continue;
        }
        if (curr === 2 || curr === 3) {
            val = curr;
        }
        if (curr > 3) {
            for (var j = 2; j < curr; j += 1) {
                if (curr % j === 0) {
                    val = undefined;
                    break;
                } else {
                    val = curr;
                }
            }
        }
        if (val !== undefined) {
            result.push(val);
            val = undefined;
        }
    }
    return result;
}
//console.log(prime('1', '5'));
module.exports = prime;