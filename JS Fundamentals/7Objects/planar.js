//function solve(args) {

var line1,
    line2, line3, line4;

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
//}
line1 = lines(5, 6, 7, 8);
line2 = lines(1, 2, 3, 4);
line3 = lines(9, 10, 11, 12);

console.log(line1.calcul());
console.log(line2.calcul());
console.log(line3.calcul());
//solve(['5', '6', '7', '8', '1', '2', '3', '4', '9', '10', '11', '12']);