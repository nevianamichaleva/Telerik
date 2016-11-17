/*Problem 1. English digit

Write a function that returns the last digit of given integer as an English word.*/
function solve(args) {
    var num = +args,
        lastDigit = num % 10,
        word = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    console.log(word[lastDigit]);
}
solve(512);
solve(1024);
solve(12309);
solve(1);
solve(0);