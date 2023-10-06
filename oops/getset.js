/*
    In JavaScript, getter and setter methods allow you to define
    custom behavior when accessing and modifying object properties.
    They provide control over how data is retrieved and updated within
    an object and are often used to implement data validation and
    encapsulation. Getters are used to retrieve the value of a property,
    while setters are used to assign a value to a property.
*/

const user = {
    _name: '', // prefix with an underscore to indicate a private property.
    get name() {
        console.log("Fetching name");
        return this._name;
    },
    set name(val) {
        if(val){
            this._name = val;
        }
        else {
            console.log('enter a valid name');
        }
    }
}

user.name = "Rahul";
console.log(user.name);

// the above given is the basics of getter and setter methods.
// see abstraction.js file to see another implementation.

// With class

class Seller {
    constructor(fname, lname, place, salary) {
        this.fname = fname;
        this.lname = lname;
        this.place = place;
        this.salary = salary;

        Object.defineProperty(this, 'salary', {
            get() {
                return salary
            }
        })

    }

}

seller1 = new Seller("Arun", "Kumar", "Mukkom", 50000);
seller1.salary = 1000; // this will not work.
console.log(seller1.salary);

/*
    Considerations:

    For simple cases where you have a few read-only properties, using
    getter methods within a class can be a clean and concise approach.
    (_name, _place)

    When you need stronger encapsulation and want to explicitly enforce
    read-only behavior, especially for larger and more complex objects,
    using Object.defineProperty() or Object.defineProperties() is a
    better choice.

    In summary, both methods have their merits, and the choice depends
    on your specific requirements. If you prioritize stronger
    encapsulation and want to explicitly enforce read-only behavior,
    Object.defineProperty() or Object.defineProperties() is recommended.
    However, for simple cases, using getter methods within a class can
    be a straightforward and practical choice. Ultimately, the method
    you choose should align with your coding style and the complexity
    of your project.
*/