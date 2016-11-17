function solve(str) {
    var str1 = str[0],
        i,
        resultUp = [],
        resultLow = [],
        newStr,
        regOrg = new RegExp("\<\/?orgcase>", 'gi'),
        regLow = new RegExp("\<\/?lowcase>", 'gi'),
        regUp = new RegExp("\<\/?upcase>", 'gi'),
        result, indexes = [];

    newStr = str1.replace(regOrg, '');

    while ((result = regUp.exec(str1))) {
        resultUp.push(result.index);
    }

    while ((result = regLow.exec(str1))) {
        resultLow.push(result.index);
    }
    for (i = 0; i < resultUp.length; i += 2) {
        newStr1 = str1.substring((resultUp[i] + 7), resultUp[i + 1]);
        newStr = newStr.replace(newStr1, newStr1.toUpperCase());
    }
    for (i = 0; i < resultLow.length; i += 2) {
        newStr1 = str1.substring((resultLow[i] + 8), resultLow[i + 1]);
        newStr = newStr.replace(newStr1, newStr1.toLowerCase());
    }
    newStr = newStr.replace(regUp, '');
    newStr = newStr.replace(regLow, '');
    console.log(newStr);
}

solve(['We are <orgcase>liViNg</orgcase> in a <upcase>yellow submarine</upcase>. We <orgcase>doN\'t</orgcase> have <lowcase>anything</lowcase> else.']);
solve(['We are living in an yellow submarine. We don\'t <orgcase>liViNg</orgcase> anything else. inside the will submarine is very tight. <lowcase>SO</lowcase> we are drinking all the day. We <upcase>will</upcase> move out of it in 5 days.']);