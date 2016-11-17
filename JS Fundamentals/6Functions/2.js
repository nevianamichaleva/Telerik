/*Problem 2. Reverse number

Write a function that reverses the digits of given decimal number.*/
function solve(args) {
    var num = +args,
        arr = num.toString(),
        len = arr.length,
        i,
        numEnd,
        newArr = [];
    for (i = 0; i < len; i++) {
        newArr.unshift(arr[i]);
    }
    numEnd = newArr.join('');
    numEnd = +numEnd;
    console.log(numEnd);

}
solve(512);
solve(1024);
solve(12309);
solve(1);
solve(123.45);