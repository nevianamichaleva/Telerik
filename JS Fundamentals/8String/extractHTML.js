function solve(str) {
    var i, str1, result, newStr = [],
        regexStr = /\>\w+\s?\w+\W*\</ig;

    for (i = 0; i < str.length; i += 1) {
        newStr[i] = str[i].replace(/^\s*/g, '');
    }
    str1 = newStr.join('');
    result = str1.match(regexStr);

    for (i = 0; i < result.length; i += 1) {
        result[i] = result[i].replace(/^\>*/g, '');
        result[i] = result[i].replace(/\<*/g, '');

    }
    console.log(result.join(''));
}

solve([
    '<html>',
    '  <head>',
    '    <title>Sample site</title>',
    '  </head>',
    '  <body>',
    '    <div>text',
    '      <div>more text</div>',
    '      and more...',
    '    </div>',
    '    in body',
    '  </body>',
    '</html>'
]);