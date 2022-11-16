const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        // call parent contructor here;
        super(name, id, email);

        this.school = school;
    }

    getschool() {
        return {
            school: this.school
        }
    }
}

module.exports = Intern;