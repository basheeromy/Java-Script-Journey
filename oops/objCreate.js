/*
    The Object.create() method in JavaScript is used to create a new
    object and set the prototype of that new object to be an existing
    object. It allows you to create objects that inherit properties
    and methods from a specified prototype object, effectively
    establishing a prototype chain.

    Syntax:
    Object.create(proto[, propertiesObject])
*/

// create a prototype to use as template for inheritance.
let usertemplate = {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return "Have a good day ~ ~ !"
    }
}

// create an ojbect with Object.create() method.
// pass the template as first argument.

let Arun = Object.create(usertemplate);
Arun.firstName = "Arun";
Arun.lastName = "shankar";
console.log(Arun.fullName());
console.log(Arun.greet());

// create object by passing object properties as second argument.

let subin = Object.create(usertemplate, {
    firstName: {value: "Subin"},
    lastName: {value: "Babu"}
});
console.log(subin.fullName());

// create custom init() method to use as constructor to assign properties.

let profileTemplate = {
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return "Have a good day ~ ~ !"
    },
    init(fname,lname){
        this.firstName = fname;
        this.lastName = lname;
    }
}

profile1 = Object.create(profileTemplate);
profile1.init("Niya", "Fathima");
console.log(profile1.fullName());
