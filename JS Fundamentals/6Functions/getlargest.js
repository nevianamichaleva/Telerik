// Problem 2
// Write a method GetMax() with two parameters that returns the larger of two integers.
// Write a program that reads 3 integers from the console and prints the largest of them using the method GetMax().

function getLargestNumber(args) {
    var input = args[0].split(' ').map(Number),
        firstNumber = input[0],
        secondNumber = input[1],
        thirdNumber = input[2];

    if (getMax(firstNumber, secondNumber) > thirdNumber) {
        return getMax(firstNumber, secondNumber);
    } else {
        return thirdNumber;
    }

    function getMax(first, second) {
        return first > second ? first : second;
    }
}

// test
console.log(getLargestNumber(['7 19 18']));
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help