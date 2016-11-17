function sorting(args) {
    var numArray = (args + '').split('\n')[1].split(' '),
        i, ind, j = 0,
        max,
        sortedArr = [],
        len1, len = numArray.length;
    for (i in numArray) {
        numArray[i] = +numArray[i];
    }
    do {
        max = -Infinity;
        for (i = 0; len1 = numArray.length, i < len1; i++) {
            if (numArray[i] > max) {
                max = numArray[i];
                ind = i;
            }
        }
        //console.log(max);
        sortedArr.unshift(max);
        numArray.splice(ind, 1);
        //console.log(numArray);
        j++
    } while (j < len);
    console.log(sortedArr);
}
sorting(['6\n-26 -25 -28 31 2 27']);
sorting(['8\n1 5 3 8 2 6 4 7']);
sorting(['10\n-26 -30 2 3 15 19 2 6 14 10']);