function solve(num) {
    var pos = 3;
    var mask = 1 << pos;
    console.log(num.toString(2));
    console.log(mask.toString(2));
    var numMask = num & mask;
    console.log(numMask.toString(2));
    var bit = numMask >> pos;
    console.log(bit.toString(2)); 
}