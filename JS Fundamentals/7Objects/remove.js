function solve(args) {
    var arr = args,
        result = [],
        find = arr[0];
    result = arr.filter(function(number) {
        return !(number === find);
    });
    console.log(result.join('\n'));
}
solve(['1', '2', '3', '2', '1', '2', '3', '2']);
solve(['_h/_',
    '^54F#',
    'V',
    '^54F#',
    'Z285',
    'kv?tc`',
    '^54F#',
    '_h/_',
    'Z285',
    '_h/_',
    'kv?tc`',
    'Z285',
    '^54F#',
    'Z285',
    'Z285',
    '_h/_',
    '^54F#',
    'kv?tc`',
    'kv?tc`',
    'Z285'
]);