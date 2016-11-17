function solve(args) {

    var array = args[0].split("\n").map(Number),
        n = +array[0],
        target = +array[array.length - 1];

    array.shift();
    array.pop();

    var minIndex = 0;
    var maxIndex = array.length - 1;
    var currentIndex;
    var currentElement;


    while (minIndex <= maxIndex) {
        currentIndex = ((minIndex + maxIndex) / 2) | 0;

        currentElement = +array[currentIndex];

        if (target > currentElement) {
            minIndex = currentIndex + 1;
        } else if (target < currentElement) {
            maxIndex = currentIndex - 1;
        } else {
            return currentIndex;
        }
    }
    return -1;
}
console.log(solve(['10\n1\n2\n4\n8\n16\n31\n32\n64\n77\n99\n32']));