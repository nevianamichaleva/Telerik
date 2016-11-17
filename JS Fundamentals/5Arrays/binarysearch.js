// Problem 7
// Write a program that finds the index of given element X in a sorted array of N integers by using the Binary search algorithm.

function binarySearch(args) {
    var input = args[0].split('\n').map(Number),
		x = input[input.length - 1],
        indexOfX,
        i;

    input.shift();
    input.pop();
    input.sort(function (a, b) {
        return a - b;
    });

    indexOfX = binSearch(input, x, 0, input.length - 1);
    return indexOfX;

    function binSearch(array, number, start, end) {
        if (array[start] > number || number > array[end]) {
            return (-1);
        }

        var middle = ((end + start) / 2) | 0;
        if (array[middle] === number) {
            return middle;
        } else {
            if (array[middle] > number) {
                return binSearch(array, number, start, (middle - 1));
            } else {
                return binSearch(array, number, (middle + 1), end);
            }
        }
    }
}