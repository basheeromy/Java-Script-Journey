/*
    Classes were implemented in JavaScript in 2015, as part of the
    ECMAScript 2015 (ES6) specification. Prior to ES6, JavaScript did
    not have native support for classes, and inheritance was implemented
    using prototypes.

    Classes provide a more concise and expressive way to implement
    object-oriented programming in JavaScript. They allow you to define
    constructors, instance methods, and static methods, as well as
    private and public properties.

    Classes in JavaScript allows us to create a blueprint and based on
    that blueprint, we can instantiate objects.

    Classes in JavaScript are different from the traditional classes in
    other Object-oriented languages like Java and C++.

    Classes are syntactic suagr of constructor functions and prototypal
    inheritance. it is not a new concept in itself.

    As we have function declaration and function expression to create
    a new function, classes also can create in this two ways.
*/

// Class declaration

class User {
    // every class should have a constructor function
    constructor(fname, lname, place){
        // properties
        this.firstName = fname;
        this.lastName = lname;
        this.place = place;

        // methods
        this.fullName = () =>  `${this.firstName} ${this.lastName}`;
    }

    // assign a method to prototype. User.prototype.gereeting
    greeting() {
        return `Hi, this is ${this.fullName()} from ${this.place}.`
    };



}

// class expression

let Seller = class {

}

let user1 = new User("Muhammed", "Basheer", "Omassery");
console.log(user1.fullName());
console.log(user1.greeting());

console.log(User.prototype.greeting)
console.log(user1) // greeting() method will not be present here.

// we can also add prototype method like we did earlier

User.prototype.testMethod = function () {
    console.log("this works smooth.");
}

user1.testMethod()

// classes cannot be hoisted.
// classes are also first class citizens as they are funcitons behind
// classes are executed in strict mode

/*
    Classes in JavaScript are not hoisted in the same way that function
    declarations are because they are a syntactical sugar over
    constructor functions and prototypes. While classes use constructor
    functions under the hood, they have a different behavior and are
    not fully equivalent to traditional constructor functions.

    Here's why classes are not hoisted like function declarations:

    Syntax Parsing:

    JavaScript engines perform a single pass of the code to parse it
    and create an execution context.

    During this parsing phase, the JavaScript engine identifies and
    registers function declarations, allowing them to be called before
    their actual placement in the code.

    Class Declarations Are Different:

    Class declarations introduce a new concept in JavaScript with a
    specific syntax, and they have a different structure from
    traditional functions.

    Class declarations create a new variable with block scope, similar
    to let and const, whereas function declarations create variables
    with function scope.

    Because classes are block-scoped, they are not hoisted to the top
    of their containing block, unlike function declarations, which are
    hoisted to the top of their containing function or script.

    Temporal Dead Zone (TDZ):

    In modern JavaScript, variables declared with let and const are
    subject to the Temporal Dead Zone (TDZ), which means they exist
    but cannot be accessed before their declaration point.

    Similarly, class declarations are also affected by the TDZ, and
    you cannot access or use them before their declaration in code.



    While classes use constructor functions and prototypes behind the
    scenes, their syntax and behavior have been introduced to provide
    a more intuitive and object-oriented way to define and work with
    objects. As a result, they have distinct rules regarding hoisting
    and scoping that are different from traditional constructor
    functions and function declarations.

    To avoid issues with class hoisting, it's a best practice to declare
    your classes before using them in your code, ensuring that the class
    is defined and available when you need it.
*/