function printMax(x, y) {
    var max;
    x = +x;
    y = +y;
    max = x;
    if (y > max) {
        max = y;
    }
    console.log(max);
}
printMax(3, 6);