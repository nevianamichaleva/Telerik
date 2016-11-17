/*Problem 2. Lexicographically comparison

Write a script that compares two char arrays lexicographically (letter by letter).*/
function solve(args) {
    var arr1 = args[0].split(""),
        arr2 = args[1].split(""),
        i,
        len1 = arr1.length;
    len2 = arr2.length;
    result = [];
    console.log(arr1);
    console.log(arr2);
    for (i = 0; i < len1, i < len2; i += 1) {
        if (arr1[i] > arr2[i]) {
            result = arr1[i];
            console.log(arr1[i] + " > " + arr2[i]);
        } else {
            console.log(arr1[i] + " < " + arr2[i]);
        }
    }

}
solve(["Morena", "Bounty"]);