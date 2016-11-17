/*Problem 5. Appearance count

Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.*/
function solve(args) {
    var numb = (args + '').split('\n'),
        arr = numb[1].split(" "),
        i,
        count = 0,
        len;
    for (i in arr) {
        arr[i] = +arr[i];
    }
    for (i = 0; len = arr.length, i < len; i++) {
        if (arr[i] === +numb[2]) {
            count += 1;
        }
    }
    console.log(count);
}

solve(['8\n28 6 21 6 -7856 73 73 -56\n73']);
solve(['10\n28 6 21 6 -7856 73 73 -56 73 21\n73']);
solve(['5\n25 6 21 6 -7856 \n28']);