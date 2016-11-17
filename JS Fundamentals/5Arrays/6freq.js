/*Problem 6. Most frequent number

Write a script that finds the most frequent number in an array.*/

function solve(args) {
    var arr = args[0].split('\n'),
        len,
        count = 1,
        ind,
        big = 2;
     n = arr.shift();
    n = +n;
    len = n;   
    arr.sort();
    /*console.log(arr);*/
    for (i = 0; i < len; i++) {
        if (arr[i] === arr[i + 1]) {
            count += 1;
            if (count >= big) {
                big = count;
                ind = arr[i];
                /*console.log(ind);*/
            }
        } else {
            count = 1;

        }
    }
    console.log(ind + " (" + big + " times)");
}
solve(['6\n3\n1\n1\n5\n1\n6']);
solve(['10\n36\n10\n1\n34\n28\n36\n31\n27\n30\n20']);