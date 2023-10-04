/*
    In JavaScript, constructors are special functions used to create
    and initialize objects of a specific type or class. Constructors
    are often associated with object-oriented programming (OOP) prin
    ciples and are used to define the structure and behavior of obje
    cts. When you create an object using a constructor, you are crea
    ting an instance of a particular class or type.

    * Use first letter as uppercase when defining a new constructor.
    * Use new operator to create objects.
    * no return keyword inside the function

    ##
    Arrow functions can't use to define methods with prototypes.
    because, arrow functions don't have their own 'this' context.
*/

// Define a constructor function
function Person(firstName, lastName, age) {

    // properties.
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    // Method
    this.fullname = () => {
        return `${firstName} ${lastName}`;
    }
}

// Create instances using the constructor
const person1 = new Person("Muhammed", "Basheer", 26);
const person2 = new Person("Niya", "Fathima", 13);

// Access properties of the instances
console.log(person1.firstName); // "Muhammed"
console.log(person2.fullname());  // "Niya Fathima"

/*
    Prototype: Constructors can have a prototype object that allows
    you to add shared methods and properties to all instances created
    from the constructor. This promotes code reusability.

    The prototype object is a property of a constructor function

    It is a regular JavaScript object that serves as a blueprint for
    properties and methods that instances created from the constructor
    will inherit.

    Properties and methods added to the prototype object are shared
    among all instances created from that constructor

    The prototype object typically contains methods and properties that
    are meant to be shared among instances of the same type

    In JavaScript, a constructor function can have only one prototype
    object. The prototype object is shared among all instances created
    from that constructor, and it is typically used to define shared
    methods and properties that are common to all instances.

    -------------------------------------------------------------------

    ** Prototype Method

    A prototype method is a function that is added to the prototype
    object of a constructor.

    When an instance is created from the constructor, it can access
    and call prototype methods through the prototype chain

    -------------------------------------------------------------------

    ** Prototype Chain:

    Every JavaScript object has a prototype (or __proto__) property,
    which refers to another object.

    When you try to access a property or method on an object, JavaScript
    first checks if that property exists directly on the object. If it
    doesn't, it looks up the prototype chain to find it.

    This process continues recursively up the prototype chain until
    the property is found or until the root object, which is
    'Object.prototype', is reached.

    -------------------------------------------------------------------

    ** Object Prototypes:

    The 'Object.prototype' object is at the top of the prototype chain
    for most objects in JavaScript. It contains common methods and
    properties that are inherited by all objects, such as 'toString()'.

    When you create a new object, it inherits properties and methods
    from Object.prototype by default.

    -------------------------------------------------------------------

    ** Constructor Functions and Prototypes:

    Constructor functions are used to create objects with specific
    properties and methods. Each constructor function has a prototype
    property, which points to an object.

    You can add properties and methods to the constructor's prototype
    object. These properties and methods are shared among all instances
    created from that constructor.

    learn more about prototypes later.
*/

Person.prototype.getGreetings = function() {
    return `Hello, this is ${this.firstName} ${this.lastName}.`
};


console.log(person1.getGreetings()) // "Hello, this is Muhammed Basheer."