function solve(args) {
    var x = +args[0];
    var y = +args[1];
    var prodCircle;
    var prodRect;
    prodCircle = (Math.pow((x - 1), 2) + Math.pow((y - 1), 2) <= 2.25);
    prodRect = ((-1 <= x) && (x <= 5) && (y >= -1) && (y <= 1));
    console.log((prodCircle ? "inside circle" : "outside circle") + " " + (prodRect ? "inside rectangle" : "outside rectangle"));
}