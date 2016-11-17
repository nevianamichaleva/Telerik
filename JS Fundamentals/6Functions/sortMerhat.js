/*Sorting array

Write a method that returns the maximal element in a portion of array of integers starting at given index. Using it write another method that sorts an array in ascending / descending order. Write a program that sorts a given array..*/
function solve(params) {
    var arr = (params + '').split('\n')[1].split(' ');
    var found = false;
    var aOff = 0;
    var holder;
    console.log(arr);
    do {
        found = false;
        for (var i = 1; i < arr.length - aOff; i++) {
            if (+arr[i] > +arr[i - 1]) {
                holder = +arr[i];
                arr[i] = +arr[i - 1];
                arr[i - 1] = holder;
                found = true;
            }
        }
        aOff++;
    } while (found);
    console.log(arr.reverse().join(' '));
}
solve(['6\n-26 -25 -28 31 2 27']);
solve(['8\n1 2 3 4 5 6 7 8']);
solve(['10\n-26 -30 2 3 15 19 2 6 14 10']);