function sortingArray(args) {
    input = args[0].split('\n'),
        arrayLength = input[0],
        array = input[1].split(' ').map(Number);
    console.log(array);
    var sortedArray = array.sort(function(a, b) {
        return a - b
    });

    return sortedArray.join(' ');
}

// test
console.log(sortingArray(['6\n3 4 1 5 2 6']));