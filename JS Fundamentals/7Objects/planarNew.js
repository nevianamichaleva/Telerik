function solve(args) {
    var str = args[0].join(","),
        arr = str.split(","),
        ind,
        lineArr = [],
        results = [];
    for (ind = 0; ind <= 2; ind += 1) {
        lineArr[ind] = arr.splice(0, 4).join(" ");
    }


    for (var i = 0; i < lineArr.length; i += 1) {
        var line = lineArr[i].split(" ").map(Number);
        results.push(lines(line));
    }

    function lines(line) {
        var x1 = line[0];
        var y1 = line[1];
        var x2 = line[2];
        var y2 = line[3];
        return Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))).toFixed(2);
    }

    var lineRez = results.map(Number);
    var output;
    if (lineRez[0] + lineRez[1] > lineRez[2] && lineRez[1] + lineRez[2] > lineRez[0] && lineRez[0] + lineRez[2] > lineRez[1]) {
        output = "Triangle can be built";
    } else {
        output = "Triangle can not be built";
    }

    console.log(lineRez.join('\n'));
    console.log(output);
}

var test = [
    '7', '7', '2', '2',
    '5', '6', '2', '2',
    '95', '-14.5', '0', '-0.123'
];
solve([test]);