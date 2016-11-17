function solve(num) {
         var a=+num[0],b=+num[1],result;
         if (a>b) {
             result=b + " " +a; console.log(result);
         } else {
             result=a + " " +b; console.log(result);
         }
}
solve(['5', '2']);
solve(['5.2', '2.6']);
solve(['1', '8']);