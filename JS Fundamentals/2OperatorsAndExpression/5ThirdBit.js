function solve(args) {
    var num = +args[0], pos = 3;
    num = num.toString(2);
    console.log(num);
    var bitStr = num.split('').reverse().join('');
    console.log(bitStr.charAt(3));
}