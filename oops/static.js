/*
    In JavaScript, static methods are methods that belong to a class
    rather than an instance of the class. They are called on the class
    itself, not on instances of the class. Static methods are defined
    using the static keyword within a class and can be useful for
    utility functions, factory methods, and other operations that
    don't require access to instance-specific data.
*/

class User {
    constructor(fname, lname, place){
        // properties
        this.firstName = fname;
        this.lastName = lname;
        this.place = place;

        // methods
        this.fullName = () =>  `${this.firstName} ${this.lastName}`;
    }

    // create a static method
    static greeting(){
        console.log("Hello, from User class")
    };
};

user1 = new User("Muhammed", "Basheer", "Omassery");
// user1.wish(); // user1.wish is not a function

User.greeting(); // Hello, from User class

// Static method with constructor function

let Seller = function(fname, lname, place) {
    // properties
    this.firstName = fname;
    this.lastName = lname;
    this.place = place;

    // method
    this.fullName = function () {
        return `${this.firstName} ${this.lastName}`
    }
}

// prototype method

Seller.prototype.intro = function () {
    console.log(`Hi, I'm ${this.fullName()} from ${this.place}.`);
};

Seller.greeting = function() {
    console.log("Hello, this is from Seller class.~!")
};

let salesmen = new Seller("Akhil", "Anandh", "Kunnamangalam");
salesmen.intro();
// salesmen.greeting(); // TypeError: salesmen.greeting is not a function

Seller.greeting(); // invoke static method with constructor 
