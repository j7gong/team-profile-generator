function Employee({name = 'Dave', email='dave@test.com'}) {
    this.name = name;
    this.id = 2;
    this.email = email;

    this.getName = function (){
        return {
            name: this.name
        }
    };

    this.getId = function (){
        return {
            id: this.id
        }
    };

    this.getEmail = function (){
        return {
            email: this.email
        }
    };

    this.getRole = function (){
        return {
            role: arguments.callee.toString().toLowerCase()
        }
    };
}

module.exports = Employee;