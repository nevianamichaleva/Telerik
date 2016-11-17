/*Sorting array

Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array..*/
function compare(args) {
    var numb = (args + ''),
        arr = numb.split(" "),
        sortedArr = [],
        i;
    //console.log(numb);
    arr.shift();
    //console.log(arr);
    for (i in arr) {
        arr[i] = +arr[i];
    }
    //console.log(arr);
    sortedArr = arr.sort(function(a, b) {
        return a - b;
    })
    return (sortedArr.join(" "));


}
console.log(compare(['6 -26 -25 -28 31 2 27']));
console.log(compare(['8 1 2 3 4 5 6 7 8']));
console.log(compare(['10 -26 -30 2 3 15 19 2 6 14 10']));