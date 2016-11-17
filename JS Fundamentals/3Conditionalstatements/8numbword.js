function solve(args) {
    var num = +args;
    var singleDigits = ["Zero", "One", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight", "Nine"
    ];

    var twoDigits = ["", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen",
        "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"
    ];

    var tensMultiple = ["", "", "Twenty", "Thirty", "Fourty", "Fifty",
        "Sixty", "Seventy", "Eighty", "Ninety"
    ];
    var singleSmallDigits = ["zero", "one", "two", "three", "four",
        "five", "six", "seven", "eight", "nine"
    ];

    var twoSmallDigits = ["", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"
    ];

    var tensSmallMultiple = ["", "", "twenty", "thirty", "fourty", "fifty",
        "sixty", "seventy", "eighty", "ninety"
    ];
    var n = num.toString();
    var z = n.length;
    var result;

    if (z === 1) {
        result = singleDigits[num];
    } else if (num < 20 && z === 2) {
        result = twoDigits[num - 9];
    } else if (z === 2) {
        var ost = num % 10;
        var num2 = parseInt(num / 10);
        result = tensMultiple[num2] + " " + singleSmallDigits[ost];
    } else if (z === 3) {
        var h = Math.floor(num / 100);
        var d = num % 100;
        if (d >= 10 && d <= 19) {
            result = singleDigits[h] + " hundred and " + twoSmallDigits[d - 9];
        } else if (d === 0) {
            result = singleDigits[h] + " hundred";
        } else if (d < 10 && d !== 0) {
            result = singleDigits[h] + " hundred and " + singleSmallDigits[d];
        } else {
            d = Math.floor(d / 10);
            var e = num % 10;
            result = singleDigits[h] + " hundred and " + tensSmallMultiple[d] + " " + singleSmallDigits[e];
        }
    }
    console.log(result);

}
solve(0);
solve(9);
solve(10);
solve(12);
solve(19);
solve(98);
solve(273);
solve(400);
solve(501);
solve(617);
solve(711);
solve(999);