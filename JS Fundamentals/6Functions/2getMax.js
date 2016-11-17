function getMax(num1, num2, num3) {
    switch (arguments.length) {
        case 1:
            console.log(num1);
            break;
        case 2:
            {
                var max;
                num1 = +num1;
                num2 = +num2;
                max = num1;
                if (num2 > max) {
                    max = num2;
                }
                console.log(max);
                break;
            }
        case 3:
            {
                var max;
                num1 = +num1;
                num2 = +num2;
                num3 = +num3;
                max = num1;
                if (num2 > max && num2 > num3) {
                    max = num2;
                } else {
                    max = num3;
                }
                console.log(max);
                break;
            }
    }
}
getMax(2, 8, 688);
getMax(2);
getMax(2, 8);