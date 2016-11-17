function solve(args) {
    var num = +args[0], i=2, rez;
    if (num <= 1) {
        console.log("false");
    }  
    if (num===2 || num===3) {console.log("true");}
   
    if (num>3) { 
        for(i; i<num;i++) {
            if(num%i===0) {
                rez="false";
                break;
            }
            else {
                rez="true";
            }
        }
        console.log(rez);}
    }