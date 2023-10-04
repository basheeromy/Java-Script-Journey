/*
    In JavaScript, an object literal is a way to create and define
    objects directly within your code. It's a concise and
    straightforward syntax for creating objects without the need for
    constructors or classes. Object literals are defined using curly
    braces {} and contain key-value pairs, where keys are strings (or
    identifiers) and values can be of any data type, including other
    objects and functions.
*/

const person = {
    firstName: "Muhammed",
    lastName: "Basheer",
    age: 26,
    sayHello: function() {
        console.log("Hello world !");
    },
    address: {
        street: "street 1",
        city: "Calicut",
        zipCode: "12345"
    }
};

/*
    * here, firstName, lastName, age and address are properties
    * sayHello is a method.
*/

person.sayHello();