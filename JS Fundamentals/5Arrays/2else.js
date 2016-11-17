function solve(args) {
    var arr = args[0].split('\n');
    var arr1 = arr[0].trim().toLowerCase();
    var arr2 = arr[1].trim().toLowerCase();

    function compareTwoArrays(firstArray, secondArray) {

        var result = firstArray.localeCompare(secondArray);

        if (result > 0) {
            console.log('>');
        }
        else if (result < 0) {
            console.log('<');
        }
        else {
            console.log('=');
        }
    }

    compareTwoArrays(arr1, arr2);
}
solve(['hello\nhalo']);