function solve(str) {
    var i, find = str[0],
        result = [];
    regex = new RegExp(find, 'gi');
    result, indexes = [];
    while ((result = regex.exec(str[1]))) {
        indexes.push(result.index);
    }
    console.log(indexes.length);
}

solve(['in', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);
solve(['we', 'We are living in an yellow submarine. We don\'t have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.']);