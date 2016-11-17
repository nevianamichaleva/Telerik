function solve(args) {
    var protocolReg = /https?/;
    serverReg = /\w+\.com|eu|bg|org|info/;
    resourceReg = /\/[a-z]\w.+/;
    str = args[0];
    protocol = str.match(protocolReg);
    server = str.match(serverReg);
    resource = str.match(resourceReg);
    console.log('protocol: ' + protocol[0]);
    console.log('server: ' + server[0]);
    console.log('resource: ' + resourceReg[0]);
}
solve(['https://github.com/TelerikAcademy/JavaScript-Fundamentals/blob/master/Topics/11.%20Strings/homework/07.%20Parse%20URL/README.md']);