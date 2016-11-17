function solve(n) {
    var i, j, npr;
    // true-table
    var prime = [];
    for (i = 0; i <= n; i++) prime.push(true); // mark 'numbers' 0..n as 'true'

    // mark for swipe
    for (i = 2; i <= Math.sqrt(n) | 0; i++) {
        if (prime[i]) {
            for (j = i * i; j <= n; j += i) {
                prime[j] = false; // eliminate all none prime numbers and mark them as 'false'
            }
        }
    }

    npr = prime.lastIndexOf(true);
    console.log(npr);
}

solve(13);