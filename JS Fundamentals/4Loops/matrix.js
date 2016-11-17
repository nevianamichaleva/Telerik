function solve(num) {
    var i, j, m, n;
    
    for (i = 1; i <= num; i++) {

        console.log(i);
    }
    for (j = 2; j <= (num + 1); j++) {
        console.log(j);
    }
    for (m = 3; m <= (num + 2); m++) {
        console.log(m);
    }
    for (n = 4; n <= (num + 3); n++) {
        console.log(m);
    }
}

solve(4);