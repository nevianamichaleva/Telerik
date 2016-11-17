function solve(args) {
    var a, spec, clos, str;
    regA = /\[our site\]\(/;
    regSpec = /\)/;
    regF = /\[our forum\]\(/g;

    a = args[0].match(regA);
    spec = args[0].match(regSpec);

    str = args[0].replace(regA, "[URL=").replace(regSpec, ']our site[/URL]').replace(regF, "[URL=");
    var str1 = str.replace(regSpec, ']our forum[/URL]');
    console.log(str1);

}
solve(['<p>Please visit [our site](http://academy.telerik.com) to choose a training course. Also visit [our forum](www.devbg.org) to discuss the courses.</p>']);
//solve(['<p>Please visit [URL=http://academy.telerik.com]our site[/URL] to choose a training course. Also visit [URL=www.devbg.org]our forum[/URL] to discuss the courses.</p>']);