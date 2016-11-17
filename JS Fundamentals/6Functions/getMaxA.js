function getMax(args) {
    var numArray = (args + '').split(' '),
        i,
        max = -Infinity;
    strToarr(numArray);
    for (i = 0; i < numArray.length; i++) {
        if (numArray[i] > max) {
            max = numArray[i];
        }
    }
    console.log(max);
}

function strToarr(numArray) {
    for (i in numArray) {
        numArray[i] = +numArray[i];
    }
}

getMax(['2 8 688']);
getMax(['8 3 6']);
getMax(['7 19 19']);