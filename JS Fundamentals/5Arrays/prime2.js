function sieve5(n) {
  var i,j;
  // true-table
  var prime = [];
  for (i = 0; i <= n; i++) prime.push(true); // mark 'numbers' 0..n as 'true'

  // mark for swipe
  for (i = 2; i <= Math.sqrt(n)|0; i++) {
    if (prime[i]) {
      for (j = i*i; j <= n ;j += i) {
        prime[j] = false; // eliminate all none prime numbers and mark them as 'false'
      }
    }
  }

  // extract primes
  var primes = [];
  for (i = 2; i <= n; i++) { // 'zero' and 'one' is not prime
    if (prime[i]) primes.push(i) // get all primes from 2..n
  }

  return primes;
}
console.time("sieve5");
primes = sieve5(1000000);// 62ms on my PC
console.timeEnd("sieve5");
console.log('length=',primes.length);

primes = sieve5(100);
console.log(primes);
// [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97]
console.log(sieve5(11));//[2,3,5,7,11]
