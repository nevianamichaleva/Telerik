/*Problem 3. Maximal sequence

Write a script that finds the maximal sequence of equal elements in an array.*/
function solve(args) {
    var arr = args,
        count = 1,
        big = 2,
        ind, rez,
        i,
        resultArr = [];
    len = arr.length;

    for (i = 0; i < len; i++) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
            ind = i;
            if (count >= big) {
                big = count;
                rez = ind;
            }
        } else {
            count = 1;
            ind = 0;
        }
    }
    console.log("Max sequence: " + big);
    console.log("At index: " + (rez + 1));
    resultArr = arr.slice(((rez + 2) - big), (rez + 2));
    console.log(resultArr);
}

solve([2, 1, 2, 3, 3, 2, 2, 2, 1]);
solve([2, 1, 2, 3, 3, 2, 2, 1]);
solve([2, 1, 1, 1, 1, 2, 3, 3, 2, 2, 1]);
solve([2, 1, 2, 3, 3, 2, 2, 1, 1, 1]);