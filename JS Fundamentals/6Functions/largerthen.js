/*Problem Larger than neighbours

Write a method that checks if the element at given position in given array of integers is larger than its two neighbours (when such exist). Write program that reads an array of numbers and prints how many of them are larger than their neighbours.*/
function solve(args) {
    var numb = (args + '').split('\n'),
        arr = numb[1].split(" "),
        i,
        count = 0;
    for (i in arr) {
        arr[i] = +arr[i];
    }
    for (i = 1; i < arr.length - 1; i += 1) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            count += 1;
            //console.log(arr[i - 1] + "<" + arr[i] + ">" + arr[i + 1]);
        }
    }
    console.log(count);
}
solve(['6\n-26 -25 -28 31 2 27']);
solve(['8\n-26 -25 -28 31 2 27 22 15']);
solve(['10\n-26 15 2 3 15 19 2 6 14 10']);