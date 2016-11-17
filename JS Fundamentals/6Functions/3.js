/*Problem 3. Occurrences of word

Write a function that finds all the occurrences of word in a text.
The search can be case sensitive or case insensitive.
Use function overloading.*/
function solve(args) {
    var text = "WASHINGTON — This week’s failed gun control votes in the Senate encapsulate much of what is wrong with and most frustrating about Congress. Not one senator in either party believes that someone who presents a serious terrorism risk should be able to waltz into a gun shop and legally buy powerful firearms. Yet partisanship, a reluctance to compromise and the influence of powerful special interests again prevented lawmakers from achieving a consensus objective, as four separate plans went down on Monday to an entirely predictable defeat.",
        word = args,
        i,
        arr = [],
        count = 0,
        len;
    arr = text.split(" ");
    /*console.log(typeof(word));*/
    for (i = 0; len = arr.length, i < len; i++) {
        if (arr[i] == word) {
            /*console.log(arr[i]);*/
            count += 1;
        }
    }
    console.log("Occurrences of word " + word + " in the text is " + count + " times");
}
solve("gun");
solve("and");
solve("The");