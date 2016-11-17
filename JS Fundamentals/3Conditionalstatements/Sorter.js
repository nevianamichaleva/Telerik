var a = -5;
var b = 2.5;
var c = 7;

if (a > b && a > c) {
    if (b > c) {
        console.log(a + " " + b + " " + c);
    } else {
        console.log(a + " " + c + " " + b);
    }

} else if (a < b && a < c) {
    if (b < c) {
        console.log(c + " " + b + " " + a);
    } else {
        console.log(b + " " + c + " " + a);
    }
} else if (a < b && a > c) {
    if (b > c) {
        console.log(b + " " + a + " " + c);
    } else {
        console.log(c + " " + a + " " + b);
    }
}