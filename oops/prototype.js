/*
    In JavaScript, prototype is a fundamental concept related to
    objects and inheritance. Every object in JavaScript has a prototype
    property, which is essentially a reference to another object. This
    other object is called the "prototype object" or "parent object,"
    and it is used for inheritance.

    When a new object is created using the new keyword, the prototype
    of the constructor function is assigned to the new object's prototype
    chain. This means that all objects created using the same constructor
    function will have access to the same properties and methods, even
    if those properties and methods are defined on the prototype object.
*/

function createUser (fname, lname, place) {
    this.firstName = fname,
    this.lastName = lname,
    this.place = place,
    this.fullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

let user1 = new createUser("Muhammed", "Basheer", "Omassery");

let user2 = new createUser("Fathima", "Thasneem", "Omassery");
//console.log(user1);
//console.log(user2);
/*  Here we can see the fullName function in all objects we created
    using createUser() constructor function. as all those function
    contains same definition, this leads to code repeatation excess
    memory usage. to avoid this situation, we can use prototypes and
    prototypal inheritance. let's see how this works. assume we have a
    greeting method which we have to share with all objects we are going
    to create with createUser() constructor function. see the following
    code :
*/

createUser.prototype.greeting = function () {
    return `Hi, this is ${this.fullName()}`
}

console.log(user1);
console.log(user2);

/*  even we added one more method with prototype of createUser
    constructor function. we can't see them within the object we
    created using this function. because, the prototype we assigned the
    new method is assigned to createUser function. as all the objects
    created with the createUser function are linked with it's prototype
    chain, those objects can access those parent prototype object's
    methods. this prototype chain will lead until Object.__proto__
    this helps us to implement inheritance effectively without
    duplication of code.
*/

console.log(user1.greeting());
console.log(user2.greeting());