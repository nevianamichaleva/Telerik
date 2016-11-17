/*Problem 3. Maximal sequence

Write a script that finds the maximal sequence of equal elements in an array.*/
function solve(args) {
    var arr = args[0].split('\n'),
        count = 1,
        big = 2,
        ind, rez,
        i, n,
        resultArr = [];
    
n = arr.shift();
    len = +n;
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
    console.log(big);
    //console.log("At index: " + (rez + 1));
    //resultArr = arr.slice(((rez + 2) - big), (rez + 2));
    //console.log(resultArr);
}

solve(['13\n4\n1\n1\n4\n2\n3\n4\n4\n1\n2\n4\n9\n3']);