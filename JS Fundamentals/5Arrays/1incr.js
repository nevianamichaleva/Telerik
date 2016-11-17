/*Problem 1. Increase array members

Write a program that allocates array of N integers, initializes each element by its index multiplied by 5 and the prints the obtained array on the console.*/
function solve(args) {
    var num = +args,
        i = 0,
        newArr = [];
    newArr[num - 1] = undefined;
    for (i; i < num; i += 1) {
        newArr[i] = i * 5;
    }
    console.log(newArr.join('\r\n'));
}
solve(5);
solve(3);
solve(7);