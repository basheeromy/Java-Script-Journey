/*
    Abstraction in JavaScript, as in other programming languages, is a
    concept that involves simplifying complex reality by modeling
    classes based on the essential properties and behaviors an object
    should have, while hiding the unnecessary details. It allows you
    to focus on what an object does rather than how it does it.

    In JavaScript, abstraction is achieved through various mechanisms
    and design patterns. Here are some ways abstraction can be applied
    in JavaScript:

    Classes and Constructors: You can use classes and constructor
    functions to create abstract data types that encapsulate data and
    behavior. This is often done by defining a blueprint for objects
    and exposing a public interface while keeping the internal
    implementation hidden.

    Here we can check the functional abstraction.

*/

// createUser object constructor function.

let createUser = function (fname, lname) {
    this.firstName = fname
    this.lastName = lname
    let createfullName = function (parm1, parm2) {
        return `${parm1} ${parm2}`;
    }
    this.fullName = createfullName(this.firstName, this.lastName);
    this.greeting = function () {
        console.log(`Hi, this is ${this.fullName}`);
    }

}

// create an object with createUser constructor
user1 = new createUser("Muhammed","Basheer");

// access fullName property
console.log(user1.fullName)

user1.greeting()

// List available keys.(properties and methods)
keys = Object.keys(user1);
console.log(keys) // [ 'firstName', 'lastName', 'fullName', 'greeting' ]

/*
    Here we can see that createUser constructor function has
    three properties firstName, lastName and fullName and one method
    greeting(). but, we can see there is one more function inside the
    function createfullName(). but, it's not accessible outside the
    constructor or with the objects. by declaring without this keyword,
    we are making it hidden. this will help us for one more layer of
    encapsulation and abstraction.

    by creating local functions and variables, we can achieve a level
    of abstraction in javascript.
*/

// Using getter and setter with constructor functions.

/*
    In JavaScript, you can use getter and setter methods within
    constructor functions to control access to object properties.
    Getters and setters allow you to define custom behavior when
    reading and writing object properties, enabling you to enforce
    rules or validation logic. Here's how you can use getter and
    setter methods within a constructor function:
*/

let Product = function (name, price, discount) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    let coupen = "slkjfslkdnwen";
    Object.defineProperties(this, {
        "netPrice": {
            get: function() {
                return this.price - this.discount;
            },
            /*set: function(value) {
                netPrice = value;
            }*/
        },
        "Coupen": {
            get: function(){
                return coupen
            },
            set: function(value) {
                if( typeof value === 'string'){
                    coupen = value;
                }
                else {
                    throw new Error('Invalid Coupen!')
                };
            }
        }

});
}

pro = new Product("TestProduct", 1200, 200);
pro.netPrice = 500; // this will not work as setter function not defined.
// so, netPrice property is readOnly now.

console.log(pro.netPrice)
pro.Coupen = "this is a valid coupen"
console.log(pro.Coupen)

// pro.Coupen = 123 // Error: Invalid Coupen!

// by restricting get or set methds, we can make a property read only or write only.
