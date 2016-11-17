/*Problem First larger than neighbours

Write a method that returns the index of the first element in array that is larger than its neighbours, or -1, if there is no such element.*/
function solve(args) {
    var numb = (args + '').split('\n'),
        arr = numb[1].split(" "),
        i,
        ind = 0;

    for (i in arr) {
        arr[i] = +arr[i];
    }
    for (i = 1; i < arr.length - 1; i += 1) {
        if (arr[i - 1] < arr[i] && arr[i] > arr[i + 1]) {
            ind = i;
            break;
        } else {
            ind = -1;
        }
    }
    console.log(ind);
}
solve(['6\n-26 -25 -28 31 2 27']);
solve(['8\n1 2 3 4 5 6 7 8']);
solve(['10\n-26 -30 2 3 15 19 2 6 14 10']);