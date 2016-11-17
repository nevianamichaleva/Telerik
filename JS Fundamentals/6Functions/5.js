/*Problem 5. Appearance count

Write a function that counts how many times given number appears in given array.
Write a test function to check if the function is working correctly.*/
function solve(args) {
    var numb = [3, 67, 4, 5, 15, 2, 56, 15, 5, 5, 6],
        num = +args,
        i,
        count = 0,
        len;

    for (i = 0; len = numb.length, i < len; i++) {
        if (numb[i] === num) {
            count += 1;
        }
    }
    console.log("Occurrences of number " + num + " in the given arrary is " + count + " times");
}

function test(count) {
    for (i = 0; len = numb.length, i < len; i++) {
        if (numb[i] === num) {
            count -= 1;
        }
        if (count === 0) {
            console.log("Function work property");
        } else {
            console.log("There are any errors");
        }
    }
}

solve(5);
solve(15);
solve(2);