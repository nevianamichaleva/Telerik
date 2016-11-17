function solve(args) {
    var num = args;
    var n = num.toString();
    var len = n.length;
    var i, numletter;
    var rezult = 0;
    for (i = 0; i < len; i++) {
        if (isNaN(n[i])) {
            if (n[i] === "A") {
                numletter = "10";
            }
            if (n[i] === "B") {
                numletter = "11";
            }
            if (n[i] === "C") {
                numletter = "12";
            }
            if (n[i] === "D") {
                numletter = "13";
            }
            if (n[i] === "E") {
                numletter = "14";
            }
            if (n[i] === "F") {
                numletter = "15";
            }
        } else numletter = n[i];
        rezult += numletter * Math.pow(16, ((len - 1) - i));
    }
    var strResult = rezult.toString();
    console.log(strResult);
}
solve('19');
solve('ABC');
solve('FE');
solve('8AE3B');
solve('1AE3');
solve('4ED528CBB4');