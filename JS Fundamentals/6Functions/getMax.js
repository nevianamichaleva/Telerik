function getMax(number) {
    params = number[0].split(' ');
    return Math.max(+params[0], +params[1], +params[2]);
}
console.log(getMax('2,3,5'));