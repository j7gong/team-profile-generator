const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // call parent contructor here;
        super(name, id, email);

        this.github = github;
    }

    getGithub() {
        return {
            github: this.github
        }
    }
}

module.exports = Engineer;