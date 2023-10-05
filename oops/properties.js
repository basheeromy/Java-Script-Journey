/*
    In JavaScript, properties are named values associated with an
    object. Objects in JavaScript can have properties, which can be
    thought of as key-value pairs, where the property name (key) is
    a string or symbol, and the property value (value) can be of any
    data type, including other objects or functions. Properties are
    used to store and access data within an object.

    There are two main ways to access properties in JavaScript:

    # Dot notation
    # Bracket notation
*/
function createUser(name, age) {
    this.name = name;
    this.age = age;
    this.greeting = function() {
        console.log('Hello world');
    }
}

user1 = new createUser("Basheer", 26);
// access data with dot notation
console.log(user1.name);
// access data with bracket notation
console.log(user1['age']);

/* Bracke notation is useful when we have to access properties dynamic
and if prorerty name contains symbols.*/

const propertyName = 'age';
console.log(user1[propertyName]);


// You can add, update, or delete properties of an object at runtime.
user1.place = "Kozhikode";
user1.age = 25;
console.log(user1.place, user1.age); // we can see that new property added now


// Enumerate Properties
// iterate

for ( let key in user1) {
    if(typeof user1[key] !== 'function'){
        console.log(key, user1[key]);
    }

}

if ('name' in user1){
    console.log('User has name');
}

let keys = Object.keys(user1);
console.log(keys);