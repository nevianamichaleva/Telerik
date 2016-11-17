function solve(args) {
    var input = args[0].split(' ');
    console.log(getMaxOfThree(+input[0],+input[1],+input[2]));
    
    function getMaxOfThree(a,b,c){
        return a > getMax(b,c) ? a : getMax(b,c);
    }
    
    function getMax(a,b) {
        return a > b ? a : b;
    }
}