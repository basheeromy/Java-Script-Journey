/*
    In JavaScript, the constructor property is a property that exists
    on all objects. It references the constructor function that was
    used to create the object. It's a way to identify the constructor
    function that was responsible for creating an object.

    When you create an object using a constructor function
    (e.g., new SomeConstructor()), the constructor property of the
    newly created object is set to that constructor function.

    When you create an object using an object literal(e.g., {}) or the
    Object.create() method, the constructor property of the object
    refers to the Object constructor function by default.
*/

function Person(firstName, lastName, age) {

    // properties.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Method
    this.fullname = () => {
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person("Muhammed","Basheer",26);

console.log(person1.constructor) // [Function: Person]


// with Factory Function

function User(name,age) {
    return {
        name,
        age,
        greeting: () => {
            return `Hi, this is ${name}.`
        }
    }
}

const user = User("Athul", 23);
console.log(user.constructor); // [Function: Object]

/*
    The constructor property of objects created with a factory
    function returns [Function: Object] because factory functions
    typically create objects using the Object constructor by default.
    When you create an object literal (e.g., {}) or use Object.create(),
    the constructor property is set to Object because these methods use
    the Object constructor under the hood.

    In the above given example, the 'User' factory function returns an
    object literal. Since the object was created using inbuilt Object()
    function implicitly(Object constructor) like we happens in with
    object literals, it's 'constructor' property is set to
    '[function: Object]'.

    If you want to set the constructor property to a specific constructor
    function in a factory function,

    we can change this behaviour by manipulating the prototype object.
    see the portotype.js file to get full understanding of this.

*/

function createEmployee(name) {
    const employee = {
        name: name,
    };

    // Set the constructor property to the Person constructor
    Object.setPrototypeOf(employee, createEmployee.prototype);

    return employee;
}


const employee = createEmployee("Basheer");

console.log(employee.constructor); // Outputs: [Function: createEmployee]


// with Object literals

const staff = {
    firstName: "Muhammed",
    lastName: "Basheer",
    age: 26,
    sayHello: function() {
        console.log("Hello world !");
    }
};

// const staff = Object();

console.log(staff.constructor); // [function: Object]

