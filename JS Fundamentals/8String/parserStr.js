function solve(args) {
    var str = args[0] + '',
        newStr = str.split('/'),
        res = [];

    newStr[0] = newStr[0].substring(0, newStr[0].length - 1);
    console.log('protocol: ' + newStr[0]);
    console.log('server: ' + newStr[2]);
    res = newStr.slice(3).join('/');

    console.log('resource: /' + res);
}
solve(['https://github.com/TelerikAcademy/JavaScript-Fundamentals/blob/master/Topics/11.%20Strings/homework/07.%20Parse%20URL/README.md']);