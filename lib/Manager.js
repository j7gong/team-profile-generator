const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent contructor here;
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return {
            officeNumber: this.officeNumber
        }
    }
}

module.exports = Manager;