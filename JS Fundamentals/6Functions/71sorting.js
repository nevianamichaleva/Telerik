function sorting(args) {
    var numArray = args[1].split(' ').map(Number),
        n = +args[0],
        i, ind, j = 0,
        max,
        sortedArr = [],
        len1, len = numArray.length;

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
    console.log(sortedArr.join(" "));
}
sorting(['6', '3 4 1 5 2 6']);
sorting(['8', '1 5 3 8 2 6 4 7']);
sorting(['10', '-26 -30 2 3 15 19 2 6 14 10']);