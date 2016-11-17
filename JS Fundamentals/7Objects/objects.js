function solve(args) {
    var person = [],
        i, j = 1,
        young,
        ind = 0;

    for (i = 0; i < args.length; i += 3) {
        person[i / 3] = makePerson(args[i], args[i + 1], +args[i + 2]);
    }

    function makePerson(fname, lname, age) {
        return {
            fname: fname,
            lname: lname,
            age: age,
            fullname: function fullname() {
                return this.fname + ' ' + this.lname;
            }
        }
    };
    young = person[0].age;

    for (j in person) {

        if (young >= person[j].age) {
            young = person[j].age;
            ind = j;
        }
    }
    console.log(person[ind].fullname());
}
solve(['Gosho', 'Petrov', '32', 'Bay', 'Ivan', '81', 'John', 'Doe', '42']);
solve(['Penka', 'Hristova', '61', 'System', 'Failiure', '88', 'Bat', 'Man', '16', 'Malko', 'Kote', '72']);