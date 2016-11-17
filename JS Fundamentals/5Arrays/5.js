/*Problem 5. Selection sort

Sorting an array means to arrange its elements in increasing order.
Write a script to sort an array.
Use the selection sort algorithm: Find the smallest element, move it at the first position, find the smallest from the rest, move it at the second position, etc.*/

function solve(args) {
    var arr = args,
        i, j = 0,
        small,
        indSmall,
        len1,
        len = arr.length,
        resultArr = [];

    do {
        /*console.log(len1);*/
        small = arr[0];
        for (i = 0; len1 = arr.length, i < len1; i++) {

            if (arr[i] <= small) {
                small = arr[i];
                indSmall = i;
            }

        }


        /*console.log("Small: " + small);
        console.log("Index: " + indSmall);*/

        resultArr.push(arr[indSmall]);
        /*console.log(resultArr);*/
        arr.splice(indSmall, 1);
        /*console.log(arr);*/

        /*console.log(len1);*/
        j++
    } while (j < len);
    console.log(resultArr.join('\r\n'));
}
solve([1, 11, 0, 8, 15, 10, 12]);
solve([15, 6, 8, 3, 4, 5, -2, -1]);