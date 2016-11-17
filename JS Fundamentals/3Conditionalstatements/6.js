function myFunction() {
    var a = +document.getElementById("a").value;
    var b = +document.getElementById("b").value;
    var c = +document.getElementById("c").value;
    var x;
    var y;
    var d = (b * b) - 4 * (a * c);
    document.getElementById("demod").innerHTML = d;
    if (d < 0) {
        document.getElementById("demo").innerHTML = "No real roots"
    } else if (d === 0) {
        x = ((-b) + Math.sqrt((b * b) - 4 * (a * c))) / 2 * a;
        y = ((-b) - Math.sqrt((b * b) - 4 * (a * c))) / 2 * a;
    } else if (d > 0) {
        x = ((-b) + Math.sqrt((b * b) - 4 * (a * c))) / 2 * a;
        y = ((-b) - Math.sqrt((b * b) - 4 * (a * c))) / 2 * a;
        document.getElementById("demo").innerHTML = 'x1=' + x + ' ' + 'x2=' + y;
    }
}