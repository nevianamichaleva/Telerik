function solve(str) {
    var str1 = str[0],
        newStr;

    newStr = str1.replace(/\s/g, '&nbsp;');
    //newStr = str1.split(' ').join('&nbsp;');
    console.log(newStr);
}

solve(['This text contains 4 spaces!!']);
solve(['hello world']);