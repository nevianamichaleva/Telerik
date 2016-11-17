function solve(args) {
    var a, spec, clos, str;
    regSite = /<a href="http:/g;
    regA = /\<a href="/g;
    regSpec = /\">/g;
    regClos = /\<\/a\>/g;

    str = args[0].replace(regSite, "[our site](http:").replace(regA, "[our forum](").replace(regSpec, ')').replace('our site</a>', '').replace('our forum</a>', '');

    console.log(str);

}
solve(['<p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>']);
//<p>Please visit [our site](http://academy.telerik.com) to choose a training course. Also visit [our forum](www.devbg.org) to discuss the courses.</p>