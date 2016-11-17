function getMax(num) {
    var numArray = (num + '').split(' '),
        i;
    for (i in numArray) {
        numArray[i] = +numArray[i];
    }
    switch (numArray.length) {
        case 1:
            console.log(numArray[0]);
            break;
        case 2:
            {
                var max;
                max = numArray[0];
                if (numArray[1] > max) {
                    max = numArray[1];
                }
                console.log(max);
                break;
            }
        case 3:
            {
                var max;
                max = numArray[0];
                if (numArray[1] > max && numArray[1] > numArray[2]) {
                    max = numArray[1];
                } else {
                    max = numArray[2];
                }
                console.log(max);
                break;
            }
    }
}


getMax(['2 8 688']);
getMax(['8 6']);
getMax(['7 19 19']);