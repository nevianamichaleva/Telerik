function solve(args) {
    var arr = args[0].split(''),
        revArr = [];
    revArr = arr.reverse();
    console.log(revArr.join(''));
}
solve(['denim']);
solve(['obratno']);
solve(['123456789']);