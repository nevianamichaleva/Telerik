/*Problem 5. Appearance count

Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.*/
function solve(args) {
    var numb = args[0].split('\n'),
        num,
        i,
        count = 0,
        len;

    num = numb.pop();
    numb.shift();

    for (i = 0; len = numb.length, i < len; i++) {
        if (numb[i] === num) {
            count += 1;
        }
    }
    console.log(count);
}

solve(['8\n28\n6\n21\n6\n-7856\n73\n73\n-56\n73']);
solve(['10\n28\n6\n21\n6\n-7856\n73\n73\n-56\n73\n21\n73']);
solve(['5\n25\n6\n21\n6\n-7856\n28']);