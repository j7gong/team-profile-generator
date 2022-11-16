class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email; 
    }

        getName = function (){
            return {
                name: this.name
            }
        };

        getId = function (){
            return {
                id: this.id
            }
        };

        getEmail = function (){
            return {
                email: this.email
            }
        };

        getRole = function (){
            return {
                role: arguments.callee.toString().toLowerCase()
            }
        };
}

module.exports = Employee;