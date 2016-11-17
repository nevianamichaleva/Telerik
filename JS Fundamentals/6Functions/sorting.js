/*Sorting array

Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array..*/
function sortArr(args) {
    var numb = (args + '').split('\n'),
        arr = numb[1].split(" "),
        sortedArr = [],
        i;
    for (i in arr) {
        arr[i] = +arr[i];
    }
    sortedArr = arr.sort(function(a, b) {
        return a - b;
    })
    return (sortedArr.join(" "));

}
console.log(sortArr(['6\n-26 -25 -28 31 2 27']));
console.log(sortArr(['8\n1 2 3 4 5 6 7 8']));
console.log(sortArr(['10\n-26 -30 2 3 15 19 2 6 14 10']));