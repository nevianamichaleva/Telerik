function solve(args) {
    var num = +args[0], i=2;
    if (num <= 1) {
        console.log("false");
    }  
    if (num <= 3) {
        console.log("true");
    } 
   
    if (num>3) { 
        for(i; i<num;i++) {
            if(num%i!==0) {
                rez="true";
                break;
            }
            else {
                rez="false";
            }
        }
        console.log(rez);}
    }
}