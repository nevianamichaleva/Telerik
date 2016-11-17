function solve(args) {
    var str = args[0].join(","),
        line = str.split(",").map(Number);

    var line1 = [],
        line2 = [],
        line3 = [],
        i,
        l1, l2, l3;
    for (i = 0; i <= 3; i += 1) {
        line1[i] = (line[i]);
    }
    
    for (i = 4; i <= 7; i += 1) {
        line2[i - 4] = (line[i]);
    }
   
    for (i = 8; i <= 11; i += 1) {
        line3[i - 8] = (line[i]);
    }
   
    //console.log(l1, l2, l3);

    function lines(x1, y1, x2, y2) {
        return {
            x1,
            x2,
            y1,
            y2,
            calcul: function calcul() {
                return Math.sqrt((Math.pow((this.x2 - this.x1), 2) + Math.pow((this.y2 - this.y1), 2))).toFixed(2);
            }
        }
    }
    line11 = lines(l1);
    line12 = lines(l2);
    line13 = lines(l3);
    console.log(line11);
    
}

var test = [
    '5', '6', '7', '8',
    '1', '2', '3', '4',
    '9', '10', '11', '12'
];
solve([test]);