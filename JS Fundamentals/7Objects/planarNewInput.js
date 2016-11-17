function solve(args) {
    var arr = args,
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
        return Math.sqrt((Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2)));
    }


    var output;
    if (results[0] + results[1] > results[2] && results[1] + results[2] > results[0] && results[0] + results[2] > results[1]) {
        output = "Triangle can be built";
    } else {
        output = "Triangle can not be built";
    }
    var lineRez = results.map(Number).map(function(a) {
        return a.toFixed(2)
    }).join('\n');
    console.log(lineRez);
    console.log(output);
}

solve(['7', '7', '2', '2', '5', '6', '2', '2', '95', '-14.5', '0', '-0.123']);