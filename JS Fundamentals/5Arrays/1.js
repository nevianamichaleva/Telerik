/*Problem 1. Increase array members

Write a script that allocates array of 20 integers and initializes each element by its index multiplied by 5.
Print the obtained array on the console.*/
function solve(args) {
    var arr = args,
        i,
        newArr = [],
        len = arr.length;
    for (i in arr) {
        newArr[i] = i * 5;
    }
    console.log(newArr);
}
solve([1, 5, 8, 6, 8, 15, 66, 5, 12, 14, 11, 23, 12, 17, 19, 20, 0, 23, 5, 4]);
solve([1, 5, 8, 6, 8, 20, 0, 23, 5, 4]);
solve([17, 19, 20, 0, 23, 5, 4]);