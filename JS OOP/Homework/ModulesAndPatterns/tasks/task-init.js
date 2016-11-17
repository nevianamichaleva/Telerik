function solve() {
    var Course = {
        init: function(title, presentations) {
            validateTitle(title);

            this.title = title;
            if (!presentations) {
                throw "There are no presentations";
            }
            validatePresentationTitle(presentations);
            this.presentations = presentations;
            this.courseStudents = [];
            this.homeworks = [],
                this.examResults = [];
            return this;
        },

        addStudent: function(name) {
            var student = {};
            var studentName = name.split(' ');
            validNameString(studentName[0]);
            student.firstname = studentName[0];
            validNameString(studentName[1]);
            student.lastname = studentName[1];
            student.ID = this.courseStudents.length + 1;

            this.courseStudents.push(student);
            return student.ID;
        },


        getAllStudent: function() {
            return this.courseStudents.slice();
        },

        submitHomework: function(studentID, homeworkID) {
            let homework = {};
            if (this.courseStudents.length === 0) {
                throw "There are no students for this course";
            }
            var finder = this.courseStudents.find(function(courseStudents) {
                return courseStudents.ID === studentID;
            });
            if (finder === undefined) {
                throw " invalid StudentID for submit homework";
            }

            homework.studentID = studentID;
            if (homeworkID > this.presentations.length) {
                throw "There are no that ID Presentation";
            }
            homework.homeworkID = homeworkID;
            this.homeworks.push(homework);
        },

        pushExamResults: function(results) {
            for (let student of results) {
                var finder = this.courseStudents.find(function(courseStudents) {
                    return courseStudents.ID === student.studentID;
                });
                if (finder === undefined) {
                    throw " invalid StudentID for pushing exam results";
                }
            }
            for (let student of results) {
                var unique = student.studentID;
                var counter = 0;
                for (var i = 0; i < results.length; i += 1) {
                    if (results[i].studentID === unique) {
                        counter += 1;
                    }
                    if (counter > 1) {
                        throw "Someone is tring to cheat";
                    }
                }
                if (isNaN(student.score)) {
                    throw "Score is not a number";
                }
            }
            this.examResults = results;
        },

        getTopStudents: function() {
            var topTenSudents = [];
            return this.examResults.slice();
        }
    };

    function validateTitle(title) {
        if (title.length < 1) {
            throw "Titles must have at least one character";
        }
        if (title.match("^ ")) {
            throw "Title does not start with space";
        }

        if (title.match(" $")) {
            throw "Title does not end with space";
        }
        if (title.match(/\s{2,}/)) {
            throw "Titles must not have consecutive spaces";
        }
    }

    function validatePresentationTitle(presentations) {
        for (var i = 0; i < presentations.length; i += 1) {
            validateTitle(presentations[i]);
        }
    }

    function validNameString(string) {
        //var first = string.charAt(0);
        //if (first != first.toUpperCase()) {
        //    throw "Names must start with an upper case letter";
        //}
        if (!string.match(/^[A-Z][a-z]+/))
            throw "Names must start with an upper case letter and all other symbols in the name (if any) are lowercase letters";
    }

    return Course;
    //console.log(typeof(Course.init));
}
module.exports = solve;
//var course = Course.init('JS OOP', ['Modules', "ES6"]);
//console.log(course);
//course.addStudent('Mila Ivanova');
//course.addStudent('Dobrinka Aslanova');
//course.addStudent('Maia Milanova');

//console.log(course.getAllStudents());
//course.submitHomework(1, 1);
//course.submitHomework(2, 1);
//course.submitHomework(3, 1);
//
//course.pushExamResults([{ studentID: 1, score: 3 }, { studentID: 3, score: 5.40 }, { studentID: 2, score: 5.40 }]);
//console.log(course);

//console.log(course.getTopStudents());